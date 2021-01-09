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
        "file": "a.jpg",
        "description": "Luca - Cortona 2017",
        "imgtype": ""
    },
    {
        "file": "_dsc0183.jpg",
        "description": "Marco - Cortona 2017",
        "imgtype": "small"
    },
    {
        "file": "_dsc0226.jpg",
        "description": "Gianluca - Cortona 2017",
        "imgtype": "small"
    },
    {
        "file": "_dsc0267.jpg",
        "description": "Marco - Cortona 2017",
        "imgtype": "small"
    },
    {
        "file": "_dsc0365.jpg",
        "description": "Argonauti - Cortona 2017",
        "imgtype": "small"
    },
    {
        "file": "_dsc0135.jpg",
        "description": "Argonauti - Cortona 2017",
        "imgtype": ""
    },
    {
        "file": "_dsc0245.jpg",
        "description": "Fabio - Cortona 2017",
        "imgtype": "small"
    },
    {
        "file": "_dsc0294.jpg",
        "description": "Daniele - Cortona 2017",
        "imgtype": "small"
    },
    {
        "file": "dv 2012/298994986874988.jpg",
        "description": "Luca - DV 2012",
        "imgtype": "small"
    },
    {
        "file": "dv 2012/298994703541683.jpg",
        "description": "Marco - DV 2012",
        "imgtype": "small"
    },
    {
        "file": "dv 2012/298994486875038.jpg",
        "description": "Gianluca - DV 2012",
        "imgtype": "small"
    },
    {
        "file": "dv 2012/298994303541723.jpg",
        "description": "Fabio - DV 2012",
        "imgtype": "small"
    },
    {
        "file": "dv 2012/298995180208302.jpg",
        "description": "Daniele - DV 2012",
        "imgtype": "small"
    },
    {
        "file": "2014 bierfest/[2014] bierfest.jpg",
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
        "file": "2014 subway/i-phone 1 301.jpg",
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
        "file": "[2004] argonauti live @ festa della donna fratticciola.jpg",
        "description": "Festa della donna Fratticciola 2004",
        "imgtype": "small"
    },
    {
        "file": "[2005] argonauti live @ aliby.jpg",
        "description": "Aliby 2005",
        "imgtype": "small"
    },
    {
        "file": "[2006] argonauti live @ carnevale moiano.jpg",
        "description": "Carnevale Moiano 2006",
        "imgtype": "small"
    },
    {
        "file": "[2008] argonauti live @ route 66.jpg",
        "description": "Route 66",
        "imgtype": "small"
    },
    {
        "file": "[2009] argonauti live @ camucia - luca.jpg",
        "description": "Luca - Camucia 2009",
        "imgtype": ""
    },
    {
        "file": "[2009] argonauti live @ camucia - marco.jpG",
        "description": "Marco - Camucia 2009",
        "imgtype": "small"
    },
    {
        "file": "[2009] argonauti live @ camucia - fabio.jpg",
        "description": "Fabio - Camucia 2009",
        "imgtype": "small"
    },
    {
        "file": "[2009] argonauti live @ camucia.jpg",
        "description": "Camucia 2009",
        "imgtype": ""
    },
    {
        "file": "[2009] argonauti live @ camucia - dani.jpg",
        "description": "Dani - Camucia 2009",
        "imgtype": "small"
    },
    {
        "file": "[2009] argonauti live @ camucia - fede.jpg",
        "description": "Fede - Camucia 2009",
        "imgtype": "small"
    },
    {
        "file": "[2009] argonauti live @ camucia - gianlu.jpg",
        "description": "Gianlu - Camucia 2009",
        "imgtype": "small"
    },
    {
        "file": "foto satomi.jpg",
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
        "file": "img_3813.jpg",
        "description": "Argonauti Famiglia Addams 2011",
        "imgtype": "small"
    },
    {
        "file": "argo famiglia addams.jpg",
        "description": "Argonauti Famiglia Addams 2011",
        "imgtype": ""
    },
    {
        "file": "img_3811.jpg",
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
        "file": "[2013] argonauti live @ club 84 (halloween).jpg",
        "description": "Club 84 (Halloween) 2013",
        "imgtype": ""
    },
    {
        "file": "[2014] argonauti live @ buskers ferrara - arrivo.jpg",
        "description": "Ferrara Buskers 2014",
        "imgtype": "small"
    },
    {
        "file": "[2014] argonauti live @ buskers ferrara - pass.jpg",
        "description": "Pass - Ferrara Buskers 2014",
        "imgtype": "small"
    },
    {
        "file": "argonauti live @ buskers ferrara.jpg",
        "description": "Live - Ferrara Buskers 2014",
        "imgtype": ""
    },
    {
        "file": "[2014] buskers.jpg",
        "description": "Live - Ferrara Buskers 2014",
        "imgtype": "small"
    },
    {
        "file": "10285383_698711670240840_633231302644611471_o.jpg",
        "description": "Argonauti&apos;s Friends",
        "imgtype": "small"
    },
    {
        "file": "img_3307.jpg",
        "description": "Pellicano 2012",
        "imgtype": "small"
    },
    {
        "file": "[2016] mengrigi.jpg",
        "description": "Mengrigi 2016",
        "imgtype": "small"
    },
    {
        "file": "img-20170608-wa0003.jpg",
        "description": "Cantine Baldetti 2017",
        "imgtype": "small"
    }
]

