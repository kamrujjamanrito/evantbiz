import Link from "next/link";
import Image from "next/image";
import RecentNewsData from "@/public/data/recent-news";

const RecentPosts = () => {
  return (
    <div className="popular-posts">
      {RecentNewsData.slice(0, 3).map((item) => {
        return (
          <div className="single-post-item" key={item.id}>
            <div className="thumb bg-cover">
              <Link href={`${item.destination}`}>
                <Image src={item.image} alt="Image" />
              </Link>
            </div>
            <div className="post-content">
              <h5>
                <Link href={`${item.destination}`}>{item.title}</Link>
              </h5>
              <div className="post-date">
                <i className="far fa-calendar"></i>
                {item.date}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentPosts;
