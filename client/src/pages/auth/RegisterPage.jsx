import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { RegisterApi } = useAuth;

    const ChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const FormHandler = async (e) => {
        e.preventDefault();

        if (!formData.username || !formData.email || !formData.password) {
            toast.error("All fields are required");
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            toast.error("Invalid email format");
            return;
        }
        if (formData.password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        setIsLoading(true);

        try {
           
            const data = await RegisterApi(
                formData.username,
                formData.email,
                formData.password
            );
            navigate("/login");
        } catch (error) {
            setError(error);
        }
    };

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                {/* Registration Form */}
                <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                    {/* Heading */}

                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Create an account
                        </h2>
                        <p className="text-lg text-gray-600">
                            Enter your information to create an account
                        </p>
                    </div>
                    <form onSubmit={FormHandler}>
                        {/* Name Field */}
                        <div className="mb-6">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={ChangeHandler}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={ChangeHandler}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="johndoe@example.com"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={ChangeHandler}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-blue-400"
                        >
                            {isLoading ? "Please Wait..." : "Create Account"}
                        </button>

                        {/* Login Link */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                Already have an account?{" "}
                                <a
                                    href="/login"
                                    className="text-blue-600 hover:underline"
                                >
                                    Login here
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
