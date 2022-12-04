x = []
y = []
for _ in range(3):
    inputX, inputY = map(int, input().split())
    x.append(inputX)
    y.append(inputY)

for i in range(3):
    if x.count(x[i]) == 1:
        inputX = x[i]
    if y.count(y[i]) == 1:
        inputY = y[i]
print(inputX, inputY)