//punto 1 agregar boton a cada articulo con el texto agregar a favoritos

const botonfav = document.createElement('button');
botonfav.type = 'button';
botonfav.innerText = 'Agregar a favoritos';
document.body.appendChild(botonfav);


//punto 2 cuando se haga click en boton fav debe agregarse informacion del articulo al local storage

let informacion = document.querySelectorAll('#articulo');

//punto 3 agregar a la barra de navegacion un item llamado favoritos

const favoritonavbar = document.createElement('nav');
favoritonavbar.type = 'nav';
favoritonavbar.innerText = 'Favoritos';
document.querySelector('.navbar').append(favoritonavbar); 

//punto 5 validacion de los campos usuario de 5 caract y contraseña de no menos de 8 caracteres con un nro y una letra

function validar() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "") {
      alert("Ingrese un nombre de usuario.");
      return false;
    }
  
    if (username.length < 5) {
      alert("El usuario debe tener almenos 5 caracteres.");
      return false;
    }
  
    if (password == "") {
      alert("Ingrese una contraseña.");
      return false;
    }
  
    if (password.length < 8) {
      alert("La contraseña debe tener almenos 8 caracteres.");
      return false;
    }
  
    return true;
}
  

