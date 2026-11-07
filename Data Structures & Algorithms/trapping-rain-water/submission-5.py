class Solution:
    def trap(self, height: list[int]) -> int:

        # UNDERSTAND: Get the number of bars.
        n = len(height)

        # UNDERSTAND: If there are fewer than 3 bars, water cannot
        # be trapped because we need a left and a right boundary.
        if n < 3:

            # UNDERSTAND: Return zero because no enclosed space exists.
            return 0

        # UNDERSTAND: Store the tallest bar at or before each index.
        left_max = [0] * n

        # UNDERSTAND: Store the tallest bar at or after each index.
        right_max = [0] * n

        # UNDERSTAND: At index 0, the tallest left-side bar is itself.
        left_max[0] = height[0]

        # UNDERSTAND: At the last index, the tallest right-side bar is itself.
        right_max[n - 1] = height[n - 1]

        # UNDERSTAND: Build the left maximums from left to right,
        # starting at 1 because index 0 is already initialized.
        for i in range(1, n):

            # UNDERSTAND: Either the previous left maximum is taller,
            # or the current bar becomes the new maximum.
            left_max[i] = max(left_max[i - 1], height[i])

        # UNDERSTAND: Build the right maximums from right to left.
        # range(n-2, -1, -1) visits n-2 down to 0.
        # -1 is excluded, so index 0 is included.
        for i in range(n - 2, -1, -1):

            # UNDERSTAND: Compare the current bar against the tallest
            # bar already found to its right.
            right_max[i] = max(right_max[i + 1], height[i])

        # UNDERSTAND: Accumulate trapped water across all positions.
        total = 0

        # UNDERSTAND: Visit every bar to calculate its water.
        for i in range(n):

            # UNDERSTAND: The shorter of the two tallest boundaries
            # determines the highest possible water level.
            water_level = min(left_max[i], right_max[i])

            # UNDERSTAND: Subtract the current bar's height because
            # the bar itself occupies part of the available space.
            total += water_level - height[i]

        # UNDERSTAND: Return the total water accumulated.
        return total