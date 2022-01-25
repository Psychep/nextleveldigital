import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceDetails from "@/components/service-details";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";


const graphicDetails = () => {
  return (
    <MenuContextProvider>
    <SearchContextProvider>
      <Layout PageTitle="GRAFİK TASARIM">
        <HeaderOne />
        <PageBanner title="GRAFİK TASARIM" name="GRAFİK TASARIM" />
        <ServiceDetails />
        <CallToActionOne extraClassName="ready" />
        <Footer />
      </Layout>
    </SearchContextProvider>
  </MenuContextProvider>
  );
};

export default graphicDetails;
