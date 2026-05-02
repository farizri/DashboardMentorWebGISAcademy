"use client";

import { ParticipantTable } from "@/components/dashboard/participant-table";
import { mockParticipants } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { syncFromLark } from "@/lib/services/lark";

export default function ListPesertaPage() {
  const handleSync = async () => {
    await syncFromLark();
  };

  return (
    <div className="p-8">
      <div className="flex justify-end mb-4">
        <Button onClick={handleSync} className="bg-mapid-blue text-white rounded-full gap-2 font-bold shadow-sm">
          <RefreshCw className="w-4 h-4" /> Sync Lark Data
        </Button>
      </div>
      <ParticipantTable participants={mockParticipants} />
    </div>
  );
}
