class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:

        # SAY: I'll sort the array so I can use two pointers.

        # UNDERSTAND: Sort the original list in ascending order.
        # Example: [-1, 0, 1, 2, -1, -4]
        # becomes [-4, -1, -1, 0, 1, 2].
        nums.sort()

        # UNDERSTAND: Store all the unique triplets we discover.
        result = []

        # UNDERSTAND: Fix one element at index i.
        # Stop at len(nums)-3 because we need two elements after i.
        # range() excludes its ending value.
        for i in range(len(nums) - 2):

            # UNDERSTAND: If the current fixed number equals the
            # previous fixed number, we would repeat triplets
            # already considered, so skip it.
            if i > 0 and nums[i] == nums[i - 1]:

                # UNDERSTAND: Move to the next fixed-number candidate.
                continue

            # UNDERSTAND: Because the array is sorted, if our
            # fixed number is positive, the two later numbers
            # cannot produce a sum of zero.
            if nums[i] > 0:

                # UNDERSTAND: Stop the outer loop completely.
                break

            # SAY: For each fixed number, I'll solve Two Sum II
            # on the remaining elements to its right.

            # UNDERSTAND: Begin immediately after the fixed index.
            # This guarantees we don't reuse the fixed element.
            left = i + 1

            # UNDERSTAND: Start the other pointer at the last element.
            right = len(nums) - 1

            # UNDERSTAND: Search while left and right are distinct.
            while left < right:

                # UNDERSTAND: Calculate the sum of all three numbers.
                total = nums[i] + nums[left] + nums[right]

                # UNDERSTAND: If the sum is too small, we need
                # a larger number. The sorted order lets us
                # move the left pointer right.
                if total < 0:

                    # UNDERSTAND: Move to a larger or equal value.
                    left += 1

                # UNDERSTAND: If the sum is too large, we need
                # a smaller number, so move the right pointer.
                elif total > 0:

                    # UNDERSTAND: Move to a smaller or equal value.
                    right -= 1

                # UNDERSTAND: Otherwise total equals zero.
                # We found a valid triplet.
                else:

                    # SAY: I found a valid combination. I'll add it
                    # and skip duplicates before looking for another.

                    # UNDERSTAND: Save the three values, not indexes.
                    result.append([nums[i], nums[left], nums[right]])

                    # UNDERSTAND: Move inward after recording the pair.
                    left += 1

                    # UNDERSTAND: Move the right pointer inward too.
                    right -= 1

                    # UNDERSTAND: Skip duplicate values on the left.
                    # nums[left-1] is the value we just processed.
                    # Keep skipping while the new value matches it.
                    while left < right and nums[left] == nums[left - 1]:

                        # UNDERSTAND: Move past this repeated value.
                        left += 1

                    # UNDERSTAND: Skip duplicate values on the right.
                    # nums[right+1] is the value we just processed.
                    while left < right and nums[right] == nums[right + 1]:

                        # UNDERSTAND: Move past this repeated value.
                        right -= 1

        # UNDERSTAND: Return every unique triplet found.
        return result