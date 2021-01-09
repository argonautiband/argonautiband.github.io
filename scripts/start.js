/**/
var template_image = "<div class='thumbnail #imgtype# #key#'>" +
    "<a rel='#key#' href='#bigpath#' class='swipebox' title='#description#'>" +
    "<img src='#path#' alt='#description#'>" +
    "<div class='rollover'>" +
    "<i class='plus'></i>" +
    "</div></a></div >";

var template_video = "<div class='thumbnail #imgtype# video'>" +
    "<a rel='#key#' href='#bigpath#' class='swipebox' title='#description#'>" +
    "<img src='#path#' alt='#description#'>" +
    "<div class='rollover'>" +
    "<i class='video'></i>" +
    "</div></a></div >";

var template_song = '<li><span>#title#</span>&nbsp;&nbsp;&nbsp;#player#</li'

var template_player = '<audio id="#playerid#" controls controlsList="nodownload" preload="none" style="display:none"><source src="#file#" type="audio/mpeg"></audio>' + 
    '<i class="fa fa-play" style="color: #ed2b45" data-audioplayerid="#playerid#"></i>';

var base_image_path = '/images/argonauti/gallery/';

var dictionaryImages = {};
dictionaryImages["live"] = 
[
    {
        "file": "_DSC0131.jpg",
        "description": "Luca - Cortona 2017",
        "imgtype": ""
    },
    {
        "file": "_DSC0183.jpg",
        "description": "Marco - Cortona 2017",
        "imgtype": "small"
    },
    {
        "file": "_DSC0226.jpg",
        "description": "Gianluca - Cortona 2017",
        "imgtype": "small"
    },
    {
        "file": "_DSC0267.jpg",
        "description": "Marco - Cortona 2017",
        "imgtype": "small"
    },
    {
        "file": "_DSC0365.jpg",
        "description": "Argonauti - Cortona 2017",
        "imgtype": "small"
    },
    {
        "file": "_DSC0135.jpg",
        "description": "Argonauti - Cortona 2017",
        "imgtype": ""
    },
    {
        "file": "_DSC0245.jpg",
        "description": "Fabio - Cortona 2017",
        "imgtype": "small"
    },
    {
        "file": "_DSC0294.jpg",
        "description": "Daniele - Cortona 2017",
        "imgtype": "small"
    },
    {
        "file": "DV 2012/298994986874988.jpg",
        "description": "Luca - DV 2012",
        "imgtype": "small"
    },
    {
        "file": "DV 2012/298994703541683.jpg",
        "description": "Marco - DV 2012",
        "imgtype": "small"
    },
    {
        "file": "DV 2012/298994486875038.jpg",
        "description": "Gianluca - DV 2012",
        "imgtype": "small"
    },
    {
        "file": "DV 2012/298994303541723.jpg",
        "description": "Fabio - DV 2012",
        "imgtype": "small"
    },
    {
        "file": "DV 2012/298995180208302.jpg",
        "description": "Daniele - DV 2012",
        "imgtype": "small"
    },
    {
        "file": "2014 Bierfest/[2014] BierFest.jpg",
        "description": "Argonauti - BierFest 2012",
        "imgtype": "small"
    },
    //{
    //    "file": "2014 subway/545996995508118.jpg",
    //    "description": "nome immagine di test",
    //    "imgtype": "small"
    //},
    {
        "file": "2014 subway/545997268841424.jpg",
        "description": "Camicia Argonauti - Subway 2014",
        "imgtype": "small"
    },
    {
        "file": "2014 subway/545997732174711.jpg",
        "description": "Federico - Subway 2014",
        "imgtype": "small"
    },
    {
        "file": "2014 subway/545997822174702.jpg",
        "description": "Fabio - Subway 2014",
        "imgtype": "small"
    },
    {
        "file": "2014 subway/545997965508021.jpg",
        "description": "Marco - Subway 2014",
        "imgtype": "small"
    },
    {
        "file": "2014 subway/545997982174686.jpg",
        "description": "Daniele - Subway 2014",
        "imgtype": "small"
    },
    {
        "file": "2014 subway/i-phone 1 301.JPG",
        "description": "Argonauti - Subway 2014",
        "imgtype": "small"
    },
    {
        "file": "2019_bartender/podo_bartender.jpg",
        "description": "Marco - Bar Tender 2019",
        "imgtype": "small"
    },
    {
        "file": "2019_bartender/briga_e_podo_bartender.jpg",
        "description": "Luca e Marco - Bar Tender 2019",
        "imgtype": "small"
    },
    {
        "file": "2019_bartender/argo_bartender.jpg",
        "description": "Argonauti - Bar Tender 2019",
        "imgtype": "small"
    },
    {
        "file": "2019_bartender/argo2_bartender.jpg",
        "description": "Argonauti - Bar Tender 2019",
        "imgtype": "small"
    }
];

