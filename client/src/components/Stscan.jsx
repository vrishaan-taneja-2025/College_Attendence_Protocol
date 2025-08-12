import { useState } from "react";
import QRScanner from "../components/QRscanner"; // Import the new QRScanner

export default function Stscan() {
  const [scanResult, setScanResult] = useState("");

  return (
    <div className="flex flex-col h-[600px] bg-white">
      <h1 className="text-orange-500 text-center text-4xl font-bold m-7">
        Mark Your Attendance!
      </h1>

      {/* QR Scanner */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="border-2 border-orange-500 w-56 h-56 overflow-hidden rounded-lg ">
          <QRScanner onScan={(data) => setScanResult(data)} />
        </div>

        {/* Scan Button */}
        <button
          className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600"
          onClick={() => alert(scanResult || "No QR scanned yet")}
        >
          Scan
        </button>
      </div>
    </div>
  );
}