dictionaryImages["matrimoni"] =
[
    {
        "file": "1087_wedding marco e daniela_img_1423.jpg",
        "description": "Marco",
        "imgtype": ""
    },
    {
        "file": "1016_wedding marco e daniela_img_1394.jpg",
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
        "file": "argo matrimonio villa petrischio.jpg",
        "description": "Matrimonio villa",
        "imgtype": "small"
    },
    {
        "file": "img-20160619-wa0006.jpg",
        "description": "Argonauti matrimonio",
        "imgtype": "small"
    },
    {
        "file": "img-20161006-wa0004.jpg",
        "description": "Argo from drone",
        "imgtype": "small"
    },
    {
        "file": "argo matrimonio.jpg",
        "description": "Argo matrimonio",
        "imgtype": "small"
    },
    {
        "file": "20170715_204307.jpg",
        "description": "Argo matrimonio",
        "imgtype": "small"
    },
    {
        "file": "img-20170715-wa0061.jpg",
        "description": "Batteria",
        "imgtype": "small"
    },
]

dictionaryImages["etc"] =
[
    {
        "file": "argo simpson logo.jpg",
        "description": "Argo Simpsons",
        "imgtype": "small"
    },
    {
        "file": "argonauti carrello 2.jpg",
        "description": "Carrello Argonauti",
        "imgtype": ""
    },
    {
        "file": "i love argonauti foonky 3.jpg",
        "description": "I Love Argonauti",
        "imgtype": "small"
    },
    {
        "file": "[2005] copertina cd.jpg",
        "description": "Copertina CD 2005",
        "imgtype": "small"
    },
    {
        "file": "img-20170930-wa0013-01.jpg",
        "description": "Argo @ the lake",
        "imgtype": "small"
    },
    {
        "file": "img-20170429-wa0010.jpg",
        "description": "Argo stylized",
        "imgtype": "small"
    },
    {
        "file": "41344_1567036065628_97330_n.jpg",
        "description": "Argo shirt",
        "imgtype": "small"
    },
    {
        "file": "argonauti_locandina.jpg",
        "description": "Locandina",
        "imgtype": "small"
    },
    {
        "file": "img_0792.jpg",
        "description": "Baby Argo",
        "imgtype": "small"
    },
    {
        "file": "45775_1567034185581_7276663_n.jpg",
        "description": "Fog",
        "imgtype": "small"
    },
    {
        "file": "img_1877.jpg",
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
        "file": "argonauti live @ buskers ferrara.jpg",
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
        "file": "la prima cosa bella.mp3"
        },
        {
            "title": "L&apos;isola che non c&apos;&#232; (Edoardo Bennato)",
            "file": "l&apos;isola che non c&apos;&#232;.mp3"
    },
    {
        "title": "Piccola stella senza cielo (Ligabue)",
        "file": "piccola stella.mp3"
    },
    {
        "title": "Messico e nuvole (Giuliano Palma)",
        "file": "messico e nuvole.mp3"
    },
    {
        "title": "Medley anni &apos;60",
        "file": "anni 60.mp3"
    },
    {
        "title": "Medley donne",
        "file": "donne.mp3"
    },
    {
        "title": "Medley napoletano",
        "file": "napoli.mp3"
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
        "file": "battisti.mp3"
    },
    {
        "title": "Per colpa di chi (Zucchero)",
        "file": "per colpa di chi.mp3"
    },
    {
        "title": "Devil in me (Zucchero)",
        "file": "devil in me.mp3"
    },
    {
        "title": "Medley rock &amp; roll",
        "file": "rock n roll.mp3"
    },
    {
        "title": "Ti porto via con me (Jovanotti)",
        "file": "ti porto via con me.mp3"
    },
    {
        "title": "Me so &apos;mbriacato (Mannarino)",
        "file": "me so mbriacato.mp3"
    },
    {
        "title": "Scetate Vaj&#242; (Mannarino)",
        "file": "scetate vajo.mp3"
    },
    {
        "title": "Se mi rilasso collasso (Bandabard&#242;)",
        "file": "se mi rilasso collasso.mp3"
    },
    {
        "title": "La vita com&apos;&#232; (Max Gazz&#232;)",
        "file": "la vita com&apos;&#232;.mp3"
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
        "file": "buonasera signorina.mp3"
    },
    {
        "title": "Medley cartoni animati",
        "file": ""
    },
    {
        "title": "Tanta voglia di lei (Pooh)",
        "file": "tanta voglia di lei.mp3"
    },
    {
        "title": "Pensiero (Pooh)",
        "file": "pensiero.mp3"
    },
    {
        "title": "A mano a mano (Rino Gaetano)",
        "file": "a mano a mano.mp3"
    },
    {
        "title": "Ricominciamo (Apr&#232;s La Classe)",
        "file": "ricominciamo.mp3"
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
