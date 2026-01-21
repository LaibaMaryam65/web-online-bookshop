import '../App.css';
import Footer from '../components/Footer.jsx';
import Genre from '../components/Genre.jsx';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';


function GenrePage() {
  const Navigate=useNavigate();
  return (
    <div className="genre-page">
      <Navbar />
      <Genre />
        <div className="mt-4 m-5 back">
            <button className="btn bg-black fw-bold text-white p-3 fst-italic"    onClick={() => Navigate(-1)}>
            Back
            </button>
          </div>
      <Footer/>
    </div>
  );
}

export default GenrePage;