dictionaryImages["stories"] =
[
    {
        "file": "[2004] Argonauti live @ festa della donna Fratticciola.JPG",
        "description": "Festa della donna Fratticciola 2004",
        "imgtype": "small"
    },
    {
        "file": "[2005] Argonauti live @ Aliby.JPG",
        "description": "Aliby 2005",
        "imgtype": "small"
    },
    {
        "file": "[2006] Argonauti live @ Carnevale Moiano.JPG",
        "description": "Carnevale Moiano 2006",
        "imgtype": "small"
    },
    {
        "file": "[2008] Argonauti live @ Route 66.JPG",
        "description": "Route 66",
        "imgtype": "small"
    },
    {
        "file": "[2009] Argonauti Live @ Camucia - Luca.JPG",
        "description": "Luca - Camucia 2009",
        "imgtype": ""
    },
    {
        "file": "[2009] Argonauti Live @ Camucia - Marco.JPG",
        "description": "Marco - Camucia 2009",
        "imgtype": "small"
    },
    {
        "file": "[2009] Argonauti Live @ Camucia - Fabio.JPG",
        "description": "Fabio - Camucia 2009",
        "imgtype": "small"
    },
    {
        "file": "[2009] Argonauti Live @ Camucia.JPG",
        "description": "Camucia 2009",
        "imgtype": ""
    },
    {
        "file": "[2009] Argonauti Live @ Camucia - Dani.JPG",
        "description": "Dani - Camucia 2009",
        "imgtype": "small"
    },
    {
        "file": "[2009] Argonauti Live @ Camucia - Fede.JPG",
        "description": "Fede - Camucia 2009",
        "imgtype": "small"
    },
    {
        "file": "[2009] Argonauti Live @ Camucia - Gianlu.JPG",
        "description": "Gianlu - Camucia 2009",
        "imgtype": "small"
    },
    {
        "file": "Foto Satomi.jpg",
        "description": "Federico \"Satomi\" - Velvet (Carnevale) 2009",
        "imgtype": "small"
    },
    {
        "file": "223330_1079101067558_9496_n.jpg",
        "description": "Velvet (Carnevale) 2009",
        "imgtype": ""
    },
    {
        "file": "120876668020155.jpg",
        "description": "Velvet (Carnevale) 2009",
        "imgtype": "small"
    },
    {
        "file": "IMG_3813.JPG",
        "description": "Argonauti Famiglia Addams 2011",
        "imgtype": "small"
    },
    {
        "file": "argo famiglia addams.jpg",
        "description": "Argonauti Famiglia Addams 2011",
        "imgtype": ""
    },
    {
        "file": "IMG_3811.JPG",
        "description": "Argonauti Famiglia Addams 2011",
        "imgtype": ""
    },
    {
        "file": "283994_2246813138817_4177420_n.jpg",
        "description": "Il Convio Isola d&apos;Elba 2011",
        "imgtype": ""
    },
    {
        "file": "291184_2377221317704_1698684952_o.jpg",
        "description": "Il Convio Isola d&apos;Elba 2011",
        "imgtype": "small"
    },
    {
        "file": "340531_2377214437532_1087628785_o.jpg",
        "description": "Luca - Il Convio Isola d&apos;Elba 2011",
        "imgtype": "small"
    },
    {
        "file": "308722_2296132277905_878966928_n.jpg",
        "description": "Willy Benevento 2011",
        "imgtype": ""
    },
    {
        "file": "322094_2377226637837_695750238_o.jpg",
        "description": "Il Convio Isola d&apos;Elba 2011",
        "imgtype": "small"
    },
    {
        "file": "136156919825463.jpg",
        "description": "Willy Benevento 2011",
        "imgtype": "small"
    },
    {
        "file": "[2013] Argonauti Live @ Club 84 (Halloween).JPG",
        "description": "Club 84 (Halloween) 2013",
        "imgtype": ""
    },
    {
        "file": "[2014] Argonauti Live @ Buskers Ferrara - Arrivo.JPG",
        "description": "Ferrara Buskers 2014",
        "imgtype": "small"
    },
    {
        "file": "[2014] Argonauti Live @ Buskers Ferrara - Pass.JPG",
        "description": "Pass - Ferrara Buskers 2014",
        "imgtype": "small"
    },
    {
        "file": "Argonauti Live @ Buskers Ferrara.jpg",
        "description": "Live - Ferrara Buskers 2014",
        "imgtype": ""
    },
    {
        "file": "[2014] Buskers.jpg",
        "description": "Live - Ferrara Buskers 2014",
        "imgtype": "small"
    },
    {
        "file": "10285383_698711670240840_633231302644611471_o.jpg",
        "description": "Argonauti&apos;s Friends",
        "imgtype": "small"
    },
    {
        "file": "IMG_3307.JPG",
        "description": "Pellicano 2012",
        "imgtype": "small"
    },
    {
        "file": "[2016] Mengrigi.jpg",
        "description": "Mengrigi 2016",
        "imgtype": "small"
    },
    {
        "file": "IMG-20170608-WA0003.jpg",
        "description": "Cantine Baldetti 2017",
        "imgtype": "small"
    }
]

