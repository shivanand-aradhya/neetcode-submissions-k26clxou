class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left =0
        count = {}
        longest = 0
        for right, char in enumerate(s):
            count[char] = count.get(char, 0) + 1
            window_length = right - left + 1
            max_freq = max(count.values())
            while window_length - max_freq > k:
                count[s[left]]-= 1
                left+=1
                window_length = right- left +1
                max_freq = max(count.values())
            longest = max(longest, window_length)
        return longest