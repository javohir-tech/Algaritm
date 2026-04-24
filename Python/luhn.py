def luhn(card_number):
    digits = [int(d) for d in card_number.replace(" ", "")]
    digits.reverse()
    total = 0

    for i, digit in enumerate(digits):
        if i % 2 == 1: 
            doubled = digit * 2
            total += doubled - 9 if doubled > 9 else doubled
        else:
            total += digit 

    return (10 - (total % 10)) % 10


card_number = "9860350147244205"

# luhn(card_number)
print(luhn(card_number))

# print(card_number.replace("5",  "2"))
