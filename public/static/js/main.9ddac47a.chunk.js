(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(13),s=a.n(i),l=(a(101),a.p,a(102),a(22)),r=a.p+"static/media/delete.86bb3836.svg",o=a.p+"static/media/edit.249fb4c7.svg",d=a(176),h=a(177),u=a(82),j=a(90),m=a(79),b=a(80),p=a(25),g=a(92),O=a(91),x=a(172),f=a(173),v=a(174),y=a(185),P=a(186),N=a(187),k=a(175),S=a(3),C=function(e){Object(g.a)(a,e);var t=Object(O.a)(a);function a(e){var c;return Object(m.a)(this,a),(c=t.call(this,e)).getSafePage=c.getSafePage.bind(Object(p.a)(c)),c.changePage=c.changePage.bind(Object(p.a)(c)),c.applyPage=c.applyPage.bind(Object(p.a)(c)),c.pageClick=c.pageClick.bind(Object(p.a)(c)),c.renderPages=c.renderPages.bind(Object(p.a)(c)),c.changePageSize=c.changePageSize.bind(Object(p.a)(c)),c.renderPageJump=c.renderPageJump.bind(Object(p.a)(c)),c.state={page:e.page,pageSize:c.props.defaultPageSize},c}return Object(b.a)(a,[{key:"getSafePage",value:function(e){return Number.isNaN(e)&&(e=this.props.page),Math.min(Math.max(e,0),this.props.pages-1)}},{key:"changePageSize",value:function(e){this.props.onPageSizeChange(e),this.setState({pageSize:e})}},{key:"changePage",value:function(e){e=this.getSafePage(e),this.setState({page:e}),this.props.page!==e&&this.props.onPageChange(e)}},{key:"applyPage",value:function(e){e&&e.preventDefault();var t=this.state.page;this.changePage(""===t?this.props.page:t)}},{key:"pageClick",value:function(e){this.changePage(e)}},{key:"renderPages",value:function(){for(var e=this,t=this.props.pages,a=[],c=function(t){var c=e.state.page===t;a.push(Object(S.jsx)(x.a,{active:c,children:Object(S.jsx)(f.a,{onClick:function(){return e.pageClick(t)},children:t+1})},t))},n=0;n<t;n++)c(n);return a}},{key:"renderPageJump",value:function(){for(var e=this,t=this.props.pages,a=[],c=function(t){a.push(Object(S.jsx)(v.a,{onClick:function(){return e.changePage(t)},children:t+1},t))},n=0;n<t;n++)c(n);return a}},{key:"render",value:function(){var e=this,t=this.props,a=t.page,n=t.pages,i=t.canPrevious,s=t.canNext,l=t.pageSizeOptions,r=t.showPageSizeOptions,o=t.showPageJump;return Object(S.jsx)(c.Fragment,{children:Object(S.jsxs)("div",{className:"text-center",children:[o&&Object(S.jsxs)("div",{className:"float-left pt-2",children:[Object(S.jsx)("span",{children:"Page "}),Object(S.jsxs)(y.a,{className:"d-inline-block",children:[Object(S.jsx)(P.a,{caret:!0,color:"outline-primary",size:"xs",children:this.state.page+1}),Object(S.jsx)(N.a,{direction:"left",children:this.renderPageJump()})]}),Object(S.jsx)("span",{children:" of "}),n]}),Object(S.jsxs)(k.a,{className:"d-inline-block",size:"sm",listClassName:"justify-content-center","aria-label":"Page navigation example",children:[Object(S.jsx)(x.a,{className:"".concat(!i&&"disabled"),children:Object(S.jsx)(f.a,{className:"prev",onClick:function(){i&&e.changePage(a-1)},disabled:!i,children:Object(S.jsx)("i",{className:"simple-icon-arrow-left"})})}),this.renderPages(),Object(S.jsx)(x.a,{className:"".concat(!s&&"disabled"),children:Object(S.jsx)(f.a,{className:"next",onClick:function(){s&&e.changePage(a+1)},disabled:!s,children:Object(S.jsx)("i",{className:"simple-icon-arrow-right"})})})]}),r&&Object(S.jsxs)("div",{className:"float-right pt-2",children:[Object(S.jsx)("span",{className:"text-muted text-small mr-1",children:"Items "}),Object(S.jsxs)(y.a,{className:"d-inline-block",children:[Object(S.jsx)(P.a,{caret:!0,color:"outline-primary",size:"xs",children:this.state.pageSize}),Object(S.jsx)(N.a,{right:!0,children:l.map((function(t,a){return Object(S.jsx)(v.a,{onClick:function(){return e.changePageSize(t)},children:t},a)}))})]})]})]})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{page:e.page}}}]),a}(c.Component),w=a(23),z=a.n(w),q=function(e){var t=e.history,a=(e.match,Object(c.useState)([])),n=Object(l.a)(a,2),i=n[0],s=n[1],m=Object(c.useState)(!1),b=Object(l.a)(m,2),p=b[0],g=b[1];Object(c.useEffect)((function(){z.a.get("http://localhost:5000/api/vehicules").then((function(e){s(e.data)}))}),[p]);return console.log("data",i),Object(S.jsx)("div",{children:Object(S.jsx)(d.a,{children:Object(S.jsx)("div",{className:"col-md-12 mt-12",children:Object(S.jsxs)(h.a,{style:{padding:20},children:[Object(S.jsx)("h1",{className:"mt-3 text-center",children:"V\xe9hicule"}),Object(S.jsxs)(d.a,{children:[Object(S.jsx)(u.a,{onClick:function(){return t.push("/addVehicule")},style:{margin:"10px auto"},children:"Add V\xe9hicule"}),Object(S.jsx)("div",{className:"col-md-12 mt-12",children:Object(S.jsxs)(h.a,{children:[Object(S.jsx)("h3",{className:"mt-3 text-center",children:"Liste des v\xe9hicules"}),Object(S.jsx)(j.a,{columns:[{Header:"Nom V\xe9hicule",accessor:"nom"},{Header:"Supprimer",Cell:function(e){return Object(S.jsx)("img",{src:r,style:{cursor:"pointer"},onClick:function(){var t;t=e.original._id,z.a.delete("http://localhost:5000/api/vehicules/".concat(t)).then((function(){return g(!p)}))}})}},{Header:"Modifier",Cell:function(e){return Object(S.jsx)("img",{src:o,style:{cursor:"pointer"},onClick:function(){return t.push("/modifyVehicule/".concat(e.original._id))}})}}],data:i,defaultPageSize:5,showPageJump:!1,showPageSizeOptions:!1,PaginationComponent:C})]})})]})]})})})})},V=a(88),M=a(16),E=a(178),J=a(183),I=a(184),B=function(e){var t=e.history,a=Object(c.useState)(""),n=Object(l.a)(a,2),i=n[0],s=n[1],r=Object(c.useState)(""),o=Object(l.a)(r,2),j=o[0],m=o[1],b=Object(c.useState)([]),p=Object(l.a)(b,2),g=p[0],O=p[1],x=Object(c.useState)([]),f=Object(l.a)(x,2),v=f[0],y=f[1];Object(c.useEffect)((function(){z.a.get("http://localhost:5000/api/modeles").then((function(e){y(e.data)})),z.a.get("http://localhost:5000/api/marques").then((function(e){O(e.data)}))}),[]);return Object(S.jsx)("div",{children:Object(S.jsx)(d.a,{children:Object(S.jsx)("div",{className:"col-md-12 mt-12",children:Object(S.jsxs)(h.a,{style:{padding:20,height:500},children:[Object(S.jsx)("h1",{className:"mt-3 text-center",children:"V\xe9hicule"}),Object(S.jsxs)(d.a,{children:[Object(S.jsx)(u.a,{onClick:function(){return t.goBack()},style:{margin:"10px auto"},children:"Retour"}),Object(S.jsxs)("div",{className:"col-md-12 mt-12",children:[Object(S.jsx)("h3",{className:"mt-3 text-center",children:"Ajouter des V\xe9hicule"}),Object(S.jsxs)(d.a,{className:"col-md-12",children:[Object(S.jsxs)("div",{className:"col-md-6",children:[Object(S.jsx)(E.a,{className:"mt-4",children:"Marque : "}),Object(S.jsxs)(J.a,{style:{width:"18pc",border:"1px solid #d7d7d7",background:"white"},value:j,name:"marque",id:"marqueId",onChange:function(e){return m(e.target.value)},displayEmpty:!0,inputProps:{"aria-label":"Without label"},children:[Object(S.jsx)(I.a,{disabled:!0,value:"",children:"Choisir la marque de v\xe9hicule"}),g.map((function(e,t){return Object(S.jsx)(I.a,{value:e,children:e.nom},t)}))]})]}),Object(S.jsxs)("div",{className:"col-md-6",children:[Object(S.jsx)(E.a,{className:"mt-4",children:"Modele : "}),Object(S.jsxs)(J.a,{style:{width:"18pc",border:"1px solid #d7d7d7",background:"white"},value:i,name:"modele",id:"modeleId",onChange:function(e){return s(e.target.value)},displayEmpty:!0,inputProps:{"aria-label":"Without label"},children:[Object(S.jsx)(I.a,{disabled:!0,value:"",children:"Choisir le modele de v\xe9hicule"}),v.map((function(e,t){return Object(S.jsx)(I.a,{value:e,children:e.nom},t)}))]})]}),Object(S.jsx)(u.a,{color:"primary",style:{margin:"15px auto"},disabled:!j||!i,onClick:function(){return function(){var e={nom:j.nom+i.nom,marque:j._id,modele:i._id};z.a.post("http://localhost:5000/api/vehicules",e).then((function(){return t.goBack()}))}()},children:"Submit"})]})]})]})]})})})})},F=function(e){var t=e.history,a=Object(c.useState)(""),n=Object(l.a)(a,2),i=n[0],s=n[1],r=Object(c.useState)(""),o=Object(l.a)(r,2),j=o[0],m=o[1],b=Object(c.useState)([]),p=Object(l.a)(b,2),g=p[0],O=p[1],x=Object(c.useState)([]),f=Object(l.a)(x,2),v=f[0],y=f[1];console.log("history",t),Object(c.useEffect)((function(){z.a.get("http://localhost:5000/api/modeles").then((function(e){y(e.data)})),z.a.get("http://localhost:5000/api/marques").then((function(e){O(e.data)}))}),[]);return Object(c.useEffect)((function(){var e=t.location.pathname.replace("/modifyVehicule/","");z.a.get("http://localhost:5000/api/vehicules/".concat(e)).then((function(e){m(e.data.marque),s(e.data.modele)}))}),[t.location.pathname]),console.log("marque",j,"modele",i),Object(S.jsx)("div",{children:Object(S.jsx)(d.a,{children:Object(S.jsx)("div",{className:"col-md-12 mt-12",children:Object(S.jsxs)(h.a,{style:{padding:20,height:500},children:[Object(S.jsx)("h1",{className:"mt-3 text-center",children:"V\xe9hicule"}),Object(S.jsxs)(d.a,{children:[Object(S.jsx)(u.a,{onClick:function(){return t.goBack()},style:{margin:"10px auto"},children:"Retour"}),Object(S.jsxs)("div",{className:"col-md-12 mt-12",children:[Object(S.jsx)("h3",{className:"mt-3 text-center",children:"Modifier des V\xe9hicule"}),Object(S.jsxs)(d.a,{className:"col-md-12",children:[Object(S.jsxs)("div",{className:"col-md-6",children:[Object(S.jsx)(E.a,{className:"mt-4",children:"Marque : "}),Object(S.jsxs)(J.a,{style:{width:"18pc",border:"1px solid #d7d7d7",background:"white"},displayEmpty:!0,value:j,name:"marque",id:"marqueId",onChange:function(e){return m(e.target.value)},children:[Object(S.jsx)(I.a,{value:j,children:j.nom}),g.map((function(e,t){return Object(S.jsx)(I.a,{value:e,children:e.nom},t)}))]})]}),Object(S.jsxs)("div",{className:"col-md-6",children:[Object(S.jsx)(E.a,{className:"mt-4",children:"Model : "}),Object(S.jsxs)(J.a,{style:{width:"18pc",border:"1px solid #d7d7d7",background:"white"},value:i,name:"modele",id:"modeleId",onChange:function(e){return s(e.target.value)},children:[Object(S.jsx)(I.a,{value:i,children:i.nom}),v.map((function(e,t){return Object(S.jsx)(I.a,{value:e,children:e.nom},t)}))]})]}),Object(S.jsx)(u.a,{color:"primary",style:{margin:"15px auto"},disabled:!j||!i,onClick:function(){return function(){var e={nom:j.nom+" "+i.nom,marque:j._id,modele:i._id},a=t.location.pathname.replace("/modifyVehicule/","");z.a.put("http://localhost:5000/api/vehicules/".concat(a),e).then((function(){return t.goBack()}))}()},children:"Submit"})]})]})]})]})})})})};var _=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(V.a,{children:Object(S.jsxs)(M.c,{children:[Object(S.jsx)(M.a,{exact:!0,path:"/",component:q}),Object(S.jsx)(M.a,{path:"/addVehicule",component:B}),Object(S.jsx)(M.a,{path:"/modifyVehicule/:id",component:F})]})})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,189)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};a(146);s.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(_,{})}),document.getElementById("root")),A()}},[[147,1,2]]]);
//# sourceMappingURL=main.9ddac47a.chunk.js.map