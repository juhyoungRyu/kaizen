#for1
# n = int(input())
# value = 1
# if n > 0 :
#     for i in range(n, 1, -1):
#         value *= i
# print(value)

#for2
# n = int(input())

# result = 1
# if n > 0:
#     for i in range(1, n+1):
#         result *= i
# print(result)

# Recursive Function
def factorial(n):
    result = 1
    if n > 0 :
        result = n * factorial(n-1)
    return result

n = int(input())
print(factorial(n))