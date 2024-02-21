function focused() {
    let list = document.querySelectorAll("body div div input");
    let arr = Array.from(list);
    arr.forEach((x) => x.addEventListener("focus", focusOn));
    arr.forEach((x) => x.addEventListener("blur", change));
    function focusOn(e){
       let div = e.target.parentNode;
       div.classList += "focused"
    }
    function change(e){
        let div = e.target.parentNode;
        div.remove
        console.log(div);
    }
    }  
