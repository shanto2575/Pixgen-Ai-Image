import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { GoDownload } from 'react-icons/go';

const AllPhotosCard = ({ photo }) => {
    const {id, title, imageUrl, prompt, category, likes, downloads, tags } = photo;
    return (

        <Card className='border rounded-2xl p-5 space-y-4'>
            <div className='relative w-full aspect-square'>
                <Image
                    src={imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={title}
                    className='object-cover rounded'
                />
                <Chip className='absolute right-2 top-2 '>{category}</Chip>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
            <div className='flex justify-between items-center my-2 text-xl'>
                <p className='flex gap-3 items-center'><FaHeart />{likes}K</p>
                <Separator orientation='vertical' />
                <p className='flex gap-3 items-center'><GoDownload />{downloads} K</p>
            </div>
            <Link href={`/all-photo/${id}`}> <Button variant='outline' className='w-full my-2 text-md font-semibold hover:bg-purple-900 hover:text-white'>View</Button></Link>
        </Card>
    )
}

export default AllPhotosCard
