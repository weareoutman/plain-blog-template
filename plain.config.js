// @ts-check
/** @type {import("plain-blog").SiteConfig} */
export default {
  // For CI, it deploys to a subdirectory.
  // For local development use "/" as baseUrl.
  baseUrl: process.env.CI === "true"
    ? "/plain-blog-template/"
    : "/",
  site: {
    title: "Plain Blog Template",
    description: "The plain blog builder which emits zero client-side JavaScript. With minimal configuration, your blog will be fast and elegant.",
    favicon: "assets/favicon.svg",
    url: "https://weareoutman.github.io/plain-blog-template",
  },
  // content: {
  //   path: "content",
  // },
  components: {
    Header: "src/components/Header.jsx",
    Footer: "src/components/Footer.jsx",
  },
  styles: [
    // You can use http resources for convenient, but it slows down the build.
    // "https://unpkg.com/sanitize.css",

    // Recommend to install css packages then add them prefixed with `~`:
    "~sanitize.css",
    "~sanitize.css/typography.css",

    // Also some local css files
    "src/styles.css",
  ],
}
