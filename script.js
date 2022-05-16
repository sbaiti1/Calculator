let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map(button => {
    button.addEventListener('click' , (e) => {
        console.log('clicked');
        console.log(e);
        console.log(e.target); /*the whole html code*/
        console.log(e.target.innerText);/*value inside the html code*/ 
    });
}); 




