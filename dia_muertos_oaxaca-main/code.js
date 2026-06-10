const screens = [
  {
    key: "intro",
    image: "assets/Dia-de-muertos.jpeg",
    music: "assets/Sandunga.mp3",
    es: {
      eyebrow: "Introducción",
      title: "Una tradición viva",
      text:
        "El Día de Muertos en Oaxaca es una celebración profundamente arraigada en la cultura mexicana que honra a los seres queridos que han fallecido. Esta festividad, con raíces en antiguas tradiciones indígenas, es una de las más coloridas y emotivas de México. En este recorrido descubrirás cómo las familias oaxaqueñas rinden homenaje a sus ancestros y celebran la vida por medio de rituales, ofrendas y festividades únicas."
    },
    en: {
      eyebrow: "Introduction",
      title: "A Living Tradition",
      text:
        "The Day of the Dead in Oaxaca is a deeply rooted celebration in Mexican culture that honors departed loved ones. With origins in ancient Indigenous traditions, it is one of Mexico's most colorful and heartfelt festivities. In this tour, you will discover how Oaxacan families pay tribute to their ancestors and celebrate life through unique rituals, offerings, and celebrations."
    }
  },
  {
    key: "history",
    image: "assets/Dia-Muertos-Oaxaca-2.jpeg",
    es: {
      eyebrow: "Historia",
      title: "Raíces prehispánicas",
      text:
        "La festividad tiene sus raíces en las culturas prehispánicas de América Latina. En México, el Día de Muertos tiene relación con civilizaciones indígenas como los aztecas y los mayas, que tenían creencias profundas sobre la vida después de la muerte y realizaban rituales para honrar a sus antepasados. Con la llegada de los españoles en el siglo XVI, estas prácticas se fusionaron con el Día de Todos los Santos y el Día de los Fieles Difuntos."
    },
    en: {
      eyebrow: "History",
      title: "Pre-Hispanic Roots",
      text:
        "This festivity has roots in the pre-Hispanic cultures of Latin America. In Mexico, the Day of the Dead is connected to Indigenous civilizations such as the Aztecs and Mayans, who held deep beliefs about the afterlife and performed rituals to honor their ancestors. With the arrival of the Spaniards in the 16th century, these practices merged with All Saints' Day and All Souls' Day."
    }
  },
  {
    key: "offerings",
    image: "assets/Oaxaca-3.jpeg",
    music: "assets/Dios-nunca-muere.mp3",
    es: {
      eyebrow: "Ofrendas",
      title: "Altares con memoria",
      text:
        "En Oaxaca, las ofrendas son esenciales. Se decoran con cempasúchil, papel picado, veladoras, mole negro, tamales, pan de yema y bebidas como mezcal. Cada región tiene rituales propios. También se realizan comparsas, tapetes monumentales y tradiciones comunitarias como recibir a los difuntos en los panteones."
    },
    en: {
      eyebrow: "Offerings",
      title: "Altars of Memory",
      text:
        "In Oaxaca, offerings are essential. Altars are decorated with marigolds, papel picado, candles, mole negro, tamales, pan de yema, and drinks such as mezcal. Each region has its own rituals. Parades, monumental sawdust carpets, and community traditions such as welcoming the deceased in cemeteries are also part of the celebration."
    }
  },
  {
    key: "catrina",
    image: "assets/Oaxaca-catrina-.jpeg",
    es: {
      eyebrow: "La Catrina",
      title: "Elegancia oaxaqueña",
      text:
        "La Catrina oaxaqueña es una versión regional de la figura creada por José Guadalupe Posada. En Oaxaca se le viste con huipiles, rebozos y joyería tradicional, incorporando elementos zapotecos y mixtecos. Esta variante expresa la influencia local dentro de la celebración del Día de Muertos."
    },
    en: {
      eyebrow: "La Catrina",
      title: "Oaxacan Elegance",
      text:
        "The Oaxacan Catrina is a regional version of the iconic figure created by José Guadalupe Posada. In Oaxaca, she is dressed with huipiles, rebozos, and traditional jewelry, incorporating Zapotec and Mixtec elements. This variant reflects local influence within the Day of the Dead celebration."
    }
  },
  {
    key: "celebrations",
    image: "assets/Captura-de-pantalla-2023-10-07-a-la(s)-4.55.26---p.m..png",
    es: {
      eyebrow: "Celebraciones",
      title: "Rituales comunitarios",
      text:
        "Las celebraciones incluyen visitas a cementerios para decorar tumbas con flores y ofrendas. En casa se montan altares con platillos y veladoras. En algunas comunidades se realizan danzas, se quema copal para purificar y se colocan elementos simbólicos como sal, flores, música y alimentos para honrar a quienes han partido."
    },
    en: {
      eyebrow: "Celebrations",
      title: "Community Rituals",
      text:
        "Celebrations include visits to cemeteries to decorate graves with flowers and offerings. At home, families set up altars with food and candles. In some communities, dances are performed, copal is burned for purification, and symbolic elements such as salt, flowers, music, and food are placed to honor those who have departed."
    }
  },
  {
    key: "art",
    image: "assets/Oaxaca-6.jpeg",
    music: "assets/La-Llorona.mp3",
    es: {
      eyebrow: "Arte",
      title: "Color, oficio y homenaje",
      text:
        "El Día de Muertos en Oaxaca destaca por su arte y artesanía: calaveras de azúcar y chocolate, papel picado, Catrinas, textiles, alebrijes, esculturas en madera y barro, tapetes de aserrín teñido y altares artísticos. Estas expresiones visuales honran a los difuntos y enriquecen la festividad."
    },
    en: {
      eyebrow: "Art",
      title: "Color, Craft, and Tribute",
      text:
        "The Day of the Dead in Oaxaca stands out for its art and craftsmanship: sugar and chocolate skulls, papel picado, Catrinas, textiles, alebrijes, wood and clay sculptures, dyed sawdust carpets, and artistic altars. These visual expressions honor the deceased and enrich the festivity."
    }
  },
  {
    key: "food",
    image: "assets/Captura-de-pantalla-2023-10-07-a-la(s)-5.18.16---p.m..png",
    es: {
      eyebrow: "Gastronomía",
      title: "Sabores de familia",
      text:
        "Durante el Día de Muertos, la gastronomía cobra un significado especial. Destacan el pan de muerto, el tamal de mole rojo o naranja y el mole amarillo preparado con ingredientes locales. Estos platillos unen a las familias y convierten la comida en una parte esencial de la memoria."
    },
    en: {
      eyebrow: "Gastronomy",
      title: "Family Flavors",
      text:
        "During the Day of the Dead, gastronomy takes on special meaning. Notable dishes include pan de muerto, tamales with red or orange mole, and yellow mole prepared with local ingredients. These dishes bring families together and make food an essential part of remembrance."
    }
  },
  {
    key: "dances",
    image: "assets/Danza-Oaxaca.jpeg",
    es: {
      eyebrow: "Danzas",
      title: "Movimiento y memoria",
      text:
        "Oaxaca se llena de danzas que enriquecen la festividad. La Danza de los Huehuentones, la Danza de la Pluma, los Diablos y Ángeles, y otras expresiones comunitarias conectan música, vestuario, espiritualidad e identidad cultural para recordar a los seres queridos."
    },
    en: {
      eyebrow: "Dances",
      title: "Movement and Memory",
      text:
        "Oaxaca fills with dances that enrich the festivity. The Dance of the Huehuentones, the Dance of the Plume, the Devils and Angels, and other community expressions connect music, costumes, spirituality, and cultural identity to remember loved ones."
    }
  },
  {
    key: "toledo",
    image: "assets/Toledo.jpeg",
    es: {
      eyebrow: "Francisco Toledo",
      title: "Legado cultural",
      text:
        "Francisco Toledo (1940-2019) fue un influyente artista y activista de Oaxaca. Su legado abarca el arte, la cultura y la defensa del medio ambiente. Como pintor, escultor, grabador y promotor cultural, dejó una huella profunda en Oaxaca y en México."
    },
    en: {
      eyebrow: "Francisco Toledo",
      title: "Cultural Legacy",
      text:
        "Francisco Toledo (1940-2019) was an influential artist and activist from Oaxaca. His legacy spans art, culture, and environmental advocacy. As a painter, sculptor, printmaker, and cultural promoter, he left a profound mark on Oaxaca and Mexico."
    }
  }
];

