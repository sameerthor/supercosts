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
    <div style={{ backgroundColor: "#f8f9fa", padding: "40px 20px" }}>
      <div className="container text-center">
        <h2 style={{ color: "#2ec4b6", fontWeight: "bold", marginBottom: "20px" }}>
          Refer & Earn
        </h2>
        <p style={{ fontSize: "16px", marginBottom: "30px" }}>
          Share your referral link with friends and earn rewards when they join!
        </p>

        <div className="d-flex justify-content-center mb-3">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="form-control w-50"
            style={{ marginRight: "10px" }}
          />
          <button
            onClick={copyLink}
            className="btn"
            style={{ backgroundColor: "#2ec4b6", color: "white" }}
          >
            Copy Link
          </button>
        </div>

        <div className="d-flex justify-content-center gap-2 mb-3">
          <button
            onClick={() => shareTo("facebook")}
            className="btn btn-outline-primary"
          >
            Facebook
          </button>
          <button
            onClick={() => shareTo("twitter")}
            className="btn btn-outline-info"
          >
            Twitter
          </button>
          <button
            onClick={() => shareTo("linkedin")}
            className="btn btn-outline-secondary"
          >
            LinkedIn
          </button>
          <button
            onClick={() => shareTo("whatsapp")}
            className="btn btn-outline-success"
          >
            WhatsApp
          </button>
        </div>

        <button
          onClick={nativeShare}
          className="btn"
          style={{ backgroundColor: "#2ec4b6", color: "white" }}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default ReferEarn;
