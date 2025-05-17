import "./style.css";

function Coco() {
  const cocoInfo = [
    {
      Title: "CoCo Assistance",
      details:
        "CoCo Chat is an intelligent chatbot designed to enhance website experiences. Acting as a virtual sales manager, it assists visitors by guiding them through the site, answering queries, offering recommendations, and helping to resolve issues in real-time.",
      sub: "Whether it's a portfolio, business site, or online store, CoCo Chat ensures your users feel supported, engaged, and never lost.",
      name: "CoCo-A",
    },
    {
      Title: "CoCo Chat",
      details:
        " CoCo Chat also acts as a powerful research companion, helping users find relevant videos, clips, data, and information. It analyzes user needs and suggests accurate website links, product filters, and resources, ensuring users get exactly what they are looking for, faster and smarter.",
      sub: "This variant is focused purely on intelligent recommendations, searches, and personalized assistance, working independently from the basic website chatbot role.",
      name: "CoCo-C",
    },
  ];

  return (
    <div>
      <div className="neon-grid-bg"></div>
      <div>
        {cocoInfo.map((item, index) => (
          <div key={index}>
            <div className="coco-page">
              <div className="frosted-glass ">
                <div className="CoCo-name">
                  <div>
                    <p type="heading">{item.Title}</p>
                  </div>
                  <button className="CoCo-btn">{item.name}</button>
                </div>
                <div className="Coco-details">
                  <div type="text">{item.details}</div>
                  <div>{item.details}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coco;