const mictlanScreens = [
  {
    key: "mictlan-intro",
    image: "Mictlan/assets/Mictlan_portada.png",
    es: {
      eyebrow: "Mictlán",
      title: "El viaje al inframundo",
      text:
        "De acuerdo con la cosmovisión mexica, el Mictlán era el nivel inferior de la tierra de los muertos. Bernardino de Sahagún describe este camino como un recorrido largo y peligroso compuesto por nueve niveles verticales y descendentes."
    },
    en: {
      eyebrow: "Mictlan",
      title: "The Journey to the Underworld",
      text:
        "According to Mexica cosmology, Mictlan was the lowest realm of the land of the dead. Bernardino de Sahagun describes this path as a long and dangerous journey made up of nine vertical, descending levels."
    }
  },
  {
    key: "chiconahuapan",
    image: "Mictlan/assets/Primer-Nivel.jpeg",
    es: {
      eyebrow: "Primer nivel",
      title: "Chiconahuapan",
      text:
        "También llamado Itzcuintlan o lugar de perros, este sitio estaba a la orilla de un río caudaloso. El muerto debía atravesarlo con la ayuda de un xoloitzcuintle de color pardusco."
    },
    en: {
      eyebrow: "First level",
      title: "Chiconahuapan",
      text:
        "Also called Itzcuintlan, or the place of dogs, this site stood beside a powerful river. The dead person had to cross it with the help of a brownish xoloitzcuintle."
    }
  },
  {
    key: "tepectli",
    image: "Mictlan/assets/Segundo-Nivel.jpeg",
    es: {
      eyebrow: "Segundo nivel",
      title: "Tepectli Monamictlan",
      text:
        "El lugar de los cerros que se juntan. En este nivel existían dos cerros que se abrían y cerraban continuamente. Los muertos debían encontrar el momento oportuno para cruzar sin ser triturados."
    },
    en: {
      eyebrow: "Second level",
      title: "Tepectli Monamictlan",
      text:
        "The place of the mountains that come together. In this level, two mountains opened and closed continuously. The dead had to find the right moment to cross without being crushed."
    }
  },
  {
    key: "iztepetl",
    image: "Mictlan/assets/iztepetl.gif",
    es: {
      eyebrow: "Tercer nivel",
      title: "Iztepetl",
      text:
        "En este lugar había un cerro cubierto de filosos pedernales. Al escalarlo, los cuerpos de los muertos eran desgarrados durante su trayecto."
    },
    en: {
      eyebrow: "Third level",
      title: "Iztepetl",
      text:
        "In this place there was a hill covered with sharp flint stones. As the dead climbed it, their bodies were torn during the journey."
    }
  },
  {
    key: "itzehecayan",
    image: "Mictlan/assets/ITZEHECAYAN.gif",
    es: {
      eyebrow: "Cuarto nivel",
      title: "Itzehecayan",
      text:
        "El lugar del viento de obsidiana era un sitio desolado de hielo y piedra abrupta. Se imaginaba como una sierra de aristas cortantes donde siempre caía nieve."
    },
    en: {
      eyebrow: "Fourth level",
      title: "Itzehecayan",
      text:
        "The place of the obsidian wind was a desolate land of ice and rough stone. It was imagined as a mountain range of cutting edges where snow always fell."
    }
  },
  {
    key: "paniecatacoyan",
    image: "Mictlan/assets/N5.gif",
    es: {
      eyebrow: "Quinto nivel",
      title: "Paniecatacoyan",
      text:
        "El lugar donde la gente vuela y se voltea como banderas. Allí los muertos perdían la gravedad y quedaban a merced de vientos que los arrastraban hasta liberarlos hacia el siguiente nivel."
    },
    en: {
      eyebrow: "Fifth level",
      title: "Paniecatacoyan",
      text:
        "The place where people fly and turn like flags. There, the dead lost gravity and were left at the mercy of winds that dragged them until they were released toward the next level."
    }
  },
  {
    key: "timiminaloayan",
    image: "Mictlan/assets/flecha-lluvia.gif",
    es: {
      eyebrow: "Sexto nivel",
      title: "Timiminaloayan",
      text:
        "El lugar donde la gente es flechada. En este sendero, manos invisibles enviaban saetas puntiagudas contra los cuerpos de quienes lo atravesaban."
    },
    en: {
      eyebrow: "Sixth level",
      title: "Timiminaloayan",
      text:
        "The place where people are struck by arrows. Along this path, invisible hands sent sharp arrows against the bodies of those who crossed it."
    }
  },
  {
    key: "teocoyohuehualoyan",
    image: "Mictlan/assets/jaguares.gif",
    es: {
      eyebrow: "Séptimo nivel",
      title: "Teocoyohuehualoyan",
      text:
        "Felinos salvajes eran liberados para buscar a los viajeros. La prueba consistía en entregar el corazón, precio simbólico para descender al octavo nivel."
    },
    en: {
      eyebrow: "Seventh level",
      title: "Teocoyohuehualoyan",
      text:
        "Wild felines were released to search for travelers. The trial consisted of surrendering the heart, a symbolic price required to descend to the eighth level."
    }
  },
  {
    key: "izmictlan",
    image: "Mictlan/assets/N8.gif",
    es: {
      eyebrow: "Octavo nivel",
      title: "Izmictlan Apochcalolca",
      text:
        "En esta laguna de aguas negras, también llamada Apanhuiayo, el muerto terminaba de descarnar y su tonalli, o alma, se liberaba completamente del cuerpo."
    },
    en: {
      eyebrow: "Eighth level",
      title: "Izmictlan Apochcalolca",
      text:
        "In this lagoon of black waters, also called Apanhuiayo, the dead finished shedding the body, and the tonalli, or soul, was fully released from it."
    }
  },
  {
    key: "chicunamictlan",
    image: "Mictlan/assets/N9.gif",
    es: {
      eyebrow: "Noveno nivel",
      title: "Chicunamictlan",
      text:
        "El muerto debía atravesar las nueve aguas de Chiconauhhapan. Al superar este último obstáculo, su alma quedaba libre de los padecimientos del cuerpo ante Mictlantecuhtli y Mictecacihuatl."
    },
    en: {
      eyebrow: "Ninth level",
      title: "Chicunamictlan",
      text:
        "The dead had to cross the nine waters of Chiconauhhapan. After overcoming this final obstacle, the soul was freed from the body's suffering before Mictlantecuhtli and Mictecacihuatl."
    }
  }
];

