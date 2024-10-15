import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { DottedSeperator } from "@/components/dotted-seperator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas";
import { useRegister } from "../api/use-register";

export function SignUpCard() {
    const { mutate } = useRegister();

    const form = useForm<z.infer<typeof registerSchema>>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(registerSchema),
     });

    function onSubmit(values: z.infer<typeof registerSchema>) {
        mutate({ json: values });
     }

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                     Vytvoření účtu
                </CardTitle>
                <CardDescription>
                    Registrací souhlasíte s našimi podmínkami{" "}
                    <Link href="/privacy">
                        <span className="text-blue-700">Ochranny osobních údajů</span>
                    </Link>{" "}
                    <Link href="/terms">
                        <span className="text-blue-700">Obchodní podmínky</span>
                    </Link>
                </CardDescription>
            </CardHeader>
            <div className="px-7 mb-2">
                 <DottedSeperator/>
            </div>
            <CardContent className="p-7">
                <form className="space-y-4">
                    <Input
                        required
                        type="text"
                        value={""}
                        onChange={() => {}}
                        placeholder="Vaše jméno"
                        disabled={false}
                    />

                    <Input
                        required
                        type="email"
                        value={""}
                        onChange={() => {}}
                        placeholder="Váš email"
                        disabled={false}
                    />

                    <Input
                        required
                        type="password"
                        value={""}
                        onChange={() => {}}
                        placeholder="Vaše heslo"
                        disabled={false}
                        min={8}
                        max={256}
                    />

                    <Button className="w-full" disabled={false} size="lg">
                        Příhlásit
                    </Button>
                </form>
            </CardContent>

            <div className="px-7">
                <DottedSeperator/>
            </div>

            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button variant="secondary" disabled={false} size="lg" className="w-full">
                    <FcGoogle className="mr-2 size-5"/>Přihlášení Google
                </Button>
                <Button variant="secondary" disabled={false} size="lg" className="w-full">
                    <FaDiscord className="mr-2 size-5"/>Přihlášení Discord
                </Button>
            </CardContent>
        </Card>
    );
}
