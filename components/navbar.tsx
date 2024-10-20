import { UserButton } from "@/features/auth/components/user-button";
import { MobileSidebar } from "@/components/mobile-sidebar";

export function Navbar() {
    return (
        <nav className="pt-4 px-6 flex items-center justify-between">
            <div className="flex-col hidden lg:flex">
                <h1 className="text-2xl">Home</h1>
                <p className="text-muted-foreground">Monitor all of projects ans tasks here</p>
            </div>
            <MobileSidebar/>
            <UserButton/>
        </nav>
    );
}