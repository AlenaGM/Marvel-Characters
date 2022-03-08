"use strict"

let json = `[{
        "name": "Batman",
        "image": "assets/img/batman.jpg",
        "universe": "DC Comics",
        "alterego": "Брюс Уэйн",
        "activity": "борец с преступностью, филантроп, миллиардер",
        "firends": "Робин, Бэтгерл",
        "superpowers": "интеллект, обширные познания, знания боевых искусств, ловкость",
        "moreinfo": "по популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. <br><br>Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом. <br><br>Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций."
    },{
        "name": "Superman",
        "image": "assets/img/superman.jpg",
        "universe": "DC Comics",
        "alterego": "Кларк Кент",
        "activity": "борец за справедливость",
        "firends": "собака Крипто",
        "superpowers": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
        "moreinfo": "полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. <br><br>Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."
    },{
        "name": "Ironman",
        "image": "assets/img/ironman.jpg",
        "universe": "Marvel Comics",
        "alterego": "Тони Старк",
        "activity": "гений, миллиардер, плейбой, филантроп",
        "firends": "Мстители",
        "superpowers": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
        "moreinfo": "пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже. <br><br>Прототипом для героя послужили Илон Маск и изобретатель Говард Хьюз. <br><br>Железный Человек не всегда ходил в красном модном костюме: в своих первых версиях 1963 года он был скромного серого цвета. Увы, в киновоплощении бронекостюм даже не из металла — его делали из пластика и стекловолокна."
    },{
        "name": "Spiderman",
        "image": "assets/img/spiderman.jpg",
        "universe": "Marvel Comics",
        "alterego": "Питер Паркер",
        "activity": "борец за справедливость, студент, фотограф",
        "firends": "Мстители, Фантастическая четверка, Люди Икс",
        "superpowers": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
        "moreinfo": "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:). <br><br>Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность». <br><br>Кстати, не все суперсилы у Питера появились за счет мутации: парень самостоятельно взломал технологию Тони Старка, после чего заслужил его признание."
    },{
        "name": "CaptainAmerica",
        "image": "assets/img/captainamerica.jpg",
        "universe": "Marvel Comics",
        "alterego": "Стивен Роджерс",
        "activity": "супер-солдат",
        "firends": "Мстители",
        "superpowers": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
        "moreinfo": "Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма. Потому он был особенно популярный во время Второй мировой войны. В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом. <br><br>Стив родился в 1917 году в семье ирландских эмигрантов Сары и Джозефа Роджерсов. В детстве он был очень слабым юношей и постоянно подвергался насмешкам со стороны других ребят. Ирландские корни давали о себе знать, потому парень от драки не лез. В начале Второй мировой войны Стивен стремился попасть на фронт. Естественно, из-за здоровья ему отказывали. <br><br>По воле судьбы ему предложили принять участие в секретном оборонном проекте, целью которого было создание суперсолдат. Несмотря на сложности во время эксперимента, результат был успешным. Роджерс превратился из хилого юноши в настоящего Аполлона. Актер Крис Эванс с этой ролью вполне справился:)"
    },{
        "name": "Thor",
        "image": "assets/img/thor.jpg",
        "universe": "Marvel Comics",
        "alterego": "нет; полное имя — Тор Одинсон",
        "activity": "борец за справедливость, скандинавский бог",
        "firends": "Мстители",
        "superpowers": "все, что может бог, плюс молот Мьелнир",
        "moreinfo": "персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении. <br><br>Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений. В одном из них он погиб в схватке с мифическим змеем Мидгардом. Это привело к Рагнареку — некоему апокалипсису в скандинавской мифологии."
    },{
        "name": "Hulk",
        "image": "assets/img/hulk.jpg",
        "universe": "Marvel Comics",
        "alterego": "Брюс Беннер",
        "activity": "супергерой, борец за справедливость, ученый-биохимик",
        "firends": "Мстители",
        "superpowers": "сверхчеловеческая сила искорость, выносливость, полет",
        "moreinfo": "идею создания Халка как персонажа можно отнести к фантастической новелле «Странная история доктора Джекила и мистера Хайда», в которой ученый не может примириться со своим демоническим альтер эго. Прошлое у Халка — хуже некуда: отец Брюса страдал от алкоголизма и приступов ярости, а мать пыталась всеми силами уберечь сына от гнева своего мужа. Она погибла, защищая своего единственного ребенка от его побоев. <br><br>Пронеся через все детство тяжелый психологический груз, Брюс вырос в чрезвычайно одаренного, но замкнутого юношу. Хотя Брюс не мог уважать отца, но пошел в науке по его стопам и выбрал ядерную физику. Во время эксперимента он ввел себе пробную сыворотку и подверг себя воздействию большого количества гамма-радиации. Беннер превратился в мускулистого неуправляемого гиганта, который крушил все вокруг и не понимал, что происходит. Так имя Халка стало нарицательным для людей, который не могут держать себя в руках."
    },{
        "name": "WonderWoman",
        "image": "assets/img/wonderwoman.jpg",
        "universe": "DC Comics",
        "alterego": "Диана Принс",
        "activity": "супергероиня, секретарь-референт",
        "firends": "Лига Справедливости, Бэтмен, Супермен",
        "superpowers": "сверхчеловеческая сила искорость, выносливость, полет",
        "moreinfo": "пора бы разбавить эту мужскую вечеринку по-настоящему крутой девчонкой :) Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника, где пропадают самолеты. Свое настоящее имя — Диана — она получила в честь древнегреческой богини охоты, а суперспособности — от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма. <br><br>У Дианы есть супер-снаряжение: лассо истины и тиара. Первое было сковано богом огня Гефестом, и оно никогда не промахивается. Человек, попавший в его петлю, неизбежно расскажет свои секреты, вспомнит забытое и даже подчинится приказам. Тиара же работает как метательное оружие, способное рассечь что угодно. Корона со звездой в центре символизирует патриотизм американской героини и служит стильным аксессуаром :)"
    },{
        "name": "BlackWidow",
        "image": "assets/img/blackwidow.jpg",
        "universe": "Marvel Comics",
        "alterego": "Наташа Романофф",
        "activity": "супергероиня, шпионка",
        "firends": "Мстители",
        "superpowers": "пик человеческого физического потенциала, замедленное старение, знание многих языков",
        "moreinfo": "супергероиня российского происхождения родилась предположительно в 1928 году в Сталинграде. Во время Второй мировой войны она потеряла родителей и была спасена из горящего дома советским солдатом. Тот на некоторое время стал ее опекуном. Повзрослев, Наташа попала в организацию «Красная Комната», где прошла многочисленные тренировки, а именно — была частью шпионской программы. <br><br>Там же ей вживили сыворотку Суперсолдата — как у Капитана Америки, но в советском варианте. Благодаря ей Наташа может использовать максимальные возможности своего организма: силу, гибкость, скорость, ловкость и т. д. Также сыворотка дает эффект замедленного старения. По мнению фанатов, самое главное преимущество Черной Вдовы — то, что ее сыграла красотка Скарлетт Йоханссон :)"
    },{
        "name": "Deadpool",
        "image": "assets/img/deadpool.jpg",
        "universe": "Marvel Comics",
        "alterego": "Уэйд Уинстон Уилсон",
        "activity": "антигерой, наемник",
        "firends": "частично Мстители, Человек-паук, Росомаха",
        "superpowers": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
        "moreinfo": "как и Росомаха из Людей Икс, Дэдпул был подвергнут опытам по программе «Оружие Икс». Ученые попытались исцелить его рак, привив его клеткам способность к регенерации. Как и всегда в комиксах, что-то пошло не так, и Дэдпул остался изуродованным и психически нестабильным. <br><br>Это единственный супергерой из списка, который однозначно не на стороне добра. Дэдпул наслаждается насилием. Первоначально появившись в основной Вселенной Marvel, он получил альтернативные варианты в других реальностях Мультивселенной. Что оставалось неизменным — его циничное, черное чувство юмора: за него Дэдпула прозвали «Болтливым наемником»."
    }]`

