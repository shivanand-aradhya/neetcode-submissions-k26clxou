class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        dict = {}
        for str in s:
            dict[str] = dict.get(str, 0) + 1
        for str in t:
            dict[str] = dict.get(str, 0) - 1
        return all(val == 0 for val in dict.values())