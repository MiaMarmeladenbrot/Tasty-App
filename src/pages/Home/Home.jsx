import './Home.css'
import Navigation from '../../components/Navigation/Navigation'
import Categories from '../../components/Categories/Categories'
import Random from '../../components/Random/Random'
import { FilterHome } from '../../components/FilterHome/FilterHome'

const Home = () => {
  return (
    <main className='home'>
      <h1>Home</h1>
      <Random />
      <FilterHome />
      <Categories />
      <Navigation />
    </main>
  )
}

export default Home
