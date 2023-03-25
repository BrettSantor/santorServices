import Header from './header';
import Footer from './footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import ContactMe from './pages/ContactMe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function PortfolioContainer(){


      return (
        <div className='portContainer'>
          <Router basename='/'>
          <Header/>
          <Routes>
            <Route path='/santorServices/'
            element= {<AboutMe/>}
            />
            <Route path='/santorServices/portfolio'
            element= {<Portfolio/>}
            />
            <Route path='/santorServices/resume'
            element= {<Resume/>}
            />
            <Route path='/santorServices/contactme'
            element= {<ContactMe/>}
            />
          </Routes>
          <Footer/>
          </Router>
        </div>
      );
}