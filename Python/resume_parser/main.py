"""
Resume Parser API (Google Gemini bilan)
-----------------------------------------
Foydalanuvchi PDF yoki DOCX formatidagi resume yuklaydi, tizim Google Gemini
API yordamida undan struktura qilingan ma'lumotlarni (ism, kasbi, email,
linklar, ish tajribasi, ta'lim tarixi va h.k.) chiqarib, doim bir xil JSON
shablonida qaytaradi.

Ishga tushirish:
    pip install -r requirements.txt
    cp .env.example .env   # va GEMINI_API_KEY ni kiriting
    uvicorn main:app --reload

Swagger UI: http://127.0.0.1:8000/docs
"""
from dotenv import load_dotenv

load_dotenv()  # .env faylni GEMINI_API_KEY o'qish uchun yuklaymiz

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from resume_parser import extract_resume_text
from gemini_extractor import extract_resume_data
from schemas import ResumeData

app = FastAPI(
    title="Resume Parser API (Gemini)",
    description="PDF/DOCX resume yuklab, Google Gemini API orqali struktura qilingan JSON olish",
    version="1.0.0",
)

# Frontend (masalan Vue/Nuxt) dan so'rov yuborilishi uchun CORS ochib qo'yamiz.
# Productionda allow_origins ni o'z domeningizga cheklang.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

ALLOWED_EXTENSIONS = (".pdf", ".docx")
MAX_FILE_SIZE_MB = 10


@app.get("/")
def health_check():
    return {"status": "ok", "message": "Resume Parser API (Gemini) ishlayapti"}


@app.post("/api/resume/parse", response_model=ResumeData)
async def parse_resume(file: UploadFile = File(...)):
    """
    Resume faylini (.pdf yoki .docx) qabul qiladi va undan struktura qilingan
    JSON (ResumeData shablonida) qaytaradi.
    """
    if not file.filename.lower().endswith(ALLOWED_EXTENSIONS):
        raise HTTPException(
            status_code=400,
            detail=f"Faqat quyidagi formatlar qo'llab-quvvatlanadi: {', '.join(ALLOWED_EXTENSIONS)}",
        )

    file_bytes = await file.read()

    size_mb = len(file_bytes) / (1024 * 1024)
    if size_mb > MAX_FILE_SIZE_MB:
        raise HTTPException(
            status_code=413,
            detail=f"Fayl hajmi {MAX_FILE_SIZE_MB}MB dan oshmasligi kerak.",
        )

    # 1-qadam: fayldan toza matnni chiqarib olish
    resume_text = extract_resume_text(file.filename, file_bytes)

    # 2-qadam: matnni Gemini orqali struktura qilingan JSON'ga aylantirish
    structured_data = extract_resume_data(resume_text)

    return structured_data