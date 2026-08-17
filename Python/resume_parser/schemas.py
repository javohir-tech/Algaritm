"""
Resume'dan chiqariladigan ma'lumotlarning qat'iy JSON strukturasi.
Har qanday shablondagi resume kelsa ham, natija doim shu formatda bo'ladi.

Bu Pydantic model Gemini API'ga to'g'ridan-to'g'ri response_schema sifatida
beriladi, shuning uchun Gemini javobni albatta shu struktura bo'yicha qaytaradi.
"""
from typing import List, Optional
from pydantic import BaseModel, Field


class WorkExperience(BaseModel):
    company: Optional[str] = Field(None, description="Kompaniya nomi")
    position: Optional[str] = Field(None, description="Lavozimi")
    start_date: Optional[str] = Field(None, description="Boshlangan sana (masalan: 2021-03 yoki 'Mart 2021')")
    end_date: Optional[str] = Field(None, description="Tugagan sana yoki 'Hozirgacha' / 'Present'")
    description: Optional[str] = Field(None, description="Ish tavsifi, vazifalari va yutuqlari")


class Education(BaseModel):
    institution: Optional[str] = Field(None, description="Ta'lim muassasasi nomi")
    degree: Optional[str] = Field(None, description="Daraja (Bakalavr, Magistr va h.k.)")
    field_of_study: Optional[str] = Field(None, description="Mutaxassislik/yo'nalish")
    start_date: Optional[str] = Field(None, description="Boshlangan sana")
    end_date: Optional[str] = Field(None, description="Tugagan sana")


class ResumeData(BaseModel):
    full_name: Optional[str] = Field(None, description="To'liq ismi")
    profession: Optional[str] = Field(None, description="Kasbi / mutaxassisligi (masalan: Backend Developer)")
    email: Optional[str] = Field(None, description="Elektron pochta manzili")
    phone: Optional[str] = Field(None, description="Telefon raqami")
    location: Optional[str] = Field(None, description="Yashash manzili / shahri")
    links: List[str] = Field(default_factory=list, description="LinkedIn, GitHub, portfolio va boshqa linklar")
    summary: Optional[str] = Field(None, description="Rezyume haqidagi qisqacha umumiy ma'lumot")
    work_experience: List[WorkExperience] = Field(default_factory=list, description="Ish tajribasi ro'yxati")
    education: List[Education] = Field(default_factory=list, description="O'qish tarixi ro'yxati")
    skills: List[str] = Field(default_factory=list, description="Ko'nikmalar (texnik va boshqa)")
    languages: List[str] = Field(default_factory=list, description="Bilgan tillari")