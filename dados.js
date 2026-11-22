/* ============ DADOS DE TODAS AS MATÉRIAS ============
   Jogo: em cada pergunta, a PRIMEIRA opção é a correta (a tela embaralha).
   Simulado: tipo marcar (a = índice certo) | escrever (aceita = respostas aceitas) | pintar (certas = índices). */
const VIS = {
  tabela1: `<table class="tabela"><caption>🍎 Fruta preferida da turma</caption>
    <tr><th>Fruta</th><th>Votos</th></tr>
    <tr><td>🍎 Maçã</td><td>8</td></tr><tr><td>🍌 Banana</td><td>5</td></tr>
    <tr><td>🍇 Uva</td><td>10</td></tr><tr><td>🍓 Morango</td><td>7</td></tr></table>
    <div class="fonte">Fonte: pesquisa feita na sala de aula.</div>`,
  tabela2: `<table class="tabela"><caption>🐠 Votação: nome do peixinho da turma</caption>
    <tr><th>Nome</th><th>Votos</th></tr>
    <tr><td>Nemo</td><td>6</td></tr><tr><td>Bolinha</td><td>9</td></tr><tr><td>Azul</td><td>4</td></tr></table>
    <div class="fonte">Fonte: votação da turma.</div>`,
  grafico1: (()=>{
    const d=[["Jan",4,"#3b82f6"],["Fev",6,"#ec4899"],["Mar",3,"#f97316"],["Abr",8,"#22c55e"]];
    const H=200,base=170,esc=17,left=40;
    let s=`<svg class="grafico" viewBox="0 0 360 230" role="img" aria-label="Gráfico de barras de livros lidos por mês">
      <text x="180" y="16" text-anchor="middle" font-weight="700" font-size="15" fill="#2e1065">📚 Livros lidos pela turma</text>`;
    for(let v=0;v<=9;v++){const y=base-v*esc;
      s+=`<line x1="${left}" x2="345" y1="${y}" y2="${y}" stroke="#ddd6fe" stroke-width="${v%2?1:1.5}"/>
          <text x="${left-8}" y="${y+4}" text-anchor="end" font-size="11" fill="#5b21b6">${v}</text>`;}
    d.forEach((b,i)=>{const x=left+18+i*76,h=b[1]*esc;
      s+=`<rect x="${x}" y="${base-h}" width="46" height="${h}" rx="6" fill="${b[2]}"/>
          <text x="${x+23}" y="${base+18}" text-anchor="middle" font-size="14" font-weight="600" fill="#2e1065">${b[0]}</text>`;});
    s+=`<line x1="${left}" x2="345" y1="${base}" y2="${base}" stroke="#2e1065" stroke-width="2"/>
      <text x="180" y="222" text-anchor="middle" font-size="11" fill="#6b7280">Fonte: biblioteca da escola</text></svg>`;
    return s;})(),
  teatro1: `<div class="teatro">
    <div class="cena">CENA 1 — Na cozinha da casa da Vovó Rosa. Manhã de sol.</div>
    <div><span class="per">JOÃO</span> <span class="rub">(entrando correndo, assustado)</span>: — Vovó! Tem um sapo dentro do meu tênis!</div>
    <div><span class="per">VOVÓ ROSA</span> <span class="rub">(rindo e secando as mãos no avental)</span>: — Calma, menino! Ele só queria um lugar quentinho.</div>
    <div><span class="per">JOÃO</span> <span class="rub">(cruzando os braços)</span>: — Pois que procure outro!</div></div>`
};

