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


export function ForgetPasswordForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Forget Password</CardTitle>
        <CardDescription>Let's get your lost password 🔑</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="email" type="email" placeholder="example@gmail.com" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between mb-0.5">
        <Button className="w-full" >Send Email</Button>
      </CardFooter>
      <CardFooter className="flex justify-between">
        <Link href="/" className={buttonVariants({ variant: "link" })}>Sign In</Link>
        
        <Link href="/signup" className={buttonVariants({ variant: "link" })}>Sign Up</Link>
      </CardFooter>
    </Card>
  )
}
