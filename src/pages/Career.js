import React, { useEffect, useState } from 'react';
import './Career.css';

const styles = {
  container: {
    backgroundColor: '#000000',
    color: '#FFFFFF'
  }
};

const Career = () => {
  const [notifications] = useState([
    { id: 1, message: 'Interview on 20th Feb at 10:00 AM, Venue: XYZ Hall' },
    { id: 2, message: 'Submit your resume by 18th Feb' },
  ]);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/career')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Log form data for debugging
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch('/api/career', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form');
    }
  };

  return (
    <main className="career-page" style={styles.container}>
      <h1>Career Opportunities</h1>
      <form className="career-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Contact Number:
          <input type="tel" name="contact" required />
        </label>
        <label>
          Upload Resume:
          <input type="file" name="resume" required />
        </label>
        <button type="submit">Submit</button>
      </form>
      <section className="notifications">
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      </section>
      <div>
        {data ? <p>{data.message}</p> : <p>Loading...</p>}
      </div>
    </main>
  );
};

export default Career;