(this["webpackJsonprestaurant-ordering-app"]=this["webpackJsonprestaurant-ordering-app"]||[]).push([[0],{10:function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1iaGU",total:"Cart_total__1GBhn",actions:"Cart_actions__174UZ","button--alt":"Cart_button--alt__m83-4",button:"Cart_button__Xfg81"}},17:function(e,t,n){e.exports={item:"Item_item__UfEUF",description:"Item_description__3kU66",price:"Item_price__MFe6o"}},18:function(e,t,n){e.exports={backdrop:"Modal_backdrop__2CNX-",modal:"Modal_modal__1asYq","slide-down":"Modal_slide-down__1C6OH"}},21:function(e,t,n){e.exports={form:"ItemForm_form__1zu9Z",icon:"ItemForm_icon__1-hML",increase:"ItemForm_increase__3XJA-"}},27:function(e,t,n){e.exports={recipes:"AvailableRecipes_recipes__3YBA_","recipes-appear":"AvailableRecipes_recipes-appear__3J3sQ"}},28:function(e,t,n){e.exports={card:"Card_card__1UHJ1"}},29:function(e,t,n){e.exports={input:"Input_input__1FX9g"}},31:function(e,t,n){e.exports={summary:"RecipeSummary_summary__1UIdf"}},43:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(24),c=n.n(a),i=(n(43),n(4)),r=n(1),s=n.n(r),o=n(7),d=n.n(o),m=n.p+"static/media/header_image.83205214.jpg",l=s.a.createContext({items:[],totalAmount:0,addItem:function(){},removeItem:function(e){}}),u=n(25),j=n.n(u),b=n(8),p=n.n(b),h=n(0),_=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(l),o=s.items,d=o.reduce((function(e,t){return e+t.amount}),0),m="".concat(p.a.badge," ").concat(a?p.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s,o.length]),Object(h.jsx)(r.Fragment,{children:Object(h.jsxs)("button",{className:p.a.button,onClick:e.onClick,children:[Object(h.jsx)(j.a,{className:p.a.icon}),o.length>=1?Object(h.jsx)("span",{className:m,children:d}):Object(h.jsx)("span",{className:p.a.hidden,children:d})]})})},O=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1];return window.addEventListener("scroll",(function(){window.scrollY>=110?c(!0):c(!1)})),Object(h.jsxs)(r.Fragment,{children:[Object(h.jsxs)("header",{className:a?"".concat(d.a.header," ").concat(d.a.active):"".concat(d.a.header),children:[Object(h.jsxs)("h1",{className:d.a.title,children:["Yam!",Object(h.jsx)("span",{className:d.a["title-trademark"],children:"\u2122"})]}),Object(h.jsx)(_,{onClick:e.onShowCart})]}),Object(h.jsx)("div",{className:d.a["main-image"],children:Object(h.jsx)("img",{src:m,alt:"Delicious food!"})})]})},x=n(27),f=n.n(x),v=n(28),g=n.n(v),C=function(e){return Object(h.jsx)("div",{className:g.a.card,children:e.children})},N=n(6),I=n(29),y=n.n(I),F=s.a.forwardRef((function(e,t){return Object(h.jsxs)("div",{className:y.a.input,children:[Object(h.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(h.jsx)("input",Object(N.a)({ref:t},e.input))]})})),A=n(21),k=n.n(A),w=n(30),P=n.n(w),R=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(h.jsxs)("form",{className:k.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(h.jsx)(F,{ref:s,label:"\xd7",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(h.jsxs)("button",{children:[Object(h.jsx)(P.a,{className:k.a.icon}),!a&&Object(h.jsx)("p",{children:"Please neter a valid amount!"})]})]})},B=n(17),S=n.n(B),E=function(e){var t=Object(r.useContext)(l),n="$".concat(e.price.toFixed(2));return Object(h.jsxs)("li",{className:S.a.item,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.name}),Object(h.jsx)("div",{className:S.a.description,children:e.description}),Object(h.jsx)("div",{className:S.a.price,children:n})]}),Object(h.jsx)("div",{children:Object(h.jsx)(R,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=[{id:"p1",name:"Spaghetti Carbonara",description:"Freshly made spaghetti pasta, with eggs, hard cheese (Pecorino Romano and Parmesan), cured pork (Guanciale) and black pepper.",price:22.99},{id:"p2",name:"Shrimp Fettucine Alfredo",description:"Freshly made fettuccini pasta, with butter, shrimps, garlic, hard cheese (Parmesan) and fresh parsley",price:26.5},{id:"p3",name:"Bucatin all'Amatriciana",description:"Freshly made bucatini pasta, with cured pork (Pancetta), onion, garlic, crushed tomatoes and grated hard cheese (Pecorino Romano).",price:19.99},{id:"p4",name:"Penne Alla Vodka",description:"Freshly made penne pasta, with crushed tomatoes, vodka, heavy cream and grated hard cheese (Parmesan).",price:19.99},{id:"p5",name:"Farfalle Pomodoro",description:"Freshly made farfalle pasta, with onion, garlic, crushed tomatoes and grated hard cheese (Parmesan).",price:15.99},{id:"p6",name:"Beef Fettuccine Ragu",description:"Freshly made spaghetti pasta, with beef meat, crushed tomatoes, onion, garlic, fennel seeds, thyme and grated hard cheese (Parmesan).",price:25.99}],D=function(){var e=T.map((function(e){return Object(h.jsx)(E,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(h.jsx)("section",{className:f.a.recipes,children:Object(h.jsx)(C,{children:Object(h.jsx)("ul",{children:e})})})},M=n(31),H=n.n(M),U=function(){return Object(h.jsxs)("section",{className:H.a.summary,children:[Object(h.jsx)("h2",{children:"It's difficult not to love our pasta!"}),Object(h.jsx)("a",{href:"www.google.ro",children:"Order now!"})]})},J=function(){return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(U,{}),Object(h.jsx)(D,{})]})},V=n(15),X=n.n(V),Y=n(18),q=n.n(Y),G=function(e){return Object(h.jsx)("div",{className:q.a.backdrop,onClick:e.onClose})},Z=function(e){return Object(h.jsx)("div",{className:q.a.modal,children:Object(h.jsx)("div",{className:q.a.content,children:e.children})})},$=document.getElementById("overlays"),z=function(e){return Object(h.jsxs)(r.Fragment,{children:[X.a.createPortal(Object(h.jsx)(G,{onClose:e.onClose}),$),X.a.createPortal(Object(h.jsx)(Z,{children:e.children}),$)]})},L=n(9),Q=n.n(L),K=n(33),W=n.n(K),ee=n(32),te=n.n(ee),ne=function(e){var t="$".concat(e.price.toFixed(2));return Object(h.jsxs)("li",{className:Q.a["cart-item"],children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:e.name}),Object(h.jsxs)("div",{className:Q.a.summary,children:[Object(h.jsx)("span",{className:Q.a.price,children:t}),Object(h.jsxs)("span",{className:Q.a.amount,children:["x ",e.amount]})]})]}),Object(h.jsxs)("div",{className:Q.a.actions,children:[Object(h.jsx)("button",{children:Object(h.jsx)(te.a,{onClick:e.onRemove})}),Object(h.jsx)("button",{children:Object(h.jsx)(W.a,{onClick:e.onAdd})})]})]})},ae=n(10),ce=n.n(ae),ie=function(e){var t=Object(r.useContext)(l),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.addItem(Object(N.a)(Object(N.a)({},e),{},{amount:1}))},i=function(e){t.removeItem(e)},s=Object(h.jsx)("ul",{className:ce.a["cart-items"],children:t.items.map((function(e){return Object(h.jsx)(ne,{name:e.name,amount:e.amount,price:e.price,onRemove:i.bind(null,e.id),onAdd:c.bind(null,e)},e.id)}))});return Object(h.jsxs)(z,{onClose:e.onClose,children:[s,Object(h.jsxs)("div",{className:ce.a.total,children:[Object(h.jsx)("span",{children:"Total Amount"}),Object(h.jsx)("span",{children:n})]}),Object(h.jsxs)("div",{className:ce.a.actions,children:[Object(h.jsx)("button",{className:ce.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(h.jsx)("button",{className:ce.a.button,children:"Order"})]})]})},re=n(5),se={items:[],totalAmount:0},oe=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(N.a)(Object(N.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(re.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[o],m=e.totalAmount-d.price;if(1===d.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var l=Object(N.a)(Object(N.a)({},d),{},{amount:d.amount-1});(s=Object(re.a)(e.items))[o]=l}return{items:s,totalAmount:m}}return se},de=function(e){var t=Object(r.useReducer)(oe,se),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(h.jsx)(l.Provider,{value:s,children:e.children})};var me=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)(de,{children:[n&&Object(h.jsx)(ie,{onClose:function(){a(!1)}}),Object(h.jsx)(O,{onShowCart:function(){a(!0)}}),Object(h.jsx)("main",{children:Object(h.jsx)(J,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(h.jsx)(me,{}))},7:function(e,t,n){e.exports={header:"Header_header__38cJ-",active:"Header_active__2gTiY","main-image":"Header_main-image__1RpF9",title:"Header_title__254vW","title-trademark":"Header_title-trademark__2oxfZ"}},8:function(e,t,n){e.exports={button:"CartButton_button__3XpVi",icon:"CartButton_icon__pdgT8",badge:"CartButton_badge__1lvP9",hidden:"CartButton_hidden__2y3TP",bump:"CartButton_bump__Kq1Q9"}},9:function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3I9O9",summary:"CartItem_summary__2Mz-T",price:"CartItem_price__3wOsb",amount:"CartItem_amount__3qIkD",actions:"CartItem_actions__nhDRI"}}},[[49,1,2]]]);
//# sourceMappingURL=main.e37bb203.chunk.js.map