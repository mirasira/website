const places = [
    { number: 1, name: "Benešův most", lat: 50.6592494, lon: 14.0470275, info: "Most je momentálně v rekonstrukci, vedle vede <i>provizorní</i> lávka za 100 milionů Kč. Most byl postavený za první republiky.", mapyCzLink: "https://mapy.cz/zakladni?x=14.0470275&y=50.6592494&z=17", visitable: false },
    { number: 2, name: "Šikmý kostel", lat: 50.6589964, lon: 14.0398883, info: "Kostelu Nanebevzetí Panny Marie se v Ústí neřekne jinak než Šikmý kostel. Během 2. sv. války vedle něj spadla letecká puma a od té doby je nakřivo. S vychýlením věže o 2 metry je to nejšikmější věž ve střední Evropě.", mapyCzLink: "https://mapy.cz/zakladni?x=14.0398883&y=50.6589964&z=17", visitable: true },
    { number: 3, name: "Větruše", lat: 50.6550683, lon: 14.0398883, info: "Z Větruše je pěkný výhled na město. Vede sem lanovka z centra města (Ale dostat se tam dá v pohodě i pěšky).", mapyCzLink: "https://mapy.cz/zakladni?x=14.0398883&y=50.6550683&z=17", visitable: true },
    { number: 4, name: "Přírodní bludiště", lat: 50.6545786, lon: 14.0383433, info: "Vstup je zdarma. Vedle je ještě zrcadlové bludiště za který se platí a je to celkem scam.", mapyCzLink: "https://mapy.cz/zakladni?x=14.0383433&y=50.6545786&z=17", visitable: true },
    { number: 5, name: "Vaňovský vodopád", lat: 50.6304544, lon: 14.0415406, info: "Vede sem pěkná cesta z Větruše.", mapyCzLink: "https://mapy.cz/zakladni?x=14.0415406&y=50.6304544&z=17", visitable: true },
    { number: 6, name: "Vyhlídka Vrkoč", lat: 50.6308708, lon: 14.0451392, info: "Kousek od Vaňovského vodopádu je tahle pěkná vyhlídka.", mapyCzLink: "https://mapy.cz/zakladni?x=14.0451392&y=50.6308708&z=17", visitable: true },
    { number: 7, name: "Masarykovo zdymadlo", lat: 50.6387511, lon: 14.0478814, info: "Je to cool stavba, je průchozí pro pěší.", mapyCzLink: "https://mapy.cz/zakladni?x=14.0478814&y=50.6387511&z=17", visitable: true },
    { number: 8, name: "Hrad Střekov", lat: 50.6395911, lon: 14.0509778, info: "Hrad.", mapyCzLink: "https://mapy.cz/zakladni?x=14.0509778&y=50.6395911&z=17", visitable: true },
    { number: 9, name: "Střekovská vyhlídka", lat: 50.6525983, lon: 14.0604692, info: "Další vyhlídka na město.", mapyCzLink: "https://mapy.cz/zakladni?x=14.0604692&y=50.6525983&z=17", visitable: true },
    { number: 10, name: "Vyhlídka na Mariánské skále", lat: 50.6618700, lon: 14.0518008, info: "Výhled hlavně na Střekov.", mapyCzLink: "https://mapy.cz/zakladni?x=14.0518008&y=50.6618700&z=17", visitable: true },
    { number: 11, name: "Erbenova vyhlídka", lat: 50.6786325, lon: 14.0509194, info: "Výhled na město a okolí.", mapyCzLink: "https://mapy.cz/zakladni?x=14.0509194&y=50.6786325&z=17", visitable: true },
    { number: 12, name: "Pekelský vodopád", lat: 50.6786086, lon: 14.0750806, info: "Pěknej vodopád.", mapyCzLink: "https://mapy.cz/zakladni?x=14.0750806&y=50.6786086&z=17", visitable: true },
    { number: 13, name: "Kozí vrh", lat: 50.6760206, lon: 14.1369308, info: "Pěknej výhled ale je to celkem daleko.", mapyCzLink: "https://mapy.cz/zakladni?x=14.1369308&y=50.6760206&z=17", visitable: true },
    { number: 14, name: "Vysílač Buková hora", lat: 50.6717183, lon: 14.2289064, info: "Vysílač je vidět z širokého okolí. Je to nejvyšší bod v Českém středohoří.", mapyCzLink: "https://mapy.cz/zakladni?x=14.2289064&y=50.6717183&z=17", visitable: false },
    { number: 15, name: "Mariánský most", lat: 50.6601714, lon: 14.0535061, info: "Most vypadá celkem cool ale jenom z dálky", mapyCzLink: "https://mapy.cz/zakladni?x=14.0535061&y=50.6601714&z=17", visitable: true },

];
