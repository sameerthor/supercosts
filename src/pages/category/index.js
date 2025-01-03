import "@/styles/category.css";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';

function CategoryListing({ categories }) {
    // Helper function to validate image URLs
    const validImageSrc = (image) =>
        image && (image.startsWith("/") || image.startsWith("http"));

    const calculateCouponString = (storeSet) => {
        const allCoupons = storeSet.results.flatMap(store => store.coupon_set);

        // Count "code" and "deal" types
        const codeCount = allCoupons.filter(coupon => coupon.coupon_type === "code").length;
        const dealCount = allCoupons.filter(coupon => coupon.coupon_type === "deal").length;
      
        // Generate the summary string
        const summaryParts = [];
        if (codeCount > 0) summaryParts.push(`${codeCount} ${codeCount > 1 ? 'Codes' : 'Code'}`);
        if (dealCount > 0) summaryParts.push(`${dealCount} ${dealCount > 1 ? 'Deals' : 'Deal'}`);
      
        const summary = summaryParts.join(" | ");
        return summary;
      };
    
    return (
        <>
         <NextSeo
                        title="Categories 2025"
                        description="Category Coupon Code 2025. All the coupons are tested and verified by our team."
                    />
            <section className="categorySection">
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb">
                            <ul>
                                <li>
                                    <Link href="/">supercosts.com</Link> /
                                </li>
                                <li>category</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row row-cols-2">
                        {categories.map((item, index) => (
                            <div
                                className="col-lg-2 col-md-3 col-sm-4 category-box"
                                key={index}
                            >
                                <div className="category-item">
                                    <div className="cat-img">
                                        <Link href={`/category/${item.slug}`}>
                                            <Image
                                                width={100}
                                                height={100}
                                                src={
                                                    validImageSrc(item.image)
                                                        ? item.image
                                                        : "/images/default-placeholder.png" // Fallback image
                                                }
                                                alt={item.title || "Category"}
                                            />
                                        </Link>
                                    </div>
                                    <div className="category-title">
                                        <Link href={`/category/${item.slug}`}>
                                            {item.title}{" "}
            <span>{calculateCouponString(item.store_set)}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://backend.supercosts.com/categories?ordering=title`);
    const categories = await res.json();

    return {
        props: {
            categories,
        },
        revalidate: 10,
    };
}

export default CategoryListing;