const FASES_PT = [
 { nome:"Quem é o Sujeito?", ico:"🙋‍♀️", cor:"#3b82f6", cor2:"#06b6d4", desc:"Descubra de quem a frase fala",
   resumo:[
    {t:"O que é o sujeito?",d:"É o ser (pessoa, bicho ou coisa) sobre quem a frase fala alguma coisa.",ex:"<b>A Lara</b> estuda muito.",c:"#3b82f6"},
    {t:"Truque da pergunta",d:"Pergunte ao verbo: <b>QUEM</b> ou <b>O QUE</b> + verbo?",ex:"Quem estuda? → A Lara",c:"#8b5cf6"},
    {t:"Núcleo do sujeito",d:"É a palavra mais importante dentro do sujeito.",ex:"O <b>gato</b> preto dormiu.",c:"#06b6d4"}],
   qs:[
    {q:"O <b>sujeito</b> de uma frase é…",o:["O ser sobre quem a frase fala alguma coisa","A ação que acontece na frase","O lugar onde tudo acontece","O sinal de pontuação do final"],h:"Pense: de QUEM a frase está falando?",e:"O sujeito é o ser (pessoa, animal ou coisa) sobre o qual se declara algo."},
    {q:"Na frase <em>“O cachorro latiu alto.”</em>, qual é o sujeito?",o:["O cachorro","latiu","alto","latiu alto"],h:"Pergunte ao verbo: quem latiu?",e:"Quem latiu? O cachorro! Então “O cachorro” é o sujeito."},
    {q:"Qual pergunta ajuda a encontrar o sujeito?",o:["Quem (ou o que) + verbo?","Onde?","Quando?","Como?"],h:"O sujeito é QUEM faz ou sofre a ação.",e:"Perguntar “quem?” ou “o que?” ao verbo sempre ajuda a achar o sujeito."},
    {q:"Na frase <em>“Nós vamos ao cinema hoje.”</em>, qual é o sujeito?",o:["Nós","ao cinema","hoje","vamos"],h:"Quem vai ao cinema?",e:"Quem vai? Nós. Pronomes como eu, tu, ele, nós, vocês também podem ser sujeito."},
    {q:"Na frase <em>“As meninas cantaram na festa.”</em>, qual é o sujeito?",o:["As meninas","cantaram","na festa","cantaram na festa"],h:"Quem cantou?",e:"Quem cantou? As meninas!"},
    {q:"Em <em>“Meu irmão mais velho comprou uma bicicleta.”</em>, qual é o <b>núcleo</b> do sujeito?",o:["irmão","Meu","velho","bicicleta"],h:"O núcleo é a palavra principal do sujeito “Meu irmão mais velho”.",e:"O sujeito é “Meu irmão mais velho” e a palavra mais importante dele é “irmão”."},
    {q:"Em <em>“Amanhã, os alunos do 5º ano visitarão o museu.”</em>, qual é o sujeito?",o:["os alunos do 5º ano","Amanhã","o museu","visitarão"],h:"Quem visitará o museu? (“Amanhã” indica tempo!)",e:"Quem visitará? Os alunos do 5º ano. “Amanhã” só diz quando."},
    {q:"Em <em>“Caiu uma chuva forte na cidade.”</em>, qual é o sujeito?",o:["uma chuva forte","na cidade","Caiu","forte"],h:"O sujeito pode vir DEPOIS do verbo! O que caiu?",e:"O que caiu? Uma chuva forte. Aqui o sujeito veio depois do verbo (sujeito posposto)."}
   ]},
 { nome:"Simples ou Composto?", ico:"👯", cor:"#ec4899", cor2:"#f472b6", desc:"Conte os núcleos do sujeito",
   resumo:[
    {t:"Sujeito SIMPLES",d:"Tem <b>um só núcleo</b> (mesmo que esteja no plural!).",ex:"Os <b>meninos</b> jogaram bola.",c:"#ec4899"},
    {t:"Sujeito COMPOSTO",d:"Tem <b>dois ou mais núcleos</b>.",ex:"<b>Ana</b> e <b>Pedro</b> jogaram bola.",c:"#f97316"},
    {t:"Sujeito OCULTO",d:"Não aparece escrito, mas o verbo mostra quem é.",ex:"Fomos ao parque. (nós)",c:"#8b5cf6"}],
   qs:[
    {q:"O sujeito <b>simples</b> tem…",o:["Apenas um núcleo","Dois ou mais núcleos","Nenhum núcleo","Sempre palavras no singular"],h:"Simples = um só!",e:"Sujeito simples tem um único núcleo."},
    {q:"O sujeito <b>composto</b> tem…",o:["Dois ou mais núcleos","Apenas um núcleo","Sempre palavras no plural","Nenhum verbo"],h:"Composto = mais de um.",e:"Sujeito composto tem dois ou mais núcleos."},
    {q:"<em>“Ana e Pedro jogaram bola.”</em> O sujeito é…",o:["Composto (Ana, Pedro)","Simples (Ana)","Simples (Pedro)","Não tem sujeito"],h:"Quantas pessoas jogaram? Conte os núcleos.",e:"Quem jogou? Ana e Pedro: dois núcleos = sujeito composto."},
    {q:"<em>“Os meninos jogaram bola.”</em> O sujeito é…",o:["Simples (núcleo: meninos)","Composto, porque está no plural","Composto (os, meninos)","Não tem sujeito"],h:"Cuidado! Plural NÃO quer dizer composto. Quantos núcleos há?",e:"Só existe um núcleo: “meninos”. Mesmo no plural, é sujeito simples!"},
    {q:"Em <em>“O gato e o rato correram pela casa.”</em>, quais são os núcleos do sujeito?",o:["gato e rato","o gato","casa","correram"],h:"Quem correu?",e:"Quem correu? O gato e o rato → núcleos: gato e rato."},
    {q:"Qual frase tem sujeito <b>composto</b>?",o:["Mamãe e titia fizeram um bolo.","A família toda fez um bolo.","Mamãe fez um bolo delicioso.","As tias fizeram um bolo."],h:"Procure a frase com dois núcleos ligados por “e”.",e:"“Mamãe e titia” tem dois núcleos. As outras têm só um núcleo cada."},
    {q:"<em>“A turma inteira aplaudiu o espetáculo.”</em> O sujeito é…",o:["Simples (núcleo: turma)","Composto (turma, inteira)","Composto (turma, espetáculo)","Oculto"],h:"“Inteira” só descreve a turma. Quantos núcleos há?",e:"O núcleo é só “turma”. Uma turma tem várias pessoas, mas é UMA palavra-núcleo."},
    {q:"<em>“Minha mãe, meu pai e minha avó viajaram.”</em> Quantos núcleos tem o sujeito?",o:["3","1","2","6"],h:"Conte as pessoas que viajaram.",e:"Mãe, pai e avó = 3 núcleos → sujeito composto."},
    {q:"<em>“Fomos ao parque no domingo.”</em> Qual é o sujeito?",o:["Oculto (nós) — o verbo mostra quem é","o parque","no domingo","Composto"],h:"Quem “fomos”? O verbo dá a pista!",e:"O sujeito não está escrito, mas “fomos” mostra que é “nós”: sujeito oculto."}
   ]},
 { nome:"Pegando o Predicado", ico:"🎯", cor:"#f97316", cor2:"#fb923c", desc:"Tudo o que se diz do sujeito",
   resumo:[
    {t:"O que é o predicado?",d:"É <b>tudo o que se diz</b> sobre o sujeito.",ex:"A Lara | <b>estuda para a prova</b>.",c:"#f97316"},
    {t:"O verbo mora aqui",d:"O predicado quase sempre tem um <b>verbo</b>.",ex:"Os pássaros <b>voaram</b> para o sul.",c:"#ef4444"},
    {t:"Dica esperta",d:"Ache o sujeito primeiro. O que sobrar é o predicado!",ex:"O sol | brilha forte.",c:"#eab308"}],
   qs:[
    {q:"O <b>predicado</b> é…",o:["Tudo o que se diz sobre o sujeito","A pessoa que pratica a ação","O título do texto","Só o sujeito da frase"],h:"É a parte da frase que conta algo do sujeito.",e:"Predicado é tudo aquilo que se declara sobre o sujeito."},
    {q:"Em <em>“O sol brilha forte.”</em>, qual é o predicado?",o:["brilha forte","O sol","sol brilha","forte"],h:"Primeiro ache o sujeito (o que brilha?). O resto é o predicado.",e:"Sujeito: “O sol”. Predicado: “brilha forte”."},
    {q:"Que palavra quase sempre aparece no predicado?",o:["O verbo","O artigo","O ponto de exclamação","O nome próprio"],h:"É a palavra que indica ação, estado ou fenômeno.",e:"O verbo é a peça principal do predicado."},
    {q:"Em <em>“As crianças brincavam no quintal.”</em>, qual é o predicado?",o:["brincavam no quintal","As crianças","no quintal","As crianças brincavam"],h:"Quem brincava? Tire essa parte e veja o que sobra.",e:"Sujeito: “As crianças”. Predicado: “brincavam no quintal”."},
    {q:"Qual é a divisão correta entre <b>sujeito | predicado</b>?",o:["A Lara | estuda para a prova.","A Lara estuda | para a prova.","A | Lara estuda para a prova.","A Lara estuda para | a prova."],h:"O sujeito é “quem estuda”. O verbo fica no predicado.",e:"Sujeito: “A Lara”. Predicado: “estuda para a prova”."},
    {q:"Em <em>“A professora explicou a lição com calma.”</em>, qual é o predicado?",o:["explicou a lição com calma","A professora","com calma","a lição"],h:"O predicado começa no verbo “explicou” e vai até o fim.",e:"Tudo que se diz da professora: “explicou a lição com calma”."},
    {q:"Qual é o <b>verbo</b> do predicado em <em>“Os pássaros voaram para o sul.”</em>?",o:["voaram","pássaros","sul","para"],h:"Qual palavra indica a ação?",e:"“Voaram” é o verbo — a ação que os pássaros fizeram."},
    {q:"Em <em>“Chegaram os convidados da festa.”</em>, qual é o predicado?",o:["Chegaram","os convidados da festa","Chegaram os convidados","da festa"],h:"O sujeito veio depois do verbo! Quem chegou?",e:"Sujeito: “os convidados da festa” (veio depois). Predicado: “Chegaram”."}
   ]},
 { nome:"Caça aos Dígrafos", ico:"🔤", cor:"#22c55e", cor2:"#4ade80", desc:"Duas letras, um só som",
   resumo:[
    {t:"O que é dígrafo?",d:"<b>Duas letras</b> que juntas fazem <b>um só som</b>.",ex:"<b>ch</b>uva, ca<b>rr</b>o, fi<b>lh</b>o",c:"#22c55e"},
    {t:"Os dígrafos",d:"ch, lh, nh, rr, ss, qu, gu, sc, sç, xc, xs — e vogal + m/n (am, en, in, on, um…).",ex:"ni<b>nh</b>o, na<b>sc</b>er, t<b>em</b>po",c:"#06b6d4"},
    {t:"Pegadinha do QU e GU",d:"Só é dígrafo se o <b>U não for pronunciado</b>.",ex:"<b>gu</b>itarra ✅ | á<b>gu</b>a ❌",c:"#ef4444"}],
   qs:[
    {q:"<b>Dígrafo</b> é…",o:["Duas letras que representam um só som","Duas vogais juntas na mesma sílaba","Uma letra com dois sons","Uma palavra com duas sílabas"],h:"“Di” = dois, “grafo” = escrita. Duas letras escritas…",e:"Dígrafo: duas letras, um único som (fonema)."},
    {q:"Qual palavra tem dígrafo?",o:["chuva","prato","blusa","flor"],h:"Procure duas letras que soam como uma só.",e:"Em “chuva”, o “ch” faz um único som. Em prato, blusa e flor há encontros consonantais (cada letra soa)."},
    {q:"Em <em>“carro”</em>, qual é o dígrafo?",o:["rr","ca","ar","ro"],h:"Duas letras iguais que fazem um som só.",e:"“rr” representa um único som."},
    {q:"Qual palavra tem o dígrafo <b>lh</b>?",o:["filho","leite","bola","clube"],h:"Procure o “l” seguido de “h”.",e:"Fi-<b>lh</b>o: “lh” é dígrafo."},
    {q:"Em <em>“nascer”</em>, qual é o dígrafo?",o:["sc","na","er","as"],h:"Duas consoantes que, juntas, soam como “s”.",e:"Em “nascer”, “sc” soa como um só “s”."},
    {q:"Quantas <b>letras</b> e quantos <b>sons</b> tem a palavra <em>“chave”</em>?",o:["5 letras e 4 sons","5 letras e 5 sons","4 letras e 4 sons","6 letras e 5 sons"],h:"c-h-a-v-e são as letras. “ch” vale um som só.",e:"5 letras (c,h,a,v,e) e 4 sons (ch-a-v-e), porque “ch” é dígrafo."},
    {q:"Qual palavra tem <b>dígrafo nasal</b> (vogal + m ou n com som só nasal)?",o:["tempo","tela","pato","rua"],h:"Fale devagar: em qual palavra o som sai pelo nariz?",e:"Em “t<b>em</b>po”, “em” forma um só som nasal: dígrafo vocálico."},
    {q:"Qual dupla de letras <b>NÃO</b> é dígrafo?",o:["gu em “água”","qu em “queijo”","gu em “guitarra”","nh em “ninho”"],h:"Leia em voz alta: em qual delas o U é pronunciado?",e:"Em “água”, o U é pronunciado (á-gua). Então não é dígrafo!"},
    {q:"Quantos dígrafos há em <em>“guerreiro”</em>?",o:["2 (gu e rr)","1","3","Nenhum"],h:"Procure o “gu” (U mudo) e duas letras repetidas.",e:"“gu” (u não pronunciado) e “rr” = 2 dígrafos."}
   ]},
 { nome:"Tabelas e Gráficos", ico:"📊", cor:"#06b6d4", cor2:"#3b82f6", desc:"Leia os números como detetive",
   resumo:[
    {t:"Tabela",d:"Organiza informações em <b>linhas</b> (deitadas) e <b>colunas</b> (em pé).",ex:"Fruta | Votos",c:"#3b82f6"},
    {t:"Gráfico",d:"Mostra números com desenhos: barras, linhas ou setores (pizza).",ex:"Barra maior = valor maior 📈",c:"#06b6d4"},
    {t:"Título e Fonte",d:"<b>Título</b> diz o assunto. <b>Fonte</b> diz de onde vieram os dados.",ex:"Fonte: pesquisa na sala",c:"#8b5cf6"}],
   qs:[
    {q:"Em uma tabela, as informações são organizadas em…",o:["Linhas e colunas","Rimas e versos","Atos e cenas","Parágrafos e títulos"],h:"Uma tabela parece uma grade…",e:"Tabelas têm linhas (horizontais) e colunas (verticais)."},
    {q:"Olhe a tabela. Qual fruta recebeu <b>mais votos</b>?",v:"tabela1",o:["Uva","Maçã","Morango","Banana"],h:"Procure o maior número na coluna “Votos”.",e:"A uva teve 10 votos, o maior número."},
    {q:"Quantos alunos votaram em <b>morango</b>?",v:"tabela1",o:["7","5","8","10"],h:"Ache a linha do morango e olhe a coluna dos votos.",e:"Na linha do morango está o número 7."},
    {q:"Olhe o gráfico. Em qual mês a turma leu <b>mais livros</b>?",v:"grafico1",o:["Abril","Janeiro","Fevereiro","Março"],h:"Qual é a barra mais alta?",e:"A barra de abril é a mais alta: 8 livros."},
    {q:"Para que serve o <b>título</b> de um gráfico ou tabela?",o:["Para dizer qual é o assunto das informações","Para enfeitar a página","Para mostrar quem desenhou","Para dar a resposta da conta"],h:"É a primeira coisa que lemos…",e:"O título informa sobre o que são os dados."},
    {q:"Quantos alunos votaram <b>ao todo</b>?",v:"tabela1",o:["30","25","28","10"],h:"Some todos os votos: 8 + 5 + 10 + 7.",e:"8 + 5 + 10 + 7 = 30 alunos."},
    {q:"Quantos livros a <b>mais</b> foram lidos em abril do que em março?",v:"grafico1",o:["5","3","8","11"],h:"Abril teve 8 e março teve 3. Faça a diferença.",e:"8 − 3 = 5 livros a mais."},
    {q:"Qual gráfico é o melhor para mostrar <b>partes de um todo</b>, como as fatias de uma pizza?",o:["Gráfico de setores (pizza)","Gráfico de barras","Gráfico de linha","Tabela de horários"],h:"O nome dele parece uma comida redonda 🍕",e:"O gráfico de setores divide um círculo em partes do todo."},
    {q:"O que a <b>Fonte</b> embaixo de uma tabela informa?",o:["De onde vieram as informações","O tamanho da letra","Quem venceu a votação","O dia da prova"],h:"“Fonte” é como a origem da água… e dos dados!",e:"A fonte mostra de onde os dados foram tirados (pesquisa, livro, site…)."}
   ]},
 { nome:"Texto Teatral", ico:"🎭", cor:"#8b5cf6", cor2:"#a855f7", desc:"Luz, câmera… ação no palco!",
   resumo:[
    {t:"Para que serve?",d:"É um texto escrito para ser <b>encenado</b> por atores no palco.",ex:"Peça de teatro 🎭",c:"#8b5cf6"},
    {t:"Falas e rubricas",d:"<b>Falas</b>: o que o personagem diz. <b>Rubricas</b>: indicações de gestos, emoções e cenário, entre parênteses.",ex:"JOÃO <i>(assustado)</i>: — Socorro!",c:"#f97316"},
    {t:"Atos e cenas",d:"A peça é dividida em <b>atos</b> e <b>cenas</b>. Geralmente <b>não tem narrador</b>.",ex:"CENA 1 — Na cozinha",c:"#ec4899"}],
   qs:[
    {q:"O texto teatral é escrito principalmente para…",o:["Ser encenado (representado) por atores","Ser cantado como música","Ensinar uma receita","Dar uma notícia no jornal"],h:"Pense no palco e na plateia 🎭",e:"O texto teatral é feito para ser representado em cena."},
    {q:"As <b>rubricas</b> de um texto teatral são…",o:["Indicações de gestos, emoções e cenário","As falas dos personagens","O nome do autor","O título da peça"],h:"Elas costumam aparecer entre parênteses.",e:"Rubricas orientam os atores: como falar, se mexer, onde está a cena."},
    {q:"Leia o trecho. A parte <em>(entrando correndo, assustado)</em> é…",v:"teatro1",o:["Uma rubrica","Uma fala","O título","Um narrador"],h:"Está entre parênteses e mostra como João entra.",e:"É uma rubrica: indica o movimento e a emoção do personagem."},
    {q:"Quantos <b>personagens</b> aparecem nesse trecho?",v:"teatro1",o:["2","1","3","4"],h:"Conte os nomes em letras maiúsculas (sem repetir).",e:"João e Vovó Rosa: 2 personagens."},
    {q:"Onde acontece a cena?",v:"teatro1",o:["Na cozinha da casa da Vovó Rosa","No quintal da escola","Dentro do tênis","Num teatro da cidade"],h:"Leia a primeira linha, logo depois de “CENA 1”.",e:"A indicação da cena diz: na cozinha da casa da Vovó Rosa."},
    {q:"Como a Vovó Rosa reage ao susto do João?",v:"teatro1",o:["Rindo","Chorando","Gritando de medo","Dormindo"],h:"Veja a rubrica ao lado do nome dela.",e:"A rubrica diz: (rindo e secando as mãos no avental)."},
    {q:"Um texto teatral costuma ser dividido em…",o:["Atos e cenas","Estrofes e versos","Capítulos e notas de rodapé","Linhas e colunas"],h:"“CENA 1” é uma dessas partes!",e:"Peças de teatro são divididas em atos e cenas."},
    {q:"Qual elemento <b>NÃO</b> costuma aparecer em um texto teatral?",o:["Um narrador contando toda a história","Rubricas","Falas dos personagens","Divisão em cenas"],h:"No teatro, a história aparece pelas falas dos personagens.",e:"Geralmente não há narrador: as falas e ações mostram a história."},
    {q:"Quem dá vida aos personagens no palco?",o:["Os atores","Os leitores","Os narradores","Os jornalistas"],h:"Eles se apresentam para a plateia.",e:"Os atores representam os personagens."}
   ]},
 { nome:"Grande Desafio", ico:"👑", cor:"#eab308", cor2:"#f97316", desc:"Mistura de tudo! Só para campeãs",
   resumo:[
    {t:"Mistura total!",d:"Perguntas de <b>todas as fases</b>, mais difíceis.",ex:"Sujeito + Predicado + Dígrafo + Gráfico + Teatro",c:"#eab308"},
    {t:"Lembre",d:"Plural não é composto. O sujeito pode vir depois do verbo.",ex:"Chegaram <b>os primos</b>.",c:"#ec4899"},
    {t:"Calma e atenção",d:"Leia duas vezes antes de responder. Use as dicas com sabedoria! 💡",ex:"Você consegue, Lara! 💪",c:"#22c55e"}],
   qs:[
    {q:"<em>“Os alunos e a professora fizeram uma peça de teatro.”</em> O sujeito é…",o:["Composto (alunos, professora)","Simples (alunos)","Simples (professora)","Oculto"],h:"Quantos núcleos há antes do verbo?",e:"Dois núcleos: alunos e professora → composto."},
    {q:"Em <em>“O filho do padeiro trouxe pães quentinhos.”</em>, o predicado é…",o:["trouxe pães quentinhos","O filho do padeiro","pães quentinhos","do padeiro"],h:"Ache o verbo e vá até o fim.",e:"Sujeito: “O filho do padeiro”. Predicado: “trouxe pães quentinhos”."},
    {q:"Quantos dígrafos há em <em>“passarinho”</em>?",o:["2 (ss e nh)","1","3","Nenhum"],h:"Procure letras repetidas e um “h” acompanhando.",e:"pa-<b>ss</b>a-ri-<b>nh</b>o: 2 dígrafos."},
    {q:"Em <em>“Brincaram no pátio Júlia e Marcos.”</em>, o sujeito é…",o:["Júlia e Marcos","no pátio","Brincaram","pátio"],h:"Quem brincou? Olhe depois do verbo!",e:"Quem brincou? Júlia e Marcos — sujeito composto e posposto."},
    {q:"Olhe a tabela. Quantos votos a <b>menos</b> o nome “Azul” teve em relação a “Bolinha”?",v:"tabela2",o:["5","4","9","13"],h:"Bolinha teve 9, Azul teve 4.",e:"9 − 4 = 5 votos a menos."},
    {q:"Qual palavra tem <b>dígrafo</b> E <b>encontro consonantal</b> (duas consoantes com sons diferentes)?",o:["trilha","chave","bola","prato"],h:"Procure “tr” (dois sons) junto de “lh” (um som).",e:"Em “trilha”: “tr” é encontro consonantal e “lh” é dígrafo."},
    {q:"Qual frase tem sujeito <b>simples</b>?",o:["Os primos chegaram cedo.","O pai e o filho pescaram.","Eu e você somos amigos.","Cachorros e gatos dormiam."],h:"Procure a frase com um núcleo só (mesmo no plural).",e:"“Os primos” tem um núcleo só: primos."},
    {q:"Em <em>“As flores amarelas do jardim murcharam.”</em>, qual é o núcleo do sujeito?",o:["flores","amarelas","jardim","murcharam"],h:"O que murchou? Qual é a palavra principal?",e:"O núcleo é “flores”; “amarelas” e “do jardim” só a caracterizam."},
    {q:"Em um texto teatral, <em>MARIA (sussurrando): — Não conte a ninguém!</em> A palavra “sussurrando” indica…",o:["Como a personagem deve falar","O lugar da cena","O nome da peça","Quem é o narrador"],h:"Está entre parênteses: é uma rubrica.",e:"A rubrica “sussurrando” orienta a atriz a falar baixinho."},
    {q:"Qual destas palavras <b>NÃO</b> tem dígrafo?",o:["quadro","queijo","banho","osso"],h:"Fale “quadro” em voz alta: o U aparece no som?",e:"Em “quadro” o U é pronunciado (qua-dro), então “qu” não é dígrafo. Já queijo (qu), banho (nh) e osso (ss) têm dígrafo."}
   ]}
];

