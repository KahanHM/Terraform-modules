import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GeneratorService {
  ADJECTIVES = [
    "aback",
    "abashed",
    "aberrant",
    "abhorrent",
    "abiding",
    "abject",
    "ablaze",
    "able",
    "abnormal",
    "aboard",
    "aboriginal",
    "abortive",
    "abounding",
    "abrasive",
    "abrupt",
    "absent",
    "absorbed",
    "absorbing",
    "abstracted",
    "absurd",
    "abundant",
    "abusive",
    "acceptable",
    "accessible",
    "accidental",
    "accurate",
    "acid",
    "acidic",
    "acoustic",
    "acrid",
    "actually",
    "ad",
    "adamant",
    "adaptable",
    "addicted",
    "adhesive",
    "adjoining",
    "adorable",
    "adventurous",
    "afraid",
    "aggressive",
    "agonizing",
    "agreeable",
    "ahead",
    "ajar",
    "alcoholic",
    "alert",
    "alike",
    "alive",
    "alleged",
    "alluring",
    "aloof",
    "amazing",
    "ambiguous",
    "ambitious",
    "amuck",
    "amused",
    "amusing",
    "ancient",
    "angry",
    "animated",
    "annoyed",
    "annoying",
    "anxious",
    "apathetic",
    "aquatic",
    "aromatic",
    "arrogant",
    "ashamed",
    "aspiring",
    "assorted",
    "astonishing",
    "attractive",
    "auspicious",
    "automatic",
    "available",
    "average",
    "awake",
    "aware",
    "awesome",
    "awful",
    "axiomatic",
    "bad",
    "barbarous",
    "bashful",
    "bawdy",
    "beautiful",
    "befitting",
    "belligerent",
    "beneficial",
    "bent",
    "berserk",
    "best",
    "better",
    "bewildered",
    "big",
    "billowy",
    "bite-sized",
    "bitter",
    "bizarre",
    "black",
    "black-and-white",
    "bloody",
    "blue",
    "blue-eyed",
    "blushing",
    "boiling",
    "boorish",
    "bored",
    "boring",
    "bouncy",
    "boundless",
    "brainy",
    "brash",
    "brave",
    "brawny",
    "breakable",
    "breezy",
    "brief",
    "bright",
    "broad",
    "broken",
    "brown",
    "bumpy",
    "burly",
    "bustling",
    "busy",
    "cagey",
    "calculating",
    "callous",
    "calm",
    "capable",
    "capricious",
    "careful",
    "careless",
    "caring",
    "cautious",
    "ceaseless",
    "certain",
    "changeable",
    "charming",
    "cheap",
    "cheerful",
    "chemical",
    "chief",
    "childlike",
    "chilly",
    "chivalrous",
    "chubby",
    "chunky",
    "clammy",
    "classy",
    "clean",
    "clear",
    "clever",
    "cloistered",
    "closed",
    "cloudy",
    "clumsy",
    "cluttered",
    "coherent",
    "cold",
    "colorful",
    "colossal",
    "combative",
    "comfortable",
    "common",
    "complete",
    "complex",
    "concerned",
    "condemned",
    "confused",
    "conscious",
    "cooing",
    "cool",
    "cooperative",
    "coordinated",
    "courageous",
    "cowardly",
    "crabby",
    "craven",
    "crazy",
    "creepy",
    "crooked",
    "crowded",
    "cruel",
    "cuddly",
    "cultured",
    "cumbersome",
    "curious",
    "curly",
    "curved",
    "curvy",
    "cut",
    "cute",
    "cynical",
    "daffy",
    "daily",
    "damaged",
    "damaging",
    "damp",
    "dangerous",
    "dapper",
    "dark",
    "dashing",
    "dazzling",
    "dead",
    "deadpan",
    "deafening",
    "dear",
    "debonair",
    "decisive",
    "decorous",
    "deep",
    "deeply",
    "defeated",
    "defective",
    "defiant",
    "delicate",
    "delicious",
    "delightful",
    "delirious",
    "demonic",
    "dependent",
    "depressed",
    "deranged",
    "descriptive",
    "deserted",
    "detailed",
    "determined",
    "devilish",
    "didactic",
    "different",
    "difficult",
    "diligent",
    "direful",
    "disagreeable",
    "discreet",
    "distinct",
    "disturbed",
    "divergent",
    "dizzy",
    "domineering",
    "doubtful",
    "drab",
    "draconian",
    "dramatic",
    "dreary",
    "drunk",
    "dry",
    "dull",
    "dusty",
    "dynamic",
    "dysfunctional",
    "eager",
    "early",
    "earsplitting",
    "earthy",
    "easy",
    "eatable",
    "economic",
    "educated",
    "efficacious",
    "efficient",
    "eight",
    "elastic",
    "elated",
    "elderly",
    "electric",
    "elegant",
    "elfin",
    "elite",
    "embarrassed",
    "eminent",
    "empty",
    "enchanted",
    "enchanting",
    "encouraging",
    "endurable",
    "energetic",
    "enormous",
    "entertaining",
    "enthusiastic",
    "envious",
    "equable",
    "equal",
    "erratic",
    "ethereal",
    "evanescent",
    "evasive",
    "even",
    "excellent",
    "excited",
    "exciting",
    "exclusive",
    "exotic",
    "expensive",
    "extra-large",
    "extra-small",
    "exuberant",
    "exultant",
    "fabulous",
    "faded",
    "faint",
    "fair",
    "faithful",
    "fallacious",
    "false",
    "familiar",
    "famous",
    "fanatical",
    "fancy",
    "fantastic",
    "far",
    "far-flung",
    "fascinated",
    "fast",
    "fat",
    "faulty",
    "fearful",
    "fearless",
    "feeble",
    "feigned",
    "female",
    "festive",
    "few",
    "fierce",
    "filthy",
    "fine",
    "finicky",
    "first",
    "five",
    "fixed",
    "flagrant",
    "flaky",
    "flashy",
    "flat",
    "flawless",
    "flimsy",
    "flippant",
    "flowery",
    "fluffy",
    "fluttering",
    "foamy",
    "foolish",
    "foregoing",
    "forgetful",
    "fortunate",
    "four",
    "fragile",
    "frail",
    "frantic",
    "free",
    "freezing",
    "frequent",
    "fresh",
    "fretful",
    "friendly",
    "frightened",
    "frightening",
    "full",
    "fumbling",
    "functional",
    "funny",
    "furry",
    "furtive",
    "future",
    "futuristic",
    "fuzzy",
    "gabby",
    "gainful",
    "gamy",
    "gaping",
    "garrulous",
    "gaudy",
    "general",
    "gentle",
    "giant",
    "giddy",
    "gifted",
    "gigantic",
    "glamorous",
    "gleaming",
    "glib",
    "glistening",
    "glorious",
    "glossy",
    "godly",
    "good",
    "goofy",
    "gorgeous",
    "graceful",
    "grandiose",
    "grateful",
    "gratis",
    "gray",
    "greasy",
    "great",
    "greedy",
    "green",
    "grey",
    "grieving",
    "groovy",
    "grotesque",
    "grouchy",
    "grubby",
    "gruesome",
    "grumpy",
    "guarded",
    "guiltless",
    "gullible",
    "gusty",
    "guttural",
    "habitual",
    "half",
    "hallowed",
    "halting",
    "handsome",
    "handsomely",
    "handy",
    "hanging",
    "hapless",
    "happy",
    "hard",
    "hard-to-find",
    "harmonious",
    "harsh",
    "hateful",
    "heady",
    "healthy",
    "heartbreaking",
    "heavenly",
    "heavy",
    "hellish",
    "helpful",
    "helpless",
    "hesitant",
    "hideous",
    "high",
    "high-pitched",
    "highfalutin",
    "hilarious",
    "hissing",
    "historical",
    "holistic",
    "hollow",
    "homeless",
    "homely",
    "honorable",
    "horrible",
    "hospitable",
    "hot",
    "huge",
    "hulking",
    "humdrum",
    "humorous",
    "hungry",
    "hurried",
    "hurt",
    "hushed",
    "husky",
    "hypnotic",
    "hysterical",
    "icky",
    "icy",
    "idiotic",
    "ignorant",
    "ill",
    "ill-fated",
    "ill-informed",
    "illegal",
    "illustrious",
    "imaginary",
    "immense",
    "imminent",
    "impartial",
    "imperfect",
    "impolite",
    "important",
    "imported",
    "impossible",
    "incandescent",
    "incompetent",
    "inconclusive",
    "incredible",
    "industrious",
    "inexpensive",
    "infamous",
    "innate",
    "innocent",
    "inquisitive",
    "insidious",
    "instinctive",
    "intelligent",
    "interesting",
    "internal",
    "invincible",
    "irate",
    "irritating",
    "itchy",
    "jaded",
    "jagged",
    "jazzy",
    "jealous",
    "jittery",
    "jobless",
    "jolly",
    "joyous",
    "judicious",
    "juicy",
    "jumbled",
    "jumpy",
    "juvenile",
    "kaput",
    "keen",
    "kind",
    "kindhearted",
    "kindly",
    "knotty",
    "knowing",
    "knowledgeable",
    "known",
    "labored",
    "lackadaisical",
    "lacking",
    "lame",
    "lamentable",
    "languid",
    "large",
    "last",
    "late",
    "laughable",
    "lavish",
    "lazy",
    "lean",
    "learned",
    "left",
    "legal",
    "lethal",
    "level",
    "lewd",
    "light",
    "like",
    "likeable",
    "limping",
    "literate",
    "little",
    "lively",
    "living",
    "lonely",
    "long",
    "long-term",
    "longing",
    "loose",
    "lopsided",
    "loud",
    "loutish",
    "lovely",
    "loving",
    "low",
    "lowly",
    "lucky",
    "ludicrous",
    "lumpy",
    "lush",
    "luxuriant",
    "lying",
    "lyrical",
    "macabre",
    "macho",
    "maddening",
    "madly",
    "magenta",
    "magical",
    "magnificent",
    "majestic",
    "makeshift",
    "male",
    "malicious",
    "mammoth",
    "maniacal",
    "many",
    "marked",
    "married",
    "marvelous",
    "massive",
    "material",
    "materialistic",
    "mature",
    "mean",
    "measly",
    "meaty",
    "medical",
    "meek",
    "mellow",
    "melodic",
    "melted",
    "merciful",
    "mere",
    "messy",
    "mighty",
    "military",
    "milky",
    "mindless",
    "miniature",
    "minor",
    "miscreant",
    "misty",
    "mixed",
    "moaning",
    "modern",
    "moldy",
    "momentous",
    "motionless",
    "mountainous",
    "muddled",
    "mundane",
    "murky",
    "mushy",
    "mute",
    "mysterious",
    "naive",
    "nappy",
    "narrow",
    "nasty",
    "natural",
    "naughty",
    "nauseating",
    "near",
    "neat",
    "nebulous",
    "necessary",
    "needless",
    "needy",
    "neighborly",
    "nervous",
    "new",
    "next",
    "nice",
    "nifty",
    "nimble",
    "nine",
    "nippy",
    "noiseless",
    "noisy",
    "nonchalant",
    "nondescript",
    "nonstop",
    "normal",
    "nostalgic",
    "nosy",
    "noxious",
    "null",
    "numberless",
    "numerous",
    "nutritious",
    "nutty",
    "oafish",
    "obedient",
    "obeisant",
    "obese",
    "obnoxious",
    "obscene",
    "obsequious",
    "observant",
    "obsolete",
    "obtainable",
    "oceanic",
    "odd",
    "offbeat",
    "old",
    "old-fashioned",
    "omniscient",
    "one",
    "onerous",
    "open",
    "opposite",
    "optimal",
    "orange",
    "ordinary",
    "organic",
    "ossified",
    "outgoing",
    "outrageous",
    "outstanding",
    "oval",
    "overconfident",
    "overjoyed",
    "overrated",
    "overt",
    "overwrought",
    "painful",
    "painstaking",
    "pale",
    "paltry",
    "panicky",
    "panoramic",
    "parallel",
    "parched",
    "parsimonious",
    "past",
    "pastoral",
    "pathetic",
    "peaceful",
    "penitent",
    "perfect",
    "periodic",
    "permissible",
    "perpetual",
    "petite",
    "phobic",
    "physical",
    "picayune",
    "pink",
    "piquant",
    "placid",
    "plain",
    "plant",
    "plastic",
    "plausible",
    "pleasant",
    "plucky",
    "pointless",
    "poised",
    "polite",
    "political",
    "poor",
    "possessive",
    "possible",
    "powerful",
    "precious",
    "premium",
    "present",
    "pretty",
    "previous",
    "pricey",
    "prickly",
    "private",
    "probable",
    "productive",
    "profuse",
    "protective",
    "proud",
    "psychedelic",
    "psychotic",
    "public",
    "puffy",
    "pumped",
    "puny",
    "purple",
    "purring",
    "pushy",
    "puzzled",
    "puzzling",
    "quack",
    "quaint",
    "quarrelsome",
    "questionable",
    "quick",
    "quickest",
    "quiet",
    "quirky",
    "quixotic",
    "quizzical",
    "rabid",
    "racial",
    "ragged",
    "rainy",
    "rambunctious",
    "rampant",
    "rapid",
    "rare",
    "raspy",
    "ratty",
    "ready",
    "real",
    "rebel",
    "receptive",
    "recondite",
    "red",
    "redundant",
    "reflective",
    "regular",
    "relieved",
    "remarkable",
    "reminiscent",
    "repulsive",
    "resolute",
    "resonant",
    "responsible",
    "rhetorical",
    "rich",
    "right",
    "righteous",
    "rightful",
    "rigid",
    "ripe",
    "ritzy",
    "roasted",
    "robust",
    "romantic",
    "roomy",
    "rotten",
    "rough",
    "round",
    "royal",
    "ruddy",
    "rude",
    "rural",
    "rustic",
    "ruthless",
    "sable",
    "sad",
    "safe",
    "salty",
    "same",
    "sassy",
    "satisfying",
    "savory",
    "scandalous",
    "scarce",
    "scared",
    "scary",
    "scattered",
    "scientific",
    "scintillating",
    "scrawny",
    "screeching",
    "second",
    "second-hand",
    "secret",
    "secretive",
    "sedate",
    "seemly",
    "selective",
    "selfish",
    "separate",
    "serious",
    "shaggy",
    "shaky",
    "shallow",
    "sharp",
    "shiny",
    "shivering",
    "shocking",
    "short",
    "shrill",
    "shut",
    "shy",
    "sick",
    "silent",
    "silky",
    "silly",
    "simple",
    "simplistic",
    "sincere",
    "six",
    "skillful",
    "skinny",
    "sleepy",
    "slim",
    "slimy",
    "slippery",
    "sloppy",
    "slow",
    "small",
    "smart",
    "smelly",
    "smiling",
    "smoggy",
    "smooth",
    "sneaky",
    "snobbish",
    "snotty",
    "soft",
    "soggy",
    "solid",
    "somber",
    "sophisticated",
    "sordid",
    "sore",
    "sour",
    "sparkling",
    "special",
    "spectacular",
    "spicy",
    "spiffy",
    "spiky",
    "spiritual",
    "spiteful",
    "splendid",
    "spooky",
    "spotless",
    "spotted",
    "spotty",
    "spurious",
    "squalid",
    "square",
    "squealing",
    "squeamish",
    "staking",
    "stale",
    "standing",
    "statuesque",
    "steadfast",
    "steady",
    "steep",
    "stereotyped",
    "sticky",
    "stiff",
    "stimulating",
    "stingy",
    "stormy",
    "straight",
    "strange",
    "striped",
    "strong",
    "stupendous",
    "stupid",
    "sturdy",
    "subdued",
    "subsequent",
    "substantial",
    "successful",
    "succinct",
    "sudden",
    "sulky",
    "super",
    "superb",
    "superficial",
    "supreme",
    "swanky",
    "sweet",
    "sweltering",
    "swift",
    "symptomatic",
    "synonymous",
    "taboo",
    "tacit",
    "tacky",
    "talented",
    "tall",
    "tame",
    "tan",
    "tangible",
    "tangy",
    "tart",
    "tasteful",
    "tasteless",
    "tasty",
    "tawdry",
    "tearful",
    "tedious",
    "teeny",
    "teeny-tiny",
    "telling",
    "temporary",
    "ten",
    "tender",
    "tense",
    "tenuous",
    "terrible",
    "terrific",
    "tested",
    "testy",
    "thankful",
    "therapeutic",
    "thick",
    "thin",
    "thinkable",
    "third",
    "thirsty",
    "thoughtful",
    "thoughtless",
    "threatening",
    "three",
    "thundering",
    "tidy",
    "tight",
    "tightfisted",
    "tiny",
    "tired",
    "tiresome",
    "toothsome",
    "torpid",
    "tough",
    "towering",
    "tranquil",
    "trashy",
    "tremendous",
    "tricky",
    "trite",
    "troubled",
    "truculent",
    "true",
    "truthful",
    "two",
    "typical",
    "ubiquitous",
    "ugliest",
    "ugly",
    "ultra",
    "unable",
    "unaccountable",
    "unadvised",
    "unarmed",
    "unbecoming",
    "unbiased",
    "uncovered",
    "understood",
    "undesirable",
    "unequal",
    "unequaled",
    "uneven",
    "unhealthy",
    "uninterested",
    "unique",
    "unkempt",
    "unknown",
    "unnatural",
    "unruly",
    "unsightly",
    "unsuitable",
    "untidy",
    "unused",
    "unusual",
    "unwieldy",
    "unwritten",
    "upbeat",
    "uppity",
    "upset",
    "uptight",
    "used",
    "useful",
    "useless",
    "utopian",
    "utter",
    "uttermost",
    "vacuous",
    "vagabond",
    "vague",
    "valuable",
    "various",
    "vast",
    "vengeful",
    "venomous",
    "verdant",
    "versed",
    "victorious",
    "vigorous",
    "violent",
    "violet",
    "vivacious",
    "voiceless",
    "volatile",
    "voracious",
    "vulgar",
    "wacky",
    "waggish",
    "waiting",
    "wakeful",
    "wandering",
    "wanting",
    "warlike",
    "warm",
    "wary",
    "wasteful",
    "watery",
    "weak",
    "wealthy",
    "weary",
    "well-groomed",
    "well-made",
    "well-off",
    "well-to-do",
    "wet",
    "whimsical",
    "whispering",
    "white",
    "whole",
    "wholesale",
    "wicked",
    "wide",
    "wide-eyed",
    "wiggly",
    "wild",
    "willing",
    "windy",
    "wiry",
    "wise",
    "wistful",
    "witty",
    "woebegone",
    "womanly",
    "wonderful",
    "wooden",
    "woozy",
    "workable",
    "worried",
    "worthless",
    "wrathful",
    "wretched",
    "wrong",
    "wry",
    "yellow",
    "yielding",
    "young",
    "youthful",
    "yummy",
    "zany",
    "zealous",
    "zesty",
    "zippy",
    "zonked",
  ];

  NOUNS = [
    "abbey",
    "abbie",
    "abby",
    "abel",
    "abigail",
    "ace",
    "adam",
    "addie",
    "admiral",
    "aggie",
    "aires",
    "aj",
    "ajax",
    "aldo",
    "alex",
    "alexus",
    "alf",
    "alfie",
    "allie",
    "ally",
    "amber",
    "amie",
    "amigo",
    "amos",
    "amy",
    "andy",
    "angel",
    "angus",
    "annie",
    "apollo",
    "april",
    "archie",
    "argus",
    "aries",
    "armanti",
    "arnie",
    "arrow",
    "ashes",
    "ashley",
    "astro",
    "athena",
    "atlas",
    "audi",
    "augie",
    "aussie",
    "austin",
    "autumn",
    "axel",
    "axle",
    "babbles",
    "babe",
    "baby",
    "baby-doll",
    "babykins",
    "bacchus",
    "bailey",
    "bam-bam",
    "bambi",
    "bandit",
    "banjo",
    "barbie",
    "barclay",
    "barker",
    "barkley",
    "barley",
    "barnaby",
    "barney",
    "baron",
    "bart",
    "basil",
    "baxter",
    "bb",
    "beamer",
    "beanie",
    "beans",
    "bear",
    "beau",
    "beauty",
    "beaux",
    "bebe",
    "beetle",
    "bella",
    "belle",
    "ben",
    "benji",
    "benny",
    "benson",
    "bentley",
    "bernie",
    "bessie",
    "biablo",
    "bibbles",
    "bigboy",
    "bigfoot",
    "biggie",
    "billie",
    "billy",
    "bingo",
    "binky",
    "birdie",
    "birdy",
    "biscuit",
    "bishop",
    "bits",
    "bitsy",
    "bizzy",
    "bj",
    "blackie",
    "black-jack",
    "blanche",
    "blast",
    "blaze",
    "blondie",
    "blossom",
    "blue",
    "bo",
    "bo",
    "bob",
    "bobbie",
    "bobby",
    "bobo",
    "bodie",
    "bogey",
    "bones",
    "bongo",
    "bonnie",
    "boo",
    "boo-boo",
    "booker",
    "boomer",
    "boone",
    "booster",
    "bootie",
    "boots",
    "boozer",
    "boris",
    "bosco",
    "bosley",
    "boss",
    "boy",
    "bozley",
    "bradley",
    "brady",
    "braggs",
    "brandi",
    "brando",
    "brandy",
    "bridgett",
    "bridgette",
    "brie",
    "brindle",
    "brit",
    "brittany",
    "brodie",
    "brook",
    "brooke",
    "brownie",
    "bruiser",
    "bruno",
    "brutus",
    "bubba",
    "bubbles",
    "buck",
    "buckeye",
    "bucko",
    "bucky",
    "bud",
    "budda",
    "buddie",
    "buddy",
    "buddyboy",
    "buffie",
    "buffy",
    "bug",
    "bugsey",
    "bugsy",
    "bullet",
    "bullwinkle",
    "bully",
    "bumper",
    "bunky",
    "buster",
    "buster-brown",
    "butch",
    "butchy",
    "butter",
    "butterball",
    "buttercup",
    "butterscotch",
    "buttons",
    "buzzy",
    "caesar",
    "cali",
    "callie",
    "calvin",
    "cameo",
    "camille",
    "candy",
    "capone",
    "captain",
    "carley",
    "casey",
    "casper",
    "cassie",
    "cassis",
    "chacha",
    "chad",
    "chamberlain",
    "champ",
    "chance",
    "chanel",
    "chaos",
    "charisma",
    "charles",
    "charlie",
    "charliebrown",
    "charmer",
    "chase",
    "chauncey",
    "chaz",
    "checkers",
    "chelsea",
    "cherokee",
    "chessie",
    "chester",
    "chevy",
    "chewie",
    "chewy",
    "cheyenne",
    "chichi",
    "chic",
    "chico",
    "chief",
    "chili",
    "china",
    "chip",
    "chipper",
    "chippy",
    "chips",
    "chiquita",
    "chivas",
    "chloe",
    "chocolate",
    "chrissy",
    "chubbs",
    "chucky",
    "chyna",
    "cinder",
    "cindy",
    "cinnamon",
    "cisco",
    "claire",
    "clancy",
    "cleo",
    "cleopatra",
    "clicker",
    "clifford",
    "clover",
    "clyde",
    "coal",
    "cobweb",
    "coco",
    "cocoa",
    "coconut",
    "codi",
    "cody",
    "cole",
    "comet",
    "commando",
    "conan",
    "connor",
    "cookie",
    "cooper",
    "copper",
    "corky",
    "cosmo",
    "cotton",
    "cozmo",
    "crackers",
    "cricket",
    "crystal",
    "cubby",
    "cubs",
    "cujo",
    "cupcake",
    "curly",
    "curry",
    "cutie",
    "cutie-pie",
    "cyrus",
    "daffy",
    "daisey-mae",
    "daisy",
    "dakota",
    "dallas",
    "dandy",
    "dante",
    "daphne",
    "darby",
    "darcy",
    "darwin",
    "dash",
    "dave",
    "deacon",
    "dee",
    "deedee",
    "dempsey",
    "destini",
    "dewey",
    "dexter",
    "dharma",
    "diamond",
    "dickens",
    "diego",
    "diesel",
    "digger",
    "dillon",
    "dinky",
    "dino",
    "diva",
    "dixie",
    "dobie",
    "doc",
    "dodger",
    "doggon",
    "dolly",
    "domino",
    "doodles",
    "doogie",
    "dots",
    "dottie",
    "dozer",
    "dragster",
    "dreamer",
    "duchess",
    "dude",
    "dudley",
    "duffy",
    "duke",
    "duncan",
    "dunn",
    "dusty",
    "dutches",
    "dutchess",
    "dylan",
    "earl",
    "ebony",
    "echo",
    "eddie",
    "eddy",
    "edgar",
    "edsel",
    "eifel",
    "einstein",
    "ellie",
    "elliot",
    "elmo",
    "elvis",
    "elwood",
    "ember",
    "emily",
    "emma",
    "emmy",
    "erin",
    "ernie",
    "eva",
    "faith",
    "fancy",
    "felix",
    "fergie",
    "ferris",
    "fido",
    "fifi",
    "figaro",
    "finnegan",
    "fiona",
    "flake",
    "flakey",
    "flash",
    "flint",
    "flopsy",
    "flower",
    "floyd",
    "fluffy",
    "fonzie",
    "foxy",
    "francais",
    "frankie",
    "franky",
    "freckles",
    "fred",
    "freddie",
    "freddy",
    "freedom",
    "freeway",
    "fresier",
    "friday",
    "frisco",
    "frisky",
    "fritz",
    "frodo",
    "frosty",
    "furball",
    "fuzzy",
    "gabby",
    "gabriella",
    "garfield",
    "gasby",
    "gator",
    "gavin",
    "genie",
    "george",
    "georgia",
    "georgie",
    "giant",
    "gibson",
    "gidget",
    "gigi",
    "gilbert",
    "gilda",
    "ginger",
    "ginny",
    "girl",
    "gizmo",
    "godiva",
    "goldie",
    "goober",
    "goose",
    "gordon",
    "grace",
    "grace",
    "gracie",
    "gracie",
    "grady",
    "greenie",
    "greta",
    "gretchen",
    "gretel",
    "gretta",
    "griffen",
    "gringo",
    "grizzly",
    "gromit",
    "grover",
    "gucci",
    "guido",
    "guinness",
    "gunner",
    "gunther",
    "gus",
    "guy",
    "gypsy",
    "hailey",
    "haley",
    "hallie",
    "hamlet",
    "hammer",
    "hank",
    "hanna",
    "hannah",
    "hans",
    "happyt",
    "hardy",
    "harley",
    "harpo",
    "harrison",
    "harry",
    "harvey",
    "heather",
    "heidi",
    "henry",
    "hercules",
    "hershey",
    "higgins",
    "hobbes",
    "holly",
    "homer",
    "honey",
    "honey-bear",
    "hooch",
    "hoover",
    "hope",
    "houdini",
    "howie",
    "hudson",
    "huey",
    "hugh",
    "hugo",
    "humphrey",
    "hunter",
    "india",
    "indy",
    "iris",
    "isabella",
    "isabelle",
    "itsy",
    "itsy-bitsy",
    "ivory",
    "ivy",
    "izzy",
    "jack",
    "jackie",
    "jackpot",
    "jackson",
    "jade",
    "jagger",
    "jags",
    "jaguar",
    "jake",
    "jamie",
    "jasmine",
    "jasper",
    "jaxson",
    "jazmie",
    "jazz",
    "jelly",
    "jelly-bean",
    "jenna",
    "jenny",
    "jerry",
    "jersey",
    "jess",
    "jesse",
    "jessejames",
    "jessie",
    "jester",
    "jet",
    "jethro",
    "jett",
    "jetta",
    "jewel",
    "jewels",
    "jimmuy",
    "jingles",
    "jj",
    "joe",
    "joey",
    "johnny",
    "jojo",
    "joker",
    "jolie",
    "jolly",
    "jordan",
    "josie",
    "joy",
    "jr",
    "judy",
    "julius",
    "june",
    "junior",
    "justice",
    "kali",
    "kallie",
    "kane",
    "karma",
    "kasey",
    "katie",
    "kato",
    "katz",
    "kayla",
    "kc",
    "keesha",
    "kellie",
    "kelly",
    "kelsey",
    "kenya",
    "kerry",
    "kibbles",
    "kid",
    "kiki",
    "killian",
    "king",
    "kipper",
    "kira",
    "kirby",
    "kismet",
    "kissy",
    "kitty",
    "kiwi",
    "klaus",
    "koba",
    "kobe",
    "koda",
    "koko",
    "kona",
    "kosmo",
    "koty",
    "kramer",
    "kujo",
    "kurly",
    "kyra",
    "lacey",
    "laddie",
    "lady",
    "ladybug",
    "laney",
    "lassie",
    "latte",
    "layla",
    "lazarus",
    "lefty",
    "leo",
    "levi",
    "lexi",
    "lexie",
    "lexus",
    "libby",
    "lightning",
    "lili",
    "lilly",
    "lily",
    "lincoln",
    "linus",
    "littlebit",
    "little-guy",
    "little-one",
    "little-rascal",
    "lizzy",
    "logan",
    "loki",
    "lola",
    "lou",
    "louie",
    "louis",
    "lovey",
    "lucas",
    "luci",
    "lucifer",
    "lucky",
    "lucy",
    "luke",
    "lulu",
    "luna",
    "lynx",
    "mac",
    "macho",
    "macintosh",
    "mack",
    "mackenzie",
    "macy",
    "maddie",
    "maddy",
    "madison",
    "maggie",
    "maggie-mae",
    "maggie-moo",
    "maggy",
    "magic",
    "magnolia",
    "major",
    "mandi",
    "mandy",
    "mango",
    "marble",
    "mariah",
    "marley",
    "mary",
    "maryjane",
    "mason",
    "mattie",
    "maverick",
    "max",
    "maximus",
    "maxine",
    "maxwell",
    "may",
    "maya",
    "mcduff",
    "mckenzie",
    "meadow",
    "megan",
    "meggie",
    "mercedes",
    "mercle",
    "merlin",
    "mia",
    "miasy",
    "michael",
    "mickey",
    "midnight",
    "mikey",
    "miko",
    "miles",
    "miller",
    "millie",
    "milo",
    "mimi",
    "mindy",
    "ming",
    "mini",
    "minnie",
    "mischief",
    "misha",
    "misskitty",
    "misspriss",
    "missie",
    "missy",
    "mister",
    "misty",
    "mitch",
    "mittens",
    "mitzi",
    "mitzy",
    "mo",
    "mocha",
    "mojo",
    "mollie",
    "molly",
    "mona",
    "monkey",
    "monster",
    "montana",
    "montgomery",
    "monty",
    "moocher",
    "moochie",
    "mookie",
    "moonshine",
    "moose",
    "morgan",
    "moses",
    "mouse",
    "mrkitty",
    "muffin",
    "muffy",
    "mugsy",
    "mulligan",
    "munchkin",
    "murphy",
    "nakita",
    "nala",
    "nana",
    "napoleon",
    "natasha",
    "nathan",
    "nellie",
    "nemo",
    "nena",
    "nero",
    "nestle",
    "newt",
    "newton",
    "nibbles",
    "nibby",
    "nibby-nose",
    "nick",
    "nickers",
    "nickie",
    "nicky",
    "nico",
    "nike",
    "niki",
    "nikita",
    "nikki",
    "niko",
    "nina",
    "nitro",
    "nobel",
    "noel",
    "nona",
    "noodles",
    "norton",
    "nosey",
    "nugget",
    "nutmeg",
    "oakley",
    "obie",
    "odie",
    "oldglory",
    "olive",
    "oliver",
    "olivia",
    "ollie",
    "onie",
    "onyx",
    "opie",
    "oreo",
    "oscar",
    "otis",
    "otto",
    "oz",
    "ozzie",
    "ozzy",
    "pablo",
    "paco",
    "paddington",
    "paddy",
    "panda",
    "pandora",
    "panther",
    "papa",
    "paris",
    "parker",
    "pasha",
    "patch",
    "patches",
    "patricky",
    "patsy",
    "patty",
    "peaches",
    "peanut",
    "peanuts",
    "pearl",
    "pebbles",
    "pedro",
    "penny",
    "pepe",
    "pepper",
    "peppy",
    "pepsi",
    "persy",
    "pete",
    "peter",
    "petey",
    "petie",
    "phantom",
    "phoebe",
    "phoenix",
    "picasso",
    "pickles",
    "pierre",
    "piggy",
    "piglet",
    "pinkpanther",
    "pinky",
    "pinto",
    "piper",
    "pippin",
    "pippy",
    "pip-squeek",
    "pirate",
    "pixie",
    "plato",
    "pluto",
    "pockets",
    "pogo",
    "pokey",
    "polly",
    "poncho",
    "pongo",
    "pooch",
    "poochie",
    "pooh",
    "pooh-bear",
    "pookie",
    "pooky",
    "popcorn",
    "poppy",
    "porche",
    "porkchop",
    "porky",
    "porter",
    "powder",
    "prancer",
    "precious",
    "presley",
    "pretty",
    "pretty-girl",
    "prince",
    "princess",
    "prissy",
    "puck",
    "puddles",
    "pudge",
    "puffy",
    "pugsley",
    "pumpkin",
    "punkin",
    "puppy",
    "purdy",
    "queen",
    "queenie",
    "quincy",
    "quinn",
    "rags",
    "raison",
    "ralph",
    "ralphie",
    "rambler",
    "rambo",
    "ranger",
    "rascal",
    "raven",
    "rebel",
    "red",
    "reggie",
    "reilly",
    "remy",
    "rex",
    "rexy",
    "rhett",
    "ricky",
    "rico",
    "riggs",
    "riley",
    "rintintin",
    "ringo",
    "ripley",
    "rocco",
    "rock",
    "rocket",
    "rocko",
    "rocky",
    "roland",
    "rolex",
    "rollie",
    "roman",
    "romeo",
    "rosa",
    "roscoe",
    "rosebud",
    "rosie",
    "rosy",
    "rover",
    "rowdy",
    "roxanne",
    "roxie",
    "roxy",
    "ruby",
    "ruchus",
    "rudy",
    "ruffe",
    "ruffer",
    "ruffles",
    "rufus",
    "ruger",
    "rusty",
    "ruthie",
    "ryder",
    "sabine",
    "sable",
    "sabrina",
    "sadie",
    "sage",
    "sailor",
    "salem",
    "sally",
    "salty",
    "sam",
    "samantha",
    "sammy",
    "sampson",
    "samson",
    "sandy",
    "sara",
    "sarah",
    "sarge",
    "sasha",
    "sassie",
    "sassy",
    "savannah",
    "sawyer",
    "scarlett",
    "schotzie",
    "schultz",
    "scoobie",
    "scooby",
    "scooby-doo",
    "scooter",
    "scottie",
    "scout",
    "scrappy",
    "scruffy",
    "sebastian",
    "shadow",
    "shady",
    "shaggy",
    "shasta",
    "sheba",
    "sheena",
    "shelby",
    "shelly",
    "sherman",
    "shiloh",
    "shiner",
    "shorty",
    "sienna",
    "sierra",
    "silky",
    "silver",
    "silvester",
    "simba",
    "simon",
    "simone",
    "sissy",
    "skeeter",
    "skinny",
    "skip",
    "skipper",
    "skippy",
    "skittles",
    "sky",
    "skye",
    "skyler",
    "slick",
    "slinky",
    "sly",
    "smarty",
    "smoke",
    "smokey",
    "smudge",
    "sneakers",
    "snickers",
    "snoop",
    "snoopy",
    "snowball",
    "snowflake",
    "snowy",
    "snuffles",
    "snuggles",
    "solomon",
    "sonny",
    "sophia",
    "sophie",
    "sox",
    "spanky",
    "sparkle",
    "sparky",
    "speed",
    "speedo",
    "speedy",
    "spencer",
    "spike",
    "spirit",
    "spookey",
    "spot",
    "spotty",
    "spud",
    "spunky",
    "squeeky",
    "squirt",
    "stanley",
    "star",
    "starr",
    "stella",
    "sterling",
    "stich",
    "stinky",
    "stormy",
    "stuart",
    "sugar",
    "sugar-baby",
    "summer",
    "sumo",
    "sundance",
    "sunday",
    "sunny",
    "sunshine",
    "susie",
    "susie-q",
    "suzy",
    "sweetie",
    "sweetie-pie",
    "sweet-pea",
    "sydney",
    "tabby",
    "tabetha",
    "taco",
    "taffy",
    "tally",
    "tammy",
    "tangles",
    "tango",
    "tank",
    "tanner",
    "tara",
    "tasha",
    "taylor",
    "taz",
    "t-bird",
    "t-bone",
    "teddy",
    "teddy-bear",
    "tequila",
    "tess",
    "tessa",
    "tessie",
    "tex",
    "thelma",
    "thor",
    "thumper",
    "thunder",
    "thyme",
    "tiffany",
    "tiger",
    "tigger",
    "tiggy",
    "tiki",
    "tilly",
    "timber",
    "timmy",
    "tinker",
    "tinker-bell",
    "tinky",
    "tiny",
    "tippy",
    "tipr",
    "titan",
    "tito",
    "titus",
    "tobie",
    "toby",
    "toffee",
    "tom",
    "tommy",
    "tommy-boy",
    "toni",
    "tony",
    "toots",
    "tootsie",
    "topaz",
    "tori",
    "toto",
    "tracker",
    "tramp",
    "trapper",
    "travis",
    "trigger",
    "trinity",
    "tripod",
    "tristan",
    "trixie",
    "trooper",
    "trouble",
    "troy",
    "truffles",
    "tuck",
    "tucker",
    "tuesday",
    "tuffy",
    "turbo",
    "turner",
    "tux",
    "twiggy",
    "twinkle",
    "ty",
    "tyler",
    "tyson",
    "valinto",
    "vava",
    "vegas",
    "velvet",
    "vinnie",
    "vinny",
    "violet",
    "vito",
    "volvo",
    "waddles",
    "wags",
    "waldo",
    "wallace",
    "wally",
    "walter",
    "wayne",
    "weaver",
    "webster",
    "wesley",
    "westie",
    "whiskers",
    "whiskey",
    "whispy",
    "whitie",
    "whiz",
    "wiggles",
    "wilber",
    "willie",
    "willow",
    "willy",
    "wilson",
    "winnie",
    "winston",
    "winter",
    "wiz",
    "wizard",
    "wolfgang",
    "wolfie",
    "woody",
    "woofie",
    "wrigley",
    "wrinkles",
    "wyatt",
    "xena",
    "yaka",
    "yang",
    "yeller",
    "yellow",
    "yin",
    "yoda",
    "yogi",
    "yogi-bear",
    "yukon",
    "zack",
    "zeke",
    "zena",
    "zeus",
    "ziggy",
    "zippy",
    "zoe",
    "zoey",
    "zoie",
    "zorro",
  ];
  constructor() {}

  generate() {
    return {
      noun: this.NOUNS[(Math.random() * this.NOUNS.length) | 0],
      adjective: this.ADJECTIVES[(Math.random() * this.ADJECTIVES.length) | 0],
    };
  }
}
