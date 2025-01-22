Google Calendar Events Display App:
This web application allows users to log in using their Google account (SSO login) and view their upcoming Google Calendar events. The app fetches calendar events after a successful login and displays them in a table format. Additionally, it includes a filter functionality to allow users to filter events by date.

Features
1. SSO Login with Google
Users can log in securely with their Google account using Single Sign-On (SSO).
The Google OAuth 2.0 authentication flow is implemented using the @react-oauth/google library.
2. Display Google Calendar Events
Once logged in, the app fetches the user's Google Calendar events.
Events are displayed in a table format, with the most recent events shown at the top.
The app retrieves events using the Google Calendar API after the user has authenticated.
3. Filter Functionality
Users can filter their calendar events by date.
The filter allows users to view events on a specific date by selecting it from a calendar or entering the date.
4. UI/UX
The app is designed to be simple and user-friendly, with a focus on providing a smooth user experience.
Buttons for "Login" and "Sign Out" are displayed based on the user's authentication status.
Event data is displayed in a clean, readable format, and the app is responsive.

Current Status:
Google OAuth Login: Working perfectly, users can authenticate via their Google accounts.
Event Fetching: Currently, there are issues with fetching the events from the Google Calendar API. We are working on fixing the API integration to retrieve and display events correctly.
Event Display: Events are not being displayed yet due to the current issue with fetching them, but this will be resolved in a future update.
Filter Functionality: The filter functionality is implemented, but since events are not being fetched yet, the filter will not work until the event fetching issue is fixed.

Installation:
Clone the repository: https://github.com/MoHiTKuKrEjA11/White-carrot.git
Navigate into the project directory: cd white-carrot
Install the required dependencies: npm i
Run the project: npm run dev