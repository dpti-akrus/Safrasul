"use client";
import Header from "../components/Header"
import Privacidade from "../components/privacidade";
import Footer from "../components/Footer"
import React, { useRef } from "react";

export default function About(){
  const footerRef = useRef(null);

  return (
    <>
      <Header footerRef={footerRef}/>
      <Privacidade/>
      <Footer ref={footerRef}/>
    </>
  )
}