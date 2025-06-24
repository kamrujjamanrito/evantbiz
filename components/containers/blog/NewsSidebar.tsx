import PostSearchForm from "./PostSearchForm";
import RecentPosts from "./RecentPosts";
import PostCategories from "./PostCategories";
import PopularTag from "./PopularTag";

const NewsSidebar = () => {
  return (
    <div className="main-sidebar">
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h3>Search</h3>
        </div>
        <div className="search_widget">
          <PostSearchForm />
        </div>
      </div>
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h3>Recent News</h3>
        </div>
        <RecentPosts />
      </div>
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h3>Catagories</h3>
        </div>
        <PostCategories />
      </div>
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h3>Popular Tags</h3>
        </div>
        <PopularTag />
      </div>
    </div>
  );
};

export default NewsSidebar;
