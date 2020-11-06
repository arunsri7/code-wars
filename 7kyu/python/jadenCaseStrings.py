def to_jaden_case(string):
    willList = string.split(" ")
    jadenList = list()
    str1 = " "
    for i in willList:
        jadenList.append(i.capitalize())
    return (str1.join(jadenList))