import Head from "next/head";
import "@/styles/reward.css";
import "@/styles/reward-dashboard.css";
import ReactSearchBox from 'react-search-box';
import Image from "next/image";
import ReferEarn from "@/components/ReferEarn";
import RewardHistory from "@/components/RewardHistory";
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
        <section style={{ paddingBottom: 0 }}>
            <div className="container">
                <div class="welcome-card">
                    <div>
                            <div class="avatar">A</div>
                            <div class="greeting">Hi there</div>
                            <div class="username">Alex Harper</div>
                            <div class="points">50</div>
                            <div class="points-note">🎉 Your points never expire!</div>
                    </div>
                    <div class="button-group">
                        <button data-bs-toggle="modal" data-bs-target="#exploreStr" class="btn btn-explore">Explore</button>
                        <button data-bs-toggle="modal" data-bs-target="#reedeemModal" class="btn btn-earn">Redeem Points</button>
                        <a href="#referFriend" class="btn btn-track">Track</a>
                        <a href="#referFriend" class="btn btn-invite">Invite</a>
                    </div>
                    <div class="wave"></div>
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
        {/* rewardHistory */}
        <section className='rewardHistoryPage' id='rewardsHistory'>
            <div className="container">
                <h2>Reward History</h2>
               <div className="tableContainer">
                    <RewardHistory />
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
        {/* refer friend*/}
         <ReferEarn />
    
        {/* search modal */}
            <div
                className="modal fade giftModal reedeemModal"
                id="exploreStr"
                tabIndex="-1"
                aria-labelledby="redeemModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Serach Stores</h5>
                            <button
                                type="button"
                                className="closeBtn ms-auto"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >x</button>
                        </div>
                        <div className="modal-body">
                            <div className="saerchBx">
                                <ReactSearchBox
                                    placeholder="Search Store"
                                    value=""
                                    className="d-flex navbarSearch"
                                   
                                    onFocus={() => fetchData()}
                                    clearOnSelect={true}
                                    onSelect={(record) => {
                                        const { key } = record.item;

                                        window.location.href = `/${key}`;

                                    }}
                                    leftIcon={<svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="#2f3c97"
                                        className="bi bi-search"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* reedeem modal */}
            <div
                className="modal fade giftModal reedeemModal"
                id="reedeemModal"
                tabIndex="-1"
                aria-labelledby="redeemModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Redeem Points</h5>
                            <button
                                type="button"
                                className="closeBtn ms-auto"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >x</button>
                        </div>
                        <div className="modal-body">
                            <div className="redeem-section">
                                <label htmlFor="points" className="redeem-label">
                                    Enter how many points you want to redeem <span>(minimum 1000 points)</span>
                                </label>

                                <input type="number" id="points" className="redeem-input form-control" placeholder="eg 1000" min="1000" />

                                <p className="redeem-note">
                                    Your amount will be transferred to your PayPal account <a href="#" className="change-link"> change PayPal account</a>
                                </p>

                                <button className="redeem-btn">Redeem Cash</button>
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
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { categories: [], stores: [], blogs: [] }, revalidate: 10 };
  }
}