const SIM_PT = [
 {tipo:"marcar",ass:"Sujeito",enun:"Na frase <em>“O cachorro do vizinho latiu a noite toda.”</em>, o sujeito é:",
  alts:["latiu a noite toda","O cachorro do vizinho","a noite toda","do vizinho"],a:1,
  dica:"Pergunte ao verbo: quem latiu?",exp:"Quem latiu? “O cachorro do vizinho”."},
 {tipo:"pintar",ass:"Sujeito composto",enun:"🖍️ <b>Pinte</b> todas as palavras do <b>sujeito</b> da frase:",
  pecas:["A","menina","e","o","irmão","foram","à","praia."],certas:[0,1,2,3,4],
  dica:"Quem foi à praia? São duas pessoas!",exp:"Sujeito composto: “A menina e o irmão”."},
 {tipo:"escrever",ass:"Sujeito",enun:"✏️ <b>Escreva</b> o <b>núcleo</b> do sujeito da frase <em>“Os pássaros coloridos cantavam no jardim.”</em>",
  aceita:["passaros"],mostrar:"pássaros",dica:"Qual é a palavra mais importante do sujeito “Os pássaros coloridos”?",exp:"O núcleo é “pássaros”."},
 {tipo:"marcar",ass:"Simples ou composto",enun:"Em <em>“Os alunos fizeram um cartaz.”</em>, o sujeito é:",
  alts:["Composto, porque está no plural","Simples, com o núcleo “alunos”","Composto, com os núcleos “alunos” e “cartaz”","Oculto"],a:1,
  dica:"Plural não quer dizer composto! Quantos núcleos existem?",exp:"Só um núcleo (alunos): sujeito simples."},
 {tipo:"pintar",ass:"Predicado",enun:"🖍️ <b>Pinte</b> o <b>predicado</b> da frase:",
  pecas:["Lara","estuda","para","a","prova","de","Português."],certas:[1,2,3,4,5,6],
  dica:"Primeiro ache o sujeito. Tudo o que sobra é o predicado!",exp:"Sujeito: “Lara”. Predicado: “estuda para a prova de Português”."},
 {tipo:"escrever",ass:"Dígrafos",enun:"✏️ <b>Escreva</b> o dígrafo da palavra <em>“chuva”</em>.",
  aceita:["ch"],dica:"São duas letras que juntas fazem um som só, no começo da palavra.",exp:"O dígrafo é “ch”."},
 {tipo:"pintar",ass:"Dígrafos",letras:true,enun:"🖍️ <b>Pinte as letras</b> que formam os <b>dígrafos</b> da palavra <em>passarinho</em>:",
  pecas:"passarinho".split(""),certas:[2,3,7,8],
  dica:"São dois dígrafos: duas letras repetidas e um “h” com companhia.",exp:"pa<b>ss</b>ari<b>nh</b>o → dígrafos “ss” e “nh”."},
 {tipo:"marcar",ass:"Tabelas",visual:VIS.tabela1,enun:"Observe a tabela. Quantos alunos votaram <b>ao todo</b>?",
  alts:["25","28","30","10"],a:2,dica:"Some: 8 + 5 + 10 + 7.",exp:"8 + 5 + 10 + 7 = 30 alunos."},
 {tipo:"escrever",ass:"Gráficos",visual:VIS.grafico1,numero:true,enun:"✏️ Observe o gráfico. <b>Escreva</b> quantos livros a turma leu em <b>fevereiro</b>.",
  aceita:["6","seis"],dica:"Ache a barra de “Fev” e olhe o número na linha do lado esquerdo.",exp:"A barra de fevereiro chega no 6."},
 {tipo:"pintar",ass:"Texto teatral",enun:"🖍️ No trecho de teatro abaixo, <b>pinte a rubrica</b> (a indicação de como o personagem age):",
  pecas:["JOÃO","(entrando correndo, assustado)",":","— Vovó! Tem um sapo no meu tênis!"],certas:[1],
  dica:"A rubrica costuma ficar entre parênteses.",exp:"A rubrica é “(entrando correndo, assustado)”."}
];

/* ===== VISUAIS EXTRAS ===== */
VIS.duplaEntrada = `<table class="tabela"><caption>🍐 Fruta preferida da turma</caption>
<tr><th>Fruta</th><th>Meninas</th><th>Meninos</th></tr>
<tr><td>🍐 Pera</td><td>2</td><td>3</td></tr>
<tr><td>🍌 Banana</td><td>4</td><td>5</td></tr>
<tr><td><b>Total</b></td><td><b>6</b></td><td><b>8</b></td></tr></table>
<div class="fonte">Fonte: pesquisa feita na sala de aula.</div>`;
VIS.conta = (a,b) => `<div style="display:flex;justify-content:center;margin:6px 0"><div style="display:grid;grid-template-columns:auto auto;font-size:38px;font-weight:700;background:#fff;border-radius:16px;padding:10px 26px;box-shadow:0 4px 0 rgba(0,0,0,.08)">
<div style="padding:0 16px 0 0;color:#7c3aed">${a}</div><div style="border-left:4px solid #ec4899;border-bottom:4px solid #ec4899;padding:0 18px;color:#ec4899">${b}</div>
<div></div><div style="padding:0 18px;color:#9ca3af">?</div></div></div>`;