const mictlanQuiz = [
  {
    es: {
      question:
        "Según la cosmovisión mexica, ¿quiénes iban al Mictlán sin distinción de rango o riqueza?",
      options: ["Ciudades", "Nobles y plebeyos", "Tribus"]
    },
    en: {
      question: "According to Mexica cosmology, who went to Mictlan without distinction of rank or wealth?",
      options: ["Cities", "Nobles and commoners", "Tribes"]
    },
    correctIndex: 1
  },
  {
    es: {
      question:
        "En Teocoyohuehualoyan se liberaban felinos salvajes para buscar a los viajeros.",
      options: ["Verdadero", "Falso"]
    },
    en: {
      question: "In Teocoyohuehualoyan, wild felines were released to search for travelers.",
      options: ["True", "False"]
    },
    correctIndex: 0
  },
  {
    es: {
      question: "Paniecatacoyan era el lugar donde la gente volaba y se volteaba como banderas. ¿Qué nivel era?",
      options: ["Primer nivel", "Quinto nivel", "Sexto nivel"]
    },
    en: {
      question: "Paniecatacoyan was the place where people flew and turned like flags. Which level was it?",
      options: ["First level", "Fifth level", "Sixth level"]
    },
    correctIndex: 1
  },
  {
    es: {
      question:
        "¿Quién describe el camino al Mictlán en la Historia general de las cosas de la Nueva España?",
      options: ["Bernardino de Sahagún", "El Izmictlan", "Mictlantecuhtli"]
    },
    en: {
      question: "Who describes the path to Mictlan in General History of the Things of New Spain?",
      options: ["Bernardino de Sahagun", "The Izmictlan", "Mictlantecuhtli"]
    },
    correctIndex: 0
  },
  {
    es: {
      question:
        "En Tepectli Monamictlan, los muertos debían cruzar dos cerros que chocaban entre sí. ¿Qué debían encontrar?",
      options: ["Gravedad", "Momento adecuado", "Tiempo"]
    },
    en: {
      question:
        "In Tepectli Monamictlan, the dead had to cross two mountains that crashed together. What did they need to find?",
      options: ["Gravity", "The right moment", "Time"]
    },
    correctIndex: 1
  }
];

