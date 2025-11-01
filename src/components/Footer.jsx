

export default function Footer() {
    return (
        <>
            <div className="p-4 m-4 md:m-8 border-t border-b border-gray-500">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
                    {/* First */}
                    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-dyna">Liluxe</h1>
                        <p className="font-dyna text-3xl sm:text-4xl lg:text-6xl mt-8 sm:mt-12 lg:mt-24 text-orange-500">
                            Joyful Colors
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col p-2 sm:p-4 space-y-2">
                        <h2 className="font-bold text-lg sm:text-xl">Quick Links</h2>
                        <ul className="space-y-1 text-base sm:text-lg">
                            <li>Shop</li>
                            <li>Sale</li>
                            <li>Contact</li>
                            <li>About Us</li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div className="flex flex-col p-2 sm:p-4 space-y-2">
                        <h2 className="font-bold text-lg sm:text-xl">Help</h2>
                        <ul className="space-y-1 text-base sm:text-lg">
                            <li>Size Guide</li>
                            <li>Shipping</li>
                            <li>Order Status</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col p-2 sm:p-4 space-y-2">
                        <h2 className="font-bold text-lg sm:text-xl">Company</h2>
                        <ul className="space-y-1 text-base sm:text-lg">
                            <li>Contact Us</li>
                            <li>Careers</li>
                            <li>Press & Media</li>
                        </ul>
                    </div>

                    {/* About Us */}
                    <div className="flex flex-col p-2 sm:p-4 space-y-2">
                        <h2 className="font-bold text-lg sm:text-xl">About Us</h2>
                        <ul className="space-y-1 text-base sm:text-lg">
                            <li>Our Story</li>
                            <li>Meet the Team</li>
                            <li>Our Values</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col p-2 sm:p-4 space-y-2">
                        <h2 className="font-bold text-lg sm:text-xl">Social Media</h2>
                        <ul className="space-y-1 text-base sm:text-lg">
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Tiktok</li>
                            <li>Facebook</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}