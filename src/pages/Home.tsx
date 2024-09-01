import React from "react";
import { About } from "./About";
import { ServicesCollapse } from "../components/ServiceCollapse/ServicesCollapse";
import { VideosCollapse } from "../components/VideoCollapse/VideosCollapse";
import { PhotosCollapse } from "../components/PhotoCollapse/PhotoCollapse";
import { Banner } from "../components/Banner";
import { ReachOut } from "./ReachOut";

type Props = {
  isDarkMode: boolean;
};

const Home = ({ isDarkMode }: Props) => {
  return (
    <>
      <Banner />
      <About />
      <ServicesCollapse />
      <VideosCollapse />
      <PhotosCollapse />
      <ReachOut isDarkmode={isDarkMode} />
    </>
  );
};

export default Home;
