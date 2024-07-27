class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        n = extraCandies
        tmp = max(candies)
        result = []
        for x in candies : 
            if x + n >= tmp:
                result.append(True)
            else :
                result.append(False)
        return result