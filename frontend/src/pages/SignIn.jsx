// SignIn.js
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';

const SignIn = ({ toggleForm }) => {
  return (
    <div className="w-full max-w-md rounded-lg bg-white border dark:bg-black dark:border-white">
      <div className="px-6 py-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">Sign In</h2>

        <form action="#">
          <div className="mt-4">
            <Input
              className="w-full mt-2"
              type="email"
              placeholder="Email address"
              aria-label="Email address"
            />
            <Input
              className="w-full mt-4"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:underline">
              Forget Password?
            </a>

            <Button variant="default" className="px-6 py-2 font-medium">
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
