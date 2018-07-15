webpackJsonp([52938120389206],{373:function(a,e){a.exports={data:{markdownRemark:{html:'<p>There are several instances where one may want to route traffic to a specific\ndomain through a certain WAN connection. One use case I recently encountered is\nwhen your country\'s IP is blocked for a specific site. It\'s a relatively simple\nprocess, and can be a really powerful tool when managing a network. Here\'s the\nsteps:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/step1-5d89664d206094d1078dffc49fae88b0-99e46.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 980px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACMElEQVQ4y42S2W8SURSH+T998IGwGTVgotHEWEEoDrLJpgO0TAcofTMRgQSIS3wg4hKhVAL1QTBlbVk6iGH99c5tbSSAcZIv584993y5Z+ZIsh8/IJv9hFx+H5lMBrFXMcRjccTjcSSTSaTT6QVSKZHUEuLZaDQKyY3r13D/jhr3bt+EWq2GQXYFD+RXodbcgkajhkwmg1QqpcjlcqhUKiiVypUoFApIqtWfKB7kEeFdCPFe+J754GWfw8N64PP64fP5wbJkzyvih8PhQKFQwHA4RLfbRb/fX0DS6/VIu19hYe7C69LBarVBrzdCu7EBrVYPk8kMi8VOsNFoMBhxePgd6x7J8fEJ8vkc3HYtHHYjGMYJs9kKI7NJoo3cyA2nU8RDI8OYUC6XafF0OsV8Pl9A0ul0qNBlewj308cwbjrBPLHgkVEHi9kOl8tDpC4qE+U6nQ6lUokKZ7PZ8g2bzRaKxW8I825wAT+2tyIIcBzYLRZ+/zZ2doIIhyMIhXZp5DgelUp1vbDRaOJg/zOCAQeR+YiEQzAYAs8HiYynUXw/J3whrKwX0pZzX/DyxR7ev0tjN7JHCiNkphJk7t6SGXtDZuw1RVwnEinU6w1aLH6zFS030W6foFZrQxj8Rr11hB/VI1LUImMwQK8n4PT0FwYkJyIIQ4xG4/XCWq1G/xZJX0RgMh6T4gFFEAQiGNH2xPyfP/tP4WQyuTyw6tB57u/1fGnvUliv15eE/8O6G54BdN5xFttfarIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Step 1"\n        title=""\n        src="/static/step1-5d89664d206094d1078dffc49fae88b0-7df03.png"\n        srcset="/static/step1-5d89664d206094d1078dffc49fae88b0-c0982.png 245w,\n/static/step1-5d89664d206094d1078dffc49fae88b0-732b3.png 490w,\n/static/step1-5d89664d206094d1078dffc49fae88b0-7df03.png 980w,\n/static/step1-5d89664d206094d1078dffc49fae88b0-c2fda.png 1470w,\n/static/step1-5d89664d206094d1078dffc49fae88b0-3c743.png 1960w,\n/static/step1-5d89664d206094d1078dffc49fae88b0-99e46.png 2880w"\n        sizes="(max-width: 980px) 100vw, 980px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \nFirstly, we\'ll open up the network preferences</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/step2-f3516b475dbfaa92d59b866e36399fbe-99e46.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 980px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABrklEQVQ4y62Q7UtaYRiHz58aqfMENXUx6Ev/wGgs50ony/Jl+ZKrpvnBl/oWZ25Kpkc9Uw66hvuskKagXjudSHDmIuiGi4fngfu6f88t/MhlyeXyFIslJEkiFo9zcpIgkUiQTCbJnJ6SydyT0Umn0zOkUiniWq+wJIqsLC9js65gsbxkfW2Vtdc2LFYbq6+sGI2LGBYXMBgWeGEyYjKZEEWzhjiD2WxGkMotst8ldj6+we2yY9/c5L39HRsbb/F82iYUDBAO7nF44CXg28Xv30dRftLtdmm323Q6nSmE4tkZBe2rXp+fgD+A0+nE5XLhcDg4Po5Tr/+iXK5TqzXJ54uo6hXX1z3mlS68/CbxObjPrsejyZy43W62tj5wdPSVSqXGxUUJWVY4P89Sqda1ZB29eTQaMR6PpxAaV7+pVkv4vHtEIlFCoQjhcEQ7w0Sjh1rKmC6+I8aXgyh/Wq2JcCahoij0b/rcaAwGgyn6/bv3Cbf3Xo/hcKg33yaaETYajQcnPVYPyXShqqr6xH938RhzExYKhUnCeVOfUoIsy//dyZOFzWbzeYX3O3wu4V/pK6SuHYVFaAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Step 2"\n        title=""\n        src="/static/step2-f3516b475dbfaa92d59b866e36399fbe-7df03.png"\n        srcset="/static/step2-f3516b475dbfaa92d59b866e36399fbe-c0982.png 245w,\n/static/step2-f3516b475dbfaa92d59b866e36399fbe-732b3.png 490w,\n/static/step2-f3516b475dbfaa92d59b866e36399fbe-7df03.png 980w,\n/static/step2-f3516b475dbfaa92d59b866e36399fbe-c2fda.png 1470w,\n/static/step2-f3516b475dbfaa92d59b866e36399fbe-3c743.png 1960w,\n/static/step2-f3516b475dbfaa92d59b866e36399fbe-99e46.png 2880w"\n        sizes="(max-width: 980px) 100vw, 980px"\n      />\n    </span>\n  </span>\n  \n  </a>\n     Then, navigate to the outbound policy page. When\noutbound policy is set to custom, this page will list any specific\ntraffic-routing rules you have set up. If it is not set to custom, go ahead and\nset it now.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/step3-b6032dbb3bb54488dea3168ea2605ca8-99e46.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 980px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB5UlEQVQ4y42T62+aYBjF/f//hHlBu/jBT962ZFkMpIlSLVIH5fJyVawybHXTujZbEz17eLuaEddVkhMChB/nOechZ1gGbMuG67oYjUbodDqQJAmiKEEi9Xq9jLrdLj/LspxRek8UReTW6zUYY6jValySdA7fn8CyXBgGw81Ngji+xWyWYD6/RRzN8fTrCa8dueVySS8aqFQqyOfzqNdb0DUbijIiNwPYtgfPm8BxQjBSSB/Zbjb85d1udyQOtCwL1WoV5XIZzeYHmKaLK1WnURQOG49nCIMpfNLU8fGw3XLgfr8/Um61WnGHKaxQKKDd+ghmB+TwCy4uFDgsgE9Q1x3DIYWmgx/39wfg0cgvQEEQUCwW0Gi0cX3NoKoa+v0hBwXkLHXq+xFC5hFw+zYwzTAFtsihrtscOOirVJifdUhl/ReYzVBA84/D4VDjIx9lyLIZ/tOhaZo4O3uPUqnIM7Rt/9nhQOXtBkHEwS5pQg4fThlZKAm8lHRky/L42sjyJdwDcAyPMgzeGvnvDFOHLxnylqkUxw0PpaQOQ/vEUtK1eUeL3ai3oWkWlMEVuucyTMqTsfB5sU9Zm8VigWRxB52WWaO/IIy+0vV3xJfU8KfPiKiYyZR+u+QbkrsNYnr2+PjzVeBvdiClrRER6p8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Step 3"\n        title=""\n        src="/static/step3-b6032dbb3bb54488dea3168ea2605ca8-7df03.png"\n        srcset="/static/step3-b6032dbb3bb54488dea3168ea2605ca8-c0982.png 245w,\n/static/step3-b6032dbb3bb54488dea3168ea2605ca8-732b3.png 490w,\n/static/step3-b6032dbb3bb54488dea3168ea2605ca8-7df03.png 980w,\n/static/step3-b6032dbb3bb54488dea3168ea2605ca8-c2fda.png 1470w,\n/static/step3-b6032dbb3bb54488dea3168ea2605ca8-3c743.png 1960w,\n/static/step3-b6032dbb3bb54488dea3168ea2605ca8-99e46.png 2880w"\n        sizes="(max-width: 980px) 100vw, 980px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \nScroll the whole way to the bottom of the list, then add a new rule</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/step4-11684fd4c4137b742984ca050bc3a3ae-99e46.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 980px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACQElEQVQ4y42T3W/SUBjG+aO98cIrE2GfJu5CnZmEgV4tG2yLEAcLFEopLaX049BSKN+gEdyyCFNvHt+eRMXocBdPzjnp6e993o8TspgF13XBbBuaVsPFxXvkcjlks1m+BioUChAEgatYLEEUxb9UKpX43ZDv+wTSkEyeIpk6Q0EQ0Wp1KIAD07Dh+330+yOuXm8Iz2lhMh7j89UV5vP5H5rNZgg5jkMRSnjy+CHpAbYij7C5sYlwOIJIeANbWzvY2dnF9vYu32fTGXQ7HQyHQwwGA76uKtRsNtFoNPAmEcOL58+wt/cUqbN3kCQZsqxSKhVKUyKVURIrsDSdgD7GkwlGoxHG5HZVHGgYBlKpU+zv7+PlqyhkRaf0+jz1bndAFz9S9A8E+QTf8dDxPEzWAQOH5+fnSMQP8frwLYRylWrIYNtNeJ5P0CG56lOKU7Sphh2vfTeQMQbTNHlBb25ucH19jcVigeVyidvlLb5++44v9G0qVTAbUJ3IebtFjZneAQyaUlUUZDIZpNNpGhGBHFuo1w2oqgbGHDjMha0bsEwbdr0Bv73GYQCUJAmxWAwHBwc4Ojqmc5XARZqrPG+Mqtah1nQKrKEuK/cDxuNxDg3mMYAUiyLyeQEKQTTqbC2AkrSqis59gIlEggNPTlIol2V6FavABgcG+3q1th7our8dRqNRHB8nfwEvL/OoVBQOUn8C5f84ZIwKzZoQ6UeRhrmmm7CaLVj09BRFhR40qGHDoLPFWjBtF363R8DxP4E/AKbDfZ2Vr5J/AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Step 4"\n        title=""\n        src="/static/step4-11684fd4c4137b742984ca050bc3a3ae-7df03.png"\n        srcset="/static/step4-11684fd4c4137b742984ca050bc3a3ae-c0982.png 245w,\n/static/step4-11684fd4c4137b742984ca050bc3a3ae-732b3.png 490w,\n/static/step4-11684fd4c4137b742984ca050bc3a3ae-7df03.png 980w,\n/static/step4-11684fd4c4137b742984ca050bc3a3ae-c2fda.png 1470w,\n/static/step4-11684fd4c4137b742984ca050bc3a3ae-3c743.png 1960w,\n/static/step4-11684fd4c4137b742984ca050bc3a3ae-99e46.png 2880w"\n        sizes="(max-width: 980px) 100vw, 980px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \nGo ahead and name the rule something recognizable so you will know what it is for in the future. To filter by domain, Adjust the "Destination" section accordingly, then enter your domain name. Wildcards are also supported. for more information, click the <code class="language-text">?</code> button. Choose an appropriate algorithm for routing your traffic. Typically, enforced will be the most applicable, but <a href="https://www.peplink.com/technology/load-balancing-algorithms/">other options</a> are available.</p>\n<p>When you are finished with the configuration, save your changes.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/step5-ba37537263e1e257ca502a6434b8d199-99e46.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 980px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACT0lEQVQ4y32SW08aURSF+av6AuWWpsYXfwmp3DIz1iYqhRlAlPiiIFgYAZn7hYEZlIcmjSj2TVf3HPtQ28gkK/vMyZxv1l77RHr9KwwGA9IQnU4HoiShVquTaqjX6zg+Pkaz2cTZ2Rmrp6enTOH6b4V7Ep2NJBMfkEolkUzEkUwmsbP9Eduf0rROIZ1OY3NzExsbG0zxeBxbW1tI0HexaBSxWOyNorQXCXwf13IX+0IGX78I2BP2IPACOE4AT7VYKDIVCgV65yFwPCbeFKvVCvf391gul28UkccODF2BKJbQOKmjXDmCVC1TLeOwJOHwm4SDI5FVTtjHQamKHz+XeO+J9IY6tMYFqhUVjaaPiniN1qWDi7aHzvdbXF4FOGmqtDfFeXuKgRyQsxU7/Pz8gpeXt4pMph4mFy3sF3hkcxw5bUBTXciygqvuADcjg4Ylw7F96IYHX3fw6/EVGAL+c+jOfDjtFvbyOeRIkliFYbjo94fodvsYjVS0W13YtoexYsBTDTw9Pr4PnC8WsGncfCaD3XyegLV/gBpVGZblQdVsuKqJ1cMaoD+fwzw/B5fN4nN2F2KlyiDjsQGNAKpqYThUYZoug7q6vR6oaRo022ZXJJfLUYY1Bgxhs9ktgSZ06RUo9APbmWGqWXhaB7Qsi66NDp7jkKeWK+QwdKdT+J43Z9kplJ1FYMcN4BsOZbhmKHd3C2pLRbFYRJZalqQ6y1CWb9DrDZjDEBoCTWp5wjJ8eB8YBAEDhu6yfzJUFJNgr0Nhubk+Qaes5Qk5XJfhbzsYd4DO2WbbAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Step 5"\n        title=""\n        src="/static/step5-ba37537263e1e257ca502a6434b8d199-7df03.png"\n        srcset="/static/step5-ba37537263e1e257ca502a6434b8d199-c0982.png 245w,\n/static/step5-ba37537263e1e257ca502a6434b8d199-732b3.png 490w,\n/static/step5-ba37537263e1e257ca502a6434b8d199-7df03.png 980w,\n/static/step5-ba37537263e1e257ca502a6434b8d199-c2fda.png 1470w,\n/static/step5-ba37537263e1e257ca502a6434b8d199-3c743.png 1960w,\n/static/step5-ba37537263e1e257ca502a6434b8d199-99e46.png 2880w"\n        sizes="(max-width: 980px) 100vw, 980px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/step6-deca79025972422c894aa64eb89e07cc-99e46.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 980px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACYElEQVQ4y32T7U/aUBTG+Vf1i0yRLDN+2V+iDkFo0WVRoYVChLi4JU6oRSilpa+0UCVZliy86T7Js9Prl5lFmjw5t7c9v3tOn9PYrdJEu91murm5gVgqQZIqJAmVSgXVahX1eh2Xl5cs1mo1pmj9r6K9EuXGElvvsL2dQBQTiQQ+7r7H7ockrbeRTCaxvr6OtbU1ps3NTezs7GCL3otvbCAej7/SBu3FwtEId60GTrg9nBzzyPN58ByPXI4Hx3E4yhwxZUhcjgNPGvgBFosFJpMJptPpK8VamgPT1CGKZ7i4kFAUzlEuF1EoFnFaKOOsUMKXMwGn5yXk+M9s79fvKd66YkrXhm70KVFAUSxDqtbQ7VmQFRUNWcVdp4+r7030DA9yS4NJcTZbsOTn52csl8tXivkDF47jgOd5HOwfQBQkGIaL9p2GZqOFbtdgceCN6GAHoeXiz+IFGAH+q9DzBrAsE/l8FoeH+8wp2/bIdRXNpgJN08l9GZ4XoKf3MTRtPM1XAB8e7gk4wvHxFZnwFULxB8GGkGWPgC5arQDX1yZUNURHfYClBphPVwDDcETAgIB1ZLNVFArfIDctggbo938ykHLrotMJoPXGsLQh5rMVQF03WMscl0EqtUdui9SmQTALw2FI7UewLgzdhOP6GFkOHufzt4GWZVOSTUAe6XQaglAmoElAF75/T898MqZPhw4IOCRTPDytMmU8HtMcmtRulipMoSRKdO8xlxWl8wJyAjgEtkiBYeNxNl/1DUMGjP6EVOoTtSyhR3MYwRo0LlGFHo2M6wawCexThYsVLv8FPPh5S1aXWd8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="step6"\n        title=""\n        src="/static/step6-deca79025972422c894aa64eb89e07cc-7df03.png"\n        srcset="/static/step6-deca79025972422c894aa64eb89e07cc-c0982.png 245w,\n/static/step6-deca79025972422c894aa64eb89e07cc-732b3.png 490w,\n/static/step6-deca79025972422c894aa64eb89e07cc-7df03.png 980w,\n/static/step6-deca79025972422c894aa64eb89e07cc-c2fda.png 1470w,\n/static/step6-deca79025972422c894aa64eb89e07cc-3c743.png 1960w,\n/static/step6-deca79025972422c894aa64eb89e07cc-99e46.png 2880w"\n        sizes="(max-width: 980px) 100vw, 980px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \nYour now rule will be placed at the top of the list. The filters will be applied from the top down, so if you want other rules to be higher-priority (for VoIP maybe?), drag your new rule down below them.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/step7-66667689ee709b42f0e7a3b7192985b7-99e46.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 980px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACV0lEQVQ4y42Sy08aURjF+U9VrJFWJE0TF3XTP6NaEAcBTRuoPGSMIjHpQkCG5zDDvHmGLrooj8Gu5PS7t91YW9JJTjJ3Mvd3zznf9VSkMur1OqmBYrGITDaLXE4k5SCKIi4vL5HP51EoFHB7c8NVoHX+D11fXyNLez3+nZfY3fXDv/MKfr8f+3uvsfcmQO+7CAQC8Hq92PBu4MX6OvbX1vBuawtvNzfh8/meaXt7G57hYIBatYSz2AHOTmOIx+KIRWM4OYkhGo1COBa4jkmRYAjC+wPYhgl34WIymWA6nT6Rpyqb0DQFmUwSV1c5pNJJXFykcJ5KIXGeRZL0KZFG4nMGJ/GPSKRFfPs+w78ej9QyICsqbSBImvoTr9Bqa7iXmijeN1FtqLj9UkJbtVGWZGiqhdlszjc/Pj5iuVw+kafr2NB1ncf7cHhITnPoqCbqNRnlkgS5paJcrsKxB1Dp+0i38MN1OZABnjm0HYcia4jHT6mnME1KpAMc1GotlEpVtFod3N1VYFt9yG0d/Y6Jh/kK4Hg8hqIoBDtGMBhEOn1BawONRpu7lOUOKpU6d6eQHNWA+zvyX4HD4ZB+ViEIAgemUlm6k22C6rApZqdjodlU+Fo3unA0C+58BZDBWGR2VcJHR8iQQxaTOer1RhTfpgNkKBTXMHvoE3CxKrJhGBzIhhIOh3lkWda4s253BINcsQNYryb1ODRsPLgrO/zKI0ciEYRCIWRpyppm8/4kqfELRM5MArPIPepw8T8dsqEwILs2bYrHYGzKzCHr0rJ6PHKXKnBXRP4JRqt4V1sm5CwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Step 7"\n        title=""\n        src="/static/step7-66667689ee709b42f0e7a3b7192985b7-7df03.png"\n        srcset="/static/step7-66667689ee709b42f0e7a3b7192985b7-c0982.png 245w,\n/static/step7-66667689ee709b42f0e7a3b7192985b7-732b3.png 490w,\n/static/step7-66667689ee709b42f0e7a3b7192985b7-7df03.png 980w,\n/static/step7-66667689ee709b42f0e7a3b7192985b7-c2fda.png 1470w,\n/static/step7-66667689ee709b42f0e7a3b7192985b7-3c743.png 1960w,\n/static/step7-66667689ee709b42f0e7a3b7192985b7-99e46.png 2880w"\n        sizes="(max-width: 980px) 100vw, 980px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \nNow, click the apply changes button to finalize your changes. The traffic to your specified domain should now be using the algorithm you configured. Go ahead and and give it a test!</p>',frontmatter:{date:"January 31, 2018",path:"/routing-traffic-per-domain-peplink-router",title:"Routing traffic per-domain with a Peplink Router"}}},pathContext:{}}}});
//# sourceMappingURL=path---routing-traffic-per-domain-peplink-router-8b77668aefbe404020eb.js.map