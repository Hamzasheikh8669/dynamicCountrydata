import Link from "next/link";

const country = () => {
  return (
    <>
     <div className="bg-black-400 flex justify-evenly  text-4xl text-white italic underline">
        {/* <h2 className="text-blue-600 justify-center ">This is Home Page</h2> */}
        <Link href="/">Home</Link>
        <Link href="/AboutUs">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contactUs">Contact</Link>
        <Link href="/">Country</Link>
        <Link href="/">FeedBack</Link>
        <Link href="/">Dashboard</Link>
      </div>
      <div>
        <h1 className="text-3xl bold mt-5">this is Country page:</h1>
        <ul className="mt-3 text-2xl underline text-blue-500 ">
          <li>
            <Link href={"/country/Pakistan"}  >Pakistan</Link>
          </li>
          <li>
            <Link href={"/country/India"}>India</Link>
          </li>
          <li>
            <Link href={"/country/Saudia_Arabia"}>Saudia Arabia</Link>
          </li>

          <li>
            <Link href={"/country/China"}>China</Link>
          </li>

          <li>
            <Link href={"/country/Bangladesh"}>Bangladesh</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default country;
