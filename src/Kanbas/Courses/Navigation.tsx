import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div className="wd list-group rounded-0" id="wd-courses-navigation">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item border-0 text-center ${
            pathname.includes(link) ? "active text-danger bg-white" : "text-black"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}