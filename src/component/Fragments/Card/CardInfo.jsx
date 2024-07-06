import CardHome from "./Card"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css'
import { Autoplay } from "swiper/modules"

const CardContent = [
    {
        id:1,
        title: "Employees",
        image: "/images/employees.png",
        fill: "123",
        fillColor: "text-green-400"
    },
    {
        id:2,
        title: "Branches",
        image: "/images/branch.png",
        fill: "8",
        fillColor: "text-indigo-400"
    },
    {
        id:3,
        title: "Jobs Done",
        image: "/images/jobs.png",
        fill: "203",
        fillColor: "text-amber-400"
    },
]
const CardInfo = () => {
    return (
        <div className="absolute top-[80%] left-1/2 -translate-x-1/2">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {CardContent.map((item) => (
                    <CardHome className="hidden lg:block xl:block" key={item.id} title={item.title} image={item.image} fillColor={item.fillColor} fill={item.fill} />
                ))}
                <div className="bg-white shadow-lg py-5 rounded-xl text-center block lg:hidden xl:hidden">
                    <Swiper spaceBetween={50} slidesPerView={1} modules={[Autoplay]} autoplay={{delay: 1000}}>
                        {CardContent.map((item) => (
                            <SwiperSlide key={item.id}>
                                <p className="font-bold text-sky-500">{item.title}</p>
                                <img src={item.image} alt="" className="h-24 mx-auto"/>
                                <p className={`font-black text-5xl text-green-500 ${item.fillColor}`}>{item.fill}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CardInfo