import Link from "next/link"


export default function Pakistan(){
  return (
   <>
   <div className="bg-blue-400 flex justify-evenly  text-4xl text-black italic underline">
        <Link href="/">Home</Link>
        <Link href="/AboutUs">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/country">Country</Link>
        <Link href="/">FeedBack</Link>
        <Link href="/">Dashboard</Link>
      </div>
   
      <h1 className="text-4xl mt-5 ml-10 underline bg-red-600  flex items-center justify-center">Country China:</h1>
      <p className="mt-3 text-2xl ml-10  text-red-600">Name: China</p>
      <p className="mt-1 text-2xl ml-10  text-red-600">population: 1200000000</p>
      <p className="mt-1 text-2xl ml-10 text-red-600">capital: Beijing</p>
      <p className="mt-1 text-2xl ml-10 text-red-600">small city: Wusu Town</p>
      <p className="mt-1 text-2xl ml-10  text-red-600">Big city: shangai</p>


      
      

   </>
      
   
  )
}

