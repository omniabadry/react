import React from 'react'

export const LanguageDiv = () => {
    return (
        <div class="row" id="displayNone">
            <div class="col-xl-6 col-12">
                <div class="dropdown">
                    <button class="btn btn-muted dateBtn dropdown-toggle text-left p-3"
                        type="button" data-toggle="dropdown">Select language
                                              </button>
                    <ul class="dropdown-menu dateBtn p-2">
                        <li><a href="#" class="btn btn-default text-left enBtn">Spanish</a></li>
                        <li><a href="#" class="btn btn-default text-left enBtn">German</a></li>
                        <li><a href="#" class="btn btn-default text-left enBtn">French</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-xl-6 col-12">
                <div class="dropdown">
                    <button class="btn btn-muted dateBtn dropdown-toggle text-left p-3"
                        type="button" data-toggle="dropdown">select proficiency
                                              </button>
                    <ul class="dropdown-menu dateBtn p-2">
                        <li><a href="#" class="btn btn-default text-left enBtn">Basic<p class="text-muted">I Write in this language decently</p></a></li>
                        <li><a href="#" class="btn btn-default text-left enBtn">Conversational<p class="text-muted">I Write and speak this language well</p></a></li>
                        <li><a href="#" class="btn btn-default text-left enBtn">Fluent<p class="text-muted">I Write and speak this language almost perfectly</p></a></li>
                        <li><a href="#" class="btn btn-default text-left enBtn">Nativ or Bilingual<p class="text-muted">I Write and speak this language perfectly, including colloquialisms</p></a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
