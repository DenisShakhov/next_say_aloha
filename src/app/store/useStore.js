import { create } from "zustand";


export const excursionsData = {
  "saint-anna-group": {
    backgroundImage: "/img/page_3_bg.png",
    title: "Водная экскурсия в морской национальный парк «Святая Анна»",
    tags: ["на лодке", "можно индивидуально"],
    points: "6 точек по маршруту",
    time: "с 9:30 до 17:30",
    people: "12-15 человек",
    description:
      "Покормим морских обитателей и отправимся в подводное плавание под присмотром профессионального гида. Насладимся изысканными стейками на живописных островах Лонг или Серф. После этого отправитесь на Мойэнн и встретитесь с 100-летними черепахами, а затем на поиски новых водных обитателей во время второй сессии сноркелинга, а затем сделаем еще несколько запоминающихся фотографий прогуливаясь между островами. ",
    transportList: [
      "Бесплатный трансфер от отеля на минивэне только с северной части острова до места посадки на лодку в Виктории",
      "Путешествие на комфортабельной лодке",
    ],
    map_path: "/img/map.png",
    excursionPriceForZug: 1200,
    excursionCost: [
      {name: "Полдня (4 часа, барбекю не включено) - от 350 €"},
      {name: "Полный день (8 часов) - от 600€"},
    ],
    price: "от 1200 €",
    program: [
      {
        title: "Северная часть и пляжи",
        description:
          "Наш маршрут начнётся с изучения величественных пляжей на северо-восточной части острова, таких как Sunset, Tusculum, Glacis beach и Carana.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Столица Сейшельских островов - Виктория",
        description:
          "Затем мы посетим столицу — Викторию, где погрузимся в её культурное наследие, посетив индийский храм, рыбный рынок и исторические монументы.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Деревушка ремесленников",
        description:
          "После этого мы отправимся в деревню ремесленников, чтобы узнать о местных традициях, посетить парфюмерную Coco de Mer Collection и попробовать плод эндемика.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Завод рома Takamaka",
        description:
          "Опыт дегустации лучших сортов рома на заводе Takamaka. Погрузитесь в атмосферу мастерства производства (по желанию).",
        image: "/img/swimming_women.png",
      },
      {
        title: "Район Анс Роял  (Anse Royal)",
        description:
          "Расслабьтесь на пляже, поужинайте в ресторане Kafe Kreol, и восхититесь уникальной пальмой Коко де Мер (Lodoicea).",
        image: "/img/swimming_women.png",
      },
    ],
    mainImages: [
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
    ],
    isGroupExcursion: true,
  },
  "la-dig-group": {
    backgroundImage: "/img/page_3_bg.png",
    title: "Экскурсия на Ла Диг",
    tags: ["на лодке", "можно индивидуально"],
    points: "5 точек по маршруту",
    time: "с 6:30 до 18:00",
    people: "47 человек",
    description:
      "Передвигайтесь на открытом такси или велосипеде, исследуйте белоснежные пляжи, заповедные парки и встречайте закат с видом на Индийский океан.",
    time: "с 6:30 до 18:00",
    transportList: [
      "Бесплатный трансфер от/до отеля на минивэне только с северной части острова до лодки (Виктория) займет от 20 до 40 минут",
      "Путешествие на комфортабельной лодке вместительностью до 47 человек (не на пароме)",
      "Смена лодки на острове Праслин",
      "Трансфер на о. Ла Диг на велосипеде или открытом такси (оба варианта входят в стоимость билета)",
    ],
    map_path: "/img/map-la-dig-group.png",

    excursionCost: ["Взрослый - 140 €", "Детский (до 12 лет) - 100€"],
    excursionPriceForZug: 280,
    price: "280€",
    program: [
      {
        title: "Маэ -> Праслин",
        description:
          "Ваше приключение начинается с  трансфера из Маэ на Праслин, который займет всего 1,5 часа. ",
        image: "/img/swimming_women.png",
      },
      {
        title: "Праслин -> Ла Диг",
        description:
          "Далее нас ждет короткий трансфер до Ла Диг, всего 15 минут. Здесь мы будем использовать открытое такси или велосипед, чтобы удобно перемещаться по острову (уже включено в стоимость). Кроме того, вас ждет вкусный креольский буфет на обед, включенный в стоимость тура.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Ла Диг",
        description:
          "С прибытием на Ла Диг в 9:30, вам предоставят выбор: использовать открытое такси или взять в аренду велосипед (и то, и другое включено в стоимость тура). Следующие 6 часов – это ваше свободное время для самостоятельного исследования острова.<br/><br/>Есть возможность присоединиться к основной группе. В 12 часов группа, изучившая о.Праслин, вместе с гидом прибудет на Ла Диг. После обеда гид покажет путь до следующих локаций.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Заповеднике L'Union Estate Park",
        description:
          " У вас есть возможность изучить уникальные природные и культурные достопримечательности. Среди них - историческую плантацию копры и ванили, старую французскую домашнюю усадьбу, живописные пляжи Anse Source d'Argent и Anse Union, а также местных животных, включая гигантских сухопутных черепах. <br/> <br/>Заповедник предлагает удивительные возможности для изучения флоры и фауны Сейшельских островов в живописной и атмосферной обстановке.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Пляж Анс Сурс д'Аржан",
        description:
          "Один из самых живописных пляжей мира, по версии National Geographic занимающий топ позиции место в соответствующих рейтингах. Он знаменит своими огромными гранитными валунами, разбросанными по белоснежному песку, бирюзовой водой и пышными тропическими зарослями. <br/> <br/>Анс Сурс д'Аржан – идеальное место для фотосессий, романтических прогулок и спокойного отдыха ",
        image: "/img/swimming_women.png",
      },

      {
        title: "Продолжаем исследование",
        description:
          "Посетите пляжи Анс Патат, Анс Севере, Анс Сурс д'Аржан, Гранд Анс и Анс Коко с живописными пейзажами и теплым тропическим бризом. ",
        image: "/img/swimming_women.png",
      },

      {
        title: "Ла Диг -> Маэ",
        description:
          "В 16:00 начинается возвращение из Ла Дига в Маэ, завершая ваше волнующее путешествие по Сейшельским островам.",
        image: "/img/swimming_women.png",
      },
    ],
    mainImages: [
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
    ],
    isGroupExcursion: true,
  },
  "praslin-la-dig-group": {
    backgroundImage: "/img/page_3_bg.png",
    title: "Экскурсия на Праслин и Ла Диг",
    tags: ["на лодке", "можно индивидуально"],
    description:
      "По пути к островам Праслин и Ла Диг вы окунетесь в великолепие природных заповедников, посетите знаменитый пляж Анс Лацио и насладитесь свободным временем на исследование удивительных мест.",
    points: "5 точек по маршруту",
    time: "с 6:30 до 18:00",
    people: "47 человек",
    transportList: [
      "Бесплатный трансфер от/до отеля на минивэне только с северной части острова до лодки (Виктория) займет от 20 до 40 минут",
      "Путешествие на комфортабельной лодке вместительностью до 47 человек (не на пароме)",
      "Трансфер на о. Праслин  на Минивэне",
      "Трансфер на о. Ла Диг на велосипеде или открытом такси (оба варианта входят в стоимость билета)",
    ],
    map_path: "/img/map_praslin-la-dig-group.png",

    excursionCost: ["Взрослый - 150 €"],
    excursionPriceForZug: 300,
    price: "300€",
    program: [
      {
        title: "Маэ -> Праслин",
        description:
          "Отправляемся из Маэ в удивительное путешествие, первая остановка - Праслин. Трансфер до Праслина займет около 1,5 часа, где нас ждут удивительные достопримечательности ",
        image: "/img/swimming_women.png",
      },
      {
        title: "Праслин",
        description:
          "На Праслине мы посетим Валле-де-мэ, где можно увидеть все стадии жизни пальмы Коко де Мер, заснять его на камеру и поддержать в руках кокос. Затем мы отправимся на пляж Анс Лацио (Anse Lazio - №6 в топ 10 пляжей мира по версии Forbes 2024), где вы сможете насладиться прекрасным пляжем и окружающей природой в течение 1,5 часов.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Праслин -> Ла Диг",
        description:
          "Далее нас ждет короткий трансфер до Ла Диг, всего 15 минут. Здесь мы будем использовать открытое такси или велосипед, чтобы удобно перемещаться по острову (уже включено в стоимость). Кроме того, вас ждет вкусный креольский буфет на обед, включенный в стоимость тура.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Ла Диг",
        description: `Проведите 3,5 часа на острове Ла Дига, где вы сможете самостоятельно исследовать знаменитый пляж Анс Сурс д'Аржан и  заповедник L'Union Estate Park. Гид покажет вам путь к парку, где вы увидите сухопутных черепах и красоту гранитных валунов. Вы также можете исследовать другие пляжи: Анс Патат, Анс Севере, Гранд Анс, и другие. <br/> <br/><span class="font-bold">Вход на пляж Анс Сурс д'Аржан стоит отдельно -- 200 scr (15 евро) с человека, для детей до 12 лет вход бесплатный.</span>`,
        image: "/img/swimming_women.png",
      },
      {
        title: "Ла Диг -> Маэ",
        description:
          "Обратное путешествие запланировано на 16:00, отправляемся из Ла Дига обратно в Маэ.",
        image: "/img/swimming_women.png",
      },

      {
        title: "Продолжаем исследование",
        description:
          "Посетите пляжи Анс Патат, Анс Севере, Анс Сурс д'Аржан, Гранд Анс и Анс Коко с живописными пейзажами и теплым тропическим бризом. ",
        image: "/img/swimming_women.png",
      },

      {
        title: "Ла Диг -> Маэ",
        description:
          "В 16:00 начинается возвращение из Ла Дига в Маэ, завершая ваше волнующее путешествие по Сейшельским островам.",
        image: "/img/swimming_women.png",
      },
    ],
    mainImages: [
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
    ],
    isGroupExcursion: true,
  },
  "maye-individual": {
    title: "Экскурсия по острову Маэ на автомобиле с русским гидом",
    description: "Экскурсия по острову Маэ на автомобиле с русским гидом",
    time: "с 9:00 до 18:00",
    transportList: ["Бесплатный трансфер от отеля и обратно"],
    map_path: "/img/map.png",

    excursionCost: [
      "Nissan Qashqai G1 (4 человека) -  от 300€ ",
      "Hundai H1 (6 человек) от 550€",
      "Hundai Staria (6 человек) от 600€",
      "Toyota Hiace (до 12 человек, комфортная комплектация) - 750€",
      "Toyota Coaster (до 22 человек) - 1500€",
    ],
    price: "650 €",
    excursionPriceForZug: 650,
    program: [
      {
        title: "Северная часть и пляжи",
        description:
          "Наш маршрут начнётся с изучения величественных пляжей на северо-восточной части острова, таких как Sunset, Tusculum, Glacis beach и Carana.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Столица Сейшельских островов - Виктория",
        description:
          "Затем мы посетим столицу — Викторию, где погрузимся в её культурное наследие, посетив индийский храм, рыбный рынок и исторические монументы.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Деревушка ремесленников",
        description:
          "После этого мы отправимся в деревню ремесленников, чтобы узнать о местных традициях, посетить парфюмерную Coco de Mer Collection и попробовать плод эндемика.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Завод рома Takamaka",
        description:
          "Опыт дегустации лучших сортов рома на заводе Takamaka. Погрузитесь в атмосферу мастерства производства (по желанию).",
        image: "/img/swimming_women.png",
      },
      {
        title: "Район Анс Роял  (Anse Royal)",
        description:
          "Расслабьтесь на пляже, поужинайте в ресторане Kafe Kreol, и восхититесь уникальной пальмой Коко де Мер (Lodoicea).",
        image: "/img/swimming_women.png",
      },
    ],
    mainImages: [
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
    ],
    isGroupExcursion: false,
  },
  "saint-anna-individual": {
    title: "Водная экскурсия в морской национальный парк «Святая Анна»",
    description:
      "Покормим морских обитателей и отправимся в подводное плавание под присмотром профессионального гида. Насладимся изысканными стейками на живописных островах Лонг или Серф. После этого отправитесь на Мойэнн и встретитесь с 100-летними черепахами, а затем на поиски новых водных обитателей во время второй сессии сноркелинга, а затем сделаем еще несколько запоминающихся фотографий прогуливаясь между островами. ",
    transportList: [
      "Бесплатный трансфер от отеля на минивэне только с северной части острова до места посадки на лодку в Виктории",
      "Путешествие на комфортабельной лодке ",
    ],
    map_path: "/img/map.png",

    excursionCost: [
      "Полдня (4 часа, барбекю не включено) - от 350 € ",
      "Полный день (8 часов) - от 600€",
    ],
    price: "от 1200 €",
    excursionPriceForZug: 1200,
    program: [
      {
        title: "Отправление на о. Святой Анны",
        description:
          "Отчаливаем с острова Маэ в захватывающее приключение в морской национальный парк «Святая Анна». Быстрый трансфер на лодке займёт менее 5 минут.",
        image: "/img/swimming_women.png",
      },
      {
        title: " Знакомство с подводным миром",
        description:
          "На первой остановке в локации с лучшей видимостью мы познакомимся с миром под водой и даже покормим его обитателей",
        image: "/img/swimming_women.png",
      },
      {
        title: "Первая сессия снорклинга",
        description:
          "Затем мы отправимся на первую сессию снорклинга, подготовившись к водным приключениям. Маски и ласты, спасательные жилеты предоставляются перед началом водной прогулки.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Барбекю на о. Лонг или о. Сёрф",
        description:
          "После этого нас ждет час свободного времени на острове Лонг/Сёрф, где вы сможете насладиться завораживающими пейзажами, запечатлеть момент прогулки между островами и насладиться вкуснейшим барбекю.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Остров Черепах - Мойенн",
        description:
          "Остров Мойенн - удивительный уголок природы, где живут сотни гигантских сухопутных черепах. Посещение этого острова обещает не только уединение с природой, но и возможность лично встретиться с этими древними существами. На острове также есть старинные пиратские захоронения и руины, свидетельствующие о давнем и захватывающем прошлом региона. <br/> <br/>За дополнительную плату (200 scr/15 евро, детям до 12 лет вход бесплатный)  вы можете посетить остров и насладиться часом свободного времени для исследования.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Вторая сессия снорклинга",
        description:
          "После посещения острова черепах Мойенн и часа, проведенного среди его живописных пейзажей, мы отправимся на вторую сессию снорклинга, на этот раз в поисках морских черепах. После мы вас доставим в отель.",
        image: "/img/swimming_women.png",
      },
    ],
    mainImages: [
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
    ],
    isGroupExcursion: false,
  },
  "terez-individual": {
    title: "Полный день на рыбалке в Индийском океане и острове Терез",
    description:
      "Настоящая охота за трофеями индийского океана. Отличная возможность попробовать разные виды рыбалки троллинг, джигинг, традиционная креольская рыбалка на леску. Вы почувствуете азарт и радость от спортивной рыбалки, а затем мы окунемся в океан, чтобы насладиться красотами подводного мира и отправимся на остров Терез, где вас ждет уютное барбекю, состоящим из вашего собственного «островского» улова, а также других вкусных блюд, включая курицу, салаты и гарниры.",
    transportList: [
      "Бесплатный трансфер от отеля на минивэне только с северной части острова . Время поездки зависит от местоположения отеля и порта отправления (10-40 минут). При благоприятных погодных условиях мы можем организовать погрузку с пляжа Бовалон для вашего удобства.",
      "Путешествие на комфортабельной лодке предназначенная для спортивной рыбалки",
    ],
    time: "с 9:00 до 17:00",
    map_path: "/img/map.png",

    excursionCost: ["Полный день (8 часов) - от 950€"],
    price: "от 1900 €",
    excursionPriceForZug: 1900,
    program: [
      {
        title: "С о. Маэ до Морского национального парка «Бей Терней»",
        description:
          "Первым делом - круиз по северной части острова Маэ. Под веселую музыку и аромат морского воздуха вы забудете о повседневных заботах и погрузитесь в атмосферу отдыха.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Начинаем рыбалку",
        description:
          "После круиза наступает время для рыбалки! Мы начнем с троллинга, чтобы разбудить интерес у самых крупных морских обитателей. Затем перейдем к джигингу и традиционной креольской глубоководной рыбалке на леску.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Снорклинг и знакомство с подводным миром",
        description:
          "Перед началом снорклинга мы покормим подводных обитателей, чтобы они пришли поприветствовать нас. Затем снарядимся масками и ластами и погрузимся в мир коралловых рифов и разнообразной рыбной фауны. Наши опытные гиды помогут вам обнаружить удивительные морские создания и поделятся интересными фактами о них. ",
        image: "/img/swimming_women.png",
      },
      {
        title: "Барбекю на о. Терез",
        description:
          "После таких впечатлений наступает время для ужина на уютном острове Терез, где наш повар уже готовит вкусный барбекю. Вам предоставят час на отдых и наслаждение тихой атмосферой острова, в то время как наша команда заботится о вашем ужине. Насладитесь свежим морепродуктами, курицей, салатами и другими вкусностями!",
        image: "/img/swimming_women.png",
      },
      {
        title: "Ну еще чуть-чуть!",
        description:
          "Еще немного водных развлечений! После ужина у вас будет возможность поплавать и насладиться теплыми водами океана. Выберем для вас лучшее место для купания, где вы сможете расслабиться и насладиться окружающей красотой.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Возвращение",
        description:
          "По завершении всех приключений мы вернемся на ваш отель, где вы сможете расслабиться и вспомнить все удивительные моменты этого дня!",
        image: "/img/swimming_women.png",
      },
    ],
    mainImages: [
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
    ],
    isGroupExcursion: false,
  },
  "la-dig-individual": {
    title: "Экскурсия на Ла Диг",
    description:
      "Посетим заповедник L'Union Estate Park, где вы погрузитесь в историю и природу острова: от исторических плантаций копры до французских усадеб и впечатляющих пляжей, таких как Anse Source d'Argent – одно из самых красивых мест на планете, известное своим белоснежным песком и гигантскими валунами. Не забудьте насладиться местной кухней в одном из уютных ресторанов и продолжить своё путешествие по белоснежным пляжам острова.",
    transportList: [
      "Бесплатный трансфер от/до отеля на минивэне только с северной части острова до лодки (Виктория) займет от 20 до 40 минут",
      "Путешествие на комфортабельной лодке ",
      "Трансфер на о. Ла Диг на велосипеде или гольфкаре (оба варианта входят в стоимость билета)",
    ],
    time: "с 8:00 до 18:00",
    map_path: "/img/map.png",

    excursionCost: ["Лодка - от 1400€"],
    price: "от 2800 €",
    excursionPriceForZug: 2800,
    program: [
      {
        title: "Маэ -> Ла Диг",
        description:
          "Встречаем рассвет на борту комфортабельной лодки, собравшись для увлекательного путешествия к острову Ла Диг. Вас ждет водный маршрут, пропитанный ароматами морской соли и обещающий захватывающие виды на окружающие острова.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Путешествие по острову Ла Диг",
        description:
          "Прибыв на Ла Диг вы пересядите на удобные гольфкары, которые обеспечат беззаботное и комфортное передвижение по острову. Гольфкары подарят вам свободу и возможность исследовать каждый уголок этого удивительного места.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Заповедник L'Union Estate Park",
        description:
          "У вас есть возможность изучить уникальные природные и культурные достопримечательности. Среди них - историческую плантацию копры и ванили, старую французскую домашнюю усадьбу, живописные пляжи Anse Source d'Argent и Anse Union, а также местных животных, включая гигантских сухопутных черепах.<br/><br/>Заповедник предлагает удивительные возможности для изучения флоры и фауны Сейшельских островов в живописной и атмосферной обстановке.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Пляж Анс Сурс д'Аржан",
        description:
          "Один из самых живописных пляжей мира, по версии National Geographic занимающий топ позиции место в соответствующих рейтингах. Он знаменит своими огромными гранитными валунами, разбросанными по белоснежному песку, бирюзовой водой и пышными тропическими зарослями.<br/><br/>Анс Сурс д'Аржан – идеальное место для фотосессий, романтических прогулок и спокойного отдыха ",
        image: "/img/swimming_women.png",
      },
      {
        title: "Обед в местном ресторане",
        description:
          "После исследования острова вы сможете отдохнуть и насладиться вкуснейшим обедом в местном ресторане. Здесь вы сможете попробовать аутентичные сейшельские блюда, приготовленные из свежайших местных ингредиентов.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Продолжаем исследование",
        description:
          "Наше путешествие продолжается! Посетим другие живописные пляжи, такие как Анс Патат, Анс Севере, Анс Коко и Гранд Анс, где гости смогут насладиться красотой и спокойствием Сейшельских островов в полной мере.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Возвращение",
        description:
          "В 16:00 отправляемся обратно на о. Маэ, где вас уже будет ждать трансфер до вашего отеля",
        image: "/img/swimming_women.png",
      },
    ],
    mainImages: [
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
    ],
    isGroupExcursion: false,
  },
  "praslin-la-dig-individual": {
    title: "Экскурсия на Праслин и Ла Диг",
    description:
      "Начнем приключения с природного заповедника Валле-де-мэ на Праслин, где вы узнаете о редкой пальме Коко де Мер. Затем расслабимся на пляже Анс Лацио, одном из лучших пляжей мира по версии Forbes 2024. Остаток дня проведём, исследуя потрясающие пляжи, включая фотогеничный Анс Сурс д'Аржан.",
    transportList: [
      "Бесплатный трансфер от/до отеля на минивэне только с северной части острова до лодки (Виктория) займет от 20 до 40 минут",
      "Трансфер на о. Праслин  на Минивэне ",
      "Трансфер на о. Ла Диг на велосипеде или открытом такси (оба варианта входят в стоимость билета)",
    ],
    time: "с 7:30 до 18:00",
    map_path: "/img/map.png",

    excursionCost: ["Лодка - от 1800€"],
    price: "от 3600 €",
    excursionPriceForZug: 3600,
    program: [
      {
        title: "Маэ -> Праслин",
        description:
          "Встречаем рассвет на борту комфортабельной лодки, собравшись для увлекательного путешествия к острову Ла Диг. Вас ждет водный маршрут, пропитанный ароматами морской соли и обещающий захватывающие виды на окружающие острова.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Путешествие по острову Ла Диг",
        description:
          "Прибыв на Ла Диг вы пересядите на удобные гольфкары, которые обеспечат беззаботное и комфортное передвижение по острову. Гольфкары подарят вам свободу и возможность исследовать каждый уголок этого удивительного места.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Заповедник L'Union Estate Park",
        description:
          "У вас есть возможность изучить уникальные природные и культурные достопримечательности. Среди них - историческую плантацию копры и ванили, старую французскую домашнюю усадьбу, живописные пляжи Anse Source d'Argent и Anse Union, а также местных животных, включая гигантских сухопутных черепах.<br/><br/>Заповедник предлагает удивительные возможности для изучения флоры и фауны Сейшельских островов в живописной и атмосферной обстановке.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Пляж Анс Сурс д'Аржан",
        description:
          "Один из самых живописных пляжей мира, по версии National Geographic занимающий топ позиции место в соответствующих рейтингах. Он знаменит своими огромными гранитными валунами, разбросанными по белоснежному песку, бирюзовой водой и пышными тропическими зарослями.<br/><br/>Анс Сурс д'Аржан – идеальное место для фотосессий, романтических прогулок и спокойного отдыха ",
        image: "/img/swimming_women.png",
      },
      {
        title: "Обед в местном ресторане",
        description:
          "После исследования острова вы сможете отдохнуть и насладиться вкуснейшим обедом в местном ресторане. Здесь вы сможете попробовать аутентичные сейшельские блюда, приготовленные из свежайших местных ингредиентов.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Продолжаем исследование",
        description:
          "Наше путешествие продолжается! Посетим другие живописные пляжи, такие как Анс Патат, Анс Севере, Анс Коко и Гранд Анс, где гости смогут насладиться красотой и спокойствием Сейшельских островов в полной мере.",
        image: "/img/swimming_women.png",
      },
      {
        title: "Возвращение",
        description:
          "В 16:00 отправляемся обратно на о. Маэ, где вас уже будет ждать трансфер до вашего отеля",
        image: "/img/swimming_women.png",
      },
    ],
    mainImages: [
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
      "/img/Rectangle 12.png",
    ],
    isGroupExcursion: false,
  },
};


