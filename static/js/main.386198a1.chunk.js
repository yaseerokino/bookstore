(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{46:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),o=n(19),a=n.n(o),i=(n(46),n(14)),s=n(9),u=n(38),j=n(39),b=n.n(j),p=n(40),d=n(16),l=n(8),O=n(15),f=n(7),h=n.n(f),x=n(10),k=n(23),v=n.n(k),m="https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/j7LPM1fwDsVO8gxJB89O/books",y={postBook:function(){var t=Object(x.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.post(m,{item_id:e.item_id,title:e.title,category:e.category});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getBooks:function(){var t=Object(x.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get(m);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),deleteBook:function(){var t=Object(x.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.delete("".concat(m,"/").concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=y,B="bookStore/books/ADD_BOOK",w="bookStore/books/REMOVE_BOOK",S="bookStore/books/GET_BOOKS",_=[],C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case B:return[].concat(Object(d.a)(t),[e.payload]);case w:return t.filter((function(t){return t.item_id!==e.payload}));case S:return[].concat(Object(d.a)(t),Object(d.a)(e.payload))||[].concat(Object(d.a)(t),[[]]);default:return t}},T=Object(s.combineReducers)({books:C}),D=Object(s.createStore)(T,Object(s.compose)(Object(s.applyMiddleware)(p.a),Object(s.applyMiddleware)(b.a),Object(u.composeWithDevTools)())),E=n(22),M=n(2),P=n(1),A=[{id:1,path:"/",text:"Books"},{id:2,path:"/categories",text:"Categories"}],J=function(){return Object(P.jsxs)("header",{children:[Object(P.jsx)("h4",{children:"Book Store"}),Object(P.jsx)("nav",{children:Object(P.jsx)("ul",{className:"nav-ul",children:A.map((function(t){return Object(P.jsx)("li",{children:Object(P.jsx)(E.b,{className:"nav-a",to:t.path,children:t.text})},t.id)}))})})]})},K=function(t){var e=t.book,n=t.removeBookFromStoreProps;return Object(P.jsxs)("li",{children:[Object(P.jsxs)("p",{children:[e.title,Object(P.jsxs)("span",{children:["\xa0in\xa0",e.category,"\xa0category"]})]}),Object(P.jsx)("button",{type:"button",onClick:function(){n(e.item_id)},children:"Remove"})]},e.item_id)},N=n(20),R=n(77),q=function(t){var e=t.addBookToStoreProps,n=Object(r.useState)({id:Object(R.a)(),title:"",category:""}),c=Object(O.a)(n,2),o=c[0],a=c[1],i=function(t){a(Object(l.a)(Object(l.a)({},o),{},Object(N.a)({},t.target.name,t.target.value)))};return Object(P.jsxs)("form",{children:[Object(P.jsx)("input",{type:"text",name:"title",placeholder:"Book Title",onChange:i,value:o.title,required:!0}),Object(P.jsx)("input",{type:"text",name:"category",placeholder:"Book Author",onChange:i,value:o.category,required:!0}),Object(P.jsx)("button",{type:"button",onClick:function(t){if(t.preventDefault(),o.title&&o.category){var n={item_id:Object(R.a)(),title:o.title,category:o.category};e(n)}},children:"Add New Book"})]})},F=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return Object(l.a)({},t)})).books,n=function(){t((function(t){g.getBooks().then((function(t){return t.data})).then((function(e){var n=Object.entries(e).map((function(t){var e=Object(O.a)(t,2),n=e[0],r=e[1],c=Object(O.a)(r,1)[0];return Object(l.a)({item_id:n},c)}));t({type:S,payload:n})}))}))};Object(r.useEffect)((function(){n()}),[]);var c=function(e){var n;t((n=e,function(t){g.deleteBook(n).then(function(){var e=Object(x.a)(h.a.mark((function e(r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"The book was deleted successfully!"===r.data&&t({type:w,payload:n});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))};return Object(P.jsxs)("main",{children:[Object(P.jsx)("section",{children:!!e&&Object(P.jsx)("ul",{children:e.map((function(t){return Object(P.jsx)(K,{book:t,removeBookFromStoreProps:c},t.item_id)}))})}),Object(P.jsx)("section",{children:Object(P.jsx)(q,{addBookToStoreProps:function(e){var n;t((n=e,function(t){g.postBook(n).then(function(){var e=Object(x.a)(h.a.mark((function e(r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Created"===r.data&&t({type:B,payload:n});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}})})]})},V=function(){return Object(P.jsx)("div",{children:Object(P.jsx)("h3",{children:"Under Construction"})})},G=function(){return Object(P.jsxs)(E.a,{children:[Object(P.jsx)(J,{}),Object(P.jsxs)(M.c,{children:[Object(P.jsx)(M.a,{exact:!0,path:"/",component:F}),Object(P.jsx)(M.a,{exact:!0,path:"/categories",component:V})]})]})};a.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(i.a,{store:D,children:Object(P.jsx)(G,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.386198a1.chunk.js.map