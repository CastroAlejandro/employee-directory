(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{22:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(12),i=a.n(s),c=(a(22),a(13)),l=a(14),o=a(17),d=a(16),h=a(0),m=function(e){return Object(h.jsx)("div",{className:"wrapper",children:e.children})},j=function(){return Object(h.jsx)("div",{className:"jumbotron jumbotron-fluid text-center bg-notification",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(h.jsx)("p",{className:"lead",children:"This is my first react application."})]})})},u=function(e){var t=e.handleSearchChange;return Object(h.jsxs)("form",{className:"form-inline d-flex justify-content-center",children:[Object(h.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e)}}),Object(h.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})},b=function(e){var t=e.filteredEmployees,a=e.headings,n=e.handleSort;function r(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(h.jsxs)("table",{id:"table",className:"table table-striped table-hover",children:[Object(h.jsx)("thead",{className:"thead-dark",children:Object(h.jsx)("tr",{children:a.map((function(e){var t=e.name,a=e.width;return Object(h.jsxs)("th",{className:"col",style:{width:a},onClick:function(){n(t.toLowerCase())},children:[t,Object(h.jsx)("span",{className:"pointer"})]},t)}))})}),Object(h.jsx)("tbody",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,a=e.name,n=e.picture,s=e.phone,i=e.email,c=e.dob;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(h.jsx)("img",{src:n.medium,alt:"profile image for "+a.first+" "+a.last,className:"img-responsive"})}),Object(h.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[a.first," ",a.last]}),Object(h.jsx)("td",{"data-th":"Phone",className:"align-middle",children:s}),Object(h.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(h.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(h.jsx)("td",{"data-th":"DOB",className:"align-middle",children:r(c.date)})]},t.uuid)})):Object(h.jsx)(h.Fragment,{})})]})},f=a(15),p=a.n(f),O=function(){return p.a.get("https://randomuser.me/api/?results=200&nat=us")},g=(a(42),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={employees:[{}],filteredEmployees:[{}],order:"descend"},e.headings=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}],e.handleSort=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var a=e.state.filteredEmployees.sort((function(a,n){return"ascend"===e.state.order?void 0===a[t]?1:void 0===n[t]?-1:"name"===t?a[t].first.localeCompare(n[t].first):n[t]-a[t]:void 0===a[t]?1:void 0===n[t]?-1:"name"===t?n[t].first.localeCompare(a[t].first):n[t]-a[t]}));e.setState({filteredEmployees:a})},e.handleSearchChange=function(t){var a=t.target.value,n=e.state.employees.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredEmployees:n})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({employees:t.data.results,filteredEmployees:t.data.results}),console.log(t)})).catch((function(e){return console.error(e.message)}))}},{key:"render",value:function(){return Object(h.jsxs)(m,{children:[Object(h.jsx)(j,{}),Object(h.jsx)(u,{handleSearchChange:this.handleSearchChange}),Object(h.jsx)("br",{}),Object(h.jsx)(b,{filteredEmployees:this.state.filteredEmployees,handleSort:this.handleSort,headings:this.headings})]})}}]),a}(r.a.Component)),x=(a(43),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))});i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),x()}},[[44,1,2]]]);
//# sourceMappingURL=main.281fd713.chunk.js.map