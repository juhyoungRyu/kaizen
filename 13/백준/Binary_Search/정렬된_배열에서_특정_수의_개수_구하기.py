from bisect import bisect_left, bisect_right


def count_by_range(arr, left_v, right_v):
    right_i = bisect_right(arr, right_v)
    left_i = bisect_left(arr, left_v)
    return right_i - left_i


n, x = map(int, input().split())
arr = list(map(int, input().split()))

cnt = count_by_range(arr, x, x)

if cnt == 0:
    print(-1)
else:
    print(cnt)
