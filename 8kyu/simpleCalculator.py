def calculator(x,y,op):
    sign_list = ["+","-","*","/"]
    if(op in sign_list and isinstance(x, (int, float)) and isinstance(y, (int, float))):
        if(op=="+"):
            return x+y
        elif(op=="-"):
            return x-y
        elif(op=="*"):
            return x*y
        elif(op=="/"):
            return x/y
    return "unknown value"