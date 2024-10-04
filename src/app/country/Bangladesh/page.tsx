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
        <img className="h-40 w-60 ml-10 mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/640px-Flag_of_Bangladesh.svg.png"  alt="Bangladesh Flag" />
       <h1 className="text-4xl mt-5 ml-10 underline font-bold">Country: Bangladesh</h1>
      <p className="mt-3 text-2xl ml-10  text-green-300">Name: Bangladesh</p>
      <p className="mt-1 text-2xl ml-10  text-green-300">population: 17000000</p>
      <p className="mt-1 text-2xl ml-10 text-green-300">capital: Dhaka</p>
      <p className="mt-1 text-2xl ml-10 text-green-300">small city: mirpur</p>
      <p className="mt-1 text-2xl ml-10  text-green-300">Big city: Dhaka</p>


      
       <button><Link href="/country" className="flex justify-evenly items-center bg-green-500 p-2 mt-6 ml-10 text-xl text-black  rounded-lg">Back to countries</Link></button>
      

   </>
      
   
  )
}

