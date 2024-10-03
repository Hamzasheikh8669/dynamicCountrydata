import Link from "next/link"


export default function Pakistan(){
  return (
   <>
    <div className="bg-cyan-400 flex justify-evenly  text-4xl text-black italic underline">
        <Link href="/">Home</Link>
        <Link href="/AboutUs">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/country">Country</Link>
        <Link href="/">FeedBack</Link>
        <Link href="/">Dashboard</Link>
      </div>
   
      <h1 className="text-4xl bg-green-600 mt-5 ml-10 underline text-white flex justify-center items-center">Country  Bangladesh:</h1>
      <p className="mt-3 text-2xl ml-10  text-green-300">Name: Bangladesh</p>
      <p className="mt-1 text-2xl ml-10  text-green-300">population: 17000000</p>
      <p className="mt-1 text-2xl ml-10 text-green-300">capital: Dhaka</p>
      <p className="mt-1 text-2xl ml-10 text-green-300">small city: mirpur</p>
      <p className="mt-1 text-2xl ml-10  text-green-300">Big city: Dhaka</p>


      
      

   </>
      
   
  )
}

