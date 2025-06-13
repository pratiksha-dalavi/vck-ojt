import {BrowserRouter as Router,Route,Routes,} from "react-router-dom"
import './App.css'
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import ContactPage from "./pages/ContactPage"
import AdmissionPage from "./pages/AdmissionsPage"
import NotFoundPage from "./pages/NotFoundPage"
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
import { useState } from "react"
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup"


const App = () => {
    const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return(
        <>
            <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Pratiksha Parashuram Dalavi"
          studentPhotoUrl="/Images/pratiksha.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

            <Router>
                <div className="main-layout">
                    
                    <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/aboutpage" element={<AboutPage/>}/>
                        <Route path="/coursespage" element={<CoursesPage/>}/>
                        <Route path="/contactpage" element={<ContactPage/>}/>
                        <Route path="/admissionpage" element={<AdmissionPage/>}/>
                        <Route path="*" element={<NotFoundPage/>} />
                    </Routes>
                    </div>
                    <ChatbotComponent/>
                    
                    </div>
                </Router>
            </>
    )
}
export default App;



