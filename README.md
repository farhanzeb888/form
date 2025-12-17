Form Application with Validation & Authentication
A professional form application featuring client-side validation, authentication system, and persistent data storage using Local Storage.

🌟 Features
🔐 Authentication System
User registration with password confirmation
![Screenshot_17-12-2025_93240_](https://github.com/user-attachments/assets/b0b05b5b-e79c-49af-b865-0ece981d1b70)

Secure login/logout functionality
![Screenshot_17-12-2025_93240_](https://github.com/user-attachments/assets/89df2a86-18b4-4b56-bc2a-8c1ed77e2637)

Session management using Local Storage
![Screenshot_17-12-2025_94151_](https://github.com/user-attachments/assets/a8759f84-480e-4bf6-b3dc-df325df5127b)
<img width="950" height="404" alt="image" src="https://github.com/user-attachments/assets/c3dc866e-9ca7-474b-b450-a9d389e1acd4" />

✅ Form Validation
Real-time client-side validation

Custom validation rules for each field

User-friendly error messages

Form submission validation

💾 Data Management
Persistent data storage using Local Storage

CRUD operations for form data

Data retrieval and display

Secure data handling

🎨 User Experience
Clean, responsive interface

Intuitive form design

Loading states and feedback

Error handling and user notifications

🛠️ Technologies Used
HTML5 - Semantic markup

CSS3 - Styling and responsive design

JavaScript (ES6+) - Core functionality

Local Storage API - Client-side data persistence

Git - Version control

📋 Prerequisites
Modern web browser (Chrome 80+, Firefox 75+, Safari 13+)

Local development server (optional)

Text editor or IDE

🚀 Installation & Setup
Method 1: Direct Usage
Clone the repository:

bash
git clone https://github.com/farhanzeb888/form.git
Navigate to project directory:

bash
cd form
Open index.html in your browser:

bash
# Using Python (if installed)
python -m http.server 8000

# Or simply double-click index.html
Method 2: Development Setup
Fork the repository

Clone your forked version:

bash
git clone https://github.com/YOUR-USERNAME/form.git
Make changes and test locally

Push to your repository

📁 Project Structure
text
form/
├── index.html          # Main entry point
├── style.css          # Stylesheet
├── script.js          # Main JavaScript logic
├── README.md          # This documentation
└── assets/            # Additional resources (optional)
    ├── images/
    └── icons/
🔧 Usage Guide
1. Registration
Navigate to the registration page

Fill in required details (username, email, password)

Submit the form

You will be redirected to login page

2. Login
Enter your credentials

Successful login redirects to dashboard

Invalid credentials show appropriate errors

3. Form Operations
Create: Fill out the form and submit

Read: View submitted forms in dashboard

Update: Edit existing form entries

Delete: Remove form entries as needed

4. Logout
Click logout button

Session is cleared

Redirected to login page

📝 Form Validation Rules
Required Fields
All fields marked with asterisk (*) are mandatory

Proper error messages for empty fields

Email Validation
Valid email format (user@domain.com)

Real-time format checking

Password Validation
Minimum 8 characters

At least one uppercase letter

At least one number

At least one special character

Custom Validations
Username availability

Password confirmation match

Phone number format

Date validation

🔐 Security Features
Password hashing (simulated)

Session timeout (configurable)

Input sanitization

XSS protection

CSRF tokens (conceptual)

🗄️ Local Storage Structure
javascript
// User Data
localStorage.setItem('users', JSON.stringify([
  { id, username, email, password }
]));

// Session Management
localStorage.setItem('currentUser', JSON.stringify(user));

// Form Data
localStorage.setItem('forms', JSON.stringify([
  { id, userId, formData, timestamp }
]));
🧪 Testing
Manual Testing
Test all form validations

Verify authentication flow

Check data persistence

Test responsive design

Verify error handling

Browser Compatibility
Chrome: ✓ Fully supported

Firefox: ✓ Fully supported

Safari: ✓ Fully supported

Edge: ✓ Fully supported

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the project

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add AmazingFeature')

Push to branch (git push origin feature/AmazingFeature)

Open a Pull Request

Contribution Guidelines
Follow existing code style

Add comments for complex logic

Update documentation as needed

Test thoroughly before submitting

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Farhan Zeb

GitHub: @farhanzeb888

Project Link: https://github.com/farhanzeb888/form
