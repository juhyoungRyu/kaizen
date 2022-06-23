def solution(n, lost, reverse):

    lost = sorted(lost)
    reverse = sorted(reverse)

    for i in range(len(reverse)):
        if reverse[i] in lost:
            lost.remove(reverse[i])
            reverse[i] = -1

    ans = n - len(lost)
    while lost:
        u = lost[0]
        for i in range(len(reverse)):
            if reverse[i] == (u - 1) or reverse[i] == (u + 1):
                ans += 1
                reverse[i] = -1
                break
        lost.remove(lost[0])
    return ans


n = 5
lost = [2, 4]
reverse = [1, 2, 5]

print(solution(n, lost, reverse))
