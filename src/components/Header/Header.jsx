import React, { useState} from "react"
import{ Link } from "react-router-dom";
import './Header.css';
const Header = () => {
    const [isOpen,setIsOpen]=useState(false)

    const [menuOpen,setMenuOpen]=useState(false);

    const closeMenu = () => {setMenuOpen(false);

    };

    return(
        <header className="j">
             <nav className="navbar">
                <div className="name">Vivekanand College  </div>
                <div className={`hamburger ${isOpen ? 'active' :''}`} onClick={() => setIsOpen(!isOpen) }>
                <div className="bar"/>
                <div className="bar"/>
                <bar className="bar"/>
                <bar className="bar"/>
                </div>
                {isOpen &&(
                <div className="menu">
                <Link to="/"  className="n">Home</Link>
                <Link to="/aboutpage" className="n">About</Link>
                <Link to="/coursespage" className="n">Courses</Link>
                <Link to="/contactpage" className="n">Contact</Link>
                <Link to="/admissionspage"></Link>
              <Link to="/admissionpage" className="button">Apply Now!</Link>
                </div>
                )
            }
                <div>
                    <Link to="/" className="n">Home</Link>
                     <Link to="/aboutpage" className="n">About</Link>
                <Link to="/coursespage" className="n">Courses</Link>
                <Link to="/contactpage" className="n">Contact</Link>
                <Link to="/admissionspage"></Link>
              <Link to="/admissionpage" className="button">Apply Now!</Link>
                </div>
        </nav>
            <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        <Link to="/" onClick={closeMenu} className="mobile-link">Home</Link>
        <Link to="/about" onClick={closeMenu} className="mobile-link">About</Link>
        <Link to="/courses" onClick={closeMenu} className="mobile-link">Courses</Link>
        <Link to="/contact" onClick={closeMenu} className="mobile-link">Contact</Link>
        <Link to="/apply" onClick={closeMenu} className="mobile-apply">Apply Now!</Link>
      </div>



        </header>
    )
}
export default Header;





