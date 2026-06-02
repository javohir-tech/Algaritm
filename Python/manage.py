def myFunction(ism : str)->str:
    """ FUnksiya haqida ma'lumot """
    return ism

# print(myFunction("salom"))
print(myFunction("javohir"))
info = myFunction.__doc__
# print(myFunction.__doc__)
print(info)