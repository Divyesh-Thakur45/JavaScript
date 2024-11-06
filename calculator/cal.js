let cal = document.querySelectorAll("#calculator>div")
let display = document.getElementById("display");
let empty = "";

// arr.forEach()
cal.forEach((event,index)=>{
    event.addEventListener("click",(e)=>{
        const num = e.target.innerText;
        if(num == "="){
            empty = eval(empty)
            display.innerText = empty;
        }
        else if (num=="C"){
            empty ="";
            display.innerText = ""
        }
        else{
            empty += num;
            display.innerText = empty;
        }
    })
})