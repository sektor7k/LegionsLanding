"use client"
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar-browse';
import { UserNav } from './user-nav';
import Link from 'next/link';

import Image from 'next/image';
import { DashboardNavHeader } from '../dashboard-nav';
import { useSession } from 'next-auth/react';
import { getNavItemsBrowse } from '@/constants/data';

interface RouteProps {
    href: string;
    label: string;
}

export default function BrowseHeader() {

    const { data: session } = useSession();
    const navItems = getNavItemsBrowse(session);


    return (
        <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-black bg-opacity-30 backdrop-blur">
            <nav className="flex h-14 items-center justify-between px-4">
                <div className="hidden lg:block">
                    <Link
                        href={'/'}
                    >
                        <Image
                            src={"/logoDark.png"}
                            alt="Logo"
                            width={130}
                            height={100}
                        />

                    </Link>
                </div>

                <div className="hidden lg:block gap-2">
                    <DashboardNavHeader
                        items={navItems}
                    />
                </div>

                <div className={cn('block lg:!hidden')}>
                    <MobileSidebar />
                </div>

                <div className="flex items-center gap-2">
                    <UserNav />
                </div>
            </nav>
        </div>
    );
}