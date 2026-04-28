import { getData } from '@/lib/api/data';
import { Avatar, Badge, Button, Card, CloseButton } from "@heroui/react";
import Image from 'next/image';
import Link from 'next/link';

const PhotoDetails = async ({ params }) => {
    const { id } = await params;
    // console.log(id,'id')
    const data = await getData()
    const photo = data.find(n => n.id === Number(id))
    // console.log(photo,'details photo')
    const { title, imageUrl, prompt, category, likes, downloads, tags } = photo;

    return (
        <Card className="w-full items-stretch md:flex-row gap-12 my-12 ">
            <div className='relative w-1/2 aspect-square'>
                <Image
                    src={imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={title}
                    className='object-cover rounded'
                />
            </div>
            <div className="flex flex-1 flex-col gap-3 ">
                <Card.Header className="gap-1 space-y-4">
                    <Card.Title className="pr-8 text-2xl font-bold">Title : {title}!</Card.Title>
                    <p>Category : {category}</p>
                    <div className='flex gap-4 '>
                        {tags.map((tag, size) => (
                            <div key={size} className='bg-linear-to-r from-purple-600 to-orange-400 text-white rounded-2xl p-2'>
                                {tag}
                            </div>
                        ))}
                    </div>
                    <Card.Description>
                        Prompt :{prompt}
                    </Card.Description>
                    <Link href={`/all-photo`}> <CloseButton aria-label="Close banner" className="absolute top-3 right-3 text-red-700" /></Link>
                </Card.Header>
            </div>
        </Card>
    )
}

export default PhotoDetails