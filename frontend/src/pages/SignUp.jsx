import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUp = ({ toggleForm }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [formError, setFormError] = useState("");

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
      setPasswordError("Must be 8+ chars, with a letter & number.");
    } else {
      setPasswordError("");
    }
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    if (!email || !password || !confirmpassword) {
      setFormError("Please fill in all fields.");
      return;
    }
    if (emailError || passwordError || confirmPasswordError) {
      setFormError("Please fix the errors before submitting.");
      return;
    }

    try {
      const response = await fakeSignUp(email, password,confirmpassword);
      if (response.success) {
        console.log("User signed in successfully!");
        navigate("/home");
      } else {
        setFormError("Invalid email or password.");
      }
    } catch (error) {
      setFormError("An error occurred. Please try again later.");
    }
    
    navigate("/home");
  }

  async function fakeSignUp(email, password,confirmpassword) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true }); 
      }, 1000);
    });
  }

  return (
    <div className="w-full max-w-md rounded-lg border bg-white dark:bg-black dark:border-white xs:h-[360px] xs:w-96">
      <div className="px-6 py-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">Sign Up</h2>
        {formError && <div className="mt-4 text-red-500">{formError}</div>}
        <form onSubmit={handleFormSubmit}>
          <div className="mt-4">
            <Input
              className="w-full mt-2"
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              onChange={handleEmailChange}
              value={email}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            
            <Input
              className="w-full mt-2"
              type="password"
              placeholder="Password"
              aria-label="Password"
              onChange={handlePasswordChange}
              value={password}
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

            <Input
              className="w-full mt-2"
              type="password"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              onChange={handleConfirmPasswordChange}
              value={confirmpassword}
            />
            {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}
          </div>

          <Button className="w-full mt-4 font-medium" variant="default" type="submit">
            Sign Up
          </Button>
        </form>
        
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <button onClick={toggleForm} className="font-medium text-blue-500 dark:text-gray-100 hover:underline">
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
