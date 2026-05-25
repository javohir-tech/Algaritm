cars = ["audi", "mers", "bmw", "bugatti", "porsche"]

# numbers = range(0, 10)
# number_list = list(numbers)
# print(number_list)

# toq_sonlar = list(range(1 , 20 , 2))
# print(toq_sonlar)

# juft_sonlar = list(range(0 , 20 , 2))
# print(juft_sonlar)

numbers = [1, 2, 3, 4, 5, 6]
# print(numbers[0:4])

# numbers2 = numbers[2:4]
# print(numbers2)
# print(numbers)

# print(numbers[:3])
# print(numbers[2:])

# pythonda  ham masssivlar qiymat emas reference saqlaydi 

# my_cars = cars
# my_cars = cars[:] # js dagi ...arr spreed operatori kabi 
# my_cars.append("labarchini")
# my_cars.remove("bmw")
# print(my_cars)
# print(cars)


toys = ("bus" , "car" , "bear" , "rebbit")

# print(toys[:2])
# print(sorted(toys))

# toys[0] = "mouse"
#  File "...Algaritm\python\manage.py", line 38, in <module>
#     toys[0] = "mouse"
#     ~~~~^^^
# TypeError: 'tuple' object does not support item assignment
# tuplenni qiymatlarini o'zgartirib bo'lmaydi 
# print(toys)

# print(toys.sort())
# print(toys.reverse())

toys = list(toys)
print(type(toys))
toys.append("barbie")
toys = tuple(toys)
print(toys)
print(type(toys))



