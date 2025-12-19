import Head from "next/head";
import "@/styles/reward.css";
import "@/styles/reward-store.css";
import Image from "next/image";
import ReferEarn from "@/components/ReferEarn";
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
        {/* hero section */}
        <section className="strhero">
            <div className="container">
                <div className="left-panel">
                    <span className="tag">🌟 Boduto</span>
                    <h1>Join FunRewards</h1>
                    <p>Earn points every time you shop with us and redeem them for awesome perks!</p>
                    <div className="rewardbtns">
                        <button className="btn-primary">Join Now</button>
                        <a href="#how" className="btn-secondary" data-bs-toggle="modal" data-bs-target="#redeemModal">How to Redeem?</a>
                        <a href="/reward" className="btn-secondary">Learn about points and perks</a>
                    </div>
                </div>
                <div className="right-panel">
                    <div className="coupon-card">
                        <div className="coupon-title">Get Offbaby Coupon Code</div>
                        <div className="discount">UP TO 40% OFF</div>
                        <div className="code">****-****-****</div>
                        <button className="btn-coupon">Get Discount Now</button>
                        <div className="validity">🎉 Valid until 25 Sep 2025 11:59 PM</div>
                        <div className="note">If coupon doesn’t work, claim 100 points.</div>
                    </div>
                </div>
            </div>
        </section>
        {/* reward rule */}
        <section>
            <div className="container">
                <div className="reward-rules">
                    <h2>Reward Redemption Rules</h2>
                    <div className="rule-box">
                        <div className="reward-circle">
                        <span className="amount">$100</span>
                        <span className="ribbon"></span>
                        </div>
                        <div className="rule-content">
                        <h3>For every 1000 points you can redeem $100 cash</h3>
                        
                        </div>
                    </div>

                    <div className="rule-box">
                        <div className="reward-circle">
                        <span className="amount">$200</span>
                        <span className="ribbon"></span>
                        </div>
                        <div className="rule-content">
                        <h3>For every 2000 points you can redeem $200 cash</h3>
                       
                        </div>
                    </div>

                    <div className="rule-box">
                        <div className="reward-circle">
                        <span className="amount">$400</span>
                        <span className="ribbon"></span>
                        </div>
                        <div className="rule-content">
                        <h3>For every 3000 points you can redeem $400 cash</h3>
                        <p></p>
                        </div>
                    </div>

                    <div className="rule-box">
                        <div className="reward-circle">
                        <span className="amount">$500</span>
                        <span className="ribbon"></span>
                        </div>
                        <div className="rule-content">
                        <h3>For every 5000 points you can redeem $500 cash</h3>
                        
                        </div>
                    </div>
                    <div className="rule-box">
                        <div className="reward-circle">
                        <span className="amount">$800</span>
                        <span className="ribbon"></span>
                        </div>
                        <div className="rule-content">
                        <h3>For every 5000 points you can redeem $800 cash</h3>
                        
                        </div>
                    </div>
                    <div className="rule-box">
                        <div className="reward-circle">
                        <span className="amount"> 🔗 </span>
                        <span className="ribbon"></span>
                        </div>
                        <div className="rule-content">
                        <h3>You must use our referral link to claim points</h3>
                        
                        </div>
                    </div>
                </div>
            </div>        
        </section>
        {/* about store */}
        <section className="about-store-section">
            <div className="container">
                <div className="about-text">
                    <h2>About Bluum Maison</h2>
                    <div>
                        <p>
                        Bluum Maison is a home decor wholesaler that sells premium tableware, home decor, and giftable accessories. Customers will find napkins, table accessories, table linens, tablecloths, and candle holders on their website. Free shipping is available for Canadian + US orders. Get wholesale home decor at discounted prices using Bluum Maison Gift Cards and Gift Vouchers from Scoopcost.
                        </p>
                    </div>
                </div>
            </div>
       </section>
        {/* ways to earn  */}
        <section className="waysToEarn">
            <div className="container">
                <h2>Ways to Earn</h2>
                <div className="earn-grid">
                    <div className="earn-card">
                        <span className="badge">+30</span>
                        <h3>Sign up</h3>
                        <p>Get instant points as soon as you join SuperCosts Rewards.</p>
                    </div>
                    <div className="earn-card">
                        <span className="badge">+50</span>
                        <h3>Shop</h3>
                        <p>Earn points on every purchase and boost your savings.</p>
                    </div>
                    <div className="earn-card">
                        <span className="badge">+100</span>
                        <h3>Birthday Bonus</h3>
                        <p>Celebrate your special day with extra reward points.</p>
                    </div>
                    <div className="earn-card">
                        <span className="badge">+100</span>
                        <h3>Code Didn’t Work?</h3>
                        <p>No worries! We still credit your account with points.</p>
                    </div>
                    <div className="earn-card">
                        <span className="badge">+50</span>
                        <h3>Refer a Friend</h3>
                        <p>Invite friends and you both enjoy bonus rewards.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* how's it work */}
        <section className="howItWork">
            <div className="container">
                <h2>How it Works</h2>
                <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
                <div className="col mb-3">
                    <div className="step-card">
                    <div className="step-number">1</div>
                    <h3>Join</h3>
                    <p>Create your free SuperCosts account in seconds.</p>
                    </div>
                </div>
                <div className="col mb-3">
                    <div className="step-card">
                    <div className="step-number">2</div>
                    <h3>Shop</h3>
                    <p>Choose from your favorite stores & brands.</p>
                    </div>
                </div>
                <div className="col mb-3">
                    <div className="step-card">
                    <div className="step-number">3</div>
                    <h3>Collect</h3>
                    <p>Earn points auto-credited into your wallet.</p>
                    </div>
                </div>
                <div className="col mb-3">
                    <div className="step-card">
                    <div className="step-number">4</div>
                    <h3>Redeem</h3>
                    <p>Convert points into real cash & rewards.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        {/* review */}
        <section className="userReview">
            <div className="container">
                <h2>Turning Points into Cash</h2>
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">

                    {/* <!-- Card 1 --> */}
                    <div className="col mb-3">
                    <div className="review-card">
                        <div className="review-header">
                        <div className="avatar">E</div>
                        <div className="user-info">
                            <h4>Emma Davis</h4>
                            <span>Designer · San Francisco, CA</span>
                        </div>
                        </div>
                        <p className="review-text">
                        SuperCosts made saving effortless. I never thought my shopping points could turn into real money this fast!
                        </p>
                        <div className="review-footer">
                        <div className="points">1,200 pts</div>
                        <div className="redeem-status">Redeemed</div>
                        </div>
                    </div>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div className="col mb-3">
                    <div className="review-card">
                        <div className="review-header">
                        <div className="avatar">M</div>
                        <div className="user-info">
                            <h4>Michael Chen </h4>
                            <span>Entrepreneur · Austin, TX </span>
                        </div>
                        </div>
                        <p className="review-text">
                        I collected points just by shopping for my daily essentials. Redeeming cash was super smooth and instant.
                        </p>
                        <div className="review-footer">
                        <div className="points">2,000 pts</div>
                        <div className="redeem-status">Redeemed</div>
                        </div>
                    </div>
                    </div>

                    {/* <!-- Card 3 --> */}
                    <div className="col mb-3">
                    <div className="review-card">
                        <div className="review-header">
                        <div className="avatar">S</div>
                        <div className="user-info">
                            <h4>Sarah Johnson </h4>
                            <span>Travel Blogger · Boston, MA</span>
                        </div>
                        </div>
                        <p className="review-text">
                        The rewards system feels like free money! I redeemed points into my wallet and paid for my weekend getaway.
                        </p>
                        <div className="review-footer">
                        <div className="points">3,500 pts</div>
                        <div className="redeem-status">Redeemed</div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>    
        </section>
        {/* faqs */}
        <section className="faqssec">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">

                    {/* <!-- Q1 --> */}
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="faq1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#answer1" aria-expanded="true" aria-controls="answer1">
                        1. How do I earn rewards on SuperCosts?
                        </button>
                    </h2>
                    <div id="answer1" className="accordion-collapse  show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                        You earn reward points every time you shop from our partnered stores through SuperCosts. Points are credited instantly to your wallet.
                        </div>
                    </div>
                    </div>

                    {/* <!-- Q2 --> */}
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="faq2">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#answer2" aria-expanded="false" aria-controls="answer2">
                        2. How can I redeem my points?
                        </button>
                    </h2>
                    <div id="answer2" className="accordion-collapse show" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                        Points can be redeemed as real cash directly into your bank account, UPI, or digital wallet once you reach the minimum threshold.
                        </div>
                    </div>
                    </div>

                    {/* <!-- Q3 --> */}
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="faq3">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#answer3" aria-expanded="false" aria-controls="answer3">
                        3. Is there any joining fee for SuperCosts?
                        </button>
                    </h2>
                    <div id="answer3" className="accordion-collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                        No, joining SuperCosts is completely free. You can start earning rewards immediately after creating your account.
                        </div>
                    </div>
                    </div>

                    {/* <!-- Q4 --> */}
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="faq4">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#answer4" aria-expanded="false" aria-controls="answer4">
                        4. How long does it take to get my rewards?
                        </button>
                    </h2>
                    <div id="answer4" className="accordion-collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                        Rewards are usually credited instantly after a successful purchase. In rare cases, it may take up to 24 hours depending on the store’s confirmation.
                        </div>
                    </div>
                    </div>

                    {/* <!-- Q5 --> */}
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="faq5">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#answer5" aria-expanded="false" aria-controls="answer5">
                        5. Can I earn rewards on all purchases?
                        </button>
                    </h2>
                    <div id="answer5" className="accordion-collapse" aria-labelledby="faq5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                        Yes, you can earn rewards on most purchases from partnered stores. However, some exclusions may apply based on store policies.
                        </div>
                    </div>
                    </div>

                    {/* <!-- Q6 --> */}
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="faq6">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#answer6" aria-expanded="false" aria-controls="answer6">
                        6. Is my personal data safe with SuperCosts?
                        </button>
                    </h2>
                    <div id="answer6" className="accordion-collapse" aria-labelledby="faq6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                        Absolutely. We use advanced encryption and follow strict data privacy policies to ensure your personal and financial information remains secure.
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </section>
        <section className="brands-section">
            <div className="container">
                <div className="brands-header">
                    <h2>Top Rated Brands</h2>
                    <p>Shop smarter, earn rewards faster with your favorite brands</p>
                </div>
                <div className="brands-grid">            
                    <div className="brand-card">
                    <div className="brand-tag">Lifestyle</div>
                    <div className="brand-logo">
                        <a href="https://scoopcoupons.com/reward/cocktail-escape">
                        <img src="https://scoopcoupons.com/wp-content/uploads/2022/02/cocktail-escape-coupons-1-300x288.png" alt="COCKTAIL ESCAPE Logo" loading="lazy" />
                        </a>
                    </div>
                    <h3>
                        <a href="https://scoopcoupons.com/reward/cocktail-escape">COCKTAIL ESCAPE</a>
                    </h3>
                    </div>
                    <div className="brand-card">
                    <div className="brand-tag">Related Reward</div>
                    <div className="brand-logo">
                        <a href="https://scoopcoupons.com/reward/energy-washball">
                        <img src="https://scoopcoupons.com/wp-content/uploads/2022/02/energy-washball-coupons-1-300x96.png" alt="Energy Washball Logo" loading="lazy" />
                        </a>
                    </div>
                    <h3>
                        <a href="https://scoopcoupons.com/reward/energy-washball">Energy Washball</a>
                    </h3>
                    </div>
                    <div className="brand-card">
                    <div className="brand-tag">Lifestyle</div>
                    <div className="brand-logo">
                        <a href="https://scoopcoupons.com/reward/ludoeduca">
                        <img src="https://scoopcoupons.com/wp-content/uploads/2022/02/ludoeduca-coupons-1.png" alt="Ludoeduca Logo" loading="lazy" />
                        </a>
                    </div>
                    <h3>
                        <a href="https://scoopcoupons.com/reward/ludoeduca">Ludoeduca</a>
                    </h3>
                    </div>
                    <div className="brand-card">
                    <div className="brand-tag">Related Reward</div>
                    <div className="brand-logo">
                        <a href="https://scoopcoupons.com/reward/ohmydogvip">
                        <img src="https://scoopcoupons.com/wp-content/uploads/2022/02/ohmydogvip-coupons-1.png" alt="OhmydogVIP Logo" loading="lazy" />
                        </a>
                    </div>
                    <h3>
                        <a href="https://scoopcoupons.com/reward/ohmydogvip">OhmydogVIP</a>
                    </h3>
                    </div>
                </div>
             </div>    
        </section>
         {/* how to redeem modal */}
         <div
        className="modal fade giftModal"
        id="redeemModal"
        tabIndex="-1"
        aria-labelledby="redeemModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">How To Redeem</h5>
              <button
                type="button"
                className="closeBtn ms-auto"
                data-bs-dismiss="modal"
                aria-label="Close"
              >x</button>
            </div>
            <div className="modal-body">
              <div className="listItem">
                <span className="method">Online</span>
                <div className="custom-list">
                    <ul className="custom-list">
                        <li>Visit bluummaison.com and add products to the cart.</li>
                        <li>Proceed to checkout and look for the ‘Gift Card’ box.</li>
                        <li>Enter the card details received via email and click ‘Apply’.</li>
                        <li>The amount will be deducted from the total price.</li>
                        <li>Complete any balance payment via other payment modes.</li>
                    </ul>
                </div>
               </div>
            </div>

          </div>
        </div>
      </div>
        
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

    const [categories, stores, blogs] = await Promise.all([
      categoriesRes.json(),
      storesRes.json(),
      blogsRes.json(),
    ]);

    return {
      props: { categories, stores, blogs },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { categories: [], stores: [], blogs: [] }, revalidate: 3600 };
  }
}
