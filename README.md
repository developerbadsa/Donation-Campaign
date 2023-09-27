## Donate Campaign Website

### Overview
This is a README file for the Donate Campaign Website project. This website aims to facilitate donations and provide information about donation statistics. Below are the key features and components of this website.

### Navigation
- The website includes a consistent navbar on every page with the logo and a menu bar for easy navigation.

### Home Page
- The home page features a Hero section to grab users' attention and promote the donation campaign.
- Donation items on the home page will redirect users to the Donate page when clicked.
- The Hero section on the home page includes a search form to allow users to search for categorized donation items.

### Donate Details Page
- When users click on a donation item on the home page, they will be redirected to the Donate Details page.
- On this page, users can choose to donate a specific amount.
- When the "Donate" button is clicked, the selected donation amount will be saved to the user's local storage for future reference.

### Donation Page
- The Donation page displays the saved donation data from local storage.
- If no data is available in local storage, a message indicating "No data found" will be displayed.
- A "See More" button allows users to load more than the initial four donation items.

### Statistics Page
- The Statistics page displays donation statistics using a pie chart to provide users with insights into the campaign's progress.

By implementing these features and components, we aim to create an effective and user-friendly Donate Campaign Website that encourages donations and provides valuable information to our users.

For detailed technical information and development instructions, please refer to the project's codebase and documentation.## State Management

In this website, state management is crucial to ensure that user interactions, such as selecting courses and updating the cart, are handled smoothly. Here's an overview of how state management is implemented:

1. **JSON Data**: The website starts by loading course data from a JSON file. This data is the foundation for displaying course information.

2. **Course Cards**: Based on the JSON data, course cards are dynamically generated and displayed on the webpage. Each card includes course details and a "Select" button.

3. **Cart Management**: When you click the "Select" button on a course card, an `onClick` function is triggered. This function, defined in the `app.jsx` file, receives the course data as a parameter. It then performs the following actions:
   
   - Validates the selected course based on certain conditions (e.g., duplicate selection, credit limit).
   
   - Updates the cart section on the right side of the page with the selected course information, total price, total credit, and remaining credit.
   
   - If there are any validation issues, it displays a warning message (e.g., toast) to notify the user.

4. **Responsive Design**: The website has been designed responsively, using media queries and flexible layout techniques to ensure that it adapts well to various screen sizes, including desktop, mobile, and tablet.

By effectively managing the state of selected courses, this website provides a user-friendly experience for browsing and registering for courses. Whether you're using it on a large desktop monitor or a small mobile device, you can easily select courses and track your registration details.

We hope you find this Course Registration website convenient and user-friendly. If you have any questions or encounter any issues, please don't hesitate to reach out for assistance. Happy course registration!