const oaxacaQuiz = [
  {
    es: {
      question: "¿Qué honra principalmente el Día de Muertos en Oaxaca?",
      options: ["La llegada de la primavera", "A los seres queridos fallecidos", "Una competencia regional"]
    },
    en: {
      question: "What does the Day of the Dead in Oaxaca mainly honor?",
      options: ["The arrival of spring", "Departed loved ones", "A regional competition"]
    },
    correctIndex: 1
  },
  {
    es: {
      question: "¿Qué elementos aparecen en las ofrendas oaxaqueñas?",
      options: ["Cempasúchil, veladoras, mole y pan de yema", "Nieve, flechas y pedernales", "Globos, máscaras y trofeos"]
    },
    en: {
      question: "Which elements appear in Oaxacan offerings?",
      options: ["Marigolds, candles, mole, and pan de yema", "Snow, arrows, and flint stones", "Balloons, masks, and trophies"]
    },
    correctIndex: 0
  },
  {
    es: {
      question: "¿Cómo se representa la Catrina oaxaqueña en este recorrido?",
      options: ["Con huipiles, rebozos y joyería tradicional", "Como un animal mitológico", "Como una figura sin relación regional"]
    },
    en: {
      question: "How is the Oaxacan Catrina represented in this tour?",
      options: ["With huipiles, rebozos, and traditional jewelry", "As a mythological animal", "As a figure with no regional connection"]
    },
    correctIndex: 0
  },
  {
    es: {
      question: "¿Qué expresiones artísticas destacan durante esta celebración?",
      options: ["Tapetes de aserrín, papel picado, alebrijes y altares", "Solo pintura mural", "Únicamente música electrónica"]
    },
    en: {
      question: "Which artistic expressions stand out during this celebration?",
      options: ["Sawdust carpets, papel picado, alebrijes, and altars", "Only mural painting", "Only electronic music"]
    },
    correctIndex: 0
  },
  {
    es: {
      question: "¿Qué platillos se mencionan en la sección de gastronomía?",
      options: ["Pan de muerto, tamales y mole amarillo", "Pizza, hamburguesas y sushi", "Pozole verde y helado"]
    },
    en: {
      question: "Which dishes are mentioned in the gastronomy section?",
      options: ["Pan de muerto, tamales, and yellow mole", "Pizza, burgers, and sushi", "Green pozole and ice cream"]
    },
    correctIndex: 0
  }
];

