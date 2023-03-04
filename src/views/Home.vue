<script setup>

</script>

<template>
  <div style="padding: 0">
    <img class="imgHero" src="@/assets/img_hero.png" >

    <section id="sugestoes">
      <h1 id="tituloReceitas">receitas da  semana</h1>

      <div id="receitas">
        <div class="receita">
          <img class="imgReceitas" src="@/assets/risoto.png" >
          <h3>Risoto de abóbora</h3>
          <button>conferir</button>
        </div>

        <div class="receita">
          <img class="imgReceitas" src="@/assets/bolo-banana.png" >
          <h3>Risoto de abóbora</h3>
          <button>conferir</button>
        </div>

        <div class="receita">
          <img class="imgReceitas" src="@/assets/Rectangle 2.png" >
          <h3>Risoto de abóbora</h3>
          <button>conferir</button>
        </div>
      </div>
    </section>

    <section>
      <img class="imgHero" src="@/assets/image2.png" alt="">

      <div id="textoSection">
        <h1>Comer é viver</h1>
        <p>Receitas preparadas com muito carinho, para que você possa sentir o prazer de preprarar uma deliciosa refeição para sua familia.

Todas as receitas terá a lista de ingrediente indicando tudo que você precisa, além disso, terá as intruções de preparo. </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.imgHero {
  max-width: 100%;
}
#sugestoes {
  margin-block: 7vh;
}
#tituloReceitas {
  color: #FFA000;
  font-weight: 700;
  font-size: 2.4rem;
  text-align: center;
}

#receitas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: black;
}

.receita {
  display: grid;
  justify-items: center;
  margin: 4vw;

  /* max-width: 20vw; */
}
  .receita h3{
    padding-block: 5px;
  }

.imgReceitas {
  width: 245px;
  height: 242px;
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
}
button {
  background-color: #176902;
  width: 185px;
  height: 48px;
  border: none;
  color: aliceblue;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.5rem;
}

#textoSection {
  position: absolute;
  top: 25%;
  left: 10%;
  font-size: 1rem;
  color: #fff;
  text-align: left;
  width: 40%;
  max-width: 800px;
}

#textoSection h1 {
  font-weight: 700;
  font-size: 5vw;
  padding-block: 3vh;
}

@media (max-width: 400px) {
  h1 {
    font-size: 1.4rem;
  }
}
@media (max-width: 800px) {
  #textoSection {
    left: 0;
    top: 10%;
    width: 100%;
    text-align: center;
  }
  p {
    font-size: 3vw;
  }
}
</style>
