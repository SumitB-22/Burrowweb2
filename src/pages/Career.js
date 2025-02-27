import React, { useState } from "react";
import { db } from "../firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Footer from "../components/Footer";
import "./Career.css";

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Static job object for single job card
  const handleJobClick = () => {
    setSelectedJob({
      title: "Apply",
      location: "",
      description: "",
    });
    setSuccess("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!selectedJob) {
      setError("Please select a job position.");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "applications"), {
        jobTitle: selectedJob.title,
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        // Using a constant Google Form link for resume upload
        resume: "https://forms.gle/VtLkj8pBygZFc2KJA",
        timestamp: serverTimestamp(),
      });

      setSuccess("Application submitted successfully.");
      setFormData({ name: "", email: "", contact: "" });
      setTimeout(() => {
        setSelectedJob(null);
      }, 2000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <main className="career-page">
        <h1>Be the part of this exciting opportunity</h1>
        
        {/* Single Job Card */}
        <div className="job-list">
          <div className="job-card" onClick={handleJobClick}>
            <h3>Apply</h3>
          </div>
        </div>

        {/* Modal with Application Form */}
        {selectedJob && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setSelectedJob(null)}>
                &times;
              </span>
              <h2>{selectedJob.title}</h2>
              {selectedJob.location && (
                <p>
                  <strong>Location:</strong> {selectedJob.location}
                </p>
              )}
              {selectedJob.description && <p>{selectedJob.description}</p>}
              <form className="career-form" onSubmit={handleSubmit}>
                <label>
                  Full Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Contact Number:
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="upload-label">
                  Resume Upload:
                  <div className="upload-link">
                    <a
                      href="https://forms.gle/VtLkj8pBygZFc2KJA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click here to upload your resume
                    </a>
                  </div>
                </label>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <button type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Career;
