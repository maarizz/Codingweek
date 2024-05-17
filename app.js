const URL="https://coding-week-2024-api.onrender.com/api/data";



fetch(URL).then(function (res) {
    return res.json();
}).then(function (data) {
    
    for (let i = 0; i < 4; i++) {
        document.querySelector(`.ama${i}`).innerText = data[i].type;
        document.querySelector(`.sma${i}`).innerText = data[i].headline;
        document.querySelector(`.th${i}`).innerText = data[i].author;
        document.querySelector(`#date${i}`).innerText = data[i].date;
    }
    
    document.querySelector(`#l0`).style.backgroundImage = "url(" + data[0].image + ")";
    document.querySelector(`#l2`).style.backgroundImage = "url(" + data[1].image + ")";
    document.querySelector(`#li1`).style.backgroundImage = "url(" + data[2].image + ")";
    document.querySelector(`#li2`).style.backgroundImage = "url(" + data[3].image + ")";

    for(let i=4;i<10;i++){
        document.querySelector(`#nee${i}`).innerText = data[i].headline;
        document.querySelector(`#date${i}`).innerText = data[i].date;
        document.getElementById(`ii${i}`).src = data[i].image;
    }

    document.querySelector(`#l0`).onclick= ()=>{
        document.querySelector(`#camaa`).style.backgroundColor= "rgb(300, 207, 207)";
        document.querySelector(`#camaa`).style.border= "1px solid grey";
        document.querySelector(`#ho`).innerText=data[0].headline;
        document.querySelector(`#haha`).innerText=data[0].content;
    }
    document.querySelector(`#l2`).onclick= ()=>{
        document.querySelector(`#camaa`).style.backgroundColor= "rgb(300, 207, 207)";
        document.querySelector(`#camaa`).style.border= "1px solid grey";
        document.querySelector(`#ho`).innerText=data[1].headline;
        document.querySelector(`#haha`).innerText=data[1].content;
    }
    document.querySelector(`#li1`).onclick= ()=>{
        document.querySelector(`#camaa`).style.backgroundColor= "rgb(300, 207, 207)";
        document.querySelector(`#camaa`).style.border= "1px solid grey";
        document.querySelector(`#ho`).innerText=data[2].headline;
        document.querySelector(`#haha`).innerText=data[2].content;
    }
    document.querySelector(`#li2`).onclick= ()=>{
        document.querySelector(`#camaa`).style.backgroundColor= "rgb(300, 207, 207)";
        document.querySelector(`#camaa`).style.border= "1px solid grey";
        document.querySelector(`#ho`).innerText=data[3].headline;
        document.querySelector(`#haha`).innerText=data[3].content;
    }
    document.querySelector(`#hai`).onclick= ()=>{
        document.querySelector(`#camaa`).style.backgroundColor= "rgb(300, 207, 207)";
        document.querySelector(`#camaa`).style.border= "1px solid grey";
        document.querySelector(`#ho`).innerText=data[4].headline;
        document.querySelector(`#haha`).innerText=data[4].content;
    }
    
    for(let i=5;i<10;i++){
        document.querySelector(`.zor${i}`).onclick= ()=>{
            document.querySelector(`#camaa`).style.backgroundColor= "rgb(300, 207, 207)";
            document.querySelector(`#camaa`).style.border= "1px solid grey";
            document.querySelector(`#ho`).innerText=data[i].headline;
            document.querySelector(`#haha`).innerText=data[i].content;
        }
    }
});

