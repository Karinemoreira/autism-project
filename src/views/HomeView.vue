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
          <img src="@/assets/sinais1b.jpg" alt="Imagem Sinais 1b" />
          <p>
            Algumas crianças autistas podem ter dificuldade para falar ou entender o que
            os outros dizem.
          </p>
        </div>
        <div class="grid-item">
          <img src="@/assets/sinais1.jpg" alt="Imagem Sinais 1" />
          <p>
            Também podem não olhar nos olhos de outras pessoas ou podem não conseguir
            fazer amigos e brincar com outras crianças ficando mais excluídas em certos
            momentos.
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
            Crianças autistas podem ficar muito incomodadas com barulhos altos ou luzes
            muito fortes e brilhantes.
          </p>
        </div>
        <div class="grid-item">
          <img src="@/assets/sinais5.jpg" alt="Imagem Sinais 5" />
          <p>
            Também algumas crianças, ficam incomodadas com mudanças, como mudar um
            brinquedo ou algo que é tirado fora do lugar ou mudanças maiores como mudar de
            escola, mudar de casa e outras.
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
  <div class="home">
    <div style="padding: 6px 0">
      <h1>Autismo na Escola</h1>
      <div class="d-flex" style="padding: 6px">
        <p>
          A inclusão de crianças autistas nas escolas ainda é um grande desafio, apesar
          das leis que garantem esse direito. Muitas instituições não têm professores
          capacitados ou recursos adaptados, e por falta de conhecimento dos professores e
          comunidade escolar, a escola pode ter dificuldades em ser um espaço inclusivo.
          Não basta a criança autista estar na sala de aula; é preciso criar um ambiente
          acolhedor, com adaptações e suporte adequados onde a criança possa se
          desenvolver junto com os colegas. Sem isso, a inclusão se torna apenas uma
          integração superficial, afetando não só as crianças autistas, mas a escola como
          um todo, que perde a chance de ensinar empatia e convivência. <br />
        </p>
      </div>
    </div>
    <img
      alt="Criança autista na escola"
      class="img-regular"
      src="@/assets/autism-school.png"
      width="250px"
    />
  </div>
  <p style="width: 650px; text-align: center; margin: 0 auto; padding: 10px 4px">
    <b
      >Profissionais que atuam em sala de aula com crianças autistas frequentemente
      enfrentam diversas dificuldades. Algumas das principais incluem:</b
    >
  </p>
  <div class="grid-container">
    <div class="grid-item">
      <img src="@/assets/professor1.png" alt="Imagem Professor 1" />
      <p>
        <b>Compreensão do Transtorno:</b> Nem todos os educadores têm formação específica
        sobre o autismo, o que pode dificultar a compreensão das necessidades e
        comportamentos das crianças.
      </p>
    </div>
    <div class="grid-item">
      <img src="@/assets/autist1.png" alt="Imagem autista 1" />
      <p>
        <b>Comunicação:</b> Muitas crianças autistas têm desafios de comunicação, o que
        pode levar a mal-entendidos e frustrações tanto para os alunos quanto para os
        professores.
      </p>
    </div>
    <div class="grid-item">
      <img src="@/assets/autist2.png" alt="Imagem autista 2" />
      <p>
        <b>Comportamento Desafiador:</b> Algumas crianças podem apresentar comportamentos
        desafiadores, como crises de raiva ou resistência, o que pode ser difícil de
        gerenciar em um ambiente escolar.
      </p>
    </div>
    <div class="grid-item">
      <img src="@/assets/autist-family.png" alt="Imagem autista com a família" />
      <p>
        <b>Colaboração com Famílias:</b> Estabelecer uma comunicação eficaz e colaborativa
        com as famílias das crianças autistas é crucial, mas pode ser desafiador devido a
        diferentes expectativas ou estilos de comunicação.
      </p>
    </div>
    <div class="grid-item">
      <img src="@/assets/autist3.png" alt="Imagem autista 3" />
      <p>
        <b>Adaptação Curricular:</b> A necessidade de adaptar o currículo para atender às
        diferentes habilidades e estilos de aprendizagem das crianças autistas pode ser um
        esforço significativo para os professores.
      </p>
    </div>
    <div class="grid-item">
      <img src="@/assets/school-teachers.png" alt="Imagem Professores" />
      <p>
        <b>Recursos Limitados:</b> Muitas escolas podem não ter os recursos necessários,
        como apoio de profissionais especializados (terapeutas, psicólogos) ou materiais
        didáticos adequados.
      </p>
    </div>
  </div>
  <p style="width: 650px; text-align: center; margin: 0 auto; padding: 10px 4px">
    <b>
      Essas dificuldades podem impactar não só o aprendizado das crianças autistas, mas
      também o bem-estar e a motivação dos educadores.</b
    >
  </p>
  <div class="home">
    <div style="padding: 6px 0">
      <h1>Adaptações</h1>
      <div class="d-flex" style="padding: 6px">
        <p>
          A inclusão de crianças autistas na escola é fundamental para garantir seu
          desenvolvimento integral e sua participação ativa no ambiente escolar. Isso
          requer adaptações pedagógicas, estruturais e sociais que respeitem as
          características únicas de cada criança, como suas necessidades sensoriais, de
          comunicação e de interação. Tais ajustes vão desde o uso de ferramentas visuais
          para organização e ensino, até a criação de um ambiente acolhedor que promova a
          socialização e a aprendizagem em ritmo próprio. Essas iniciativas não apenas
          beneficiam os alunos autistas, mas também contribuem para a formação de uma
          comunidade escolar mais diversa, empática e inclusiva. <br />
        </p>
      </div>
    </div>
    <img
      alt="Símbolo autista na escola"
      class="img-regular"
      src="@/assets/adapt.jpg"
      width="250px"
    />
  </div>
  <p style="width: 650px; text-align: center; margin: 0 auto; padding: 10px 4px">
    <b
      >A inclusão de crianças autistas na sala de aula requer atividades planejadas para
      promover a interação social, estimular o aprendizado e respeitar as características
      únicas de cada criança. Aqui estão algumas ideias de atividades:</b
    >
  </p>
  <p style="margin: 15px">
    <i>1. Atividades para Desenvolvimento Social</i><br />
    <b>Histórias Sociais e Role-Playing:</b> Use histórias simples que ensinem regras
    sociais e habilidades interpessoais. Depois, encene com os alunos situações como pedir
    ajuda, dividir brinquedos ou fazer amigos. <br />
    <b>Círculo de Amigos:</b> Incentive os colegas a se reunirem para compartilhar
    experiências, com atividades simples como passar um objeto e dizer algo sobre si
    mesmos.<br /> <b>Jogos Cooperativos:</b> Brincadeiras como montar quebra-cabeças em equipe
    ou criar uma colagem coletiva promovem colaboração sem competição direta.<br /><br />
    <i>2. Adaptações Sensoriais</i><br />
    <b>Cantinho Calmante:</b> Inclua na sala um espaço com almofadas, fones de ouvido para
    abafar ruídos, brinquedos sensoriais e luz suave, onde a criança possa se regular se
    sentir sobrecarregada.<br /> <b>Atividades Sensorialmente Ricas:</b> Use materiais como
    areia, massinha de modelar ou água em atividades de arte ou ciência. Permita que a
    criança explore no próprio ritmo.<br /><br />
    <i>3. Ferramentas Visuais e Organização<br /></i> <b>Rotinas Visuais: </b>Crie um
    quadro com imagens ou pictogramas que mostrem a sequência das atividades do dia,
    ajudando a criança a se situar.<br /><b> Caixas de Tarefas Individualizadas:</b>
    Disponha tarefas simples em caixas numeradas, permitindo que a criança execute de
    forma autônoma. <br /><br />
    <i>4. Estímulo à Comunicação</i><br />
    <b>Jogos de Cartões ou Apps de Comunicação:</b> Use ferramentas como cartões de
    comunicação (PECS) ou aplicativos que incentivem a criança a expressar suas
    necessidades e desejos. <br />
    <b>Atividades de Histórias Colaborativas:</b> Monte histórias coletivas em que cada
    criança contribua com uma frase ou ideia, incentivando a comunicação.<br /><br />
    <i>5. Inclusão em Atividades Comuns</i> <br />
    <b>Parceria com Colegas:</b> Em atividades de grupo, escolha colegas que demonstrem
    empatia e paciência para trabalhar junto com a criança autista. <br />
    <b>Adaptação de Jogos e Dinâmicas:</b> Modifique brincadeiras, como "esconde-esconde"
    ou jogos de tabuleiro, para respeitar os limites sensoriais e comportamentais da
    criança. <br /><br />
    <i>6. Enriquecimento Acadêmico</i><br /><b> Uso de Tecnologia Assistiva:</b> Tablets
    ou computadores com jogos educativos ajudam a personalizar o ensino. <br />
    <b>Ensino Multissensorial:</b> Combine métodos visuais, auditivos e táteis para
    ensinar conteúdos como matemática ou leitura. Exemplo: contar usando objetos
    palpáveis. <br /><br />
    <i>7. Celebração das Diferenças</i> <br /><b>Dia da Diversidade:</b> Promova
    atividades que celebrem diferentes formas de ser, como desenhos, apresentações e
    leituras sobre inclusão.<br />
    <b>Livro ou Mural da Turma:</b> Crie um mural em que cada aluno compartilhe algo
    especial sobre si mesmo, ajudando a valorizar a singularidade.
  </p>
  <div class="home">
    <div style="padding: 6px 0; margin: 25px 0">
      <h1>Crises no Autismo</h1>
      <div class="d-flex" style="padding: 6px">
        <p>
          As crises agressivas no TEA, também chamadas de comportamentos desafiadores ou
          crises comportamentais, significam os episódios em que uma pessoa com autismo
          manifesta ações agressivas, como: atacar objetos, agredir e ferir a si próprio
          ou outras pessoas. Desse modo, esses casos podem existir por conta de diversas
          razões e podem variar se tratando da intensidade e duração. Vale salientar que,
          nem todos aqueles que possuem autismo, experimentam agressividades. Além disso,
          cada indivíduo é um ser único tanto em suas características quanto nos seus
          comportamentos.
        </p>
      </div>
    </div>
    <img
      alt="Criança autista em crise"
      class="img-regular"
      src="@/assets/autist4.png"
      width="250px"
    />
  </div>
  <h2>De onde vem as crises agressivas no TEA?</h2>
  <p>
    Pode-se dizer que, existem algumas razões no autismo que estão necessariamente ligadas
    à agressividade, como, por exemplo: dificuldade na verbalização das ideias, rigidez,
    inflexibilidade, dificuldade de adaptação a alterações, sons, cores, cheiros e dentre
    outros. <br />
    Diante disso, a agressividade pode iniciar quando o autista sente tantas coisas e tudo
    que a mesma consegue transmitir em palavras ou gestos lhe parece insuficiente.
    Portanto, também são os fatores da sensibilidade, geralmente causada pelas mudanças no
    ambiente que, para um ser neurotípico, podem passar despercebidos.
  </p>

  <h2 style="margin: 15px 0px 0px 0px">Como lidar com as crises agressivas no TEA?</h2>
  <p>
    Enfrentar situações de agressividade em indivíduos com autismo pode ser complexo, no
    entanto, há técnicas eficazes disponíveis para reduzir tais situações e confortar ao
    mesmo tempo.<br /><br /><i>Mantenha a serenidade</i><br />
    É fundamental manter a serenidade e evitar reações negativas ou agressivas diante do
    comportamento agressivo da pessoa com autismo. Então, responder de forma tranquila
    pode ser a solução.<br />
    <br />
    <i>Busque um lugar seguro</i><br />
    Agora, coloque em primeiro lugar a segurança do indivíduo com autismo e das demais
    pessoas presentes no local. Caso seja preciso, retire objetos que possam representar
    perigo ou afaste-se de situações que possam ser prejudiciais. <br />
    <br />
    <i> Observe os gatilhos</i><br />
    Identifique os estímulos que desencadeiam as crises agressivas. Isso pode incluir a
    observação de comportamentos recorrentes, variações na rotina ou situações sensoriais
    desconfortáveis. <br /><br /><i> Comunique-se de modo claro e direto</i> <br />
    Opte por uma comunicação direta e fácil de entender ao interagir com a pessoa autista
    durante e após a crise. Isto é, evite fornecer instruções complicadas e conceda um
    período adequado para que a pessoa se acalme e assimile as informações. <br /><br />
    <i>Entregue apoio e compreensão</i> <br />Por fim, demonstre empatia e compreensão em
    relação às dificuldades enfrentadas pela pessoa autista. Então, esteja presente e
    ofereça suporte, evitando qualquer forma de julgamento ou crítica.
  </p>
      <img
      style="width: 650px; text-align: center; margin: 0 auto; padding: 10px 4px; border-radius: 50%;"
      alt="Criança autista rodeada de pessoas"
      class="img-regular"
      src="@/assets/autistwpeople.png"
      width="250px"
    />
  <p style="width: 650px; text-align: center; margin: 0 auto; padding: 10px 4px">
    <b>
      Ademais, é crucial ter em mente que cada indivíduo com autismo é único, portanto, as
      abordagens de manejo podem variar de acordo com as necessidades específicas de cada
      um. A colaboração com profissionais especializados é essencial para elaborar um
      plano de suporte personalizado e eficaz.</b
    >
  </p>
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
