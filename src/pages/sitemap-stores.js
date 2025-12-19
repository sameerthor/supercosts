import { useState } from "react";
import Link from "next/link";
import "@/styles/stores.css";
import { NextSeo } from "next-seo";

export default function Stores({ initialStoreData }) {
    const [storeData] = useState(initialStoreData);

    const alphabets = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))];

    const calculateCoupons = (coupons) => {
        const dealCount = coupons.filter((x) => x.coupon_type === "deal").length;
        const codeCount = coupons.filter((x) => x.coupon_type === "code").length;
        const codeText = codeCount > 0 ? `${codeCount} code${codeCount > 1 ? "s" : ""}` : "";
        const dealText = dealCount > 0 ? `${dealCount} deal${dealCount > 1 ? "s" : ""}` : "";
        return [codeText, dealText].filter(Boolean).join(" & ");
    };

    return (
        <>
            <NextSeo
                title="All Stores for 2025"
                description="Find out exclusive coupons for your products. Supercosts brings you the top discounts for over 1000 stores."
            />
            <section className="allStorePage">
                <div className="container">
                    <div className="storeBox sitemapStore">
                        <div className="alpha-store">
                            <h1 className="text-center">All Stores</h1>
                            <div>
                                <p className="all_list">
                                    {alphabets.map((c) => (
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const target = document.querySelector(`#alpha${c.toUpperCase()}`);
                                                if (target) {
                                                    window.scrollTo({
                                                        top: target.offsetTop - 30,
                                                        behavior: "smooth",
                                                    });
                                                }
                                            }}
                                            className="getStore"
                                            aria-label={`Scroll to ${c.toUpperCase()} section`}
                                            key={c}
                                        >
                                            {c.toUpperCase()}
                                        </button>
                                    ))}
                                </p>
                            </div>

                            {Object.keys(storeData).map((c) => (
                                <div className="storeList" id={`alpha${c.toUpperCase()}`} key={c}>
                                    {storeData[c].length > 0 ? (
                                        <ul>
                                            {storeData[c].map((item, index) => (
                                                <li key={index}>
                                                    <Link href={`/${item.slug}`}>
                                                        {item.title}
                                                    
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="no-data-message" style={{ textAlign: "center" }}>
                                            No stores available for {c.toUpperCase()}.
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps() {
    const alphabets = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))];
    const storeData = {};

    try {
        // fetch all letters in parallel
        await Promise.all(
            alphabets.map(async (letter) => {
                let page = 1;
                let results = [];
                let hasMore = true;

                while (hasMore) {
                    const res = await fetch(
                        `https://backend.supercosts.com/store-page/alphabetical-filter/?letter=${letter}&page=${page}`
                    );
                    const data = await res.json();

                    if (data.results && data.results.length > 0) {
                        results = [...results, ...data.results];
                        page++;
                    } else {
                        hasMore = false;
                    }
                }

                storeData[letter] = results;
            })
        );
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return {
        props: {
            initialStoreData: storeData,
        },
        revalidate: 3600, // rebuild every 1 min (adjust as needed)
    };
}

