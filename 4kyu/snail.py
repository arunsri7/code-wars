def snail(snail_map):    
    snail_list = list()
    xbegin = 0
    xend = len(snail_map)-1
    ybegin = 0
    yend = len(snail_map[0])-1
    if len(snail_map) == 0:
        return snail_list
    while(xbegin<=xend and ybegin<=yend):
        for i in range(ybegin,yend+1):
             snail_list.append(snail_map[xbegin][i])
        xbegin = xbegin+1
        for i in range(xbegin,xend+1):
            snail_list.append(snail_map[i][yend])
        yend =yend-1
        
        if xbegin<=xend:
            for i in range(yend,ybegin-1,-1):
                snail_list.append(snail_map[xend][i])
            xend -= 1
        if ybegin<=yend:
            for i in range(xend,xbegin-1,-1):
                snail_list.append(snail_map[i][ybegin])
            ybegin += 1
    return snail_list
