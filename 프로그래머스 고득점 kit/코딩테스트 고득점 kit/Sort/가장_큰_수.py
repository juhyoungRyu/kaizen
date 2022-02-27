# from itertools import permutations


# num = [3, 30, 34, 5, 9]
# nn = []
# for i in num:
#     nn.append(str(i))
# per = [("").join(n) for n in permutations(nn, len(num))]
# print(max(per))

def solution(num):

    num = list(map(str, num))
    num.sort(key=lambda x: x*3, reverse=True)

    return str(int(''.join(num)))
