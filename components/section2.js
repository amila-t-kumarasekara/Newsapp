import Link from "next/link"
import Image from "next/image"
import Author from "./child/author"

export default function Sec() {
  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Top Stories</h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            { Post() }
            { Post() }
            { Post() }
            { Post() }
            { Post() }
            { Post() }
            { Post() }
        </div>
    </section>
  )
}


function Post(){
    return (
        <div className="item">
            <div className="images">
                <Link href={"/"}><a><Image src={"/images/ping.jpg"} className="rounded" width={500} height={350} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 14, 2022</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur eu justo nec vestibulum. Morbi bibendum ex arcu, ornare faucibus lorem cursus at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed et purus vitae elit maximus cursus sit amet sit amet risus
                </p>
                <Author/>
            </div>
        </div>
    )
}