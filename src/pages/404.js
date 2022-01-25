import * as React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Sayfa Bulunamadı</h1>
    <p>Aradığın şeyi bulamadık...</p>
  </Layout>
);

export default NotFoundPage;
