import React from 'react';
import Link from 'gatsby-link';

import './Navbar.scss';

const isSub = (paths, match, location) => {
  if (paths.includes(location.pathname)) {
    return true;
  }

  const isAMatch = paths.some(path => {
    if (!path.includes('*')) {
      return false;
    }
    const pathExp = new RegExp(`^${path}`);
    return pathExp.test(location.pathname);
  });

  if (isAMatch) {
    return true;
  }
};

export default () => (
  <nav className="navbar">
    <div className="navgroup">
      <Link
        to="/"
        className="primary-link"
        isActive={isSub.bind(this, ['/', '/tags', '/tags/*', '/posts/*'])}
        activeClassName="selected"
      >
        Home
      </Link>
      <div className="sublinks">
        <Link to="/tags" activeClassName="selected">
          Tags
        </Link>
      </div>
    </div>
    {/* <Link to="/projects" activeClassName="selected">
      Projects
    </Link> */}
    <Link to="/about" activeClassName="selected">
      About
    </Link>
    <Link to="/contact" activeClassName="selected">
      Contact
    </Link>
  </nav>
);