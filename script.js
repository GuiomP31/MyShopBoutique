// Script JS

// ******************************************** Afficher liste des articles
function afficher_article(){
    var div = document.querySelector('.articles');
    var style = div.style.display;
    if(style == 'none'){
        div.style.display = 'block';
    } else {
    div.style.display = 'none';  
    }
}
// ******************************************** Afficher liste des articles

// ******************************************** Afficher liste des articles en stock
function afficher_article_stock(){


}
// ******************************************** Afficher liste des articles en stock

// ******************************************** Afficher commandes articles
function afficher_commande(){

    var input = document.querySelector('.liste');
    var style = input.style.display;
    if(style == 'block'){
        input.style.display = 'none';
    } else {
       input.style.display = 'block';  
    }
}


}
// ******************************************** Afficher commandes articles

// ******************************************** Validation Formulaire
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let nom = document.getElementById("nom");
    let adress = document.getElementById("adress");
    let tel = document.getElementById("tel");
    let email = document.getElementById("email");

    if (nom.value == "" || adress.value == "" || tel.value == "" || email.value == "") {
        alert("Veillez à saisir une valeur correcte dans les quatre champs !");
    } else {
        // effectuer une opération à partir d'un formulaire
        alert("Le formulaire a été envoyé avec succès !");
        console.log(" Félicitations pour avoir envoyé votre commande !");
        alert(`Ce formulaire a comme nom d'utilisateur ${nom.value}, son adresse est ${adress.value},
        son numéro de téléphone ${tel.value}, et son email ${email.value}`);
        nom.value = "";
        adress.value = "";
        tel.value = "";
        email.value = "";
    }
});
// ******************************************** Validation Formulaire