"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddSubUserPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    contact: "",
    email: "",
    password: "",
    status: "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // API call yahan lage gi
    console.log("Submitted Data:", form);

    alert("Sub User Added Successfully");
    router.push("/SubUsers");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Add New Sub User</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-6 space-y-4"
      >
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            required
            value={form.fullName}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Enter full name"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Contact Number
          </label>
          <input
            type="text"
            name="contact"
            required
            value={form.contact}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="03xx-xxxxxxx"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="example@email.com"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Enter password"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 rounded-lg border"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
