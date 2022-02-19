def solution(n, lost, reverse):
    ans = n - len(lost)
    while lost:
        u = lost[0]
        
        lost.remove(lost[0])
    return ans


n = 5
lost = [2, 4]
reverse = [1, 3, 5]

print(solution(n, lost, reverse))
