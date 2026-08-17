"""
Resume matnini Google Gemini API yordamida struktura qilingan JSON'ga aylantirish.

Muhim nuqta: Gemini'ga response_schema sifatida to'g'ridan-to'g'ri Pydantic
model (ResumeData) beriladi va response_mime_type="application/json" qilib
belgilanadi. Shu sababli Gemini javobni albatta shu struktura bo'yicha
qaytaradi va qaysi shablondagi resume kelmasin, natija formati bir xil bo'ladi.
"""
import os
from google import genai
from google.genai import types
from fastapi import HTTPException

from schemas import ResumeData

_client: genai.Client | None = None


def get_client() -> genai.Client:
    global _client
    if _client is None:
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            raise HTTPException(
                status_code=500,
                detail="GEMINI_API_KEY sozlanmagan. .env faylga API kalitni qo'shing.",
            )
        _client = genai.Client(api_key=api_key)
    return _client


SYSTEM_PROMPT = (
    "Siz resume/CV matnlaridan aniq va struktura qilingan ma'lumot chiqarib oluvchi "
    "yordamchisiz. Faqat berilgan matnda mavjud bo'lgan ma'lumotlarni ishlating, "
    "hech narsani o'ylab topmang (hallucination qilmang). Agar biror maydon uchun "
    "ma'lumot topilmasa, uni null yoki bo'sh ro'yxat ([]) qilib qoldiring."
)


def extract_resume_data(resume_text: str) -> dict:
    client = get_client()
    model = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")

    try:
        response = client.models.generate_content(
            model=model,
            contents=f"Quyidagi resume matnidan ma'lumotlarni chiqarib oling:\n\n{resume_text}",
            config=types.GenerateContentConfig(
                system_instruction=SYSTEM_PROMPT,
                response_mime_type="application/json",
                response_schema=ResumeData,
            ),
        )
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Gemini API xatoligi: {str(e)}")

    parsed = response.parsed

    if parsed is None:
        raise HTTPException(
            status_code=502,
            detail="Gemini'dan struktura qilingan javob olinmadi.",
        )

    # parsed allaqachon ResumeData instansiyasi - yana bir karra validatsiya
    # bilan JSON strukturasi doim bir xilligiga kafolat beramiz.
    if isinstance(parsed, ResumeData):
        validated = parsed
    else:
        validated = ResumeData(**parsed)

    return validated.model_dump()