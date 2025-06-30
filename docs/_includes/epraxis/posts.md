# Epraxis Posts Grid Layout Logic

- **1 post:**
  - The post is highlighted (meaning excerpt, image instead of background image, button) and wide (spans both columns and two rows).

- **2 posts:**
  - Both posts are highlighted (tall style), neither is wide. They appear side by side, both tall.

- **3 posts:**
  - First post is highlighted (spans two rows), the other two are normal (not wide).

- **4 or more posts:**
  - First post is highlighted (spans two rows).
  - If the total number of posts is even, the last post is wide (spans both columns).
  - All other posts are normal (not wide).

- **Odd numbers greater than 3 (e.g., 5, 7, ...):**
  - First post is highlighted (spans two rows).
  - No post is wide; all others are normal.

