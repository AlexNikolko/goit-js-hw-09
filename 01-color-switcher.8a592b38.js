const t={startBtn:document.querySelector("button[data-start]"),stoptBtn:document.querySelector("button[data-stop]")},e={intervalId:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3))},stop(){clearInterval(this.intervalId),this.isActive=!1}};t.startBtn.addEventListener("click",(()=>{e.start()})),t.stoptBtn.addEventListener("click",(()=>{e.stop()}));
//# sourceMappingURL=01-color-switcher.8a592b38.js.map
