def find_it(seq):
    list_set = set(seq)
    unique_list = (list(list_set)) 
    for x in unique_list: 
        if((seq.count(x))%2 != 0):
            return x
        else:
            pass
    return None