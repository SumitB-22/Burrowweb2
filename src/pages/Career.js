import React, { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import "./Career.css";

const Career = () => {
  const [jobs, setJobs] = useState([]); // Job Listings
  const [selectedJob, setSelectedJob] = useState(null); // Selected Job
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    resume: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [filter, setFilter] = useState(""); // Job Filter

  // Fetch Jobs from Firestore
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "jobs"));
        const jobList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJobs(jobList);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  // Handle Job Selection
  const handleJobClick = (job) => {
    setSelectedJob(job);
    setSuccess(""); // Reset success message when a new job is selected
  };

  // Handle Form Input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (!selectedJob) {
        setError("Please select a job position.");
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "applications"), {
        jobTitle: selectedJob.title,
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        resume: formData.resume,
        timestamp: serverTimestamp(),
      });

      setSuccess("Application submitted successfully.");
      setLoading(false);
      setFormData({ name: "", email: "", contact: "", resume: "" });

      // Delay closing the modal so the user sees success message
      setTimeout(() => {
        setSelectedJob(null);
      }, 2000); // Closes after 2 seconds

    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="career-page">
      <h1>Explore Career Opportunities</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search job roles..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* Job Listings */}
      <div className="job-list">
        {jobs
          .filter((job) =>
            job.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((job) => (
            <div
              key={job.id}
              className="job-card"
              onClick={() => handleJobClick(job)}
            >
              <h3>{job.title}</h3>
              <p>{job.location}</p>
            </div>
          ))}
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedJob(null)}>
              &times;
            </span>
            <h2>{selectedJob.title}</h2>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p>{selectedJob.description}</p>

            {/* Application Form */}
            <form className="career-form" onSubmit={handleSubmit}>
              <label>
                Full Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
              <label>
                Contact Number:
                <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
              </label>
              <label>
                Resume Link:
                <input type="text" name="resume" value={formData.resume} onChange={handleChange} required />
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
  );
};

export default Career;
