import '../App.css'
import  Navbar  from '../components/Navbar.jsx'
import Latest from '../components/Latest.jsx'
import Footer from '../components/Footer.jsx'
import { useNavigate } from 'react-router-dom'
function LatestPage() {
const Navigate=useNavigate();
return (
    <div className="Latest">
      <Navbar/>
      <Latest/>
      <div className="mt-4 m-5 back">
            <button className="btn bg-black fw-bold text-white p-3 fst-italic"    onClick={() => Navigate(-1)}>
            Back
            </button>
          </div>
      <Footer/>
    </div>
  )
      

}

export default LatestPage
