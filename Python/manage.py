car = {"marka": "porsche", "model": "911" }
print(car["marka"])

car['color'] = "red"

del car['model']

print(car)

# print(car['year'])

# errorni oldini olish get()
print(car.get("year"))