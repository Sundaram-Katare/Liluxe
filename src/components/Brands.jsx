const brands = [
    { id: 1, name: "Hopscotch", logo: "https://images.yourstory.com/cs/images/companies/e79a07adeb10-LOGOpng-1660302430956.png"},
    { id: 2, name: "Max Kids", logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/560dfea6-13fc-45c5-abb5-0692213c6010/dfmt1fz-e15d14e5-91a8-49b0-a0e3-538bcd1d6f15.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU2MGRmZWE2LTEzZmMtNDVjNS1hYmI1LTA2OTIyMTNjNjAxMFwvZGZtdDFmei1lMTVkMTRlNS05MWE4LTQ5YjAtYTBlMy01MzhiY2QxZDZmMTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TPlVDYetSfBzSyAz5Y6bt7fzvZkl7JOYYp2o1gijF1Q"},
    { id: 3, name: "Nino Bambino", logo: "https://ninobambino.in/cdn/shop/files/LOGO_PNG_FILE_84c78f49-a8af-441f-875d-1747b0d5d516.png?v=1708861244"},
    { id: 4, name: "Biba", logo: "https://dtbtob4osa700.cloudfront.net/BrandsImages/03012020131802582_brlo.png"},
    { id: 5, name: "First Cry", logo: "https://vectorseek.com/wp-content/uploads/2023/09/Firstcry-Logo-Vector.svg-.png"}
]


export default function Brands() {
    return (
        <>
         <div className="grid grid-cols-5 gap-6 p-4 mt-8">
            {brands.map(brand => (
                <div key={brand.id} className="flex flex-col items-center">
                    <img src={brand.logo} alt={brand.name} className="w-44 h-24 object-contain" />
                </div>
            ))}
         </div>
        </>
    )
}