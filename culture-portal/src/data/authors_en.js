/* eslint-disable */ 
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
    name: "Yakub",
    surname: "Kolas",
    fullName: "Yakub Kolas",
    photo: {
      link: "https://zn.deafsch.by/frontend/web/files/global/page/66.jpg",
      path: "*локальный путь на проекте - если будет надо*",
    },
    description:
      "Belarusian Soviet writer, poet and translator, public figure. One of the classics and founders of the new Belarusian literature",
    birth: {
      date: "October 22, 1882",
      description:
        "Born in the village of Akinchitsy (now the territory of the city of Stolbcy city in the Stolbtsovsky district of the Minsk region of Belarus)",
      location: {
        name: "Stolbcy",
        lat: 53.48214217471295,
        lng: 26.7375761625284,
        zoom: 6,
      },
    },
    death: {
      date: "August 13, 1956",
      description: "Buried in a military cemetery",
      location: {
        name: "Minsk",
        lat: 53.89037067092244,
        lng: 27.560757392280152,
        zoom: 6,
      },
    },
    biography: [
      {
        date: "In 1902",
        description:
          "Graduated from the public school - Nesvizh Teacher Seminary",
      },
      {
        date: "In 1907",
        description:
          "Headed the literary department of the Belarusian newspaper «Nasha Niva» in Vilna",
      },
      {
        date: "In 1915",
        description:
          "He was evacuated with his family in the suburbs, worked as a teacher in Dmitrovsky district. Mobilized in the army",
      },
      {
        date: "In 1916",
        description:
          "He graduated from the Alexander Military School and served in the reserve regiment in Perm",
      },
      {
        date: "In the summer of 1917",
        description: "The rank of second lieutenant was sent to the Romanian front",
      },
      {
        date: "In 1918",
        description: "After demobilization, he worked as a teacher in Oboyan",
      },
      {
        date: "Since May 1921",
        description:
          "Moved to Minsk. Engaged in creative and scientific activities",
      },
      {
        date: "In 1928",
        description: "Academician of the Academy of Sciences of the BSSR",
      },
      {
        date: "In 1929",
        description: "Vice President of the Academy of Sciences of the BSSR",
      },
      {
        date: "In 1941 - 1944",
        description:
          "During the Second World War, he was evacuated in the Moscow suburbs, Tashkent, Moscow. In 1944 he returned to Minsk",
      },
      {
        date: "In 1946 - 1956",
        description: "Member of the Supreme Council of the USSR",
      },
    ],
    works: [
      {
        date: "In 1906",
        description: "The first publication is the poem «The Land of the Beloved»",
      },
      {
        date: "In 1908",
        description: "Collection of poems «Songs of Captivity»",
      },
      {
        date: "In 1910",
        description: "Collection of verses «Songs of sorrow»",
      },
      {
        date: "In 1923",
        description: "The poem «New Earth»",
      },
      {
        date: "In 1925",
        description: "The poem «Simon the musician»",
      },
      {
        date: "In 1926",
        description: "The story «On the open spaces of life»",
      },
      {
        date: "In 1928",
        description: "The story «In the depths of Polesie»",
      },
      {
        date: "In 1930 - 1935",
        description:
          "Cycles of poems «Collective Farm», «Autumn», the story «Rapporteur». The events of the revolution and civil war are reflected in the story «Quagmire»",
      },
      {
        date: "In 1942 - 1945",
        description:
          "Collections of poems «We will take revenge», «Voice of the Earth»; poems «Judgment in the Forest» and «Retribution»",
      },
      {
        date: "In 1954",
        description: "«At the crossroads»",
      },
    ],
    gallery: [
      {
        link:
          "https://euroradio.fm/sites/default/files/styles/gallery_main/public/article/miniatures/2017/11/kolas.jpg?itok=_L0VOz4t&c=0d17294f2161d3f6381f6e86c4d32ce1",
        path: "локальный путь...",
      },
      {
        link:
          "https://www.belta.by/images/storage/news/with_archive/2017/000027_1509602250_big.jpg",
        path: "локальный путь...",
      },
      {
        link: "https://img.tyt.by/n/kultura/07/f/yakub_kolas_test_nov2.png",
        path: "локальный путь...",
      },
      {
        link: "https://www.nlb.by/upload/iblock/e9b/kolas.jpg",
        path: "локальный путь...",
      },
      {
        link:
          "https://www.sb.by/upload/iblock/67c/67c851bbe44e562985c0fc8183cf876d.jpg",
        path: "локальный путь...",
      },
    ],
    video: {
      youtubeId: '71kJB1j7Xwg',
      startTime: 34,
    },
  },
  {
    id: 1,
    name: "Gregory",
    surname: "Borodulin",
    fullName: "Gregory Borodulin",
    photo:
    {
      link: "https://www.belnovosti.by/sites/default/files/article/13-12-2016/233.jpg",
      path: "*локальный путь на проекте - если будет надо*",
    },
    description: "Soviet and Belarusian poet, essayist, translator. National poet of Belarus",
    birth:
    {
      date: "February 24, 1935",
      description: "Born on the Veresovka farm, the official name of the farm was Gorodok-2. Now it is the northwestern outskirts of the village of Tikhonyat of the Sorochinsky Village Council",
      location:
      {
        name: "Tikhonyat village of Sorochinsky village council",
        lat: 55.18132851883945,
        lng: 28.655963807829608,
        zoom: 6,
      },
    },
    death:
    {
      date: "March 2, 2014",
      description: "He was buried next to his mother at the Ushachsky cemetery, as the poet wanted during his lifetime",
      location:
      {
        name: "Ushachy, Vitebsk region",
        lat: 55.17926469992477,
        lng: 28.614041841542075,
        zoom: 6,
      },
    },
    biography:
      [
        {
          date: "In 1954",
          description: "Graduated from Ushachies High School",
        },
        {
          date: "In 1959",
          description: "Graduate of the Faculty of Philology of BSU",
        },
        {
          date: "After 1959",
          description: "He worked as an editor at the publishing houses «Belarus» and «Fiction», as well as in the newspaper «Soviet Belarus» and the magazines «Berezka» and «Flame»",
        },
        {
          date: "In 1984",
          description: "As part of the state delegation of the Byelorussian SSR took part in the 39th session of the UN General Assembly",
        },
        {
          date: "In 1992",
          description: "He became the last Belarusian awarded the title of national poet",
        },
      ],
    works:
      [
        {
          date: "In 1953",
          description: "The first poems in the newspaper «Red shift»",
        },
        {
          date: "In 1959",
          description: "A collection of poetry «A Month Over the Steppe»",
        },
        {
          date: "After 1959",
          description: "In total, about 70 collections of poetry were published (including collections of satire and humor, as well as poems for children)",
        },
        {
          date: "In 1984, 1996 - 2002",
          description: "Books of poet's selected verses have been published twice",
        },
        {
          date: "In 1986 - 2006",
          description: "Poetry translations into Belarusian «Words about Igor’s Regiment», books by Federico Garcia Lorca («Blue Ringing of Grenada»), «Rubai» by Omar Khayyam, works by Shakespeare, Byron, Yesenin and others",
        },
        {
          date: "In 2006",
          description: "A book of selected poems by Borodulin «Runes of Perunova»",
        },
      ],
    gallery:
      [
        {
          link: "https://persons-info.com/userfiles/image/persons/0-10000/5000-6000/5243/BORODULIN_Rygor_Ivanovich7.jpg",
          path: "локальный путь...",
        },
        {
          link: "https://www.peoples.ru/art/literature/prose/national/ryhor_ryhor_borodulin/PymqONvZHNPC2.jpeg",
          path: "локальный путь...",
        },
        {
          link: "https://belaruspartisan.by/upload/iblock/cbf/cbf72f8cb3d0396c3450aba9ed315f32.jpg",
          path: "локальный путь...",
        },
        {
          link: "https://persons-info.com/userfiles/image/persons/0-10000/5000-6000/5243/BORODULIN_Rygor_Ivanovich10.jpg",
          path: "локальный путь...",
        },
        {
          link: "https://s12.stc.all.kpcdn.net/share/i/12/6500474/inx960x640.jpg",
          path: "локальный путь...",
        },
      ],
    video: {
      youtubeId: "WzJFsmUvTzI",
      startTime: 3,
    },
  },
  {
    id: 2,
    name: "Pimen",
    surname: "Panchenko",
    fullName: "Pimen Panchenko",
    photo: {
      link:
        "https://www.belta.by/images/storage/news/with_archive/2017/000027_972087_big.jpg",
      path: "*локальный путь на проекте - если будет надо*",
    },
    description:
      "Soviet and Belarusian poet, essayist, translator. National poet of Belarus",
    birth: {
      date: "August 23, 1917",
      description:
        "Born in Tallinn (Estonia), where parents, landless peasants, went in search of work",
      location: {
        name: "Tallinn, Estonia",
        lat: 59.43532480195083,
        lng: 24.748016649737906,
        zoom: 6,
      },
    },
    death: {
      date: "April 2, 1995",
      description: "He was buried in Minsk at the Eastern cemetery",
      location: {
        name: "Minsk",
        lat: 53.89037067092244,
        lng: 27.560757392280152,
        zoom: 6,
      },
    },
    biography: [
      {
        date: "In 1933",
        description:
          "The family moved to Bobruisk. Pimen began working at a woodworking factory, and after he entered teacher training courses",
      },
      {
        date: "In 1934",
        description:
          "He began to work as a teacher in schools of Bobruisk and Kirovsk regions",
      },
      {
        date: "In 1938",
        description: "Member of the Union of Writers of the USSR",
      },
      {
        date: "In 1939",
        description:
          "He graduated from the correspondence department of the philological faculty of the Minsk Teachers Institute",
      },
      {
        date: "From 09/1939 to 01/1946",
        description:
          "He served as a special correspondent and writer in army newspapers. Done by the Stalin RVC in Minsk",
      },
      {
        date: "Since 1946",
        description:
          "He started working in the journal «Wozyk». Later moved to the newspaper «Literature and Art»",
      },
      {
        date: "Since 1946",
        description:
          "Editor of the almanac «Soviet Fatherland». He headed the magazine «Youth»",
      },
      {
        date: "In 1958",
        description:
          "As part of the Belarusian delegation took part in the XII session of the UN General Assembly",
      },
      {
        date: "Since 1966",
        description:
          "Appointed Secretary of the Board of the Union of Writers of the BSSR. He was a deputy of the Supreme Council of the BSSR 5, 6, 8 convocations",
      },
    ],
    works: [
      {
        date: "In 1934",
        description:
          "In the Kirovsk regional newspaper «Kirovets» and the almanac «Drummers» (poems «Urajaynae» and «Moladzi»)",
      },
      {
        date: "In 1938",
        description: "Collection of poems «Confidence»",
      },
      {
        date: "In 1940",
        description: "Collection of verses «September flags»",
      },
      {
        date: "In 1944",
        description: "Collection of poems «Iranian diary»",
      },
      {
        date: "In 1943 - 1947",
        description:
          "Poems of the war years were included in the collections of «Daroga vayny», «Dal'kіya stantsі» and «Garachya vyatra»",
      },
      {
        date: "In 1950 - 1962",
        description:
          "In the postwar years, the themes of the struggle for peace and internationalism, the glorification of the socialist system, flights into space came to the fore. Regularly published collections: «For the Chasse, for the World», «The Light of the World», «The Book of Vandravannya and Love», «The New York`s malyunki», «The Thousand Nebaskhilau»",
      },
      {
        date: "In 1966 - 1977",
        description:
          "An important milestone in the work was the release of the poetry collection «Pry svyatle malanak», which is dominated by philosophical motives. The collections «Snezhan», «Kryk Soyki» and «Vyacherni tsyagnik» are imbued with reflections on the urgent problems of humanity, love for their native land",
      },
      {
        date: "After 1986",
        description:
          "Panchenko’s poetry of the times of perestroika and the first years of Belarusian independence is imbued with civic motives. During these years, the collections «Í vera, í vernasts', í vechnasts», «Pryluchenne», «Gorki Zholud», «Nespakoy» and «Vysokí berag» were published. The work «Paema soramu í gnevu» caused a wide public resonance",
      },
      {
        date: "In 1996 - 2002",
        description:
          "Already after Panchenko’s death, collections of his poetry of different years were published: «Zyamlya ŭ myane adna» and «Zhytnovy zvon»",
      },
    ],
    gallery: [
      {
        link:
          "https://www.belta.by/uploads/lotus/news/000027_7ACA0C4281B2C51B4325818400232C95_132472.jpg",
        path: "локальный путь...",
      },
      {
        link:
          "https://www.sb.by/upload/medialibrary/7dc/7dcee2134ef2f493305e9f87b9f4008c.jpg",
        path: "локальный путь...",
      },
      {
        link:
          "https://www.sb.by/upload/medialibrary/c13/c13be6418cbc73ad2e317bf5f0642e67.jpg",
        path: "локальный путь...",
      },
      {
        link:
          "https://novychas.by/images/534c893b_607f_426b_9fe8_d41493ca5751_w1023_r1_s.jpg",
        path: "локальный путь...",
      },
      {
        link:
          "https://img-fotki.yandex.ru/get/1025946/311695.bee/0_c6ddd_c043d022_L.jpg",
        path: "локальный путь...",
      },
    ],
    video: {
      youtubeId: "wpC11RbWnPE",
      startTime: 3,
    },
  },
  {
    id: 3,
    name: "Yanka",
    surname: "Kupala",
    fullName: "Yanka Kupala",
    photo: {
      link: "https://24smi.org/public/media/resize/800x-/celebrity/2018/12/06/ofy1rxpievtc-ianka-kupala.jpg",
      path: "*локальный путь на проекте - если будет надо*",
    },
    description:
      "Belorussian Soviet poet and translator, playwright, publicist",
    birth: {
      date: "June 25, 1882",
      description:
        "Born in the village of Vyazynka (now Molodechno district of the Minsk region, Belarus)",
      location: {
        name: "Molodechno",
        lat: 54.313611,
        lng: 26.851667,
        zoom: 6,
      },
    },
    death: {
      date: "June 28, 1942",
      description: "He was buried in Minsk at the Military Cemetery, near the grave of his mother.",
      location: {
        name: "Minsk",
        lat: 53.9081569,
        lng: 27.5845868,
        zoom: 6,
      },
    },
    biography: [
      {
        date: "In 1902",
        description:
          "He worked as a home teacher, a clerk in a landowner estate and other work",
      },
      {
        date: "In 1908-1909",
        description:
          "Worked in the editorial office of the first Belarusian newspaper «Nasha Niva»",
      },
      {
        date: "In 1909-1913",
        description:
          "Studied in St. Petersburg at preparatory general education courses of A. Chernyaev",
      },
      {
        date: "In 1915",
        description:
          "He studied at the Moscow City People's University named after A. L. Shanyavsky",
      },
      {
        date: "In 1916",
        description:
          "He was drafted into the army in the road construction detachment, as part of which he worked until the onset of the events of the October Revolution",
      },
      {
        date: "In 1925",
        description: "People's poet of the BSSR",
      },
      {
        date: "In 1928",
        description: "Academician of the Academy of Sciences of the BSSR",
      },
      {
        date: "In 1929",
        description: "Academician of the Academy of Sciences of the BSSR",
      },
    ],
    works: [
      {
        date: "In 1907",
        description: "The poems «Winter», «Nobody», «Cripple»",
      },
      {
        date: "In 1908",
        description: "Collection of poems «Zhaleyka»",
      },
      {
        date: "In 1912",
        description: "The play «Pavlinka»",
      },
      {
        date: "In 1913",
        description: "Collection of poems «Dear Life»",
      },
      {
        date: "In 1922",
        description: "Collection of poems «Heritage»",
      },
      {
        date: "In 1922",
        description: "The play «Heres»",
      },
      {
        date: "In 1925",
        description: "Collection of poems «Nameless»",
      },
      {
        date: "In 1930",
        description: "Collection of poems «Fading»",
      },
      {
        date: "In 1936",
        description: "Collection of poems «Song of construction»",
      },
      {
        date: "In 1940",
        description: "Collection of poems «From the heart»",
      },
      {
        date: "In 1942",
        description: "Collection of poems «Belarusian partisans»",
      },
    ],
    gallery: [
      {
        link:
          "https://a.d-cd.net/ef43feas-960.jpg",
        path: "локальный путь...",
      },
      {
        link:
          "https://24smi.org/public/media/resize/800x-/celebrity/2018/12/06/a4s1rh4cka2g-ianka-kupala-v-molodosti.jpg",
        path: "локальный путь...",
      },
      {
        link: "https://s9.stc.all.kpcdn.net/share/i/12/9933654/inx960x640.jpg",
        path: "локальный путь...",
      },
      {
        link: "https://www.stihi.ru/pics/2017/04/08/2792.jpg",
        path: "локальный путь...",
      },
      {
        link:
          "https://naviny.by/sites/default/files/field/image/kupala-600.jpg",
        path: "локальный путь...",
      },
    ],
    video: {
      youtubeId: "aJbr-p5cYuI",
      startTime: 21,
    },
  },
  {
    id: 4,
    name: "Petrus",
    surname: "Brovka",
    fullName: "Petrus Brovka",
    photo: {
      link: "https://www.sb.by/upload/medialibrary/07e/07e2b058e731e2c0dd0181cfd61ddff7.jpg",
      path: "*локальный путь на проекте - если будет надо*",
    },
    description:
      "Belorussian Soviet writer, poet and translator, playwright, publicist",
    birth: {
      date: "June 12, 1905",
      description:
        "Born in the village of Putilkovichi (now Ushachsky district, Vitebsk region, Belarus)",
      location: {
        name: "Village of Putilkovichi",
        lat: 54.93778,
        lng: 28.38389,
        zoom: 6,
      },
    },
    death: {
      date: "March 24, 1980",
      description: "He was buried in Minsk at the Eastern cemetery",
      location: {
        name: "Minsk",
        lat: 53.89037067092244,
        lng: 27.560757392280152,
        zoom: 6,
      },
    },
    biography: [
      {
        date: "In 1918—1924",
        description:
          "Worked as a clerk and bookkeeper",
      },
      {
        date: "In 1925—1927",
        description:
          "He was the head of the Komsomol District Committee in Polotsk",
      },
      {
        date: "In 1927—1928",
        description:
          "He was the executive secretary of the newspaper «Chyrvonaya Polachchyna»",
      },
      {
        date: "In 1928—1931",
        description:
          "Studied at the pedagogical faculty of BSU",
      },
      {
        date: "In 1928",
        description:
          "He worked in the literary association «Maladnyak», later in the Belarusian Association of Proletarian Writers",
      },
      {
        date: "In 1941—1942",
        description: "He served in the Red Army, worked in the front and partisan press",
      },
      {
        date: "In 1943—1945",
        description: "Executive Secretary of the Union of Writers of the BSSR",
      },
      {
        date: "In 1945—1948",
        description: "Editor-in-chief of the literary magazine «Polymya»",
      },
      {
        date: "In 1948—1967",
        description: "Chairman of the Board of the Union of Writers of the BSSR",
      },
      {
        date: "In 1967—1980",
        description: "Editor-in-chief of the Belarusian Soviet Encyclopedia",
      },
    ],
    works: [
      {
        date: "In 1930",
        description: "Collection of poems «Years like a storm»",
      },
      {
        date: "In 1931",
        description: "Story «Kalandry»",
      },
      {
        date: "In 1932",
        description: "Collection of poems «Poetry»",
      },
      {
        date: "In 1934",
        description: "Collection of poems «So youth began»",
      },
      {
        date: "In 1935",
        description: "Collection of poems «Hero's arrival»",
      },
      {
        date: "In 1937",
        description: "Collection of poems «Homeland spring»",
      },
      {
        date: "In 1940",
        description: "Collection of poems «Poems»",
      },
      {
        date: "In 1946",
        description: "Collection of poems «At home»",
      },
      {
        date: "In 1950",
        description: "Collection of poems «Sunny days»",
      },
      {
        date: "In 1954",
        description: "Collection of poems «Firm steps»",
      },
      {
        date: "In 1957",
        description: "Novel «When rivers merge»",
      },
      {
        date: "In 1960",
        description: "Collection of poems «Far from home»",
      },
      {
        date: "In 1967",
        description: "Poem «Always with Lenin»",
      },
      {
        date: "In 1972",
        description: "Collection of poems «You are welcome»",
      },
      {
        date: "In 1974",
        description: "Storybook «Together with the Commissioner»",
      },
      {
        date: "In 1982",
        description: "Collection of poems «Soviet man»",
      },
    ],
    gallery: [
      {
        link:
          "https://www.nlb.by/upload/prod/UNESCO/spisok/unesco-10-nlb-dates-Brouka.jpg",
        path: "локальный путь...",
      },
      {
        link:
          "https://minsk950.belta.by/images/tild3539-3432-4465-b662-643333386235__noroot.jpg",
        path: "локальный путь...",
      },
      {
        link: "https://www.sb.by/upload/iblock/062/06205d4575f30d422bec59a54d993de5.jpg",
        path: "локальный путь...",
      },
      {
        link: "https://places.by/wp-content/uploads/2017/08/Pyatrus-Brouka-600x428.jpg",
        path: "локальный путь...",
      },
      {
        link:
          "https://places.by/wp-content/uploads/2017/08/Mogila-Petrusya-Brovki.jpg",
        path: "локальный путь...",
      },
    ],
    video: {
      youtubeId: "7xHGTr4EbK4",
      startTime: 28,
    },
  },
  {
    id: 5,
    name: "Arkadi",
    surname: "Kuleshov",
    fullName: "Arkadi Kuleshov",
    photo: {
      link: "https://coollib.net/sites/default/files/Arkadiy-Kuleshov.jpg",
      path: "*локальный путь на проекте - если будет надо*",
    },
    description:
      "Belorussian Soviet poet and translator, screenwriter",
    birth: {
      date: "January 24, 1914",
      description:
        "Born in the village of Samotevichi (now Kostyukovichsky district of the Mogilev region, Belarus)",
      location: {
        name: "Village of Samotevichi",
        lat: 53.210446,
        lng: 31.830949,
        zoom: 6,
      },
    },
    death: {
      date: "February 4, 1978",
      description: "He was buried in Minsk at the Eastern cemetery",
      location: {
        name: "Minsk",
        lat: 53.89037067092244,
        lng: 27.560757392280152,
        zoom: 6,
      },
    },
    biography: [
      {
        date: "In 1918—1924",
        description:
          "Worked as a clerk and bookkeeper",
      },
      {
        date: "In 1928",
        description:
          "After graduating from the Samotevich seven-year school, he entered the Mstislavsky Pedagogical College",
      },
      {
        date: "In 1930—1933",
        description:
          "He moved to Minsk, where he continued his studies at the literary faculty of the Minsk Pedagogical Institute",
      },
      {
        date: "In 1941-1942",
        description:
          "He joined the ranks of the Red Army. Near Novgorod he graduated from the military-political school and was sent to the army newspaper «Banner of Soviets»",
      },
      {
        date: "In 1943-1944",
        description:
          "He served in the Belarusian headquarters of the partisan movement",
      },
      {
        date: "In 1945—1946",
        description: "He worked as the editor-in-chief of the newspaper «Literature and mastastva»",
      },
      {
        date: "In 1946—1958",
        description: "Head of Scenario Department",
      },
      {
        date: "In 1958—1967",
        description: "Editor-in-chief of the «Belarusfilm» film studio",
      },
    ],
    works: [
      {
        date: "In 1931",
        description: "Poem «Resentment»",
      },
      {
        date: "In 1933",
        description: "Poem «Ammonal»",
      },
      {
        date: "In 1935",
        description: "Poem «Hunchback»",
      },
      {
        date: "In 1938",
        description: "Collection of poems «We live on the border»",
      },
      {
        date: "In 1940",
        description: "Collection of poems «In green oak grove»",
      },
      {
        date: "In 1941",
        description: "Poem «Baranov Vasily»",
      },
      {
        date: "In 1943",
        description: "Collection of poems «Brigade banner»",
      },
      {
        date: "In 1944",
        description: "Poem «House number 24»",
      },
      {
        date: "In 1945",
        description: "Poem «The Adventures of Dulcimer»",
      },
      {
        date: "In 1946",
        description: "Collection of poems «Poems»",
      },
      {
        date: "In 1949",
        description: "Poem «Simple people»",
      },
      {
        date: "In 1949",
        description: "Collection of poems «The communists»",
      },
      {
        date: "In 1954",
        description: "Collection of poems «Borders»",
      },
      {
        date: "In 1972",
        description: "Poem «Far to the ocean»",
      },
      {
        date: "In 1975",
        description: "Poem «Hamutius»",
      },
      {
        date: "In 1976",
        description: "Collection of poems «Speed»",
      },
    ],
    gallery: [
      {
        link:
          "https://forum.vgd.ru/file.php?fid=403275&key=2069824477",
        path: "локальный путь...",
      },
      {
        link:
          "https://upload.wikimedia.org/wikipedia/commons/f/f8/Stamps_of_Belarus_2014_Arkad%C5%BA_Kulia%C5%A1o%C7%94.jpg",
        path: "локальный путь...",
      },
      {
        link: "https://minsknews.by/wp-content/uploads/2019/07/1-44.jpg",
        path: "локальный путь...",
      },
      {
        link: "https://www.places.by/wp-content/uploads/2017/08/kuliaszou135.jpg",
        path: "локальный путь...",
      },
      {
        link:
          "https://zviazda.by/sites/default/files/field/image/21-17_kopiya_6.jpg",
        path: "локальный путь...",
      },
    ],
    video: {
      youtubeId: "-htllJNjITg",
      startTime: 1,
    },
  },
  {
    id: 6,
    name: "Maksim",
    surname: "Tank",
    fullName: "Maksim Tank",
    photo: {
      link: "https://gazetaby.com/uploads/2017/09/tank_18-1.jpg",
      path: "*локальный путь на проекте - если будет надо*",
    },
    description:
      "Belorussian Soviet poet, translator, statesman",
    birth: {
      date: "September 4, 1912",
      description:
        "Born in the village of Pilkovschina (now Myadel district of the Minsk region, Belarus)",
      location: {
        name: "Myadel",
        lat: 54.875560,
        lng: 26.938610,
        zoom: 6,
      },
    },
    death: {
      date: "February 4, 1978",
      description: "ПBuried in his native village",
      location: {
        name: "v.Noviki",
        lat: 54.787294,
        lng: 27.096704,
        zoom: 6,
      },
    },
    biography: [
      {
        date: "In 1914",
        description:
          "The family of the poet is forced to emigrate to Moscow because of the First World War",
      },
      {
        date: "In 1922",
        description:
          "Due to severe hunger, he leaves Moscow with his family and returns to his native village to grow his own bread",
      },
      {
        date: "In 1923-1926",
        description:
          "He entered an elementary Polish school, and then to a Russian private gymnasium",
      },
      {
        date: "In 1928",
        description:
          "He was transferred to the Belarusian gymnasium in Radoshkovichi",
      },
      {
        date: "In 1929",
        description:
          "And for participating in a strike organized by gymnasium students, he was expelled. After that, he studied for a short time at the Vilnius Belarusian gymnasium, but was also expelled for freethinking and disobedience",
      },
      {
        date: "April 7, 1932",
        description:
          "Published in the newspaper «Belaruskiy zhytsso» his poem «Zashtraykavalі giganty-kominy» under the pseudonym Maxim Tank",
      },
      {
        date: "April 27, 1932",
        description: "For the underground communist activities of the Tank, Lukishka is arrested and sent to Vilna prison. A month later he goes free",
      },
      {
        date: "Autumn 1932",
        description: "Crosses the Soviet-Polish border and heads to Minsk. Here he is arrested and kept in custody for two weeks. They conduct interrogations, conduct “friendly conversations”. After this, the young poet is deported back",
      },
      {
        date: "In 1945-1948",
        description: "Editor of the satirical magazine «Vozhyk»",
      },
      {
        date: "In 1948-1966",
        description: "Editor-in-chief of the literary magazine «Polymya»",
      },
      {
        date: "In 1966-1971",
        description: "First Secretary of the Board in the Union of Writers of the BSSR",
      },
      {
        date: "In 1971-1990",
        description: "Chairman of the Board in the Union of Writers of the BSSR",
      },
    ],
    works: [
      {
        date: "In 1936",
        description: "Collection of poems «In stages»",
      },
      {
        date: "In 1938",
        description: "Collection of poems «Under the mast»",
      },
      {
        date: "In 1945",
        description: "Collection of poems «Sharpen weapons»",
      },
      {
        date: "In 1948",
        description: "Collection of poems «To know»",
      },
      {
        date: "In 1954",
        description: "Collection of poems «On the way»",
      },
      {
        date: "In 1955",
        description: "Fairy tale «Horse and lion»",
      },
      {
        date: "In 1957",
        description: "Collection of poems «Lightning trail»",
      },
      {
        date: "In 1963",
        description: "Collection of poems «Lyrics»",
      },
      {
        date: "In 1970",
        description: "Fairy tale «Glowworm»",
      },
      {
        date: "In 1972",
        description: "Collection of poems «Crane wedge»",
      },
      {
        date: "In 1984",
        description: "Collection of poems «At my table»",
      },
      {
        date: "In 1988",
        description: "Collection of poems «Road and bread»",
      },
      {
        date: "In 1990",
        description: "Collection of poems «Listen, spring is coming»",
      },
      {
        date: "In 1994",
        description: "Collection of poems «My ark»",
      },
      {
        date: "In 1937",
        description: "Collection of poems «Narach»",
      },
    ],
    gallery: [
      {
        link:
          "https://gazetaby.com/uploads/2017/09/tank_18-2.jpg",
        path: "локальный путь...",
      },
      {
        link:
          "https://gazetaby.com/uploads/2017/09/tank_18-7.jpg",
        path: "локальный путь...",
      },
      {
        link: "https://www.sb.by/upload/medialibrary/42d/42d5281c105c7d8664131043599ee11f.jpg",
        path: "локальный путь...",
      },
      {
        link: "https://zviazda.by/sites/default/files/field/image/7_38.jpg",
        path: "локальный путь...",
      },
      {
        link:
          "https://www.belta.by/uploads/lotus/news/000027_25D7C6C9F9FEB3234325819C0026C82D_521788.jpg",
        path: "локальный путь...",
      },
    ],
    video: {
      youtubeId: "40Uhtifsk7s",
      startTime: 21,
    },
  },
]
