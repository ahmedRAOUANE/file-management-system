import { useState } from "react";

// components
import Login from "./auth/Login";
import Signup from "./auth/Signup";

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleChangeCurrentPage = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <div className="box center-x center-y full-height container">
      <div className="box">
        <div className="box m-auto full-width ai-start">
          <h2 className="text-center">file management system</h2>
        </div>

        <div className="box column m-auto">
          {currentPage === 0
            ? (
              <>
                <Login />
                <p>don&lsquo;t have an accout, <button className="icon" onClick={() => handleChangeCurrentPage(1)}>create account</button></p>
              </>
            )
            : (
              <>
                <Signup />
                <p>allready have an account, <button className="icon" onClick={() => handleChangeCurrentPage(0)}>login</button></p>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default LandingPage;