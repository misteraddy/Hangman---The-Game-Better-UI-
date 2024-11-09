// SignUp.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUp = ({ toggleForm }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md rounded-lg border bg-white dark:bg-black dark:border-white">
      <div className="px-6 py-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
          Sign Up
        </h2>

        <form action="#">
          <div className="mt-4">
            <Input
              className="w-full mt-2"
              type="email"
              placeholder="Email address"
              aria-label="Email address"
            />
            <Input
              className="w-full mt-2"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
            <Input
              className="w-full mt-2"
              type="password"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
            />
          </div>

          <Button
            className="w-full mt-4 font-medium"
            variant="default"
            onClick={() => {
              navigate("/home");
            }}
          >
            Sign Up
          </Button>
        </form>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <button
            onClick={toggleForm}
            className="font-medium text-blue-500 dark:text-gray-100 hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
