const Footer = () => {
    return(
        <>
            <div className="mt-20">
                <div className="flex flex-col justify-center">
                    <img src="public/images/logoBiru.svg" alt="" className="h-16"/>
                    <div className="flex flex-wrap justify-center gap-16 mt-5">
                        <div className="text-center">
                            <p>13AH, San Francisco <br /> New York, <span className="text-sky-500">United States</span></p>
                        </div>
                        <div className="text-center">
                            <p>Send Your Mail At <br /> info@alaundry.com</p>
                        </div>
                        <div className="text-center">
                            <p>1 (800)-123-45-67 <br /> Mon-Fri, <span className="text-sky-500">7:00 am to 7:00 pm</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="mt-10 h-1" />

            <div className="text-center">
                <p className="text-slate-500 py-2">Copyrights@2024 ALaundry. All Rights Reserved</p>
            </div>
        </>
    )
} 
export default Footer