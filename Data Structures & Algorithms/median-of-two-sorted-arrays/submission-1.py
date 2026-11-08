# UNDERSTAND: Define the class expected by NeetCode.
class Solution:

    # UNDERSTAND: Find the median without merging
    # the two sorted arrays.
    def findMedianSortedArrays(
        self, nums1: list[int], nums2: list[int]
    ) -> float:

        # SAY: I'll binary search the smaller array
        # to minimize the number of comparisons.

        # UNDERSTAND: Search the shorter array because
        # binary search takes O(log(length)) time.
        if len(nums1) > len(nums2):

            # UNDERSTAND: Python swaps both arrays in one line.
            # After this, nums1 is always the smaller array.
            nums1, nums2 = nums2, nums1

        # UNDERSTAND: Get the length of each array.
        # m is smaller than or equal to n.
        m, n = len(nums1), len(nums2)

        # UNDERSTAND: Find the number of elements that
        # belong on the left side of our partition.
        # +1 gives the left side the extra element if odd.
        # Example: total=7 -> half=4.
        half = (m + n + 1) // 2

        # UNDERSTAND: Search how many elements from nums1
        # should go on the left: anywhere from 0 to m.
        left, right = 0, m

        # UNDERSTAND: Include left == right because that
        # last partition position may be correct.
        while left <= right:

            # UNDERSTAND: Try taking i elements from nums1
            # for the left half.
            i = (left + right) // 2

            # UNDERSTAND: We need 'half' elements total
            # on the left. The rest must come from nums2.
            # Example: half=4, i=2 -> j=2.
            j = half - i

            # UNDERSTAND: Get the value just LEFT of the
            # partition in nums1. If i=0, that side is empty,
            # so use -infinity as a safe boundary.
            a_left = nums1[i - 1] if i > 0 else float("-inf")

            # UNDERSTAND: Get the first value on the RIGHT
            # of nums1's partition. If i=m, nothing remains,
            # so use +infinity as the boundary.
            a_right = nums1[i] if i < m else float("inf")

            # UNDERSTAND: Same idea for nums2's left side.
            # j-1 is the last index included on the left.
            b_left = nums2[j - 1] if j > 0 else float("-inf")

            # UNDERSTAND: Get nums2's first right-side value.
            # Use +infinity if its right side is empty.
            b_right = nums2[j] if j < n else float("inf")

            # SAY: Since each array is sorted, I only
            # need to compare these four boundary values.

            # UNDERSTAND: Both cross-comparisons must hold.
            # This guarantees every left-side value is
            # <= every right-side value.
            if a_left <= b_right and b_left <= a_right:

                # SAY: The partition is valid, so I can
                # calculate the median directly.

                # UNDERSTAND: % 2 checks the remainder.
                # If total is odd, the left side has one
                # extra element, and its maximum is the median.
                if (m + n) % 2 == 1:

                    # UNDERSTAND: Pick the larger of the two
                    # left boundaries; it's the middle value.
                    return float(max(a_left, b_left))

                # UNDERSTAND: For even length, average the
                # largest left value and smallest right value.
                # / returns a float, e.g. 5 / 2 = 2.5.
                return (
                    max(a_left, b_left) +
                    min(a_right, b_right)
                ) / 2

            # SAY: If nums1's left boundary is too large,
            # I've taken too many elements from nums1.

            # UNDERSTAND: a_left belongs after b_right,
            # so move the nums1 partition toward the left.
            elif a_left > b_right:

                # UNDERSTAND: Take fewer elements from nums1.
                # i is already invalid, so exclude it.
                right = i - 1

            # SAY: Otherwise, I've taken too few elements
            # from nums1, so I'll move its partition right.

            # UNDERSTAND: b_left > a_right means a value
            # from nums2's left belongs after nums1's right.
            else:

                # UNDERSTAND: Take more elements from nums1.
                # Exclude the invalid partition at i.
                left = i + 1