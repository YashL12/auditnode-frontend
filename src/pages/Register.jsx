import { useState } from "react";
import "./Register.css";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "Auditor"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            console.log(import.meta.env.VITE_API_URL);
            const response = fetch(`${import.meta.env.VITE_API_URL}/api/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            alert(data.message);

            if (data.success) {
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    role: "Auditor"
                });
            }

        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="register-container">

            <form className="register-form" onSubmit={handleSubmit}>

                <h2>Create Account</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="Auditor">Auditor</option>
                    <option value="CA Firm">CA Firm</option>
                </select>

                <button type="submit">
                    Register
                </button>

            </form>

        </div>
    );
}

export default Register;