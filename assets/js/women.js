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
            <img src=${img} class="image" onclick="imgScriptW(0)">
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

function imgScriptW(nbr){
    if (nbr == 0){
        var robeElement = document.querySelector('main')
        robeElement.innerHTML = `
        <div class="Robe">
            <h3 class="titre">ROBES</h3>
            <section id="products">
               <section class="article">
                <div class="center">
                    <img src="../images/articles/IMG_20240306_202814.jpg" class="image" onclick="imgScriptW(1)">
                       <p>prix : 170000 Ar </p>
                 </div>
               </section>
               <div class="center">
                <button class="bouton"><a href="./form.html">ACHETER</a></button>
               </div>
            </section>
		    <section id="products">
                <section class="article">
                    <div class="center">
                        <img src="../images/articles/IMG_20240306_202749.jpg" class="image" onclick="imgScriptW(2)">
                           <p>prix : 200000 Ar </p>
                     </div>
                   </section>
                   <div class="center">
                    <button class="bouton"><a href="./form.html">ACHETER</a></button>
                   </div>
            </section>
		    <section id="products">
                <section class="article">
                    <div class="center">
                        <img src="../images/articles/IMG_20240306_202719.jpg" class="image" onclick="imgScriptW(3)">
                           <p>prix : 160000 Ar </p>
                     </div>
                   </section>
                   <div class="center">
                    <button class="bouton"><a href="./form.html">ACHETER</a></button>
                   </div>
            </section>
		</div>
    <div class="Chaussure">
        <h3 class="titre">CHAUSSURES</h3>
        <section id="products">
            <section class="article">
                <div class="center">
                    <img src="../images/articles/IMG_20240305_210702.jpg" class="image" onclick="imgScriptW(4)">
                       <p>prix : 70000 Ar </p>
                 </div>
               </section>
               <div class="center">
                <button class="bouton"><a href="./form.html">ACHETER</a></button>
               </div>   
        </section>
		<section id="products">
            <section class="article">
                <div class="center">
                    <img src="../images/articles/IMG_20240306_203247.jpg" class="image" onclick="imgScriptW(5)">
                       <p>prix : 85000 Ar </p>
                 </div>
               </section>
               <div class="center">
                <button class="bouton"><a href="./form.html">ACHETER</a></button>
               </div>
        </section>
		<section id="products">
            <section class="article">
                <div class="center">
                    <img src="../images/articles/IMG_20240306_203203.jpg" class="image" onclick="imgScriptW(6)">
                       <p>prix : 65000 Ar </p>
                 </div>
               </section>
               <div class="center">
                <button class="bouton"><a href="./form.html">ACHETER</a></button>
               </div>
        </section>
		</div>`

    }

    else if (nbr == 1){
        chTml('.Robe', "../images/articles/IMG_20240306_202814.jpg", '170000');
        }
    else if (nbr == 2){
        chTml('.Robe', "../images/articles/IMG_20240306_202749.jpg", '200000');
        }
    else if (nbr == 3){
        chTml('.Robe', "../images/articles/IMG_20240306_202719.jpg", '160000');
        }
    else if (nbr == 4){
        chTml('.Chaussure', "../images/articles/IMG_20240305_210702.jpg", '70000');
    }
    else if (nbr == 5){
        chTml('.Chaussure', "../images/articles/IMG_20240306_203247.jpg", '85000');
    }
    else if (nbr == 6){
        chTml('.Chaussure', "../images/articles/IMG_20240306_203203.jpg", '65000');
    }
}