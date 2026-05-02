"use client";

import { GradingTable } from "@/components/dashboard/grading-table";
import { mockParticipants } from "@/lib/mock-data";

export default function MonitoringPage() {
  return (
    <div className="p-8">
      <GradingTable participants={mockParticipants} />
    </div>
  );
}
