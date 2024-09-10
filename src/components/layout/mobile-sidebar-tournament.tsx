'use client';
import { DashboardNav, DashboardNavTournament } from '@/components/dashboard-nav';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { getNavItemsBrowse, getNavItemsTournament } from '@/constants/data';
import { MenuIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
 
type TournamentHeaderProps = {
  id: string;
};


export function MobileSidebar({ id }: TournamentHeaderProps) {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const navItems = getNavItemsTournament({id});
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0 bg-black bg-opacity-40 border-none">
          <div className="space-y-4 py-4 ">
            <div className="px-3 py-2">
              <p className="mb-6 px-4 text-lg font-semibold tracking-tight">
                Tournament
              </p>
              <div className="space-y-1">
                <DashboardNavTournament
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