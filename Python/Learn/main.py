"""
Shtrix-kod (barcode) tekshiruvchi.

EAN-13, EAN-8 va UPC-A kodlarining nazorat raqamini (check digit) hisoblab,
kod "to'g'ri" yoki "soxta/xato" ekanini aniqlaydi. Shuningdek GS1 prefiksi
bo'yicha ishlab chiqarilgan mamlakatni ko'rsatadi.

Eslatma: nazorat raqami faqat kod formatining to'g'riligini tasdiqlaydi.
Mahsulotning haqiqatan original ekanini faqat GS1 ma'lumotlar bazasi
(masalan, GEPIR) yoki ishlab chiqaruvchi orqali aniq bilish mumkin.
"""

# GS1 prefikslari (mashhur mamlakatlar, taxminiy ro'yxat): (boshi, oxiri, nomi)
GS1_PREFIXES = [
    (0, 19, "AQSH / Kanada"),
    (30, 37, "Fransiya"),
    (40, 44, "Germaniya"),
    (45, 45, "Yaponiya"),
    (46, 46, "Rossiya"),
    (47, 47, "Qirg'iziston / Tojikiston"),
    (478, 478, "O'zbekiston"),
    (487, 487, "Qozog'iston"),
    (49, 49, "Yaponiya"),
    (50, 50, "Buyuk Britaniya"),
    (54, 54, "Belgiya"),
    (57, 57, "Daniya"),
    (590, 590, "Polsha"),
    (80, 83, "Italiya"),
    (84, 84, "Ispaniya"),
    (869, 869, "Turkiya"),
    (87, 87, "Niderlandiya"),
    (880, 880, "Janubiy Koreya"),
    (690, 699, "Xitoy"),
    (978, 979, "Kitoblar (ISBN)"),
]


def calc_check_digit(data: str) -> int:
    """Nazorat raqamidan oldingi raqamlar bo'yicha check digit hisoblaydi.

    O'ngdan chapga: 3, 1, 3, 1, ... vaznlar bilan ko'paytirib yig'iladi.
    """
    total = 0
    for i, ch in enumerate(reversed(data)):
        weight = 3 if i % 2 == 0 else 1
        total += int(ch) * weight
    return (10 - total % 10) % 10


def get_country(code: str) -> str:
    """GS1 prefiksi bo'yicha mamlakatni aniqlaydi (EAN-13 uchun)."""
    if len(code) == 12:  # UPC-A = EAN-13 oldiga 0 qo'shilgan
        code = "0" + code
    if len(code) != 13:
        return "Noma'lum"
    # Eng uzun (aniq) prefiksni avval tekshiramiz
    for length in (3, 2):
        prefix = int(code[:length])
        for start, end, name in GS1_PREFIXES:
            if len(str(start)) <= length and start <= prefix <= end:
                if length == 3 and start < 100 and end < 100:
                    continue
                if length == 2 and start >= 100:
                    continue
                return name
    if 200 <= int(code[:3]) <= 299:
        return "Ichki foydalanish (do'kon kodi)"
    return "Noma'lum"


def check_barcode(code: str) -> dict:
    """Shtrix-kodni tekshiradi va natijani lug'at ko'rinishida qaytaradi."""
    code = code.strip().replace(" ", "").replace("-", "")

    if not code.isdigit():
        return {"code": code, "valid": False, "reason": "Kod faqat raqamlardan iborat bo'lishi kerak"}

    kinds = {8: "EAN-8", 12: "UPC-A", 13: "EAN-13"}
    if len(code) not in kinds:
        return {
            "code": code,
            "valid": False,
            "reason": f"Uzunligi noto'g'ri ({len(code)} ta raqam). 8, 12 yoki 13 bo'lishi kerak",
        }

    expected = calc_check_digit(code[:-1])
    actual = int(code[-1])
    valid = expected == actual

    result = {
        "code": code,
        "type": kinds[len(code)],
        "valid": valid,
        "check_digit_expected": expected,
        "check_digit_actual": actual,
    }
    if valid:
        result["country"] = get_country(code)
        result["reason"] = "Nazorat raqami to'g'ri"
    else:
        result["reason"] = f"Nazorat raqami xato (kutilgan: {expected}, kodda: {actual})"
    return result


def main():
    print("Shtrix-kod tekshiruvchi (chiqish uchun bo'sh qator kiriting)\n")
    while True:
        code = input("Shtrix-kod raqami: ").strip()
        if not code:
            break
        r = check_barcode(code)
        if r["valid"]:
            print(f"  ORIGINAL formatda ({r['type']}) | Mamlakat: {r['country']}")
        else:
            print(f"  SOXTA / XATO: {r['reason']}")
        print()


if __name__ == "__main__":
    # Tez sinov
    for test in ["4006381333931", "5901234123457", "478123456789", "4006381333932", "12345"]:
        print(test, "->", check_barcode(test))
    print()
    main()