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
   
      <h1 className="text-4xl mt-5 ml-10 underline bg-blue-600 flex items-center justify-center">Country India:</h1>
      <p className="mt-3 text-2xl ml-10 text-blue-300">Name: India</p>
      <p className="mt-1 text-2xl ml-10 text-blue-300">population: 1400000000</p>
      <p className="mt-1 text-2xl ml-10 text-blue-300">capital: Delhi</p>
      <p className="mt-1 text-2xl ml-10 text-blue-300">small city:Goa </p>
      <p className="mt-1 text-2xl ml-10 text-blue-300">Big city: Mumbai</p>


     
      
      <button><Link href="/country" className="flex justify-evenly items-center bg-blue-500 p-2 mt-6 ml-10 text-xl text-black  rounded-lg">Back to countries</Link></button>
       

   </>
      
   
  )
}

