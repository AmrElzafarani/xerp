"use strict";(self.webpackChunkXERP=self.webpackChunkXERP||[]).push([[385],{3385:(M,d,r)=>{r.r(d),r.d(d,{LayoutModule:()=>C});var s=r(6895),c=r(4463),a=r(6217),g=r(5013),n=r(4650),u=r(428);let p=(()=>{class e{constructor(o,i,l){this.translate=o,this.tokenStorage=i,this.router=l,this.toggleSidebarForMe=new n.vpe,this.currentLanguage="en",this.userDate=()=>{this.currentUser||(this.currentUser=this.tokenStorage.getUserDataFromToken())},this.logout=()=>{this.tokenStorage.removeToken(),this.router.navigate(["/"])},o.setDefaultLang("en")}ngOnInit(){this.isLoggedSub$=this.tokenStorage.isUserLogged.subscribe(o=>{this.isLogged=o,console.log(o)}),this.userDate(),this.currentUserName=this.currentUser.personnel_name_en.split(" ")[0],console.log(this.currentUserName)}toggleSidebar(){this.toggleSidebarForMe.emit()}toggleLanguage(){"en"===this.currentLanguage?(this.currentLanguage="ar",document.dir="rtl",this.translate.use(this.currentLanguage),console.log(this.currentLanguage)):(this.currentLanguage="en",document.dir="ltr",this.translate.use(this.currentLanguage),console.log(this.currentLanguage))}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(c.sK),n.Y36(u.i),n.Y36(a.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-header"]],outputs:{toggleSidebarForMe:"toggleSidebarForMe"},decls:37,vars:4,consts:[[1,"navbar"],[1,"right-side"],[1,"icons-group"],[1,"icon",3,"click"],[1,"fa","fa-language"],[1,"btn-group"],["id","navbarDropdown1","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"icon","dropdown","nav-link","dropdown-toggle"],[1,"fa-solid","fa-list-check"],["aria-labelledby","navbarDropdown1",1,"dropdown-menu"],[1,"dropdown-item"],["id","navbarDropdown2","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"icon","dropdown"],[1,"nav-link","dropdown-toggle"],[1,"fa","fa-bell"],["aria-labelledby","navbarDropdown2",1,"dropdown-menu"],["id","profileDropdown","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"profile","dropdown","nav-link","dropdown-toggle"],[1,"user-btn"],[1,"welcome-string"],[1,"username"],["src","../../../assets/images/profile.jpg","alt","profile-image",1,"user-image"],["aria-labelledby","profileDropdown",1,"dropdown-menu"],[1,"dropdown-item",3,"click"],[1,"left-side"],[1,"fa-solid","fa-bars","menubar",3,"click"]],template:function(o,i){1&o&&(n.TgZ(0,"nav",0)(1,"div",1)(2,"div",2)(3,"div",3),n.NdJ("click",function(){return i.toggleLanguage()}),n._UZ(4,"i",4),n.qZA(),n.TgZ(5,"div",5)(6,"div")(7,"div",6),n._UZ(8,"i",7),n.TgZ(9,"ul",8)(10,"li",9),n._uU(11,"Action"),n.qZA(),n.TgZ(12,"li",9),n._uU(13,"Another action"),n.qZA()()()(),n.TgZ(14,"div")(15,"div",10)(16,"a",11),n._UZ(17,"i",12),n.qZA(),n.TgZ(18,"ul",13)(19,"li",9),n._uU(20,"Action"),n.qZA()()()()(),n.TgZ(21,"div")(22,"div",14)(23,"button",15)(24,"span",16),n._uU(25),n.ALo(26,"translate"),n.TgZ(27,"span",17),n._uU(28),n.qZA()(),n._UZ(29,"img",18),n.qZA(),n.TgZ(30,"ul",19)(31,"li",9),n._uU(32,"Profile"),n.qZA(),n.TgZ(33,"li",20),n.NdJ("click",function(){return i.logout()}),n._uU(34,"Log out"),n.qZA()()()()()(),n.TgZ(35,"div",21)(36,"i",22),n.NdJ("click",function(){return i.toggleSidebar()}),n.qZA()()()),2&o&&(n.xp6(25),n.hij("",n.lcZ(26,2,"Hi"),","),n.xp6(3),n.Oqu(i.currentUserName))},dependencies:[c.X$],styles:[".navbar[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;background-color:var(--main-color);color:var(--contrast-color);margin:20px 20px 0;border-radius:20px;padding:0;height:7vh;-webkit-border-radius:20px;-moz-border-radius:20px;-ms-border-radius:20px;-o-border-radius:20px}.user-btn[_ngcontent-%COMP%]{border:0;height:100%;padding:0;margin:0;background-color:transparent}.profile[_ngcontent-%COMP%]{font-size:1rem;border-radius:0 20px 20px 0;margin-right:-.1rem;padding-right:1rem;padding-left:.5rem;height:100%;-webkit-border-radius:0 20px 20px 0;-moz-border-radius:0 20px 20px 0;-ms-border-radius:0 20px 20px 0;-o-border-radius:0 20px 20px 0}.profile[_ngcontent-%COMP%]:hover{color:var(--main-color);background-color:var(--contrast-color)}.profile[_ngcontent-%COMP%]:hover   .welcome-string[_ngcontent-%COMP%], .profile[_ngcontent-%COMP%]:hover   .welcome-string[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--main-color)}.welcome-string[_ngcontent-%COMP%], .username[_ngcontent-%COMP%]{color:var(--contrast-color)}.user-image[_ngcontent-%COMP%]{border-radius:50%;width:2rem;height:2rem;margin-inline-start:10px}.right-side[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row;justify-content:center;flex-wrap:nowrap;height:100%}.icons-group[_ngcontent-%COMP%]{display:inline;height:100%;display:flex;flex-direction:row;justify-content:space-between}.icon[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 1rem;cursor:pointer;height:100%}.icon[_ngcontent-%COMP%]:hover{background-color:var(--contrast-color);color:var(--main-color)}.left-side[_ngcontent-%COMP%]{cursor:pointer;margin:0 .5rem;padding:0 .5rem;height:100%;display:flex;align-items:center;justify-content:center}.left-side[_ngcontent-%COMP%]:hover{background-color:var(--contrast-color);color:var(--main-color)}.dropdown-toggle[_ngcontent-%COMP%]:after{display:none}@media only screen and (min-width: 769px){.left-side[_ngcontent-%COMP%]{display:none}}"]}),e})();function m(e,t){if(1&e&&(n.TgZ(0,"li",5),n._UZ(1,"i"),n.TgZ(2,"a",6),n._uU(3),n.qZA()()),2&e){const o=t.$implicit;n.xp6(1),n.Tol(o.icon),n.xp6(1),n.Q6J("routerLink",o.path),n.xp6(1),n.Oqu(o.name)}}let h=(()=>{class e{constructor(){this.items=[{name:"Dashboard",icon:"fa fa-house"},{name:"Recruitment",icon:"fa fa-magnet",path:"/HR/recruitment"},{name:"Personnel",icon:"fa fa-users",path:"/HR/personnel"},{name:"Payroll",icon:"fa fa-hand-holding-dollar"},{name:"Accounts",icon:"fa fa-user-lock",path:"/HR/accounts"}]}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-sidenav"]],decls:7,vars:1,consts:[[1,"sidenav"],[1,"client-logo"],["src","../../../assets/images/LOGO PNG-05.png","alt","logo"],[1,"navigation"],["routerLinkActive","active",4,"ngFor","ngForOf"],["routerLinkActive","active"],[3,"routerLink"]],template:function(o,i){1&o&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"img",2),n.qZA(),n._UZ(3,"hr"),n.TgZ(4,"div",3)(5,"ul"),n.YNc(6,m,4,5,"li",4),n.qZA()()()),2&o&&(n.xp6(6),n.Q6J("ngForOf",i.items))},dependencies:[s.sg,a.rH,a.Od],styles:[".sidenav[_ngcontent-%COMP%]{background-color:var(--contrast-color)}.client-logo[_ngcontent-%COMP%]{padding:1rem;text-align:center}hr[_ngcontent-%COMP%]{margin:0;width:90%;position:relative;left:50%;transform:translate(-50%);color:var(--main-color)}.client-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:6rem}.navigation[_ngcontent-%COMP%]{height:calc(100vh - 8rem);overflow-y:scroll;padding-top:1rem;padding-bottom:1rem}.navigation[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;cursor:pointer;color:#00447e;padding:.75rem 0 .75rem 1rem}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);font-size:1.5rem}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-inline-start:2.5rem;color:inherit;width:100%;text-decoration:none;text-transform:uppercase;font-size:18px;display:flex}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:#fff}.active[_ngcontent-%COMP%]{background-color:#00447e}"]}),e})();const f=[{path:"HR",canActivate:[g.a],component:(()=>{class e{constructor(){this.toggle=!0}toggleSidebar(){this.toggle=!this.toggle}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-main-layout"]],decls:8,vars:0,consts:[[1,"main-view"],[1,"sidenav"],[1,"content"],[1,"header"],[3,"toggleSidebarForMe"],[1,"body"]],template:function(o,i){1&o&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"app-sidenav"),n.qZA(),n.TgZ(3,"div",2)(4,"div",3)(5,"app-header",4),n.NdJ("toggleSidebarForMe",function(){return i.toggleSidebar()}),n.qZA()(),n.TgZ(6,"div",5),n._UZ(7,"router-outlet"),n.qZA()()())},dependencies:[a.lC,p,h],styles:[".main-view[_ngcontent-%COMP%]{display:flex;flex-direction:row}.sidenav[_ngcontent-%COMP%]{position:sticky;top:0;width:19rem;overflow:hidden;height:100vh;box-shadow:-1rem 0 1.5rem #888;z-index:2}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:calc(100% - 19rem);z-index:0;background-color:var(--background-color);overflow:hidden;height:100svh}.header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}.body[_ngcontent-%COMP%]{margin:20px;border-radius:20px;background-color:var(--contrast-color);padding:20px;height:100%;-webkit-border-radius:20px;-moz-border-radius:20px;-ms-border-radius:20px;-o-border-radius:20px;overflow-y:scroll}.show[_ngcontent-%COMP%]{display:flex}.hide[_ngcontent-%COMP%]{display:none}.body[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}.body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:transparent}.body[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}"]}),e})(),loadChildren:()=>Promise.all([r.e(459),r.e(135)]).then(r.bind(r,6135)).then(e=>e.HumanResourcesModule)}];let b=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[a.Bz.forChild(f),a.Bz]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[s.ez,b,c.aw]}),e})()}}]);