import os,json
from fastapi import FastAPI,Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel,EmailStr
from sqlalchemy.orm import Session
from .database import Base,engine,get_db
from .models import Product,Lead
Base.metadata.create_all(engine)
app=FastAPI(title="Autovate Hub API",version="1.0")
app.add_middleware(CORSMiddleware,allow_origins=os.getenv("CORS_ORIGINS","http://localhost:5173").split(","),allow_credentials=True,allow_methods=["*"],allow_headers=["*"])
class LeadIn(BaseModel):
    name:str; phone:str; email:EmailStr|None=None; window_size:str|None=None; curtain_type:str|None=None; windows:int=1; preferred_control:str|None=None; message:str|None=None
@app.get("/api/health")
def health(): return {"status":"ok"}
@app.get("/api/products")
def products(db:Session=Depends(get_db)):
    return [{**{k:getattr(p,k) for k in ["id","model","category","wiring","capacity","description"]},"features":json.loads(p.features or "[]")} for p in db.query(Product).filter(Product.active==True).all()]
@app.post("/api/leads",status_code=201)
def lead(x:LeadIn,db:Session=Depends(get_db)):
    p=Lead(**x.model_dump()); db.add(p); db.commit(); db.refresh(p); return {"message":"Quote request received","id":p.id}
@app.get("/api/leads")
def leads(db:Session=Depends(get_db)): return db.query(Lead).order_by(Lead.created_at.desc()).all()
@app.post("/api/quotes/calculate")
def quote(q:dict):
    s=sum(int(q.get(k,0)) for k in ["motor","remote","track","installation","delivery"]); g=round(s*int(q.get("gst_percent",18))/100)
    return {"subtotal":s,"gst_amount":g,"grand_total":s+g}
