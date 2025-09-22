const questions = [
    {
        question: "Como você geralmente passa seu tempo livre?",
        options: [
            { text: "Treinando seu físico e mental", points: { pikachu: 2, charizard: 4, bulbasaur: 1, squirtle: 1, eevee: 1, snorlax: 0, gengar: 1, mewtwo: 4 } },
            { text: "Relaxando em casa", points: { pikachu: 1, charizard: 0, bulbasaur: 2, squirtle: 1, eevee: 2, snorlax: 4, gengar: 2, mewtwo: 2 } },
            { text: "Saindo com amigos", points: { pikachu: 4, charizard: 1, bulbasaur: 2, squirtle: 2, eevee: 2, snorlax: 2, gengar: 2, mewtwo: 0 } },
            { text: "Aprendendo novas habilidades", points: { pikachu: 1, charizard: 2, bulbasaur: 2, squirtle: 1, eevee: 3, snorlax: 1, gengar: 2, mewtwo: 4 } },
            { text: "Nenhuma das alternativas acima", points: { pikachu: 0, charizard: 0, bulbasaur: 0, squirtle: 0, eevee: 0, snorlax: 0, gengar: 0, mewtwo: 0 } }
        ]
    },
    {
        question: "Qual é seu clima preferido?",
        options: [
            { text: "Ensolarado e quente", points: { pikachu: 2, charizard: 4, bulbasaur: 3, squirtle: 0, eevee: 2, snorlax: 1, gengar: 2, mewtwo: 2 } },
            { text: "Chuvoso", points: { pikachu: 0, charizard: 0, bulbasaur: 2, squirtle: 3, eevee: 1, snorlax: 4, gengar: 2, mewtwo: 4 } },
            { text: "Tempestades", points: { pikachu: 3, charizard: 1, bulbasaur: 0, squirtle: 1, eevee: 2, snorlax: 0, gengar: 4, mewtwo: 2 } },
            { text: "Ameno e com brisa", points: { pikachu: 1, charizard: 2, bulbasaur: 3, squirtle: 2, eevee: 2, snorlax: 1, gengar: 1, mewtwo: 4 } },
            { text: "Nenhuma das alternativas acima", points: { pikachu: 0, charizard: 0, bulbasaur: 0, squirtle: 0, eevee: 0, snorlax: 0, gengar: 0, mewtwo: 0 } }
        ] 
    },
    {
        question: "Como você lida com conflitos?",
        options: [
            { text: "Enfrento de frente e agressivamente", points: { pikachu: 2, charizard: 4, bulbasaur: 0, squirtle: 1, eevee: 1, snorlax: 0, gengar: 3, mewtwo: 3 } },
            { text: "Busco uma solução pacífica", points: { pikachu: 1, charizard: 0, bulbasaur: 2, squirtle: 2, eevee: 3, snorlax: 4, gengar: 1, mewtwo: 0 } },
            { text: "Evito se possível", points: { pikachu: 0, charizard: 1, bulbasaur: 2, squirtle: 3, eevee: 2, snorlax: 2, gengar: 1, mewtwo: 2 } },
            { text: "Procuro ajuda de outros", points: { pikachu: 3, charizard: 1, bulbasaur: 1, squirtle: 2, eevee: 1, snorlax: 2, gengar: 0, mewtwo: 2 } },
            { text: "Nenhuma das alternativas acima", points: { pikachu: 0, charizard: 0, bulbasaur: 0, squirtle: 0, eevee: 0, snorlax: 0, gengar: 0, mewtwo: 0 } }
        ]
    },
    {
        question: "Qual é sua cor favorita?",
        options: [
            { text: "Vermelho", points: { pikachu: 1, charizard: 3, bulbasaur: 0, squirtle: 1, eevee: 1, snorlax: 0, gengar: 2, mewtwo: 2 } },
            { text: "Azul", points: { pikachu: 1, charizard: 0, bulbasaur: 1, squirtle: 3, eevee: 2, snorlax: 1, gengar: 2, mewtwo: 1 } },
            { text: "Verde", points: { pikachu: 0, charizard: 1, bulbasaur: 3, squirtle: 1, eevee: 2, snorlax: 0, gengar: 0, mewtwo: 2 } },
            { text: "Amarelo", points: { pikachu: 3, charizard: 1, bulbasaur: 1, squirtle: 0, eevee: 2, snorlax: 1, gengar: 0, mewtwo: 2 } },
            { text: "Nenhuma das alternativas acima", points: { pikachu: 0, charizard: 0, bulbasaur: 0, squirtle: 0, eevee: 0, snorlax: 0, gengar: 0, mewtwo: 0 } }
        ]
    },
    {
        question: "Qual é sua estratégia preferida de batalha?",
        options: [
            { text: "Rápida e agressiva", points: { pikachu: 3, charizard: 3, bulbasaur: 0, squirtle: 1, eevee: 2, snorlax: 0, gengar: 2, mewtwo: 2 } },
            { text: "Defensiva e calculada", points: { pikachu: 1, charizard: 1, bulbasaur: 2, squirtle: 3, eevee: 1, snorlax: 3, gengar: 1, mewtwo: 1 } },
            { text: "Estratégica e equilibrada", points: { pikachu: 2, charizard: 2, bulbasaur: 3, squirtle: 2, eevee: 2, snorlax: 1, gengar: 1, mewtwo: 4 } },
            { text: "Imprevisível", points: { pikachu: 1, charizard: 2, bulbasaur: 1, squirtle: 1, eevee: 0, snorlax: 1, gengar: 4, mewtwo: 1 } },
            { text: "Nenhuma das alternativas acima", points: { pikachu: 0, charizard: 0, bulbasaur: 0, squirtle: 0, eevee: 0, snorlax: 0, gengar: 0, mewtwo: 0 } }
        ]
    },
    {
        question: "Qual é sua atividade ideal para o fim de semana?",
        options: [
            { text: "Esportes e competições", points: { pikachu: 1, charizard: 3, bulbasaur: 1, squirtle: 2, eevee: 1, snorlax: 0, gengar: 1, mewtwo: 1 } },
            { text: "rolê com os amigos", points: { pikachu: 3, charizard: 1, bulbasaur: 2, squirtle: 2, eevee: 2, snorlax: 3, gengar: 0, mewtwo: 1 } },
            { text: "Se isolar em casa com as vozes", points: { pikachu: 1, charizard: 0, bulbasaur: 1, squirtle: 1, eevee: 1, snorlax: 2, gengar: 2, mewtwo: 4 } },
            { text: "Jogar videogame", points: { pikachu: 2, charizard: 2, bulbasaur: 1, squirtle: 1, eevee: 2, snorlax: 3, gengar: 1, mewtwo: 3 } },
            { text: "Nenhuma das alternativas acima", points: { pikachu: 0, charizard: 0, bulbasaur: 0, squirtle: 0, eevee: 0, snorlax: 0, gengar: 0, mewtwo: 0 } }
        ]
    },
    {
        question: "Como seus amigos te descrevem?",
        options: [
            { text: "Extrovertivo e brincalhão", points: { pikachu: 3, charizard: 2, bulbasaur: 1, squirtle: 2, eevee: 2, snorlax: 1, gengar: 4, mewtwo: 1 } },
            { text: "Calmo e racional", points: { pikachu: 1, charizard: 1, bulbasaur: 2, squirtle: 2, eevee: 0, snorlax: 2, gengar: 1, mewtwo: 4 } },
            { text: "Intenso e apaixonado", points: { pikachu: 2, charizard: 3, bulbasaur: 1, squirtle: 1, eevee: 1, snorlax: 0, gengar: 2, mewtwo: 2 } },
            { text: "Energético e despreocupado", points: { pikachu: 2, charizard: 1, bulbasaur: 1, squirtle: 3, eevee: 2, snorlax: 0, gengar: 2, mewtwo: 0 } },
            { text: "Nenhuma das alternativas acima", points: { pikachu: 0, charizard: 0, bulbasaur: 0, squirtle: 0, eevee: 0, snorlax: 0, gengar: 0, mewtwo: 0 } }
        ]
    },
    {
        question: "Como você aborda desafios?",
        options: [
            { text: "Enfrento com garra e determinação", points: { pikachu: 3, charizard: 3, bulbasaur: 2, squirtle: 1, eevee: 1, snorlax: 0, gengar: 1, mewtwo: 2 } },
            { text: "Penso bem antes de agir e ajo da melhor maneira", points: { pikachu: 1, charizard: 1, bulbasaur: 2, squirtle: 2, eevee: 0, snorlax: 1, gengar: 1, mewtwo: 4 } },
            { text: "Deixo fluir", points: { pikachu: 2, charizard: 1, bulbasaur: 1, squirtle: 3, eevee: 1, snorlax: 3, gengar: 1, mewtwo: 2 } },
            { text: "Procuro soluções criativas e imprevisiveis", points: { pikachu: 2, charizard: 2, bulbasaur: 2, squirtle: 2, eevee: 2, snorlax: 1, gengar: 3, mewtwo: 1 } },
            { text: "Nenhuma das alternativas acima", points: { pikachu: 0, charizard: 0, bulbasaur: 0, squirtle: 0, eevee: 0, snorlax: 0, gengar: 0, mewtwo: 0 } }
        ]
    },
    {
        question: "Qual é sua estação favorita?",
        options: [
            { text: "Verão", points: { pikachu: 3, charizard: 3, bulbasaur: 1, squirtle: 2, eevee: 2, snorlax: 0, gengar: 1, mewtwo: 2 } },
            { text: "Primavera", points: { pikachu: 2, charizard: 1, bulbasaur: 4, squirtle: 2, eevee: 1, snorlax: 2, gengar: 0, mewtwo: 1 } },
            { text: "Outono", points: { pikachu: 1, charizard: 2, bulbasaur: 2, squirtle: 1, eevee: 0, snorlax: 1, gengar: 1, mewtwo: 2 } },
            { text: "Inverno", points: { pikachu: 1, charizard: 1, bulbasaur: 1, squirtle: 3, eevee: 2, snorlax: 4, gengar: 0, mewtwo: 4 } },
            { text: "Nenhuma das alternativas acima", points: { pikachu: 0, charizard: 0, bulbasaur: 0, squirtle: 0, eevee: 0, snorlax: 0, gengar: 0, mewtwo: 0 } }
        ]
    },
    {
        question: "Como você prefere aprender?",
        options: [
            { text: "Através da experiência", points: { pikachu: 3, charizard: 2, bulbasaur: 1, squirtle: 2, eevee: 1, snorlax: 2, gengar: 1, mewtwo: 1 } },
            { text: "Lendo e pesquisando", points: { pikachu: 1, charizard: 1, bulbasaur: 2, squirtle: 1, eevee: 2, snorlax: 0, gengar: 1, mewtwo: 3 } },
            { text: "Observando outros", points: { pikachu: 2, charizard: 3, bulbasaur: 2, squirtle: 2, eevee: 1, snorlax: 1, gengar: 1, mewtwo: 1 } },
            { text: "Deixo de lado e confio em minha capacidade", points: { pikachu: 2, charizard: 2, bulbasaur: 1, squirtle: 2, eevee: 1, snorlax: 4, gengar: 3, mewtwo: 1 } },
            { text: "Nenhuma das alternativas acima", points: { pikachu: 0, charizard: 0, bulbasaur: 0, squirtle: 0, eevee: 0, snorlax: 0, gengar: 0, mewtwo: 0 } }
        ]
    },
    {
        question: "Qual é seu tipo de música favorito?",
        options: [
            { text: "Pop energético", points: { pikachu: 3, charizard: 2, bulbasaur: 1, squirtle: 2, eevee: 2, snorlax: 0, gengar: 1, mewtwo: 1 } },
            { text: "Eletrônicas intensas", points: { pikachu: 1, charizard: 1, bulbasaur: 3, squirtle: 2, eevee: 1, snorlax: 3, gengar: 2, mewtwo: 4 } },
            { text: "Rock ou metal", points: { pikachu: 2, charizard: 3, bulbasaur: 1, squirtle: 1, eevee: 2, snorlax: 1, gengar: 4, mewtwo: 2 } },
            { text: "Batidas tranquilas", points: { pikachu: 1, charizard: 1, bulbasaur: 2, squirtle: 3, eevee: 2, snorlax: 3, gengar: 1, mewtwo: 1 } },
            { text: "Nenhuma das alternativas acima", points: { pikachu: 0, charizard: 0, bulbasaur: 0, squirtle: 0, eevee: 0, snorlax: 0, gengar: 0, mewtwo: 0 } }
        ]
    },
    {
        question: "Como você toma decisões?",
        options: [
            { text: "Sigo meu instinto", points: { pikachu: 2, charizard: 3, bulbasaur: 1, squirtle: 2, eevee: 1, snorlax: 1, gengar: 2, mewtwo: 1 } },
            { text: "Analiso cuidadosamente as opções", points: { pikachu: 1, charizard: 2, bulbasaur: 2, squirtle: 1, eevee: 2, snorlax: 1, gengar: 1, mewtwo: 4 } },
            { text: "Considero os sentimentos dos outros", points: { pikachu: 4, charizard: 1, bulbasaur: 2, squirtle: 3, eevee: 2, snorlax: 1, gengar: 1, mewtwo: 1 } },
            { text: "Sigo meu coração", points: { pikachu: 2, charizard: 3, bulbasaur: 2, squirtle: 1, eevee: 3, snorlax: 3, gengar: 1, mewtwo: 1 } },
            { text: "Nenhuma das alternativas acima", points: { pikachu: 0, charizard: 0, bulbasaur: 0, squirtle: 0, eevee: 0, snorlax: 0, gengar: 0, mewtwo: 0 } }
        ]
    },
    {
        question: "Qual é seu trabalho dos sonhos?",
        options: [
            { text: "Atleta profissional", points: { pikachu: 2, charizard: 3, bulbasaur: 1, squirtle: 1, eevee: 1, snorlax: 1, gengar: 1, mewtwo: 0 } },
            { text: "Formado em Tecnologia", points: { pikachu: 1, charizard: 1, bulbasaur: 2, squirtle: 2, eevee: 2, snorlax: 3, gengar: 1, mewtwo: 3 } },
            { text: "Professor ou mentor", points: { pikachu: 3, charizard: 2, bulbasaur: 2, squirtle: 2, eevee: 1, snorlax: 1, gengar: 1, mewtwo: 2 } },
            { text: "Artista ou performer", points: { pikachu: 2, charizard: 1, bulbasaur: 1, squirtle: 3, eevee: 2, snorlax: 0, gengar: 3, mewtwo: 1 } },
            { text: "Nenhuma das alternativas acima", points: { pikachu: 0, charizard: 0, bulbasaur: 0, squirtle: 0, eevee: 0, snorlax: 0, gengar: 0, mewtwo: 0 } }
        ]
    },
    {
        question: "Qual é seu maior ponto forte?",
        options: [
            { text: "Adaptabilidade", points: { pikachu: 3, charizard: 2, bulbasaur: 1, squirtle: 2, eevee: 4, snorlax: 1, gengar: 1, mewtwo: 3 } },
            { text: "Persistência", points: { pikachu: 2, charizard: 3, bulbasaur: 2, squirtle: 1, eevee: 2, snorlax: 1, gengar: 1, mewtwo: 1 } },
            { text: "Empatia", points: { pikachu: 3, charizard: 1, bulbasaur: 2, squirtle: 2, eevee: 2, snorlax: 1, gengar: 0, mewtwo: 1 } },
            { text: "Criatividade", points: { pikachu: 2, charizard: 1, bulbasaur: 1, squirtle: 3, eevee: 1, snorlax: 1, gengar: 4, mewtwo: 2 } },
            { text: "Nenhuma das alternativas acima", points: { pikachu: 0, charizard: 0, bulbasaur: 0, squirtle: 0, eevee: 0, snorlax: 0, gengar: 0, mewtwo: 0 } }
        ]
    }
];

