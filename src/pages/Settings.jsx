// src/pages/Settings.jsx
import React, { useState } from "react";
import { Button, Card } from "../components/UI";

const SettingsPage = () => {
  const [theme, setTheme] = useState("green");
  const [notifications, setNotifications] = useState({
    orderAlerts: true,
    lowStock: false,
    feedback: true,
    systemUpdates: false
  });

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    // Apply theme changes (you can implement this based on your CSS variables)
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleNotificationToggle = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const saveSettings = () => {
    // Here you would typically save settings to localStorage or backend
    localStorage.setItem('canteenSettings', JSON.stringify({
      theme,
      notifications
    }));
    alert('Settings saved successfully!');
  };

  const resetSettings = () => {
    setTheme("green");
    setNotifications({
      orderAlerts: true,
      lowStock: false,
      feedback: true,
      systemUpdates: false
    });
    document.documentElement.setAttribute('data-theme', 'green');
    alert('Settings reset to defaults!');
  };

  const themeOptions = [
    { id: "green", name: "Green Theme", description: "Default canteen theme" },
    { id: "blue", name: "Blue Theme", description: "Cool blue theme" },
    { id: "dark", name: "Dark Mode", description: "Dark theme for night use" },
    { id: "light", name: "Light Theme", description: "Bright light theme" }
  ];

  const notificationTypes = [
    { id: "orderAlerts", label: "Order Alerts", description: "Get notified for new orders" },
    { id: "lowStock", label: "Low Stock Warnings", description: "Alerts when items are running low" },
    { id: "feedback", label: "Feedback Notifications", description: "Notify when new feedback is received" },
    { id: "systemUpdates", label: "System Updates", description: "Notify about system maintenance" }
  ];

  return (
    <div className="settings-page">
      <div className="cards">
        <Card title="Theme Settings" icon="bx-palette">
          <div className="card-body">
            <p className="muted">Choose your preferred theme</p>
            <div className="theme-options">
              {themeOptions.map((option) => (
                <div 
                  key={option.id} 
                  className={`theme-option ${theme === option.id ? 'active' : ''}`}
                  onClick={() => handleThemeChange(option.id)}
                >
                  <div className={`theme-preview ${option.id}`}>
                    <div className="theme-color"></div>
                  </div>
                  <div className="theme-info">
                    <h4>{option.name}</h4>
                    <p className="muted">{option.description}</p>
                  </div>
                  {theme === option.id && (
                    <i className="bx bx-check-circle active-indicator" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card title="Notification Preferences" icon="bx-bell">
          <div className="card-body">
            <p className="muted">Manage your notification settings</p>
            <div className="notification-settings">
              {notificationTypes.map((notif) => (
                <div key={notif.id} className="notification-item">
                  <div className="notification-info">
                    <h4>{notif.label}</h4>
                    <p className="muted">{notif.description}</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={notifications[notif.id]} 
                      onChange={() => handleNotificationToggle(notif.id)}
                    />
                    <span className="slider" />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card title="Account Settings" icon="bx-user">
          <div className="card-body">
            <p className="muted">Manage your account preferences</p>
            <div className="account-settings">
              <div className="setting-item">
                <span>Language</span>
                <select defaultValue="english" className="setting-select">
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="marathi">Marathi</option>
                </select>
              </div>
              <div className="setting-item">
                <span>Time Format</span>
                <select defaultValue="12h" className="setting-select">
                  <option value="12h">12-hour (AM/PM)</option>
                  <option value="24h">24-hour</option>
                </select>
              </div>
              <div className="setting-item">
                <span>Auto Logout</span>
                <select defaultValue="30" className="setting-select">
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="never">Never</option>
                </select>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Data Management" icon="bx-data">
          <div className="card-body">
            <p className="muted">Manage your data and exports</p>
            <div className="data-actions">
              <Button variant="ghost" icon="bx-download">
                Export All Data
              </Button>
              <Button variant="ghost" icon="bx-trash">
                Clear Cache
              </Button>
              <Button variant="ghost" icon="bx-reset">
                Reset All Data
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="settings-actions">
        <Button variant="primary" icon="bx-save" onClick={saveSettings}>
          Save Settings
        </Button>
        <Button variant="ghost" icon="bx-reset" onClick={resetSettings}>
          Reset to Defaults
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;