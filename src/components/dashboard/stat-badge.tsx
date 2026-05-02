"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatBadgeProps {
  status: "Completed" | "Needs Grading" | "Missed";
}

export function StatBadge({ status }: StatBadgeProps) {
  const styles = {
    Completed: "bg-green-50 text-green-700 border-green-100",
    "Needs Grading": "bg-orange-50 text-orange-600 border-orange-100 font-bold",
    Missed: "bg-red-50 text-red-600 border-red-100",
  };

  return (
    <Badge variant="outline" className={cn("px-3 py-1 rounded text-xs", styles[status])}>
      {status}
    </Badge>
  );
}
