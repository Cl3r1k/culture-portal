// ***********************
// * Page of an author with

// * Author's name
// * Years of life
// * Her/his picture
// * Biography in the form of timeline
// * List of artist's works with the date of creation
// * Photo gallery with author's picture and pictures of his/her works
// * Youtube video about the author / works / period of time author lived.
// *  Video must open in a new overlay (modal)
// * Place of author's major activity on a map: google / openstreetmap (leaflet) / yandex
// * It's okay if not every element (timeline, video, photo gallery, map)
// * will be present on every page

exports.authors = [
  {
    id: 0,
    name: 'Yakub',
    surname: 'Kolas',
    fullName: 'Якуб Колас',
    photo:
      {
        link: 'https://zn.deafsch.by/frontend/web/files/global/page/66.jpg',
        path: '*локальный путь на проекте - если будет надо*',
      },
    description: 'Белорусский советский писатель, поэт и переводчик, общественный деятель. Один из классиков и основоположников новой белорусской литературы',
    birth:
      {
        date: '22 октября 1882 года',
        description: 'Родился в деревне Акинчицы (теперь территория города Столбцы Столбцовского района Минской области Беларуси)',
        location:
          {
            name: 'г.Столбцы',
            lat: 53.48214217471295,
            lng: 26.7375761625284,
            zoom: 6,
          },
      },
    death:
      {
        date: '13 августа 1956 года',
        description: 'Похоронен на военном кладбище',
        location:
          {
            name: 'г.Минск',
            lat: 53.89037067092244,
            lng: 27.560757392280152,
            zoom: 6,
          },
      },
    biography:
      [
        {
          date: '1902 год',
          description: 'Окончил народную школу — Несвижскую учительскую семинарию',
        },
        {
          date: '1907 год',
          description: 'Возглавлял литературный отдел белорусской газеты «Наша Нива» в Вильне',
        },
        {
          date: '1915 год',
          description: 'Эвакуировался вместе с семьёй в Подмосковье, работал учителем в Дмитровском уезде. Мобилизован в армию',
        },
        {
          date: '1916 год',
          description: 'Окончил Александровское военное училище и служил в запасном полку в Перми',
        },
        {
          date: 'лето 1917 года',
          description: 'В звании подпоручика был отправлен на Румынский фронт',
        },
        {
          date: '1918 год',
          description: 'После демобилизации работал учителем в городе Обоянь',
        },
        {
          date: 'С мая 1921 года',
          description: 'Переехал в Минск. Занимался творческой и научной деятельностью',
        },
        {
          date: '1928 год',
          description: 'Академик Академии наук БССР',
        },
        {
          date: '1929 год',
          description: 'Вице-президент Академии наук БССР',
        },
        {
          date: '1941 - 1944 годы',
          description: 'В годы ВОВ находился в эвакуации в Подмосковье, Ташкенте, Москве. В 1944 году вернулся в Минск',
        },
        {
          date: '1946 - 1956 годы',
          description: 'Депутат ВС СССР',
        },
      ],
    works:
      [
        {
          date: '1906 год',
          description: 'Первая публикация — стихотворение «Край родимый»',
        },
        {
          date: '1908 год',
          description: 'Сборник стихов «Песни неволи»',
        },
        {
          date: '1910 год',
          description: 'Сборник стихов «Песни печали»',
        },
        {
          date: '1923 год',
          description: 'Поэма «Новая земля»',
        },
        {
          date: '1925 год',
          description: 'Поэма «Сымон-музыкант»',
        },
        {
          date: '1926 год',
          description: 'Повесть «На просторах жизни»',
        },
        {
          date: '1928 год',
          description: 'Повесть «В глубине Полесья»',
        },
        {
          date: '1930 - 1935 годы',
          description: 'Циклы стихов «Колхозное», «Осеннее», повесть «Отщепенец». События революции и гражданской войны отражены в повести «Трясина»',
        },
        {
          date: '1942 - 1945 годы',
          description: 'Сборники стихотворений «Отомстим», «Голос земли»; поэмы «Суд в лесу» и «Возмездие»',
        },
        {
          date: '1954 год',
          description: '«На перепутье»',
        },
      ],
    gallery:
      [
        {
          link: 'https://euroradio.fm/sites/default/files/styles/gallery_main/public/article/miniatures/2017/11/kolas.jpg?itok=_L0VOz4t&c=0d17294f2161d3f6381f6e86c4d32ce1',
          path: 'локальный путь...',
        },
        {
          link: 'https://www.belta.by/images/storage/news/with_archive/2017/000027_1509602250_big.jpg',
          path: 'локальный путь...',
        },
        {
          link: 'https://a.d-cd.net/ef43feas-960.jpg',
          path: 'локальный путь...',
        },
        {
          link: 'https://www.nlb.by/upload/iblock/e9b/kolas.jpg',
          path: 'локальный путь...',
        },
        {
          link: 'https://www.sb.by/upload/iblock/67c/67c851bbe44e562985c0fc8183cf876d.jpg',
          path: 'локальный путь...',
        },
      ],
    video: {
      link: 'https://youtu.be/71kJB1j7Xwg?t=34',
    },
  },
  {
    id: 1,
    name: 'Gregory',
    surname: 'Borodulin',
    fullName: 'Григорий Иванович Бородулин',
    photo:
      {
        link: 'http://calendar.somb.ru/images/2020/2/24cms-image-000059480.jpg',
        path: '*локальный путь на проекте - если будет надо*',
      },
    description: 'Советский и белорусский поэт, эссеист, переводчик. Народный поэт Беларуси',
    birth:
      {
        date: '24 февраля 1935 года',
        description: 'Родился на хуторе Вересовка, официальное название хутора было «Городок-2». Теперь это северо-западная окраина дер.Тихоняты Сорочинского сельсовета',
        location:
          {
            name: 'дер.Тихоняты Сорочинского сельсовета',
            lat: 55.18132851883945,
            lng: 28.655963807829608,
            zoom: 6,
          },
      },
    death:
      {
        date: '2 марта 2014 года',
        description: 'Похоронен рядом с матерью на Ушачском кладбище, как и хотел поэт при жизни',
        location:
          {
            name: 'г.Ушачи, Витебская область',
            lat: 55.17926469992477,
            lng: 28.614041841542075,
            zoom: 6,
          },
      },
    biography:
      [
        {
          date: '1954 год',
          description: 'Окончил Ушачскую среднюю школу',
        },
        {
          date: '1959 год',
          description: 'Выпускник филологического факультета БГУ',
        },
        {
          date: 'После 1959 года',
          description: 'Работал редактором в издательствах «Беларусь» и «Художественная литература», а также в газете «Советская Белоруссия» и журналах «Берёзка» и «Пламя»',
        },
        {
          date: '1984 год',
          description: 'В составе государственной делегации Белорусской ССР принимал участие в 39 сессии Генеральной ассамблеи ООН',
        },
        {
          date: '1992 год',
          description: 'Стал последним белорусом, удостоившимся звания народного поэта',
        },
      ],
    works:
      [
        {
          date: '1953 год',
          description: 'Первые стихи в газете «Красная смена»',
        },
        {
          date: '1959 год',
          description: 'Сборник поэзии «Месяц над степью»',
        },
        {
          date: 'После 1959 года',
          description: 'Всего вышло около 70 сборников поэзии (в т.ч. сборники сатиры и юмора, а также стихи для детей)',
        },
        {
          date: '1984, 1996 - 2002 годы',
          description: 'Дважды издавались книги избранных стихов поэта',
        },
        {
          date: '1986 - 2006 годы',
          description: 'Стихотворные переводы на белорусский язык «Слова о полку Игореве», книг Федерико Гарсиа Лорки («Голубой звон Гренады»), «Рубаи» Омара Хайяма, произведений Шекспира, Байрона, Есенина и др.',
        },
        {
          date: '2006 год',
          description: 'Вышла книга избранных стихотворений Бородулина «Руны Перуновы»',
        },
      ],
    gallery:
      [
        {
          link: 'http://by24.org/wp-content/uploads/2014/03/rygor_baradulin.jpg',
          path: 'локальный путь...',
        },
        {
          link: 'https://www.peoples.ru/art/literature/prose/national/ryhor_ryhor_borodulin/PymqONvZHNPC2.jpeg',
          path: 'локальный путь...',
        },
        {
          link: 'https://belaruspartisan.by/upload/iblock/cbf/cbf72f8cb3d0396c3450aba9ed315f32.jpg',
          path: 'локальный путь...',
        },
        {
          link: 'https://persons-info.com/userfiles/image/persons/0-10000/5000-6000/5243/BORODULIN_Rygor_Ivanovich10.jpg',
          path: 'локальный путь...',
        },
        {
          link: 'https://s12.stc.all.kpcdn.net/share/i/12/6500474/inx960x640.jpg',
          path: 'локальный путь...',
        },
      ],
    video: {
      link: 'https://www.youtube.com/watch?v=WzJFsmUvTzI&feature=youtu.be&t=3',
    },
  },
  {
    id: 2,
    name: 'Pimen',
    surname: 'Panchenko',
    fullName: 'Пимен Емельянович Панченко',
    photo:
      {
        link: 'https://www.belta.by/images/storage/news/with_archive/2017/000027_972087_big.jpg',
        path: '*локальный путь на проекте - если будет надо*',
      },
    description: 'Советский и белорусский поэт, эссеист, переводчик. Народный поэт Беларуси',
    birth:
      {
        date: '23 августа 1917 года',
        description: 'Родился в Таллине (Эстония), куда родители, безземельные крестьяне, выехали в поисках заработка',
        location:
          {
            name: 'г.Таллин, Эстония',
            lat: 59.43532480195083,
            lng: 24.748016649737906,
            zoom: 6,
          },
      },
    death:
      {
        date: '2 апреля 1995 года',
        description: 'Похоронен в Минске на Восточном кладбище',
        location:
          {
            name: 'г.Минск',
            lat: 53.89037067092244,
            lng: 27.560757392280152,
            zoom: 6,
          },
      },
    biography:
      [
        {
          date: '1933 год',
          description: 'Семья переехала в Бобруйск. Пимен начал работать на деревообрабатывающем комбинате, а после поступил на учительские курсы',
        },
        {
          date: '1934 год',
          description: 'Начал работать учителем в школах Бобруйского и Кировского районов',
        },
        {
          date: '1938 год',
          description: 'Член Союза писателей СССР',
        },
        {
          date: '1939 год',
          description: 'Окончил заочное отделение филологического факультета Минского учительского института',
        },
        {
          date: 'С сентября 1939 года по январь 1946 года',
          description: 'Служил специальным корреспондентом и писателем в армейских газетах. Призван Сталинским РВК г. Минска',
        },
        {
          date: 'С 1946 года',
          description: 'Начал работать в журнале «Вожык». Позже перешёл в газету «Литература и искусство»',
        },
        {
          date: 'С 1946 года',
          description: 'Начал работать в журнале «Вожык». Позже перешёл в газету «Литература и искусство»',
        },
        {
          date: 'С 1946 года',
          description: 'Редактор альманаха «Советская Отчизна». Возглавлял журнал «Молодость»',
        },
        {
          date: '1958 год',
          description: 'В составе белорусской делегации принима лучастие на XII сессии Генассамблеи ООН',
        },
        {
          date: 'С 1966 года',
          description: 'Назначен секретарём правления СП БССР. Был депутатом ВС БССР 5, 6, 8 созывов',
        },
      ],
    works:
      [
        {
          date: '1934 год',
          description: 'В кировской районной газете «Кировец» и альманахе «Ударники» (стихотворения «Ураджайнае» и «Моладзі»)',
        },
        {
          date: '1938 год',
          description: 'Сборник стихов «Уверенность»',
        },
        {
          date: '1940 год',
          description: 'Сборник стихов «Сентябрьские флаги»',
        },
        {
          date: '1944 год',
          description: 'Сборник стихов «Иранский дневник»',
        },
        {
          date: '1943 - 1947 годы',
          description: 'Стихи военных лет вошли в сборники «Дарога вайны», «Далёкія станцыі» и «Гарачыя вятры»',
        },
        {
          date: '1950 - 1962 годы',
          description: 'В послевоенные годы на первый план выходят темы борьбы за мир и интернационализм, прославление социалистического строя, полётов в космос. Регулярно выходят сборники: «За шчасце, за мір», «Шырокі свет», «Кніга вандраванняў і любові», «Нью-Йоркскія малюнкі», «Тысяча небасхілаў»',
        },
        {
          date: '1966 - 1977 годы',
          description: 'Важной вехой в творчестве стал выход поэтического сборника «Пры святле маланак», в котором доминируют философские мотивы. Сборники «Снежань», «Крык сойкі» и «Вячэрні цягнік» проникнуты размышлениями об актуальных проблемах человечества, любовью к родной земле',
        },
        {
          date: 'после 1986 года',
          description: 'Гражданскими мотивами проникнута поэзия Панченко времён перестройки и первых лет независимости Беларуси. В эти годы вышли сборники «І вера, і вернасць, і вечнасць», «Прылучэнне», «Горкі жолуд», «Неспакой» и «Высокі бераг». Широкий общественный резонанс вызвало произведение «Паэма сораму і гневу»',
        },
        {
          date: '1996 - 2002 годы',
          description: 'Уже после смерти Панченко вышли сборники его поэзии разных лет: «Зямля ў мяне адна» и «Жытнёвы звон»',
        },
      ],
    gallery:
      [
        {
          link: 'https://www.belta.by/uploads/lotus/news/000027_7ACA0C4281B2C51B4325818400232C95_132472.jpg',
          path: 'локальный путь...',
        },
        {
          link: 'https://www.sb.by/upload/medialibrary/7dc/7dcee2134ef2f493305e9f87b9f4008c.jpg',
          path: 'локальный путь...',
        },
        {
          link: 'https://www.sb.by/upload/medialibrary/c13/c13be6418cbc73ad2e317bf5f0642e67.jpg',
          path: 'локальный путь...',
        },
        {
          link: 'https://novychas.by/images/534c893b_607f_426b_9fe8_d41493ca5751_w1023_r1_s.jpg',
          path: 'локальный путь...',
        },
        {
          link: 'https://img-fotki.yandex.ru/get/1025946/311695.bee/0_c6ddd_c043d022_L.jpg',
          path: 'локальный путь...',
        },
      ],
    video: {
      link: 'https://www.youtube.com/watch?v=wpC11RbWnPE',
    },
  },
];
