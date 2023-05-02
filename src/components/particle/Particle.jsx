import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import option2 from "./option2";
function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={option2()}
    />
  );
}

export default Particle;
