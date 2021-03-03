import React from 'react'
import { Header } from "./Header";
import { Form } from "./Form";
import { Footer } from "./Footer";

export const Register1 = () => {
    return (
        <>
            <div id="firstDiv">
                <div class="container" id="blueForm">
                    <Header />
                    <Form />
                </div>
            </div>
            <Footer />
        </>
    )
}
