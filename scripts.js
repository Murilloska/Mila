const messages = [
      "Te quiero muchisimo ❤️",
     "Gracias por estar en mi vida 🌟",
     "Eres una de mis personas favoritas 🫂",
     "Por mas dias juntos 💫",
     "Eres una persona maravillosa 🤩",
     "Eres unica y especial 👑",
     "Amigos desde la infancia 🫶🏻",
     "Nunca dejes de ser tu misma ❤️",
    ];

    function createTextBubble() {
        const bubble = document.createElement("div")
        bubble.className = "text-bubble";
        bubble.innerText = messages[Math.floor(Math.random() * messages.length )];

        const left = Math.random() * 80 + 10;
        const top = Math.random() * 80 + 10;

        bubble.style.position="absolute";
        bubble.style.left = left + "vw";
        bubble.style.top = top + "vh";
        
        const container = document.getElementById("bubbles-text"); // Corrected ID
        container.appendChild(bubble);

        setTimeout(() =>{
            const rect = bubble.getBoundingClientRect();
            
            if (rect.right > window.innerWidth){
                const newLeft = window.innerWidth - rect.width -10;
                bubble.style.left = `${newLeft}px`; // Corrected template literal
            }
            
            if (rect.bottom > window.innerHeight){
                const newTop = window.innerHeight - rect.height - 10;
                bubble.style.top = `${newTop}px`; // Corrected template literal
            }

            if (rect.left < 0){
                bubble.style.left = "10px";
            }

            if (rect.top < 0){
                bubble.style.top = "10px";
            }
        },10);

        setTimeout(() => {
            bubble.remove();
        },8000);
    }

    setInterval(createTextBubble, 500);
