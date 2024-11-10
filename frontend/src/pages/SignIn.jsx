import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const SignIn = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  function handleEmailChange(event) {
    setEmail(event.target.value);
    if (!emailRegex.test(event.target.value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    if (!passwordRegex.test(event.target.value)) {
      setPasswordError("Password must be at least 8 characters long and contain at least one letter and one number.");
    } else {
      setPasswordError("");
    }
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    
    if (emailError || passwordError || !email || !password) {
      setFormError("Please fill in the fields correctly.");
      return;
    }

    try {
      const response = await fakeSignIn(email, password);
      if (response.success) {
        console.log("User signed in successfully!");
        navigate("/home");
      } else {
        setFormError("Invalid email or password.");
      }
    } catch (error) {
      setFormError("An error occurred. Please try again later.");
    }
  }

  async function fakeSignIn(email, password) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: email === "test@example.com" && password === "Password123" });
      }, 1000);
    });
  }

  return (
    <div className="w-full max-w-md rounded-lg xs:h-80 xs:w-96 bg-white border dark:bg-black dark:border-white">
      <div className="px-6 py-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">Sign In</h2>
        
        {formError && <div className="mt-4 text-red-500">{formError}</div>}

        <form onSubmit={handleFormSubmit}>
          <div className="mt-4">
            <Input
              className="w-full mt-2"
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}

            <Input
              className="w-full mt-4"
              type="password"
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>

          <div className="flex items-center justify-between mt-4">
            <Link to="#" className="text-sm text-gray-600 dark:text-gray-200 hover:underline">
              Forget Password?
            </Link>

            <Button type="submit" variant="default" className="px-6 py-2 font-medium">
              Sign In
            </Button>
          </div>
        </form>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <button onClick={toggleForm} className="font-medium text-blue-500 dark:text-gray-100 hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
