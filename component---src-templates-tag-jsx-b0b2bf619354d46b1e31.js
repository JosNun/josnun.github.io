webpackJsonp([0xa6cd3c51205b],{73:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),l=a(u),c=n(15),i=a(c),f=function(e){return e.sort(function(e,t){return e>t?1:-1}).map(function(e){return l.default.createElement(i.default,{to:"/tags/"+e,key:"tag-"+e},e)})},p=function(e){function t(n){r(this,t);var a=o(this,e.call(this,n));return a.state={isOpen:!1},a.toggleOpen=a.toggleOpen.bind(a),a}return s(t,e),t.prototype.toggleOpen=function(){var e=this.state.isOpen;this.setState({isOpen:!e})},t.prototype.render=function(){return l.default.createElement("div",{className:this.state.isOpen?"post-tags open":"post-tags"},l.default.createElement("ul",null,f(this.props.tags)),l.default.createElement("div",{className:"handle",onClick:this.toggleOpen},l.default.createElement("h4",{style:{margin:0,cursor:"pointer"}},"Tags")))},t}(u.Component);t.default=p,e.exports=t.default},213:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.data,n=t.posts.edges,a=t.tags,r=[],o=function(e){e.edges.forEach(function(e){var t=e.node;t.frontmatter.tags.forEach(function(e){t.frontmatter.unpublished||r.includes(e)||r.push(e)})})};return o(a),s.default.createElement("div",{className:"blog-posts"},s.default.createElement(i.default,{tags:r}),n.map(function(e){var t=e.node;return s.default.createElement(l.default,{to:t.frontmatter.path,style:{textDecoration:"none"},key:t.tags+t.id},s.default.createElement("div",{className:"blog-post-preview",key:t.tags+t.id},s.default.createElement("h1",{className:"blog-post-preview-title"},t.frontmatter.title),s.default.createElement("h2",{className:"blog-post-preview-date"},t.frontmatter.date,s.default.createElement("span",{className:"blog-post-tags"},p(t.frontmatter.tags))),s.default.createElement("p",{className:"blog-post-preview-excerpt"},t.excerpt)))}))}t.__esModule=!0,t.pageQuery=void 0,t.default=r;var o=n(2),s=a(o),u=n(15),l=a(u),c=n(73),i=a(c),f=", ",p=function(e){var t=e.sort(function(e,t){return e>t?1:t>e?-1:0});return t=t.map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}),t.join(f)};t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-jsx-b0b2bf619354d46b1e31.js.map