// import { useState } from "react"
import Banner from "../component/Layouts/Banner.jsx"
import Navbar from "../component/Layouts/Navbar.jsx"
import Footer from "../component/Layouts/Footer.jsx"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css'
import { Autoplay } from "swiper/modules"
import { useLogin } from "../hooks/useLogin.jsx"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef } from "react"
import { Container } from "postcss"
const HomePage = () => {
    // const [imgSrc, setImgSrc] = useState('/images/pick.png')
    const username = useLogin();
    const WhoWeAre = [
        {
            id: 1,
            image: '/images/pick.png',
        },
        {
            id: 2,
            image: '/images/cleanLaundry.jpg',
        },
        {
            id: 3,
            image: '/images/quikerDelivery.jpg',
        }
    ]

    const serviceRef = useRef();
    const lineRef = useRef();
    const cardRefs = useRef([]);

    // useGSAP(() => {
    //     gsap.fromTo(serviceRef.current, {
    //         scale: 0,
    //         opacity: 0,
    //     }, {
    //         scale: 1,
    //         opacity: 1,
    //         duration: 1,
    //         delay: 0.5,
    //     });
    // }, {scope:serviceRef.current})

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: serviceRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
                markers: false
            }
        });

        cardRefs.current.forEach((ref, index) => {
            if (index === 0) {
                tl.fromTo(ref, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5 });
            } else {
                tl.to(`.line-${index}`, { width: "100%", duration: 0.5 })
                  .fromTo(ref, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5 });
            }
        });
    }, []);
    
    return(
        <div className="h-screen">
            {/* NAVBAR */}
            <Navbar />

            {/* BANNER */}
            <Banner />
            
            {/* HOW IT WORKS */}
            {/* <section ref={serviceRef} id="Service" className="mt-36 lg:mt-96 xl:mt-48">
                <div className="text-center">
                    <p className="text-xl font-bold text-[#373A40]">HOW IT WORKS {username}</p>
                    <div className="w-[5%] mx-auto mt-1">
                        <hr className="bg-sky-400 h-1" />
                    </div>
                    <p className="mt-3 text-slate-400">
                        Bring to the table win-win survival strategies to ensure prodomination. At the end of the day, going forward, <br /> anew normal that evolved from generation X is on the runway heading towards
                    </p>
                </div>
                <div className="relative container m-10 mx-auto">
                    <div className="bg-yellow-400 w-[80%] px-96 py-1 rounded-xl mx-auto absolute bottom-[45%] end-[10%] hidden xl:block"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 tes">
                        <div className="z-10 sm:px-28 md:px-0">
                            <div className="bg-white shadow-lg px-16 py-5 rounded-xl text-center mx-10">
                                <img src="/images/laundryBag.png" alt="" className="h-24 mx-auto"/>
                                <p className="text-slate-500 text-xl">Back Up All Your <br /> Dirty Clothes</p>
                            </div>
                        </div>
                        <div className="z-10 sm:px-28 md:px-0 xl:mt-8">
                            <div className="bg-white shadow-lg px-16 py-5 rounded-xl text-center mx-10">
                                <img src="/images/tshirt.png" alt="" className="h-24 mx-auto"/>
                                <p className="text-slate-500 text-xl">We Pick Up Your <br /> Clothes</p>
                            </div>
                        </div>
                        <div className="z-10 sm:px-28 md:px-0 xl:mt-16">
                            <div className="bg-white shadow-lg px-16 py-5 rounded-xl text-center mx-10">
                                <img src="/images/mesin.png" alt="" className="h-24 mx-auto"/>
                                <p className="text-slate-500 text-xl">We Clean Your <br /> Clothes</p>
                            </div>
                        </div>
                        <div className="z-10 sm:px-28 md:px-0 xl:mt-24">
                            <div className="bg-white shadow-lg px-16 py-5 rounded-xl text-center mx-10">
                                <img src="/images/deliver.png" alt="" className="h-24 mx-auto"/>
                                <p className="text-slate-500 text-xl">We Deliver <br /> Clean Clothes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section ref={serviceRef} id="Service" className="mt-36 lg:mt-96 xl:mt-48">
                <div className="text-center">
                    <p className="text-xl font-bold text-[#373A40]">HOW IT WORKS {username}</p>
                    <div className="w-[5%] mx-auto mt-1">
                    <hr className="bg-sky-400 h-1" />
                    </div>
                    <p className="mt-3 text-slate-400">
                    Bring to the table win-win survival strategies to ensure prodomination. At the end of the day, going forward, <br /> anew normal that evolved from generation X is on the runway heading towards
                    </p>
                </div>
                <div className="relative container m-10 mx-auto">
                    <div ref={lineRef} className="bg-yellow-400 w-[80%] px-96 py-1 rounded-xl mx-auto absolute bottom-[45%] end-[10%] hidden xl:block"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 tes">
                    <div ref={el => cardRefs.current[0] = el} className="z-10 sm:px-28 md:px-0">
                        <div className="bg-white shadow-lg px-16 py-5 rounded-xl text-center mx-10">
                        <img src="/images/laundryBag.png" alt="" className="h-24 mx-auto" />
                        <p className="text-slate-500 text-xl">Back Up All Your <br /> Dirty Clothes</p>
                        </div>
                    </div>
                    <div ref={el => cardRefs.current[1] = el} className="z-10 sm:px-28 md:px-0 xl:mt-8">
                        <div className="bg-white shadow-lg px-16 py-5 rounded-xl text-center mx-10">
                        <img src="/images/tshirt.png" alt="" className="h-24 mx-auto" />
                        <p className="text-slate-500 text-xl">We Pick Up Your <br /> Clothes</p>
                        </div>
                    </div>
                    <div ref={el => cardRefs.current[2] = el} className="z-10 sm:px-28 md:px-0 xl:mt-16">
                        <div className="bg-white shadow-lg px-16 py-5 rounded-xl text-center mx-10">
                        <img src="/images/mesin.png" alt="" className="h-24 mx-auto" />
                        <p className="text-slate-500 text-xl">We Clean Your <br /> Clothes</p>
                        </div>
                    </div>
                    <div ref={el => cardRefs.current[3] = el} className="z-10 sm:px-28 md:px-0 xl:mt-24">
                        <div className="bg-white shadow-lg px-16 py-5 rounded-xl text-center mx-10">
                        <img src="/images/deliver.png" alt="" className="h-24 mx-auto" />
                        <p className="text-slate-500 text-xl">We Deliver <br /> Clean Clothes</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section id="About" className="mt-28">
                <div className="grid grid-cols-1 xl:grid-cols-2 xl:h-[450px]">
                    <div className="w-full max-h-[100%] overflow-hidden xl:rounded-e-3xl">
                        <Swiper spaceBetween={50} slidesPerView={1} modules={[Autoplay]} autoplay={{delay: 2000}}>
                            {WhoWeAre.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <img src={item.image} alt="" className="w-full object-cover h-full"/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="flex flex-col items-center xl:items-end px-20 max-h-[100%] pt-12">
                        <p className="text-xl font-bold text-[#373A40]">WHO WE ARE</p>
                        <div className="w-[10%] mt-1 me-3">
                            <hr className="bg-sky-400 h-1" />
                        </div>
                        <p className="text-xl mt-5 text-slate-700">WE ARE PASSIONATE</p>
                        <p className="text-center xl:text-end text-xl text-slate-500 mt-5 xl:ps-24">
                            Bring to the table win-win survival strategies to ensure prodomination. At the end of the day, going forward, a new normal that evolved from generation X is on the runway heading towards a streamline cloud solution. User generated content in real-time will have multiple points for
                        </p>

                        <div className="grid grid-cols-3 mt-10 gap-5">
                            <button className="text-center">
                                <img src="/images/laundryBag2.png" alt="" className="h-12 mx-auto" />
                                <p>We Pick Your <br /> Clothes</p>
                            </button>
                            <button className="text-center">
                                <img src="/images/tshirt2.png" alt="" className="h-12 mx-auto" />
                                <p>Clean <br /> Laundry</p>
                            </button>
                            <button className="text-center">
                                <img src="/images/deliver2.png" alt="" className="h-12 mx-auto" />
                                <p>Quicker <br /> Delivery</p>
                            </button>
                            {/* <button className="text-center" onClick={() => setImgSrc('/images/pick.png')}>
                                <img src="/images/laundryBag2.png" alt="" className="h-12 mx-auto" />
                                <p>We Pick Your <br /> Clothes</p>
                            </button>
                            <button className="text-center" onClick={()=> setImgSrc('/images/cleanLaundry.jpg')}>
                                <img src="/images/tshirt2.png" alt="" className="h-12 mx-auto" />
                                <p>Clean <br /> Laundry</p>
                            </button>
                            <button className="text-center" onClick={()=> setImgSrc('images/quikerDelivery.jpg')}>
                                <img src="/images/deliver2.png" alt="" className="h-12 mx-auto" />
                                <p>Quicker <br /> Delivery</p>
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <div className="mt-16 w-full bg-gradient-to-r from-indigo-500 to-sky-500 p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
                    <div className="lg:col-span-2 text-center">
                        <p className="text-xl font-bold text-white">WHY CHOOSE US</p>
                        <div className="w-[55%] mx-auto mt-1">
                            <hr className="bg-white h-1" />
                        </div>
                    </div>
                    <div className="mt-5 lg:mt-12 lg:px-52">
                        <div className="bg-white p-5 flex flex-col items-center rounded-xl">
                            <video width="640" height="360" controls>
                                <source src="/videos/blackHole.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <p className="text-star pt-5">Discover why <span className="text-sky-400">thousands of people trust</span> us to care for their clothes!</p>
                        </div>
                    </div>
                    <div className="lg:mt-12">
                        <div className="grid grid-cols-1 pt-16">
                            <div className="flex gap-3 text-white">
                                <img src="/images/happy-white.png" alt="" className="h-16" />
                                <div className="pt-1">
                                    <p className="font-bold text-lg">100% Happiness Guaranteed</p>
                                    <p>If you’re not completely satisfied with the wash or dry cleaning, we will re-wash your clothes.</p>
                                    <hr />
                                </div>
                            </div>
                            <div className="flex gap-3 text-white my-7">
                                <img src="/images/timer-white.png" alt="" className="h-16" />
                                <div className="pt-1">
                                    <p className="font-bold text-lg">Faster & HighQuality</p>
                                    <p>If you’re not completely satisfied with the wash or dry cleaning, we will re-wash your clothes.</p>
                                    <hr />
                                </div>
                            </div>
                            <div className="flex gap-3 text-white">
                                <img src="/images/wipe-white.png" alt="" className="h-16" />
                                <div className="pt-1">
                                    <p className="font-bold text-lg">Cleaner</p>
                                    <p>If you’re not completely satisfied with the wash or dry cleaning, we will re-wash your clothes.</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AFFORDABLE PRICE */}
            <section id="Price" className="mt-20">
                <div className="text-center">
                    <p className="text-xl font-bold text-[#373A40]">AFFORDABLE PRICES</p>
                    <div className="w-[5%] mx-auto mt-1">
                        <hr className="bg-sky-400 h-1" />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-5 mt-12">
                    <div className="bg-white shadow-lg px-16 py-5 rounded-xl text-center">
                        <img src="/images/shirt.png" alt="" className="h-24 mx-auto"/>
                        <p className="font-bold text-[#373A40] font-lg mt-3">From <span className="text-yellow-400">Rp. 5000</span> per Shirt</p>
                        <p className="font-thin text-slate-500">Shirt Services</p>
                    </div>
                    <div className="bg-white shadow-lg px-24 py-5 rounded-xl text-center">
                        <img src="/images/bag.png" alt="" className="h-24 mx-auto"/>
                        <p className="font-bold text-[#373A40] font-lg mt-3"><span className="text-yellow-400">Rp. 7000</span> per Kg</p>
                        <p className="font-thin text-slate-500">Laundry Services</p>
                    </div>
                    <div className="bg-white shadow-lg px-16 py-5 rounded-xl text-center">
                        <img src="/images/clothes-hanger.png" alt="" className="h-24 mx-auto"/>
                        <p className="font-bold text-[#373A40] font-lg mt-3">From <span className="text-yellow-400">Rp. 4000</span> per Item</p>
                        <p className="font-thin text-slate-500">Dry Cleaning</p>
                    </div>
                </div>
                    <div className="text-center mt-5">
                        <button className="bg-yellow-400 px-8 py-2 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-yellow-600">All Price</button>
                    </div>
            </section>

            {/* LOCATION */}
            <div className="mt-24">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.3278657794062!2d100.34919500000001!3d-0.89839!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2952a64cb71eee46!2sTeknik%20Elektronika%20UNP!5e0!3m2!1sen!2sus!4v1653308498116!5m2!1sen!2sus" width="680" height="400" allowfullscreen="" loading="lazy" className="w-full"></iframe>
            </div>

            {/* FOOTER */}
            <Footer />
        </div>
    )
}

export default HomePage