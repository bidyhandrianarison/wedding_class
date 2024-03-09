function redirectTo(page)
{
    window.location.href = page;
    
}

function chTml(selector, img, prx){
  var robeElement = document.querySelector(selector); //var robeElement = document.querySelector('.Robe');
  robeElement.innerHTML =`<div id="Ensemble">
  <section id="newproducts">
      <section class="newsarticle">
        <div class="center">  
          <img src=${img} class="image" onclick="imgScript(0)">
          <p>prix : ${prx} Ar </p>
        </div>
         </section>
         <div class="center">
          <button class="bouton"><a href="./form.html">ACHETER</a></button>
         </div>
  </section>
  <section class="description">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, officiis! Aliquid veritatis soluta possimus cumque, expedita, tenetur tempora excepturi eos at natus pariatur vero facere corrupti architecto consectetur. Iusto sed corporis nam vitae consectetur vero aliquam mollitia necessitatibus quos esse.</p>
  </section>
  </div>` ;
}

function imgScript(nbr){
    if (nbr == 0){
        var EnsembleElement = document.querySelector('main');
        EnsembleElement.innerHTML = `
        <div class="bandy">
        <h3 class="titre">ENSEMBLE POUR HOMME</h3>
        <section id="products">
            <section class="article">
              <div class="center">  
                <img src="../images/articles/IMG_20240305_210743.jpg" class="image" onclick="imgScript(1)">
                <p>prix : 120000 Ar </p>
              </div>
               </section>
               <div class="center">
                <button class="bouton"><a href="./form.html">ACHETER</a></button>
               </div>
        </section>
		<section id="products">
            <section class="article">
                <div class="center">
                <img src="../images/articles/IMG_20240305_210803.jpg" class="image" onclick="imgScript(2)">
                  <p> </br> prix : 100000 Ar </p>
                </div>
               </section>
               <div class="center">
                <button class="bouton"><a href="./form.html">ACHETER</a></button>
               </div>
        </section>
		<section id="products">
            <section class="article">
                <div class="center">
                <img src="../images/articles/IMG_20240306_202938.jpg" class="image" onclick="imgScript(3)">
                  <p>prix : 120000 Ar </p>
                </div>
               </section>
               <div class="center">
                <button class="bouton"><a href="./form.html">ACHETER</a></button>
               </div>
        </section>
		</div>
	<div class="chaussure">
        <h3 class="titre">CHAUSSURES</h3>
        <section id="products">
            <section class="article">
                <div class="center">
                <img src="../images/articles/IMG_20240306_203321.jpg" class="image" onclick="imgScript(4)">
                  <p>prix : 50000 Ar </p>
                </div>
               </section>
               <div class="center">
                <button class="bouton"><a href="./form.html">ACHETER</a></button>
               </div>
        </section>
		<section id="products">
            <section class="article">
                <div class="center">
                <img src="../images/articles/IMG_20240305_210722.jpg" class="image" onclick="imgScript(5)">
                  <p>prix : 70000 Ar </p>
                </div>
               </section>
               <div class="center">
                <button class="bouton " id="button70" onclick=""><a href="./form.html" onclick="">ACHETER</a></button>
               </div>
        </section>
	    <section id="products">
             <section class="article">
                <div class="center">
                   <img src="../images/articles/IMG_20240306_202859.jpg" class="image" onclick="imgScript(6)">
                      <p>prix : 60000 Ar </p>
                </div>
             </section>
               <div class="center">
                  <button class="bouton"><a href="./form.html">ACHETER</a></button>
               </div>
             </section>
		</div>`
    }

    else if (nbr == 1){
      chTml('.bandy', "../images/articles/IMG_20240305_210743.jpg", '120000');
      }
  else if (nbr == 2){
      chTml('.bandy', "../images/articles/IMG_20240305_210803.jpg", '100000');
      }
  else if (nbr == 3){
      chTml('.bandyt', "../images/articles/IMG_20240306_202938.jpg", '120000');
      }
  else if (nbr == 4){
      chTml('.chaussure', "../images/articles/IMG_20240305_210722.jpg", '50000');
  }
  else if (nbr == 5){
      chTml('.chaussure', "../images/articles/IMG_20240305_210722.jpg", '70000');
  }
  else if (nbr == 6){
      chTml('.chaussure', "../images/articles/IMG_20240306_202859.jpg", '60000');
  }
}

