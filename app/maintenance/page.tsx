"use client";
import { useEffect, useState } from "react";

export default function MaintenancePage() {
  const [counter, setCounter] = useState(10); // optional auto-redirect after 10 sec

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6">
      <div className="max-w-lg text-center bg-white shadow-lg rounded-xl p-10 border border-gray-200">
        
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Coral Group
        </h1>
        
        <h1 className="text-3xl font-semibold text-gray-900">
          Site Under Maintenance
        </h1>

        <p className="text-gray-600 mt-3">
          We are currently performing scheduled maintenance.  
          Please check back shortly.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-3 w-3 rounded-full bg-yellow-400 animate-pulse"></span>
          <span className="text-gray-700 text-sm">
            Estimated Time: Few Minutes
          </span>
        </div>

        <div className="mt-8 text-gray-500 text-sm">
          Redirecting you in {counter} seconds...
        </div>

      </div>
    </main>
  );
}