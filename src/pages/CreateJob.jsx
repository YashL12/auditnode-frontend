import { useState } from "react";
import "./CreateJob.css";

function CreateJob() {

    const [job, setJob] = useState({

        title: "",
        company: "",
        location: "",
        salary: "",
        experience: "",
        description: ""

    });

    const handleChange = (e) => {

        setJob({
            ...job,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(job)

            });

            const data = await response.json();

            alert(data.message);

            if (data.success) {

                setJob({
                    title: "",
                    company: "",
                    location: "",
                    salary: "",
                    experience: "",
                    description: ""
                });

            }

        } catch (error) {

            console.log(error);

            alert("Unable to create job");

        }

    };

    return (

        <div className="create-job-container">

            <form className="create-job-form" onSubmit={handleSubmit}>

                <h2>Create Job</h2>

                <input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    value={job.title}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={job.company}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={job.location}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={job.salary}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="experience"
                    placeholder="Experience"
                    value={job.experience}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    rows="5"
                    value={job.description}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Create Job
                </button>

            </form>

        </div>

    );

}

export default CreateJob;