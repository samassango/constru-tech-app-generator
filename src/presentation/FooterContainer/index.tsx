import React, { FC } from "react";
import "../styles/footer.css";

const FooterContainer: FC<any> = () => {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <p>
          &#169; <strong>Constru Tech Solution</strong>
        </p>
      </div>
    </div>
  );
};
export default FooterContainer;
