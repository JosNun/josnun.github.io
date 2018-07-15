webpackJsonp([0x76646ad67fbd],{364:function(e,t){e.exports={data:{markdownRemark:{html:'<p>GraphQL is one of those hot new technologies that is showing a lot of promise,\nand is also being adopted in a bunch of industries. But what is GraphQL? Is it a\nprogramming language? A Library? A Framework? In actuality, it\'s none of those\nthings. So what is GraphQL? GraphQL is a <em>query language.</em> "A what?!" you ask?\nBasically, GraphQL is a new way of requesting and modifying information on a\nserver. It\'s kinda like a REST API mixed with SQL, but better. How is it better\nyou ask? Let\'s do a quick comparison...</p>\n<table>\n<thead>\n<tr>\n<th>GraphQL</th>\n<th>REST</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Single Endpoint</td>\n<td>Multiple endpoints</td>\n</tr>\n<tr>\n<td>Select what data you want from the server</td>\n<td>Get whatever the server sends you</td>\n</tr>\n<tr>\n<td>Real-time communication</td>\n<td>Requires server polling for information</td>\n</tr>\n<tr>\n<td>GraphQL sits in between your client and server</td>\n<td>REST is integrated into your application</td>\n</tr>\n</tbody>\n</table>\n<p>That\'s an impressive list of differences, right? Now, what does it mean in\neveryday English?</p>\n<p>With a REST API, there\'s different endpoints, or URLs, that you send requests to\nto get information. Let\'s say for example, we have a retreat booking site. For\ntheir website, we need to get information about their locations, so we could\nrequest information from <code class="language-text">www.someretreat.com/locations</code>, and that would return\nus information about all their locations. What if we want information about one\nof the locations? Then, we would need to request information from another\nendpoint. Maybe <code class="language-text">www.someretreat.com/locations/villa</code> would be where we send our\nrequest to. Great, now we have information about the place! Let\'s book a room...\nTo get the available dates, we\'d need to send our request to yet another\nendpoint... Maybe something like <code class="language-text">www.someretreat.com/locations/villa/dates</code>.\nWow... That\'s three requests, all for information about one room. Kinda\nrediculous right? What would that look like with GraphQL? Well, we have a single\nendpoint, so we will send all requests to that location, so maybe\n<code class="language-text">www.someretreat.com/api</code> or something similar. But how do we get the\ninformation that we need? You know, all of their locations, basic information\nabout that location, and the available dates. With GraphQL, you send a <em>query</em>\nto that endpoint, and that is going to determine what information you get back.\nFor example, to get the locations, you might send a request like</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">query</span> <span class="token punctuation">{</span>\n  locations\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Woohoo! The server gave us the information about the locations! But... how is\nthis better than REST?</p>\n<p>This is where GraphQL begins to make sense. Since GraphQL is a query language,\nyou can select what information you want from the server. So instead of sending\ntwo additional different requests to the server for each location, we can get\nall the data we need in one single query. Let\'s replicate the previous example,\nbut this time, let\'s get all the information we need with GraphQL.</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">query</span> <span class="token punctuation">{</span>\n  locations <span class="token punctuation">{</span>\n    name\n    description\n    dates\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>We just got the name, description, and all the dates available for booking in\n<em>one single query</em>. We didn\'t get any extra information that we didn\'t need,\nwhich is called overfetching. Overfetching incurs additional data usage, so in a\nworld of mobile devices and limited data plans, GraphQL becomes really handy. On\nthe flipside, when using our REST API, we needed to make multiple requests to\nget the information that we needed. This is called underfetching. When\nunderfetching, one request needs to finish so we can get information from it for\nanother request. This causes a large latency increase, and ultimately more time\nuntil the relevent information is delivered to the end user.</p>\n<p>GraphQL also allows one to manipulate data with queries. Instead of a query,\nthis kind of request is called a <em>mutation</em>. Mutations allow clients to push or\nchange data on the server. There\'s nothing terribly special about mutations, but\nthey also enable GraphQL subscriptions. Subscriptions enable the server to push\ndata to the client whenever data is modified or added. What if we needed to\nbuild an application that updated the information displayed as it was updated on\nthe server? With a REST API, the application would need to continually check\nwith the server to see if there is new or updated information. As you can\nimagine, polling the server uses large amounts of data. When using\nsubscriptions, however, no polling is necessary because the server can push data\nto the client as it updates. The result is faster updates, and lower data usage.</p>\n<p>One of the handiest parts of GraphQL is that you don\'t have to completely\nrewrite your frontend and backend to start using it. The magic is in things\ncalled <em>resolver functions</em>. A resolver is simply a function that connects the\nquery to your application or database. Put simply, resolvers get data from\nsomewhere and give it to the response. Resolver functions can load data from\ndatabases, make web requests, or get data in any other way. In fact, you could\nuse multiple different sources to resolve a single query. Since resolvers\nconnect your data to the clients queries, one could migrate a REST API\nprogressively to GraphQL, all the while leaving the existing API in place to\nsupport legacy applications.</p>\n<p>Finally, because GraphQL is completely seperate from the front and backends,\nteams can agree on a <em>schema</em>, then develop their parts of the application\nseperately. A schema is basically what queries can be used, and what type of\ndata they return. Since the front end is completely seperate from the backend,\nthere is no specific language that needs to be used on either side, enabling\ndevelopers to work with whatever they are most comfortable with. Additionally,\nGraphQL makes it much easier for teams to transition between versions of the\napplication because no change will break any functionality, as long as it still\nfollows the schema.</p>\n<p>This was by no means a comprehensive guide to GraphQL, but it should help you\nunderstand some of the core concepts. Additionally, you should also begin to\nunderstand what sets it apart from a traditional REST API. For more information\nabout GraphQL, you can check out the <a href="http://graphql.org/">GraphQL website</a>, or\nyou can check out <a href="www.howtographql.com">How To GraphQL</a>, which is an open\nsource tutorial on GraphQL.</p>',frontmatter:{date:"March 26, 2018",path:"/graphql-why",title:"GraphQL: Why?"}}},pathContext:{}}}});
//# sourceMappingURL=path---graphql-why-4ab68473fc326504fd08.js.map