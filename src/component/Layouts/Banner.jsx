import Button from "../Elements/Button"
import CardInfo from "../Fragments/Card/CardInfo"

const Banner = () => {
    return (
        <section id="Home" className="banner relative">
            <div className="px-12 flex flex-row items-center pt-32 h-3/4">
                <div className="">
                    <p className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-[0.2rem] text-[#373A40]">Let us handle your <br /> dry cleaning & <span className="text-yellow-400">laundry</span></p>
                    <p className="text-white mt-2 text-xs xl:text-md">Bring to table win-win survival strategiesto ensure proactive domination.</p>
                    <Button className="mt-3 bg-yellow-400 text-white rounded-b-2xl rounded-tr-2xl px-8 py-2 shadow-lg hover:bg-yellow-600">Order</Button>
                </div>
            </div>
            <CardInfo />
        </section>
    )
}

export default Banner