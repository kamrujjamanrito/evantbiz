import Link from "next/link";
import CategoriesData from "@/public/data/categories";

const PostCategories = () => {
  return (
    <div className="widget_categories">
      <ul>
        {CategoriesData.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`${item.destination}`}>
                {item.title} <span>{item.quantity}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostCategories;
