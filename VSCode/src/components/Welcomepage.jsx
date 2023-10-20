import React from "react";
import "./Welcomepage.css";
import {
  VscNewFile,
  VscSourceControl,
  VscRemote,
  VscGoToFile,
  VscFolderOpened,
  VscChecklist,
} from "react-icons/vsc";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="container">
        <div className="section">
          <p>Start</p>
          <ul>
            <li>
              <a className="section-link" href="#" title="Open a new untiteled text file">
                <VscNewFile className="link-icon" /> New File...
              </a>
            </li>
            <li>
              <a className="section-link" href="#" title="Open a file to start working">
                <VscGoToFile className="link-icon" /> Open File...
              </a>
            </li>
            <li>
              <a className="section-link" href="#" title="Open a folder to start working">
                <VscFolderOpened className="link-icon" /> Open Folder...
              </a>
            </li>
            <li>
              <a className="section-link" href="#" title="Connect to a remote repository">
                <VscSourceControl className="link-icon" /> Open Repository...
              </a>
            </li>
            <li>
              <a className="section-link" href="#" title="View a walkthrough on the editor or an extension">
                <VscChecklist className="link-icon" /> Open a Walkthrough...
              </a>
            </li>
            <li>
              <a className="section-link" href="#" title="Connect to a remote machine through a Tunnel">
                <VscRemote className="link-icon" /> Open Tunnel...
              </a>
            </li>
          </ul>
        </div>
        <div className="section-2">
          <p>Recent</p>
          <p className="section2-p">
            You have no recent folders ,
            <a className="section-link" href="#">
              open a folder
            </a>{" "}
            to start.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
