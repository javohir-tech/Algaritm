from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from config import settings

engine = create_engine(settings.database_url, echo=True)

Base = declarative_base()
Session = sessionmaker(bind=engine)
session = Session()
