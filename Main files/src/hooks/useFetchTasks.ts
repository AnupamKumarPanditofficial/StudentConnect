import { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

interface Task {
  id: string;
  title: string;
  description: string;
  subject: string;
  budget: number;
  deadline: string;
  createdBy: string;
  status: 'open' | 'assigned' | 'completed';
}

export const useFetchTasks = (status: Task['status'] = 'open') => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const q = query(collection(db, 'tasks'), where('status', '==', status));
        const querySnapshot = await getDocs(q);
        
        const fetchedTasks: Task[] = [];
        querySnapshot.forEach((doc) => {
          fetchedTasks.push({ id: doc.id, ...doc.data() } as Task);
        });
        
        setTasks(fetchedTasks);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tasks');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [status]);

  return { tasks, loading, error };
};