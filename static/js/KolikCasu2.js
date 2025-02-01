const jsonString = `[
    {
        "name": "Hemiceratoides hieroglyphica",
        "url": "https://en.wikipedia.org/wiki/Hemiceratoides_hieroglyphica#:~:text=Hemiceratoides%20hieroglyphica%20is%20a%20moth,specialized%2C%20harpoon%2Dlike%20proboscis.",
        "Why interesting": "Moths drinks tears of sleeping birds.",
        "additional URLs": []
    },
    {
        "name": "Namaqua sandgrouse",
        "url": "https://en.wikipedia.org/wiki/Namaqua_sandgrouse",
        "Why interesting": "These birds caries water in their feather for their young.",
        "additional URLs": []
    },
    {
        "name": "Ubre Blanca",
        "url": "https://en.wikipedia.org/wiki/Ubre_Blanca",
        "Why interesting": "Very productive cow from cuba.",
        "additional URLs": []
    },
    {
        "name": "Strophurus taenicauda",
        "url": "https://en.wikipedia.org/wiki/Strophurus_taenicauda",
        "Why interesting": "It can produce foul smelling chemical from its tail.",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=sl0Ztj7Q70Y"
            }
        ]
    },
    {
        "name": "Rat-tailed maggot",
        "url": "https://en.wikipedia.org/wiki/Rat-tailed_maggot",
        "Why interesting": "Dinnt know something like this existed?",
        "additional URLs": []
    },
    {
        "name": "Kuru",
        "url": "https://cs.wikipedia.org/wiki/Kuru",
        "Why interesting": "Kuru is a rare, incurable, and fatal neurodegenerative disorder. You can get it by eating human brain. It works thanks to the proteins called prions. They accumulate in brain and the body is unable to destroy them.",
        "additional URLs": []
    },
    {
        "name": "Triboluminescence",
        "url": "https://en.wikipedia.org/wiki/Triboluminescence",
        "Why interesting": "light is generated when a material is mechanically pulled apart, ripped, scratched, crushed, or rubbed. Sugar crystals do that!",
        "additional URLs": []
    },
    {
        "name": "Pythium oligandrum",
        "url": "https://cs.wikipedia.org/wiki/Pythium_oligandrum",
        "Why interesting": "Fungi that kills othe fungi and thats like everything it does.",
        "additional URLs": []
    },
    {
        "name": "Japanese folktales",
        "url": "https://en.wikipedia.org/wiki/Japanese_folktales",
        "Why interesting": "Just list of some iteresting tales",
        "additional URLs": []
    },
    {
        "name": "Crushing (execution)",
        "url": "https://en.wikipedia.org/wiki/Crushing_(execution)",
        "Why interesting": "Didnt know that was a thing",
        "additional URLs": []
    },
    {
        "name": "Shakespeare (programovací jazyk)",
        "url": "https://cs.wikipedia.org/wiki/Shakespeare_(programovac%C3%AD_jazyk)"
    },
    {
        "name": "Taikyoku shogi",
        "url": "https://en.wikipedia.org/wiki/Taikyoku_shogi#:~:text=Taikyoku%20sh%C5%8Dgi%20(Japanese%3A%20%E5%A4%A7%E5%B1%80%E5%B0%86%E6%A3%8B,earlier%20large%20board%20shogi%20games.",
        "Why interesting": "Very very big version of shogi",
        "additional URLs": []
    },
    {
        "name": "Ezoterický programovací jazyk",
        "url": "https://cs.wikipedia.org/wiki/Ezoterick%C3%BD_programovac%C3%AD_jazyk#OstraJAVA",
        "Why interesting": "Cool programming languages",
        "additional URLs": [
            {
                "name": "List of esoteric programming languages",
                "url": "https://esolangs.org/wiki/Language_list"
            }
        ]
    },
    {
        "name": "Shepherd's leap",
        "url": "https://en.wikipedia.org/wiki/Shepherd%27s_leap",
        "Why interesting": "Cool mean of transport",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=WpAj_WFOJng"
            }
        ]
    },
    {
        "name": "Adenotrophic viviparity",
        "url": "https://en.wikipedia.org/wiki/Adenotrophic_viviparity",
        "Why interesting": "In adenotrophic viviparity, the eggs (usually one at a time) are retained within the female's body, hatch, and are nourished through milk glands until the developed larvae are ready to pupate.",
        "additional URLs": []
    },
    {
        "name": "Dahala Khagrabari",
        "url": "https://en.wikipedia.org/wiki/Dahala_Khagrabari",
        "Why interesting": "This was a piece of India within a piece of Bangladesh within a piece of India within Bangladesh.",
        "additional URLs": []
    },
    {
        "name": "Shirime",
        "url": "https://en.m.wikipedia.org/wiki/Shirime",
        "Why interesting": "Just funny japan moster?",
        "additional URLs": []
    },
    {
        "name": "Mystacinobia zelandica",
        "url": "https://cs.wikipedia.org/wiki/Mystacinobia_zelandica",
        "Why interesting": "This is a fly that lives on bats and have very interesting symbiotic relationship with them.",
        "additional URLs": []
    },
    {
        "name": "Hydnora",
        "url": "https://cs.wikipedia.org/wiki/Hydnora",
        "Why interesting": "Looks interesting? Anyway it is cool parasitic plant without chrolophyle.",
        "additional URLs": []
    },
    {
        "name": "Rúp Kund",
        "url": "https://cs.wikipedia.org/wiki/R%C3%BAp_Kund",
        "Why interesting": "This is lake high in the himalayas where bones where founded which origin is not known.",
        "additional URLs": []
    },
    {
        "name": "Portia (rod)",
        "url": "https://cs.wikipedia.org/wiki/Portia_(rod)",
        "Why interesting": "Super cool jumping spiders.",
        "additional URLs": []
    },
    {
        "name": "Kloš jelení",
        "url": "https://cs.wikipedia.org/wiki/Klo%C5%A1_jelen%C3%AD",
        "Why interesting": "It gave birth to live larvae! The egg hatches inside the mother ands it being fed by milky substance. After it is devolped it is dropped and it pupates.",
        "additional URLs": []
    },
    {
        "name": "List of light sources",
        "url": "https://en.wikipedia.org/wiki/List_of_light_sources",
        "Why interesting": "Some of the light sources are very interesting.",
        "additional URLs": []
    },
    {
        "name": "Common Surinam toad",
        "url": "https://en.wikipedia.org/wiki/Common_Surinam_toad",
        "Why interesting": "Looks funny. Also it has very interesting way of reproduction. Females carries teadpoles on their backs.",
        "additional URLs": []
    },
    {
        "name": "Neoteny in humans",
        "url": "https://en.wikipedia.org/wiki/Neoteny_in_humans",
        "Why interesting": "Reason why human skulls looks so similar to baby shimapnsee",
        "additional URLs": []
    },
    {
        "name": "Wallace Line",
        "url": "https://en.wikipedia.org/wiki/Wallace_Line",
        "Why interesting": "It separates the biogeographical realms of Asia and 'Wallacea', a transitional zone between Asia and Australia",
        "additional URLs": []
    },
    {
        "name": "Toxic bird",
        "url": "https://en.wikipedia.org/wiki/Toxic_bird",
        "Why interesting": "These birds have toxic feathers with toxins same as in poison dart frogs.",
        "additional URLs": []
    },
    {
        "name": "Cecílie kroužkovaná",
        "url": "https://cs.wikipedia.org/wiki/Cec%C3%ADlie_krou%C5%BEkovan%C3%A1",
        "Why interesting": "It is Amphibian. It looks like a big worm. The mother cares for her young. She even feeds them. With her own skin!",
        "additional URLs": []
    },
    {
        "name": "Channichthyidae",
        "url": "https://en.wikipedia.org/wiki/Channichthyidae",
        "Why interesting": "Commonly known as ice fish. They dont have hemoglobin! They have white blood.",
        "additional URLs": []
    },
    {
        "name": "Euthalia aconthea",
        "url": "https://en.wikipedia.org/wiki/Euthalia_aconthea",
        "Why interesting": "It just has very cool caterpilar.",
        "additional URLs": []
    },
    {
        "name": "Pláštěnci",
        "url": "https://cs.wikipedia.org/wiki/Pl%C3%A1%C5%A1t%C4%9Bnci",
        "Why interesting": "Their larvae are more complex than adults. E.g. they have chorda dorsalis. Also one of the first vertebrates on Earth.",
        "additional URLs": []
    },
    {
        "name": "Zavíječ voskový",
        "url": "https://cs.wikipedia.org/wiki/Zav%C3%ADje%C4%8D_voskov%C3%BD",
        "Why interesting": "They normally live in bee hives and eat honey combs. But they can also eat plastic!",
        "additional URLs": []
    },
    {
        "name": "Stromatolit",
        "url": "https://cs.wikipedia.org/wiki/Stromatolit",
        "Why interesting": "One of the oldest forms of life on Earth, still alive today. Similar form of life could be found on another planets.",
        "additional URLs": []
    },
    {
        "name": "Carbonate–silicate cycle",
        "url": "https://en.wikipedia.org/wiki/Carbonate%E2%80%93silicate_cycle#:~:text=The%20carbonate%E2%80%93silicate%20geochemical%20cycle,rocks%20by%20metamorphism%20and%20volcanism.",
        "Why interesting": "Uplift of major mountain ranges, such as Himalayas and the Andes, is thought to have initiated the Late Cenozoic Ice Age due to increased rates of silicate weathering and draw down of carbon dioxide",
        "additional URLs": []
    },
    {
        "name": "Operace Northwoods",
        "url": "https://cs.wikipedia.org/wiki/Operace_Northwoods",
        "Why interesting": "This is kinda crazy, really makes you think what else must have been inside job.",
        "additional URLs": []
    },
    {
        "name": "Dictamnus albus",
        "url": "https://en.wikipedia.org/wiki/Dictamnus_albus",
        "Why interesting": "This plant releases flammable oils which can be ignited in very hot weather. Also burning bush was in the Bible.",
        "additional URLs": []
    },
    {
        "name": "Mansfield Smith-Cumming",
        "url": "https://en.wikipedia.org/wiki/Mansfield_Smith-Cumming",
        "Why interesting": "His lastname is pretty self explanatory, didnt know it could be used as invisible ink.",
        "additional URLs": []
    },
    {
        "name": "Project Orion (nuclear propulsion)",
        "url": "https://en.wikipedia.org/wiki/Project_Orion_(nuclear_propulsion)",
        "Why interesting": "You can make rockets using nukes and they are pretty efficient.",
        "additional URLs": []
    },
    {
        "name": "Solifugy",
        "url": "https://cs.wikipedia.org/wiki/Solifugy",
        "Why interesting": "Cool arachnides I didin't know existed.",
        "additional URLs": []
    },
    {
        "name": "Anti-predator adaptation",
        "url": "https://en.wikipedia.org/wiki/Anti-predator_adaptation",
        "Why interesting": "List of cool anti predator adaptations",
        "additional URLs": []
    },
    {
        "name": "Svijonožci",
        "url": "https://cs.wikipedia.org/wiki/Svijono%C5%BEci",
        "Why interesting": "They got the longest pp",
        "additional URLs": [
            {
                "name": "deeplook video",
                "url": "https://www.youtube.com/watch?v=lfnkFxg1gMw"
            }
        ]
    },
    {
        "name": "Naegleria fowleri",
        "url": "https://cs.wikipedia.org/wiki/Naegleria_fowleri",
        "Why interesting": "Brain eating amoeba. They lives in warm water, it is very rary but very deadly. Biggest epidemy was in Ústí nad Labem, 16 young people died after swimming in swimming pool.",
        "additional URLs": [
            {
                "name": "Kurzgesagt video",
                "url": "https://www.youtube.com/watch?v=7OPg-ksxZ4Y"
            }
        ]
    },
    {
        "name": "Earthquake light",
        "url": "https://en.wikipedia.org/wiki/Earthquake_light",
        "Why interesting": "Unexplained phenomena of light created during earthquakes.",
        "additional URLs": []
    },
    {
        "name": "Crash at Crush",
        "url": "https://en.wikipedia.org/wiki/Crash_at_Crush",
        "Why interesting": "haha trains go brrrrr",
        "additional URLs": []
    },
    {
        "name": "Látky vzbuzující mimořádné obavy",
        "url": "https://cs.wikipedia.org/wiki/L%C3%A1tky_vzbuzuj%C3%ADc%C3%AD_mimo%C5%99%C3%A1dn%C3%A9_obavy",
        "Why interesting": "Just a list of some interesting chemicals",
        "additional URLs": []
    },
    {
        "name": "Pralesnička strašná",
        "url": "https://cs.wikipedia.org/wiki/Pralesni%C4%8Dka_stra%C5%A1n%C3%A1",
        "Why interesting": "These frogs have one of the strongest poison in the world. Their only predators are humans which uses their poison for hunting and snakes which are resistant to their poison (not immune). They are also pretty inteligent (for a frog).",
        "additional URLs": []
    },
    {
        "name": "Fainting goat",
        "url": "https://en.wikipedia.org/wiki/Fainting_goat",
        "Why interesting": "The goat that faint when exited/scared.",
        "additional URLs": []
    },
    {
        "name": "Sonoluminescence",
        "url": "https://en.wikipedia.org/wiki/Sonoluminescence",
        "Why interesting": "Sonoluminescence is the emission of light from imploding bubbles in a liquid when excited by sound. The mechanism is not well understood.",
        "additional URLs": []
    },
    {
        "name": "Cotylorhynchus",
        "url": "https://en.wikipedia.org/wiki/Cotylorhynchus",
        "Why interesting": "Just looks funny? xd Also it is part of family called Synapsida which is related to mammals. They ruled the earth befor dinosaurs did.",
        "additional URLs": []
    },
    {
        "name": "Jiraiya",
        "url": "https://en.wikipedia.org/wiki/Jiraiya",
        "Why interesting": "The character from series naruto was havily inspired by this story.",
        "additional URLs": []
    },
    {
        "name": "Jacob sheep",
        "url": "https://en.wikipedia.org/wiki/Jacob_sheep",
        "Why interesting": "Sheep with 4 horns!",
        "additional URLs": []
    },
    {
        "name": "Spectral color",
        "url": "https://en.wikipedia.org/wiki/Spectral_color#Extra-spectral_colors",
        "Additional URL": "",
        "Why interesting": "Some colors are not real. Only the spectral colors really exists, other colors only exists in our brains"
    },
    {
        "name": "Neotenie",
        "url": "https://cs.wikipedia.org/wiki/Neotenie",
        "Why interesting": "delaying or slowing of the physiological, or somatic, development of an organism. Super cool concept from evolutionary biology. Process thanks to which axalotls have gills to the adulthood, adult dogs have down falling trees or humans are able to learn so well until adult age or why humans skull is so similar to baby shimpanzee.",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=07zAD9iRRGU"
            }
        ]
    },
    {
        "name": "Ferrocerium",
        "url": "https://en.wikipedia.org/wiki/Ferrocerium#:~:text=Ferrocerium%20(also%20known%20in%20Europe,of%20iron%20and%20%2F%20or%20magnesium.",
        "Why interesting": "Just the alloy used to make firestarters.",
        "additional URLs": []
    },
    {
        "name": "Marvin Heemeyer",
        "url": "https://en.wikipedia.org/wiki/Marvin_Heemeyer",
        "Why interesting": "Kildozer guy.",
        "additional URLs": []
    },
    {
        "name": "Lepovkovití",
        "url": "https://cs.wikipedia.org/wiki/Lepovkovit%C3%AD",
        "Why interesting": "Spiders that catch their pray using sticky chemical",
        "additional URLs": []
    },
    {
        "name": "Tarrare",
        "url": "https://en.wikipedia.org/wiki/Tarrare",
        "Why interesting": "Very hungry guy",
        "additional URLs": []
    },
    {
        "name": "List of longest-living organisms",
        "url": "https://en.wikipedia.org/wiki/List_of_longest-living_organisms",
        "Why interesting": "Cool list of long living organisms",
        "additional URLs": []
    },
    {
        "name": "Otto Lilienthal",
        "url": "https://cs.wikipedia.org/wiki/Otto_Lilienthal",
        "Why interesting": "Based guy pioneer of aviation",
        "additional URLs": []
    },
    {
        "name": "Hitch (knot)",
        "url": "https://en.wikipedia.org/wiki/Hitch_(knot)",
        "Why interesting": "Just a list of cool knots.",
        "additional URLs": []
    },
    {
        "name": "Cormorant fishing",
        "url": "https://en.wikipedia.org/wiki/Cormorant_fishing",
        "Why interesting": "",
        "additional URLs": [
            {
                "name": "Short video",
                "url": "https://www.youtube.com/watch?v=2ZSI3pKNpLo"
            },
            {
                "name": "Otter fishing is also similar",
                "url": "https://en.wikipedia.org/wiki/Otter_fishing"
            }
        ]
    },
    {
        "name": "Muréna obecná",
        "url": "https://cs.wikipedia.org/wiki/Mur%C3%A9na_obecn%C3%A1#:~:text=V%C2%A0p%C5%99edn%C3%AD%20%C4%8D%C3%A1sti%20se%20nach%C3%A1z%C3%AD%20hlava%20s%C2%A0tlamou%20plnou%20mal%C3%BDch%2C%20av%C5%A1ak%20ostr%C3%BDch%20jehlicov%C3%BDch%20zub%C5%AF%2C%20kter%C3%A1%20se%20t%C3%A1hne%20a%C5%BE%20pod%20o%C4%8Di.%20Pozoruhodn%C3%A1%20je%20svou%20vnit%C5%99n%C3%AD%20%E2%80%9Evyst%C5%99elovac%C3%AD%E2%80%9C",
        "Why interesting": "Murenas have 'Pharyngeal jaw'. It is a second set of jaws that can be launched forward to catch prey. It is a bit similar to the dragonsfly nymphas mask.",
        "additional URLs": []
    },
    {
        "name": "Láčkovka rádža",
        "url": "https://cs.wikipedia.org/wiki/L%C3%A1%C4%8Dkovka_r%C3%A1d%C5%BEa#:~:text=%5B66%5D-,Mutualismus,-%5Beditovat%20%7C",
        "Why interesting": "It is pitcher carnivorous plant. They have mutual realationship with some species of rodens. They provide them with sweet nectar and the rodens poop into the pitcher providing the plant with nutrients.",
        "additional URLs": []
    },
    {
        "name": "Synalpheus regalis",
        "url": "https://en.wikipedia.org/wiki/Synalpheus_regalis",
        "Why interesting": "They are eusocial crustaceans! The live in colonies inside corals!",
        "additional URLs": []
    },
    {
        "name": "Print Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Print_Wikipedia",
        "Why interesting": "It is project that printed whole (english) wikipedia into books.",
        "additional URLs": []
    },
    {
        "name": "Toki Pona",
        "url": "https://en.wikipedia.org/wiki/Toki_Pona",
        "Why interesting": "Very interesting language concept.",
        "additional URLs": [
            {
                "name": "This and other very interesting linguistic facts are from this video !!(2 hours)!!",
                "url": "https://www.youtube.com/watch?v=GFz6KqZurFY&t"
            }
        ]
    },
    {
        "name": "Buddha's hand",
        "url": "https://en.wikipedia.org/wiki/Buddha%27s_hand",
        "Why interesting": "Interesting looking fruit. Also fruit named citron exists in english but it is not same fruit as lemon - it is fruit from which citruses originated from.",
        "additional URLs": []
    },
    {
        "name": "Exaptace",
        "url": "https://cs.wikipedia.org/wiki/Exaptace",
        "Why interesting": "This is term from evolution - Trait can evolve because it served one particular function, but subsequently it may come to serve another",
        "additional URLs": []
    },
    {
        "name": "Common side-blotched lizard",
        "url": "https://en.wikipedia.org/wiki/Common_side-blotched_lizard#:~:text=%5Bedit%5D-,Rock%E2%80%93paper%E2%80%93scissors%20mechanism,-%5Bedit%5D",
        "Why interesting": "Super cool!! They have been playing Rock, Paper Scissors before humans!",
        "additional URLs": [
            {
                "name": "Deep look video",
                "url": "https://www.youtube.com/watch?v=rafdHxBwIbQ"
            }
        ]
    },
    {
        "name": "Tyfová Mary",
        "url": "https://cs.wikipedia.org/wiki/Tyfov%C3%A1_Mary",
        "Why interesting": "She was famous asymptomatic carrier of typhoid fever.",
        "additional URLs": []
    },
    {
        "name": "Ice age",
        "url": "https://en.wikipedia.org/wiki/Ice_age#:~:text=Some%20scientists%20believe%20that%20the%20Himalayas%20are%20a%20major%20factor%20in%20the%20current%20ice%20age%2C%20because%20these%20mountains",
        "Why interesting": "It is linked to specific line in the text. Basically some scientist believs that uprising of himalias is responsible for ice ages, because it has increased total rainfall on earth. Carbon dioxide is soluable in water so there is less of it in the atmosphere which weakens the greenhouse effect.",
        "additional URLs": []
    },
    {
        "name": "Industrial melanism",
        "url": "https://en.wikipedia.org/wiki/Industrial_melanism#:~:text=Industrial%20melanism%20is%20an%20evolutionary,gas%20and%20dark%20soot%20deposits.",
        "Why interesting": "Some animals devolped dark pigmentation because of polution.",
        "additional URLs": []
    },
    {
        "name": "Drakaea micrantha",
        "url": "https://en.wikipedia.org/wiki/Drakaea_micrantha",
        "Why interesting": "It resebles and smell like female wasp. This attract males that polinate them.",
        "additional URLs": [
            {
                "name": "BBC super cool video!",
                "url": "https://www.youtube.com/watch?v=6yLnKfhmUzg"
            }
        ]
    },
    {
        "name": "Hyperaccumulator",
        "url": "https://simple.wikipedia.org/wiki/Hyperaccumulator",
        "Why interesting": "plant that can grow in soils with very high concentrations of metals.",
        "additional URLs": []
    },
    {
        "name": "Babočka kopřivová",
        "url": "https://cs.wikipedia.org/wiki/Babo%C4%8Dka_kop%C5%99ivov%C3%A1#:~:text=V%20obdob%C3%AD%20p%C5%99ed,%5B4%5D",
        "Why interesting": "Before pupating the caterpilars makes colonies.",
        "additional URLs": []
    },
    {
        "name": "Pizza Meter",
        "url": "https://pt.wikipedia.org/wiki/Pizza_Meter",
        "Why interesting": "Refers to sudden increases in pizza orders from U.S. government offices, such as the White House and the Pentagon before major political and military events. It is on portugal wikipedia because it was deleted from the english one.",
        "additional URLs": []
    },
    {
        "name": "Tsujigiri",
        "url": "https://en.wikipedia.org/wiki/Tsujigiri",
        "Why interesting": "Japanese term for a practice when a samurai, after receiving a new katana test it on random defensless passer-by.",
        "additional URLs": []
    },
    {
        "name": "Hyposmocoma molluscivora",
        "url": "https://en.wikipedia.org/wiki/Hyposmocoma_molluscivora",
        "Why interesting": "They are carnivorous caterpillars",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=K5qijI--v9E"
            }
        ]
    },
    {
        "name": "Leknínovité",
        "url": "https://cs.wikipedia.org/wiki/Lekn%C3%ADnovit%C3%A9#:~:text=Kv%C4%9Bty%20viktori%C3%AD%20nav%C3%ADc%20produkuj%C3%AD%20teplo",
        "Why interesting": "The flowers of Victoria amazonica produce heat!",
        "additional URLs": []
    },
    {
        "name": "Rogue wave",
        "url": "https://cs.wikipedia.org/wiki/Rogue_wave",
        "Why interesting": "are large and unpredictable surface waves",
        "additional URLs": []
    },
    {
        "name": "Vachellia drepanolobium",
        "url": "https://en.wikipedia.org/wiki/Vachellia_drepanolobium",
        "Why interesting": "It is type of accacia also called as whistling thorn. It creates special bulbous spines. It grows in symbiosis with ants, the ants protect the tree from predators. The ants creates holes inside those thorns. When wind blows the tree creates whistling noises.",
        "additional URLs": []
    },
    {
        "name": "1I/ʻOumuamua",
        "url": "https://cs.wikipedia.org/wiki/1I/%CA%BBOumuamua",
        "Why interesting": "Wierd interplantery object which accelerated after flyby around the sun.",
        "additional URLs": []
    },
    {
        "name": "Sentinelci",
        "url": "https://cs.wikipedia.org/wiki/Sentinelci",
        "Why interesting": "One of the last group of people without contant with modern world.",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=B8Bd568XaXg&t"
            }
        ]
    },
    {
        "name": "Hairy frog",
        "url": "https://en.wikipedia.org/wiki/Hairy_frog",
        "Why interesting": "the frog with hair-like structures",
        "additional URLs": []
    },
    {
        "name": "Valeriepieris circle",
        "url": "https://en.wikipedia.org/wiki/Valeriepieris_circle#:~:text=A%20Valeriepieris%20circle%20is%20a,gave%20the%20figure%20its%20name.",
        "Why interesting": "circle drawn on earth where majority of people live with in the circle.",
        "additional URLs": []
    },
    {
        "name": "Deep biosphere",
        "url": "https://en.wikipedia.org/wiki/Deep_biosphere",
        "Why interesting": "Some organisms that live very deep. Similar live form could be someday found on another planet.",
        "additional URLs": []
    },
    {
        "name": "Orbital resonance",
        "url": "https://en.wikipedia.org/wiki/Orbital_resonance",
        "Why interesting": "Planets and moons orbits with resnonsces!!!",
        "additional URLs": []
    },
    {
        "name": "Modrásek hořcový Rebelův",
        "url": "https://cs.wikipedia.org/wiki/Modr%C3%A1sek_ho%C5%99cov%C3%BD_Rebel%C5%AFv",
        "Why interesting": "They parasite on ants!",
        "additional URLs": []
    },
    {
        "name": "NERVA",
        "url": "https://en.wikipedia.org/wiki/NERVA",
        "Why interesting": "Nuclear Engine for Rocket Vehicle Application. (cool)",
        "additional URLs": []
    },
    {
        "name": "Heterofylie",
        "url": "https://cs.wikipedia.org/wiki/Heterofylie",
        "Why interesting": "Plants creates different shaped leafs on one plant.",
        "additional URLs": []
    },
    {
        "name": "Gaseous fission reactor",
        "url": "https://en.wikipedia.org/wiki/Gaseous_fission_reactor",
        "Why interesting": "Fission reactor where its fuel is in gasegous form!",
        "additional URLs": []
    },
    {
        "name": "Cordyceps",
        "url": "https://en.wikipedia.org/wiki/Cordyceps",
        "Why interesting": "Parasitic mushrooms",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=vijGdWn5-h8"
            }
        ]
    },
    {
        "name": "Ploštice",
        "url": "https://cs.wikipedia.org/wiki/Plo%C5%A1tice#cite_note-3:~:text=Zjistilo%20se%2C%20%C5%BEe%20z%C3%A1ke%C5%99nice%20Dipetalogaster%20maximus",
        "Why interesting": "Dipetalogaster maximus can be used to collect blood from zoo animals.",
        "additional URLs": []
    },
    {
        "name": "Limnic eruption",
        "url": "https://en.wikipedia.org/wiki/Limnic_eruption",
        "Why interesting": "dissolved carbon dioxide (CO2) suddenly erupts from deep lake waters, forming a gas cloud capable of asphyxiating wildlife, livestock, and humans.",
        "additional URLs": []
    },
    {
        "name": "Úhoř říční",
        "url": "https://cs.wikipedia.org/wiki/%C3%9Aho%C5%99_%C5%99%C3%AD%C4%8Dn%C3%AD",
        "Why interesting": "Their breeding is not well understood. The make so long journies probably becouse the America and Europe used to be closer toogether.",
        "additional URLs": []
    },
    {
        "name": "Spanish Armada",
        "url": "https://en.wikipedia.org/wiki/Spanish_Armada#:~:text=William%20Adams%20served%20on%20the%20Richarde%20Dyffylde%2C%20a%20resupply%20ship%20during%20the%20campaign.%20In%201600%2C%20he%20was%20the%20first%20Englishman%20to%20reach%20(and%20settle%20in)%20Japan%20via%20the%20Dutch%20United%20East%20India%20Company%20(VOC)%20becoming%20one%20of%20the%20first%20of%20few%20Western%20samurai.%5B165%5D",
        "Why interesting": "",
        "additional URLs": [
            {
                "name": "",
                "url": ""
            }
        ]
    },
    {
        "name": "Background radiation",
        "url": "https://en.wikipedia.org/wiki/Background_radiation#:~:text=radon%2C%20which%20stick%20to%20tobacco%20leaves",
        "Why interesting": "Radon stick on tobaco leaves.",
        "additional URLs": []
    },
    {
        "name": "Kvandong cypřišovitý",
        "url": "https://cs.wikipedia.org/wiki/Kvandong_cyp%C5%99i%C5%A1ovit%C3%BD",
        "Why interesting": "Halfparasitic tree",
        "additional URLs": []
    },
    {
        "name": "Great Tea Race of 1866",
        "url": "https://en.wikipedia.org/wiki/Great_Tea_Race_of_1866",
        "Why interesting": "Ships used to race with each other, who will bring the tea from india the first.",
        "additional URLs": []
    },
    {
        "name": "Aragoscope",
        "url": "https://en.wikipedia.org/wiki/Aragoscope",
        "Why interesting": "You can make telescope without mirrors or lenses!",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=5RacK2VwqEk"
            }
        ]
    },
    {
        "name": "Mysmenopsis",
        "url": "https://en.wikipedia.org/wiki/Mysmenopsis",
        "Why interesting": "Parasitic spiders that lives in the nets of other spiders",
        "additional URLs": []
    },
    {
        "name": "Hotwheels sisyphus",
        "url": "https://en.wikipedia.org/wiki/Hotwheels_sisyphus",
        "Why interesting": "haha someone named spider Hotwheels sisyphus",
        "additional URLs": []
    },
    {
        "name": "Evolutionary anachronism",
        "url": "https://en.wikipedia.org/wiki/Evolutionary_anachronism#:~:text=Evolutionary%20anachronism%2C%20also%20known%20as,megafauna%20that%20are%20now%20extinct.",
        "Why interesting": "ttributes of native plant species (primarily fruit, but also thorns) that seemed best explained as having been favorably selected in the past due to their coevolution with plant-eating megafauna that are now extinct",
        "additional URLs": []
    },
    {
        "name": "Humster",
        "url": "https://en.wikipedia.org/wiki/Humster#:~:text=A%20humster%20is%20a%20hybrid,they%20would%20still%20be%20unviable.",
        "Why interesting": "Hamster can be fertilized with human sperm.",
        "additional URLs": []
    },
    {
        "name": "Ostnák africký",
        "url": "https://cs.wikipedia.org/wiki/Ostn%C3%A1k_africk%C3%BD",
        "Why interesting": "Cool bird with very long fingers which helps them to walk on lilipads",
        "additional URLs": []
    },
    {
        "name": "Kopřivák morušovitý",
        "url": "https://cs.wikipedia.org/wiki/Kop%C5%99iv%C3%A1k_moru%C5%A1ovit%C3%BD#:~:text=%5B6%5D-,Nebezpe%C4%8D%C3%AD,-%5Beditovat%20%7C",
        "Why interesting": "Dangerous plant",
        "additional URLs": []
    },
    {
        "name": "Bublinatka",
        "url": "https://cs.wikipedia.org/wiki/Bublinatka",
        "Why interesting": "Carnivorous plants with underwater traps which suck they prey.",
        "additional URLs": []
    },
    {
        "name": "Los Alamos chess",
        "url": "https://en.wikipedia.org/wiki/Los_Alamos_chess",
        "Why interesting": "Easier version of chess. It was designed to be run on on of the first computer in los alamos (first nuclear weapon laboratory). First time computer defeated a human.",
        "additional URLs": []
    },
    {
        "name": "Socratea exorrhiza",
        "url": "https://en.wikipedia.org/wiki/Socratea_exorrhiza",
        "Why interesting": "Plant that walks!",
        "additional URLs": []
    },
    {
        "name": "Worm charming",
        "url": "https://en.wikipedia.org/wiki/Worm_charming",
        "Why interesting": "You can call earthworms from ground! There are even competition in it!",
        "additional URLs": []
    },
    {
        "name": "Adaptivní radiace",
        "url": "https://cs.wikipedia.org/wiki/Adaptivn%C3%AD_radiace",
        "Why interesting": "Process in which organisms diversify rapidly from an ancestral species into a multitude of new forms",
        "additional URLs": [
            {
                "name": "cool video",
                "url": "https://i.ytimg.com/an_webp/NArlXzSFt2Y/mqdefault_6s.webp?du=3000&sqp=CIyL9LwG&rs=AOn4CLAEhH6EhWeqjLFzNtjUgY_0eS2sXA"
            }
        ]
    },
    {
        "name": "Coturnism",
        "url": "https://en.wikipedia.org/wiki/Coturnism",
        "Why interesting": "Illnes you get after eating ceartain birds, because they eat poisonous seads.",
        "additional URLs": []
    },
    {
        "name": "Parasitoid wasp",
        "url": "https://en.wikipedia.org/wiki/Parasitoid_wasp",
        "Why interesting": "Just cool wasps",
        "additional URLs": []
    },
    {
        "name": "Project Lyra",
        "url": "https://en.wikipedia.org/wiki/Project_Lyra",
        "Why interesting": "Project aiming to catch up with object moving fats from solar system using Oberth effect.",
        "additional URLs": []
    },
    {
        "name": "Catatumbo lightning",
        "url": "https://en.wikipedia.org/wiki/Catatumbo_lightning",
        "Why interesting": "mass of storm clouds that occurs for 140 to 160 nights a year, nine hours per day, and with lightning flashes from 16 to 40 times per minute",
        "additional URLs": []
    },
    {
        "name": "North Ronaldsay sheep",
        "url": "https://en.wikipedia.org/wiki/North_Ronaldsay_sheep#:~:text=The%20semi-feral%20flock%20on%20North%20Ronaldsay%20is%20the%20original%20flock%20that%20evolved%20to%20subsist%20almost%20entirely%20on%20seaweed",
        "Why interesting": "Sheep that only feeds on seaweed",
        "additional URLs": []
    },
    {
        "name": "Camel",
        "url": "https://en.wikipedia.org/wiki/Camel#Biology:~:text=The%20male%20dromedary,position.%5B19%5D",
        "Why interesting": "Male camels have special organ called dulla which they use to attract females.",
        "additional URLs": []
    },
    {
        "name": "Wandering salamander",
        "url": "https://en.wikipedia.org/wiki/Wandering_salamander#:~:text=It%20has%20no%20lungs%20or%20gills",
        "Why interesting": "Slamanders that jumps and glides from the trees",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=Dk8r7O8KDqg"
            }
        ]
    },
    {
        "name": "Blindsight",
        "url": "https://en.wikipedia.org/wiki/Blindsight",
        "Why interesting": "Some people being blind can still react to visual stimuli.",
        "additional URLs": []
    },
    {
        "name": "Davy lamp",
        "url": "https://en.wikipedia.org/wiki/Davy_lamp"
    },
    {
        "name": "Direct development",
        "url": "https://simple.wikipedia.org/wiki/Direct_development"
    },
    {
        "name": "Taxonomická kategorie",
        "url": "https://cs.wikipedia.org/wiki/Taxonomick%C3%A1_kategorie"
    }
]`;

