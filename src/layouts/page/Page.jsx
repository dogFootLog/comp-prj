import { oneOfType, string, node, func, object } from "prop-types";
import "./Page.css";

const Page = ({ children }) => {
  return <div className="page-wrap">{children}</div>;
};

Page.propTypes = {
  children: oneOfType([string, node, func, object]),
};

export default Page;
