
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSession } from 'next-auth/react';

interface AvatarProb {
    classname: string,
}
export default function AvatarDemo({classname}:AvatarProb){

  const session = useSession()
    return(
        <>
        <Avatar className={classname}>
              <AvatarImage
                src={session.data?.user.image ?? 'https://github.com/shadcn.png'}
                alt={session.data?.user.username ?? ''}
              />
              <AvatarFallback>{session.data?.user.username}</AvatarFallback>
            </Avatar>
        </>
    )
}