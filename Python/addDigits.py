def addDigits(num):
    # print(type(num))
    if num % 10 == num:
        return num

    numbers = []

    while num != 0:
        temp_num = num % 10
        numbers.append(temp_num)
        num = (num - temp_num) / 10

    sum = 0
    for n in numbers:
        sum += n
        
    if sum %  10 != sum :
        return addDigits(int(sum))
    # print(type(sum))
    return int(sum)

num = 38
print(addDigits(num))