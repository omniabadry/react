import React from 'react'
import { SecondHeader } from "./SecondHeader";
import { SecondFooter } from "./SecondFooter";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FirstSection } from "./FirstSection";
import { SecondDiv } from "./SecondDiv";
import { ThirdDiv } from "./ThirdDiv";
import { ForthDiv } from "./ForthDiv";
import { FifthDiv } from "./FifthDiv";
import { Sixthdiv } from "./Sixthdiv";
import { SeventhDiv } from "./SeventhDiv";
import { EighthDiv } from "./EighthDiv";
import { NinthDiv } from "./NinthDiv";
import { Tenthdiv } from "./Tenthdiv";
import { EleventhDiv } from "./EleventhDiv";

export const HomePage = () => {
    return (
      <div>
        <Header />
        <SecondHeader />
        <FirstSection />
        <SecondDiv />
        <ThirdDiv />
        <ForthDiv />
        <FifthDiv />
        <Sixthdiv />
        <SeventhDiv/>
        <EighthDiv/>
        <NinthDiv/>
        <Tenthdiv/>
        <EleventhDiv/>

        <SecondFooter />
        <Footer />
      </div>
    );
}
