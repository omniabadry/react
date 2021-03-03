import React from 'react'
import { Header } from './Header';
import { Footer } from "./Footer";
import { ConDiv } from './ConDiv';
import { Form } from './Form';
import { Foorm } from "./Foorm";

export const Register10 = () => {
    return (
        <>
            <div id="firsttDiv">
                <div className="container-fluid" id="blueForm">
                    <Header />
                </div>
            </div>
            <div class="container-fluid" id="contDiv">
                <div class="row">
                    <div class="col-1 d-xl-block d-lg-none d-sm-none d-md-none d-none "></div>
                    <ConDiv />
                    {/* <Form /> */}
                    <Foorm/>
                    <div class="col-xl-1 col-12 col-sm-12 col-md-12"></div>
                </div>
            </div >
            <Footer />
        </>
    )
}
