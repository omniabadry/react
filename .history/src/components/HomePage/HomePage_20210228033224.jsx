import React from 'react'
import { SecondHeader } from "./SecondHeader";
import { SecondFooter } from "./SecondFooter";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FirstSection } from "./FirstSection";

export const HomePage = () => {
    return (
      <div>
        <Header />
        <SecondHeader />
        <FirstSection/>
        <SecondFooter />
        <Footer />
      </div>
    );
}
