
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Coupon from "@/components/coupon";
import { NextSeo } from 'next-seo';
import Image from "next/image";
import _ from 'lodash'
import Link from "next/link";
import dynamic from "next/dynamic";
import moment from "moment";
import reactStringReplace from 'react-string-replace';
import { renderToString } from 'react-dom/server';
import "@/styles/store.css";
const RatingBox = dynamic(() => import('@/components/ratingbox'),
    {
        ssr: false,
    });

const StorePage = ({ store, relStores, simCat }) => {
    const codeCount = store.coupon_set.filter(coupon => coupon.coupon_type === "code").length;
    const dealCount = store.coupon_set.filter(coupon => coupon.coupon_type === "deal").length;
    var store_rating = 0;
    var total_ratings = 0;
    if (store.rating.length > 0) {
        store_rating = ((5 * store.rating[0].five + 4 * store.rating[0].four + 3 * store.rating[0].three + 2 * store.rating[0].two + 1 * store.rating[0].one) / (store.rating[0].five + store.rating[0].four + store.rating[0].three + store.rating[0].two + store.rating[0].one)).toFixed(1)
        total_ratings = store.rating[0].five + store.rating[0].four + store.rating[0].three + store.rating[0].two + store.rating[0].one
    }
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://supercosts.com"
        }, store.category.length > 0 ? {
            "@type": "ListItem",
            "position": 2,
            "name": store.category[0].title,
            "item": "https://supercosts.com/category/" + store.category[0].slug
        } : '', {
            "@type": "ListItem",
            "position": store.category.length > 0 ? 3 : 2,
            "name": store.title
        }]
    }
    const regex1 = /(.*[\s+\"\']faq_question[\s+\"\'].*)/g;
    var questions = [];
    var answers = [];
    let m
    while ((m = regex1.exec(store.extra_info)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex1.lastIndex) {
            regex1.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            if (groupIndex == 0)
                questions.push(match.replace(/<[^>]+>/g, ''));
        });
    }
    const regex2 = /(.*[\s+\"\']faq_answer[\s+\"\'].*)/g

    while ((m = regex2.exec(store.extra_info)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex2.lastIndex) {
            regex2.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            if (groupIndex == 0)
                answers.push(match.replace(/<[^>]+>/g, ''));
        });
    }

    const jsonQD = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map((item, ind) => {
            return {
                "@type": "Question",
                "name": item,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": answers[ind]
                }
            }
        })
    }
    const [showCommentBox, setShowCommentBox] = useState(false);
    const toggleCommentBox = () => {
        setShowCommentBox(!showCommentBox);
    };

    return (
        <>
            <NextSeo
                title={store.seo_title.replaceAll("%%Year%%", moment().format('YYYY')).replaceAll("%%CurrentMonth%%", moment().format('MMMM'))}
                description={store.seo_description}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {questions.length > 0 && <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonQD) }}
            />}
            {/* Breadcrumb */}
            <section className="storePage">
                <div className="container">
                    <div className='affiDisc'>
                        <p>
                            Supercosts may earn a commission when you use coupons on this page. <a href='/affiliate-disclosure'>Learn More</a>
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div className="breadcrumb">
                                <ul>
                                    <li>
                                        <a href="/">supercosts.com</a> /
                                    </li>
                                    <li>{store.title} coupon code</li>
                                </ul>
                                <div className="storeCat">
                                    {store.category.map((item) =>
                                        <a href={`/category/${item.slug}`}>{item.title}</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Store Content */}
            <section className="storeContent">
                <div className="container">
                    <div className="couponsection">
                        {/* Header Section */}
                        <div className="contentBox">
                            <div className="storeHeader row row-cols-2">
                                <div className="header-content col-8 p-0">
                                    <h1>
                                        {store.store_h1.replace("%%Year%%", moment().format('YYYY'))}
                                    </h1>
                                    <h2 className="dealAvl">
                                        {codeCount} {codeCount === 1 ? "Code" : "Codes"} available
                                        {/* {dealCount} {dealCount === 1 ? "Deal" : "Deals"} available */}
                                    </h2>
                                </div>
                                <aside className="col-4">
                                    <div className="header-thumb">
                                        <div className="header-store-thumb">
                                            <a rel="nofollow" target="_blank" title={`Shop ${store.title}`} href={store.store_link || "#"}>
                                                <Image
                                                    width="100"
                                                    height={100}
                                                    src={`${store.image.replace('http://', 'https://')}`}
                                                    alt={`${store.title.trim()} Coupon Code`}
                                                    title={`${store.title.trim()}`}
                                                    decoding="async"
                                                />
                                            </a>
                                        </div>
                                        <RatingBox key={'store_' + store.id} store={store} />

                                    </div>
                                </aside>
                            </div>
                        </div>

                        {/* Coupons List */}
                        <div className="listCoupns">
                            {store.coupon_set.length > 0 && store.coupon_set.sort(function (a, b) {
                                return a.coupon_type !== null ? a.coupon_type.localeCompare(b.coupon_type) : a;
                            }).map((item, index) =>
                                <Coupon key={index} store={_.omit(store, 'coupon_set')} coupon_data={item} tot_count={store.coupon_set.length} numb={index + 1} />
                            )}

                        </div>
                        <div className="row p-0">
                            <h4 className="sidebarHeading p-0">About {store.title}</h4>
                        </div>
                        <div className="about-store" dangerouslySetInnerHTML={{
                            __html: reactStringReplace(store.store_description, '[offer-table]', (match, i) => (
                                renderToString(<div className="offerToday">
                                    <h3>Today's {store.title} Offer</h3>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>🛍️ Total Offers</td>
                                                <td className="text-right font-medium">{store.coupon_set && store.coupon_set.length}</td>
                                            </tr>
                                            <tr>
                                                <td>🏷️ Active Coupon Codes</td>
                                                <td className="text-right font-medium">{store.coupon_set.filter(x => x.coupon_type == 'code').length}</td>
                                            </tr>
                                            <tr>
                                                <td>🛒 Free Shipping</td>
                                                <td className="text-right font-medium">{store.coupon_set.filter(x => x.title.toLowerCase().includes("shipping")).length}</td>
                                            </tr>
                                            <tr>
                                                <td>🔥 Best Offer</td>
                                                <td className="text-right font-medium">Flat {store.coupon_set && store.coupon_set[0].title}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>)
                            )).join("")
                        }}>
                        </div>
                        <div className="about-store" dangerouslySetInnerHTML={{ __html: store.extra_info }}>
                        </div>

                        {/* Coupon Summary */}
                        {/* <div className="storeWidget">
                            <h4>Coupon Summary for {moment().format("MMMM YYYY")}</h4>
                            <div className="summary-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Discount</th>
                                            <th>Title</th>
                                            <th>Coupon</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {store.coupon_set.map(coupon => (
                                            <tr key={coupon.id}>
                                                <td>{coupon.discount_value}</td>
                                                <td>{coupon.title}</td>
                                                <td>{coupon.coupon_code || "Best Deal"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div> */}



                        {/* Related Stores or Similar Categories */}
                        {relStores.length > 3 ? (
                            <>
                                <div className="row p-0"> <h4 className="storeWidgetHeading relatedStore p-0">Related Stores</h4></div>
                                <div class="topStore mb-4">
                                    <ul>
                                        {relStores.map(store => (
                                            <li key={store.slug}>
                                                <Link href={`/${store.slug}`}>{store.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </>
                        ) : (
                            <>
                                <div className="row p-0"> <h4 className="storeWidgetHeading relatedStore p-0">Similar Categories</h4></div>
                                <div className="topStore mb-4">
                                    <ul>
                                        {simCat.results.map(category => (
                                            <li key={category.slug}>
                                                <Link href={`/category/${category.slug}`}>{category.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                    {/* comment */}
                    <div className="comment-box">
                        <div id="showComment">
                            <button onClick={toggleCommentBox} className="btn btn-primary">
                                {showCommentBox ? 'Hide Comment Box' : 'Leave a Comment'}
                            </button>
                        </div>
                        {showCommentBox && (
                            <div className="commentbox">
                                <div className="row comment mx-auto">
                                    <h3>Let other know how much you saved</h3>
                                    <p>
                                        Your email address will not be published. Required fields are
                                        marked <span>*</span>
                                    </p>
                                </div>
                                <div className="row input mx-auto">
                                    <form className="d-block" role="post">
                                        <textarea
                                            name=""
                                            className="col-sm-12 col-md-10 col-lg-10 d-block"
                                            rows={10}
                                            placeholder="Input your thought ..."
                                            required=""
                                            defaultValue={""}
                                        />
                                        <label htmlFor="name" className="d-block">
                                            <i className="fa-regular fa-user" /> Name <span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            required=""
                                            className="col-sm-12 col-md-10 col-lg-10 d-block"
                                        />
                                        <label htmlFor="email" className="d-block">
                                            <i className="fa-regular fa-envelope" /> Email <span>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="col-sm-12 col-md-10 col-lg-10 d-block"
                                            placeholder="Enter your email address"
                                            required=""
                                        />
                                        <label htmlFor="url" className="d-block">
                                            <i className="fa-solid fa-globe" /> Website
                                        </label>
                                        <input
                                            type="text"
                                            className="col-sm-12 col-md-10 col-lg-10 d-block"
                                            placeholder="website url"
                                        />
                                        <button type="submit" onclick="">
                                            Post Comment
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default StorePage;



export async function getStaticProps({ params }) {
    let store = null;
    let relStores = [];
    let simCat = [];

    try {
        const res = await fetch(`https://backend.supercosts.com/stores/${params.slug}/`);

        if (!res.ok) {
            console.error(`❌ API returned ${res.status} for slug: ${params.slug}`);
            return { notFound: true };
        }

        try {
            store = await res.json();
        } catch (e) {
            console.error(`❌ Invalid JSON for slug: ${params.slug}`);
            return { notFound: true };
        }

        if (store?.detail) {
            return { notFound: true };
        }

        // ✅ Coupon title adjustments
        if (Array.isArray(store.coupon_set)) {
            store.coupon_set = store.coupon_set.map((coupon) => {
                if (coupon.title.includes("$")) {
                    return { ...coupon, title: "Best Deal" };
                }
                return coupon;
            });
        }

        // ✅ Related stores & categories
        if (store.category?.[0]) {
            const resRelStores = await fetch(
                `https://backend.supercosts.com/stores/?category__id=${store.category[0].id}&ordering=-id`
            );
            let relStoresData = await resRelStores.json();

            relStores = (relStoresData || []).filter((s) => s.id !== store.id);
            relStores = _.shuffle(relStores).slice(0, 12);

            if (relStores.length <= 3) {
                const resCat = await fetch(
                    `https://backend.supercosts.com/categories/?limit=4&offset=${Math.ceil(
                        parseInt(store.category[0].id) / 4
                    )}`
                );
                simCat = await resCat.json();
            }
        }

        // ✅ Store description replacements (safe)
        if (store.store_description) {
            const store_names = relStores
                .filter((f) => f.id !== store.id)
                .slice(0, 2)
                .map((item) => `<a href="/${item.slug}">${item.title}</a>`);

            const firstCouponTitle = store.coupon_set?.[0]?.title || "";
            const firstCouponCode =
                store.coupon_set?.find((x) => x.coupon_type === "code")?.coupon_code || "";
            const totalCoupons = store.coupon_set?.length || 0;
            store.store_h1 = store.store_h1
                .replaceAll("%%storename%%", store.title)
                .replaceAll("%percentage% Off", firstCouponTitle)
                .replaceAll("%percentage% Off", firstCouponTitle)
                .replaceAll("%percentage% OFF", firstCouponTitle)
                .replaceAll("%percentage% Off", firstCouponTitle);
            store.store_description = store.store_description
                .replaceAll("%%storename%%", store.title)
                .replaceAll("%percentage% off", firstCouponTitle)
                .replaceAll("%percentage% Off", firstCouponTitle)
                .replaceAll("%percentage% OFF", firstCouponTitle)
                .replaceAll("%percentage%", firstCouponTitle)
                .replace(/XXX/g, firstCouponCode)
                .replace(/XX/g, totalCoupons)
                .replaceAll("%%currentmonth%%", moment().format("MMMM"))
                .replaceAll("%%currentyear%%", moment().format("YYYY"))
                .replaceAll(
                    /%%categorystore%% and %%categorystore%%|%categorystore%, %categorystore%, and %categorystore%|%categorystore%, %categorystore%|%categorystore% and %categorystore%|%%categorystore%%, %%categorystore%%|%categorystore%, %categorystore%, %categorystore%|%categorystore% %categorystore%, %categorystore%|%categorystore% %categorystore% %categorystore%|%categorystore% %categorystore% and %categorystore%/gi,
                    store_names.join(", ")
                );
        }

        // ✅ Extra info replacements
        if (store.extra_info) {
            const firstCouponCode =
                store.coupon_set?.find((x) => x.coupon_type === "code")?.coupon_code || "";
            const totalCoupons = store.coupon_set?.length || 0;

            store.extra_info = store.extra_info
                .replace("XXX", firstCouponCode)
                .replace("XX", totalCoupons);
        }
    } catch (error) {
        console.error("❌ Fetch error:", error);
        return { notFound: true };
    }

    return {
        props: {
            store,
            relStores,
            simCat,
        },
        revalidate: 5, // re-generate every 5 sec
    };
}


export async function getStaticPaths() {
    const res = await fetch("https://backend.supercosts.com/stores/");
    const stores = await res.json();

    const paths = stores.map(store => ({
        params: { slug: store.slug },
    }));

    return { paths, fallback: "blocking" };
}

