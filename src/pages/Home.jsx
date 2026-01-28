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
  const chartData = [
    { day: "Mon", calls: 50 },
    { day: "Tue", calls: 60 },
    { day: "Wed", calls: 55 },
    { day: "Thu", calls: 70 },
    { day: "Fri", calls: 85 },
    { day: "Sat", calls: 95 },
    { day: "Sun", calls: 90 },
  ];

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

      <div className="rounded-xl bg-[#0F172B] p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl text-white">Call Trends - This Week</h2>
            <p className="text-sm text-gray-400">Total: 572 calls</p>
          </div>
          <button className="rounded-xl bg-[#1D293D] px-5 py-2 text-sm text-white select:text-white flex items-center gap-2">
            {" "}
            This Week <ChevronDown />
          </button>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0F172B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="day" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0F172B",

                borderRadius: "16px",
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
    </div>
  );
};

export default Home;
