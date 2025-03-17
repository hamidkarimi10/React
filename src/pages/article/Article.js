import MyNavbar from "../../components/navbar/Navbar";
import './Article.css';
import { Link, Outlet } from "react-router-dom";
function Article() {
  return (
    <div className="articleWrapper">
      <MyNavbar />
      <h2>صفحه مقالات</h2>
      <hr />
      <div className="containerBtn">
        <Link to='php' className="linkBtn">
          php article
        </Link>
        <Link to='js' className="linkBtn">
          js article
        </Link>
        <Link to='react' className="linkBtn">
          react article
        </Link>
      </div>
      <hr />
        <Outlet></Outlet>
    </div>
  );
}

export default Article;
