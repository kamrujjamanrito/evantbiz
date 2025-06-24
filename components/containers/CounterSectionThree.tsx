import Counter from "../Counter";

const CounterSectionThree = () => {
  return (
    <section className="counter-section-3 section-padding pt-0">
      <div className="container">
        <div className="counter-wrapper-3">
          <div className="icon-items" data-aos="fade-up" data-aos-delay="200">
            <div className="icon">
              <i className="flaticon-hand"></i>
            </div>
            <div className="content">
              <h2 className="odo-wrap">
                <Counter value={5930} /> +
              </h2>
              <h3>PARTICIPANTS</h3>
              <p>
                A wide range of desktop publishing tools and web design editors.
              </p>
            </div>
          </div>
          <div className="icon-items" data-aos="fade-up" data-aos-delay="400">
            <div className="icon">
              <i className="flaticon-network-administrator"></i>
            </div>
            <div className="content">
              <h2 className="color-2 odo-wrap">
                <Counter value={693} />+
              </h2>
              <h3>SATISFIED VISITORS</h3>
              <p>
                A wide range of desktop publishing tools and web design editors.
              </p>
            </div>
          </div>
          <div className="icon-items" data-aos="fade-up" data-aos-delay="600">
            <div className="icon">
              <i className="flaticon-servers"></i>
            </div>
            <div className="content">
              <h2 className="color-3 odo-wrap">
                <Counter value={780} />+
              </h2>
              <h3>EVENT HSTED</h3>
              <p>
                A wide range of desktop publishing tools and web design editors.
              </p>
            </div>
          </div>
          <div className="icon-items" data-aos="fade-up" data-aos-delay="800">
            <div className="icon">
              <i className="flaticon-event"></i>
            </div>
            <div className="content">
              <h2 className="color-4 odo-wrap">
                <Counter value={24} />+
              </h2>
              <h3>EXPERIENCE</h3>
              <p>
                A wide range of desktop publishing tools and web design editors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSectionThree;
