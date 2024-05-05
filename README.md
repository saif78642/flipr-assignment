Introduction
This project demonstrates a comprehensive setup for a Node.js application utilizing Express for routing, MongoDB for database management, and JWT for authentication. It covers essential functionalities such as user registration, login, profile updates, and checking username availability. The code is structured to follow best practices for security, maintainability, and scalability.
Prerequisites
•	Node.js installed on your machine.
•	MongoDB database setup.
•	Basic understanding of JavaScript and Node.js.
Installation
1.	Clone the repository to your local machine.
2.	Navigate to the project directory.
3.	Install the project dependencies by running npm install.
4.	Set up your .env file with the necessary environment variables, including MongoDB connection string and admin credentials.
Running the Application
1.	Start the application by running npm start or npm run dev for development mode with hot reloading.
2.	The application will start on the port specified in your environment variables or default to 8000 if not specified.
Features
•	User Registration: Allows users to register with a username, email, and password.
•	User Login: Authenticates users based on their username and password.
•	Admin Login: Provides a separate login mechanism for admin users.
•	Profile Updates: Users can update their profile information.
•	Username Availability Check: Checks if a username is already taken before registration.

