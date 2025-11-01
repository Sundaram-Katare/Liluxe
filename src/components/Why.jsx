
export default function Why() {
  return (
    <>
      <div className="p-4 my-8 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-orange-500 min-h-screen">
        {/* Left Image */}
        <div className="flex justify-center items-center p-2">
          <img
            src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/801142d1-ecbf-4e5d-b8cd-7f85897ffd56.png"
            alt=""
            className="rounded-2xl w-full max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col p-4 md:p-8 text-center lg:text-left">
          <h1 className="font-dyna text-4xl md:text-5xl lg:text-6xl text-white">
            Why <span className="text-yellow-400">Choose </span>Liluxe
          </h1>

          <h1 className="flex flex-wrap justify-center lg:justify-start gap-2 font-dyna text-4xl md:text-5xl lg:text-6xl text-white mt-4">
            for your <span className="text-yellow-400"> kids </span>
            <span>
              <img
                src="https://i.pinimg.com/originals/0e/9c/75/0e9c754a0046eff2b4b28b1fe0d17487.gif"
                alt=""
                className="h-12 md:h-16"
              />
            </span>
          </h1>

          <div className="flex flex-col gap-6 text-xl md:text-2xl lg:text-4xl font-light font-sans text-white mt-10 md:mt-16">
            <p>- Inclusive sizing of every child</p>
            <p>- Trendy and Modern Design</p>
            <p>- Highly Comfort clothes</p>
            <p>- Supporting a community brand</p>
          </div>
        </div>
      </div>

    </>
  )
}