import React from 'react'
import { SecondHeader } from "./SecondHeader";
import { SecondFooter } from "./SecondFooter";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const HomePage = () => {
    return (
      <div>
        <Header />
        <SecondHeader />
        <SecondFooter />
        <Footer />
      </div>
    );
}
