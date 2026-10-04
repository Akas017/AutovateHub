import json
from .database import Base,engine,SessionLocal
from .models import Product
data=[
("DT-52-ENSW 75/20","3-Wire","Up to 100 kg","Heavy-duty smart curtain motor.","Remote|Dooya Connector / App|Alexa & Siri|Soft Touch|One Touch"),
("DT-72-TVLSW","5-Wire","Up to 100 kg","Smart curtain motor with third-party automation.","Remote|App|Alexa & Siri|Soft Touch|Third-party automation|Switching"),
("DT-72-TVL(S)","5-Wire","Up to 100 kg","Motorized curtain solution with automation support.","Remote|Third-party automation|Switching"),
("DT-72-TVWL","5-Wire","Up to 100 kg","Smart curtain motor with Zigbee and Smart Life.","Remote|Zigbee|Smart Life App|Smart-home integration")]
Base.metadata.create_all(engine); db=SessionLocal()
if db.query(Product).count()==0:
    for m,w,c,d,f in data: db.add(Product(model=m,wiring=w,capacity=c,description=d,features=json.dumps(f.split("|"))))
    db.commit()
db.close()
