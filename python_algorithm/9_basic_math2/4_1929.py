# m, n = map(int, input().split())
# prime_number = []

# for num in range(m, n+1):
#     error = 0
#     if num > 1 :
#         for i in range(2,num):
#             if num % i == 0:
#                 error += 1
#                 break
#         if error == 0:
#             prime_number.append(num)
# for i in prime_number:                
#     print(i)

# Time over

m, n = map(int, input().split())

def isPrime(m, n):
    n += 1
    prime = [True] * n
    for i in range(2, int(n ** 0.5) +1 ):
        if prime[i]:
            for j in range(2 * i, n, i):
                prime[j] = False
    
    for i in range(m,n):
        if i > 1 and prime[i] == True:
            print(i)

isPrime(m,n)