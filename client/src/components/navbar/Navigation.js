import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";
import logo from "../../assets/merxologo.png";
// import TranslateWidget from './GoogleTranslateWidget';
import Dropdown from "react-bootstrap/Dropdown";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navigation">
      <div className="first flex">
        <div className="nav-logo">
          <Link to="/">
            <img className="brand-logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-links flex">
          <span className="nav-link">
            {" "}
            <Link to="/about-us">About us</Link>{" "}
          </span>
          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Mirror Trading
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/futures">Futures Trading</Dropdown.Item>
              <Dropdown.Item href="/stock">Stock Trading</Dropdown.Item>
              <Dropdown.Item href="/forex">Forex Trading</Dropdown.Item>
              <Dropdown.Item href="/commodites">
                Commodity stock Trading
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Trading Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/futures">Futures Trading</Dropdown.Item>
              <Dropdown.Item href="/stock">Stock Trading</Dropdown.Item>
              <Dropdown.Item href="/forex">Forex Trading</Dropdown.Item>
              <Dropdown.Item href="/commodites">
                Commodity stock Trading
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to="/insight">
            <span className="nav-link">Insight</span>
          </Link>
          <Link to="/software">
            <span className="nav-link">Software</span>
          </Link>
        </div>
      </div>

      <div className="second flex">
        {/* <TranslateWidget /> */}

        <Link to="/login">
          <button className="log ">Login</button>
        </Link>
        <div className="">
          <button onClick={toggleDropdown} className="mn-btn d-lg-none">
            {" "}
            <MenuIcon />{" "}
          </button>
          {isDropdownOpen && (
            <div className="nav-links coll">
              <span className="nav-link">
                {" "}
                <Link to="/about-us">About us</Link>{" "}
              </span>
              <Dropdown data-bs-theme="dark">
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                >
                  Mirror Trading
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/futures">Futures Trading</Dropdown.Item>
                  <Dropdown.Item href="/stock">Stock Trading</Dropdown.Item>
                  <Dropdown.Item href="/forex">Forex Trading</Dropdown.Item>
                  <Dropdown.Item href="/commodites">
                    Commodity stock Trading
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown data-bs-theme="dark">
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                >
                  Trading Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/futures">Futures Trading</Dropdown.Item>
                  <Dropdown.Item href="/stock">Stock Trading</Dropdown.Item>
                  <Dropdown.Item href="/forex">Forex Trading</Dropdown.Item>
                  <Dropdown.Item href="/commodites">
                    Commodity stock Trading
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link to="/insight">
                <span className="nav-link">Insight</span>
              </Link>
              <Link to="/software">
                <span className="nav-link">Software</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
