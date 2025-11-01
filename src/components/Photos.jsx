const images = ["https://i8.amplience.net/i/Lindex/Preschool_1360_w2532_1165133_ST_1x1?w=600&h=540&fmt=auto&qlt=70&fmt.jp2.qlt=50&sm=c&scaleFit=poi&poi=0.03,0.09,0.93,0.91",
    "https://thumbs.dreamstime.com/b/kids-summer-fashion-two-happy-girls-boy-bright-clothes-pose-yellow-background-studio-children-s-full-length-177662223.jpg",
    "https://img.freepik.com/free-photo/little-fashionista-with-shopping-bag-summer-hat-glasses-colored-pink-background-mom-s-shoes-concept-children-s-fashion_169016-4513.jpg",
];

export default function Photos() {
    return (
        <>
            <div className="p-4 m-8 min-h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="aspect-square w-full overflow-hidden rounded-2xl">
                            <img
                                src={image}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}