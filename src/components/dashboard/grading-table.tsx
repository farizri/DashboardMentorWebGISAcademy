"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Participant } from "@/lib/mock-data";
import { ProgressBar } from "./progress-bar";
import { Download, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface GradingTableProps {
  participants: Participant[];
}

export function GradingTable({ participants }: GradingTableProps) {
  const [selectedMentor, setSelectedMentor] = useState<string>("Raden");

  const filteredParticipants = useMemo(() => {
    return participants.filter(p => p.mentorId === selectedMentor);
  }, [participants, selectedMentor]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
      {/* Toolbar */}
      <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
        <div className="flex gap-2">
          <Select value={selectedMentor} onValueChange={setSelectedMentor}>
            <SelectTrigger className="w-[180px] rounded-full bg-slate-50 border-slate-200 h-9">
              <SelectValue placeholder="Select Mentor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Raden">Mentor Raden</SelectItem>
              <SelectItem value="Dzikri">Mentor Dzikri</SelectItem>
              <SelectItem value="Rifqi">Mentor Rifqi</SelectItem>
              <SelectItem value="Faiz">Mentor Faiz</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="rounded-full h-9 gap-2">
            <Filter className="w-4 h-4" /> Filter
          </Button>
        </div>
        <Button className="bg-mapid-dark text-white rounded-full h-9 gap-2 text-sm font-bold">
          <Download className="w-4 h-4" /> Export
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table className="min-w-[1000px]">
          <TableHeader className="bg-mapid-dark hover:bg-mapid-dark">
            <TableRow>
              <TableHead className="text-white text-[11px] uppercase tracking-wider py-5 px-6">Name</TableHead>
              <TableHead className="text-white text-[11px] uppercase tracking-wider py-5 px-6">Kelompok</TableHead>
              <TableHead className="text-white text-[11px] uppercase tracking-wider py-5 px-4 text-center">Pre-test</TableHead>
              <TableHead className="text-white text-[11px] uppercase tracking-wider py-5 px-4 text-center">Quiz 1</TableHead>
              <TableHead className="text-white text-[11px] uppercase tracking-wider py-5 px-4 text-center">Quiz 2</TableHead>
              <TableHead className="text-white text-[11px] uppercase tracking-wider py-5 px-4 text-center">Final Exam</TableHead>
              <TableHead className="text-white text-[11px] uppercase tracking-wider py-5 px-6 text-center">Final Project</TableHead>
              <TableHead className="text-white text-[11px] uppercase tracking-wider py-5 px-6">Progress</TableHead>
              <TableHead className="text-white text-[11px] uppercase tracking-wider py-5 px-6 text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-sm font-medium">
            {filteredParticipants.map((p) => (
              <TableRow key={p.id} className="hover:bg-slate-50 transition-colors">
                <TableCell className="py-5 px-6">
                  <div className="font-bold text-slate-900">{p.name}</div>
                  <div className="text-[11px] text-slate-400">{p.email}</div>
                </TableCell>
                <TableCell className="py-5 px-6">
                  <Badge variant="outline" className="bg-blue-50 text-mapid-blue border-transparent rounded px-3 py-1 text-xs">
                    {p.kelompok}
                  </Badge>
                </TableCell>
                <TableCell className="py-5 px-4 text-center text-slate-700">{p.scores.preTest}</TableCell>
                <TableCell className="py-5 px-4 text-center text-slate-700">{p.scores.quiz1}</TableCell>
                <TableCell className="py-5 px-4 text-center text-slate-700">{p.scores.quiz2}</TableCell>
                <TableCell className="py-5 px-4 text-center text-slate-300">
                  {p.scores.finalExam ?? "-"}
                </TableCell>
                <TableCell className="py-5 px-6 text-center">
                  {p.scores.finalProject === "Needs Grading" ? (
                    <span className="text-orange-500 font-bold">Needs Grading</span>
                  ) : (
                    <span className="text-slate-700">{p.scores.finalProject ?? "-"}</span>
                  )}
                </TableCell>
                <TableCell className="py-5 px-6">
                  <ProgressBar value={p.progress} />
                </TableCell>
                <TableCell className="py-5 px-6 text-center">
                  <Button size="sm" className="bg-mapid-dark text-white rounded-lg text-xs font-bold px-4 h-9 shadow-sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
