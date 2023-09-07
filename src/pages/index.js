import Image from "next/image";
import { Inter } from "next/font/google";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      this is home page
      <NextSeo
        title={"this is home page"}
        description={"this is description page"}
        openGraph={{
          type: "website",
          title: "ho ho sahi kuro",
          description: "astro description",
          site_name: "Astro",
          defaultImageHeight: 600,
          defaultImageWidth: 800,
          images: [
            {
              url: "https://astraguru.appharu.com/uploads/users/images/1693896121617_236224636_382358763247400_7799749380543776638_n-min.jpg",
              width: 800,
              height: 600,
              alt: "jyotish bigyan",
            },
          ],
        }}
      />
    </div>
  );
}
