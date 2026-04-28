'use client'
import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import Image from 'next/image';
import avater from '../../../asset/avater.jpg'
import { UpdateUser } from '@/components/User/UpdateUser';

const UserProfilePage = () => {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    if (isPending) return <span className="loading loading-infinity loading-md text-accent"></span>

    if (!user) return <h2 className="text-center mt-20">Not logged in</h2>

    return (
        <div className='flex flex-col items-center justify-center gap-4 h-[60vh]'>
            <Card className='border rounded-2xl p-5 text-center space-y-4'>

                {/* image wrapper */}
                <div className='relative w-[400px] h-[400px] mx-auto'>
                    <Image
                        src={user?.image || avater}
                        fill
                        sizes="200px"
                        alt={user?.name}
                        className='rounded object-contain'
                    />
                </div>

                <h2 className='text-xl font-bold'>Name : {user?.name}</h2>
                <p>Email : {user?.email}</p>

                <UpdateUser />

            </Card>
        </div>
    )
}

export default UserProfilePage