class Solution:
#     def checkInclusion(self, s1: str, s2: str) -> bool:

# UNDERSTAND: Define the function to check for a permutation.
    def checkInclusion(self, s1: str, s2: str) -> bool:
        # UNDERSTAND: Store the required window length.
        n = len(s1)
        # UNDERSTAND: Store the total searchable length.
        m = len(s2)
        # UNDERSTAND: A shorter string cannot contain the permutation.
        if n > m:
            # UNDERSTAND: Return false when no window can fit.
            return False

        # SAY: I'll use two arrays of 26 counts to compare character frequencies.
        # UNDERSTAND: Track character counts required by s1.
        need = [0] * 26
        # UNDERSTAND: Track counts in the current window of s2.
        window = [0] * 26

        # UNDERSTAND: Visit every character in s1.
        for char in s1:
            # UNDERSTAND: Convert a lowercase letter to its 0–25 index and count it.
            need[ord(char) - ord('a')] += 1

        # UNDERSTAND: Build the first window with n characters.
        for i in range(n):
            # UNDERSTAND: Count the character at position i in s2.
            window[ord(s2[i]) - ord('a')] += 1

        # UNDERSTAND: Check whether the initial window is a permutation.
        if need == window:
            # UNDERSTAND: Matching frequencies mean a valid permutation exists.
            return True

        # SAY: Now I'll slide one position at a time, updating just two counts.
        # UNDERSTAND: Start at the first character after the initial window.
        for right in range(n, m):
            # UNDERSTAND: Add the new rightmost character to the window.
            window[ord(s2[right]) - ord('a')] += 1
            # UNDERSTAND: Remove the character that leaves from the left.
            window[ord(s2[right - n]) - ord('a')] -= 1

            # UNDERSTAND: Compare the updated window with the required counts.
            if need == window:
                # UNDERSTAND: Return immediately when a permutation is found.
                return True

        # UNDERSTAND: No window had matching character frequencies.
        return False

        