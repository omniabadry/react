import React from 'react'
import { useTranslation } from "react-i18next";


export const LanguageDiv = () => {
      const { t } = useTranslation();

    return (
        <form class="row" id="displayNone" onClick="display-block">
            <div class="col-xl-6 col-12">
                <div class="dropdown">
                    <button class="btn btn-muted dateBtn11 dropdown-toggle text-left p-3"
                        type="button" data-toggle="dropdown">{t("Select language")}
                                              </button>
                    <ul class="dropdown-menu dateBtn11 p-2">
                        <li class="btn btn-default text-left enBtn">{t("Spanish")}</li>
                        <li class="btn btn-default text-left enBtn">{t("German")}</li>
                        <li class="btn btn-default text-left enBtn">{t("French")}</li>
                    </ul>
                </div>
            </div>

            <div class="col-xl-6 col-12">
                <div class="dropdown">
                    <button class="btn btn-muted dateBtn11 dropdown-toggle text-left p-3"
                        type="button" data-toggle="dropdown">{t("select proficiency")}</button>
                    <ul class="dropdown-menu dateBtn11 p-2">
                        <li class="btn btn-default text-left enBtn">{t("Basic")}<p class="text-muted">{t("I Write in this language decently")}</p></li>
                        <li class="btn btn-default text-left enBtn">{t("Fluent")}<p class="text-muted">{t("I Write and speak this language almost")}<br /> {t("perfectly")}</p></li>
                        <li class="btn btn-default text-left enBtn">{t("Conversational")}<p class="text-muted">{t("I Write and speak this language well")}</p></li>
                        <li class="btn btn-default text-left enBtn">{t("Nativ or Bilingual")}<p class="text-muted">{t("I Write and speak this language")}<br /> {t("perfectly, including colloquialisms")}</p></li>
                    </ul>
                </div>
            </div>

        </form>
    )
}
