import Image from "next/image";
import MarqueeThreeData from "@/public/data/marquee-three-data";

const MarqueeSectionThree = () => {
  return (
    <div className="marquee-section section-padding marque-bg">
      <div className="mycustom-marque">
        <div className="scrolling-wrap style-2">
          {[...Array(3)].map((_, i) => (
            <div className="comm" key={i}>
              <div></div>
              {MarqueeThreeData.map((item) => (
                <div className="cmn-textslide" key={`${i}-${item.id}`}>
                  <Image src={item.image} alt={item.text} />
                  {item.text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSectionThree;
