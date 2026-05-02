"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, BookOpen, Settings } from "lucide-react";
import { ParticipantTable } from "@/components/dashboard/participant-table";
import { mockParticipants } from "@/lib/mock-data";

export default function AdminPage() {
  const stats = [
    { title: "Total Participants", value: "124", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Active Mentors", value: "4", icon: UserCheck, color: "text-green-600", bg: "bg-green-50" },
    { title: "Active Batches", value: "2", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Total Revenue", value: "$45.2k", icon: Settings, color: "text-orange-600", bg: "bg-orange-50" },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-slate-500">{stat.title}</CardTitle>
              <div className={`${stat.bg} ${stat.color} p-2 rounded-lg`}>
                <stat.icon className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900 text-uppercase tracking-tight">Recent Registrations</h2>
        </div>
        <ParticipantTable participants={mockParticipants} />
      </div>
    </div>
  );
}
