## While sikle 

savol = "istalgan son kiriting . kv isini hisoblap beramiz . tugatissh uchun exxitni bosing"

# qiymat = ''
# while qiymat != "exit" :
#     qiymat = input(f"{savol} son kiriting >>> ")
#     if qiymat != "exit":
#         print(float(qiymat)**2)
    
# print("dastur tugadi !!!")

#  flag

# isFlag = True

# while isFlag:
#     son = input(f"{savol} son kiriting >>> ")
#     if son.strip().lower() == "exit":
#         isFlag =  False
#     else :
#         print(float(son)**2)
# print("dastur tugadi !!!")


while True :
    qiymat = input(f"{savol} son kiriting >>> ")
    if qiymat.strip().lower() == "exit":
        break
    else :
        print(float(qiymat)**2)
print("dastur tugadi")