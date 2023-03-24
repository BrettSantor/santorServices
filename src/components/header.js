import {React, useState} from "react";
import Navigation from "./navigation";

import profile from '../assets/images/profile.jpg'



export default function Header() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

      const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
        <header className="header">
          <h1>Brett Santor</h1>
          <img alt="profile" src={profile}/>
<Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
        <div>
</div>
</div>
    )
}

