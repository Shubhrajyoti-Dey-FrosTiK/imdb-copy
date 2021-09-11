var ID = localStorage.getItem("ID")
console.log(ID);

var title = ""

if(ID[1]=='m'){
    fetch("https://imdb8.p.rapidapi.com/actors/get-bio?nconst="+ID, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "d8c6290a83mshe2af673ae7e9daap1511cdjsnbb29b0826c77"
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data); 
        let parent=document.getElementById("Details")
        let div=document.createElement("div")
        let h1=document.createElement("h1")
        let t=document.createTextNode(data.name)
        let img=document.createElement("img")
        img.src=data.image.url
        img.setAttribute("style","height:auto; width:auto; max-width: 300px; max-height: 300px; margin-bottom:20px;")
        div.appendChild(img)
        h1.appendChild(t)
        div.appendChild(h1)
        let h2=document.createElement("h2")
        t=document.createTextNode("Real Name : "+data.realName)
        h2.appendChild(t)
        div.appendChild(h2)
        h2=document.createElement("h2")
        t=document.createTextNode("Gender : "+data.gender)
        h2.appendChild(t)
        div.appendChild(h2)
        h2=document.createElement("h2")
        t=document.createTextNode("Birth Day : "+data.birthDate)
        h2.appendChild(t)
        div.appendChild(h2)
        h2=document.createElement("h2")
        t=document.createTextNode("Birth Place : "+data.birthPlace)
        h2.appendChild(t)
        div.appendChild(h2)
        h2=document.createElement("h2")
        t=document.createTextNode("Height : "+data.heightCentimeters +"cm")
        h2.appendChild(t)
        div.appendChild(h2)
        div.setAttribute("style","text-align:center; margin-left:10%; margin-right:10%; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; padding-top:20px; padding-bottom:20px;")
        parent.appendChild(div)
    })
}else{
    fetch("https://imdb8.p.rapidapi.com/title/get-details?tconst="+ID, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "d8c6290a83mshe2af673ae7e9daap1511cdjsnbb29b0826c77"
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data); 
        let parent=document.getElementById("Details")
        let div=document.createElement("div")
        let h1=document.createElement("h1")
        let t=document.createTextNode(data.title)
        let img=document.createElement("img")
        img.src=data.image.url
        img.setAttribute("style","height:auto; width:auto; max-width: 300px; max-height: 300px; margin-bottom:20px;")
        div.appendChild(img)
        h1.appendChild(t)
        div.appendChild(h1)
        let h2=document.createElement("h2")
        t=document.createTextNode("Running Time : "+data.runningTimeInMinutes+" mins")
        h2.appendChild(t)
        div.appendChild(h2)
        h2=document.createElement("h2")
        t=document.createTextNode("No of Episodes : "+data.numberOfEpisodes)
        h2.appendChild(t)
        div.appendChild(h2)
        h2=document.createElement("h2")
        t=document.createTextNode("Year : "+data.year)
        h2.appendChild(t)
        div.appendChild(h2)
        div.setAttribute("style","text-align:center; margin-left:10%; margin-right:10%; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; padding-top:20px; padding-bottom:20px;")
        parent.appendChild(div)
    })
}