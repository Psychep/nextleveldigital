import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import TestimonialsOneCarousel from "@/components/testimonials-carousel";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import PortfolioClients from "@/components/portfolioClients";
const PortfolioPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="MÜŞTERİLERİMİZ">
          <HeaderOne />
          <PageBanner title="MÜŞTERİLERİMİZ" name="MÜŞTERİLERİMİZ" />
          <PortfolioClients />
          <TestimonialsOneCarousel />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioPage;
