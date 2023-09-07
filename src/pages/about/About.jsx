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
          title: "Flutter app banaune naughty boy about",
          description: "astro description",
          site_name: "Astro",
          defaultImageHeight: 600,
          defaultImageWidth: 800,
          images: [
            {
              url: "https://astraguru.appharu.com/uploads/users/images/1693896235460_image%20(1)-min.png",
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
