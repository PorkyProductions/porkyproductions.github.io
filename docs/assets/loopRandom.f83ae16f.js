import{w as a}from"./writeAndUnwriteText.ee6e33e4.js";import{r,a as m,m as l}from"./animationSetup.d41134ca.js";import"./writeEffect.5e846048.js";import"./unwriteEffect.b365ae97.js";import"./index.159c8290.js";let t=[];const c=e=>{for(;;){const n=r(0,e.length),o=typeof t=="number"&&n!==t,i=Array.isArray(t)&&!t.includes(n);if(e.length===1||i||o)return o&&(t=[]),t.push(n),e[n];t.length===e.length&&(t=t.pop())}},T=async(e,n)=>{const{options:o,elements:i}=m(e,n);for(;;){l(e);const s=c(i);await a(s,o)}};export{T as default};