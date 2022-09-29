import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return(
        <nav className="bg-white p-5 shadow md:flex md:items-center md:justify-between ">
            <div className="flex items-center">
                <Image src={"/images/fixers-logo.png"} width={50} height={50} /> 
                <span className="text-3xl bold">The Fixers</span>
            </div>
            
            <ul>
                <li className="flex">
                    <a href="#" className="text-xl px-2"> Home</a>
                    <a href="#" className="text-xl px-2"> About Us</a>
                    <Link href={"#"}> 
                    <p className="text-xl px-2"> Contact Us </p>
                    </Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default Header;