
# UNDERSTAND: Define the class expected by the platform.
class Solution:
    # UNDERSTAND: Define the method for finding the median.
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        # SAY: I'll binary search the smaller array to minimize iterations.
        # UNDERSTAND: Ensure nums1 is the smaller array.
        if len(nums1) > len(nums2):
            # UNDERSTAND: Swap arrays so binary search uses the shorter one.
            nums1, nums2 = nums2, nums1

        # UNDERSTAND: Store the size of the first array.
        m = len(nums1)
        # UNDERSTAND: Store the size of the second array.
        n = len(nums2)
        # UNDERSTAND: Calculate how many elements belong on the left, including the middle for odd totals.
        half = (m + n + 1) // 2

        # UNDERSTAND: Initialize the minimum partition position.
        left = 0
        # UNDERSTAND: Initialize the maximum partition position.
        right = m

        # SAY: I'll adjust the partition until both left-side maximums are no greater than the opposite right-side minimums.
        # UNDERSTAND: Continue while a valid partition position remains.
        while left <= right:
            # UNDERSTAND: Choose how many nums1 elements belong on the left.
            i = (left + right) // 2
            # UNDERSTAND: Fill the remaining left positions using nums2.
            j = half - i

            # UNDERSTAND: Get the last left element from nums1, or negative infinity if absent.
            Aleft = nums1[i - 1] if i > 0 else float('-inf')
            # UNDERSTAND: Get the first right element from nums1, or positive infinity if absent.
            Aright = nums1[i] if i < m else float('inf')
            # UNDERSTAND: Get the last left element from nums2, or negative infinity if absent.
            Bleft = nums2[j - 1] if j > 0 else float('-inf')
            # UNDERSTAND: Get the first right element from nums2, or positive infinity if absent.
            Bright = nums2[j] if j < n else float('inf')

            # UNDERSTAND: Check that both arrays form a correctly ordered partition.
            if Aleft <= Bright and Bleft <= Aright:
                # UNDERSTAND: Handle an odd combined number of elements.
                if (m + n) % 2 == 1:
                    # UNDERSTAND: The largest left element is the median.
                    return float(max(Aleft, Bleft))

                # UNDERSTAND: Average the two middle elements for an even total.
                return (max(Aleft, Bleft) + min(Aright, Bright)) / 2.0

            # UNDERSTAND: Detect when nums1 contributes too many elements to the left.
            elif Aleft > Bright:
                # UNDERSTAND: Move the nums1 partition to the left.
                right = i - 1
            # UNDERSTAND: Otherwise nums1 contributes too few elements to the left.
            else:
                # UNDERSTAND: Move the nums1 partition to the right.
                left = i + 1