/* ===== HISTÓRIA ===== */
const FASES_HIST = [
 { nome:"Patrimônio Material e Imaterial", ico:"🏛️", cor:"#b45309", cor2:"#f59e0b", desc:"O que dá e o que não dá para tocar",
   resumo:[
    {t:"Patrimônio MATERIAL",d:"Formado por elementos físicos que <b>podemos tocar</b>: construções, monumentos, objetos.",ex:"Uma igreja antiga, uma estátua",c:"#b45309"},
    {t:"Patrimônio IMATERIAL",d:"Formado por saberes, festas, tradições e práticas que <b>não podemos tocar</b>.",ex:"Roda de capoeira, frevo, festa junina",c:"#ec4899"},
    {t:"IPHAN",d:"Órgão do governo encarregado de <b>proteger e preservar</b> o patrimônio material e imaterial do Brasil.",ex:"Instituto do Patrimônio Histórico e Artístico Nacional",c:"#3b82f6"}],
   qs:[
    {q:"O que é <b>patrimônio material</b>?",o:["Elementos físicos que podemos tocar, como construções e monumentos","Festas e tradições que não podemos tocar","Lembranças pessoais de cada um","Somente as pessoas de uma cidade"],h:"“Material” lembra matéria: algo que dá para pegar.",e:"Patrimônio material é formado por coisas físicas: prédios, monumentos, objetos."},
    {q:"O que é <b>patrimônio imaterial</b>?",o:["Saberes, festas, tradições e práticas que não podemos tocar","Prédios antigos da cidade","Estátuas das praças","Objetos guardados no museu"],h:"“Imaterial” = não é matéria, não dá para pegar.",e:"Imaterial são as práticas culturais: danças, festas, modos de fazer, músicas."},
    {q:"Qual destes é patrimônio <b>imaterial</b>?",o:["A roda de capoeira","Uma igreja antiga","Uma estátua de bronze","Um casarão histórico"],h:"Qual deles é uma prática, e não um objeto?",e:"A roda de capoeira é uma tradição: patrimônio imaterial reconhecido no Brasil."},
    {q:"Qual destes é patrimônio <b>material</b>?",o:["Um monumento na praça da cidade","Uma festa junina","Uma receita de família","Uma dança típica"],h:"Qual deles você consegue tocar com a mão?",e:"O monumento é físico, dá para tocar: patrimônio material."},
    {q:"O <b>IPHAN</b> é…",o:["Um órgão do governo que protege e preserva o patrimônio material e imaterial","Um museu de arte moderna","Uma festa popular do Nordeste","Um tipo de monumento natural"],h:"Ele trabalha para cuidar do patrimônio do Brasil.",e:"O IPHAN é o órgão do governo encarregado de proteger e preservar nosso patrimônio."},
    {q:"O <b>frevo</b>, dança típica de Pernambuco, é um patrimônio…",o:["Imaterial, porque é uma prática cultural","Material, porque dá para ver","Natural, porque é da natureza","Não é patrimônio"],h:"Uma dança dá para segurar na mão?",e:"O frevo é uma dança, uma tradição: patrimônio imaterial."},
    {q:"Por que é importante proteger o patrimônio?",o:["Para preservar a história e a memória do povo para as próximas gerações","Para poder vender os prédios","Para derrubar construções velhas","Para esconder a história"],h:"Pense nas crianças que ainda vão nascer…",e:"Proteger o patrimônio guarda a nossa história para o futuro."}
   ]},
 { nome:"Museus: Acervo e Curadores", ico:"🖼️", cor:"#0d9488", cor2:"#14b8a6", desc:"Quem cuida das coisas do museu",
   resumo:[
    {t:"Acervo",d:"É o <b>conjunto</b> de todos os objetos, documentos, livros, quadros ou fotografias de um museu.",ex:"Fotos antigas, cartas, roupas de época",c:"#0d9488"},
    {t:"Curadores",d:"São os <b>responsáveis por organizar e selecionar</b> o conteúdo das exposições.",ex:"Escolhem o que vai para cada sala",c:"#8b5cf6"},
    {t:"Para que serve o museu?",d:"Guardar, estudar e mostrar objetos que contam a história.",ex:"Museu = memória guardada 🗝️",c:"#f97316"}],
   qs:[
    {q:"O <b>acervo</b> de um museu é…",o:["O conjunto de objetos, documentos, livros, quadros e fotografias que ele guarda","A pessoa que limpa o museu","O ingresso para entrar","O prédio vazio"],h:"É tudo aquilo que o museu guarda.",e:"Acervo é o conjunto de todos os itens guardados pelo museu."},
    {q:"Os <b>curadores</b> de um museu são…",o:["As pessoas responsáveis por organizar e selecionar o conteúdo das exposições","Os visitantes do museu","Os objetos mais antigos","Os seguranças da porta"],h:"“Curar” aqui é cuidar e escolher.",e:"Curadores organizam e selecionam o que será exposto."},
    {q:"Qual destes itens poderia fazer parte do <b>acervo</b> de um museu?",o:["Uma fotografia antiga da cidade","O pipoqueiro da porta","A fila de entrada","O estacionamento"],h:"Qual é um objeto que conta uma história?",e:"Uma fotografia antiga é um documento histórico: faz parte do acervo."},
    {q:"Uma pessoa escolhe quais quadros vão para a exposição e em que ordem. Ela é…",o:["Curadora","Turista","Bilheteira","Visitante"],h:"Quem organiza e seleciona?",e:"Quem seleciona e organiza a exposição é o curador ou a curadora."},
    {q:"Para que servem os <b>museus</b>?",o:["Para guardar, estudar e mostrar objetos que contam a história","Só para vender lembrancinhas","Para jogar fora coisas velhas","Para guardar comida"],h:"Pense no que você vê quando visita um museu.",e:"Museus preservam e mostram a história para as pessoas."},
    {q:"Um diário escrito por uma criança há 100 anos, guardado no museu, é…",o:["Parte do acervo do museu (um documento histórico)","Lixo","Um patrimônio natural","Um curador"],h:"Ele está guardado no museu junto com outros itens…",e:"O diário é um documento histórico e faz parte do acervo."}
   ]},
 { nome:"Memória e Monumentos", ico:"🗿", cor:"#7c3aed", cor2:"#a855f7", desc:"Lembranças minhas e de todos",
   resumo:[
    {t:"Memória INDIVIDUAL",d:"São <b>lembranças pessoais</b> de cada um.",ex:"O dia em que aprendi a andar de bicicleta 🚲",c:"#7c3aed"},
    {t:"Memória COLETIVA",d:"São lembranças <b>compartilhadas</b> por um grupo de pessoas ou por toda uma comunidade.",ex:"A festa da cidade que todos comemoram 🎉",c:"#ec4899"},
    {t:"Natural x Cultural",d:"<b>Natural</b>: feito pela natureza. <b>Cultural/histórico</b>: feito pelas pessoas, ajuda a preservar a memória coletiva.",ex:"Chapada dos Guimarães ⛰️ | Monumento 🗽",c:"#22c55e"}],
   qs:[
    {q:"<b>Memória individual</b> é…",o:["Lembranças pessoais de cada um","Lembranças de toda uma comunidade","Um monumento da cidade","Um museu"],h:"“Individual” = de um indivíduo, uma pessoa só.",e:"Memória individual são as lembranças pessoais de cada pessoa."},
    {q:"Lembrar do dia em que aprendeu a andar de bicicleta é uma memória…",o:["Individual","Coletiva","Natural","Material"],h:"É uma lembrança só sua ou da cidade inteira?",e:"É uma lembrança pessoal: memória individual."},
    {q:"<b>Memória coletiva</b> é…",o:["Lembranças compartilhadas por um grupo de pessoas ou por uma comunidade","Lembranças só minhas","Um sonho que eu tive","Um objeto do museu"],h:"“Coletiva” = de um grupo, de muitos.",e:"Memória coletiva é aquilo que um grupo lembra junto."},
    {q:"A festa tradicional que a cidade inteira comemora todo ano faz parte da memória…",o:["Coletiva","Individual","Natural","Secreta"],h:"Quantas pessoas participam e lembram dessa festa?",e:"A cidade inteira compartilha essa lembrança: memória coletiva."},
    {q:"A <b>Chapada dos Guimarães</b> é um exemplo de patrimônio…",o:["Natural","Imaterial","Individual","Construído pelas pessoas"],h:"Montanhas, cachoeiras e paredões… quem fez?",e:"A Chapada foi formada pela natureza: patrimônio natural."},
    {q:"Um monumento construído para lembrar um fato importante é um patrimônio…",o:["Cultural (histórico) e material","Natural","Imaterial","Individual"],h:"Foi feito pelas pessoas e dá para tocar.",e:"Monumento histórico: feito pelas pessoas (cultural) e físico (material)."},
    {q:"Como os monumentos ajudam a <b>memória coletiva</b>?",o:["Fazem a comunidade lembrar de fatos e pessoas importantes da sua história","Servem só de enfeite","Fazem as pessoas esquecerem o passado","Guardam segredos individuais"],h:"Para que alguém constrói um monumento?",e:"Monumentos lembram a comunidade da sua história."}
   ]},
 { nome:"Grande Desafio da História", ico:"👑", cor:"#eab308", cor2:"#f97316", desc:"Mistura de tudo + prédios antigos",
   resumo:[
    {t:"Preservação e adaptação",d:"Prédios antigos podem ganhar um <b>novo uso</b>, mantendo a história.",ex:"Uma estação de trem que virou museu 🚂➜🖼️",c:"#eab308"},
    {t:"Exposição e educação",d:"Mostrar o patrimônio ensina as pessoas sobre o passado.",ex:"Visitas da escola ao museu",c:"#3b82f6"},
    {t:"Lembre",d:"Material = toca. Imaterial = não toca. Natural = feito pela natureza.",ex:"Você consegue! 💪",c:"#22c55e"}],
   qs:[
    {q:"Uma antiga estação de trem virou um centro cultural. Isso é um exemplo de…",o:["Preservação e adaptação de um prédio antigo, com novo uso","Destruição do patrimônio","Patrimônio imaterial","Memória individual"],h:"O prédio continua lá, mas agora serve para outra coisa.",e:"Dar novo uso a um prédio antigo preserva a história (ex.: a Estação da Luz, em SP, abriga o Museu da Língua Portuguesa)."},
    {q:"Por que é bom dar um novo uso a prédios antigos?",o:["Para manter a história viva e o prédio cuidado","Para apagar o passado","Porque prédios antigos são feios","Para ninguém mais entrar"],h:"Prédio usado é prédio cuidado…",e:"Com novo uso, o prédio é conservado e a história continua sendo contada."},
    {q:"Qual opção mostra um patrimônio <b>material</b> e um <b>imaterial</b>, nessa ordem?",o:["Um casarão antigo e o samba de roda","O samba de roda e um casarão antigo","Uma festa e uma dança","Uma estátua e um prédio"],h:"Primeiro algo que se toca, depois algo que não se toca.",e:"Casarão = material. Samba de roda = imaterial."},
    {q:"Quem organiza a exposição de fotos antigas no museu da cidade?",o:["Os curadores","O patrimônio natural","A memória coletiva","Os visitantes"],h:"Quem seleciona e organiza o conteúdo?",e:"Os curadores organizam e selecionam o que será exposto."},
    {q:"As <b>Cataratas do Iguaçu</b> são um patrimônio…",o:["Natural","Imaterial","Individual","Construído pelas pessoas"],h:"Quem fez as quedas d'água?",e:"As cataratas foram formadas pela natureza: patrimônio natural."},
    {q:"O modo de fazer o acarajé das baianas é patrimônio <b>imaterial</b> porque…",o:["É um saber e uma tradição, não um objeto que se toca","É feito de pedra","Fica dentro de um museu","É uma montanha"],h:"O que é protegido: o bolinho ou o jeito de fazer?",e:"O ofício das baianas de acarajé é um saber tradicional: patrimônio imaterial."},
    {q:"Uma exposição sobre a história do bairro, num prédio antigo, ajuda a…",o:["Educar as pessoas sobre a história do lugar","Destruir o prédio","Esconder as fotos antigas","Apagar a memória coletiva"],h:"Exposição e educação andam juntas.",e:"Exposições educam e fortalecem a memória coletiva."}
   ]}
];

