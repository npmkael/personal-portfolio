import { useEffect, useMemo, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { useTheme } from "@/context/ThemeContext";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  const { isDarkMode } = useTheme();

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const lightModeConfig = {
    background: { color: "#ffffff" },
    particles: {
      color: { value: "#000" },
      // other particle settings
    },
  };

  const darkModeConfig = {
    background: { color: "#000" },
    particles: {
      color: { value: "#fff" },
      // other particle settings
    },
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: `${
            isDarkMode
              ? darkModeConfig.background.color
              : lightModeConfig.background.color
          }`,
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "slow",
          },
        },
      },
      particles: {
        color: {
          value: `${
            isDarkMode
              ? darkModeConfig.particles.color.value
              : lightModeConfig.particles.color.value
          }`,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 0.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 50,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1.5, max: 1.5 },
        },
      },
      detectRetina: true,
    }),
    [isDarkMode]
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticlesComponent;
