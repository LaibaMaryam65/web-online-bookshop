import '../App.css'
import  Navbar  from '../components/Navbar.jsx'
import Featured from '../components/Featured.jsx'
import Footer from '../components/Footer.jsx'
import { useNavigate } from 'react-router-dom'
function FeaturedPage() {
const Navigate=useNavigate();
return (
    <div className="Featured">
      <Navbar/>
      <Featured/>
      <div className="mt-4 m-5 back">
            <button className="btn bg-black fw-bold text-white p-3 fst-italic"    onClick={() => Navigate(-1)}>
            Back
            </button>
          </div>
      <Footer/>
    </div>
  )
      

}

export default FeaturedPage
