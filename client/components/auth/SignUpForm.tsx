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


export function SignUpForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Let's get rolling 🙌</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input id="fullName" type="text" placeholder="John Doe" />
            </div>
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
        <Button className="w-full" >Sign Up</Button>
      </CardFooter>
      <CardFooter className="flex justify-end">
        <Link href="/" className={buttonVariants({ variant: "link" })}>Sign In</Link>
      </CardFooter>

      
    </Card>
  )
}