//СОЗДАЕМ КАРТОЧКУ ГЕРОЯ
document.addEventListener("DOMContentLoaded", function(){
    let characters = JSON.parse(json);
    let charactersContent = "";
    for (let character of characters) {
        charactersContent +=
            `<h2 class="characterName" id="${character.name}">${character.name}</h2>
            <img class="characterImage" src="${character.image}" alt="${character.name}"></img>
            <div class="rating rating_set">
                <div class="rating__body">
                    <div class="rating__active"></div>
                    <div class="rating__items">
                        <input type ="radio" class="rating__item" value="1" name="rating"></input>
                        <input type ="radio" class="rating__item" value="2" name="rating"></input>
                        <input type ="radio" class="rating__item" value="3" name="rating"></input>
                        <input type ="radio" class="rating__item" value="4" name="rating"></input>
                        <input type ="radio" class="rating__item" value="5" name="rating"></input>
                    </div>
                </div>
                <div class="rating__value"></div>
            </div>
            <div class="characterInfo">
                <div class="characterUniverse">Вселенная: ${character.universe}</div>
                <div class="characterAlterEgo">Альтер эго: ${character.alterego}</div>
                <div class="characterActivity">Род деятельности:  ${character.activity}</div>
                <div class="characterFriends">Друзья: ${character.firends}</div>
                <div class="characterSuperPowers">Суперсилы: ${character.superpowers}</div>
                <div class="characterMoreInfo">Подробнее: ${character.moreinfo}</div>
            </div>`
        }

    document.getElementById("charactersContainer").innerHTML = charactersContent;



    //РАБОТА С РЕЙТИНГОМ
    const ratings = document.querySelectorAll('.rating');

    if (ratings.length > 0) {
        initRatings();
    }

    //Основная функция
    function initRatings (){
        let ratingActive;
        let ratingValue;

        //Бегаем по всем рейтингам на странице
        for (let index = 0; index < ratings.length; index++) {
            const rating = ratings[index];
            initRating(rating);
        }

        //Инициализируем конкретный рейтинг
        function initRating(rating) {
            initRatingVars(rating);

            setRatingActiveWidth();

            if (rating.classList.contains('rating_set')) {
                setRating(rating);
            }
        }

        //Инициализация переменных
        function initRatingVars(rating) {
            ratingActive = rating.querySelector('.rating__active');
            ratingValue = rating.querySelector('.rating__value');
        }

        //Изменяем ширину активных звезд
        function setRatingActiveWidth(index = ratingValue.innerHTML) {
            const ratingActiveWidth = index/ 0.05;
            ratingActive.style.width = `${ratingActiveWidth}%`;
        }

        //Возможность указать оценку
        function setRating(rating) {
            const ratingItems = rating.querySelectorAll('.rating__item');

            for (let index = 0; index < ratingItems.length; index++){

                const ratingItem = ratingItems[index];

                ratingItem.addEventListener('mouseenter', function(e){
                    //Обновление переменных
                    initRatingVars(rating);
                    //Обновение активных звезд
                    setRatingActiveWidth(ratingItem.value);
                });

                ratingItem.addEventListener('mouseleave', function(e){
                    //Обновение активных звезд
                    setRatingActiveWidth();
                });

                ratingItem.addEventListener('click', function(e){
                    //Обновление переменных
                    initRatingVars(rating);

                    //ЗДЕСЬ НАДО ОТПРАВИТЬ ДАННЫЕ
                    let localRaiting = [];
                    console.log(localRaiting);
                    let author = document.querySelector('.characterName').innerHTML;
                    console.log(author);

                    localRaiting.push(author);
                    //localStorage.setItem(document.querySelector('#Batman').innerHTML, ratingItem.value);



/*
                    if(rating.dataset.ajax) {
                        //Отправить на сервер
                        setRatingValue(ratingItem.value, rating);
                    } else {
                        //Отобразить указанную оценку
                        ratingValue.innerHTML = index + 1;
                        setRatingActiveWidth();
                    }*/

                });
            }
    }

    /*
    async function setRatingValue(value, rating) {
        if(!rating.classList.contains('rating_sending')){
            rating.classList.add('rating_sending');

            //Отправка данных (value) на сервер
            let response = await fetch('rating.json', {
                method: 'GET',

                //body: JSON.stringify({
                // userRating: value
                //}),
                //headers: {
                // 'content-type': 'application/json'
                //}
            });

            if(response.ok){
                const result = await response.json();

                //Получаем новый рейтинг
                const newRating = result.newRating;

                //Вывод нового среднего результата
                ratingValue.innerHTML = newRating;

                //Обновление активных звезд
                setRatingActiveWidth();

                rating.classList.remove('rating_sending');

            } else {

                alert("Ошибка");

                rating.classList.remove('rating_sending');
            }
        }
    }*/
}

});











/*
document.addEventListener("DOMContentLoaded", function(event) {
    fetch("https://www.balldontlie.io/api/v1/teams/14")
    .then(response => response.json())
    .then(team => {
        document.getElementById("name")
        .innerHTML = team.name;
        document.getElementById("full_name")
        .innerHTML = team.full_name;
        document.getElementById("abbreviation")
        .innerHTML = team.abbreviation;
        document.getElementById("city")
        .innerHTML = team.city;
        document.getElementById("conference")
        .innerHTML = team.conference;
        document.getElementById("division")
        .innerHTML = team.division;
        console.log(team)
    })
    .catch(error => console.log(error));
})


/*Тестила
document.addEventListener("DOMContentLoaded", function(event) {
    fetch("https://excuser.herokuapp.com/v1/excuse")
    .then(response => response.json())
    .then(random => {
        document.getElementById("excuse")
        .innerHTML = random[0].excuse;

        console.log(random)
    })
    .catch(error => console.log(error));
})*/





