"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ProgressBar } from "@/components/dashboard/progress-bar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock, FileText } from "lucide-react";

export default function PesertaPage() {
  const scores = [
    { name: "Pre-test", score: 85, status: "completed" },
    { name: "Quiz 1", score: 90, status: "completed" },
    { name: "Quiz 2", score: 75, status: "completed" },
    { name: "Final Exam", score: null, status: "pending" },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="bg-mapid-dark text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <Badge className="bg-mapid-blue text-white border-none px-4 py-1">Batch 1</Badge>
          <h1 className="text-3xl font-bold">Hello, Baskara Putra!</h1>
          <p className="text-slate-300 max-w-md">Your progress in Location Analytics is looking great. Keep up the good work!</p>
          <div className="max-w-xs pt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Overall Progress</p>
            <ProgressBar value={75} />
          </div>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <FileText className="w-64 h-64 rotate-12" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader>
            <CardTitle>Grading & Scores</CardTitle>
            <CardDescription>Track your academic performance throughout the bootcamp.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {scores.map((s) => (
              <div key={s.name} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-4">
                  {s.status === "completed" ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  ) : (
                    <Clock className="w-6 h-6 text-orange-500" />
                  )}
                  <div>
                    <p className="font-bold text-slate-900">{s.name}</p>
                    <p className="text-xs text-slate-500">{s.status === "completed" ? "Submitted" : "Not yet available"}</p>
                  </div>
                </div>
                <div className="text-xl font-black text-mapid-blue">
                  {s.score ?? "--"}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
              <Circle className="w-5 h-5 text-mapid-blue mt-0.5" />
              <div>
                <p className="text-sm font-bold text-slate-900">Final Project Submission</p>
                <p className="text-xs text-slate-500">Due in 5 days</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <Circle className="w-5 h-5 text-slate-300 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-slate-500">Storymap Workshop</p>
                <p className="text-xs text-slate-400">Scheduled for May 15</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
