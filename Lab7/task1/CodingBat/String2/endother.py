def end_other(a, b):
    a = a.lower()
    b = b.lower()
    return a.endswith(b) or b.endswith(a)
print(end_other('Hiabc' , 'abc'))