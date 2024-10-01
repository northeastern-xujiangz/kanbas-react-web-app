import { Link } from "react-router-dom";

export default function TOC() {
  return (
    <ul>
      <li><Link id="wd-a" to="/Labs">Labs</Link></li>
      <li><Link id="wd-a1" to="/Labs/Lab1">Lab 1</Link></li>
      <li><Link id="wd-a2" to="/Labs/Lab2">Lab 2</Link></li>
      <li><Link id="wd-a3" to="/Labs/Lab3">Lab 3</Link></li>
      <li><Link to="/Kanbas">Kanbas</Link></li>
      <li><a id="wd-github" href="https://github.com/northeastern-xujiangz/kanbas-react-web-app.git" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
    </ul>
  );
}
