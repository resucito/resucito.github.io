const songs = [
	{
		slug: 'a-la-cena-del-cordero',
		spanish_title: 'A la cena del cordero',
		english_title: ''
	},
	{
		slug: 'a-la-victima-pascual',
		spanish_title: 'A la víctima pascual',
		english_title: 'To The Paschal Victim'
	},
	{
		slug: 'a-nadie-demos-ocasion-de-tropiezo',
		spanish_title: 'A nadie demos ocasión de tropiezo',
		english_title: ''
	},
	{
		slug: 'a-ti-levanto-mis-ojos',
		spanish_title: 'A ti levanto mis ojos',
		english_title: 'To You I Lift Up My Eyes (Ps. 123)'
	},
	{
		slug: 'a-ti-senor-en-mi-clamor-imploro',
		spanish_title: 'A ti, Señor, en mi clamor imploro',
		english_title: ''
	},
	{
		slug: 'a-ti-senor-levanto-mi-alma',
		spanish_title: 'A ti, Señor, levanto mi alma',
		english_title: 'To You, O Lord, I Lift Up My Soul (Ps. 25)'
	},
	{
		slug: 'a-ti-senor-se-debe-la-alabanza-en-sion',
		spanish_title: 'A ti, Señor, se debe la alabanza en Sión',
		english_title: ''
	},
	{
		slug: 'abba-padre',
		spanish_title: 'Abbá Padre',
		english_title: 'Abba Father'
	},
	{
		slug: 'abraham',
		spanish_title: 'Abraham',
		english_title: 'Abraham'
	},
	{
		slug: 'aclamad-al-senor',
		spanish_title: 'Aclamad al Señor',
		english_title: 'Acclaim The Lord (Ps. 100)'
	},
	{
		slug: 'adonde-te-escondiste-amado',
		spanish_title: 'Adónde te escondiste amado',
		english_title: ''
	},
	{
		slug: 'al-despertar',
		spanish_title: 'Al despertar',
		english_title: 'When I Awake (Ps. 17)'
	},
	{
		slug: 'alabad-al-senor-en-el-cielo',
		spanish_title: 'Alabad al Señor en el cielo',
		english_title: ''
	},
	{
		slug: 'alegria-ha-nacido-el-salvador',
		spanish_title: 'Alegría, ha nacido el salvador',
		english_title: ''
	},
	{
		slug: 'aleluya-interleccional',
		spanish_title: 'Aleluya interleccional',
		english_title: 'Alleluia In Lectionary (Melody 1,2,3)'
	},
	{
		slug: 'Aleluya pascual',
		spanish_title: 'Aleluya pascual',
		english_title: 'Easter Alleluia'
	},
	{
		slug: 'Aleluya, alabad al Señor',
		spanish_title: 'Aleluya, alabad al Señor',
		english_title: ''
	},
	{
		slug: 'aleluya-bendecid-al-senor',
		spanish_title: 'Aleluya, bendecid al Señor',
		english_title: ''
	},
	{
		slug: 'aleluya-ya-llego-el-reino',
		spanish_title: 'Aleluya, ya llegó el reino',
		english_title: ''
	},
	{
		slug: 'alzaos-puertas',
		spanish_title: 'Alzaos puertas',
		english_title: 'Gates Lift Up Your Heads (Ps. 24)'
	},
	{
		slug: 'amen-amen-amen',
		spanish_title: 'Amén, amén, amén',
		english_title: 'Amen, Amen, Amen (Rev. 7, 12-14)'
	},
	{
		slug: 'amo-al-senor',
		spanish_title: 'Amo al Señor',
		english_title: 'I Love The Lord (Ps. 116)'
	},
	{
		slug: 'antifona-versiculo-antes-del-evangelio',
		spanish_title: 'Antífona - versículo antes del Evangelio',
		english_title: ''
	},
	{
		slug: 'aquedah',
		spanish_title: 'Aquedah',
		english_title: 'Akeda'
	},
	{
		slug: 'asi-habla-el-amen',
		spanish_title: 'Así habla el amén',
		english_title: 'Thus Speaks The Amen'
	},
	{
		slug: 'ave-maria-i',
		spanish_title: 'Ave María I',
		english_title: ''
	},
	{
		slug: 'ave-maria-ii',
		spanish_title: 'Ave María II',
		english_title: ''
	},
	{
		slug: 'babilonia-criminal',
		spanish_title: 'Babilonia criminal',
		english_title: 'Beside The Rivers Of Babylon (Ps. 137)'
	},
	{
		slug: 'balaam',
		spanish_title: 'Balaam',
		english_title: 'Song Of Balaam'
	},
	{
		slug: 'bendecire-al-senor-en-todo-tiempo',
		spanish_title: 'Bendeciré al Señor en todo tiempo',
		english_title: 'I Will Bless The Lord At All Times (1986) (Ps. 34)'
	},
	{
		slug: 'bendice-alma-mia-a-yahveh',
		spanish_title: 'Bendice, alma mía, a Yahveh',
		english_title: 'Bless The Lord My Soul (Ps. 103)'
	},
	{
		slug: 'bendicion-del-agua',
		spanish_title: 'Bendición del agua',
		english_title: 'Blessing Of The Water Of The Baptismal Font'
	},
	{
		slug: 'bendicion-penitencial',
		spanish_title: 'Bendición penitencial',
		english_title: 'Blessing For The Penitential Celebration'
	},
	{
		slug: 'bendita-eres-tu-maria',
		spanish_title: 'Bendita eres tú, María',
		english_title: 'Blessed Mary'
	},
	{
		slug: 'bendito-eres-senor',
		spanish_title: 'Bendito eres, Señor',
		english_title: 'Blessed Are You, O Lord'
	},
	{
		slug: 'bendito-sea-dios',
		spanish_title: 'Bendito sea Dios',
		english_title: 'Blessed Be God'
	},
	{
		slug: 'benedictus',
		spanish_title: 'Benedictus',
		english_title: 'Blessed Be The Lord, The God Of Israel'
	},
	{
		slug: 'cantad-a-dios',
		spanish_title: 'Cantad a Dios',
		english_title: ''
	},
	{
		slug: 'cantad-al-senor',
		spanish_title: 'Cantad al Señor',
		english_title: 'Praise The Lord All Peoples Of The Earth (Ps. 117)'
	},
	{
		slug: 'cantico-de-los-tres-jovenes',
		spanish_title: 'Cántico de los tres jóvenes',
		english_title: 'Canticle Of The Three Young Men In The Furnace'
	},
	{
		slug: 'canto-de-moises',
		spanish_title: 'Canto de Moisés',
		english_title: 'Song Of Moses'
	},
	{
		slug: 'caritas-christi-urget-nos',
		spanish_title: 'Caritas Christi urget nos',
		english_title: 'Caritas Christi'
	},
	{
		slug: 'como-condenados-a-muerte',
		spanish_title: 'Como condenados a muerte',
		english_title: 'As Men Condemned To Death'
	},
	{
		slug: 'como-destila-la-miel',
		spanish_title: 'Como destila la miel',
		english_title: 'As Honey Drips (Ode XL Of Solomon)'
	},
	{
		slug: 'como-el-impulso-que-siente-la-ira',
		spanish_title: 'Como el impulso que siente la ira',
		english_title: ''
	},
	{
		slug: 'como-es-maravilloso',
		spanish_title: 'Cómo es maravilloso',
		english_title: 'How Good It Is (Ps. 133)'
	},
	{
		slug: 'como-la-cierva',
		spanish_title: 'Como la cierva',
		english_title: 'Like A Doe Yearns (Ps. 42-43)'
	},
	{
		slug: 'como-lirio-entres-los-cardos',
		spanish_title: 'Como lirio entres los cardos',
		english_title: ''
	},
	{
		slug: 'consolad-a-mi-pueblo',
		spanish_title: 'Consolad a mi pueblo',
		english_title: 'Console My People'
	},
	{
		slug: 'cordero-de-dios',
		spanish_title: 'Cordero de Dios',
		english_title: 'Lamb Of God'
	},
	{
		slug: 'credo',
		spanish_title: 'Credo',
		english_title: ''
	},
	{
		slug: 'cristo-es-la-luz',
		spanish_title: 'Cristo es la luz',
		english_title: ''
	},
	{
		slug: 'cuando-dormia',
		spanish_title: 'Cuando dormía',
		english_title: 'While I Was Sleeping'
	},
	{
		slug: 'cuando-el-senor',
		spanish_title: 'Cuando el Señor',
		english_title: 'When The Lord (Ps. 126)'
	},
	{
		slug: 'cuando-israel-salio-de-egipto',
		spanish_title: 'Cuando Israel salío de Egipto',
		english_title: 'When Israel Came Out Of Egypt (Ps. 114)'
	},
	{
		slug: 'dayenu',
		spanish_title: 'Dayenú',
		english_title: 'Dayenu'
	},
	{
		slug: 'de-profundis',
		spanish_title: 'De Profundís',
		english_title: 'De Profundis (Ps. 130) (From The Depths To You I Cry)'
	},
	{
		slug: 'debora',
		spanish_title: 'Débora',
		english_title: ''
	},
	{
		slug: 'decidle-a-los-de-corazon-cansado',
		spanish_title: 'Decidle a los de corazón cansado',
		english_title: 'Tell All The Faint-Hearted'
	},
	{
		slug: 'delante-de-los-angeles',
		spanish_title: 'Delante de los ángeles',
		english_title: 'Before The Angels (Ps. 138)'
	},
	{
		slug: 'dia-de-reposo',
		spanish_title: 'Día de reposo',
		english_title: 'Day Of Rest'
	},
	{
		slug: 'dice-el-senor-a-mi-senor',
		spanish_title: 'Dice el Señor a mi Señor',
		english_title: 'Says The Lord To My Lord (Ps. 110)'
	},
	{
		slug: 'dichoso-el-hombre',
		spanish_title: 'Dichoso el hombre',
		english_title: 'Happy The Man (Ps. 1)'
	},
	{
		slug: 'el-combate-escatologico',
		spanish_title: 'El combate escatológico',
		english_title: ''
	},
	{
		slug: 'el-espiritu-del-senor-esta-sobre-mi',
		spanish_title: 'El Espíritu del Señor está sobre mí',
		english_title: 'The Spirit Of The Lord Is Upon Me'
	},
	{
		slug: 'el-jacal-de-los-pastores',
		spanish_title: 'El jacal de los pastores',
		english_title: 'Let Him Kiss Me'
	},
	{
		slug: 'el-lagarero',
		spanish_title: 'El lagarero',
		english_title: 'The Winepresser'
	},
	{
		slug: 'el-mismo-dios',
		spanish_title: 'El mismo Dios',
		english_title: 'The Same God'
	},
	{
		slug: 'el-necio-piensa-que-dios-no-existe',
		spanish_title: 'El necio piensa que Dios no existe',
		english_title: 'The Foolish One Thinks There Is No God (Ps. 14)'
	},
	{
		slug: 'el-pueblo-que-caminaba-en-las-tinieblas',
		spanish_title: 'El pueblo que caminaba en las tinieblas',
		english_title: 'The People Who Walked In Darkness'
	},
	{
		slug: 'el-sembrador',
		spanish_title: 'El sembrador',
		english_title: 'The Sower'
	},
	{
		slug: 'el-senor-anuncia-una-noticia',
		spanish_title: 'El Señor anuncia una noticia',
		english_title: 'The Lord Announces A Good News (Ps. 68)'
	},
	{
		slug: 'el-senor-es-mi-pastor',
		spanish_title: 'El Señor es mi pastor',
		english_title: 'The Lord Is My Shepherd (Ps. 23)'
	},
	{
		slug: 'el-senor-me-ha-dado',
		spanish_title: 'El Señor me ha dado',
		english_title: 'The Lord Has Given Me (Song Of The Servant III)'
	},
	{
		slug: 'eli-eli-lama-sabactani',
		spanish_title: 'Elí, Elí, lamá sabactaní',
		english_title: 'Eli, Eli, Lama Sabactani? (Ps. 22)'
	},
	{
		slug: 'en-medio-de-aquel-gentio',
		spanish_title: 'En medio de aquel gentío',
		english_title: 'In The Midst Of A Great Crowd'
	},
	{
		slug: 'en-una-noche-oscura',
		spanish_title: 'En una noche oscura',
		english_title: 'Upon A Dark Night'
	},
	{
		slug: 'eres-digno-de-tomar-el-libro',
		spanish_title: 'Eres digno de tomar el libro',
		english_title: 'You Are Worthy, Slaughtered Lamb'
	},
	{
		slug: 'eres-hermoso',
		spanish_title: 'Eres hermoso',
		english_title: 'You Are Beautiful (Ps. 45)'
	},
	{
		slug: 'escondeme-en-lo-oculto-de-tu-tienda',
		spanish_title: 'Escóndeme en lo oculto de tu tienda',
		english_title: ''
	},
	{
		slug: 'escuchad-islas-lejanas',
		spanish_title: 'Escuchad islas lejanas',
		english_title: ''
	},
	{
		slug: 'estan-rotas-mis-ataduras',
		spanish_title: 'Están rotas mis ataduras',
		english_title: 'I Shall Gain My Kingdom'
	},
	{
		slug: 'este-es-el-dia-en-que-actuo-el-senor',
		spanish_title: 'Éste es el día en que actuó el Señor',
		english_title: ''
	},
	{
		slug: 'este-es-el-mandamiento-mio',
		spanish_title: 'Este es el mandamiento mío',
		english_title: 'This Is My Commandment'
	},
	{
		slug: 'evenu-shalom-alejem',
		spanish_title: 'Evenu shalom alejem',
		english_title: 'Evenu Shalom Alejem'
	},
	{
		slug: 'extiendo-mis-manos',
		spanish_title: 'Extiendo mis manos',
		english_title: 'I Stretched Out My Hands (XXVII Ode Of Solomon)'
	},
	{
		slug: 'exultad-justos-en-el-senor',
		spanish_title: 'Exultad, justos, en el Señor',
		english_title: 'Exult, You Just In The Lord (Ps. 33)'
	},
	{
		slug: 'felicidad-para-el-hombre',
		spanish_title: 'Felicidad para el hombre',
		english_title: 'Happiness For The Man (Ps. 128)'
	},
	{
		slug: 'gloria-a-dios-en-lo-alto-del-cielo',
		spanish_title: 'Gloria a Dios en lo alto del cielo',
		english_title: 'Glory To God'
	},
	{
		slug: 'gracias-a-yahveh',
		spanish_title: 'Gracias a Yahveh',
		english_title: 'Give Thanks To The Lord (Ps. 136)'
	},
	{
		slug: 'gritad-jubilosos',
		spanish_title: 'Gritad jubilosos',
		english_title: 'Shout For Joy'
	},
	{
		slug: 'hacia-ti-morada-santa',
		spanish_title: 'Hacia ti morada santa',
		english_title: 'Towards You Holy City'
	},
	{
		slug: 'hasta-cuando',
		spanish_title: 'Hasta cuándo',
		english_title: 'How Much Longer (Ps. 13)'
	},
	{
		slug: 'he-aqui-mi-siervo',
		spanish_title: 'He aquí mi siervo',
		english_title: ''
	},
	{
		slug: 'he-aqui-que-nuestro-espejo-es-el-senor',
		spanish_title: 'He aquí que nuestro espejo es el Señor',
		english_title: 'Behold Our Mirror (Ode XIII Of Solomon)'
	},
	{
		slug: 'he-aqui-que-vengo-presto',
		spanish_title: 'He aquí que vengo presto',
		english_title: "Behold I'm Coming Soon"
	},
	{
		slug: 'he-esperado-en-el-senor',
		spanish_title: 'He esperado en el Señor',
		english_title: 'I Hoped, I Hoped In The Lord (Ps. 40)'
	},
	{
		slug: 'hermosa-eres-amiga-mia',
		spanish_title: 'Hermosa eres, amiga mía',
		english_title: 'You Are Beautiful, My Beloved, As Tirzah'
	},
	{
		slug: 'hijas-de-jerusalen',
		spanish_title: 'Hijas de Jerusalén',
		english_title: 'Daughters Of Jerusalem (Funeral March)'
	},
	{
		slug: 'himno-a-cristo-luz',
		spanish_title: 'Himno a Cristo luz',
		english_title: ''
	},
	{
		slug: 'himno-a-la-caridad',
		spanish_title: 'Himno a la caridad',
		english_title: 'Hymn To Charity'
	},
	{
		slug: 'himno-a-la-cruz-gloriosa',
		spanish_title: 'Himno a la cruz gloriosa',
		english_title: 'Hymn To The Glorious Cross'
	},
	{
		slug: 'himno-a-la-kenosis',
		spanish_title: 'Himno a la kenosis',
		english_title: 'Hymn To The Kenosis'
	},
	{
		slug: 'himno-de-adviento',
		spanish_title: 'Himno de Adviento',
		english_title: 'Hymn Of Advent (A Clear Voice)'
	},
	{
		slug: 'himno-de-la-ascension',
		spanish_title: 'Himno de la Ascensión',
		english_title: ''
	},
	{
		slug: 'himno-de-pascua',
		spanish_title: 'Himno de Pascua',
		english_title: 'Hymn Of Passover (The Dawn Tinges In Purple The Sky)'
	},
	{
		slug: 'huye-amado-mio',
		spanish_title: 'Huye, amado mío',
		english_title: 'Flee My Beloved'
	},
	{
		slug: 'id-y-anunciad-a-mis-hermanos',
		spanish_title: 'Id y anunciad a mis hermanos',
		english_title: 'Go And Announce To My Brothers (Hebrew And Arabic Versions)'
	},
	{
		slug: 'improperios',
		spanish_title: 'Improperios',
		english_title: ''
	},
	{
		slug: 'jacob',
		spanish_title: 'Jacob',
		english_title: 'Jacob'
	},
	{
		slug: 'jerusalen-reconstruida',
		spanish_title: 'Jerusalén reconstruida',
		english_title: 'Jerusalem Rebuilt Again (Ps. 122)'
	},
	{
		slug: 'jesus-recorria-todas-las-ciudades',
		spanish_title: 'Jesús recorría todas las ciudades',
		english_title: 'Jesus Went Through All The Towns'
	},
	{
		slug: 'la-cordera-de-dios',
		spanish_title: 'La cordera de Dios',
		english_title: 'She-Lamb Of God'
	},
	{
		slug: 'la-paloma-volo',
		spanish_title: 'La paloma voló',
		english_title: 'The Dove Hovered Over (Ode XXIV Of Solomon)'
	},
	{
		slug: 'la-marcha-es-dura',
		spanish_title: 'La marcha es dura',
		english_title: 'The March Is Hard'
	},
	{
		slug: 'la-salve',
		spanish_title: 'La Salve',
		english_title: ''
	},
	{
		slug: 'la-siega-de-las-naciones',
		spanish_title: 'La siega de las naciones',
		english_title: ''
	},
	{
		slug: 'la-voz-de-mi-amado',
		spanish_title: 'La voz de mi amado',
		english_title: 'The Voice Of My Beloved'
	},
	{
		slug: 'las-armas-de-la-luz',
		spanish_title: 'Las armas de la luz',
		english_title: 'Clothe Youselves In The Armor Of God'
	},
	{
		slug: 'letanias-de-los-santos',
		spanish_title: 'Letanías de los santos',
		english_title: ''
	},
	{
		slug: 'letanias-penitenciales-i',
		spanish_title: 'Letanías penitenciales I',
		english_title: ''
	},
	{
		slug: 'letanias-penitenciales-ii',
		spanish_title: 'Letanías penitenciales II',
		english_title: ''
	},
	{
		slug: 'levanto-mis-ojos-a-los-montes',
		spanish_title: 'Levanto mis ojos a los montes',
		english_title: 'I Lift Up My Eyes To The Mountains (Ps. 121)'
	},
	{
		slug: 'llegue-hasta-tu-presencia-mi-clamor',
		spanish_title: 'Llegue hasta tu presencia mi clamor',
		english_title: ''
	},
	{
		slug: 'llevame-al-cielo',
		spanish_title: 'Llévame al cielo',
		english_title: 'Take Me To Heaven'
	},
	{
		slug: 'magnificat',
		spanish_title: 'Magníficat',
		english_title: 'Magnificat'
	},
	{
		slug: 'maria-casa-de-bendicion',
		spanish_title: 'María, casa de bendición',
		english_title: 'Mary, House Of Benediction'
	},
	{
		slug: 'maria-de-jasna-goera',
		spanish_title: 'María de Jasna Göra',
		english_title: 'Maria Di Jasna Góra'
	},
	{
		slug: 'maria-madre-de-la-iglesia',
		spanish_title: 'María, madre de la Iglesia',
		english_title: 'Mary, Mother Of The Church'
	},
	{
		slug: 'maria-madre-del-camino-ardiente',
		spanish_title: 'María, madre del camino ardiente',
		english_title: 'Mary, Mother Of The Burning Way'
	},
	{
		slug: 'maria-paloma-incorrupta',
		spanish_title: 'María, paloma incorrupta',
		english_title: 'Hail, O Mary, Uncorrupt Dove'
	},
	{
		slug: 'maria-pequena-maria',
		spanish_title: 'María, pequeña María',
		english_title: 'Mary, Little Mary (Hymn To The Virgin Mary)'
	},
	{
		slug: 'me-ensenaras-el-camino-de-la-vida',
		spanish_title: 'Me enseñarás el camino de la vida',
		english_title: 'You Will Show Me The Path Of Life (Ps. 16)'
	},
	{
		slug: 'me-has-seducido-senor',
		spanish_title: 'Me has seducido, Señor',
		english_title: 'You Have Seduced Me, O Lord'
	},
	{
		slug: 'mirad-que-estupendo',
		spanish_title: 'Mirad qué estupendo',
		english_title: 'Look How It Is Good (Ps. 133)'
	},
	{
		slug: 'me-robaste-el-corazon',
		spanish_title: 'Me robaste el corazón',
		english_title: 'You Stole My Heart'
	},
	{
		slug: 'misericordia-mia-misericordia',
		spanish_title: 'Misericordia mía, misericordia',
		english_title: 'Have Mercy On Me, Have Mercy (Ps. 51)'
	},
	{
		slug: 'mucho-me-han-perseguido',
		spanish_title: 'Mucho me han perseguido',
		english_title: 'Much Have They Persecuted Me (Ps. 129)'
	},
	{
		slug: 'ninguno-puede-servir-a-dos-senores',
		spanish_title: 'Ninguno puede servir a dos señores',
		english_title: 'No One Can Serve Two Masters'
	},
	{
		slug: 'no-esta-aqui-resucito',
		spanish_title: 'No está aquí, resucitó',
		english_title: 'He Is Not Here, He Is Risen'
	},
	{
		slug: 'no-hay-en-el-parecer',
		spanish_title: 'No hay en él parecer',
		english_title: 'In Him There Is No Beauty (Song Of The Servant IV)'
	},
	{
		slug: 'no-resistais-al-mal',
		spanish_title: 'No resistais al mal',
		english_title: 'Do Not Resist Evil'
	},
	{
		slug: 'no-sufras-por-los-malvados',
		spanish_title: 'No sufras por los malvados',
		english_title: 'Do Not Get Angry Because Of The Wicked (Ps. 37)'
	},
	{
		slug: 'noli-me-tangere',
		spanish_title: 'Noli me tangere',
		english_title: 'Noli Me Tangere'
	},
	{
		slug: 'oh-cielos-lloved-de-lo-alto',
		spanish_title: 'Oh cielos, lloved de lo alto',
		english_title: 'O Heavens, Rain From Above'
	},
	{
		slug: 'oh-dios-por-tu-nombre-salvame',
		spanish_title: 'Oh Dios, por tu nombre sálvame',
		english_title: 'O God, By Your Name Save Me (Ps. 54)'
	},
	{
		slug: 'oh-dios-tu-eres-mi-dios',
		spanish_title: 'Oh Dios, tú eres mi Dios',
		english_title: 'O God, You Are My God (Ps. 63)'
	},
	{
		slug: 'oh-jesus-amor-mio',
		spanish_title: 'Oh Jesús, amor mío',
		english_title: 'O Jesus, My Love'
	},
	{
		slug: 'oh-muerte-donde-esta-tu-victoria',
		spanish_title: 'Oh muerte, ¿dónde está tu victoria?',
		english_title: 'Death Is Swallowed Up In Victory'
	},
	{
		slug: 'oh-senor-mi-corazon-ya-no-es-ambicioso',
		spanish_title: 'Oh Señor, mi corazón ya no es ambicioso',
		english_title: 'O Lord, My Heart Has No More Pretensions (Ps. 131)'
	},
	{
		slug: 'oh-senor-nuestro-dios',
		spanish_title: 'Oh Señor, nuestro Dios',
		english_title: 'O Lord, Our God (Ps. 8)'
	},
	{
		slug: 'os-tomare-de-entre-las-naciones',
		spanish_title: 'Os tomaré de entre las naciones',
		english_title: 'I Will Take You From The Peoples'
	},
	{
		slug: 'padre-nuestro',
		spanish_title: 'Padre nuestro',
		english_title: ''
	},
	{
		slug: 'pentecostes',
		spanish_title: 'Pentecostés',
		english_title: 'Pentecost'
	},
	{
		slug: 'plegaria-eucaristica-ii-modelo-i',
		spanish_title: 'Plegaria Eucarística II - Modelo I',
		english_title: ''
	},
	{
		slug: 'plegaria-eucaristica-ii-model-ii-1987',
		spanish_title: 'Plegaria Eucarística II - Model II (1987)',
		english_title: ''
	},
	{
		slug: 'plegaria-eucaristica-iv-1988',
		spanish_title: 'Plegaria Eucarística IV - (1988)',
		english_title: ''
	},
	{
		slug: 'por-el-amor-de-mis-amigos',
		spanish_title: 'Por el amor de mis amigos',
		english_title: 'Because Of My Brothers And Friends (Ps. 122)'
	},
	{
		slug: 'por-que-esta-noche-es-diferente',
		spanish_title: 'Por qué esta noche es diferente',
		english_title: 'What Is Different About This Night'
	},
	{
		slug: 'por-que-las-gentes-conjuran',
		spanish_title: 'Por qué las gentes conjuran',
		english_title: 'Why Do The Nations Conspire? (Ps. 2)'
	},
	{
		slug: 'porque-mi-yugo-es-suave',
		spanish_title: 'Porque mi yugo es suave',
		english_title: 'Because My Yoke Is Gentle'
	},
	{
		slug: 'prefacio-para-adviento-y-navidad',
		spanish_title: 'Prefacio para Adviento y Navidad',
		english_title: ''
	},
	{
		slug: 'prefacio-para-el-tiempo-pascual',
		spanish_title: 'Prefacio para el tiempo Pascual',
		english_title: ''
	},
	{
		slug: 'pregon-pascual',
		spanish_title: 'Pregón Pascual',
		english_title: 'Paschal Preconium (Exultet)'
	},
	{
		slug: 'que-amables-son-tus-moradas',
		spanish_title: 'Qué amables son tus moradas',
		english_title: 'How Lovely Are Your Dwelling Places (Ps. 84)'
	},
	{
		slug: 'que-estupendo-que-alegria',
		spanish_title: 'Qué estupendo, qué alegría',
		english_title: ''
	},
	{
		slug: 'quien-es-esta-que-sube-del-desierto',
		spanish_title: 'Quién es ésta que sube del desierto',
		english_title: ''
	},
	{
		slug: 'quien-nos-separara',
		spanish_title: 'Quién nos separará',
		english_title: 'Who Will Separate Us'
	},
	{
		slug: 'quero-andar',
		spanish_title: 'Quero andar',
		english_title: 'I Want To Go To Jerusalem'
	},
	{
		slug: 'quero-cantar',
		spanish_title: 'Quero cantar',
		english_title: 'I Want To Sing (Ps. 57)'
	},
	{
		slug: 'resucito',
		spanish_title: 'Resucitó',
		english_title: 'He Rose From Death'
	},
	{
		slug: 'salve-reina-de-los-cielos',
		spanish_title: 'Salve, reina de los cielos',
		english_title: 'Hail Queen Of Heavens'
	},
	{
		slug: 'salmodia-para-el-salmo-responsorial',
		spanish_title: 'Salmodia para el Salmo responsorial',
		english_title: ''
	},
	{
		slug: 'salmodia-para-las-oraciones-universales',
		spanish_title: 'Salmodia para las Oraciones universales',
		english_title: ''
	},
	{
		slug: 'santo-1982',
		spanish_title: 'Santo 1982',
		english_title: ''
	},
	{
		slug: 'santo-1988',
		spanish_title: 'Santo 1988',
		english_title: 'Holy, Holy Holy (Ordinary Time) (1988)'
	},
	{
		slug: 'santo-hebreo',
		spanish_title: 'Santo Hebreo',
		english_title: ''
	},
	{
		slug: 'santo-palestina-74',
		spanish_title: 'Santo Palestina 74',
		english_title: ''
	},
	{
		slug: 'santo-palomeras-65',
		spanish_title: 'Santo Palomeras 65',
		english_title: ''
	},
	{
		slug: 'santo-roma-77',
		spanish_title: 'Santo Roma 77',
		english_title: ''
	},
	{
		slug: 'se-encontraron-dos-angeles',
		spanish_title: 'Se encontraron dos ángeles',
		english_title: 'There Were Two Angels'
	},
	{
		slug: 'secuencia-del-corpus-christi',
		spanish_title: 'Secuencia del Corpus Christi',
		english_title: ''
	},
	{
		slug: 'senor-ayudame-a-no-dudar-de-ti',
		spanish_title: 'Señor, ayúdame a no dudar de ti',
		english_title: ''
	},
	{
		slug: 'senor-no-me-corrijas-en-tu-colera',
		spanish_title: 'Señor, no me corrijas en tu cólera',
		english_title: 'O Lord, Do Not Punish Me In Your Anger (Ps. 6)'
	},
	{
		slug: 'senor-tu-me-escrutas-y-conoces',
		spanish_title: 'Señor, tú me escrutas y conoces',
		english_title: ''
	},
	{
		slug: 'sermon-de-la-montana',
		spanish_title: 'Sermón de la montaña',
		english_title: 'The Sermon On The Mountain'
	},
	{
		slug: 'shema-israel',
		spanish_title: 'Shemá Israel',
		english_title: 'Shema Israel'
	},
	{
		slug: 'shlom-lej-mariam',
		spanish_title: 'Shlom-lej Mariam',
		english_title: 'Shlom Lekh Mariam'
	},
	{
		slug: 'si-el-senor-no-construye-la-casa',
		spanish_title: 'Si el Señor no construye la casa',
		english_title: 'If The Lord Does Not Build The House (Ps. 127)'
	},
	{
		slug: 'si-hoy-escuchais-su-voz',
		spanish_title: 'Si hoy escucháis su voz',
		english_title: 'If Today You Listen To His Voice (Ps. 95)'
	},
	{
		slug: 'si-me-he-refugiado-en-el-senor',
		spanish_title: 'Si me he refugiado en el Señor',
		english_title: 'If In The Lord I Have Taken Refuge (Ps. 11)'
	},
	{
		slug: 'sientate-solitario-y-silencioso',
		spanish_title: 'Siéntate solitario y silencioso',
		english_title: 'Sit Down Alone And In Silence'
	},
	{
		slug: 'sion-madre-de-todos-los-pueblos',
		spanish_title: 'Sión, madre de todos los pueblos',
		english_title: ''
	},
	{
		slug: 'sola-a-solo',
		spanish_title: 'Sola a Solo',
		english_title: 'Lone To Alone'
	},
	{
		slug: 'stabat-mater-dolorosa',
		spanish_title: 'Stabat mater dolorosa',
		english_title: 'Stabat Mater'
	},
	{
		slug: 'te-deum',
		spanish_title: 'Te Deum',
		english_title: 'Te Deum'
	},
	{
		slug: 'te-estoy-llamando-senor',
		spanish_title: 'Te estoy llamando, Señor',
		english_title: 'I Call Upon You (Ps. 141)'
	},
	{
		slug: 'te-he-manifestado-mi-pecado',
		spanish_title: 'Te he manifestado mi pecado',
		english_title: 'I Manifested To You My Sin (Ps. 32)'
	},
	{
		slug: 'tu-eres-mi-esperanza-senor',
		spanish_title: 'Tú eres mi esperanza, Señor',
		english_title: 'You Are My Hope, O Lord (XXIX Ode Of Solomon)'
	},
	{
		slug: 'tu-has-cubierto-de-vergueenza-la-muerte',
		spanish_title: 'Tú has cubierto de vergüenza la muerte',
		english_title: ''
	},
	{
		slug: 'tu-que-eres-fiel',
		spanish_title: 'Tú que eres fiel',
		english_title: 'You Who Are Faithful (Ps. 143)'
	},
	{
		slug: 'un-retono-brota-del-tronco-de-jese',
		spanish_title: 'Un retoño brota del tronco de Jesé',
		english_title: 'A Shoot Springs Up From The Stock Of Jesse'
	},
	{
		slug: 'una-gran-senal',
		spanish_title: 'Una gran señal',
		english_title: 'A Grandiose Sign (Rev 12) - Fatima 2010'
	},
	{
		slug: 'uri-uri-uri-ura',
		spanish_title: 'Urí, urí, urí, urá',
		english_title: 'Uri, Uri, Ura'
	},
	{
		slug: 'vamos-ya-pastores',
		spanish_title: 'Vamos ya, pastores',
		english_title: 'Shepherds, Let Us Go'
	},
	{
		slug: 'ven-del-libano',
		spanish_title: 'Ven del Líbano',
		english_title: 'Come From Lebanon'
	},
	{
		slug: 'ven-espiritu-santo',
		spanish_title: 'Ven, Espíritu Santo',
		english_title: 'Sequence Of Pentecost (Come Holy Spirit)'
	},
	{
		slug: 'ven-hijo-del-hombre',
		spanish_title: 'Ven, hijo del hombre',
		english_title: 'Come, Son Of Man'
	},
	{
		slug: 'veni-creator',
		spanish_title: 'Veni Creator',
		english_title: 'Veni Creator Spiritus (Come, O Creator Spirit)'
	},
	{
		slug: 'viene-el-senor',
		spanish_title: 'Viene el Señor',
		english_title: 'Here Comes The Lord With Majesty Enrobed (Ps. 93)'
	},
	{
		slug: 'virgen-de-la-maravilla',
		spanish_title: 'Virgen de la maravilla',
		english_title: 'Virgin Of Wonder'
	},
	{
		slug: 'vivid-alegres',
		spanish_title: 'Vivid alegres',
		english_title: ''
	},
	{
		slug: 'vosotros-sois-la-luz-del-mundo',
		spanish_title: 'Vosotros sois la luz del mundo',
		english_title: ''
	},
	{
		slug: 'ya-viene-mi-dios',
		spanish_title: 'Ya viene mi Dios',
		english_title: "He's Coming My God"
	},
	{
		slug: 'yahveh-tu-eres-mi-dios',
		spanish_title: 'Yahveh, tú eres mi Dios',
		english_title: 'Oh Lord, You Are My God'
	},
	{
		slug: 'yo-te-amo-senor',
		spanish_title: 'Yo te amo, Señor',
		english_title: 'I Love You, Lord (Ps. 18)'
	},
	{
		slug: 'yo-vengo-a-reunir',
		spanish_title: 'Yo vengo a reunir',
		english_title: ''
	},
	{
		slug: 'zaqueo',
		spanish_title: 'Zaqueo',
		english_title: 'Zaccheus'
	}
];

export default songs;
