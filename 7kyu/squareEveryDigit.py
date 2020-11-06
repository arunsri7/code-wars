def square_digits(num):
    Reverse = 0    
    while(num > 0):    
        Reminder = num %10    
        Reverse = (Reverse *10) + Reminder    
        num = num //10
    num = Reverse
    str1 = ""
    while num != 0:
        i = num%10
        str1 += str(i*i)
        num = int(num/10)
    return int(str1)