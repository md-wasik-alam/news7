import Image from 'next/image'
import Link from 'next/link';
import NewsCard from './components/NewsCard';


export default async function Home() {
    let data = await fetch("http://127.0.0.1:3000/api/category")
    data =  await data.json();

    let newsRecord = await fetch("http://127.0.0.1:3000/api/post")
    newsRecord =  await newsRecord.json();
  return (
    <>
      <div className='flex gap-4'>
        <div className='w-3/12'>
          {
            data.data.map((value) => (
              <h2 className='bg-red-500'>{value.title}</h2>
            ))
          }
        </div>
        <div className='w-9/12'>
          {
            newsRecord.data.map((value) => (
              <NewsCard value={value}/>
            ))
          }
        </div>
      </div>
    </>
  )
}
