import './Home.css'
import { useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate();
    return(
        <>
       <div className="home-page">
      <nav className="home-navbar w-100 ">
        <div className="brand">
          <div className="logo-icon">
            <i className="bi bi-shield-check"></i>
          </div>

          <h3>ISSNC</h3>
        </div>

        <p>Integrated Server System for New Cities</p>
      </nav>

      <main className="hero-content">
        <h1>Building Safer, Smarter Cities Together</h1>

        <p>
          An integrated platform connecting citizens, AI-powered
          monitoring, and emergency response services to create
          safer communities and smarter cities.
        </p>

        <div className="hero-buttons">
          <button
            className="btn btn-primary-custom"
            onClick={() => navigate("/SignUp")}
          >
           Sign Up
          </button>

          <button
             className="btn btn-outline-custom"
             onClick={() => navigate("/Login")}
          >
            Log In
          </button>
        </div>
      
      </main>

    </div>
        </>
    )
}
export default Home