dictionaryImages["matrimoni"] =
[
    {
        "file": "1087_Wedding Marco e Daniela_IMG_1423.jpg",
        "description": "Marco",
        "imgtype": ""
    },
    {
        "file": "1016_Wedding Marco e Daniela_IMG_1394.jpg",
        "description": "Daniele",
        "imgtype": "small"
    },
    {
        "file": "13344625_926841917427813_2197155600869056593_n.jpg",
        "description": "Matrimonio",
        "imgtype": "small"
    },
    {
        "file": "13619840_946580075453997_1334660181460408572_n.jpg",
        "description": "Matrimonio vista aerea",
        "imgtype": "small"
    },
    {
        "file": "13654388_945754675536537_308023859981357941_n.jpg",
        "description": "Matrimonio piscina",
        "imgtype": "small"
    },
    {
        "file": "20160618_231152.jpg",
        "description": "Matrimonio ricevimento",
        "imgtype": ""
    },
    {
        "file": "Argo matrimonio villa petrischio.jpg",
        "description": "Matrimonio villa",
        "imgtype": "small"
    },
    {
        "file": "IMG-20160619-WA0006.jpg",
        "description": "Argonauti matrimonio",
        "imgtype": "small"
    },
    {
        "file": "IMG-20161006-WA0004.jpg",
        "description": "Argo from drone",
        "imgtype": "small"
    },
    {
        "file": "Argo matrimonio.jpg",
        "description": "Argo matrimonio",
        "imgtype": "small"
    },
    {
        "file": "20170715_204307.jpg",
        "description": "Argo matrimonio",
        "imgtype": "small"
    },
    {
        "file": "IMG-20170715-WA0061.jpg",
        "description": "Batteria",
        "imgtype": "small"
    },
]

