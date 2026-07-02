import { useEffect, useState } from "react";
import "./Jobs.css";

function Jobs() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {

        try {

            const response = await fetch("http://localhost:5000/api/jobs");

            const data = await response.json();

            if (data.success) {
                setJobs(data.jobs);
            }

        } catch (error) {
            console.log(error);
        }

    };

    const applyJob = async (jobId) => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("Please login first.");
            return;
        }

        try {

            const response = await fetch("http://localhost:5000/api/applications", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    userId: user._id,
                    jobId: jobId
                })

            });

            const data = await response.json();

            alert(data.message);

        } catch (error) {

            console.log(error);

            alert("Unable to apply.");

        }

    };

    return (

        <div className="jobs-container">

            <h1>Available Jobs</h1>

            <div className="jobs-grid">

                {
                    jobs.map((job) => (

                        <div className="job-card" key={job._id}>

                            <h2>{job.title}</h2>

                            <p><strong>Company:</strong> {job.company}</p>

                            <p><strong>Location:</strong> {job.location}</p>

                            <p><strong>Salary:</strong> ₹{job.salary}</p>

                            <p><strong>Experience:</strong> {job.experience}</p>

                            <p>{job.description}</p>

                            <button
                                onClick={() => applyJob(job._id)}
                            >
                                Apply
                            </button>

                        </div>

                    ))
                }

            </div>

        </div>

    );

}

export default Jobs;