import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import PlanosSection from "../planos/PlanosSection";


export default function Home() {
return(
    <div>
        <Header />
        <Hero />
        <Stats />
        <Features />
       <PlanosSection />
        <CallToAction />
        <Footer />

    </div>

);

}