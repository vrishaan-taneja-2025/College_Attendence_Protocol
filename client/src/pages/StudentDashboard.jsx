import { useState } from "react";
import Stscan from "../components/Stscan";
import Sthome from "../components/Sthome";
import StProfile from "../components/Stprofile";
import { FaClipboardList, FaQrcode, FaUser } from "react-icons/fa";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("scan");

  const renderComponent = () => {
    switch (activeTab) {
      case "home":
        return <Sthome />;
      case "scan":
        return <Stscan />;
      case "profile":
        return <StProfile
          regNo="23FE1034567"
          name="Oshika Sharma"
          outlookId="oshika@muj.manipal.edu"
          semester="V"
          section="k"
          password="MySecret123"
        />
        ;
      default:
        return <Sthome />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-1">{renderComponent()}</div>

      {/* Bottom Navigation */}
      <div className="relative h-16 flex justify-around items-center border-t bg-white">
        {/* Moving Orange Circle */}
        <div
          className="absolute w-12 h-12 rounded-full bg-orange-500 shadow-lg transition-all duration-300 -top-6"
          style={{
            left:
              activeTab === "home"
                ? "calc(16.6% - 24px)" // home position
                : activeTab === "scan"
                ? "calc(50% - 24px)" // scan position
                : "calc(83.3% - 24px)", // profile position
          }}
        ></div>

        {/* Home */}
        <button
          onClick={() => setActiveTab("home")}
          className="relative z-10"
        >
          <FaClipboardList
            className={`text-xl ${
              activeTab === "home" ? "-translate-y-8 text-white" : "translate-y-0 text-gray-700"
            }`}
          />
        </button>

        {/* Scan */}
        <button
          onClick={() => setActiveTab("scan")}
          className="relative z-10"
        >
          <FaQrcode
            className={`text-2xl ${
              activeTab === "scan" ? "-translate-y-8 text-white" : "translate-y-0  text-gray-700"
            }`}
          />
        </button>

        {/* Profile */}
        <button
          onClick={() => setActiveTab("profile")}
          className="relative z-10"
        >
          <FaUser
            className={`text-xl ${
              activeTab === "profile" ? "-translate-y-8 text-white" : "translate-y-0 text-gray-700"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