/* ===== CIÊNCIAS ===== */
const FASES_CIEN = [
 { nome:"Rotação: Dias e Noites", ico:"🌍", cor:"#2563eb", cor2:"#06b6d4", desc:"A Terra girando como um pião",
   resumo:[
    {t:"Rotação",d:"A Terra <b>gira em torno de si mesma</b>, como um pião. Uma volta dura cerca de <b>24 horas</b>.",ex:"1 volta = 1 dia",c:"#2563eb"},
    {t:"Dia e noite",d:"O lado virado para o Sol fica <b>de dia</b>. O outro lado fica <b>de noite</b>.",ex:"☀️ dia | 🌙 noite",c:"#f97316"},
    {t:"Caminho do Sol",d:"O Sol <b>nasce no leste</b>, fica no ponto mais alto perto do meio-dia e <b>se põe no oeste</b>.",ex:"🌅 Leste ➜ ☀️ ➜ 🌇 Oeste",c:"#eab308"}],
   qs:[
    {q:"O movimento de <b>rotação</b> é quando a Terra…",o:["Gira em torno de si mesma","Gira ao redor do Sol","Gira ao redor da Lua","Fica parada"],h:"Pense num pião girando no mesmo lugar.",e:"Na rotação, a Terra gira em torno do seu próprio eixo."},
    {q:"Quanto tempo a Terra leva para dar uma volta em torno de si mesma?",o:["Cerca de 24 horas","365 dias","1 semana","1 mês"],h:"É o tempo de um dia inteiro.",e:"A rotação dura cerca de 24 horas: um dia."},
    {q:"O movimento de rotação causa…",o:["Os dias e as noites","As estações do ano","As fases da Lua","As chuvas"],h:"Enquanto gira, cada lado fica uma hora de frente para o Sol…",e:"Girando, os lados da Terra se alternam entre luz (dia) e sombra (noite)."},
    {q:"De que lado o Sol <b>nasce</b>?",o:["Leste","Oeste","Norte","Sul"],h:"É o lado também chamado de “nascente”.",e:"O Sol nasce no leste."},
    {q:"Onde o Sol <b>se põe</b>?",o:["Oeste","Leste","Norte","Sul"],h:"É o lado também chamado de “poente”.",e:"O Sol se põe no oeste."},
    {q:"Quando é dia no Brasil, o lado da Terra virado para o Sol…",o:["Está iluminado (dia), e o lado oposto está de noite","Está todo escuro","É noite no planeta inteiro","Não recebe luz"],h:"O Sol ilumina só a metade da Terra de cada vez.",e:"Metade da Terra fica iluminada (dia) e a outra metade, no escuro (noite)."},
    {q:"Por volta do meio-dia, o Sol está…",o:["No ponto mais alto do céu","Nascendo","Se pondo","Escondido atrás da Lua"],h:"É quando sua sombra fica bem pequenininha.",e:"Perto do meio-dia o Sol atinge o ponto mais alto do céu."}
   ]},
 { nome:"Translação e Estações", ico:"☀️", cor:"#ea580c", cor2:"#facc15", desc:"A grande volta ao redor do Sol",
   resumo:[
    {t:"Translação",d:"Volta completa da Terra <b>ao redor do Sol</b>: <b>365 dias e 6 horas</b>.",ex:"A cada 4 anos: ano bissexto (366 dias)",c:"#ea580c"},
    {t:"Estações do ano",d:"Acontecem por causa da <b>inclinação do eixo</b> da Terra durante a translação.",ex:"🌸 Primavera ☀️ Verão 🍂 Outono ❄️ Inverno",c:"#22c55e"},
    {t:"Solstício x Equinócio",d:"<b>Solstício</b>: dia mais longo ou mais curto do ano. <b>Equinócio</b>: dia e noite com a mesma duração.",ex:"Equi = igual ⚖️",c:"#8b5cf6"}],
   qs:[
    {q:"<b>Translação</b> é o movimento que a Terra faz…",o:["Ao redor do Sol","Em torno de si mesma","Ao redor da Lua","Dentro do Sol"],h:"É uma volta grande, em volta de uma estrela.",e:"Na translação, a Terra dá a volta ao redor do Sol."},
    {q:"Quanto tempo dura uma volta completa da Terra ao redor do Sol?",o:["365 dias e 6 horas","24 horas","30 dias","12 horas"],h:"É o tempo de um ano.",e:"A translação dura 365 dias e 6 horas, cerca de um ano."},
    {q:"As 6 horas que sobram em cada ano formam, a cada 4 anos, um dia a mais. Esse ano se chama…",o:["Ano bissexto (366 dias)","Ano solar","Equinócio","Ano lunar"],h:"6 + 6 + 6 + 6 = 24 horas = 1 dia extra em fevereiro!",e:"A cada 4 anos temos o ano bissexto, com 366 dias (29 de fevereiro)."},
    {q:"O que causa as <b>estações do ano</b>?",o:["A inclinação do eixo da Terra durante a translação","A Lua","As nuvens","A rotação de 24 horas"],h:"A Terra é “tortinha” enquanto viaja em volta do Sol.",e:"Por causa da inclinação, cada parte da Terra recebe mais ou menos luz em cada época."},
    {q:"Quais são as 4 estações do ano?",o:["Primavera, verão, outono e inverno","Dia, noite, tarde e manhã","Nova, crescente, cheia e minguante","Norte, sul, leste e oeste"],h:"Flores, calor, folhas caindo e frio…",e:"Primavera 🌸, verão ☀️, outono 🍂 e inverno ❄️."},
    {q:"No <b>equinócio</b>…",o:["O dia e a noite têm quase a mesma duração","O dia é o mais longo do ano","Não existe noite","A Lua some do céu"],h:"“Equi” quer dizer igual.",e:"No equinócio, dia e noite duram quase o mesmo tempo."},
    {q:"No <b>solstício de verão</b>…",o:["Acontece o dia mais longo do ano","Acontece a noite mais longa do ano","Dia e noite são iguais","Neva no Brasil inteiro"],h:"No verão o Sol fica mais tempo no céu.",e:"O solstício de verão tem o dia mais longo do ano."}
   ]},
 { nome:"A Terra e o Universo", ico:"🌙", cor:"#4f46e5", cor2:"#818cf8", desc:"Lua, mapas e a Terra azul",
   resumo:[
    {t:"Fases da Lua",d:"A Lua tem <b>4 fases</b>: nova, crescente, cheia e minguante. Às vezes dá para ver a Lua <b>de dia</b>!",ex:"🌑 ➜ 🌓 ➜ 🌕 ➜ 🌗",c:"#4f46e5"},
    {t:"Representar a Terra",d:"A Terra tem formato <b>arredondado</b>. Podemos representá-la com o <b>globo terrestre</b>, o <b>mapa-múndi</b> e <b>imagens de satélite</b>.",ex:"🌐 🗺️ 🛰️",c:"#06b6d4"},
    {t:"A Terra é azul!",d:"Na corrida espacial, o cosmonauta <b>Yuri Gagarin</b> viu a Terra do espaço e disse que ela é azul — por causa da <b>água</b>.",ex:"Cerca de 70% da superfície é água 💧",c:"#2563eb"}],
   qs:[
    {q:"Quantas fases principais a Lua tem?",o:["4","2","7","12"],h:"Nova, crescente, cheia e…",e:"São 4 fases: nova, crescente, cheia e minguante."},
    {q:"Qual é a <b>ordem certa</b> das fases da Lua?",o:["Nova → Crescente → Cheia → Minguante","Cheia → Nova → Crescente → Minguante","Nova → Minguante → Crescente → Cheia","Crescente → Nova → Cheia → Minguante"],h:"Ela começa escondida, vai crescendo, fica cheia e depois diminui.",e:"🌑 Nova → 🌓 Crescente → 🌕 Cheia → 🌗 Minguante."},
    {q:"Na fase de Lua <b>cheia</b>, vemos…",o:["A Lua toda iluminada, redondinha","A Lua toda escura","Só um fiozinho de Lua","Nenhuma Lua"],h:"Cheia = completa.",e:"Na Lua cheia vemos o disco todo iluminado 🌕."},
    {q:"Podemos ver a Lua durante o <b>dia</b>?",o:["Sim, às vezes ela aparece no céu de dia","Não, nunca","Só no inverno","Só quando chove"],h:"Você já viu a Lua no céu azul de manhã?",e:"Sim! Em algumas fases dá para ver a Lua de dia."},
    {q:"Qual destas é uma forma de <b>representar a Terra</b>?",o:["Globo terrestre","Termômetro","Relógio","Calendário"],h:"É uma bola que gira e mostra os continentes.",e:"O globo terrestre é uma representação da Terra."},
    {q:"Qual representação mostra a Terra no formato mais parecido com o real?",o:["O globo terrestre","O mapa-múndi","Uma tabela","Um gráfico de barras"],h:"A Terra é arredondada…",e:"O globo é redondo como a Terra; o mapa-múndi a mostra planificada."},
    {q:"Qual é o formato da Terra?",o:["Arredondado (quase uma esfera)","Plano como uma mesa","Quadrado","Triangular"],h:"Pense no globo terrestre.",e:"A Terra tem formato arredondado, quase uma esfera."},
    {q:"Yuri Gagarin, o primeiro ser humano a ir ao espaço, disse que “a Terra é azul”. Ela parece azul porque…",o:["Grande parte do planeta é coberta por água","O céu pinta a Terra","A Terra é feita de tinta azul","Ela só tem gelo"],h:"O que cobre a maior parte do planeta?",e:"Cerca de 70% da superfície da Terra é coberta por água."}
   ]},
 { nome:"Grande Desafio das Ciências", ico:"👑", cor:"#eab308", cor2:"#f97316", desc:"Mistura dos movimentos da Terra",
   resumo:[
    {t:"Rotação ⏱️",d:"Gira em si mesma — <b>24 horas</b> — dias e noites.",ex:"🌍↻",c:"#2563eb"},
    {t:"Translação 🔄",d:"Volta ao Sol — <b>365 dias e 6 horas</b> — com a inclinação, as estações.",ex:"🌍 ➜ ☀️",c:"#ea580c"},
    {t:"Universo 🌙",d:"4 fases da Lua; globo, mapa-múndi e satélite.",ex:"Você consegue! 💪",c:"#4f46e5"}],
   qs:[
    {q:"Qual movimento dura cerca de 24 horas e qual dura cerca de 365 dias?",o:["Rotação: 24 horas | Translação: 365 dias","Rotação: 365 dias | Translação: 24 horas","Os dois duram 24 horas","Os dois duram 365 dias"],h:"Rotação = um dia. Translação = um ano.",e:"Rotação ≈ 24 h (dia). Translação ≈ 365 dias e 6 h (ano)."},
    {q:"Se a Terra parasse de girar em torno de si mesma, o que deixaria de acontecer normalmente?",o:["A troca entre dias e noites","As fases da Lua","A existência da água","A chuva"],h:"Qual é o efeito da rotação?",e:"Sem rotação, não haveria a troca de dias e noites como conhecemos."},
    {q:"Depois da Lua <b>nova</b> vem a Lua…",o:["Crescente","Cheia","Minguante","Nova de novo"],h:"Ela começa a crescer…",e:"Nova → Crescente → Cheia → Minguante."},
    {q:"O <b>mapa-múndi</b> mostra…",o:["O planeta inteiro em uma superfície plana","Só o Brasil","Só a Lua","Só o oceano"],h:"“Múndi” vem de mundo.",e:"O mapa-múndi representa o mundo todo no papel (plano)."},
    {q:"<b>Imagens de satélite</b> são…",o:["Fotos da Terra tiradas lá do espaço","Desenhos feitos à mão","Mapas do tesouro","Fotos do fundo do mar"],h:"Satélites ficam girando em volta da Terra, lá em cima.",e:"Satélites fotografam a Terra do espaço."},
    {q:"Cerca de quanto da superfície da Terra é coberta por água?",o:["Cerca de 70% (quase 3/4)","Cerca de 10%","Metade exata","Nada"],h:"É por isso que ela parece azul!",e:"Cerca de 70% da superfície é água."},
    {q:"As estações do ano acontecem por causa…",o:["Da translação junto com a inclinação do eixo da Terra","Só da rotação","Das fases da Lua","Do vento"],h:"É o movimento de 365 dias + a Terra “tortinha”.",e:"Translação + inclinação do eixo = estações do ano."},
    {q:"Ao amanhecer, você olha para onde o Sol está nascendo. Você está olhando para o…",o:["Leste","Oeste","Norte","Sul"],h:"Nascente!",e:"O Sol nasce no leste."}
   ]}
];