YearZero = 2024;
WeekZero = 19;
const objs = JSON.parse(jsonString);


function getDateWeek(date) {
    const currentDate = 
        (typeof date === 'object') ? date : new Date();
    const januaryFirst = 
        new Date(currentDate.getFullYear(), 0, 1);
    const daysToNextMonday = 
        (januaryFirst.getDay() === 1) ? 0 : 
        (7 - januaryFirst.getDay()) % 7;
    const nextMonday = 
        new Date(currentDate.getFullYear(), 0, 
        januaryFirst.getDate() + daysToNextMonday);
 
    return (currentDate < nextMonday) ? 52 : 
    (currentDate > nextMonday ? Math.ceil(
    (currentDate - nextMonday) / (24 * 3600 * 1000) / 7) : 1);
}

const today1 = new Date();
const weekNumber = getDateWeek(today1);
const year = today1.getFullYear();
FactIndex = (year - YearZero) * 52 + weekNumber - 8;


document.getElementById("FunFact").innerHTML = "<a href='"+objs[FactIndex]["url"]+"'>"+objs[FactIndex]["name"]+"</a>";


const pastFunFacts = document.querySelector(".PastFunFacts tbody");
index = 0;
objs.slice(0, FactIndex+1).reverse().forEach((obj, index) => {
    const row = document.createElement("tr");
    const sourceCell = document.createElement("td");
    const factCell = document.createElement("td");
    const linkCell = document.createElement("td");
    const link = document.createElement("a");

    const anchor = document.createElement("a");
    anchor.href = obj["url"];
    anchor.textContent = obj["name"];
    sourceCell.appendChild(anchor);
    factCell.textContent = `${obj["Why interesting"]}`;
    // link.href = obj["url"];
    // link.textContent = "Link";
    if (obj["additional URLs"]) {
        const additionalLinks = obj["additional URLs"];
        additionalLinks.forEach((nameurl) => {
            name = nameurl["name"];
            url = nameurl["url"];
            const additionalLink = document.createElement("a");
            additionalLink.href = url;
            additionalLink.textContent = name;
            link.appendChild(document.createElement("br"));
            link.appendChild(additionalLink);
        });
    }

    linkCell.appendChild(link);
    row.appendChild(sourceCell);
    row.appendChild(factCell);
    row.appendChild(linkCell);
    pastFunFacts.appendChild(row);
});

window.setInterval(
    () => {
        IsClass = false;
        if (!IsClass){
            document.getElementById("Time").innerHTML = "ZKOUŠKYYYYYYYYYYYYYYYYYY";
            document.getElementById("ClasName").innerHTML = "";
        }
        

    }
);