import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceDetails from "@/components/e-commerce-details";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";


const eticaret = () => {
  return (
    <MenuContextProvider>
    <SearchContextProvider>
      <Layout PageTitle="E-TİCARET">
        <HeaderOne />
        <PageBanner title="E-TİCARET" name="E-TİCARET" />
        <ServiceDetails />
        <CallToActionOne extraClassName="ready" />
        <Footer />
      </Layout>
    </SearchContextProvider>
  </MenuContextProvider>
  );
};

export default eticaret;
