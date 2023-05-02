export default function option1() {
  return {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      number: {
        value: 38,
        density: {
          enable: false,
          value_area: 1800,
        },
      },
      color: {
        value: "#ffdfff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 10,
        random: true,
        anim: {
          enable: true,
          speed: 20,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "absorber",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 10,
          line_linked: {
            opacity: 1,
          },
        },
        absorbers: {
          color: "#ff0000",
          size: {
            value: 10,
            limit: 50,
            random: {
              enable: true,
              minimumValue: 5,
            },
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    absorbers: {
      size: {
        value: 10,
        limit: 100,
        random: {
          enable: true,
          minimumValue: 5,
        },
      },
      position: {
        x: 50,
        y: 50,
      },
    },
    background: {
      color: "#1F043A",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  };
}
