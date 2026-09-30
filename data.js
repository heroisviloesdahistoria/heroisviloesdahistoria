/* =====================================================================
   data.js — BASE DE DADOS (inicia na linha abaixo, termina no fim do arquivo)

   COMO ADICIONAR UMA NOVA PESSOA:
   1. Copie um bloco { ... } qualquer abaixo e cole antes do "];" final.
   2. Use um "id" único (sem espaços nem acentos).
   3. Para colocar foto: salve em uma pasta "img/" e preencha
      imagem: "img/nome-do-arquivo.jpg"  (vazio = mostra as iniciais).
   4. Deixe "falecimento" vazio ("") se a pessoa estiver viva.
   Filtros de categoria são criados automaticamente a partir do campo "categoria".
   ===================================================================== */
const FIGURAS = [
  {
    id: "cleopatra", nome: "Cleópatra VII", nomeCompleto: "Cleópatra VII Filopátor",
    periodo: "Egito Ptolomaico, século I a.C.", categoria: "Governante",
    nascimento: "69 a.C.", falecimento: "30 a.C.", local: "Alexandria, Egito", imagem: "",
    descricao: "Última soberana ativa do Egito helenístico.",
    biografia: "Pertencia à dinastia ptolomaica, de origem macedônia. Governou o Egito em meio à crescente influência de Roma e buscou preservar a independência do reino.",
    acontecimentos: ["Aliou-se a Júlio César e teve com ele um filho, Cesarião.", "Uniu-se a Marco Antônio na disputa pelo poder em Roma.", "Foi derrotada na Batalha de Áccio (31 a.C.) e o Egito virou província romana."],
    curiosidades: ["Segundo Plutarco, falava vários idiomas e foi a primeira ptolomaica a aprender egípcio."],
    legado: "Seu fim marcou o término do período helenístico e a incorporação do Egito ao Império Romano."
  },
  {
    id: "alexandre", nome: "Alexandre, o Grande", nomeCompleto: "Alexandre III da Macedônia",
    periodo: "Antiguidade, século IV a.C.", categoria: "Conquistador",
    nascimento: "356 a.C.", falecimento: "323 a.C.", local: "Pela, Macedônia", imagem: "",
    descricao: "Rei macedônio que criou um dos maiores impérios da Antiguidade.",
    biografia: "Filho de Filipe II, foi educado por Aristóteles e assumiu o trono aos 20 anos. Em pouco mais de uma década, conquistou o Império Persa e chegou à Índia.",
    acontecimentos: ["Venceu o rei persa Dario III em Gaugamela (331 a.C.).", "Conquistou Egito e Babilônia.", "Morreu na Babilônia, sem deixar sucessor definido."],
    curiosidades: ["Fundou dezenas de cidades, várias chamadas Alexandria."],
    legado: "Suas conquistas espalharam a cultura grega pelo Oriente, dando origem ao mundo helenístico."
  },
  {
    id: "cesar", nome: "Júlio César", nomeCompleto: "Caio Júlio César",
    periodo: "República Romana, século I a.C.", categoria: "Governante",
    nascimento: "100 a.C.", falecimento: "44 a.C.", local: "Roma", imagem: "",
    descricao: "General e estadista cuja ascensão encerrou a República Romana.",
    biografia: "Político e comandante militar romano. Conquistou a Gália e tornou-se ditador em Roma, concentrando poderes sem precedentes.",
    acontecimentos: ["Conquistou a Gália (58–50 a.C.).", "Atravessou o rio Rubicão em 49 a.C., iniciando a guerra civil.", "Foi assassinado por senadores nos Idos de Março de 44 a.C."],
    curiosidades: ["Promoveu a reforma que originou o calendário juliano, em 46 a.C."],
    legado: "Sua morte acelerou o fim da República e abriu caminho para o Império, iniciado por seu herdeiro Otaviano."
  },
  {
    id: "atila", nome: "Átila", nomeCompleto: "Átila, rei dos hunos",
    periodo: "Antiguidade Tardia, século V", categoria: "Conquistador",
    nascimento: "c. 406", falecimento: "453", local: "Região do Danúbio (local incerto)", imagem: "",
    descricao: "Rei dos hunos, temido pelo Império Romano do Oriente e do Ocidente.",
    biografia: "Governou os hunos ao lado do irmão Bleda e depois sozinho. Exigiu pesados tributos de Roma e liderou campanhas nos Bálcãs, na Gália e na Itália.",
    acontecimentos: ["Invadiu a Gália e enfrentou romanos e visigodos em 451.", "Invadiu o norte da Itália em 452.", "Morreu em 453, possivelmente de hemorragia, segundo relatos antigos."],
    curiosidades: ["Seu nascimento é incerto; a data indicada é aproximada."],
    legado: "O império huno se fragmentou logo após sua morte, mas ele permaneceu um símbolo de ameaça nas tradições europeias."
  },
  {
    id: "gengis", nome: "Gengis Khan", nomeCompleto: "Temüjin, Gengis Khan",
    periodo: "Idade Média, séculos XII–XIII", categoria: "Conquistador",
    nascimento: "c. 1162", falecimento: "1227", local: "Região do rio Onon, Mongólia", imagem: "",
    descricao: "Fundador do Império Mongol, o maior império contíguo da história.",
    biografia: "Nascido Temüjin, unificou tribos rivais da estepe e foi proclamado Gengis Khan em 1206. Suas campanhas alcançaram a China e a Ásia Central.",
    acontecimentos: ["Unificou as tribos mongóis em 1206.", "Venceu o Império Corásmio na Ásia Central.", "Morreu em 1227, durante campanha contra os Xi Xia."],
    curiosidades: ["O local exato de seu túmulo é desconhecido."],
    legado: "O império mongol ligou Leste e Oeste, ampliando o comércio e o intercâmbio pela Rota da Seda."
  },
  {
    id: "joana", nome: "Joana d'Arc", nomeCompleto: "Jeanne d'Arc",
    periodo: "Guerra dos Cem Anos, século XV", categoria: "Libertador",
    nascimento: "c. 1412", falecimento: "1431", local: "Domrémy, França", imagem: "",
    descricao: "Jovem camponesa que liderou tropas francesas contra os ingleses.",
    biografia: "Afirmava ter recebido visões que a chamavam a apoiar o delfim Carlos. Convenceu a corte e foi enviada com o exército francês.",
    acontecimentos: ["Contribuiu para levantar o cerco de Orléans em 1429.", "Acompanhou Carlos VII na coroação em Reims.", "Foi capturada, julgada e queimada em Ruão em 1431."],
    curiosidades: ["Foi canonizada pela Igreja Católica em 1920."],
    legado: "Tornou-se símbolo nacional da França e da resistência."
  },
  {
    id: "leonardo", nome: "Leonardo da Vinci", nomeCompleto: "Leonardo di ser Piero da Vinci",
    periodo: "Renascimento, séculos XV–XVI", categoria: "Cientista e artista",
    nascimento: "15 de abril de 1452", falecimento: "2 de maio de 1519", local: "Vinci, Itália", imagem: "",
    descricao: "Pintor, engenheiro e estudioso do Renascimento italiano.",
    biografia: "Formado em Florença, trabalhou em Milão, Roma e França. Uniu arte e observação da natureza em estudos de anatomia, engenharia e óptica.",
    acontecimentos: ["Pintou A Última Ceia, em Milão.", "Pintou a Mona Lisa.", "Mudou-se para a França a convite de Francisco I."],
    curiosidades: ["Escrevia seus cadernos em escrita espelhada, da direita para a esquerda."],
    legado: "É considerado o modelo do \"homem renascentista\", unindo arte e ciência."
  },
  {
    id: "mansa-musa", nome: "Mansa Musa", nomeCompleto: "Musa I do Mali",
    periodo: "Idade Média, século XIV", categoria: "Governante",
    nascimento: "c. 1280", falecimento: "c. 1337", local: "Império do Mali, África Ocidental", imagem: "",
    descricao: "Imperador do Mali, famoso por sua riqueza e peregrinação a Meca.",
    biografia: "Governou o Império do Mali, que controlava rotas comerciais e minas de ouro. Fortaleceu a vida religiosa e cultural do reino.",
    acontecimentos: ["Fez a peregrinação a Meca por volta de 1324, com grande comitiva.", "Trouxe estudiosos e arquitetos ao retornar.", "Impulsionou o crescimento de Tombuctu como centro de saber."],
    curiosidades: ["Seus gastos em ouro no Cairo teriam afetado o valor do metal na região."],
    legado: "Sua viagem colocou o Mali nos mapas e nas crônicas do mundo islâmico e da Europa."
  },
  {
    id: "isabel1", nome: "Isabel I", nomeCompleto: "Isabel I da Inglaterra",
    periodo: "Era Elisabetana, século XVI", categoria: "Governante",
    nascimento: "7 de setembro de 1533", falecimento: "24 de março de 1603", local: "Greenwich, Inglaterra", imagem: "",
    descricao: "Rainha que governou a Inglaterra por 44 anos.",
    biografia: "Filha de Henrique VIII e Ana Bolena, subiu ao trono em 1558 e estabeleceu uma Igreja protestante moderada.",
    acontecimentos: ["Enfrentou a Armada Espanhola, derrotada em 1588.", "Manteve o reino estável em meio a conflitos religiosos."],
    curiosidades: ["Nunca se casou e ficou conhecida como a \"Rainha Virgem\"."],
    legado: "Seu reinado é associado ao florescimento de Shakespeare e à expansão marítima inglesa."
  },
  {
    id: "napoleao", nome: "Napoleão Bonaparte", nomeCompleto: "Napoleão Bonaparte",
    periodo: "Era Napoleônica, séculos XVIII–XIX", categoria: "Conquistador",
    nascimento: "15 de agosto de 1769", falecimento: "5 de maio de 1821", local: "Ajáccio, Córsega", imagem: "",
    descricao: "General que se tornou imperador dos franceses.",
    biografia: "Ascendeu durante a Revolução Francesa, tomou o poder em 1799 e coroou-se imperador em 1804. Dominou grande parte da Europa continental.",
    acontecimentos: ["Promulgou o Código Civil em 1804.", "Venceu em Austerlitz (1805).", "Foi derrotado em Waterloo (1815) e exilado em Santa Helena."],
    curiosidades: ["Nasceu na Córsega, pouco depois de a ilha passar ao controle francês."],
    legado: "O Código Napoleônico influenciou sistemas jurídicos em vários países."
  },
  {
    id: "zumbi", nome: "Zumbi dos Palmares", nomeCompleto: "Zumbi dos Palmares",
    periodo: "Brasil Colonial, século XVII", categoria: "Libertador",
    nascimento: "c. 1655", falecimento: "20 de novembro de 1695", local: "Região de Palmares, atual Alagoas", imagem: "",
    descricao: "Último grande líder do Quilombo dos Palmares.",
    biografia: "Liderou o maior quilombo do Brasil colonial, onde viviam pessoas que escaparam da escravidão. Resistiu por anos às expedições coloniais.",
    acontecimentos: ["Tornou-se líder de Palmares nos anos 1670.", "Resistiu às expedições enviadas contra o quilombo.", "Foi morto em 20 de novembro de 1695."],
    curiosidades: ["O Dia Nacional da Consciência Negra, 20 de novembro, lembra sua morte."],
    legado: "Tornou-se símbolo de resistência à escravidão e da luta por igualdade no Brasil."
  },
  {
    id: "gandhi", nome: "Mahatma Gandhi", nomeCompleto: "Mohandas Karamchand Gandhi",
    periodo: "Século XX, Índia colonial", categoria: "Libertador",
    nascimento: "2 de outubro de 1869", falecimento: "30 de janeiro de 1948", local: "Porbandar, Índia", imagem: "",
    descricao: "Líder da independência indiana pela resistência não violenta.",
    biografia: "Advogado formado em Londres, desenvolveu na África do Sul a prática da satyagraha (resistência pacífica) e depois liderou o movimento contra o domínio britânico.",
    acontecimentos: ["Liderou a Marcha do Sal em 1930.", "A Índia conquistou a independência em 1947.", "Foi assassinado em Nova Délhi em 1948."],
    curiosidades: ["O título \"Mahatma\" significa \"grande alma\"."],
    legado: "Inspirou movimentos por direitos civis em todo o mundo, como o de Martin Luther King Jr."
  },
  {
    id: "curie", nome: "Marie Curie", nomeCompleto: "Maria Salomea Skłodowska-Curie",
    periodo: "Séculos XIX–XX", categoria: "Cientista e artista",
    nascimento: "7 de novembro de 1867", falecimento: "4 de julho de 1934", local: "Varsóvia, Polônia", imagem: "",
    descricao: "Pioneira no estudo da radioatividade e duas vezes laureada com o Nobel.",
    biografia: "Mudou-se para Paris para estudar e, com Pierre Curie, investigou a radioatividade. Descobriu os elementos polônio e rádio.",
    acontecimentos: ["Recebeu o Nobel de Física em 1903.", "Recebeu o Nobel de Química em 1911.", "Organizou unidades móveis de radiologia na Primeira Guerra."],
    curiosidades: ["Foi a primeira mulher a receber um Nobel e segue sendo a única premiada em duas ciências distintas."],
    legado: "Seu trabalho abriu caminho para a física nuclear e para tratamentos médicos com radiação."
  },
  {
    id: "hitler", nome: "Adolf Hitler", nomeCompleto: "Adolf Hitler",
    periodo: "Século XX, Alemanha nazista", categoria: "Ditador",
    nascimento: "20 de abril de 1889", falecimento: "30 de abril de 1945", local: "Braunau am Inn, Áustria", imagem: "",
    descricao: "Ditador alemão responsável pela Segunda Guerra e pelo Holocausto.",
    biografia: "Líder do Partido Nazista, tornou-se chanceler em 1933 e instaurou uma ditadura totalitária, baseada no racismo e no antissemitismo.",
    acontecimentos: ["Invadiu a Polônia em 1939, iniciando a Segunda Guerra Mundial.", "Seu regime promoveu o genocídio de cerca de seis milhões de judeus.", "Suicidou-se em Berlim em 1945."],
    curiosidades: ["Nasceu na Áustria e só obteve a cidadania alemã em 1932."],
    legado: "Seu regime deixou milhões de mortos; o Holocausto é lembrado como alerta contra o ódio e o autoritarismo."
  },
  {
    id: "mandela", nome: "Nelson Mandela", nomeCompleto: "Nelson Rolihlahla Mandela",
    periodo: "Século XX, África do Sul", categoria: "Libertador",
    nascimento: "18 de julho de 1918", falecimento: "5 de dezembro de 2013", local: "Mvezo, África do Sul", imagem: "",
    descricao: "Líder contra o apartheid e primeiro presidente negro da África do Sul.",
    biografia: "Advogado e membro do CNA, combateu o regime do apartheid. Foi preso em 1962 e passou 27 anos encarcerado.",
    acontecimentos: ["Foi libertado em 1990.", "Recebeu o Nobel da Paz em 1993, junto com F. W. de Klerk.", "Presidiu o país de 1994 a 1999."],
    curiosidades: ["Seu nome de nascimento, Rolihlahla, significa algo como \"criador de problemas\" em xhosa."],
    legado: "É símbolo mundial de reconciliação e da luta contra a discriminação racial."
  },
  {
    id: "qin", nome: "Qin Shi Huang", nomeCompleto: "Ying Zheng, Qin Shi Huang",
    periodo: "Antiguidade, século III a.C.", categoria: "Governante",
    nascimento: "259 a.C.", falecimento: "210 a.C.", local: "Handan, China", imagem: "",
    descricao: "Primeiro imperador da China unificada.",
    biografia: "Rei do estado de Qin, derrotou os reinos rivais e unificou a China em 221 a.C. Governou com um Estado centralizado e rígido.",
    acontecimentos: ["Padronizou escrita, moedas, pesos e medidas.", "Ordenou a ligação de muralhas de defesa ao norte.", "Mandou construir seu mausoléu, com o Exército de Terracota."],
    curiosidades: ["O Exército de Terracota foi descoberto em 1974 por camponeses."],
    legado: "Criou o modelo de império centralizado que durou mais de dois milênios na China."
  },
  {
    id: "newton", nome: "Isaac Newton", nomeCompleto: "Sir Isaac Newton",
    periodo: "Revolução Científica, séculos XVII–XVIII", categoria: "Cientista e artista",
    nascimento: "25 de dezembro de 1642 (calendário juliano)", falecimento: "20 de março de 1727 (calendário juliano)", local: "Woolsthorpe, Inglaterra", imagem: "",
    descricao: "Formulou as leis do movimento e a gravitação universal.",
    biografia: "Estudou em Cambridge e publicou em 1687 os Principia, obra fundamental da física. Também contribuiu para a óptica e o cálculo.",
    acontecimentos: ["Publicou os Principia em 1687.", "Estudou a decomposição da luz com prismas.", "Dirigiu a Casa da Moeda da Inglaterra."],
    curiosidades: ["Foi presidente da Royal Society a partir de 1703."],
    legado: "Suas leis dominaram a física por séculos e sustentam a mecânica clássica."
  },
  {
    id: "ivan4", nome: "Ivan, o Terrível", nomeCompleto: "Ivan IV Vassilievitch",
    periodo: "Rússia, século XVI", categoria: "Governante",
    nascimento: "25 de agosto de 1530", falecimento: "28 de março de 1584", local: "Kolomenskoye, perto de Moscou", imagem: "",
    descricao: "Primeiro a ser coroado czar da Rússia.",
    biografia: "Subiu ao trono ainda criança e foi coroado czar em 1547. Expandiu o território russo, mas governou de modo cada vez mais violento.",
    acontecimentos: ["Conquistou os canatos de Kazan e Astracã.", "Criou a oprichnina, força de repressão interna.", "Promoveu o massacre de Novgorod em 1570."],
    curiosidades: ["A catedral de São Basílio, em Moscou, foi construída em seu reinado."],
    legado: "Consolidou a autocracia russa e ampliou o Estado para o Volga e a Sibéria."
  },
  {
    id: "bolivar", nome: "Simón Bolívar", nomeCompleto: "Simón José Antonio de la Santísima Trinidad Bolívar",
    periodo: "Independências americanas, séculos XVIII–XIX", categoria: "Libertador",
    nascimento: "24 de julho de 1783", falecimento: "17 de dezembro de 1830", local: "Caracas, Venezuela", imagem: "",
    descricao: "Líder das independências de vários países sul-americanos.",
    biografia: "Nascido em família rica de Caracas, liderou campanhas contra a Espanha. É chamado de \"El Libertador\".",
    acontecimentos: ["Contribuiu para a independência de Venezuela, Colômbia, Equador, Peru e Bolívia.", "Presidiu a Grã-Colômbia, que se dissolveu pouco antes de sua morte."],
    curiosidades: ["A Bolívia leva seu nome em sua homenagem."],
    legado: "Seu ideal de unir a América espanhola inspira debates sobre integração até hoje."
  },
  {
    id: "tiradentes", nome: "Tiradentes", nomeCompleto: "Joaquim José da Silva Xavier",
    periodo: "Brasil Colonial, século XVIII", categoria: "Libertador",
    nascimento: "12 de novembro de 1746", falecimento: "21 de abril de 1792", local: "Fazenda do Pombal, perto de São João del-Rei, Brasil", imagem: "",
    descricao: "Figura central da Inconfidência Mineira.",
    biografia: "Alferes e dentista prático, participou da conspiração contra a Coroa portuguesa em Minas Gerais, em 1789.",
    acontecimentos: ["Foi preso em 1789 após a denúncia do movimento.", "Assumiu a responsabilidade pela conspiração no processo.", "Foi enforcado no Rio de Janeiro em 1792."],
    curiosidades: ["O apelido vem de sua atuação como dentista."],
    legado: "É herói nacional no Brasil; 21 de abril é feriado."
  }
];
