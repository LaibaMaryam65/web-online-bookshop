import '../App.css'
import  Navbar  from '../components/Navbar'
import FirstSection from '../components/FirstSection'
import SaleSection from '../components/SaleSection'
import Featured from '../components/Featured'
import Latest from '../components/Latest'
import Sale from '../components/Sale'
import AllGenresCard from '../components/AllGenreCard'

import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import BestSeller from '../components/BestSeller'

function Home() {

return (
    <div className="Home">
      <Navbar/>
      <FirstSection/>
      <SaleSection/>
      
     <div className="text-center mt-4">
        <Featured limit={4}/>
  <a href="/featured" className="btn btn-dark px-4 py-2 mt-4">
    Show All Featured Books <i class="fa-solid fa-arrow-right"></i>
  </a>
</div>
 <div className="text-center mt-4">
        <Latest limit={4}/>
  <a href="/latest" className="btn btn-dark px-4 py-2">
    Show All Latest Books <i class="fa-solid fa-arrow-right"></i>
  </a>
</div>
<div className="text-center mt-4">
        <Sale limit={4}/>
  <a href="/sale" className="btn btn-dark px-4 py-2">
    Show All Books on Sale <i className="fa-solid fa-arrow-right"></i>
  </a>
</div>

<div className="text-center mt-4">
        <BestSeller limit={4}/>
  <a href="/bestseller" className="btn btn-dark px-4 py-2">
    Show All BestSellers <i className="fa-solid fa-arrow-right"></i>
  </a>
</div>
  <div className="container text-center mt-4">
        <AllGenresCard/>
      </div>
    
       <div className="container text-center mt-4">
        <AboutUs/>
      </div>

       <div className="container text-center mt-4">
        <ContactUs/>
      </div>
      <Footer/>
    </div>
    
  )
      

}

export default Home
