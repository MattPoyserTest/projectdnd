(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{160:function(e,t,a){"use strict";a.r(t);a(176);var n=a(180),i=a(0),r=a.n(i),o=a(175),s=a(7),l=a.n(s),c=a(148),p=a.n(c),m=a(179),A=a.n(m),d=a(34),h=a.n(d),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(h()(a)),a.state={dropdownOpen:!1},a.children=t.children,a.header=t.header,a.arrow=t.arrow,a.className=t.classname,a.dropdownContent=t.childrenStyle,a}l()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({dropdownOpen:!this.state.dropdownOpen})},a.render=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:this.className},this.header,r.a.createElement("div",{onClick:this.toggle},this.arrow)),this.state.dropdownOpen?r.a.createElement("div",{style:this.dropdownContent},this.children):null)},t}(r.a.Component),g=function(e){return r.a.createElement(u,{header:r.a.createElement(b,{iconpath:e.iconpath,name:e.name}),arrow:r.a.createElement(f,null),classname:p.a.dropdown,childrenStyle:w},e.children)},b=function(e){return r.a.createElement("div",{className:p.a.dropdownDiv},r.a.createElement("img",{className:p.a.dropdownIcon,src:e.iconpath,alt:""}),r.a.createElement("p",{className:p.a.dropdownText},e.name))},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=function(){a.setState({rotation:(a.state.rotation+180)%180})},a.state={rotation:0},a}return l()(t,e),t.prototype.render=function(){return r.a.createElement("img",{src:A.a,alt:"",className:p.a.dropdownArrow,onClick:this.onClick})},t}(r.a.Component),w={position:"relative",width:"328px",left:"24px",background:"#4C5057",borderRadius:"10px"},E=a(149),y=a.n(E),B=(a(181),a(36),a(150)),C=a.n(B),v=a(178),k=a.n(v),U=function(e){return r.a.createElement("div",null,r.a.createElement(R,null,"Hit Points"),r.a.createElement(x,{name:"Hit Dice:"},e.hd," "),r.a.createElement(x,{name:"Hit Points at 1st Level:"},e.hd," "),r.a.createElement(x,{name:"Hit Points at Higher Levels:"},e.hd," "),r.a.createElement(R,null," Proficiencies "),r.a.createElement(x,{name:"Armour:"},e.armour," "),r.a.createElement(x,{name:"Weapons:"},e.weapons," "),r.a.createElement(x,{name:"Tools:"},e.tools," "),r.a.createElement(x,{name:"Saving Throws:"},e.savingThrows," "),r.a.createElement(x,{name:"Skills:"},e.skills," "),r.a.createElement(R,null," Equipment "),r.a.createElement(x,null," ",e.equipment," "),r.a.createElement(x,null," ",e.alternative," "))},R=function(e){return r.a.createElement("div",{className:C.a.headerText,key:k.a.generate()},e.children.toString())},x=function(e){return r.a.createElement("div",{className:C.a.text,key:k.a.generate()},r.a.createElement("b",null," ",e.name," "),r.a.createElement("span",null," ",e.children.toString()," "))},S=function(e){return r.a.createElement(q,{name:"Class Features",key:k.a.generate()},r.a.createElement(U,{hd:[e.data.hd.number,e.data.hd.faces],armour:e.data.startingProficiencies.armor,weapons:e.data.startingProficiencies.weapons,tools:e.data.startingProficiencies.tools,skills:e.data.startingProficiencies.skills.choose,savingThrows:e.data.proficiency,alternative:e.data.startingEquipment.goldAlternative,equipment:e.data.startingEquipment.default}))},q=function(e){return r.a.createElement(u,{header:r.a.createElement(I,{name:e.name}),arrow:r.a.createElement(M,null),classname:y.a.dropdown,childrenStyle:K},e.children)},I=function(e){return r.a.createElement("p",{className:y.a.dropdownText},e.name)},M=function(){return r.a.createElement("img",{src:A.a,alt:"",className:y.a.dropdownArrow})},K={position:"relative",width:"296px",left:"8px",background:"#4C5057",borderRadius:"10px"},Q=a(162);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{style:{top:"80px",position:"relative",height:"72px"}}),r.a.createElement("div",{style:{overflow:"scroll",height:"520px"}},r.a.createElement(Q.b,{query:"649626942",render:function(e){return r.a.createElement("div",null,function(e){var t=[];return e.allDataJson.edges.forEach(function(e){var a=e.node.class[0];t.push(r.a.createElement(g,{name:a.name,key:k.a.generate()},r.a.createElement(S,{data:a})))}),t}(e))},data:n})))}},162:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(163);var c=i.a.createContext({}),p=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},163:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},164:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(34),o=a.n(r),s=a(7),l=a.n(s),c=a(162),p=a(74),m=a.n(p),A=function(e){return i.a.createElement(c.a,{to:e.to,className:m.a.icon,style:{left:e.left}},i.a.createElement("img",{src:e.iconpath,alt:""}))},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(o()(a)),a.state={dropdownOpen:!0},a.to=t.to,a.iconpath=t.iconpath,a.children=t.children,a.left=t.left,a}l()(t,e);var a=t.prototype;return a.toggle=function(){this.setState(function(e){return{}})},a.render=function(){return console.log(this.state.dropdownOpen),i.a.createElement("div",{className:m.a.icon,onClick:this.toggle,style:{left:this.left},onMouseEnter:this.toggle,onMouseLeave:this.toggle},i.a.createElement(A,{to:this.to,iconpath:this.iconpath,left:"0px"}),this.state.dropdownOpen&&i.a.createElement("div",null,this.children))},t}(i.a.Component),h=a(166),u=a.n(h),g=a(167),b=a.n(g),f=a(168),w=a.n(f),E=a(169),y=a.n(E),B=a(170),C=a.n(B),v=function(){return i.a.createElement("div",{className:m.a.subheader},i.a.createElement(k,{to:"/character",iconpath:u.a,left:"16px",style:{backgroundColor:"blueviolet"}}),i.a.createElement(k,{to:"/classes",iconpath:b.a,left:"85px"}),i.a.createElement(k,{to:"/spells",iconpath:w.a,left:"154px"}),i.a.createElement(k,{to:"/rules",iconpath:y.a,left:"223px"}),i.a.createElement(k,{to:"/monster",iconpath:C.a,left:"291px"}))},k=function(e){return i.a.createElement(c.a,{to:e.to,className:m.a.subicon,style:{left:e.left}},i.a.createElement("img",{src:e.iconpath,alt:"",style:{backgroundColor:"transparent"}}))},U=a(171),R=a.n(U),x=a(172),S=a.n(x),q=a(173),I=a.n(q),M=a(174),K=a.n(M);t.a=function(e){var t=e.children;return i.a.createElement("div",{className:m.a.bar},i.a.createElement(d,{to:"/",iconpath:R.a,left:"16px"},i.a.createElement(v,null)),i.a.createElement(A,{to:"/homebrew/",iconpath:S.a,left:"102px"}),i.a.createElement(A,{to:"/newsletter/",iconpath:I.a,left:"188px"}),i.a.createElement(A,{to:"/menu/",iconpath:K.a,left:"274px"}),t)}},165:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),s=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},166:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABACAYAAAC6CT8CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOCSURBVHgB7ZnxVdswEMYvff2/2QB3AtIJMBMUJihMAExAmAA6AWEC2glsJiBMEDNB0wnc+9Dn9xRXdhznQtw+/d67Z1s+KZJPdzopIpFIJBKJRCKRiDFlWV6qTOV/QQczVllQxrJjPsiO0UGkesm8omeW7YyR7Ajt+IVepipzle8qE74qVL6pJCo3o9FoJkOHUy2jpF751PcpvU9UZtRLxBDT6Ud/eVZ5Ugscq+RNuvquUDmDrsqjpa9Z+9S1yoN2dtq1AnWfWHdYcDotWt5Pm0K6Fx1TMcDSUvjSN9IDtdZSXDA5EQMsB5Wq5NKfmbioOAw4fZ7X6CTrohyn4IFsyUexAZFrWT3QN9KQor6rF811+v3gfSEGWE6/t5Csnb6VzSLZtda599sYBJx+v0IRUJ/P/DWIuic1HaROB2hDDDCxFKMXWJmGBM7/yXuGzkVNB3U+ixFWPgXQMTgMLHGp18pPEKp/1/QevKDxVVweWMjfH6QXlj5ViOvUsbjkFZk5IuLYs2Rl1SXfQSdlnaqNrbG01BvI6fRyhntabBJQQxky9LuqwDKpNR9UDWw7Uob4yt9wPZKe2UcX3mNQh+IGU4X5K3E+NA/om4R0y0El9QL4DxdbbDPe/IbhfcXPPEwGZbr4akdfA+WwiO9XEwlYib44nEHx6zeFYwz0yHvG/UuD7tJis2g1/RJx69OjuA7DEphyc97fci9VBYpTVGLEm7D+Ia+JhP2tM2YHL9rBqnO4ooOpuAEUsupTGXUqi8zEWRN6Oafh8KhyQMo9B1y9S1m2YM6XijFm0Y+dS1SwH8Kii9Cdizsmy/Q9ptSY8lPlC/Vx6AI9nFMUbYc17wa//IJHXehgGfr6WnZHGQfql7RexrZOZF/gx+sHJjwzzwK6wYMXfohL7zkpDQ9hNoY/ngTKs3qnQoOqrByoPylbTqbW0XudYqeLhmgFn5l0aCZVeagXciko+lprm8U3kZZFVFxY79JG0fDuRQKpVxe2zSiasggEg1dZTyHNqVHvDeOu/srBbjbvoJdT1xTzQVXrVZf1hjqJdaSz/tcDwQHHXacbVIPubTmgne+Bl5RiGqUq54xenYCutnEuLuvIxUXDQlZPoDZi20Gl4iIUnBppzlXD5q8VDuyY7eH4bCzt0bWVbQe10X9RbXC9m1Gk3Mc/+UyRds3+csBIJBKJRCKRyD/BHz6ZiUAsYuhaAAAAAElFTkSuQmCC"},167:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABACAYAAAC6CT8CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL/SURBVHgB7ZnhcdpAEIUfmfwPqcBKBcEVcKnA7iC4gtgVmFSAXUHiCgwVoFQQUgFKBSEVkH3cKsIasJF0e2bs+2Z27jhJzD12b29PAIlEIpFIJBKJ10IPhqzX60yae7H+jsunvV5vBQPewpZM26+18S9iTmwKA0w9RcRbN9IMxWY6dCaWi5euYMQb2LOAD78TNfZ/wRDr8Cv5LfZD+xmMieEpQg99VhvAmFieYrhdan8CY2KJYqKYa59ragZDYoXfVLLdBxqMBZFYnjqX1O60T0/lMMRMlFYTtI/wIm710jXHVWQh3isQGJPNVyY8gp988cStmditCLtBQKw85eBLo/yA+4Y4FjS89l4Tm4v9UVvu6c8f+57obE3uXmzMNSLWr93zXUMRes9Y+yOxbzCiS/hdwG+kTACsElh5D2SyPE6w3uOGe4JnoLUoWdy5CCikO9CFvlnsGk4U6fTWiYyxPKIXF0cVbnV03TAEzw+4d6Ahx3D8ufbw2ctdYduV1imdk5OGoXYlnlo0fJYiBmpDbVfyPacIQBdR9JCD31wz+D2J4njEWDTdVOk6eSbIvhls82WIoVpLFLpZQ1CR8EJXjzwfTFSwzZchKPNiKJWn2wLV2YnjThPLtjcbhe2hhK4omAHv4EVl2q50rBB7D1+lMxsyK/KZhVowgtZ+2yG0lQwcfDiypcAclWiKGcEL5suYCwTATNSe6xSZ4aFQCptpm4d4FxhV1J5nHKrUnqGWYLjJoyGhRS1RhRgnVXTYw1iC9fW03IigiYITqIXYmU6y/OVzPJHaeU3rRz73CW3mAUNYFsELKaAFL7wnoWM7Q0yr+Xdt3+JGefGik2bVfqelECt7pnd643rrbDXRSmUKv685tCDWi5ddLEXguPywIzPyM89cz7umuqAJhfb/nxAV2phY7/1a0baMOmpRbXmRokzRUy1PuP3ai5el5bE+1j+JLMf/lkPYLJcq84UmhijuRTz6F2oOhn9iR0PDsMThpcAw1FBMJBKJRCKRSCSC8Q8tD7IzrNIqUwAAAABJRU5ErkJggg=="},168:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABACAYAAAC6CT8CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQVSURBVHgB7Vntkds4DMXe3P9zB8frQKkgSge+CuJUsE4FUiqwO5BTgZMKtKnASQVKB04HCDF6DGGYsuW1drPO8M1gZIEkCBIfJGSijIyMjIyMjIyMjAnAzM5TyxHy29ET446eCFC+9TTz9BHP12h+c3d3951uDX5Ra1jHKV4B3ppuCXC5padOKNEu/D36OHrJ8AqWJn72oJnq48BjE2cLekkwyUAUrsErwdvC7eR9B16JPjUsx3g6+t3wStwri9TaKmhv+RifEnKWyoJLei6IwtjxAu8VlNildhiWCJaai4thkfsT/YMlK8Ur7WZNtaB7PoyF8HtzYkyDPs4oLmPbE+M2arM0KppwQQsIbfFbu8psYMwc7XWirUZbeWJO7dLBwqNd8+zhKzvmHzN/WP6neCX1B+sHTw+JYQ31h+17T99Nm/C3nr6i3UIO6NrTOz/nxuhBnveKrgV2qDG8GT8xEnpsUvwU/h7RR3a0MLwST2sp52nl6Yend3QaFeT8j/5adiXe4K3yoPivocv14D6GBCGLVfD31G2hQd9ihNxwjq0MX7yg43jr0DG1oKnAMbg1atMnpPDmArlbjHGGvzw339VQuyqLKzieN/oK1KQUPCP3KMWD14EKHpEtHwUl2OG91LvHMe3XdCGs0uKO5j14wLQ3DbjJ3vDasFAeuJGPlD1Tlkm6MKw52q3HTiwL2BlecJ1wEC/okVCW3qdcmPvbRUtTAotqE/zgOju6Esry9dj5h/AXXYd/8Zziwunw/IeeA4ipzvCC/3dDO3yB/HsjqzTt3VO4X/jeoFP4TgV3yybFXyBbp/AZJ27xmHva7xoqkEvzXuM9pPjVI2Q3OjmoOJ0b2QuaEhwvsKLAnBMpnGMdVF4g9yiF82GKX/DAreNqcDwQNZamT9J1zshtOVEJK0/QuNgLTk1cQeiaY3ndcSKG+IIrDQ/cQvgwxmSuQnlBTSMwtkj84cuAN4pXUl8kykeUb6q7LPKe+sJQvspu5Ess97d2KTQf8Fvi5S31afyDmVKOiYWnV77/VzWnzOd0sfpoWJ8Hb2yRuEb/LZTSsXcO1gtGF4ljFtXy8Y08nCsLuIul1JgZniE5tANjg1su1djgktOcVRxTqgiVmGnUbhZnxjSJtjDeDYwtlPyGDz94zmkqcEzjDAts1ftyYEw4sEvFc0OLRftbyO/40E13ky7ITGq/i3dqR53tCwVFoRWo48TnZfRdqQW41JzPAigTLCLKVkahLR9ja8ZXHEuO9bMvYggcS/xfinOMnTWUd2oDGo7JhPG7pJcI7hPERrnlPtEnLGSPRZZ0K8DuD/3pNm0ZYXBtkXgKXzw5Psx+cttwnj7TLYLjbTvEWKsSiqNbBZLDhmNB+XKyW0ZGRkZGRkZGxh+Bn9qYZqtrw1J/AAAAAElFTkSuQmCC"},169:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABACAYAAAC6CT8CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG6SURBVHgB7ZmBTcMwEEWviAHCBHSEMgFhgzJBYYNuAJ2g6gTNBsAE7QaM0GwAG5h/ykWKUNzWUexi9J/05SYXp/r1pbqLRQghhBBCCPHgnCuhnUvHQQK5DrkYXzDH8AZV0LPEp4TuJSYw9QltJRL6oyVfKTCDNr7gmYY/JpPJuye2hx6hwo5LGbBSoaaUad9JGHrCoKo882amlScuMPuN+yzwcd45XUtMLB2+zMDv2OHYSp2Kd66b6v1N1ZD0C8KdZuqZN3fDif5MKfqvV0Mv0ESadCuhBdKn9swpOnNDKCXRM6W5v7cUdPisKaKnF2fMqyQAu2+wqSv5h9BULtBULtBULtBUCK7pvS5CFFNWbWwxFnIBRjdlRa3WhYWNyYmxUq0RbSaXMDmTxIxqylbpCVqheF1K08muJTGDqvQj6EuZulONa5e7k8SMnX6aag/tgbYo0qRhKQkZy1Rt46anUXy1eC2JGCX9rGm80RcnPTF9mXInCRntmeozdE4sBiyTcoGmcoGmcoGmcoGmciHUVC2eTbe/RGjtp23EGgXqLUZV+z4iFnE3sVtsh+/g0hF3J5EQQgghhGTND2H98bst5TpKAAAAAElFTkSuQmCC"},170:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABACAYAAAC6CT8CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQwSURBVHgB7ViLbdswEGW6QJ0JwkxQd4IqG2gEdYKoE9idwN5AyQRJJlA2UDqB3AmcDa686hF6oWnZhiUkAfiAg8Tj8XNfUjImISEhISEhISEhISFhclyYDwgRmblH7ujV0cvFxcXGfHY4pWpHW5CicmSPHf/FfFyol76DrKP6FMU+HDT8HDVKxLtz1CI0PyegmIZfFrSX5jMDubWm9lIVOzRukuqH2J874lDZKJ1SyeCVH27MDdo6nyp143jPZkogNEqqWoJnS+TRoprNj5i3UPmAp7lWDo07qvqp5R2tfHwTf+5o4V51YX3+cfTT0bWz5KWjayKNCq1kv01XzRoYwQ4sPfPrE0/X+GbOBWJZyAMNeaSGRU+qSjDUHeZY7elvvXeJv3b0aM4FLaAK5Ai1QkY4N+DtFoayxK/At1BsDr4auDZjYN/iR4yryaOW+Ba8jIzWeI/73IkoddBTR98oXEq8uIdWIT3pW1gyM8MKWfdQmV+my4+KunWev47U6jnmVvkFyVw50tDcYH3P25ixgdCr+zQTn/SeHhAm3hsteNvIXD5fLUJb8GzxvhWqlHJE9TvrnEKozM3umaTvWqEyR3p4Xjr66ujJWfwuMo9661778K7jNqarlholr5Czpqu005xTas0IT/NjAa+05MnyiPksqPSei8jsnFujgcJkSbyF9AVhjQ3kCK8tFYBbyBTBnCUMMePCEMjouMpMAdroFpsosJEM/TOS9RfRnOQewo1LV10F8qpcJbvVMqrsGAplQomPtubCIxb2h7LfmE96VUiTfIV5WvYWbfoKcsIymOuo8+mkj0TprkQ68cZ01yGFNV151kLg88xfh9RjD5DRMWrlJ8gM3UBeMf+9I69MQWuOA+QMf994y2YgQcyHF9CSwkrgOR9qluT+z4H3ltaZY91xbhG0oFegIF4lb79MfZ4tg3G6wTXaNdpboe8kUr6RSKEgox2soqcotQ4UsKGlI2NiV58ZlC8j8rVQDkb6S6Eqejaw4JLahQycFxSqNZTLDhhgRqGsilV75BoZq6Rjgzm1M/BsIGel/yxRy95KXw0Hw0f6i63Inv8QFIbne8tbMeA1CK8clvbhVqO9gEKF9F/G2wPrVGSEbI9MI2P8fAk9BZ4qcUdeUJkH6lMUJD9oZR4jA5dWGGdtRlBqZxGhD0Xp73qW+ppAvgp5kf6alMvMlJCu+tXUXkn/Y6WJeOWNUtLfC/M989uYxycFhU6Gdg3L+jtceOD6+1sr/R0x9LQahr9mG+kPcqWFmQqwsv/9VYNXyluEG/ZFQ/EsQR6R51oyQBkZGzvPbuXcQ5gUqPBcwMoi/edCK31JzohX0pi59L/aFEt5+08wD8YuwV9h7JzGFuZcCA5b6aGhkqMvVgUr6W8Rk4wdDdKFymyg377H2ISEhISEhISEhISEhHfAP6RL0KqgrQkqAAAAAElFTkSuQmCC"},171:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABACAYAAACndwGZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALLSURBVHgB7ZrdUeMwEMfXmbv3lGA64CpI6CBUEFPBlYCpgLkKYiq4dHBOBVwH8VVwPPICYjeRQRaW5EQfiZn9zezI0cpC/ltar4UBGIZhGIZhGIZhmGQIIe6Fm3s4UzKIAF7wHIs/aDeWZjnaLdpVlmW1oR9q8xNtqrme0H7heQ1EIpYwBRYrHHjmaCewqNA2mqumi0b3I+xFqTX/HK3BNlcwJkgYedGudiZKxV8c278PE/AAx7ZE+69d1KXiN7FSurnJPlPCifkGfpRoa+guhQatFccUY2oYDok/U37fqU45o2baOd4xyFeYHG2DA6jUynaW6/UJWcD+5hwdg3yFScGDSXhC+nR/gcUKPAgiDA6E7tBv+EKEmjE12jV85BtztCVERgvixCbU8g0iDA6Ggt26/S2n+lIe57AXSqVWAyO2IUEXA/z0d2pIQIoYU8Ln2VNB94k1h25M0P254r9uK1E8W2bthVcecwBVm6Dg8UOPf7cETX6s/qvkOGtIwBieSrB9FPnkO9ySbC+T5ztIQKoZ488rxRpIxihmzMWPXSB+jycigUJBZgzlMX3vSqGw9U8vnO1jG8ut3PLwJkYe08DHu1Ioakv/OZpQjnMIQMilRIN+gggY8qSohBImh548Y8wEiTED8oyiDRBgeVVw+VOSKvOttTr9N4lJy2Vq8CcnujDynadytOnEkHNgPAmenX+ybCDQA2AUCZ4NnG2FcnxBZd8G+qF8lRkTHBbGAAtjgIUxwMIYYGEMsDAGou/HyP0S2/+u9fNdflf/QbY8UuzHVLJOb2863+VvHP3r/qMIuZR892OmA/yu/qPsBx2MnLq0pXCpTOWFUL5fwaLqWUql5XyX39V/x38S2oH31B/y4VARuv8QwvBTyYBv8KU1Peu5ObsPecSwt9yZ4+Ye0z/5GzgVcspuxflBn78VwDAMwzAMwzAMwwTlDZ5EGbIkTin7AAAAAElFTkSuQmCC"},172:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABACAYAAACndwGZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM1SURBVHgB7ZqBddowEECPvg5AJ4g6QekEmA3IBKUT0ExgmCDJBDQTJJ3AzgSwAe4EJBMod/EJC8Ui8YtkbN799+7JkWS/6Lg7nU8GEARBEARBEARBEE6K1nqIkqKsdQVdr1AUdIgBtAQuPMHmHmWIsmEhFErC1wuUR+7bDAaDDZwzqJQpW8eWFeSOK8eKDPdkZXAColgML2aGMkYZQWklTygTtILiyH0LnkeWkqCkKAX/bSzt9tgzOgsubo6ysywkY1HQEFKU9Zy1da2gT3BgNQE1gQDgc0bWtXHJG+gLHCeMUqLFBY47O4jMFwhHyu0lxoAnEPb5CbGCiLBVUox5gMh8hTAobh/rBjlYzlAKtKa/zpjZwagtUHKz63B8IWWbfGbK7R/oAxRo2WJmnvGtlZusaMFsZYkzZnadEd83s/rNTteKUkLGmDfw4ukXVyi/UZZQWscahQJoBqWlXKJ8Q5nwrdfOo6j/J1+3Er9CudIBbDk/oHKRpXEhHKN2CpXrPFjBOsfxf9jOj+xsYxxz+8hFc+garitZ5p81zWd0ldRdWK6UWOmAj0wHTBNiuhJZySTCL3mF8t0ScjFy0QTKl9QgRI0xBo41U89Y0vCXprnKkiEqf4HtLUoSympaUQyUMYUy1gu7U5fbeAbVNuxSt8iU79kLP9ds6SMIQFuKaUJuta9v1447kmVMWO4gEp1TDCuBtu99qcKZQgWsnOcVEIkuWgwph1J+Ukp+qtpLKMWQf9NCUto24QwIohhO0MjkqVVwBgTLfLlw/Zq265rUtG90MsZ0AVGMB1GMB1GMB1GMB1GMhyiFqsisdOSiO9FHxeRw+I70jDnUf6vcEKT02ZZizD/7/M6421c3/67mpEFhM4fyTby7X0hwqXHh9CnP3KGv3x6zSps7PkmwxfQHqcUQrbmS7y3Zd2p55DST+gunjwroNyHfxPsYY5auK8UgpmJ+oWmPG8ynAtQVuxztOqZYdc1tsBOAjxBTMaZo3RQFh8FYwQkUEwU+49npgB/46PJoV+uWPhqK9akZ7Q5UyTOfjX02t1BQnhst+aikv/D2mukwbHVLh/mCIAiCIAiCIAiCnxfe1c7Ywb3KEwAAAABJRU5ErkJggg=="},173:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABACAYAAACndwGZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANCSURBVHgB7ZrhddowEMf/9PV7vUHdCeoRyAbJBGGDkAlCJiCZIO0E0AlgA5IJcCfAnUC9w6eiuIZQS7KVvvu9dw/JBkmcT6fzSYCiKIqiKIqiKIoSBWPMDcnW9M+GZIIIjOAJDeyOPmYka5KSJCO5lNtLkhfE4TPJmCTn/kej0T1SgZQylif30Liek+zYihAZ6uObjGGMVKDBLEQBecu9aR8DpvYzGcMTUkEGtJQy+5mVnfMy4L+sKdI42NesEJCP8IP9yU7KX1DP9ycaZElzfk2fFdU/IRL8MOijkHFUSIWmCTtmba1oa8uN3/ETnkp5Kt87V/i3mdO+iWGZvhazJrmkQd2ThbCVVFR+xmsrabOYHyTPUi6lnbPhfpxqSXLB/SMVSAmFPK2trFBzqS+kvgs99xv9z5z+c6QEO1tzOriLqZgbUb4Jvfp5B3iMzPmi5Rb7H55iF43vT1A76k5Qe2wpMypycFkitan0FmJJqyPXu8IWwk4+d9q5w3vimGICts/KsZHvEgHxXZUGRaYP+7ivCBwvDaIY8UkZulE1luv9NQRmKIvZwMP58hQi5fxERIZSzC26WwxiK4UZRDH0x4I6yhh8gNLKUM53AY+pRFy1OOCgDGUxv9CdXtILQ/mYCRKnD4spknvzPYPYFsPL8pyEXw3+ZPKpzLsIPgFe8qvam7AS3Jc/ubYzfmSNPlYmsZzvSWiw1/TBKccSdWrAOk7OD/sEeOnkd7tg6vzsNraPiWExsZ0vW0X5rpJIgka+R+g9jiGT5xRogbBYp56F8j+9KUb8DPuBHPHg1e6BlHMLT/q0GM7L5qhjm8qpXyFMmG9PWfAGXtFMwCeFm/M1zg6l1O1JiRkCYg57TVN4EGT75BimPgay3z5xy437Xfadv8sWCkfVaE4d+zB8rCb2VOI/bAO5R5K5KOORBm0Dvxz/uEWLgyJf0B4ocobvGqkiWxs7pz4xr4+KBD++Ie0u3H6Tw3lPumy5l8u9oKcUzGEjLtp+ljem3jHcNl8L5PpGFJMjENLuQtr1ipWiOl9GBsipzBz1YUX2D2OpV3ItFDadwcdSZkgdc9hK9U03nGJ/5MSkdEhRURRFURRFURTlP+M3pZMvXe7r+IIAAAAASUVORK5CYII="},174:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABACAYAAACndwGZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIXSURBVHgB7ZrhbcIwEIUPqQMwgrtBN2g2aDdoO0HbCZpOAJ2gbAAbwAawQdIJoBNc7/BZWFHgB04Iad4nnYwcWSHPPufuHCIAAAAAAAAAAACkMaIGYOZHaR7EnNhG7Gs0GpU0ZESUb67niYaKPPybibC135nYLOobU0+5oTTCqngR11nY75UIEq49i03jAXLNSaOu17ZoK/lPK+qC4DM1/c926bvm2owvw5YSSF0xpZhTF6rMzr21PzVjchvXNiV1hQiS2+wUYo/qJmKTaNYcDRF58LHY+shSzmnosN9TlrZy5upaBAAA4ChNJZEaxYZodtNZxHlNiCiv7POimGKwMYzCh9Cf7XU9NVGCOL1NIpNcScWQJhP7FPfJrU/F0P47sXfpn9aMc9Q+O7n3jrogWi3jSn8oR9QlkTlfhoISSE0idUZOucvvkTEltU9JXcF+X9mvjLBq2BerCuvPaIiwz6bDG2kbCbIXi4aMibOMBFGBcuo5jQR4irmSWndvAwDAv4V9mdMR8Bx5K33QkDFRCsQxFfhwbj2PIt846Muop6Rm13rap4Lcxl83WICn7qRfPbxVxmhBa0Lts5B7v9OZpCaRIYGsBnSnAjwtRzhqH52As4Vpqh4zDbNjLrUm//B62D+rGeeofTqtx2TRZqv7zCTagJPqIb2H6wtPBfc8pmnqlMCRdyltu/suBQAAAAAAAAAAAFfEH8yfBYxeKCYmAAAAAElFTkSuQmCC"},175:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(144),o=a.n(r),s=a(164);t.a=function(e){var t=e.children;return i.a.createElement("div",{className:o.a.baseBackground},i.a.createElement(s.a,null),t)}},176:function(e,t,a){var n=a(25).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||a(18)&&n(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},177:function(e,t,a){"use strict";var n,i,r,o=a(184),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function l(){r=!1}function c(e){if(e){if(e!==n){if(e.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(e,t,a){return t!==a.lastIndexOf(e)});if(t.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+t.join(", "));n=e,l()}}else n!==s&&(n=s,l())}function p(){return r||(r=function(){n||c(s);for(var e,t=n.split(""),a=[],i=o.nextValue();t.length>0;)i=o.nextValue(),e=Math.floor(i*t.length),a.push(t.splice(e,1)[0]);return a.join("")}())}e.exports={get:function(){return n||s},characters:function(e){return c(e),n},seed:function(e){o.seed(e),i!==e&&(l(),i=e)},lookup:function(e){return p()[e]},shuffled:p}},178:function(e,t,a){"use strict";e.exports=a(183)},179:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACRSURBVHgB7ZPLDYAgDEA7CiM4ChvoCI7gCI7gBo7mCLUGEgmRyKftqS/pBRreuwBgGIZBIKKjOWkmEIYcPrpcerhg4JKMoLdnfPH55SEZkcm30pJIRJVcKqJJzh3RJeeKGJKPRrDIeyMw/HMeeWvEcxd3+OS1EaLyvwgVeSlCVV6I0JV/ROjLk4idZgXDMIwBboG5obv12wy7AAAAAElFTkSuQmCC"},180:function(e){e.exports={data:{allDataJson:{edges:[{node:{class:[{name:"Barbarian",proficiency:["str","con"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 2d4×10|2d4 × 10|Starting Gold}",default:["(a) a {@item greataxe|phb} or (b) any {@filter martial melee weapon|items|source=phb|category=basic|type=martial weapon;melee weapon=&}","(a) two {@item handaxe|phb|handaxes} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}","An {@item explorer's pack|phb}, and four {@item javelin|phb|javelins}"]},startingProficiencies:{armor:["light","medium","shields"],weapons:["simple","martial"],tools:null,skills:{choose:2}},hd:{number:1,faces:12}}]}},{node:{class:[{name:"Bard",proficiency:["dex","cha"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 5d4×10|5d4 × 10|Starting Gold}",default:["(a) a {@item rapier|phb}, (b) a {@item longsword|phb}, or (c) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}","(a) a {@item diplomat's pack|phb} or (b) an {@item entertainer's pack|phb}","(a) a {@item lute|phb} or (b) any other {@filter musical instrument|items|miscellaneous=mundane|type=instrument}","{@item Leather armor|phb}, and a {@item dagger|phb}"]},startingProficiencies:{armor:["light"],weapons:["simple","hand crossbows","longswords","rapiers","shortswords"],tools:["three musical instruments of your choice"],skills:{choose:3}},hd:{number:1,faces:8}}]}},{node:{class:[{name:"Artificer",proficiency:["con","int"],startingEquipment:{additionalFromBackground:!0,goldAlternative:null,default:["(a) a {@item handaxe|phb} and a {@item light hammer|phb} or (b) any two {@filter simple weapons|items|source=phb|category=basic|type=simple weapon}","a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts}","(a) {@item scale mail|phb} or (b) {@item studded leather armor|phb}","{@item thieves' tools|phb} and a {@item dungeoneer's pack|phb}"]},startingProficiencies:{armor:["light","medium"],weapons:["simple"],tools:["Thieves' tools","two other tools of your choice"],skills:{choose:3}},hd:{number:1,faces:8}},{name:"Artificer (Revisited)",proficiency:["con","int"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 5d4×10|5d4 × 10|Starting Gold}",default:["any two {@filter simple weapons|items|source=phb|category=basic|type=simple weapon}","a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts}","(a) {@item studded leather armor|phb} or (b) {@item scale mail|phb}","{@item thieves' tools|phb} and a {@item dungeoneer's pack|phb}"]},startingProficiencies:{armor:["light","medium","shields"],weapons:["simple","hand crossbows","heavy crossbows"],tools:["thieves' tools","tinker's tools","one type of artisan's tools of your choice"],skills:{choose:2}},hd:{number:1,faces:8}}]}},{node:{class:[{name:"Wizard",proficiency:["int","wis"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 4d4×10|4d4 × 10|Starting Gold}",default:["(a) a {@item quarterstaff|phb} or (b) a {@item dagger|phb}","(a) a {@item component pouch|phb} or (b) an {@item arcane focus|phb}","(a) a {@item scholar's pack|phb} or (b) an {@item explorer's pack|phb}","A {@item spellbook|phb}"]},startingProficiencies:{armor:null,weapons:["daggers","darts","slings","quarterstaffs","light crossbows"],tools:null,skills:{choose:2}},hd:{number:1,faces:6}}]}},{node:{class:[{name:"Cleric",proficiency:["wis","cha"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 5d4×10|5d4 × 10|Starting Gold}",default:["(a) a {@item mace|phb} or (b) a {@item warhammer|phb} (if proficient)","(a) {@item scale mail|phb}, (b) {@item leather armor|phb}, or (c) {@item chain mail|phb} (if proficient)","(a) a {@item light crossbow|phb} and {@item Crossbow Bolts (20)|phb|20 bolts} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}","(a) a {@item priest's pack|phb} or (b) an {@item explorer's pack|phb}","A {@item shield|phb} and a {@item holy symbol|phb}"]},startingProficiencies:{armor:["light","medium","shields"],weapons:["simple"],tools:null,skills:{choose:2}},hd:{number:1,faces:8}}]}},{node:{class:[{name:"Monk",proficiency:["str","dex"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 5d4|5d4|Starting Gold}",default:["(a) a {@item shortsword|phb} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}","(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}","10 {@item dart|phb|darts}"]},startingProficiencies:{armor:null,weapons:["simple","shortswords"],tools:["any one type of artisan's tools or any one musical instrument of your choice"],skills:{choose:2}},hd:{number:1,faces:8}}]}},{node:{class:[{name:"Druid",proficiency:["int","wis"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 2d4×10|2d4 × 10|Starting Gold}",default:["(a) a wooden {@item shield|phb} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}","(a) a {@item scimitar|phb} or (b) any {@filter simple melee weapon|items|source=phb|category=basic|type=simple weapon;melee weapon=&}","{@item Leather armor|phb}, an {@item explorer's pack|phb}, and a {@item druidic focus|phb}"]},startingProficiencies:{armor:["light","medium","shields (druids will not wear armor or use shields made of metal)"],weapons:["clubs","daggers","darts","javelins","maces","quarterstaffs","scimitars","sickles","slings","spears"],tools:["Herbalism kit"],skills:{choose:2}},hd:{number:1,faces:8}}]}},{node:{class:[{name:"Fighter",proficiency:["str","con"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 5d4×10|5d4 × 10|Starting Gold}",default:["(a) {@item chain mail|phb} or (b) {@item leather armor|phb|leather}, {@item longbow|phb}, and {@item arrows (20)|phb|20 arrows}","(a) a {@filter martial weapon|items|source=phb|category=basic|type=martial weapon} and a {@item shield|phb} or (b) two {@filter martial weapons|items|source=phb|category=basic|type=martial weapon}","(a) a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts} or (b) two {@item handaxe|phb|handaxes}","(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}"]},startingProficiencies:{armor:["light","medium","heavy","shields"],weapons:["simple","martial"],tools:null,skills:{choose:2}},hd:{number:1,faces:10}}]}},{node:{class:[{name:"Mystic",proficiency:["int","wis"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 5d4×10|5d4 × 10|Starting Gold}",default:["(a) a {@item spear|phb} or (b) a {@item mace|phb}","(a) {@item leather armor|phb} or (b) {@item studded leather armor|phb}","(a) a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}","(a) a {@item scholar's pack|phb} or (b) an {@item explorer's pack|phb}"]},startingProficiencies:{armor:["light"],weapons:["simple"],tools:["None"],skills:{choose:2}},hd:{number:1,faces:8}}]}},{node:{class:[{name:"Warrior Sidekick",proficiency:null,startingEquipment:null,startingProficiencies:null,hd:null},{name:"Expert Sidekick",proficiency:null,startingEquipment:null,startingProficiencies:null,hd:null},{name:"Spellcaster Sidekick",proficiency:null,startingEquipment:null,startingProficiencies:null,hd:null}]}},{node:{class:[{name:"Paladin",proficiency:["wis","cha"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 5d4×10|5d4 × 10|Starting Gold}",default:["(a) a {@filter martial weapon|items|source=phb|category=basic|type=martial weapon} and a {@item shield|phb} or (b) two {@filter martial weapons|items|source=phb|category=basic|type=martial weapon}","(a) five {@item javelin|phb|javelins} or (b) any {@filter simple melee weapon|items|source=phb|category=basic|type=simple weapon;melee weapon=&}","(a) a {@item priest's pack|phb} or (b) an {@item explorer's pack|phb}","{@item Chain mail|phb} and a {@item holy symbol|phb}"]},startingProficiencies:{armor:["light","medium","heavy","shields"],weapons:["simple","martial"],tools:null,skills:{choose:2}},hd:{number:1,faces:10}}]}},{node:{class:[{name:"Rogue",proficiency:["dex","int"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 4d4×10|4d4 × 10|Starting Gold}",default:["(a) a {@item rapier|phb} or (b) a {@item shortsword|phb}","(a) a {@item shortbow|phb} and {@item quiver|phb} of {@item arrows (20)|phb|20 arrows} or (b) a {@item shortsword|phb}","(a) a {@item burglar's pack|phb}, (b) a {@item dungeoneer's pack|phb}, or (c) an {@item explorer's pack|phb}","{@item Leather armor|phb}, two {@item dagger|phb|daggers}, and {@item thieves' tools|phb}"]},startingProficiencies:{armor:["light"],weapons:["simple","hand crossbows","longswords","rapiers","shortswords"],tools:["thieves' tools"],skills:{choose:4}},hd:{number:1,faces:8}}]}},{node:{class:[{name:"Sorcerer",proficiency:["con","cha"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 3d4×10|3d4 × 10|Starting Gold}",default:["(a) a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}","(a) a {@item component pouch|phb} or (b) an {@item arcane focus|phb}","(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}","Two {@item dagger|phb|daggers}"]},startingProficiencies:{armor:null,weapons:["daggers","darts","slings","quarterstaffs","light crossbows"],tools:null,skills:{choose:2}},hd:{number:1,faces:6}}]}},{node:{class:[{name:"Warlock",proficiency:["wis","cha"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 4d4×10|4d4 × 10|Starting Gold}",default:["(a) a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}","(a) a {@item component pouch|phb} or (b) an {@item arcane focus|phb}","(a) a {@item scholar's pack|phb} or (b) a {@item dungeoneer's pack|phb}","{@item Leather armor|phb}, any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}, and two {@item dagger|phb|daggers}"]},startingProficiencies:{armor:["light"],weapons:["simple"],tools:null,skills:{choose:2}},hd:{number:1,faces:8}}]}},{node:{class:[{name:"Ranger",proficiency:["str","dex"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 5d4×10|5d4 × 10|Starting Gold}",default:["(a) {@item scale mail|phb} or (b) {@item leather armor|phb}","(a) two {@item shortsword|phb|shortswords} or (b) two {@filter simple melee weapons|items|source=phb|category=basic|type=simple weapon;melee weapon=&}","(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}","A {@item longbow|phb} and a {@item quiver|phb} of {@item arrows (20)|phb|20 arrows}"]},startingProficiencies:{armor:["light","medium","shields"],weapons:["simple","martial"],tools:null,skills:{choose:3}},hd:{number:1,faces:10}},{name:"Ranger (Revised)",proficiency:["str","dex"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 5d4×10|5d4 × 10|Starting Gold}",default:["(a) {@item scale mail|phb} or (b) {@item leather armor|phb}","(a) two {@item shortsword|phb|shortswords} or (b) two {@filter simple melee weapons|items|source=phb|category=basic|type=simple weapon;melee weapon=&}","(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}","A {@item longbow|phb} and a {@item quiver|phb} of {@item arrows (20)|phb|20 arrows}"]},startingProficiencies:{armor:["light","medium","shields"],weapons:["simple","martial"],tools:null,skills:{choose:3}},hd:{number:1,faces:10}},{name:"Ranger (Spell-less)",proficiency:["str","dex"],startingEquipment:{additionalFromBackground:!0,goldAlternative:"{@dice 5d4×10|5d4 × 10|Starting Gold}",default:["(a) {@item scale mail|phb} or (b) {@item leather armor|phb}","(a) two {@item shortsword|phb|shortswords} or (b) two {@filter simple melee weapons|items|source=phb|category=basic|type=simple weapon;melee weapon=&}","(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}","A {@item longbow|phb} and a {@item quiver|phb} of {@item arrows (20)|phb|20 arrows}"]},startingProficiencies:{armor:["light","medium","shields"],weapons:["simple","martial"],tools:null,skills:{choose:3}},hd:{number:1,faces:10}}]}}]}}}},181:function(e,t,a){"use strict";a(182);var n=a(5),i=a(75),r=a(18),o=/./.toString,s=function(e){a(14)(RegExp.prototype,"toString",e,!0)};a(19)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?i.call(e):void 0)}):"toString"!=o.name&&s(function(){return o.call(this)})},182:function(e,t,a){a(18)&&"g"!=/./g.flags&&a(25).f(RegExp.prototype,"flags",{configurable:!0,get:a(75)})},183:function(e,t,a){"use strict";var n=a(177),i=a(185),r=a(189),o=a(190)||0;function s(){return i(o)}e.exports=s,e.exports.generate=s,e.exports.seed=function(t){return n.seed(t),e.exports},e.exports.worker=function(t){return o=t,e.exports},e.exports.characters=function(e){return void 0!==e&&n.characters(e),n.shuffled()},e.exports.isValid=r},184:function(e,t,a){"use strict";var n=1;e.exports={nextValue:function(){return(n=(9301*n+49297)%233280)/233280},seed:function(e){n=e}}},185:function(e,t,a){"use strict";var n,i,r=a(186),o=(a(177),1459707606518),s=6;e.exports=function(e){var t="",a=Math.floor(.001*(Date.now()-o));return a===i?n++:(n=0,i=a),t+=r(s),t+=r(e),n>0&&(t+=r(n)),t+=r(a)}},186:function(e,t,a){"use strict";var n=a(177),i=a(187),r=a(188);e.exports=function(e){for(var t,a=0,o="";!t;)o+=r(i,n.get(),1),t=e<Math.pow(16,a+1),a++;return o}},187:function(e,t,a){"use strict";var n,i="object"==typeof window&&(window.crypto||window.msCrypto);n=i&&i.getRandomValues?function(e){return i.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],a=0;a<e;a++)t.push(Math.floor(256*Math.random()));return t},e.exports=n},188:function(e,t){e.exports=function(e,t,a){for(var n=(2<<Math.log(t.length-1)/Math.LN2)-1,i=Math.ceil(1.6*n*a/t.length),r="";;)for(var o=e(i),s=0;s<i;s++){var l=o[s]&n;if(t[l]&&(r+=t[l]).length===a)return r}}},189:function(e,t,a){"use strict";var n=a(177);e.exports=function(e){return!(!e||"string"!=typeof e||e.length<6||new RegExp("[^"+n.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e))}},190:function(e,t,a){"use strict";e.exports=0}}]);
//# sourceMappingURL=component---src-pages-classes-js-b02acf23b5558f0eb3da.js.map