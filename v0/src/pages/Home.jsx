import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services.'
import Membership from '../components/Membership'
import Trainers from '../components/Trainers.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Services/>
      <Membership/>
      <Trainers/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home