/* ===== GEOGRAFIA ===== */
const FASES_GEO = [
 { nome:"Recursos Naturais", ico:"🌳", cor:"#16a34a", cor2:"#4ade80", desc:"Presentes que a natureza nos dá",
   resumo:[
    {t:"Recursos naturais",d:"Todos os elementos que <b>vêm da natureza</b> e são <b>essenciais</b> no dia a dia.",ex:"💧 água, ☀️ sol, 🌬️ ar, 🌱 solo, 🌳 florestas, 🐾 animais",c:"#16a34a"},
    {t:"Para que usamos?",d:"Beber, plantar, respirar, construir, gerar energia…",ex:"O solo dá os alimentos 🥕",c:"#0ea5e9"},
    {t:"Cuidado!",d:"Precisamos usar os recursos <b>com consciência</b>, para não acabarem.",ex:"Consumo consciente 💚",c:"#f97316"}],
   qs:[
    {q:"<b>Recursos naturais</b> são…",o:["Elementos que vêm da natureza e são essenciais no dia a dia","Coisas feitas em fábricas","Brinquedos e jogos","Prédios da cidade"],h:"Natural = vem da natureza.",e:"Recursos naturais vêm da natureza e são essenciais para a vida."},
    {q:"Qual destes é um recurso natural?",o:["A água","O celular","O carro","A cadeira de plástico"],h:"Qual deles não foi fabricado?",e:"A água vem da natureza: é um recurso natural."},
    {q:"Qual lista tem <b>só</b> recursos naturais?",o:["Solo, ar, água e sol","Água, televisão e solo","Ar, bicicleta e florestas","Sol, geladeira e animais"],h:"Procure a lista sem nada fabricado.",e:"Solo, ar, água e sol vêm todos da natureza."},
    {q:"Para que usamos a água no dia a dia?",o:["Beber, cozinhar, tomar banho e plantar","Só para nadar","Para nada","Só para lavar o carro"],h:"Pense em tudo o que você faz em casa com água.",e:"A água é essencial para beber, cozinhar, higiene e plantações."},
    {q:"As <b>florestas</b> são importantes porque…",o:["Abrigam animais, ajudam a purificar o ar e protegem o solo e a água","Só servem para tirar madeira","Atrapalham as cidades","Não servem para nada"],h:"Quem mora na floresta? O que as árvores fazem pelo ar?",e:"Florestas são casa de animais e ajudam o ar, o solo e a água."},
    {q:"O <b>solo</b> é um recurso natural usado para…",o:["Plantar alimentos","Fazer chover","Gerar a luz do Sol","Respirar"],h:"Onde crescem as plantas?",e:"No solo plantamos os alimentos."}
   ]},
 { nome:"Energia Renovável", ico:"💡", cor:"#ca8a04", cor2:"#facc15", desc:"Sol, vento e água viram energia",
   resumo:[
    {t:"Renovável",d:"Energia de fontes que <b>se renovam</b> na natureza e não acabam.",ex:"☀️ 🌬️ 💧",c:"#ca8a04"},
    {t:"Solar e Eólica",d:"<b>Solar</b> = energia do Sol (placas solares). <b>Eólica</b> = energia do vento (hélices gigantes) — limpa e segura.",ex:"Vento gira a hélice ➜ eletricidade ⚡",c:"#0ea5e9"},
    {t:"Hidrelétrica",d:"Energia gerada pela <b>força da água</b> em usinas.",ex:"Usina de Itaipu 💧⚡",c:"#2563eb"}],
   qs:[
    {q:"Energia <b>renovável</b> é aquela que…",o:["Vem de fontes que se renovam na natureza e não acabam","Acaba bem rápido","Só existe à noite","Polui muito o ar"],h:"Renovar = ficar novo de novo.",e:"Fontes renováveis (sol, vento, água) se renovam na natureza."},
    {q:"A energia que vem do <b>Sol</b> se chama…",o:["Solar","Eólica","Hidrelétrica","Nuclear"],h:"Sol ➜ sol…",e:"Energia do Sol = energia solar."},
    {q:"A energia que vem do <b>vento</b> se chama…",o:["Eólica","Solar","Hidrelétrica","Térmica"],h:"Éolo era o deus dos ventos na mitologia grega.",e:"Energia do vento = energia eólica."},
    {q:"A energia gerada pela força da <b>água</b>, em usinas, se chama…",o:["Hidrelétrica","Eólica","Solar","Petróleo"],h:"“Hidro” quer dizer água.",e:"Energia da água em usinas = hidrelétrica."},
    {q:"Na energia eólica, o que faz as hélices girarem?",o:["O movimento do vento","A água do rio","O fogo","A Lua"],h:"Eólica = vento!",e:"O vento movimenta as hélices, que geram eletricidade."},
    {q:"Por que a energia eólica é boa para o planeta?",o:["É limpa, renovável e segura","Faz muita fumaça","Acaba logo","É feita com carvão"],h:"Vento não solta fumaça…",e:"A energia eólica não polui o ar e o vento não acaba."},
    {q:"Qual destas <b>NÃO</b> é uma fonte renovável?",o:["Petróleo","Sol","Vento","Água"],h:"Qual delas pode acabar um dia?",e:"O petróleo demora milhões de anos para se formar: não é renovável."}
   ]},
 { nome:"Água e Resíduos", ico:"♻️", cor:"#0891b2", cor2:"#22d3ee", desc:"Cuidar da água e separar o lixo",
   resumo:[
    {t:"Conservar a água",d:"<b>Não desperdiçar</b>, fechar a torneira, usar com consciência.",ex:"Banho rápido 🚿",c:"#0891b2"},
    {t:"Água contaminada",d:"Poluição e contaminação causam <b>escassez</b> (falta de água) e <b>prejudicam a saúde</b> do meio ambiente.",ex:"Rio poluído = peixes doentes 🐟",c:"#ef4444"},
    {t:"Resíduos",d:"<b>Recicláveis</b>: metal, papel, vidro, plástico → novos produtos. <b>Orgânicos</b>: cascas e restos de comida → <b>adubo</b>.",ex:"🥫📰🍾 | 🍌🥚",c:"#16a34a"}],
   qs:[
    {q:"Qual atitude ajuda a <b>conservar a água</b>?",o:["Fechar a torneira enquanto escova os dentes","Lavar a calçada com a mangueira","Tomar banho de 1 hora","Deixar a torneira pingando"],h:"Qual delas economiza água?",e:"Fechar a torneira evita desperdício."},
    {q:"O que pode acontecer quando a água é poluída e contaminada?",o:["Falta de água limpa e prejuízo à saúde das pessoas e do meio ambiente","Os peixes ficam mais felizes","A água fica mais limpa","Nada acontece"],h:"Água suja faz bem ou mal?",e:"A contaminação causa falta de água limpa e prejudica a saúde."},
    {q:"<b>Escassez</b> de água significa…",o:["Falta de água","Muita água","Água gelada","Água salgada"],h:"Escasso = pouco, faltando.",e:"Escassez é quando a água está faltando."},
    {q:"Qual destes é um resíduo <b>orgânico</b>?",o:["Casca de banana","Lata de refrigerante","Garrafa de vidro","Jornal velho"],h:"Orgânico vem de plantas ou animais e apodrece.",e:"Cascas de frutas são resíduos orgânicos."},
    {q:"Os resíduos orgânicos podem virar…",o:["Adubo para as plantas","Garrafas novas","Latas novas","Papel novo"],h:"A compostagem transforma restos de comida em…",e:"Na compostagem, os orgânicos viram adubo."},
    {q:"Qual destes é um resíduo <b>reciclável</b>?",o:["Garrafa de vidro","Casca de ovo","Resto de comida","Casca de laranja"],h:"Metal, papel, vidro ou plástico.",e:"O vidro é reciclável e pode virar novas garrafas."},
    {q:"Separar metal, papel, vidro e plástico ajuda a…",o:["Reciclar e criar novos produtos","Aumentar o lixo","Poluir os rios","Gastar mais"],h:"O que a fábrica faz com o material separado?",e:"Separando, os materiais vão para a reciclagem e viram novos produtos."}
   ]},
 { nome:"Grande Desafio da Geografia", ico:"👑", cor:"#eab308", cor2:"#f97316", desc:"5 Rs, coleta seletiva e mistura",
   resumo:[
    {t:"Os 5 Rs",d:"<b>Repensar</b>, <b>recusar</b>, <b>reduzir</b>, <b>reutilizar</b> e <b>reciclar</b>.",ex:"Pote de sorvete vira porta-lápis = reutilizar",c:"#16a34a"},
    {t:"Cores da coleta seletiva",d:"🔵 Azul: papel | 🔴 Vermelho: plástico | 🟢 Verde: vidro | 🟡 Amarelo: metal | 🟤 Marrom: orgânico",ex:"Descarte correto ✅",c:"#2563eb"},
    {t:"Lembre",d:"Renováveis: solar, eólica, hidrelétrica.",ex:"Você consegue! 💪",c:"#f97316"}],
   qs:[
    {q:"Usar um pote de sorvete vazio para guardar lápis é um exemplo de…",o:["Reutilizar","Reciclar","Recusar","Desperdiçar"],h:"O pote foi usado de novo, sem passar pela fábrica.",e:"Usar de novo para outra função = reutilizar."},
    {q:"Dizer “não, obrigado” para um canudinho de plástico que você não precisa é…",o:["Recusar","Reciclar","Reutilizar","Descartar errado"],h:"Você disse não!",e:"Recusar é não aceitar o que não precisa."},
    {q:"Transformar latinhas velhas em latinhas novas na fábrica é…",o:["Reciclar","Reutilizar","Reduzir","Recusar"],h:"O material é derretido e vira um produto novo.",e:"Isso é reciclar."},
    {q:"Usar menos sacolas plásticas é um exemplo de…",o:["Reduzir","Reciclar","Desperdiçar","Contaminar"],h:"Usar menos = …",e:"Reduzir é diminuir o consumo."},
    {q:"Na coleta seletiva, a lixeira <b>azul</b> é para…",o:["Papel","Vidro","Metal","Orgânico"],h:"Azul como o caderno… de papel!",e:"Azul = papel."},
    {q:"Na coleta seletiva, a lixeira <b>verde</b> é para…",o:["Vidro","Papel","Plástico","Metal"],h:"Pense numa garrafa verde.",e:"Verde = vidro."},
    {q:"Qual atitude é um <b>descarte correto</b>?",o:["Separar o lixo reciclável do orgânico","Jogar lixo no rio","Jogar papel na rua","Misturar tudo e queimar"],h:"Cada coisa no seu lugar.",e:"Separar os resíduos é o descarte correto."},
    {q:"Qual dupla mostra uma <b>energia renovável</b> e um <b>recurso natural</b>?",o:["Energia eólica e água","Petróleo e celular","Carvão e plástico","Gasolina e computador"],h:"Procure algo do vento e algo da natureza.",e:"Eólica é renovável e a água é recurso natural."}
   ]}
];

