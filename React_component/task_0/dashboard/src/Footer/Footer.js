import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";

const Footer = () => {
  const year = getFullYear();
  const footerCopy = getFooterCopy(true);

  return (
    <div className="footer">
      <p>
        Copyright {year} - {footerCopy}
      </p>
    </div>
  );
};

export default Footer;
