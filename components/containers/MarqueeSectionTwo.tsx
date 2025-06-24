import Image from "next/image";
import MarqueeData from "@/public/data/marquee-data";

const MarqueeSectionTwo = () => {
  return (
    <div className="marquee-section section-padding pt-0">
      <div className="mycustom-marque">
        <div className="scrolling-wrap style-2">
          {[...Array(3)].map((_, rowIndex) => (
            <div className="comm" key={rowIndex}>
              <div></div>
              {MarqueeData.map((item) => (
                <div className="cmn-textslide" key={`${rowIndex}-${item.id}`}>
                  <Image src={item.image} alt="Image" />
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

export default MarqueeSectionTwo;
