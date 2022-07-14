import Link from "next/link";


const Navbar = () => {
    return (
        <header className="bg-gray-50">
            <div className="xl:conatiner xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    {/* input-search-box class => globals.css */}
                    <input type="text" className="input-search-box" placeholder="Search"/>
                </div>
                <div className="shrink w-80 sm:order-2 ">
                    <Link href={"/"}>
                    <a className="font-bold text-xl">News<span className="text-cyan-500">Here</span></a>
                    </Link>
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-7">
                    {/* <ul class="flex space-x-6" role="navigation">
                    <li><a href="">Home</a></li>
                    <li><a href="">Support</a></li>
                     
                    <li class="relative dropdown:block" aria-haspopup="true">
                        <a href="">Products</a>
                        
                        <ul class="hidden absolute right-0 w-auto" aria-label="submenu">
                        <li><a href="">macOS</a></li>
                        <li><a href="">Windows</a></li>
                        </ul>
                    </li>
                    </ul> */}
                        <Link href={"/"}><a>Category</a></Link>

                        <Link href={"/"}><a>Gallery</a></Link>
                        <Link href={"/"}><a>Login</a></Link>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Navbar;