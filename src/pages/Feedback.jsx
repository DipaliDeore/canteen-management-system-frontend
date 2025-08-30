import food from '../assets/food-bg.png'

function Feedback() {
    return (
        <div className="feedback-container">
            <div className="feedback-content">

                <div className="feedback-form-container">
                    <h2>Feedback Form</h2>
                    <form className="feedback-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="rating">Overall Rating</label>
                            <div className="rating-stars">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className="star">★</span>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select id="category">
                                <option value="">Select Feedback Category</option>
                                <option value="service">Service Quality</option>
                                <option value="product">Product Feedback</option>
                                <option value="support">Customer Support</option>
                                <option value="website">Website Experience</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="feedback">Your Feedback</label>
                            <textarea id="feedback" rows="4"></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Submit Feedback</button>
                    </form>
                </div>
            </div>

            <style jsx>{`
        .feedback-container {
          min-height: 100vh;
          background-image: url(${food});
          background-size: cover;
          background-position: center;
          display: flex;
          margin-top :
          align-items: center;
          justify-content: flex-end;
          padding: 20px;
        }
        
        .feedback-content {
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.15); /* glass-like transparent */
  backdrop-filter: blur(40px);           /* blur behind it */
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3); /* subtle border */
}

        
        .feedback-nav {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .feedback-nav a {
          text-decoration: none;
          color: #555;
          font-weight: 500;
          font-size: 0.9rem;
          transition: color 0.3s;
        }
        
        .feedback-nav a:hover {
          color: #4f6df5;
        }
        
        .feedback-form-container h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
          font-size: 1.8rem;
        }
        
        .form-group {
          margin-bottom: 10px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #444;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width:100%;
          padding: 6px 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #4f6df5;
          outline: none;
        }
        
        .rating-stars {
          display: flex;
          gap: 8px;
        }
        
        .star {
          font-size: 1.8rem;
          color: #ddd;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .star:hover,
        .star.active {
          color: #ffc107;
        }
        
        .submit-btn {
          width: 100%;
          padding: 14px;
          background-color: #4f6df5;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .submit-btn:hover {
          background-color: #3a56d4;
        }
        
        @media (max-width: 768px) {
          .feedback-container {
            justify-content: center;
          }
          
          .feedback-content {
            max-width: 90%;
          }
          
          .feedback-nav {
            gap: 10px;
          }
          
          .feedback-nav a {
            font-size: 0.8rem;
          }
        }
      `}</style>
        </div>
    );
}

export default Feedback;