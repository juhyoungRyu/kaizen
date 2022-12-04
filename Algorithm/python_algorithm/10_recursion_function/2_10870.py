# for
# n = int(input())

# Fibonacci = [0, 1]
# for i in range(20):
#     nextNum = Fibonacci[i] + Fibonacci[i+1]
#     Fibonacci.append(nextNum)

# print(Fibonacci[n])

# Recursion_Function
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)


n = int(input())
print(fibonacci(n))
