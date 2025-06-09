import './obj/track.js';

//arr
var quotes = [
    "And I will regret everything, and it will be beautiful",
    "A sickness you cannot understand",
    "It has mutated beyond my comprehension",
    "We'll stay the same",
    "The greatest possible waste of your time",
    "It's a lie you must believe",
    "Intersects of art and business, too many to count",
    "Stripped of dignity, possession and self-perception",
    "In these moments I crawl back to God",
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

var tracklist = [
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
    track("messages"),
    track("please", {1: "liza blaise"}),
]

//str
var quoteOverride = ""
var currentQuote = "";

//bool
var overriding = false;

//int
var counter = 0;

//str funct
function quoteGenerator(){
    if(++counter==tracklist.length){
        currentQuote = quoteOverride;
        overriding = true;
        counter==0;
    }else{
        currentQuote = quotes(Math.floor(Math.random()*(tracklist.length + 1)));
    }
}

