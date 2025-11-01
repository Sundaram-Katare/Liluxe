
import Explore from './components/Explore'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Photos from './components/Photos'
import Review from './components/Review'
import Why from './components/Why'

function App() {

  return (
    <>
    <div className='bg-[#FFF8E0] min-h-screen '>
      <Navbar />
      <Hero />
      <Photos />
      <Explore />
      <Why />
      <Review />
      <Footer />
      <div className='text-center text-2xl'>
        Created with 😃 by <span className='font-bold font-dyna'>Sundaram Katare !!</span>
      </div>
    </div>
    </>
  )
}

export default App
