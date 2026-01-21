import '../App.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import BestSeller from '../components/BestSeller.jsx'
import Navbar from '../components/Navbar.jsx'

 function BestSellerPage() {
const Navigate=useNavigate();
return (
    <div className="bestseller">
   <Navbar/>
      <BestSeller/>
      <div className="mt-4 m-5 back">
            <button className="btn bg-black fw-bold text-white p-3 fst-italic"    onClick={() => Navigate(-1)}>
            Back
            </button>
          </div>
      <Footer/>
    </div>
  )
      

}

export default BestSellerPage
