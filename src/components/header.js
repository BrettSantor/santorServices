import {React, useState} from "react";
import Navigation from "./navigation";
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import ContactMe from './pages/ContactMe';
import {renderPage} from "./PortfolioContainer";



export default function Header() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
          return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        return <ContactMe />;
      };
    
      const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
        <header className="header">
<Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
        <div>
{renderPage()}
</div>
</div>
    )
}

