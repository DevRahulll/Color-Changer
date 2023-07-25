const btn = document.getElementById("button");
const randomcol = () => {
    let val = "0123456789abcdef";
    let cons = "#";

    for (let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};
console.log(randomcol());
function changecol(){
    document.body.style.backgroundColor=randomcol();
    document.getElementById("code").innerText=randomcol();
}
btn.addEventListener("click",changecol);
