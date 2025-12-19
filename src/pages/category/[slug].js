import "@/styles/category.css";
import Image from 'next/image'
import _ from 'lodash'
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Link from "next/link";
import Router from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar
} from "@fortawesome/free-solid-svg-icons";
import arrayShuffle from 'array-shuffle';
import moment from "moment";

function Category({ category, stores, categories }) {

    const validImageSrc = (image) =>
        image && (image.startsWith("/") || image.startsWith("http"));

    return (
        <>
            <NextSeo
                title={category.meta_title.replaceAll("%%currentyear%%", moment().format('YYYY'))}
                description={category.meta_description.replace(
                    "%%stores%%",
                    _.map(
                        category.store_set.results.sort((a, b) => b.coupon_set.length - a.coupon_set.length).slice(0, 3),
                        'title'
                    ).join(', ') + "."
                )}
            />
            <section className="categorySection">
                <div className="container">
                    <div className="top-bar-store-bg">
                        <div className="store-bg-1">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 p-0">
                                    <div className="text-center">
                                        <div className="cat-image-box">
                                            <Image
                                                src={
                                                    validImageSrc(category.image)
                                                        ? category.image
                                                        : "/images/default-placeholder.png" // Fallback image
                                                } className="cat-image"
                                                alt={`${category.title} coupons`}
                                                width={200}
                                                height={81}
                                            />
                                        </div>
                                        <div className="stars text-center">
                                            <FontAwesomeIcon
                                                icon={faStar}

                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}

                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}

                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}

                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}

                                            />
                                            <span> 4.8 (12) Rating</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <h1>Todays {category.title} Coupons &amp; Offers</h1>
                                    <div className="divider-line mt-2 mb-2" />
                                    <div className="">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>🛍️ Total Offers</th>
                                                    <td>{stores.reduce((count, current) => count + current.coupon_set.length, 0)}</td>
                                                </tr>
                                                <tr>
                                                    <th>🏷️ Coupon Codes</th>
                                                    <td>{stores.reduce((count, current) => count + current.coupon_set.filter(x => x.coupon_type == 'code').length, 0)}</td>
                                                </tr>
                                                <tr>
                                                    <th>🛒 Free Shipping</th>
                                                    <td>{stores.reduce((count, current) => count + current.coupon_set.filter(x => x.title.toLowerCase().includes("shipping")).length, 0)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <h1>Similar Categories</h1>
                                    <div className="divider-line mt-2 mb-2" />
                                    <div className="similarCat">
                                        <ul>
                                            {categories
                                                .filter(item => item.id !== category.id) 
                                                .slice(0, 4)
                                                .map(item => (
                                                    <li key={item.id}>
                                                        <Link href={`/category/${item.slug}`}>{item.title}</Link>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ============== */}
                    <div className="subCatBox">
                        <div className="row">
                            {stores.map((store) => {
                                return store.coupon_set.map(coupon => {
                                    return <div className="col-lg-4 col-md-6 col-sm-12 p-1 mb-2">
                                        <div className="storeItem">
                                            <div className="storeInfo">
                                                <div className="storeData">
                                                    <span className="discountValue">{coupon.discount_value}</span>
                                                    <Link href={`/${store.slug}`} className="storeUrl">
                                                        {store.title}
                                                    </Link>
                                                </div>
                                                <div className="storeData">
                                                    <div className="storeImage">
                                                        <Link title={`${store.title}`} href={`/${store.slug}`}>
                                                            <img
                                                            
                                                                src={`${store.image}`}
                                                                alt={`${coupon.title}`}
                                                                title={`${store.title} coupons`}
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="storeData">
                                                <Link href={`/${store.slug}`} className="storeName">
                                                    <p dangerouslySetInnerHTML={{ __html: coupon.content }}/>
                                                </Link>
                                            </div>
                                            <div className="dealBtnBox">
                                                <div className="flexverify">
                                                    <p title="This coupon is verified" className="verifiedCoupon">
                                                        <Image
                                                            src="/images/verified-green-icon.png"
                                                            width={14}
                                                            height={14}
                                                            alt="verified coupon"
                                                        />
                                                        <span>Verified Deal</span>
                                                    </p>
                                                </div>
                                                <p className="grabDeal">
                                                    <Link href={`/${store.slug}`}>
                                                        Get Code
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={18}
                                                            height={18}
                                                            fill="currentColor"
                                                            className="bi bi-tag"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0" />
                                                            <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z" />
                                                        </svg>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                            )}

                        </div>
                    </div>
                    {/* ============= */}
                    {/* <div className="pagination">
                        <ul>
                            <li>
                                <a href="#" className="active">
                                    1
                                </a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">...</a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-chevron-double-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </section>

        </>

    )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {

    const res = await fetch(`https://backend.supercosts.com/categories/${params.slug}`)
    const category = await res.json()
    if (category.detail) {
        return {
            notFound: true
        };
    }
    const stores = category.store_set.results;

    const resCategories = await fetch(`https://backend.supercosts.com/categories/?ordering=-id`)
    const categoriesData = await resCategories.json()
    const categories = arrayShuffle(categoriesData);
    return {
        props: {
            category,
            stores,
            categories
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 3600, // In seconds
    }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    const res = await fetch('https://backend.supercosts.com/categories')
    const categories = await res.json()

    // Get the paths we want to pre-render based on categories
    const paths = categories.map((item) => ({
        params: { slug: item.slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}

export default Category