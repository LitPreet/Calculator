let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
if(e.target.innerHTML == '=')
{
    string= eval(string);
    document.querySelector("input").value=
    string;
}
else if(e.target.innerHTML == 'AC')
{
    string="";
    document.querySelector("input").value = string;
}
else{
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
}
    })
})

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;

};

