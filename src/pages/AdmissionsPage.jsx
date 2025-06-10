import React from "react";
import { Link } from "react-router-dom";


import Header from "../components/Header/Header"; 
import Footer from "../components/Header/Footer/Footer";


const AdmissionsPage =() => {
    return(
        <div  className="main">
            <Header/>
            <div id="scroller">
                <h1 className="h">Admissions at Vivekanand College</h1>
                <p className="p">Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible</p>
                <p className="p">Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>
                <h2 className="h1">Eligibility Criteria for Undergraduate Programs</h2>
                <table border="1" >
                    <tr>
                        <th>Program</th>
                        <th>Minimum Qualification	</th>
                        <th>Required Subjects	</th>
                        <th>Minimum Marks (%)</th>
                    </tr>
                    <tr>
                        <td>B.Sc. Computer Science	</td>
                        <td>10+2 (or equivalent)	</td>
                        <td>Physics, Chemistry, Maths	</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <td>B.Com. Accounting & Finance	</td>
                        <td>10+2 (or equivalent)	</td>
                        <td>Commerce Stream		</td>
                        <td>45%</td>

                    </tr>
                    <tr>
                        <td>B.A. English Literature		</td>
                        <td>10+2 (or equivalent)	</td>
                        <td>Any Stream	</td>
                        <td>40%</td> 
                    </tr>
                </table>
                <h2 className="h1">Application Process</h2>
                <ol className="u">
                    <li> <b> Online Application:</b> Fill out the application form available on our portal.</li>
                    <li><b>Document Submission:</b> Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
                    <li><b>Entrance Exam (if applicable):</b>Appear for the college's entrance examination.</li>
                    <li><b>Merit List & Interview:</b> Check the merit list and attend the interview if shortlisted.</li>
                    <li><b>Fee Payment:</b> Complete the admission by paying the required fees.</li>
                </ol>
                <p className="p">For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our<Link to="/coursespage"><u className="u">Courses page</u></Link>  or<Link to="/contactpage"><u className="u">Contact us</u></Link>directly.</p>
                
            </div>
            <Footer/>
        </div>
    )
}
export default AdmissionsPage;