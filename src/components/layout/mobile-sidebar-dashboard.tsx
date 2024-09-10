'use client';
import { DashboardNav } from '@/components/dashboard-nav';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { getNavItems } from '@/constants/data';
import { MenuIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
 
// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
} 

export function MobileSidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const navItems = getNavItems(session);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0 bg-black bg-opacity-40 border-none">
          <div className="space-y-4 py-4 ">
            <div className="px-3 py-2">
              <p className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Overview
              </p>
              <div className="space-y-1">
                <DashboardNav
                  items={navItems}
                  isMobileNav={true}
                  setOpen={setOpen}
                />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}