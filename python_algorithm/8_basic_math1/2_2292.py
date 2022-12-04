n = int(input())
num_pileup = 1
cnt = 1
while n > num_pileup:
    num_pileup += 6 * cnt
    cnt += 1
print(cnt)
