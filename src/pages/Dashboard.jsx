import "./Dashboard.css";

function Dashboard() {

    const user = JSON.parse(localStorage.getItem("user"));

    return (

        <div className="dashboard">

            <h1>Dashboard</h1>

            <div className="dashboard-card">

                <h2>Welcome</h2>

                <p><strong>Name :</strong> {user?.name}</p>

                <p><strong>Email :</strong> {user?.email}</p>

                <p><strong>Role :</strong> {user?.role}</p>

            </div>

        </div>

    );

}

export default Dashboard;