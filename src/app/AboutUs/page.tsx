import Link from "next/link";

export default function About() {
  return (
    <>
        <div className="bg-cyan-600 flex justify-evenly  text-4xl text-black italic underline">
        <Link href="/">Home</Link>
        <Link href="/AboutUs">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/country">Country</Link>
        <Link href="/">FeedBack</Link>
        <Link href="/">Dashboard</Link>
      </div>

      {/* Move "this is about page" below the navbar */}
      <div className="mt-8 text-xl">
        this is about page
      </div>
    </>
  );
}
