import React from "react";
import {
  Phone,
  Bot,
  ArrowRightLeft,
  Calendar,
  XCircle,
  Clock,
  ChevronDown,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Home = () => {
  // Mock data for the chart
  const chartData = [
    { day: "Mon", calls: 50 },
    { day: "Tue", calls: 60 },
    { day: "Wed", calls: 55 },
    { day: "Thu", calls: 70 },
    { day: "Fri", calls: 85 },
    { day: "Sat", calls: 95 },
    { day: "Sun", calls: 90 },
  ];

  // Stats data
  const stats = [
    {
      title: "Total Calls Today",
      value: "127",
      change: "+12%",
      icon: Phone,
      color: "bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB]",
    },
    {
      title: "AI-Handled Calls",
      value: "98",
      change: "+77%",
      icon: Bot,
      color: "bg-gradient-to-r from-[#AD46FF] to-[#F6339A]",
    },
    {
      title: "Warm Transfer",
      value: "23",
      change: "+18%",
      icon: ArrowRightLeft,
      color: "bg-gradient-to-r from-[#FF6900] to-[#FB2C36]",
    },
    {
      title: "Appointments Booked",
      value: "34",
      change: "+8%",
      icon: Calendar,
      color: "bg-gradient-to-r from-[#00C950] to-[#00BC7D]",
    },
    {
      title: "Missed/Failed Calls",
      value: "6",
      change: "-3%",
      icon: XCircle,
      color: "bg-gradient-to-r from-[#FB2C36] to-[#FF2056]",
    },
    {
      title: "Avg Call Duration",
      value: "3:42",
      change: "+15%",
      icon: Clock,
      color: "bg-gradient-to-r from-[#615FFF] to-[#2B7FFF]",
    },
  ];

  // Recent activity data
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
      color: "bg-blue-500",
    },
    {
      title: "Call dropped after 12 seconds",
      time: "12 min ago",
      color: "bg-red-500",
    },
  ];

  // Top repair requests
  const repairRequests = [
    { name: "Screen Repair", count: 156, percentage: 100 },
    { name: "Battery Replacement", count: 89, percentage: 57 },
    { name: "Back Glass Repair", count: 67, percentage: 43 },
    { name: "Software Issues", count: 45, percentage: 29 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-xl bg-[#0F172B] p-6 shadow-lg transition-transform hover:scale-105"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-gray-400">{stat.title}</p>
                <h3 className="mt-2 text-3xl text-white">{stat.value}</h3>
                <p className="mt-1 text-sm text-[#05DF72]">{stat.change}</p>
              </div>
              <div className={`rounded-xl ${stat.color} p-3`}>
                <stat.icon size={24} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call Trends Chart */}
      <div className="rounded-xl bg-[#1c2136] p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl text-white">Call Trends - This Week</h2>
            <p className="text-sm text-gray-400">Total: 572 calls</p>
          </div>
          <button className="rounded-xl bg-[#1D293D] px-5 py-3 text-sm text-white select:text-white flex items-center gap-2">
            {" "}
            This Week <ChevronDown />
          </button>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="day" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1c2136",
                border: "1px solid #374151",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorCalls)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Section: Recent Activity + Top Repair Requests */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <div className="rounded-xl bg-[#1c2136] p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div
                  className={`mt-1 h-2 w-2 rounded-full ${activity.color}`}
                ></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-300">{activity.title}</p>
                  <p className="mt-1 text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Repair Requests */}
        <div className="rounded-xl bg-[#1c2136] p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Top Repair Requests
          </h2>
          <div className="space-y-4">
            {repairRequests.map((request, index) => (
              <div key={index}>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-300">
                    {request.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {request.count} requests
                  </p>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[#0f121e]">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                    style={{ width: `${request.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
