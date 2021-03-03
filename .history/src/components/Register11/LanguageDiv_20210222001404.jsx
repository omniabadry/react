import React from 'react'

export const LanguageDiv = () => {
    return (
        <form class="row" id="displayNone">
            <div class="col-xl-6 col-12">
                <div class="dropdown">
                    <button class="btn btn-muted dateBtn11 dropdown-toggle text-left p-3"
                        type="button" data-toggle="dropdown">Select language
                                              </button>
                    <ul class="dropdown-menu dateBtn11 p-2">
                        <li class="btn btn-default text-left enBtn">Spanish</li>
                        <li class="btn btn-default text-left enBtn">German</li>
                        <li class="btn btn-default text-left enBtn">French</li>
                    </ul>
                </div>
            </div>

            <div class="col-xl-6 col-12">
                <div class="dropdown">
                    <button class="btn btn-muted dateBtn11 dropdown-toggle text-left p-3"
                        type="button" data-toggle="dropdown">select proficiency</button>
                    <ul class="dropdown-menu dateBtn11 p-2">
                        <li class="btn btn-default text-left enBtn">Basic<p class="text-muted">I Write in this language decently</p></li>
                        <li class="btn btn-default text-left enBtn">Fluent<p class="text-muted">I Write and speak this language almost<br /> perfectly</p></li>
                        <li class="btn btn-default text-left enBtn">Conversational<p class="text-muted">I Write and speak this language well</p></li>
                        <li class="btn btn-default text-left enBtn">Nativ or Bilingual<p class="text-muted">I Write and speak this language<br /> perfectly, including colloquialisms</p></li>
                    </ul>
                </div>
            </div>

        </form>
    )
}
