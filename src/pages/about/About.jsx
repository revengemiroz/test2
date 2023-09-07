"use client";

import React from "react";
import { NextSeo } from "next-seo";

const About = () => {
  return (
    <div>
      This is about page
      <NextSeo
        title={"this is about page"}
        description={"this is description page"}
        openGraph={{
          type: "website",
          title: "astro about",
          description: "astro description",
          site_name: "Astro",
          defaultImageHeight: 600,
          defaultImageWidth: 800,
          images: [
            {
              url: "https://www.jyotishbigyan.com/logo.png",
              width: 800,
              height: 600,
              alt: "jyotish bigyan",
            },
          ],
        }}
      />
    </div>
  );
};

export default About;
