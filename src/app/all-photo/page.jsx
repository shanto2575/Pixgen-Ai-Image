import AllPhotosCard from '@/components/HomePage/AllPhotosCard';
import { getData } from '@/lib/api/data';
import React from 'react'

const AllPhotosPage = async () => {
    const photo = await getData();
    return (
        <div>
            <h2 className='text-2xl font-bold mt-12'>All Generations Photos</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-3'>
                {
                    photo.map(p => <AllPhotosCard key={p.id} photo={p}/>)
                }
            </div>
        </div>
    )
}

export default AllPhotosPage