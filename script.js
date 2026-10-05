const memories = [
  {
    date: "11.07.25",
    title: "The day we met",
    text: "The day we met. I was so excited to send messages and receive yours."
  },

  {
    date: "10.10.25",
    title: "Our first call",
    text: "Our first call — the call was at 11:21 PM Mumbai time.\n\nI felt so comfortable with you even being silent, even not understanding every word.\n\nAnd this was also the day when we switched to WhatsApp."
  },

  {
    date: "07.10.25",
    title: "A day full of little things",
    text: "On this day I told you about my strange dreams.\n\nWe were discussing the series Suits.\n\nWe discussed the book Surrounded by Idiots a bit.\n\nI said you were blue.\n\nYou shared amazing photos of the fireworks, I was amazed.\n\nAnd that day I also learned the first letter of your last name and the area you live in.\n\nThe day you suggested we talk on the call."
  },

  {
    date: "29.10",
    title: "Your crazy questions",
    text: "You joked that you would start asking crazy questions too."
  },

  {
    date: "13.09",
    title: "A very funny compliment",
    text: "I was writing you a compliment that day. It was very funny for me.\n\nWe also wanted to play Asphalt together.))"
  },

  {
    date: "09.09",
    title: "Guessing your birthday month",
    text: "Guessing your month of birth 😂😂😂"
  },

  {
    date: "—",
    title: "Our old conversations",
    text: "our old conversations >> reading how your perfect day went",
    quote: true
  },

  {
    date: "28.08",
    title: "The humidity sensor",
    text: "You were helping me figure out how to use the humidity sensor.\n\nI liked your video explanation so muchhhhh. I've watched it several times — because I really liked your explanation and voice, and because I didn't understand anything 🤣🤣🤣"
  },

  {
    date: "27.08",
    title: "Your real name",
    text: "I found out your real namee. Your reaction was funnyyy:\n\n\"Where the hell you got that second name\"\n\nYou told me that you were having your autumn breaks and on the next day I asked, \"Are you at school?\"\n\nAnd you often said that I had a good memory 😂😂😂"
  },

  {
    date: "26.08",
    title: "Things we never told anyone",
    text: "We talked about things we never told anyone. You sent me your amazing photos.\n\nIt was a wonderful evening. I still remember those feelings."
  },

  {
    date: "14.09",
    title: "Words in our languages",
    text: "Even after you said that you were sleepy, we were talking, learning a few words in our languages.\n\nI enjoyed your voice. It's so calm."
  },

  {
    date: "—",
    title: "Things I notice about you",
    text: "I don't know how to explain it but it seems to me that your manner of speech is a little different from others.\n\nDifferent in a good way.\n\nYou always reply so quickly, which is a bit surprising in a good way. And you seem very sure about the things you like — whether it's music, games, or movies. It feels like you have a clear taste and personality, and honestly, I find it really impressive.\n\nYou always want to learn something new and I think it's really cool, this is also an unusual character trait.\n\nYour reaction to unpleasant situations is also unusual because by the end of the evening you were normal.\n\nAnd what are your tastes in games and TV series? I really like the series you recommended, it's really addictive. And Asphalt 9 — I saw this game before and was surprised when I found out you play it and the way you play chess is unreal.\n\nYou have excellent taste in books. It is clear that you are a great connoisseur of the genre.",
    quote: true
  },

  {
    date: "—",
    title: "Adore your stories",
    text: "Adore your stories. How was your day?\n\nWell, when I got to the station in the early morning the train came right on time and when I boarded it, it started. After I got off the train and went for the taxi, the first taxi agreed to go. I reached school, and while coming, I thought about taking the Monorail. I arrived at the platform and the monorail was about to go. Luckily I got it. I left the monorail at my destination and went to the railway station to take another train, again due to luck the train was just about to go but I got it.",
    quote: true
  },

  {
    date: "—",
    title: "The match story",
    text: "So at one point in the match there was one guy from the opponent team with the ball with him.\n\nHe was very close to the benches and dribbling.\n\nSo I started running toward him with good speed and got the ball.\n\nBut since I was in good speed the ball slipped from my hand and crossed the benches.\n\nNow I was also in the speed, as I said before, so I was running toward the benches, and the distance was too low that I could not stop.\n\nNow... M.\n\nNow the girls were seeing me coming toward them at high speed and got very scared 🤣🤣🤣",
    quote: true
  }
];


// ===============================
// GET ELEMENTS
// ===============================

const layer = document.getElementById("stars-layer");

const modal = document.getElementById("memoryModal");

const closeModal = document.getElementById("closeModal");

const memoryDate = document.getElementById("memoryDate");

const memoryTitle = document.getElementById("memoryTitle");

const memoryText = document.getElementById("memoryText");


// ===============================
// RANDOM NUMBER
// ===============================

function random(min, max) {
  return Math.random() * (max - min) + min;
}


