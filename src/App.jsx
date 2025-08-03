// src/App.jsx

import { useState, useEffect } from "react";
import AddUserForm from "./features/usersList/AddUserForm";
import UserList from "./features/usersList/UserList";
import SelectedUserDetails from "./features/userDetails/SelectedUserDetails.jsx";

function App() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Apply theme to document root on mount and theme change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-container">
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
      <h1>User Management App</h1>
      <AddUserForm />
      <SelectedUserDetails />
      <UserList />
    </div>
  );
}

export default App;
