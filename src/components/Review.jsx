export default function Review() {
  const items = [
    {
      id: 1,
      name: "Tulsi Kumar",
      review: "Liluxe completely transformed my child's wardrobe!",
    },
    {
      id: 2,
      name: "Aarav Mehta",
      review: "Stylish, comfy, and kid-approved—Liluxe nailed it!",
    },
    {
      id: 3,
      name: "Nisha Verma",
      review: "Finally, clothes that match my toddler’s energy and charm!",
    },
    {
      id: 4,
      name: "Rohan Patel",
      review: "The quality is top-notch. My son loves every outfit!",
    },
    {
      id: 5,
      name: "Simran Kaur",
      review: "Liluxe made gifting easy—adorable and premium picks!",
    },
    {
      id: 6,
      name: "Kabir Shah",
      review: "From basics to festive wear, Liluxe has it all!",
    },
    {
      id: 7,
      name: "Ananya Joshi",
      review: "My daughter twirls in joy every time she wears Liluxe!",
    },
    {
      id: 8,
      name: "Devika Rao",
      review: "Elegant designs that actually survive playtime—impressed!",
    },
  ];

  return (
    <>
      <div className="relative p-4 m-8 min-h-screen">
        <h1 className="text-6xl font-dyna mb-4">
          What <span className="text-orange-500">lovely</span> Moms and
        </h1>
        <h1 className="text-6xl font-dyna mb-12">
          Dads are <span className="text-orange-500">saying!</span>
        </h1>
        <div className="overflow-hidden w-full flex items-center h-48">
          <div className="flex gap-8 animate-train">
            {[...items, ...items].map((item, idx) => (
              <div
                key={idx}
                className="w-72 h-48 flex flex-col items-center justify-center bg-orange-400 rounded-3xl shadow-lg text-center px-5 transition-all duration-300 hover:scale-110"
              >
                <p className="text-2xl font-bold text-gray-800">{item.name}</p>
                <p className="text-md italic text-white">{item.review}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex space-x-40">
          <img src="https://cms-tc.pbskids.org/readyjetgowebsite/resources/animations/mindy.gif?fhash=a8b5f6a" alt="" className="absolute left-80 w-40 h-180" />
          <img src="https://i.pinimg.com/originals/77/76/a6/7776a6af7e14e46ae609b5ee03c6037a.gif" alt="" className="absolute right-80 w-40 h-180" />
        </div>
      </div>
    </>
  );
}