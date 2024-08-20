"use client"

import Modal from "./Modal";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";
import { Session } from '@supabase/supabase-js';
import { supabaseBrowser } from "@/Supabase/browser";
import { useUser } from "@/Supabase/user"; // Import useUser

const AuthModal = () => {
    const { user, setUser } = useUser(state => ({ user: state.user, setUser: state.setUser })); // Get user and setUser from Zustand store
    const { onClose, isOpen } = useAuthModal();

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    const login = async () => {
        const supabase = supabaseBrowser();
        await supabase.auth.signInWithOAuth({
            provider: "github",
        });
    }

    useEffect(() => {
        const supabase = supabaseBrowser();
        
        const getSession = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (data?.session) {
                setUser(data.session.user); // Handle `User | null`
            } else if (error) {
                console.error('Error getting session:', error.message);
            }
        };

        getSession();

        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null); // Handle `User | null`
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, [setUser]);

    const logout = async () => {
        const supabase = supabaseBrowser();
        await supabase.auth.signOut();
        setUser(null); // Ensure user is cleared from Zustand
        window.location.reload()
    }

    return (
        <Modal
            title="Welcome back"
            description="Login to your account"
            isOpen={isOpen}
            onChange={onChange}
        >
            <div> 
                {user ? ( // Use `user` from Zustand store
                <div className="text-center justify-center"> 
                    <h1 className="text-center font-bold text-xl">
                        Authenticated
                    </h1>
                    <button className="py-2 rounded font-bold text-xl" onClick={logout}>
                        Logout
                    </button>
                </div>
                ) : (  
                <button onClick={login}>
                    Login With Github
                </button>
                )}
            </div>
        </Modal>
    );
}

export default AuthModal;
