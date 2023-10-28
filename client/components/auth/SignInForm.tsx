"use client"

import * as React from "react"
import Link from 'next/link'
import { Button, buttonVariants  } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function SignInForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Welcome back let's get started 😊</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="email" type="email" placeholder="example@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input id="password" type="password" placeholder="Your account password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between mb-0.5">
        <Button className="w-full" >Deploy</Button>
      </CardFooter>
      <CardFooter className="flex justify-between">
        <Link href="/signup" className={buttonVariants({ variant: "link" })}>Sign Up</Link>
        <Link href="/forgetpassword" className={buttonVariants({ variant: "link" })}>Forget Password</Link>
      </CardFooter>

      
    </Card>
  )
}
