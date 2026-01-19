"use client";

import React from "react";
import { X } from "lucide-react";

const RegistrationProcedure = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

      <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#2f855a]">
          <h2 className="text-white text-lg font-semibold">
            Registration Procedure
          </h2>
          <button onClick={onClose} className="text-white hover:opacity-80">
            <X size={22} />
          </button>
        </div>

        {/* BODY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-6">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-lg font-semibold text-[#2f855a] mb-4">
              Registration Requirements
            </h3>

            <ul className="space-y-3 text-gray-700 text-sm">
              {[
                "Institute Name",
                "Institute Address",
                "Institute Monogram",
                "Principal Name",
                "Principal Number",
                "Email Address",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#2f855a] font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 text-sm text-gray-600 leading-relaxed">
              <p>
                Whatsapp the above info on{" "}
                <span className="font-semibold text-[#2f855a]">
                  0306-4869689
                </span>
              </p>
              <p className="mt-1">
                Account registration process will start after transaction.
              </p>
              <p className="mt-1">
                <strong>2 hours</strong> will be required for account proceeding.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="border-t md:border-t-0 md:border-l border-gray-200 md:pl-6">
            <h3 className="text-lg font-semibold text-[#2f855a] mb-4">
              Payment Methods
            </h3>

            {/* EasyPaisa */}
            <div className="mb-5">
              <p className="font-semibold text-gray-800">Easypaisa</p>
              <p className="text-sm text-gray-600 mt-1">
                Account Number: 0306-4869689
              </p>
              <p className="text-sm text-gray-600">
                Account Title: Mirza Sajawal Baig
              </p>
            </div>

            <hr className="my-4" />

            {/* JazzCash */}
            <div className="mb-5">
              <p className="font-semibold text-gray-800">Jazzcash</p>
              <p className="text-sm text-gray-600 mt-1">
                Account Number: 0306-4869689
              </p>
              <p className="text-sm text-gray-600">
                Account Title: Mirza Sajawal Baig
              </p>
            </div>

            <hr className="my-4" />

            {/* Bank */}
            <div>
              <p className="font-semibold text-gray-800">Askari Bank</p>
              <p className="text-sm text-gray-600 mt-1">
                Account Number: 00633230001074
              </p>
              <p className="text-sm text-gray-600">
                Account Title: Mirza Sajawal Baig
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegistrationProcedure;
