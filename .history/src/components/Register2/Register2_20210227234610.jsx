import React from 'react'
import { Header } from "./Header";
import { Form } from "./Form";
import { Footer } from "../Footer";

export const Register2 = () => {
    return (
        <>
            <div id="firstDiv">
                <div class="container" id="whiteForm">
                    <Header />
                    <Form />
                </div>
            </div>
            <Footer />
        </>
    )
}
