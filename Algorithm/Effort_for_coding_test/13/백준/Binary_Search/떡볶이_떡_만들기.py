# def setting_height(arr, h):
#     global result
#     slice = []
#     for i in range(len(arr)):
#         if arr[i] > h:
#             slice.append(arr[i] - h)
#         else:
#             slice.append(0)

#     if sum(slice) > m:
#         setting_height(arr, h + 1)

#     elif sum(slice) == m:
#         result = h

#     else:
#         result = h - 1


# n, m = map(int, input().split())
# arr = list(map(int, input().split()))
# result = 0
# setting_height(arr, 1)

# print(result)

n, m = map(int, input().split())
arr = list(map(int, input().split()))

start = 0
end = max(arr)

result = 0
while start <= end:
    total = 0
    mid = (start + end) // 2
    for x in arr:
        if x > mid:
            total += x - mid

    if total < m:
        end = mid - 1

    else:
        result = mid
        start = mid + 1

print(result)
