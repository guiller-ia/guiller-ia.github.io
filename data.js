var APP_DATA = {
  "scenes": [
    {
      "id": "0-monoblock-umsa",
      "name": "Monoblock UMSA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 416,
      "initialViewParameters": {
        "yaw": -2.7770130053116375,
        "pitch": -0.15675968346807956,
        "fov": 1.8139188139570992
      },
      "linkHotspots": [
        {
          "yaw": -2.8462170026066183,
          "pitch": 0.11930151392143884,
          "rotation": 6.283185307179586,
          "target": "1-primer-patio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6876032926598192,
          "pitch": -0.3041900796185857,
          "title": "Universidad Mayor de San Andrés",
          "text": "La Universidad Mayor de San Andrés (UMSA) es la principal universidad pública del Estado Plurinacional de Bolivia. Fue establecida en 1830 en la ciudad de La Paz"
        },
        {
          "yaw": -2.557983282273849,
          "pitch": 0.11566796703766791,
          "title": "Ingreso al Monoblock",
          "text": "Puerta principal de acceso al Monoblock central de la Universidad Mayor de San Andrés"
        },
        {
          "yaw": -0.8877082762080946,
          "pitch": -0.10277669301518522,
          "title": "Plaza del Bicentenario",
          "text": "La Plaza del Bicentenario es un espacio de 1.343 metros cuadrados ubicado en la avenida Villazón."
        }
      ]
    },
    {
      "id": "1-primer-patio",
      "name": "Primer Patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 2.133571036563504,
        "pitch": -0.06089483032413412,
        "fov": 1.880935015436785
      },
      "linkHotspots": [
        {
          "yaw": -2.3814065223255767,
          "pitch": 0.020669615554250953,
          "rotation": 1.5707963267948966,
          "target": "2-estacionamiento"
        },
        {
          "yaw": 0.2736493055859128,
          "pitch": -0.016211326563883688,
          "rotation": 3.141592653589793,
          "target": "3-cancha"
        },
        {
          "yaw": 2.143459887329633,
          "pitch": -0.007526178830515207,
          "rotation": 3.141592653589793,
          "target": "4-segundo-patio"
        },
        {
          "yaw": -1.086106809147445,
          "pitch": -0.667387831497404,
          "rotation": 0,
          "target": "0-monoblock-umsa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7330477351919713,
          "pitch": -0.10991140298713553,
          "title": "Vicedecanado FCPN",
          "text": "Vicedecanato de la Facultad de Ciencias Puras y Naturales"
        },
        {
          "yaw": 2.643736696500685,
          "pitch": -0.08775839036547062,
          "title": "Fotocopias",
          "text": "Fotocopias, carrera de matemáticas"
        },
        {
          "yaw": 3.079741391538157,
          "pitch": -0.42863272902044613,
          "title": "Prefacultativo FCPN",
          "text": "Oficinas del prefacultativo de la Facutal de Ciencias Puras y Naturales."
        },
        {
          "yaw": -1.312121381744788,
          "pitch": -0.26202420444069574,
          "title": "Monoblock",
          "text": "Puerta de ingreso posterior al Monoblock central."
        }
      ]
    },
    {
      "id": "2-estacionamiento",
      "name": "Estacionamiento",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0125447706624584,
          "pitch": 0.023371228990448856,
          "rotation": 4.71238898038469,
          "target": "1-primer-patio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5801807790211715,
          "pitch": -0.045265571337235855,
          "title": "Fotocopias",
          "text": "Fotocopias, Carrera de Estadistica"
        },
        {
          "yaw": -0.20273834108272126,
          "pitch": -0.05729250396987595,
          "title": "Carrera de Matemáticas",
          "text": "Oficinas de la Carrera de Matemáticas"
        }
      ]
    },
    {
      "id": "3-cancha",
      "name": "Cancha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7089065372053547,
          "pitch": -0.019884513305880702,
          "rotation": 3.141592653589793,
          "target": "1-primer-patio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.09091140314768076,
          "pitch": -0.24721730399400776,
          "title": "Carrera de Admisnistración de Empresas",
          "text": "Edificio de la carrera de Administración de Empresas de la Faculta de Ciencias Económicas y Financieras"
        },
        {
          "yaw": 0.9168821900606439,
          "pitch": -0.12618307015633512,
          "title": "Farmacia",
          "text": "Farmacia universitaria"
        }
      ]
    },
    {
      "id": "4-segundo-patio",
      "name": "Segundo Patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -3.0069099703673814,
        "pitch": 0.18208995790113391,
        "fov": 1.880935015436785
      },
      "linkHotspots": [
        {
          "yaw": -0.7325410632773135,
          "pitch": 0.011221677789160722,
          "rotation": 3.141592653589793,
          "target": "5-fedisdumsa"
        },
        {
          "yaw": 0.7073897357494552,
          "pitch": -0.017047731499724605,
          "rotation": 3.141592653589793,
          "target": "1-primer-patio"
        },
        {
          "yaw": -2.4067026436930945,
          "pitch": 0.04206922971201621,
          "rotation": 4.71238898038469,
          "target": "7-bienestar-social"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8105658750103926,
          "pitch": -0.06964328450242618,
          "title": "ATM Banco Mercantil Santa Cruz",
          "text": "Cajero automático del Banco Marcantil Santa Cruz"
        },
        {
          "yaw": 2.6127028379486976,
          "pitch": -0.1586359556708281,
          "title": "ATM Banco Union",
          "text": "Cajero automático del Banco Union"
        },
        {
          "yaw": 2.929670175867355,
          "pitch": -0.3731183419407529,
          "title": "Caja recaudadora UMSA",
          "text": "Caja recaudadora de la Universidad Mayor de San Andrés"
        },
        {
          "yaw": 2.31729742975676,
          "pitch": -0.05982400260056231,
          "title": "FUL",
          "text": "Oficinas de la Federación Universitaria Local"
        },
        {
          "yaw": -2.72285052575117,
          "pitch": 0.12861101046988743,
          "title": "División de Trabajo Social",
          "text": "Becas comedor<div>Consultorio jurídico</div><div>Atención social</div>"
        },
        {
          "yaw": -2.1767698307853998,
          "pitch": -0.32191481019591883,
          "title": "Fac. Ciencias Sociales",
          "text": "Atención de 9:00 A.M. a 12:00 P.M."
        },
        {
          "yaw": -2.0001858190540016,
          "pitch": 0.03978788677663303,
          "title": "Pabellón D",
          "text": "Aula de clases."
        }
      ]
    },
    {
      "id": "5-fedisdumsa",
      "name": "FEDISDUMSA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 3.100813660931859,
        "pitch": -0.071790004023228,
        "fov": 1.880935015436785
      },
      "linkHotspots": [
        {
          "yaw": 1.254251338009757,
          "pitch": 0.030191274686943714,
          "rotation": 3.141592653589793,
          "target": "6-pabellones"
        },
        {
          "yaw": -0.5430228965286918,
          "pitch": -0.1086235712554462,
          "rotation": 3.141592653589793,
          "target": "4-segundo-patio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7686403505168986,
          "pitch": -0.36483648712612293,
          "title": "FEDSIDUMSA",
          "text": "Federación de Docentes de la Universidad Mayor de San Andrés"
        },
        {
          "yaw": 1.6157639718883399,
          "pitch": -0.09237471890158311,
          "title": "Pabellón B",
          "text": "Ingreso central"
        },
        {
          "yaw": 2.312001741844602,
          "pitch": -0.03192577310703548,
          "title": "Pabellón B",
          "text": "Ingreso lateral"
        },
        {
          "yaw": 0.892683047194323,
          "pitch": 0.05530778370152234,
          "title": "Pabellón E",
          "text": "Aula de clases"
        }
      ]
    },
    {
      "id": "6-pabellones",
      "name": "Pabellones",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -1.0811389314915925,
        "pitch": 0.012009794539036278,
        "fov": 1.8139188139570992
      },
      "linkHotspots": [
        {
          "yaw": -0.35381324036315576,
          "pitch": 0.000020658595044409367,
          "rotation": 3.141592653589793,
          "target": "5-fedisdumsa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0488411812269653,
          "pitch": -0.0678780270499395,
          "title": "Pabellón A",
          "text": "Ingreso central"
        },
        {
          "yaw": -1.8704110419057898,
          "pitch": -0.07010451892477221,
          "title": "Pabellón A",
          "text": "Ingreso lateral"
        },
        {
          "yaw": -1.3007645558259533,
          "pitch": -0.048780905919828754,
          "title": "Pabellón B",
          "text": "Ingreso lateral"
        },
        {
          "yaw": -0.4741977441845382,
          "pitch": -0.14657876216587162,
          "title": "Pabellón B",
          "text": "Ingreso central"
        },
        {
          "yaw": 2.6175473577064388,
          "pitch": -0.013901399810411164,
          "title": "Pabellón J",
          "text": "Aula de clases"
        },
        {
          "yaw": 2.3222095625735486,
          "pitch": -0.09740411927845827,
          "title": "Pabellón I",
          "text": "Aula de clases"
        },
        {
          "yaw": 1.0213628798043235,
          "pitch": -0.20159279997580626,
          "title": "Pabellón H",
          "text": "Aula de clases"
        },
        {
          "yaw": 0.071545551931818,
          "pitch": -0.05353925942403315,
          "title": "Pabellón G",
          "text": "Aula de clases"
        },
        {
          "yaw": -0.11565194376656152,
          "pitch": 0.03502457550247584,
          "title": "Pabellón F",
          "text": "Aula de clases"
        }
      ]
    },
    {
      "id": "7-bienestar-social",
      "name": "Bienestar Social",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9742124206917548,
          "pitch": -0.0751188250891559,
          "rotation": 3.141592653589793,
          "target": "9-informtica"
        },
        {
          "yaw": 1.4755743901090757,
          "pitch": 0.015847424904332996,
          "rotation": 3.141592653589793,
          "target": "8-ventanillas"
        },
        {
          "yaw": 3.1247439690300327,
          "pitch": 0.05896143007125332,
          "rotation": 3.141592653589793,
          "target": "10-jardines"
        },
        {
          "yaw": -0.6985079051365375,
          "pitch": -0.08834275087250631,
          "rotation": 1.5707963267948966,
          "target": "4-segundo-patio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3784464375283996,
          "pitch": -0.1100995194934633,
          "title": "Pabellón C",
          "text": "Aula de clases"
        },
        {
          "yaw": 1.518465432339676,
          "pitch": -0.12996578925604396,
          "title": "Baños",
          "text": ""
        },
        {
          "yaw": -0.3435707193923214,
          "pitch": -0.1894902038759021,
          "title": "Becas Académicas",
          "text": "Departamento de Bienestar Social<div>sección Becas Académicas</div>"
        },
        {
          "yaw": -0.008216414547755235,
          "pitch": -0.19442317603996706,
          "title": "Consultorio Nutricional",
          "text": "División de Trabajo Social<div>Consultorio nutricional</div><div>Espacios en concesión</div>"
        },
        {
          "yaw": 0.2527801199379347,
          "pitch": -0.20584148717881057,
          "title": "G.A.R. Informaciones",
          "text": "Ventanillla de informaciones de la División de Gestiones, Admiciones y Registros."
        },
        {
          "yaw": 0.7353629149004153,
          "pitch": -0.18271604743639003,
          "title": "Matriculación",
          "text": "Ventanilla de matriculación"
        },
        {
          "yaw": -3.0112351059165174,
          "pitch": -0.1289805610406276,
          "title": "Fac. Ciencias Sociales",
          "text": "Ingreso lateral del edificio de la Facultad de Ciencias Sociales"
        },
        {
          "yaw": 2.685215401851365,
          "pitch": -0.06528345467838292,
          "title": "Módulo policial",
          "text": ""
        },
        {
          "yaw": 0.48732612641425277,
          "pitch": -0.2102059098013349,
          "title": "Mod. Graduación<div>Admis. Especiales</div>",
          "text": ""
        },
        {
          "yaw": 2.9342867125841545,
          "pitch": -0.08304099433659218,
          "title": "Sociedad Científica estudiantil FCPN",
          "text": "Instalaciones de la Sociedad Científica Estudiantil de la Facultad de Ciencias Puras y Naturales."
        }
      ]
    },
    {
      "id": "8-ventanillas",
      "name": "Ventanillas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -1.7443418601023666,
        "pitch": -0.07115167122822186,
        "fov": 1.8139188139570992
      },
      "linkHotspots": [
        {
          "yaw": 0.7727562638348822,
          "pitch": 0.09918438713441802,
          "rotation": 3.141592653589793,
          "target": "9-informtica"
        },
        {
          "yaw": 2.8939746217319247,
          "pitch": 0.06249888111353741,
          "rotation": 3.141592653589793,
          "target": "7-bienestar-social"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.229343049406598,
          "pitch": -0.08777547967270038,
          "title": "Baños",
          "text": ""
        },
        {
          "yaw": -0.9534276883090804,
          "pitch": -0.050593428623150416,
          "title": "Legalizaciones",
          "text": "Ventanilla de Lagalizaciones"
        },
        {
          "yaw": -1.191803832360634,
          "pitch": 0.03496051840705405,
          "title": "División de Docuemtnos y Archivo",
          "text": "Ventanilla de la División de Documentos y Archivo"
        },
        {
          "yaw": -1.373675299727811,
          "pitch": -0.04287452018606075,
          "title": "Ventanillas 12, 13, 14",
          "text": ""
        },
        {
          "yaw": -2.0919740074124533,
          "pitch": -0.0970251102306392,
          "title": "Matriculaciones",
          "text": ""
        },
        {
          "yaw": 0.1577381537338649,
          "pitch": -0.15300579285964133,
          "title": "Carrera de Informática",
          "text": "Edificio de la carrera de Informática, Facultad de Ciencias Puras y Naturales."
        }
      ]
    },
    {
      "id": "9-informtica",
      "name": "Informática",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -0.3392009459310579,
        "pitch": -0.025837019442816356,
        "fov": 1.880935015436785
      },
      "linkHotspots": [
        {
          "yaw": 2.7649400921792147,
          "pitch": -0.03793670622225598,
          "rotation": 3.141592653589793,
          "target": "7-bienestar-social"
        },
        {
          "yaw": -2.5511412545781074,
          "pitch": -0.05414353409366868,
          "rotation": 3.141592653589793,
          "target": "8-ventanillas"
        },
        {
          "yaw": 1.9188772302713435,
          "pitch": -0.007689548269851798,
          "rotation": 3.141592653589793,
          "target": "10-jardines"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.08321740930771782,
          "pitch": -0.22068216690484377,
          "title": "Carrera de Informática",
          "text": "Edificio de la carrera de Informática, Facultad de Ciencias Puras y Naturales."
        },
        {
          "yaw": -0.6672537616464318,
          "pitch": -0.029986194619063156,
          "title": "Ingreso Subsuelo",
          "text": "Aulas"
        },
        {
          "yaw": 1.3854922647846042,
          "pitch": -0.012514625949807012,
          "title": "Módulo policial",
          "text": ""
        },
        {
          "yaw": 1.6863794156056002,
          "pitch": 0.092477275960686,
          "title": "Jardines",
          "text": "No pisar"
        },
        {
          "yaw": -2.7618325005527105,
          "pitch": -0.12268520814267525,
          "title": "Ventanillas G.A.R.",
          "text": "Ventanillas de la División de Gestiones, Admisiones y Registros."
        },
        {
          "yaw": -1.5839851483863931,
          "pitch": -0.2218778690662102,
          "title": "Baños",
          "text": ""
        }
      ]
    },
    {
      "id": "10-jardines",
      "name": "Jardines",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 416,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.141030301229799,
          "pitch": 0.021119198331078337,
          "rotation": 3.141592653589793,
          "target": "7-bienestar-social"
        },
        {
          "yaw": -1.6337069554000596,
          "pitch": 0.05737055724469187,
          "rotation": 3.141592653589793,
          "target": "9-informtica"
        },
        {
          "yaw": 0.27174190571114565,
          "pitch": 0.07241634472888947,
          "rotation": 3.141592653589793,
          "target": "11-ingreso-federico-zuazo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7188776709159965,
          "pitch": -0.5592467670831294,
          "title": "Facultad de Ciencias Sociales",
          "text": "Ingreso lateral"
        },
        {
          "yaw": -0.5933233265949518,
          "pitch": -0.013760959684651297,
          "title": "Centro de estudiantes",
          "text": "Facultad de Ciencias Económicas y Financieras"
        },
        {
          "yaw": -1.0696856258112781,
          "pitch": 0.012094953873203806,
          "title": "Módulo policial",
          "text": ""
        },
        {
          "yaw": -1.4652656983471335,
          "pitch": -0.18481916097398887,
          "title": "Carrera de Informática",
          "text": "Edificio de la carrera de Informática, Facultal de Ciencias Puras y Naturales"
        },
        {
          "yaw": -0.800415252037121,
          "pitch": -0.4346325082403517,
          "title": "Planetario Max Schreier",
          "text": "Carrera de Física, Facltad de Ciencias Puras y Naturales"
        }
      ]
    },
    {
      "id": "11-ingreso-federico-zuazo",
      "name": "Ingreso Federico Zuazo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 416,
      "initialViewParameters": {
        "yaw": -0.488588398281788,
        "pitch": -0.22717564382301347,
        "fov": 1.8139188139570992
      },
      "linkHotspots": [
        {
          "yaw": 0.3126428451826051,
          "pitch": -0.16738835012622566,
          "rotation": 3.141592653589793,
          "target": "12-fac-ciencias-sociales"
        },
        {
          "yaw": 2.7165114765515526,
          "pitch": -0.09150447112972238,
          "rotation": 3.141592653589793,
          "target": "10-jardines"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3305667110917287,
          "pitch": 0.06967517835350634,
          "title": "Ingreso Federico Zuazo",
          "text": ""
        }
      ]
    },
    {
      "id": "12-fac-ciencias-sociales",
      "name": "Fac. Ciencias Sociales",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 416,
      "initialViewParameters": {
        "yaw": -1.4932115630759988,
        "pitch": 0.08346011131425612,
        "fov": 1.8139188139570992
      },
      "linkHotspots": [
        {
          "yaw": -0.005845138464131594,
          "pitch": -0.01601894248971547,
          "rotation": 3.141592653589793,
          "target": "11-ingreso-federico-zuazo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7958956618593458,
          "pitch": -0.26176670472179,
          "title": "Facultad de Ciencias Sociales",
          "text": "Edif. René Zavaleta Mercado"
        },
        {
          "yaw": 0.828465755838252,
          "pitch": 0.06190000421164754,
          "title": "Calle Federico Zuazo",
          "text": ""
        },
        {
          "yaw": 2.448321840381462,
          "pitch": -0.007308821762546103,
          "title": "Vicerectorado UMSA",
          "text": "Departamento de Bienestar Social, sección Deportes."
        }
      ]
    }
  ],
  "name": "MonoblockUMSA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
