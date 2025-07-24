// Estrutura de dados para todas as matérias e questões
const flashcardsData = {
    portugues: {
        name: "Língua Portuguesa",
        questions: [
            { question: "O que caracteriza um texto dissertativo-argumentativo?", answer: "Apresenta uma tese ou opinião sobre um tema, defendida com argumentos e exemplos." },
            { question: "Qual a diferença entre coesão e coerência textual?", answer: "Coesão refere-se aos elementos que conectam o texto; coerência é a lógica e sentido geral do texto." },
            { question: "Para que serve o uso dos conectores em um texto?", answer: "Para organizar as ideias e estabelecer relações entre orações e parágrafos." },
            { question: "O que é substituição no contexto da coesão textual?", answer: "É o uso de palavras que substituem termos já mencionados para evitar repetição." },
            { question: "Explique o uso correto do sinal indicativo de crase.", answer: "É usado na fusão da preposição 'a' com o artigo feminino 'a' ou com pronomes demonstrativos que aceitam a preposição." },
            { question: "Qual a diferença entre regência verbal e regência nominal?", answer: "Regência verbal trata da relação entre verbo e seus complementos; regência nominal, entre nome e seus complementos." },
            { question: "O que são pronomes átonos e como devem ser colocados na frase?", answer: "São pronomes oblíquos sem ênfase e geralmente devem ficar ligados ao verbo, em próclise, mesóclise ou ênclise." },
            { question: "Qual a importância da reescrita de textos na comunicação?", answer: "Permite aprimorar clareza, coerência e correção, adequando o texto ao público e objetivo." },
            { question: "O que é a progressão temática em um texto?", answer: "É a forma como os temas são desenvolvidos e relacionados ao longo do texto para manter a coesão." },
            { question: "Dê um exemplo de conjunção subordinativa causal e explique seu uso.", answer: "Exemplo: 'porque'. Indica causa ou motivo na oração subordinada." },
            { question: "Qual a diferença entre verbo transitivo direto e indireto?", answer: "Verbo transitivo direto exige objeto direto; indireto, exige objeto indireto com preposição." },
            { question: "O que é uma oração coordenada sindética?", answer: "Oração ligada a outra por conjunção coordenativa, como 'e', 'mas', 'ou'." },
            { question: "Como identificar o sujeito oculto em uma oração?", answer: "Quando o sujeito não aparece explicitamente, mas pode ser identificado pelo contexto ou pela desinência verbal." },
            { question: "O que caracteriza o uso da vírgula em uma enumeração?", answer: "Separa elementos de uma lista para facilitar a compreensão do texto." },
            { question: "Explique a diferença entre ambiguidade e polissemia.", answer: "Ambiguidade é quando uma frase pode ter dois sentidos diferentes; polissemia é quando uma palavra tem vários significados." },
            { question: "O que é um texto dissertativo?", answer: "É um texto que apresenta uma opinião ou argumento sobre um tema." },
            { question: "Qual é o objetivo de um texto narrativo?", answer: "Contar uma história com personagens, tempo e espaço definidos." },
            { question: "Qual é a função do pronome relativo?", answer: "Substituir um termo anterior e iniciar uma oração subordinada." },
            { question: "O que é coesão textual?", answer: "É a conexão entre as partes de um texto para garantir continuidade." },
            { question: "O que é coerência textual?", answer: "É a lógica e o sentido do texto como um todo." },
            { question: "Qual a diferença entre parônimos e homônimos?", answer: "Parônimos têm escrita e som parecidos; homônimos têm som igual." },
            { question: "O que são pronomes átomos?", answer: "São pronomes que não têm tonicidade própria (me, te, se, nos...)." },
            { question: "O que é regência verbal?", answer: "É a relação entre um verbo e os termos que o completam." },
            { question: "Quando se usa o ponto e vírgula?", answer: "Para separar orações com certa independência ou itens complexos em lista." },
            { question: "Qual é a função da vírgula?", answer: "Separar elementos, orações e indicar pausas no texto." },
            { question: "O que é uma oração subordinada?", answer: "É uma oração que depende de outra para ter sentido completo." },
            { question: "O que é uma oração coordenada?", answer: "É uma oração que tem sentido completo e se liga a outra." },
            { question: "Qual é a diferença entre oração e período?", answer: "Oração tem verbo; período é uma ou mais orações completas." },
            { question: "Quando se usa crase?", answer: "Quando ocorre a fusão da preposição 'a' com o artigo definido 'a'." },
            { question: "O que é colocação pronominal?", answer: "É a posição dos pronomes oblíquos em relação ao verbo." },
            { question: "O que é ambiguidade?", answer: "É a duplicidade de sentido numa frase." },
            { question: "O que é verbo de ligação?", answer: "É o verbo que liga o sujeito a uma característica (ex: ser, estar)." },
            { question: "Qual é a função do sujeito oculto?", answer: "É aquele que não aparece na oração, mas é identificado pelo contexto." },
            { question: "Qual é o sujeito indeterminado?", answer: "É aquele que não se sabe ou não se quer identificar." },
            { question: "O que é frase?", answer: "Enunciado com sentido completo, podendo ou não ter verbo." },
            { question: "O que é uma oração reduzida?", answer: "É uma oração subordinada que não se inicia por conjunção." },
            { question: "Como se identifica a voz passiva?", answer: "O sujeito recebe a ação verbal." },
            { question: "O que é um predicado verbal?", answer: "É aquele cujo núcleo é um verbo de ação." },
            { question: "O que é um predicado nominal?", answer: "É aquele cujo núcleo é um nome (estado ou característica do sujeito)." },
            { question: "O que é um predicado verbo-nominal?", answer: "É aquele que possui dois núcleos: um verbo e um nome." },
            { question: "Qual é a estrutura básica da oração?", answer: "Sujeito + verbo + complementos." },
            { question: "O que é a norma culta da língua?", answer: "É a forma gramaticalmente correta, usada em contextos formais." },
            { question: "O que é o Manual da Presidência da República?", answer: "É o guia oficial de redação para órgãos públicos." },
            { question: "Qual é o objetivo da redação oficial?", answer: "Clareza, concisão, formalidade e impessoalidade." },
            { question: "Como deve ser a linguagem da redação oficial?", answer: "Impessoal, clara e objetiva." },
            { question: "O que é paralelismo sintático?", answer: "É a simetria na estrutura das frases." },
            { question: "O que é substituição lexical?", answer: "Trocar uma palavra por sinônimo ou termo equivalente." },
            { question: "O que é uma anáfora?", answer: "Referência a um termo anterior no texto." },
            { question: "O que é catáfora?", answer: "Referência a um termo que ainda será mencionado." },
            { question: "O que é coesão referencial?", answer: "É a retomada de ideias ou termos no texto." },
            { question: "O que é coesão sequencial?", answer: "É a organização lógica entre as partes do texto." },
            { question: "Qual é a diferença entre linguagem denotativa e conotativa?", answer: "Denotativa é literal; conotativa é figurada." },
            { question: "Quando se usa ponto final?", answer: "Para encerrar uma oração declarativa." },
            { question: "O que indica o ponto de interrogação?", answer: "Uma pergunta direta." },
            { question: "Quando se usa reticências?", answer: "Para indicar interrupção ou continuação de ideia." },
            { question: "Quando se usa os dois-pontos?", answer: "Antes de uma explicação ou citação." },
            { question: "Como se caracteriza a linguagem formal?", answer: "Regras gramaticais, vocabulário técnico, sem gírias." },
            { question: "Qual o papel do sujeito composto?", answer: "Dois ou mais núcleos realizando a ação verbal." },
            { question: "O que é tempo verbal?", answer: "Indica quando a ação verbal acontece." },
            { question: "O que é modo verbal?", answer: "Expressa a atitude do falante (indicativo, subjuntivo, imperativo)." },
            { question: "O que é um verbo irregular?", answer: "É aquele que não segue o modelo padrão de conjugação." },
            { question: "O que é verbo transitivo?", answer: "É o verbo que exige complemento (objeto direto ou indireto)." },
            { question: "O que é verbo intransitivo?", answer: "Não exige complemento." },
            { question: "Qual a diferença entre adjunto e complemento?", answer: "Adjunto acrescenta; complemento é necessário." },
            { question: "O que é predicativo do sujeito?", answer: "É a característica atribuída ao sujeito por meio do verbo de ligação." },
            { question: "O que é sujeito elíptico?", answer: "Sujeito que não aparece, mas é identificado pelo contexto." },
            { question: "O que é período composto?", answer: "Frase com duas ou mais orações." },
            { question: "O que é conjunção?", answer: "Palavra que liga orações ou termos semelhantes." },
            { question: "O que são interjeições?", answer: "Palavras que expressam emoções ou sentimentos." },
            { question: "O que é um advérbio?", answer: "Palavra que modifica verbo, adjetivo ou outro advérbio." },
            { question: "O que é uma preposição?", answer: "Palavra que liga dois termos estabelecendo relação entre eles." },
            { question: "O que é locução verbal?", answer: "Conjunto de dois ou mais verbos com valor de um só." },
            { question: "O que é sujeito indeterminado?", answer: "Quando o agente da ação não é identificado." },
            { question: "Qual a diferença entre 'por que' e 'porque'?", answer: "'Por que' é usado em perguntas; 'porque' em respostas." },
            { question: "O que é sujeito inexistente?", answer: "Quando o verbo é impessoal (ex: 'faz frio')." },
            { question: "O que é polissemia?", answer: "Quando uma palavra tem vários significados." },
            { question: "O que é denotação?", answer: "Uso literal da linguagem." },
            { question: "O que é conotação?", answer: "Uso figurado da linguagem." },
            { question: "Qual é a função da coesão lexical?", answer: "Evitar repetições, usando sinônimos ou expressões equivalentes." },
            { question: "O que é sentido figurado?", answer: "Quando a palavra é usada fora do seu sentido comum." },
            { question: "O que é aposto?", answer: "Termo que explica ou especifica outro, geralmente separado por vírgulas." },
            { question: "O que é vocativo?", answer: "Chamamento ou interpelação direta ao interlocutor." },
            { question: "O que são advérbios de intensidade?", answer: "Indicam grau da ação, como 'muito', 'demais', 'tão'." },
            { question: "O que é pleonasmo?", answer: "Repetição de ideias para reforço de significado." },
            { question: "O que é hipérbole?", answer: "Exagero intencional na expressão de uma ideia." },
            { question: "O que é antítese?", answer: "Oposição de ideias numa mesma frase." },
            { question: "O que é paradoxo?", answer: "Contradição aparente entre termos que expressam uma ideia." },
            { question: "O que é elipse?", answer: "Omissão de um termo facilmente subentendido." },
            { question: "O que é zeugma?", answer: "Tipo de elipse em que se omite um termo já mencionado." },
            { question: "O que é metonímia?", answer: "Substituição de uma palavra por outra com relação próxima." },
            { question: "O que é prosopopeia?", answer: "Atribuição de características humanas a seres inanimados." },
            { question: "O que é perifrase?", answer: "Uso de expressão que substitui um nome próprio ou comum." },
            { question: "O que é paródia?", answer: "Reinterpretação crítica ou humorística de texto ou obra." },
            { question: "O que é paráfrase?", answer: "Reescrita de um texto mantendo o sentido original." },
            { question: "O que é coesão por elipse?", answer: "Ligação textual com omissão de elementos já conhecidos." },
            { question: "O que é discurso indireto livre?", answer: "Mistura do discurso direto com o indireto sem uso de verbos declarativos." },
            { question: "O que são figuras de som?", answer: "Recursos como aliteração, assonância e onomatopeia." },
            { question: "O que é parônimia contextual?", answer: "Uso de palavras parônimas com sentidos distintos pelo contexto." },
            { question: "O que é predicado oculto?", answer: "Quando a ação está implícita e não declarada." },
            { question: "O que é sujeito composto por justaposição?", answer: "Quando dois ou mais termos formam o sujeito sem conectivo." },
            // New questions from Questões 4.docx
            { question: "Qual a diferença entre oração subordinada adverbial causal e concessiva?", answer: "A causal indica motivo (ex: 'porque choveu'); a concessiva expressa contraste com o esperado (ex: 'embora chovesse')." },
            { question: "Como o paralelismo sintático contribui para a coesão textual?", answer: "Mantém a simetria entre os elementos de mesma função, facilitando a leitura e compreensão do texto." },
            { question: "O que é discurso indireto livre e onde costuma ser empregado?", answer: "Mistura a fala do narrador com a do personagem, sem marcas formais; comum em narrativas modernas." },
            { question: "Quando a crase é obrigatória antes de pronomes demonstrativos?", answer: "Quando o termo exige preposição 'a' e o pronome começa com 'a', como em 'àquela altura'." },
            { question: "Como a polissemia pode gerar ambiguidade num texto?", answer: "Quando uma palavra tem múltiplos significados e o contexto não deixa claro qual sentido usar." },
            { question: "O que caracteriza uma oração subordinada adverbial condicional?", answer: "Introduz uma condição para que a ação da principal se realize, usando 'se', 'caso', etc." },
            { question: "O que é predicado verbo-nominal?", answer: "Aquele que possui dois núcleos: um verbo significativo e um nome que atribui característica ao sujeito ou ao objeto." },
            { question: "Em qual situação a vírgula pode mudar completamente o sentido da frase?", answer: "Quando altera a função do termo (ex: 'Não, espere.' vs. 'Não espere.')." },
            { question: "O que é catáfora e como se diferencia da anáfora?", answer: "Catáfora antecipa um termo ainda não mencionado; anáfora retoma algo já citado." },
            { question: "Quando se deve usar o ponto e vírgula?", answer: "Para separar orações com certa independência ou itens complexos dentro de uma enumeração." },
            { question: "Qual a diferença entre coesão lexical e coesão referencial?", answer: "Lexical usa sinônimos/repetições; referencial retoma termos com pronomes ou elipses." },
            { question: "O que é ambiguidade estrutural?", answer: "Quando a organização sintática permite mais de uma interpretação." },
            { question: "O que caracteriza um período composto por subordinação?", answer: "Possui uma oração principal e outra(s) que dependem dela para fazer sentido." },
            { question: "O que são conjunções adversativas e qual sua função?", answer: "Conectam ideias opostas, como 'mas', 'porém', 'contudo'." },
            { question: "Quando ocorre erro de regência verbal com o verbo 'assistir'?", answer: "Quando usado sem a preposição exigida: o correto é 'assistir ao filme'." }
        ],
        multipleChoice: [
            {
                question: "Em qual opção o texto apresenta linguagem mais formal?",
                options: [
                    "E aí, tudo certo?",
                    "Bora resolver isso logo.",
                    "Informo que a reunião ocorrerá às 14h.",
                    "Tá tudo tranquilo por aqui.",
                    "Vamos nessa?"
                ],
                answer: 2,
                explanation: "Frase objetiva, sem gírias, com linguagem apropriada para contexto formal."
            },
            {
                question: "Qual frase apresenta erro de ortografia?",
                options: [
                    "Exceção",
                    "Cansasso",
                    "Ansiedade",
                    "Necessário",
                    "Difícil"
                ],
                answer: 1,
                explanation: "O correto é 'cansaço', com apenas um 's'."
            },
            {
                question: "Em 'Ele saiu cedo, porque estava cansado.', a palavra 'porque' indica:",
                options: [
                    "Tempo",
                    "Condição",
                    "Finalidade",
                    "Causa",
                    "Concessão"
                ],
                answer: 3,
                explanation: "'Porque' indica o motivo da saída: ele estava cansado."
            },
            {
                question: "Qual é o sujeito da frase: 'Chegaram tarde ao evento'?",
                options: [
                    "Evento",
                    "Eles",
                    "Tarde",
                    "Chegaram",
                    "Não há sujeito"
                ],
                answer: 1,
                explanation: "O sujeito está oculto - 'eles'."
            },
            {
                question: "Assinale a frase com concordância verbal correta:",
                options: [
                    "Houveram muitos problemas.",
                    "Existe pessoas esperando.",
                    "Faltou cadeiras no salão.",
                    "Chegaram os documentos.",
                    "Haviam crianças na rua."
                ],
                answer: 3,
                explanation: "Verbo concorda com 'os documentos' (plural)."
            },
            {
                question: "A alternativa com pronome átono mal empregado é:",
                options: [
                    "Entreguei-lhe o presente.",
                    "Viu-me na festa.",
                    "Chamaram-me para reunião.",
                    "Me empresta seu carro?",
                    "Apresentei-me ao diretor."
                ],
                answer: 3,
                explanation: "No início da frase o correto seria 'Empresta-me...', pois pronomes átonos não iniciam orações formais."
            },
            {
                question: "'Contudo', 'entretanto' e 'porém' são conectores que indicam:",
                options: [
                    "Causa",
                    "Comparação",
                    "Concessão",
                    "Adição",
                    "Oposição"
                ],
                answer: 4,
                explanation: "São conectivos adversativos, indicando oposição."
            },
            {
                question: "Em qual alternativa há erro na regência verbal?",
                options: [
                    "Aspirava a um cargo melhor.",
                    "Assistia ao jogo.",
                    "Cheguei na escola cedo.",
                    "Preferia doce a salgado.",
                    "Obedeceu às ordens."
                ],
                answer: 2,
                explanation: "O correto é 'Cheguei à escola', com crase."
            },
            {
                question: "O termo 'ainda que' estabelece ideia de:",
                options: [
                    "Causa",
                    "Condição",
                    "Concessão",
                    "Finalidade",
                    "Comparação"
                ],
                answer: 2,
                explanation: "'Ainda que' é conjunção concessiva, indica algo que ocorre mesmo com obstáculo."
            },
            {
                question: "Assinale a frase com pontuação correta:",
                options: [
                    "Cheguei, cedo, como sempre.",
                    "Joana trouxe os livros Ana, os cadernos.",
                    "Espere por favor!",
                    "A resposta, no entanto, foi negativa.",
                    "Carlos disse: estou cansado."
                ],
                answer: 3,
                explanation: "Uso correto da vírgula para isolar o conector 'no entanto'."
            },
            {
                question: "Qual palavra é um advérbio de modo?",
                options: [
                    "Alegre",
                    "Rapidamente",
                    "Rapidez",
                    "Correto",
                    "Apressa"
                ],
                answer: 1,
                explanation: "Termina em '-mente' e indica modo."
            },
            {
                question: "Em 'O professor explicou a matéria aos alunos', 'aos alunos' exerce a função de:",
                options: [
                    "Sujeito",
                    "Predicado",
                    "Objeto direto",
                    "Objeto indireto",
                    "Vocativo"
                ],
                answer: 3,
                explanation: "O verbo 'explicar' exige complemento com preposição - objeto indireto."
            },
            {
                question: "O verbo 'haver' no sentido de existir é usado na forma:",
                options: [
                    "Plural",
                    "Reflexiva",
                    "Invariável",
                    "Passiva",
                    "Pronominal"
                ],
                answer: 2,
                explanation: "'Havia muitos alunos' - o verbo permanece no singular."
            },
            {
                question: "Assinale a alternativa que apresenta coesão textual por substituição lexical:",
                options: [
                    "Pedro gosta de futebol. Pedro joga bem.",
                    "Pedro gosta de futebol. Ele joga bem.",
                    "Pedro gosta de futebol e joga bem.",
                    "Pedro gosta de futebol, pois joga bem.",
                    "Pedro gosta de futebol, mas não joga bem."
                ],
                answer: 1,
                explanation: "O pronome 'ele' substitui 'Pedro', mantendo a coesão."
            },
            {
                question: "Em 'Ele correu, caiu, machucou-se.' há:",
                options: [
                    "Enumeração",
                    "Causa",
                    "Condição",
                    "Oposição",
                    "Finalidade"
                ],
                answer: 0,
                explanation: "A frase apresenta uma sequência de ações."
            },
            {
                question: "'Apesar de tudo, não desistiu.' A expressão 'apesar de' indica:",
                options: [
                    "Tempo",
                    "Concessão",
                    "Causa",
                    "Condição",
                    "Conclusão"
                ],
                answer: 1,
                explanation: "'Apesar de' expressa concessão, algo contrário ao esperado."
            },
            {
                question: "Qual é o gênero textual da frase: 'Prezados, seguem os documentos em anexo.'?",
                options: [
                    "Propaganda",
                    "Artigo de opinião",
                    "Bilhete informal",
                    "E-mail ou ofício",
                    "Receita culinária"
                ],
                answer: 3,
                explanation: "Estrutura e linguagem formal indicam comunicação oficial."
            },
            {
                question: "Qual é a função do ponto e vírgula na frase: 'Estudou muito; mesmo assim, foi mal na prova'?",
                options: [
                    "Indicar enumeração",
                    "Separar orações independentes",
                    "Introduzir explicação",
                    "Marcar conclusão",
                    "Indicar tempo"
                ],
                answer: 1,
                explanation: "Separa orações com certa autonomia e ideias contrastantes."
            },
            {
                question: "'Se eu soubesse, teria avisado.' O tempo verbal empregado é:",
                options: [
                    "Futuro do presente",
                    "Presente do indicativo",
                    "Pretérito imperfeito",
                    "Pretérito mais-que-perfeito",
                    "Pretérito do subjuntivo"
                ],
                answer: 4,
                explanation: "'Soubesse' está no pretérito do subjuntivo, expressando hipótese."
            },
            {
                question: "Qual termo abaixo é um conector de conclusão?",
                options: [
                    "Portanto",
                    "Contudo",
                    "Entretanto",
                    "Embora",
                    "Ainda que"
                ],
                answer: 0,
                explanation: "'Portanto' é conector conclusivo."
            },
            {
                question: "Em 'Os meninos saíram e as meninas ficaram', temos uma relação de:",
                options: [
                    "Explicação",
                    "Condição",
                    "Alternância",
                    "Coordenação",
                    "Subordinação"
                ],
                answer: 3,
                explanation: "As orações são independentes e ligadas por coordenação."
            },
            {
                question: "Assinale a opção com erro de regência:",
                options: [
                    "Prefiro cinema a teatro.",
                    "Informei o aluno do ocorrido.",
                    "Agradeço a todos pela atenção.",
                    "Chegou ao local atrasado.",
                    "Assisti o filme com atenção."
                ],
                answer: 4,
                explanation: "O verbo 'assistir' exige preposição: 'assisti ao filme'."
            },
            {
                question: "A frase 'Ele mesmo lavou o carro' contém:",
                options: [
                    "Pronome indefinido",
                    "Pronome demonstrativo",
                    "Pronome reflexivo",
                    "Pronome de realce",
                    "Pronome relativo"
                ],
                answer: 3,
                explanation: "'Mesmo' dá ênfase ao sujeito - pronome de realce."
            },
            {
                question: "Qual opção apresenta um vocativo?",
                options: [
                    "Ela me pediu ajuda.",
                    "O João chegou agora.",
                    "Boa noite, senhores!",
                    "Eles foram embora.",
                    "Gostamos do lugar."
                ],
                answer: 2,
                explanation: "'Senhores' é vocativo - chamamento ao interlocutor."
            },
            {
                question: "A substituição de 'embora' por 'apesar de' exige:",
                options: [
                    "Mudança de tempo verbal",
                    "Nenhuma alteração",
                    "Troca do sujeito",
                    "Uso de crase",
                    "Mudança na pontuação"
                ],
                answer: 0,
                explanation: "'Embora estudasse' → 'Apesar de estudar' (verbo no infinitivo)."
            },
            {
                question: "Assinale a alternativa com erro de coesão:",
                options: [
                    "Maria viajou. Ela chegou ontem.",
                    "João leu o livro. Depois, escreveu um resumo.",
                    "Choveu. Por isso, saiu sem guarda-chuva.",
                    "Pedro foi ao mercado. Porém, não comprou nada.",
                    "Comprei o presente. Este foi caro."
                ],
                answer: 2,
                explanation: "Há incoerência: se choveu, o esperado seria sair com guarda-chuva."
            },
            {
                question: "Em 'Ele tem mais amigos do que o irmão', ocorre:",
                options: [
                    "Comparação",
                    "Causa",
                    "Conclusão",
                    "Adição",
                    "Alternância"
                ],
                answer: 0,
                explanation: "'Mais... do que' expressa comparação."
            },
            {
                question: "Assinale a palavra com erro de ortografia:",
                options: [
                    "Necessidade",
                    "Imprescindível",
                    "Suposição",
                    "Chuchu",
                    "Prosição"
                ],
                answer: 4,
                explanation: "O correto é 'posição'."
            },
            {
                question: "Qual alternativa apresenta uma oração subordinada adverbial causal?",
                options: [
                    "Como estava cansado, dormiu cedo.",
                    "Se chover, não sairemos.",
                    "Embora estudasse, não passou.",
                    "Quando chegar, avise.",
                    "Para vencer, é preciso lutar."
                ],
                answer: 0,
                explanation: "'Como estava cansado' indica causa da ação principal."
            },
            {
                question: "Assinale a alternativa com sujeito indeterminado:",
                options: [
                    "Eles viajaram cedo.",
                    "Chegaram tarde.",
                    "Todos estudaram.",
                    "A professora explicou.",
                    "O aluno respondeu."
                ],
                answer: 1,
                explanation: "Verbo na 3ª pessoa do plural sem sujeito explícito → sujeito indeterminado."
            },
            {
                question: "'A moça chegou sorrindo.' O termo 'sorrindo' é:",
                options: [
                    "Verbo principal",
                    "Adjetivo",
                    "Advérbio",
                    "Locução verbal",
                    "Gerúndio"
                ],
                answer: 4,
                explanation: "'Sorrindo' está no gerúndio, expressando ação simultânea."
            },
            {
                question: "Qual alternativa apresenta pleonasmo vicioso?",
                options: [
                    "Subir para cima",
                    "Entrar na sala",
                    "Sair correndo",
                    "Gritar alto",
                    "Ver com os olhos"
                ],
                answer: 0,
                explanation: "'Subir' já pressupõe direção para cima."
            },
            {
                question: "O que indica o sinal indicativo de crase em 'à escola'?",
                options: [
                    "Preposição e artigo definidos",
                    "Verbo transitivo direto",
                    "Pronome indefinido",
                    "Substantivo próprio",
                    "Contração de conjunção"
                ],
                answer: 0,
                explanation: "Fusão da preposição 'a' com o artigo definido 'a'."
            },
            {
                question: "Em 'Gostaria de saber se ele vem.', a palavra destacada é uma conjunção:",
                options: [
                    "Concessiva",
                    "Causal",
                    "Integrante",
                    "Condicional",
                    "Temporal"
                ],
                answer: 2,
                explanation: "Introduz oração subordinada substantiva - conjunção integrante."
            },
            {
                question: "Em qual alternativa há um erro de colocação pronominal:",
                options: [
                    "Disse-me a verdade.",
                    "Me disseram a verdade.",
                    "Entregou-lhe o presente.",
                    "Encontraram-se por acaso.",
                    "Não me avisaram."
                ],
                answer: 1,
                explanation: "Início de frase com pronome átono é inadequado em contextos formais."
            },
            {
                question: "Em 'Era uma vez uma princesa...', o gênero textual é:",
                options: [
                    "Instrução",
                    "Propaganda",
                    "Narração",
                    "Relatório",
                    "Editorial"
                ],
                answer: 2,
                explanation: "'Era uma vez...' é típico da narrativa, especialmente contos."
            },
            {
                question: "Qual alternativa apresenta linguagem denotativa?",
                options: [
                    "Ele está nas nuvens hoje.",
                    "O tempo voa!",
                    "A água ferve a 100ºC.",
                    "Ela é uma flor.",
                    "Chove tristeza nesta casa."
                ],
                answer: 2,
                explanation: "Linguagem denotativa é objetiva e literal, como em dados científicos."
            },
            {
                question: "A oração 'Não estudei, por isso não passei' expressa ideia de:",
                options: [
                    "Oposição",
                    "Conclusão",
                    "Comparação",
                    "Adição",
                    "Hipótese"
                ],
                answer: 1,
                explanation: "'Por isso' é conector de conclusão."
            },
            {
                question: "Em qual alternativa o termo destacado é um adjunto adverbial de lugar?",
                options: [
                    "Estudo todos os dias.",
                    "Trabalho aqui.",
                    "Correu depressa.",
                    "Foi embora cedo.",
                    "Agiu com cuidado."
                ],
                answer: 1,
                explanation: "'Aqui' indica o lugar da ação."
            },
            {
                question: "Qual alternativa apresenta um verbo no modo subjuntivo?",
                options: [
                    "Estudarei bastante.",
                    "Estudo todos os dias.",
                    "Estudaria com calma.",
                    "Estude sempre que puder.",
                    "Talvez estude amanhã."
                ],
                answer: 4,
                explanation: "'Talvez estude' expressa possibilidade - subjuntivo."
            },
            {
                question: "Em 'Fale baixo, pois o bebê dorme.', a conjunção indica:",
                options: [
                    "Finalidade",
                    "Oposição",
                    "Causa",
                    "Condição",
                    "Concessão"
                ],
                answer: 2,
                explanation: "'Pois' explica o motivo da fala baixa."
            },
            {
                question: "Qual alternativa mostra linguagem conotativa?",
                options: [
                    "O sol nasce no leste.",
                    "João tem 35 anos.",
                    "Aquela mulher é um anjo.",
                    "Água é essencial para a vida.",
                    "Estava com febre de 39ºC."
                ],
                answer: 2,
                explanation: "'Anjo' é usado com sentido figurado - linguagem conotativa."
            },
            {
                question: "Qual frase exige o uso de crase?",
                options: [
                    "Vou a feira.",
                    "Cheguei a escola cedo.",
                    "Voltei a casa correndo.",
                    "Dirigi-me a aluna atenta.",
                    "Entreguei o trabalho à professora."
                ],
                answer: 4,
                explanation: "Verbo exige preposição 'a' + artigo 'a' = crase obrigatória."
            },
            {
                question: "O trecho 'Ele saiu cedo, porque estava cansado' pode ser reescrito com:",
                options: [
                    "Embora",
                    "Para que",
                    "Caso",
                    "Já que",
                    "Como se"
                ],
                answer: 3,
                explanation: "'Porque' e 'já que' expressam causa."
            },
            {
                question: "Em 'Aqueles alunos são esforçados', o termo 'aqueles' é um:",
                options: [
                    "Pronome indefinido",
                    "Pronome possessivo",
                    "Pronome demonstrativo",
                    "Artigo definido",
                    "Substantivo"
                ],
                answer: 2,
                explanation: "'Aqueles' localiza no espaço ou no tempo - pronome demonstrativo."
            },
            {
                question: "Assinale a alternativa com verbo pronominal:",
                options: [
                    "Ele correu.",
                    "Ela se feriu.",
                    "Eles comeram.",
                    "João estudava.",
                    "O trem chegou."
                ],
                answer: 1,
                explanation: "'Se feriu' é verbo pronominal - exige pronome reflexivo."
            },
            {
                question: "A oração 'Embora estivesse cansado, saiu para caminhar' tem sentido de:",
                options: [
                    "Causa",
                    "Consequência",
                    "Adição",
                    "Concessão",
                    "Comparação"
                ],
                answer: 3,
                explanation: "'Embora' indica concessão - algo que contraria a expectativa."
            },
            {
                question: "Qual frase apresenta linguagem adequada para um ofício?",
                options: [
                    "Te mando aí depois.",
                    "Seguinte: tô te avisando.",
                    "Encaminho, por meio deste, as informações solicitadas.",
                    "Me responde logo, tá?",
                    "Bora resolver isso!"
                ],
                answer: 2,
                explanation: "Linguagem formal e objetiva, adequada a documentos oficiais."
            },
            {
                question: "Em qual opção há erro de concordância nominal?",
                options: [
                    "Estava certo e decidido.",
                    "As provas estavam difíceis.",
                    "Eles estavam nervoso.",
                    "A criança parecia feliz.",
                    "As meninas estão caladas."
                ],
                answer: 2,
                explanation: "O correto seria 'nervosos' para concordar com o sujeito 'eles'."
            },
            {
                question: "Qual palavra indica tempo?",
                options: [
                    "Alegremente",
                    "Ontem",
                    "Aqui",
                    "Muito",
                    "Longe"
                ],
                answer: 1,
                explanation: "'Ontem' é advérbio de tempo."
            }
        ]
    },
    informatica: {
        name: "Noções de Informática",
        questions: [
            { question: "O que é hardware?", answer: "Parte física do computador." },
            { question: "O que é software?", answer: "Conjunto de programas e sistemas usados no computador." },
            { question: "Qual é a função do sistema operacional?", answer: "Gerenciar os recursos do computador." },
            { question: "O que é o Windows 10?", answer: "Sistema operacional da Microsoft." },
            { question: "Qual é o atalho para copiar no Windows?", answer: "Ctrl + C." },
            { question: "Qual é o atalho para colar no Windows?", answer: "Ctrl + V." },
            { question: "O que é um antivirus?", answer: "Programa que protege o computador contra ameaças." },
            { question: "Para que serve um firewall?", answer: "Controlar o tráfego de dados entre redes." },
            { question: "O que é rede de computadores?", answer: "Conjunto de dispositivos conectados para trocar informações." },
            { question: "O que é uma LAN?", answer: "Rede local, usada em espaços pequenos (ex: escritório)." },
            { question: "O que é uma WAN?", answer: "Rede de longa distância (ex: internet)." },
            { question: "O que é endereço IP?", answer: "Identificação numérica de um dispositivo em uma rede." },
            { question: "Para que serve o navegador?", answer: "Acessar páginas da internet." },
            { question: "Exemplo de navegador de internet:", answer: "Google Chrome." },
            { question: "O que é URL?", answer: "Endereço de um site na internet." },
            { question: "O que é phishing?", answer: "Golpe digital para roubar dados." },
            { question: "O que é backup?", answer: "Cópia de segurança dos dados." },
            { question: "O que é um pendrive?", answer: "Dispositivo portátil de armazenamento." },
            { question: "Para que serve o Microsoft Word?", answer: "Criar e editar textos." },
            { question: "Qual é a extensão padrão do Word?", answer: ".docx" },
            { question: "Para que serve o Microsoft Excel?", answer: "Criar planilhas e fazer cálculos." },
            { question: "O que é uma célula no Excel?", answer: "Interseção entre linha e coluna." },
            { question: "Como iniciar uma fórmula no Excel?", answer: "Com sinal de igual (=)." },
            { question: "O que faz a função SOMA no Excel?", answer: "Soma valores numéricos." },
            { question: "Para que serve o PowerPoint?", answer: "Criar apresentações de slides." },
            { question: "O que é o LibreOffice?", answer: "Pacote de escritório gratuito." },
            { question: "O que é o Google Workspace?", answer: "Conjunto de ferramentas Google para produtividade." },
            { question: "Exemplos do Google Workspace:", answer: "Gmail, Drive, Docs, Sheets." },
            { question: "O que é o Google Docs?", answer: "Editor de texto online." },
            { question: "Para que serve o Google Sheets?", answer: "Planilhas online." },
            { question: "O que é computação em nuvem?", answer: "Uso de dados e programas pela internet." },
            { question: "Vantagem da nuvem:", answer: "Acesso remoto a arquivos." },
            { question: "O que é um dado?", answer: "Informação bruta, sem tratamento." },
            { question: "O que é uma informação?", answer: "Dado tratado e útil." },
            { question: "O que é banco de dados?", answer: "Conjunto organizado de dados." },
            { question: "O que é BI (Business Intelligence)?", answer: "Análise de dados para decisões estratégicas." },
            { question: "O que é um arquivo?", answer: "Conjunto de dados armazenado." },
            { question: "O que é um drive?", answer: "Dispositivo de armazenamento (ex: HD, SSD)." },
            { question: "O que é um atalho?", answer: "Caminho rápido para acessar programas." },
            { question: "O que é formatação de texto?", answer: "Alteração de aparência do texto (fonte, cor etc.)." },
            { question: "O que é planilha eletrônica?", answer: "Arquivo com linhas e colunas para cálculos." },
            { question: "O que são métricas em dados?", answer: "Unidades de medida para análise." },
            { question: "O que é a transformação de dados?", answer: "Conversão de dados brutos em úteis." },
            { question: "O que é análise de dados?", answer: "Processo de interpretação de dados." },
            { question: "Para que serve o Power BI?", answer: "Ferramenta de visualização de dados." },
            { question: "O que é segurança da informação?", answer: "Proteção dos dados contra acesso indevido." },
            { question: "O que é senha forte?", answer: "Senha com letras, números e símbolos." },
            { question: "O que é criptografia?", answer: "Codificação de dados para segurança." },
            { question: "O que é spam?", answer: "Mensagem eletrônica indesejada." },
            { question: "O que é o CADIN?", answer: "Cadastro de inadimplentes do setor público." },
            { question: "O que é sistema operacional?", answer: "Programa que gerencia o hardware e softwares do computador." },
            { question: "O que é pasta (diretório)?", answer: "Local onde arquivos são armazenados." },
            { question: "Qual a função do atalho Ctrl + Z?", answer: "Desfazer a última ação." },
            { question: "O que é cloud computing?", answer: "Computação baseada em serviços online." },
            { question: "O que é formatação de disco?", answer: "Preparação do disco rígido para receber dados." },
            { question: "O que é planilha eletrônica?", answer: "Programa usado para cálculos e organização de dados." },
            { question: "O que é malware?", answer: "Programa malicioso criado para prejudicar o sistema." },
            { question: "O que é spyware?", answer: "Programa espião que coleta dados do usuário." },
            { question: "O que é download?", answer: "Ação de transferir arquivos da internet para o computador." },
            { question: "O que é upload?", answer: "Enviar arquivos do computador para a internet." },
            { question: "O que é navegador padrão?", answer: "Navegador usado automaticamente pelo sistema." },
            { question: "O que é cookies?", answer: "Arquivos que armazenam informações do usuário em sites." },
            { question: "O que é cache?", answer: "Memória usada para armazenar dados temporários." },
            { question: "O que é drive C:?", answer: "Partição principal do sistema no Windows." },
            { question: "O que é o atalho Ctrl + P?", answer: "Imprimir o documento atual." },
            { question: "O que é sistema operacional Linux?", answer: "Sistema de código aberto usado em servidores e PCs." },
            { question: "O que é RAM?", answer: "Memória de acesso aleatório usada pelo sistema para operações temporárias." },
            { question: "O que é ROM?", answer: "Memória de leitura com dados permanentes no sistema." },
            { question: "O que é SSD?", answer: "Unidade de armazenamento mais rápida que o HD tradicional." },
            { question: "O que é protocolo HTTP?", answer: "Protocolo usado na transmissão de dados da web." },
            { question: "O que é HTTPS?", answer: "Versão segura do protocolo HTTP com criptografia." },
            { question: "Para que serve o Ctrl + T no navegador?", answer: "Abrir nova guia." },
            { question: "O que é IP dinâmico?", answer: "Endereço IP que muda a cada conexão." },
            { question: "O que é IP fixo?", answer: "Endereço IP que permanece o mesmo sempre." },
            { question: "O que é resolução de tela?", answer: "Quantidade de pixels exibidos na tela." },
            { question: "O que é DNS?", answer: "Sistema que traduz nomes de sites para IPs." },
            { question: "O que é hotspot?", answer: "Ponto de acesso Wi-Fi." },
            { question: "O que é multitarefa?", answer: "Capacidade de executar vários programas ao mesmo tempo." },
            { question: "O que é planilha em nuvem?", answer: "Planilha acessada e editada online." },
            { question: "O que é comando 'Salvar Como'?", answer: "Cria uma nova versão do arquivo com novo nome ou local." },
            { question: "O que é phishing por e-mail?", answer: "Tentativa de roubo de dados via mensagens falsas." },
            { question: "O que é autenticação em dois fatores?", answer: "Segurança extra exigindo dois meios de verificação." },
            { question: "O que é formato PDF?", answer: "Formato de documento portátil, ideal para leitura e impressão." },
            { question: "O que é modo de compatibilidade no Word?", answer: "Ajusta recursos para versões anteriores do programa." },
            { question: "O que é hiperlink?", answer: "Link que direciona para outro conteúdo ou site." },
            // New questions from Questões 4.docx
            { question: "O que é phishing?", answer: "Golpe digital para roubar dados." },
            { question: "O que é criptografia?", answer: "Codificação de dados para segurança." },
            { question: "Como funciona a autenticação de dois fatores?", answer: "Combina duas formas de verificação, como senha e código enviado por SMS." },
            { question: "Qual a diferença entre software livre e software proprietário?", answer: "Livre permite modificar e distribuir; proprietário não permite alterações ou acesso ao código-fonte." },
            { question: "O que são malwares e quais os principais tipos?", answer: "Programas maliciosos como vírus, worms, trojans, spyware e ransomware." },
            { question: "O que é firewall e qual sua função?", answer: "Sistema que filtra o tráfego de rede para proteger contra acessos não autorizados." },
            { question: "Para que serve a função 'PROCV' no Excel?", answer: "Localiza um valor em uma coluna e retorna um valor na mesma linha de outra coluna." },
            { question: "O que significa 'nuvem' na informática?", answer: "Armazenamento e processamento de dados em servidores remotos acessados pela internet." },
            { question: "O que é protocolo HTTP?", answer: "Conjunto de regras para comunicação entre navegadores e servidores." },
            { question: "O que é endereço IP?", answer: "Identificador numérico único de um dispositivo em uma rede." }
        ]
    },

    raciocinio_logico: {
        name: "Raciocínio Lógico",
        questions: [
            { question: "O que é uma proposição?", answer: "É uma frase que pode ser verdadeira ou falsa." },
            { question: "O que é uma proposição simples?", answer: "Aquela com apenas uma ideia." },
            { question: "O que é uma proposição composta?", answer: "Aquela formada por duas ou mais proposições simples." },
            { question: "Qual é o símbolo da conjunção (e)?", answer: "∧" },
            { question: "Qual é o símbolo da disjunção (ou)?", answer: "∨" },
            { question: "Qual é o símbolo da condicional (se... então)?", answer: "→" },
            { question: "Qual é o símbolo da bicondicional (se e somente se)?", answer: "↔" },
            { question: "O que é negação de uma proposição?", answer: "É a afirmação contrária." },
            { question: "Negação de 'João estuda':", answer: "'João não estuda.'" },
            { question: "Qual é o valor lógico da conjunção verdadeira?", answer: "Somente se as duas forem verdadeiras." },
            { question: "Como funciona a disjunção?", answer: "É falsa apenas se as duas forem falsas." },
            { question: "O que é argumento válido?", answer: "Quando a conclusão é consequência das premissas." },
            { question: "O que é tabela-verdade?", answer: "Tabela que mostra todos os valores lógicos possíveis." },
            { question: "O que é equivalência lógica?", answer: "Duas proposições com o mesmo valor lógico." },
            { question: "Equivalente de 'Se A, então B':", answer: "'Se não B, então não A.'" },
            { question: "O que é uma inferência lógica?", answer: "Conclusão baseada em premissas." },
            { question: "O que é silogismo?", answer: "Raciocínio com duas premissas e uma conclusão." },
            { question: "O que é o princípio da não contradição?", answer: "Uma proposição não pode ser verdadeira e falsa ao mesmo tempo." },
            { question: "O que é conjunto?", answer: "Coleção de elementos." },
            { question: "Símbolo de inclusão (pertence):", answer: "∈" },
            { question: "O que é interseção de conjuntos?", answer: "Elementos comuns a dois conjuntos." },
            { question: "O que é união de conjuntos?", answer: "Todos os elementos de dois conjuntos." },
            { question: "O que é subconjunto?", answer: "Conjunto cujos elementos estão em outro." },
            { question: "O que é matriz?", answer: "Tabela de números dispostos em linhas e colunas." },
            { question: "O que é sequência lógica?", answer: "Ordem lógica entre elementos ou números." },
            { question: "O que é proposição verdadeira?", answer: "Aquela que corresponde à realidade ou lógica." },
            { question: "O que é proposição falsa?", answer: "Aquela que não corresponde à realidade." },
            { question: "O que é o valor lógico de uma proposição?", answer: "Indicação se é verdadeira (V) ou falsa (F)." },
            { question: "O que é tabela verdade da condicional?", answer: "É falsa apenas se o antecedente for verdadeiro e o consequente, falso." },
            { question: "O que é negação da conjunção (p ∧ q)?", answer: "¬p ∨ ¬q." },
            { question: "O que é diagrama de Venn?", answer: "Representação visual de conjuntos." },
            { question: "O que é conjunto universo?", answer: "Conjunto que contém todos os elementos possíveis." },
            { question: "O que é complemento de um conjunto?", answer: "Elementos do universo que não pertencem ao conjunto." },
            { question: "O que é raciocínio dedutivo?", answer: "Parte do geral para o particular." },
            { question: "O que é raciocínio indutivo?", answer: "Parte do particular para o geral." },
            { question: "O que é a lógica formal?", answer: "Estudo das formas de raciocínio válidas." },
            { question: "O que é negação da disjunção (p ∨ q)?", answer: "¬p ∧ ¬q." },
            { question: "O que é equivalência lógica da bicondicional?", answer: "(p → q) ∧ (q → p)." },
            { question: "O que é sequência numérica?", answer: "Conjunto de números com padrão ou lógica." },
            { question: "O que é lógica de argumentação?", answer: "Organização de ideias para demonstrar uma conclusão." },
            { question: "O que é contradomínio de uma função?", answer: "Conjunto de possíveis saídas de uma função." },
            { question: "O que é análise combinatória?", answer: "Técnicas para contar possibilidades." },
            { question: "O que é permutação simples?", answer: "Arranjo de elementos sem repetição." },
            { question: "O que é arranjo simples?", answer: "Agrupamento com ordem diferente." },
            { question: "O que é princípio da adição?", answer: "Soma das possibilidades de eventos excludentes." },
            { question: "O que é princípio da multiplicação?", answer: "Produto das possibilidades de eventos consecutivos." },
            { question: "O que é probabilidade?", answer: "Chance de ocorrência de um evento." },
            { question: "O que é evento complementar?", answer: "O que falta para o evento certo acontecer." },
            { question: "O que é disjunção exclusiva?", answer: "Quando apenas uma proposição pode ser verdadeira." },
            { question: "O que é raciocínio abdutivo?", answer: "Inferência a partir de hipóteses plausíveis." },
            { question: "O que é argumento inválido?", answer: "Conclusão que não decorre das premissas." },
            { question: "O que é tautologia?", answer: "Proposição sempre verdadeira." },
            { question: "O que é contradição?", answer: "Proposição sempre falsa." },
            { question: "O que é contingência?", answer: "Proposição que pode ser verdadeira ou falsa." },
            { question: "O que é negação da bicondicional (p ↔ q)?", answer: "(p ∧ ¬q) ∨ (¬p ∧ q)" },
            { question: "O que é modus ponens?", answer: "Se p → q e p é verdadeiro, então q também é." },
            { question: "O que é modus tollens?", answer: "Se p → q e q é falso, então p é falso." },
            { question: "O que é transitividade lógica?", answer: "Se p → q e q → r, então p → r." },
            { question: "O que é contrapositiva de p → q?", answer: "¬q → ¬p." },
            { question: "O que é equivalência de ¬(p ∨ q)?", answer: "¬p ∧ ¬q (Lei de De Morgan)." },
            // New questions from Questões 4.docx
            { question: "O que é negação da proposição composta 'p ∧ q'?", answer: "É '¬p ∨ ¬q', segundo as Leis de De Morgan." },
            { question: "O que é uma tautologia?", answer: "Proposição composta que é sempre verdadeira, independentemente dos valores das partes." },
            { question: "O que representa a proposição condicional 'p → q'?", answer: "Se p é verdadeiro, então q também deve ser verdadeiro para que a proposição seja verdadeira." },
            { question: "Quando a disjunção 'p ∨ q' é falsa?", answer: "Apenas quando p e q forem ambos falsos." },
            { question: "Qual é a contrapositiva de 'Se Pedro estuda, ele passa'?", answer: "Se Pedro não passa, então ele não estuda." },
            { question: "Como funciona o modus ponens?", answer: "Se 'p → q' é verdadeiro e 'p' ocorre, então 'q' deve ocorrer." },
            { question: "O que é argumento válido na lógica proposicional?", answer: "Aquele em que a conclusão decorre logicamente das premissas." },
            { question: "Qual a diferença entre raciocínio dedutivo e indutivo?", answer: "Dedutivo vai do geral ao particular; indutivo, do particular ao geral." },
            { question: "Qual é a negação da proposição 'Todos os alunos passaram'?", answer: "Pelo menos um aluno não passou." },
            { question: "O que representa a bicondicional 'p ↔ q'?", answer: "p é verdadeiro se, e somente se, q for verdadeiro." },
            { question: "Quando uma proposição é contingente?", answer: "Quando pode ser verdadeira ou falsa, dependendo dos valores de p e q." },
            { question: "O que é um silogismo?", answer: "Argumento com duas premissas e uma conclusão lógica (ex: Todos os homens são mortais; Sócrates é homem; logo, Sócrates é mortal)." },
            { question: "O que é uma inferência lógica?", answer: "Conclusão válida a partir de premissas dadas." },
            { question: "O que é diagrama de Venn e qual sua utilidade?", answer: "Representação gráfica de conjuntos e suas intersecções." },
            { question: "O que é disjunção exclusiva?", answer: "Operador lógico onde apenas uma das proposições pode ser verdadeira." }
        ]
    },

    etica: {
        name: "Ética na Administração Pública",
        questions: [
            { question: "O que é ética?", answer: "Conjunto de valores e princípios que regem o comportamento humano." },
            { question: "O que é moral?", answer: "Conjunto de regras sociais seguidas por um grupo." },
            { question: "Qual é o foco da ética pública?", answer: "Interesse coletivo." },
            { question: "O que é ética no setor público?", answer: "Atuação conforme princípios legais e morais." },
            { question: "Qual é o papel do servidor público?", answer: "Servir à sociedade com responsabilidade e honestidade." },
            { question: "O que é improbidade administrativa?", answer: "Ato ilegal ou imoral cometido por agente público." },
            { question: "Lei que trata da improbidade administrativa:", answer: "Lei nº 8.429/1992." },
            { question: "O que são atos de improbidade?", answer: "Enriquecimento ilícito, dano ao erário e violação de princípios." },
            { question: "Servidor público pode ter privilégio?", answer: "Não, deve atuar com isonomia." },
            { question: "O que é interesse público?", answer: "Aquilo que atende ao bem coletivo." },
            { question: "O que é transparência pública?", answer: "Acesso da sociedade às ações do governo." },
            { question: "O que é conflito de interesses?", answer: "Quando o interesse pessoal afeta a decisão pública." },
            { question: "Ética x Legalidade:", answer: "Algo legal pode não ser ético, e vice-versa." },
            { question: "Princípios da ética pública:", answer: "Legalidade, moralidade, impessoalidade, publicidade e eficiência." },
            { question: "A quem se aplica o Código de Ética?", answer: "A todos os servidores e empregados públicos." },
            { question: "O que é zelo pelo patrimônio público?", answer: "Cuidar dos bens do povo como se fossem próprios." },
            { question: "O que é assiduidade no serviço público?", answer: "Comparecimento regular ao trabalho." },
            { question: "O que é sigilo funcional?", answer: "Dever de não divulgar informações internas." },
            { question: "Ética e democracia:", answer: "A ética fortalece a democracia." },
            { question: "O que é o decoro no serviço público?", answer: "Conduta adequada ao cargo ocupado." },
            { question: "O que é cortesia no serviço público?", answer: "Tratar todos com respeito." },
            { question: "Qual o papel da ouvidoria pública?", answer: "Receber sugestões, reclamações e elogios dos cidadãos." },
            { question: "O que é respeito à hierarquia?", answer: "Obedecer normas e superiores sem violar a ética." },
            { question: "O que é desvio de função?", answer: "Quando o servidor exerce atividade fora do cargo." },
            { question: "A ética deve ser constante ou ocasional?", answer: "Constante." },
            { question: "O que é ética profissional?", answer: "Conjunto de princípios que orienta o comportamento no trabalho." },
            { question: "O que é sigilo funcional?", answer: "Dever de não divulgar informações internas do órgão." },
            { question: "O que é decoro?", answer: "Postura respeitosa e compatível com o cargo." },
            { question: "O que é imparcialidade?", answer: "Atuar sem favorecer ou prejudicar ninguém." },
            { question: "O que é honestidade no serviço público?", answer: "Agir com verdade e integridade." },
            { question: "O que é probidade?", answer: "Honestidade e retidão na conduta." },
            { question: "O que é respeito ao bem comum?", answer: "Priorizar o interesse coletivo." },
            { question: "O que é assiduidade?", answer: "Comparecimento regular ao trabalho." },
            { question: "O que é pontualidade?", answer: "Cumprimento de horários estabelecidos." },
            { question: "O que é urbanidade?", answer: "Tratar as pessoas com educação e cortesia." },
            { question: "O que é o Código de Ética do Servidor Público?", answer: "Conjunto de normas de conduta para os servidores." },
            { question: "O que é zelo pela coisa pública?", answer: "Cuidado com os bens e recursos públicos." },
            { question: "O que é dever funcional?", answer: "Obrigações do servidor no exercício do cargo." },
            { question: "O que é comprometimento?", answer: "Dedicação às atividades e objetivos do órgão." },
            { question: "O que é abuso de poder?", answer: "Uso indevido da autoridade para benefício próprio." },
            { question: "O que é ética situacional?", answer: "Quando os valores morais variam conforme o contexto." },
            { question: "O que é ética de responsabilidade?", answer: "Avaliação das consequências dos atos para a coletividade." },
            { question: "Qual a relação entre ética e cidadania?", answer: "A ética fortalece a cidadania ao estimular atitudes corretas." },
            { question: "O que é ética na prestação de contas?", answer: "Compromisso com a transparência na utilização de recursos." },
            { question: "O que é impessoalidade nas decisões públicas?", answer: "Tratar todos igualmente, sem favorecimentos." },
            { question: "O que é ética na comunicação institucional?", answer: "Divulgação de informações claras, corretas e acessíveis." },
            { question: "O que é ética ambiental na gestão pública?", answer: "Atuação com respeito ao meio ambiente e às gerações futuras." },
            { question: "O que é reputação ética do servidor?", answer: "Reconhecimento por conduta íntegra e exemplar." },
            { question: "Qual o impacto da ética na confiança pública?", answer: "Fortalece a legitimidade e a aceitação social dos atos públicos." },
            { question: "O que é honestidade intelectual?", answer: "Compromisso com a verdade ao divulgar informações." },
            { question: "O que é coerência ética?", answer: "Alinhamento entre discurso e prática." },
            { question: "O que são valores institucionais?", answer: "Princípios que orientam a cultura organizacional." },
            { question: "Qual a diferença entre ética individual e ética institucional?", answer: "A individual refere-se ao servidor; a institucional à cultura do órgão." },
            { question: "O que é conduta antiética?", answer: "Ação que fere os princípios morais e o interesse público." },
            { question: "Qual a importância da ética nas decisões administrativas?", answer: "Garante justiça, legitimidade e equidade." },
            { question: "O que é assédio moral no serviço público?", answer: "Exposição repetitiva a situações humilhantes no ambiente de trabalho." },
            { question: "O que é transparência ativa?", answer: "Divulgação espontânea de informações sem necessidade de solicitação." },
            { question: "Qual o papel da liderança ética?", answer: "Inspirar boas práticas e decisões justas." },
            { question: "O que é conflito de lealdade?", answer: "Quando interesses pessoais conflitam com os deveres públicos." },
            { question: "Qual o papel dos códigos de ética?", answer: "Servem como guia de conduta para servidores e instituições." },
            // New questions from Questões 4.docx
            { question: "Qual a diferença entre ética e moral no contexto do serviço público?", answer: "Ética refere-se a princípios universais; moral são normas culturais específicas do grupo." },
            { question: "O que significa o princípio da publicidade?", answer: "Que os atos públicos devem ser transparentes e acessíveis à sociedade." },
            { question: "Qual é a importância da imparcialidade no exercício da função pública?", answer: "Garante justiça e evita favorecimentos indevidos." },
            { question: "Por que a legalidade nem sempre garante conduta ética?", answer: "Porque algo pode ser legal, mas ainda assim contrariar valores morais." },
            { question: "O que é conflito de interesses?", answer: "Quando interesses pessoais comprometem a imparcialidade do servidor." },
            { question: "O que é ética situacional e por que é perigosa no serviço público?", answer: "É a relativização da ética conforme a conveniência, podendo levar a desvios graves." },
            { question: "O que é probidade administrativa?", answer: "Honestidade e integridade na conduta do agente público." },
            { question: "O que representa o princípio da eficiência na ética pública?", answer: "Prestar o serviço com qualidade, responsabilidade e foco no bem comum." },
            { question: "Qual é a função da ouvidoria pública?", answer: "Canal de escuta e encaminhamento de demandas da população." },
            { question: "O que caracteriza um comportamento antiético?", answer: "Atitudes que violam normas morais, mesmo que dentro da legalidade." },
            { question: "Como o decoro se relaciona à imagem do servidor?", answer: "Mantém a dignidade e respeito à função pública." },
            { question: "Qual a consequência da quebra do sigilo funcional?", answer: "Pode comprometer a segurança institucional e resultar em sanções." },
            { question: "Como o assédio moral afeta a ética no trabalho?", answer: "Fere a dignidade e o ambiente de respeito entre servidores." },
            { question: "Por que a assiduidade é uma questão ética?", answer: "Porque demonstra compromisso e respeito ao serviço público e à sociedade." },
            { question: "Qual a importância da ética para a confiança pública?", answer: "Garante legitimidade e fortalece a credibilidade da administração pública." }
        ]
    },

    administracao_publica: {
        name: "Noções de Administração Pública",
        questions: [
            { question: "O que é administração direta?", answer: "É composta por órgãos ligados diretamente ao governo (União, estados, DF e municípios)." },
            { question: "O que é administração indireta?", answer: "É formada por autarquias, fundações, empresas públicas e sociedades de economia mista." },
            { question: "O que são autarquias?", answer: "Entidades com autonomia administrativa, criadas por lei." },
            { question: "O que são fundações públicas?", answer: "Entidades criadas para fins sociais, culturais ou científicos." },
            { question: "O que é descentralização?", answer: "Delegação de atividades do Estado a outras entidades." },
            { question: "O que é desconcentração?", answer: "Distribuição de competências dentro do mesmo órgão." },
            { question: "O que é o princípio da legalidade?", answer: "O servidor só pode fazer o que a lei permite." },
            { question: "O que é impessoalidade?", answer: "A atuação deve ser sem favorecimentos pessoais." },
            { question: "O que é publicidade?", answer: "Os atos devem ser transparentes." },
            { question: "O que é eficiência?", answer: "Desempenho com qualidade, agilidade e menor custo." },
            { question: "O que é moralidade administrativa?", answer: "Ação com base em princípios éticos." },
            { question: "O que é licitação?", answer: "Processo para escolher a melhor proposta para a administração pública." },
            { question: "O que é inexigibilidade?", answer: "Quando não há possibilidade de competição." },
            { question: "Exemplo de inexigibilidade:", answer: "Contratação de artista consagrado." },
            { question: "O que é dispensa de licitação?", answer: "Quando a lei autoriza não realizar licitação." },
            { question: "O que é pregão?", answer: "Modalidade de licitação para aquisição de bens e serviços comuns." },
            { question: "O que é concorrência?", answer: "Modalidade para contratos de maior valor." },
            { question: "O que é convite?", answer: "Licitação com no mínimo três convidados." },
            { question: "O que é o SICONV?", answer: "Sistema de convênios do governo federal." },
            { question: "O que é o SICAF?", answer: "Sistema de cadastramento de fornecedores do governo." },
            { question: "Para que serve o CADIN?", answer: "Registra inadimplentes perante órgãos públicos." },
            { question: "O que é gestão por competência?", answer: "Aproveitamento de habilidades específicas dos servidores." },
            { question: "O que é avaliação de desempenho?", answer: "Avaliação do rendimento e comportamento no serviço." },
            { question: "O que é planejamento estratégico?", answer: "Definição de objetivos e metas para longo prazo." },
            { question: "O que é o princípio da economicidade?", answer: "Uso racional dos recursos públicos." },
            { question: "O que é ato administrativo?", answer: "Manifestação da vontade da Administração Pública." },
            { question: "Quais os elementos do ato administrativo?", answer: "Competência, finalidade, forma, motivo e objeto." },
            { question: "O que é controle da administração?", answer: "Verificação da legalidade e eficácia dos atos." },
            { question: "O que é hierarquia administrativa?", answer: "Relação de subordinação entre os níveis da administração." },
            { question: "Qual o papel da transparência pública?", answer: "Permitir o controle social sobre os atos da gestão." },
            { question: "O que é serviço público?", answer: "Atividade prestada pelo Estado à população." },
            { question: "O que é interesse público primário?", answer: "Interesse da coletividade." },
            { question: "O que é interesse público secundário?", answer: "Interesse da Administração." },
            { question: "O que é controle interno?", answer: "Fiscalização feita pela própria administração." },
            { question: "O que é controle externo?", answer: "Fiscalização feita pelo Legislativo, com ajuda do TCU." },
            { question: "O que é eficiência administrativa?", answer: "Alcançar resultados com menor gasto." },
            { question: "O que é legalidade administrativa?", answer: "Agir conforme a lei." },
            { question: "O que é finalidade do ato administrativo?", answer: "Atender ao interesse público." },
            { question: "O que é poder discricionário?", answer: "Liberdade da administração dentro da lei." },
            { question: "O que é poder vinculado?", answer: "Quando a lei determina exatamente como agir." },
            { question: "O que é poder hierárquico?", answer: "Organização da estrutura administrativa." },
            { question: "O que é poder disciplinar?", answer: "Aplicar sanções a servidores e contratados." },
            { question: "O que é poder regulamentar?", answer: "Editar normas para execução da lei." },
            { question: "O que é controle social?", answer: "Participação do cidadão na fiscalização do poder público." },
            { question: "O que é servidor público?", answer: "Pessoa legalmente investida em cargo público." },
            { question: "O que é Estado?", answer: "Organização política soberana formada por território, povo e governo." },
            { question: "O que é governo?", answer: "Exercício do poder político e administrativo do Estado." },
            { question: "O que é função administrativa do Estado?", answer: "Gerir recursos e políticas públicas." },
            { question: "O que é função normativa do Estado?", answer: "Criar leis e regulamentos." },
            { question: "O que é função jurisdicional?", answer: "Aplicar o direito aos casos concretos (Judiciário)." },
            { question: "O que são políticas públicas?", answer: "Ações e programas do governo para atender demandas sociais." },
            { question: "O que é accountability?", answer: "Prestação de contas e responsabilidade do gestor público." },
            { question: "O que é governança pública?", answer: "Conjunto de práticas para alcançar resultados eficientes." },
            { question: "O que é administração pública gerencial?", answer: "Modelo que prioriza resultados, eficiência e avaliação de desempenho." },
            { question: "O que é controle preventivo?", answer: "Verificação anterior à realização de atos administrativos." },
            { question: "O que é descentralização política?", answer: "Transferência de competências a estados e municípios." },
            { question: "O que é desconcentração administrativa?", answer: "Delegação interna de funções dentro de um órgão." },
            { question: "O que é delegação de competência?", answer: "Transferência de atribuições entre autoridades." },
            { question: "O que é centralização?", answer: "Concentração de decisões na administração direta." },
            { question: "O que é organização formal?", answer: "Estrutura oficial, estabelecida em normas e regulamentos." },
            { question: "O que é organização informal?", answer: "Relacões interpessoais não previstas formalmente." },
            { question: "O que é ciclo de políticas públicas?", answer: "Processo que envolve formulação, implementação e avaliação." },
            { question: "O que é liderança pública?", answer: "Capacidade de influenciar positivamente os rumos da gestão pública." },
            { question: "O que é cultura organizacional?", answer: "Conjunto de valores e comportamentos compartilhados no órgão." },
            { question: "O que é ouvidoria pública?", answer: "Canal de comunicação entre cidadão e governo para críticas e sugestões." },
            // New questions from Questões 4.docx
            { question: "O que é administração indireta?", answer: "Formada por autarquias, fundações, empresas públicas e sociedades de economia mista." },
            { question: "O que é licitação?", answer: "Processo para escolher a melhor proposta para a administração pública." },
            { question: "O que é princípio da eficiência?", answer: "Exige que a administração atue com qualidade, rapidez e menor custo possível." },
            { question: "Qual a diferença entre autarquia e fundação pública?", answer: "Autarquia tem personalidade jurídica de direito público; fundação, de direito privado." },
            { question: "O que é controle interno na administração pública?", answer: "Acompanhamento dos atos administrativos por órgãos da própria administração." },
            { question: "O que caracteriza a descentralização administrativa?", answer: "Transferência da execução de atividades a entidades distintas da administração direta." },
            { question: "O que é poder de polícia?", answer: "Capacidade de restringir direitos em benefício do interesse público." },
            { question: "O que é improbidade administrativa?", answer: "Ato ilegal ou imoral praticado por agente público, que lesa a administração." },
            { question: "Qual a diferença entre ato vinculado e ato discricionário?", answer: "Ato vinculado segue normas; discricionário permite juízo de conveniência e oportunidade." },
            { question: "O que é função normativa da administração pública?", answer: "Capacidade de editar regras para organizar seus próprios serviços." }
        ]
    },

    recursos_materiais: {
        name: "Noções de Recursos Materiais",
        questions: [
            { question: "O que é material de consumo?", answer: "Aquele que se deteriora com o uso." },
            { question: "O que é material permanente?", answer: "Bem com durabilidade superior a dois anos." },
            { question: "O que é armazenagem?", answer: "Guarda adequada dos materiais." },
            { question: "O que é inventário?", answer: "Levantamento físico dos materiais." },
            { question: "O que é controle de estoque?", answer: "Acompanhamento das entradas e saídas dos materiais." },
            { question: "O que é almoxarifado?", answer: "Local de guarda e distribuição dos materiais." },
            { question: "O que é entrada de material?", answer: "Registro da chegada de produtos ao estoque." },
            { question: "O que é conferência de material?", answer: "Verificação do produto recebido com o pedido." },
            { question: "O que é baixa de material?", answer: "Retirada definitiva do estoque." },
            { question: "O que é requisição de material?", answer: "Pedido formal de material ao almoxarifado." },
            { question: "O que é cadastro de fornecedores?", answer: "Registro das empresas aptas a fornecer para o órgão." },
            { question: "O que é licitação de compras?", answer: "Processo para aquisição de materiais." },
            { question: "O que é obsolescência?", answer: "Quando um material perde utilidade com o tempo." },
            { question: "O que é deterioração?", answer: "Degradação física do material." },
            { question: "O que é ficha de controle de estoque?", answer: "Documento que registra movimentações do material." },
            { question: "O que é estocagem?", answer: "Ação de guardar materiais." },
            { question: "O que é estoque mínimo?", answer: "Quantidade mínima necessária para manter o funcionamento." },
            { question: "O que é giro de estoque?", answer: "Frequência com que o material é utilizado." },
            { question: "O que é sistema de inventário rotativo?", answer: "Contagem periódica por grupos de itens." },
            { question: "Qual é a finalidade da gestão de materiais?", answer: "Evitar desperdícios e garantir eficiência." },
            { question: "O que é almoxarifado?", answer: "Setor responsável pelo recebimento, guarda e distribuição de materiais." },
            { question: "O que é material de consumo?", answer: "Aquele que se deteriora com o uso." },
            { question: "O que é material permanente?", answer: "Aquele que não perde sua identidade com o uso contínuo." },
            { question: "O que é requisição de material?", answer: "Documento usado para solicitar materiais ao almoxarifado." },
            { question: "O que é inventário?", answer: "Levantamento dos bens e materiais existentes em estoque." },
            { question: "O que é estocagem?", answer: "Ato de armazenar materiais de forma adequada e segura." },
            { question: "O que é controle de estoque?", answer: "Acompanhamento das entradas e saídas de materiais." },
            { question: "O que é curva ABC?", answer: "Técnica para classificar materiais conforme sua importância e valor." },
            { question: "O que é padronização de materiais?", answer: "Definição de especificações únicas para facilitar a gestão." },
            { question: "O que é armazenagem?", answer: "Conjunto de operações para manter os materiais em boas condições." },
            { question: "O que é lote econômico de compra?", answer: "Quantidade ideal de compra para reduzir custos." },
            { question: "O que é pedido de compra?", answer: "Solicitação formal para aquisição de materiais." },
            { question: "O que é lead time?", answer: "Tempo entre o pedido e o recebimento do material." },
            { question: "O que é controle patrimonial?", answer: "Registro e acompanhamento dos bens permanentes." },
            { question: "O que é obsolescência?", answer: "Perda de utilidade do material por desatualização." },
            { question: "O que é consumo racional de materiais?", answer: "Utilização planejada para evitar desperdícios." },
            { question: "O que é saldo de estoque?", answer: "Quantidade disponível de um item no almoxarifado." },
            { question: "O que é entrada por devolução?", answer: "Retorno ao estoque de material não utilizado." },
            { question: "O que é curva XYZ?", answer: "Classificação por regularidade de consumo." },
            { question: "O que é sistema push de estoque?", answer: "Reposição baseada em previsão de demanda." },
            { question: "O que é sistema pull de estoque?", answer: "Reposição baseada na demanda real." },
            { question: "O que é controle de validade de materiais?", answer: "Acompanhamento de prazos de vencimento." },
            { question: "O que é armazenamento vertical?", answer: "Uso de prateleiras para otimizar o espaço." },
            { question: "O que é rastreabilidade de materiais?", answer: "Capacidade de localizar origem e destino de um item." },
            { question: "O que é lote de reposição?", answer: "Quantidade adquirida para repor estoque." },
            { question: "O que é sistema FIFO?", answer: "Primeiro a entrar, primeiro a sair." },
            { question: "O que é sistema LIFO?", answer: "Último a entrar, primeiro a sair." },
            { question: "O que é política de estoques?", answer: "Conjunto de normas para gestão de materiais." },
            { question: "O que é curva de criticidade?", answer: "Avaliação da importância estratégica dos itens." },
            { question: "O que é índice de rotatividade?", answer: "Frequência com que o item é movimentado no estoque." },
            { question: "O que é controle informatizado de materiais?", answer: "Gestão por meio de sistemas e softwares." },
            { question: "O que é custo de armazenagem?", answer: "Valor gasto para manter itens em estoque." },
            { question: "O que é conferência quantitativa?", answer: "Verificação do número de itens recebidos." },
            { question: "O que é conferência qualitativa?", answer: "Verificação do estado e conformidade dos itens recebidos." },
            { question: "O que é planejamento de compras?", answer: "Estudo das necessidades e programação de aquisições." },
            // New questions from Questões 4.docx
            { question: "O que é material permanente?", answer: "Bem com durabilidade superior a dois anos." },
            { question: "O que é controle de estoque?", answer: "Acompanhamento das entradas e saídas dos materiais." },
            { question: "O que é inventário patrimonial?", answer: "Levantamento físico e financeiro de todos os bens da organização." },
            { question: "Qual a função da ficha de controle de material?", answer: "Registrar movimentações de entrada, saída e saldo de materiais." },
            { question: "O que diferencia material de consumo de material permanente?", answer: "Consumo se desgasta com o uso contínuo; permanente tem longa durabilidade." },
            { question: "O que é almoxarifado?", answer: "Local de guarda e distribuição de materiais de consumo." },
            { question: "O que é requisição de material?", answer: "Pedido formal para retirada de item do estoque." },
            { question: "O que é curva ABC de materiais?", answer: "Classificação de itens por importância de uso ou valor, para controle eficaz." },
            { question: "O que é ponto de ressuprimento?", answer: "Nível de estoque em que se deve fazer novo pedido para evitar falta." },
            { question: "O que é obsolescência de material?", answer: "Perda de utilidade ou valor de um item por desuso ou superação técnica." }
        ]
    },

    arquivologia: {
        name: "Arquivologia",
        questions: [
            { question: "O que é arquivologia?", answer: "Ciência que estuda os arquivos." },
            { question: "O que é arquivo?", answer: "Conjunto de documentos produzidos por uma instituição." },
            { question: "O que é documento de arquivo?", answer: "Aquele produzido no exercício das atividades." },
            { question: "O que é protocolo?", answer: "Setor que registra entrada e saída de documentos." },
            { question: "O que é classificação documental?", answer: "Organização dos documentos conforme sua natureza." },
            { question: "O que é tabela de temporalidade?", answer: "Define prazos de guarda e destinação dos documentos." },
            { question: "O que é eliminação documental?", answer: "Descarte autorizado de documentos." },
            { question: "O que é preservação?", answer: "Conjunto de medidas para evitar a deterioração." },
            { question: "O que é conservação?", answer: "Ações preventivas para manter o documento utilizável." },
            { question: "O que é restauração?", answer: "Reparação de danos em documentos." },
            { question: "O que é fase corrente?", answer: "Fase em que o documento é frequentemente consultado." },
            { question: "O que é fase intermediária?", answer: "Fase de pouca consulta, mas com valor." },
            { question: "O que é fase permanente?", answer: "Fase em que o documento é guardado para sempre." },
            { question: "O que é arquivo corrente?", answer: "Aquele usado nas atividades do dia a dia." },
            { question: "O que é arquivo intermediário?", answer: "Aquele com pouca frequência de uso." },
            { question: "O que é arquivo permanente?", answer: "Aquele com valor histórico." },
            { question: "O que é digitalização de documentos?", answer: "Conversão de documentos físicos em arquivos digitais." },
            { question: "Qual a função do SEI (Sistema Eletrônico de Informações)?", answer: "Gestão eletrônica de processos e documentos." },
            { question: "O que é protocolo integrado?", answer: "Sistema que permite o rastreamento de documentos entre órgãos." },
            { question: "O que é destinação final?", answer: "Decisão sobre guarda permanente ou eliminação." },
            { question: "O que é arquivo?", answer: "Conjunto de documentos organizados para consulta e preservação." },
            { question: "O que é documento arquivístico?", answer: "Documento produzido por uma instituição no exercício de suas funções." },
            { question: "O que é arquivo corrente?", answer: "Arquivo de documentos em uso frequente." },
            { question: "O que é arquivo intermediário?", answer: "Arquivo de documentos pouco consultados, mas ainda com valor administrativo." },
            { question: "O que é arquivo permanente?", answer: "Arquivo de documentos com valor histórico ou legal definitivo." },
            { question: "O que é protocolo?", answer: "Setor responsável pelo recebimento e envio de documentos." },
            { question: "O que é classificação de documentos?", answer: "Ato de organizar documentos conforme assunto, tipo ou função." },
            { question: "O que é tabela de temporalidade?", answer: "Documento que define os prazos de guarda dos documentos." },
            { question: "O que é destinação de documentos?", answer: "Decisão sobre arquivar ou eliminar documentos." },
            { question: "O que é conservação de documentos?", answer: "Conjunto de ações para preservar os documentos." },
            { question: "O que é eliminação de documentos?", answer: "Descarte de documentos sem valor legal ou histórico." },
            { question: "O que é arquivamento?", answer: "Guarda dos documentos em locais apropriados." },
            { question: "O que é plano de classificação?", answer: "Estrutura que orienta a organização dos documentos." },
            { question: "O que é fundo documental?", answer: "Conjunto de documentos produzidos por uma mesma entidade." },
            { question: "O que é acesso à informação?", answer: "Direito de consulta aos documentos públicos." },
            { question: "O que é documento nato-digital?", answer: "Documento criado originalmente em meio digital." },
            { question: "O que é classificação por assunto?", answer: "Organização conforme o tema principal." },
            { question: "O que é ordenação numérica?", answer: "Organização por número de identificação." },
            { question: "O que é ordenação alfabética?", answer: "Organização por nome, título ou palavra-chave." },
            { question: "O que é método duplex?", answer: "Combinação de dois métodos de arquivamento." },
            { question: "O que é protocolo descentralizado?", answer: "Protocolo em diferentes setores da organização." },
            { question: "O que é gestão documental?", answer: "Conjunto de práticas para controlar documentos." },
            { question: "O que é avaliação documental?", answer: "Verificação do valor e utilidade dos documentos." },
            { question: "O que é autenticidade documental?", answer: "Garantia de que o documento é verdadeiro." },
            { question: "O que é integridade documental?", answer: "Documento completo, sem alterações indevidas." },
            { question: "O que é acessibilidade documental?", answer: "Facilidade de acesso ao conteúdo do documento." },
            { question: "O que é sigilo documental?", answer: "Restrições de acesso por questões legais ou estratégicas." },
            { question: "O que é protocolo digital?", answer: "Registro eletrônico de documentos." },
            { question: "O que é classificação funcional?", answer: "Organização conforme a função administrativa." },
            { question: "O que é documento híbrido?", answer: "Parte em papel, parte em meio eletrônico." },
            { question: "O que é segurança da informação arquivística?", answer: "Proteção contra perda, roubo ou alteração." },
            { question: "O que é tipologia documental?", answer: "Identificação do tipo de documento (ofício, memorando etc.)." },
            { question: "O que é conservação preventiva?", answer: "Ações para evitar danos antes que ocorram." },
            { question: "O que é digital bom?", answer: "Documento criado digitalmente, sem versão física." },
            { question: "O que é indexação?", answer: "Atribuição de palavras-chave para facilitar a busca." },
            // New questions from Questões 4.docx
            { question: "O que é fase corrente?", answer: "Fase em que o documento é frequentemente consultado." },
            { question: "O que é classificação documental?", answer: "Organização dos documentos conforme sua natureza." },
            { question: "O que é tabela de temporalidade?", answer: "Instrumento que define prazos para guarda e destinação de documentos." },
            { question: "O que é protocolo em arquivologia?", answer: "Conjunto de atividades que registram, classificam e distribuem documentos." },
            { question: "O que é documento arquivístico?", answer: "Aquele que possui valor administrativo, jurídico ou histórico e é produzido no exercício das atividades da instituição." },
            { question: "O que é destinação de documentos?", answer: "Decisão sobre a guarda permanente ou eliminação de documentos." },
            { question: "Qual a diferença entre arquivo corrente e intermediário?", answer: "Corrente tem uso frequente; intermediário tem uso eventual." },
            { question: "O que é arquivo permanente?", answer: "Conjunto de documentos com valor histórico, preservados indefinidamente." },
            { question: "O que é eliminação documental?", answer: "Descarte autorizado de documentos sem valor para a administração ou a história." },
            { question: "O que são fundos documentais?", answer: "Conjunto de documentos produzidos por uma mesma entidade, mantendo sua organicidade." }
        ]
    },

    gestao_contratos: {
        name: "Gestão de Contratos",
        questions: [
            { question: "O que é contrato administrativo?", answer: "Acordo entre a Administração Pública e terceiros." },
            { question: "O que é edital?", answer: "Documento que regula uma licitação." },
            { question: "O que é cláusula contratual?", answer: "Item que define direitos e deveres no contrato." },
            { question: "O que é aditivo contratual?", answer: "Alteração posterior no contrato original." },
            { question: "O que é vigência contratual?", answer: "Período em que o contrato está em validade." },
            { question: "O que é execução contratual?", answer: "Cumprimento das obrigações do contrato." },
            { question: "O que é fiscalização do contrato?", answer: "Acompanhamento pela Administração." },
            { question: "O que é termo de referência?", answer: "Documento que define o objeto da contratação." },
            { question: "O que é penalidade contratual?", answer: "Sanção aplicada ao contratado por descumprimento." },
            { question: "O que é rescisão contratual?", answer: "Encerramento antecipado do contrato." },
            { question: "Quem pode fiscalizar um contrato?", answer: "Servidor designado como fiscal de contrato." },
            { question: "Qual a função do gestor de contrato?", answer: "Acompanhar a execução do contrato." },
            { question: "O que é reajuste?", answer: "Correção do valor contratual." },
            { question: "O que é repactuação?", answer: "Revisão dos valores por mudança nas condições." },
            { question: "O que são encargos trabalhistas?", answer: "Obrigações legais com os empregados contratados." },
            { question: "O que é conveniência administrativa?", answer: "Avaliação da utilidade de manter um contrato." },
            { question: "Qual o papel do contratado?", answer: "Cumprir rigorosamente as cláusulas." },
            { question: "O que é risco contratual?", answer: "Possibilidade de inadimplência ou falha no serviço." },
            { question: "Qual é o papel da IN nº 5/2017?", answer: "Regula a contratação de serviços terceirizados." },
            { question: "O que é fiscalização preventiva?", answer: "Monitoramento contínuo para evitar falhas." },
            { question: "O que é contrato administrativo?", answer: "Acordo entre a administração pública e particulares para prestação de serviços ou fornecimento." },
            { question: "O que é licitação?", answer: "Processo para escolher a proposta mais vantajosa para a administração." },
            { question: "O que é cláusula contratual?", answer: "Item que define direitos e deveres no contrato." },
            { question: "O que é aditivo contratual?", answer: "Alteração do contrato original por necessidade justificada." },
            { question: "O que é rescisão contratual?", answer: "Encerramento antecipado do contrato." },
            { question: "O que é inadimplemento contratual?", answer: "Quando uma das partes não cumpre suas obrigações." },
            { question: "O que é fiscalização do contrato?", answer: "Acompanhamento para garantir o cumprimento do contrato." },
            { question: "O que é vigência do contrato?", answer: "Período em que o contrato tem validade legal." },
            { question: "O que é sanção administrativa?", answer: "Penalidade aplicada ao contratado por descumprimento." },
            { question: "O que é execução do contrato?", answer: "Cumprimento das obrigações estabelecidas no contrato." },
            { question: "O que é repactuação?", answer: "Reajuste do valor contratual conforme condições previstas." },
            { question: "O que é garantias contratuais?", answer: "Medidas exigidas para assegurar o cumprimento do contrato." },
            { question: "O que é termo de referência?", answer: "Documento com requisitos para contratação." },
            { question: "O que é objeto do contrato?", answer: "O que está sendo contratado (bem, serviço, obra etc.)." },
            { question: "O que é prorrogação contratual?", answer: "Extensão do prazo do contrato por necessidade da administração." },
            { question: "O que é cláusula penal?", answer: "Prevê multa em caso de descumprimento." },
            { question: "O que é matriz de risco contratual?", answer: "Documento que define responsabilidades por riscos." },
            { question: "O que é execução indireta?", answer: "Quando a Administração contrata terceiro para realizar o serviço." },
            { question: "O que é contrato de fornecimento?", answer: "Contrato para entrega contínua ou parcelada de bens." },
            { question: "O que é contrato por escopo?", answer: "Baseado na entrega de resultado específico." },
            { question: "O que é contrato por tempo?", answer: "Baseado na prestação continuada de serviços." },
            { question: "O que é inexequibilidade de proposta?", answer: "Quando a proposta apresentada é financeiramente inviável." },
            { question: "O que é vigência x execução?", answer: "Vigência é o prazo legal; execução é o cumprimento efetivo." },
            { question: "O que é inadimplência contratual parcial?", answer: "Descumprimento de parte das obrigações contratuais." },
            { question: "O que é subcontratação?", answer: "Contratação de terceiros pelo contratado, permitida em certos casos." },
            { question: "O que é termo aditivo?", answer: "Documento que modifica o contrato original." },
            { question: "O que é cláusula de reajuste?", answer: "Prevê atualização dos preços durante a vigência." },
            { question: "O que é conveniência administrativa?", answer: "Justificativa técnica para decisão administrativa." },
            { question: "O que é motivação do ato?", answer: "Fundamentação legal e técnica da decisão contratual." },
            { question: "O que é minuta contratual?", answer: "Rascunho do contrato a ser assinado." },
            { question: "O que é ata de registro de preços?", answer: "Documento com preços registrados por licitação para futuras contratações." },
            { question: "O que é responsabilidade solidária?", answer: "Quando duas partes respondem igualmente por obrigações." },
            { question: "O que é contrato verbal?", answer: "Proibido na Administração Pública, exceto em caso emergencial." },
            { question: "O que é prestação de contas do contrato?", answer: "Relatório detalhado da execução contratual." },
            { question: "O que é inadimplemento culposo?", answer: "Descumprimento por negligência ou imprudência." }
        ]
    },

    atualidades: {
        name: "Atualidades",
        questions: [
            { question: "O que é aquecimento global?", answer: "Aumento da temperatura média da Terra." },
            { question: "O que é desmatamento?", answer: "Remoção da vegetação natural de forma irregular." },
            { question: "O que é energia renovável?", answer: "Energia obtida de fontes naturais que se renovam." },
            { question: "O que é inclusão digital?", answer: "Acesso igualitário às tecnologias." },
            { question: "O que é inflação?", answer: "Aumento contínuo dos preços." },
            { question: "O que é sustentabilidade?", answer: "Uso consciente dos recursos naturais." },
            { question: "Qual o papel das vacinas na saúde pública?", answer: "Prevenção de doenças e epidemias." },
            { question: "O que é inteligência artificial?", answer: "Tecnologia que simula a inteligência humana." },
            { question: "O que são fake news?", answer: "Notícias falsas divulgadas como verdadeiras." },
            { question: "O que é geopolítica?", answer: "Relação entre poder, território e influência internacional." },
            { question: "O que é inteligência artificial?", answer: "Tecnologia que simula a capacidade humana de aprender e decidir." },
            { question: "O que é sustentabilidade?", answer: "Uso consciente dos recursos para não comprometer o futuro." },
            { question: "O que é aquecimento global?", answer: "Aumento da temperatura média do planeta." },
            { question: "O que são fake news?", answer: "Notícias falsas divulgadas como verdadeiras." },
            { question: "O que é desmatamento?", answer: "Retirada da vegetação de forma ilegal ou descontrolada." },
            { question: "O que é desigualdade social?", answer: "Diferença no acesso a direitos e recursos básicos." },
            { question: "O que é inclusão digital?", answer: "Acesso de todos às tecnologias da informação." },
            { question: "O que é geopolítica?", answer: "Relações de poder entre países e blocos econômicos." },
            { question: "O que é refugiado?", answer: "Pessoa que deixa seu país por perseguição ou guerra." },
            { question: "O que é inflação?", answer: "Aumento generalizado de preços." },
            { question: "O que é PIB?", answer: "Produto Interno Bruto, soma de toda a riqueza produzida no país." },
            { question: "O que é ONU?", answer: "Organização das Nações Unidas, promove a paz e os direitos humanos." },
            { question: "O que é COP?", answer: "Conferência do Clima da ONU para discutir mudanças climáticas." },
            { question: "O que é inteligência emocional?", answer: "Capacidade de lidar com as próprias emoções e as dos outros." },
            { question: "O que é polarização política?", answer: "Divisão extrema de opiniões políticas na sociedade." },
            { question: "O que são fontes de energia limpa?", answer: "Energias que não poluem, como solar e eólica." },
            { question: "O que é mobilidade urbana sustentável?", answer: "Transporte eficiente com menor impacto ambiental." },
            { question: "O que é crise migratória?", answer: "Deslocamento em massa por guerras, fome ou clima." },
            { question: "O que é segurança alimentar?", answer: "Garantia de acesso a alimentos saudáveis e suficientes." },
            { question: "O que são moedas digitais?", answer: "Moedas virtuais como o bitcoin." },
            { question: "O que é economia circular?", answer: "Modelo que reduz resíduos e reutiliza recursos." },
            { question: "O que é governança climática?", answer: "Ações globais para enfrentar as mudanças do clima." },
            { question: "O que é racismo estrutural?", answer: "Discriminação institucionalizada na sociedade." },
            { question: "O que é equidade de gênero?", answer: "Igualdade de direitos e oportunidades entre os gêneros." },
            { question: "O que é taxa Selic?", answer: "Juros básicos da economia brasileira." },
            { question: "O que é BRICS?", answer: "Bloco econômico formado por Brasil, Rússia, Índia, China e África do Sul." },
            { question: "O que é cibersegurança?", answer: "Proteção de sistemas digitais contra ataques." },
            { question: "O que é desinformação?", answer: "Disseminação proposital de informações falsas." },
            { question: "O que é índice de desenvolvimento humano (IDH)?", answer: "Mede qualidade de vida, educação e renda." },
            { question: "O que é refugiado climático?", answer: "Pessoa forçada a migrar por catástrofes ambientais." },
            { question: "O que é inteligência artificial generativa?", answer: "IA capaz de criar textos, imagens e vídeos." },
            { question: "O que é crédito de carbono?", answer: "Permissão de emitir CO₂ dentro de limites sustentáveis." },
            { question: "O que é política pública inclusiva?", answer: "Ações que promovem equidade e justiça social." },
            { question: "O que é nacionalismo econômico?", answer: "Defesa da economia nacional frente à globalização." },
            { question: "O que é polarização ideológica?", answer: "Radicalização de opiniões políticas opostas." }
        ]
    }
};

/*
COMO ADICIONAR NOVAS MATÉRIAS E QUESTÕES:

1. Para adicionar uma nova matéria, adicione um novo objeto seguindo este padrão:
   
   novaMateria: {
       name: "Nome Completo da Matéria",
       questions: [
           {
               question: "Texto da pergunta",
               answer: "Texto da resposta"
           },
           // Adicione quantas questões quiser
       ]
   }

2. Para adicionar questões a uma matéria existente, basta adicionar novos objetos
   no array 'questions' da matéria correspondente.

3. Use sempre IDs em letras minúsculas, sem espaços ou caracteres especiais.
*/