dictionaryImages["etc"] =
[
    {
        "file": "Argo Simpson Logo.jpg",
        "description": "Argo Simpsons",
        "imgtype": "small"
    },
    {
        "file": "Argonauti Carrello 2.JPG",
        "description": "Carrello Argonauti",
        "imgtype": ""
    },
    {
        "file": "I Love Argonauti foonky 3.jpg",
        "description": "I Love Argonauti",
        "imgtype": "small"
    },
    {
        "file": "[2005] Copertina CD.jpg",
        "description": "Copertina CD 2005",
        "imgtype": "small"
    },
    {
        "file": "IMG-20170930-WA0013-01.jpg",
        "description": "Argo @ the lake",
        "imgtype": "small"
    },
    {
        "file": "IMG-20170429-WA0010.jpg",
        "description": "Argo stylized",
        "imgtype": "small"
    },
    {
        "file": "41344_1567036065628_97330_n.jpg",
        "description": "Argo shirt",
        "imgtype": "small"
    },
    {
        "file": "Argonauti_Locandina.jpg",
        "description": "Locandina",
        "imgtype": "small"
    },
    {
        "file": "IMG_0792.JPG",
        "description": "Baby Argo",
        "imgtype": "small"
    },
    {
        "file": "45775_1567034185581_7276663_n.jpg",
        "description": "Fog",
        "imgtype": "small"
    },
    {
        "file": "IMG_1877.JPG",
        "description": "Logo on the wall",
        "imgtype": "small"
    }
    //{
    //    "file": "KeepCalmAndLoveArgonauti.jpg",
    //        "description": "KeepCalmAndLoveArgonauti",
    //            "imgtype": "small"
    //}
]

var dictionaryVideo = {};
dictionaryVideo["video"] =
    [
    {
        "file": "argo 2018.jpg",
        "description": "Argonauti Promo 2018",
        "imgtype": "",
        "bigpath": "https://www.youtube.com/watch?v=cck_VlzN9rc&feature=youtu.be"
    },
    {
        "file": "Argonauti Live @ Buskers Ferrara.jpg",
        "description": "Argonauti live @ Ferrara Buskers",
        "imgtype": "",
        "bigpath": "https://www.youtube.com/watch?v=MNUk6odTChw"
    },
    {
        "file": "argo-promo.jpg",
        "description": "Promo Argonauti Band",
        "imgtype": "small",
        "bigpath": "https://www.youtube.com/watch?v=EGFJZs0UWhw"
        },
        {
            "file": "via de redi.jpg",
            "description": "Argonauti live on The Redi",
            "imgtype": "small",
            "bigpath": "https://www.youtube.com/watch?v=1zsfMWQOeps"
        }
    ]

