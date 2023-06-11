"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { authFormSchema } from "@/types/auth-form"

import { Button } from "./ui/button"
import { Card } from "./ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"

type AuthFormProps = {
  mode: "login" | "sign-up"
}
export default function AuthForm(props: AuthFormProps) {
  const { mode } = props
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (values: z.infer<typeof authFormSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Card className="w-[500px] p-6 animate-in fade-in duration-500">
      <div className="mb-4 flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold">
          {mode === "login"
            ? "Sign in to your account"
            : "Create a new account"}
        </h1>
        <p className="text-sm text-muted-foreground">
          or{" "}
          <Link
            href={mode === "login" ? "/auth/sign-up" : "/auth/login"}
            className="hover:underline"
          >
            {mode === "login"
              ? "Create a new account"
              : "Sign in to your account"}
          </Link>
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john-snow@got.com"
                    type="email"
                    {...field}
                    required
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
                  <Input type="password" {...field} required />
                </FormControl>
                <FormDescription>Min 8 characters required</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            {mode === "login" ? "Login" : "Sign up"}
          </Button>
        </form>
      </Form>
    </Card>
  )
}
