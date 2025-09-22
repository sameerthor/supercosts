import React from "react";

const ReferEarn = () => {
  const referralLink = "https://supercosts.com/referral?code=ABC123";

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  const shareTo = (platform) => {
    const encodedLink = encodeURIComponent(referralLink);
    const message = encodeURIComponent(
      "Join Supercosts and earn rewards! Use my referral link:"
    );
    let url = "";

    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodedLink}&text=${message}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedLink}&title=${message}`;
        break;
      case "whatsapp":
        url = `https://api.whatsapp.com/send?text=${message}%20${encodedLink}`;
        break;
      default:
        return;
    }
    window.open(url, "_blank");
  };

  const nativeShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Supercosts Referral",
          text: "Join Supercosts and earn rewards! Use my referral link:",
          url: referralLink,
        })
        .catch((err) => console.error("Error sharing:", err));
    } else {
      alert("Sharing not supported on this device/browser.");
    }
  };

  return (
    <section className="refer-earn-section py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container text-center">
          <div className="refer-box">
                <h2 className="mb-3" style={{ color: "#2ec4b6", fontWeight: "bold" }}>
                Refer & Earn
                </h2>
                <p className="mb-4">
                Share your referral link with friends and earn rewards when they join!
                </p>

                <div className="d-flex justify-content-center mb-3">
                <div
                    className="referral-link"
                >   
                {referralLink}
                </div>
                
                </div>
                <div className="topshareBtn">
                    <button
                    onClick={copyLink}
                    className="btn"
                    style={{ backgroundColor: "#2ec4b6", color: "#fff" }}
                >
                    Copy Link
                </button>
                <button
                onClick={nativeShare}
                className="btn"
                style={{ backgroundColor: "#2ec4b6", color: "#fff" }}
                >
                Share
                </button>
                </div>

                <div className="d-flex justify-content-center gap-2 mb-3 social-share">
                <button
                    onClick={() => shareTo("facebook")}
                    className="facebook"
                >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/></svg>
                </button>
                <button
                    onClick={() => shareTo("twitter")}
                    className="twitter"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/></svg>
                </button>
                <button
                    onClick={() => shareTo("linkedin")}
                    className="linkedin"
                >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/></svg>
                </button>
                <button
                    onClick={() => shareTo("whatsapp")}
                    className="whatsapp"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"></path></svg>
                </button>
                </div>
            </div> 
      </div>
    </section>
  );
};

export default ReferEarn;
