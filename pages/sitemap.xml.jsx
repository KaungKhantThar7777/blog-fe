import { fetcher } from "api/fetcher";
import { API_URL } from "utils/constants";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const blogs = await fetcher(`${API_URL}/posts`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
         <loc>https://blog-fe-kaungkhantthar.vercel.app</loc>
         <changefreq>daily</changefreq>
        <priority>0.7</priority>
         </url>

         ${blogs.map(
           (blog) => `
           <url>
             <loc>https://blog-fe-kaungkhantthar.vercel.app/blogs/${
               blog.urlTitle
             }</loc>
             <lastmod>${new Date().toISOString()}</lastmod>
             <changefreq>daily</changefreq>
             <priority>0.7</priority>
           </url>
           `
         )}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
