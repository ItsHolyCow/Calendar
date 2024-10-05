# Calendar Project

This is a simple yet functional calendar web application that allows users to register, log in, and create events on specific dates. The project uses local storage to persist user data (login and registration details) and event details, ensuring the information remains available even after refreshing the browser or closing the application.

## Features

- **User Registration**: New users can sign up by providing a username and password.
- **Login System**: Registered users can log in using their credentials to access their personalized calendar.
- **Local Storage**: User data (registration and login details) and events are stored locally on the browser using local storage. This allows users to access their data even after refreshing the page or closing the browser.
- **Add Events**: Users can select a date on the calendar and add events for that specific date. These events are also saved to local storage.
- **View Events**: Users can view all the events they have created for each date on the calendar.
- **User-Specific Events**: Events are tied to the logged-in user, so different users have their own separate events.

## Tech Stack

- **HTML/CSS**: Used for structuring and styling the interface.
- **JavaScript**: Handles the core functionality, including the registration/login system, event management, and interaction with local storage.
- **Local Storage**: A web API used to store user and event data directly in the browser.

## How It Works

### 1. Registration and Login
- Upon opening the application, users have the option to either register or log in.
- If a user is new, they can register by providing a unique username and password. These details are stored in local storage.
- Existing users can log in with their credentials, which are checked against the stored data in local storage.
  
### 2. Calendar and Events
- Once logged in, users are presented with a calendar.
- They can navigate through different months to view or add events.
- Clicking on a date allows the user to add an event by specifying the title or description of the event.
- Events are saved in local storage and associated with the specific date on which they were created.

### 3. Local Storage Management
- **Users**: User details (username and password) are stored in local storage, ensuring secure access to the personalized calendar.
- **Events**: Each event is tied to a specific user and date, ensuring that the events are private and accessible only by the logged-in user.

## File Structure

```bash
.
├── index.html         # Main page with calendar and login/registration UI
├── styles.css         # Styling for the calendar and forms
├── script.js          # Core logic for registration, login, and event handling
└── README.md          # This file
```

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/calendar-project.git
   ```
2. **Open the project**:
   - Open `index.html` in your browser to start using the calendar application.

## Usage

1. **Register**: Click the "Register" button to create a new user.
2. **Login**: Enter your registered username and password to log in.
3. **Create Events**: Select a date and add events for that specific date.
4. **View Events**: Click on any date to view the events scheduled for that day.

## Future Enhancements

- **Edit Events**: Allow users to edit events after they have been created.
- **Delete Events**: Add functionality for users to delete specific events.
- **Event Reminders**: Notify users of upcoming events through pop-ups or notifications.
- **Data Syncing**: Implement cloud storage to allow users to access their calendar across multiple devices.

## Contributing

Feel free to fork this repository and submit pull requests for new features, improvements, or bug fixes.
