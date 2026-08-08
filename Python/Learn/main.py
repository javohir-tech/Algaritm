def counter():
    print("boshlandi")
    yield 1
    print("1 dan keyin")
    yield 2
    print("2 dan keyin")


gen = counter()


print(next(gen))
print(next(gen))