/* ===== MATEMÁTICA ===== */
const FASES_MAT = [
 { nome:"Metade, Terça e Quarta", ico:"🍕", cor:"#dc2626", cor2:"#f97316", desc:"Repartindo a pizza",
   resumo:[
    {t:"Metade",d:"Dividir por <b>2</b>.",ex:"Metade de 10 → 10 ÷ 2 = 5",c:"#dc2626"},
    {t:"Terça parte",d:"Dividir por <b>3</b>.",ex:"Terça parte de 9 → 9 ÷ 3 = 3",c:"#f97316"},
    {t:"Quarta parte",d:"Dividir por <b>4</b>.",ex:"Quarta parte de 20 → 20 ÷ 4 = 5",c:"#7c3aed"}],
   qs:[
    {q:"Para achar a <b>metade</b> de um número, dividimos por…",o:["2","3","4","10"],h:"Metade = 2 partes iguais.",e:"Metade é dividir por 2."},
    {q:"Quanto é a metade de 10?",o:["5","2","20","8"],h:"10 ÷ 2",e:"10 ÷ 2 = 5."},
    {q:"Para achar a <b>terça parte</b>, dividimos por…",o:["3","2","4","30"],h:"Terça lembra três.",e:"Terça parte é dividir por 3."},
    {q:"Quanto é a terça parte de 9?",o:["3","6","27","4"],h:"9 ÷ 3",e:"9 ÷ 3 = 3."},
    {q:"Quanto é a <b>quarta parte</b> de 20?",o:["5","4","10","80"],h:"20 ÷ 4",e:"20 ÷ 4 = 5."},
    {q:"Lara tem 12 balas e deu a <b>metade</b> para o irmão. Quantas balas o irmão ganhou?",o:["6","4","3","24"],h:"12 ÷ 2",e:"12 ÷ 2 = 6 balas."},
    {q:"Uma pizza de 8 pedaços foi dividida em 4 partes iguais. Quantos pedaços tem cada parte?",o:["2","4","8","32"],h:"8 ÷ 4",e:"8 ÷ 4 = 2 pedaços."},
    {q:"Quanto é a terça parte de 30?",o:["10","3","15","90"],h:"30 ÷ 3",e:"30 ÷ 3 = 10."}
   ]},
 { nome:"As Duas Ideias da Divisão", ico:"⚖️", cor:"#0891b2", cor2:"#06b6d4", desc:"Repartir ou medir?",
   resumo:[
    {t:"Ideia de REPARTIR",d:"Dividir em <b>partes iguais</b>.",ex:"12 balas para 3 amigos ➜ 4 para cada",c:"#0891b2"},
    {t:"Ideia de MEDIDA",d:"<b>Quantas vezes cabe</b>.",ex:"Quantos grupos de 3 cabem em 12? ➜ 4 grupos",c:"#16a34a"},
    {t:"Nomes da divisão",d:"<b>Dividendo</b> ÷ <b>divisor</b> = <b>quociente</b> (e às vezes sobra o <b>resto</b>).",ex:"18 ÷ 3 = 6",c:"#7c3aed"}],
   qs:[
    {q:"Dividir 15 figurinhas igualmente entre 3 amigos é a ideia de…",o:["Repartir em partes iguais","Medida (quantas vezes cabe)","Somar","Multiplicar"],h:"Cada amigo recebe a mesma quantidade.",e:"Repartir igualmente entre pessoas é a ideia de repartir."},
    {q:"Quantos pacotes de 5 biscoitos dá para montar com 20 biscoitos? Essa é a ideia de…",o:["Medida (quantas vezes o 5 cabe no 20)","Repartir","Subtrair","Juntar"],h:"A pergunta é “quantos grupos de 5 cabem”.",e:"Descobrir quantas vezes cabe é a ideia de medida."},
    {q:"15 figurinhas divididas igualmente entre 3 amigos. Quantas cada um ganha?",o:["5","3","12","45"],h:"15 ÷ 3",e:"15 ÷ 3 = 5 figurinhas."},
    {q:"Com 20 biscoitos, quantos pacotes de 5 é possível montar?",o:["4","5","15","100"],h:"20 ÷ 5",e:"20 ÷ 5 = 4 pacotes."},
    {q:"Na divisão 18 ÷ 3 = 6, o número <b>18</b> é o…",o:["Dividendo","Divisor","Quociente","Resto"],h:"É o número que vai ser dividido.",e:"O número que é dividido é o dividendo."},
    {q:"Na divisão 18 ÷ 3 = 6, o número <b>6</b> é o…",o:["Quociente (o resultado)","Dividendo","Divisor","Resto"],h:"É a resposta da conta.",e:"O resultado da divisão é o quociente."},
    {q:"24 alunos vão formar grupos de 6. Quantos grupos serão formados?",o:["4","6","18","30"],h:"Quantas vezes o 6 cabe no 24?",e:"24 ÷ 6 = 4 grupos."}
   ]},
 { nome:"Divisão Exata e Não Exata", ico:"➗", cor:"#7c3aed", cor2:"#ec4899", desc:"Sobrou resto ou não?",
   resumo:[
    {t:"Divisão EXATA",d:"O <b>resto é zero</b>.",ex:"84 ÷ 4 = 21 (resto 0) ✅",c:"#16a34a"},
    {t:"Divisão NÃO EXATA",d:"<b>Sobra resto</b>.",ex:"130 ÷ 4 = 32 e sobra 2 ⚠️",c:"#f97316"},
    {t:"Prova real",d:"Quociente × divisor + resto = dividendo. O resto é sempre <b>menor</b> que o divisor.",ex:"32 × 4 + 2 = 130",c:"#7c3aed"}],
   qs:[
    {q:"Uma divisão é <b>exata</b> quando…",o:["O resto é zero","Sobra resto","O resultado é zero","O divisor é zero"],h:"Exata = não sobra nada.",e:"Na divisão exata o resto é 0."},
    {q:"Quanto é 84 ÷ 4?",v:"conta84",o:["21","24","22","20"],h:"8 ÷ 4 = 2 e 4 ÷ 4 = 1…",e:"84 ÷ 4 = 21."},
    {q:"A divisão 84 ÷ 4 é…",o:["Exata, porque o resto é 0","Não exata, porque sobra 2","Não exata, porque sobra 4","Impossível"],h:"21 × 4 = 84. Sobrou alguma coisa?",e:"21 × 4 = 84, resto 0: divisão exata."},
    {q:"Quanto é 130 ÷ 4?",v:"conta130",o:["32 e sobra resto 2","32 exato","30 e sobra 10","33 e sobra 2"],h:"32 × 4 = 128. Quanto falta para 130?",e:"130 ÷ 4 = 32, resto 2 (porque 32 × 4 = 128)."},
    {q:"Qual destas divisões é <b>não exata</b>?",o:["17 ÷ 5","20 ÷ 5","15 ÷ 5","25 ÷ 5"],h:"Qual número não está na tabuada do 5?",e:"17 ÷ 5 = 3 e sobra 2."},
    {q:"Numa divisão por 4, o resto pode ser no máximo…",o:["3","4","5","10"],h:"O resto tem que ser menor que o divisor.",e:"O resto é sempre menor que o divisor: no máximo 3."},
    {q:"Como conferir (prova real) que 130 ÷ 4 = 32, resto 2?",o:["32 × 4 + 2 = 130","32 + 4 = 36","130 − 4 = 126","32 × 2 = 64"],h:"Quociente × divisor + resto…",e:"32 × 4 = 128; 128 + 2 = 130 ✅."},
    {q:"Quanto é 96 ÷ 3?",o:["32","33","30","23"],h:"9 ÷ 3 = 3 e 6 ÷ 3 = 2…",e:"96 ÷ 3 = 32."}
   ]},
 { nome:"Estatística + Grande Desafio", ico:"👑", cor:"#eab308", cor2:"#f97316", desc:"Tabela de dupla entrada e mistura",
   resumo:[
    {t:"Tabela de dupla entrada",d:"Cruza <b>duas informações</b>: uma nas linhas e outra nas colunas.",ex:"Fruta × Meninas/Meninos",c:"#2563eb"},
    {t:"Como ler",d:"Ache a <b>linha</b> e a <b>coluna</b>: a resposta está no <b>cruzamento</b>.",ex:"Banana + Meninos = 5",c:"#16a34a"},
    {t:"Total",d:"Some os números da coluna ou da linha.",ex:"Meninas: 2 + 4 = 6",c:"#f97316"}],
   qs:[
    {q:"Uma tabela de <b>dupla entrada</b> mostra…",o:["Duas informações cruzadas, em linhas e colunas","Só uma lista de nomes","Um desenho","Um mapa"],h:"Dupla = duas.",e:"Ela cruza duas informações ao mesmo tempo."},
    {q:"Quantas <b>meninas</b> preferem banana?",v:"duplaEntrada",o:["4","2","5","3"],h:"Linha da banana, coluna das meninas.",e:"No cruzamento Banana × Meninas está o 4."},
    {q:"Quantos <b>meninos</b> preferem pera?",v:"duplaEntrada",o:["3","2","5","8"],h:"Linha da pera, coluna dos meninos.",e:"No cruzamento Pera × Meninos está o 3."},
    {q:"Quantas crianças ao todo preferem <b>banana</b>?",v:"duplaEntrada",o:["9","4","5","6"],h:"Meninas + meninos da linha banana: 4 + 5.",e:"4 + 5 = 9 crianças."},
    {q:"Quantas crianças participaram da pesquisa?",v:"duplaEntrada",o:["14","8","6","12"],h:"Some os totais: 6 + 8.",e:"6 meninas + 8 meninos = 14 crianças."},
    {q:"Uma professora divide 28 lápis igualmente entre 4 mesas. Quantos lápis cada mesa recebe?",o:["7","6","8","24"],h:"28 ÷ 4",e:"28 ÷ 4 = 7 lápis."},
    {q:"Quanto é a metade de 50?",o:["25","20","100","10"],h:"50 ÷ 2",e:"50 ÷ 2 = 25."},
    {q:"35 ÷ 4 dá quanto?",o:["8 e sobra 3","8 exato","9 e sobra 1","7 e sobra 7"],h:"8 × 4 = 32. Quanto falta para 35?",e:"8 × 4 = 32, sobra 3. Divisão não exata."}
   ]}
];
VIS.conta84 = VIS.conta(84,4);
VIS.conta130 = VIS.conta(130,4);