// ===============================
// CREATE MEMORY STAR
// ===============================

function createStar(memory, index) {

  const star = document.createElement("button");

  star.className = "memory-star";

  // First few stars are slightly brighter
  if (index < 4) {
    star.classList.add("main");
  }


  // ===============================
  // STAR POSITION
  // ===============================

  let x;
  let y;


  // Main stars have more controlled positions
  if (index < 4) {

    x = [17, 82, 23, 76][index] + random(-3, 3);

    y = [30, 28, 66, 70][index] + random(-3, 3);

  } else {

    x = random(7, 93);

    y = random(22, 88);

  }


  star.style.left = `${x}%`;

  star.style.top = `${y}%`;


  // ===============================
  // ANIMATION SETTINGS
  // ===============================

  star.style.setProperty(
    "--float-duration",
    `${random(5, 8).toFixed(2)}s`
  );

  star.style.setProperty(
    "--twinkle-duration",
    `${random(2.8, 5.2).toFixed(2)}s`
  );

  star.style.setProperty(
    "--float-delay",
    `${random(-7, 0).toFixed(2)}s`
  );

  star.style.setProperty(
    "--twinkle-delay",
    `${random(-5, 0).toFixed(2)}s`
  );


  // Random initial size
  star.style.transform =
    `translate(-50%, -50%) scale(${random(.68, 1.05).toFixed(2)})`;


  // ===============================
  // SMALL LABEL
  // ===============================

  const label = document.createElement("span");

  label.className = "star-label";

  label.textContent =
    memory.date === "—"
      ? "memory"
      : memory.date;

  star.appendChild(label);


  // ===============================
  // CLICK
  // ===============================

  star.addEventListener("click", () => {

    openMemory(memory);

  });


  layer.appendChild(star);
}


// ===============================
// OPEN MEMORY
// ===============================

function openMemory(memory) {

  memoryDate.textContent = memory.date;

  memoryTitle.textContent = memory.title;

  memoryText.textContent = memory.text;


  // Quote memories get italic styling
  memoryText.classList.toggle(
    "quote-text",
    Boolean(memory.quote)
  );


  modal.classList.add("open");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("modal-open");
}


// ===============================
// CLOSE MEMORY
// ===============================

function closeMemory() {

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove("modal-open");
}


// ===============================
// CREATE ALL MEMORY STARS
// ===============================

memories.forEach((memory, index) => {

  createStar(memory, index);

});


// ===============================
// CLOSE BUTTON
// ===============================

closeModal.addEventListener(
  "click",
  closeMemory
);


// ===============================
// CLICK OUTSIDE CARD
// ===============================

modal.addEventListener(
  "click",
  (event) => {

    if (
      event.target.dataset.close === "true"
    ) {

      closeMemory();

    }

  }
);


// ===============================
// ESCAPE KEY
// ===============================

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      closeMemory();

    }

  }
);


// =====================================================
// BACKGROUND MINI STARS
// =====================================================
//
// These stars randomly disappear and appear again.
// This makes the whole sky feel alive.
// =====================================================

function createBackgroundSparkles() {

  const sparkleCount = 75;

  const container =
    document.createElement("div");

  container.className =
    "background-sparkles";


  Object.assign(
    container.style,
    {
      position: "fixed",
      inset: "0",
      zIndex: "1",
      pointerEvents: "none"
    }
  );


  for (
    let i = 0;
    i < sparkleCount;
    i++
  ) {

    const dot =
      document.createElement("i");


    Object.assign(
      dot.style,
      {

        position: "absolute",

        left:
          `${random(1, 99)}%`,

        top:
          `${random(8, 96)}%`,

        width:
          `${random(.6, 2.1).toFixed(1)}px`,

        height:
          `${random(.6, 2.1).toFixed(1)}px`,

        borderRadius: "50%",

        background:
          "rgba(255,255,255,.9)",

        boxShadow:
          "0 0 7px rgba(210,220,255,.7)",

        opacity:
          random(.15, .75).toFixed(2),

        animation:
          `starLife ${random(2.2, 7).toFixed(2)}s ease-in-out ${random(-7, 0).toFixed(2)}s infinite`

      }
    );


    container.appendChild(dot);

  }


  document.body.appendChild(container);
}


// ===============================
// STAR LIFE ANIMATION
// ===============================

const extraStyle =
  document.createElement("style");

extraStyle.textContent = `

@keyframes starLife {

  0%, 100% {

    opacity: .08;

    transform: scale(.7);

  }

  25% {

    opacity: .8;

    transform: scale(1);

  }

  55% {

    opacity: .25;

    transform: scale(.8);

  }

  75% {

    opacity: .95;

    transform: scale(1.12);

  }

}

`;


document.head.appendChild(
  extraStyle
);


// ===============================
// START BACKGROUND STARS
// ===============================

createBackgroundSparkles();