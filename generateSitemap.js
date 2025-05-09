import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap'; // Import yang benar untuk versi terbaru

const sitemap = new SitemapStream({ hostname: 'https://www.sdwidyakirana.sch.id' });

// Definisikan URL yang ingin kamu tambahkan ke sitemap
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/visi-misi', changefreq: 'weekly', priority: 0.8 },
  { url: '/guru', changefreq: 'weekly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
  { url: '/kurikulum', changefreq: 'weekly', priority: 0.8 },
  { url: '/prestasi', changefreq: 'weekly', priority: 0.8 },
  { url: '/ekstra', changefreq: 'weekly', priority: 0.8 },
];

// Menambahkan URL ke sitemap
urls.forEach(url => sitemap.write(url));

// Menutup sitemap stream
sitemap.end();

// Menyimpan sitemap.xml ke folder public
streamToPromise(sitemap).then(data => {
  const publicPath = path.resolve('public', 'sitemap.xml');
  fs.writeFileSync(publicPath, data.toString());
  console.log('Sitemap telah berhasil dibuat di folder public!');
});
