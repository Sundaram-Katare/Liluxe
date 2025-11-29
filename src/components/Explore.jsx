import Brands from "./Brands";

export default function Explore() {
    return (
        <>
            <div className="p-4 m-8 min-h-screen flex flex-col">
                <h1 className="text-center text-6xl font-dyna my-5">
                    Style your <span className="bg-green-400 rounded-2xl px-2">little</span> Ones!
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
                    {/* Card 1 */}
                    <div className="relative bg-green-500 p-6 rounded-2xl text-2xl font-semibold text-gray-900 h-64 hover:scale-110 transition transform duration-300 hover:bg-green-200">
                        <div className="font-dyna text-white font-light absolute bottom-4 right-4 space-y-2 text-right">
                            <p>Dive deeper into</p>
                            <p>Our Colorful</p>
                            <p>collections</p>
                        </div>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/011/458/568/small/giraffe-cartoon-animal-clipart-icon-png.png" alt="" 
                             classname="h-36"    
                        />

                    </div>

                    {/* Card 2 */}
                    <div className="relative bg-red-400 p-6 rounded-2xl text-4xl font-semibold text-gray-900 h-64 hover:scale-110 transition transform duration-300 hover:bg-red-200">
                        <div className="font-dyna text-white font-light absolute bottom-4 right-4 space-y-2 text-right">
                            <p>Check Out</p>
                            <p>latest</p>
                            <p>arrivals!</p>
                        </div>
                        <img src="https://static.vecteezy.com/system/resources/previews/010/329/524/non_2x/cute-cartoon-animal-character-clipart-colorful-elephant-free-png.png" alt=""
                            className="h-36"
                        />
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-blue-400 p-6 rounded-2xl text-2xl font-semibold text-gray-900 h-64 hover:scale-110 transition transform duration-300 hover:bg-blue-200">
                        <div className="font-dyna text-white font-light absolute bottom-4 right-4 space-y-2 text-right">
                            <p>Dive deeper into</p>
                            <p>Our Colorful</p>
                            <p>collections</p>
                        </div>
                        <img src="https://www.pngmart.com/files/23/Cartoon-Dog-PNG-Isolated-Pic.png" alt=""
                            className="h-36"
                        />
                    </div>
                </div>

                <Brands />
            </div>
        </>
    )
}
