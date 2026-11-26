class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        # UNDERSTAND: len() returns the number of characters.
        # Similar to s.length in JavaScript.
        # Anagrams must contain the same total number of characters.
        # Different lengths immediately prove they are not anagrams.
        if len(s) != len(t):
            return False

        # UNDERSTAND: {} creates an empty Python dictionary.
        # Keys represent characters and values represent frequencies.
        # Similar to a JavaScript Map.
        count = {}

        # UNDERSTAND: Python iterates directly over each character.
        # For "racecar", char becomes 'r', 'a', 'c', etc.
        # No index variable is required.
        for char in s:

            # UNDERSTAND: get(char, 0) retrieves the existing frequency.
            # If the character doesn't exist, it returns the default 0.
            # Adding 1 counts the current occurrence.
            # count[char] stores the updated frequency.
            # Example: {'r': 1} becomes {'r': 2}
            # when another 'r' is encountered.
            count[char] = count.get(char, 0) + 1

        # UNDERSTAND: After counting "racecar", the dictionary is:
        # {'r': 2, 'a': 2, 'c': 2, 'e': 1}
        # Now iterate through t to consume these stored occurrences.
        for char in t:

            # UNDERSTAND: 'not in' checks whether a dictionary key is absent.
            # If char is missing, it never appeared in the first string.
            # Python's 'or' short-circuits, so count[char] is not
            # evaluated when the key is missing, preventing a KeyError.
            # A count of 0 means all available occurrences were consumed.
            # Either condition proves that the strings cannot be anagrams.
            if char not in count or count[char] == 0:

                # UNDERSTAND: Immediately terminate the entire function.
                # Processing additional characters cannot fix the mismatch.
                return False

            # UNDERSTAND: -= 1 is shorthand for
            # count[char] = count[char] - 1.
            # Consume one matching occurrence from the dictionary.
            # Example: {'c': 2} becomes {'c': 1}.
            count[char] -= 1

        # UNDERSTAND: Both strings have equal lengths, and every
        # character in t successfully consumed an occurrence from s.
        # Therefore, all remaining frequencies must be zero.
        # No additional dictionary traversal is necessary.
        # Two empty strings also correctly reach this return statement.
        return True