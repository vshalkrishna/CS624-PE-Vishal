# Input

The CoreComponents mobile application accepts a favorite course entered by the user through a TextInput field. The placeholder gives an example, CS624, to guide the entry. The app also uses a local image file stored in the assets folder. No external account, database, or network request is required to enter a course.

# Process

The application is built with React Native and an arrow-function component. The useState hook stores the entered course and updates the screen whenever the text changes. Course information is organized into three arrays: eight core courses, two depth-of-study courses, and one capstone course. Reusable View and Text components render these groups. StyleSheet and an inline style control the layout, spacing, and highlighted section headings. ScrollView allows users to navigate the complete list.

# Output

The screen displays the image, favorite-course input, entered favorite course, and all eleven courses grouped under three clearly labeled headings with their credit totals.
