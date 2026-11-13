// Love Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Apply configuration
    function applyConfig() {
        if (window.CONFIG) {
            // Update subtitle
            const subtitle = document.getElementById('subtitle');
            if (subtitle) {
                subtitle.textContent = `${CONFIG.partnerName}, ${CONFIG.messages.subtitle}`;
            }
            
            // Update partner name and description
            const partnerName = document.getElementById('partnerName');
            if (partnerName) {
                partnerName.textContent = `${CONFIG.partnerName} 💕`;
            }
            
            const partnerDescription = document.getElementById('partnerDescription');
            if (partnerDescription) {
                partnerDescription.textContent = CONFIG.characters.partner;
            }
            
            // Update your name and description
            const yourName = document.getElementById('yourName');
            if (yourName) {
                yourName.textContent = `${CONFIG.yourName} 💙`;
            }
            
            const yourDescription = document.getElementById('yourDescription');
            if (yourDescription) {
                yourDescription.textContent = CONFIG.characters.you;
            }
            
            // Update love note
            const loveNoteText = document.getElementById('loveNoteText');
            if (loveNoteText) {
                loveNoteText.textContent = `${CONFIG.partnerName}, ${CONFIG.messages.loveNote}`;
            }
            
            // Update memory descriptions
            const memoryLateNight = document.getElementById('memoryLateNight');
            if (memoryLateNight) {
                memoryLateNight.textContent = CONFIG.memories.lateNight;
            }
            
            const memoryFirstMeeting = document.getElementById('memoryFirstMeeting');
            if (memoryFirstMeeting) {
                memoryFirstMeeting.textContent = CONFIG.memories.firstMeeting;
            }
            
            const memoryCare = document.getElementById('memoryCare');
            if (memoryCare) {
                memoryCare.textContent = CONFIG.memories.care;
            }
            
            // Update special message
            const specialMessageTitle = document.getElementById('specialMessageTitle');
            if (specialMessageTitle) {
                specialMessageTitle.textContent = `To My Dearest ${CONFIG.partnerName}`;
            }
            
            const specialMessage1 = document.getElementById('specialMessage1');
            if (specialMessage1) {
                specialMessage1.textContent = CONFIG.messages.specialMessage;
            }
            
            const specialMessage2 = document.getElementById('specialMessage2');
            if (specialMessage2) {
                specialMessage2.textContent = CONFIG.messages.specialMessage2;
            }
            
            const signature = document.getElementById('signature');
            if (signature) {
                signature.textContent = CONFIG.messages.signature;
            }
        }
    }
    
    // Apply config on load
    applyConfig();
    
    // Create floating hearts
    function createHearts() {
        const heartsContainer = document.querySelector('.hearts-container');
        const heartSymbols = ['💕', '💖', '💗', '💘', '💝', '💞', '💟', '💌', '💋', '❤️'];
        
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 6 + 's';
            heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
            heartsContainer.appendChild(heart);
        }
    }

    // Music Control
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.textContent = '🎵';
            isPlaying = false;
        } else {
            bgMusic.play().then(() => {
                musicToggle.textContent = '🔊';
                isPlaying = true;
            }).catch(() => {
                musicToggle.textContent = '❌';
                console.log('Music could not be played');
            });
        }
    });

    // Love Note Toggle
    const loveButton = document.getElementById('loveButton');
    const loveNote = document.getElementById('loveNote');

    loveButton.addEventListener('click', function() {
        loveNote.classList.toggle('visible');
        if (loveNote.classList.contains('visible')) {
            loveButton.textContent = 'Hide My Love Note 💝';
            createHeartBurst();
        } else {
            loveButton.textContent = 'Click for a surprise 💝';
        }
    });

    // Create heart burst effect
    function createHeartBurst() {
        const heartsContainer = document.querySelector('.hearts-container');
        const burstHearts = ['💕', '💖', '💗', '💘', '💝', '💞'];
        
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = burstHearts[Math.floor(Math.random() * burstHearts.length)];
            heart.style.left = (Math.random() * 80 + 10) + '%';
            heart.style.top = (Math.random() * 80 + 10) + '%';
            heart.style.animation = 'float 2s ease-out forwards';
            heart.style.fontSize = '25px';
            heart.style.zIndex = '1000';
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 2000);
        }
    }

    // Kiss Counter
    let kissCount = 0;
    const kissButton = document.getElementById('kissButton');
    const kissCountDisplay = document.getElementById('kissCount');

    kissButton.addEventListener('click', function() {
        kissCount++;
        kissCountDisplay.textContent = kissCount;
        createKissEffect();
        
        // Add special messages for certain kiss counts
        if (window.CONFIG && window.CONFIG.kissMessages) {
            if (kissCount === 10 && window.CONFIG.kissMessages[10]) {
                showSpecialMessage(window.CONFIG.kissMessages[10]);
            } else if (kissCount === 50 && window.CONFIG.kissMessages[50]) {
                showSpecialMessage(window.CONFIG.kissMessages[50]);
            } else if (kissCount === 100 && window.CONFIG.kissMessages[100]) {
                showSpecialMessage(window.CONFIG.kissMessages[100]);
            }
        }
    });

    // Create kiss effect
    function createKissEffect() {
        const kissEffects = document.querySelector('.kiss-effects');
        const kissSymbols = ['💋', '💕', '💖', '💗', '😘'];
        
        for (let i = 0; i < 5; i++) {
            const kiss = document.createElement('div');
            kiss.textContent = kissSymbols[Math.floor(Math.random() * kissSymbols.length)];
            kiss.style.position = 'absolute';
            kiss.style.left = Math.random() * 100 + '%';
            kiss.style.top = Math.random() * 100 + '%';
            kiss.style.fontSize = '30px';
            kiss.style.animation = 'float 2s ease-out forwards';
            kiss.style.pointerEvents = 'none';
            kiss.style.zIndex = '1000';
            kissEffects.appendChild(kiss);
            
            setTimeout(() => {
                kiss.remove();
            }, 2000);
        }
    }

    // Show special message
    function showSpecialMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '50%';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translate(-50%, -50%)';
        messageDiv.style.background = 'linear-gradient(135deg, #FF69B4, #FF1493)';
        messageDiv.style.color = 'white';
        messageDiv.style.padding = '1rem 2rem';
        messageDiv.style.borderRadius = '2rem';
        messageDiv.style.fontFamily = 'Great Vibes, cursive';
        messageDiv.style.fontSize = '1.5rem';
        messageDiv.style.fontWeight = '600';
        messageDiv.style.boxShadow = '0 10px 30px rgba(255, 105, 180, 0.4)';
        messageDiv.style.zIndex = '10000';
        messageDiv.style.animation = 'glow 2s ease-in-out infinite alternate';
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }

    // Memory Gallery Interactions
    const memoryCards = document.querySelectorAll('.memory-card');
    
    memoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const memoryType = this.dataset.memory;
            createMemoryEffect(memoryType);
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Create memory effects
    function createMemoryEffect(type) {
        if (window.CONFIG && window.CONFIG.memoryMessages) {
            switch(type) {
                case 'late-night':
                    createStars();
                    showMemoryMessage(window.CONFIG.memoryMessages.lateNight || "Those late nights talking with you are my favorite memories 🌙✨");
                    break;
                case 'first-meeting':
                    createSparkles();
                    showMemoryMessage(window.CONFIG.memoryMessages.firstMeeting || "Quety, u r my peace and every moment with u feels like i wanna spend my whole life w u 💫💕");
                    break;
                case 'care':
                    createHeartRain();
                    showMemoryMessage(window.CONFIG.memoryMessages.care || "Quety, u can never be replaced and u hold a position so strong in my life 💕");
                    break;
            }
        }
    }

    // Create starry night effect
    function createStars() {
        const heartsContainer = document.querySelector('.hearts-container');
        
        for (let i = 0; i < 20; i++) {
            const star = document.createElement('div');
            star.textContent = '✨';
            star.style.position = 'absolute';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.fontSize = '20px';
            star.style.animation = 'float 3s ease-in-out infinite';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.pointerEvents = 'none';
            heartsContainer.appendChild(star);
            
            setTimeout(() => {
                star.remove();
            }, 5000);
        }
    }

    // Create sparkle effect
    function createSparkles() {
        const heartsContainer = document.querySelector('.hearts-container');
        const sparkles = ['✨', '⭐', '💫', '🌟'];
        
        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.position = 'absolute';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.fontSize = '25px';
            sparkle.style.animation = 'float 2s ease-out forwards';
            sparkle.style.pointerEvents = 'none';
            heartsContainer.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }
    }

    // Create heart rain effect
    function createHeartRain() {
        const heartsContainer = document.querySelector('.hearts-container');
        const hearts = ['💕', '💖', '💗', '💘', '💝', '💞'];
        
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.position = 'absolute';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = '-50px';
                heart.style.fontSize = '20px';
                heart.style.animation = 'rainDown 3s linear forwards';
                heart.style.pointerEvents = 'none';
                heartsContainer.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }, i * 100);
        }
    }

    // Add rain animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainDown {
            to {
                transform: translateY(calc(100vh + 50px));
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Show memory message
    function showMemoryMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '20%';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translate(-50%, -50%)';
        messageDiv.style.background = 'rgba(255, 255, 255, 0.95)';
        messageDiv.style.color = '#FF1493';
        messageDiv.style.padding = '1.5rem 2rem';
        messageDiv.style.borderRadius = '1rem';
        messageDiv.style.fontFamily = 'Cormorant Garamond, serif';
        messageDiv.style.fontSize = '1.3rem';
        messageDiv.style.fontWeight = '600';
        messageDiv.style.boxShadow = '0 10px 30px rgba(255, 105, 180, 0.3)';
        messageDiv.style.zIndex = '10000';
        messageDiv.style.textAlign = 'center';
        messageDiv.style.maxWidth = '90%';
        messageDiv.style.backdropFilter = 'blur(10px)';
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            messageDiv.style.transform = 'translate(-50%, -50%) scale(0.8)';
            setTimeout(() => {
                messageDiv.remove();
            }, 500);
        }, 3000);
    }

    // Character interactions
    const partnerCharacter = document.getElementById('partner');
    const youCharacter = document.getElementById('you');

    if (partnerCharacter) {
        partnerCharacter.addEventListener('click', function() {
            const message = window.CONFIG && window.CONFIG.characterMessages && window.CONFIG.characterMessages.partner 
                ? `${window.CONFIG.partnerName}, ${window.CONFIG.characterMessages.partner}`
                : "You're the most beautiful person in the world! 💕";
            showSpecialMessage(message);
            createHeartBurst();
        });
    }

    if (youCharacter) {
        youCharacter.addEventListener('click', function() {
            const message = window.CONFIG && window.CONFIG.characterMessages && window.CONFIG.characterMessages.you 
                ? window.CONFIG.characterMessages.you
                : "I'm so lucky to have you in my life! 💖";
            showSpecialMessage(message);
            createSparkles();
        });
    }

    // Initialize
    createHearts();
    
    // Add some initial animations
    setTimeout(() => {
        document.querySelector('.main-title').style.animation = 'glow 2s ease-in-out infinite alternate';
    }, 1000);

    // Auto-create some floating hearts periodically
    setInterval(() => {
        if (Math.random() > 0.7) {
            createHearts();
        }
    }, 10000);

    // Add smooth scrolling to sections
    document.querySelectorAll('section').forEach(section => {
        section.style.scrollMarginTop = '2rem';
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});