document.addEventListener('DOMContentLoaded', () => {
    const focusRevealBtn = document.getElementById('focus-reveal-btn');
    const chargeBar = document.getElementById('charge-bar');
    const cardDisplay = document.getElementById('card-display');
    const cardNameEl = document.getElementById('card-name');
    const cardMeaningEl = document.getElementById('card-meaning');
    const cardInterpretationSection = document.getElementById('card-interpretation');

    // Removed: holdStartTime, holdTimer, MAX_HOLD_DURATION

    // Tarot card data
    const tarotDeck = [
        { name: "The Fool", meaning: "Beginnings, innocence, spontaneity, a free spirit.", img: "images/fool.jpg" },
        { name: "The Magician", meaning: "Manifestation, resourcefulness, power, inspired action.", img: "images/magician.jpg" },
        { name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine, the subconscious mind.", img: "images/high_priestess.jpg" },
        { name: "The Empress", meaning: "Femininity, beauty, nature, nurturing, abundance.", img: "images/empress.jpg" },
        { name: "The Emperor", meaning: "Authority, establishment, structure, a father figure.", img: "images/emperor.jpg" },
        { name: "The Hierophant", meaning: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions.", img: "images/hierophant.jpg" },
        { name: "The Lovers", meaning: "Love, harmony, relationships, values alignment, choices.", img: "images/lovers.jpg" },
        { name: "The Chariot", meaning: "Control, willpower, assertion, determination, victory.", img: "images/chariot.jpg" },
        { name: "Strength", meaning: "Strength, courage, patience, control, compassion.", img: "images/strength.jpg" },
        { name: "The Hermit", meaning: "Soul-searching, introspection, guidance, solitude.", img: "images/hermit.jpg" },
        { name: "Wheel of Fortune", meaning: "Good luck, karma, life cycles, destiny, a turning point.", img: "images/wheel_of_fortune.jpg" },
        { name: "Justice", meaning: "Justice, fairness, truth, cause and effect, law.", img: "images/justice.jpg" },
        { name: "The Hanged Man", meaning: "Pause, surrender, letting go, new perspectives.", img: "images/hanged_man.jpg" },
        { name: "Death", meaning: "Endings, change, transformation, transition.", img: "images/death.jpg" },
        { name: "Temperance", meaning: "Balance, moderation, patience, purpose.", img: "images/temperance.jpg" },
        { name: "The Devil", meaning: "Shadow self, attachment, addiction, restriction, sexuality.", img: "images/devil.jpg" },
        { name: "The Tower", meaning: "Sudden change, upheaval, chaos, revelation, awakening.", img: "images/tower.jpg" },
        { name: "The Star", meaning: "Hope, faith, purpose, renewal, spirituality.", img: "images/star.jpg" },
        { name: "The Moon", meaning: "Illusion, fear, anxiety, subconscious, intuition.", img: "images/moon.jpg" },
        { name: "The Sun", meaning: "Positivity, fun, warmth, success, vitality.", img: "images/sun.jpg" },
        { name: "Judgement", meaning: "Judgement, rebirth, inner calling, absolution.", img: "images/judgement.jpg" },
        { name: "The World", meaning: "Completion, integration, accomplishment, travel.", img: "images/world.jpg" },

        // Suit of Wands
        { name: "Ace of Wands", meaning: "Inspiration, new opportunities, growth, potential.", img: "images/ace_of_wands.jpg" },
        { name: "Two of Wands", meaning: "Future planning, progress, decisions, discovery.", img: "images/two_of_wands.jpg" },
        { name: "Three of Wands", meaning: "Preparation, foresight, enterprise, expansion.", img: "images/three_of_wands.jpg" },
        { name: "Four of Wands", meaning: "Celebration, harmony, marriage, home, community.", img: "images/four_of_wands.jpg" },
        { name: "Five of Wands", meaning: "Competition, conflict, rivalry, disagreement, tension.", img: "images/five_of_wands.jpg" },
        { name: "Six of Wands", meaning: "Public recognition, victory, progress, self-confidence.", img: "images/six_of_wands.jpg" },
        { name: "Seven of Wands", meaning: "Challenge, competition, perseverance, protection.", img: "images/seven_of_wands.jpg" },
        { name: "Eight of Wands", meaning: "Speed, action, air travel, movement, quick decisions.", img: "images/eight_of_wands.jpg" },
        { name: "Nine of Wands", meaning: "Resilience, courage, persistence, test of faith, boundaries.", img: "images/nine_of_wands.jpg" },
        { name: "Ten of Wands", meaning: "Burden, extra responsibility, hard work, stress, achievement.", img: "images/ten_of_wands.jpg" },
        { name: "Page of Wands", meaning: "Enthusiasm, exploration, discovery, free spirit.", img: "images/page_of_wands.jpg" },
        { name: "Knight of Wands", meaning: "Energy, passion, inspired action, adventure, impulsiveness.", img: "images/knight_of_wands.jpg" },
        { name: "Queen of Wands", meaning: "Courage, confidence, independence, social butterfly, determination.", img: "images/queen_of_wands.jpg" },
        { name: "King of Wands", meaning: "Natural-born leader, vision, entrepreneur, honour.", img: "images/king_of_wands.jpg" },

        // Suit of Cups
        { name: "Ace of Cups", meaning: "Love, new relationships, compassion, creativity.", img: "images/ace_of_cups.jpg" },
        { name: "Two of Cups", meaning: "Unified love, partnership, mutual attraction.", img: "images/two_of_cups.jpg" },
        { name: "Three of Cups", meaning: "Celebration, friendship, creativity, collaborations.", img: "images/three_of_cups.jpg" },
        { name: "Four of Cups", meaning: "Meditation, contemplation, apathy, reevaluation.", img: "images/four_of_cups.jpg" },
        { name: "Five of Cups", meaning: "Regret, failure, disappointment, pessimism.", img: "images/five_of_cups.jpg" },
        { name: "Six of Cups", meaning: "Revisiting the past, childhood memories, innocence, joy.", img: "images/six_of_cups.jpg" },
        { name: "Seven of Cups", meaning: "Opportunities, choices, wishful thinking, illusion.", img: "images/seven_of_cups.jpg" },
        { name: "Eight of Cups", meaning: "Disappointment, abandonment, withdrawal, escapism.", img: "images/eight_of_cups.jpg" },
        { name: "Nine of Cups", meaning: "Contentment, satisfaction, gratitude, wish come true.", img: "images/nine_of_cups.jpg" },
        { name: "Ten of Cups", meaning: "Divine love, blissful relationships, harmony, alignment.", img: "images/ten_of_cups.jpg" },
        { name: "Page of Cups", meaning: "Creative opportunities, intuitive messages, curiosity, possibility.", img: "images/page_of_cups.jpg" },
        { name: "Knight of Cups", meaning: "Creativity, romance, charm, imagination, beauty.", img: "images/knight_of_cups.jpg" },
        { name: "Queen of Cups", meaning: "Compassionate, caring, intuitive, flowing, psychic.", img: "images/queen_of_cups.jpg" },
        { name: "King of Cups", meaning: "Emotionally balanced, compassionate, diplomatic.", img: "images/king_of_cups.jpg" },

        // Suit of Swords
        { name: "Ace of Swords", meaning: "Breakthroughs, new ideas, mental clarity, success.", img: "images/ace_of_swords.jpg" },
        { name: "Two of Swords", meaning: "Difficult decisions, indecision, stalemate, truce.", img: "images/two_of_swords.jpg" },
        { name: "Three of Swords", meaning: "Heartbreak, emotional pain, sorrow, grief, hurt.", img: "images/three_of_swords.jpg" },
        { name: "Four of Swords", meaning: "Rest, relaxation, meditation, contemplation, recuperation.", img: "images/four_of_swords.jpg" },
        { name: "Five of Swords", meaning: "Conflict, disagreements, competition, defeat, winning at all costs.", img: "images/five_of_swords.jpg" },
        { name: "Six of Swords", meaning: "Transition, change, rite of passage, releasing baggage.", img: "images/six_of_swords.jpg" },
        { name: "Seven of Swords", meaning: "Betrayal, deception, getting away with something, stealth.", img: "images/seven_of_swords.jpg" },
        { name: "Eight of Swords", meaning: "Negative thoughts, self-imposed restriction, imprisonment, victim mentality.", img: "images/eight_of_swords.jpg" },
        { name: "Nine of Swords", meaning: "Anxiety, worry, fear, depression, nightmares.", img: "images/nine_of_swords.jpg" },
        { name: "Ten of Swords", meaning: "Painful endings, deep wounds, betrayal, loss, crisis.", img: "images/ten_of_swords.jpg" },
        { name: "Page of Swords", meaning: "New ideas, curiosity, thirst for knowledge, new ways of communicating.", img: "images/page_of_swords.jpg" },
        { name: "Knight of Swords", meaning: "Ambitious, action-oriented, driven to succeed, fast-thinking.", img: "images/knight_of_swords.jpg" },
        { name: "Queen of Swords", meaning: "Independent, unbiased judgement, clear boundaries, direct communication.", img: "images/queen_of_swords.jpg" },
        { name: "King of Swords", meaning: "Mental clarity, intellectual power, authority, truth.", img: "images/king_of_swords.jpg" },

        // Suit of Pentacles
        { name: "Ace of Pentacles", meaning: "New financial or career opportunity, manifestation, abundance.", img: "images/ace_of_pentacles.jpg" },
        { name: "Two of Pentacles", meaning: "Multiple priorities, time management, prioritisation, adaptability.", img: "images/two_of_pentacles.jpg" },
        { name: "Three of Pentacles", meaning: "Teamwork, collaboration, learning, implementation.", img: "images/three_of_pentacles.jpg" },
        { name: "Four of Pentacles", meaning: "Saving money, security, conservatism, scarcity, control.", img: "images/four_of_pentacles.jpg" },
        { name: "Five of Pentacles", meaning: "Financial loss, poverty, lack mindset, isolation, worry.", img: "images/five_of_pentacles.jpg" },
        { name: "Six of Pentacles", meaning: "Giving, receiving, sharing wealth, generosity, charity.", img: "images/six_of_pentacles.jpg" },
        { name: "Seven of Pentacles", meaning: "Long-term view, sustainable results, perseverance, investment.", img: "images/seven_of_pentacles.jpg" },
        { name: "Eight of Pentacles", meaning: "Apprenticeship, repetitive tasks, mastery, skill development.", img: "images/eight_of_pentacles.jpg" },
        { name: "Nine of Pentacles", meaning: "Abundance, luxury, self-sufficiency, financial independence.", img: "images/nine_of_pentacles.jpg" },
        { name: "Ten of Pentacles", meaning: "Wealth, financial security, family, long-term success, contribution.", img: "images/ten_of_pentacles.jpg" },
        { name: "Page of Pentacles", meaning: "Manifestation, financial opportunity, skill development.", img: "images/page_of_pentacles.jpg" },
        { name: "Knight of Pentacles", meaning: "Hard work, productivity, routine, conservatism.", img: "images/knight_of_pentacles.jpg" },
        { name: "Queen of Pentacles", meaning: "Nurturing, practical, providing financially, a working parent.", img: "images/queen_of_pentacles.jpg" },
        { name: "King of Pentacles", meaning: "Wealth, business, leadership, security, discipline, abundance.", img: "images/king_of_pentacles.jpg" }
    ];

    // Enhanced "quantum" number generator (conceptual simulation)
    // This function aims to produce a less predictable pseudo-random number than Math.random() alone,
    // by incorporating a time-based seed and a simple hashing-like process.
    // Conceptually, this draws inspiration from quantum uncertainty, where initial conditions
    // can drastically alter outcomes, making them hard to predict. It's not true quantum randomness,
    // but rather a thematically enhanced pseudo-randomness.
    function getQuantumRandomNumber(max) { // holdDuration parameter removed
        const timestamp = Date.now(); // Get current time in milliseconds
        const userAgent = navigator.userAgent || "unknown"; // Get browser user agent

        // Create a string from various sources of entropy
        let seedString = `${timestamp}-${Math.random()}-${userAgent}-${performance.now()}`;

        // Simple hash function: sum of character codes
        let hash = 0;
        for (let i = 0; i < seedString.length; i++) {
            hash = (hash << 5) - hash + seedString.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }

        // Use the hash to further influence Math.random()
        const pseudoQuantumRandom = Math.abs(hash * Math.random() + Math.random());

        return Math.floor(pseudoQuantumRandom % max);
    }

    function drawCard() { // holdDuration parameter removed
        if (tarotDeck.length === 0) {
            cardDisplay.innerHTML = "<p>No cards left in the deck!</p>";
            cardNameEl.textContent = "";
            cardMeaningEl.textContent = "";
            return;
        }

        const cardIndex = getQuantumRandomNumber(tarotDeck.length, holdDuration);
        const selectedCard = tarotDeck[cardIndex];

        // Display card (name and meaning for now, visual flip/reveal to be handled by CSS/JS later)
        // --- New Card Display Logic with Flip Animation ---
        const cardEntity = cardDisplay.querySelector('.card-entity');
        const cardFront = cardEntity.querySelector('.card-front');
        // const cardBack = cardEntity.querySelector('.card-back'); // For potential direct manipulation

        // Update content of the card front
        // Instead of image, we put name directly on the "front" for this version
        cardFront.innerHTML = `<h3>${selectedCard.name}</h3><p class='image-alt-text'>(Quantum Signature Observed)</p>`;

        // Flip the card
        if (cardEntity) {
            cardEntity.classList.add('is-flipped');
        }
        // --- End New Card Display Logic ---

        cardNameEl.textContent = selectedCard.name;
        cardMeaningEl.textContent = selectedCard.meaning;
        cardInterpretationSection.style.display = 'block'; // Show interpretation
    }

    function resetCardDisplay() {
        const cardEntity = cardDisplay.querySelector('.card-entity');
        if (cardEntity) {
            cardEntity.classList.remove('is-flipped');
        }
        // Restore placeholder text if needed, or ensure card-back is visible
        // For now, just flipping back is enough, card-back content is static
        cardInterpretationSection.style.display = 'none';
        cardNameEl.textContent = "";
        cardMeaningEl.textContent = "";
    }

    focusRevealBtn.addEventListener('click', () => {
        resetCardDisplay();
        drawCard();
    });

    // Initial state: hide interpretation section until a card is drawn
    // Ensure card is also in its "back" state initially by calling reset.
    resetCardDisplay();
    // cardInterpretationSection.style.display = 'none'; // This is handled by resetCardDisplay
});
