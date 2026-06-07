# def summa(*sonlar):
#     yigindi = 0
#     for son in sonlar:
#         yigindi += son
#     return yigindi


# print(summa(1, 2, 3, 5))


# error sabab funksiyaga uzatilgan argumantlar tuple bolip  ishlaydi 
def myFunction(*sonlar):
    sonlar.push(2)
    return sonlar


print(myFunction(1, 2, 3, 4))