const welcome = {
  image: "assets/Dia-de-muertos.jpeg",
  es: {
    eyebrow: "Instituto Simón Bolívar",
    title: "Día de Muertos en Oaxaca",
    text:
      "Te damos la bienvenida a un recorrido por las tradiciones, símbolos y emociones del Día de Muertos en Oaxaca. Selecciona un idioma para comenzar la experiencia."
  },
  en: {
    eyebrow: "Simón Bolívar Institute",
    title: "Day of the Dead in Oaxaca",
    text:
      "Welcome to a journey through the traditions, symbols, and emotions of the Day of the Dead in Oaxaca. Select a language to begin the experience."
  }
};

const mictlanWelcome = {
  image: "Mictlan/assets/NI.gif",
  es: {
    eyebrow: "Recorrido complementario",
    title: "Recorrido por el Mictlán",
    text:
      "Explora una experiencia sobre los nueve niveles del Mictlán, inspirada en el proyecto original de Code.org y convertida a una versión web moderna."
  },
  en: {
    eyebrow: "Complementary tour",
    title: "Journey Through Mictlan",
    text:
      "Explore an experience about the nine levels of Mictlan, inspired by the original Code.org project and converted into a modern web version."
  }
};

const mediaStage = document.getElementById("mediaStage");
const sectionEyebrow = document.getElementById("sectionEyebrow");
const sectionTitle = document.getElementById("sectionTitle");
const sectionText = document.getElementById("sectionText");
const languageActions = document.getElementById("languageActions");
const tourActions = document.getElementById("tourActions");
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");
const homeButton = document.getElementById("homeButton");
const soundButton = document.getElementById("soundButton");
const stepCounter = document.getElementById("stepCounter");
const topicList = document.getElementById("topicList");
const oaxacaModuleButton = document.getElementById("oaxacaModuleButton");
const mictlanModuleButton = document.getElementById("mictlanModuleButton");
const quizCard = document.getElementById("quizCard");
const quizEyebrow = document.getElementById("quizEyebrow");
const quizTitle = document.getElementById("quizTitle");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const moduleEyebrow = document.getElementById("moduleEyebrow");
const moduleTitle = document.getElementById("moduleTitle");
const moduleDescription = document.getElementById("moduleDescription");

let currentLanguage = "es";
let currentIndex = -1;
let currentModule = "oaxaca";
let quizIndex = 0;
let quizScore = 0;
let quizActive = false;
let audioEnabled = true;
let currentMusic = null;
let activeAudio = null;
let availableVoices = [];
let currentUtterance = null;
let narrationQueue = [];
let narrationStopped = false;
let narrationRunId = 0;

function loadVoices() {
  if ("speechSynthesis" in window) {
    availableVoices = window.speechSynthesis.getVoices();
  }
}

loadVoices();
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function setBackground(image) {
  mediaStage.style.setProperty("--screen-image", `url("${image}")`);
}

function getActiveScreens() {
  return currentModule === "mictlan" ? mictlanScreens : screens;
}

function getActiveWelcome() {
  return currentModule === "mictlan" ? mictlanWelcome : welcome;
}

function getActiveQuiz() {
  return currentModule === "mictlan" ? mictlanQuiz : oaxacaQuiz;
}