let currentQuestion = 0;
let scores = {
    pikachu: 0,
    charizard: 0,
    bulbasaur: 0,
    squirtle: 0,
    eevee: 0,
    snorlax: 0,
    gengar: 0,
    mewtwo: 0
};
let previousScores = [];

function startQuiz() {
    document.getElementById('home-menu').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';
    document.body.classList.add('quiz-active');
    currentQuestion = 0;
    scores = {
        pikachu: 0,
        charizard: 0,
        bulbasaur: 0,
        squirtle: 0,
        eevee: 0,
        snorlax: 0,
        gengar: 0,
        mewtwo: 0
    };
    displayQuestion();
}

function displayQuestion() {
    const questionDiv = document.getElementById('quiz');
    const question = questions[currentQuestion];
    
    const questionImages = {
        0: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
        1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        2: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png",
        3: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
        4: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
        5: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
        6: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
        7: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png",
        8: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
        9: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
        10: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png",
        11: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
        12: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png",
        13: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    };
    
    let html = `<div class="question active">
        <div class="question-image">
            <img 
                src="${questionImages[currentQuestion]}" 
                alt="Pokémon representando a questão ${currentQuestion + 1}" 
                width="120" 
                height="120"
            >
        </div>
        <h2>Pergunta ${currentQuestion + 1}</h2>
        <p>${question.question}</p>
        <div class="options">`;
    
    question.options.forEach((option, index) => {
        html += `<button onclick="selectOption(${index})">${option.text}</button>`;
    });
    
    html += '</div>';
    
    // Add navigation buttons
    html += `<div class="navigation-buttons">
        <button class="nav-button" onclick="previousQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>
            Pergunta Anterior
        </button>
    </div>`;
    
    html += '</div>';
    questionDiv.innerHTML = html;
    
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function selectOption(optionIndex) {
    const question = questions[currentQuestion];
    const selectedOption = question.options[optionIndex];
    
    // Save current scores before updating
    previousScores[currentQuestion] = {...scores};
    
    for (let pokemon in selectedOption.points) {
        scores[pokemon] += selectedOption.points[pokemon];
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        // Restore previous scores
        if (previousScores[currentQuestion]) {
            scores = {...previousScores[currentQuestion]};
        }
        displayQuestion();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    
    let maxScore = 0;
    let result = '';
    for (let pokemon in scores) {
        if (scores[pokemon] > maxScore) {
            maxScore = scores[pokemon];
            result = pokemon;
        }
    }
    
    const descriptions = {
        pikachu: "Você é energético, amigável e sempre pronto para a aventura! Como Pikachu, você é leal aos seus amigos e pode se adaptar a qualquer situação.",
        charizard: "Poderoso e confiante, você é um líder nato. Como Charizard, você tem um espírito feroz e não tem medo de assumir o comando!",
        bulbasaur: "Gentil e carinhoso, você tem uma forte conexão com a natureza. Como Bulbasaur, você é confiável e está sempre crescendo!",
        squirtle: "Divertido e tranquilo, você vai com o fluxo! Como Squirtle, você é resiliente e sempre mantém a calma sob pressão.",
        eevee: "Adaptável e versátil, você é cheio de potencial! Como Eevee, você pode prosperar em qualquer situação e está sempre evoluindo.",
        snorlax: "Tranquilo e pacífico, você sabe apreciar os prazeres simples da vida. Como Snorlax, você é descontraído, mas surpreendentemente forte quando necessário!",
        gengar: "Misterioso e esperto, você tem um lado travesso! Como Gengar, você é brincalhão e gosta de manter os outros em alerta.",
        mewtwo: "Inteligente e poderoso, você está frequentemente perdido em pensamentos. Como Mewtwo, você é muito capaz e está sempre buscando entender mais sobre si mesmo e os outros."
    };

    const pokemonImages = {
        pikachu: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        charizard: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        bulbasaur: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        squirtle: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        eevee: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
        snorlax: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
        gengar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
        mewtwo: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
    };

    document.getElementById('pokemon-result').innerHTML = `
        ${result.charAt(0).toUpperCase() + result.slice(1)}
        <img 
            src="${pokemonImages[result]}" 
            alt="${result.charAt(0).toUpperCase() + result.slice(1)} - um personagem Pokémon ${result}" 
            width="200" 
            height="200"
            style="display: block; margin: 20px auto; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"
        >`;
    document.getElementById('description').textContent = descriptions[result];
}

function resetQuiz() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('home-menu').style.display = 'block';
    document.body.classList.remove('quiz-active');
    
    currentQuestion = 0;
    scores = {
        pikachu: 0,
        charizard: 0,
        bulbasaur: 0,
        squirtle: 0,
        eevee: 0,
        snorlax: 0,
        gengar: 0,
        mewtwo: 0
    };
    
    document.getElementById('progress').style.width = '0%';
}

function showCredits() {
    document.getElementById('credits').style.display = 'block';
}

function closeCredits() {
    document.getElementById('credits').style.display = 'none';
}