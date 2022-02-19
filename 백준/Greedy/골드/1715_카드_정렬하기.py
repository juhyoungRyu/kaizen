import heapq

cards = []
res = 0

for i in range(int(input())):
    heapq.heappush(cards, int(input()))

if len(cards) == 1:
    print(0)

else:
    while len(cards) > 1:
        plus = heapq.heappop(cards) + heapq.heappop(cards)
        res += plus

        heapq.heappush(cards, plus)

    print(res)
