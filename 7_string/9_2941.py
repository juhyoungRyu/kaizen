t = input()
croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]
for i in croatia:
    t = t.replace(i, "*")
print(len(t))