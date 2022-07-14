import Image from "next/image";
import Link from "next/link";
import Author from "./child/Author";
import { Swiper, SwiperSlide } from 'swiper/react'; // import swiper react componets
import 'swiper/css' ; // imporrt swiper css
import SwiperCore, { Autoplay } from 'swiper';


export default function Section() {
    SwiperCore.use([Autoplay])

  return (
    <section className="py-16" >
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">Headlines</h1>

    <Swiper
    slidesPerView={1}
      
    /*spaceBetween={50}
    onSlideChange={() => console.log('slide change')}
    onSwiper={swiper) => console.log(swiper)*/
    >
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
    </Swiper>


        </div>
    </section>
  )
}

function Slide(){
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}><a><Image src={"/images/ping.jpg"} width={550} height={550} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur eu justo nec vestibulum. Morbi bibendum ex arcu, ornare faucibus lorem cursus at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed et purus vitae elit maximus cursus sit amet sit amet risus. Integer vitae vehicula nisl, nec consequat nulla. Pellentesque sit amet tellus eleifend, aliquet leo at, varius dui. Sed mattis leo in varius cursus. Phasellus nec viverra ex.


                </p>
                <Author/>
            </div>
        </div>
    )
}