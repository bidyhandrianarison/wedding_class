function depl(clas){
    // Sélectionnez l'élément que vous souhaitez déplacer
    var element = document.getElementById(clas);
    
    // Obtenez la position actuelle de l'élément
    var positionActuelle = element.getBoundingClientRect();
    
    
    var style = document.querySelector('style');
    //alert(positionActuelle);


    // Calculer le déplacement vers la gauche en utilisant la position actuelle
    var deplacementGauche = -positionActuelle.left; // Déplacer l'élément de la largeur de l'élément vers la gauche
    //alert('translateX(' + deplacementGauche + 'px)');
    // Appliquer la transformation et déclencher l'animation
    element.style.transform = 'translateX(' + deplacementGauche + 'px)';
    element.classList.add('deplacer-gauche');
} 

function info(name){
    // Sélectionne la balise body
    var bodyElement = document.querySelector('.team');
    if (name == "Bidy"){

        // Change le contenu de la balise body
        bodyElement.innerHTML = `
            <div id="Bidy">
                <img src="../images/sid.png" alt="Image1">
                <h3>Sid Saoera</h3>
                <h4>Front-End developper</h4>
                <p>izany ary ny bandy rehefa midev dia samy ampiditra ny info any eto faholo fotsiny</p>
            </div>
        `
        depl('Bidy');
    }
    else if (name == "Liantsoa"){
        bodyElement.innerHTML = `
        <div id="Liantsoa">
            <img src="../images/fauxtsim.png" alt="Image2">
            <h3>Faux Tsim</h3>
            <h4>Front-End developper</h4>
                    
            <p>izany ary ny bandy rehefa midev dia samy ampiditra ny info any eto faholo fotsiny</p>
        </div>
        `
        depl('Liantsoa');
    }
    else if (name == "Tsinjo"){
        bodyElement.innerHTML = `
        <div id="Tsinjo">
            <img src="../images/datoa.png" alt="Image3">
            <h3>Datoa Postgresy</h3>
            <h4>Front-End developper</h4>
            <p>izany ary ny bandy rehefa midev dia samy ampiditra ny info any eto faholo fotsiny</p>
        </div>
        `
        depl('Tsinjo');
    }
    else if (name == "Sarobidy"){
        bodyElement.innerHTML = `
        <div id="Sarobidy">
            <img src="../images/sipansymfony.png" alt="Image4">
            <h3>Sipan'ny Symfony</h3>
            <h4>Front-End developper</h4>
        </div>
        `
        depl('Sarobidy');
    }
    else if (name == 'Lova'){
        bodyElement.innerHTML = `
        <div id='Lova'>
            <img src="../images/totem.png" alt="Image5" onclick="info('Lova')">
            <h3>Totem</h3>
            <h4>Front-End developper</h4>
            <p>izany ary ny bandy rehefa midev dia samy ampiditra ny info any eto faholo fotsiny</p>
        </div>
        `
        depl('Lova');
    }
    else if (name == 'Freddy'){
        bodyElement.innerHTML = `
        <div id='Freddy'>
            <img src="../images/tsyalaise.png" alt="Image6" onclick="info('Freddy')">
            <h3>Tsy à l'aise</h3>
            <h4>Back-End developper</h4>
            <p>izany ary ny bandy rehefa midev dia samy ampiditra ny info any eto faholo fotsiny</p>
        </div>
        `
        depl('Freddy');
    }
    else {
        bodyElement.innerHTML = `
            <div id="sid">
                <img src="../images/sid.png" alt="Image1" onclick="info('Bidy')">
                <h3>Sid Saoera</h3>
                <h4>Front-End developper</h4>

            </div>
            <div id="tsim">
                <img src="../images/fauxtsim.png" alt="Image2" onclick="info('Liantsoa')">
                <h3>Faux Tsim</h3>
                <h4>Front-End developper</h4>

            </div>
            <div>
                <img src="../images/datoa.png" alt="Image3" onclick="info('Tsinjo')">
                <h3>Datoa Postgresy</h3>
                <h4>Front-End developper</h4>

            </div>
            <div>
                <img src="../images/sipansymfony.png" alt="Image4" onclick="info('Sarobidy')">
                <h3>Sipan'ny Symfony</h3>
                <h4>Front-End developper</h4>
            </div>
            <div id="">
                <img src="../images/totem.png" alt="Image5" onclick="info('Lova')">
                <h3>Totem</h3>
                <h4>Front-End developper</h4>
            </div>
            <div id="">
                <img src="../images/tsyalaise.png" alt="Image6" onclick="info('Freddy')">
                <h3>Tsy à l'aise</h3>
                <h4>Back-End developper</h4>

            </div>
        `
    }
}