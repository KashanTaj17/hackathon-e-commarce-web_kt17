import Image from "next/image";
// import Header from "./component/Header";
// import Footer from "./component/Footer";
import Hero from "./component/Hero";
import SubHero from "./component/SubHero";
import Products from "./component/Product";
import Slides from "./component/Slides";
import ShareSetupSection from "./component/ShareSetupSection.tsx";
import ProductCards from "./products/page";

export default function Home() {
  return (
     <div>
      {/* <Header /> */}
      {/* <Footer /> */}
      <Hero />
      <SubHero />
      <Products />
      <Slides />
      <ShareSetupSection />
      <ProductCards />
     </div>
  );
}
