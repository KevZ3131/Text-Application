"use client";
import Modal from "@/components/Modal";
import useAuthModal from "@/hooks/useAuthModal";
import AuthModal from "@/components/AuthModal";

import { useEffect, useState } from "react";

const ModalProvider =() => {
    return (
        <AuthModal/>
    );
}

export default ModalProvider;