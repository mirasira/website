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
        "url": "https://cs.wikipedia.org/wiki/Shakespeare_(programovac%C3%AD_jazyk)",
        "Why interesting": "Cool esoteric programing language.",
        "additional URLs": []
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
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=uT-UGTQd6zQ"
            }
        ]
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
        "Why interesting": "Tributes of native plant species (primarily fruit, but also thorns) that seemed best explained as having been favorably selected in the past due to their coevolution with plant-eating megafauna that are now extinct",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=CXvR5v6MyQg"
            }
        ]
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
        "name": "Otto Lilienthal",
        "url": "https://cs.wikipedia.org/wiki/Otto_Lilienthal",
        "Why interesting": "Based guy, pioneer of aviation",
        "additional URLs": []
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
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=_z7kpemfqlg"
            }
        ]
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
        "url": "https://en.wikipedia.org/wiki/Davy_lamp",
        "Why interesting": "Lamp which can be used in flamable atmosphere",
        "additional URLs": []
    },
    {
        "name": "Lezec obojživelný",
        "url": "https://cs.wikipedia.org/wiki/Lezec_oboj%C5%BEiveln%C3%BD",
        "Why interesting": "It is a fish living on land capable of jumping and breathing with lungs",
        "additional URLs": []
    },
    {
        "name": "Leedsichthys",
        "url": "https://cs.wikipedia.org/wiki/Leedsichthys",
        "Why interesting": "Largest fish that ever existed"
    },
    {
        "name": "Mantispidae",
        "url": "https://en.wikipedia.org/wiki/Mantispidae",
        "Why interesting": "They look like mantis but they are not related to them",
        "additional URLs": []
    },
    {
        "name": "Bamboo blossom",
        "url": "https://en.wikipedia.org/wiki/Bamboo_blossom",
        "Why interesting": "They blossom once in a lifetime then they die. They also blossom in cycles and all bamboo plants blossom at once.",
        "additional URLs": []
    },
    {
        "name": "Mecoptera",
        "url": "https://en.wikipedia.org/wiki/Mecoptera",
        "Why interesting": "They have abdomen looking like scorpion stinger",
        "additional URLs": []
    },
    {
        "name": "Asian sheepshead wrasse",
        "url": "https://en.wikipedia.org/wiki/Asian_sheepshead_wrasse#:~:text=The%20Asian%20sheepshead%20wrasse%2C%20also,it%20to%20change%20its%20sex.",
        "Why interesting": "Fish that changes its sex",
        "additional URLs": [
            {
                "name": "cool video",
                "url": "https://www.youtube.com/watch?v=rBYftObAKyo"
            }
        ]
    },
    {
        "name": "Nesytka sršňová",
        "url": "https://cs.wikipedia.org/wiki/Nesytka_sr%C5%A1%C5%88ov%C3%A1",
        "Why interesting": "Moth with very cool mimicry",
        "additional URLs": []
    },
    {
        "name": "Scaly-foot gastropod",
        "url": "https://en.wikipedia.org/wiki/Scaly-foot_gastropod",
        "Why interesting": "It has shielding made of iron?!",
        "additional URLs": []
    },
    {
        "name": "Řásnokřídlí",
        "url": "https://cs.wikipedia.org/wiki/%C5%98%C3%A1snok%C5%99%C3%ADdl%C3%AD",
        "Why interesting": "Very unique parasite fly",
        "additional URLs": []
    },
    {
        "name": "Lystrosaurus",
        "url": "https://en.wikipedia.org/wiki/Lystrosaurus",
        "Why interesting": "They vere once the most common terrestrial vertebrates on Earth",
        "additional URLs": []
    },
    {
        "name": "Draco (lizard)",
        "url": "https://en.wikipedia.org/wiki/Draco_(lizard)",
        "Why interesting": "Cool lizard that can glide",
        "additional URLs": [
            {
                "name": "",
                "url": ""
            }
        ]
    },
    {
        "name": "Nosatec žirafí",
        "url": "https://cs.wikipedia.org/wiki/Nosatec_%C5%BEiraf%C3%AD",
        "Why interesting": "Funny looking bug",
        "additional URLs": []
    },
    {
        "name": "Ptakopysk podivný",
        "url": "https://cs.wikipedia.org/wiki/Ptakopysk_podivn%C3%BD",
        "Why interesting": "Males have venomous glans",
        "additional URLs": []
    },
    {
        "name": "Naked mole-rat",
        "url": "https://en.wikipedia.org/wiki/Naked_mole-rat",
        "Why interesting": "Very cool eusocial mammal",
        "additional URLs": []
    },
    {
        "name": "Xanthopan",
        "url": "https://en.wikipedia.org/wiki/Xanthopan",
        "Why interesting": "They have super long proboscis",
        "additional URLs": []
    },
    {
        "name": "Strain 121",
        "url": "https://en.wikipedia.org/wiki/Strain_121",
        "Why interesting": "Microbe capable of reproducing even in 121°C",
        "additional URLs": []
    },
    {
        "name": "Cymothoa exigua",
        "url": "https://cs.wikipedia.org/wiki/Cymothoa_exigua",
        "Why interesting": "Very cool parasite of fish",
        "additional URLs": []
    },
    {
        "name": "Archerfish",
        "url": "https://en.wikipedia.org/wiki/Archerfish",
        "Why interesting": "Fish that can shoot water to shoot down its pray",
        "additional URLs": []
    },
    {
        "name": "Orlosup bradatý",
        "url": "https://cs.wikipedia.org/wiki/Orlosup_bradat%C3%BD",
        "Why interesting": "Bird eating bones, lives in the alps",
        "additional URLs": []
    },
    {
        "name": "Electric eel",
        "url": "https://en.wikipedia.org/wiki/Electric_eel",
        "Why interesting": "Electric eels are cool",
        "additional URLs": []
    },
    {
        "name": "Echinocardium cordatum",
        "url": "https://en.wikipedia.org/wiki/Echinocardium_cordatum",
        "Why interesting": "cool looking sea urchin",
        "additional URLs": []
    },
    {
        "name": "Strašilka ďábelská",
        "url": "https://cs.wikipedia.org/wiki/Stra%C5%A1ilka_%C4%8F%C3%A1belsk%C3%A1",
        "Why interesting": "They can shoot sticky liquid for their defence",
        "additional URLs": []
    },
    {
        "name": "Bungar",
        "url": "https://cs.wikipedia.org/wiki/Bungar#:~:text=%5B3%5D-,Jed,-%5Beditovat%20%7C",
        "Why interesting": "Snake with super strong venom",
        "additional URLs": []
    },
    {
        "name": "Leptocephalus",
        "url": "https://en.wikipedia.org/wiki/Leptocephalus",
        "Why interesting": "Eel larva is transparent",
        "additional URLs": []
    },
    {
        "name": "Prskavec",
        "url": "https://cs.wikipedia.org/wiki/Prskavec",
        "Why interesting": "Bug capable of shooting boiling liquid",
        "additional URLs": []
    },
    {
        "name": "Cone snail",
        "url": "https://en.wikipedia.org/wiki/Cone_snail",
        "Why interesting": "Snails hunting with harpoon and very complex mix of venoms",
        "additional URLs": [
            {
                "name": "cool video",
                "url": "https://www.youtube.com/watch?v=UwgZjEfBUS4"
            }
        ]
    },
    {
        "name": "Žraloček brazilský",
        "url": "https://cs.wikipedia.org/wiki/%C5%BDralo%C4%8Dek_brazilsk%C3%BD#cite_note-17",
        "Why interesting": "very nasty parasite",
        "additional URLs": []
    },
    {
        "name": "Sněžnice matná",
        "url": "https://cs.wikipedia.org/wiki/Sn%C4%9B%C5%BEnice_matn%C3%A1",
        "Why interesting": "Insect mainly active in winter!",
        "additional URLs": []
    },
    {
        "name": "Kostižerky",
        "url": "https://cs.wikipedia.org/wiki/Kosti%C5%BEerky",
        "Why interesting": "Animal feeding on skeletons of whales, in past they might have fed on corpses of large marine reptiles. Males lives inside females.",
        "additional URLs": []
    },
    {
        "name": "Demodex",
        "url": "https://en.wikipedia.org/wiki/Demodex",
        "Why interesting": "Animal living on human faces. They cant poop.",
        "additional URLs": []
    },
    {
        "name": "Listonoh letní",
        "url": "https://cs.wikipedia.org/wiki/Listonoh_letn%C3%AD",
        "Why interesting": "dont know",
        "additional URLs": []
    },
    {
        "name": "Big Bird (finch)",
        "url": "https://en.wikipedia.org/wiki/Big_Bird_(finch)",
        "Why interesting": "Bird starting its own species, evolution can be fats",
        "additional URLs": [
            {
                "name": "Rapid evolution (video)",
                "url": "https://www.youtube.com/watch?v=NArlXzSFt2Y"
            }
        ]
    },
    {
        "name": "Prasatka",
        "url": "https://cs.wikipedia.org/wiki/Prasatka",
        "Why interesting": "Funny looking frog witch burrow using its head.",
        "additional URLs": []
    },
    {
        "name": "Stingless bee",
        "url": "https://en.wikipedia.org/wiki/Stingless_bee",
        "Why interesting": "Apparently bees without stinger exits, they also produce honey and the make very cool looking hives and structures for storing honey",
        "additional URLs": []
    },
    {
        "name": "Spider-tailed horned viper",
        "url": "https://en.wikipedia.org/wiki/Spider-tailed_horned_viper",
        "Why interesting": "The have a spider looking end of tail, which they use to lure birds",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/shorts/MkYluH1BtvU"
            }
        ]
    },
    {
        "name": "Kalmar Hamiltonův",
        "url": "https://cs.wikipedia.org/wiki/Kalmar_Hamilton%C5%AFv",
        "Why interesting": "One of the biggest squid which is little known about",
        "additional URLs": []
    },
    {
        "name": "Výtrusenky",
        "url": "https://cs.wikipedia.org/wiki/V%C3%BDtrusenky",
        "Why interesting": "Parasites related to jellyfishes with reduced body",
        "additional URLs": []
    },
    {
        "name": "Motion camouflage",
        "url": "https://en.wikipedia.org/wiki/Motion_camouflage",
        "Why interesting": "Animals use motion as camouflage",
        "additional URLs": []
    },
    {
        "name": "Dwarf elephant",
        "url": "https://en.wikipedia.org/wiki/Dwarf_elephant",
        "Why interesting": "Form of insular dwarfism, small elephants live on islands in Mediterranean. It is believed that cyclops are based on their sculls which the ancient people found on the islands",
        "additional URLs": []
    },
    {
        "name": "Kopinatec plžovitý",
        "url": "https://cs.wikipedia.org/wiki/Kopinatec_pl%C5%BEovit%C3%BD",
        "Why interesting": "This is probably how the first chordata looked like (ancestors to all vertebrates)",
        "additional URLs": []
    },
    {
        "name": "Dicynodontia",
        "url": "https://en.wikipedia.org/wiki/Dicynodontia",
        "Why interesting": "q",
        "additional URLs": []
    },
    {
        "name": "Star-nosed mole",
        "url": "https://en.wikipedia.org/wiki/Star-nosed_mole",
        "Why interesting": "Cool mole with very sensitive sense of smell, they are good swimmers!",
        "additional URLs": [
            {
                "name": "cool video",
                "url": "https://www.youtube.com/watch?v=u74iVC_wVek"
            }
        ]
    },
    {
        "name": "Sea butterfly",
        "url": "https://en.wikipedia.org/wiki/Sea_butterfly",
        "Why interesting": "One of the most abundant gastropods, important in food chain",
        "additional URLs": []
    },
    {
        "name": "Tiktaalik",
        "url": "https://en.wikipedia.org/wiki/Tiktaalik",
        "Why interesting": "First vertebrate capable of walking on land!",
        "additional URLs": []
    },
    {
        "name": "Tulip mania",
        "url": "https://en.wikipedia.org/wiki/Tulip_mania",
        "Why interesting": "One of the first asset bubble in history",
        "additional URLs": []
    },
    {
        "name": "Mercury (planet)",
        "url": "https://en.wikipedia.org/wiki/Mercury_(planet)#:~:text=Essentially%2C%20because%20Mercury%20is%20closest%20to%20the%20Sun%2C%20when%20taking%20an%20average%20over%20time%2C%20Mercury%20is%20most%20often%20the%20closest%20planet%20to%20the%20Earth%2C%5B121%5D%5B122%5D%20and%E2%80%94in%20that%20measure%E2%80%94it%20is%20the%20closest%20planet%20to%20each%20of%20the%20other%20planets%20in%20the%20Solar%20System",
        "Why interesting": "Mercury is the closest planet to all planets in solar system",
        "additional URLs": []
    },
    {
        "name": "Asilidae",
        "url": "https://en.wikipedia.org/wiki/Asilidae",
        "Why interesting": "Or assasin flies, cool animals",
        "additional URLs": []
    },
    {
        "name": "Žábronožka letní",
        "url": "https://cs.wikipedia.org/wiki/%C5%BD%C3%A1brono%C5%BEka_letn%C3%AD",
        "Why interesting": "dont know",
        "additional URLs": []
    },
    {
        "name": "Quetzalcoatlus",
        "url": "https://en.wikipedia.org/wiki/Quetzalcoatlus",
        "Why interesting": "Biggest flying animal ever",
        "additional URLs": []
    },
    {
        "name": "Salangana ostrovní",
        "url": "https://cs.wikipedia.org/wiki/Salangana_ostrovn%C3%AD",
        "Why interesting": "Birds living in caves able to echolocate! They also make their nest from their saliva. The nests are use in chinese cuisine as delicatesy",
        "additional URLs": []
    },
    {
        "name": "Elephant bird",
        "url": "https://en.wikipedia.org/wiki/Elephant_bird",
        "Why interesting": "Giant bird that lived on madagascar",
        "additional URLs": []
    },
    {
        "name": "Lepidodactylus lugubris",
        "url": "https://en.wikipedia.org/wiki/Lepidodactylus_lugubris",
        "Why interesting": "This species is all female, and reproduces via parthenogenesis",
        "additional URLs": []
    },
    {
        "name": "Gvačaro jeskynní",
        "url": "https://cs.wikipedia.org/wiki/Gva%C4%8Daro_jeskynn%C3%AD",
        "Why interesting": "Night bird able to echolocate!",
        "additional URLs": []
    },
    {
        "name": "Tarantula hawk",
        "url": "https://en.wikipedia.org/wiki/Tarantula_hawk",
        "Why interesting": "One of the largest tarantula hawks, hunting tarantulas",
        "additional URLs": []
    },
    {
        "name": "Desulforudis audaxviator",
        "url": "https://cs.wikipedia.org/wiki/Desulforudis_audaxviator",
        "Why interesting": "Bacteria living extremely deep in ground.",
        "additional URLs": []
    },
    {
        "name": "Lungfish",
        "url": "https://en.wikipedia.org/wiki/Lungfish",
        "Why interesting": "Fish that have lungs",
        "additional URLs": []
    },
    {
        "name": "Nyctosaurus",
        "url": "https://en.wikipedia.org/wiki/Nyctosaurus",
        "Why interesting": "",
        "additional URLs": [
            {
                "name": "",
                "url": "q"
            }
        ]
    },
    {
        "name": "Tana péroocasá",
        "url": "https://cs.wikipedia.org/wiki/Tana_p%C3%A9roocas%C3%A1",
        "Why interesting": "It is very resistant to alcohol.",
        "additional URLs": []
    },
    {
        "name": "Cleaner fish",
        "url": "https://en.wikipedia.org/wiki/Cleaner_fish#:~:text=The%20two%20most%20commonly%20used,Bay%20of%20Fundy%20and%20St.",
        "Why interesting": "Fish that clean other fish",
        "additional URLs": []
    },
    {
        "name": "Rosněnkovití",
        "url": "https://cs.wikipedia.org/wiki/Rosn%C4%9Bnkovit%C3%AD",
        "Why interesting": "Frogs that are transparent, you can see their inner organs!",
        "additional URLs": []
    },
    {
        "name": "Kořenohlavci",
        "url": "https://cs.wikipedia.org/wiki/Ko%C5%99enohlavci",
        "Why interesting": "Very interesting parasite",
        "additional URLs": []
    },
    {
        "name": "Entelodontidae",
        "url": "https://en.wikipedia.org/wiki/Entelodontidae",
        "Why interesting": "They are also called hell pigs, they look very terifying. Luckily they are extint",
        "additional URLs": []
    },
    {
        "name": "Crabeater seal",
        "url": "https://en.wikipedia.org/wiki/Crabeater_seal#:~:text=%5Bedit%5D-,Diet,-%5Bedit%5D",
        "Why interesting": "They have complex teeth.",
        "additional URLs": []
    },
    {
        "name": "Baby jumping",
        "url": "https://en.wikipedia.org/wiki/Baby_jumping",
        "Why interesting": "Spanish tradition where people jump over babies",
        "additional URLs": []
    },
    {
        "name": "Singing sand",
        "url": "https://en.wikipedia.org/wiki/Singing_sand",
        "Why interesting": "Sand that have specific propeties emits sound.",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=B3hpnC2h8-U"
            }
        ]
    },
    {
        "name": "Purple frog",
        "url": "https://en.wikipedia.org/wiki/Purple_frog",
        "Why interesting": "funny frog",
        "additional URLs": []
    },
    {
        "name": "Common remora",
        "url": "https://en.wikipedia.org/wiki/Common_remora",
        "Why interesting": "Fish that attaches to larger fish.",
        "additional URLs": []
    },
    {
        "name": "Buff-tip",
        "url": "https://en.wikipedia.org/wiki/Buff-tip",
        "Why interesting": "Adults look cool",
        "additional URLs": [
            {
                "name": "",
                "url": ""
            }
        ]
    },
    {
        "name": "Thiomargarita magnifica",
        "url": "https://cs.wikipedia.org/wiki/Thiomargarita_magnifica",
        "Why interesting": "Biggest known bacteria",
        "additional URLs": []
    },
    {
        "name": "Bird intelligence",
        "url": "https://en.wikipedia.org/wiki/Bird_intelligence#:~:text=Birds%20can%20also%20have%20twice%20the%20neuron%20packing%20density%20of%20primate",
        "Why interesting": "Birds can also have twice the neuron packing density of primate brains",
        "additional URLs": []
    },
    {
        "name": "West African lungfish",
        "url": "https://en.wikipedia.org/wiki/West_African_lungfish",
        "Why interesting": "Fish that burrow into the ground when there is no water",
        "additional URLs": []
    },
    {
        "name": "KosherSwitch",
        "url": "https://en.wikipedia.org/wiki/KosherSwitch",
        "Why interesting": "Jews cant use electricity during shabbat. This is a workaround.",
        "additional URLs": []
    },
    {
        "name": "Messor barbarus",
        "url": "https://en.wikipedia.org/wiki/Messor_barbarus",
        "Why interesting": "The act according to the optimal foraging theory",
        "additional URLs": []
    },
    {
        "name": "Calutron Girls",
        "url": "https://en.wikipedia.org/wiki/Calutron_Girls",
        "Why interesting": "Girls that worked on manhatan project, not knowing what exactly are they working on",
        "additional URLs": []
    },
    {
        "name": "Tetrahymena thermophila",
        "url": "https://en.wikipedia.org/wiki/Tetrahymena_thermophila#:~:text=It%20is%20about%2050%20%CE%BCm%20long.%5B9%5D%20One%20famous%20trait%20this%20species%20is%20known%20for%20is%20that%20has%207%20different%20mating%20types%2C%20unlike%20most%20eukaryotic%20organisms%2C%20which%20usually%20only%20have%202.%5B4%5D%3A%E2%80%8A84",
        "Why interesting": "It has 7 different mating types, unlike most eukaryotic organisms, which usually only have 2.",
        "additional URLs": []
    },
    {
        "name": "Driocephalus",
        "url": "https://en.wikipedia.org/wiki/Driocephalus",
        "Why interesting": "It parasite on shark brains.",
        "additional URLs": []
    },
    {
        "name": "Graptoliti",
        "url": "https://cs.wikipedia.org/wiki/Graptoliti",
        "Why interesting": "dont know",
        "additional URLs": []
    },
    {
        "name": "Křemité houby",
        "url": "https://cs.wikipedia.org/wiki/K%C5%99emit%C3%A9_houby",
        "Why interesting": "Their bodies are mado of glass and they can be super old",
        "additional URLs": []
    },
    {
        "name": "Drápatka vodní",
        "url": "https://cs.wikipedia.org/wiki/Dr%C3%A1patka_vodn%C3%AD#:~:text=DNA%20(nebo%20mRNA).-,T%C4%9Bhotensk%C3%A9%20testy,-%5Beditovat%20%7C",
        "Why interesting": "Frog that was used for pregnancy testing.",
        "additional URLs": []
    },
    {
        "name": "Otavia",
        "url": "https://en.wikipedia.org/wiki/Otavia",
        "Why interesting": "Oldest animal fossil",
        "additional URLs": []
    },
    {
        "name": "Dorylus",
        "url": "https://en.wikipedia.org/wiki/Dorylus",
        "Why interesting": "Ants eating everything in their path. Their males are very big.",
        "additional URLs": []
    },
    {
        "name": "Raroh proměnlivý",
        "url": "https://cs.wikipedia.org/wiki/Raroh_prom%C4%9Bnliv%C3%BD",
        "Why interesting": "Bird that spread wild fire",
        "additional URLs": []
    },
    {
        "name": "Charnia",
        "url": "https://cs.wikipedia.org/wiki/Charnia#:~:text=Charnia%20je%20perovit%C3%A1%2C%20dvoustrann%C4%9B%20symetrick%C3%A1,%C4%8Dlen%C4%9Bny%20do%20pravideln%C3%BDch%20drobn%C3%BDch%20odd%C3%ADl%C5%AF.",
        "Why interesting": "Animal that lived during ediacaran period",
        "additional URLs": []
    },
    {
        "name": "Propadání Dunaje",
        "url": "https://cs.wikipedia.org/wiki/Propad%C3%A1n%C3%AD_Dunaje",
        "Why interesting": "Part of Danube river sikns down and go through cave system.",
        "additional URLs": []
    },
    {
        "name": "Cleaning symbiosis",
        "url": "https://en.wikipedia.org/wiki/Cleaning_symbiosis",
        "Why interesting": "Some animals clean other animals",
        "additional URLs": []
    },
    {
        "name": "Sklípkanec jedovatý",
        "url": "https://cs.wikipedia.org/wiki/Skl%C3%ADpkanec_jedovat%C3%BD",
        "Why interesting": "It is very venomous spider but only to humans. It lives only around sydney.",
        "additional URLs": []
    },
    {
        "name": "Musk deer",
        "url": "https://en.wikipedia.org/wiki/Musk_deer",
        "Why interesting": "Deer with tusks",
        "additional URLs": []
    },
    {
        "name": "Řvoucí čtyřicítky",
        "url": "https://cs.wikipedia.org/wiki/%C5%98vouc%C3%AD_%C4%8Dty%C5%99ic%C3%ADtky",
        "Why interesting": "Fast winds around 40° latitude.",
        "additional URLs": []
    },
    {
        "name": "Cecotrope",
        "url": "https://en.wikipedia.org/wiki/Cecotrope",
        "Why interesting": "Some animals like rabbits, guinea pigs... produce two types of feces. Cecetrope is feces they eat for more nutrients.",
        "additional URLs": [
            {
                "name": "\t",
                "url": ";"
            }
        ]
    },
    {
        "name": "Užovka tygří",
        "url": "https://cs.wikipedia.org/wiki/U%C5%BEovka_tyg%C5%99%C3%AD",
        "Why interesting": "It has two types of venoms",
        "additional URLs": []
    },
    {
        "name": "Aspidella",
        "url": "https://en.wikipedia.org/wiki/Aspidella",
        "Why interesting": "Ediacrin animal",
        "additional URLs": []
    },
    {
        "name": "Falešní přátelé",
        "url": "https://cs.wikipedia.org/wiki/Fale%C5%A1n%C3%AD_p%C5%99%C3%A1tel%C3%A9",
        "Why interesting": "Words that sound similar in different languages but means something different.",
        "additional URLs": []
    },
    {
        "name": "Hector (cloud)",
        "url": "https://en.wikipedia.org/wiki/Hector_(cloud)",
        "Why interesting": "One of the world's most consistently large thunderstorm",
        "additional URLs": []
    },
    {
        "name": "Belgica antarctica",
        "url": "https://en.wikipedia.org/wiki/Belgica_antarctica",
        "Why interesting": "Largest purely terrestrial animal native to antartica.",
        "additional URLs": []
    },
    {
        "name": "Lybia tessellata",
        "url": "https://en.wikipedia.org/wiki/Lybia_tessellata#:~:text=Lybia%20tessellata%20is%20an%20omnivore.%20It%20carries%20a%20small%20sea%20anemone",
        "Why interesting": "This crab uses small anemone for its defence. It can't feed itself so it also uses the anemone for feeding.",
        "additional URLs": []
    },
    {
        "name": "Army ant",
        "url": "https://en.wikipedia.org/wiki/Army_ant",
        "Why interesting": "Ants that eat everything.",
        "additional URLs": []
    },
    {
        "name": "Malleefowl",
        "url": "https://en.wikipedia.org/wiki/Malleefowl",
        "Why interesting": "Males creates huge nests and the chick lack parental care.",
        "additional URLs": []
    },
    {
        "name": "Glycera (annelid)",
        "url": "https://en.wikipedia.org/wiki/Glycera_(annelid)",
        "Why interesting": "They use copper in their teeth.",
        "additional URLs": []
    },
    {
        "name": "Rooftop Koreans",
        "url": "https://en.wikipedia.org/wiki/Rooftop_Koreans",
        "Why interesting": "During 1992 Los Angeles riots Koreans defended their businesses.",
        "additional URLs": [
            {
                "name": "Synthwave Tribute",
                "url": "https://www.youtube.com/watch?v=df3ZL862vgw"
            }
        ]
    },
    {
        "name": "Purple Earth hypothesis",
        "url": "https://en.wikipedia.org/wiki/Purple_Earth_hypothesis",
        "Why interesting": "Between 3.5 and 2.4 billion years ago, the earh might have been blue as early photosynthetic life forms of Early Earth were based on the simpler molecule retinal rather than the more complex porphyrin-based chlorophyll",
        "additional URLs": []
    },
    {
        "name": "Nematophagous fungus",
        "url": "https://en.wikipedia.org/wiki/Nematophagous_fungus",
        "Why interesting": "Carnivorous fungi specialized in trapping and digesting nematodes",
        "additional URLs": [
            {
                "name": "Video about them",
                "url": "https://www.youtube.com/watch?v=V6g3OjkhClE"
            }
        ]
    },
    {
        "name": "Bliss point (food)",
        "url": "https://en.wikipedia.org/wiki/Bliss_point_(food)",
        "Why interesting": "Certain amount of ingredient optimizes deliciousness",
        "additional URLs": []
    },
    {
        "name": "Possum medosavý",
        "url": "https://cs.wikipedia.org/wiki/Possum_medosav%C3%BD",
        "Why interesting": "Smallest marsupial feeding on polen and nectar",
        "additional URLs": []
    },
    {
        "name": "Bagheera kiplingi",
        "url": "https://cs.wikipedia.org/wiki/Bagheera_kiplingi",
        "Why interesting": "Vegetarian spider. It is also named after character from the jungle book",
        "additional URLs": []
    },
    {
        "name": "M65 (kanón)",
        "url": "https://cs.wikipedia.org/wiki/M65_(kan%C3%B3n)",
        "Why interesting": "Cannon used to shoot nuclear weapons.",
        "additional URLs": []
    },
    {
        "name": "PG5 (molecule)",
        "url": "https://en.wikipedia.org/wiki/PG5_(molecule)#:~:text=PG5%20has%20a%20molecular%20mass,MDa%20or%20200%2C000%2C000%20g%2Fmol.",
        "Why interesting": "\fargest stable synthetic molecule ever made",
        "additional URLs": []
    },
    {
        "name": "Nebehledovití",
        "url": "https://cs.wikipedia.org/wiki/Nebehledovit%C3%AD",
        "Why interesting": "Cool fish with interesting name.",
        "additional URLs": []
    },
    {
        "name": "Pikaia",
        "url": "https://cs.wikipedia.org/wiki/Pikaia",
        "Why interesting": "Probable ancsetor of all chordate",
        "additional URLs": []
    },
    {
        "name": "Pyrococcus furiosus",
        "url": "https://cs.m.wikipedia.org/wiki/Pyrococcus_furiosus",
        "Why interesting": "Extremophile used in research.",
        "additional URLs": []
    },
    {
        "name": "Kukaččí včely",
        "url": "https://cs.wikipedia.org/wiki/Kuka%C4%8D%C4%8D%C3%AD_v%C4%8Dely",
        "Why interesting": "Bees that lay eggs in the nests of other bees.",
        "additional URLs": []
    },
    {
        "name": "Dickinsonia",
        "url": "https://en.wikipedia.org/wiki/Dickinsonia",
        "Why interesting": "Ediacrin animal",
        "additional URLs": [
            {
                "name": "",
                "url": "q"
            }
        ]
    },
    {
        "name": "Harry Jelínek",
        "url": "https://cs.wikipedia.org/wiki/Harry_Jel%C3%ADnek",
        "Why interesting": "Czech scammer which \"sold\" Karlštejn.",
        "additional URLs": []
    },
    {
        "name": "Eriovixia gryffindori",
        "url": "https://en.wikipedia.org/wiki/Eriovixia_gryffindori",
        "Why interesting": "This spider's abdomen resembles the Sorting Hat from the Harry Potter.",
        "additional URLs": []
    },
    {
        "name": "Thursday October Christian",
        "url": "https://cs.wikipedia.org/wiki/Thursday_October_Christian",
        "Why interesting": "One of the known ancestor from mutiny on the Bounty His ancestors lives until today.",
        "additional URLs": []
    },
    {
        "name": "Boring Billion",
        "url": "https://en.wikipedia.org/wiki/Boring_Billion",
        "Why interesting": "Time period on earth between 1.8 and 0.8 billion years, characterized by more or less tectonic stability, climatic stasis and slow biological evolution",
        "additional URLs": []
    },
    {
        "name": "Glacier finch",
        "url": "https://en.wikipedia.org/wiki/Glacier_finch",
        "Why interesting": "Bird that builds its nests on glaciers",
        "additional URLs": [
            {
                "name": "cool video",
                "url": "https://www.youtube.com/watch?v=lTKsjZN-Aec"
            }
        ]
    },
    {
        "name": "Reindeer",
        "url": "https://en.wikipedia.org/wiki/Reindeer#:~:text=they%20will%20feed%20on%20small%20rodents%20(such%20as%20lemmings)%2C",
        "Why interesting": "When they are nutritionally stressed, they hunt on small animals like lemmings or fish. Also the reindeers of Santa Claus must be females because males shed its antlers for winter.",
        "additional URLs": []
    },
    {
        "name": "Polydnaviriformidae",
        "url": "https://en.wikipedia.org/wiki/Polydnaviriformidae",
        "Why interesting": "Viruses which are symbiotic with parasitoid wasps. They circumvent the immune response of their parasitized hosts",
        "additional URLs": []
    },
    {
        "name": "Šírotlamka pelikánovitá",
        "url": "https://cs.wikipedia.org/wiki/%C5%A0%C3%ADrotlamka_pelik%C3%A1novit%C3%A1",
        "Why interesting": "Fish with giant mouths.",
        "additional URLs": []
    },
    {
        "name": "Vodnice posvátná",
        "url": "https://cs.wikipedia.org/wiki/Vodnice_posv%C3%A1tn%C3%A1",
        "Why interesting": "It breaths primarily with its skin.",
        "additional URLs": []
    },
    {
        "name": "Octopus",
        "url": "https://en.wikipedia.org/wiki/Octopus#:~:text=The%20systemic%20heart%20becomes%20inactive%20when%20the%20animal%20is%20swimming",
        "Why interesting": "The systemic heart becomes inactive when the animal is swimming.",
        "additional URLs": []
    },
    {
        "name": "Bourovčík toulavý",
        "url": "https://cs.wikipedia.org/wiki/Bourov%C4%8D%C3%ADk_toulav%C3%BD",
        "Why interesting": "This moth caterpillar is dangerous for humans.",
        "additional URLs": []
    },
    {
        "name": "Scarabaeus satyrus",
        "url": "https://en.wikipedia.org/wiki/Scarabaeus_satyrus",
        "Why interesting": "They navigate using the milky way.",
        "additional URLs": []
    },
    {
        "name": "Desis marina",
        "url": "https://en.wikipedia.org/wiki/Desis_marina",
        "Why interesting": "It lives near water and it is able to survive 19 days submerged.",
        "additional URLs": []
    },
    {
        "name": "Haootia",
        "url": "https://en.wikipedia.org/wiki/Haootia",
        "Why interesting": "Animal from ediacrin",
        "additional URLs": []
    },
    {
        "name": "Ediakarská fauna",
        "url": "https://cs.wikipedia.org/wiki/Ediakarsk%C3%A1_fauna",
        "Why interesting": "Before cambrian explosion, there was a very different biota which very little survived until today.",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=zuMq-xLqrRs"
            }
        ]
    },
    {
        "name": "Deep scattering layer",
        "url": "https://en.wikipedia.org/wiki/Deep_scattering_layer",
        "Why interesting": "Layer in the ocean consisting of a variety of marine animals. There are so many animals which rise and fall each day, it make sonar readings confused.",
        "additional URLs": []
    },
    {
        "name": "Eruv",
        "url": "https://en.wikipedia.org/wiki/Eruv",
        "Why interesting": "A trick to allow activities normally prohibited during shabbat.",
        "additional URLs": []
    },
    {
        "name": "Devil's garden",
        "url": "https://en.wikipedia.org/wiki/Devil%27s_garden",
        "Why interesting": "Large parts of rain forests where only one tree grows, with symbiotic relation with ants.",
        "additional URLs": []
    },
    {
        "name": "Cladosiphon okamuranus",
        "url": "https://en.wikipedia.org/wiki/Cladosiphon_okamuranus",
        "Why interesting": "Eadible seaweed, which is grown in japan",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=oGQWNpicLlg"
            }
        ]
    },
    {
        "name": "Lobopodia",
        "url": "https://en.wikipedia.org/wiki/Lobopodia",
        "Why interesting": "Wierd extint animals",
        "additional URLs": [
            {
                "name": "",
                "url": ""
            }
        ]
    },
    {
        "name": "Sea toad",
        "url": "https://en.wikipedia.org/wiki/Sea_toad",
        "Why interesting": "Deep sea fish with \"legs\"",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=CH5TFffP6VE"
            }
        ]
    },
    {
        "name": "Pakudlankovití",
        "url": "https://cs.wikipedia.org/wiki/Pakudlankovit%C3%AD",
        "Why interesting": "dont know",
        "additional URLs": []
    },
    {
        "name": "Tristan da Cunha",
        "url": "https://cs.wikipedia.org/wiki/Tristan_da_Cunha",
        "Why interesting": "remote island with interesting history.",
        "additional URLs": []
    },
    {
        "name": "Lanternfish",
        "url": "https://en.wikipedia.org/wiki/Lanternfish",
        "Why interesting": "Fishe that are among the most widely distributed, diverse and populous vertebrates.",
        "additional URLs": []
    },
    {
        "name": "Sea pen",
        "url": "https://en.wikipedia.org/wiki/Sea_pen",
        "Why interesting": "Very old animals",
        "additional URLs": []
    },
    {
        "name": "Costasiella kuroshimae",
        "url": "https://en.wikipedia.org/wiki/Costasiella_kuroshimae",
        "Why interesting": "Sea slug which extract chloroplasts from the algea it feeds on and use it for photosynthesis.",
        "additional URLs": []
    },
    {
        "name": "Cambrian substrate revolution",
        "url": "https://en.wikipedia.org/wiki/Cambrian_substrate_revolution",
        "Why interesting": "Huge change between ediacaran and cambrian.",
        "additional URLs": []
    },
    {
        "name": "Amphioctopus marginatus",
        "url": "https://en.wikipedia.org/wiki/Amphioctopus_marginatus",
        "Why interesting": "It can walk bipedaly and it can use and collect tools.",
        "additional URLs": []
    },
    {
        "name": "Pig-nosed turtle",
        "url": "https://en.wikipedia.org/wiki/Pig-nosed_turtle#:~:text=When%20the%20offspring%20are%20fully%20developed%2C%20they%20will%20stay%20inside%20the%20eggs%20in%20hibernation%20until%20conditions%20are%20suitable%20for%20emergence.%20Hatching%20may%20be%20triggered%20when%20the%20eggs%20have%20been%20flooded%20with%20water%20or%20by%20a%20sudden%20drop%20in%20air%20pressure%20signaling%20an%20approaching%20storm",
        "Why interesting": "When the offspring are fully developed, they will stay inside the eggs in hibernation until conditions are suitable for emergence.",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=J5u8SMzR8Fw"
            }
        ]
    },
    {
        "name": "Ice worm",
        "url": "https://en.wikipedia.org/wiki/Ice_worm",
        "Why interesting": "They live in ice",
        "additional URLs": []
    },
    {
        "name": "Saharan silver ant",
        "url": "https://en.wikipedia.org/wiki/Saharan_silver_ant",
        "Why interesting": "They can survive temperatures which other cnimals can't. They use it to forage for 10 minutes in the biggest heat. The use sun for navigation. They also walk super fast (compared to their body size).",
        "additional URLs": [
            {
                "name": "video",
                "url": "https://www.youtube.com/watch?v=IX1oKKtrm-w"
            }
        ]
    },
    {
        "name": "Dánio pruhované",
        "url": "https://cs.wikipedia.org/wiki/D%C3%A1nio_pruhovan%C3%A9",
        "Why interesting": "It is a model organism used in many branches of biology."
    },
    {
        "name": "Peacock flounder",
        "url": "https://en.wikipedia.org/wiki/Peacock_flounder",
        "Why interesting": "Type of flounder which can change color according to its surrounding."
    },
    {
        "name": "Epiphryne verriculata",
        "url": "https://en.wikipedia.org/wiki/Epiphryne_verriculata",
        "Why interesting": "Moths with cool wing pattern.",
        "additional URLs": []
    },
    {
        "name": "Stomatosuchus",
        "url": "https://en.wikipedia.org/wiki/Stomatosuchus",
        "Why interesting": "dont know",
        "additional URLs": []
    },
    {
        "name": "Pseudosuchia",
        "url": "https://en.wikipedia.org/wiki/Pseudosuchia"
    },
    {
        "name": "Gynaephora groenlandica",
        "url": "https://en.wikipedia.org/wiki/Gynaephora_groenlandica"
    },
    {
        "name": "Cyclocosmia ricketti",
        "url": "https://en.wikipedia.org/wiki/Cyclocosmia_ricketti"
    },
    {
        "name": "Mnohoštětinatci",
        "url": "https://cs.wikipedia.org/wiki/Mnoho%C5%A1t%C4%9Btinatci#:~:text=p%C3%ADskovn%C3%ADk%20ryb%C3%A1%C5%99sk%C3%BD-,Zaj%C3%ADmavost,-%5Beditovat%20%7C"
    },
    {
        "name": "Bomb pulse",
        "url": "https://en.wikipedia.org/wiki/Bomb_pulse"
    },
    {
        "name": "Bombus polaris",
        "url": "https://en.wikipedia.org/wiki/Bombus_polaris"
    },
    {
        "name": "Bipalium",
        "url": "https://en.wikipedia.org/wiki/Bipalium"
    },
    {
        "name": "Žlutá flotila",
        "url": "https://cs.wikipedia.org/wiki/%C5%BDlut%C3%A1_flotila"
    },
    {
        "name": "Marvin Heemeyer",
        "url": "https://en.wikipedia.org/wiki/Marvin_Heemeyer",
        "Why interesting": "Killdozer guy.",
        "additional URLs": []
    }
]`;



function ToEnd(today, EndDate) {
    const rawDiff = EndDate - today;
    const minus = rawDiff < 0;
    const Diff = Math.abs(rawDiff);

    // Convert to exact days (avoiding daylight saving issues)
    let totalSeconds = Math.floor(Diff / 1000);
    let days = Math.floor(totalSeconds / (24 * 60 * 60));
    let hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    let minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    let seconds = totalSeconds % 60;

    const formattedDays = String(days).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return (minus ? '-' : '') + `${formattedDays} days <br> ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}


