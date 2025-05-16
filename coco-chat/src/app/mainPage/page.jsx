import Link from "next/link";
import "./style.css";

function MainPage() {
  // Generate   particles with random properties
  const smokeParticles = Array.from({ length: 30 }, (_, index) => {
    const size = Math.random() * 6 + 8; // Random size between 8px and 14px
    const left = Math.random() * 90 + 2; // Random left between 5% and 95%
    const top = Math.random() * 90 + 2; // Random top between 5% and 95%
    const moveX = (Math.random() - 0.4) * 40; // Random moveX between -20px and 20px
    const moveY = (Math.random() - 0.4) * 50; // Random moveY between -25px and 25px
    const delay = Math.random() * 2; // Random delay between 0s and 5s

    return (
      <div
        key={index}
        className="smoke-particle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          "--move-x": `${moveX}px`,
          "--move-y": `${moveY}px`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <div className="main-page">
      <div className="main-details">
        {smokeParticles}
        <div className="main-content frosted-glass">
          <img className="main-image" src="happy robo.svg" alt="" />
          <div className="main-text">
            <p type="heading" className="main-name">
              CoCo-Chat
            </p>

            <p type="text" className="main-info">
              A Chat Bot Made for websites and assistance
            </p>
            <Link href="/coco">
              <button className="main-btn">
                <p type="text" className="main-info">
                  Try Here
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
