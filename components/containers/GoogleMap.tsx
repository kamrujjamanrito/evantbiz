import Link from "next/link";

const GoogleMap = () => {
  return (
    <div className="map-section">
      <div className="container">
        <div className="map-box">
          <h3>
            GET DIRECTION TO <br /> THE EVENT
          </h3>
          <div className="content-item">
            <div className="cont">
              <h6>Venue</h6>
              <p>Grand Emarat Conference Hall London</p>
            </div>
            <div className="cont">
              <h6>Address</h6>
              <p>
                2715 Ash Dr. San Jose, South <br /> Dakota 83475
              </p>
            </div>
          </div>
          <Link href="contact" className="theme-btn">
            Get Direction <i className="fas fa-long-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="map-items11">
        <div className="googpemap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
            style={{ border: "0px" }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
