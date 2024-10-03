import Link from "next/link"


export default function UAE(){
  return (
   <>
    <div className="bg-cyan-400 flex justify-evenly text-4xl text-black italic underline">
        <Link href="/">Home</Link>
        <Link href="/AboutUs">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/country">Country</Link>
        <Link href="/">FeedBack</Link>
        <Link href="/">Dashboard</Link>
      </div>
   
      <h1 className="text-4xl mt-5 ml-10 underline font-bold">Country: Saudia Arabia</h1>
      <p className="mt-3 text-2xl ml-10  text-green-300">Name: Saudia Arabia</p>
      <p className="mt-1 text-2xl ml-10  text-green-300">population: 3600000</p>
      <p className="mt-1 text-2xl ml-10 text-green-300">capital:  Riyadh</p>
      <p className="mt-1 text-2xl ml-10 text-green-300">small city: jeddah</p>
      <p className="mt-1 text-2xl ml-10  text-green-300">Big city: Riyadh </p>


      
      <button><Link href="/country" className="flex justify-evenly items-center bg-green-500 p-2 mt-6 ml-10 text-xl text-black  rounded-lg">Back to countries</Link></button>
      

   </>
      
   
  )
}

