#BF - Time Limit Exceeded :(
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxDiff = 0
        for p in range(len(prices) - 1):
            for n in range(p+1, len(prices)):
                diff = prices[n] - prices[p]
                maxDiff = max(maxDiff, diff)
        return maxDiff
