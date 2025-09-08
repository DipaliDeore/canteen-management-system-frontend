// src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Layout Components
import { Sidebar, Navbar, HeaderCrumbs } from "./components/Layout";

// Dashboard Pages
import {
  DashboardPage,
  MenuItemsPage,
  MessPlansPage,
  CouponsPage,
  UsersPage,
  PurchasesPage,
  TimetablePage,
  SettingsPage
} from "./pages";

// Public Pages
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import AboutUs from './pages/AboutUs';
import LandingPage from './pages/LandingPage';
import Feedback from './pages/Feedback';
import FeedbackPage from "./pages/FeedbackUser";
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/ContactUs';
import Services from './pages/Services';
import SubscriptionPlans from './pages/SubscriptionPlans';

import "./styles/App.css";
import "./styles/Layout.css";
import "./styles/Components.css";

function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  useEffect(() => {
    const savedSettings = localStorage.getItem('canteenSettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      document.documentElement.setAttribute('data-theme', settings.theme || 'green');
    } else {
      document.documentElement.setAttribute('data-theme', 'green');
    }

    const bx = document.createElement("link");
    bx.rel = "stylesheet";
    bx.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    document.head.appendChild(bx);

    const fonts = document.createElement("link");
    fonts.rel = "stylesheet";
    fonts.href = "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap";
    document.head.appendChild(fonts);

    return () => {
      document.head.removeChild(bx);
      document.head.removeChild(fonts);
    };
  }, []);

  const menu = [
    { key: "Dashboard", icon: "bxs-dashboard" },
    { key: "Menu Items", icon: "bx-restaurant" },
    { key: "Mess Plans", icon: "bx-calendar-week" },
    { key: "Coupons", icon: "bx-purchase-tag-alt" },
    { key: "Feedback", icon: "bx-message-dots" },
    { key: "Users", icon: "bx-user" },
    { key: "Purchases", icon: "bx-cart" },
    { key: "Weekly Timetable", icon: "bx-calendar" },
    { key: "Settings", icon: "bxs-cog" },
  ];

  const renderPage = () => {
    switch (active) {
      case "Dashboard": return <DashboardPage />;
      case "Menu Items": return <MenuItemsPage />;
      case "Mess Plans": return <MessPlansPage />;
      case "Coupons": return <CouponsPage />;
      case "Feedback": return <FeedbackPage />;
      case "Users": return <UsersPage />;
      case "Purchases": return <PurchasesPage />;
      case "Weekly Timetable": return <TimetablePage />;
      case "Settings": return <SettingsPage />;
      default: return <DashboardPage />;
    }
  };

  return (
    <div className="App">
      <Sidebar 
        collapsed={collapsed} 
        menu={menu} 
        active={active} 
        setActive={setActive} 
      />
      
      <section id="content" className={collapsed ? "content-collapsed" : ""}>
        <Navbar 
          collapsed={collapsed} 
          setCollapsed={setCollapsed} 
          active={active} 
        />
        
        <main>
          <HeaderCrumbs title={active} />
          {renderPage()}
        </main>
      </section>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/subscribe" element={<SubscriptionPlans />} />

      {/* Dashboard Route */}
      <Route path="/dashboard/*" element={<DashboardLayout />} />

      {/* Catch-all Route */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
