import { User } from "@supabase/supabase-js";
import { create } from "zustand";

interface UserState {
  user: User | null; // Updated to include `null`
  setUser: (user: User | null) => void; // Updated to include `null`
}

export const useUser = create<UserState>((set) => ({
  user: null, // Initialize with `null`
  setUser: (user) => set({ user }),
}));
