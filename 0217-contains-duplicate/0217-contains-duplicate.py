class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashMap =  {}
        for i, n in enumerate(nums):
            if n in hashMap:
                return True
            else:
                hashMap[n] = i
        return False
                     