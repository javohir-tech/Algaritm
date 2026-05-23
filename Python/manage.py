mevalar =  ["olma" , "banan" , "olcha" , "gilos" , "nok"]

# malumot qo'shish 

mevalar.append("anor")
# print(mevalar)

# malumotni o'zgartirish

mevalar.insert(1 , "mango")

# print(mevalar)

cars = ["malibu" , "nexia" , "lacetti" , "tracker" , "malibu"]

# malumotni o'chirish

del cars[1]

# print(cars)

remove_car = cars.remove("malibu")

# print(remove_car) # NONE birinchisini ochiradi 
# print(cars)

# malumotni sug'urip olish

bozorlik = ["yog'" , "non" , "choy" , "shakar"]

# olingan mahsulot indeksi kiritilganda 
# olindi = bozorlik.pop(1) 

# print(olindi)
# print(bozorlik)

# olingan mahsulot indeksi yozilmaganda 
# olindi = bozorlik.pop()
# print(olindi)
# print(bozorlik)

# oxirgi elementni tanlap olish 
# print(bozorlik[-1])


# * listni ochadi 

list_1 = ["salom" , "alik"]
list_2 = ["olma"]

birikish = [*list_1 , list_2]
# print(birikish)
