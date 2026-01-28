import React from "react";

const RepairRequests = () => {
  const repairRequests = [
    { name: "Screen Repair", count: 156, percentage: 100, color: "#3B82F6" },
    {
      name: "Battery Replacement",
      count: 89,
      percentage: 57,
      color: "#3B82F6",
    },
    { name: "Back Glass Repair", count: 67, percentage: 43, color: "#3B82F6" },
    { name: "Software Issues", count: 45, percentage: 29, color: "#3B82F6" },
  ];

  return (
    <div className="rounded-xl bg-[#0F172B] p-6 shadow-lg">
      <h2 className="mb-6 text-xl text-white">Top Repair Requests</h2>
      <div className="space-y-5">
        {repairRequests.map((request, index) => (
          <div key={index}>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm text-gray-300">{request.name}</p>
              <p className="text-sm text-gray-400">{request.count} requests</p>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#1D293D]">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${request.percentage}%`,
                  backgroundColor: request.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepairRequests;