function getScreenData(screen) {
  return screen[currentLanguage];
}

function getWelcomeData() {
  return getActiveWelcome()[currentLanguage];
}

function setContentMode(mode) {
  const isQuiz = mode === "quiz";
  quizCard.hidden = !isQuiz;
  document.querySelector(".content-card").hidden = isQuiz;
  languageActions.hidden = isQuiz || currentIndex >= 0;
  tourActions.hidden = isQuiz || (currentIndex < 0 && currentModule !== "mictlan");
}

function updateModuleCopy() {
  if (currentModule === "mictlan") {
    moduleEyebrow.textContent = currentLanguage === "es" ? "Recorrido complementario" : "Complementary tour";
    moduleTitle.textContent = currentLanguage === "es" ? "Recorrido por el Mictlán" : "Journey Through Mictlan";
    moduleDescription.textContent =
      currentLanguage === "es"
        ? "Una experiencia modernizada con los nueve niveles del Mictlán y un quiz final de repaso."
        : "A modernized experience with the nine levels of Mictlan and a final review quiz.";
    return;
  }

  moduleEyebrow.textContent = currentLanguage === "es" ? "Recorrido interactivo" : "Interactive tour";
  moduleTitle.textContent = currentLanguage === "es" ? "Día de Muertos en Oaxaca" : "Day of the Dead in Oaxaca";
  moduleDescription.textContent =
    currentLanguage === "es"
      ? "Esta versión conserva el contenido del proyecto de Code.org y lo convierte en una página web moderna con HTML, CSS y JavaScript."
      : "This version keeps the original Code.org project content and turns it into a modern web page with HTML, CSS, and JavaScript.";
}

function updateLanguageButtons() {
  document.querySelector("[data-lang='es']").textContent = "Español";
  document.querySelector("[data-lang='en']").textContent = "English";
}

