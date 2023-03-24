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
            <Route path='/'
            element= {<AboutMe/>}
            />
            <Route path='/portfolio'
            element= {<Portfolio/>}
            />
            <Route path='/resume'
            element= {<Resume/>}
            />
            <Route path='/contactme'
            element= {<ContactMe/>}
            />
          </Routes>
          <Footer/>
          </Router>
        </div>
      );
}