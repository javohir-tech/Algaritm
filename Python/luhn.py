def luhn(card_number):
    digits = [int(d) for d in card_number.replace(" ", "")]

    total = 0

    # print(digits)
    for i, digit in enumerate(digits):
        if i % 2 == 0:
            doupled = digit * 2
            total += doupled - 9 if doupled else doupled
        else:
            total += doupled
    return (10 - (total % 10)) % 10


card_number = "9860350147244205"

# luhn(card_number)
print(luhn(card_number))

# print(card_number.replace("5",  "2"))