function stopNarration() {
  narrationStopped = true;
  narrationRunId += 1;
  narrationQueue = [];
  currentUtterance = null;
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function getNarrationVoice() {
  const languageCode = currentLanguage === "es" ? "es" : "en";
  const voices = availableVoices.filter((voice) => voice.lang.toLowerCase().startsWith(languageCode));

  if (currentLanguage === "en") {
    const preferredEnglishVoices = ["alex", "daniel", "david", "mark", "google us english"];
    return (
      voices.find((voice) => preferredEnglishVoices.some((name) => voice.name.toLowerCase().includes(name))) ||
      voices.find((voice) => voice.lang.toLowerCase().startsWith("en-us")) ||
      voices[0] ||
      null
    );
  }

  const preferredSpanishVoices = ["paulina", "monica", "jorge", "google español"];
  return (
    voices.find((voice) => preferredSpanishVoices.some((name) => voice.name.toLowerCase().includes(name))) ||
    voices.find((voice) => voice.lang.toLowerCase().startsWith("es-mx")) ||
    voices[0] ||
    null
  );
}

function splitNarration(text) {
  const sentences = text
    .replace(/\s+/g, " ")
    .trim()
    .match(/[^.!?]+[.!?]+|[^.!?]+$/g);

  if (!sentences) {
    return [];
  }

  const chunks = [];
  let currentChunk = "";
  sentences.forEach((sentence) => {
    const cleanSentence = sentence.trim();
    const nextChunk = currentChunk ? `${currentChunk} ${cleanSentence}` : cleanSentence;
    if (nextChunk.length > 180 && currentChunk) {
      chunks.push(currentChunk);
      currentChunk = cleanSentence;
    } else {
      currentChunk = nextChunk;
    }
  });

  if (currentChunk) {
    chunks.push(currentChunk);
  }

  return chunks;
}

function restoreMusicVolume() {
  if (activeAudio && audioEnabled) {
    activeAudio.volume = 0.22;
  }
}

function speakNextChunk(runId) {
  if (runId !== narrationRunId || narrationStopped || !audioEnabled || !("speechSynthesis" in window)) {
    currentUtterance = null;
    restoreMusicVolume();
    return;
  }

  const text = narrationQueue.shift();
  if (!text) {
    currentUtterance = null;
    restoreMusicVolume();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  const voice = getNarrationVoice();
  const isSpanish = currentLanguage === "es";
  utterance.lang = isSpanish ? "es-MX" : "en-US";
  utterance.rate = isSpanish ? 0.94 : 0.84;
  utterance.pitch = isSpanish ? 0.95 : 0.78;
  utterance.volume = 1;
  if (voice) {
    utterance.voice = voice;
  }

  utterance.onstart = () => {
    if (activeAudio) {
      activeAudio.volume = 0.1;
    }
  };
  utterance.onend = () => {
    currentUtterance = null;
    window.setTimeout(() => speakNextChunk(runId), 120);
  };
  utterance.onerror = () => {
    currentUtterance = null;
    window.setTimeout(() => speakNextChunk(runId), 120);
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function speak(text) {
  stopNarration();
  if (!audioEnabled || !("speechSynthesis" in window)) {
    return;
  }

  narrationStopped = false;
  narrationRunId += 1;
  narrationQueue = splitNarration(text);
  speakNextChunk(narrationRunId);
}

function stopMusic() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
  currentMusic = null;
}

function playMusic(src) {
  if (!audioEnabled || !src || currentMusic === src) {
    return;
  }

  stopMusic();
  activeAudio = new Audio(src);
  activeAudio.loop = true;
  activeAudio.volume = 0.22;
  currentMusic = src;
  activeAudio.play().catch(() => {
    currentMusic = null;
  });
}

function updateMusic(screen) {
  if (!audioEnabled) {
    stopMusic();
    return;
  }

  if (!screen.music) {
    stopMusic();
    return;
  }

  playMusic(screen.music);
}

function renderTopicList() {
  topicList.innerHTML = "";
  getActiveScreens().forEach((screen, index) => {
    const data = getScreenData(screen);
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = data.title;
    button.className = index === currentIndex ? "active" : "";
    button.addEventListener("click", () => showScreen(index, true));
    item.appendChild(button);
    topicList.appendChild(item);
  });

  const item = document.createElement("li");
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = currentLanguage === "es" ? "Quiz final" : "Final quiz";
  button.className = quizActive ? "active" : "";
  button.addEventListener("click", startQuiz);
  item.appendChild(button);
  topicList.appendChild(item);
}

function showWelcome() {
  currentIndex = -1;
  quizActive = false;
  stopNarration();
  stopMusic();
  const data = getWelcomeData();
  const activeWelcome = getActiveWelcome();
  setBackground(activeWelcome.image);
  sectionEyebrow.textContent = data.eyebrow;
  sectionTitle.textContent = data.title;
  sectionText.textContent = data.text;
  stepCounter.textContent =
    currentModule === "mictlan" ? "Mictlán" : currentLanguage === "es" ? "Bienvenida" : "Welcome";
  setContentMode("tour");
  if (currentModule === "mictlan") {
    backButton.disabled = true;
    nextButton.textContent = currentLanguage === "es" ? "Iniciar recorrido" : "Start tour";
  }
  renderTopicList();
}

function showScreen(index, narrate = true) {
  const activeScreens = getActiveScreens();
  quizActive = false;
  currentIndex = Math.max(0, Math.min(index, activeScreens.length - 1));
  const screen = activeScreens[currentIndex];
  const data = getScreenData(screen);

  setBackground(screen.image);
  sectionEyebrow.textContent = data.eyebrow;
  sectionTitle.textContent = data.title;
  sectionText.textContent = data.text;
  stepCounter.textContent = `${currentIndex + 1} / ${activeScreens.length}`;
  setContentMode("tour");
  backButton.disabled = currentIndex === 0;
  nextButton.textContent =
    currentIndex === activeScreens.length - 1
      ? "Quiz"
      : currentModule === "mictlan" || currentLanguage === "es"
        ? "Siguiente"
        : "Next";

  renderTopicList();
  updateMusic(screen);
  if (narrate) {
    speak(`${data.title}. ${data.text}`);
  }
}

function switchModule(moduleName) {
  currentModule = moduleName;
  quizIndex = 0;
  quizScore = 0;
  quizActive = false;
  oaxacaModuleButton.classList.toggle("active", currentModule === "oaxaca");
  mictlanModuleButton.classList.toggle("active", currentModule === "mictlan");
  updateModuleCopy();
  document.documentElement.lang = currentLanguage;
  showWelcome();
}

function startQuiz() {
  quizIndex = 0;
  quizScore = 0;
  quizActive = true;
  currentIndex = -1;
  stopNarration();
  updateMusic(getActiveScreens()[0]);
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const activeQuiz = getActiveQuiz();
  const question = activeQuiz[quizIndex];
  const data = question[currentLanguage];
  setBackground(currentModule === "mictlan" ? "Mictlan/assets/Mictlan_portada.png" : "assets/Dia-de-muertos.jpeg");
  setContentMode("quiz");
  stepCounter.textContent = `Quiz ${quizIndex + 1} / ${activeQuiz.length}`;
  quizEyebrow.textContent =
    currentLanguage === "es" ? `Puntaje: ${quizScore}` : `Score: ${quizScore}`;
  quizTitle.textContent =
    currentLanguage === "es" ? `Pregunta ${quizIndex + 1}` : `Question ${quizIndex + 1}`;
  quizQuestion.textContent = data.question;
  quizFeedback.textContent = "";
  quizOptions.innerHTML = "";

  data.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => answerQuiz(optionIndex));
    quizOptions.appendChild(button);
  });

  renderTopicList();
  speak(`${quizTitle.textContent}. ${data.question}`);
}

