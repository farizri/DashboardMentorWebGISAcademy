export interface Participant {
  id: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  bootcamp: string;
  batch: string;
  mentorId: string;
  kelompok: string;
  scores: {
    preTest: number;
    quiz1: number;
    quiz2: number;
    finalExam: number;
    finalProject: number | "Needs Grading" | null;
  };
  progress: number;
  status: "Completed" | "Needs Grading" | "Missed";
}

export const mockParticipants: Participant[] = [
  {
    id: "1",
    name: "Baskara Putra",
    email: "baskarap@gmail.com",
    phone: "081234567890",
    username: "baskaraputra",
    bootcamp: "Location Analytics",
    batch: "Batch 1",
    mentorId: "Raden",
    kelompok: "Spasial A",
    scores: {
      preTest: 70,
      quiz1: 70,
      quiz2: 0,
      finalExam: null,
      finalProject: "Needs Grading",
    },
    progress: 45,
    status: "Needs Grading",
  },
  {
    id: "2",
    name: "Salma Salsabil",
    email: "salma@gmail.com",
    phone: "081234567891",
    username: "salmasalsa",
    bootcamp: "Location Analytics",
    batch: "Batch 1",
    mentorId: "Raden",
    kelompok: "Spasial A",
    scores: {
      preTest: 90,
      quiz1: 85,
      quiz2: 80,
      finalExam: 88,
      finalProject: 95,
    },
    progress: 100,
    status: "Completed",
  },
  {
    id: "3",
    name: "Nabila Taqiyyah",
    email: "nabila@gmail.com",
    phone: "081234567892",
    username: "nabilatq",
    bootcamp: "Location Analytics",
    batch: "Batch 1",
    mentorId: "Dzikri",
    kelompok: "Spasial B",
    scores: {
      preTest: 60,
      quiz1: 50,
      quiz2: 0,
      finalExam: null,
      finalProject: null,
    },
    progress: 20,
    status: "Missed",
  },
];
