"use client";

import React from "react";
import { pastPaperscomp9, pastPaperseducation10, pastPaperseducation9 } from "@/components/data/pdf";

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
        {pastPaperseducation10.map((yearGroup) => (
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
                    src="data:image/png;base64,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"
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
