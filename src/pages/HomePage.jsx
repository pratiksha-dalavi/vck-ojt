import React from "react" 
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import './HomePage.css'
import Footer from "../components/Header/Footer/Footer";

const HomePage =() => {
    return (
        
        <div  className="main">
            
            <Header/>
                
                 <div id="scroller">
                
                <div className="top">
                
                 <h1 className="t">Welcome to Vivekanand College!</h1>
                 <h2> Your journey to excellence starts here.</h2>
                 <div className="button-container"> 
                    <Link to="/admissionpage" className=" apply-button">Apply Now!</Link>

                </div>

                  </div>
            
            
                 <p className="p">**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                 <p className="p">At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                    <h2 className="h1">Why Choose Vivekanand College?</h2>
                <ul className="u">
                <li>*Legacy of Excellence:* Decades of commitment to quality education.</li>
                <li>*Experienced Faculty:* Learn from renowned experts and passionate educators.</li>
                <li>*Modern Facilities:* Well-equipped labs, expansive library, and comfortable campus.</li>
                <li>*Holistic Development:* Focus on co-curricular activities, sports, and community service.</li>
                <li>*Strong Placements:* Excellent career opportunities with leading companies.</li>

                 </ul>
                <h2 className="h1">Campus Life & Facilities</h2>
                 <img src="\Images\vckadmission.jpg" height="200" width="300"></img>
                 <img src="\Images\vck.jpg" height="200" width="300"></img>
                 <p className="p">Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>

                <p>Ready to explore our courses?</p>
                <div className="button-container">
                 <Link to="/coursespage" className="button1">Explore Courses</Link>
            </div>
            </div>

           
           
            <Footer/><br></br>
        </div>
        
    )
}
export default HomePage;
