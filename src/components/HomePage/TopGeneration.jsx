import { getData } from '@/lib/api/data'
import Image from 'next/image';
import React from 'react'
import TopGenerationsCard from './TopGenerationsCard';
import Link from 'next/link';
import { Button } from '@heroui/react';

const TopGeneration = async () => {
    const photo = await getData();
    console.log(photo)
    return (
        <div>
            <h2 className='text-2xl font-bold mt-12'>Top Generations</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-3'>
                {
                    photo.slice(0, 6).map(p => <TopGenerationsCard key={p.id} photo={p}></TopGenerationsCard>)
                }
            </div>
            <div className='text-center mt-8'>
                <Link href={`/all-photo`}><Button variant='secondary'>More Photo</Button></Link>
            </div>
        </div>
    )
}

export default TopGeneration