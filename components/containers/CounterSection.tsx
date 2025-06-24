import Counter from "../Counter";

const CounterSection = () => {
  return (
    <section className="counter-section section-padding fix pt-0">
      <div className="container">
        <div className="counter-wrapper">
          <div className="counter-item" data-aos="fade-up" data-aos-delay="300">
            <div className="icon">
              <i className="flaticon-hand"></i>
            </div>
            <div className="content">
              <h2 className="odo-wrap">
                <Counter value={5930} /> +
              </h2>
              <p>PARTICIPANTS</p>
            </div>
          </div>
          <div className="counter-item" data-aos="fade-up" data-aos-delay="500">
            <div className="icon bg-2">
              <i className="flaticon-servers"></i>
            </div>
            <div className="content">
              <h2 className="odo-wrap">
                <Counter value={780} /> +
              </h2>
              <p>EVENT HOSTED</p>
            </div>
          </div>
          <div className="counter-item" data-aos="fade-up" data-aos-delay="700">
            <div className="icon bg-3">
              <i className="flaticon-event"></i>
            </div>
            <div className="content">
              <h2 className="odo-wrap">
                <Counter value={24} /> +
              </h2>
              <p>EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
