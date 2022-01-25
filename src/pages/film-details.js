import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceDetails from "@/components/film-details";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";


const filmDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="FOTOĞRAF VİDEO ANİMASYON">
          <HeaderOne />
          <PageBanner title="FOTOĞRAF VİDEO ANİMASYON" name="FOTOĞRAF FİLM" />
          <ServiceDetails />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default filmDetails;