var base_audio_path = '/mp3/';
var dictionarySongs = {};
dictionarySongs["songs"] =
    [
        {
            "title": "La prima cosa bella (Nicola Di Bari)",
        "file": "La prima cosa bella.mp3"
        },
        {
            "title": "L&apos;isola che non c&apos;&#232; (Edoardo Bennato)",
            "file": "L&apos;isola che non c&apos;&#232;.mp3"
    },
    {
        "title": "Piccola stella senza cielo (Ligabue)",
        "file": "Piccola stella.mp3"
    },
    {
        "title": "Messico e nuvole (Giuliano Palma)",
        "file": "Messico e Nuvole.mp3"
    },
    {
        "title": "Medley anni &apos;60",
        "file": "Anni 60.mp3"
    },
    {
        "title": "Medley donne",
        "file": "Donne.mp3"
    },
    {
        "title": "Medley napoletano",
        "file": "Napoli.mp3"
    },
    {
        "title": "Su di noi (Pupo)",
        "file": ""
    },
    {
        "title": "Gelato al cioccolato (Pupo)",
        "file": ""
    },
    {
        "title": "Medley Battisti",
        "file": "Battisti.mp3"
    },
    {
        "title": "Per colpa di chi (Zucchero)",
        "file": "Per colpa di chi.mp3"
    },
    {
        "title": "Devil in me (Zucchero)",
        "file": "Devil in me.mp3"
    },
    {
        "title": "Medley rock &amp; roll",
        "file": "Rock n Roll.mp3"
    },
    {
        "title": "Ti porto via con me (Jovanotti)",
        "file": "Ti porto via con me.mp3"
    },
    {
        "title": "Me so &apos;mbriacato (Mannarino)",
        "file": "Me so mbriacato.mp3"
    },
    {
        "title": "Scetate Vaj&#242; (Mannarino)",
        "file": "Scetate vajo.mp3"
    },
    {
        "title": "Se mi rilasso collasso (Bandabard&#242;)",
        "file": "Se mi rilasso collasso.mp3"
    },
    {
        "title": "La vita com&apos;&#232; (Max Gazz&#232;)",
        "file": "La vita com&apos;&#232;.mp3"
    },
    {
        "title": "Occidentali&apos;s karma (Francesco Gabbani)",
        "file": ""
    },
    {
        "title": "Svalutation (Francesco Gabbani)",
        "file": ""
    },
    {
        "title": "Buonasera signorina (Fred Buscaglione)",
        "file": "Buonasera signorina.mp3"
    },
    {
        "title": "Medley cartoni animati",
        "file": ""
    },
    {
        "title": "Tanta voglia di lei (Pooh)",
        "file": "Tanta voglia di lei.mp3"
    },
    {
        "title": "Pensiero (Pooh)",
        "file": "Pensiero.mp3"
    },
    {
        "title": "A mano a mano (Rino Gaetano)",
        "file": "A mano a mano.mp3"
    },
    {
        "title": "Ricominciamo (Apr&#232;s La Classe)",
        "file": "Ricominciamo.mp3"
    },
    {
        "title": "... e tanto altro",
        "file": ""
    }
]


var songs = [
    'La prima cosa bella (Nicola Di Bari)',
    'L\'isola che non c\'&#232; (Edoardo Bennato)',
    'Piccola stella senza cielo (Ligabue)',
    'Messico e nuvole (Giuliano Palma)',
    'Medley anni \'60',
    'Medley donne',
    'Medley napoletano',
    'Su di noi (Pupo)',
    'Gelato al cioccolato (Pupo)',
    'Medley Battisti',
    'Per colpa di chi (Zucchero)',
    'Devil in me (Zucchero)',
    'Medley rock & roll',
    'Ti porto via con me (Jovanotti)',
    'Me so \'mbriacato (Mannarino)',
    'Scetate Vaj&#242; (Mannarino)',
    'Se mi rilasso collasso (Bandabard&#242;)',
    'La vita com\'&#232; (Max Gazz&#232;)',
    'Occidentali\'s karma (Francesco Gabbani)',
    'Svalutation (Francesco Gabbani)',
    'Buonasera signorina (Fred Buscaglione)',
    'Medley cartoni animati',
    'Tanta voglia di lei (Pooh)',
    'Pensiero (Pooh)',
    'A mano a mano (Rino Gaetano)',
    'Ricominciamo (Apr&#232;s La Classe)',
    '... e tanto altro'
]

