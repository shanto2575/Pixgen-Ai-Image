export const getData=async()=>{
    const res= await fetch('https://pixgen-ai-image.vercel.app/data.json')
    const data=await res.json()
    return data;
}