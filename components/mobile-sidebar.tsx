"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sidebar } from "./sidebar";

export function MobileSidebar() {
    return (
        <Sheet modal={false}>
            <SheetTrigger asChild>
                <Button variant="secondary" className="lg:hidden">
                    <MenuIcon className="size-5 text-neutral-500"/>
                </Button>  
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar/>
            </SheetContent>
        </Sheet>
    );
}