/* Loading */
$(document).ready(function () {
    for (key in dictionaryImages) {
        var tmpArray = dictionaryImages[key];
        for (index = 0; index < tmpArray.length; ++index) {
            var imgObj = tmpArray[index];
            imgObj.path = base_image_path + key + '/' + imgObj.file;
            imgObj.bigpath = base_image_path + key + '/big/' + imgObj.file;
            imgObj.key = key;

            var strImage = template_image;

            for (keyImage in imgObj) {
                var re = new RegExp("#" + keyImage + "#", "g");
                strImage = strImage.replace(re, imgObj[keyImage])
            }
            $('#thumbnails').append(strImage);
        }
    }

    key = 'video';
    var tmpArray = dictionaryVideo['video'];
    for (index = 0; index < tmpArray.length; ++index) {
        var imgObj = tmpArray[index];
        imgObj.path = base_image_path + key + '/' + imgObj.file;
        imgObj.key = key;

        var strImage = template_video;

        for (keyImage in imgObj) {
            var re = new RegExp("#" + keyImage + "#", "g");
            strImage = strImage.replace(re, imgObj[keyImage])
        }
        $('#thumbnails').append(strImage);
    }

    key = 'songs';
    var tmpArray = dictionarySongs['songs'];
    for (index = 0; index < tmpArray.length; ++index) {
        var imgObj = tmpArray[index];
        imgObj.key = key;
        imgObj.player = '';
        imgObj.playerid = 'audioplayer' + index;
        if (imgObj.file != '') {
            imgObj.file = base_audio_path + '/' + imgObj.file;
            imgObj.player = template_player;
        }

        var strSongs = template_song.replace(/\#player\#/g, imgObj["player"]);

        for (keyImage in imgObj) {
            var re = new RegExp("#" + keyImage + "#", "g");
            strSongs = strSongs.replace(re, imgObj[keyImage])
        }
        $('#songsContainer').append(strSongs);
    }

    //var tagName = '';
    //var tmpArray = '';

    //tagName = 'live';
    //tmpArray = images_live;
    //for (index = 0; index < tmpArray.length; ++index) {
    //    $('#thumbnails').append(template_image.replace(/\?/g, tagName).replace(/\*/g, base_image_path + tagName + '/big/' + tmpArray[index]).replace(/\#/g, base_image_path + tagName + '/' + tmpArray[index]));
    //}

    //tagName = 'stories';
    //tmpArray = images_stories;
    //for (index = 0; index < tmpArray.length; ++index) {
    //    $('#thumbnails').append(template_image.replace(/\?/g, tagName).replace(/\*/g, base_image_path + tagName + '/big/' + tmpArray[index]).replace(/\#/g, base_image_path + tagName + '/' + tmpArray[index]));
    //}

    //tagName = 'matrimoni';
    //tmpArray = images_matrimoni;
    //for (index = 0; index < tmpArray.length; ++index) {
    //    $('#thumbnails').append(template_image.replace(/\?/g, tagName).replace(/\*/g, base_image_path + tagName + '/big/' + tmpArray[index]).replace(/\#/g, base_image_path + tagName + '/' + tmpArray[index]));
    //}

    //tagName = 'locandine';
    //tmpArray = images_locandine;
    //for (index = 0; index < tmpArray.length; ++index) {
    //    $('#thumbnails').append(template_image.replace(/\?/g, tagName).replace(/\*/g, base_image_path + tagName + '/big/' + tmpArray[index]).replace(/\#/g, base_image_path + tagName + '/' + tmpArray[index]));
    //}

    //for (index = 0; index < songs.length; ++index) {
    //    $('#songsContainer').append(template_song.replace(/\?/g, songs[index]));
    //}
})

function addImages(key) {
    //$('#thumbnails').empty();
    //var tmpArray = dictionaryImages[key];
    //var completeHtml = ''
    //for (index = 0; index < tmpArray.length; ++index) {
    //    var imgObj = tmpArray[index];
    //    imgObj.path = base_image_path + key + '/' + imgObj.file;
    //    imgObj.bigpath = base_image_path + key + '/big/' + imgObj.file;
    //    imgObj.key = key;

    //    var strImage = template_image;

    //    for (keyImage in imgObj) {
    //        var re = new RegExp("#" + keyImage + "#", "g");
    //        strImage = strImage.replace(re, imgObj[keyImage])
    //    }
    //    completeHtml += strImage
    //}
    //$('#thumbnails').append(completeHtml);

    //$('#thumbnails').children('img').each(function () {
    //    //alert(this.value); // "this" is the current element in the loop
    //    if ()
    //    this.hide();
    //});
}