function answerQuiz(optionIndex) {
  const question = getActiveQuiz()[quizIndex];
  const isCorrect = optionIndex === question.correctIndex;
  if (isCorrect) {
    quizScore += 1;
  }

  quizOptions.querySelectorAll("button").forEach((button, index) => {
    button.disabled = true;
    if (index === question.correctIndex) {
      button.classList.add("correct");
    } else if (index === optionIndex) {
      button.classList.add("incorrect");
    }
  });

  quizFeedback.textContent =
    currentLanguage === "es"
      ? isCorrect
        ? "Respuesta correcta."
        : "Respuesta incorrecta."
      : isCorrect
        ? "Correct answer."
        : "Incorrect answer.";

  window.setTimeout(() => {
    if (quizIndex >= getActiveQuiz().length - 1) {
      showQuizFinal();
      return;
    }

    quizIndex += 1;
    renderQuizQuestion();
  }, 1200);
}

function showQuizFinal() {
  const activeQuiz = getActiveQuiz();
  setBackground(currentModule === "mictlan" ? "Mictlan/assets/Mictlan-portada-.jpeg" : "assets/Oaxaca.jpeg");
  setContentMode("quiz");
  stepCounter.textContent = currentLanguage === "es" ? "Quiz final" : "Final quiz";
  quizEyebrow.textContent = currentLanguage === "es" ? "Resultado" : "Result";
  quizTitle.textContent = currentLanguage === "es" ? "Recorrido completo" : "Tour complete";
  quizQuestion.textContent =
    currentLanguage === "es"
      ? `Tu puntaje fue ${quizScore} de ${activeQuiz.length}.`
      : `Your score was ${quizScore} out of ${activeQuiz.length}.`;
  quizFeedback.textContent = "";
  quizOptions.innerHTML = "";

  const restartButton = document.createElement("button");
  restartButton.type = "button";
  restartButton.className = "quiz-option";
  restartButton.textContent =
    currentLanguage === "es"
      ? currentModule === "mictlan"
        ? "Volver al inicio del Mictlán"
        : "Volver al inicio de Oaxaca"
      : currentModule === "mictlan"
        ? "Return to the start of Mictlan"
        : "Return to the start of Oaxaca";
  restartButton.addEventListener("click", showWelcome);
  quizOptions.appendChild(restartButton);

  renderTopicList();
  speak(
    currentLanguage === "es"
      ? `Felicidades, llegaste hasta aqui. Tu puntaje fue ${quizScore} de ${activeQuiz.length}.`
      : `Congratulations, you reached the end. Your score was ${quizScore} out of ${activeQuiz.length}.`
  );
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.lang;
    document.documentElement.lang = currentLanguage;
    updateModuleCopy();
    if (currentIndex >= 0) {
      showScreen(currentIndex, true);
      return;
    }

    showScreen(0, true);
  });
});

nextButton.addEventListener("click", () => {
  if (currentIndex < 0) {
    showScreen(0, true);
    return;
  }

  const activeScreens = getActiveScreens();
  if (currentIndex >= activeScreens.length - 1) {
    startQuiz();
    return;
  }
  showScreen(currentIndex + 1, true);
});

backButton.addEventListener("click", () => {
  showScreen(currentIndex - 1, true);
});

homeButton.addEventListener("click", showWelcome);

oaxacaModuleButton.addEventListener("click", () => switchModule("oaxaca"));
mictlanModuleButton.addEventListener("click", () => switchModule("mictlan"));

soundButton.addEventListener("click", () => {
  audioEnabled = !audioEnabled;
  soundButton.textContent = audioEnabled ? "Audio" : "Silencio";
  soundButton.setAttribute("aria-pressed", String(!audioEnabled));

  if (!audioEnabled) {
    stopNarration();
    stopMusic();
    return;
  }

  if (currentIndex >= 0) {
    showScreen(currentIndex, true);
  }
});

showWelcome();
