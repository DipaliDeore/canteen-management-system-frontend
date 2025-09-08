// src/pages/Feedback.jsx
import React, { useState, useEffect } from "react";

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('newest'); // 'newest', 'highest', 'lowest'

  const API_BASE_URL = 'http://localhost:5000/api';

  // Fetch feedbacks on component mount
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_BASE_URL}/feedback`);
      if (!response.ok) {
        throw new Error('Failed to fetch feedback. Please check if the server is running.');
      }
      
      const data = await response.json();
      setFeedbacks(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching feedbacks:', err);
    } finally {
      setLoading(false);
    }
  };

  // Sort feedbacks based on selected option
  const sortedFeedbacks = [...feedbacks].sort((a, b) => {
    switch (sortBy) {
      case 'highest':
        return b.rating - a.rating; // Highest rating first
      case 'lowest':
        return a.rating - b.rating; // Lowest rating first
      case 'newest':
      default:
        // Handle both created_at and timestamp formats
        const dateA = a.created_at ? new Date(a.created_at) : new Date(a.timestamp || 0);
        const dateB = b.created_at ? new Date(b.created_at) : new Date(b.timestamp || 0);
        return dateB - dateA; // Newest first
    }
  });

  const renderStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    
    try {
      return new Date(dateString).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch (error) {
      return 'Invalid Date';
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading">
          <i className="bx bx-loader-circle bx-spin"></i>
          <p>Loading feedbacks...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error">
          <i className="bx bx-error-circle"></i>
          <h3>Error Loading Feedbacks</h3>
          <p>{error}</p>
          <button onClick={fetchFeedbacks} className="btn primary">
            <i className="bx bx-refresh"></i>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <div className="header-left">
          <h3>
            <i className="bx bx-message-dots" /> Customer Feedback
          </h3>
          <span className="feedback-count">({feedbacks.length} feedbacks)</span>
        </div>
        
        <div className="sort-controls">
          <label>Sort by:</label>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="newest">Newest First</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
          
          <button onClick={fetchFeedbacks} className="btn ghost refresh-btn">
            <i className="bx bx-refresh"></i>
            Refresh
          </button>
        </div>
      </div>

      {feedbacks.length === 0 ? (
        <div className="empty-state">
          <i className="bx bx-message-square-dots"></i>
          <h4>No Feedback Yet</h4>
          <p>No customer feedback has been submitted yet.</p>
        </div>
      ) : (
        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Feedback List</h3>
              <i className="bx bx-search" />
              <i className="bx bx-filter" />
            </div>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Category</th>
                  <th>Rating</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {sortedFeedbacks.map((feedback, index) => (
                  <tr key={feedback.id || index}>
                    <td>
                      <div className="user-info">
                        <img
                          alt={feedback.name}
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(feedback.name)}&background=random`}
                          className="user-avatar"
                        />
                        <div className="user-details">
                          <p className="user-name">{feedback.name}</p>
                          <p className="user-email">{feedback.email}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="category-badge">{feedback.category}</span>
                    </td>
                    <td>
                      <div className="rating-display">
                        <span className="stars">{renderStars(feedback.rating)}</span>
                        <span className="rating-number">({feedback.rating}/5)</span>
                      </div>
                    </td>
                    <td>
                      <div className="feedback-message">
                        {feedback.feedback}
                      </div>
                    </td>
                    <td>
                      <span className="feedback-date">
                        {formatDate(feedback.created_at)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackPage;