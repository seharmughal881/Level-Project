"use client";

import { useState } from "react";

interface Paper {
  id: number;
  paperName: string;
  examName: string;
  className: string;
  subject: string;
  uploadDate: string;
  createdDate: string;
  uploader: string;
}

const papersData: Paper[] = [
  {
    id: 1,
    paperName: "Urdu",
    examName: "Daily",
    className: "9TH",
    subject: "Urdu",
    uploadDate: "20-Jan-2026 10:59 AM",
    createdDate: "20-Jan-2026 10:59 AM",
    uploader: "HAROON",
  },
  {
    id: 2,
    paperName: "English",
    examName: "Half Book Test",
    className: "10TH",
    subject: "English",
    uploadDate: "19-Jan-2026 08:30 PM",
    createdDate: "19-Jan-2026 08:30 PM",
    uploader: "HAROON",
  },
  {
    id: 3,
    paperName: "Mathematics",
    examName: "Daily",
    className: "INTER",
    subject: "Mathematics",
    uploadDate: "18-Jan-2026 05:10 PM",
    createdDate: "18-Jan-2026 05:10 PM",
    uploader: "HAROON",
  },
  {
    id: 3,
    paperName: "Ali",
    examName: "Daily",
    className: "INTER",
    subject: "Mathematics",
    uploadDate: "18-Jan-2026 05:10 PM",
    createdDate: "18-Jan-2026 05:10 PM",
    uploader: "HAROON",
  },
];

export default function SavedPapersPage() {
  const [search, setSearch] = useState("");

  const filteredPapers = papersData.filter((paper) =>
    Object.values(paper)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Saved Papers
        </h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-indigo-900 text-white">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Paper Name</th>
              <th className="p-3 text-left">Exam Name</th>
              <th className="p-3 text-left">Class</th>
              <th className="p-3 text-left">Subject</th>
              <th className="p-3 text-left">Upload Date</th>
              <th className="p-3 text-left">Created Date</th>
              <th className="p-3 text-left">Uploader</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredPapers.length > 0 ? (
              filteredPapers.map((paper, index) => (
                <tr
                  key={paper.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{paper.paperName}</td>
                  <td className="p-3">{paper.examName}</td>
                  <td className="p-3">{paper.className}</td>
                  <td className="p-3">{paper.subject}</td>
                  <td className="p-3">{paper.uploadDate}</td>
                  <td className="p-3">{paper.createdDate}</td>
                  <td className="p-3">{paper.uploader}</td>
                  <td className="p-3">
                    <button className="text-indigo-600 hover:underline text-sm">
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={9}
                  className="text-center p-6 text-gray-500"
                >
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
