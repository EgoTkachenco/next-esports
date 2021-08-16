import React from "react";

const BreadCrumbs = () => {
  const links = [
    { title: "Home page", url: "#" },
    { title: "Feed", url: "#" },
    { title: "Current place", url: "#" },
  ];
  return (
    <div className="breadcrumbs">
      {links.map((link, i) => (
        <React.Fragment key={i}>
          <div className="breadcrumbs__item" url={link.url}>
            {link.title}
          </div>
          {i !== links.length - 1 && <svg className="breadcrumbs__triangle" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6V0L4 3L0 6Z" fill="#8CC63F" />
          </svg>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadCrumbs;
