'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import AvatarDemo from './avatarDemo';
export function UserNav() {
  const { data: session } = useSession();

  const router = useRouter();
  const { toast } = useToast();

  const logout = async () => {
    try {

      showToast("See you again soon")
      setTimeout(() => {
        signOut();
      }, 1000);

    } catch (error: any) {
      console.log(error.data.message);
      showErrorToast(error.data.message)

    }
  }

  function showErrorToast(message: string): void {
    toast({
      variant: "destructive",
      title: "Logout failed",
      description: message,
    })
  }

  function showToast(message: string): void {
    toast({
      variant: "destructive",
      title: "Logout Succesfuly",
      description: message,
    })
  }

  if (session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <AvatarDemo classname={'w-9 h-9'} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user?.username ? (
                  session.user.username
                ) : ("username")}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user?.email ? (
                  session.user.email
                ) : (
                  "user@email.com"
                )}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => { router.push(`/u/${session.user.username}/profile`) }}>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>New Team</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logout}>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}