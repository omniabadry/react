import React from 'react'
import { Header } from "../Header1";
import { Form } from "./Form";
import { SecondDiv } from "./SecondDiv";
import { ThirdDiv } from "./ThirdDiv";
import {Footer} from "../Footer";

export const Register1 = () => {
    return (
        <>
        <div id="firstDiv">
            <div class="container" id="blueForm">
                <Header/>
                <Form/>
            </div>
        </div>
        <SecondDiv/>
        <ThirdDiv/>
        <Footer/>
        </>
    )
}
