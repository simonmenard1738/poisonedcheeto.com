//obj initialize
var header = "";
var quote = "";
var body = "";
var footer = "";
var tracklist = "";
var vinyl = "";
var music = "";

//flags
var vinylPlaying;

//intervals
var headerInterval = "";
var tracklistInterval = "";

//onload
window.onload = function(){
    // var setting
    nav = document.querySelector("nav");
    header = document.querySelector("#headerText");
    quote = document.querySelector("#quote");
    presaveText = document.querySelector("#presaveText");
    body = document.querySelector("body");
    footer = document.querySelector("footer");
    tracklist = document.querySelector("#tracklist");

    //boolset
    vinylPlaying = false;

    //audio
    vinyl = new Audio("./sounds/vinyl_dotcom.mp3");
    vinyl.loop = true;
    music = new Audio("./sounds/leave_dotcom.mp3");
    music.loop = true;

    // function calls
    
    if(quote){
        quoteRenderer();
        setInterval(() => fontTweakage(quote), 100);
    }
    
    if(presaveText){
        setInterval(() => fontTweakage(presaveText), 200);
    }    
}


//arr
var quotes = [
    "I'm just the machine, I offer no insights",
    "And I will regret everything, and it will be beautiful",
    "A sickness you cannot understand",
    "It has mutated beyond my comprehension",
    "We'll stay the same",
    "The greatest possible waste of your time",
    "It's a lie you must believe",
    "Intersects of art and business, too many to count",
    "Stripped of dignity, possession and self-perception",
    "In these moments I crawl back to God",
    "What",
    "All I have is my work, whether I'm a person, depends on your definition",
    "All that's missing is the skin, and the bones, and perhaps the mind as well",
    "It cursed me for years, but I'm glad it happened",
    "There's a rock in my shoe and I can't get it out",
    "What do I have to do to make you care ?",
    "Only God knows I'm scared",
    "Only remember the piece, only remember the work",
    "And we will spend eternities longing, but only the work persists",
    "I wish I was more, I wish I did more"
]

var tracks = [
    track("exits (now)"),
    track("talktoem", {1: "47negus"}),
    track("dress", {1: "aftrr", 2: "kurtis"}),
    track("outofline", {1: "yazida", 2: "4cf"}),
    track("onlock", {1: "rans0m", 2: "alt!"}),
    track("same", {1: "dpf"}),
    track("staywithme", {1: "viizzi", 2: "visions", 3: "sheku"}),
    track("leave (hug)", {1: "simon m", 2: "woodydacherry"}),
    track("distasteful", {1: "yung blasian", 2: "iktl!"}),
    track("malibu (onyourlips)", {1: "yazida", 2: "angelus", 3: "4cf", 4: "mental"}),
    track("dunning-kruger"),
    track("please", {1: "liza blaise"}),
]

 var fontClasses = ["typewriter", "script", "cursive", "modern", "sanserif"];


//str
var quoteOverride = "July 10th.";
var currentQuote = "";

//bool
var overriding = false;

//int
var quoteCounter = 0;
var currentFontIndex = 0;

//obj
function track(title="default", vocalists={1: "none"}){
    return {title, vocalists}
}

//str funct
function quoteGenerator(){
    if(++quoteCounter==tracks.length){
        overrideToggle(true);
        quoteCounter = 0;
        return quoteOverride; 
    }else{
        if(quoteCounter==1 && vinylPlaying==true){
            overrideToggle(false);         
        }else if(quoteCounter==2 && vinylPlaying==false){
            vinyl.play();
            vinylPlaying = true;
        }
        var tempQuote = quotes[Math.floor(Math.random()*(quotes.length))];
        while(currentQuote==tempQuote){
            var tempQuote = quotes[Math.floor(Math.random()*(quotes.length))];
        }
        currentQuote = tempQuote;
        return currentQuote
    }
}

//void funct
function quoteRenderer(){
    quote.innerHTML = quoteGenerator();
}

function headerPort(){
    header.innerHTML = " <i>\" portfolio \"</i> ";
    headerInterval = setInterval(() => fontTweakage(header), 100);
}

function headerCheeto(){
    header.innerHTML = "poisonedcheeto.com";
    clearInterval(headerInterval);
    header.removeAttribute("class");
    header.classList.add("sanserif");
}

function fontTweakage(element){
    element.removeAttribute("class");
    element.classList.add(fontClasses[currentFontIndex]);
    currentFontIndex = (currentFontIndex + 1) % fontClasses.length;
}

function overrideToggle(flag){
    if(flag){
        header.classList.add("hidden");
        footer.classList.add("hidden");
        nav.classList.add("hidden");
        body.classList.add("overrideBody");
        body.classList.remove("gradientBody");
        tracklist.classList.remove("hidden");
        tracklist.innerHTML = JSON.stringify(tracks);
        tracklistInterval =  setInterval(() => fontTweakage(tracklist), 800);
        vinyl.pause();
        music.play();
    }else{
        header.classList.remove("hidden");
        nav.classList.remove("hidden");
        footer.classList.remove("hidden");
        body.classList.remove("overrideBody");
        body.classList.add("gradientBody");
        tracklist.classList.add("hidden");
        tracklist.innerHTML = "";
        music.pause();
        vinyl.play();
        clearInterval(tracklistInterval);
    }
    
}
