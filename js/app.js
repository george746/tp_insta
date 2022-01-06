document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");

    let  warning, connect, traitement, mail, mdp 
    

        btn = document.querySelector(".connecter")
    let formActive = () => {
        warning = document.querySelector(".warning");
        email = document.getElementsByTagName("input")[0].value;
        mdp = document.getElementsByTagName("input")[1].value;
        let user = {
            login: "george@yahoo.com",
            password: 2021
            }
        if (user.login == email && user.password == mdp){
            window.location.assign("accueil.html");
            localStorage.setItem("log", user.login );
            //sessionStorage.setItem("user", user.login)
        } else if (!email || !mdp){
            warning.style.display = "block"
            warning.textContent = "les champs sont vides"
            
        } else{
            warning.style.display = "block"
            warning.textContent = "mdp ou ID incorrecte"
        }
        
    };

    btn.addEventListener("click", event => {
        event.preventDefault();
        formActive();
    });
   
});