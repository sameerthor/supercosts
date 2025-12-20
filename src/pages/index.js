import Head from "next/head";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/styles/home.css";
import Link from "next/link";
import moment from "moment";
import { NextSeo } from 'next-seo';

export default function Home({ categories, stores, blogs }) {
  // Helper function to validate image URLs
  const validImageSrc = (image) =>
    image && (image.startsWith("/") || image.startsWith("http"));

  return (
    <>
      <NextSeo
        title="Supercosts - Best Discount Code, Coupons & Promo Codes 2025"
        description="Find out the working and verified coupon codes only at Supercosts.com. All the coupons are tested and verified by the team."
      />
      <section className="homeBanner">
        <div className="container">
          <div className="banner-slider">
            {/* <Carousel showThumbs={false}>
              {[1, 2, 3, 4].map((num) => (
                <div key={num}>
                  <a href="#">
                    <Image
                      src={`/images/banner-${num}.png`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      alt={`Banner ${num}`}
                    />
                  </a>
                </div>
              ))}
            </Carousel> */}
            <Carousel showThumbs={false}>
              <div>
                <a href="/category/clothing-and-accessories">
                  <Image
                    src={`/images/banner-1.png`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt={`fashion`}
                  />
                </a>
              </div>
              <div>
                <a href="/category/beauty-products">
                  <Image
                    src={`/images/banner-2.png`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt={`beauty-products`}
                  />
                </a>
              </div>
              <div>
                <a href="/category/lifestyle">
                  <Image
                    src={`/images/banner-3.png`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt={`Life-style`}
                  />
                </a>
              </div>
              <div>
                <a href="/category/health-and-wellness">
                  <Image
                    src={`/images/banner-4.png`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt={`health and wellness`}
                  />
                </a>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      {/* Explore Categories */}
      <section className="container-fluid categories-box">
        <div className="container">
          <h2>Explore categories</h2>
          <div className="row">
            {categories.slice(0, 12).map((item, index) => (
              <div
                className="col-lg-3 col-md-6 col-sm-6 category-item"
                key={index}
              >
                <div className="category-brand container">
                  <div className="d-flex justify-content-center align-items-center">
                    <Link href={`/category/${item.slug}`}>
                      <span>
                        <i className="fa fa-university" aria-hidden="true" />
                      </span>
                      {item.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="more-btn">
            <Link href="/category">Explore More</Link>
          </div>
        </div>
      </section>
      {/* Trending Deals */}
      <section className="trandingDeals">
        <div className="container">
          <h2>Trending Deals</h2>
          <div className="row">
            {stores
              .filter((x) => x.home_options === "1")
              .slice(0, 12)
              .map((item, index) => (
                <div className="col-lg-2 col-md-4 col-sm-6 mb-3 p-0" key={index}>
                  <div className="trandingItem">
                    <Link href={`/${item.slug}`}>
                      <div>
                        <Image
                          src={
                            validImageSrc(item.image)
                              ? item.image
                              : "/images/default-placeholder.png"
                          }
                          alt={`${item.title} coupons`}
                          className="store-product-logo"
                          width={93}
                          height={40}
                        />
                        <div className="storeInfo text-center">
                          <p>{item.seo_description}</p>
                          <div class="angled-button">************************<span class="btn-angle">Show Code</span></div>
                        </div>
                      </div>
                      <div className="boxFooter">
                        <span>Active</span>
                        <span>
                          <Image
                            src="/images/verified-green-icon.png"
                            width={12}
                            height={12}
                            alt="Verified"
                            className="verified-icon"
                          />
                          Verified
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* Featured Stores */}
      <section className="container-fluid featured-store">
        <div className="container">
          <h2>Featured Stores</h2>
          <div className="row row-cols-2">
            {stores
              .filter((x) => x.home_options === "2")
              .slice(0, 12)
              .map((item, index) => (
                <div className="col-lg-2 col-md-3 col-sm-6 featured-box" key={index}>
                  <div className="featured-item">
                    <Link href={`/${item.slug}`}>
                      <Image
                        src={
                          validImageSrc(item.image)
                            ? item.image
                            : "/images/default-placeholder.png"
                        }
                        width={500}
                        height={375}
                        alt={item.title}
                        quality={100} // Increase image quality (default is 75)
                      />
                    </Link>
                    <Link href={`/${item.slug}`} className="store-name">
                      {item.title}
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* Trending Blogs */}
      <section className="container-fluid tranding">
        <div className="container">
          <div className="row tranding-blog">
            <h2>Trending Blogs</h2>
            {blogs.slice(0, 12).map((item, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12 blog-box" key={index}>
                <Link href={`/blog/${item.slug}`} className="blog-item shadow-sm">
                  <span>
                    <Image
                      src={
                        validImageSrc(item.image)
                          ? item.image
                          : "/images/default-placeholder.png"
                      }
                      alt={item.meta_description}
                      width={100}
                      height={100}
                    />
                  </span>
                  <p>{item.meta_description}</p>
                  <span className="date">
                    {moment(item.updated_at).format("LL")}
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <div className="more-btn">
            <Link href="/blog">More Blogs</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  try {
    const [categoriesRes, storesRes, blogsRes] = await Promise.all([
      fetch(`https://backend.supercosts.com/categories?ordering=title`),
      fetch(`https://backend.supercosts.com/stores?ordering=title`),
      fetch(`https://backend.supercosts.com/posts?ordering=-updated_at`),
    ]);

    const [categoriesRaw, storesRaw, blogsRaw] = await Promise.all([
      categoriesRes.json(),
      storesRes.json(),
      blogsRes.json(),
    ]);

    const categories = categoriesRaw.slice(0, 12).map(c => ({
      slug: c.slug,
      title: c.title,
    }));

    const stores = storesRaw
      .filter(x => x.home_options === "1" || x.home_options === "2")
      .map(s => ({
        slug: s.slug,
        title: s.title,
        image: s.image,
        home_options: s.home_options,
        seo_description: s.seo_description,
      }))
      .slice(0, 24);

    const blogs = blogsRaw.slice(0, 12).map(b => ({
      slug: b.slug,
      image: b.image,
      meta_description: b.meta_description,
      updated_at: b.updated_at,
    }));

    return {
      props: { categories, stores, blogs },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { categories: [], stores: [], blogs: [] },
      revalidate: 3600,
    };
  }
}