let YearZero = 2024;
let WeekZero = 19;
const objs = JSON.parse(jsonString);

function getISOWeekAndYear(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  // ISO: Monday=1..Sunday=7 (convert Sunday=0 to 7)
  const dayNum = d.getUTCDay() || 7;
  // shift date to Thursday in current week
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const isoYear = d.getUTCFullYear();
  const yearStart = new Date(Date.UTC(isoYear, 0, 1));
  const isoWeek = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return { isoYear, isoWeek };
}



function getDateWeek(date) {
    const currentDate = 
        (typeof date === 'object') ? date : new Date();
    const januaryFirst = 
        new Date(currentDate.getFullYear(), 0, 1);
    const daysToNextMonday = 
        (januaryFirst.getDay() === 1) ? 0 : 
        (7 - januaryFirst.getDay() + 1) % 7; // Adjusted to set Monday as the first day of the week
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
const { isoYear, isoWeek } = getISOWeekAndYear(new Date());
let FactIndex = (isoYear - YearZero) * 52 + isoWeek - 8;


document.getElementById("FunFact").innerHTML = "<a href='"+objs[FactIndex]["url"]+"'>"+objs[FactIndex]["name"]+"</a>";


const pastFunFacts = document.querySelector(".PastFunFacts tbody");
let index = 0;
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
            let name = nameurl["name"];
            let url = nameurl["url"];
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

let Deadline = new Date(2025, 8, 1, 0, 0, 0, 0);

function drawCountdown(countdownData) {  // Receive the object
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";

    const daysText = countdownData.days + " days"; // Add "days" text
    const timeText = countdownData.time;

    // Measure the width of the days text to center the time below it.
    const daysWidth = ctx.measureText(daysText).width;
    const timeWidth = ctx.measureText(timeText).width;
    const daysHeight = 20;
    const timeHeight = 20;


    ctx.fillText(daysText, canvas.width / 2 - daysWidth / 2, canvas.height/2); // Centered days
    ctx.fillText(timeText, canvas.width / 2 - timeWidth / 2, canvas.height/2 + daysHeight); // Centered time (adjust vertical position as needed)
    ctx.fillText("Diplomka", canvas.width / 2 - timeWidth / 2, canvas.height/2 + daysHeight + timeHeight);
}

// const canvas = document.getElementById('countdownCanvas');
// const ctx = canvas.getContext('2d');


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// resizeCanvas();
// window.addEventListener('resize', resizeCanvas);


const today = new Date();
const countdownData = ToEnd(today, Deadline); // Get the object
// drawCountdown(countdownData);

window.setInterval(() => {
    let IsClass = false; // Make sure to define IsClass somewhere in your code
    if (!IsClass) {
        const today = new Date();

        
        const startDeadline = new Date(2025, 10, 1, 0, 0, 0, 0);
        const endDeadline = new Date(2026, 10, 1, 0, 0, 0, 0);
        // Pick a random time between startDeadline and endDeadline
        const randomTime = startDeadline.getTime() + Math.random() * (endDeadline.getTime() - startDeadline.getTime());
        Deadline = new Date(randomTime);



        const countdownData = ToEnd(today, Deadline); // Get the object
        document.getElementById("ClasName").innerHTML = "";
        document.getElementById("Time").innerHTML =ToEnd(today, Deadline);


        // drawCountdown(countdownData); // Pass the object
    }
}, 1000); // Update every second (1000 milliseconds)
