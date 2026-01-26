"use client";

import React from "react";
import { pastPapersBiology  } from "@/components/data/pdf";

export default function PastPapersBiologyPage() {
  return (
    <section className="min-h-screen bg-white px-6 py-10">
      {/* Page Title */}
      <div className="mb-10 text-center">
        {/* <h1 className="text-3xl font-bold">
          <span className="text-orange-500">Past</span> Papers
        </h1> */}
    
<h1 className="text-3xl font-bold text-emerald-600">
  Past Papers
</h1>

        <p className="mt-2 text-sm text-gray-500">9th &nbsp; | &nbsp; Biology</p>
      </div>

      {/* Years */}
      <div className="space-y-12">
        {pastPapersBiology.map((yearGroup) => (
          <div key={yearGroup.year}>
            {/* Year Bar */}
            <div className="mb-6 rounded-lg bg-gradient-to-r from-green-400 to-blue-700 py-3 text-center text-xl font-semibold text-white">
              {yearGroup.year}
            </div>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {yearGroup.papers.map((paper, index) => (
                <a
                  key={index}
                  href={paper.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-xl"
                >
                  <img
                    src="app/Public/download.png"
                    alt="image"
                    className="mx-auto mb-4 h-10 w-10"
                  />
                  <h3 className="text-sm font-semibold text-gray-800">
                    {paper.board} - {yearGroup.year}
                  </h3>
                  <p className="text-xs text-gray-500">{paper.subject}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
