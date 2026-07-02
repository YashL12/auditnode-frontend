import { useEffect, useState } from "react";
import "./Applications.css";

function Applications() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {

        try {

            const response = await fetch("http://localhost:5000/api/applications");

            const data = await response.json();

            if (data.success) {
                setApplications(data.applications);
            }

        } catch (error) {
            console.log(error);
        }

    };

    return (

        <div className="applications">

            <h1>Applications</h1>

            <table>

                <thead>

                    <tr>

                        <th>User ID</th>
                        <th>Job ID</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        applications.map((app) => (

                            <tr key={app._id}>

                                <td>{app.userId}</td>

                                <td>{app.jobId}</td>

                                <td>{app.status}</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default Applications;