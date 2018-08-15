var app4=new Vue({
    el:"#menu",
    data:{
        items:[
            {name:"绪论",data:[{name:"first",a:"first.html"},{name:"second",a:"gg.html"}]},
            {name:"html",data:[{name:"first",a:"first.html"},{name:"second",a:"gg.html"}]},
            {name:"css",data:[{name:"first",a:"first.html"},{name:"second",a:"gg.html"}]},
            {name:"js",data:[{name:"first",a:"first.html"},{name:"second",a:"gg.html"}]}
        ]
    }
})


window.addEventListener("load",function (ev) {

    menu.style.display="block";
    var c1=menu.childNodes[indexOne];
    c1.childNodes[0].className="selectedOne";
    console.log(c1.childNodes[2].checked="true");
    c1.childNodes[4].childNodes[indexTwo].childNodes[0].className="selectedTwo";
    ChangeState();
})

var menu=document.getElementById("menu");

var content = document.getElementById("content");

var last=0;

function ChangeState(){
    var s=document.body.scrollTop||document.documentElement.scrollTop;
    var t=content.offsetTop;
    console.log(t);
    if(t>s) {
        if (last === 1) {
            last = 0;
            menu.style.position = "absolute";
            menu.style.top = t + "px";
        }
    }
    else if(last===0){
        last = 1;

        menu.style.position="fixed";
        menu.style.top="0px";
    }
}

window.addEventListener("scroll",function (ev) {
   ChangeState();
})