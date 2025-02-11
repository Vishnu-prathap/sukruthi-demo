import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

import Carousel from "./components/reusable-components/Carousel";
import Carousel2 from "./components/reusable-components/Carousel2";
import Home from "./components/home/Home";
import WhoWeAre from "./components/whoweare/WhoWeAre";
import WhatWeDo from "./components/whatwedo/WhatWeDo";

import MakeAnImpact from "./components/makeanimpact/MakeAnImpact";
import Achievements from "./components/achievements/Achievements";
import ContactUs from "./components/contact/ContactUs";

import Footer from "./components/footer/Footer";

import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Sukruthi Charitable Trust</title>
        <meta name="title" content="Sukruthi Charitable Trust" />
        <meta
          name="description"
          content="Sukruthi means doing good. It symbolizes a noble gesture. It's a space that thrives on kindness and compassion, an initiative to save the lives of the deprived. The health of a nation depends critically on its citizens having access to an equitable, affordable and accountable healthcare system. While India is one of the fastest-growing economies in the world, it is also one of the most unequal countries. The richest are getting richer at a much faster pace while the poor are still struggling to earn a minimum wage and access quality education and healthcare services. The people, especially the rich have an obligation to help those born into the cycle of poverty. That's what Sukruthi aims to achieve. Sukruthi was founded because there is a real opportunity to address the health inequality in India by making sure that irrespective of whether a person resides in a village or a big city, whether literate or not, whether employed or not, he or she has the chance to live a healthy productive life."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sukruthi.org/" />
        <meta property="og:title" content="Sukruthi Charitable Trust" />
        <meta
          property="og:description"
          content="Sukruthi means doing good. It symbolizes a noble gesture. It's a space that thrives on kindness and compassion, an initiative to save the lives of the deprived. The health of a nation depends critically on its citizens having access to an equitable, affordable and accountable healthcare system. While India is one of the fastest-growing economies in the world, it is also one of the most unequal countries. The richest are getting richer at a much faster pace while the poor are still struggling to earn a minimum wage and access quality education and healthcare services. The people, especially the rich have an obligation to help those born into the cycle of poverty. That's what Sukruthi aims to achieve. Sukruthi was founded because there is a real opportunity to address the health inequality in India by making sure that irrespective of whether a person resides in a village or a big city, whether literate or not, whether employed or not, he or she has the chance to live a healthy productive life."
        />
        <meta
          property="og:image"
          content="https://sukruthi.org/assets/logo-d5183d9b.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sukruthi.org/" />
        <meta property="twitter:title" content="Sukruthi Charitable Trust" />
        <meta
          property="twitter:description"
          content="Sukruthi means doing good. It symbolizes a noble gesture. It's a space that thrives on kindness and compassion, an initiative to save the lives of the deprived. The health of a nation depends critically on its citizens having access to an equitable, affordable and accountable healthcare system. While India is one of the fastest-growing economies in the world, it is also one of the most unequal countries. The richest are getting richer at a much faster pace while the poor are still struggling to earn a minimum wage and access quality education and healthcare services. The people, especially the rich have an obligation to help those born into the cycle of poverty. That's what Sukruthi aims to achieve. Sukruthi was founded because there is a real opportunity to address the health inequality in India by making sure that irrespective of whether a person resides in a village or a big city, whether literate or not, whether employed or not, he or she has the chance to live a healthy productive life."
        />
        <meta
          property="twitter:image"
          content="https://sukruthi.org/assets/logo-d5183d9b.png"
        />
      </Helmet>
      <Router>
        <Navbar />
        {/* <Carousel /> */}
        <Carousel2 />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/who-we-are/*" element={<WhoWeAre />} />
          <Route path="/what-we-do/*" element={<WhatWeDo />} />
          <Route path="/make-an-impact/*" element={<MakeAnImpact />} />
          <Route path="/achievements/*" element={<Achievements />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