/* ===== SIMULADOS NOVOS ===== */
const SIM_HIST = [
 {tipo:"marcar",ass:"Patrimônio",enun:"Qual destes é um exemplo de patrimônio <b>imaterial</b>?",alts:["Uma igreja antiga","A roda de capoeira","Uma estátua da praça","Um casarão histórico"],a:1,dica:"Imaterial: não dá para tocar.",exp:"A roda de capoeira é uma prática cultural: patrimônio imaterial."},
 {tipo:"pintar",ass:"Patrimônio material",enun:"🖍️ <b>Pinte</b> apenas os exemplos de patrimônio <b>MATERIAL</b>:",pecas:["🏛️ Igreja antiga","🎶 Samba de roda","🗿 Estátua da praça","🥘 Modo de fazer acarajé","🏠 Casarão histórico","💃 Frevo"],certas:[0,2,4],dica:"Pinte o que dá para tocar com a mão.",exp:"Igreja, estátua e casarão são físicos: patrimônio material."},
 {tipo:"escrever",ass:"IPHAN",enun:"✏️ <b>Escreva</b> a sigla do órgão do governo que protege e preserva o patrimônio no Brasil.",aceita:["iphan"],mostrar:"IPHAN",dica:"Começa com I e tem 5 letras.",exp:"IPHAN: Instituto do Patrimônio Histórico e Artístico Nacional."},
 {tipo:"marcar",ass:"Museus",enun:"Os <b>curadores</b> de um museu são as pessoas que…",alts:["Visitam o museu nas férias","Organizam e selecionam o conteúdo das exposições","Vendem os ingressos","Limpam as salas"],a:1,dica:"Eles escolhem o que vai ser mostrado.",exp:"Curadores organizam e selecionam o conteúdo."},
 {tipo:"escrever",ass:"Museus",enun:"✏️ Complete: o conjunto de objetos, documentos, livros, quadros e fotografias de um museu se chama ________.",aceita:["acervo","o acervo"],mostrar:"acervo",dica:"Começa com “A”.",exp:"É o acervo do museu."},
 {tipo:"pintar",ass:"Memória coletiva",enun:"🖍️ <b>Pinte</b> as memórias <b>COLETIVAS</b>:",pecas:["🚲 Quando aprendi a andar de bicicleta","🎉 A festa de aniversário da cidade","🦷 Quando caiu meu primeiro dente","🏆 O dia em que o time da cidade foi campeão"],certas:[1,3],dica:"Coletiva = muita gente lembra junto.",exp:"A festa da cidade e o título do time são lembranças de toda a comunidade."},
 {tipo:"marcar",ass:"Patrimônio natural",enun:"A <b>Chapada dos Guimarães</b> é um exemplo de patrimônio…",alts:["Imaterial","Individual","Natural","Construído pelas pessoas"],a:2,dica:"Foi a natureza que formou.",exp:"A Chapada é um patrimônio natural."},
 {tipo:"escrever",ass:"Patrimônio",enun:"✏️ A capoeira é patrimônio <b>material</b> ou <b>imaterial</b>? Escreva a resposta.",aceita:["imaterial","patrimonio imaterial"],mostrar:"imaterial",dica:"Dá para pegar a capoeira com a mão?",exp:"A capoeira é uma prática cultural: imaterial."},
 {tipo:"marcar",ass:"Preservação",enun:"Uma fábrica antiga foi reformada e virou uma biblioteca. Isso é um exemplo de…",alts:["Destruição do patrimônio","Memória individual","Preservação e adaptação, com novo uso para o prédio","Patrimônio natural"],a:2,dica:"O prédio continua, mas com outra função.",exp:"Dar novo uso preserva o prédio e a história."},
 {tipo:"pintar",ass:"Patrimônio natural",enun:"🖍️ <b>Pinte</b> os exemplos de patrimônio <b>NATURAL</b>:",pecas:["⛰️ Chapada dos Guimarães","⛪ Igreja barroca","🌊 Cataratas do Iguaçu","🎭 Festa folclórica"],certas:[0,2],dica:"O que a natureza fez sozinha?",exp:"Chapada dos Guimarães e Cataratas do Iguaçu são patrimônios naturais."}
];
const SIM_CIEN = [
 {tipo:"marcar",ass:"Rotação",enun:"O movimento de <b>rotação</b> da Terra dura cerca de…",alts:["365 dias","24 horas","1 mês","1 semana"],a:1,dica:"É o tempo de um dia.",exp:"A rotação dura cerca de 24 horas."},
 {tipo:"escrever",ass:"Translação",numero:true,enun:"✏️ Quantos dias dura o movimento de <b>translação</b>? Escreva o número.",aceita:["365","365 dias","365 dias e 6 horas","365 e 6 horas"],mostrar:"365 (e 6 horas)",dica:"É o número de dias de um ano.",exp:"A translação dura 365 dias e 6 horas."},
 {tipo:"pintar",ass:"Estações",enun:"🖍️ <b>Pinte</b> o nome das 4 <b>estações do ano</b>:",pecas:["Primavera","Rotação","Verão","Lua cheia","Outono","Leste","Inverno"],certas:[0,2,4,6],dica:"Flores, calor, folhas caindo e frio.",exp:"Primavera, verão, outono e inverno."},
 {tipo:"marcar",ass:"Movimento do Sol",enun:"O Sol <b>nasce</b> no…",alts:["Oeste","Norte","Leste","Sul"],a:2,dica:"Lado nascente.",exp:"O Sol nasce no leste e se põe no oeste."},
 {tipo:"escrever",ass:"Fases da Lua",enun:"✏️ <b>Escreva</b> o nome da fase em que a Lua aparece toda iluminada e redondinha.",aceita:["cheia","lua cheia"],mostrar:"Lua cheia",dica:"🌕",exp:"É a Lua cheia."},
 {tipo:"pintar",ass:"Representar a Terra",enun:"🖍️ <b>Pinte</b> as formas de <b>representar a Terra</b>:",pecas:["🌐 Globo terrestre","⏰ Relógio","🗺️ Mapa-múndi","🛰️ Imagem de satélite","🌡️ Termômetro"],certas:[0,2,3],dica:"São três!",exp:"Globo terrestre, mapa-múndi e imagem de satélite."},
 {tipo:"marcar",ass:"Estações",enun:"As estações do ano acontecem por causa…",alts:["Das fases da Lua","Da inclinação do eixo da Terra durante a translação","Da rotação de 24 horas","Das nuvens"],a:1,dica:"A Terra é “tortinha” enquanto dá a volta no Sol.",exp:"Translação + inclinação do eixo = estações."},
 {tipo:"marcar",ass:"Equinócio",enun:"No <b>equinócio</b>…",alts:["Acontece o dia mais longo do ano","O dia e a noite têm quase a mesma duração","Não existe noite","A Lua desaparece"],a:1,dica:"Equi = igual.",exp:"No equinócio, dia e noite têm quase a mesma duração."},
 {tipo:"escrever",ass:"Rotação",enun:"✏️ A Terra gira em torno de si mesma. Como se chama esse movimento?",aceita:["rotacao","movimento de rotacao","a rotacao"],mostrar:"rotação",dica:"Começa com R e causa os dias e as noites.",exp:"É o movimento de rotação."},
 {tipo:"pintar",ass:"Terra e Universo",enun:"🖍️ <b>Pinte</b> a única frase <b>VERDADEIRA</b>:",pecas:["Às vezes podemos ver a Lua de dia.","A Lua tem 10 fases.","A Terra é quadrada.","A translação causa os dias e as noites."],certas:[0],dica:"Você já viu a Lua no céu de manhã?",exp:"Às vezes podemos, sim, ver a Lua durante o dia."}
];
const SIM_GEO = [
 {tipo:"marcar",ass:"Recursos naturais",enun:"<b>Recursos naturais</b> são…",alts:["Produtos feitos em fábricas","Elementos que vêm da natureza e são essenciais no dia a dia","Apenas os animais","Somente o petróleo"],a:1,dica:"Natural = da natureza.",exp:"Recursos naturais vêm da natureza: água, solo, ar, sol, florestas, animais."},
 {tipo:"pintar",ass:"Recursos naturais",enun:"🖍️ <b>Pinte</b> os <b>recursos naturais</b>:",pecas:["💧 Água","📱 Celular","☀️ Sol","🌳 Floresta","🚗 Carro","🌬️ Ar"],certas:[0,2,3,5],dica:"São quatro! Nada fabricado.",exp:"Água, sol, floresta e ar vêm da natureza."},
 {tipo:"escrever",ass:"Energia",enun:"✏️ Como se chama a energia que vem do <b>vento</b>?",aceita:["eolica","energia eolica","a eolica"],mostrar:"eólica",dica:"Começa com “E”.",exp:"Energia do vento = energia eólica."},
 {tipo:"marcar",ass:"Energia",enun:"A energia gerada pela força da <b>água</b> em usinas se chama…",alts:["Solar","Eólica","Hidrelétrica","Nuclear"],a:2,dica:"Hidro = água.",exp:"É a energia hidrelétrica."},
 {tipo:"pintar",ass:"Conservação da água",enun:"🖍️ <b>Pinte</b> as atitudes que <b>conservam</b> a água:",pecas:["🚿 Tomar banho rápido","🚰 Deixar a torneira pingando","🪥 Fechar a torneira ao escovar os dentes","🚗 Lavar o carro com a mangueira aberta"],certas:[0,2],dica:"Quais economizam água?",exp:"Banho rápido e fechar a torneira evitam desperdício."},
 {tipo:"escrever",ass:"Resíduos orgânicos",enun:"✏️ Complete: restos de comida e cascas de frutas podem virar ________ para as plantas.",aceita:["adubo","adubo organico","composto"],mostrar:"adubo",dica:"Começa com “A” e alimenta as plantas.",exp:"Resíduos orgânicos viram adubo."},
 {tipo:"marcar",ass:"Recicláveis",enun:"Qual destes é um resíduo <b>reciclável</b>?",alts:["Casca de banana","Resto de arroz","Lata de alumínio","Casca de ovo"],a:2,dica:"Metal, papel, vidro ou plástico.",exp:"A lata de alumínio é metal reciclável."},
 {tipo:"pintar",ass:"Resíduos orgânicos",enun:"🖍️ <b>Pinte</b> os resíduos <b>ORGÂNICOS</b>:",pecas:["🍌 Casca de banana","🥫 Lata","🍎 Resto de maçã","📰 Jornal","🥚 Casca de ovo","🍾 Garrafa de vidro"],certas:[0,2,4],dica:"O que vem de plantas ou animais e apodrece?",exp:"Casca de banana, resto de maçã e casca de ovo são orgânicos."},
 {tipo:"marcar",ass:"5 Rs",enun:"Usar um pote de sorvete vazio para guardar lápis é…",alts:["Reciclar","Reutilizar","Recusar","Desperdiçar"],a:1,dica:"Usar de novo, sem fábrica.",exp:"Usar de novo para outra função = reutilizar."},
 {tipo:"escrever",ass:"Coleta seletiva",enun:"✏️ Escreva a <b>cor</b> da lixeira de coleta seletiva para <b>papel</b>.",aceita:["azul"],mostrar:"azul",dica:"É a cor do céu.",exp:"Papel vai na lixeira azul."}
];
const SIM_MAT = [
 {tipo:"escrever",ass:"Metade",numero:true,enun:"✏️ Quanto é a <b>metade</b> de 18?",aceita:["9","nove"],dica:"18 ÷ 2",exp:"18 ÷ 2 = 9."},
 {tipo:"marcar",ass:"Terça parte",enun:"Quanto é a <b>terça parte</b> de 12?",alts:["3","4","6","36"],a:1,dica:"12 ÷ 3",exp:"12 ÷ 3 = 4."},
 {tipo:"escrever",ass:"Divisão exata",numero:true,visual:VIS.conta84,enun:"✏️ Resolva: <b>84 ÷ 4</b> =",aceita:["21","vinte e um"],dica:"8 ÷ 4 = 2 e 4 ÷ 4 = 1.",exp:"84 ÷ 4 = 21, resto 0."},
 {tipo:"marcar",ass:"Divisão não exata",visual:VIS.conta130,enun:"Qual é o resultado de <b>130 ÷ 4</b>?",alts:["32 exato","32 e sobra 2","33 e sobra 2","30 e sobra 10"],a:1,dica:"32 × 4 = 128.",exp:"130 ÷ 4 = 32 e sobra 2."},
 {tipo:"pintar",ass:"Divisão exata",enun:"🖍️ <b>Pinte</b> as divisões <b>EXATAS</b> (resto zero):",pecas:["10 ÷ 2","9 ÷ 2","20 ÷ 4","13 ÷ 4","15 ÷ 3","17 ÷ 3"],certas:[0,2,4],dica:"São três! Use a tabuada.",exp:"10 ÷ 2 = 5, 20 ÷ 4 = 5 e 15 ÷ 3 = 5 não deixam resto."},
 {tipo:"marcar",ass:"Ideias da divisão",enun:"“Quantos grupos de 4 crianças dá para formar com 20 crianças?” Essa pergunta usa a ideia de…",alts:["Repartir igualmente","Medida (quantas vezes cabe)","Somar","Subtrair"],a:1,dica:"Quantas vezes o 4 cabe no 20?",exp:"É a ideia de medida: 20 ÷ 4 = 5 grupos."},
 {tipo:"escrever",ass:"Tabela de dupla entrada",numero:true,visual:VIS.duplaEntrada,enun:"✏️ Observe a tabela. Quantas <b>meninas</b> preferem <b>pera</b>?",aceita:["2","duas","dois"],dica:"Linha da pera, coluna das meninas.",exp:"No cruzamento está o 2."},
 {tipo:"escrever",ass:"Tabela de dupla entrada",numero:true,visual:VIS.duplaEntrada,enun:"✏️ Quantas crianças participaram da pesquisa <b>ao todo</b>?",aceita:["14","catorze","quatorze"],dica:"Some os totais: 6 + 8.",exp:"6 + 8 = 14 crianças."},
 {tipo:"pintar",ass:"Termos da divisão",enun:"🖍️ Na conta abaixo, <b>pinte o QUOCIENTE</b> (o resultado):",pecas:["28","÷","4","=","7"],certas:[4],dica:"O quociente é a resposta da divisão.",exp:"O quociente é 7."},
 {tipo:"marcar",ass:"Problema",enun:"Uma escola tem 35 alunos e vai formar times de 5. Quantos times serão formados?",alts:["5","6","7","8"],a:2,dica:"35 ÷ 5",exp:"35 ÷ 5 = 7 times."}
];


const MATERIAS = [
 {id:"portugues", nome:"Português", ico:"📖", cor:"#7c3aed", cor2:"#ec4899", titulo:"Mestre das Palavras", fases:FASES_PT, sim:SIM_PT},
 {id:"historia",  nome:"História",  ico:"🏛️", cor:"#b45309", cor2:"#f59e0b", titulo:"Guardiã da História", fases:FASES_HIST, sim:SIM_HIST},
 {id:"ciencias",  nome:"Ciências",  ico:"🌍", cor:"#2563eb", cor2:"#06b6d4", titulo:"Exploradora do Universo", fases:FASES_CIEN, sim:SIM_CIEN},
 {id:"geografia", nome:"Geografia", ico:"🌳", cor:"#16a34a", cor2:"#4ade80", titulo:"Protetora do Planeta", fases:FASES_GEO, sim:SIM_GEO},
 {id:"matematica",nome:"Matemática",ico:"➗", cor:"#dc2626", cor2:"#f97316", titulo:"Craque da Divisão", fases:FASES_MAT, sim:SIM_MAT}
];
