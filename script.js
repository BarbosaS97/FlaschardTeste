document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const modeSelection = document.getElementById('modeSelection');
    const subjectSelection = document.getElementById('subjectSelection');
    const flashcardContainer = document.getElementById('flashcardContainer');
    const subjectList = document.getElementById('subjectList');
    const startStudyingBtn = document.getElementById('startStudying');
    const backToSubjectsBtn = document.getElementById('backToSubjects');
    const backToModesBtn = document.getElementById('backToModes');
    const flashcard = document.getElementById('flashcard');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const prevCardBtn = document.getElementById('prevCard');
    const nextCardBtn = document.getElementById('nextCard');
    const difficultCardBtn = document.getElementById('difficultCard');
    const progressElement = document.getElementById('progress');
    const toggleFocusModeBtn = document.getElementById('toggleFocusMode');
    const simpleModeBtn = document.getElementById('simpleModeBtn');
    const multipleChoiceModeBtn = document.getElementById('multipleChoiceModeBtn');
    const optionsContainer = document.getElementById('optionsContainer');
    const optionsElement = document.getElementById('options');
    const body = document.body;
    const controlsDiv = document.querySelector('.controls');
    const settingsIcon = document.getElementById('settingsIcon');
    const settingsModal = document.getElementById('settingsModal');
    const saveSettingsBtn = document.getElementById('saveSettings');
    const resetSettingsBtn = document.getElementById('resetSettings');
    const closeSettingsBtn = document.getElementById('closeSettings');
    
    // Variáveis de estado
    let currentDeck = [];
    let currentCardIndex = 0;
    let difficultCards = [];
    let selectedSubjects = [];
    let isFocusMode = false;
    let cardNotes = JSON.parse(localStorage.getItem('cardNotes')) || {};
    let isNoteOpen = false;
    let isMultipleChoiceMode = false;
    let currentMultipleChoiceCard = null;
    
    // Configurações de teclado
    let keyConfig = {
        prevKey: localStorage.getItem('prevKey') || 'v',
        nextKey: localStorage.getItem('nextKey') || 'b',
        flipKey: localStorage.getItem('flipKey') || ' ',
        focusKey: localStorage.getItem('focusKey') || 'f',
        noteKey: localStorage.getItem('noteKey') || 'n'
    };
    
    // Inicialização
    init();
    
    function init() {
        // Configura eventos
        setupEventListeners();
        
        // Carrega configurações
        loadKeyConfig();
        
        // Adiciona instruções de teclado
        addKeyboardInstructions();
    }
    
    function loadKeyConfig() {
        document.getElementById('prevKey').value = keyConfig.prevKey;
        document.getElementById('nextKey').value = keyConfig.nextKey;
        document.getElementById('flipKey').value = keyConfig.flipKey;
        document.getElementById('focusKey').value = keyConfig.focusKey;
        document.getElementById('noteKey').value = keyConfig.noteKey;
    }
    
    function saveKeyConfig() {
        keyConfig = {
            prevKey: document.getElementById('prevKey').value.toLowerCase(),
            nextKey: document.getElementById('nextKey').value.toLowerCase(),
            flipKey: document.getElementById('flipKey').value.toLowerCase(),
            focusKey: document.getElementById('focusKey').value.toLowerCase(),
            noteKey: document.getElementById('noteKey').value.toLowerCase()
        };
        
        localStorage.setItem('prevKey', keyConfig.prevKey);
        localStorage.setItem('nextKey', keyConfig.nextKey);
        localStorage.setItem('flipKey', keyConfig.flipKey);
        localStorage.setItem('focusKey', keyConfig.focusKey);
        localStorage.setItem('noteKey', keyConfig.noteKey);
    }
    
    function resetKeyConfig() {
        keyConfig = {
            prevKey: 'v',
            nextKey: 'b',
            flipKey: ' ',
            focusKey: 'f',
            noteKey: 'n'
        };
        
        localStorage.removeItem('prevKey');
        localStorage.removeItem('nextKey');
        localStorage.removeItem('flipKey');
        localStorage.removeItem('focusKey');
        localStorage.removeItem('noteKey');
        
        loadKeyConfig();
    }
    
    function addKeyboardInstructions() {
        const instructions = document.createElement('div');
        instructions.className = 'keyboard-instructions';
        instructions.innerHTML = `
            <small>Teclas: <strong>${keyConfig.prevKey.toUpperCase()}</strong> (Voltar) | 
            <strong>${keyConfig.nextKey.toUpperCase()}</strong> (Avançar) | 
            <strong>${keyConfig.flipKey === ' ' ? 'Espaço' : keyConfig.flipKey.toUpperCase()}</strong> (Girar) | 
            <strong>${keyConfig.focusKey.toUpperCase()}</strong> (Foco) | 
            <strong>${keyConfig.noteKey.toUpperCase()}</strong> (Notas)</small>
        `;
        controlsDiv.insertAdjacentElement('afterend', instructions);
    }
    
    function updateKeyboardInstructions() {
        const instructions = document.querySelector('.keyboard-instructions');
        if (instructions) {
            instructions.innerHTML = `
                <small>Teclas: <strong>${keyConfig.prevKey.toUpperCase()}</strong> (Voltar) | 
                <strong>${keyConfig.nextKey.toUpperCase()}</strong> (Avançar) | 
                <strong>${keyConfig.flipKey === ' ' ? 'Espaço' : keyConfig.flipKey.toUpperCase()}</strong> (Girar) | 
                <strong>${keyConfig.focusKey.toUpperCase()}</strong> (Foco) | 
                <strong>${keyConfig.noteKey.toUpperCase()}</strong> (Notas)</small>
            `;
        }
    }
    
    function loadSubjects() {
        // Limpa a lista de matérias
        subjectList.innerHTML = '';
        
        // Verifica se existem matérias definidas
        if (typeof flashcardsData === 'undefined' || Object.keys(flashcardsData).length === 0) {
            subjectList.innerHTML = '<p class="no-subjects">Nenhuma matéria disponível. Por favor, adicione matérias no arquivo questions.js</p>';
            return;
        }
        
        // Filtra matérias que têm questões no modo atual
        const validSubjects = Object.keys(flashcardsData).filter(subjectId => {
            const subject = flashcardsData[subjectId];
            if (isMultipleChoiceMode) {
                return subject.multipleChoice && subject.multipleChoice.length > 0;
            } else {
                return subject.questions && subject.questions.length > 0;
            }
        });
        
        if (validSubjects.length === 0) {
            subjectList.innerHTML = `
                <p class="no-subjects">
                    Nenhuma matéria com questões no modo ${isMultipleChoiceMode ? 'Múltipla Escolha' : 'Simples'}.
                    <button id="tryOtherMode" class="back-btn" style="margin-top: 1rem;">
                        <i class="fas fa-sync-alt"></i> Tentar outro modo
                    </button>
                </p>
            `;
            
            document.getElementById('tryOtherMode').addEventListener('click', () => {
                isMultipleChoiceMode = !isMultipleChoiceMode;
                loadSubjects();
            });
            
            return;
        }
        
        // Cria checkboxes para cada matéria válida
        for (const subjectId of validSubjects) {
            const subject = flashcardsData[subjectId];
            
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="checkbox" value="${subjectId}">
                ${subject.name}
                <span class="question-count">(${isMultipleChoiceMode ? 
                    subject.multipleChoice.length : 
                    subject.questions.length} questões)</span>
            `;
            subjectList.appendChild(label);
        }
    }
    
    function setupEventListeners() {
        simpleModeBtn.addEventListener('click', () => {
            isMultipleChoiceMode = false;
            modeSelection.classList.add('hidden');
            subjectSelection.classList.remove('hidden');
            loadSubjects();
        });
        
        multipleChoiceModeBtn.addEventListener('click', () => {
            isMultipleChoiceMode = true;
            modeSelection.classList.add('hidden');
            subjectSelection.classList.remove('hidden');
            loadSubjects();
        });
        
        startStudyingBtn.addEventListener('click', startStudying);
        backToSubjectsBtn.addEventListener('click', showSubjectSelection);
        backToModesBtn.addEventListener('click', showModeSelection);
        flashcard.addEventListener('click', flipCard);
        prevCardBtn.addEventListener('click', showPreviousCard);
        nextCardBtn.addEventListener('click', showNextCard);
        difficultCardBtn.addEventListener('click', markAsDifficult);
        toggleFocusModeBtn.addEventListener('click', toggleFocusMode);
        
        // Configurações
        settingsIcon.addEventListener('click', () => {
            settingsModal.classList.remove('hidden');
        });
        
        saveSettingsBtn.addEventListener('click', () => {
            saveKeyConfig();
            updateKeyboardInstructions();
            settingsModal.classList.add('hidden');
        });
        
        resetSettingsBtn.addEventListener('click', () => {
            resetKeyConfig();
            updateKeyboardInstructions();
        });
        
        closeSettingsBtn.addEventListener('click', () => {
            settingsModal.classList.add('hidden');
        });
        
        // Eventos de teclado
        document.addEventListener('keydown', handleKeyPress);
        
        // Eventos de touch para mobile
        setupTouchEvents();
    }
    
    function showModeSelection() {
        modeSelection.classList.remove('hidden');
        subjectSelection.classList.add('hidden');
        flashcardContainer.classList.add('hidden');
        disableFocusMode();
    }
    
    function showSubjectSelection() {
        subjectSelection.classList.remove('hidden');
        flashcardContainer.classList.add('hidden');
        disableFocusMode();
    }
    
    function startStudying() {
        // Obter matérias selecionadas
        selectedSubjects = Array.from(document.querySelectorAll('.subject-list input:checked')).map(el => el.value);
        
        if (selectedSubjects.length === 0) {
            alert('Selecione pelo menos uma matéria para estudar.');
            return;
        }
        
        // Criar baralho com as questões das matérias selecionadas
        currentDeck = [];
        selectedSubjects.forEach(subjectId => {
            if (flashcardsData[subjectId]) {
                if (isMultipleChoiceMode && flashcardsData[subjectId].multipleChoice) {
                    currentDeck = currentDeck.concat(flashcardsData[subjectId].multipleChoice);
                } else if (!isMultipleChoiceMode && flashcardsData[subjectId].questions) {
                    currentDeck = currentDeck.concat(flashcardsData[subjectId].questions);
                }
            }
        });
        
        if (currentDeck.length === 0) {
            alert('Nenhuma questão encontrada nas matérias selecionadas.');
            return;
        }
        
        // Embaralhar as cartas
        shuffleDeck(currentDeck);
        
        // Resetar estado
        currentCardIndex = 0;
        difficultCards = [];
        
        // Mostrar a primeira carta
        showCurrentCard();
        
        // Alternar para a view de flashcards
        subjectSelection.classList.add('hidden');
        flashcardContainer.classList.remove('hidden');
        
        // Mostrar/ocultar container de opções conforme o modo
        if (isMultipleChoiceMode) {
            optionsContainer.classList.remove('hidden');
        } else {
            optionsContainer.classList.add('hidden');
        }
    }
    
    function flipCard() {
        if (isNoteOpen) return;
        flashcard.classList.toggle('flipped');
    }
    
    function showCurrentCard() {
        if (currentDeck.length === 0) {
            questionElement.textContent = "Nenhuma questão disponível";
            answerElement.textContent = "";
            progressElement.textContent = "0/0";
            return;
        }
        
        const card = currentDeck[currentCardIndex];
        
        if (isMultipleChoiceMode) {
            currentMultipleChoiceCard = card;
            questionElement.textContent = card.question;
            answerElement.textContent = card.explanation || "Explicação não disponível";
            
            // Limpar opções anteriores
            optionsElement.innerHTML = '';
            
            // Adicionar novas opções
            card.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.textContent = option;
                optionElement.addEventListener('click', () => checkAnswer(index));
                optionsElement.appendChild(optionElement);
            });
        } else {
            questionElement.textContent = card.question;
            answerElement.textContent = card.answer;
        }
        
        // Atualizar progresso
        progressElement.textContent = `${currentCardIndex + 1}/${currentDeck.length}`;
        
        // Resetar o estado de flip se necessário
        if (flashcard.classList.contains('flipped')) {
            flashcard.classList.remove('flipped');
        }
        
        // Adicionar ou atualizar o ícone de notas
        addNoteIcon();
    }
    
    function checkAnswer(selectedIndex) {
        if (!currentMultipleChoiceCard) return;
        
        const options = document.querySelectorAll('.option');
        const correctIndex = currentMultipleChoiceCard.answer;
        
        options.forEach((option, index) => {
            option.classList.remove('correct', 'incorrect');
            if (index === correctIndex) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== correctIndex) {
                option.classList.add('incorrect');
            }
        });
        
        // Girar o card para mostrar a explicação
        if (!flashcard.classList.contains('flipped')) {
            flipCard();
        }
    }
    
    function addNoteIcon() {
        // Remove o ícone existente se houver
        const existingIcon = document.querySelector('.note-icon');
        if (existingIcon) {
            existingIcon.remove();
        }
        
        const existingContainer = document.querySelector('.note-container');
        if (existingContainer) {
            existingContainer.remove();
        }
        
        // Cria o ícone de notas
        const noteIcon = document.createElement('div');
        noteIcon.className = 'note-icon';
        noteIcon.innerHTML = '📝';
        
        // Verifica se há anotação para este card
        const cardId = getCurrentCardId();
        if (cardNotes[cardId] && cardNotes[cardId].trim() !== '') {
            noteIcon.classList.add('has-note');
        }
        
        // Adiciona o ícone ao flashcard
        flashcard.appendChild(noteIcon);
        
        // Cria o container de notas
        const noteContainer = document.createElement('div');
        noteContainer.className = 'note-container';
        noteContainer.innerHTML = `
            <h3>Anotações</h3>
            <textarea placeholder="Digite suas anotações sobre este card..." id="noteTextarea">${cardNotes[cardId] || ''}</textarea>
            <button id="saveNote">Salvar Anotações</button>
        `;
        
        // Adiciona o container ao body principal
        document.querySelector('.app-container').appendChild(noteContainer);
        
        // Posiciona o container de notas corretamente
        positionNoteContainer(noteContainer);
        
        // Configura eventos
        noteIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            isNoteOpen = !noteContainer.classList.toggle('active');
            if (isNoteOpen) {
                document.getElementById('noteTextarea').focus();
            }
        });
        
        document.getElementById('saveNote').addEventListener('click', function(e) {
            e.stopPropagation();
            saveNote();
        });
        
        // Fecha as notas ao clicar fora
        document.addEventListener('click', function(e) {
            if (!noteContainer.contains(e.target) && e.target !== noteIcon) {
                noteContainer.classList.remove('active');
                isNoteOpen = false;
            }
        });
        
        // Previne que eventos de teclado no textarea interfiram com os controles
        document.getElementById('noteTextarea').addEventListener('keydown', function(e) {
            e.stopPropagation();
        });
    }
    
    function positionNoteContainer(container) {
        container.style.position = 'absolute';
        container.style.top = '50%';
        container.style.left = '50%';
        container.style.transform = 'translate(-50%, -50%)';
        container.style.width = '350px';
        container.style.maxWidth = '90%';
        container.style.zIndex = '20';
    }
    
    function getCurrentCardId() {
        const card = currentDeck[currentCardIndex];
        if (isMultipleChoiceMode) {
            return `mc-${selectedSubjects.join('-')}-${card.question.substring(0, 20)}`;
        } else {
            return `${selectedSubjects.join('-')}-${card.question.substring(0, 20)}`;
        }
    }
    
    function saveNote() {
        const cardId = getCurrentCardId();
        const noteText = document.querySelector('.note-container textarea').value;
        cardNotes[cardId] = noteText;
        
        // Atualiza o ícone
        const noteIcon = document.querySelector('.note-icon');
        if (noteText.trim() !== '') {
            noteIcon.classList.add('has-note');
        } else {
            noteIcon.classList.remove('has-note');
        }
        
        // Esconde o container
        document.querySelector('.note-container').classList.remove('active');
        isNoteOpen = false;
        
        // Salva no localStorage
        localStorage.setItem('cardNotes', JSON.stringify(cardNotes));
    }
    
    function showNextCard() {
        if (currentDeck.length === 0 || isNoteOpen) return;
        
        currentCardIndex = (currentCardIndex + 1) % currentDeck.length;
        showCurrentCard();
    }
    
    function showPreviousCard() {
        if (currentDeck.length === 0 || isNoteOpen) return;
        
        currentCardIndex = (currentCardIndex - 1 + currentDeck.length) % currentDeck.length;
        showCurrentCard();
    }
    
    function markAsDifficult() {
        if (currentDeck.length === 0 || isNoteOpen) return;
        
        const currentCard = currentDeck[currentCardIndex];
        
        // Adicionar à lista de cartas difíceis se ainda não estiver lá
        if (!difficultCards.includes(currentCardIndex)) {
            difficultCards.push(currentCardIndex);
            
            // Adicionar a carta novamente ao final do baralho
            currentDeck.push(currentCard);
        }
        
        // Mostrar próxima carta
        showNextCard();
    }
    
    function toggleFocusMode() {
        if (isNoteOpen) return;
        
        if (isFocusMode) {
            disableFocusMode();
        } else {
            enableFocusMode();
        }
    }
    
    function enableFocusMode() {
        isFocusMode = true;
        body.classList.add('focus-mode');
        toggleFocusModeBtn.classList.add('active');
        toggleFocusModeBtn.textContent = 'Sair do Modo Foco';
    }
    
    function disableFocusMode() {
        isFocusMode = false;
        body.classList.remove('focus-mode');
        toggleFocusModeBtn.classList.remove('active');
        toggleFocusModeBtn.textContent = 'Modo Foco';
    }
    
    function handleKeyPress(e) {
        if (flashcardContainer.classList.contains('hidden') || isNoteOpen) return;
        
        const key = e.key.toLowerCase();
        
        if (key === keyConfig.prevKey) {
            showPreviousCard();
        } else if (key === keyConfig.nextKey) {
            showNextCard();
        } else if (key === keyConfig.flipKey) {
            flipCard();
            e.preventDefault();
        } else if (key === keyConfig.focusKey) {
            toggleFocusMode();
        } else if (key === keyConfig.noteKey) {
            const noteIcon = document.querySelector('.note-icon');
            if (noteIcon) {
                noteIcon.click();
                isNoteOpen = true;
            }
        }
    }
    
    function setupTouchEvents() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        flashcard.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, false);
        
        flashcard.addEventListener('touchend', function(e) {
            if (isNoteOpen) return;
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);
    }
    
    function handleSwipe() {
        if (Math.abs(touchEndX - touchStartX) < 50) {
            flipCard();
        } else if (touchEndX < touchStartX) {
            showNextCard();
        } else if (touchEndX > touchStartX) {
            showPreviousCard();
        }
    }
    
    function shuffleDeck(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
});
