class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        dicts = {}
        dictt = {}
        for str in s:
            dicts[str] = dicts.get(str, 0) + 1
        for str in t:
            dictt[str] = dictt.get(str, 0) + 1
        return dicts == dictt