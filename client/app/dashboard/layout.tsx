import React, { ReactNode } from "react";
import { MainNav } from '../../components/dashboard/main-nav'
import { Search } from '../../components/dashboard/Search'
import { UserNav } from '../../components/dashboard/user-nav'

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    
    return (
        <div className="hidden flex-col md:flex">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <MainNav className="mx-6" />
                        <div className="ml-auto flex items-center space-x-4">
                    <Search />
                    <UserNav />
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    )
  }