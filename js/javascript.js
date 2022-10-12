document.querySelector('#error_parrain').style.display = "none";
document.querySelector('#error_filleul').style.display = "none";
document.querySelector('#error_tel').style.display = "none";
document.querySelector('#error_email').style.display = "none";

function submit(){
    var nom_parrain = document.querySelector('#nomParrain');
    var nom_filleul = document.querySelector('#nomFilleul');
    var tel = document.querySelector('#tel');
    var reg = new RegExp('^[0-9]+$');
    var email = document.querySelector('#email');
    var reg_email = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    

    // nom Parrain
    if(nom_parrain.value == "" || nom_parrain.value.length >= 5 ){
        document.querySelector('#error_parrain').style.display = "block";
        document.querySelector('#error_parrain').innerHTML = "Le nom du parrain doit contenir entre 0 et 50 caratères";

    }

    // nom Filleul
    if(nom_filleul.value == "" || nom_filleul.value.length >= 5 ){
        document.querySelector('#error_filleul').style.display = "block";
        document.querySelector('#error_filleul').innerHTML = "Le nom du filleul doit contenir entre 0 et 50 caratères";
    }

    // Telephone
    if(tel.value == "" || tel.value.length > 10 || tel.value.length <= 9 || reg.test(tel.value) === false ){
        document.querySelector('#error_tel').style.display = "block";
        document.querySelector('#error_tel').innerHTML = "Le numéro de téléphone doit égal à 10 chiffres";
    }

    // Email
    if (reg_email.test(email.value) === false){
        document.querySelector('#error_email').style.display = "block";
        document.querySelector('#error_email').innerHTML = "Veuillez entrer un email valide";
    }
}