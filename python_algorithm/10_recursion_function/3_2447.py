# 이해가 안되서 넘긴다

# def draw_star(n) :
#     global Map
    
#     if n == 3 :
#         Map[0][:3] = Map[2][:3] = [1]*3
#         Map[1][:3] = [1, 0, 1]
#         return

#     a = n//3
#     draw_star(n//3)
#     for i in range(3) :
#         for j in range(3) :
#             if i == 1 and j == 1 :
#                 continue
#             for k in range(a) :
#                 Map[a*i+k][a*j:a*(j+1)] = Map[k][:a]
# N = int(input())      

# # 메인 데이터 선언
# Map = [[0 for i in range(N)] for i in range(N)]

# draw_star(N)

# for i in Map :
#     for j in i :
#         if j :
#             print('*', end = '')
#         else :
#             print(' ', end = '')
#     print()

# 새로운 풀이
def star(x):
    if x == 1:
        return ['*']
    x = x//3
    a = star(x)
    topBottom = [i * 3 for i in a]
    middle = [i + ' ' * x + i for i in a]
    return topBottom + middle + topBottom

n = int(input())
mystar = '\n'.join(star(n))
print(mystar)