const optionPrices = {
  barbeque: 50,
  photograph: 150,
  russian_guide: 300,
  alcohol: 10,
  fishing: 60,
};

const useStore = create((set) => ({
  logging: false,
  registred: false,
  openLogingWindow: false,
  name: "",
  lastname: "",
  startDate: null,
  endDate: null,
  email: "",
  phone: "",
  address: "",
  members: {
    old: 0,
    children: 0,
  },
  boat: "",
  date: "",
  fishing: false,
  title: "",
  messengerToChat: {
    telegram: true,
    viber: false,
    whatsup: false,
  },
  options: {
    barbeque: false,
    photograph: false,
    russian_guide: false,
    alcohol: false,
    fishing: false,
  },
  excursionTitle: "",
  excursionPrice: 0,
  totalPrice: 0,
  setMessengerToChat: (messenger) =>
    set(() => ({
      messengerToChat: {
        telegram: messenger === "telegram",
        viber: messenger === "viber",
        whatsup: messenger === "whatsup",
      },
    })),
  setOptions: (option, value) =>
    set((state) => {
      const updatedOptions = {
        ...state.options,
        [option]: value,
      };
      const optionsPrice = Object.entries(updatedOptions).reduce(
        (acc, [key, val]) => acc + (val ? optionPrices[key] : 0),
        0
      );
      return {
        options: updatedOptions,
        totalPrice: state.excursionPrice + optionsPrice,
      };
    }),
  setRegistred: (registred) => set({ registred }),
  setLogging: (logging) => set({logging}),
  setOpenLogingWindow: (openLogingWindow) => set({openLogingWindow}),
  setName: (name) => set({ name }),
  setExcursionTitle: (excursionTitle) => set({ excursionTitle }),
  setLastname: (lastname) => set({ lastname }),
  setEmail: (email) => set({ email }),
  setPhone: (phone) => set({ phone }),
  setStartData: (startDate) => set({ startDate }),
  setEndData: (endDate) => set({ endDate }),
  setAddress: (address) => set({ address }),
  setMembers: (members) => set({ members }),
  setOldMembers: (old) =>
    set((state) => ({
      members: { ...state.members, old: old < 0 ? 0 : old },
    })),
  setChildrenMembers: (children) =>
    set((state) => ({
      members: { ...state.members, children: children < 0 ? 0 : children },
    })),
  setBoat: (boat) => set({ boat }),
  setDate: (date) => set({ date }),
  setFishing: (fishing) => set({ fishing }),
  setTitle: (title) => set({ title }),
  setExcursionPrice: (excursionPrice) =>
    set((state) => ({
      excursionPrice,
      totalPrice:
        excursionPrice +
        Object.entries(state.options).reduce(
          (acc, [key, val]) => acc + (val ? optionPrices[key] : 0),
          0
        ),
    })),
  setTotalPrice: (totalPrice) => set({ totalPrice }),
  getGroupExcursions: () => {
    return Object.entries(excursionsData)
      .filter(([key, excursion]) => excursion.isGroupExcursion)
      .reduce((obj, [key, excursion]) => {
        obj[key] = excursion;
        return obj;
      }, {});
  },
  getIndividualExcursions: () => {
    return Object.entries(excursionsData)
      .filter(([key, excursion]) => !excursion.isGroupExcursion)
      .reduce((obj, [key, excursion]) => {
        obj[key] = excursion;
        return obj;
      }, {});
  },
  getAllExcursions: () => {
    return excursionsData;
  },
}));

export default useStore;