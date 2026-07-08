"""
ILON O'YINI (Snake Game)
-------------------------
Boshqarish: Yuqoriga/Pastga/Chapga/O'ngga strelka tugmalari (yoki W/A/S/D)
Chiqish: ESC yoki oynani yopish
O'yin qoidasi: Ilon qizil olmani yeb, uzayadi. O'ziga yoki devorga urilsa - o'yin tugaydi.

Ishga tushirish uchun terminalda:
    pip install pygame
    python ilon_oyini.py
"""

import pygame
import random
import sys

# ---------- Sozlamalar ----------
KENGLIK, BALANDLIK = 600, 400
HUJAYRA = 20  # bitta katakcha o'lchami
TEZLIK = 10   # o'yin tezligi (FPS)

# Ranglar
QORA = (15, 15, 20)
YASHIL = (0, 200, 100)
YASHIL_TOQ = (0, 140, 70)
QIZIL = (220, 60, 60)
OQ = (240, 240, 240)
KULRANG = (60, 60, 70)


class IlonOyini:
    def __init__(self):
        pygame.init()
        self.ekran = pygame.display.set_mode((KENGLIK, BALANDLIK))
        pygame.display.set_caption("Ilon O'yini")
        self.soat = pygame.time.Clock()
        self.shrift = pygame.font.SysFont("arial", 24)
        self.katta_shrift = pygame.font.SysFont("arial", 40, bold=True)
        self.yangidan_boshlash()

    def yangidan_boshlash(self):
        # Ilon boshlang'ich holati - markazda, 3 bo'g'imli
        x = KENGLIK // 2
        y = BALANDLIK // 2
        self.ilon = [(x, y), (x - HUJAYRA, y), (x - 2 * HUJAYRA, y)]
        self.yonalish = (1, 0)  # o'ngga qarab harakat
        self.keyingi_yonalish = self.yonalish
        self.olma = self.olma_joylash()
        self.hisob = 0
        self.oyin_tugadi = False

    def olma_joylash(self):
        while True:
            x = random.randrange(0, KENGLIK, HUJAYRA)
            y = random.randrange(0, BALANDLIK, HUJAYRA)
            if (x, y) not in self.ilon:
                return (x, y)

    def kirishni_qayta_ishlash(self):
        for hodisa in pygame.event.get():
            if hodisa.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            if hodisa.type == pygame.KEYDOWN:
                if hodisa.key == pygame.K_ESCAPE:
                    pygame.quit()
                    sys.exit()
                if self.oyin_tugadi and hodisa.key == pygame.K_RETURN:
                    self.yangidan_boshlash()
                    return

                if hodisa.key in (pygame.K_UP, pygame.K_w) and self.yonalish != (0, 1):
                    self.keyingi_yonalish = (0, -1)
                elif hodisa.key in (pygame.K_DOWN, pygame.K_s) and self.yonalish != (0, -1):
                    self.keyingi_yonalish = (0, 1)
                elif hodisa.key in (pygame.K_LEFT, pygame.K_a) and self.yonalish != (1, 0):
                    self.keyingi_yonalish = (-1, 0)
                elif hodisa.key in (pygame.K_RIGHT, pygame.K_d) and self.yonalish != (-1, 0):
                    self.keyingi_yonalish = (1, 0)

    def yangilash(self):
        if self.oyin_tugadi:
            return

        self.yonalish = self.keyingi_yonalish
        bosh_x, bosh_y = self.ilon[0]
        dx, dy = self.yonalish
        yangi_bosh = (bosh_x + dx * HUJAYRA, bosh_y + dy * HUJAYRA)

        # Devorga urilish
        if not (0 <= yangi_bosh[0] < KENGLIK and 0 <= yangi_bosh[1] < BALANDLIK):
            self.oyin_tugadi = True
            return

        # O'ziga urilish
        if yangi_bosh in self.ilon:
            self.oyin_tugadi = True
            return

        self.ilon.insert(0, yangi_bosh)

        if yangi_bosh == self.olma:
            self.hisob += 1
            self.olma = self.olma_joylash()
        else:
            self.ilon.pop()

    def chizish(self):
        self.ekran.fill(QORA)

        # Katakchali panjara (chiroyliroq ko'rinish uchun)
        for x in range(0, KENGLIK, HUJAYRA):
            pygame.draw.line(self.ekran, (25, 25, 30), (x, 0), (x, BALANDLIK))
        for y in range(0, BALANDLIK, HUJAYRA):
            pygame.draw.line(self.ekran, (25, 25, 30), (0, y), (KENGLIK, y))

        # Olma
        pygame.draw.rect(self.ekran, QIZIL, (*self.olma, HUJAYRA, HUJAYRA), border_radius=6)

        # Ilon
        for i, (x, y) in enumerate(self.ilon):
            rang = YASHIL if i == 0 else YASHIL_TOQ
            pygame.draw.rect(self.ekran, rang, (x, y, HUJAYRA, HUJAYRA), border_radius=4)

        # Hisob
        matn = self.shrift.render(f"Hisob: {self.hisob}", True, OQ)
        self.ekran.blit(matn, (10, 10))

        if self.oyin_tugadi:
            self.oyin_tugash_ekrani()

        pygame.display.flip()

    def oyin_tugash_ekrani(self):
        qoplama = pygame.Surface((KENGLIK, BALANDLIK), pygame.SRCALPHA)
        qoplama.fill((0, 0, 0, 180))
        self.ekran.blit(qoplama, (0, 0))

        matn1 = self.katta_shrift.render("O'YIN TUGADI", True, QIZIL)
        matn2 = self.shrift.render(f"Yakuniy hisob: {self.hisob}", True, OQ)
        matn3 = self.shrift.render("Qayta boshlash uchun ENTER bosing", True, KULRANG)

        self.ekran.blit(matn1, matn1.get_rect(center=(KENGLIK // 2, BALANDLIK // 2 - 40)))
        self.ekran.blit(matn2, matn2.get_rect(center=(KENGLIK // 2, BALANDLIK // 2 + 10)))
        self.ekran.blit(matn3, matn3.get_rect(center=(KENGLIK // 2, BALANDLIK // 2 + 50)))

    def ishga_tushirish(self):
        while True:
            self.kirishni_qayta_ishlash()
            self.yangilash()
            self.chizish()
            self.soat.tick(TEZLIK)


if __name__ == "__main__":
    oyin = IlonOyini()
    oyin.ishga_tushirish()