import { CHANGE_LANG } from ".././types";
import "../../i18n/i18n";

export const changeLang = (locale, isRTL) => {
    // if (locale === "en") {
    //   document.getElementById("css-style").setAttribute("href", "/css/en/style.css");
    //   document.getElementById("css-bootstrap").setAttribute("href", "/css/en/bootstrap.css");
    // } else {
    //   document.getElementById("css-style").setAttribute("href", "/css/ar/style.css");
    //   document.getElementById("css-bootstrap").setAttribute("href", "/css/ar/bootstrap.css");
    // }

    return {
        type: CHANGE_LANG,
        locale,
        isRTL,
    };
};