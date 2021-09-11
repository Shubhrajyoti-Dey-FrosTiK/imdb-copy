// fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "imdb8.p.rapidapi.com",
// 		"x-rapidapi-key": "d8c6290a83mshe2af673ae7e9daap1511cdjsnbb29b0826c77"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

function HandleClick(id){
    console.log("Hello")
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function removeAllChildNodes() {
    let parent=document.getElementById("Content")
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.getElementById("myInput").addEventListener("keydown",async function (e) {
    await sleep(2);
    let text=document.getElementById("myInput").value.toString()
    let result=""
    for(var i=0;i<text.length;i++){
        if(text[i]==' '){result=result+"%20"}
        else{result=result+text[i]}
    }
    console.log(result)
    if(result!=''){
        fetch("https://imdb8.p.rapidapi.com/auto-complete?q="+result, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": "d8c6290a83mshe2af673ae7e9daap1511cdjsnbb29b0826c77"
            }
        }).then(function(response) {
            return response.json();
          }).then(function(data) {
            console.log(data); 
            let store=[]
            removeAllChildNodes();
            var parent=document.getElementById("Content")
            for(var i=0;i<data.d.length;i++){
                if((data.d[i].id[0]=='t'&&data.d[i].id[1]=='t')||(data.d[i].id[0]=='n'&&data.d[i].id[1]=='m')){
                    var div=document.createElement("div")
                    var h3 = document.createElement("h3")
                    var text=document.createTextNode(data.d[i].l)
                    h3.appendChild(text)
                    div.append(h3)
                    div.setAttribute("id",data.d[i].id)
                    div.setAttribute("style","margin-left:10%; margin-right-10%; width:80%; margin-bottom:10px; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; padding-top:10px; padding-bottom:10px; padding-left:10px; padding-right:10px;")
                    div.onclick=function(e){
                        console.log(this.id);
                        localStorage.setItem("ID",this.id)
                        window.location.replace("./details/details.html")
                    }
                    parent.appendChild(div)
                }
            }
          });
    }else{removeAllChildNodes();}
})