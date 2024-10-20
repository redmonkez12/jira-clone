import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DottedSeparator } from "@/components/dotted-seperator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import { loginSchema } from "../schemas";
import { useLogin } from "../api/use-login";

export function SignInCard() {
    const { mutate, isPending } = useLogin();

    const form = useForm<z.infer<typeof loginSchema>>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(loginSchema),
    });

    function onSubmit(values: z.infer<typeof loginSchema>) {
        mutate({ json: values });
    }

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Vítejte zpět!
                </CardTitle>
            </CardHeader>
            <div className="px-7 mb-2">
                <DottedSeparator/>
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            type="email"
                                            placeholder="Váš email"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            type="password"
                                            placeholder="Vaše heslo"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <Button className="w-full" disabled={isPending} size="lg">
                            Příhlásit
                        </Button>
                    </form>
                </Form>
            </CardContent>

            <div className="px-7">
                <DottedSeparator/>
            </div>

            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button variant="secondary" disabled={false} size="lg" className="w-full">
                    <FcGoogle className="mr-2 size-5"/>Přihlášení Google
                </Button>
                <Button variant="secondary" disabled={false} size="lg" className="w-full">
                    <FaDiscord className="mr-2 size-5"/>Přihlášení Discord
                </Button>
            </CardContent>
            <div className="px-7">
                <DottedSeparator/>
            </div>
            <CardContent className="p-7 flex items-center justify-center">
                <p>
                    Ještě nemáš účet?
                    <Link href="/sign-up">
                        <span className="text-blue-700">&nbsp;Registrace</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
}
