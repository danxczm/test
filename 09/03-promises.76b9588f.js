function e(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}function t({position:e,delay:t}){console.log(`✅ Fulfilled promise ${e} in ${t}ms`)}function n({position:e,delay:t}){console.log(`❌ Rejected promise ${e} in ${t}ms`)}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();const i=o.currentTarget.elements;let l=~~i.delay.value,s=~~i.step.value,u=~~i.amount.value;!function(o,i,l){for(let s=1;s<=l;s++)e(s,o).then(t).catch(n),o+=i}(l,s,u)}));
//# sourceMappingURL=03-promises.76b9588f.js.map
