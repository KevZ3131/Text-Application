"use client"

import AuthModal from "./AuthModal";
import useAuthModal from "@/hooks/useAuthModal";

const LogInButton = () => {
    const { onOpen } = useAuthModal();

    const handleClick = () => {
        onOpen();
    };

    return (
    <div>
        <button
            className="
                absolute
                top-0
                right-0
                outline
                rounded
                font-bold
                px-4
                py-2
                bg-gray-300
                text-xl
            "
            onClick={handleClick}
        >
            Log In
        </button>
        <AuthModal/>
    </div>
    )
}

export default LogInButton;