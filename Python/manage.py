def bahola(ismlar:list)->dict:
    baholar = {}
    while ismlar:
        ism = ismlar.pop()
        baho = input(f"{ism} ga baho  qoying >>>")
        baholar[ism] = float(baho)
        
    return baholar

talabalar: list = ["ali" , "anvar" , "abbos" , "javohir"]
print(bahola(talabalar))