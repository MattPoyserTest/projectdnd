(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{161:function(e,A,t){"use strict";t.r(A);var n=t(0),a=t.n(n),r=t(175),l=(t(176),t(149)),c=t.n(l),o=t(177),i=t.n(o),m=t(178),s=function(e){return a.a.createElement(m.a,{header:a.a.createElement(E,{iconpath:e.iconpath,name:e.name}),arrow:a.a.createElement(u,null),classname:c.a.dropdown,childrenStyle:p},e.children)},E=function(e){return a.a.createElement("div",{className:c.a.dropdownDiv},a.a.createElement("img",{className:c.a.dropdownIcon,src:e.iconpath,alt:""}),a.a.createElement("p",{className:c.a.dropdownText},e.name))},u=function(){return a.a.createElement("img",{src:i.a,alt:"",className:c.a.dropdownArrow})},p={position:"relative",width:"328px",left:"24px",background:"#4C5057",borderRadius:"10px"},g=t(179);A.default=function(){return a.a.createElement(r.a,null,a.a.createElement("div",{style:{top:"80px",position:"relative",height:"72px"}}),a.a.createElement("div",{style:{overflow:"scroll",height:"520px"}},a.a.createElement(s,{name:"Barbarian"}," ",a.a.createElement(g.a,null)," "),a.a.createElement(s,{name:"Bard"}," ",a.a.createElement(g.a,null)," "),a.a.createElement(s,{name:"Cleric"}," ",a.a.createElement(g.a,null)," "),a.a.createElement(s,{name:"Druid"}," ",a.a.createElement(g.a,null)," "),a.a.createElement(s,{name:"Fighter"}," ",a.a.createElement(g.a,null)," "),a.a.createElement(s,{name:"Monk"}," ",a.a.createElement(g.a,null)," "),a.a.createElement(s,{name:"Paladin"}," ",a.a.createElement(g.a,null)," "),a.a.createElement(s,{name:"Ranger"}," ",a.a.createElement(g.a,null)," "),a.a.createElement(s,{name:"Rogue"}," ",a.a.createElement(g.a,null)," "),a.a.createElement(s,{name:"Sorcerer"}," ",a.a.createElement(g.a,null)," "),a.a.createElement(s,{name:"Warlock"}," ",a.a.createElement(g.a,null)," "),a.a.createElement(s,{name:"Wizard"}," ",a.a.createElement(g.a,null)," "),a.a.createElement(s,{name:"Artificer"}," ",a.a.createElement(g.a,null)," "),a.a.createElement(s,{name:"Blood Hunter"}," ",a.a.createElement(g.a,null)," "),a.a.createElement(s,{name:"Mystic"}," ",a.a.createElement(g.a,null)," ")))}},162:function(e,A,t){"use strict";var n=t(0),a=t.n(n),r=t(4),l=t.n(r),c=t(33),o=t.n(c);t.d(A,"a",function(){return o.a});t(163),a.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},163:function(e,A,t){var n;e.exports=(n=t(165))&&n.default||n},164:function(e,A,t){"use strict";var n=t(0),a=t.n(n),r=t(34),l=t.n(r),c=t(7),o=t.n(c),i=t(162),m=t(74),s=t.n(m),E=function(e){return a.a.createElement(i.a,{to:e.to,className:s.a.icon,style:{left:e.left}},a.a.createElement("img",{src:e.iconpath,alt:""}))},u=function(e){function A(A){var t;return(t=e.call(this,A)||this).toggle=t.toggle.bind(l()(t)),t.state={dropdownOpen:!0},t.to=A.to,t.iconpath=A.iconpath,t.children=A.children,t.left=A.left,t}o()(A,e);var t=A.prototype;return t.toggle=function(){this.setState(function(e){return{}})},t.render=function(){return console.log(this.state.dropdownOpen),a.a.createElement("div",{className:s.a.icon,onClick:this.toggle,style:{left:this.left},onMouseEnter:this.toggle,onMouseLeave:this.toggle},a.a.createElement(E,{to:this.to,iconpath:this.iconpath,left:"0px"}),this.state.dropdownOpen&&a.a.createElement("div",null,this.children))},A}(a.a.Component),p=t(166),g=t.n(p),d=t(167),w=t.n(d),h=t(168),B=t.n(h),C=t(169),U=t.n(C),f=t(170),R=t.n(f),I=function(){return a.a.createElement("div",{className:s.a.subheader},a.a.createElement(K,{to:"/character",iconpath:g.a,left:"16px",style:{backgroundColor:"blueviolet"}}),a.a.createElement(K,{to:"/classes",iconpath:w.a,left:"85px"}),a.a.createElement(K,{to:"/spells",iconpath:B.a,left:"154px"}),a.a.createElement(K,{to:"/rules",iconpath:U.a,left:"223px"}),a.a.createElement(K,{to:"/monster",iconpath:R.a,left:"291px"}))},K=function(e){return a.a.createElement(i.a,{to:e.to,className:s.a.subicon,style:{left:e.left}},a.a.createElement("img",{src:e.iconpath,alt:"",style:{backgroundColor:"transparent"}}))},Q=t(171),M=t.n(Q),Y=t(172),y=t.n(Y),b=t(173),S=t.n(b),v=t(174),G=t.n(v);A.a=function(e){var A=e.children;return a.a.createElement("div",{className:s.a.bar},a.a.createElement(u,{to:"/",iconpath:M.a,left:"16px"},a.a.createElement(I,null)),a.a.createElement(E,{to:"/homebrew/",iconpath:y.a,left:"102px"}),a.a.createElement(E,{to:"/newsletter/",iconpath:S.a,left:"188px"}),a.a.createElement(E,{to:"/menu/",iconpath:G.a,left:"274px"}),A)}},165:function(e,A,t){"use strict";t.r(A);t(35);var n=t(0),a=t.n(n),r=t(4),l=t.n(r),c=t(55),o=t(2),i=function(e){var A=e.location,t=o.default.getResourcesForPathnameSync(A.pathname);return a.a.createElement(c.a,Object.assign({location:A,pageResources:t},t.json))};i.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},A.default=i},166:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABACAYAAAC6CT8CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOCSURBVHgB7ZnxVdswEMYvff2/2QB3AtIJMBMUJihMAExAmAA6AWEC2glsJiBMEDNB0wnc+9Dn9xRXdhznQtw+/d67Z1s+KZJPdzopIpFIJBKJRCKRiDFlWV6qTOV/QQczVllQxrJjPsiO0UGkesm8omeW7YyR7Ajt+IVepipzle8qE74qVL6pJCo3o9FoJkOHUy2jpF751PcpvU9UZtRLxBDT6Ud/eVZ5Ugscq+RNuvquUDmDrsqjpa9Z+9S1yoN2dtq1AnWfWHdYcDotWt5Pm0K6Fx1TMcDSUvjSN9IDtdZSXDA5EQMsB5Wq5NKfmbioOAw4fZ7X6CTrohyn4IFsyUexAZFrWT3QN9KQor6rF811+v3gfSEGWE6/t5Csnb6VzSLZtda599sYBJx+v0IRUJ/P/DWIuic1HaROB2hDDDCxFKMXWJmGBM7/yXuGzkVNB3U+ixFWPgXQMTgMLHGp18pPEKp/1/QevKDxVVweWMjfH6QXlj5ViOvUsbjkFZk5IuLYs2Rl1SXfQSdlnaqNrbG01BvI6fRyhntabBJQQxky9LuqwDKpNR9UDWw7Uob4yt9wPZKe2UcX3mNQh+IGU4X5K3E+NA/om4R0y0El9QL4DxdbbDPe/IbhfcXPPEwGZbr4akdfA+WwiO9XEwlYib44nEHx6zeFYwz0yHvG/UuD7tJis2g1/RJx69OjuA7DEphyc97fci9VBYpTVGLEm7D+Ia+JhP2tM2YHL9rBqnO4ooOpuAEUsupTGXUqi8zEWRN6Oafh8KhyQMo9B1y9S1m2YM6XijFm0Y+dS1SwH8Kii9Cdizsmy/Q9ptSY8lPlC/Vx6AI9nFMUbYc17wa//IJHXehgGfr6WnZHGQfql7RexrZOZF/gx+sHJjwzzwK6wYMXfohL7zkpDQ9hNoY/ngTKs3qnQoOqrByoPylbTqbW0XudYqeLhmgFn5l0aCZVeagXciko+lprm8U3kZZFVFxY79JG0fDuRQKpVxe2zSiasggEg1dZTyHNqVHvDeOu/srBbjbvoJdT1xTzQVXrVZf1hjqJdaSz/tcDwQHHXacbVIPubTmgne+Bl5RiGqUq54xenYCutnEuLuvIxUXDQlZPoDZi20Gl4iIUnBppzlXD5q8VDuyY7eH4bCzt0bWVbQe10X9RbXC9m1Gk3Mc/+UyRds3+csBIJBKJRCKRyD/BHz6ZiUAsYuhaAAAAAElFTkSuQmCC"},167:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABACAYAAAC6CT8CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL/SURBVHgB7ZnhcdpAEIUfmfwPqcBKBcEVcKnA7iC4gtgVmFSAXUHiCgwVoFQQUgFKBSEVkH3cKsIasJF0e2bs+2Z27jhJzD12b29PAIlEIpFIJBKJ10IPhqzX60yae7H+jsunvV5vBQPewpZM26+18S9iTmwKA0w9RcRbN9IMxWY6dCaWi5euYMQb2LOAD78TNfZ/wRDr8Cv5LfZD+xmMieEpQg99VhvAmFieYrhdan8CY2KJYqKYa59ragZDYoXfVLLdBxqMBZFYnjqX1O60T0/lMMRMlFYTtI/wIm710jXHVWQh3isQGJPNVyY8gp988cStmditCLtBQKw85eBLo/yA+4Y4FjS89l4Tm4v9UVvu6c8f+57obE3uXmzMNSLWr93zXUMRes9Y+yOxbzCiS/hdwG+kTACsElh5D2SyPE6w3uOGe4JnoLUoWdy5CCikO9CFvlnsGk4U6fTWiYyxPKIXF0cVbnV03TAEzw+4d6Ahx3D8ufbw2ctdYduV1imdk5OGoXYlnlo0fJYiBmpDbVfyPacIQBdR9JCD31wz+D2J4njEWDTdVOk6eSbIvhls82WIoVpLFLpZQ1CR8EJXjzwfTFSwzZchKPNiKJWn2wLV2YnjThPLtjcbhe2hhK4omAHv4EVl2q50rBB7D1+lMxsyK/KZhVowgtZ+2yG0lQwcfDiypcAclWiKGcEL5suYCwTATNSe6xSZ4aFQCptpm4d4FxhV1J5nHKrUnqGWYLjJoyGhRS1RhRgnVXTYw1iC9fW03IigiYITqIXYmU6y/OVzPJHaeU3rRz73CW3mAUNYFsELKaAFL7wnoWM7Q0yr+Xdt3+JGefGik2bVfqelECt7pnd643rrbDXRSmUKv685tCDWi5ddLEXguPywIzPyM89cz7umuqAJhfb/nxAV2phY7/1a0baMOmpRbXmRokzRUy1PuP3ai5el5bE+1j+JLMf/lkPYLJcq84UmhijuRTz6F2oOhn9iR0PDsMThpcAw1FBMJBKJRCKRSCSC8Q8tD7IzrNIqUwAAAABJRU5ErkJggg=="},168:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABACAYAAAC6CT8CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQVSURBVHgB7Vntkds4DMXe3P9zB8frQKkgSge+CuJUsE4FUiqwO5BTgZMKtKnASQVKB04HCDF6DGGYsuW1drPO8M1gZIEkCBIfJGSijIyMjIyMjIyMjAnAzM5TyxHy29ET446eCFC+9TTz9BHP12h+c3d3951uDX5Ra1jHKV4B3ppuCXC5padOKNEu/D36OHrJ8AqWJn72oJnq48BjE2cLekkwyUAUrsErwdvC7eR9B16JPjUsx3g6+t3wStwri9TaKmhv+RifEnKWyoJLei6IwtjxAu8VlNildhiWCJaai4thkfsT/YMlK8Ur7WZNtaB7PoyF8HtzYkyDPs4oLmPbE+M2arM0KppwQQsIbfFbu8psYMwc7XWirUZbeWJO7dLBwqNd8+zhKzvmHzN/WP6neCX1B+sHTw+JYQ31h+17T99Nm/C3nr6i3UIO6NrTOz/nxuhBnveKrgV2qDG8GT8xEnpsUvwU/h7RR3a0MLwST2sp52nl6Yend3QaFeT8j/5adiXe4K3yoPivocv14D6GBCGLVfD31G2hQd9ihNxwjq0MX7yg43jr0DG1oKnAMbg1atMnpPDmArlbjHGGvzw339VQuyqLKzieN/oK1KQUPCP3KMWD14EKHpEtHwUl2OG91LvHMe3XdCGs0uKO5j14wLQ3DbjJ3vDasFAeuJGPlD1Tlkm6MKw52q3HTiwL2BlecJ1wEC/okVCW3qdcmPvbRUtTAotqE/zgOju6Esry9dj5h/AXXYd/8Zziwunw/IeeA4ipzvCC/3dDO3yB/HsjqzTt3VO4X/jeoFP4TgV3yybFXyBbp/AZJ27xmHva7xoqkEvzXuM9pPjVI2Q3OjmoOJ0b2QuaEhwvsKLAnBMpnGMdVF4g9yiF82GKX/DAreNqcDwQNZamT9J1zshtOVEJK0/QuNgLTk1cQeiaY3ndcSKG+IIrDQ/cQvgwxmSuQnlBTSMwtkj84cuAN4pXUl8kykeUb6q7LPKe+sJQvspu5Ess97d2KTQf8Fvi5S31afyDmVKOiYWnV77/VzWnzOd0sfpoWJ8Hb2yRuEb/LZTSsXcO1gtGF4ljFtXy8Y08nCsLuIul1JgZniE5tANjg1su1djgktOcVRxTqgiVmGnUbhZnxjSJtjDeDYwtlPyGDz94zmkqcEzjDAts1ftyYEw4sEvFc0OLRftbyO/40E13ky7ITGq/i3dqR53tCwVFoRWo48TnZfRdqQW41JzPAigTLCLKVkahLR9ja8ZXHEuO9bMvYggcS/xfinOMnTWUd2oDGo7JhPG7pJcI7hPERrnlPtEnLGSPRZZ0K8DuD/3pNm0ZYXBtkXgKXzw5Psx+cttwnj7TLYLjbTvEWKsSiqNbBZLDhmNB+XKyW0ZGRkZGRkZGxh+Bn9qYZqtrw1J/AAAAAElFTkSuQmCC"},169:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABACAYAAAC6CT8CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG6SURBVHgB7ZmBTcMwEEWviAHCBHSEMgFhgzJBYYNuAJ2g6gTNBsAE7QaM0GwAG5h/ykWKUNzWUexi9J/05SYXp/r1pbqLRQghhBBCCPHgnCuhnUvHQQK5DrkYXzDH8AZV0LPEp4TuJSYw9QltJRL6oyVfKTCDNr7gmYY/JpPJuye2hx6hwo5LGbBSoaaUad9JGHrCoKo882amlScuMPuN+yzwcd45XUtMLB2+zMDv2OHYSp2Kd66b6v1N1ZD0C8KdZuqZN3fDif5MKfqvV0Mv0ESadCuhBdKn9swpOnNDKCXRM6W5v7cUdPisKaKnF2fMqyQAu2+wqSv5h9BULtBULtBULtBUCK7pvS5CFFNWbWwxFnIBRjdlRa3WhYWNyYmxUq0RbSaXMDmTxIxqylbpCVqheF1K08muJTGDqvQj6EuZulONa5e7k8SMnX6aag/tgbYo0qRhKQkZy1Rt46anUXy1eC2JGCX9rGm80RcnPTF9mXInCRntmeozdE4sBiyTcoGmcoGmcoGmcoGmciHUVC2eTbe/RGjtp23EGgXqLUZV+z4iFnE3sVtsh+/g0hF3J5EQQgghhGTND2H98bst5TpKAAAAAElFTkSuQmCC"},170:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABACAYAAAC6CT8CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQwSURBVHgB7ViLbdswEGW6QJ0JwkxQd4IqG2gEdYKoE9idwN5AyQRJJlA2UDqB3AmcDa686hF6oWnZhiUkAfiAg8Tj8XNfUjImISEhISEhISEhISFhclyYDwgRmblH7ujV0cvFxcXGfHY4pWpHW5CicmSPHf/FfFyol76DrKP6FMU+HDT8HDVKxLtz1CI0PyegmIZfFrSX5jMDubWm9lIVOzRukuqH2J874lDZKJ1SyeCVH27MDdo6nyp143jPZkogNEqqWoJnS+TRoprNj5i3UPmAp7lWDo07qvqp5R2tfHwTf+5o4V51YX3+cfTT0bWz5KWjayKNCq1kv01XzRoYwQ4sPfPrE0/X+GbOBWJZyAMNeaSGRU+qSjDUHeZY7elvvXeJv3b0aM4FLaAK5Ai1QkY4N+DtFoayxK/At1BsDr4auDZjYN/iR4yryaOW+Ba8jIzWeI/73IkoddBTR98oXEq8uIdWIT3pW1gyM8MKWfdQmV+my4+KunWev47U6jnmVvkFyVw50tDcYH3P25ixgdCr+zQTn/SeHhAm3hsteNvIXD5fLUJb8GzxvhWqlHJE9TvrnEKozM3umaTvWqEyR3p4Xjr66ujJWfwuMo9661778K7jNqarlholr5Czpqu005xTas0IT/NjAa+05MnyiPksqPSei8jsnFujgcJkSbyF9AVhjQ3kCK8tFYBbyBTBnCUMMePCEMjouMpMAdroFpsosJEM/TOS9RfRnOQewo1LV10F8qpcJbvVMqrsGAplQomPtubCIxb2h7LfmE96VUiTfIV5WvYWbfoKcsIymOuo8+mkj0TprkQ68cZ01yGFNV151kLg88xfh9RjD5DRMWrlJ8gM3UBeMf+9I69MQWuOA+QMf994y2YgQcyHF9CSwkrgOR9qluT+z4H3ltaZY91xbhG0oFegIF4lb79MfZ4tg3G6wTXaNdpboe8kUr6RSKEgox2soqcotQ4UsKGlI2NiV58ZlC8j8rVQDkb6S6Eqejaw4JLahQycFxSqNZTLDhhgRqGsilV75BoZq6Rjgzm1M/BsIGel/yxRy95KXw0Hw0f6i63Inv8QFIbne8tbMeA1CK8clvbhVqO9gEKF9F/G2wPrVGSEbI9MI2P8fAk9BZ4qcUdeUJkH6lMUJD9oZR4jA5dWGGdtRlBqZxGhD0Xp73qW+ppAvgp5kf6alMvMlJCu+tXUXkn/Y6WJeOWNUtLfC/M989uYxycFhU6Gdg3L+jtceOD6+1sr/R0x9LQahr9mG+kPcqWFmQqwsv/9VYNXyluEG/ZFQ/EsQR6R51oyQBkZGzvPbuXcQ5gUqPBcwMoi/edCK31JzohX0pi59L/aFEt5+08wD8YuwV9h7JzGFuZcCA5b6aGhkqMvVgUr6W8Rk4wdDdKFymyg377H2ISEhISEhISEhISEhHfAP6RL0KqgrQkqAAAAAElFTkSuQmCC"},171:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABACAYAAACndwGZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALLSURBVHgB7ZrdUeMwEMfXmbv3lGA64CpI6CBUEFPBlYCpgLkKYiq4dHBOBVwH8VVwPPICYjeRQRaW5EQfiZn9zezI0cpC/ltar4UBGIZhGIZhGIZhmGQIIe6Fm3s4UzKIAF7wHIs/aDeWZjnaLdpVlmW1oR9q8xNtqrme0H7heQ1EIpYwBRYrHHjmaCewqNA2mqumi0b3I+xFqTX/HK3BNlcwJkgYedGudiZKxV8c278PE/AAx7ZE+69d1KXiN7FSurnJPlPCifkGfpRoa+guhQatFccUY2oYDok/U37fqU45o2baOd4xyFeYHG2DA6jUynaW6/UJWcD+5hwdg3yFScGDSXhC+nR/gcUKPAgiDA6E7tBv+EKEmjE12jV85BtztCVERgvixCbU8g0iDA6Ggt26/S2n+lIe57AXSqVWAyO2IUEXA/z0d2pIQIoYU8Ln2VNB94k1h25M0P254r9uK1E8W2bthVcecwBVm6Dg8UOPf7cETX6s/qvkOGtIwBieSrB9FPnkO9ySbC+T5ztIQKoZ488rxRpIxihmzMWPXSB+jycigUJBZgzlMX3vSqGw9U8vnO1jG8ut3PLwJkYe08DHu1Ioakv/OZpQjnMIQMilRIN+gggY8qSohBImh548Y8wEiTED8oyiDRBgeVVw+VOSKvOttTr9N4lJy2Vq8CcnujDynadytOnEkHNgPAmenX+ybCDQA2AUCZ4NnG2FcnxBZd8G+qF8lRkTHBbGAAtjgIUxwMIYYGEMsDAGou/HyP0S2/+u9fNdflf/QbY8UuzHVLJOb2863+VvHP3r/qMIuZR892OmA/yu/qPsBx2MnLq0pXCpTOWFUL5fwaLqWUql5XyX39V/x38S2oH31B/y4VARuv8QwvBTyYBv8KU1Peu5ObsPecSwt9yZ4+Ye0z/5GzgVcspuxflBn78VwDAMwzAMwzAMwwTlDZ5EGbIkTin7AAAAAElFTkSuQmCC"},172:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABACAYAAACndwGZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM1SURBVHgB7ZqBddowEECPvg5AJ4g6QekEmA3IBKUT0ExgmCDJBDQTJJ3AzgSwAe4EJBMod/EJC8Ui8YtkbN799+7JkWS/6Lg7nU8GEARBEARBEARBEE6K1nqIkqKsdQVdr1AUdIgBtAQuPMHmHmWIsmEhFErC1wuUR+7bDAaDDZwzqJQpW8eWFeSOK8eKDPdkZXAColgML2aGMkYZQWklTygTtILiyH0LnkeWkqCkKAX/bSzt9tgzOgsubo6ysywkY1HQEFKU9Zy1da2gT3BgNQE1gQDgc0bWtXHJG+gLHCeMUqLFBY47O4jMFwhHyu0lxoAnEPb5CbGCiLBVUox5gMh8hTAobh/rBjlYzlAKtKa/zpjZwagtUHKz63B8IWWbfGbK7R/oAxRo2WJmnvGtlZusaMFsZYkzZnadEd83s/rNTteKUkLGmDfw4ukXVyi/UZZQWscahQJoBqWlXKJ8Q5nwrdfOo6j/J1+3Er9CudIBbDk/oHKRpXEhHKN2CpXrPFjBOsfxf9jOj+xsYxxz+8hFc+garitZ5p81zWd0ldRdWK6UWOmAj0wHTBNiuhJZySTCL3mF8t0ScjFy0QTKl9QgRI0xBo41U89Y0vCXprnKkiEqf4HtLUoSympaUQyUMYUy1gu7U5fbeAbVNuxSt8iU79kLP9ds6SMIQFuKaUJuta9v1447kmVMWO4gEp1TDCuBtu99qcKZQgWsnOcVEIkuWgwph1J+Ukp+qtpLKMWQf9NCUto24QwIohhO0MjkqVVwBgTLfLlw/Zq265rUtG90MsZ0AVGMB1GMB1GMB1GMB1GMhyiFqsisdOSiO9FHxeRw+I70jDnUf6vcEKT02ZZizD/7/M6421c3/67mpEFhM4fyTby7X0hwqXHh9CnP3KGv3x6zSps7PkmwxfQHqcUQrbmS7y3Zd2p55DST+gunjwroNyHfxPsYY5auK8UgpmJ+oWmPG8ynAtQVuxztOqZYdc1tsBOAjxBTMaZo3RQFh8FYwQkUEwU+49npgB/46PJoV+uWPhqK9akZ7Q5UyTOfjX02t1BQnhst+aikv/D2mukwbHVLh/mCIAiCIAiCIAiCnxfe1c7Ywb3KEwAAAABJRU5ErkJggg=="},173:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABACAYAAACndwGZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANCSURBVHgB7ZrhddowEMf/9PV7vUHdCeoRyAbJBGGDkAlCJiCZIO0E0AlgA5IJcCfAnUC9w6eiuIZQS7KVvvu9dw/JBkmcT6fzSYCiKIqiKIqiKIoSBWPMDcnW9M+GZIIIjOAJDeyOPmYka5KSJCO5lNtLkhfE4TPJmCTn/kej0T1SgZQylif30Liek+zYihAZ6uObjGGMVKDBLEQBecu9aR8DpvYzGcMTUkEGtJQy+5mVnfMy4L+sKdI42NesEJCP8IP9yU7KX1DP9ycaZElzfk2fFdU/IRL8MOijkHFUSIWmCTtmba1oa8uN3/ETnkp5Kt87V/i3mdO+iWGZvhazJrmkQd2ThbCVVFR+xmsrabOYHyTPUi6lnbPhfpxqSXLB/SMVSAmFPK2trFBzqS+kvgs99xv9z5z+c6QEO1tzOriLqZgbUb4Jvfp5B3iMzPmi5Rb7H55iF43vT1A76k5Qe2wpMypycFkitan0FmJJqyPXu8IWwk4+d9q5w3vimGICts/KsZHvEgHxXZUGRaYP+7ivCBwvDaIY8UkZulE1luv9NQRmKIvZwMP58hQi5fxERIZSzC26WwxiK4UZRDH0x4I6yhh8gNLKUM53AY+pRFy1OOCgDGUxv9CdXtILQ/mYCRKnD4spknvzPYPYFsPL8pyEXw3+ZPKpzLsIPgFe8qvam7AS3Jc/ubYzfmSNPlYmsZzvSWiw1/TBKccSdWrAOk7OD/sEeOnkd7tg6vzsNraPiWExsZ0vW0X5rpJIgka+R+g9jiGT5xRogbBYp56F8j+9KUb8DPuBHPHg1e6BlHMLT/q0GM7L5qhjm8qpXyFMmG9PWfAGXtFMwCeFm/M1zg6l1O1JiRkCYg57TVN4EGT75BimPgay3z5xy437Xfadv8sWCkfVaE4d+zB8rCb2VOI/bAO5R5K5KOORBm0Dvxz/uEWLgyJf0B4ocobvGqkiWxs7pz4xr4+KBD++Ie0u3H6Tw3lPumy5l8u9oKcUzGEjLtp+ljem3jHcNl8L5PpGFJMjENLuQtr1ipWiOl9GBsipzBz1YUX2D2OpV3ItFDadwcdSZkgdc9hK9U03nGJ/5MSkdEhRURRFURRFURTlP+M3pZMvXe7r+IIAAAAASUVORK5CYII="},174:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABACAYAAACndwGZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIXSURBVHgB7ZrhbcIwEIUPqQMwgrtBN2g2aDdoO0HbCZpOAJ2gbAAbwAawQdIJoBNc7/BZWFHgB04Iad4nnYwcWSHPPufuHCIAAAAAAAAAAACkMaIGYOZHaR7EnNhG7Gs0GpU0ZESUb67niYaKPPybibC135nYLOobU0+5oTTCqngR11nY75UIEq49i03jAXLNSaOu17ZoK/lPK+qC4DM1/c926bvm2owvw5YSSF0xpZhTF6rMzr21PzVjchvXNiV1hQiS2+wUYo/qJmKTaNYcDRF58LHY+shSzmnosN9TlrZy5upaBAAA4ChNJZEaxYZodtNZxHlNiCiv7POimGKwMYzCh9Cf7XU9NVGCOL1NIpNcScWQJhP7FPfJrU/F0P47sXfpn9aMc9Q+O7n3jrogWi3jSn8oR9QlkTlfhoISSE0idUZOucvvkTEltU9JXcF+X9mvjLBq2BerCuvPaIiwz6bDG2kbCbIXi4aMibOMBFGBcuo5jQR4irmSWndvAwDAv4V9mdMR8Bx5K33QkDFRCsQxFfhwbj2PIt846Muop6Rm13rap4Lcxl83WICn7qRfPbxVxmhBa0Lts5B7v9OZpCaRIYGsBnSnAjwtRzhqH52As4Vpqh4zDbNjLrUm//B62D+rGeeofTqtx2TRZqv7zCTagJPqIb2H6wtPBfc8pmnqlMCRdyltu/suBQAAAAAAAAAAAFfEH8yfBYxeKCYmAAAAAElFTkSuQmCC"},175:function(e,A,t){"use strict";var n=t(0),a=t.n(n),r=t(144),l=t.n(r),c=t(164);A.a=function(e){var A=e.children;return a.a.createElement("div",{className:l.a.baseBackground},a.a.createElement(c.a,null),A)}},176:function(e,A,t){var n=t(25).f,a=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in a||t(18)&&n(a,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},177:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACRSURBVHgB7ZPLDYAgDEA7CiM4ChvoCI7gCI7gBo7mCLUGEgmRyKftqS/pBRreuwBgGIZBIKKjOWkmEIYcPrpcerhg4JKMoLdnfPH55SEZkcm30pJIRJVcKqJJzh3RJeeKGJKPRrDIeyMw/HMeeWvEcxd3+OS1EaLyvwgVeSlCVV6I0JV/ROjLk4idZgXDMIwBboG5obv12wy7AAAAAElFTkSuQmCC"},178:function(e,A,t){"use strict";t.d(A,"a",function(){return i});var n=t(34),a=t.n(n),r=t(7),l=t.n(r),c=t(0),o=t.n(c),i=function(e){function A(A){var t;return(t=e.call(this,A)||this).toggle=t.toggle.bind(a()(t)),t.state={dropdownOpen:!1},t.children=A.children,t.header=A.header,t.arrow=A.arrow,t.className=A.classname,t.dropdownContent=A.childrenStyle,t}l()(A,e);var t=A.prototype;return t.toggle=function(){this.setState({dropdownOpen:!this.state.dropdownOpen})},t.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:this.className},this.header,o.a.createElement("div",{onClick:this.toggle},this.arrow)),this.state.dropdownOpen?o.a.createElement("div",{style:this.dropdownContent},this.children):null)},A}(o.a.Component)},179:function(e,A,t){"use strict";t(176);var n=t(0),a=t.n(n),r=function(e){return a.a.createElement("div",null," I am a levelling table")},l=t(178),c=t(146),o=t.n(c),i=t(177),m=t.n(i),s=(A.a=function(){return a.a.createElement("div",null,a.a.createElement(s,{name:"Bard Levelling Table"},a.a.createElement(r,null)),a.a.createElement(s,{name:"Class Features"},a.a.createElement(r,null)),a.a.createElement(s,{name:"SpellCasting"},a.a.createElement(r,null)),a.a.createElement(s,{name:"Bardic Inspiration"},a.a.createElement(r,null)),a.a.createElement(s,{name:"Jack of All Trades"},a.a.createElement(r,null)))},function(e){return a.a.createElement(l.a,{header:a.a.createElement(E,{name:e.name}),arrow:a.a.createElement(u,null),classname:o.a.dropdown,childrenStyle:p},e.children)}),E=function(e){return a.a.createElement("p",{className:o.a.dropdownText},e.name)},u=function(){return a.a.createElement("img",{src:m.a,alt:"",className:o.a.dropdownArrow})},p={position:"relative",width:"296px",left:"8px",background:"#4C5057",borderRadius:"10px"}}}]);
//# sourceMappingURL=component---src-pages-classes-js-591cd7424dacc9d1ae99.js.map