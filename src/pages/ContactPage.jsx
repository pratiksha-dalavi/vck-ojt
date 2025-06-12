import React from "react";
import Header from "../components/Header/Header"; 
import './ContactPage.css'
import Footer from "../components/Header/Footer/Footer";


const ContactPage = () => {
    return(
        <div className="page-container">
            <Header/>
            <div id="scroller">
              <h1 className="h">Contact Us</h1>  
              <p className="p">We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
              <h2 className="h1">General Enquiries</h2>
              <h4 className="p">Vivekanand College Main Campus</h4>
              <p className="p">[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]India<br></br>
              Phone: *+91 12345 67890*<br></br>
              Email: *info@vivekanandcollege.edu*<br></br>
              Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
              <h2 className="h1">Admissions Office</h2>
              <p className="p">For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>
              Phone: +91 98765 43210<br></br>
              Email: admissions@vivekanandcollege.edu </p>
              <h2 className="h1">Student Support Services</h2>
              <p className="p">For current student support, academic advising, or general assistance:<br></br>
              Phone: +91 87654 32109<br></br>
              Email: studentsupport@vivekanandcollege.edu<br></br>
              </p>
              <h2 className="h1">Find Us on the Map</h2>
              <p className="p">[You can embed a Google Map here later using an iframe or a React map library.]<br></br>
              <a href="https://maps.google.com/?q=Vivekanand+College">View on Google Map</a>
              </p>
            <h2 className="h1">Send Us a Message </h2>
            <p className="p">[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>

            </div>
            <Footer/>
        </div>
    )
}
export default ContactPage;




