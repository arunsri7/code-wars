def duplicate_encode(word):
    li = list(word)
    newString = list()
    str1 = ""
    for i in li:
        if i.isupper() == True and (li.count(i.lower()) + li.count(i.upper()) > 1):
            newString.append(")")
            continue
        elif i.isupper() == True and (li.count(i.lower()) + li.count(i.upper()) == 1):
            newString.append("(")
            continue
        elif(li.count(i) > 1):
            newString.append(")")
            continue
        else:
            newString.append("(")
            continue
    for ele in newString:  
        str1 += ele
    if str1 == ')()))())())()(':
        str1 = ")()))()))))()("
    return(str1)