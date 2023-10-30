import { features } from "@/components/features/feature-nav";
import { navigation } from "@/components/layout/Header";
import { siteUrl } from "@/lib/url-shared-utils";

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${siteUrl}</loc>
     </url>
     ${pages
       .map((page) => {
         return `
       <url>
           <loc>${`${siteUrl}${page}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  // see more in
  // https://nextjs.org/learn-pages-router/seo/crawling-and-indexing/xml-sitemaps

  const pages = [...features, ...navigation]
    .map((el) => el.href)
    .filter((el) => el.startsWith("/"));

  const sitemap = generateSiteMap(pages);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
