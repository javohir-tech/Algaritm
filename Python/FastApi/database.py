from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base , sessionmaker

engine = create_engine("postgresql//:anonim:1234@localhost/delivary" , echo=True)

Base = declarative_base()
Session = sessionmaker()