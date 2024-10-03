import Link from "next/link"

export default function Home(){
  return (
    <>
    <div className="bg-cyan-600 flex justify-evenly text-4xl text-black italic underline">
      {/* <h2 className="text-blue-600 justify-center ">This is Home Page</h2> */}
      <Link href="/">Home</Link>
      <Link href="/AboutUs">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contactUs">Contact</Link>
      <Link href="/">Country</Link>
      <Link href="/">FeedBack</Link>
      <Link href="/">Dashboard</Link>

    </div>
    <h2 className="mt-8 text-4xl Itlaic underline">Hamza Creation!!</h2>
    <p className="mt-4 text-2xl">Hey This is Hamza Sheikh Mini project</p>
    </>
  )
}
