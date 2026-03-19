export default function manifest() {
  return {
    name: "Roshan Zamil",
    short_name: "Roshan",
    description:
      "Personal portfolio of Roshan Zamil, a Dubai-based builder creating websites, apps, and digital systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f7f5",
    theme_color: "#f7f7f5",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      }
    ]
  };
}
