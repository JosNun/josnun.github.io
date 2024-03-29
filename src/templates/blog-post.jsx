import React from 'react'; // eslint-disable-line
import Helmet from 'react-helmet';

// import '../css/core.scss'; // make it pretty!

import { formatPostTags } from '../utils/utils';

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className="blog-post-container">
      <Helmet title={`Josiah's Blog - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1 className="blog-post-title">{post.frontmatter.title}</h1>
        <h2 className="blog-post-date">
          {post.frontmatter.date}
          <span className="blog-post-tags">
            {formatPostTags(post.frontmatter.tags)}
          </span>
        </h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`;
