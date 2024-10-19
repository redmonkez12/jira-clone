"use client";

import { SignInCard } from "@/features/auth/components/sign-in-card";
import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export default async function Page() {
    const user = await getCurrent();
    
    if (user) {
        redirect("/");
    }
    
    return (
        <SignInCard/>
    );
}