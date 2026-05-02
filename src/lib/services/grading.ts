import { db } from "../firebase";
import { 
  collection, 
  doc, 
  getDocs, 
  query, 
  where,
  updateDoc
} from "firebase/firestore";
import { Participant } from "../mock-data";

const USERS_COLLECTION = "users";

export const saveParticipantGrade = async (participantId: string, scores: Participant["scores"]) => {
  const userRef = doc(db, USERS_COLLECTION, participantId);
  await updateDoc(userRef, {
    scores,
    // progress could be calculated here
  });
};

export const fetchParticipantsByMentor = async (mentorId: string) => {
  const q = query(collection(db, USERS_COLLECTION), where("mentorId", "==", mentorId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
