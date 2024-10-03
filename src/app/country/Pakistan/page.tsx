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
   
      <h1 className="text-4xl mt-5 ml-10 underline bg-green-600 flex justify-center items-center italic" >Country Pakistan:</h1>
      <p className="mt-3 text-2xl ml-10 text-green-600" >Name: Pakistan</p>
      <p className="mt-1 text-2xl ml-10 text-green-600" >population: 24000000</p>
      <p className="mt-1 text-2xl ml-10 text-green-600" >capital: Islamabad</p>
      <p className="mt-1 text-2xl ml-10 text-green-600" >small city: ziarat</p>
      <p className="mt-1 text-2xl ml-10 text-green-600" >Big city: Karachi</p>


      
      

   </>
      
   
  )
}

