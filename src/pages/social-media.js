import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceDetails from "@/components/social-media-details";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";


const socialMedia = () => {
  return (
    <MenuContextProvider>
    <SearchContextProvider>
      <Layout PageTitle="Sosyal Medya">
        <HeaderOne />
        <PageBanner title="Sosyal Medya" name="Sosyal Medya" />
        <ServiceDetails />
        <CallToActionOne extraClassName="ready" />
        <Footer />
      </Layout>
    </SearchContextProvider>
  </MenuContextProvider>
  );
};

export default socialMedia;
