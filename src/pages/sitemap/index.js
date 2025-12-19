import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


const Sitemap = () => { };
const toUrl = (data) =>
    `<url><loc>${data.url}</loc> <image:image><image:loc>${data.image}</image:loc></image:image></url>`;

const createSitemap = (urlList) =>
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${urlList.map((data) => toUrl(data)).join("")}
    </urlset>`;

export async function getServerSideProps({ res, req }) {


    var urlList = []
    const result = await fetch('https://backend.supercosts.com/store-image/')
    const stores = await result.json()
    stores.forEach(element => {
        urlList.push({ url: "https://supercosts.com/" + element.slug,image: element.image })
    });


    const sitemap = createSitemap(urlList);
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return { props: { results: { urlList } }, revalidate: 3600 }
};


// Default export to prevent Next.js errors
export default function MemorialSitemapIndexPage() { }