webpackJsonp([36530248567819],{52:function(e,t){},220:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.data,n=t.posts.edges,a=[];return n.forEach(function(e){var t=e.node;t.frontmatter.tags.forEach(function(e){t.frontmatter.unpublished||a.includes(e)||a.push(e)})}),r.default.createElement("div",null,r.default.createElement("h1",null,"Looking for something?"),r.default.createElement("h3",null,"You can find posts on a specific topic here."),a.map(function(e){return r.default.createElement(c.default,{to:"/tags/"+e,style:{textDecoration:"none"},key:e},r.default.createElement("p",null,e))}))}t.__esModule=!0,t.pageQuery=void 0,t.default=u;var o=n(3),r=a(o),l=n(14),c=a(l);n(52);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-tags-jsx-f1f0c1cdc4580bd34dc2.js.map