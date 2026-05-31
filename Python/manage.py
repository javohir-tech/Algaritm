talabalar = ["javohir", "jasur", "abbos", "jahon"]
baholangan = {}

while talabalar :
    talaba = talabalar.pop()
    baho =  input(f"{talaba.title()} ga baho qoying >>>")
    baholangan[talaba] = baho
    print(f"{talaba.title()} baholandi")
    
print("talabalar to'liq baholandi")
print(baholangan)
print(talabalar)