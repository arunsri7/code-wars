def sexy_name(name):
    s = sum(SCORES[letter] for letter in name.replace(' ', '').upper())
    if   s <= 60: return 'NOT TOO SEXY'
    elif s <= 300: return 'PRETTY SEXY'
    elif s <= 599: return 'VERY SEXY'
    else: return 'THE ULTIMATE SEXIEST'
