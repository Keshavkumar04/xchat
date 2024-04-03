"use client";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Suspense, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";

import { LoginSchema } from "@/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { CardWrapper } from "./card-wrapper";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/actions/login";
import Link from "next/link";
import LoadingModal from "../chat/LoadingModal";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider !"
      : ""; // if we use same id for google and github a error comes which can be taken from url to display a message

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    // Everytime for a new submit
    setError("");
    setSuccess("");

    // console.log(values);
    startTransition(() => {
      login(values) // Passing the values of our api route
        .then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        });
    });
  };

  return (
    <Suspense fallback={<LoadingModal />}>
      <CardWrapper
        headerLabel="Welcome back"
        backButtonLabel="Don't have an account ?"
        backButtonHref="/register"
        showSocial
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="yourname@example.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="******"
                        type="password"
                        disabled={isPending}
                      />
                    </FormControl>
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal"
                    >
                      <Link href="/reset">Forgot password ?</Link>
                    </Button>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* THESE WILL BE VISIBLE ONLY IN CASE OF A MESSAGE */}
            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            <Button type="submit" className="w-full" disabled={isPending}>
              Login
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </Suspense>
  );
};
