import { Link } from "react-router-dom"
import "./Onboarding.css"

const Onboarding = () => {
  return (
    <section className='onboarding'>
      <div className='onboarding__pics'>
        <img src='/images/splash-line2.svg' alt='' />
        <img src='/images/boarding-logo.png' alt='Onboarding-pic' />
        <img src='/images/splash-line3.svg' alt='' />
      </div>

      <div className='onboarding__allRecipe'>
        <h1>All the recipes you need</h1>
        <p>5000+ recipes made by people for your healthy life</p>
        <Link to='/home'>Get Started</Link>
      </div>
    </section>
  )
}

export default Onboarding
