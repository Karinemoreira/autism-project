<template>
  <img alt="Autismo logo" class="logo" src="@/assets/autismo-2.webp" width="250px" />
  <div class="home">
    <div style="padding: 6px 0">
      <h1>O que é o Autismo?</h1>
      <div class="d-flex" style="padding: 6px">
        <p>
          O autismo na verdade é chamado de Transtorno do Espectro Autista (TEA). <br />
          Esse transtorno é baseado numa série de desordens no desenvolvimento que
          aparecem desde o nascimento ou no começo da infância. As crianças autistas podem
          apresentar algumas características diferentes das outras crianças. Como por
          exemplo: dificuldade na fala, ou mesmo não verbalizarem. Ou ainda, terem
          dificuldades na compreensão da fala de outras pessoas.
        </p>
      </div>
    </div>
    <img
      alt="Criança autista"
      class="img-regular"
      src="@/assets/crianca-autista1.jpg"
      width="250px"
    />
  </div>

  <nav style="display: flex; justify-content: center">
    <button class="button" type="button" @click="sinais = true">Sinais</button>
    <button class="button" type="button" @click="sinais = false">Níveis</button>
  </nav>
  <div style="display: flex; align-items: center">
    <div v-if="sinais">
      <p style="width: 650px; text-align: center; margin: 0 auto; padding: 10px 4px">
        <b
          >Apesar de todos esses sintomas, cada criança autista vai ser afetada e ter
          comportamentos diferentes:</b
        >
      </p>
      <div class="grid-container">
        <div class="grid-item">
          <img src="@/assets/sinais1.jpg" alt="Imagem Sinais 1" />
          <p>
            Algumas crianças autistas podem ter dificuldade para falar ou entender o que
            os outros dizem. Também podem não olhar nos olhos de outras pessoas ou podem
            não conseguir fazer amigos e brincar com outras crianças ficando mais
            excluídas em certos momentos.
          </p>
        </div>
        <div class="grid-item">
          <img src="@/assets/sinais2.jpg" alt="Imagem Sinais 2" />
          <p>
            As crianças autistas, muitas vezes fazes fazem os mesmos movimentos
            repetidamente, como balançar o corpo e girar objetos.
          </p>
        </div>
        <div class="grid-item">
          <img src="@/assets/sinais3.jpg" alt="Imagem Sinais 3" />
          <p>
            Algumas crianças podem gostar muito de um único assunto ou atividade, como por
            exemplo, aprender sobre países ou gostar muito de jogar algum jogo.
          </p>
        </div>
        <div class="grid-item">
          <img src="@/assets/sinais4.jpg" alt="Imagem Sinais 4" />
          <p>
            Crianças autistas podem ficar muito incomodadas com
            barulhos altos ou luzes muito fortes e brilhantes.
          </p>
        </div>
        <div class="grid-item">
          <img src="@/assets/sinais5.jpg" alt="Imagem Sinais 5" />
          <p>
            Também algumas crianças, ficam incomodadas com mudanças, como
            mudar um brinquedo ou algo que é tirado fora do lugar ou mudanças maiores
            como mudar de escola, mudar de casa e outras.
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <p style="width: 650px; text-align: center; margin: 0 auto; padding: 10px 4px">
        <b
          >O Autismo é considerado um espectro, justamente porque pode se manifestar em
          níveis diferentes de intensidade, e são caracterizados pelos seguintes níveis de
          suporte:</b
        >
      </p>
      <div class="grid-container">
        <div class="grid-item">
          <img src="@/assets/nivel1.jpg" alt="Imagem Nível 1 de suporte" />
          <p>
            <b>Nível 1 de suporte:</b> O apoio é necessário. A criança pode ter
            dificuldade em conversar e conviver com as pessoas, também tem mais
            dificuldade em entender regras, mas consegue funcionar de forma um pouco mais
            independente, mas ainda com um pouco de apoio.
          </p>
        </div>
        <div class="grid-item">
          <img src="@/assets/nivel2.jpg" alt="Imagem Nível 2 de suporte" />
          <p>
            <b>Nível 2 de suporte:</b> O apoio é maior e necessário. Neste nível,
            conseguimos perceber mais as dificuldades de conversar e se enturmar com as
            pessoas, elas podem ter comportamentos mais repetitivos e precisam de um apoio
            maior para fazer as atividades do dia.
          </p>
        </div>
        <div class="grid-item">
          <img src="@/assets/nivel3.jpg" alt="Imagem Nível 3 de suporte" />
          <p>
            <b>Nível 3 de suporte:</b> O apoio é muito maior e muito mais necessário. As
            crianças apresentam desafios mais sérios em se comunicar e interagir com os
            outros, além de terem os comportamentos repetitivos mais intensos. Elas
            precisam de um apoio mais presente em todas as atividades do dia e podem ter
            dificuldade com novas situações.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .logo {
    display: flex;
    align-self: center;
  }
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .home {
    display: flex;
    align-items: center;
  }
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */
  gap: 20px; /* Espaçamento entre as colunas */
  margin: 20px;
}

.grid-item {
  text-align: center;
  padding: 10px;
  border-radius: 8px;
}

.grid-item img {
  width: 200px; /* Ajuste o tamanho da imagem conforme necessário */
  margin-bottom: 10px; /* Espaçamento entre a imagem e o texto */
  border-radius: 8px;
}
</style>

<script setup>
import { ref } from "vue";

const sinais = ref(true);
</script>
