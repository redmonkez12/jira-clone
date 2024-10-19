"use client";

import { SignUpCard } from "@/features/auth/components/sign-up-card";
import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export default function Page() {
    const user = await getCurrent();

    if (user) {
        redirect("/");
    }
    
    return (
        <SignUpCard/>
    );
}