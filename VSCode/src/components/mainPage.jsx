import React, { useState } from "react";
import "./mainPage.css";
import WelcomePage from "./Welcomepage";
import { VscChromeClose } from "react-icons/vsc";
import { TbBrandVscode } from "react-icons/tb";

const MainPage = () => {
  const [isComponentVisible, setComponentVisible] = useState(true);

  const handleDelete = () => {
    setComponentVisible(false);
  };

  return (
    <div className="main-page">
      <div className="main-page-Header">
        {isComponentVisible && (
          <div>
            <div className="welcome-bar">
              <div className="welcome-tag-holder">
                <div className="welcome-tag">
                  <p>
                    <TbBrandVscode className="brand-icon" />
                    Welcome
                  </p>
                  <button onClick={handleDelete} title="Close">
                    <VscChromeClose />
                  </button>
                </div>
              </div>
              <div className="welcome-bar1">
                <p> </p>
              </div>
            </div>
            {<WelcomePage />}
          </div>
        )}
      </div>
      <div className="main-page-content"></div>
    </div>
  );
};

export default MainPage;
