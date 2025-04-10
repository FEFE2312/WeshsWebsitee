import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, Mail } from 'lucide-react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-medium-gray rounded-lg overflow-hidden shadow-lg">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-cream mb-6 text-center">
            {isLogin ? 'Login to Your Account' : 'Create an Account'}
          </h1>
          
          <div className="mb-6">
            <div className="flex border border-cream/20 rounded-md overflow-hidden">
              <button
                className={`flex-1 py-3 text-center font-medium ${
                  isLogin ? 'bg-cream text-dark-gray' : 'bg-transparent text-cream'
                }`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`flex-1 py-3 text-center font-medium ${
                  !isLogin ? 'bg-cream text-dark-gray' : 'bg-transparent text-cream'
                }`}
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
            </div>
          </div>
          
          <form>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-cream/80 mb-2">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="input-field w-full pl-10"
                  />
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-cream/50" />
                </div>
              </div>
            )}
            
            <div className="mb-4">
              <label className="block text-cream/80 mb-2">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-field w-full pl-10"
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-cream/50" />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-cream/80 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input-field w-full pl-10"
                />
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-cream/50" />
                <button
                  type="button"
                  className="absolute right-3 top-2.5 text-cream/50 hover:text-cream"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            
            {isLogin && (
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-cream/30 text-accent focus:ring-accent"
                  />
                  <label htmlFor="remember" className="ml-2 text-cream/80 text-sm">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-cream/80 text-sm hover:text-accent">
                  Forgot password?
                </a>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full py-3 bg-cream text-dark-gray font-semibold rounded-md hover:bg-cream-dark transition-colors"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-cream/70">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={toggleForm}
                className="text-accent hover:underline"
              >
                {isLogin ? 'Register' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;