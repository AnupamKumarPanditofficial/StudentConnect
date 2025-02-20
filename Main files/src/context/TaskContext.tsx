import { createContext, useContext, useState, ReactNode } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth';

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

interface TaskContextType {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  createTask: (task: Omit<Task, 'id' | 'createdBy' | 'status'>) => Promise<void>;
  fetchTasks: () => Promise<void>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const createTask = async (taskData: Omit<Task, 'id' | 'createdBy' | 'status'>) => {
    if (!user) throw new Error('User must be authenticated to create a task');

    setLoading(true);
    try {
      const taskRef = await addDoc(collection(db, 'tasks'), {
        ...taskData,
        createdBy: user.uid,
        status: 'open',
        createdAt: new Date().toISOString()
      });
      
      const newTask: Task = {
        id: taskRef.id,
        ...taskData,
        createdBy: user.uid,
        status: 'open'
      };
      
      setTasks(prev => [...prev, newTask]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create task');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'tasks'), where('status', '==', 'open'));
      const querySnapshot = await getDocs(q);
      
      const fetchedTasks: Task[] = [];
      querySnapshot.forEach((doc) => {
        fetchedTasks.push({ id: doc.id, ...doc.data() } as Task);
      });
      
      setTasks(fetchedTasks);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch tasks');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    tasks,
    loading,
    error,
    createTask,
    fetchTasks
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};