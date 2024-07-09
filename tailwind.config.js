/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          white: "#fff",
          lightslategray: "#868d9a",
          midnightblue: "#2e3190",
          gray: "#030b16",
          darkorange: "#f1801b",
        },
        spacing: {},
        fontFamily: {
          avenir: "Avenir",
        },
      },
      fontSize: {
        "7xl-1": "26.1px",
        "2xl": "21px",
        "5xl": "24px",
        lgi: "19px",
        "mid-9": "17.9px",
        "55xl": "74px",
        "25xl": "44px",
        "40xl": "59px",
        "96xl": "115px",
        "15xl": "34px",
        "38xl": "57px",
        lg: "18px",
        xl: "20px",
        "7xl": "26px",
        "16xl": "35px",
        base: "16px",
        inherit: "inherit",
      },
      screens: {
        mq1825: {
          raw: "screen and (max-width: 1825px)",
        },
        mq1350: {
          raw: "screen and (max-width: 1350px)",
        },
        mq925: {
          raw: "screen and (max-width: 925px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  