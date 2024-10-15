"use client";

import {PropsWithChildren} from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function AuthLayout({children}: PropsWithChildren) {
    const pathname = usePathname();

    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.svg" width={50} height={50} alt="Logo"/>
                        <div className="font-semibold text-2xl">Beautis</div>
                    </Link>
                    <div className="flex items-center gap-2">
                        <Button variant="secondary" asChild>
                            <Link href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}>
                                {pathname === "/sign-in"? "Registrace" : "Přihlášení"}
                            </Link>
                        </Button>
                    </div>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
    );
}