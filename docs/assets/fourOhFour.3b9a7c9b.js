import{S as w,i as k,s as v,e as i,a as d,E as x,F as I,b as c,f as C,g as e,G as S,M as E,m as F,t as H,h as j,I as q}from"./HedgehogIcon.ed589725.js";import{H as A}from"./hedgehogSpinner.799b9ba0.js";function B(f){let t,o,a,m,g,s,b,h,$,y,p,_,r,l;return r=new A({}),{c(){t=i("div"),o=i("h1"),o.textContent="404",a=d(),m=i("h2"),m.textContent="Page Not Found",g=d(),s=i("h3"),b=x("You will be automatically redirected in "),h=x(f[0]),$=x(" seconds"),y=d(),p=i("h4"),p.textContent="In the meantime, enjoy this masterpiece",_=d(),I(r.$$.fragment),c(o,"class","font-primary text-center text-8xl font-bold"),c(m,"class","font-primary text-center text-5xl font-bold"),c(s,"class","font-primary text-center text-4xl font-bold"),c(p,"class","font-secondary text-center text3xl font-semibold"),c(t,"class","bg-white text-black dark:bg-black dark:text-white")},m(n,u){C(n,t,u),e(t,o),e(t,a),e(t,m),e(t,g),e(t,s),e(s,b),e(s,h),e(s,$),e(t,y),e(t,p),e(t,_),S(r,t,null),l=!0},p(n,[u]){(!l||u&1)&&E(h,n[0])},i(n){l||(F(r.$$.fragment,n),l=!0)},o(n){H(r.$$.fragment,n),l=!1},d(n){n&&j(t),q(r)}}}function G(f,t,o){let a=15;return setInterval(()=>{o(0,a--,a),a===0&&(clearInterval(),window.location.href="https://porkyproductions.github.io/")},1e3),[a]}class M extends w{constructor(t){super(),k(this,t,G,B,v,{})}}new M({target:document.getElementById("app")});
