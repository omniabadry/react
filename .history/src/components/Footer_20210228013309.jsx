import React from 'react';
import { useTranslation } from "react-i18next";


export const Footer = () => {

      const { t } = useTranslation();

    return (
        <footer>
  <div>
    <p className="footer-copyright"> © 2015 - 2020 Upwork® Global Inc.</p>
    <ul className="footer-list">
      <li className="footer-list-item">
        <a className="footer-list-link linkFooter" href="#">{t("Terms of Service")}</a>
      </li>
      <li className="footer-list-item">
        <a className="footer-list-link linkFooter" href="#">{t("Privacy Policy")}</a>
      </li>
      <li className="footer-list-item">
        <a className="footer-list-link linkFooter" href="#">{t("Accessibility")}</a>
      </li>
    </ul>
  </div>
</footer>

    )
}
