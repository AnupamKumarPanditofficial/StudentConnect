import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  deleteDoc 
} from "firebase/firestore";
import firebaseConfig from "../firebase/firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const tutorCollection = collection(db, "tutors");

/**
 * Fetch all tutors
 */
export const fetchTutors = async () => {
  try {
    const snapshot = await getDocs(tutorCollection);
    const tutors = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return tutors;
  } catch (error) {
    console.error("Error fetching tutors:", error);
    throw error;
  }
};

/**
 * Fetch a single tutor by ID
 */
export const fetchTutorById = async (tutorId: string) => {
  try {
    const tutorDoc = await getDoc(doc(db, "tutors", tutorId));
    if (tutorDoc.exists()) {
      return { id: tutorDoc.id, ...tutorDoc.data() };
    } else {
      throw new Error("Tutor not found");
    }
  } catch (error) {
    console.error("Error fetching tutor:", error);
    throw error;
  }
};

/**
 * Add a new tutor
 */
export const addTutor = async (tutorData: any) => {
  try {
    const newTutorRef = await addDoc(tutorCollection, tutorData);
    return { id: newTutorRef.id, ...tutorData };
  } catch (error) {
    console.error("Error adding tutor:", error);
    throw error;
  }
};

/**
 * Update a tutor profile
 */
export const updateTutor = async (tutorId: string, updatedData: any) => {
  try {
    const tutorRef = doc(db, "tutors", tutorId);
    await updateDoc(tutorRef, updatedData);
    return { id: tutorId, ...updatedData };
  } catch (error) {
    console.error("Error updating tutor:", error);
    throw error;
  }
};

/**
 * Delete a tutor
 */
export const deleteTutor = async (tutorId: string) => {
  try {
    await deleteDoc(doc(db, "tutors", tutorId));
    return `Tutor ${tutorId} deleted successfully`;
  } catch (error) {
    console.error("Error deleting tutor:", error);
    throw error;
  }
};
