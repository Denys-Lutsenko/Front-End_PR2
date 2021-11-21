import React from "react";
import Myinfo from "./MyInfo/MyInfo";
import styled from "styled-components";
function Footer() {
  return (
    <FooterContainer className="main-footer">
    <div className="footer-middle"> 
      <div className="container">
        <div className="row">
          <div className="co1-md-3 col-sm-6">
            <h1>Denys Lutsenko</h1>
            <p>About Me... </p>
            <ul className="list-unstyled">
              <li> trying to do </li>
              <li>something normal </li>
              <li>failed </li>
            </ul>
          </div>
          <div className="co1-md-3 col-sm-6">
            <h4>Where would you like to visit?</h4>
            <ul className="list-unstyled">
              <li><a href="/">any place that’s</a></li>
              <li><a href="/">free and</a></li>
              <li><a href="/">delicious</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
        <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Student Xai group 518st 
        </p>
        </div>
      </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite)
}

.footer_bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
 color: var(--mainBlue); 
}

ul li a:hover {
 color: var(--mainGlue);
}

`;