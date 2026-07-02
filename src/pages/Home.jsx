import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <h1>Welcome to AuditNode</h1>

        <p>
          AuditNode is a simple platform that connects CA Firms with
          freelance auditors. Firms can post audit jobs and auditors can
          apply for them easily.
        </p>

        <div className="hero-buttons">
          <Link to="/jobs">
            <button className="btn">View Jobs</button>
          </Link>

          <Link to="/register">
            <button className="btn btn-outline">Get Started</button>
          </Link>
        </div>

      </section>

      <section className="features">

        <div className="card">
          <h3>Find Audit Jobs</h3>
          <p>
            Browse different audit opportunities posted by CA firms.
          </p>
        </div>

        <div className="card">
          <h3>Post Jobs</h3>
          <p>
            CA firms can create new job openings for auditors.
          </p>
        </div>

        <div className="card">
          <h3>Easy Application</h3>
          <p>
            Auditors can apply for jobs with a single click.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;