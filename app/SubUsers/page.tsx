"use client";


import Link from "next/link";
import { useState, useMemo } from "react";

interface SubUser {
  id: number;
  fullName: string;
  contact: string;
  email: string;
  password: string;
  createdDate: string;
  status: "Active" | "Inactive";
}

const initialData: SubUser[] = [
  {
    id: 1,
    fullName: "Ali",
    contact: "0324-5233273",
    email: "ali@example.com",
    password: "******",
    createdDate: "2025-01-10",
    status: "Active",
  },
  {
    id: 2,
    fullName: "Mubashar",
    contact: "0314-0434545",
    email: "usman@example.com",
    password: "******",
    createdDate: "2025-01-15",
    status: "Inactive",
  },
];

export default function SubUsersPage() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<SubUser[]>(initialData);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, data]);

  // Delete a user
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setData(data.filter((user) => user.id !== id));
    }
  };

  // Add a new user (dummy example, you can replace with a form later)
  const handleAddNew = () => {
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    const newUser: SubUser = {
      id: newId,
      fullName: "New User",
      contact: "0300-0000000",
      email: `newuser${newId}@example.com`,
      password: "******",
      createdDate: new Date().toISOString().split("T")[0],
      status: "Active",
    };
    setData([...data, newUser]);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
  <h1 className="text-2xl font-semibold">Sub Users</h1>
  {/* Link to AddNew page */}
  <Link href="/AddNew">
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
      + ADD NEW
    </button>
  </Link>
</div>
      <div className="flex justify-end mb-3">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-64"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="px-4 py-3">Sr</th>
              <th className="px-4 py-3">Full Name</th>
              <th className="px-4 py-3">Contact Number</th>
              <th className="px-4 py-3">Email Address</th>
              <th className="px-4 py-3">Account Password</th>
              <th className="px-4 py-3">Created Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-6 text-gray-500">
                  No data available in table
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
                <tr key={item.id} className="border-b">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{item.fullName}</td>
                  <td className="px-4 py-2">{item.contact}</td>
                  <td className="px-4 py-2">{item.email}</td>
                  <td className="px-4 py-2">{item.password}</td>
                  <td className="px-4 py-2">{item.createdDate}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-white text-xs ${
                        item.status === "Active"
                          ? "bg-green-600"
                          : "bg-red-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button className="text-blue-600 hover:underline mr-2">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Records count */}
      <p className="mt-3 text-sm text-gray-600">
        {filteredData.length} Record(s) Found
      </p>
    </div>
  );
}
