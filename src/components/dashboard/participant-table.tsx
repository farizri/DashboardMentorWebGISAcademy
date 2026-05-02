"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Participant } from "@/lib/mock-data";
import { ChevronDown } from "lucide-react";

interface ParticipantTableProps {
  participants: Participant[];
}

export function ParticipantTable({ participants }: ParticipantTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-mapid-dark hover:bg-mapid-dark">
          <TableRow>
            <TableHead className="text-white text-[11px] uppercase tracking-wider text-center w-12">No</TableHead>
            <TableHead className="text-white text-[11px] uppercase tracking-wider">Name</TableHead>
            <TableHead className="text-white text-[11px] uppercase tracking-wider">Email</TableHead>
            <TableHead className="text-white text-[11px] uppercase tracking-wider">No Handphone</TableHead>
            <TableHead className="text-white text-[11px] uppercase tracking-wider">Username</TableHead>
            <TableHead className="text-white text-[11px] uppercase tracking-wider">Bootcamp</TableHead>
            <TableHead className="text-white text-[11px] uppercase tracking-wider">Batch</TableHead>
            <TableHead className="text-white text-[11px] uppercase tracking-wider text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-sm">
          {participants.map((p, index) => (
            <TableRow key={p.id} className="hover:bg-slate-50 transition-colors">
              <TableCell className="py-4 px-4 text-center text-slate-400">{index + 1}.</TableCell>
              <TableCell className="py-4 px-4 font-semibold text-slate-900">{p.name}</TableCell>
              <TableCell className="py-4 px-4 text-slate-500">{p.email}</TableCell>
              <TableCell className="py-4 px-4 text-slate-500">{p.phone}</TableCell>
              <TableCell className="py-4 px-4 text-slate-500">{p.username}</TableCell>
              <TableCell className="py-4 px-4">
                <Badge variant="outline" className="bg-blue-50 text-mapid-blue border-blue-100 font-medium">
                  {p.bootcamp} <ChevronDown className="ml-1 w-3 h-3" />
                </Badge>
              </TableCell>
              <TableCell className="py-4 px-4">
                <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-100 font-medium">
                  {p.batch} <ChevronDown className="ml-1 w-3 h-3" />
                </Badge>
              </TableCell>
              <TableCell className="py-4 px-4 text-center">
                <Button size="sm" className="bg-mapid-dark text-white rounded-full text-xs font-bold px-5 h-8">
                  Assign
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
