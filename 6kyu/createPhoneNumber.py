 
def create_phone_number(n):
phone_number = '('
for i, num in enumerate(n):
    if i < 3:
        phone_number += str(num)
        if i == 2:
            phone_number += ') '
    elif i <= 13:
        phone_number += str(num)
        if i == 5:
            phone_number += '-'
return phone_number