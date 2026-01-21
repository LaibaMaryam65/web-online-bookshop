import '../App.css';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Sale from '../components/Sale.jsx';
import { useNavigate } from 'react-router-dom';
function SalePage() {
  const Navigate=useNavigate();
  return (
    <div className="sale-page">
      <Navbar />
      <Sale />
      <div className="mt-4 m-5 back">
            <button className="btn bg-black fw-bold text-white p-3 fst-italic"    onClick={() => Navigate(-1)}>
            Back
            </button>
          </div>
      <Footer/>
    </div>
  );
}

export default SalePage;
