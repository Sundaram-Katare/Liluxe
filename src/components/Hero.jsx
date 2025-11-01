import { MdChildCare } from "react-icons/md";

export default function Hero() {
    return (
        <>
            <div className="min-h-screen px-4">
                {/* Hero Text */}
                <div className="font-dyna flex flex-col justify-center items-center text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-center">
                    <h1 className="text-orange-500 mb-4">
                        Dress <span className="text-blue-900">Your Little</span>
                    </h1>

                    <h1 className="flex flex-wrap justify-center items-center">
                        Ones in{" "}
                        <span>
                            <img
                                src="images/horse2.gif"
                                alt=""  
                                className="h-16 sm:h-20 md:h-[90px] lg:h-[110px] mx-2 sm:mx-4"
                            />
                        </span>{" "}
                        <span className="bg-yellow-300 text-orange-600 px-3 py-1 rounded-3xl mt-2 sm:mt-0">
                            Colorful
                        </span>
                    </h1>

                    <h1 className="mt-2">Confidence!</h1>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 p-4 m-4 md:m-8 font-dyna text-center">
                    {/* First Div */}
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-orange-500 text-3xl sm:text-4xl">722+</h2>
                        <h3 className="text-black text-2xl sm:text-3xl">Families Prefer us!</h3>
                    </div> 

                    {/* Second Div */}
                    <div className="flex flex-col justify-center items-center text-blue-900">
                        <p className="text-center text-sm sm:text-base">
                            Where every clothing sparks imagination allowing
                        </p>
                        <p className="text-center text-sm sm:text-base">
                            Your child to express themselves 
                        </p>

                        <button className="bg-red-400 text-white font-semibold text-lg sm:text-2xl mt-4 px-4 py-2 border rounded-2xl">
                            Shop Now
                        </button>
                    </div>

                    {/* Third Div */}
                    <div className="flex flex-col justify-center items-center text-blue-900">
                        <MdChildCare size={80} className="sm:size-[100px] md:size-[124px]" />
                    </div>
                </div>
            </div>
        </>
    )
}
  
 