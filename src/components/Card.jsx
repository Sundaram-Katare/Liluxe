
export default function Card(text, bg) {
    return (
        <>
         <div className={`${bg} p-4 rounded-2xl`}>
           <p className="text-3xl">{text}</p>
         </div>
        </>
    )
}