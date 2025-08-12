import React, { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

const AdProfile = ({ regNo, name, outlookId, semester, section, password }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-[600px]">
        <div className="w-full max-w-[400px] mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-orange-500 mb-4">Admin Profile</h2>
    
          <div className="space-y-3">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Emp. No.</span>
              <span className="font-medium">{regNo}</span>
            </div>
    
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Name</span>
              <span className="font-medium">{name}</span>
            </div>
    
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Outlook ID</span>
              <span className="font-medium">{outlookId}</span>
            </div>
    

    
            {/* Password */}
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-500">Password</span>
              <div className="flex items-center space-x-2">
                <span className="font-medium">
                  {showPassword ? password : "••••••••"}
                </span>
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-gray-600" />
                  ) : (
                    <Eye size={18} className="text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
    
          {/* Change Password */}
          <button className="mt-5 flex items-center justify-center w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition">
            <Lock size={18} className="mr-2" />
            Change Password
          </button>
        </div>
    </div>
  );
};

export default AdProfile;
