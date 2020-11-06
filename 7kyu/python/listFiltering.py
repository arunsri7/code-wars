def filter_list(l):
    l1 = list()
    for i in l:
        if(isinstance(i, int)):
            l1.append(i)
    return l1
    