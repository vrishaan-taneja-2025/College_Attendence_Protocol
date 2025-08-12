import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";

export default function QRScanner({ onScan }) {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let scanner;

    (async () => {
      try {
        if (videoRef.current) {
          scanner = new QrScanner(
            videoRef.current,
            (result) => {
              console.log("QR Code detected:", result.data);
              onScan?.(result.data);
            },
            {
              onDecodeError: (err) => console.warn("Decode error:", err),
              maxScansPerSecond: 5,
              preferredCamera: "environment",
            }
          );

          await scanner.start();
        }
      } catch (err) {
        console.error("Camera error:", err);
        setError("Camera access denied or not found");
      }
    })();

    return () => {
      scanner?.stop();
    };
  }, [onScan]);

  return (
    <div style={{ textAlign: "center", height: "100%" }}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
