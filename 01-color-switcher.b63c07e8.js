!function(){var t,e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");console.log(e),console.log(o),e.addEventListener("click",(function(){t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.disabled=!0,o.disabled=!1})),o.addEventListener("click",(function(){clearInterval(t),e.disabled=!1,o.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.b63c07e8.js.map