import Link from "next/link";

interface BreadcrumbProps {
  title: string;
}

const Breadcrumb = ({ title }: BreadcrumbProps) => {
  return (
    <section
      className="breadcrumb-section fix bg-cover"
      style={{ backgroundImage: "url(images/breadcrumb.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="page-heading">
            <ul
              className="breadcrumb-list"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <i className="fal fa-long-arrow-right"></i>
              </li>
              <li>{title}</li>
            </ul>
            <h2 data-aos="fade-up" data-aos-delay="300">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
