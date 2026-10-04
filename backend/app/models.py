from datetime import datetime
from sqlalchemy import Column,Integer,String,Text,DateTime,Boolean
from .database import Base
class Product(Base):
    __tablename__="products"
    id=Column(Integer,primary_key=True); model=Column(String(100),unique=True,index=True); category=Column(String(50),default="Curtain Motor")
    wiring=Column(String(30)); capacity=Column(String(50)); description=Column(Text); features=Column(Text); active=Column(Boolean,default=True)
class Lead(Base):
    __tablename__="leads"
    id=Column(Integer,primary_key=True); name=Column(String(120),nullable=False); phone=Column(String(30),nullable=False); email=Column(String(150))
    window_size=Column(String(50)); curtain_type=Column(String(100)); windows=Column(Integer,default=1); preferred_control=Column(String(100)); message=Column(Text); status=Column(String(30),default="new"); created_at=Column(DateTime,default=datetime.utcnow)
