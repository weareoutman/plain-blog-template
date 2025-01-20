// @ts-check
import React from "react";
import { useSiteContext } from "plain-blog/SiteContext";

export default function Header(props) {
  const { baseUrl, site } = useSiteContext();

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      {props.type === "home"
        ? <h1>{site.title}</h1>
        : <a href={baseUrl}>{site.title}</a>
      }
      <a href="https://github.com/weareoutman/plain-blog-template">GitHub</a>
    </header>
  );
}
