import Link from "next/link";
import Image from "next/image";
import CommentsData from "@/public/data/comment-data";

const Comments = () => {
  return (
    <ul className="comments-item-list">
      {CommentsData.map((item) => {
        return (
          <li className="single-comment-item" key={item.id}>
            <div className="author-img">
              <Image src={item.image} alt="Image" />
            </div>
            <div className="author-info-comment">
              <div className="info">
                <h5>
                  <Link href={`${item.destination}`}>{item.author}</Link>
                </h5>
                <span>{item.date}</span>
                <Link
                  href={`${item.destination}`}
                  className="theme-btn minimal-btn"
                >
                  <i className="fal fa-reply"></i>Reply
                </Link>
              </div>
              <div className="comment-text">
                <p>{item.reply}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
