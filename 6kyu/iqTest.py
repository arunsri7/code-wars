def iq_test(numbers):
    numbers = [int(x) for x in numbers.split()]
    even_list = list()
    odd_list = list()
    for i in numbers:
        i = int(i)
        if(i%2==0):
            even_list.append(i)
        else:
            odd_list.append(i)
    numbers.insert(0,0)
    if len(odd_list) == 1:
        return numbers.index(odd_list[0])
    if len(even_list) == 1:
        return numbers.index(even_list[0])