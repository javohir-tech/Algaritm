class Talaba:
    def __init__(self, name, surname, year):
        self.name = name
        self.surname = surname
        self.year = year
        
    def __str__(self):
        return f"{self.name} {self.surname} {self.year}"


talaba1 = Talaba("javohir", "suvonov", 2004)

print(talaba1.name)
print(talaba1)