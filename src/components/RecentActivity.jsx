import React from "react";

const RecentActivity = () => {
  const activities = [
    {
      title: "AI booked appointment for iPhone 13 screen repair",
      time: "2 min ago",
      color: "bg-green-500",
    },
    {
      title: "Warm transfer to technician - Software issue",
      time: "5 min ago",
      color: "bg-orange-500",
    },
    {
      title: "Quote provided for iPad battery replacement",
      time: "8 min ago",
      color: "bg-green-500",
    },
    {
      title: "Call dropped after 12 seconds",
      time: "15 min ago",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="rounded-xl bg-[#0F172B] p-6 shadow-lg">
      <h2 className="mb-6 text-xl text-white">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <div
              className={`mt-1.5 h-2 w-2 rounded-full ${activity.color}`}
            ></div>
            <div className="flex-1">
              <p className="text-sm text-gray-300">{activity.title}</p>
              <p className="mt-1 text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
