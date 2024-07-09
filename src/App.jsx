import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Items } from "./components/Items/Items";
import { People } from "./components/People/People";
import { Layout } from "./layout/Layout";

export const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <Items />
        <People />
      </Layout>
      <Footer />
    </>
  );
};
