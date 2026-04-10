# User Management App (React)

A simple React application for managing users with full CRUD functionality.  
The app fetches users from a remote API and allows creating, editing, and deleting user records.

## Features

- Fetch users from a remote API
- Display users in a list/table view
- Add new user via form
- Edit existing user data
- Delete users

## Tech Stack

- React (Hooks: useState, useEffect)
- JavaScript (ES6+)
- Fetch API / Axios
- CSS

## Installation

```bash
git clone https://github.com/Jul-svoboda/user-list.git
cd my-app
npm install
npm start
```

## Project Structure

The application is structured into reusable components:
- Users – displays list of users
- AddUser – handles creating and editing users
- User – single user component

State is managed using React hooks and lifted to parent components where needed.

## Data Handling

The application fetches initial users from a remote API.

All create, update, and delete operations are handled locally using React state (no backend persistence).


