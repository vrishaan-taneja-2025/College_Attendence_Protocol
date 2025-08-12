import { useState } from "react";
import QRCode from "qrcode";

export default function Adscan() {
  const [selectedClass, setSelectedClass] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const classes = ["Class A", "Class B", "Class C"];

  const handleGenerateQR = async () => {
    if (!selectedClass) {
      alert("Please select a class before generating a QR code.");
      return;
    }

    const sessionData = {
      className: selectedClass,
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString(),
    };

    try {
      const qr = await QRCode.toDataURL(JSON.stringify(sessionData));
      setQrCodeUrl(qr);
    } catch (err) {
      console.error("QR Code generation failed:", err);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-orange-500 text-center text-4xl font-bold mb-6">
        Generate QR for Attendance
      </h1>

      {/* Class Selection Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md border border-orange-200">
        <label className="block mb-2 font-semibold text-orange-700">
          Select Class
        </label>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="w-full border border-orange-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">-- Choose a Class --</option>
          {classes.map((cls, idx) => (
            <option key={idx} value={cls}>
              {cls}
            </option>
          ))}
        </select>

        <button
          onClick={handleGenerateQR}
          className="w-full bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition"
        >
          Generate QR
        </button>
      </div>

      {/* QR Code Display */}
      {qrCodeUrl && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-lg border border-orange-200">
          <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48 mx-auto" />
          <p className="text-sm text-center text-gray-500 mt-2">
            Scan this code to mark attendance for {selectedClass}
          </p>
        </div>
      )}
    </div>
  );
}
