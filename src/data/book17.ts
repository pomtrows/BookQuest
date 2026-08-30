import type { Section } from '../types/game';

export const storyDataBook17: Record<string, Section> = {
  "1": {
    "id": "1",
    "text": [
      "Après avoir échangé d'ultimes et brèves paroles d'adieux avec votre mentor, vous vous élancez le long de l'instable échelle de corde avec la grâce et la vitesse légendaires qui vous séparent du commun des guerriers. Quelques secondes plus tard, vous sautez avec la souplesse d'un chat sur le pont pour vous retrouver face à Banedon.",
      "Votre ami vous accueille avec un sourire joyeux, mais ses traits familiers ne peuvent masquer une sourde angoisse, nourrie par la terrible menace que vous allez devoir affronter à Ixia. Après avoir adressé un dernier geste de salut à Rimoah, vous vous retirez dans la chaleur de la cabine de Banedon tandis que la Nef du Ciel, glissant au-dessus de la muraille sud du Monastère, prend son essor et s'élève dans le ciel plombé.",
      "Banedon a déjà établi la route à suivre pour atteindre Vadera, la capitale de la Lencia, qui se dresse à plus d'une pleine journée de vol à l'ouest du Sommerlund. S'il ne s'agissait de la première étape du long périple qui doit vous mener à Ixia, vous auriez accueilli avec joie l'occasion de vous rendre dans cette ville, car vous comptez de nombreux amis à la cour du Roi Sar-nac de Lencia.",
      "Pendant le vol, Banedon vous expose le détail des dispositions qui ont été prises à votre intention. Le Roi Sarnac en personne a promis son aide : il vous fournira un navire et son équipage pour vous conduire de Vadera à l'île d'Azgad, un lointain poste avancé Lencien dans la mer de Tozaz.",
      "Lorsque vous y arriverez, vous serez transféré à bord d'un brise-glace, un bâtiment spécialement conçu pour affronter les traîtres bancs de glace qui bordent les rivages d'Ixia à cette époque de l'année. - Le brise-glace te débarquera sur la côte d'Ixia, Loup Solitaire, précise Banedon, et il restera mouillé sur place jusqu'à ce que tu reviennes, une fois ta mission accomplie. - Combien de temps le bateau m'attendra-t-il ? demandez-vous, non sans appréhension. - Si tu n'es pas de retour au bout de sept jours, l'équipage a ordre de faire voile sans toi vers Vadera.",
      "La Tozaz est une mer cruelle et terrible en hiver. Aucun homme ordinaire ne saurait espérer y survivre plus d'une semaine, quelles que soient la robustesse de son navire et l'abondance de ses vivres. Ce qui me fait justement penser... que si tu veux revenir vivant de ta petite excursion dans le royaume gelé du Seigneur de la Mort Ixiataaga, tu vas avoir besoin d'une protection spéciale.",
      "Si vous possédez une Amulette de Platine, rendez-vous au 166.",
      "Si vous ne disposez pas de cet Objet Spécial, rendez-vous au 282."
    ],
    "choices": [
      {
        "text": "Si vous possédez une Amulette de Platine, rendez-vous au 166.",
        "targetId": "166"
      },
      {
        "text": "Si vous ne disposez pas de cet Objet Spécial, rendez-vous au 282.",
        "targetId": "282"
      }
    ]
  },
  "2": {
    "id": "2",
    "text": [
      "Furtifs et excités comme une meute de chiens flairant un renard dans sa tanière, les Drakkarims morts vivants entourent votre cachette et referment leur cercle sur vous. Encore quelques secondes et ils passeront à l'attaque !",
      "Si vous maîtrisez la Grande Discipline du Foudroiement Psychique et si vous avez atteint le rang de Grand Maître Tutélaire, rendez-vous au 279.",
      "Si vous ne remplissez pas ces deux conditions, rendez-vous au 31."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Foudroiement Psychique et si vous avez atteint le rang de Grand Maître Tutélaire, rendez-vous au 279.",
        "targetId": "279"
      },
      {
        "text": "Si vous ne remplissez pas ces deux conditions, rendez-vous au 31.",
        "targetId": "31"
      }
    ]
  },
  "3": {
    "id": "3",
    "text": [
      "Malgré tous vos efforts, la nouvelle vague de Monstres des Laves rejoint le Seigneur Démon avant vous et forme un cercle protecteur autour de son corps luisant comme la glace. L'un d'eux, sans doute le chef de cette patrouille de chasse, s'approche maintenant du Taga-zin.",
      "Dans ses pattes cornées, il tient cet étrange objet de métal que vous avez repéré grâce à votre maîtrise Kaï. Quand il se retourne, vous comprenez tout à coup que cet objet est un heaume de pouvoir, garni au sommet d'une pointe de cristal. Le monstre en coiffe la tête du Seigneur Démon, et la pointe se met aussitôt à luire d'un éclat menaçant.",
      "Puis, tous les Monstres des Laves remontent dans le ciel pour y voler lentement en cercle, impatients d'assister au formidable duel qui s'annonce. Revigoré par le pouvoir du Heaume Magique, Tagazin se rue soudain sur vous tête baissée, soufflant tel un taureau furieux.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse ou la Grande Discipline de l'Exploration, ajoutez 3 au chiffre obtenu.",
      "Si le résultat est inférieur ou égal à 4, rendez-vous au 72.",
      "S'il est supérieur ou égal à 5, rendez-vous au 308."
    ],
    "choices": [
      {
        "text": "rendez-vous au 72.",
        "targetId": "72"
      },
      {
        "text": "rendez-vous au 308.",
        "targetId": "308"
      }
    ]
  },
  "4": {
    "id": "4",
    "text": [
      "Vous faites le tour de la salle, redoutant à chaque instant que le cercle des Humanoïdes, visiblement gelés, ne se referme sur vous. Mais, fort heureusement, aucun d'eux ne manifeste la moindre velléité de mouvement. Au moment où vous passez devant le rideau de lumière, une vague de nausée vous soulève l'estomac et vous fait défaillir au point de perdre 2 points d'ENDURANCE.",
      "Néanmoins, votre recherche obstinée finit par payer quand vous découvrez un panneau en partie dissimulé dans le mur. Lorsque vous vous en approchez, il coulisse sans bruit, révélant une volée de marches qui s'élèvent jusqu'à une chambre vide. Vous entrez dans cette pièce pour trouver dans son mur nord un panneau de porte taillée dans un cristal vert opaque.",
      "En l'examinant de plus près, vous découvrez un étrange palastre disposé en son milieu.",
      "Si vous voulez examiner cette serrure, rendez-vous au 322.",
      "Si vous préférez ne pas gaspiller de temps avec la porte de cristal et revenir sur vos pas, rendez-vous au 299."
    ],
    "choices": [
      {
        "text": "Si vous voulez examiner cette serrure, rendez-vous au 322.",
        "targetId": "322"
      },
      {
        "text": "Si vous préférez ne pas gaspiller de temps avec la porte de cristal et revenir sur vos pas, rendez-vous au 299.",
        "targetId": "299"
      }
    ]
  },
  "5": {
    "id": "5",
    "text": [
      "Votre saut, mal négocié, vous laisse cloué au sol, une jambe fracturée en trois endroits. Serrant les dents pour lutter contre la douleur, vous faites appel à vos pouvoirs de Guérison pour ressouder vos os brisés. Hélas, avant que votre jambe soit consolidée, vous êtes écrabouillé sous une monstrueuse avalanche de débris...",
      "Faisant preuve d'un courage indomptable, vous avez défait le Seigneur de la Mort Ixiataaga, sauvant des millions d'âmes du tourment d'un esclavage éternel. Tant que les forces du Bien régneront sur le Magnamund, le souvenir glorieux de votre victoire sera honoré dans toutes les mémoires."
    ],
    "choices": []
  },
  "6": {
    "id": "6",
    "text": [
      "Vous entendez un léger déclic, puis la porte s'ouvre sans bruit. En franchissant le seuil, vous entrez dans une salle entièrement recouverte de cristal noir poli, où les murs lisses comme des miroirs vous renvoient jusqu'à l'infini une myriade d'images de vous-même.",
      "Subitement, vous vous rendez compte que vous n'êtes pas seul: trois créatures mortes vivantes que vous n'aviez pas aperçues en pénétrant dans la pièce montent la garde devant un passage voûté. Ces créatures sont différentes de toutes celles que vous avez jamais rencontrées.",
      "Leurs mains verdâtres cadavériques étreignent mollement les manches de tridents aux pointes barbelées. Tout à coup, elles prennent conscience de votre présence et se ruent en brandissant leurs armes, visiblement impatientes de vous embrocher contre le mur.",
      "Si vous possédez un arc et si vous désirez l'utiliser, rendez-vous au 287.",
      "Sinon, rendez-vous au 64."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et si vous désirez l'utiliser, rendez-vous au 287.",
        "targetId": "287"
      },
      {
        "text": "Sinon, rendez-vous au 64.",
        "targetId": "64"
      }
    ]
  },
  "7": {
    "id": "7",
    "text": [
      "Mettant en action vos facultés Magnakaï de Camouflage et de Défense Psychique pour protéger votre corps et votre esprit, vous vous engouffrez sous le passage voûté. Plusieurs centaines de mètres plus loin, vous atteignez un large escalier de pierre qui monte jusqu'à une plate-forme, loin au-dessus du niveau du lac souterrain.",
      "A mesure que vous escaladez les marches, la température, déjà polaire, continue de s'abaisser. Vous tremblez et claquez des dents en dépit de la double protection de votre Amulette de Platine et de vos pouvoirs Magnakaï. Lorsque vous atteignez enfin la plate-forme, c'est pour y découvrir un spectacle ahurissant.",
      "Au-delà d'une ouverture creusée dans la roche, deux guerriers Ixians morts vivants montent la garde devant un paysage d'apocalypse, un chaos de roc et de glace balayé par les tourbillons d'une tempête de neige qu'un orage illumine d'un éclat spectral, dévoilant les crêtes déchiquetées d'une lointaine chaîne de montagnes.",
      "Instinctivement, vous reculez d'un pas de crainte d'être repéré. Mais, quelques secondes plus tard, grâce à votre sixième sens Kaï, vous êtes sûr que le pouvoir maléfique qui anime et contrôle les gardes est momentanément inactif. Pour l'heure, ces deux squelettes ne constituent donc pas une menace.",
      "En revanche, vous ne pouvez pas en dire autant de l'unité de Drakkarims morts vivants qui, à l'instant même, gravit les marches derrière vous... Poussé par la nécessité, vous franchissez stoïquement le seuil taillé dans le roc pour vous enfoncer dans le blizzard mordant à la recherche de la cité de Xaagon.",
      "Rendez-vous au 44."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 44.",
        "targetId": "44"
      }
    ]
  },
  "8": {
    "id": "8",
    "text": [
      "A l'instant où vous pénétrez dans le halo lumineux, une douleur atroce vous envahit de la tête aux pieds. Paralysé par la souffrance, vous sentez que votre corps échappe à la gravité et qu'il s'élève irrésistiblement. Au bord de l'inconscience, vous avez perdu 10 points d'ENDURANCE et, quand la lumière s'évanouit soudain, vous reprenez le contrôle de vos muscles, à genoux sur un sol de cristal noir dont la surface, polie comme un miroir, reflète l'image de votre visage marqué par la souffrance.",
      "Redressant avec peine votre tête douloureuse, vous voyez avec horreur trois créatures mortes vivantes accourir vers vous, venant d'un passage voûté. Elles brandissent des tridents aux pointes barbelées dans leurs mains verdâtres cadavériques, dans le but avoué de vous clouer au sol comme on épingle un insecte...",
      "Si vous possédez un arc et si vous désirez l'utiliser, rendez-vous au 287.",
      "Si vous maîtrisez la Grande Discipline du Foudroiement Psychique, rendez-vous au 96.",
      "Si vous ne disposez ni de l'un ni de l'autre, ou si vous ne voulez pas y faire appel, rendez-vous au 64."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et si vous désirez l'utiliser, rendez-vous au 287.",
        "targetId": "287"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline du Foudroiement Psychique, rendez-vous au 96.",
        "targetId": "96"
      },
      {
        "text": "Si vous ne disposez ni de l'un ni de l'autre, ou si vous ne voulez pas y faire appel, rendez-vous au 64.",
        "targetId": "64"
      }
    ]
  },
  "9": {
    "id": "9",
    "text": [
      "Alors que vous levez les yeux vers la monstrueuse tour, vous percevez les ondes maléfiques qui irradient ses murs gainés de glace. Ces ondes semblent croître et diminuer au même rythme que les pulsations de lumière pourpre qui émanent de son sommet. La formidable acuité de vos pouvoirs Kaï vous permet également de détecter une concentration très dangereuse d'ultraviolets dans le spectre lumineux.",
      "Ces émanations lumineuses sont si intenses que vous en ressentez des troubles physiques, et vous éprouvez une grande difficulté à détourner votre regard. En fait, cette diabolique lumière exerce sur vous autant de fascination que de répulsion... Soudain, vous comprenez que vous êtes confronté au pouvoir maléfique du Seigneur de la Mort.",
      "Ixtiataaga en personne se trouve en ce moment même quelque part dans cette sinistre tour...",
      "Si vous maîtrisez la Grande Discipline de l'Ecran Psychique, rendez-vous au 325.",
      "Sinon, rendez-vous au 245."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Ecran Psychique, rendez-vous au 325.",
        "targetId": "325"
      },
      {
        "text": "Sinon, rendez-vous au 245.",
        "targetId": "245"
      }
    ]
  },
  "10": {
    "id": "10",
    "text": [
      "Dans un claquement sourd, la serrure se débloque et la lourde porte s'entrebâille en grinçant sur ses gonds. Une bourrasque d'air glacé vous cingle le visage lorsque vous poussez le battant pour prendre pied sur une plateforme d'observation fixée sur la structure métallique extérieure du gigantesque sous-marin ennemi.",
      "Sur la droite, vous pouvez voir au loin un alignement de brise-glace mouillés le long de la rive du lac. Sur la gauche, vous apercevez une colonne de guerriers squelettiques. Suivant d'un pas mécanique un Kherbala vêtu d'une robe noire, ces sinistres créatures avancent le long d'une jetée en direction de la bouche d'un tunnel.",
      "Vos infaillibles sens Kaï vous indiquent que vous êtes arrivé à Ixia et que ce lointain tunnel conduit à la surface. Vous mémorisez la position des brise-glace car, si vous parvenez au bout de votre mission, il faudra bien trouver un moyen de vous échapper de l'enfer glacé d'Ixia.",
      "Vous examinez ensuite avec soin les parages immédiats du sous-marin.",
      "Pour atteindre le lointain tunnel, deux solutions s'offrent à vous : emprunter la jetée contre laquelle est amarré le bâtiment (rendez-vous au 30) ou plonger dans les eaux glaciales du lac et nager jusqu'à la rive (rendez-vous au 161)."
    ],
    "choices": [
      {
        "text": "rendez-vous au 30) ou plonger dans les eaux glaciales du lac et nager jusqu'à la rive (rendez-vous au 161).",
        "targetId": "30"
      }
    ]
  },
  "11": {
    "id": "11",
    "text": [
      "Vous pilotez le navire avec prudence le long d'un entrelacs d'étroits chenaux qui offrent un passage incertain à travers le traître chaos du champ d'icebergs. Mêlant signaux manuels et télépathie, vous indiquez la manoeuvre à l'homme de barre posté à l'arrière du bateau.",
      "Régulièrement, votre vision est gênée par des bourrasques de neige poudreuse qui s'abattent des crêtes des falaises de glace et balaient le pont du navire. Frappé de plein fouet par une bourrasque plus violente que les autres, vous êtes momentanément aveuglé par ses furieux tourbillons.",
      "Alors que vous levez les mains pour protéger vos yeux assaillis par des milliers de flocons cinglants, le hurlement incessant du vent s'accompagne soudain du crissement torturé de la coque heurtant un banc de glace immergé. Sous la violence du choc, le navire se couche sur bâbord et vous manquez de peu de passer par-dessus bord.",
      "Projeté contre le bastingage, vous allez rebondir sur le pont où vous restez un moment étendu, à demi assommé, cherchant votre souffle. (Vous perdez 2 points d'ENDURANCE.) Vous reprenez vos esprits et vous vous relevez d'un bond pour retourner à votre poste à l'étrave.",
      "La collision a visiblement semé la terreur parmi l'équipage : presque tous les matelots sont blottis le long de la lisse et adressent de ferventes prières à la déesse Ishir en levant des yeux horrifiés vers les immenses falaises blanches qui menacent de vous engloutir.",
      "La peur règne à bord quand, presque sans transition, le vent chargé de neige mollit et le navire émerge du champ d'icebergs pour fendre les eaux libres de la mer de Tozaz. Lorsqu'ils parviennent enfin à se persuader qu'ils ont vraiment échappé à un destin funeste, les hommes d'équipage poussent en chœur un vibrant hourra, et l'un d'eux fait sauter le bouchon d'une vieille bouteille de rhum brun qu'il avait amoureusement conservée pour quelque grande occasion.",
      "Il s'en accorde une solide lampée, puis vous passe la bouteille d'un geste fraternel. Mais, au moment où vos lèvres gercées s'entrouvrent pour accueillir la chaude coulée du revigorant breuvage, la voix forte du timonier retentit du haut de la dunette : - Navire droit devant !",
      "Sentant vos entrailles se nouer à nouveau sous l'étau de la peur, vous vous tournez vers l'avant et vous concentrez votre regard d'aigle sur la lointaine silhouette du vaisseau inconnu. Rendez- vous au 195."
    ],
    "choices": [],
    "damage": 2
  },
  "12": {
    "id": "12",
    "text": [
      "Le Bâton de Mort ne vibre plus sous l'effet de sa puissance contenue. Et vous comprenez qu'Ixiataaga a libéré toute son énergie maléfique en une seule fois, dans l'espoir de vous asséner un coup foudroyant et définitif. Aussi le Bâton de Mort ne retrouvera-t-il pas ses noirs pouvoirs avant plusieurs minutes... un délai dont vous pouvez tirer grand avantage si vous réagissez avec la célérité qui s'impose !",
      "Vous élevez le Glaive de Sommer et un flot de lumière d'or jaillit de son pommeau, illuminant la chambre jonchée de débris. - Pour le Sommerlund et pour le Kaï ! rugissez-vous d'une voix terrible, avant de franchir d'un bond puissant le fossé ardent pour atterrir à moins d'un mètre de la silhouette hideuse du Seigneur de la Mort.",
      "Ixiataaga demeure un instant abasourdi par la fantastique audace de votre geste, mais il a tôt fait de recouvrer ses esprits et il pivote sur lui-même avec une rapidité fulgurante pour parer votre assaut.",
      "Rendez-vous au 214."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 214.",
        "targetId": "214"
      }
    ]
  },
  "13": {
    "id": "13",
    "text": [
      "Vos poumons sont en feu et vous êtes sur le point de sombrer dans l'inconscience quand vous arrivez enfin à extirper la dose de Sabito de votre Sac à Dos pour l'introduire dans votre bouche. Heureusement, les effets de l'herbe sont rapides. Votre corps absorbe l'oxygène de l'eau glacée à travers les pores de la peau et vous sentez renaître vos forces.",
      "Vous n'avez plus besoin de remonter à la surface pour respirer. Quelques minutes plus tard, vous atteignez le rivage au pied d'un étroit chemin empierré. Ce chemin monte jusqu'à une route d'où un embranchement part en direction du tunnel que vous souhaitez atteindre.",
      "Ne gardant que le sommet de la tête hors de l'eau, vous vous cramponnez aux pierres du chemin et attendez patiemment qu'une patrouille de guerriers morts vivants ait fini de passer.",
      "Rendez-vous au 169."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 169.",
        "targetId": "169"
      }
    ]
  },
  "14": {
    "id": "14",
    "text": [
      "Vous escaladez les marches couvertes d'une traîtresse couche de glace qui montent jusqu'au sommet de la tour de guet, ouvert à l'air libre. Vous y retrouvez Prarg, rougissant sous l'effort, en train de bander le puissant ressort d'une baliste de siège, une lourde arbalète de fer montée sur un socle pivotant.",
      "Attiré vers le parapet de pierre de la tour par de nouveaux cris d'effroi et de panique, vous vous y précipitez pour voir en contrebas le grand vaisseau noir s'immobiliser en heurtant brutalement le quai. Aussitôt, une meute de guerriers morts vivants bondit à terre pour se lancer aux trousses des Lenciens désemparés.",
      "Une lueur surnaturelle brûle au fond de leurs orbites vides et ils se ruent en hurlant comme une horde de démons à la poursuite de leurs proies humaines. Pendant ce temps, Prarg a achevé d'armer la baliste et il vous appelle pour que vous en dirigiez le tir.",
      "Vous allez sur-le-champ vous installer aux commandes du redoutable engin et le faites pivoter à la recherche d'une cible, pour comprendre bien vite que vous devez choisir entre deux objectifs : la masse des morts vivants qui déferlent sur le quai ou une lumineuse sphère de verre fixée sur un socle à côté de la barre du navire des assaillants.",
      "Si vous désirez tirer dans la horde des morts vivants, rendez-vous au 114.",
      "Si vous préférez prendre pour cible la sphère lumineuse, rendez-vous au 251."
    ],
    "choices": [
      {
        "text": "Si vous désirez tirer dans la horde des morts vivants, rendez-vous au 114.",
        "targetId": "114"
      },
      {
        "text": "Si vous préférez prendre pour cible la sphère lumineuse, rendez-vous au 251.",
        "targetId": "251"
      }
    ]
  },
  "15": {
    "id": "15",
    "text": [
      "Vous utilisez tout le pouvoir que vous confère votre Grande Maîtrise Kaï pour alléger le poids de votre corps et éviter de vous enfoncer encore plus dans la vase. C'est chose faite quand la créature qui vit en ce lieu frôle pour la deuxième fois votre jambe, mettant vos nerfs à vif.",
      "Vous devez agir sans plus attendre ! Les parois du puits sont lisses comme du verre sur les trois premiers mètres qui surmontent le bourbier. Mais, au-delà, la pierre est grossièrement taillée et parsemée de saillies rocheuses et d'éperons pointus. Ces éperons offriraient de bonnes prises... à condition de pouvoir en atteindre un.",
      "En supposant que vous y parveniez, la suite de l'ascension serait un jeu d'enfant pour un guerrier doué de votre incomparable agilité.",
      "Si vous possédez une Corde (huilée ou non), rendez-vous au 323.",
      "Si vous n'avez pas un tel objet dans votre Sac à Dos, rendez-vous au 210."
    ],
    "choices": [
      {
        "text": "Si vous possédez une Corde (huilée ou non), rendez-vous au 323.",
        "targetId": "323"
      },
      {
        "text": "Si vous n'avez pas un tel objet dans votre Sac à Dos, rendez-vous au 210.",
        "targetId": "210"
      }
    ]
  },
  "16": {
    "id": "16",
    "text": [
      "Foudroyé par un ultime coup, le monstre laisse échapper un cri perçant et s'effondre de tout son long sur le sol de la caverne. La puanteur de son corps putride vous soulève le cœur, mais vous finissez par vous en accommoder en constatant que son énorme masse a le mérite d'arrêter le vent glacé qui s'engouffre par l'entrée de la grotte.",
      "Après vous être assuré que les lieux ne recèlent aucune autre abomination, vous allez vous asseoir dans un coin reculé de la cavité et vous vous octroyez une collation bien méritée qui vous fait récupérer 3 points d'ENDURANCE.",
      "Rendez-vous au 289."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 289.",
        "targetId": "289"
      }
    ]
  },
  "17": {
    "id": "17",
    "text": [
      "Tous les sens en éveil, vous faites halte pour observer attentivement le rideau de lumière. Et vos cheveux se hérissent sur votre nuque, signe de la présence certaine d'un danger. Mais vous savez que ce passage donne accès au seul chemin qui conduise à coup sûr aux niveaux supérieurs de cette sinistre citadelle.",
      "Si vous voulez traverser le passage illuminé, rendez- vous au 52.",
      "Si vous préférez chercher un autre chemin pour atteindre les étages supérieurs de la spirale de cristal, rendez- vous au 158."
    ],
    "choices": []
  },
  "18": {
    "id": "18",
    "text": [
      "Vous quittez le navire Ixian pour retrouver le capitaine Lanza. Ses hommes, à côté de la tour de guet, achèvent d'ériger un bûcher avec les guenilles et les ossements brisés des vaincus. Lorsque la dernière dépouille a rejoint le macabre empilement, un sergent édenté l'asperge du contenu d'un bidon d'huile de Skark avant de l'enflammer à l'aide d'une torche.",
      "Vous vous avancez vers Lanza et lui donnez une cordiale bourrade dans le dos. - Quelle bataille, capitaine ! Vous et vos hommes avez su faire honneur à Lencia en ce jour. Le capitaine Lanza accueille votre compliment avec une mine sombre. - Non, sire, marmonne-t-il tristement.",
      "Ce sont les forces du Mal qui ont gagné la partie. Le brise-glace est au fond de l'eau, nous ne pourrons pas vous transporter jusqu'à Ixia. - Qu'importe ! Il nous reste le navire ennemi, répliquez-vous avec une joyeuse assurance. Il est exactement taillé pour ma petite croisière.",
      "Je n'ai rien de plus à vous demander que quelques vivres et un équipage. A ces mots, le visage du capitaine s'éclaire. Lançant des ordres précis, il organise les préparatifs de votre voyage et, moins d'une heure plus tard, vous êtes prêt à appareiller. - Que les dieux vous gardent, Grand Maître, dit Prarg, d'une voix étranglée par l'émotion, qui se tient devant vous avec Lanza, au moment des adieux. - N'ayez crainte, vieux camarade, répondez-vous.",
      "Je serai bientôt de retour.",
      "Utilisez la Table de Hasard.",
      "Si vous obtenez un chiffre inférieur ou égal à 4, rendez-vous au 332.",
      "S'il est supérieur ou égal à 5, rendez-vous au 224."
    ],
    "choices": [
      {
        "text": "Si vous obtenez un chiffre inférieur ou égal à 4, rendez-vous au 332.",
        "targetId": "332"
      },
      {
        "text": "rendez-vous au 224.",
        "targetId": "224"
      }
    ]
  },
  "19": {
    "id": "19",
    "text": [
      "Faisant appel à la Grande Discipline du Nexus, vous vous concentrez sur le trou de serrure, certain que votre pouvoir saura en libérer lé mécanisme.",
      "Utilisez la Table de Hasard. Ajoutez 1 point au chiffre obtenu pour chaque rang de Grande Maîtrise Kaï au-delà de celui de Grand Maître Principal.",
      "Si le résultat est inférieur ou égal à 7, rendez-vous au 65.",
      "S'il est supérieur ou égal à 8, rendez-vous au 143."
    ],
    "choices": [
      {
        "text": "rendez-vous au 65.",
        "targetId": "65"
      },
      {
        "text": "rendez-vous au 143.",
        "targetId": "143"
      }
    ]
  },
  "20": {
    "id": "20",
    "text": [
      "Dans la seconde même où vous projetez mentalement le nombre à deux chiffres sur le palastre, la porte se dématérialise. Elle devient progressivement transparente, puis disparaît comme si elle s'était dissoute dans l'air. Arborant un sourire modeste et néanmoins satisfait, vous franchissez le porche désormais grand ouvert et pénétrez dans une salle voûtée de forme oblongue.",
      "Au fond de cette pièce, entre deux piliers, sous un arc électrique d'où jaillit une lumière puissante, s'ouvre un sombre corridor. Passer entre les piliers pourrait vous être fatal. A l'évidence, le flux d'énergie qui les relie possède une puissance dévastatrice.",
      "Cependant, il existe peut-être un moyen d'éviter son contact mortel. Les piliers ne s'élèvent pas jusqu'au plafond, et vous estimez qu'une soixantaine de centimètres séparent leur sommet de la voûte.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez l'utiliser, rendez-vous au 136.",
      "Si vous voulez tenter de grimper le long d'un des piliers et de vous glisser entre son sommet et le plafond pour atteindre la pièce suivante, rendez-vous au 297.",
      "Si vous décidez de vous en remettre à votre bonne étoile et de foncer droit entre les deux piliers, rendez-vous au 211."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez l'utiliser, rendez-vous au 136.",
        "targetId": "136"
      },
      {
        "text": "Si vous voulez tenter de grimper le long d'un des piliers et de vous glisser entre son sommet et le plafond pour atteindre la pièce suivante, rendez-vous au 297.",
        "targetId": "297"
      },
      {
        "text": "Si vous décidez de vous en remettre à votre bonne étoile et de foncer droit entre les deux piliers, rendez-vous au 211.",
        "targetId": "211"
      }
    ]
  },
  "21": {
    "id": "21",
    "text": [
      "Vous n'êtes plus qu'à quelques dizaines de mètres du rivage lorsque vous êtes soudain bousculé par le corps massif d'une monstrueuse créature sous-marine surgie des profondeurs. Ballotté par les remous de son sillage, vous vous efforcez désespérément de dégainer votre arme pendant que le monstre sans nom décrit un large cercle autour de vous.",
      "Vous parvenez à saisir votre arme quand, ayant pris de l'élan, la bête fond à nouveau sur vous en faisant bouillonner les eaux noires. ORGHLE IXIAN HABILETÉ: 50 ENDURANCE: 60 Diminuez de 4 points votre total d'HABILETÉ pendant la durée de ce combat sous-marin, l'impossibilité de respirer constituant, même pour un guerrier tel que vous, un handicap certain.",
      "Vous pouvez tenter de fuir ce combat après 4 Assauts en vous rendant au 138.",
      "Si vous en sortez victorieux, rendez-vous au 68."
    ],
    "choices": [
      {
        "text": "Si vous en sortez victorieux, rendez-vous au 68.",
        "targetId": "68"
      }
    ],
    "combat": {
      "name": "ORGHLE IXIAN",
      "combatSkill": 50,
      "endurance": 60,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "22": {
    "id": "22",
    "text": [
      "C'est dans la trentième heure de votre traversée aérienne que les yeux perçants de la vigie de la Nef du Ciel distinguent enfin les lointains contours de Vadera. Dans un bourdonnement de ruche, l'équipage de nains se prépare aux délicates manœuvres d'atterrissage tandis que vous voyez s'approcher les remparts et les hautes tours de la capitale Lencienne.",
      "Gouverné d'une main experte par le maître d'équipage Nolrim, le vaisseau volant se pose en douceur sur la large place pavée qui s'étend au pied de la citadelle de la ville, dégagée de sa foule habituelle en prévision de votre arrivée. Débarquant avec Banedon, vous êtes accueillis avec un minimum de cérémonie par une délégation de personnages officiels aux traits sévères qui vous escortent directement auprès du Roi Sarnac. - C'est pour nous un grand honneur de vous accueillir une nouvelle fois dans notre cité, déclare le monarque en inclinant sa tête ornée d'une vaste chevelure d'argent.",
      "Mon seul regret tient à la raison de votre visite. J'aurais voulu que notre réunion pût se tenir sous de moins sombres auspices. Après vous être incliné avec respect devant le vieux roi, vous vous tournez vers un personnage d'un âge encore plus vénérable qui se tient à la droite du trône.",
      "Vous l'avez reconnu dès que vous êtes entré dans la chambre royale : il n'est autre que le Seigneur Ardan, un des Anciens Mages du Dessi, membre de la Confrérie du Seigneur Rimoah. - Que voilà une heureuse rencontre, noble Seigneur ! dites-vous. Le visage ridé du sage vieillard accueille votre salut d'un chaleureux sourire, mais ce sourire s'efface lorsqu'il prend la parole, entrant sans ambages dans le vif du sujet. -Je ne doute pas que votre avisé compagnon, le Maître de Guilde Banedon, aura su vous entretenir de la résurgence des forces du Mal en Ixia, Grand Maître.",
      "Et c'est là en vérité une bien néfaste nouvelle, car notre existence s'en trouve menacée. Si la puissance du Seigneur de la Mort devait continuer à croître sans frein, la Len-cia serait le premier État libre à subir son déchaînement. - Sur mon honneur, je ferai tout ce qui est en mon pouvoir pour prévenir une telle issue, monseigneur, jurez-vous d'une voix impavide. - Nul ici ne songerait à en douter, Loup Solitaire, intervient le Roi Sarnac, et nous allons vous apporter toute l'aide nécessaire.",
      "Sur ces mots, le Seigneur Ardan adresse un signe à un garde en armure d'argent qui sort aussitôt de la salle. Il revient un instant plus tard, accompagné d'un capitaine de la Garde en grand uniforme.",
      "Si au cours de vos précédentes aventures, vous avez combattu à la bataille de Cetza ou pénétré dans la cité de Dhârk, rendez-vous au 305.",
      "Sinon, rendez-vous au 129."
    ],
    "choices": [
      {
        "text": "rendez-vous au 305.",
        "targetId": "305"
      },
      {
        "text": "Sinon, rendez-vous au 129.",
        "targetId": "129"
      }
    ]
  },
  "23": {
    "id": "23",
    "text": [
      "Vous adressez une brève prière à la déesse Ishir pour le salut de votre âme et vous vous élancez, l'arme haute, à l'assaut des guerriers squelettes. IXIANS MORTS VIVANTS HABILETÉ: 48 ENDURANCE: 55 Vous devez livrer ce combat jusqu'au bout, sans possibilité de fuite.",
      "Si vous êtes victorieux, rendez-vous au 152."
    ],
    "choices": [
      {
        "text": "Si vous êtes victorieux, rendez-vous au 152.",
        "targetId": "152"
      }
    ],
    "combat": {
      "name": "IXIANS MORTS VIVANTS",
      "combatSkill": 48,
      "endurance": 55,
      "mindblastImmune": false,
      "undead": true
    }
  },
  "24": {
    "id": "24",
    "text": [
      "Faute de maîtriser la Grande Discipline de l'Écran Psychique, vous vous hâtez d'utiliser votre maîtrise de la Discipline de l'Écran Psychique afin d'ériger autour de votre esprit une barrière défensive capable de le protéger d'un éventuel Assaut. Une précaution pleine de sagesse, mais, hélas, inefficace face à la puissance de ces entités.",
      "Votre muraille psychique est à peine mise en place que les fumerolles fusent à travers la chambre pour vous entourer d'un cercle fuligineux. Elles tournoient, de plus en plus vite... Soudain, une formidable vague d'assaut psychique déferle sur votre esprit, raz-de-marée qui balaie votre écran.",
      "Pantelant, tremblant des pieds à la tête, vous perdez 8 points d'ENDURANCE. Fragilisé par ce choc mental, mais toujours maître de vos sens, vous découvrez, consterné, que les fumerolles se sont maintenant métamorphosées en six créatures matérielles. Elles ont revêtu l'apparence d'énormes insectes noirs aux membres fuselés, pourvus de hideuses têtes de goule dont les yeux proéminents à facettes vous considèrent avec une lueur féroce.",
      "Faisant crisser leurs mandibules avec avidité, les six monstres s'avancent sur leurs longues pattes luisantes.",
      "Si vous voulez tenter d'échapper à ces abominations, rendez-vous au 98.",
      "Si vous avez un arc et si vous désirez l'utiliser, rendez-vous au 244.",
      "Si vous ne voulez ni vous enfuir ni faire usage d'un arc, rendez-vous au 115."
    ],
    "choices": [
      {
        "text": "Si vous voulez tenter d'échapper à ces abominations, rendez-vous au 98.",
        "targetId": "98"
      },
      {
        "text": "Si vous avez un arc et si vous désirez l'utiliser, rendez-vous au 244.",
        "targetId": "244"
      },
      {
        "text": "Si vous ne voulez ni vous enfuir ni faire usage d'un arc, rendez-vous au 115.",
        "targetId": "115"
      }
    ],
    "damage": 8
  },
  "25": {
    "id": "25",
    "text": [
      "Pensant que l'avertissement de votre sixième sens est suscité par la présence hostile des guerriers squelettes, vous n'y prêtez pas garde... et vous commettez ainsi une lourde erreur ! Alors que votre main se referme sur le bâton d'argent, il crache une seconde décharge d'énergie qui vous frappe de plein fouet à l'estomac.",
      "Le choc est d'une violence telle que vous êtes soulevé du sol. Vous perdez 10 points d'ENDURANCE.",
      "Si vous survivez à cette terrible blessure, rendez-vous au 306."
    ],
    "choices": [
      {
        "text": "Si vous survivez à cette terrible blessure, rendez-vous au 306.",
        "targetId": "306"
      }
    ],
    "damage": 10
  },
  "26": {
    "id": "26",
    "text": [
      "Vous êtes caché derrière l'un des nombreux amas de détritus puants qui jonchent le plancher de la cale, quand une douzaine de guerriers morts vivants débouchent de l'escalier. Vos facultés de Camouflage Kaï vous rendent virtuellement invisible aux yeux de quiconque, mais ces créatures d'outre-tombe, qui n'ont plus d'yeux depuis longtemps, détiennent un puissant pouvoir psychique qu'elles mettent en œuvre pour vous dénicher.",
      "Si vous maîtrisez la Grande Discipline de l'Écran Psychique et si vous avez atteint le rang de Grand Maître Tutélaire ou un rang supérieur, rendez-vous au 267.",
      "Si vous ne la maîtrisez pas, ou si vous n'avez pas encore atteint le rang requis, rendez-vous au 2."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Écran Psychique et si vous avez atteint le rang de Grand Maître Tutélaire ou un rang supérieur, rendez-vous au 267.",
        "targetId": "267"
      },
      {
        "text": "Si vous ne la maîtrisez pas, ou si vous n'avez pas encore atteint le rang requis, rendez-vous au 2.",
        "targetId": "2"
      }
    ]
  },
  "27": {
    "id": "27",
    "text": [
      "A peine avez-vous sorti votre arme du fourreau qu'une douleur atroce vous transperce la jambe droite. De puissantes mâchoires se sont refermées sur votre mollet comme un étau. La bête qui vit dans ce bourbier cherche à vous entraîner sous la surface. Frappant avec l'énergie du désespoir, à l'aveuglette, vous tentez de l'atteindre pour lui faire lâcher prise.",
      "GLOUTON DES VASES HABILETÉ : 44 ENDURANCE : 44 Si vous sortez vainqueur de ce combat, rendez-vous au 67."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 67.",
        "targetId": "67"
      }
    ],
    "combat": {
      "name": "GLOUTON DES VASES",
      "combatSkill": 44,
      "endurance": 44,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "28": {
    "id": "28",
    "text": [
      "Alors que les yeux jaunes de la créature se rapprochent lentement, vous êtes assailli par une suffocante puanteur de chair pourrie qui vous retourne les entrailles et vous oblige à reculer.",
      "Si vous possédez le Glaive de Sommer et si vous désirez l'utiliser pour vous défendre, rendez-vous au 219.",
      "Si vous ne disposez pas de cet Objet Spécial, ou si vous préférez ne pas vous en servir, rendez-vous au 89."
    ],
    "choices": [
      {
        "text": "Si vous possédez le Glaive de Sommer et si vous désirez l'utiliser pour vous défendre, rendez-vous au 219.",
        "targetId": "219"
      },
      {
        "text": "Si vous ne disposez pas de cet Objet Spécial, ou si vous préférez ne pas vous en servir, rendez-vous au 89.",
        "targetId": "89"
      }
    ]
  },
  "29": {
    "id": "29",
    "text": [
      "Faisant appel à votre connaissance approfondie des arcanes de la magie de l'Étoile de Cristal, vous invoquez la formule du sortilège de la Chute douce et vous sautez sans hésiter. Comme retenu par une main invisible, vous descendez avec lenteur les vingt mètres de vide qui vous séparent du sol avant de vous poser sans heurt.",
      "Rendez-vous au 62."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 62.",
        "targetId": "62"
      }
    ]
  },
  "30": {
    "id": "30",
    "text": [
      "Faisant appel à vos facultés Kaï de Camouflage pour échapper à la vigilance de l'ennemi, vous glissez au pied de la plate-forme d'observation et vous vous suspendez à une aussière d'acier amarrant l'étrave du sous-marin. Vous progressez lentement le long du puissant câble, et vous atteignez finalement la jetée où vous vous empressez de vous dissimuler derrière un tas de caisses et de barils en bois.",
      "Devant vous, l'embarcadère grouille de soldats morts vivants qui, sous la direction de quelques créatures décharnées drapées de noir, s'activent à transborder du matériel à l'intérieur et hors de la gueule béante du sous-marin. A première vue, il semble impossible de se frayer impunément un chemin jusqu'à la terre au milieu d'une telle multitude.",
      "Vous envisagez de rejoindre le rivage à la nage quand, soudain, vous entrevoyez une possibilité d'atteindre votre but en vous épargnant un bain forcé...",
      "Rendez-vous au 207."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 207.",
        "targetId": "207"
      }
    ]
  },
  "31": {
    "id": "31",
    "text": [
      "Vous dégainez votre arme dès que le premier Drakka-rim mort vivant s'approche à moins d'un mètre. Aussitôt, de tous côtés, ses congénères se ruent sur vous avec une effrayante soudaineté. index DRAKKARIMS MORTS index VIVANTS HABILETÉ :"
    ],
    "choices": []
  },
  "33": {
    "id": "33",
    "text": [
      "Frappé de plein fouet par votre premier et ultime coup, le corps de Tagazin explose en une myriade de fragments gelés qui vont rebondir sur le sol comme une cascade de grêle opaque. Alors que vous vous écartez de ces restes tintinnabulants, vous levez les yeux vers le ciel pour voir la seconde vague de Monstres des Laves émerger des nuages en poussant des cris perçants.",
      "Stimulé par cette vision, vous prenez vos jambes à votre cou. Lancé à pleine vitesse, vous franchissez comme un éclair les derniers mètres qui vous séparent de la Porte d'Ombre et, avant que le premier Monstre des Laves ait pu vous barrer la route, vous plongez tête la première dans son noir tourbillon.",
      "Rendez-vous au 200."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 200.",
        "targetId": "200"
      }
    ]
  },
  "34": {
    "id": "34",
    "text": [
      "Vous traînez les dépouilles décharnées des deux Drak-karims dans la cabine et vous refermez la porte sur eux avant de poursuivre votre exploration. Vous avancez avec prudence, longeant telle une ombre le labyrinthe de coursives, de cales et de chambres basses de l'énorme navire.",
      "Vous marchez dans l'air froid, incommodé par la puanteur qui règne dans les entrailles du vaisseau, jusqu'à une coursive qui se divise en deux branches.",
      "Si vous voulez emprunter la branche de gauche, rendez-vous au 106.",
      "Si vous préférez prendre le passage de droite, rendez-vous au 292."
    ],
    "choices": [
      {
        "text": "Si vous voulez emprunter la branche de gauche, rendez-vous au 106.",
        "targetId": "106"
      },
      {
        "text": "Si vous préférez prendre le passage de droite, rendez-vous au 292.",
        "targetId": "292"
      }
    ]
  },
  "35": {
    "id": "35",
    "text": [
      "Dans un concert de hurlements rauques, les infectes créatures s'abattent sur vous tels des vautours affamés sur un cadavre. 3 KHERBALAS HABILETÉ: 56 ENDURANCE: 54 Les Kherbalas sont insensibles aux effets de la Puissance Psychique et de la Grande Discipline du Foudroiement Psychique.",
      "Vous pouvez fuir ce combat au terme de quatre Assauts en vous rendant au 41.",
      "Si vous êtes vainqueur, rendez- vous au 293."
    ],
    "choices": [],
    "combat": {
      "name": "KHERBALAS",
      "combatSkill": 56,
      "endurance": 54,
      "mindblastImmune": true,
      "undead": false
    }
  },
  "36": {
    "id": "36",
    "text": [
      "Tout à coup, tandis que vous filez dans le grand hall à travers un déluge de poussière de cristal, une formidable onde de choc ébranle l'édifice tout entier. Alors qu'il ne vous manque que quelques secondes pour atteindre la sortie, vous voyez avec horreur les murs se déformer et... la grande arche s'écroule !",
      "Utilisez la Table de Hasard. Si votre total d'ENDURANCE actuel est inférieur ou égal à 14, diminuez d'1 point le chiffre que vous avez obtenu. Si votre total d'ENDURANCE est supérieur ou égal à 24, ajoutez 1 point au chiffre obtenu.",
      "Si le résultat est inférieur ou égal à 3, rendez-vous au 316.",
      "S'il est supérieur ou égal à 4, rendez-vous au 193."
    ],
    "choices": [
      {
        "text": "rendez-vous au 316.",
        "targetId": "316"
      },
      {
        "text": "rendez-vous au 193.",
        "targetId": "193"
      }
    ]
  },
  "37": {
    "id": "37",
    "text": [
      "A peine avez-vous achevé de tailler en pièces la seconde vague d'assaillants qu'une troisième ligne de morts vivants se lance à l'attaque ! Piétinant, tels de maladroits automates, les restes mutilés de leurs semblables tombés sous vos coups, ils avancent sur vous en étreignant des lames rouillées dans leurs poings décharnés, leurs orbites glauques brûlant d'un feu diabolique.",
      "Comprenant que, cette fois, vous allez succomber sous le nombre, vous battez vivement en retraite et plongez dans un escalier qui s'enfonce dans la cale du navire. Vous entendez au- dessus de vous les cris des marins Lenciens qui luttent au corps à corps avec les Drakkarims morts vivants.",
      "Puis un claquement de bottes ferrées résonnant sur les marches vous prévient que les Drakkarims n'ont pas renoncé à vous poursuivre, et vous vous mettez à fouiller la cale d'un œil frénétique à la recherche d'une cachette.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 208.",
      "Si ce n'est pas le cas, rendez-vous au 26."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 208.",
        "targetId": "208"
      },
      {
        "text": "rendez-vous au 26.",
        "targetId": "26"
      }
    ]
  },
  "38": {
    "id": "38",
    "text": [
      "Vous n'avez pas fait plus de vingt pas que votre présence est trahie par l'aura de lumière bénéfique qui irradie de votre corps dans cet univers parallèle. Une grande agitation s'empare aussitôt des Monstres des Laves, et nombre d'entre eux s'élèvent dans le ciel.",
      "Guidés par un Tagazin assoiffé de vengeance, ils tournoient un moment au-dessus de vous avant d'attaquer en piqué, avides d'enfoncer leurs becs et leurs griffes dans vos chairs.",
      "MONSTRES DES LAVES HABILETÉ : 52 ENDURANCE : 52 Si vous sortez vainqueur de ce combat, rendez-vous au 105."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 105.",
        "targetId": "105"
      }
    ],
    "combat": {
      "name": "MONSTRES DES LAVES",
      "combatSkill": 52,
      "endurance": 52,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "39": {
    "id": "39",
    "text": [
      "Assailli par un sombre pressentiment, vous mettez en œuvre votre pouvoir Kaï et vous sondez l'envahissant banc de brume, pour y détecter presque aussitôt d'étranges mouvements dans la bande infrarouge du spectre lumineux. Vous ne pouvez déterminer avec exactitude la nature de ce qui s'agite ainsi, mais vous êtes certain d'une chose : il s'agit d'entités maléfiques et elles se rapprochent inexorablement de Fort Azgad !",
      "Vous informez le capitaine Lanza de vos craintes, mais il se montre poliment incrédule. Il vous explique en souriant qu'il n'est pas rare que les nouveaux arrivants s'imaginent voir toutes sortes de spectres dans les tourbillons de la brume de mer quand elle monte autour du fort.",
      "Mais à cet instant, vous entendez résonner le glas sourd d'une cloche discordante et le visage de Lanza se fige de stupeur. - Pa... par tous les dieux ! bredouille-t-il. C'est la cloche d'alarme... nous sommes attaqués !",
      "Rendez-vous au 181."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 181.",
        "targetId": "181"
      }
    ]
  },
  "40": {
    "id": "40",
    "text": [
      "ENDURANCE : 40 Ces êtres sont sensibles à toutes les formes d'attaque psychique. Aussi, pour la durée de ce combat, si vous utilisez ce type d'attaque, multipliez par deux tous les points supplémentaires dont vous pouvez bénéficier.",
      "Si vous êtes victorieux, rendez-vous au 324. A peine avez-vous infligé l'ultime coup de grâce à ces infectes créatures que leurs corps subissent une transformation épouvantable : leur torse implose dans un répugnant concert de craquements spongieux et, avant même qu'elles aient pu émettre un râle d'agonie, leurs restes déjetés s'éparpillent sur le sol pour tomber en poussière.",
      "Rengainant votre arme, vous contournez les trois petits tas nauséabonds qui souillent le sol noir de la pièce pour vous engouffrer dans un court passage donnant accès à une salle voûtée, de forme oblongue. Au fond de cette pièce, entre deux piliers, sous un arc électrique d'où jaillit une lumière puissante, s'ouvre un sombre corridor.",
      "Passer entre les piliers pourrait vous être fatal. A l'évidence, le flux d'énergie qui les relie possède une puissance dévastatrice. Cependant, il existe peut- être un moyen d'éviter son contact mortel. Les piliers ne s'élèvent pas jusqu'au plafond, et vous estimez qu'une soixantaine de centimètres séparent leur sommet de la voûte.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez l'utiliser, rendez-vous au 136.",
      "Si vous voulez tenter de grimper le long d'un des piliers et de vous glisser entre son sommet et le plafond pour atteindre la pièce suivante, rendez-vous au 297.",
      "Si vous décidez de vous en remettre à votre bonne étoile et de foncer droit entre les deux piliers, rendez-vous au 211."
    ],
    "choices": [
      {
        "text": "Si vous êtes victorieux, rendez-vous au 324.",
        "targetId": "324"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez l'utiliser, rendez-vous au 136.",
        "targetId": "136"
      },
      {
        "text": "Si vous voulez tenter de grimper le long d'un des piliers et de vous glisser entre son sommet et le plafond pour atteindre la pièce suivante, rendez-vous au 297.",
        "targetId": "297"
      },
      {
        "text": "Si vous décidez de vous en remettre à votre bonne étoile et de foncer droit entre les deux piliers, rendez-vous au 211.",
        "targetId": "211"
      }
    ]
  },
  "41": {
    "id": "41",
    "text": [
      "Rompant brusquement le combat, vous plongez pardessus un mur et vous vous laissez rouler au bas d'un amas d'antiques décombres. Vous vous relevez d'un bond et, tout en courant, vous employez vos pouvoirs Kaï de Camouflage et de Protection Psychique pour compliquer la tâche des Kherbalas lancés à vos trousses.",
      "Quelques minutes plus tard, vous êtes certain d'avoir semé vos poursuivants dans le labyrinthe des ruines de Xaagon.",
      "Rendez-vous au 270."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 270.",
        "targetId": "270"
      }
    ]
  },
  "42": {
    "id": "42",
    "text": [
      "Vous bondissez par-dessus la lice, traversant un aveuglant mur de flammes avant de plonger dans la mer la tête la première. Aucun humain normalement constitué ne saurait résister plus de quelques secondes au froid glacial des eaux du port, mais votre maîtrise de la Grande Discipline du Nexus préserve votre corps de la paralysie et vous remontez rapidement à la surface.",
      "Louvoyant entre les débris incandescents d'espars et de voiles qui pleuvent autour de vous, vous nagez avec vigueur vers l'extrémité du quai où une volée de marches descend jusqu'à l'eau. Malheureusement, votre spectaculaire fuite du brise-glace en flammes n'est pas passée inaperçue.",
      "Au moment où vous vous apprêtez à prendre pied sur les marches, vous vous retrouvez confronté à une douzaine de guerriers squelettes fermement décidés à vous renvoyer nourrir les poissons ! IXIANS MORTS VIVANTS HABILETÉ: 41 ENDURANCE: 46 Ces êtres sont insensibles à toutes les formes d'attaque psychique, hormis la Grande Discipline du Foudroiement Psychique et la Déflagration Psychique.",
      "Par ailleurs, étant contraint de batailler dans l'eau glacée, vous devez réduire de 5 points votre total d'HABILETÉ pour la durée de ce combat.",
      "Si vous êtes victorieux, rendez-vous au 109."
    ],
    "choices": [
      {
        "text": "Si vous êtes victorieux, rendez-vous au 109.",
        "targetId": "109"
      }
    ],
    "combat": {
      "name": "IXIANS MORTS VIVANTS",
      "combatSkill": 41,
      "endurance": 46,
      "mindblastImmune": false,
      "undead": true
    }
  },
  "43": {
    "id": "43",
    "text": [
      "Votre arme virevolte à la vitesse de l'éclair, faisant pleuvoir en quelques secondes une grêle de coups terribles sur les horreurs chitineuses qui vous assaillent de toutes parts. TIGROULES HABILETÉ: 51 ENDURANCE: 38 Ces créatures sont insensibles à toutes les formes d'attaque psychique, hormis la Grande Discipline du Foudroiement Psychique et la Déflagration Psychique.",
      "Si vous sortez vainqueur de ce combat, rendez-vous au 149."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 149.",
        "targetId": "149"
      }
    ],
    "combat": {
      "name": "TIGROULES",
      "combatSkill": 51,
      "endurance": 38,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "44": {
    "id": "44",
    "text": [
      "Depuis une heure, vous progressez courageusement dans l'aveuglante blancheur de la tempête de neige où seul votre exceptionnel instinct de survie vous permet d'échapper au péril permanent des crevasses invisibles et des avalanches. Quand la tempête s'affaiblit enfin, vous avez beaucoup souffert... et, de ce fait, perdu 3 points d'ENDURANCE.",
      "La neige tombe encore, mais la fureur du vent s'apaise. Pour la première fois depuis que vous êtes sorti de la grotte du lac souterrain, votre champ de vision s'étend au-delà d'un kilomètre à la ronde. Du sommet d'une crête verglacée, vous vous arrêtez pour déterminer votre position.",
      "En vous tournant vers le sud, vous voyez les sombres eaux grises de la mer de Tozaz lécher la banquise qui emprisonne les côtes d'Ixia. Au nord et à l'ouest, des montagnes inhospitalières barrent l'horizon. A l'est, droit devant vous, se découpe une passe taillée entre deux pics vertigineux.",
      "Au-delà de ce défilé, pour la première fois, vous distinguez la silhouette de Xaagon, la cité du Seigneur de la Mort. Estimant que vous devez vous trouver à moins de cinq kilomètres des murs de cristal et des formidables tours du repaire du monstre, vous décidez d'y aller au plus vite, avant que la tempête se réveille.",
      "Mais à peine êtes-vous engagé dans la passe que le blizzard se déchaîne avec une fureur décuplée. Poursuivre votre route dans de telles conditions serait une folie. Aussi décidez-vous de faire halte dans l'espoir de trouver un abri sûr. Grâce à vos pouvoirs Kaï, vous découvrez rapidement que l'étroite gorge ne peut vous offrir que deux refuges.",
      "Si vous choisissez d'aller au milieu du cercle de rochers éboulés qui se dressent à quelques centaines de mètres vers le sud, rendez-vous au 197.",
      "Si vous voulez vous abriter dans la grotte qui s'ouvre dans la paroi nord du défilé, rendez-vous au 253."
    ],
    "choices": [
      {
        "text": "Si vous choisissez d'aller au milieu du cercle de rochers éboulés qui se dressent à quelques centaines de mètres vers le sud, rendez-vous au 197.",
        "targetId": "197"
      },
      {
        "text": "Si vous voulez vous abriter dans la grotte qui s'ouvre dans la paroi nord du défilé, rendez-vous au 253.",
        "targetId": "253"
      }
    ]
  },
  "45": {
    "id": "45",
    "text": [
      "Hélas, Tagazin récupère rapidement tous ses moyens et vous saute à la gorge, tous crocs et griffes dehors. SEIGNEUR DÉMON TAGAZIN HABILETÉ : 55 ENDURANCE :"
    ],
    "choices": []
  },
  "46": {
    "id": "46",
    "text": [
      "La porte métallique de votre cellule est recouverte de glace et ne comporte aucun mécanisme d'ouverture visible, sinon un trou de serrure hexagonal. Vous vous accroupissez de façon à ce que votre visage se trouve à la hauteur du trou de serrure, puis vous ouvrez la bouche pour vous préparer à prononcer le mot de pouvoir du sortilège de Combat que vous a jadis enseigné le Seigneur Rimoah.",
      "Dès que toute la force de votre esprit est concentrée sur le sortilège, le terrible mot de pouvoir fuse : « GLOARGH ! » Hélas, employer ce sortilège si peu de temps après avoir repris conscience vous fatigue : vous perdez 2 points d'ENDURANCE. Modifiez votre Feuille d'Aventure en conséquence avant de vous rendre au 174."
    ],
    "choices": [],
    "damage": 2
  },
  "47": {
    "id": "47",
    "text": [
      "Vous plongez et vous roulez sur le sol pour esquiver le fulgurant projectile. La massive boule de flammes passe au-dessus de vous avant d'aller frapper le mur opposé de la salle dans une explosion assourdissante. Elle ouvre un trou de plus de trois mètres de diamètre dans la surface de cristal dur comme l'acier, projetant dans la pièce une myriade d'éclats tranchants comme des lames de rasoir qui vous blessent cruellement : vous perdez 3 points d'ENDURANCE.",
      "Alors que vous vous relevez en titubant, une occasion s'offre à vous de reprendre l'initiative du combat et d'attaquer le Seigneur de la Mort.",
      "Rendez-vous au 12."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 12.",
        "targetId": "12"
      }
    ],
    "damage": 3
  },
  "48": {
    "id": "48",
    "text": [
      "Alors que vous abattez le dernier de vos squelettiques assaillants, vous entendez le vibrant cri de guerre du capitaine Lanza retentir par-dessus le fracas de la bataille. - Pour la Lencia et la Maison de Sarnac ! En dépit de leur infériorité numérique, lui et ses hommes sont parvenus à repousser l'ennemi et sont désormais à moins d'un jet de pierre du quai.",
      "Descendant la rue en courant, vous les rejoignez sur une petite place pavée qui jouxte le débarcadère. - Capitaine, nous devons sauver le brise-glace ! hurlez-vous en pointant votre arme vers le navire que la horde des squelettes est en train de prendre d'assaut. - Par tous les dieux !",
      "Il le faut à tout prix, acquiesce-t-il d'une voix ferme, en donnant l'ordre à une poignée de ses hommes de former un mur de protection autour de vous. Aussitôt, les soldats vous entourent en joignant leurs boucliers et vous vous avancez avec eux vers le brise-glace.",
      "A vingt mètres du bord du quai, vous quittez leur formation et foncez vers la planche d'embarquement du navire. Vous êtes au milieu de la passerelle quand vous vous retrouvez confronté à un peloton de squelettes armés d'épées et de haches grossières. Bondissant tel un tigre au milieu de leur macabre groupe, vous les taillez en pièces avec une rapidité fulgurante et une implacable précision.",
      "Mais, alors que le dernier mort vivant tombe dans les eaux sombres du port, presque coupé en deux, vous entendez soudain derrière vous un bruit qui vous fait vous retourner avec effroi.",
      "Rendez-vous au 78."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 78.",
        "targetId": "78"
      }
    ]
  },
  "49": {
    "id": "49",
    "text": [
      "Vous vous en remettez à votre agilité naturelle pour redescendre du pilier. Vous y parvenez rapidement, mais la proximité du mortel flux électrique vous coûte encore 3 points d'ENDURANCE. Dès que vos pieds touchent le sol, noir comme l'ébène, vous vous élancez dans le passage sombre pour vous éloigner au plus vite du dangereux champ d'énergie.",
      "Rendez- vous au 300."
    ],
    "choices": []
  },
  "50": {
    "id": "50",
    "text": [
      "Au moment où vous tournez la clef dans la serrure, un torrent d'énergie électrique déferle dans votre bras et votre poitrine. Vous hurlez de douleur ! Pour comble de malchance, vous êtes incapable de lâcher cette clef. Soudée par la force du courant, votre main est prisonnière des mâchoires d'un piège atroce qui vous inflige une perte de 4 points d'ENDURANCE.",
      "De plus, vous entendez maintenant des bruits de pas. Vous redoublez désespérément d'efforts pour décoller vos doigts paralysés quand une douzaine de guerriers morts vivants surgissent sur le palier. Dès qu'ils vous aperçoivent, ils se précipitent sur vous en brandissant leurs épées.",
      "IXIANS MORTS VIVANTS HABILETÉ : 47 ENDURANCE : 50 Étant donné la fâcheuse et douloureuse posture dans laquelle vous devez combattre, diminuez de 8 points votre total d'HABILETÉ pendant la durée de cet affrontement.",
      "Si vous êtes victorieux, rendez-vous au 103."
    ],
    "choices": [
      {
        "text": "Si vous êtes victorieux, rendez-vous au 103.",
        "targetId": "103"
      }
    ],
    "combat": {
      "name": "IXIANS MORTS VIVANTS",
      "combatSkill": 47,
      "endurance": 50,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "51": {
    "id": "51",
    "text": [
      "Vous empoignez la barre à roue et vous envoyez un homme se poster à la pointe de l'étrave avec la consigne de scruter les eaux en avant et au-dessous de la ligne de flottaison du vaisseau. La plus grande partie de l'énorme masse des icebergs se trouvant sous la surface, vous redoutez de déchirer votre coque sur une saillie de glace immergée, invisible de la timonerie.",
      "Suivant les indications que vous crie le matelot et en faisant appel à vos exceptionnelles facultés de Grand Maître Kaï, vous manœuvrez avec d'infinies précautions le navire qui s'engage entre deux titanesques montagnes de glace...",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 3 au chiffre obtenu. Si le résultat est inférieur ou égal à 5, rendez- vous au 144.",
      "S'il va de 6 à 8, rendez-vous au 255.",
      "S'il est supérieur ou égal à 9, rendez-vous au 97."
    ],
    "choices": [
      {
        "text": "rendez-vous au 255.",
        "targetId": "255"
      },
      {
        "text": "rendez-vous au 97.",
        "targetId": "97"
      }
    ]
  },
  "52": {
    "id": "52",
    "text": [
      "A l'instant où vous pénétrez dans le halo lumineux, une douleur atroce vous envahit de la tête aux pieds. Paralysé par la souffrance, vous sentez que votre corps échappe à la gravité et qu'il s'élève irrésistiblement. Vous êtes au bord de l'inconscience et vous avez perdu 10 points d'ENDURANCE quand la lumière s'évanouit soudain.",
      "Lorsque vous reprenez le contrôle de vos muscles, vous êtes à genoux sur un sol de cristal noir dont la surface, polie comme un miroir, reflète l'image de votre visage marqué par la souffrance. Redressant avec peine votre tête douloureuse, vous voyez avec horreur trois créatures mortes vivantes accourir vers vous, venant d'un passage voûté.",
      "Elles brandissent des tridents aux pointes barbelées dans leurs mains ver-dâtres cadavériques, dans le but évident de vous clouer au sol comme on épingle un insecte.",
      "Si vous possédez un arc et si vous désirez l'utiliser, rendez-vous au 287.",
      "Si vous maîtrisez la Grande Discipline du Foudroiement Psychique, rendez-vous au 96.",
      "Si vous ne disposez ni de l'un ni de l'autre, ou si vous ne voulez pas y faire appel, rendez-vous au 64."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et si vous désirez l'utiliser, rendez-vous au 287.",
        "targetId": "287"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline du Foudroiement Psychique, rendez-vous au 96.",
        "targetId": "96"
      },
      {
        "text": "Si vous ne disposez ni de l'un ni de l'autre, ou si vous ne voulez pas y faire appel, rendez-vous au 64.",
        "targetId": "64"
      }
    ]
  },
  "53": {
    "id": "53",
    "text": [
      "Vous invoquez le sortilège d 'Énergie de l'Étoile de Cristal. Aussitôt, vous êtes propulsé en avant, les muscles gonflés d'une force nouvelle. Vous fendez l'air, à une vitesse de pointe trois fois supérieure à celles de vos meilleures courses ! Au bout de quelques secondes, vous vous retrouvez sur les talons de Tagazin, prêt à le frapper de votre arme vengeresse.",
      "Mais le Seigneur Démon, sentant que vous le serrez de près, s'immobilise en pleine course pour vous faire face. La redoutable créature, bien qu'affaiblie, n'a rien perdu de sa ruse diabolique. A l'instant où vous arrivez à distance de combat, Tagazin vous bondit à la gorge et vous jette au sol !",
      "SEIGNEUR DÉMON TAGAZI (blessé) HABILETÉ : 45 ENDURANCE : 45 Ne poursuivez pas ce combat au-delà de deux Assauts.",
      "Si Tagazin est tué au cours de l'un de ces deux Assauts, rendez-vous au 252.",
      "Sinon, rendez-vous au 218."
    ],
    "choices": [
      {
        "text": "rendez-vous au 252.",
        "targetId": "252"
      },
      {
        "text": "Sinon, rendez-vous au 218.",
        "targetId": "218"
      }
    ],
    "combat": {
      "name": "ENNEMI",
      "combatSkill": 45,
      "endurance": 45,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "54": {
    "id": "54",
    "text": [
      "Alors que vous tendez la main vers le bâton au manche d'argent, vous hésitez... votre sixième sens Kaï vous prévient d'un danger imminent.",
      "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 262.",
      "Si ce n'est pas le cas, rendez-vous au 25."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 262.",
        "targetId": "262",
        "requiredDiscipline": "Intuition"
      },
      {
        "text": "rendez-vous au 25.",
        "targetId": "25"
      }
    ]
  },
  "55": {
    "id": "55",
    "text": [
      "Vous vous plaquez au sol pour tenter d'esquiver le projectile, mais votre réaction est un rien tardive... Le boulet d'énergie vous frappe exactement dans le milieu du dos. A cet instant, vous ressentez une brève sensation de douleur. La flamme de votre vie et de votre aventure s'éteint ici, soufflée par le diabolique Bâton de Mort."
    ],
    "choices": []
  },
  "56": {
    "id": "56",
    "text": [
      "Alors que vous détalez hors de la grotte, vous jetez un bref regard par-dessus votre épaule pour voir la gigantesque silhouette de l'Octopurs à la faveur d'un éclair. Il se dresse dans l'entrée de la caverne et pousse un barrissement de triomphe, ravi d'avoir su défendre avec succès l'intimité de sa tanière puante.",
      "Dépité, vous redescendez au fond du défilé afin de trouver refuge dans le cercle de rochers qui émergent de la glace sur le versant sud. Dix mètres vous en séparent quand un craquement assourdissant vous glace le sang. Dans la seconde qui suit ce signe annonciateur, un large pan de roc et de glace se détache des hauteurs du défilé, formant une formidable avalanche qui dévale la pente dans un grondement de tonnerre.",
      "Les yeux écarquillés d'horreur, vous voyez ces tonnes de neige, de glace et de schiste balayer le flanc de la montagne en roulant droit vers vous tel un raz de marée. Aiguillonné par la peur, vous tournez les talons et courez à perdre haleine dans l'espoir insensé d'échapper à la monstrueuse vague blanche qui menace de vous engloutir.",
      "L'avalanche est presque sur vous lorsque vous apercevez une basse saillie rocheuse. Laissant à votre instinct de survie le soin de commander vos actes, vous plongez sous cet abri providentiel.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 2 au chiffre obtenu.",
      "Si vous maîtrisez la Grande Discipline du Nexus, vous pouvez encore ajouter 2 à ce chiffre.",
      "Si le résultat est inférieur ou égal à 5, rendez-vous au 99.",
      "S'il est compris entre 6 et 9, rendez-vous au 231.",
      "S'il est supérieur ou égal à 10, rendez-vous au 104."
    ],
    "choices": [
      {
        "text": "rendez-vous au 99.",
        "targetId": "99"
      },
      {
        "text": "entre 6 et 9, rendez-vous au 231.",
        "targetId": "231"
      },
      {
        "text": "rendez-vous au 104.",
        "targetId": "104"
      }
    ]
  },
  "57": {
    "id": "57",
    "text": [
      "Banedon repose le coffret sur la tablette encombrée et reprend le cours de ses instructions. Désormais assuré que vous disposez d'une protection adéquate, il passe à la question de votre armement. - Ce qui m'inquiète beaucoup, c'est que nous en sachions si peu sur Xaagon, la cité du Seigneur de la Mort.",
      "Nous n'avons aucun moyen de savoir quelles sortes de maléfiques créatures peuvent t'y attendre. En fait, Loup Solitaire, la seule chose dont tu peux être certain, c'est que les êtres ou les choses qui hantent cette cité maudite ne vont pas t'accueillir avec des rires et des chansons !",
      "Et pour affronter le Seigneur de la Mort d'Ixia et ses sbires avec quelque chance de succès, tu vas avoir besoin d'une arme dotée d'un pouvoir exceptionnel... une arme capable de tuer ce qui est déjà mort.",
      "Si vous possédez le Glaive de Sommer, rendez-vous au 339.",
      "Si ce n'est pas le cas, rendez-vous au 220."
    ],
    "choices": [
      {
        "text": "Si vous possédez le Glaive de Sommer, rendez-vous au 339.",
        "targetId": "339"
      },
      {
        "text": "rendez-vous au 220.",
        "targetId": "220"
      }
    ]
  },
  "58": {
    "id": "58",
    "text": [
      "Vous plongez dans la bataille avec une ardeur renouvelée, taillant la chair putride et brisant les os jaunis de vos assaillants jusqu'à ce qu'il n'en reste plus qu'une poignée en face de vous. A contrecœur, les morts vivants rescapés cèdent peu à peu du terrain.",
      "Vous les apostrophez d'une voix pleine de défi, maudissant le pouvoir qui les anime au-delà de la tombe. Profitant de ce moment de répit, vous jetez un coup d'œil par- dessus votre épaule afin de voir comment les choses tournent pour les matelots Lenciens.",
      "Mais votre regard est distrait par un objet qui luit dans la pénombre ambiante. C'est une clef de jade vert, suspendue à une chaîne passée autour du cou d'un des guerriers morts vivants que vous avez abattus. Vous vous baissez pour la saisir et, dès que votre main se referme sur elle, vous sentez qu'elle possède des propriétés magiques. (Si vous désirez garder cette Clef d'Onyx, inscrivez-la sur votre Feuille d'Aventure parmi les Objets Spéciaux rangés dans la poche de votre tunique.) Quelques instants plus tard, renforcés par de nouveaux arrivants, les morts vivants repartent à l'attaque, piétinant les corps mutilés de ceux que vous avez définitivement tués.",
      "Craignant d'être submergé sous le nombre, vous battez vivement en retraite et plongez dans un escalier qui s'enfonce dans la cale du navire. Vous entendez au-dessus de vous les cris des marins Lenciens engagés dans un farouche corps à corps avec les Drakkarims morts vivants.",
      "Puis un claquement de bottes ferrées résonnant sur les marches vous prévient que les Drakkarims n'ont pas renoncé à vous poursuivre, et vous vous mettez à fouiller la cale obscure d'un œil frénétique, à la recherche d'une cachette.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 208.",
      "Si ce n'est pas le cas, rendez-vous au 26."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 208.",
        "targetId": "208"
      },
      {
        "text": "rendez-vous au 26.",
        "targetId": "26"
      }
    ]
  },
  "59": {
    "id": "59",
    "text": [
      "Vous soulevez une monumentale gerbe de boue en heurtant la surface visqueuse d'une fétide fondrière souterraine où vous restez enfoncé jusqu'au cou. Comme des spectateurs autour d'une arène, les créatures du chaos s'agitent et jacassent. Soudain, quelque chose vous frôle la cuisse gauche.",
      "Vous essayez de vous écarter, mais ce mouvement vous enfonce un peu plus dans le bourbier.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez y faire appel, rendez-vous au 176.",
      "Si vous maîtrisez la Grande Discipline de l'Intuition et avez atteint le rang de Grand Maître Mentor, ou un rang supérieur, rendez-vous au 15.",
      "Si vous maîtrisez la Grande Discipline du Contrôle Animal et si vous désirez l'utiliser, rendez-vous au 337.",
      "Si vous ne maîtrisez aucune de ces Grandes Disciplines ou si vous ne voulez pas en faire usage, rendez-vous au 27."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez y faire appel, rendez-vous au 176.",
        "targetId": "176"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Intuition et avez atteint le rang de Grand Maître Mentor, ou un rang supérieur, rendez-vous au 15.",
        "targetId": "15",
        "requiredDiscipline": "Intuition"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline du Contrôle Animal et si vous désirez l'utiliser, rendez-vous au 337.",
        "targetId": "337"
      },
      {
        "text": "Si vous ne maîtrisez aucune de ces Grandes Disciplines ou si vous ne voulez pas en faire usage, rendez-vous au 27.",
        "targetId": "27"
      }
    ]
  },
  "60": {
    "id": "60",
    "text": [
      "Avant d'engager le combat, diminuez le total d'ENDURANCE de votre ennemi du nombre de points que vous avez notés dans la marge de votre Feuille d'Aventure. Vous pouvez faire appel à la Grande Discipline du Foudroiement Psychique pour combattre.",
      "A tout moment de l'affrontement, si vous parvenez à ramener le total d'ENDURANCE de Tagazin à 25 ou moins, rendez-vous sans délai au 168."
    ],
    "choices": []
  },
  "61": {
    "id": "61",
    "text": [
      "Vous invoquez le sortilège de Détection du Mal en concentrant votre attention sur le brouillard qui monte de la mer et vous décelez une présence étrange. Vous ne pouvez discerner avec exactitude ce qui évolue ainsi derrière l'écran de la brume, mais vous avez une certitude : la chose est maléfique et elle se rapproche inexorablement de Fort Azgad !",
      "Vous informez aussitôt le capitaine Lanza du danger, mais il se montre poliment incrédule. Il vous explique en souriant qu'il n'est pas rare que les nouveaux arrivants s'imaginent voir toutes sortes de spectres dans les tourbillons de la brume qui monte autour du fort.",
      "Mais à cet instant, vous entendez résonner le glas sourd d'une cloche discordante et le visage de Lanza se fige de stupeur. - Pa... par tous les dieux ! bégaie-t-il, c'est la cloche d'alarme. Nous sommes attaqués !",
      "Rendez-vous au 181."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 181.",
        "targetId": "181"
      }
    ]
  },
  "62": {
    "id": "62",
    "text": [
      "Soudain, alors que vous foncez dans le grand hall à travers une pluie de poussière de cristal, une formidable onde de choc ébranle l'édifice tout entier. Il ne vous reste plus que quelques mètres à parcourir pour atteindre la sortie, quand... la grande arche s'écroule !",
      "Utilisez la Table de Hasard. Si votre total d'ENDURANCE actuel est inférieur ou égal à 14, diminuez d'1 point le chiffre que vous avez obtenu. Si votre total d'ENDURANCE est supérieur ou égal à 24, ajoutez 1 point au chiffre obtenu.",
      "Si le résultat est inférieur ou égal à 3, rendez-vous au 316.",
      "S'il est supérieur ou égal à 4, rendez-vous au 193."
    ],
    "choices": [
      {
        "text": "rendez-vous au 316.",
        "targetId": "316"
      },
      {
        "text": "rendez-vous au 193.",
        "targetId": "193"
      }
    ]
  },
  "63": {
    "id": "63",
    "text": [
      "Vous enjambez les corps des Drakkarims pour vous précipiter vers la porte. A votre grand soulagement, elle n'est pas verrouillée. Son épais battant de métal grisâtre s'ouvre en grinçant, vous laissant découvrir vos armes et votre équipement jetés en désordre sur une table de pierre au milieu d'une petite chambre.",
      "Vous recensez vos possessions avec soin, et vous constatez qu'elles sont pour la plupart restées intactes. Toutefois, toutes vos Pièces d'Or et deux des objets contenus dans votre Sac à Dos ont disparu. Rayez vos Pièces d'Or de votre Feuille d'Aventure, ainsi que les deux premiers objets inscrits sur la liste du contenu de votre sac à dos.",
      "Si vous voulez rester dans cette chambre pour la fouiller plus complètement, rendez-vous au 204.",
      "Si vous préférez en sortir sans plus attendre, rendez-vous au 34."
    ],
    "choices": [
      {
        "text": "Si vous voulez rester dans cette chambre pour la fouiller plus complètement, rendez-vous au 204.",
        "targetId": "204"
      },
      {
        "text": "Si vous préférez en sortir sans plus attendre, rendez-vous au 34.",
        "targetId": "34"
      }
    ]
  },
  "64": {
    "id": "64",
    "text": [
      "Les trois créatures hideuses avancent sur vous avec une rapidité et une détermination pour le moins inquiétantes. Vous cherchez rapidement une issue qui vous permettrait de leur échapper, mais vous n'en découvrez pas d'autre que le passage au rideau de lumière par lequel vous êtes entré.",
      "Le douloureux souvenir de ce que vous avez subi en le franchissant vous fait rejeter aussitôt l'idée de le traverser à nouveau.",
      "Si vous possédez le Glaive de Sommer et si vous désirez l'utiliser, rendez-vous au 238.",
      "Si ce n'est pas le cas, rendez-vous au 125."
    ],
    "choices": [
      {
        "text": "Si vous possédez le Glaive de Sommer et si vous désirez l'utiliser, rendez-vous au 238.",
        "targetId": "238"
      },
      {
        "text": "rendez-vous au 125.",
        "targetId": "125"
      }
    ]
  },
  "65": {
    "id": "65",
    "text": [
      "En tentant de forcer cette porte à l'aide de la Grande Discipline du Nexus, vous venez de commettre une erreur fatale : vous avez activé un terrible sortilège nécromancien placé sur la serrure par le macabre Seigneur Ixiataaga en personne. Aveuglé par un éclair de lumière blanche, vous ne voyez pas le jet d'énergie pure qui fuse du trou de la serrure droit sur votre visage.",
      "Une douleur atroce explose dans votre tête avant de consumer votre corps tout entier, réduisant à néant votre ultime étincelle de vie... Votre aventure s'achève ici."
    ],
    "choices": []
  },
  "66": {
    "id": "66",
    "text": [
      "Vous tendez désespérément les bras pour retenir votre chute, mais en vain. Vous plongez dans la mer la tête la première, heurtant du crâne et de l'épaule gauche une rugueuse masse de glace immergée. (Vous perdez 6 points d'ENDURANCE.) Mais rassurez-vous !",
      "Grâce à votre maîtrise de la Grande Discipline du Nexus, conjuguée au fait que vous avez pris un bon coup sur la tête, vous ne ressentez même pas la cuisante morsure de l'eau glacée. Toutefois, à demi assommé et presque noyé, vous ne devez votre salut qu'aux réflexes de votre équipage.",
      "En un instant, deux matelots ont fait un nœud coulant avec lequel ils parviennent à vous saisir pour vous hisser sur le pont, vous évitant in extremis de périr broyé entre la coque du navire et la glace. Meurtri, mais toujours impavide, vous vous débarrassez du cordage et foncez reprendre votre poste à l'étrave. - Bâbord toute ! hurlez-vous en faisant des gestes frénétiques à l'adresse de l'homme de barre.",
      "Ce dernier réagit sans délai et, quelques interminables minutes plus tard, le navire se dégage du piège des glaces. Certains matelots, visiblement affolés par la collision et la tragique vision de votre passage par-dessus bord, restent blottis contre la lice tels des chiots apeurés.",
      "Ils adressent de ferventes prières à la déesse Ishir en levant des yeux horrifiés vers les immenses falaises blanches qui menacent de vous engloutir. La peur règne à bord quand, presque sans transition, le vent chargé de neige faiblit et le navire émerge du champ d'icebergs pour fendre les eaux libres de la mer de Tozaz.",
      "Enfin sauvés du mortel traquenard de la banquise, les hommes d'équipage poussent un vibrant hourra, et l'un d'eux fait sauter le bouchon d'une vieille bouteille de rhum brun qu'il avait amoureusement conservée pour quelque grande occasion. 11 s'en accorde une solide lampée, puis vous passe la bouteille d'un geste fraternel.",
      "Mais, au moment même où vos lèvres gercées s'entrouvrent pour accueillir le revigorant breuvage, la voix forte du timonier retentit du haut de la dunette. - Navire droit devant ! Sentant la peur nouer à nouveau vos entrailles, vous vous tournez vers l'étrave et concentrez votre regard d'aigle sur la lointaine silhouette du vaisseau inconnu.",
      "Rendez-vous au 195."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 195.",
        "targetId": "195"
      }
    ],
    "damage": 6
  },
  "67": {
    "id": "67",
    "text": [
      "Débarrassé de votre ennemi, vous escaladez brillamment les trois premiers mètres de la paroi du puits, pourtant lisse comme du verre. Puis, la roche offrant de nombreuses prises, vous progressez sans peine, sous les regards avides, assoiffés de sang, de la horde mugissante des créatures du Chaos qui surveillent votre ascension.",
      "Parvenu à moins d'un mètre du rebord du puits, vous assurez votre prise d'une main et dégainez votre arme de l'autre, prêt à réduire en charpie toutes les abominations qui prétendraient vous empêcher d'en sortir ! HORDE DU CHAOS HABILETÉ : 50 ENDURANCE : 48 Si vous n'avez pas atteint le rang de Grand Maître Mentor, vous devez réduire votre total d'HABILETÉ de 4 points pendant la durée de ce combat, étant donné la position peu avantageuse dans laquelle vous vous trouvez.",
      "Si vous êtes victorieux, rendez- vous au 82."
    ],
    "choices": [],
    "combat": {
      "name": "HORDE DU CHAOS",
      "combatSkill": 50,
      "endurance": 48,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "68": {
    "id": "68",
    "text": [
      "Votre arme fracasse l'effroyable gueule de l'Orghle avant de faire éclater sa cervelle. Pendant quelques secondes, le corps du monstre est secoué de furieuses convulsions, puis il cesse de bouger et coule lentement dans un infect nuage de sang verdâtre et de débris non identifiés.",
      "Épuisé par ce terrible duel sous- marin, vous nagez péniblement jusqu'à la rive et émergez en titubant de l'eau glacée pour vous cacher entre les rochers qui bordent le rivage. Alors que vous reprenez peu à peu vos forces, vous découvrez avec consternation que votre Sac à Dos s'est ouvert pendant le combat que vous venez de livrer.",
      "Il ne contient plus que trois objets ! Rayez de votre Feuille d'Aventure tous les objets contenus dans votre Sac à Dos, hormis ceux qui sont inscrits en quatrième, cinquième et sixième position sur la liste.",
      "Rendez-vous au 304."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 304.",
        "targetId": "304"
      }
    ]
  },
  "69": {
    "id": "69",
    "text": [
      "Arrivé au bout du corridor des hublots, vous rencontrez une volée de marches de fer qui montent jusqu'à une lourde porte cerclée de cuivre. Cette porte, visiblement récente, est verrouillée au moyen d'une serrure à combinaison dont la facture trahit au premier coup d'œil l'origine Drakkarim.",
      "Son dispositif est formé de trois parties saillantes, elles-mêmes divisées en quatre cases de dimension égale. Chaque case, à l'exception d'une seule, est gravée d'un chiffre. Ce n'est pas la première fois que vous vous retrouvez confronté à ce type de serrure.",
      "Pour la débloquer et ouvrir la porte, vous devez tapoter la case vierge d'un nombre de coups égal au chiffre manquant. Examinez avec soin les trois grilles de chiffres ci-dessus.",
      "Lorsque vous penserez avoir découvert la clef de l'énigme, rendez-vous au paragraphe portant le numéro du chiffre manquant.",
      "Si votre réponse se révèle incorrecte, ou si vous ne parvenez pas à résoudre cette énigme, rendez-vous au 139."
    ],
    "choices": [
      {
        "text": "si vous ne parvenez pas à résoudre cette énigme, rendez-vous au 139.",
        "targetId": "139"
      }
    ]
  },
  "70": {
    "id": "70",
    "text": [
      "Lorsque vous lui assénez le coup de grâce, le Ziog s'effondre sur le pont avant de se ratatiner et de s'effriter comme un antique parchemin. A ce spectacle, les squelettes rassemblés sur le quai poussent une clameur inhumaine et se ruent sur la passerelle d'embarquement, ivres de vengeance.",
      "D'un geste foudroyant, vous abattez votre épée d'or sur la planche, la fendant en deux tronçons qui s'affaissent aussitôt, expédiant la horde de vos assaillants dans l'eau glacée du port.",
      "Si vous voulez maintenant examiner les restes du Ziog, rendez-vous au 88.",
      "Si cela ne vous dit rien, rendez-vous au 329."
    ],
    "choices": [
      {
        "text": "Si vous voulez maintenant examiner les restes du Ziog, rendez-vous au 88.",
        "targetId": "88"
      },
      {
        "text": "rendez-vous au 329.",
        "targetId": "329"
      }
    ]
  },
  "71": {
    "id": "71",
    "text": [
      "Vous examinez le petit orifice d'un œil circonspect et vous vous rendez compte qu'il s'agit d'un trou de serrure.",
      "Si vous maîtrisez la Grande Discipline du Nexus et si vous désirez y faire appel, rendez-vous au 175.",
      "Sinon, rendez-vous au 19."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Nexus et si vous désirez y faire appel, rendez-vous au 175.",
        "targetId": "175"
      },
      {
        "text": "Sinon, rendez-vous au 19.",
        "targetId": "19"
      }
    ]
  },
  "72": {
    "id": "72",
    "text": [
      "Vous plongez sur le côté pour esquiver la charge du Seigneur Démon déchaîné, mais pas assez vite ! La pointe du heaume ensorcelé vous frappe de plein fouet et une douleur insupportable déchire votre corps. Puis, dans un instant de pure horreur, une fulgurante explosion de lumière blanche engloutit tous vos sens et souffle la flamme de votre vie.",
      "Le Heaume de Pouvoir forgé par Naar, le Dieu des Ténèbres lui-même, a eu raison de vous. Vous ne reverrez jamais le Magnamund, car c'est ici, dans l'infernal Univers des Ténèbres, que votre aventure s'achève."
    ],
    "choices": []
  },
  "73": {
    "id": "73",
    "text": [
      "Vous avancez avec précaution le long du pont verglacé vers la haute proue incurvée du vaisseau ennemi. Chaque pouce de son bordé est gravé d'étranges et complexes arabesques, et les plaques de métal qui renforcent sa coque en avant du grand mât sont ornées de symboles runiques.",
      "Vos sens Kaï vous permettent de déterminer que ce navire n'a pas été construit par les créatures inhumaines qui composaient son équipage, mais qu'il est l'œuvre ancienne d'une race de marins dont le souvenir s'est dissous depuis longtemps dans les brumes du temps.",
      "Un examen plus détaillé de ses structures vous révèle que le vaisseau est vieux de... plus de quinze mille ans ! Une écoutille ouverte dans le gaillard d'avant vous permet de descendre au fond d'une cale obscure où vous tombez sur un tas informe de guenilles moisies et d'armes rouillées.",
      "En remuant cet amas de saletés, vous découvrez un Bol de Pierre, un Diadème de Cristal et un Rouleau de Corde Huilée. (Si vous désirez conserver l'un ou plusieurs de ces objets, à ranger dans votre Sac à Dos, n'oubliez pas de modifier en conséquence votre Feuille d'Aventure.) Vous vous apprêtez à poursuivre l'exploration de la cale, quand vous entendez soudain Prarg vous appeler depuis l'arrière du bateau.",
      "Rendez-vous au 271."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 271.",
        "targetId": "271"
      }
    ]
  },
  "74": {
    "id": "74",
    "text": [
      "Tenter de forcer la serrure ne vous dit rien qui vaille, mais vous perdriez un temps précieux si vous décidiez de chercher une autre sortie. Aussi, résolu à franchir le seuil de cette porte, vous glissez tout doucement la pointe de votre lame sous le support de la serrure.",
      "Ce faisant, vos pauvres nerfs endurent le martyre ! A maintes reprises, de lointains bruits de pas résonnent dans l'obscurité et vous éprouvez les pires difficultés à vous concentrer sur votre tâche délicate. Cet effort vous coûte 2 points d'ENDURANCE, mais vous parvenez tout de même à vos fins.",
      "Hélas, si vous arrivez à arracher son support, la serrure n'en reste pas moins fermement verrouillée. Pour ouvrir la porte, vous devez donc vous mesurer à mains nues avec son redoutable mécanisme. PORTE SCELLÉE HABILETÉ: 40 ENDURANCE: 50 Livrez ce combat de la façon habituelle.",
      "Les points d'ENDURANCE que vous pourrez perdre correspondent à la fatigue due aux efforts que vous devez déployer pour forcer la serrure.",
      "Lorsque vous aurez réduit à zéro le total d'ENDURANCE de la porte, rendez-vous au 327."
    ],
    "choices": [
      {
        "text": "rendez-vous au 327.",
        "targetId": "327"
      }
    ],
    "combat": {
      "name": "PORTE SCELLÉE",
      "combatSkill": 40,
      "endurance": 50,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "75": {
    "id": "75",
    "text": [
      "Vous vous ruez à la rencontre du Seigneur Démon et vous frappez le premier, mettant une telle force dans votre bras que le coup suffirait à décapiter n'importe quelle créature de chair et de sang. Mais Tagazin n'est fait ni de chair ni de sang... Une aveuglante gerbe d'étincelles bleuâtres jaillit de son corps à l'instant où votre arme l'atteint, et vous la voyez avec horreur se désintégrer dans votre main ! (Rayez cette arme de votre Feuille d'Aventure.) Le Seigneur Démon part d'un rire méprisant avant de bondir pour vous déchiqueter entre ses griffes tranchantes comme des rasoirs...",
      "Utilisez la Table de Hasard, et, à moins que vous ne maîtrisiez la Grande Discipline de la Science Médicale, multipliez par deux le chiffre obtenu. (Dans ce cas précis, 0 = 10). Ce résultat est égal au nombre de points d'ENDURANCE que vous perdez au cours de ce mortel affrontement.",
      "Si vous parvenez à survivre à ce premier Assaut de Tagazin, n'omettez pas de modifier en conséquence votre total d'ENDURANCE avant de vous rendre au 183."
    ],
    "choices": []
  },
  "76": {
    "id": "76",
    "text": [
      "Vous rompez brusquement le combat pour foncer vous abriter sous le porche d'une baraque voisine. Arrachée de ses gonds, sa lourde porte de bois laisse voir quantité de sacs, barils et autres caisses indiquant que la bâtisse fait office de magasin de vivres.",
      "Par une fenêtre placée à l'autre bout de la baraque, vous apercevez le brise-glace Lencien, qui vient d'être envahi par une vingtaine de morts vivants dont les gestes trahissent un souci manifeste de le détruire et de l'envoyer par le fond. Bien décidé à les en empêcher, vous traversez la baraque et vous vous faufilez à travers la fenêtre avant de foncer vers le navire en péril.",
      "Vous avez atteint le milieu de la passerelle d'embarquement quand vous vous retrouvez confronté à un peloton de squelettes armés d'épées et de haches grossières. Bondissant tel un tigre au milieu de leur macabre groupe, vous les taillez en pièces avec une rapidité fulgurante et une mortelle précision.",
      "Mais, alors que le dernier mort vivant tombe dans les eaux sombres du port, presque coupé en deux, vous entendez derrière vous un bruit qui vous fait vous retourner avec effroi.",
      "Rendez-vous au 78. Lorsque vous élevez le Pic de Pouvoir, un halo de flammes argentées embrase aussitôt sa pointe, lançant un éclat si intense que le Seigneur de la Mort s'en trouve un moment aveuglé. Poussant un cri strident, il brandit son arme diabolique pour contrer votre premier coup.",
      "La pointe du Pic de Pouvoir plonge profondément dans le manche du Bâton de Mort, faisant jaillir une gerbe d'étincelles pourpres et blanches qui explosent en l'air dans un crépitement assourdissant. Au lieu de retomber au sol, ces braises ardentes sont aussitôt aspirées par le vortex de la Porte d'Ombre qui, au fond de la salle, tourbillonne maintenant à une vitesse alarmante."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 78.",
        "targetId": "78"
      }
    ]
  },
  "77": {
    "id": "77",
    "text": [
      "Ixiataaga, ébranlé par votre attaque, chancelle un instant. Mais il se ressaisit et tente de vous tailler le visage avec la pointe effilée de son bâton maléfique. Vous esquivez le coup d'un bond agile avant de riposter d'une botte foudroyante, jetant toutes vos forces dans la bataille.",
      "SEIGNEUR DE LA MORT IXIATAAGA HABILETÉ: 60 ENDURANCE: 39 Cet être surnaturel est armé du Bâton de Mort inactivé. Il est insensible à toutes les formes d'attaque psychique, sauf si vous utilisez la Grande Discipline du Foudroiement Psychique ou la Déflagration Psychique.",
      "Si vous sortez vainqueur de cet ultime combat, rendez-vous au 290."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de cet ultime combat, rendez-vous au 290.",
        "targetId": "290"
      }
    ],
    "combat": {
      "name": "SEIGNEUR DE LA MORT IXIATAAGA",
      "combatSkill": 60,
      "endurance": 39,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "78": {
    "id": "78",
    "text": [
      "Sur le quai, au pied de la planche d'embarquement, se dresse une hideuse créature exsudant une écœurante puanteur de mort et de pourriture. Elle vous dépasse de plus d'une longueur de bras et ses longs membres décharnés sont recouverts de touffes de poils grisâtres.",
      "Trois yeux globuleux d'un blanc laiteux émergent de sa face osseuse, saillant au-dessus d'une bouche sans lèvres garnies de menaçantes rangées de crocs acérés. Serrant dans sa main crochue ce qui semble être une stalactite, le monstre infect le pointe sur vous, et une boule orange de feu glacé fuse de son extrémité, fonçant droit vers votre poitrine !",
      "Si vous possédez le Glaive de Sommer, rendez-vous au 346.",
      "Sinon, rendez-vous au 170."
    ],
    "choices": [
      {
        "text": "Si vous possédez le Glaive de Sommer, rendez-vous au 346.",
        "targetId": "346"
      },
      {
        "text": "Sinon, rendez-vous au 170.",
        "targetId": "170"
      }
    ]
  },
  "79": {
    "id": "79",
    "text": [
      "Dès que vous avez achevé de réduire en charpie le corps putride du dernier Drakkarim, vous vous dirigez vers l'escalier pour regagner le pont. Mais, averti par votre sixième sens qu'un nouveau groupe de morts vivants est sur le point de descendre dans la cale, vous faites demi-tour et courez vers l'arrière du navire pour vous cacher derrière l'axe de son gouvernail.",
      "Comme vous l'aviez craint, un nouveau groupe de morts vivants fait irruption dans la cale, quelques secondes plus tard. Mais ils remontent rapidement sur le pont, au terme d'une fouille superficielle, sans se soucier des corps démembrés de ceux que vous avez abattus.",
      "Peu après, un silence de mort s'installe sur le bateau, et votre esprit s'assombrit à la pensée des matelots Lenciens... d'autant que vos sens Kaï ne perçoivent la présence d'aucun être vivant dans les parages.",
      "Si vous voulez aller voir ce qui se passe sur le pont, rendez-vous au 186.",
      "Si vous préférez rester caché dans la cale, rendez-vous au 314."
    ],
    "choices": [
      {
        "text": "Si vous voulez aller voir ce qui se passe sur le pont, rendez-vous au 186.",
        "targetId": "186"
      },
      {
        "text": "Si vous préférez rester caché dans la cale, rendez-vous au 314.",
        "targetId": "314"
      }
    ]
  },
  "80": {
    "id": "80",
    "text": [
      "Une partie du sol se soulève, formant un piédestal de pierre sur lequel se dresse un gigantesque chacal à dents de sabre couvert d'une peau lisse et crémeuse. Son corps musculeux luit de reflets glacés et des volutes de fumée noire s'échappent de ses naseaux. - Prépare-toi à mourir, misérable mortel, gronde la créature en descendant souplement du piédestal.",
      "Je suis Tagazin, et je vais te délivrer de ta vaine existence ! Le son de sa voix fait courir un frisson d'effroi le long de votre échine. Tous vos sens Kaï vous disent que cet être surnaturel est entièrement voué à Ixiataaga, qu'il est sa plus fidèle créature.",
      "Comme s'il salivait, de sombres gouttes de venin s'écoulent de ses crocs dénudés et une lueur meurtrière étincelle au fond de ses yeux tandis qu'il s'avance lentement vers vous...",
      "Rendez-vous au 254."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 254.",
        "targetId": "254"
      }
    ]
  },
  "81": {
    "id": "81",
    "text": [
      "Chercher une autre issue pourrait prendre des heures. Or le temps vous est compté. Aussi décidez-vous de faire usage de votre savoir de la Magie de l'Ancien Royaume. Vous ouvrez la bouche, prêt à lancer un mot de pouvoir. Puis, dès que le sortilège se matérialise, d'un mot, dans votre esprit, vous projetez le charme sur la serrure.",
      "Lancé à si courte distance, le sortilège tord et fendille le support qui recouvre la serrure, mais il ne parvient pas à la débloquer. D'un geste rageur, vous arrachez le support, découvrant la serrure que vous devez maintenant forcer à mains nues. PORTE SCELLÉE HABILETÉ : 30 ENDURANCE : 40 Livrez ce combat de la façon habituelle.",
      "Les points d'ENDURANCE que vous pourrez perdre correspondent à la fatigue due aux efforts qu'il vous faut déployer pour forcer la serrure à mains nues.",
      "Lorsque vous aurez réduit à zéro le total d'ENDURANCE de la porte, rendez-vous au 327."
    ],
    "choices": [
      {
        "text": "rendez-vous au 327.",
        "targetId": "327"
      }
    ],
    "combat": {
      "name": "PORTE SCELLÉE",
      "combatSkill": 30,
      "endurance": 40,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "82": {
    "id": "82",
    "text": [
      "Victorieux, vous expédiez les restes tailladés de vos hideux ennemis au fond du puits, les offrant en pâture à la vorace créature tapie dans la vase. Puis, sans un regard en arrière, vous vous hâtez de regagner le toit du bâtiment et vous vous élancez le long du talus moussu.",
      "Quelques minutes plus tard, vous atteignez un bosquet d'arbres enveloppés d'un brouillard opaque. Vous vous enfoncez dans ce bois sinistre pour y trouver des traces fraîches du passage de Tagazin. Les empreintes laissées par ses pattes griffues dans le sol limoneux vous conduisent aussi sûrement qu'une route balisée sur les talons du Seigneur Démon.",
      "Redoublant d'ardeur, vous traversez un épais hallier de ronces aux épines pointues avant d'escalader une colline en pente douce. Parvenu sur la crête de cette colline, vous découvrez un spectacle qui vous frappe de terreur !",
      "Rendez-vous au 150."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 150.",
        "targetId": "150"
      }
    ]
  },
  "83": {
    "id": "83",
    "text": [
      "Le Roi Sarnac congédie ses gardes avant de vous faire entrer avec Banedon, le Seigneur Ardan et le capitaine Prarg dans une antichambre. Au centre de cette pièce richement meublée se dresse une grande table de chêne sur laquelle est étalée une carte détaillée des régions nord-ouest du Magnamund. - A la demande du Seigneur Ardan, j'ai pris des dispositions pour faciliter votre voyage vers Ixia, Grand Maître, dit le Roi, pendant que vous vous installez tous les cinq autour de la table.",
      "Au moment où nous parlons, un navire de guerre attend l'ordre d'appareiller dans le port de Vadera. Le capitaine Prarg vous accompagnera dans la première partie de votre voyage, jusqu'à notre poste maritime de l'île d'Azgad, poursuit-il en désignant sur la carte une île au large du golfe de Konkor.",
      "Le commandant de la garnison de l'île est le capitaine Lanza. Il a été informé de votre venue et il tiendra à votre disposition un brise-glace et son équipage qui vous permettront de traverser les eaux tempétueuses de la mer de Tozaz avant de vous débarquer sur la côte méridionale d'Ixia.",
      "A partir de là, vous devrez gagner à pied la cité de Xaagon, où vous trouverez le Seigneur de la Mort et son arme maudite, le Bâton de Mort. Examinant la carte, vous évaluez avec une appréhension grandissante la difficulté du périple qui vous attend. - Fort bien, sire, finissez-vous par dire.",
      "Je comprends comment je devrai pouvoir atteindre Ixia pour trouver et abattre le Seigneur de la Mort, mais pouvez-vous me dire comment revenir une fois ma mission accomplie ?",
      "Rendez-vous au 248."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 248.",
        "targetId": "248"
      }
    ]
  },
  "84": {
    "id": "84",
    "text": [
      "Quelque peu déconfit, vous vous écartez de la porte et vous redescendez les marches pour regagner l'antichambre. Vous êtes toujours aussi résolu à trouver et à défaire le Seigneur de la Mort, mais pour ce faire, vous devez absolument atteindre les étages supérieurs de la spirale de cristal.",
      "N'ayant pas d'autre choix, vous traversez l'antichambre et franchissez le rideau de lumière...",
      "Rendez-vous au 8."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 8.",
        "targetId": "8"
      }
    ]
  },
  "85": {
    "id": "85",
    "text": [
      "Esquivant le projectile d'un bond félin, vous faites sauter le crâne squelettique de la créature d'un coup bien ajusté. Un cri inhumain s'échappe de sa gorge béante et son corps s'écrase en arrière avant d'être sauvagement piétiné par les autres morts vivants Drakkarims, pressés de vous tailler en pièces.",
      "Si vous décidez de tenir bon et de les affronter, rendez-vous au 58.",
      "Si vous préférez prendre la fuite, rendez-vous au 247."
    ],
    "choices": [
      {
        "text": "Si vous décidez de tenir bon et de les affronter, rendez-vous au 58.",
        "targetId": "58"
      },
      {
        "text": "Si vous préférez prendre la fuite, rendez-vous au 247.",
        "targetId": "247"
      }
    ]
  },
  "86": {
    "id": "86",
    "text": [
      "Utilisant votre pouvoir Kaï, vous soulevez le dôme de verre de quelques centimètres au-dessus du socle. Vous saisissez alors la clef en prenant garde de ne toucher ni le socle ni le couvercle en lévitation, puis vous le laissez lentement redescendre dans sa position initiale. (Sur votre Feuille d'Aventure, inscrivez la Clef d'Onyx dans la case des Objets Spéciaux que vous transportez dans la poche de votre tunique.) Après quoi, vous enfoncez la clef dans la serrure de la porte et vous découvrez quelle s'y adapte parfaitement.",
      "Sans hésiter, vous la faites tourner, persuadé que la porte va s'ouvrir et vous révéler ce qui se trouve derrière...",
      "Utilisez la Table de Hasard.",
      "Si vous obtenez 0 ou 1, rendez-vous au 50.",
      "Si vous obtenez un chiffre compris entre 2 et 8, rendez- vous au 6."
    ],
    "choices": [
      {
        "text": "Si vous obtenez 0 ou 1, rendez-vous au 50.",
        "targetId": "50"
      }
    ]
  },
  "87": {
    "id": "87",
    "text": [
      "Malgré la hauteur de votre chute, vous vous réceptionnez sur le sol avec la souplesse d'un chat, tout en amorçant un roulé-boulé pour amortir l'impact. Votre adresse vous permet de n'avoir à souffrir que de blessures minimes : vous perdez seulement 2 points d'ENDURANCE.",
      "Rendez-vous au 36."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 36.",
        "targetId": "36"
      }
    ]
  },
  "88": {
    "id": "88",
    "text": [
      "En fouillant les restes nauséabonds du Ziog, vous trouvez une petite gemme verte montée sur une chaîne de platine.",
      "Si vous désirez garder cette Gemme Verte, ins-crivez-la sur votre Feuille d'Aventure dans la case des Objets Spéciaux que vous transportez dans votre poche.",
      "Ensuite, rendez-vous au 329."
    ],
    "choices": [
      {
        "text": "rendez-vous au 329.",
        "targetId": "329"
      }
    ]
  },
  "89": {
    "id": "89",
    "text": [
      "Vous dégainez juste à temps pour parer le premier Assaut de la créature. C'est alors qu'un éclair illumine brièvement la grotte, levant le voile sur la physionomie de la bête mystérieuse. Sa vue vous arrache un hurlement d'horreur ! D'effroyables rangées de crocs acérés débordent de sa gueule béante.",
      "Des dizaines de tentacules prolongés de griffes se tortillent le long de son corps d'ours colossal, et elle a une tête de reptile surmontée d'une corne aussi longue qu'un sabre de géant ! Rendu nerveux par votre résistance, ce monstre cauchemardesque recule de quelques pas avant de pousser un mugissement rageur et de revenir à la charge.",
      "OCTOPURS IXIAN HABILETÉ: 40 ENDURANCE: 60 Vous pouvez fuir ce combat à la fin du troisième Assaut en vous rendant au 56.",
      "Si vous êtes victorieux, rendez-vous au 16."
    ],
    "choices": [
      {
        "text": "Si vous êtes victorieux, rendez-vous au 16.",
        "targetId": "16"
      }
    ],
    "combat": {
      "name": "OCTOPURS IXIAN",
      "combatSkill": 40,
      "endurance": 60,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "90": {
    "id": "90",
    "text": [
      "Faisant volte-face, vous voyez un puits circulaire s'ouvrir dans le sol. Puis, au centre de ce trou béant entouré de flammes, un socle massif s'élève, sur lequel se dresse la silhouette terrifiante du Seigneur de la Mort. Écœuré par la puanteur qui règne maintenant dans la salle, impressionné par l'apparence ignoble de votre ennemi, vous reculez de trois pas.",
      "Alors, Ixia-taaga lève le Bâton de Mort bourdonnant du formidable pouvoir destructeur qu'il contient. Un ricanement odieux jaillit de son crâne de bouc quand il lève son arme maléfique et la pointe droit sur votre cœur.",
      "Si vous possédez le Glaive de Sommer, rendez- vous au 113.",
      "Si vous possédez le Pic de Pouvoir, rendez-vous au 296.",
      "Sinon, rendez-vous au 215."
    ],
    "choices": [
      {
        "text": "Si vous possédez le Pic de Pouvoir, rendez-vous au 296.",
        "targetId": "296"
      },
      {
        "text": "Sinon, rendez-vous au 215.",
        "targetId": "215"
      }
    ]
  },
  "91": {
    "id": "91",
    "text": [
      "Votre réflexe foudroyant vous sauve d'une mort certaine. Les balles de feu vous frôlent d'assez près pour roussir votre tunique et explosent dans la neige sans vous causer le moindre mal.",
      "Rendez-vous au 221."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 221.",
        "targetId": "221"
      }
    ]
  },
  "92": {
    "id": "92",
    "text": [
      "Utilisant votre savoir de la Magie de l'Ancien Royaume, vous murmurez la formule du sortilège du Poing invisible et vous tendez le bras droit vers le monstre qui s'avance sur vous. Un flot d'énergie jaillit de votre main et fuse droit vers son torse avec une violence inouïe.",
      "Poussant un glapissement étranglé, l'effroyable créature est littéralement soulevée de la planche d'embarquement. Elle s'écrase plusieurs mètres en arrière, bousculant les rangs des guerriers squelettiques rassemblés sur le quai. Avant qu'elle ait pu se relever, vous abattez votre arme de toutes vos forces sur la passerelle d'embarquement, la brisant net en deux tronçons qui vont s'abîmer dans l'eau glacée du port.",
      "L'ennemi est ainsi empêché de monter à bord du brise-glace, mais vous ne tardez pas à comprendre que tout danger n'est pas écarté. Remis sur pied, l'être abominable lève son bâton de glace et le pointe sur vous. Dans un éclair aveuglant, une boule de feu jaillit de l'extrémité du bâton et fuse droit vers votre tête.",
      "Mais vous plongez derrière un coffre à outils, esquivant de quelques centimètres salvateurs la sphère ardente qui percute le pont dans une violente explosion. Hurlant de rage, le monstre fait feu à nouveau mais, cette fois, c'est sur la ligne de flottaison du navire qu'il braque son arme.",
      "Une terrible onde de choc secoue le pont du navire et vous voyez des langues de flammes jaillir tout autour de la coque. Par quelque sortilège, elles grossissent à une vitesse effroyable et, en une poignée de secondes, vous êtes entouré d'un brasier rugissant.",
      "Si vous voulez vous échapper du navire en flammes en sautant dans l'eau du port, rendez-vous au 42.",
      "Si vous préférez tenter d'atteindre le quai en vous balançant le long d'un cordage, rendez-vous au 201."
    ],
    "choices": [
      {
        "text": "Si vous voulez vous échapper du navire en flammes en sautant dans l'eau du port, rendez-vous au 42.",
        "targetId": "42"
      },
      {
        "text": "Si vous préférez tenter d'atteindre le quai en vous balançant le long d'un cordage, rendez-vous au 201.",
        "targetId": "201"
      }
    ]
  },
  "93": {
    "id": "93",
    "text": [
      "Vous vous plaquez au sol pour éviter le boulet d'énergie qui fond sur vous. Le mortel projectile passe en vrombissant au-dessus de votre dos pour aller s'écraser sur le mur le plus éloigné de la chambre dans une formidable déflagration. L'explosion ouvre un trou de plus de trois mètres de diamètre dans la paroi de cristal dur comme l'acier, projetant à travers la pièce une pluie cinglante d'éclats acérés.",
      "Mais vos réflexes, aussi aiguisés que les-dits éclats, vous évitent d'être sérieusement touché. (Vous ne perdez qu'1 point d'ENDURANCE.) Vous vous relevez d'un bond et vous comprennez subitement que vous avez une occasion en or de reprendre l'initiative et de porter le fer et la douleur dans le camp du Seigneur de la Mort.",
      "Rendez-vous au 108."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 108.",
        "targetId": "108"
      }
    ]
  },
  "94": {
    "id": "94",
    "text": [
      "L'étroit corridor vous conduit jusqu'à une pièce dont les scintillantes parois bleues sont taillées dans la glace vive. Des marches ont été creusées dans le mur nord pour former un escalier glissant qui grimpe vers une plate-forme située loin au- dessus du lac souterrain.",
      "A mesure que vous escaladez les marches, la température continue de s'abaisser. En dépit de la double protection de votre Amulette de Platine et de vos pouvoirs Magnakaï, vous tremblez et claquez des dents. Au terme d'une épuisante ascension, vous atteignez enfin la plate-forme, pour découvrir au-delà d'une ouverture taillée dans la roche un spectacle à couper le souffle !",
      "Dehors s'étend un chaos de roc et de glace balayé par les tourbillons d'une tempête de neige qu'un orage illumine d'un éclat spectral, dévoilant les crêtes déchiquetées d'une lointaine chaîne de montagnes. Après avoir fait l'inventaire de votre équipement, vous franchissez stoïquement le seuil de la caverne pour vous enfoncer dans le blizzard mordant à la recherche de la cité de Xaagon.",
      "Rendez- vous au 44."
    ],
    "choices": []
  },
  "95": {
    "id": "95",
    "text": [
      "Bien malgré vous, en suivant la pente modérée du talus moussu, vous vous enfoncez dans le cœur du marais. De temps à autre, vous êtes assailli par de petites horreurs visqueuses qui nichent dans la boue de ces terres putrides. Émergeant de leurs tanières puantes, elles essaient de vous mordre les jambes au passage.",
      "Grâce à vos réflexes foudroyants et à la puissance de combat que vous confèrent vos pouvoirs Kaï, il va de soi que les tentatives de ces immondes bestioles sont vaines. Après environ une heure de marche au milieu d'un enchevêtrement d'arbres et de fourrés, quelque chose vous incite à vous arrêter pour l'observer plus attentivement.",
      "A première vue, cela ressemble à une vaste dalle de pierre reposant à la surface du marais mais, en augmentant votre puissance visuelle, vous découvrez qu'il s'agit en fait du toit plat d'un bâtiment de pierre que la vase a peu à peu recouvert. En votre for intérieur, vous savez que vous gagnez du terrain sur Taga-zin.",
      "Aussi dégainez-vous votre arme avant de prendre pied sur le toit de l'édifice englouti.",
      "Si vous maîtrisez la Grande Discipline de l'Exploration, rendez-vous au 229. Sinon, rendez- vous au 278."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Exploration, rendez-vous au 229.",
        "targetId": "229",
        "requiredDiscipline": "Exploration"
      }
    ]
  },
  "96": {
    "id": "96",
    "text": [
      "Vous faites jaillir de votre esprit un boulet d'énergie psychique que vous projetez contre vos assaillants, mais vous sentez aussitôt que votre passage sous le rideau lumineux a affecté vos pouvoirs. Frappées par votre projectile mental, les trois créatures vacillent et tombent à la renverse, mais il ne leur faut que quelques secondes pour recouvrer leurs forces et revenir à l'attaque.",
      "Dans l'état de faiblesse où vous vous trouvez, l'emploi de la Grande Discipline du Foudroiement Psychique vous coûte 2 points d'ENDURANCE. Et vous ne pouvez pas fuir ce combat ! 3 KAJARDAS HABILETÉ: 48 ENDURANCE: 42 Ces êtres sont insensibles à toutes les formes d'attaque psychique, à l'exception de la Grande Discipline du Foudroiement Psychique et de la Déflagration Psychique.",
      "Si vous sortez vainqueur de ce combat au bout de six Assauts ou moins, rendez-vous au 32.",
      "Si vous êtes victorieux au terme de sept Assauts ou plus, rendez-vous au 213."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat au bout de six Assauts ou moins, rendez-vous au 32.",
        "targetId": "32"
      },
      {
        "text": "Si vous êtes victorieux au terme de sept Assauts ou plus, rendez-vous au 213.",
        "targetId": "213"
      }
    ],
    "combat": {
      "name": "KAJARDAS",
      "combatSkill": 48,
      "endurance": 42,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "97": {
    "id": "97",
    "text": [
      "Vous gouvernez le navire avec prudence le long d'un entrelacs d'étroits chenaux qui offrent un passage incertain à travers le traître chaos du champ d'icebergs. Les mains moites, vous étreignez avec nervosité les poignées de la barre à roue, la manœuvrant à petits gestes précis, en réponse aux signaux du marin posté à la pointe de l'étrave.",
      "Votre vision est gênée par des bourrasques de neige poudreuse qui s'abattent des crêtes des falaises de glace et balaient le pont du navire. Au milieu de ces tourbillons, il vous arrive souvent de perdre votre guide de vue. Vous êtes alors contraint de vous en remettre à vos seuls instincts Kaï pour diriger le navire.",
      "Le vent ne cesse de hurler, accompagné par le crissement torturé de la coque lors-qu'elle frôle et racle des bancs de glace immergés. Ce bruit sinistre vous fait courir des frissons d'effroi le long de l'échiné et les hommes d'équipage sont, eux aussi, visiblement terrifiés.",
      "Blottis le long de la lice, ils adressent de ferventes prières à la déesse Ishir en levant des yeux horrifiés vers les immenses falaises blanches qui menacent de vous engloutir. La peur règne à bord quand, presque sans transition, le vent chargé de neige mollit et le navire émerge du champ d'icebergs pour se retrouver dans les eaux libres de la mer de Tozaz.",
      "Assurés d'avoir échappé à un piège mortel, les hommes d'équipage poussent en chœur un vibrant hourra, et l'un d'eux fait sauter le bouchon d'une vieille bouteille de rhum brun qu'il avait amoureusement conservée pour quelque grande occasion. 11 s'en accorde une solide lampée, puis vous passe la bouteille d'un geste fraternel.",
      "Mais, au moment où vos lèvres gercées s'entrouvrent pour accueillir le revigorant breuvage, la voix forte du timonier retentit du haut de la dunette.",
      "« Navire droit devant ! » Vos entrailles se nouent à nouveau sous l'emprise de la peur et vous vous tournez vers l'avant, concentrant votre regard d'aigle sur la lointaine silhouette du vaisseau inconnu.",
      "Rendez-vous au 195."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 195.",
        "targetId": "195"
      }
    ]
  },
  "98": {
    "id": "98",
    "text": [
      "Vous faites volte-face et foncez vers le passage voûté par lequel vous êtes entré dans la chambre. Mais les monstrueux insectes anticipent votre mouvement. A une vitesse effrayante, dans un concert d'affreuses stridulations, ils s'abattent sur vous de toutes parts, cherchant à vous déchiqueter entre leurs appendices dentelés.",
      "Si vous possédez une Gemme Verte, rendez-vous au 349.",
      "Si vous n'avez pas cet Objet Spécial, rendez-vous au 237."
    ],
    "choices": [
      {
        "text": "Si vous possédez une Gemme Verte, rendez-vous au 349.",
        "targetId": "349"
      },
      {
        "text": "Si vous n'avez pas cet Objet Spécial, rendez-vous au 237.",
        "targetId": "237"
      }
    ]
  },
  "99": {
    "id": "99",
    "text": [
      "Avant d'avoir pu atteindre l'abri du rocher, l'avalanche vous emporte tel un fétu. Etouffé et broyé sous des tonnes de glace et de roc, vous avez la chance de connaître une fin miséricordieusement brève. Ainsi s'achèvent votre aventure et votre vie."
    ],
    "choices": []
  },
  "100": {
    "id": "100",
    "text": [
      "Dans la seconde où vous projetez mentalement le nombre clé sur la serrure, la porte tout entière commence à scintiller et à se dématérialiser. Elle devient progressivement transparente avant de disparaître, comme si elle s'était évaporée dans les airs !",
      "Affichant un sourire de satisfaction, vous franchissez le seuil et grimpez la volée de marches qui vous attendent au-delà. Rendez- vous au 180."
    ],
    "choices": []
  },
  "101": {
    "id": "101",
    "text": [
      "Vous montrez votre Fourreau de Korlinium à Banedon et vous lui expliquez comment vous êtes entré en sa possession. Le fourreau comme la ceinture d'apparence ordinaire qui l'accompagne vous ont tous deux été donnés il y a plusieurs années par le Seigneur Rimoah dans des circonstances similaires : il s'agissait alors de dissimuler le pouvoir du Glaive de Sommer à la vigilance des Seigneurs des Ténèbres d'Helgedad. - Je crois qu'il te sera aussi utile à Ixia, conclut Banedon en hochant la tête d'un air approbateur.",
      "Rendez-vous au 22."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 22.",
        "targetId": "22"
      }
    ]
  },
  "102": {
    "id": "102",
    "text": [
      "Vous vous jetez sur le côté pour éviter le projectile, mais celui-ci modifie sa trajectoire en pleine course et vous percute le front. Aveuglé par un éclair blanc, vous sentez les griffes de la souffrance se refermer sur votre gorge et votre poitrine.",
      "Vous attendez le moment où votre corps heurtera le sol... en vain ! Car vous éprouvez une vertigineuse sensation de chute, comme si vous plongiez et tournoyiez sans fin, tombant vers le cœur d'un soleil chauffé à blanc. Vous luttez de toute la force de votre âme, mais la douleur qui vous étreint est intolérable.",
      "Impuissant, vous sombrez dans l'inconscience...",
      "Rendez-vous au 171."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 171.",
        "targetId": "171"
      }
    ]
  },
  "103": {
    "id": "103",
    "text": [
      "A l'instant où le dernier guerrier mort vivant tombe sous vos coups, le courant électrique qui vous retenait prisonnier vous libère enfin. Vous vous écartez de la porte en titubant, soutenant votre main noircie d'où s'échappent d'inquiétantes volutes de fumée bleue.",
      "Serrant les dents pour lutter contre la douleur, vous faites appel à vos dons de guérison Kaï pour remettre en état votre membre blessé. Puis, lorsque vous vous sentez en état de reprendre la route, vous retournez jusqu'à la porte, pour découvrir qu'elle n'est plus fermée.",
      "La serrure s'est débloquée et il ne reste aucune trace de la Clef d'Onyx. (Rayez-la de votre Feuille d'Aventure.) Vous poussez avec circonspection le battant de la porte et pénétrez dans une pièce entièrement recouverte de cristal noir poli, où les murs lisses comme des miroirs vous renvoient jusqu'à l'infini une myriade d'images de vous-même.",
      "Soudain, vous vous rendez compte que vous n'êtes pas seul : trois créatures mortes vivantes, que vous n'aviez pas aperçues en pénétrant dans la pièce, montent la garde devant un passage voûté. Ces créatures sont différentes de toutes celles que vous avez rencontrées.",
      "Les cadavériques mains verdâtres étreignent mollement les manches de tridents aux pointes barbelées. Tout à coup, elles prennent conscience de votre présence et se ruent à l'assaut en brandissant leurs armes, pressées de vous embrocher contre le mur.",
      "Si vous possédez un arc et si vous désirez l'utiliser, rendez-vous au 287.",
      "Sinon, rendez-vous au 64."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et si vous désirez l'utiliser, rendez-vous au 287.",
        "targetId": "287"
      },
      {
        "text": "Sinon, rendez-vous au 64.",
        "targetId": "64"
      }
    ]
  },
  "104": {
    "id": "104",
    "text": [
      "Au terme d'un souple roulé-boulé, vous atterrissez sous le rocher... une petite seconde avant que la langue de l'avalanche s'abatte sur vous. Des tonnes de neige, de glace et de roc engloutissent votre abri mais, par miracle, il résiste à ce formidable poids.",
      "Lorsque l'effroyable grondement de l'avalanche cesse enfin, vous vous jugez chanceux d'être encore en vie. En vie, certes, mais enseveli sous des mètres et des mètres de neige qu'il faut maintenant creuser, patiemment, pour vous libérer de votre tombe glacée.",
      "Rendez-vous au 179."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 179.",
        "targetId": "179"
      }
    ]
  },
  "105": {
    "id": "105",
    "text": [
      "Lorsque vous abattez le dernier de vos assaillants, son corps mutilé et ceux de ses congénères déjà morts se désintègrent sous vos yeux, libérant une fumée brûlante qu'un vent nauséabond disperse au loin. Voyant ce qu'il est advenu de leurs semblables, les Monstres des Laves restés auprès de Tagazin l'abandonnent à son sort et ils s'éloignent à tire-d'aile, poursuivis par les imprécations du Seigneur Démon.",
      "Pendant un instant, vous l'affrontez du regard, soutenant l'éclat de haine dévorante qui brûle au fond de ses yeux surnaturels. Puis il se retourne et se dirige en clopinant vers la Porte d'Ombre. Déterminé à l'arrêter, vous vous lancez à sa poursuite, mais vous ralentissez le pas quand, à travers une large déchirure entre les nuages, vous voyez surgir une nouvelle vague de Monstres des Laves.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, rendez-vous au 272.",
      "Sinon, rendez-vous au 241."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, rendez-vous au 272.",
        "targetId": "272",
        "requiredDiscipline": "Chasse"
      },
      {
        "text": "Sinon, rendez-vous au 241.",
        "targetId": "241"
      }
    ]
  },
  "106": {
    "id": "106",
    "text": [
      "La coursive monte progressivement jusqu'à une haute galerie qui surplombe une salle située deux niveaux plus bas. Un coup d'œil discret par-dessus la rambarde vous montre une douzaine d'esclaves morts vivants vêtus de robes argentées. Dans cette machine percée d'ouvertures d'où s'échappe une lumière spectrale, les mains griffues de vos ennemis introduisent de longues baguettes de verre.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse et si vous avez atteint le rang de Grand Maître Mentor, ou un rang supérieur, rendez-vous au 313.",
      "Si vous ne remplissez pas ces conditions, rendez-vous au 127."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse et si vous avez atteint le rang de Grand Maître Mentor, ou un rang supérieur, rendez-vous au 313.",
        "targetId": "313",
        "requiredDiscipline": "Chasse"
      },
      {
        "text": "Si vous ne remplissez pas ces conditions, rendez-vous au 127.",
        "targetId": "127"
      }
    ]
  },
  "107": {
    "id": "107",
    "text": [
      "Vous fouillez la pièce en ruine quand un bruit, celui de la pierre crissant sur la pierre, vous fait sursauter. Sur la droite, un panneau dérobé s'ouvre dans le mur, livrant passage à six guerriers squelettes brandissant des épées piquées de rouille. Les deux premiers se placent devant l'escalier pour vous couper la retraite.",
      "Les quatre autres s'approchent de vous d'un air menaçant, leurs orbites creuses brûlant d'un maléfique feu verdâtre.",
      "Rendez-vous au 23."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 23.",
        "targetId": "23"
      }
    ]
  },
  "108": {
    "id": "108",
    "text": [
      "Le Bâton de Mort ne vibre plus sous l'effet de sa puissance contenue. Et vous comprenez qu'Ixiataaga a libéré toute son énergie en une seule fois dans l'espoir de vous asséner un coup foudroyant et définitif. Ainsi, le bâton maléfique ne retrouvera pas ses noirs pouvoirs avant plusieurs minutes...",
      "Un délai dont vous pouvez tirer grand avantage si vous réagissez avec la célérité qui s'impose ! Vous élevez le Pic de Pouvoir en rugissant : - Pour le Sommerlund et pour le Kaï ! Puis, d'un bond puissant, vous franchissez le fossé ardent pour atterrir à moins d'un mètre de la silhouette hideuse du Seigneur de la Mort.",
      "Ixiataaga demeure un instant abasourdi par la soudaineté et la fantastique audace de votre geste, mais il a tôt fait de reprendre ses esprits et il pivote sur lui-même avec une rapidité fulgurante pour parer votre Assaut.",
      "Rendez-vous au 77."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 77.",
        "targetId": "77"
      }
    ]
  },
  "109": {
    "id": "109",
    "text": [
      "Après avoir fait voler en éclats le squelette du dernier mort vivant, vous vous hissez hors de l'eau glacée où flottent les ossements rompus de vos assaillants et vous escaladez en trébuchant les marches qui montent jusqu'au quai. Vous y retrouvez le capitaine Lanza et ses hommes, tous visiblement stupéfaits de vous revoir en vie. - L'ennemi est en déroute ! s'exclame Lanza.",
      "Nous avons expédié plus de la moitié de ces damnés squelettes et ceux qui se battent encore ont le dos à la mer. Voulez-vous nous aider à finir la besogne, Grand Maître ? - Avec joie, répondez-vous. Par Kaï et Ishir, envoyons-les tous rejoindre leur maudit créateur !",
      "Rendez-vous au 340."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 340.",
        "targetId": "340"
      }
    ]
  },
  "110": {
    "id": "110",
    "text": [
      "A l'instant où vous tirez le Glaive de Sommer de son fourreau, les rayons d'une aveuglante lumière d'or jaillissent de sa lame d'essence divine, illuminant la créature inconnue que l'obscurité de la grotte vous empêchait jusqu'alors de distinguer. La vision vous glace d'effroi.",
      "La gueule béante du monstre déborde d'effroyables rangées de crocs acérés. Des dizaines de tentacules prolongés de griffes se tortillent le long de son colossal corps d'ours. Sa tête reptilienne est surmontée d'une corne longue comme un sabre de géant !",
      "Cependant, aussi terrifiante soit-elle, cette créature de cauchemar est sensible aux pouvoirs magiques de votre lame. Lorsque la lueur bénéfique du Glaive de Sommer vient frapper ses yeux glauques, le monstre s'immobilise et laisse échapper de sourds glapissements.",
      "Vous en profitez aussitôt pour passer à l'attaque. OCTOPURS IXIAN HABILETÉ: 38 ENDURANCE: 60 Frappé de crainte par l'Épée du Soleil, votre adversaire n'agira pas avant le troisième Assaut de ce combat. Vous ne perdez donc pas de points d'ENDURANCE au cours des deux premiers Assauts.",
      "D'autre part, n'oubliez pas d'augmenter votre HABILETÉ de tous les points supplémentaires dont l'usage du Glaive de Sommer peut vous faire bénéficier face à cet ennemi mort vivant. Enfin, vous pouvez fuir ce combat à la fin du troisième Assaut en vous rendant au 56.",
      "Si vous êtes victorieux, rendez-vous au 16."
    ],
    "choices": [
      {
        "text": "Si vous êtes victorieux, rendez-vous au 16.",
        "targetId": "16"
      }
    ],
    "combat": {
      "name": "OCTOPURS IXIAN",
      "combatSkill": 38,
      "endurance": 60,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "111": {
    "id": "111",
    "text": [
      "Vous vous élevez à nouveau et remontez jusqu'à la hauteur du bord de la fosse. Mais votre énergie s'épuise trop vite et vous comprenez que vous ne pourrez pas vous maintenir en lévitation et combattre en même temps. - Pour le Sommerlund et le Kaï ! hurlez-vous, en bondissant tel un diable au milieu des créatures du Chaos amassées autour du puits.",
      "D'un formidable coup de taille, porté à l'instant où vos pieds touchent le sol, vous parvenez à repousser vos adversaires. Mais, dans l'instant qui suit, la horde des monstres se referme sur vous, avide de vous réduire en charpie. HORDE DU CHAOS HABILETÉ : 46 ENDURANCE : 48 Ces créatures sont insensibles à toutes les formes d'attaque psychique, hormis les effets de la Grande Discipline du Foudroiement Psychique ou de la Déflagration Psychique.",
      "Si vous sortez vainqueur de ce combat, rendez-vous au 263."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 263.",
        "targetId": "263"
      }
    ],
    "combat": {
      "name": "HORDE DU CHAOS",
      "combatSkill": 46,
      "endurance": 48,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "112": {
    "id": "112",
    "text": [
      "Enrobée d'une épaisse croûte de glace, la porte métallique de votre cellule ne comporte aucune poignée apparente, juste un trou de serrure de forme hexagonale. Murmurant la formule du sortilège de la Main de Feu, vous pointez l'index sur l'étrange fermeture.",
      "Un intense fourmillement descend le long de votre bras et se concentre dans votre main, jusqu'à ce qu'un jet d'énergie d'un bleu aveuglant fuse de votre doigt, droit vers la serrure. Hélas, faire appel à ce sortilège si peu de temps après avoir repris conscience vous coûte 2 points d'ENDURANCE.",
      "Modifiez en conséquence votre Feuille d'Aventure avant de vous rendre au 174."
    ],
    "choices": []
  },
  "113": {
    "id": "113",
    "text": [
      "Le rire ignoble cesse brusquement, comme si quelque chose avait soudain ébranlé l'arrogante certitude du Seigneur de la Mort en sa propre invicibilité.",
      "« Le Glaive de Sommer», pensez-vous en estimant que vous possédez une des rares armes capables de le détruire. Sachant cela, vous profitez du trouble de votre ennemi pour avancer sur lui, mais Ixiataaga réagit vivement. Il émet une sorte de cri guttural et, dans la seconde qui suit, un boulet d'énergie pure jaillit de l'extrémité du Bâton de Mort et vole droit vers votre cœur !",
      "Utilisez la Table de Hasard. Ajoutez au chiffre obtenu pour chaque rang de Grande Maîtrise Kaï que vous avez atteint au-delà de celui de Grand Maître Tutélaire.",
      "Si le résultat est inférieur ou égal à 2, rendez-vous au 178.",
      "S'il est compris entre 3 et 6, rendez-vous au 47.",
      "S'il est supérieur ou égal à 7, rendez-vous au 280."
    ],
    "choices": [
      {
        "text": "rendez-vous au 178.",
        "targetId": "178"
      },
      {
        "text": "entre 3 et 6, rendez-vous au 47.",
        "targetId": "47"
      },
      {
        "text": "rendez-vous au 280.",
        "targetId": "280"
      }
    ]
  },
  "114": {
    "id": "114",
    "text": [
      "Vous actionnez d'un geste sec la détente de la baliste et son lourd projectile plonge en sifflant vers le centre de la horde des morts vivants. Fendant leurs rangs serrés, il fracasse sur son passage une vingtaine de squelettes avant de disparaître à travers le pont du navire.",
      "Pendant un moment, la meute des assaillants semble hésiter, mais leur furie sanguinaire ne tarde pas à reprendre le dessus et ils repartent à l'assaut du quai. - Ça ne sert à rien ! hurlez-vous dans l'oreille de Prarg. II nous faut quelque chose de plus fort qu'une baliste pour repousser ces horreurs. - Regardez, Grand Maître ! vous crie Prarg, le visage blême, le doigt tendu vers le brise-glace à bord duquel les morts vivants commencent à déferler, visiblement décidés à le couler. - Il faut les arrêter ! hurlez-vous en vous retournant pour vous ruer dans l'escalier.",
      "Restez-ici, Prarg, et couvrez-moi avec la baliste !",
      "Rendez-vous au 310."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 310.",
        "targetId": "310"
      }
    ]
  },
  "115": {
    "id": "115",
    "text": [
      "Parvenus à moins d'un mètre de vous, les gigantesques insectes font jaillir des pointes acérées de leurs carapaces chitineuses. L'un d'eux émet alors une affreuse stridulation, donnant le signal de l'assaut. Dans un seul mouvement, les six monstres se ruent à la curée.",
      "Si vous disposez du Glaive de Sommer, rendez-vous au 160.",
      "Sinon, rendez-vous au 43."
    ],
    "choices": [
      {
        "text": "Si vous disposez du Glaive de Sommer, rendez-vous au 160.",
        "targetId": "160"
      },
      {
        "text": "Sinon, rendez-vous au 43.",
        "targetId": "43"
      }
    ]
  },
  "116": {
    "id": "116",
    "text": [
      "Vous priez, en vain, car vous savez grâce à vos sens Kaï que vous n'êtes pas passé inaperçu. Cette intuition devient une certitude, quelques secondes plus tard, quand vous percevez un son qui vous fait frissonner d'effroi. Quelque part dans le lac, une porte métallique s'ouvre en raclant le sol.",
      "Si vous le pouviez, vous n'hésiteriez pas un instant à parier que vos ennemis, alertés de la présence d'un intrus dans leur repaire, viennent de libérer quelques monstrueux prédateurs.",
      "Si vous voulez changer de direction pour essayer de rejoindre la jetée, rendez-vous au 348.",
      "Si vous décidez de continuer à nager vers le rivage, rendez-vous au 21."
    ],
    "choices": [
      {
        "text": "Si vous voulez changer de direction pour essayer de rejoindre la jetée, rendez-vous au 348.",
        "targetId": "348"
      },
      {
        "text": "Si vous décidez de continuer à nager vers le rivage, rendez-vous au 21.",
        "targetId": "21"
      }
    ]
  },
  "117": {
    "id": "117",
    "text": [
      "Lanza est un soldat trapu au nez proéminent, dont le visage tanné et crevassé par le gel porte le vivant témoignage de cinq dures années passées à commander cette lugubre place forte oubliée des dieux. 11 vous explique qu'il doit cette affectation à une rixe dans une taverne de Vadera, où il eut la malchance d'occire, certes en état de légitime défense, une brute épaisse qui se trouvait être le fils d'Haglar, le maire de la cité.",
      "Traduit en cour martiale, il se vit offrir le choix entre deux châtiments : accepter le commandement de la garnison de la sinistre île d'Azgad, ou être pendu haut et court. Et Lanza vous avoue qu'il lui est arrivé certains jours de se dire qu'il avait fait le mauvais choix...",
      "Le capitaine vous a reçu dans ses quartiers, qui se résument à une chambre austère perchée dans le haut de la tour. Vous vous réchauffez devant l'âtre en écoutant Lanza et Prarg discuter des préparatifs de votre voyage vers Ixia à bord du brise- glace de l'île.",
      "Pour finir, votre hôte vous confie son inquiétude devant certaines choses troublantes récemment vues en mer. On aurait aperçu un étrange vaisseau voguant sous les flots, et des navires manœuvrés par des équipages de morts vivants. Tandis qu'il vous délivre ces peu rassurantes nouvelles, vous observez par l'étroite fenêtre en forme de meurtrière un banc de brouillard glacé qui descend du nord et commence à envahir l'île, enrobant de ses volutes opaques la jetée du port et le pied de la tour.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse et si vous avez atteint le rang de Grand Maître Mentor, ou un rang supérieur, rendez-vous au 39.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï, rendez-vous au 61.",
      "Si vous ne maîtrisez pas ces Grandes Disciplines, ou si vous ne désirez pas en faire usage, rendez-vous au 233."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse et si vous avez atteint le rang de Grand Maître Mentor, ou un rang supérieur, rendez-vous au 39.",
        "targetId": "39",
        "requiredDiscipline": "Chasse"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï, rendez-vous au 61.",
        "targetId": "61"
      },
      {
        "text": "Si vous ne maîtrisez pas ces Grandes Disciplines, ou si vous ne désirez pas en faire usage, rendez-vous au 233.",
        "targetId": "233"
      }
    ]
  },
  "118": {
    "id": "118",
    "text": [
      "Quand vos ennemis sortent de la cale, vos pensées se tournent vers votre équipage Lencien. Au-dessus de vous, le pont ne résonne plus d'aucun bruit de bataille, et vous redoutez que vos matelots n'aient été massacrés.",
      "Si vous voulez suivre les morts vivants lorsqu'ils quittent la cale, rendez-vous au 186.",
      "Si vous préférez rester dans votre cachette, rendez-vous au 314."
    ],
    "choices": [
      {
        "text": "Si vous voulez suivre les morts vivants lorsqu'ils quittent la cale, rendez-vous au 186.",
        "targetId": "186"
      },
      {
        "text": "Si vous préférez rester dans votre cachette, rendez-vous au 314.",
        "targetId": "314"
      }
    ]
  },
  "119": {
    "id": "119",
    "text": [
      "Le passage dans lequel vous engagez votre navire forme un chenal aussi large que profond sur toute sa longueur, vous offrant une voie royale à travers les icebergs. Moins de trois heures après être entré dans le champ de glace, votre vaisseau retrouve les eaux libres sans avoir subi le moindre dommage, et il ne vous reste plus qu'à mettre le cap droit sur Fort Azgad.",
      "Rendez-vous au 350."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 350.",
        "targetId": "350"
      }
    ]
  },
  "120": {
    "id": "120",
    "text": [
      "Vous pénétrez dans une chambre entièrement recouverte de cristal noir poli, où les murs lisses comme des miroirs vous renvoient jusqu'à l'infini une myriade d'images de vous-même. Promenant votre regard tout autour de cette pièce étrange, vous découvrez que vous n'êtes pas seul.",
      "Trois créatures mortes vivantes, d'une espèce que vous n'avez encore jamais rencontrée, montent la garde devant un passage voûté, en serrant mollement les manches de tridents aux pointes barbelées dans leurs mains décharnées. Tout à coup, elles découvrent votre présence et se ruent aussitôt à l'attaque en brandissant leurs armes, désireuses de vous embrocher contre le mur...",
      "Si vous possédez un arc et si vous désirez l'utiliser, rendez-vous au 287.",
      "Sinon, rendez-vous au 64."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et si vous désirez l'utiliser, rendez-vous au 287.",
        "targetId": "287"
      },
      {
        "text": "Sinon, rendez-vous au 64.",
        "targetId": "64"
      }
    ]
  },
  "121": {
    "id": "121",
    "text": [
      "Murmurant la formule du sortilège de la Main de Feu, vous tendez la main droite vers le monstre. Aussitôt, un flot d'énergie descend le long de votre bras et se concentre dans le bout de votre index. Alors, dans un aveuglant éclair, un rayon d'énergie pure jaillit de votre doigt et frappe la créature en pleine poitrine.",
      "Elle pousse un glapissement d'effroi et bascule en arrière mais, dans l'instant qui suit, vous la voyez avec horreur se relever, comme animée d'une vigueur nouvelle, et bondir de la passerelle pour vous saisir à la gorge. Cette abomination a absorbé toute l'énergie de votre sortilège et elle s'en trouve maintenant d'autant plus forte.",
      "ZIOG HABILETÉ: 52 ENDURANCE: 44 Cette créature morte vivante est insensible aux effets de toutes les formes d'attaque psychique, à l'exception de la Grande Discipline du Foudroiement Psychique et de la Déflagration Psychique.",
      "Si vous sortez vainqueur de ce combat, rendez-vous au 228."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 228.",
        "targetId": "228"
      }
    ],
    "combat": {
      "name": "ZIOG",
      "combatSkill": 52,
      "endurance": 44,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "122": {
    "id": "122",
    "text": [
      "Levant les yeux vers la monstrueuse tour, vous percevez des ondes maléfiques qui irradient ses murs gainés de glace. Ces ondes semblent croître et diminuer au même rythme que les pulsations de lumière pourpre qui émanent de son sommet. Elles sont si intenses qu'elles vous affaiblissent physiquement, et vous éprouvez une grande difficulté à détourner le regard.",
      "Soudain, vous comprenez que vous êtes confronté au pouvoir diabolique du Seigneur de la Mort. Ixiataaga en personne se trouve en ce moment même quelque part dans cette sinistre tour.",
      "Si vous maîtrisez la Grande Discipline de l'Ecran Psychique, rendez-vous au 325.",
      "Sinon, rendez-vous au 245."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Ecran Psychique, rendez-vous au 325.",
        "targetId": "325"
      },
      {
        "text": "Sinon, rendez-vous au 245.",
        "targetId": "245"
      }
    ]
  },
  "123": {
    "id": "123",
    "text": [
      "Plongeant votre regard dans les yeux du Seigneur Démon, vous rassemblez toutes vos forces pour lui asséner une décharge d'énergie psychique. Cette décharge prend la forme d'une balle étincelante qui traverse la pièce à la vitesse de l'éclair avant de plonger dans l'esprit de Tagazin, qui sursaute et vacille sous le choc.",
      "Utilisez la Table de Hasard. Multipliez ensuite par deux le chiffre obtenu et notez le résultat sur votre Feuille d'Aventure avant de vous rendre au 45."
    ],
    "choices": []
  },
  "124": {
    "id": "124",
    "text": [
      "Une troisième vague de morts vivants s'avance en clopinant, index piétinant les corps démembrés de ceux que vous avez abattus. Devant ces nouveaux ennemis marche un guerrier à tête de mort qui serre dans sa main crochue une sorte de boule de verre liquescente.",
      "Vous levez votre arme pour l'abattre sur le crâne hideux du combattant mort vivant, mais il réagit avec une vivacité étonnante. Il lance sa boule de verre dans les airs avant que vous ayez pu le frapper. Dans la seconde qui suit, il y a un éclair aveuglant et la boule fuse droit vers votre front, comme un jet de lave en fusion.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse ou la Grande Discipline de l'Exploration, ajoutez 1 au chiffre obtenu.",
      "Si vous maîtrisez ces deux Grandes Disciplines, ajoutez 3 au chiffre obtenu.",
      "Si le résultat est inférieur ou égal à 6, rendez-vous au 102.",
      "S'il est supérieur ou égal à 7, rendez-vous au 85."
    ],
    "choices": [
      {
        "text": "rendez-vous au 102.",
        "targetId": "102"
      },
      {
        "text": "rendez-vous au 85.",
        "targetId": "85"
      }
    ]
  },
  "125": {
    "id": "125",
    "text": [
      "Vous avez tout juste le temps de dégainer votre arme pour soutenir la fulgurante attaque des trois monstruosités. 3 KAJARDAS HABILETÉ : 48 ENDURANCE : 42 Ces êtres sont insensibles aux effets de toutes les formes d'attaque psychique, à l'exception de la Grande Discipline du Foudroiement Psychique et de la Déflagration Psychique.",
      "Si vous sortez vainqueur de ce combat en six Assauts ou moins, rendez- vous au 32.",
      "S'il vous faut sept Assauts ou plus pour venir à bout de ces créatures, rendez-vous au 213."
    ],
    "choices": [
      {
        "text": "rendez-vous au 213.",
        "targetId": "213"
      }
    ],
    "combat": {
      "name": "KAJARDAS",
      "combatSkill": 48,
      "endurance": 42,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "126": {
    "id": "126",
    "text": [
      "Au terme d'un saut vertigineux, vous heurtez le sol avec une violence qui vous coupe le souffle.",
      "Si vous survivez à cette chute, qui vous inflige une perte de 3 points d'ENDURANCE, rendez- vous au 36."
    ],
    "choices": []
  },
  "127": {
    "id": "127",
    "text": [
      "Craignant d'être repéré par les morts vivants, vous quittez la galerie à pas feutrés pour vous glisser dans une nouvelle coursive dont la pente descend jusqu'à un long corridor vide. Tout le long de la paroi gauche de cet étroit passage s'alignent des hublots de verre couverts de glace et de crasse.",
      "Vous grattez vigoureusement la croûte sale qui recouvre une de ces ouvertures circulaires...",
      "Rendez-vous au 198."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 198.",
        "targetId": "198"
      }
    ]
  },
  "128": {
    "id": "128",
    "text": [
      "En contemplant le heaume à pointe, vous sentez une étrange idée se former dans votre esprit. Vous savez que cet objet est voué au Mal, mais vous avez néanmoins la troublante intuition qu'il pourrait être utilisé au service du Bien. Votre instinct Kaï vous dit que ce heaume a été forgé par Naar, le Dieu Ténébreux, et que son pouvoir est tel qu'il est capable de détruire la plupart des êtres, vivants ou morts.",
      "Peut-être est-il même assez puissant pour annihiler le Seigneur de la Mort Ixiataaga en personne... Saisissant le heaume par sa pointe de cristal, vous l'abattez sur le sol d'un geste sec et puissant, de sorte que cette pointe se détache net du sommet de la coiffe et vous reste dans les mains.",
      "Cela fait, vous glissez la pointe dans votre ceinturon. (Sur votre Feuille d'Aventure, inscrivez cet Objet Spécial sous le nom de Pic de Pouvoir.",
      "Si vous transportez déjà le nombre maximum d'Objets Spéciaux autorisé, vous devez vous séparer de l'un d'entre eux à la place de celui-ci, que vous porterez à la ceinture.) Laissant derrière vous les restes du Seigneur Démon, vous vous avancez d'un pas résolu vers la Porte d'Ombre.",
      "Sans hésiter, vous plongez dans son noir tourbillon en priant d'arriver sur le Magna-mund à temps pour déjouer le plan maléfique du Seigneur de la Mort.",
      "Rendez-vous au 200."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 200.",
        "targetId": "200"
      }
    ]
  },
  "129": {
    "id": "129",
    "text": [
      "Vous examinez le nouveau venu d'un œil expert. Ce capitaine est un homme de belle taille, qui dépasse d'une bonne tête la plupart des gardes du palais. Il possède le fier maintien d'un militaire aguerri, mais l'aspect le plus frappant de sa silhouette réside dans ses yeux brillants et rapprochés qui surmontent un nez en bec d'aigle et une broussailleuse moustache noire. - Voici le capitaine Prarg, Grand Maître, annonce le Roi Sarnac.",
      "Et le susnommé s'incline avec respect devant vous. - Bienvenue à Vadera, monseigneur, dit-il. C'est pour moi un honneur d'avoir été choisi pour vous servir dans cette urgente mission.",
      "Rendez-vous au 83."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 83.",
        "targetId": "83"
      }
    ]
  },
  "130": {
    "id": "130",
    "text": [
      "Poussant en chœur un croassement avide, les infectes créatures se jettent sur vous tels des vautours sur une charogne. 3 KHERBALAS HABILETÉ : 56 ENDURANCE : 54 Ces êtres morts vivants sont insensibles à la Puissance Psychique et au Foudroiement Psychique.",
      "Vous pouvez fuir ce combat après avoir livré quatre Assauts en vous rendant au 41.",
      "Si vous êtes victorieux, rendez-vous au 293."
    ],
    "choices": [
      {
        "text": "Si vous êtes victorieux, rendez-vous au 293.",
        "targetId": "293"
      }
    ],
    "combat": {
      "name": "KHERBALAS",
      "combatSkill": 56,
      "endurance": 54,
      "mindblastImmune": true,
      "undead": false
    }
  },
  "131": {
    "id": "131",
    "text": [
      "Face à des êtres dont vous pensez qu'ils possèdent sûrement des pouvoirs psychiques, vous vous hâtez de faire appel à votre Grande Maîtrise Kaï afin d'ériger autour de votre esprit une barrière défensive. Sage précaution, mais qui pourrait s'avérer insuffisante face à des entités si puissantes.",
      "Votre muraille psychique est à peine mise en place que les fumerolles fusent à travers la chambre pour vous cerner d'un cercle fuligineux. Elles tournoient, de plus en plus vite... Soudain, une formidable vague d'assaut psychique déferle sur votre esprit.",
      "Utilisez la Table de Hasard.",
      "Le chiffre que vous obtiendrez indiquera le nombre de points d'ENDURANCE que vous perdrez à l'issue de ce terrible assaut psychique. (En cette occasion : 0 = 100.) Si vous survivez, rendez-vous au 283."
    ],
    "choices": [
      {
        "text": "Si vous survivez, rendez-vous au 283.",
        "targetId": "283"
      }
    ]
  },
  "132": {
    "id": "132",
    "text": [
      "Emporté par votre élan, vous lâchez le cordage et fendez la fumée tel un projectile, filant droit vers la jetée. Malheureusement, votre bond est un peu trop court et vous manquez le bord du quai de quelques dizaines de centimètres. Rebondissant avec violence sur le mur de pierre, vous retombez dans l'eau du port la tête la première. (Vous perdez 3 points d'ENDURANCE.) Aucun humain normalement constitué ne saurait résister plus de quelques secondes au froid de ces eaux glacées, mais votre maîtrise de la Grande Discipline du Nexus vous préserve de la paralysie et vous remontez rapidement à la surface.",
      "Louvoyant entre les débris incandescents d'espars et de voiles qui pleuvent autour de vous, vous nagez avec vigueur vers l'extrémité du quai où une volée de marches descend jusqu'à l'eau. Malheureusement, votre spectaculaire fuite du brise-glace en flammes n'est pas passée inaperçue.",
      "Au moment où vous vous apprêtez à prendre pied sur les marches, vous vous retrouvez confronté à une douzaine de guerriers squelettes fermement décidés à vous renvoyer nourrir les poissons ! IXIANS MORTS VIVANTS HABILETÉ : 41 ENDURANCE : 46 Ces êtres sont insensibles à toutes les formes d'attaque psychique, sauf la Grande Discipline du Foudroiement Psychique et la Déflagration Psychique.",
      "Par ailleurs, étant contraint de batailler dans l'eau glacée, vous devez réduire de 5 points votre total d'HABILETÉ pour la durée de ce combat.",
      "Si vous êtes victorieux, rendez-vous au 109."
    ],
    "choices": [
      {
        "text": "Si vous êtes victorieux, rendez-vous au 109.",
        "targetId": "109"
      }
    ],
    "combat": {
      "name": "IXIANS MORTS VIVANTS",
      "combatSkill": 41,
      "endurance": 46,
      "mindblastImmune": false,
      "undead": true
    },
    "damage": 3
  },
  "133": {
    "id": "133",
    "text": [
      "Tandis que vous nagez sous l'eau, votre haut rang de maîtrise Kaï vous permet d'invoquer le sortilège de Respiration sous-marine. Ce puissant charme vous confère le pouvoir d'absorber l'oxygène de l'eau de mer à travers les pores de la peau. Vous n'avez donc pas besoin de remonter à la surface pour respirer.",
      "Quelques minutes plus tard, vous atteignez le rivage au pied d'un étroit chemin empierré. Ce chemin monte jusqu'à une route d'où un embranchement part en direction du tunnel que vous souhaitez atteindre. Ne gardant que le sommet de la tête hors de l'eau, vous vous cramponnez aux pierres du chemin et attendez patiemment qu'une patrouille de guerriers morts vivants ait fini de passer.",
      "Rendez-vous au 169."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 169.",
        "targetId": "169"
      }
    ]
  },
  "134": {
    "id": "134",
    "text": [
      "Le cours tortueux du chenal continue à se rétrécir devant le navire et la collision est bientôt inévitable. Dans un horrible fracas de bois brisé, vous heurtez un banc de glace immergé par le bossoir bâbord, ouvrant une large déchirure dans l'étrave. En moins d'une heure, le navire sombre, vous contraignant à vous réfugier sur la glace, dépourvu de tout.",
      "Trois semaines plus tard, par une froide nuit de tempête, alors que vous avez atteint l'extrême limite de vos forces, vous êtes jeté à la mer par une vague déferlante et vous coulez à pic pour ne plus jamais reparaître. Il vous reste l'ultime consolation d'avoir défait le Seigneur de la Mort et sauvé ainsi des millions d'êtres anonymes d'un esclavage éternel.",
      "Aussi longtemps que les forces du Bien veilleront sur le Magnamund, la mémoire de votre héroïque exploit restera dans les cœurs. Mais pour l'heure, votre aventure s'achève dans les eaux glaciales de la mer de Tozaz dont vous allez nourrir les poissons..."
    ],
    "choices": []
  },
  "135": {
    "id": "135",
    "text": [
      "Réduit à l'impuissance, vous voyez le monstre braquer lentement son bâton de glace sur vous en émettant un odieux ricanement. La pointe de son arme diabolique se met à rougeoyer et s'entoure d'étincelles crépitantes annonçant l'imminence d'une nouvelle décharge dévastatrice.",
      "D'un geste désespéré, vous tentez d'empoigner votre arme. Mais, à l'instant même où votre main se pose sur la garde, un sifflement strident déchire l'air. Une sorte de lance, massive, transperce le corps de la créature avant de l'emporter dans sa course et de la clouer, tel un insecte, au pied du grand mât du brise-glace.",
      "Levant les yeux vers le sommet de la tour, vous voyez Prarg derrière une énorme batiste fixée au bord du parapet brandir un poing triomphant vers le ciel. Vous lui renvoyez fraternellement son salut, remerciant les dieux d'avoir si bien armé son bras.",
      "Cependant, bien que cloué au mât, le monstre bouge encore ! Mugissant de rage, il se tortille et se contor-sionne en tous sens pour tenter de se libérer. En réponse à ses cris inhumains, une foule de squelettes guerriers se ruent sur la planche d'embarquement, fonçant droit sur vous.",
      "D'un geste instinctif, vous abattez de toutes vos forces votre arme sur la planche, la brisant net en deux tronçons qui vont s'abîmer dans les eaux du port, suivis de près par la horde des assaillants morts vivants.",
      "Rendez-vous au 288."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 288.",
        "targetId": "288"
      }
    ]
  },
  "136": {
    "id": "136",
    "text": [
      "Vous vous placez au pied du pilier gauche et murmurez la formule du sortilège de Lévitation. Aussitôt, vous quittez le sol et, utilisant vos mains pour vous guider et vous maintenir le long du pilier, vous vous élevez sans effort jusqu'à la voûte. Sans effort, certes, mais pas sans douleur...",
      "Pendant votre ascension, la partie droite de votre visage a été exposée aux dangereuses radiations du champ d'énergie. Sévèrement brûlé, vous perdez 3 points d'ENDURANCE.",
      "Si vous avez atteint le rang de Grand Maître Eminent, rendez-vous au 273.",
      "Si vous n'avez pas encore atteint ce rang, rendez-vous au 49."
    ],
    "choices": [
      {
        "text": "Si vous avez atteint le rang de Grand Maître Eminent, rendez-vous au 273.",
        "targetId": "273"
      },
      {
        "text": "Si vous n'avez pas encore atteint ce rang, rendez-vous au 49.",
        "targetId": "49"
      }
    ],
    "damage": 3
  },
  "137": {
    "id": "137",
    "text": [
      "Les dieux sont avec vous ! A la première tentative, la boucle du nœud coulant se resserre autour d'un éperon rocheux. Vous parvenez à vous hisser hors du bourbier puant quelques secondes avant que la créature qui rôde sous la surface referme les mâchoires sur vos jambes.",
      "Lorsque vous atteignez l'éperon, vous dégagez la corde et la fourrez dans votre sac avant de poursuivre l'escalade du puits à mains nues. Au-dessus de vous, la horde mugissante des créatures du Chaos surveille votre ascension avec des yeux avides, assoiffés de sang.",
      "Parvenu à moins d'un mètre du rebord du puits, vous assurez votre prise d'une main et dégainez votre arme de l'autre, prêt à réduire en charpie toutes les abominations qui prétendraient vous empêcher d'en sortir ! HORDE DU CHAOS HABILETÉ : 50 ENDURANCE : 48 A moins d'avoir atteint le rang de Grand Maître Mentor, vous devez réduire votre total d'HABILETÉ de 4 points pendant la durée de ce combat, étant donné la position peu avantageuse dans laquelle vous vous trouvez.",
      "Si vous êtes victorieux, rendez- vous au 82."
    ],
    "choices": [],
    "combat": {
      "name": "HORDE DU CHAOS",
      "combatSkill": 50,
      "endurance": 48,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "138": {
    "id": "138",
    "text": [
      "Vous faites appel à tout ce qu'il vous reste de courage et d'énergie pour rallier le rivage. Pendant que vous nagez, l'Orghle furieux s'efforce de happer vos jambes entre ses terrifiantes mâchoires. Mais, par la grâce des dieux, il n'y parvient pas et vous atteignez bientôt les hauts fonds où le monstre, ne pouvant vous suivre du fait de sa taille énorme, est contraint de vous laisser fuir.",
      "Crachant et soufflant comme un phoque, vous émergez en titubant de l'eau glacée pour trouver refuge derrière un groupe de rochers qui bordent le rivage. Vous découvrez alors, consterné, que votre Sac à Dos s'est presque entièrement vidé au cours du combat que vous venez de livrer.",
      "Il ne contient plus que trois objets ! Rayez de votre Feuille d'Aventure tous les objets contenus dans votre Sac à Dos, hormis ceux qui sont inscrits en quatrième, cinquième et sixième position sur la liste.",
      "Puis rendez-vous au 304."
    ],
    "choices": [
      {
        "text": "rendez-vous au 304.",
        "targetId": "304"
      }
    ]
  },
  "139": {
    "id": "139",
    "text": [
      "Vous avez beau faire... tous vos efforts sont vains ! Cette maudite porte refuse de s'ouvrir. Aussi décidez-vous, malgré le risque d'être surpris, d'examiner sa serrure de plus près. A première vue, elle semble ne receler aucun piège mais, en faisant appel à la Grande Discipline du Nexus, vous découvrez qu'elle est protégée par un sortilège.",
      "Une erreur de plus, et vous auriez déclenché une alarme. Dans ces conditions, vous n'envisagez pas un seul instant de tapoter un nouveau chiffre.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez en faire usage, rendez-vous au 217.",
      "Si vous maîtrisez la Grande Discipline de la Magie des Anciens et si vous avez la volonté de l'utiliser, rendez- vous au 81.",
      "Sinon, rendez-vous au 74."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez en faire usage, rendez-vous au 217.",
        "targetId": "217"
      },
      {
        "text": "Sinon, rendez-vous au 74.",
        "targetId": "74"
      }
    ]
  },
  "140": {
    "id": "140",
    "text": [
      "Tout ayant été dit, le Roi Sarnac vous invite à le suivre dans la salle du trône où vous lui faites vos adieux, ainsi qu'au Seigneur Ardan et au Maître de Guilde Banedon. Après qu'ils vous ont tous, en retour, souhaité bonne fortune et qu'ils ont prié les dieux de veiller sur votre personne, vous quittez le palais et suivez le capitaine Prarg jusqu'au port.",
      "Il neige à gros flocons et rares sont les citadins de Vadera qui vous voient embarquer sur la Brise de Mai, la frégate qui doit vous convoyer sur l'île d'Azgad. Dans l'heure qui suit, le navire appareille, entamant une longue traversée vers les eaux froides de la mer de Tozaz.",
      "Pendant que vous cinglez vers le nord, le capitaine Prarg vous donne quelques précisions sur les agissements de l'ennemi, et notamment sur les raids qui ont ravagé de nombreuses petites colonies Drakkarims le long des côtes du golfe de Konkor et de la baie de Shakoz.",
      "Au douzième jour du voyage, alors que vous croisez en vue de la côte dans les parages de l'embouchure du fleuve Lenag, vous apercevez l'un de ces établissements... ou du moins ce qu'il en reste : un amas de décombres noircis surmontés de panaches de fumée grise qui vont se perdre dans un ciel bientôt noir et déjà agité par des vents de tempête.",
      "Pendant presque toute la traversée, des vols de mouettes et d'autres oiseaux de mer ont suivi le sillage du navire, attirés par les reliefs de nourriture et autres déchets régulièrement rejetés à la mer par les sabords du navire. Mais à l'aube du treizième jour, alors que la frégate entre dans les eaux du golfe de Konkor, vous constatez à votre réveil que les cris familiers des oiseaux marins ont cessé et que leurs élégantes silhouettes blanches ont toutes disparu du ciel, comme si la gent ailée avait pris la fuite devant quelque danger imminent.",
      "Quelques heures plus tard, dans la journée, un vent de tempête surgit soudain de l'est et s'abat sur vous, changeant les eaux grises du golfe en un chaos liquide. Pendant tout le jour et une interminable nuit, l'équipage de la Brise de Mai doit livrer un combat sans merci contre les éléments déchaînés pour conserver le navire à flot.",
      "Ce n'est qu'au matin du quatorzième jour que la tempête s'apaise enfin, et que la vigie peut reprendre son poste au sommet du grand mât.",
      "« Terre droit devant ! » hurle le matelot, à peine installé dans le nid de pie. Sur le pont, tous les regards se tournent vers le nord pour découvrir une bande rocheuse glacée au milieu du grisâtre horizon hivernal. Amplifiant votre puissance visuelle, vous parvenez à distinguer, dans la partie ouest de l'île, quelques bâtiments aux toits d'ardoise groupés au pied d'une tour de pierre fortifiée. - C'est Fort Azgad, annonce le capitaine Prarg d'une voix soulagée.",
      "Finalement, nous y sommes arrivés...",
      "Rendez-vous au 321."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 321.",
        "targetId": "321"
      }
    ]
  },
  "141": {
    "id": "141",
    "text": [
      "Vous bondissez hors de votre cachette et plongez dans l'escalier, au bas duquel vous vous retrouvez devant une imposante porte de pierre bardée de bronze. Du bout du pied, vous essayez prudemment de pousser le battant qui, à votre surprise, pivote sans bruit.",
      "Franchissant le seuil, vous pénétrez dans une pièce dont les parois grossièrement taillées sont couvertes de râteliers garnis de lances et d'épées de cristal. En dépit des milliers d'années qui se sont écoulées depuis qu'elles ont été façonnées par les armuriers de l'antique royaume d'Ixia, les lames de ces armes ont visiblement conservé le tranchant et l'éclat du neuf !",
      "Hélas, cette pièce ne comporte aucune issue en dehors de celle par laquelle vous êtes entré.",
      "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 286. Sinon, rendez- vous au 226."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 286.",
        "targetId": "286",
        "requiredDiscipline": "Intuition"
      }
    ]
  },
  "142": {
    "id": "142",
    "text": [
      "Au dernier instant, vous plongez sur le côté dans un réflexe foudroyant et la pointe du Heaume de Tagazin ne rencontre que le vide. Emporté par son élan, le Seigneur Démon vous dépasse dans un nuage de poussière mais, alors que vous bondissez sur vos pieds au terme d'un souple roulé-boulé, vous le voyez faire volte-face et revenir à la charge.",
      "SEIGNEUR DÉMON TAGAZIN HABILETÉ: 55 ENDURANCE:"
    ],
    "choices": []
  },
  "143": {
    "id": "143",
    "text": [
      "Au bout de quelques minutes d'une concentration si intense qu'elle vous fait perdre 4 points d'ENDURANCE, votre tentative est couronnée de succès. La porte se dématérialise. Elle devient progressivement transparente, puis disparaît comme si elle s'était dissoute dans l'air.",
      "Arborant un sourire modeste et néanmoins satisfait, vous franchissez le porche désormais grand ouvert et pénétrez dans la salle voûtée de forme oblongue. Au fond de cette pièce, entre deux piliers, sous un arc électrique d'où jaillit une lumière puissante, s'ouvre un sombre corridor.",
      "Passer entre les piliers pourrait vous être fatal. A l'évidence, le flux d'énergie qui les relie possède une puissance dévastatrice. Cependant, il existe peut-être un moyen d'éviter son contact mortel. Les piliers ne s'élèvent pas jusqu'au plafond, et vous estimez qu'une soixantaine de centimètres séparent leur sommet de la voûte.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez l'utiliser, rendez-vous au 136.",
      "Si vous voulez grimper le long d'un des piliers et vous glisser entre son sommet et le plafond, rendez-vous au 297.",
      "Si vous décidez de vous en remettre à votre bonne étoile et de foncer droit entre les deux piliers, rendez-vous au 211."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez l'utiliser, rendez-vous au 136.",
        "targetId": "136"
      },
      {
        "text": "Si vous voulez grimper le long d'un des piliers et vous glisser entre son sommet et le plafond, rendez-vous au 297.",
        "targetId": "297"
      },
      {
        "text": "Si vous décidez de vous en remettre à votre bonne étoile et de foncer droit entre les deux piliers, rendez-vous au 211.",
        "targetId": "211"
      }
    ]
  },
  "144": {
    "id": "144",
    "text": [
      "Vous gouvernez le navire avec prudence à travers un labyrinthe d'étroits chenaux qui offrent un passage incertain à travers le traître chaos du champ d'icebergs. Les mains moites, vous étreignez avec nervosité les poignées de la barre à roue, la manœuvrant à petits gestes précis en suivant les signaux du marin posté à la pointe de l'étrave.",
      "Régulièrement, votre vision est occultée par des bourrasques de neige poudreuse qui s'abattent des crêtes des falaises de glace et balaient le pont du navire. Soudain, un tourbillon plus violent que les autres vous aveugle complètement pendant quelques secondes.",
      "Alors que vous vous efforcez de chasser les flocons qui ferment vos paupières, le hurlement continu du vent se double soudain d'un affreux craquement venu de l'étrave. Vous venez de heurter un banc de glace immergé par le travers avant ! Sous la violence du choc, le navire gîte brutalement sur tribord et vous êtes projeté avec violence contre la cloison de la timonerie.",
      "Vous perdez 4 points d'ENDURANCE.",
      "Rendez-vous au 302."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 302.",
        "targetId": "302"
      }
    ],
    "damage": 4
  },
  "145": {
    "id": "145",
    "text": [
      "En dépit de leur difformité, ces abominations se déplacent avec une sidérante vélocité. Mugissant et hurlant comme une meute de démons, elles déferlent sur vous tous crocs et griffes dehors. HORDE DU CHAOS HABILETÉ : 52 ENDURANCE : 50 Ces êtres sont insensibles aux effets de toutes les formes d'attaque psychique, hormis à ceux de la Grande Discipline du Foudroiement Psychique et de la Déflagration Psychique.",
      "Vous pouvez rompre ce combat et prendre la fuite au terme de 6 Assauts en vous rendant au 235.",
      "Si vous êtes victorieux, rendez- vous au 190."
    ],
    "choices": [],
    "combat": {
      "name": "HORDE DU CHAOS",
      "combatSkill": 52,
      "endurance": 50,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "146": {
    "id": "146",
    "text": [
      "A l'instant où vous posez le pied sur le seuil de la grotte, un bruit vous fige le sang. Cette caverne est habitée et, à en croire le grognement que vous venez d'entendre, le propriétaire des lieux n'apprécie guère votre intrusion dans son repaire. Scrutant les ténèbres, vous voyez bientôt deux yeux jaunes, luisants, émerger des profondeurs de la grotte.",
      "Vous faites appel à votre pouvoir de vision infrarouge afin de discerner la silhouette de la bête, mais sans résultat : le corps de la créature n'émet pas de chaleur.",
      "« Quoi de plus naturel », pensez-vous en estimant que le monstre de ce lieu est déjà mort, comme tous ceux qui hantent ces terres maudites.",
      "Si vous voulez décamper de cette caverne tant que vous le pouvez encore, rendez-vous au 206.",
      "Si vous décidez d'empoigner votre arme pour livrer bataille, rendez-vous au 28."
    ],
    "choices": [
      {
        "text": "Si vous voulez décamper de cette caverne tant que vous le pouvez encore, rendez-vous au 206.",
        "targetId": "206"
      },
      {
        "text": "Si vous décidez d'empoigner votre arme pour livrer bataille, rendez-vous au 28.",
        "targetId": "28"
      }
    ]
  },
  "147": {
    "id": "147",
    "text": [
      "Guidé par votre instinct Kaï et par la position des étoiles, vous gouvernez cap au sud vers l'île d'Azgad. La mer de Tozaz se révèle inhabituellement calme et votre traversée solitaire se déroule sans encombre. Jusqu'à l'aube du deuxième jour où, dans la glauque grisaille de l'aurore hivernale, le champ d'icebergs de Tozaz apparaît.",
      "Il barre tout l'horizon sud de son immensité menaçante. A première vue, cette formidable barrière semble impénétrable mais, alors que le navire s'en rapproche, vous distinguez dans cette muraille deux brèches qui pourraient être les embouchures de passages.",
      "Si vous choisissez d'engager votre navire dans le passage sud-est, rendez-vous au 188.",
      "Si vous préférez pénétrer dans le passage sud-ouest, rendez-vous au 119."
    ],
    "choices": [
      {
        "text": "Si vous choisissez d'engager votre navire dans le passage sud-est, rendez-vous au 188.",
        "targetId": "188"
      },
      {
        "text": "Si vous préférez pénétrer dans le passage sud-ouest, rendez-vous au 119.",
        "targetId": "119"
      }
    ]
  },
  "148": {
    "id": "148",
    "text": [
      "La porte de votre cellule est recouverte d'une croûte de glace et son unique dispositif d'ouverture visible est un trou de serrure hexagonal. Vous vous accroupissez, le visage à la hauteur de l'orifice, et vous faites appel à votre maîtrise de la Grande Discipline du Nexus pour tenter de forcer la serrure.",
      "Utilisez la Table de Hasard. Ajoutez 1 au chiffre obtenu pour chaque rang de Grande Maîtrise Kaï que vous avez atteint au-delà de celui de Grand Maître Tutélaire.",
      "Si le résultat est inférieur ou égal à 4, rendez-vous au 342.",
      "S'il est supérieur ou égal à 5, rendez-vous au 258."
    ],
    "choices": [
      {
        "text": "rendez-vous au 342.",
        "targetId": "342"
      },
      {
        "text": "rendez-vous au 258.",
        "targetId": "258"
      }
    ]
  },
  "149": {
    "id": "149",
    "text": [
      "A mesure que vous les avez abattus, les corps des insectes se sont dissous pour retrouver leur forme fuligineuse. Désormais inoffensives, ces fumerolles flottent un moment à travers la chambre avant d'être absorbées par la roche poreuse qui entoure la Porte d'Ombre, à votre profond soulagement.",
      "Mais votre répit est de courte durée. A peine ces abominations ont-elles disparu qu'une nouvelle monstruosité surgit dans la salle, émergeant du sol de pierre !",
      "Si, au cours d'une précédente aventure du Loup Solitaire, vous êtes déjà allé sur l'île des Spectres, rendez-vous au 311.",
      "Sinon, rendez-vous au 80."
    ],
    "choices": [
      {
        "text": "rendez-vous au 311.",
        "targetId": "311"
      },
      {
        "text": "Sinon, rendez-vous au 80.",
        "targetId": "80"
      }
    ]
  },
  "150": {
    "id": "150",
    "text": [
      "Quelques centaines de mètres derrière la crête de la colline, vous voyez Tagazin avancer sur un sentier menant à un petit mamelon dans le flanc duquel se dresse une arche de pierre entourant un vortex tourbillonnant... Une Porte d'Ombre ! Tagazin est escorté par une phalange de créatures ailées aux silhouettes de dragons dont la peau cornée scintille comme de l'or dans le jour blafard.",
      "A en juger par la lenteur et la raideur des mouvements du chacal géant, son passage à travers les limbes l'a grandement affaibli.",
      "Si vous êtes déjà allé dans l'Univers des Ténèbres au cours d'une précédente aventure du Loup Solitaire, rendez-vous au 205.",
      "Sinon, rendez-vous au 225."
    ],
    "choices": [
      {
        "text": "Si vous êtes déjà allé dans l'Univers des Ténèbres au cours d'une précédente aventure du Loup Solitaire, rendez-vous au 205.",
        "targetId": "205"
      },
      {
        "text": "Sinon, rendez-vous au 225.",
        "targetId": "225"
      }
    ]
  },
  "151": {
    "id": "151",
    "text": [
      "Voyant que vous vous apprêtez à détruire la passerelle, la créature s'immobilise avant de battre précipitamment en retraite. Elle regagne le quai quand vous abattez votre arme de toutes vos forces sur la planche d'embarquement, la brisant net en deux tronçons qui vont s'abîmer dans l'eau glacée du port.",
      "L'ennemi ne peut plus monter à bord, mais tout danger n'est pas écarté. L'être abominable lève de nouveau son bâton de glace et le pointe sur vous. Dans un éclair aveuglant, une boule de feu jaillit de l'extrémité du bâton et fuse droit vers votre tête.",
      "Mais vous avez déjà plongé derrière un coffre à outils, esquivant de quelques centimètres salvateurs la sphère ardente qui va percuter le pont dans une violente explosion. Hurlant de rage, le monstre fait à nouveau feu mais, cette fois, c'est sur la ligne de flottaison du navire qu'il braque son arme.",
      "Une terrible onde de choc secoue le pont du navire, et vous voyez des langues de flammes jaillir tout autour de la coque. Par quelque sortilège, elles grossissent à une vitesse effroyable et, en quelques secondes, vous êtes entouré d'un brasier rugissant.",
      "Si vous voulez vous échapper du navire en flammes en sautant dans l'eau du port, rendez-vous au 42.",
      "Si vous préférez tenter d'atteindre le quai en vous balançant le long d'un cordage, rendez-vous au 201."
    ],
    "choices": [
      {
        "text": "Si vous voulez vous échapper du navire en flammes en sautant dans l'eau du port, rendez-vous au 42.",
        "targetId": "42"
      },
      {
        "text": "Si vous préférez tenter d'atteindre le quai en vous balançant le long d'un cordage, rendez-vous au 201.",
        "targetId": "201"
      }
    ]
  },
  "152": {
    "id": "152",
    "text": [
      "Vous frappez à coups redoublés et vous envoyez le dernier squelette rejoindre en pièces détachées les macabres restes de ses compagnons entassés à vos pieds. Puis, après avoir essuyé la sueur qui couvre votre front malgré le froid glacial, vous jetez un coup d'œil au passage secret par lequel vos ennemis sont entrés et vous découvrez qu'il débouche dans un étroit réduit.",
      "Sur le sol dallé de cristal, vous trouvez : un petit sac, une boule de pierre, une longue-vue, une clef de fer et un rouleau de corde huilée. (Si vous désirez emporter un ou plusieurs de ces objets, inscrivez-les sur votre Feuille d'Aventure dans la liste du contenu de votre Sac à Dos).",
      "Peu après, vous quittez les lieux pour dévaler l'escalier jusqu'au porche d'entrée. Il n'y a plus trace de patrouille Drakkarim dans les environs. Vous pouvez donc vous engouffrer sans crainte sous la vaste arche d'entrée et pénétrer dans les murs de Xaagon.",
      "Vous vous faufilez avec prudence entre les majestueux vestiges de cette antique cité qu'une fière et puissante race d'hommes gouvernait au temps des Anciens Royaumes. Alors que vous longez les ruines d'un mausolée, vous êtes contraint de vous dissimuler en hâte.",
      "Accroupi dans les décombres, vous voyez un détachement de guerriers Ixians longer d'un pas mécanique une avenue verglacée en direction d'une place ornée d'une gigantesque fontaine gelée. Au-delà des panaches d'eau solidifiés, vous apercevez une large rampe qui monte jusqu'à une grande arche dressée au pied de la Tour de Cristal.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse et si vous avez atteint le rang de Grand Maître Mentor, ou un rang supérieur, rendez-vous au 9.",
      "Si vous ne maîtrisez pas cette Grande Discipline ou si vous n'avez pas encore atteint ce rang, rendez-vous au 122."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse et si vous avez atteint le rang de Grand Maître Mentor, ou un rang supérieur, rendez-vous au 9.",
        "targetId": "9",
        "requiredDiscipline": "Chasse"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline ou si vous n'avez pas encore atteint ce rang, rendez-vous au 122.",
        "targetId": "122"
      }
    ]
  },
  "153": {
    "id": "153",
    "text": [
      "Après avoir gravi les marches sans bruit, vous glissez un coup d'œil par-dessus le rebord de l'écoutille... pour découvrir une scène qui vous fige d'horreur ! Les morts vivants ont massacré tous les marins Lenciens et entassé les corps sanglants au pied du grand mât.",
      "L'un d'eux, drapé dans une cape loqueteuse brodée d'étranges symboles, les bras en croix, psalmodie une invocation. Soudain, les corps des malheureux sont enveloppés d'un halo crépitant d'étincelles d'énergie ténébreuse, et vous pouvez sentir presque physiquement la puissance diabolique du maléfice qui est en œuvre.",
      "Lorsque l'affreuse incantation s'achève enfin, vous voyez avec horreur vos compagnons morts se relever pour prendre place dans les rangs des Drakkarims morts vivants. Révolté par cette abomination, vous jurez de venger l'âme de vos marins. Sous le coup d'une colère noire, vous dégainez votre arme pour vous lancer à l'assaut de la horde cadavérique.",
      "Mais, avant d'avoir pu passer à l'action, vous entendez un sourd grondement. Comme vous l'aviez deviné, l'immense vaisseau accoste. De larges panneaux s'ouvrent maintenant dans les parois de la cale de l'énorme bâtiment, illuminant le pont du navire captif de rayons de lumière blanche.",
      "Émergeant de ces passages, des dizaines de Drakkarims morts vivants envahissent votre bateau comme une horde de goules affamées. Devant un tel nombre d'ennemis, vous êtes contraint de renoncer à votre projet de vengeance immédiate. Mais tout n'est pas perdu !",
      "Dans la confusion provoquée par l'irruption de cette multitude, vous parvenez à vous faufiler hors du navire pour vous éclipser par l'un des panneaux.",
      "Rendez-vous au 320."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 320.",
        "targetId": "320"
      }
    ]
  },
  "154": {
    "id": "154",
    "text": [
      "Vous vous élevez à nouveau et, revenant à la hauteur du rebord de la fosse, vous puisez dans toutes vos réserves d'énergie et de détermination pour trouver la force de combattre en vous maintenant en lévitation. — Pour le Kaï et le Sommerlund ! rugissez-vous en plongeant votre arme dans la masse grouillante des créatures du Chaos rassemblées au bord du puits.",
      "HORDE DU CHAOS HABILETÉ: 37 ENDURANCE: 45 Ces êtres sont insensibles aux effets de toutes les formes d'attaque psychique, sauf ceux de la Grande Discipline du Foudroiement Psychique et de la Déflagration Psychique.",
      "Si vous sortez vainqueur de ce combat, rendez-vous au 318."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 318.",
        "targetId": "318"
      }
    ],
    "combat": {
      "name": "HORDE DU CHAOS",
      "combatSkill": 37,
      "endurance": 45,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "155": {
    "id": "155",
    "text": [
      "Faisant appel à votre Grande Maîtrise Kaï, vous vous plongez dans un état de transe nécessaire à la mise en œuvre d'un exorcisme. Vous prononcez silencieusement la formule de l'invocation et vous sentez vos pouvoirs bénéfiques s'écouler en un chaud fourmillement le long de vos doigts tendus pour former une impalpable sphère dorée.",
      "Après quelques secondes, elle jaillit hors du navire tel un boulet de canon incandescent et s'abat sur l'entité maléfique. Vous sentez la chose résister pendant un instant, mais elle ne tarde pas à succomber à votre exorcisme et disparaît. Vous pouvez récupérer tous les points d'ENDURANCE que vous avez perdus depuis le début de votre aventure.",
      "Rendez-vous au 345."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 345.",
        "targetId": "345"
      }
    ]
  },
  "156": {
    "id": "156",
    "text": [
      "De votre poste d'observation, toujours caché sous la bâche graisseuse, vous voyez un mort vivant Drakkarim s'approcher, s'emparer de la longe de la bête velue, et conduire le chariot vers un tas de caisses métalliques. Vous comprenez sans peine qu'il a l'intention de charger ces caisses.",
      "Aussi, craignant d'être découvert, vous sautez du fourgon en marche et vous vous dissimulez derrière une pile de barils vides. De votre cachette, vous apercevez deux issues par lesquelles vous pourriez quitter cette caverne trop fréquentée : un escalier non surveillé qui s'enfonce dans le mur nord et un passage voûté ouvert dans la paroi est.",
      "Si vous décidez de sortir de la caverne par l'escalier, rendez-vous au 141.",
      "Si vous préférez emprunter le passage voûté, rendez-vous au 7."
    ],
    "choices": [
      {
        "text": "Si vous décidez de sortir de la caverne par l'escalier, rendez-vous au 141.",
        "targetId": "141"
      },
      {
        "text": "Si vous préférez emprunter le passage voûté, rendez-vous au 7.",
        "targetId": "7"
      }
    ]
  },
  "157": {
    "id": "157",
    "text": [
      "Grâce à votre instinct Kaï, vous sentez bientôt avec soulagement que la créature ne vous a pas repéré. Quelques minutes plus tard, vous atteignez le rivage au pied d'un étroit chemin empierré qui monte jusqu'à une route d'où un embranchement part en direction du tunnel que vous souhaitez atteindre.",
      "Ne gardant que le sommet de la tête hors de l'eau, vous vous cramponnez aux pierres du chemin, attendant patiemment qu'une patrouille de guerriers morts vivants ait fini de passer.",
      "Rendez-vous au 169."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 169.",
        "targetId": "169"
      }
    ]
  },
  "158": {
    "id": "158",
    "text": [
      "Vous faites le tour de la salle, redoutant à chaque instant que le cercle des humanoïdes, visiblement gelés, ne se referme sur vous. Mais, fort heureusement, aucun d'eux ne manifeste la moindre velléité de mouvement. Au moment où vous passez devant le rideau de lumière, une vague de nausée vous soulève l'estomac et vous fait perdre 2 points d'ENDURANCE.",
      "Néanmoins, votre recherche obstinée finit par payer quand vous découvrez un panneau en partie dissimulé dans le mur. Lorsque vous vous en approchez, il coulisse sans bruit, révélant une volée de marches qui s'élèvent jusqu'à une chambre vide. Vous entrez dans cette pièce et vous trouvez dans le mur nord une porte taillée dans un cristal vert opaque.",
      "En l'examinant de plus près, vous découvrez un étrange palastre disposé au milieu.",
      "Si vous voulez examiner cette serrure, rendez-vous au 322.",
      "Si vous préférez ne pas gaspiller de temps avec la porte de cristal et revenir sur vos pas, rendez-vous au 299."
    ],
    "choices": [
      {
        "text": "Si vous voulez examiner cette serrure, rendez-vous au 322.",
        "targetId": "322"
      },
      {
        "text": "Si vous préférez ne pas gaspiller de temps avec la porte de cristal et revenir sur vos pas, rendez-vous au 299.",
        "targetId": "299"
      }
    ]
  },
  "159": {
    "id": "159",
    "text": [
      "Le Ziog s'effondre sur le pont et son corps se ratatine avant de s'effriter comme un vieux parchemin. Alors que vous vous écartez de sa carcasse fétide, vous remarquez soudain l'éclat d'un métal précieux au milieu des lambeaux de fourrure.",
      "Si vous voulez examiner de plus près les restes du monstre, rendez-vous au 88.",
      "Sinon, rendez-vous au 329."
    ],
    "choices": [
      {
        "text": "Si vous voulez examiner de plus près les restes du monstre, rendez-vous au 88.",
        "targetId": "88"
      },
      {
        "text": "Sinon, rendez-vous au 329.",
        "targetId": "329"
      }
    ]
  },
  "160": {
    "id": "160",
    "text": [
      "Dès que le Glaive de Sommer jaillit de son fourreau, son éclat doré inonde la chambre, refoulant l'aura maléfique qui l'imprègne jusque dans ses moindres recoins. A la vue de la lame divine, les insectes reculent avec effroi, repoussés par le pouvoir bénéfique qui les vide de leur substance.",
      "Progressivement, leurs corps se dissolvent pour reprendre leur aspect fuligineux. Soulagé, vous voyez les fumerolles faire une fois le tour de la chambre avant d'être absorbées par la roche poreuse qui entoure la Porte d'Ombre. Mais votre répit est de courte durée.",
      "A peine ces abominations ont-elles disparu qu'une nouvelle monstruosité surgit dans la salle, émergeant du sol de pierre !",
      "Si, au cours d'une précédente aventure du Loup Solitaire, vous êtes déjà allé sur l'île des Spectres, rendez-vous au 311.",
      "Sinon, rendez-vous au 80."
    ],
    "choices": [
      {
        "text": "rendez-vous au 311.",
        "targetId": "311"
      },
      {
        "text": "Sinon, rendez-vous au 80.",
        "targetId": "80"
      }
    ]
  },
  "161": {
    "id": "161",
    "text": [
      "Vous enjambez le bastingage de la plate-forme d'observation et, glissant le long de la coque du sous-marin, vous entrez sans bruit dans l'eau glacée du lac, remerciant intérieurement votre Amulette de Platine de vous protéger si sûrement des températures extrêmes.",
      "Pour ne pas courir le risque d'être aperçu par une patrouille de morts vivants, vous avalez une longue goulée d'air et, plongeant sous la surface, vous commencez à nager vers le lointain rivage.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous avez atteint le rang de Grand Maître Eminent, ou un rang supérieur, rendez-vous au 133.",
      "Si ce n'est pas le cas, rendez-vous au 309."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous avez atteint le rang de Grand Maître Eminent, ou un rang supérieur, rendez-vous au 133.",
        "targetId": "133"
      },
      {
        "text": "rendez-vous au 309.",
        "targetId": "309"
      }
    ]
  },
  "162": {
    "id": "162",
    "text": [
      "Vous parvenez sans encombre aux rives du lac souterrain. Une fois à bord d'un brise-glace amarré le long de la jetée de pierre, une sourde inquiétude vous envahit. Après la chute du Seigneur de la Mort et la disparition de son pouvoir nécromancien, les diaboliques machineries des navires de la flotte Ixiane ne risquent-elles pas d'être aussi inertes que tous les guerriers cadavériques qui se dressent tout autour du lac, figés comme des statues de glace ?",
      "Mais, Kaï et Ishir soient loués, vos craintes se révèlent sans fondement. En effet, vous ne tardez pas à découvrir que ces navires se meuvent grâce à la Magie de l'Ancien Royaume, un art mystérieux bien antérieur à l'infâme sorcellerie d'Ixiataaga, et assurément moins maléfique.",
      "Après vous être assuré que le vaisseau que vous avez choisi est bien en état de prendre la mer, vous larguez les amarres et dirigez le brise-glace vers les eaux tumultueuses de la mer de Tozaz. Encore grisé par l'ivresse de la victoire, vous cinglez bientôt vers le large.",
      "Mais, tout au fond de vous-même, la voix ténue de votre petit doigt Kaï vous susurre que vous n'êtes peut-être pas tout à fait au bout de vos peines...",
      "Rendez-vous au 147."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 147.",
        "targetId": "147"
      }
    ]
  },
  "163": {
    "id": "163",
    "text": [
      "Vous battez en retraite devant la horde des assaillants et vous vous engouffrez dans un escalier afin de vous réfugier dans la cale du navire. Au-dessus de vous, sur le pont, retentissent les cris guerriers des marins Len-ciens engagés dans un féroce corps à corps avec les Drakkarims morts vivants.",
      "Vous fouillez la pénombre de la cale d'un regard de bête traquée, à la recherche d'une cachette, quand le corps d'un Lencien, la garde d'une épée rouillée émergeant de sa poitrine, dévale les marches pour s'écraser à vos pieds. Ses assassins le suivent de près.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 208.",
      "Sinon, rendez-vous au 26."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 208.",
        "targetId": "208"
      },
      {
        "text": "Sinon, rendez-vous au 26.",
        "targetId": "26"
      }
    ]
  },
  "164": {
    "id": "164",
    "text": [
      "Dès que vous la tirez du fourreau, l'Epée du Soleil rougeoie et vous la sentez devenir chaude dans votre main. Sa lame se dirige d'elle-même sur le heaume à pointe, et vous sentez aussitôt qu'elle veut vous inciter à détruire cet objet maudit. Obéissant à sa volonté silencieuse, vous élevez le glaive doré et l'abattez de toutes vos forces sur le heaume qui se brise en deux dans une aveuglante gerbe d'étincelles.",
      "Lorsqu'elles retombent, il ne reste plus la moindre trace du maléfique couvre-chef, désintégré jusqu'au dernier atome. Tournant les talons, vous vous dirigez d'un pas résolu vers la Porte d'Ombre. Puis, sans hésiter, vous plongez dans son noir tourbillon en priant d'arriver sur le Magnamund à temps pour déjouer le plan diabolique du Seigneur de la Mort.",
      "Rendez-vous au 200."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 200.",
        "targetId": "200"
      }
    ]
  },
  "165": {
    "id": "165",
    "text": [
      "Les épaules voûtées, le dos courbé, vous vous frayez un chemin dans le blizzard, entre les congères qui s'amoncellent autour de la muraille de Xaagon. En franchissant la brèche du mur sud, vous apercevez fugitivement, entre deux bourrasques, les silhouettes chaotiques de bâtiments en ruine.",
      "Vous percevez également un son, un sourd bourdonnement dont l'écho se mêle au hurlement du vent. Vous vous arrêtez un instant, tendant l'oreille, pour découvrir aussitôt que ce bruit étrange provient de la tour de cristal en forme de spirale. Vous avancez avec prudence entre les majestueux vestiges de cette antique cité qu'une fière et puissante race d'hommes gouvernait au temps des Anciens Royaumes, jusqu'au moment où vous êtes contraint de vous dissimuler en hâte.",
      "Accroupi dans les décombres, vous voyez le détachement de guerriers squelettiques longer d'un pas mécanique une avenue verglacée en direction d'une place ornée d'une gigantesque fontaine gelée. Au-delà des panaches d'eau solidifiés, vous apercevez une large rampe qui monte jusqu'à une grande arche dressée au pied de la tour de cristal.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse et si vous avez atteint le rang de Grand Maître Mentor ou un rang supérieur, rendez-vous au 9.",
      "Si vous ne maîtrisez pas cette Grande Discipline ou si vous n'avez pas encore atteint ce rang, rendez-vous au 122."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse et si vous avez atteint le rang de Grand Maître Mentor ou un rang supérieur, rendez-vous au 9.",
        "targetId": "9",
        "requiredDiscipline": "Chasse"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline ou si vous n'avez pas encore atteint ce rang, rendez-vous au 122.",
        "targetId": "122"
      }
    ]
  },
  "166": {
    "id": "166",
    "text": [
      "Banedon s'approche d'un rayonnage et extirpe un petit coffret en bois d'un amas de cartes et de rouleaux de parchemin. Ce faisant, votre ami remarque l'Amulette de Platine que vous portez sur la poitrine, suspendue à un cordon et, interrompant son mouvement, il l'examine d'un œil intrigué. - D'où tiens-tu ce talisman ? demande-t-il, les yeux toujours fixés sur l'amulette. - C'est Gwynian, le Sage de Varetta, qui m'en a fait don.",
      "Et je peux t'assurer que ses pouvoirs ont su me protéger des périls du Gouffre de Maaken. Sais-tu qui est ce sage vieillard, mon ami ? - Oh oui, répond Banedon, l'air songeur. Je connais bien Gwynian. S'il t'a donné cette amulette, tu n'auras pas besoin de la protection spéciale à laquelle je songeais.",
      "Sur ce, il prend le petit coffret en bois et vous le tend. En l'ouvrant, vous découvrez qu'il contient une Amulette de Platine presque semblable à celle que vous portez. - Je vois ce que tu veux dire, dites-vous en refermant l'écrin avant de le rendre à Banedon.",
      "Rendez-vous au 57."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 57.",
        "targetId": "57"
      }
    ]
  },
  "167": {
    "id": "167",
    "text": [
      "A l'instant où vous tirez le Glaive de Sommer de son fourreau, sa lame forgée par les dieux s'embrase d'un flamboiement doré. Aveuglés par la puissance de cet éclat bénéfique, vos adversaires se figent en poussant des glapissements de terreur. Profitant de leur désarroi, vous vous jetez sur eux et frappez le premier ! 3 KHERBALAS HABILETÉ : 52 ENDURANCE : 54 Ces créatures mortes vivantes sont insensibles aux effets de la Grande Discipline du Foudroiement Psychique et de la Déflagration Psychique.",
      "Ne tenez pas compte des points d'ENDURANCE que vous pourriez perdre au cours des deux premiers Assauts de ce combat.",
      "Si vous êtes victorieux, rendez- vous au 173."
    ],
    "choices": [],
    "combat": {
      "name": "KHERBALAS",
      "combatSkill": 52,
      "endurance": 54,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "168": {
    "id": "168",
    "text": [
      "Votre combat sans merci est brutalement interrompu par une formidable trombe qui jaillit du centre de la salle pour tournoyer entre les murs, en mugissant de plus en plus fort. De même que votre ennemi, vous êtes jeté au sol par la puissance de ce vent surnaturel.",
      "Alors, dans un crépitement d'énergie, une sombre silhouette prend forme dans l'œil du cyclone hurlant. La créature, dont les contours se précisent rapidement, rayonne d'une intense aura maléfique. Elle porte une longue robe noire. Son crâne évoque celui du bouc.",
      "Les orbites vides de ses yeux luisent d'un feu écarlate. Mais ce n'est que lorsque l'innommable puanteur de mort et de pourriture qui émane de cette chose envahit vos sinus que vous sentez les crocs de la peur se refermer sur vos entrailles. C'est le Seigneur de la Mort d'Ixia qui se tient en personne devant vous !",
      "Geignant comme un chiot effarouché, Tagazin se glisse furtivement vers Ixiataaga, rasant le sol de la truffe en signe d'entière soumission. Mais il se fige sur place en le voyant tirer le Bâton de Mort des plis de sa robe pour le brandir. Le chacal tremble de tous ses membres, redoutant visiblement de subir le courroux de son terrible maître qui, d'un geste foudroyant, balaie les airs de son bâton maudit.",
      "Impuissant, vous êtes soulevé du sol en même temps que Tagazin, puis projeté dans la bouche obscure de la Porte d'Ombre !",
      "Rendez-vous au 303."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 303.",
        "targetId": "303"
      }
    ]
  },
  "169": {
    "id": "169",
    "text": [
      "Dès que la patrouille s'est assez éloignée, vous vous hissez hors de l'eau pour aller vous cacher derrière un amas de rochers qui bordent le rivage. Profitant de cet abri provisoire pour souffler un peu, vous constatez, dépité, que deux objets se sont échappés de votre Sac à Dos au cours de votre traversée sous-marine.",
      "Rayez les objets inscrits en quatrième et sixième position dans la liste du contenu de votre Sac à Dos avant de vous rendre au 304."
    ],
    "choices": []
  },
  "170": {
    "id": "170",
    "text": [
      "Vous pivotez sur le côté pour tenter d'esquiver le projectile, mais la boule de feu vire en pleine course tel un serpent crépitant et vous frappe l'épaule gauche. Sous la violence du choc, vous êtes projeté en arrière sur le pont. Bien qu'à demi assommé et fort meurtri, vous êtes pratiquement indemne : votre vive réaction et votre Grande Maîtrise du Nexus vous ont préservé des effets les plus destructeurs de la sphère mortelle.",
      "Secouant la tête pour reprendre vos esprits, vous commencez à vous relever... pour vous retrouver à genoux face aux pieds griffus du monstre qui approche lentement et qui a presque atteint l'extrémité de la planche d'embarquement !",
      "Si vous maîtrisez la Grande Discipline de la Magie des Anciens et si vous désirez y faire appel, rendez- vous au 92.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez l'utiliser, rendez-vous au 121.",
      "Si vous ne maîtrisez pas ces Grandes Disciplines, ou si vous ne voulez pas en faire usage, rendez-vous au 135."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez l'utiliser, rendez-vous au 121.",
        "targetId": "121"
      },
      {
        "text": "Si vous ne maîtrisez pas ces Grandes Disciplines, ou si vous ne voulez pas en faire usage, rendez-vous au 135.",
        "targetId": "135"
      }
    ]
  },
  "171": {
    "id": "171",
    "text": [
      "Combien de temps êtes-vous resté évanoui ? Quelques minutes ? Une heure ? Un jour ? Davantage ?... Comment pourriez-vous le savoir ?... Quand vous reprenez vos esprits, vous vous apercevez que vous êtes toujours en mer, bien que vous ne soyez plus dans la cale du navire Ixian.",
      "En fait, vous êtes maintenant allongé sur le ventre, à même le sol d'une étroite cellule humide. D'un geste instinctif, vous portez la main à votre arme, pour découvrir qu'elle a disparu. Une douleur lancinante vous vrille le crâne, tout votre corps est cruellement endolori et votre moral en berne fléchit encore un peu plus lorsque vous comprenez que votre Sac à Dos, vos armes et tous vos Objets Spéciaux, à l'exception de votre Amulette de Platine, se sont également envolés.",
      "A en juger par les bruits lointains qui vous parviennent, le mystérieux vaisseau semble ralentir, comme s'il s'apprêtait à accoster. Vous devez vous évader et remettre la main sur votre équipement. Il y va de votre vie !",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez l'utiliser, rendez-vous au 112.",
      "Si vous maîtrisez la Grande Discipline de la Magie des Anciens et si vous voulez y faire appel, rendez-vous au 46.",
      "Si vous ne maîtrisez aucune de ces Grandes Disciplines, ou si vous ne désirez pas en faire usage, rendez-vous au 148."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez l'utiliser, rendez-vous au 112.",
        "targetId": "112"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline de la Magie des Anciens et si vous voulez y faire appel, rendez-vous au 46.",
        "targetId": "46"
      },
      {
        "text": "Si vous ne maîtrisez aucune de ces Grandes Disciplines, ou si vous ne désirez pas en faire usage, rendez-vous au 148.",
        "targetId": "148"
      }
    ]
  },
  "172": {
    "id": "172",
    "text": [
      "En dépit de toutes les difficultés, vous manœuvrez le navire avec l'adresse d'un vieux loup de mer. Moins de trois heures après être entré dans le champ de glace, votre vaisseau retrouve les eaux libres sans avoir subi le moindre dommage et il ne vous reste plus qu'à mettre le cap sur Fort Azgad.",
      "Rendez-vous au 350."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 350.",
        "targetId": "350"
      }
    ]
  },
  "173": {
    "id": "173",
    "text": [
      "Tombant l'une après l'autre sous les coups implacables de votre lame d'or, les créatures semblent imploser. Leurs corps se tordent et se ratatinent pour ne laisser finalement que trois petites mares puantes et bouillonnantes de venin noir, entourées de lambeaux de tissu moisi mêlés d'éclats de glace.",
      "Remettant le Glaive de Sommer au fourreau, vous vous détournez de ces restes putrides pour sortir des ruines. Soudain, un hurlement inhumain vous glace le sang. Levant les yeux vers le sommet de la Tour de Cristal, vous voyez, dans la lueur des éclairs, se découper la terrifiante silhouette du Seigneur de la Mort.",
      "Dressé derrière le parapet d'une haute fenêtre, Ixiataaga brandit son bâton maléfique. Vous comprenez alors, hélas trop tard, qu'en dévoilant le pouvoir du Glaive de Sommer, vous lui avez révélé votre présence. Un aveuglant éclair blanc jaillit de la pointe du Bâton de Mort et, dans la seconde qui suit, une douleur atroce déchire chaque atome de votre corps.",
      "Puis une ultime explosion engloutit tous vos sens, vous projetant dans les ténèbres de la mort. Votre vie et votre quête s'achèvent ici."
    ],
    "choices": []
  },
  "174": {
    "id": "174",
    "text": [
      "La serrure se désintègre dans une grêle d'éclats de glace et la porte s'ouvre violemment sur une coursive vide. Avant de quitter la cellule, vous faites appel à votre Grande Maîtrise du Nexus pour tenter de localiser vos armes et votre équipement. Sans pouvoir détecter leur position avec exactitude, vous sentez que votre équipement se trouve dans un endroit très éloigné.",
      "Vous laissez votre instinct Kaï vous guider en vous engageant dans la coursive par la droite. Le sinueux corridor verglacé vous entraîne dans les entrailles de l'immense vaisseau. Vous traversez un labyrinthe de cales vides aux parois renforcées de poutrelles de cristal et de chambres aux plafonds surbaissés qui, en dépit de l'atmosphère glaciale, sont imprégnées d'une odeur de mort et de pourriture.",
      "Vos recherches aboutissent devant une imposante porte grise gardée par deux morts vivants Drakkarims armés de lances. Le bruit et les mouvements du navire ont cessé, et tous vos sens vous indiquent que la traversée a pris fin. Tapi derrière une cloison de cristal courbe, vous surveillez les gardes en réfléchissant au meilleur moyen de vous en débarrasser.",
      "Si vous décidez de les attaquer à mains nues, rendez-vous au 243.",
      "Si vous préférez les éliminer en faisant appel à vos pouvoirs psychiques, rendez-vous au 336."
    ],
    "choices": [
      {
        "text": "Si vous décidez de les attaquer à mains nues, rendez-vous au 243.",
        "targetId": "243"
      },
      {
        "text": "Si vous préférez les éliminer en faisant appel à vos pouvoirs psychiques, rendez-vous au 336.",
        "targetId": "336"
      }
    ]
  },
  "175": {
    "id": "175",
    "text": [
      "Vous déployez votre maîtrise du Nexus et vous concentrez votre pouvoir Magnakaï sur le trou de la serrure, espérant la voir se débloquer sans délai.",
      "Utilisez la Table de Hasard. Ajoutez 1 au chiffre obtenu pour chaque rang de Grande Maîtrise Kaï que vous avez atteint au-delà de celui de Grand Maître Tutélaire.",
      "Si le résultat est inférieur ou égal à 7, rendez-vous au 328.",
      "S'il est supérieur ou égal à 8, rendez-vous au 203."
    ],
    "choices": [
      {
        "text": "rendez-vous au 328.",
        "targetId": "328"
      },
      {
        "text": "rendez-vous au 203.",
        "targetId": "203"
      }
    ]
  },
  "176": {
    "id": "176",
    "text": [
      "Vous murmurez la formule du sortilège de Lévitation. Instantanément, votre corps se soulève, émerge de la fange et remonte en flottant dans les airs. Mais les créatures du Chaos, toujours entassées sur le toit du bâtiment, vous attendent de pied ferme.",
      "Vous dégainez votre arme, prêt à vous tailler un chemin sanglant dans la masse de ces horreurs repoussantes. Hélas, à l'instant même où vous frappez votre premier adversaire, votre équilibre se rompt et vous commencez à redescendre vers le fond du puits, manquant visiblement d'énergie pour vous maintenir en l'air et combattre en même temps.",
      "Utilisez la Table de Hasard. Si votre total d'ENDURANCE actuel est inférieur ou égal à 15, retranchez 2 du chiffre obtenu. Si votre total d'ENDURANCE est supérieur ou égal à 36, ajoutez 1 au chiffre obtenu.",
      "Si le résultat est inférieur ou égal à 5, rendez-vous au 111.",
      "S'il est supérieur ou égal à 6, rendez-vous au 154."
    ],
    "choices": [
      {
        "text": "rendez-vous au 111.",
        "targetId": "111"
      },
      {
        "text": "rendez-vous au 154.",
        "targetId": "154"
      }
    ]
  },
  "177": {
    "id": "177",
    "text": [
      "- La voilà, la solution du problème ! poursuivez-vous en pointant le doigt sur le navire des envahisseurs Ixians. - M'enfin... mais... bredouille Prarg, quelque peu abasourdi. - C'est un bâtiment un peu étrange, je vous le concède, poursuivez-vous. Mais il me semble bien construit pour affronter les glaces.",
      "Et puis, l'ennemi s'en est déjà assez servi, et je crois qu'il est temps pour nous d'en faire un bien meilleur usage, n'est- ce pas ? Prarg vous répond par un faible sourire avant de vous suivre, non sans quelque hésitation, lorsque vous sautez à bord du navire Ixian. - Avant tout, assurons-nous que le bâtiment est bien vide, dites- vous en dégainant votre arme. - Entendu, Grand Maître, répond le capitaine.",
      "Quelle partie préférez-vous commencer à fouiller, la proue ou la poupe ?",
      "Si vous voulez inspecter l'arrière du navire, rendez-vous au 240.",
      "Si vous préférez examiner d'abord l'avant, rendez-vous au 73."
    ],
    "choices": [
      {
        "text": "Si vous voulez inspecter l'arrière du navire, rendez-vous au 240.",
        "targetId": "240"
      },
      {
        "text": "Si vous préférez examiner d'abord l'avant, rendez-vous au 73.",
        "targetId": "73"
      }
    ]
  },
  "178": {
    "id": "178",
    "text": [
      "Vous amorcez un plongeon pour tenter d'esquiver le projectile mortel, mais vous êtes trop lent. Le boulet d'énergie vous frappe en pleine poitrine. Alors une formidable explosion engloutit tous vos sens, soufflant jusqu'à votre ultime étincelle de vie...",
      "Votre aventure trouve ici un sort funeste."
    ],
    "choices": []
  },
  "179": {
    "id": "179",
    "text": [
      "Après avoir creusé pendant plus d'une heure à mains nues l'épais linceul de neige et de glace qui vous recouvre, vous atteignez enfin la surface. En émergeant à l'air libre, vous constatez, consterné, que le blizzard fait toujours rage et que la plus grande partie du défilé est maintenant comblée par l'avalanche.",
      "Il ne reste plus aucune trace du cercle de rochers où vous espériez vous protéger de la cruauté des éléments. La tempête ne montre aucun signe d'apaisement. Vous creusez un trou dans lequel vous vous lovez en tournant le dos au vent furieux. Pendant que vous attendez dans cet abri de fortune que la tourmente se calme, vous devez prendre un Repas ou perdre 3 points d'ENDURANCE.",
      "Rendez-vous ensuite au 338."
    ],
    "choices": []
  },
  "180": {
    "id": "180",
    "text": [
      "En haut de l'escalier, vous trouvez une chambre dont les murs et le sol sont couverts de glace. Au fond de la pièce, vous voyez, à côté d'une porte close, un socle sur lequel est posée une Clef d'Onyx recouverte d'un dôme de verre translucide. Vos sens Kaï réagissent dès que vous vous en approchez, vous prévenant que le dôme de verre est protégé par un sortilège.",
      "Si vous possédez déjà une Clef d'Onyx, rendez-vous au 307.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï ou du Nexus, et si vous voulez faire appel à l'une d'elles, rendez-vous au 86.",
      "Dans tous les autres cas, rendez-vous au 268."
    ],
    "choices": [
      {
        "text": "Si vous possédez déjà une Clef d'Onyx, rendez-vous au 307.",
        "targetId": "307"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï ou du Nexus, et si vous voulez faire appel à l'une d'elles, rendez-vous au 86.",
        "targetId": "86"
      },
      {
        "text": "rendez-vous au 268.",
        "targetId": "268"
      }
    ]
  },
  "181": {
    "id": "181",
    "text": [
      "Fendant les eaux d'une haute étrave menaçante, un navire dont les bois noircis par les ans scintillent de glace surgit de la brume tel un vaisseau fantôme. Alors qu'il entre dans le port et fonce vers le quai, une sourde terreur étreint le cœur des soldats de la garnison Len-cienne.",
      "Les ponts et les mâts du navire envahisseur grouillent d'une horde grimaçante de guerriers squelet-tiques. Soudain, une effroyable clameur, un chœur d'outre-tombe monte du bateau, et la terreur se change en pure panique : comme un seul homme, les Lenciens tournent les talons et désertent le quai, abandonnant armes et équipements. - Par Ishir, mes gars se débandent ! s'écrie Lanza en empoignant le ceinturon de son épée avant de se ruer vers la porte.",
      "Il faut que j'arrive à les rallier avant que tout soit perdu ! Dégainant son épée, Prarg se précipite à sa suite et vous vous élancez derrière lui. Au-delà de la porte, vous tombez sur l'escalier qui dessert la tour. Lanza dévale les marches, mais Prarg prend la direction opposée, grimpant les degrés quatre à quatre vers le toit.",
      "Si vous voulez suivre le capitaine Lanza, rendez-vous au 264.",
      "Si vous préférez rejoindre le capitaine Prarg, rendez-vous au 14."
    ],
    "choices": [
      {
        "text": "Si vous voulez suivre le capitaine Lanza, rendez-vous au 264.",
        "targetId": "264"
      },
      {
        "text": "Si vous préférez rejoindre le capitaine Prarg, rendez-vous au 14.",
        "targetId": "14"
      }
    ]
  },
  "182": {
    "id": "182",
    "text": [
      "Vous pilotez le navire avec prudence le long d'un entrelacs d'étroits chenaux qui offrent un passage incertain à travers le traître chaos du champ d'icebergs. Mêlant signaux manuels et télépathie, vous indiquez la manœuvre à l'homme de barre posté à l'arrière du bateau.",
      "Régulièrement, votre vision est gênée par des bourrasques de neige poudreuse qui s'abattent des crêtes des falaises de glace et balaient le pont du navire. Frappé de plein fouet par une bourrasque plus violente que les autres, vous êtes momentanément aveuglé par ses furieux tourbillons.",
      "Alors que vous levez les mains pour vous protéger les yeux assaillis par des milliers de flocons cinglants, le hurlement incessant du vent s'accompagne soudain du crissement torturé de la coque heurtant un banc de glace immergé. Sous la violence du choc, le navire roule violemment sur bâbord et vous êtes précipité par- dessus bord...",
      "Utilisez la Table de Hasard.",
      "Si le chiffre obtenu est inférieur ou égal à 4, rendez-vous au 212.",
      "S'il est supérieur ou égal à 5, rendez-vous au 66."
    ],
    "choices": [
      {
        "text": "Si le chiffre obtenu est inférieur ou égal à 4, rendez-vous au 212.",
        "targetId": "212"
      },
      {
        "text": "rendez-vous au 66.",
        "targetId": "66"
      }
    ]
  },
  "183": {
    "id": "183",
    "text": [
      "Tagazin est sur le point de revenir à la charge pour vous achever quand son attaque est brutalement interrompue par un vent furieux. Jaillissant du centre de la salle, une formidable trombe se met à tournoyer entre les murs en mugissant de plus en plus fort, vous séparant de votre ennemi et vous projetant tous deux sur le sol.",
      "Puis, dans un crépitement d'énergie, une sombre silhouette prend forme dans l'œil du cyclone hurlant. La créature, dont les contours se précisent rapidement, rayonne d'une intense aura maléfique. Elle porte une longue robe noire. Son crâne évoque celui d'un bouc.",
      "Ses orbites vides luisent d'un feu écarlate. Mais ce n'est que lorsque l'innommable puanteur de mort et de pourriture qui émane de cette chose envahit vos sinus que vous sentez les crocs de la peur se refermer sur vos entrailles. C'est le Seigneur de la Mort d'Ixia qui se tient en personne devant vous !",
      "Geignant comme un chiot effarouché, Tagazin se glisse furtivement vers Ixiataaga, rasant le sol de sa truffe en signe d'entière soumission. Mais il se fige en le voyant tirer le Bâton de Mort des plis de sa robe pour le brandir. Le chacal tremble de tous ses membres, redoutant visiblement de subir le courroux de son terrible maître qui, d'un geste foudroyant, balaie les airs de son bâton maudit.",
      "Impuissant, vous êtes soulevé du sol en même temps que Tagazin, puis projeté dans l'effrayant tourbillon de la Porte d'Ombre !",
      "Rendez-vous au 303."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 303.",
        "targetId": "303"
      }
    ]
  },
  "184": {
    "id": "184",
    "text": [
      "La foudre, qui a transpercé votre Sac de part en part avant de vous brûler cruellement le dos, vous inflige une perte de 5 points d'ENDURANCE. Abasourdi par ce choc, vous vous relevez tant bien que mal et vous entreprenez d'ôter votre Sac à Dos encore fumant.",
      "Après avoir étouffé sous des poignées de neige les parties incandescentes du Sac, vous ouvrez le rabat et constatez que trois des objets qu'il contenait ont été entièrement carbonisés. (Rayez de votre Feuille d'Aventure trois objets de votre choix.) Grimaçant de douleur, mais néanmoins heureux d'être encore en vie, vous remettez votre Sac à l'épaule pour franchir les quelques mètres qui vous séparent de la grotte.",
      "Rendez-vous au 146."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 146.",
        "targetId": "146"
      }
    ]
  },
  "185": {
    "id": "185",
    "text": [
      "En dépit de vos efforts, la nouvelle vague de Monstres des Laves rejoint le Seigneur Démon avant vous et forme aussitôt un cercle de protection autour du chacal géant. L'un d'eux, sans doute le chef de cette patrouille d'abominations ailées, s'approche maintenant de Tagazin.",
      "Dans ses pattes cornées, il tient un étrange objet, nimbé d'une intense aura maléfique. A première vue, vous croyez voir une sorte de bol métallique dont la partie inférieure est prolongée par une lame de cristal. Mais, lorsque le monstre retourne la chose, vous comprenez ce qu'elle est réellement : c'est un Heaume de Pouvoir, garni au sommet d'une pointe de cristal.",
      "Le monstre en coiffe le Seigneur Démon, et la pointe se met à luire d'un éclat menaçant. Aussitôt, tous les Monstres des Laves remontent dans le ciel pour y voler lentement en cercle, impatients d'assister au terrible duel qui s'annonce. Revigoré par le pouvoir du heaume magique, Tagazin se rue sur vous tête baissée, soufflant comme un taureau furieux.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse ou la Grande Discipline de l'Exploration, ajoutez 3 au chiffre obtenu.",
      "Si le résultat est inférieur ou égal à 4, rendez-vous au 257.",
      "S'il est supérieur ou égal à 5, rendez-vous au 142."
    ],
    "choices": [
      {
        "text": "rendez-vous au 257.",
        "targetId": "257"
      },
      {
        "text": "rendez-vous au 142.",
        "targetId": "142"
      }
    ]
  },
  "186": {
    "id": "186",
    "text": [
      "Ce que vous découvrez quelques minutes plus tard, en jetant un coup d'œil sur le pont sans toutefois prendre pied, vous fige d'effroi ! Les morts vivants ont tué tous les marins Lenciens et entassé les corps sanglants au pied du grand mât. L'un deux, drapé dans une cape loqueteuse brodée d'étranges symboles, les bras en croix, psalmodie une invocation dans une langue inconnue.",
      "Soudain, les corps des malheureux sont enveloppés d'un halo crépitant d'étincelles d'énergie ténébreuse, et vous pouvez sentir presque physiquement la puissance diabolique du maléfice qui est en œuvre. Lorsque l'affreuse incantation s'achève enfin, vous voyez avec horreur vos compagnons morts se relever pour prendre place dans les rangs des Drak-karims morts vivants.",
      "Epouvanté, vous redescendez dans la cale.",
      "Rendez-vous au 298."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 298.",
        "targetId": "298"
      }
    ]
  },
  "187": {
    "id": "187",
    "text": [
      "La rapidité de vos réflexes vous évite d'être touché de plein fouet. Néanmoins, l'un des projectiles ardents rase votre cuisse d'assez près pour vous infliger une grave brûlure et vous faire perdre 4 points d'ENDURANCE.",
      "Rendez-vous au 221."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 221.",
        "targetId": "221"
      }
    ]
  },
  "188": {
    "id": "188",
    "text": [
      "Pendant quelques milles, le chenal dans lequel vous vous êtes engagé reste aussi large que profond, mais il se rétrécit bientôt d'une façon inquiétante. Ne dispo-sant d'aucun équipage pour vous aider à manœuvrer ce grand navire, il vous est de plus en plus difficile d'éviter les icebergs qui vous encerclent.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Exploration, ajoutez 1 au chiffre obtenu.",
      "Si le résultat est 0 ou 1, rendez-vous au 134.",
      "S'il est supérieur ou égal à 2, rendez-vous au 172."
    ],
    "choices": [
      {
        "text": "rendez-vous au 134.",
        "targetId": "134"
      },
      {
        "text": "rendez-vous au 172.",
        "targetId": "172"
      }
    ]
  },
  "189": {
    "id": "189",
    "text": [
      "Après avoir brièvement prévenu l'homme de barre d'obéir à vos signaux, vous quittez la dunette pour aller vous poster à l'étrave. Sachant que la masse principale d'un iceberg est immergée, vous vous penchez par-dessus le bastingage et scrutez la surface de l'eau pour repérer par transparence tout obstacle pouvant menacer le navire sous la ligne de flottaison.",
      "Car même un bâtiment aussi solidement construit que le vôtre verrait à coup sûr sa coque se briser s'il entrait en collision avec un iceberg. Guidé par vos indications télépathiques, le timonier engage le navire entre deux titanesques falaises de glace.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 3 au chiffre obtenu.",
      "Si le résultat est inférieur ou égal à 4, rendez-vous au 182.",
      "S'il est compris entre 5 et 8, rendez-vous au 11.",
      "S'il est supérieur ou égal à 9, rendez-vous au 284."
    ],
    "choices": [
      {
        "text": "rendez-vous au 182.",
        "targetId": "182"
      },
      {
        "text": "entre 5 et 8, rendez-vous au 11.",
        "targetId": "11"
      },
      {
        "text": "rendez-vous au 284.",
        "targetId": "284"
      }
    ]
  },
  "190": {
    "id": "190",
    "text": [
      "Les créatures du Chaos s'effondrent sous vos coups en hurlant. Pas une goutte de sang ou d'une quelconque autre substance ne s'échappe de leurs blessures béantes. Tout autour de vous, le sol est jonché des membres épars et des débris fracassés de leurs corps, mais leurs restes mutilés n'en continuent pas moins d'avancer en se tortillant, vous repoussant vers les marches.",
      "Alors, sous vos yeux dilatés par l'horreur, les divers tronçons de ces monstruosités s'accolent les uns aux autres pour reformer d'aberrantes entités. Devant cette vision terrifiante, votre raison vacille. Prenant vos jambes à votre cou, vous abandonnez le champ de bataille pour dévaler l'escalier.",
      "Poursuivi par les hurlements abominables de ces êtres reconstitués, vous plongez dans les noires profondeurs du bâtiment englouti. Derrière vous, les monstres poussent des cris... de joie ! Comprenant tout à coup que vous courez à votre perte, vous tentez désespérément de stopper votre course.",
      "Mais il est déjà trop tard ! Lorsque vous vous apercevez que l'escalier s'arrête au bord d'une fosse, le sol boueux se dérobe sous vos pieds et vous plongez la tête la première dans un puits sombre et profond.",
      "Rendez-vous au 59."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 59.",
        "targetId": "59"
      }
    ]
  },
  "191": {
    "id": "191",
    "text": [
      "Au bruit d'une clef tournant dans la serrure de votre cellule, vous vous préparez à lancer une attaque surprise dès que la porte s'ouvrira. Le lourd battant de métal pivote vers l'intérieur et vous vous jetez tête baissée contre un petit groupe de guerriers squelettiques rassemblés sur le seuil.",
      "Ce faisant, vous heurtez de plein fouet le mort vivant de tête, l'envoyant rouler sur le sol. Il serre dans sa main décharnée un bâton dont le manche d'argent bourdonne d'énergie. Nul besoin d'être devin pour comprendre qu'il comptait se servir de cet objet pour vous forcer à révéler les détails de votre mission..., projet pour l'instant contrarié par votre attitude peu conciliante.",
      "Le squelette pousse un cri de rage lorsque vous lui arrachez son bâton des mains mais, à cet instant, une gerbe de feu jaillit de sa pointe, perçant un trou de la taille d'un poing dans la paroi d'acier de la cellule ! Surpris par le recul de la déflagration, vous laissez échapper le bâton qui va rouler aux pieds bottés des autres morts vivants.",
      "Si vous voulez essayer de le reprendre avant qu'ils s'en emparent, rendez-vous au 54.",
      "Si vous préférez l'abandonner pour tenter de filer par la porte ouverte, rendez-vous au 222."
    ],
    "choices": [
      {
        "text": "Si vous voulez essayer de le reprendre avant qu'ils s'en emparent, rendez-vous au 54.",
        "targetId": "54"
      },
      {
        "text": "Si vous préférez l'abandonner pour tenter de filer par la porte ouverte, rendez-vous au 222.",
        "targetId": "222"
      }
    ]
  },
  "192": {
    "id": "192",
    "text": [
      "Guidé par l'intuition, vous sortez la Clef d'Onyx de votre poche et l'introduisez dans l'orifice. Elle pénètre sans effort dans le logement et, lorsque vous la tournez, la porte tout entière se met à chatoyer, semblant perdre sa consistance. Elle devient transparente, puis s'évanouit complètement, comme si elle s'était évaporée dans les airs.",
      "Vous aviez songé à récupérer la Clef d'Onyx, mais elle aussi a disparu. (Rayez cet Objet Spécial de votre Feuille d'Aventure.) Soulagé d'avoir surmonté cet obstacle, vous pénétrez dans une salle voûtée de forme oblongue. Au fond de cette pièce, entre deux piliers, sous un arc électrique d'où jaillit une lumière puissante, s'ouvre un sombre corridor.",
      "Passer entre les piliers pourrait vous être fatal. A l'évidence, le flux d'énergie qui les relie possède une puissance dévastatrice. Cependant, il existe peut-être un moyen d'éviter son contact mortel. Les piliers ne s'élèvent pas jusqu'au plafond et vous estimez qu'une soixantaine de centimètres séparent leur sommet de la voûte.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez l'utiliser, rendez-vous au 136.",
      "Si vous voulez tenter de grimper le long d'un des piliers et de vous glisser entre son sommet et le plafond, rendez-vous au 297.",
      "Si vous décidez de vous en remettre à votre bonne étoile et de foncer droit entre les deux piliers, rendez-vous au 211."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez l'utiliser, rendez-vous au 136.",
        "targetId": "136"
      },
      {
        "text": "Si vous voulez tenter de grimper le long d'un des piliers et de vous glisser entre son sommet et le plafond, rendez-vous au 297.",
        "targetId": "297"
      },
      {
        "text": "Si vous décidez de vous en remettre à votre bonne étoile et de foncer droit entre les deux piliers, rendez-vous au 211.",
        "targetId": "211"
      }
    ]
  },
  "193": {
    "id": "193",
    "text": [
      "Vous jaillissez juste à temps hors de la Tour de Cristal. Alors que vous dévalez la rampe qui rejoint les rues de Xaagon, la grande arche s'effondre. Puis c'est la tour tout entière qui s'abat sur la ville tel un immense arbre de cristal brutalement déraciné.",
      "Filant comme une flèche, vous traversez la cité jusqu'aux décombres de la porte ouest. Vous la franchissez sans même reprendre votre souffle, avant de poursuivre votre course dans la neige profonde en direction de l'étroit défilé montagneux. Parvenu à plus d'un kilomètre des murs de Xaagon, hors d'haleine, vous finissez par vous arrêter et vous vous retournez vers l'antique cité.",
      "Rendez- vous au 250."
    ],
    "choices": []
  },
  "194": {
    "id": "194",
    "text": [
      "Suivant le regard de Banedon, vous voyez, posés sur sa table à cartes, un ceinturon et un fourreau apparemment taillés dans un cuir ordinaire. - Voilà ce qu'il te faut, Grand Maître. Ce fourreau a été imprégné de Korlinium, un métal rare qui dissimulera le pouvoir de ton épée.",
      "Vous échangez ce fourreau et ce ceinturon contre votre ancien équipement.(Inscrivez le Fourreau de Korlinium sur la liste des Objets Spéciaux de votre Feuille d'Aventure même si vous transportez déjà le nombre maximum autorisé d'objets.) Rendez- vous ensuite au 22."
    ],
    "choices": []
  },
  "195": {
    "id": "195",
    "text": [
      "A moins d'un mille de distance, vous apercevez la large proue d'un prodigieux vaisseau qui semble surgir des profondeurs de la mer tel un monstre de cauchemar. Amplifiant votre pouvoir visuel, vous découvrez que le pont principal est recouvert d'un énorme capot de bois verdâtre qui lui donne l'aspect d'un gigantesque poisson; deux hublots de verre en forme de demi- sphère et une large ouverture bordée de rangées de pointes acérées achèvent de suggérer les yeux et la gueule d'un monstre d'une criante réalité.",
      "La chose, en dépit de sa taille et de son poids assurément considérables, fonce droit sur votre navire à une vitesse ahurissante. Vous hurlez à votre équipage de prendre les armes. Découvrant à leur tour le bâtiment qui se précipite sur vous, les marins, avant d'obéir à votre ordre, restent un instant figés de terreur.",
      "Pendant ce temps, concentrant tous vos sens sur le vaisseau inconnu, vous découvrez qu'il s'agit d'un vaisseau Ixian venu retrouver à un point de rendez-vous votre propre navire qui est toujours censé être aux mains de la horde des assaillants morts vivants de Fort Azgad. - Allons les gars, tenez bon ! criez-vous pour essayer de calmer les Lenciens qui voient s'approcher l'engin ennemi avec une terreur grandissante.",
      "Alors que le navire arrive tout près, vous voyez sa vaste proue s'ouvrir, telle la gueule d'un titanesque prédateur marin. Cédant à la panique, les Lenciens se jettent à genoux sur le pont en hurlant : « Sauve-nous, Ishir, sauve-nous ! Nous allons être dévorés vivants ! »",
      "Rendez-vous au 236."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 236.",
        "targetId": "236"
      }
    ]
  },
  "196": {
    "id": "196",
    "text": [
      "Vous courez aussi vite que vous le pouvez sans vous soucier des nombreux pièges, désormais désamorcés, que vous avez dû franchir pour découvrir le repaire d'Ixiataaga. Ce faisant, vous croisez de nombreux gardes Ixians et Drakkarims, figés dans l'attitude qu'ils avaient à l'instant précis où vous avez abattu le Seigneur de la Mort.",
      "Seul le pouvoir de cet être démoniaque les animait, et ce pouvoir s'est évanoui avec lui. Sous vos pieds, les dalles se soulèvent et se gondolent, agitées de soubresauts chaotiques. Vous n'êtes plus qu'à une volée de marches du grand hall de la Tour de Cristal quand la cage de l'escalier s'effondre, vous laissant au bord d'un gouffre, profond de près de vingt mètres !",
      "Au même instant, tels des troncs d'arbres déracinés par la tempête, une rangée de lourds piliers dégringolent les marches supérieures. Ils s'immobilisent dans un formidable fracas quelques mètres au-dessus de vous, barrant l'escalier de leur enchevêtrement et vous interdisant de revenir sur vos pas.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous avez atteint le rang de Grand Maître Éminent, ou un rang supérieur, rendez-vous au 29.",
      "Si vous maîtrisez la Grande Discipline de l'Intuition et si vous avez atteint le rang de Grand Maître Mentor, ou un rang supérieur, rendez-vous au 326.",
      "Si vous ne maîtrisez aucune de ces Grandes Disciplines, ou si vous n'avez pas atteint le rang de Grande Maîtrise Kaï requis, rendez- vous au 225."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous avez atteint le rang de Grand Maître Éminent, ou un rang supérieur, rendez-vous au 29.",
        "targetId": "29"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Intuition et si vous avez atteint le rang de Grand Maître Mentor, ou un rang supérieur, rendez-vous au 326.",
        "targetId": "326",
        "requiredDiscipline": "Intuition"
      }
    ]
  },
  "197": {
    "id": "197",
    "text": [
      "Vous avancez péniblement dans la neige et la glace en direction du lointain cercle de rochers, espérant y trouver un abri contre la violence du blizzard. Dix mètres vous en séparent quand un craquement assourdissant vous glace le sang. Dans la seconde qui suit ce signe annonciateur, un large pan de roc et de glace se détache des hauteurs du défilé, formant une formidable avalanche qui dévale la pente dans un grondement de tonnerre.",
      "Les yeux écarquillés d'horreur, vous voyez ces tonnes de neige, de glace et de schiste balayer le flanc de la montagne en roulant droit vers vous tel un monstrueux raz-de-marée. Aiguillonné par la peur, vous tournez les talons et courez à perdre haleine dans l'espoir insensé d'échapper à la monstrueuse vague blanche qui menace de vous engloutir.",
      "L'avalanche est presque sur vous lorsque vous apercevez une basse saillie rocheuse. Agissant par réflexe, vous plongez sous ce refuge providentiel.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 2 au chiffre obtenu.",
      "Si vous maîtrisez la Grande Discipline du Nexus, vous pouvez encore ajouter 2 à ce chiffre.",
      "Si le résultat est inférieur ou égal à 5, rendez-vous au 99.",
      "Si le résultat est compris entre 6 et 9, rendez-vous au 231.",
      "S'il est supérieur ou égal à 10, rendez-vous au 104."
    ],
    "choices": [
      {
        "text": "rendez-vous au 99.",
        "targetId": "99"
      },
      {
        "text": "entre 6 et 9, rendez-vous au 231.",
        "targetId": "231"
      },
      {
        "text": "rendez-vous au 104.",
        "targetId": "104"
      }
    ]
  },
  "198": {
    "id": "198",
    "text": [
      "Le spectacle que vous découvrez derrière le hublot dépasse l'entendement. A l'extérieur du vaisseau, dans une titanesque caverne de glace, s'étend un gigantesque lac souterrain. Plusieurs brise-glace semblables à celui avec lequel vous avez quitté Fort Azgad sont amarrés le long des rives.",
      "Il y a des morts vivants partout, autour des navires et sur la chaussée gelée qui longe le rivage. Ces bâtiments, construits par les esclaves du Seigneur de la Mort Ixiataaga, sont destinés à transporter ses armées de guerriers d'outre-tombe vers les territoires des vivants.",
      "A votre départ, vous saviez que le Seigneur de la Mort avait l'intention de se lancer à la conquête du Magnamund. Mais de là à imaginer que son diabolique projet pouvait être aussi avancé ! Abasourdi par cette découverte, vous vous jurez plus que jamais de contrecarrer les noirs desseins d'Ixiataaga.",
      "Mais, si vous ne doutez pas un seul instant de l'issue de votre mission, vous devez maintenant trouver le moyen de quitter ce navire dont vous pensez désormais que c'est un sous-marin.",
      "Rendez-vous au 69."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 69.",
        "targetId": "69"
      }
    ]
  },
  "199": {
    "id": "199",
    "text": [
      "Votre impuissance à résoudre l'énigme vous rend encore plus sensible à l'atmosphère oppressante qui règne en ce lieu. Déjà frustré par votre échec, vous éprouvez maintenant un sentiment de désespoir. Conscient du mal que vous fait l'aura maléfique de cette salle, vous puisez au plus profond de vos ressources pour trouver la volonté de chercher une autre issue.",
      "En examinant avec soin le reste de la pièce, vous finissez par découvrir une ouverture juste assez large pour...",
      "Si vous possédez une Clef d'Onyx, rendez-vous au 192.",
      "Si vous n'avez pas cet Objet Spécial, rendez-vous au 71."
    ],
    "choices": [
      {
        "text": "Si vous possédez une Clef d'Onyx, rendez-vous au 192.",
        "targetId": "192"
      },
      {
        "text": "Si vous n'avez pas cet Objet Spécial, rendez-vous au 71.",
        "targetId": "71"
      }
    ]
  },
  "200": {
    "id": "200",
    "text": [
      "Fouetté par les vents mugissants du vide abyssal, vous tombez en tournoyant dans le cœur ténébreux du gouffre interspatial. Vous perdez toute notion du temps jusqu'au moment où vous voyez apparaître dans le lointain quelques minuscules points de lumière.",
      "Ils grossissent rapidement, tels des projectiles fonçant sur vous à une vitesse folle. Soudain, plus rien ne bouge autour de vous. Abasourdi, désorienté, vous devez attendre un long moment avant de recouvrer une vision nette et d'être en mesure de vous relever.",
      "Vous êtes revenu dans la spirale de cristal, dans la salle où les maléfices du Seigneur de la Mort vous avaient précipité à travers la Porte d'Ombre. Voyant que l'endroit est maintenant désert, vous faites appel à votre pouvoir Kaï. A votre profond soulagement, vous découvrez que quelques heures seulement se sont écoulées pendant votre absence du Magnamund.",
      "« Qu'Ishir et Kaï soient loués », pensez-vous en votre for intérieur, considérant qu'il n'est pas trop tard pour achever votre quête. Rassuré, vous décidez de retrouver coûte que coûte le Seigneur de la Mort, même s'il vous faut pour cela fouiller de fond en comble cette damnée Tour de Cristal.",
      "Vous débordez de courage quand... Ce bruit, derrière vous, et cet épouvantable relent de pourriture et de mort ! Tout compte fait, vous n'aurez pas à aller bien loin pour trouver Ixiataaga. Rendez- vous au 90."
    ],
    "choices": []
  },
  "201": {
    "id": "201",
    "text": [
      "Poursuivi par les flammes, vous grimpez dans le grée-ment avec l'agilité d'un singe. Parvenu à mi-hauteur du grand mât, vous tranchez une écoute, vous vous y cramponnez et vous vous lancez dans le vide pour vous propulser sur le quai. Parvenant, grâce à vos pouvoirs Kaï, à percer du regard les épais nuages de fumée qui montent du pont en flammes, vous vous apprêtez à lâcher le cordage au moment où son mouvement de balancier vous amène au plus près du quai, soit à plus de quinze mètres de son bord.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 1 au chiffre obtenu pour chaque rang supérieur à celui de Grand Maître Primat que vous avez atteint.",
      "Si le résultat est inférieur ou égal à 5, rendez-vous au 132.",
      "S'il est supérieur ou égal à 6, rendez-vous au 317. '"
    ],
    "choices": [
      {
        "text": "rendez-vous au 132.",
        "targetId": "132"
      },
      {
        "text": "rendez-vous au 317.",
        "targetId": "317"
      }
    ]
  },
  "202": {
    "id": "202",
    "text": [
      "Votre pouvoir Kaï vous avertit que vous avez déclenché un signal d'alarme silencieux. Revenant sur vos pas, l'arme à la main, vous enjambez les décombres qui jonchent le sol pour gagner la porte de l'ancien corps de garde. Soudain, un bruit, celui de la pierre qui crisse sur la pierre, vous fait tourner les talons.",
      "Sur la gauche, un panneau dérobé s'ouvre dans le mur, livrant passage à six guerriers squelettes brandissant des épées rouillées. Ils n'émettent aucun son, mais ils s'approchent de vous sans hésiter, leurs orbites creuses brûlant d'un maléfique feu verdâtre...",
      "Si vous décidez de les affronter, rendez-vous au 242.",
      "Si vous préférez décamper en vous engouffrant dans l'escalier, rendez- vous au 343."
    ],
    "choices": [
      {
        "text": "Si vous décidez de les affronter, rendez-vous au 242.",
        "targetId": "242"
      }
    ]
  },
  "203": {
    "id": "203",
    "text": [
      "Après quelques minutes d'une concentration si intense qu'elle vous fait perdre 2 points d'ENDURANCE, votre tentative est couronnée de succès. La porte se dématérialise. Elle devient progressivement transparente puis disparaît comme si elle s'était dissoute dans l'air.",
      "Arborant un sourire modeste et néanmoins satisfait, vous pénétrez dans une salle voûtée de forme oblongue. Au fond de cette pièce, entre deux piliers, sous un arc électrique d'où jaillit une lumière puissante, s'ouvre un sombre corridor. Passer entre les piliers pourrait vous être fatal car le flux d'énergie qui les relie possède une puissance dévastatrice.",
      "Cependant, il existe peut-être un moyen d'éviter son contact mortel. Les piliers ne s'élèvent pas jusqu'au plafond, et vous estimez qu'une soixantaine de centimètres séparent leur sommet de la voûte.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez l'utiliser, rendez-vous au 136.",
      "Si vous voulez tenter de grimper le long d'un des piliers et de vous glisser entre son sommet et le plafond, rendez-vous au 297.",
      "Si vous décidez de vous en remettre à votre bonne étoile pour foncer droit entre les deux piliers, rendez-vous au 211."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous désirez l'utiliser, rendez-vous au 136.",
        "targetId": "136"
      },
      {
        "text": "Si vous voulez tenter de grimper le long d'un des piliers et de vous glisser entre son sommet et le plafond, rendez-vous au 297.",
        "targetId": "297"
      },
      {
        "text": "Si vous décidez de vous en remettre à votre bonne étoile pour foncer droit entre les deux piliers, rendez-vous au 211.",
        "targetId": "211"
      }
    ]
  },
  "204": {
    "id": "204",
    "text": [
      "Sous la table de pierre, vous découvrez trois sacs à dos en cuir que vous ouvrez et videz sur le plancher verglacé pour satisfaire votre curiosité. Pour l'essentiel, leur contenu se compose d'instruments culinaires grossiers et usagés : bols et gourdes en métal cabossés, couteaux et cuillers en fer rouillé...",
      "Mais, au milieu de ces ustensiles sans valeur, vous avez la surprise de découvrir une clef ouvragée avec art dans une précieuse pierre verte.",
      "Si vous désirez conserver cette Clef d'Onyx, inscrivez-la sur votre Feuille d'Aventure dans la case des Objets Spéciaux transportés dans la poche de votre tunique.",
      "Rendez-vous ensuite au 34."
    ],
    "choices": []
  },
  "205": {
    "id": "205",
    "text": [
      "Ces étranges créatures ailées, vous avez déjà eu le déplaisir de les rencontrer lors de votre dernière incursion dans l'Univers des Ténèbres. Ce sont des Monstres des Laves, féroces serviteurs de Naar, le Dieu Sombre. Au nombre de douze, ils escortent le Seigneur Démon clopinant vers la Porte d'Ombre.",
      "A cet instant, vous redoutez le pire. Si Tagazin parvient à franchir avant vous le passage intersidéral, les Monstres des Laves le refermeront sûrement derrière lui. Et vous ne pourrez plus vous évader de ce monde diabolique. Ce risque-là, vous ne pouvez vous permettre de le courir !",
      "Dégainant votre arme, vous vous lancez à la poursuite du Seigneur Démon, fermement décidé à l'empêcher d'atteindre la Porte d'Ombre vivant.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 347. Sinon, rendez- vous au 38."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 347.",
        "targetId": "347"
      }
    ]
  },
  "206": {
    "id": "206",
    "text": [
      "Vous détalez hors de la grotte et, jetant un bref regard par-dessus votre épaule, vous voyez la gigantesque silhouette de la mystérieuse créature à la faveur d'un éclair. D'effroyables rangées de crocs acérés débordent de sa gueule et des dizaines de tentacules prolongés de griffes empoisonnées se tortillent le long de son colossal corps ursinien, tandis que, pour faire bonne mesure, une corne longue comme un sabre de géant jaillit de sa tête reptilienne !",
      "Après avoir poussé un mugissement de triomphe, l'abomination regagne, satisfaite, l'intimité de sa tanière puante. Renonçant à vous y abriter, vous redescendez au fond du défilé afin de vous réfugier dans le cercle de rochers qui émergent de la glace sur le versant sud.",
      "Dix mètres vous en séparent quand un craquement assourdissant fige votre sang dans vos veines. Dans la seconde qui suit ce signe annonciateur, un pan de roc et de glace se détache des hauteurs du défilé, formant une formidable avalanche qui dévale la pente dans un grondement de tonnerre.",
      "Les yeux écarquillés d'horreur, vous voyez ces tonnes de neige, de glace et de schiste balayer le flanc de la montagne, en roulant droit vers vous tel un raz-de-marée. Aiguillonné par la peur, vous tournez les talons et filez comme une flèche dans l'espoir insensé d'échapper à la monstrueuse muraille blanche sur le point de vous engloutir.",
      "L'avalanche est presque sur vous lorsque vous apercevez une basse saillie rocheuse. Réagissant d'instinct, vous plongez sous cet abri de fortune.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 2 au chiffre obtenu.",
      "Si vous maîtrisez la Grande Discipline du Nexus, vous pouvez encore ajouter 2 à ce chiffre.",
      "Si le résultat est inférieur ou égal à 5, rendez-vous au 99.",
      "Si le résultat est compris entre 6 et 9, rendez-vous au 231.",
      "S'il est supérieur ou égal à 10, rendez-vous au 104."
    ],
    "choices": [
      {
        "text": "rendez-vous au 99.",
        "targetId": "99"
      },
      {
        "text": "entre 6 et 9, rendez-vous au 231.",
        "targetId": "231"
      },
      {
        "text": "rendez-vous au 104.",
        "targetId": "104"
      }
    ]
  },
  "207": {
    "id": "207",
    "text": [
      "A moins de quinze mètres de votre cachette, vous voyez un chariot en bois bâché auquel est harnaché une sorte de gros bœuf pourvu d'une épaisse robe grise et hirsute. Une dizaine de soldats morts vivants s'activent à l'arrière du chariot, déchargeant de luisantes caisses métalliques qu'ils transportent dans leurs mains décharnées jusqu'à la gueule béante du sous-marin.",
      "Dès que la dernière caisse a été enlevée, vous vous approchez furtivement du chariot. Quand l'occasion se présente enfin, vous bondissez à l'intérieur et vous vous dissimulez sous une puante bâche graisseuse. Quelques minutes plus tard, le tombereau s'ébranle en cahotant.",
      "L'œil rivé à une fente entre deux planches, vous apercevez les gardes squelettes postés à l'entrée du tunnel qui ne contrôlent heureusement pas le contenu de votre chariot. Peu après, au-delà d'une légère pente, le tombereau débouche dans une autre caverne de glace.",
      "A en juger par ce que vous pouvez voir, de nombreux autres passages accèdent à cette immense grotte, tels les rayons d'une roue géante convergeant vers son moyeu. Soudain, un mort vivant Drakkarim s'approche, s'empare de la longe de la bête velue, et conduit le chariot vers un tas de caisses métalliques.",
      "Il a visiblement l'intention de les charger. Craignant d'être découvert, vous sautez en marche du fourgon et vous vous dissimulez derrière une pile de barils vides. De votre cachette, vous pouvez apercevoir deux issues par lesquelles vous pourriez quitter cette caverne trop fréquentée : un escalier non surveillé qui s'enfonce dans le mur nord et un passage voûté ouvert dans la paroi est.",
      "Si vous décidez de sortir de la caverne par l'escalier, rendez-vous au 141.",
      "Si vous préférez emprunter le passage voûté, rendez-vous au 7."
    ],
    "choices": [
      {
        "text": "Si vous décidez de sortir de la caverne par l'escalier, rendez-vous au 141.",
        "targetId": "141"
      },
      {
        "text": "Si vous préférez emprunter le passage voûté, rendez-vous au 7.",
        "targetId": "7"
      }
    ]
  },
  "208": {
    "id": "208",
    "text": [
      "Vous vous cachez derrière l'un des nombreux amas de débris puants qui encombrent la cale et vous faites appel à votre Maîtrise Magnakaï... avec succès ! Grâce à votre pouvoir, les dix guerriers morts vivants font chou blanc.",
      "Rendez-vous au 118."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 118.",
        "targetId": "118"
      }
    ]
  },
  "209": {
    "id": "209",
    "text": [
      "Frappée de plein fouet, la créature titube un instant, dardant sa langue pointue en poussant un sifflement strident. Elle tombe à genoux en fouaillant l'air de ses griffes pour tenter de vous faucher les jambes. Vous bondissez vivement en arrière pour vous mettre hors d'atteinte des flammes infernales qui dansaient au fond des yeux morts de la créature maléfique.",
      "Elles vacillent, puis s'évanouissent. L'être s'effondre sur le sol gelé et, en quelques secondes, se dissout dans une exhalaison de vapeur nauséabonde pour ne laisser à vos pieds qu'une infecte mare bouillonnante de venin noir. La brutale disparition du Kherbala semble avoir mis un frein à l'ardeur des assaillants et les hommes du capitaine Lanza en profitent pour lancer une vigoureuse contre-attaque.",
      "Rejoignant leurs rangs, vous les aidez à repousser l'ennemi vers le bord du quai. - Regardez, Grand Maître ! s'exclame soudain Lanza, le doigt pointé vers le brise-glace qu'un groupe de morts vivants vient d'envahir dans le but évident de le détruire et de l'envoyer par le fond. - Il faut les arrêter ! hurlez-vous avant de rompre le combat pour vous ruer vers le navire.",
      "Arrivé au milieu de la passerelle d'embarquement, vous vous retrouvez face à un peloton de squelettes armés d'épées et de haches grossières. Bondissant tel un tigre au milieu de leur groupe macabre, vous les taillez en pièces avec une rapidité fulgurante et une mortelle précision.",
      "Mais, alors que le dernier mort vivant tombe dans les eaux sombres du port, presque tranché en deux, vous entendez soudain derrière vous un bruit qui vous fait vous retourner avec effroi.",
      "Rendez-vous au 78."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 78.",
        "targetId": "78"
      }
    ]
  },
  "210": {
    "id": "210",
    "text": [
      "Vous empoignez votre arme, mais à peine avez-vous eu le temps de la tirer du fourreau qu'une douleur fulgurante tétanise votre jambe droite ! La bête tapie sous la boue vient de refermer ses puissantes mâchoires sur votre mollet et tente de vous entraîner vers le fond du puits.",
      "Frappant à l'aveuglette, vous tentez désespérément de la forcer à lâcher prise. index GLOUTON DES VASES HABILETÉ : 44 ENDURANCE : 44 Si vous sortez vainqueur de ce combat, rendez-vous au 67."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 67.",
        "targetId": "67"
      }
    ],
    "combat": {
      "name": "INDEX GLOUTON DES VASES",
      "combatSkill": 44,
      "endurance": 44,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "211": {
    "id": "211",
    "text": [
      "A l'instant où vous pénétrez dans le champ électrique qui crépite entre les deux piliers, un formidable éclair blanc vous aveugle et une souffrance insupportable transperce votre corps tout entier. Vous perdez 10 points d'ENDURANCE.",
      "S'il vous reste un souffle de vie, rendez-vous au 315."
    ],
    "choices": [
      {
        "text": "rendez-vous au 315.",
        "targetId": "315"
      }
    ],
    "damage": 10
  },
  "212": {
    "id": "212",
    "text": [
      "Dans un hurlement de terreur, vous plongez la tête la première dans l'eau glacée. Vous sentez un bref instant la morsure du froid transpercer votre corps... avant de sombrer dans le néant quand votre tête et votre épaule gauche s'écrasent contre le bord d'un banc de glace dissimulé sous la surface.",
      "Cette circonstance fâcheuse se révèle en fin de compte plutôt heureuse, puisqu'elle vous épargne une atroce agonie lorsque, dans l'instant qui suit, votre corps se retrouve broyé entre le banc de glace et l'étrave du navire. C'est ainsi que votre aventure et votre vie s'achèvent, au fond de la sombre mer de Tozaz."
    ],
    "choices": []
  },
  "213": {
    "id": "213",
    "text": [
      "Touchées dans leurs organes vitaux, les hideuses créatures s'écartent de vous en titubant. Puis, sous vos yeux horrifiés, les corps mutilés subissent une transformation aussi soudaine que répugnante. Leur abdomen implose dans un concert d'infects bruits de succion et ils ont à peine le temps de laisser échapper un bref râle d'agonie avant que leurs restes déjetés s'effondrent sur le sol pour tomber en poussière !",
      "Rengainant votre arme, vous vous tournez vers le passage qu'ils gardaient quand vous êtes arrivé dans la pièce, pour découvrir qu'il est maintenant fermé par une porte opaque de cristal vert. Au centre de la surface lisse de cette porte se trouve un palastre, un boîtier de métal gravé de motifs complexes qui recouvre une serrure d'un modèle antique dont le mécanisme, pensez-vous, est commandé par l'énergie psychique.",
      "Les symboles tourmentés du palastre forment un rébus dont la solution est un nombre à deux chiffres. En projetant, grâce à vos pouvoirs psychiques, l'image de ce nombre sur la serrure, vous déclencherez son mécanisme et la porte s'ouvrira. Le premier des deux chiffres est égal au nombre d'îles qui émergent dans un rayon de cent cinquante kilomètres au large de Xaagon.",
      "Le second chiffre est égal au nombre de cités et de localités qui se trouvent dans la chaîne des crêtes de Shegtar. Consultez votre carte pour déterminer le nombre à deux chiffres qui vous permettra d'ouvrir la porte.",
      "Lorsque vous penserez avoir trouvé la solution de l'énigme, rendez-vous au paragraphe qui porte ce numéro.",
      "Si vous tombez sur un numéro visiblement incorrect ou si vous ne parvenez pas à résoudre l'énigme, rendez-vous au 199."
    ],
    "choices": [
      {
        "text": "Si vous tombez sur un numéro visiblement incorrect ou si vous ne parvenez pas à résoudre l'énigme, rendez-vous au 199.",
        "targetId": "199"
      }
    ]
  },
  "214": {
    "id": "214",
    "text": [
      "Lorsque vous élevez le Glaive de Sommer, un halo de flammes dorées embrase aussitôt sa lame, lançant un éclat si intense que le Seigneur de la Mort s'en trouve un moment aveuglé. Poussant un cri strident, il brandit son bâton maléfique pour contrer votre premier coup.",
      "Le tranchant de l'Epée du Soleil s'abat sur le manche du Bâton de Mort, faisant jaillir une gerbe d'étincelles pourpres et blanches qui explosent en l'air dans un crépitement assourdissant. Au lieu de retomber au sol, ces braises ardentes sont aussitôt aspirées par le vortex de la Porte d'Ombre qui, au fond de la salle, tourbillonne maintenant à une vitesse alarmante.",
      "Le Seigneur de la Mort, ébranlé par votre attaque, chancelle un instant. Mais il se ressaisit et tente de vous tailler le visage avec la pointe effilée de son arme diabolique. Vous esquivez le coup d'un bond agile avant de riposter d'une botte foudroyante, jetant toutes vos forces dans la bataille. index SEIGNEUR DE LA MORT IXIATAAGA HABILETÉ: 60 ENDURANCE: 39 Cet être surnaturel est armé du Bâton de Mort inactivé.",
      "Il est insensible à toutes les formes d'attaque psychique, sauf si vous utilisez la Grande Discipline du Foudroiement Psychique ou la Déflagration Psychique.",
      "Si vous sortez vainqueur de ce formidable duel, rendez-vous au 290."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce formidable duel, rendez-vous au 290.",
        "targetId": "290"
      }
    ],
    "combat": {
      "name": "LA MORT IXIATAAGA",
      "combatSkill": 60,
      "endurance": 39,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "215": {
    "id": "215",
    "text": [
      "Dégainant votre arme, vous avancez bravement vers le Seigneur de la Mort, déterminé à vaincre ou à périr. Mais son rire diabolique vous fait vaciller comme sous l'assaut d'une effroyable tempête et la force grandis-santé de son pouvoir vous empêche d'approcher du fossé en flammes.",
      "Soudain, vous voyez une boule de feu jaillir de la pointe du Bâton de Mort... Une fraction de seconde plus tard, une douleur insoutenable vous transperce la poitrine. Presque aussitôt, une fulgurante explosion engloutit tous vos sens, soufflant votre ultime étincelle de vie...",
      "Votre noble quête trouve ici sa fin tragique."
    ],
    "choices": []
  },
  "216": {
    "id": "216",
    "text": [
      "Fixant les yeux luisants du Seigneur Démon, vous rassemblez toutes vos forces pour lui asséner une décharge d'énergie psychique. Cette décharge prend la forme d'une balle étincelante qui traverse la pièce à la vitesse de l'éclair avant de plonger dans l'esprit de Tagazin.",
      "Le chacal géant tressaille de douleur et s'immobilise un instant, mais il ne tarde pas à recouvrer ses moyens et revient à la charge. SEIGNEUR DÉMON TAGAZIN HABILETÉ: 54 ENDURANCE: 60 Vous pouvez utiliser la grande Discipline du Foudroiement Psychique contre votre adversaire.",
      "Si le total d'ENDURANCE de Tagazin se trouve réduit à 25, ou moins, rendez-vous au 168."
    ],
    "choices": [
      {
        "text": "rendez-vous au 168.",
        "targetId": "168"
      }
    ],
    "combat": {
      "name": "SEIGNEUR DÉMON TAGAZIN",
      "combatSkill": 54,
      "endurance": 60,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "217": {
    "id": "217",
    "text": [
      "Vous vous remémorez rapidement la formule du Contre- Sortilège de la Guilde de l'Étoile de Cristal, puis vous l'énoncez à voix basse en vous concentrant sur la serrure. Autour de vous l'air, soudain chargé d'électricité statique, crépite furieusement.",
      "Puis tout redevient calme. Le charme maléfique qui protégeait la porte a été brutalement levé. Désormais certain de ne courir aucun risque, vous dégainez votre arme et utilisez sa pointe pour ôter de leur logement les trois plaques qui protègent la serrure.",
      "Cela fait, il ne vous reste plus qu'à plonger vos doigts agiles dans les rouages de son mécanisme pour déverrouiller la porte. Ce qui, pour vous, n'est qu'un jeu d'enfant.",
      "Rendez-vous au 10."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 10.",
        "targetId": "10"
      }
    ]
  },
  "218": {
    "id": "218",
    "text": [
      "Les Monstres des Laves plongent droit sur vous en mugissant. Les battements de leurs ailes sont si puissants que vous êtes projeté au sol, loin du Seigneur Démon ! Levant les yeux, vous voyez l'un de ces horribles volatiles se poser près de Tagazin. Il tient dans ses serres crochues un curieux objet nimbé d'une intense aura maléfique.",
      "Lorsque le Monstre des Laves retourne cette chose, vous comprenez ce dont il s'agit. C'est un Heaume de Pouvoir, garni au sommet d'une pointe de cristal. Le monstre en coiffe la tête du Seigneur Démon et la pointe se met à luire d'un éclat menaçant. Aussitôt, comme ses congénères, il remonte dans le ciel pour voler lentement en cercle, impatient d'assister au terrible duel qui s'annonce.",
      "Revigoré par le pouvoir du heaume magique, Tagazin se rue sur vous tête baissée, soufflant tel un taureau furieux.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse ou la Grande Discipline de l'Exploration, ajoutez 3 au chiffre obtenu.",
      "Si le résultat est inférieur ou égal à 4, rendez-vous au 257.",
      "S'il est supérieur ou égal à 5, rendez-vous au 142."
    ],
    "choices": [
      {
        "text": "rendez-vous au 257.",
        "targetId": "257"
      },
      {
        "text": "rendez-vous au 142.",
        "targetId": "142"
      }
    ]
  },
  "219": {
    "id": "219",
    "text": [
      "A l'instant où votre poing se referme sur la garde de l'Epée du Soleil, l'avertissement de Banedon vous revient en mémoire : « Tu ne devras user du Glaive de Sommer qu'avec la plus extrême prudence. Dans les ténèbres d'Ixia, la flamme de son pouvoir jaillira comme un feu d'alarme... qui risque de révéler ta présence au Seigneur de la Mort. »",
      "Durant un instant, vous hésitez à tirer la lame divine de son fourreau de Korlinium. Mais la bête de la grotte est maintenant proche, avide de vous tailler en pièces.",
      "Si vous n'avez pas l'intention de laisser ce monstre vous réduire en charpie, il est grand temps de réagir !",
      "Allez-vous dégainer le Glaive de Sommer pour vous défendre (rendez-vous au 110) ou le laisser au fourreau pour vous servir d'une autre arme (rendez-vous au 275) ?"
    ],
    "choices": [
      {
        "text": "Rendez-vous au 110.",
        "targetId": "110"
      },
      {
        "text": "Rendez-vous au 275.",
        "targetId": "275"
      }
    ]
  },
  "220": {
    "id": "220",
    "text": [
      "- Donne-moi ton arme, Grand Maître, vous demande Banedon. Vous dégainez votre arme de poing et la lui tendez, la garde tournée vers lui. Tirant d'une poche une gemme rouge sans éclat de la taille d'une petite figue, il la presse doucement contre la garde de l'arme.",
      "A votre stupéfaction, vous voyez la pierre s'enfoncer dans la garde aussi aisément que dans une motte de beurre ! - Cette gemme est une Pierre du Dessi, explique Banedon en voyant votre mine interloquée. Je l'ai reçue du Seigneur Rimoah. Et maintenant, je te la donne.",
      "Chaque fois que tu affronteras un ennemi mort vivant avec cette arme, le pouvoir de la Pierre du Dessi t'aidera à vaincre promptement. Reprenant l'arme que vous tend Banedon, vous examinez avec soin la gemme magique désormais parfaitement incrustée dans sa garde avant de la glisser dans son fourreau.",
      "Utilisée dans un combat contre un adversaire mort vivant, votre arme ainsi enchantée par la Pierre du Dessi lui infligera des blessures deux fois plus graves : il faudra donc multiplier par deux le nombre de points d'ENDURANCE que chaque coup lui aura fait perdre.",
      "N'oubliez pas d'inscrire cette modification sur la liste des armes de votre Feuille d'Aventure avant de vous rendre au 22."
    ],
    "choices": []
  },
  "221": {
    "id": "221",
    "text": [
      "Vous vous relevez et tournez les talons pour prendre la fuite, mais les trois créatures ne vous en laissent pas le temps. Glissant avec légèreté sur la neige gelée, elles vous obligent à les affronter dans un mortel corps à corps.",
      "Si vous possédez le Glaive de Sommer et si vous désirez l'utiliser, rendez-vous au 167.",
      "Si vous n'avez pas cet Objet Spécial ou si vous préférez ne pas en faire usage, rendez-vous au 130."
    ],
    "choices": [
      {
        "text": "Si vous possédez le Glaive de Sommer et si vous désirez l'utiliser, rendez-vous au 167.",
        "targetId": "167"
      },
      {
        "text": "Si vous n'avez pas cet Objet Spécial ou si vous préférez ne pas en faire usage, rendez-vous au 130.",
        "targetId": "130"
      }
    ]
  },
  "222": {
    "id": "222",
    "text": [
      "A coups d'épaule, vous parvenez à vous frayer un passage vers la sortie de la cellule. Les morts vivants, balayés par votre charge, tombent à la renverse. Vous décampez comme une flèche à travers un dédale de coursives obscures pendant que vos ennemis, étalés sur le sol, tentent de désenchevêtrer leurs membres décharnés.",
      "Lorsque vous êtes sûr de les avoir bien semés, vous vous arrêtez un moment et faites appel à votre Grande Maîtrise du Nexus pour tenter de localiser vos armes et votre équipement. En vous laissant guider par votre instinct Kaï, vous vous engagez dans un passage adjacent.",
      "Le sinueux corridor verglacé vous entraîne dans les entrailles de l'immense vaisseau. Vous traversez un labyrinthe de cales vides aux parois renforcées de poutrelles de cristal et de chambres aux plafonds surbaissés qui, en dépit de l'atmosphère glaciale, sont imprégnées d'une odeur de mort et de pourriture.",
      "Vos recherches aboutissent devant une imposante porte grise gardée par deux morts vivants Drakkarims armés de lances. Le bruit et les mouvements du navire ont cessé et tous vos sens vous indiquent que la traversée a pris fin. Tapi derrière une cloison de cristal courbe, vous surveillez les gardes en réfléchissant au meilleur moyen de vous en débarrasser.",
      "Si vous décidez de les attaquer à mains nues, rendez-vous au 243.",
      "Si vous préférez les éliminer en faisant appel à votre maîtrise des Grandes Disciplines Psychiques, rendez-vous au 336."
    ],
    "choices": [
      {
        "text": "Si vous décidez de les attaquer à mains nues, rendez-vous au 243.",
        "targetId": "243"
      },
      {
        "text": "Si vous préférez les éliminer en faisant appel à votre maîtrise des Grandes Disciplines Psychiques, rendez-vous au 336.",
        "targetId": "336"
      }
    ]
  },
  "223": {
    "id": "223",
    "text": [
      "Convaincu d'avoir affaire à des êtres dotés de pouvoirs psychiques, vous vous hâtez de faire appel à votre Grande Maîtrise Kaï afin d'ériger autour de votre esprit une forteresse mentale. Sage précaution... A peine avez-vous achevé de mettre en place ce rempart invisible que les fumerolles fusent à travers la chambre pour vous cerner d'un cercle fuligineux.",
      "Elles tournoient, de plus en plus vite, quand une formidable vague d'assaut psychique déferle sur votre esprit. Mais cette terrible salve s'écrase contre les murailles de votre forteresse mentale avant de se dissoudre, sans vous avoir causé le moindre mal, dans un éblouissant jaillissement de lumière.",
      "Rendez-vous au 283."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 283.",
        "targetId": "283"
      }
    ]
  },
  "224": {
    "id": "224",
    "text": [
      "Prenant la barre du navire, vous négociez avec précision l'étroite sortie du port avant de mettre le cap sur le large, fendant les eaux tumultueuses de la mer de Tozaz. Moins d'une heure après midi, la longue nuit hivernale de ces latitudes nordiques est déjà tombée.",
      "Vous tenez ferme le gouvernail pour manœuvrer le bâtiment en scrutant l'obscurité glaciale, secondé par six soldats Lenciens qui se sont tous portés volontaires pour cette mission périlleuse. Lanza leur a donné l'ordre de vous débarquer sur la côte d'Ixia et de vous attendre au mouillage pendant sept jours, pas un de plus...",
      "Après avoir parcouru dix milles marins, vous confiez la barre à un homme d'équipage et vous vous couchez sur le sol de la timonerie pour faire un somme. Mais à peine avez- vous eu le temps de fermer les yeux que le navire se met à bondir et à ruer comme un étalon sauvage.",
      "Vous venez d'entrer droit dans un saesha, une forme de tempête aussi soudaine que violente dont la traîtresse mer de Tozaz est coutumière. Battu par de furieuses bourrasques de grêle, gémissant sous les coups de boutoir des déferlantes glacées, le navire tangue et roule follement dans un chaos de vagues déchaînées, poursuivi par le fracas du tonnerre.",
      "Après ce qui semble être une éternité, vous émergez enfin de la tempête, une tempête que bien peu de bateaux auraient été capables d'affronter. Dans la grisaille de l'aube apparaît un nouveau danger : des milliers d'icebergs ! Une sourde angoisse s'empare de vous à la vue de cette immensité glacée, car elle pourrait fort bien se révéler infranchissable.",
      "Si vous décidez de reprendre la barre du navire à l'approche du champ d'icebergs, rendez-vous au 51.",
      "Si vous préférez aller vous poster à l'étrave pour piloter le timonier dans le dédale des glaces flottantes, rendez-vous au 189."
    ],
    "choices": [
      {
        "text": "Si vous décidez de reprendre la barre du navire à l'approche du champ d'icebergs, rendez-vous au 51.",
        "targetId": "51"
      },
      {
        "text": "Si vous préférez aller vous poster à l'étrave pour piloter le timonier dans le dédale des glaces flottantes, rendez-vous au 189.",
        "targetId": "189"
      }
    ]
  },
  "225": {
    "id": "225",
    "text": [
      "Des blocs de pierre et de cristal pleuvent autour de vous, et le palier sur lequel vous vous tenez s'effrite de toutes parts, menaçant de s'effondrer à tout instant. Vous devez agir sans perdre une seconde si vous ne voulez pas être précipité dans le vide !",
      "Si vous avez une Corde (huilée ou non), rendez-vous au 246.",
      "Sinon, rendez-vous au 344."
    ],
    "choices": [
      {
        "text": "si vous ne voulez pas être précipité dans le vide ! Si vous avez une Corde (huilée ou non), rendez-vous au 246.",
        "targetId": "246"
      },
      {
        "text": "Sinon, rendez-vous au 344.",
        "targetId": "344"
      }
    ]
  },
  "226": {
    "id": "226",
    "text": [
      "Vous retirez du râtelier une des épées de cristal pour l'examiner de plus près. C'est une fine lame, mais elle n'a visiblement pas été créée par des mains humaines. Aussi la remettez-vous en place avant de quitter la pièce et de remonter l'escalier jusqu'à la caverne de glace.",
      "Tapi dans l'ombre au sommet des marches, vous attendez la première occasion de vous faufiler par le passage voûté creusé dans la paroi.",
      "Rendez-vous au 7."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 7.",
        "targetId": "7"
      }
    ]
  },
  "227": {
    "id": "227",
    "text": [
      "La douzaine d'horribles volatiles qui escortent le Seigneur Démon clopinant semblent le presser vers la Porte d'Ombre. Vous devez agir... et vite ! Faute de quoi, si Tagazin parvient à franchir avant vous le passage intersidéral, les Monstres des Laves le refermeront et vous resterez prisonnier de ce monde diabolique.",
      "Ce risque-là, vous ne pouvez pas vous permettre de le courir ! Dégainant votre arme, vous vous lancez à la poursuite du Seigneur Démon, bien décidé à l'empêcher d'atteindre la Porte d'Ombre vivant.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 347.",
      "Sinon, rendez-vous au 38."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 347.",
        "targetId": "347"
      },
      {
        "text": "Sinon, rendez-vous au 38.",
        "targetId": "38"
      }
    ]
  },
  "228": {
    "id": "228",
    "text": [
      "Le crâne fracassé par votre dernier coup, le Ziog s'effondre sur le pont avant de se ratatiner et de s'effriter comme un vieux parchemin. A ce spectacle, les squelettes rassemblés sur le quai poussent une clameur inhumaine et se ruent sur la passerelle d'embarquement, ivres de vengeance.",
      "D'un geste foudroyant, vous abattez votre épée sur la planche, la fendant en deux tronçons qui s'affaissent aussitôt, expédiant la horde de vos assaillants dans l'eau glacée du port.",
      "Si vous voulez maintenant examiner les restes du Ziog, rendez-vous au 88.",
      "Si cela ne vous dit rien, rendez-vous au 329."
    ],
    "choices": [
      {
        "text": "Si vous voulez maintenant examiner les restes du Ziog, rendez-vous au 88.",
        "targetId": "88"
      },
      {
        "text": "rendez-vous au 329.",
        "targetId": "329"
      }
    ]
  },
  "229": {
    "id": "229",
    "text": [
      "Au centre du toit, à demi recouverte par des plantes grimpantes armées de longues épines, une ouverture donne accès à une volée de marches couvertes de vase. Penché au-dessus de l'escalier, vous tentez de percer la pénombre quand vos sens Kaï détectent soudain un danger tout proche.",
      "Faisant volte-face, vous voyez une horde de monstruosités déferler le long du talus moussu que vous venez de quitter. Ces choses informes, boursouflées, à la chair cadavérique, jouent des coudes et des tentacules avec des guerriers squelettes aux os noircis et rongés de pourriture dans un affreux concert de halètements et de grognements inintelligibles.",
      "Votre sang se glace devant cette vision d'épouvanté car, à l'évidence, la proie que traque ce régiment de créatures du Chaos n'est autre que vous !",
      "Si vous voulez fuir en dévalant l'escalier qui plonge dans les entrailles du bâtiment englouti, rendez-vous au 259.",
      "Si vous décidez d'affronter cette horde d'abominations, rendez-vous au 145."
    ],
    "choices": [
      {
        "text": "Si vous voulez fuir en dévalant l'escalier qui plonge dans les entrailles du bâtiment englouti, rendez-vous au 259.",
        "targetId": "259"
      },
      {
        "text": "Si vous décidez d'affronter cette horde d'abominations, rendez-vous au 145.",
        "targetId": "145"
      }
    ]
  },
  "230": {
    "id": "230",
    "text": [
      "Tout en courant, vous invoquez la formule du sortilège d'Energie. Dans l'instant qui suit, votre corps fourbu déborde de vitalité. Vous fendez l'air trois fois plus vite que d'habitude, pour arriver en quelques secondes sur les talons de Tagazin, l'arme à la main, prêt à le frapper au passage.",
      "Voyant qu'il est incapable de vous distancer, le Seigneur Démon freine des quatre fers et fait brutalement volte-face pour vous barrer la route. Bien qu'affaibli, cet être maléfique n'a rien perdu de sa fourberie et, dès que vous arrivez à sa portée, il vous saute à la gorge d'un bond vicieux, vous jetant sur le sol.",
      "SEIGNEUR DÉMON TAGAZIN (blessé) HABILETÉ: 45 ENDURANCE: 45 Ne livrez qu'un seul Assaut.",
      "Si Tagazin trouve la mort au cours de cet unique Assaut, rendez-vous au 33.",
      "Sinon, rendez-vous au 301."
    ],
    "choices": [
      {
        "text": "rendez-vous au 33.",
        "targetId": "33"
      },
      {
        "text": "Sinon, rendez-vous au 301.",
        "targetId": "301"
      }
    ],
    "combat": {
      "name": "ENNEMI",
      "combatSkill": 45,
      "endurance": 45,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "231": {
    "id": "231",
    "text": [
      "Au terme d'un souple roulé-boulé, vous atterrissez sous le rocher une petite seconde avant que la langue de l'avalanche s'abatte sur vous. Des tonnes de neige, de glace et de roc tombent sur votre abri, dont une partie se brise sous la violence du choc et s'effondre sur vos pieds. (Vous perdez 5 points d'ENDURANCE.) Lorsque l'effroyable grondement de l'avalanche cesse enfin, vous sentez, non sans une certaine surprise, que vous êtes toujours vivant.",
      "Vivant, certes, mais enseveli sous des mètres et des mètres de neige que vous devez maintenant creuser patiemment pour vous libérer de cette tombe glacée.",
      "Rendez-vous au 179."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 179.",
        "targetId": "179"
      }
    ],
    "damage": 5
  },
  "232": {
    "id": "232",
    "text": [
      "Vous heurtez le sol avec une brutalité qui vous laisse le souffle coupé, à demi assommé.",
      "Si vous survivez à cette chute, qui vous inflige une perte de 5 points d'ENDURANCE, rendez-vous au 36."
    ],
    "choices": [
      {
        "text": "Si vous survivez à cette chute, qui vous inflige une perte de 5 points d'ENDURANCE, rendez-vous au 36.",
        "targetId": "36"
      }
    ]
  },
  "233": {
    "id": "233",
    "text": [
      "Vous vous détournez de la fenêtre pour vous mêler à la conversation des deux capitaines quand retentit soudain l'écho assourdi d'un glas sinistre. A ce son, le visage de Lanza se fige de stupeur. - Par tous les dieux, c'est la cloche d'alarme ! s'écrie-t-il.",
      "Nous sommes attaqués !",
      "Rendez-vous au 181."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 181.",
        "targetId": "181"
      }
    ]
  },
  "234": {
    "id": "234",
    "text": [
      "Vous lancez une terrible décharge de Foudroiement Psychique contre le trio qui, à votre consternation, ne s'en trouve pas le moins du monde affecté ! Une des créatures émet alors un son étrange, une espèce de hululement qui doit être l'expression d'un ricanement moqueur.",
      "Puis elle tire des plis noirs de sa robe moisie un bâton d'argent qu'elle braque dans votre direction. Vous avez le réflexe de vous jeter au sol à l'instant même où une boule d'énergie fuse de l'extrémité de l'arme ensorcelée, dans le but avoué de vous arracher la tête !",
      "Dans un sifflement strident, le projectile ardent passe au-dessus de vous avant d'aller exploser contre un lointain pilier de cristal. Alors que vous vous relevez, les trois horreurs foncent sur vous en glissant avec légèreté sur la neige gelée.",
      "Si vous voulez tenter d'échapper à ces hideux assaillants, rendez-vous au 256.",
      "Si vous préférez faire face et combattre, rendez-vous au 35."
    ],
    "choices": [
      {
        "text": "Si vous voulez tenter d'échapper à ces hideux assaillants, rendez-vous au 256.",
        "targetId": "256"
      },
      {
        "text": "Si vous préférez faire face et combattre, rendez-vous au 35.",
        "targetId": "35"
      }
    ]
  },
  "235": {
    "id": "235",
    "text": [
      "Au prix d'un effort colossal, vous parvenez à vous arracher aux griffes des monstres et vous vous engouffrez dans l'escalier. Poursuivi par les hurlements incohérents des créatures du Chaos, vous dévalez les marches couvertes de vase, plongeant dans les profondeurs ténébreuses de l'édifice englouti.",
      "Derrière vous, vos ennemis poussent des cris... de joie ! Comprenant brusquement que vous courez à votre perte, vous tentez désespérément de stopper votre course. Mais il est déjà trop tard ! Lorsque vous vous apercevez que l'escalier s'achève au bord d'une fosse, le sol boueux se dérobe sous vos pieds et vous plongez la tête la première dans les ténèbres d'un puits sans fond.",
      "Rendez-vous au 59."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 59.",
        "targetId": "59"
      }
    ]
  },
  "236": {
    "id": "236",
    "text": [
      "L'énorme vaisseau ennemi s'avance inexorablement sur votre navire. Dans l'instant qui suit, avec une rapidité stupéfiante, votre bâtiment tout entier est littéralement avalé par le prétendu monstre et disparaît entre ses mâchoires ! La gueule du gigantesque navire se referme sur votre passage et vous vous retrouvez enfermé dans ses entrailles où règne un silence de mort.",
      "Puis la lugubre pénombre verdâtre qui vous entoure se met à résonner de bouillonnements d'eau et de forts bruits de succion. Le cœur battant, vous dégainez votre arme et, gagnant le bastingage, vous vous penchez par-dessus bord. Vous voyez alors que le niveau de l'eau qui vous entoure baisse rapidement, laissant votre navire reposer progressivement, comme dans une cale sèche, sur un long berceau en forme de V.",
      "Le bouillonnement finit par cesser, pour être aussitôt remplacé par un autre bruit : le lent grincement d'un vaste portail qui s'ouvre. Des flots de lumière vive inondent alors votre pont, jaillissant d'un large passage voûté révélé par un panneau coulissant près de votre étrave tribord.",
      "Vous voyez se découper dans la lumière une centaine de silhouettes de taille humaine armées de lances et d'épées. Une effrayante clameur de rage monte de leurs rangs lorsqu'elles se rendent compte que votre navire est occupé par des êtres vivants, et elles se ruent à l'abordage.",
      "Alors que les premières créatures, sautant de l'arche, se laissent tomber sur le pont, vous découvrez ce qu'elles sont : des Drakkarims, devenus les esclaves morts vivants du Seigneur de la Mort d'Ixia. Une première vague de zombies Drakkarims se rue à l'attaque, et vous criez aux Lenciens d'empoigner leurs armes.",
      "Si vous décidez de faire face et de combattre, rendez-vous au 260.",
      "Si vous préférez tenter d'échapper à vos agresseurs, rendez-vous au 163."
    ],
    "choices": [
      {
        "text": "Si vous décidez de faire face et de combattre, rendez-vous au 260.",
        "targetId": "260"
      },
      {
        "text": "Si vous préférez tenter d'échapper à vos agresseurs, rendez-vous au 163.",
        "targetId": "163"
      }
    ]
  },
  "237": {
    "id": "237",
    "text": [
      "Empoignant votre arme, vous vous jetez tel un tigre sur ces horreurs chitineuses... TIGROULES HABILETÉ: 51 ENDURANCE: 38 Ces créatures sont insensibles à toutes les formes d'attaque psychique, hormis à la Grande Discipline du Foudroiement Psychique et à la Déflagration Psychique.",
      "Si vous sortez vainqueur de ce combat, rendez-vous au 149."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 149.",
        "targetId": "149"
      }
    ],
    "combat": {
      "name": "TIGROULES",
      "combatSkill": 51,
      "endurance": 38,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "238": {
    "id": "238",
    "text": [
      "A l'instant où vous tirez du fourreau votre lame divine, le corps de vos assaillants subit une transformation aussi soudaine que répugnante. Sous l'influence bénéfique du Glaive de Sommer qui les inonde de son aveuglante lumière d'or, ils implosent dans un concert d'infects bruits de succion sans même avoir le temps de laisser échapper un râle d'agonie avant que leurs restes s'effondrent sur le sol pour tomber en poussière.",
      "Rengainant l'Epée du Soleil, vous vous tournez vers le passage que gardaient ces créatures maudites, et votre sang se glace aussitôt dans vos veines. Devant vous, à quelques pas, se découpe l'effroyable silhouette du Seigneur de la Mort. Ixiataaga, en personne, brandit vers vous son bâton maléfique.",
      "Vous comprenez alors, mais trop tard, qu'en dévoilant le Glaive de Sommer, vous lui avez révélé votre pouvoir, une menace qu'il doit à tout prix anéantir. Pétrifié par sa soudaine apparition, vous n'avez pas le temps de réagir. Un aveuglant éclair blanc jaillit de la pointe du Bâton de Mort et, dans la seconde qui suit, une douleur atroce déchire chaque atome de votre corps.",
      "Puis une ultime explosion engloutit tous vos sens, vous projetant dans les ténèbres. Votre vie et votre quête s'achèvent ici."
    ],
    "choices": []
  },
  "239": {
    "id": "239",
    "text": [
      "Priant le dieu Kaï de vous donner la force de vaincre, vous vous élancez l'arme haute à la rencontre des guerriers squelettes. IXIANS MORTS VIVANTS HABILETÉ: 48 ENDURANCE: 55 Vous devez livrer ce combat jusqu'au bout, sans possibilité de fuite.",
      "Si vous êtes victorieux, rendez-vous au 152."
    ],
    "choices": [
      {
        "text": "Si vous êtes victorieux, rendez-vous au 152.",
        "targetId": "152"
      }
    ],
    "combat": {
      "name": "IXIANS MORTS VIVANTS",
      "combatSkill": 48,
      "endurance": 55,
      "mindblastImmune": false,
      "undead": true
    }
  },
  "240": {
    "id": "240",
    "text": [
      "Vous avancez avec précaution le long du pont verglacé vers les marches qui permettent d'accéder à la haute dunette du vaisseau ennemi. Chaque pouce de son bordé est gravé d'étranges et complexes arabesques, et d'archaïques symboles ornent les cadres métalliques de ses sabords.",
      "Faisant appel à votre Grande Maîtrise Kaï, vous devinez que ce navire n'a pas été construit par les créatures inhumaines qui composaient son équipage, mais qu'il est l'œuvre ancienne d'une race de marins dont le souvenir s'est depuis longtemps dissous dans les brumes du temps.",
      "Un examen plus détaillé de ses structures vous révèle que le vaisseau est vieux de... plus de quinze mille ans ! Dans la timonerie, au centre du pont arrière, vous découvrez une vaste sphère en verre fixée sur un pied taillé dans une étincelante pierre noire.",
      "La sphère émet un sourd bourdonnement et luit d'un faible éclat verdâtre. Elle est reliée à la barre à roue du gouvernail par un réseau de tubes d'argent et de torons de métal tressé. Après avoir étudié l'ensemble du dispositif et ses commandes avec soin, vous acquérez la certitude d'être en mesure de gouverner ce navire.",
      "Prarg vous rejoint sur la dunette et vous annonce qu'après avoir fouillé avec la plus extrême vigilance le gaillard d'avant, les ponts inférieurs et les cales, il peut vous assurer qu'aucun ennemi n'est resté caché à bord. - Fichtre ! ajoute-t-il en découvrant d'un œil médusé les étranges équipements du vaisseau.",
      "Y a pas de doute, Grand Maître, c'est un drôle de bateau ! Vous êtes bien sûr qu'il pourra vous amener jusqu'à Ixia ? - J'en suis sûr, répondez-vous avec un sourire en coin. Et je suis même certain qu'il sera moins risqué de traverser la mer de Tozaz à son bord que sur n'importe quel brise-glace portant le pavillon de Lencia.",
      "Tournant son regard vers les débris qui flottent au-dessus du brise-glace coulé, Prarg vous dit en soupirant : -J'espère que vous avez raison, Grand Maître. J'espère sincèrement que vous avez raison.",
      "Rendez-vous au 18."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 18.",
        "targetId": "18"
      }
    ]
  },
  "241": {
    "id": "241",
    "text": [
      "Vous utilisez vos facultés Kaï pour augmenter votre acuité visuelle, mais les volatiles sont encore trop éloignés pour vous permettre de les distinguer clairement. Tout ce que vous pouvez constater, c'est qu'ils descendent de plus en plus vite. Vous accélérez votre course, plus décidé que jamais à atteindre la Porte d'Ombre avant que Tagazin ou ses nouveaux renforts puissent vous en empêcher.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous avez atteint le rang de Grand Maître Principal, ou un rang supérieur, rendez-vous au 53.",
      "Si vous ne pouvez remplir ces conditions, rendez-vous au 185."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous avez atteint le rang de Grand Maître Principal, ou un rang supérieur, rendez-vous au 53.",
        "targetId": "53"
      },
      {
        "text": "Si vous ne pouvez remplir ces conditions, rendez-vous au 185.",
        "targetId": "185"
      }
    ]
  },
  "242": {
    "id": "242",
    "text": [
      "Adressant une brève prière à la déesse Ishir pour le salut de votre âme, vous vous élancez, l'arme haute, à l'assaut des guerriers squelettes. IXIANS MORTS VIVANTS HABILETÉ: 48 ENDURANCE: 55 Vous devez livrer ce combat jusqu'au bout, sans possibilité de fuite.",
      "Si vous êtes victorieux, rendez-vous au 152."
    ],
    "choices": [
      {
        "text": "Si vous êtes victorieux, rendez-vous au 152.",
        "targetId": "152"
      }
    ],
    "combat": {
      "name": "IXIANS MORTS VIVANTS",
      "combatSkill": 48,
      "endurance": 55,
      "mindblastImmune": false,
      "undead": true
    }
  },
  "243": {
    "id": "243",
    "text": [
      "Utilisant vos pouvoirs Kaï de Dissimulation, vous vous approchez à pas de loup des deux gardes morts vivants. Vous êtes parvenu à moins de trois mètres de la grande porte grise quand ils vous aperçoivent. Réagissant avec une stupéfiante vivacité, ils se ruent sur vous. index DRAKKARIMS MORTS index VIVANTS HABILETÉ:"
    ],
    "choices": []
  },
  "244": {
    "id": "244",
    "text": [
      "D'un mouvement foudroyant, vous empoignez votre arc, encochez une flèche et tirez sur l'insecte le plus proche. Vous avez visé son œil mais, au dernier moment, la créature baisse la tête et le trait la manque de quelques centimètres. Jurant entre vos dents, vous voyez votre trait poursuivre sa course inutile.",
      "Il s'écrase contre le mur du fond quand, voyant que vous n'avez plus le temps de tirer une deuxième flèche, vous lâchez votre arc et dégainez une arme de poing.",
      "Rendez-vous au 261."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 261.",
        "targetId": "261"
      }
    ]
  },
  "245": {
    "id": "245",
    "text": [
      "Vous mettez en œuvre vos défenses mentales pour protéger votre esprit des radiations maléfiques qui émanent de la Tour de Cristal. Mais vos pouvoirs psychiques ne parviennent pas à vous en préserver complètement et vous perdez 5 points d'ENDURANCE.",
      "Rendez-vous au 330."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 330.",
        "targetId": "330"
      }
    ],
    "damage": 5
  },
  "246": {
    "id": "246",
    "text": [
      "En toute hâte, vous sortez votre corde de votre sac pour la nouer autour d'un pilier effondré. Malheureusement, elle est un peu trop courte, et vous vous retrouvez bientôt suspendu à son extrémité, six mètres au-dessus du sol jonché de débris. A cet instant, vous sentez une brusque secousse parcourir la corde, et vous comprenez que le pilier auquel vous l'avez attachée est sur le point de tomber dans le vide !",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 2 au chiffre obtenu.",
      "Si le résultat est égal à 0, rendez-vous au 5.",
      "S'il est égal à 1 ou 2, rendez-vous au 126.",
      "S'il est supérieur ou égal à 3, rendez-vous au 276."
    ],
    "choices": [
      {
        "text": "rendez-vous au 5.",
        "targetId": "5"
      },
      {
        "text": "rendez-vous au 126.",
        "targetId": "126"
      },
      {
        "text": "rendez-vous au 276.",
        "targetId": "276"
      }
    ]
  },
  "247": {
    "id": "247",
    "text": [
      "Vous battez vivement en retraite et plongez dans un escalier qui descend dans la cale du navire. Vous entendez au-dessus de vous les cris des marins Lenciens qui luttent au corps à corps avec les Drakkarims morts vivants. Puis un claquement de bottes ferrées résonnant sur les marches vous prévient que les Drakkarims n'ont pas renoncé à vous poursuivre, et vous vous mettez à fouiller la cale d'un œil frénétique à la recherche d'une cachette.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez- vous au 208.",
      "Si ce n'est pas le cas, rendez-vous au 26."
    ],
    "choices": [
      {
        "text": "rendez-vous au 26.",
        "targetId": "26"
      }
    ]
  },
  "248": {
    "id": "248",
    "text": [
      "Hochant la tête, le Roi Sarnac se tourne vers Ardan et lui demande : - Seigneur, peut-être avez-vous quelque chose à dire pour apaiser les craintes du Grand Maître Loup Solitaire ? - Assurément, sire, acquiesce lAncien Mage avant de s'adresser à vous.",
      "Monseigneur, ainsi que vous l'a sans doute déjà appris le Maître de Guilde Banedon, la côte d'Ixia est une région infernale. Le brise-glace pourra rester mouillé dans ses parages pendant sept jours. Si, passé ce délai, vous n'êtes pas revenu, il sera obligé de regagner l'île d'Azgad.",
      "Mais cela ne doit pas pour autant vous causer d'excessive inquiétude, Grand Maître. Car, s'il existe en ce moment un grand déséquilibre entre les forces du Bien et du Mal sur notre monde, il est certain qu'il sera aboli à la seconde même où vous détruirez le Seigneur de la Mort.",
      "Dès que l'équilibre aura été rétabli, mon frère Rimoah et moi-même le saurons. Et s'il vous faut plus d'une semaine pour accomplir votre quête, le brise-glace retournera vous chercher à Xaagon.",
      "Rendez-vous au 140."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 140.",
        "targetId": "140"
      }
    ]
  },
  "249": {
    "id": "249",
    "text": [
      "La grande arche franchie, vous pénétrez dans une vaste et haute antichambre. D'un regard circulaire, vous suivez le mur de cette salle immense contre lequel reposent, à intervalles réguliers, immobiles, des formes humaines qui sembleraient s'être assoupies durant leur tour de garde si la blancheur et la tension cadavériques de leur peau ne le démentaient.",
      "A l'opposé de l'entrée, tout au bout de la salle, vous voyez une autre arche voûtée de moindre taille, devant laquelle s'élève un scintillant rideau lumineux. Vos sens Kaï sont formels : ce passage permet d'accéder aux étages supérieurs de la tour et au repaire du Seigneur de la Mort.",
      "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 333.",
      "Sinon, rendez-vous au 17."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 333.",
        "targetId": "333",
        "requiredDiscipline": "Intuition"
      },
      {
        "text": "Sinon, rendez-vous au 17.",
        "targetId": "17"
      }
    ]
  },
  "250": {
    "id": "250",
    "text": [
      "Du haut d'un éperon rocheux offrant une vue panoramique, vous contemplez la chute de Xaagon. L'un après l'autre, ses murailles, ses édifices et ses Tours de Cristal s'effondrent. Lorsque la dernière pierre de la cité est tombée, les cieux noirs s'éclaircissent et les furieuses tempêtes électriques s'apaisent.",
      "Pour la première fois depuis dix mille ans, le soleil baigne enfin les terres gelées d'Ixia de sa chaleur bénéfique. Ragaillardi par le succès de votre mission, vous vous remettez en marche en suivant, en sens inverse, le chemin que vous aviez pris à travers les montagnes depuis les cavernes de glace de la côte sud.",
      "Rendez-vous au 162."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 162.",
        "targetId": "162"
      }
    ]
  },
  "251": {
    "id": "251",
    "text": [
      "Vous faites pivoter la baliste et tirez sur le levier de la détente. Le lourd projectile de fer fend l'air en sifflant, filant droit vers la grande sphère de verre. Mais, alors qu'il n'est plus qu'à quelques mètres de sa cible, il percute brutalement une meute de morts vivants sortis de la timonerie.",
      "Fauchant leurs rangs serrés, l'énorme trait fracasse sur son passage une vingtaine de squelettes et, sous le choc, dévie de son objectif pour achever sa course dans le pont, laissant la sphère intacte. Avant que Prarg ait eu le temps de recharger la baliste, un scintillant panneau métallique coulisse à travers le pont et vient masquer le globe de verre. - Ça ne sert plus à rien ! hurlez-vous dans l'oreille de Prarg.",
      "Il nous faut quelque chose de plus fort qu'une baliste pour repousser cette noire multitude. - Regardez, Grand Maître ! interrompt Prarg en blêmissant, un doigt tendu vers le brise-glace à bord duquel les morts vivants commencent à déferler, visiblement décidés à le couler. - Restez-ici, Prarg, et couvrez-moi avec la baliste ! hurlez-vous en vous précipitant vers l'escalier.",
      "Il faut les arrêter !",
      "Rendez-vous au 310."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 310.",
        "targetId": "310"
      }
    ]
  },
  "252": {
    "id": "252",
    "text": [
      "Frappé de plein fouet par votre coup, le corps de Taga-zin explose en une myriade de fragments gelés qui vont rebondir sur le sol comme une cascade de grêle opaque. Alors que vous vous écartez de ces restes tintinnabulants, vous levez les yeux vers le ciel pour voir la seconde vague de Monstres des Laves émerger des nuages en poussant des cris perçants.",
      "Stimulé par cette soudaine vision, vous prenez vos jambes à votre cou. Lancé à pleine vitesse, vous franchissez tel l'éclair les derniers mètres qui vous séparent de la Porte d'Ombre et, avant que le premier Monstre des Laves ait pu vous barrer la route, vous plongez la tête la première dans son noir tourbillon.",
      "Rendez-vous au 200."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 200.",
        "targetId": "200"
      }
    ]
  },
  "253": {
    "id": "253",
    "text": [
      "Vous rentrez la tête dans les épaules en resserrant votre manteau autour de votre corps transi. Pour atteindre la grotte, vous devez maintenant grimper une pente verglacée. Vous n'êtes plus qu'à une dizaine de mètres de l'entrée du refuge convoité quand, dans un terrible craquement, un éclair tombe du ciel pour vous frapper dans le dos.",
      "Le choc vous projette dans la neige, où vous tombez à plat ventre.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse et si vous avez atteint le rang de Grand Maître Eminent, ou un rang supérieur, rendez-vous au 312.",
      "Si vous ne pouvez satisfaire à ces deux conditions, rendez-vous au 184."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse et si vous avez atteint le rang de Grand Maître Eminent, ou un rang supérieur, rendez-vous au 312.",
        "targetId": "312",
        "requiredDiscipline": "Chasse"
      },
      {
        "text": "Si vous ne pouvez satisfaire à ces deux conditions, rendez-vous au 184.",
        "targetId": "184"
      }
    ]
  },
  "254": {
    "id": "254",
    "text": [
      "— Arrière, démon maudit ! tonnez-vous d'une voix de commandement. Mais Tagazin répond à votre ordre par un rictus de dédain en continuant d'avancer. Alors qu'il s'approche, vous remarquez, la gorge serrée, les longues griffes aiguisées comme des coutelas qui saillent de ses pattes glabres, prêtes à vous dépecer.",
      "Tout en empoignant votre arme, il vous vient à l'esprit d'utiliser vos pouvoirs psychiques pour devancer l'attaque de cet être redoutable.",
      "Si vous maîtrisez la Grande Discipline du Foudroiement Psychique et si vous avez atteint le rang de Grand Maître Mentor, ou un rang supérieur, rendez-vous au 123.",
      "Si vous maîtrisez cette Grande Discipline, sans avoir encore atteint le rang requis, rendez-vous au 216.",
      "Si vous ne maîtrisez pas la Grande Discipline du Foudroiement Psychique, ou si vous décidez de ne pas l'utiliser, rendez-vous au 294."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Foudroiement Psychique et si vous avez atteint le rang de Grand Maître Mentor, ou un rang supérieur, rendez-vous au 123.",
        "targetId": "123"
      },
      {
        "text": "Si vous maîtrisez cette Grande Discipline, sans avoir encore atteint le rang requis, rendez-vous au 216.",
        "targetId": "216"
      },
      {
        "text": "Si vous ne maîtrisez pas la Grande Discipline du Foudroiement Psychique, ou si vous décidez de ne pas l'utiliser, rendez-vous au 294.",
        "targetId": "294"
      }
    ]
  },
  "255": {
    "id": "255",
    "text": [
      "Vous gouvernez le navire avec prudence à travers un labyrinthe d'étroits chenaux qui offrent un passage incertain à travers le traître chaos du champ d'icebergs. Les paumes baignées de sueur, vous étreignez avec nervosité les poignées de la barre à roue, la manœuvrant à petits gestes précis en réponse aux signaux du marin posté à la pointe de l'étrave.",
      "Régulièrement, votre vision est occultée par des bourrasques de neige poudreuse qui s'abattent des crêtes des falaises de glace et balaient le pont du navire. Pendant un moment, un tourbillon plus violent que les autres vous fait totalement perdre de vue votre guide, vous obligeant à vous fier à vos seuls sens Kaï pour gouverner le navire.",
      "Soudain, le hurlement incessant du vent se double d'un grincement déchirant. La coque vient de heurter un banc de glace immergé ! Sous la violence du choc, le navire roule brutalement sur bâbord et vous allez violemment donner de la tête contre la cloison de la timonerie.",
      "Vous perdez 2 points d'ENDURANCE.",
      "Rendez-vous au 302."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 302.",
        "targetId": "302"
      }
    ],
    "damage": 2
  },
  "256": {
    "id": "256",
    "text": [
      "Vous bondissez par-dessus un mur et plongez derrière un monticule de décombres et de glace pour échapper à la vue des trois créatures. Vous retombez souplement, puis vous prenez vos jambes à votre cou tout en utilisant vos pouvoirs de Camouflage et de Protection Psychique pour augmenter vos chances de distancer vos poursuivants.",
      "Grâce à cette sage précaution, les noires abominations lancées à vos trousses ne tardent pas à perdre votre trace dans les ruines de Xaagon. Ren-dez-vous au 270."
    ],
    "choices": []
  },
  "257": {
    "id": "257",
    "text": [
      "Vous plongez de côté pour esquiver la charge du Seigneur Démon, mais pas assez vite ! Une douleur atroce vous déchire les entrailles à l'instant où la pointe de son heaume vous transperce de part en part. Puis une aveuglante explosion engloutit vos sens, soufflant votre ultime étincelle de conscience.",
      "C'est ici, dans l'Univers des Ténèbres, que votre vie et votre quête rencontrent une fin tragique."
    ],
    "choices": []
  },
  "258": {
    "id": "258",
    "text": [
      "Immobile et silencieux, vous concentrez votre pouvoir psychique sur la serrure, déterminé à débloquer son mécanisme par la seule force de votre esprit. Au bout d'un temps qui vous semble interminable, votre patience est récompensée par un claquement sonore, et vous voyez avec soulagement la porte s'entrebâiller doucement.",
      "Poussant avec précaution son lourd battant verglacé, vous découvrez une sombre coursive déserte. Avant de quitter la cellule, vous faites à nouveau appel à votre Grande Maîtrise du Nexus pour essayer de localiser vos armes et votre équipement. Bien qu'ils se trouvent très loin, vous parvenez à les détecter et, vous laissant guider vers eux par votre pouvoir, vous vous glissez dans la coursive.",
      "Le sinueux passage verglacé vous entraîne dans les entrailles de l'immense vaisseau. Vous traversez un labyrinthe de cales vides aux parois renforcées de poutrelles de cristal et de chambres aux plafonds surbaissés qui, en dépit de l'atmosphère glaciale, sont imprégnées d'une odeur de mort et de pourriture.",
      "Vos recherches aboutissent devant une imposante porte grise gardée par deux morts vivants Drakkarims armés de lances. Le bruit et les mouvements du navire ont désormais cessé et tous vos sens vous indiquent que la traversée a pris fin. Tapi derrière une cloison de cristal courbe, vous surveillez les gardes en réfléchissant au meilleur moyen de vous en débarrasser.",
      "Si vous décidez de les attaquer à mains nues, rendez-vous au 243.",
      "Si vous préférez les éliminer en faisant appel à votre maîtrise des Grandes Disciplines Psychiques, rendez-vous au 336."
    ],
    "choices": [
      {
        "text": "Si vous décidez de les attaquer à mains nues, rendez-vous au 243.",
        "targetId": "243"
      },
      {
        "text": "Si vous préférez les éliminer en faisant appel à votre maîtrise des Grandes Disciplines Psychiques, rendez-vous au 336.",
        "targetId": "336"
      }
    ]
  },
  "259": {
    "id": "259",
    "text": [
      "Poursuivi par les hurlements abominables des créatures du Chaos, vous dévalez les marches fangeuses quatre à quatre, plongeant dans les noires profondeurs du bâtiment englouti. Derrière vous, les monstres poussent des cris... de joie ! Comprenant subitement que vous courez vers votre perte, vous tentez désespérément de stopper votre course.",
      "Mais il est déjà trop tard ! Lorsque vous vous apercevez que l'escalier prend fin au bord d'une fosse, le sol boueux se dérobe sous vos pieds et vous plongez droit dans un puits ténébreux.",
      "Rendez-vous au 59."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 59.",
        "targetId": "59"
      }
    ]
  },
  "260": {
    "id": "260",
    "text": [
      "L'arme haute, vous vous ruez à la rencontre de la première ligne des Drakkarims grimaçants et vous frappez leur rang d'un ample moulinet, taillant dans leurs corps parcheminés et fracassant leurs os desséchés presque sans effort. Frappant à coups redoublés, vous tranchez les têtes et hachez les troncs avec l'écœurante sensation de plonger votre arme dans une infâme gelée poisseuse.",
      "Vous avez l'impression désagréable d'affronter une horde d'êtres désincarnés dont les membres putrides et racornis sont animés d'une force malsaine. La première ligne d'assaillants succombe sous vos coups, mais une deuxième vague vous assaille aussitôt, attaquant avec une fureur démente. index DRAKKARIMS MORTS index VIVANTS HABILETÉ:"
    ],
    "choices": []
  },
  "261": {
    "id": "261",
    "text": [
      "Les gigantesques insectes sont à moins d'un mètre de vous lorsque leurs carapaces chitineuses se hérissent de pointes acérées. Alors, la plus proche de vous, celle qui a échappé à votre flèche, émet une affreuse stridulation, lançant le signal de l'attaque.",
      "Aussitôt, d'un même mouvement, les six monstres se ruent à la curée.",
      "Si vous disposez du Glaive de Sommer, rendez- vous au 160.",
      "Sinon, rendez-vous au 43."
    ],
    "choices": [
      {
        "text": "Sinon, rendez-vous au 43.",
        "targetId": "43"
      }
    ]
  },
  "262": {
    "id": "262",
    "text": [
      "Votre pouvoir Kaï vous fait sentir que le bâton est prêt à cracher une nouvelle décharge d'énergie.",
      "Si vous avez le malheur de poser la main sur cette arme ensorcelée, vous serez foudroyé sur- le-champ ! Retenant votre geste, vous décidez de tenter le tout pour le tout. Vous foncez tête baissée sur les guerriers squelettes qui vous barrent le passage de la porte.",
      "Balayés par votre charge fulgurante, les morts vivants tombent à la renverse. Ils tentent de désenchevêtrer leurs membres décharnés pendant que vous prenez la poudre d'escampette dans le dédale des coursives obscures du vaisseau. Lorsque vous êtes sûr de les avoir semés, vous vous arrêtez un moment et faites appel à votre Grande Maîtrise du Nexus pour tenter de localiser vos armes et votre équipement.",
      "Guidé par votre instinct Kaï, vous vous engagez dans un passage adjacent. Le sinueux corridor verglacé vous entraîne dans les entrailles de l'immense vaisseau, vous faisant traverser un labyrinthe de cales vides aux parois renforcées de poutrelles de cristal et de chambres aux plafonds surbaissés qui, en dépit de l'atmosphère glaciale, sont imprégnées d'une odeur de mort et de pourriture.",
      "Vos recherches aboutissent devant une imposante porte grise gardée par deux morts vivants Drakkarims armés de lances. Le bruit et les mouvements du navire ont cessé, et tous vos sens vous indiquent que la traversée a pris fin. Tapi derrière une cloison de cristal courbe, vous surveillez les gardes en réfléchissant au meilleur moyen de vous en débarrasser.",
      "Si vous décidez de les attaquer à mains nues, rendez-vous au 243.",
      "Si vous préférez les éliminer en faisant appel à votre maîtrise des Grandes Disciplines Psychiques, rendez-vous au 336."
    ],
    "choices": [
      {
        "text": "Si vous décidez de les attaquer à mains nues, rendez-vous au 243.",
        "targetId": "243"
      },
      {
        "text": "Si vous préférez les éliminer en faisant appel à votre maîtrise des Grandes Disciplines Psychiques, rendez-vous au 336.",
        "targetId": "336"
      }
    ]
  },
  "263": {
    "id": "263",
    "text": [
      "Triomphant, vous expédiez les restes mutilés de vos hideux ennemis au fond du puits, les offrant en pâture à la vorace créature tapie dans la vase. Puis, sans un regard en arrière, vous vous hâtez de regagner le toit du bâtiment et vous vous élancez le long du talus moussu.",
      "Quelques minutes plus tard, vous atteignez un bosquet d'arbres enveloppés d'un brouillard opaque. Vous vous enfoncez dans ce bois sinistre pour y trouver des traces fraîches du passage de Tagazin. Les empreintes laissées par ses pattes griffues vous conduisent aussi sûrement qu'une route balisée sur les talons du Seigneur Démon.",
      "Redoublant d'ardeur, vous traversez un épais hallier de ronces bardées d'épines avant d'escalader une colline en pente douce. Parvenu sur la crête, vous découvrez un spectacle qui vous frappe de crainte !",
      "Rendez-vous au 150."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 150.",
        "targetId": "150"
      }
    ]
  },
  "264": {
    "id": "264",
    "text": [
      "Sur les talons du capitaine Lanza, vous jaillissez de la tour de guet pour vous engouffrer dans une étroite rue pavée qui descend vers le port. Tout en courant, il lâche des bordées de jurons et aboie des ordres furieux aux soldats qui s'enfuient du quai, mais ces hommes sont dans un tel état d'épouvante qu'ils restent sourds à ses commandements.",
      "Au détour de la rue, vous voyez le grand vaisseau noir accoster le quai dans une brutale embardée. Dans l'instant qui suit, une horde de guerriers squelettes sautent à terre et se lancent à la poursuite des Lenciens affolés. Leurs orbites vides rougeoient comme des braises infernales et ils hurlent comme une légion de démons déchaînés en pourchassant leurs proies désemparées.",
      "Avec votre aide, Lanza parvient, non sans mal, à rallier une douzaine de ses meilleurs hommes pour former une ligne de défense en travers de la rue. Bouclier contre bouclier, l'épée au poing, ils se préparent avec angoisse à subir l'assaut d'une première vague de morts vivants.",
      "Le pugnace capitaine ne ménage ni les imprécations ni les cris d'encouragement pour ranimer le courage de ses gaillards, visiblement tenaillés par la peur, et vous pouvez voir la sueur perler sur leurs visages blêmes en dépit du froid mordant. Dans une clameur d'outre-tombe, la masse des morts vivants percute la mince ligne de défense, et des dizaines de lames rouillées s'abattent en cliquetant sur le mur de boucliers.",
      "Les Lenciens ripostent avec fureur, fendant les os et fracassant les crânes, mais ils sont contraints de reculer pas à pas sous la poussée de la multitude squelettique. Soudain, surgissant du milieu des rangs ennemis, un être de cauchemar drapé dans les lambeaux moisis d'une longue robe noire perce le mur de boucliers.",
      "Un Lencien lui assène un féroce coup de taille, tranchant dans sa chair blanchâtre infestée de vers. Une noire humeur fétide jaillit de la plaie béante, aspergeant l'épée qui, à son contact, se désintègre en fumant comme sous une pluie d'acide. Quelques gouttes du sombre venin atteignent la main du guerrier.",
      "Le malheureux s'effondre en hurlant, serrant contre sa poitrine ce qui n'est plus qu'un moignon racorni. Poussant un hululement de triomphe, la créature bondit par-dessus son corps tordu de souffrance et, fixant ses yeux incandescents droit dans les vôtres, se précipite sur vous, avide de plonger ses longues griffes noires dans votre chair.",
      "KHERBALA HABILETÉ: 48 ENDURANCE: 45 Cet être mort vivant est insensible aux effets de la Grande Discipline du Foudroiement Psychique et de la Déflagration Psychique. Vous pouvez rompre le combat après trois Assauts en vous rendant au 76.",
      "Si vous êtes vainqueur, rendez-vous au 209."
    ],
    "choices": [
      {
        "text": "Si vous êtes vainqueur, rendez-vous au 209.",
        "targetId": "209"
      }
    ],
    "combat": {
      "name": "KHERBALA",
      "combatSkill": 48,
      "endurance": 45,
      "mindblastImmune": false,
      "undead": true
    }
  },
  "265": {
    "id": "265",
    "text": [
      "Plus vous approchez du rideau lumineux, plus les signaux d'avertissement de vos sens Kaï s'amplifient afin de vous prévenir du péril qui vous guette. Sourd à cette mise en garde, vous pénétrez d'un pas ferme dans la lumière... Aussitôt, une douleur atroce vous envahit de la tête aux pieds.",
      "Paralysé par la souffrance, vous sentez que votre corps échappe à la gravité et qu'il commence à s'élever irrésistiblement. Vous êtes au bord de l'inconscience et vous avez perdu 10 points d'ENDURANCE quand la lumière s'évanouit soudain. Lorsque vous reprenez le contrôle de vos muscles, vous êtes à genoux sur un sol de cristal noir dont la surface, polie comme un miroir, reflète l'image de votre visage marqué par la souffrance.",
      "Redressant avec peine votre tête douloureuse, vous voyez avec horreur trois créatures mortes vivantes accourir vers vous, venant d'un passage voûté. Elles brandissent des tridents aux pointes barbelées dans leurs cadavériques mains verdâtres, avides de vous embrocher contre le mur.",
      "Si vous possédez un arc et si vous désirez l'utiliser, rendez-vous au 287.",
      "Si vous maîtrisez la Grande Discipline du Foudroiement Psychique, rendez-vous au 96.",
      "Si vous ne disposez ni de l'un ni de l'autre, ou si vous ne voulez pas y faire appel, rendez-vous au 64."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et si vous désirez l'utiliser, rendez-vous au 287.",
        "targetId": "287"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline du Foudroiement Psychique, rendez-vous au 96.",
        "targetId": "96"
      },
      {
        "text": "Si vous ne disposez ni de l'un ni de l'autre, ou si vous ne voulez pas y faire appel, rendez-vous au 64.",
        "targetId": "64"
      }
    ]
  },
  "266": {
    "id": "266",
    "text": [
      "Luttant contre le blizzard, vous marchez dans une neige de plus en plus épaisse en direction des vestiges de la porte ouest de Xaagon. Les débris de ce qui fut jadis un majestueux portail émergent çà et là du blanc linceul qui entoure une arche avancée flanquée de deux hautes tours.",
      "Tout en progressant, vous distinguez fugitivement entre deux bourrasques les contours déjetés des édifices et des demeures de la cité en ruine. Vous percevez également un son, un sourd bourdonnement dont l'écho se mêle au hurlement du vent. Vous vous arrêtez un instant, tendant l'oreille pour découvrir aussitôt que ce bruit étrange provient de la Tour de Cristal en forme de spirale.",
      "Forçant le pas, vous avancez en redoublant de vigilance. Vous n'êtes plus qu'à quelques mètres de l'arche quand votre sixième sens Kaï vous alerte. Quelques instants plus tard, une vingtaine de Drakkarims morts vivants émergent du blizzard, marchant par deux vers l'entrée de la porte ouest.",
      "Avant qu'ils aient pu détecter votre présence, vous vous glissez dans un porche sombre qui s'ouvre dans l'avancée de la muraille. Puis vous escaladez une volée de marches qui vous conduisent dans les décombres d'un ancien corps de garde.",
      "Si vous maîtrisez la Grande Discipline de l'Exploration, rendez-vous au 202.",
      "Sinon, rendez-vous au 107."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Exploration, rendez-vous au 202.",
        "targetId": "202",
        "requiredDiscipline": "Exploration"
      },
      {
        "text": "Sinon, rendez-vous au 107.",
        "targetId": "107"
      }
    ]
  },
  "267": {
    "id": "267",
    "text": [
      "A plusieurs reprises, il s'en faut de quelques centimètres qu'un mort vivant Drakkarim ne découvre votre cachette. Mais votre pouvoir Magnakaï vous permet d'échapper à la fouille. Tandis que vous attendez patiemment qu'ils sortent de la cale, vos pensées se tournent vers votre équipage Lencien.",
      "Au-dessus de vous, le pont ne résonne plus d'aucun bruit de bataille, et vous redoutez que vos matelots n'aient été massacrés.",
      "Si vous voulez suivre les morts vivants lorsqu'ils quittent la cale, rendez-vous au 186.",
      "Si vous préférez rester dans votre cachette, rendez-vous au 314."
    ],
    "choices": [
      {
        "text": "Si vous voulez suivre les morts vivants lorsqu'ils quittent la cale, rendez-vous au 186.",
        "targetId": "186"
      },
      {
        "text": "Si vous préférez rester dans votre cachette, rendez-vous au 314.",
        "targetId": "314"
      }
    ]
  },
  "268": {
    "id": "268",
    "text": [
      "Incapable de résister au désir de vous approprier la clef, vous empoignez votre arme et vous l'abattez sur le dôme de verre. Sous le choc, il éclate en mille morceaux, laissant échapper une bouffée d'énergie crépitante qui se dissipe en quelques secondes.",
      "Vous rengainez votre arme et saisissez la clef en prenant garde de ne pas toucher le socle sur lequel elle repose. (Sur votre Feuille d'Aventure, inscrivez la Clef d'Onyx dans la case des Objets Spéciaux que vous transportez dans la poche de votre tunique.) Après quoi, vous enfoncez la clef dans la serrure de la porte et vous découvrez qu'elle s'y adapte parfaitement.",
      "Sans hésiter, vous la faites tourner, persuadé que la porte va s'ouvrir et vous révéler ce qui se trouve derrière...",
      "Utilisez la Table de Hasard.",
      "Si vous obtenez de 0 à 6, rendez-vous au 50.",
      "Si le chiffre obtenu est supérieur ou égal à 7, rendez-vous au 6."
    ],
    "choices": [
      {
        "text": "Si vous obtenez de 0 à 6, rendez-vous au 50.",
        "targetId": "50"
      },
      {
        "text": "Si le chiffre obtenu est supérieur ou égal à 7, rendez-vous au 6.",
        "targetId": "6"
      }
    ]
  },
  "269": {
    "id": "269",
    "text": [
      "Après une hésitation, vous vous jetez dans le vide. Votre chute est brève, mais sa conclusion douloureuse : vous heurtez le sol inégal en plein déséquilibre et vous vous fracturez les deux jambes et le bassin ! Estourbi par la violence du choc et souffrant mille morts, vous tentez péniblement de mettre en oeuvre vos pouvoirs de Gué-rison pour ressouder vos os affreusement rompus.",
      "Hélas, bien avant qu'ils soient consolidés, des milliers de tonnes de roc et de cristal s'effondrent sur vous. Par la vertu de votre courage indomptable, vous avez abattu le Seigneur de la Mort et libéré ainsi des millions d'âmes anonymes d'un esclavage éternel.",
      "Aussi longtemps que les forces du Bien régneront sur le Magnamund, le souvenir de vos exploits restera dans les mémoires."
    ],
    "choices": []
  },
  "270": {
    "id": "270",
    "text": [
      "Vous arrivez bientôt devant les décombres d'une tour de guet où vous vous réfugiez pour reprendre votre souffle. Une rapide exploration de l'édifice vous permet de trouver un trou dans la paroi ruinée, d'où vous apercevez maintenant la large rampe de pierre qui dessert la vaste entrée voûtée de l'immense spirale de cristal.",
      "Dissimulé aux regards de l'ennemi, vous pouvez observer à loisir le va-et-vient des guerriers morts vivants sous cette grande arche. Le sourd bourdonnement que vous aviez détecté en arrivant à Xaagon est plus proche, presque douloureux, et ses vibrations sont si fortes qu'elles laissent des rides dans la neige.",
      "Vous tendez le cou pour apercevoir le sommet de la tour en forme de spirale, et vous ne pouvez réprimer un frisson d'effroi en y détectant la présence flagrante du Seigneur de la Mort. Les infectes émanations de son aura maléfique sont si puissantes que vous reculez d'un pas, le corps envahi d'une sueur glacée.",
      "Mais vous ne tardez pas à vous ressaisir et, plus résolu que jamais à pénétrer dans le repaire de votre ennemi juré, vous prêtez toute votre attention aux allées et venues des esclaves morts vivants. Pendant ce temps, à moins de maîtriser la Grande Discipline de l'Art de la Chasse, vous devez prendre un Repas ou perdre 3 points d'ENDURANCE.",
      "Rendez-vous ensuite au 335."
    ],
    "choices": []
  },
  "271": {
    "id": "271",
    "text": [
      "Vous remontez de la cale avant et vous traversez rapidement le pont pour escalader l'échelle qui donne accès au gaillard d'arrière élancé du vaisseau. Rejoignant Prarg à l'intérieur de la timonerie qui se dresse au centre de la dunette, vous le trouvez en train d'examiner une grande sphère de verre montée sur un socle ouvragé, lui même taillé dans une scintillante pierre noire.",
      "La sphère émet un sourd bourdonnement et luit d'un faible éclat verdâtre. Elle est reliée à la barre à roue du gouvernail par un réseau de tubes d'argent et de torons de métal tressé. — Que pensez-vous de cette chose, Grand Maître ? demande Prarg en s'écartant pour vous laisser regarder ladite chose de plus près.",
      "Inspectant l'étrange dispositif, vous en arrivez à la conclusion qu'il s'agit du moyen de propulsion et de direction du bâtiment. Après en avoir examiné avec soin toutes les commandes et les instruments de contrôle, vous acquérez la certitude de pouvoir gouverner ce navire sans difficulté. — Ah, ça, y a pas de doute, Grand Maître, c'est un drôle de bateau ! dit Prarg en considérant d'un œil perplexe les étranges équipements du vaisseau.",
      "Vous êtes bien sûr qu'il pourra vous amener jusqu'à Ixia ? — J'en suis sûr et certain, mon brave Prarg, répliquez-vous avec un sourire en coin. Et je suis tout aussi sûr qu'il sera moins risqué de traverser la mer de Tozaz à son bord que sur n'importe quel brise-glace portant le pavillon de Lencia.",
      "Tournant son regard vers les débris qui flottent au-dessus du brise-glace englouti, Prarg vous dit en soupirant : -J'espère que vous avez raison, Grand Maître, Sincèrement, j'espère que vous avez raison.",
      "Rendez-vous au 18."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 18.",
        "targetId": "18"
      }
    ]
  },
  "272": {
    "id": "272",
    "text": [
      "Vous utilisez votre Grande Maîtrise Kaï pour transcender votre pouvoir de vision et détailler la nouvelle patrouille de chasse. A mesure qu'elle s'approche, vous remarquez que le Monstre des Laves de tête porte dans ses serres crochues un objet qui irradie une intense aura maléfique.",
      "A cette distance, cela ressemble à un grand bol en métal dont le fond est prolongé par une pointe de cristal effilée. Envahi d'une sourde inquiétude, vous forcez l'allure, plus déterminé que jamais à atteindre la Porte d'Ombre avant que Tagazin ou la nouvelle vague de renforts puissent vous en empêcher.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous avez atteint le rang de Grand Maître Principal, ou un rang supérieur, rendez-vous au 230.",
      "Si vous ne remplissez pas ces deux conditions, rendez-vous au 3."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et si vous avez atteint le rang de Grand Maître Principal, ou un rang supérieur, rendez-vous au 230.",
        "targetId": "230"
      },
      {
        "text": "Si vous ne remplissez pas ces deux conditions, rendez-vous au 3.",
        "targetId": "3"
      }
    ]
  },
  "273": {
    "id": "273",
    "text": [
      "Parvenu au sommet du pilier, vous faites appel à la magie pour redescendre sans heurt. Grâce au sortilège de Chute Douce, vous vous laissez glisser lentement jusqu'au sol d'un noir luisant. Puis vous avancez prudemment vers la sortie du corridor. Rendez- vous au 300."
    ],
    "choices": []
  },
  "274": {
    "id": "274",
    "text": [
      "Sur le point de perdre conscience, vous remontez vers la surface et remplissez vos poumons brûlants d'une salvatrice goulée d'air frais. Vous respirez encore avec difficulté, quand vous apercevez sur la jetée une créature vêtue de noir qui, attirée par le bruit, tourne la tête dans votre direction.",
      "Redoutant d'être repéré, vous inspirez aussi profondément que vous le pouvez, puis vous plongez.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité ou la Grande Discipline de l'Exploration, ajoutez 2 au chiffre obtenu.",
      "Si le résultat est inférieur ou égal à 5, rendez-vous au 116.",
      "S'il est supérieur ou égal à 6, rendez-vous au 157."
    ],
    "choices": [
      {
        "text": "rendez-vous au 116.",
        "targetId": "116"
      },
      {
        "text": "rendez-vous au 157.",
        "targetId": "157"
      }
    ]
  },
  "275": {
    "id": "275",
    "text": [
      "Lâchant la garde du Glaive de Sommer, vous avez tout juste le temps d'empoigner une autre arme pour soutenir la première charge de la créature. A cet instant, un éclair illumine brièvement la grotte. Cette bête est d'une laideur telle que vous ne parvenez pas à réprimer un hurlement de terreur !",
      "D'effroyables rangées de crocs acérés débordent de sa gueule béante. Des dizaines de tentacules prolongés de griffes se tortillent le long de son colossal corps d'ours. Sa tête reptilienne est surmontée d'une corne longue comme un sabre de géant ! OCTOPURS IXIAN HABILETÉ: 40 ENDURANCE: 60 Vous pouvez fuir ce combat à la fin du troisième Assaut en vous rendant au 56.",
      "Si vous êtes victorieux, rendez-vous au 16."
    ],
    "choices": [
      {
        "text": "Si vous êtes victorieux, rendez-vous au 16.",
        "targetId": "16"
      }
    ],
    "combat": {
      "name": "OCTOPURS IXIAN",
      "combatSkill": 40,
      "endurance": 60,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "276": {
    "id": "276",
    "text": [
      "Vous lâchez la corde et vous vous laissez tomber sur le sol avec l'agilité d'un chat, roulant sur vous-même pour amortir le choc avant de rebondir sur vos pieds dans un même mouvement, si bien que votre chute ne vous coûte qu'1 point d'ENDURANCE.",
      "Rendez-vous au 36."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 36.",
        "targetId": "36"
      }
    ]
  },
  "277": {
    "id": "277",
    "text": [
      "La créature bondit sur le pont et fait siffler son bâton de glace, l'abattant sur votre visage. Vous parez sa botte à l'aide du Glaive de Sommer et une aveuglante gerbe d'étincelles fuse dans les airs quand les deux armes entrent en contact. ZIOG HABILETÉ: 49 ENDURANCE: 42 Cet être mort vivant est insensible à toutes les formes d'attaque psychique, hormis celles de la Grande Discipline du Foudroiement Psychique et de la Déflagration Psychique.",
      "Si vous sortez vainqueur de ce combat, rendez-vous au 70."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 70.",
        "targetId": "70"
      }
    ],
    "combat": {
      "name": "ZIOG",
      "combatSkill": 49,
      "endurance": 42,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "278": {
    "id": "278",
    "text": [
      "Vous découvrez, au centre du toit, une ouverture en partie dissimulée sous une touffe de lianes épineuses. Prenant garde de ne pas vous écorcher à leurs piquants venimeux, vous les arrachez pour mettre au jour une volée de marches qui plongent dans les profondeurs ténébreuses de l'édifice englouti.",
      "Soudain, alerté par vos sens Kaï, vous vous retournez brusquement. Une horde d'abominations sans nom, d'informes choses boursouflées à la chair cadavérique qui jouent des coudes et des tentacules avec des guerriers squelet-tiques aux os noircis et rongés de pourriture, prennent pied sur le toit.",
      "D'abord silencieuses, elles n'hésitent plus maintenant à pousser des cris inintelligibles et de sourds grognements. L'attaque de ces créatures, avides de vous déchirer entre leurs griffes infectes, vous laisse tout juste le temps de dégainer votre arme.",
      "HORDE DU CHAOS HABILETÉ : 52 ENDURANCE: 50 Ces êtres sont insensibles aux effets de toutes les formes d'attaque psychique, hormis à ceux de la Grande Discipline du Foudroiement Psychique et de la Déflagration Psychique. Vous pouvez rompre ce combat et prendre la fuite au terme de six Assauts en vous rendant au 235.",
      "Si vous êtes victorieux, rendez- vous au 190."
    ],
    "choices": [],
    "combat": {
      "name": "HORDE DU CHAOS",
      "combatSkill": 52,
      "endurance": 50,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "279": {
    "id": "279",
    "text": [
      "Vous rassemblez rapidement vos forces mentales pour vous préparer à projeter un boulet d'énergie psychique. Les plus proches des hideux Drakkarims cadavériques sont à moins d'un mètre de vous lorsque le boulet ardent jaillit de votre esprit. Dans un aveuglant éclair blanc, il explose au milieu de leur groupe compact, réduisant en cendres trois d'entre eux et jetant les autres au sol, estourbis par la violence du choc psychique.",
      "Vous vous relevez d'un bond en dégainant votre arme et vous vous élancez vers l'escalier mais, à votre stupéfaction, les morts vivants se redressent brusquement et vous assaillent de toutes parts ! index DRAKKARIMS MORTS VIVANTS HABILETÉ: 20 ENDURANCE: 40 Si leur résistance vous surprend, ces êtres sont tout de même particulièrement sensibles à toutes les formes d'attaque psychique.",
      "Aussi, pour la durée de ce combat, si vous utilisez ce type d'attaque, multipliez par deux tous les points supplémentaires dont vous pouvez bénéficier.",
      "Si vous sortez vainqueur de ce combat, rendez-vous au 79."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 79.",
        "targetId": "79"
      }
    ],
    "combat": {
      "name": "INDEX DRAKKARIMS MORTS VIVANTS",
      "combatSkill": 20,
      "endurance": 40,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "280": {
    "id": "280",
    "text": [
      "Vous plongez et vous roulez sur le sol pour esquiver le fulgurant projectile. La massive boule de flammes passe au-dessus de vous avant d'aller frapper le mur opposé de la chambre dans une assourdissante explosion. Elle ouvre un trou béant de plus de trois mètres de diamètre dans sa surface de cristal dur comme l'acier, projetant dans la pièce une myriade d'éclats tranchants comme des lames de rasoir.",
      "Heureusement, la rapidité de vos réflexes vous évite d'être sérieusement touché. (Vous perdez seulement 1 point d'ENDURANCE.) Alors que vous vous relevez en titubant, une occasion s'offre à vous de reprendre l'initiative du combat et d'attaquer le Seigneur de la Mort.",
      "Rendez-vous au 12."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 12.",
        "targetId": "12"
      }
    ]
  },
  "281": {
    "id": "281",
    "text": [
      "Vous empoignez votre arc et décochez une flèche sur la plus proche des trois créatures. Votre trait file droit sur sa cible, mais il la traverse et poursuit sa course pour finalement se fracasser contre un mur. La créature émet alors un bruit des plus curieux, une sorte de hululement dont vous pensez qu'il pourrait fort bien être l'expression d'un ricanement moqueur.",
      "Puis elle tire des plis noirs de sa robe moisie un bâton d'argent qu'elle braque dans votre direction. Vous avez le réflexe de vous jeter au sol à l'instant même où une boule d'énergie fuse de l'extrémité de l'arme ensorcelée, dans le but avoué de vous arracher la tête !",
      "Dans un sifflement strident, le projectile ardent passe au-dessus de vous avant de s'écraser contre un pilier de cristal. L'explosion violente projette à la ronde une nuée d'éclats tranchants qui vous criblent le dos et vous font perdre 2 points d'ENDURANCE.",
      "Vous vous relevez d'un bond et tentez de prendre la fuite, mais les deux autres créatures vous barrent la route, vous obligeant à les affronter toutes les trois dans un furieux corps à corps. 3 KHERBALAS HABILETÉ: 56 ENDURANCE: 54 Les Kherbalas sont insensibles aux effets de la Puissance Psychique et de la Grande Discipline du Foudroiement Psychique.",
      "Vous pouvez fuir ce combat au terme de quatre Assauts en vous rendant au 41.",
      "Si vous êtes vainqueur, rendez- vous au 293."
    ],
    "choices": [],
    "combat": {
      "name": "KHERBALAS",
      "combatSkill": 56,
      "endurance": 54,
      "mindblastImmune": true,
      "undead": false
    }
  },
  "282": {
    "id": "282",
    "text": [
      "Banedon s'approche d'un rayonnage et extirpe un petit coffret en bois d'un amas confus de cartes et de rouleaux de parchemin. D'un souffle, il fait voler la poussière qui le recouvre et vous le tend en vous priant de l'ouvrir. Vous vous exécutez et découvrez à l'intérieur du coffret un petit disque de platine attaché à une fine cordelette tressée. - Prends cette amulette, Loup Solitaire, dit votre ami.",
      "Elle détient un grand pouvoir de protection contre les maléfices, et tu risques d'en avoir grand besoin sur le sol d'Ixia. Acquiesçant d'un hochement de tête, vous glissez la cordelette autour de votre cou avant de refermer le couvercle du coffret et de le lui rendre.",
      "Inscrivez cette Amulette de Platine dans la liste des Objets Spéciaux de votre Feuille d'Aventure, même si vous transportez déjà le nombre maximum d'objets autorisés.",
      "Puis rendez-vous au 57."
    ],
    "choices": [
      {
        "text": "rendez-vous au 57.",
        "targetId": "57"
      }
    ]
  },
  "283": {
    "id": "283",
    "text": [
      "Devant l'échec de leur attaque psychique, les entités fuligineuses battent en retraite jusqu'au fond de la chambre où elles se matérialisent, donnant corps à six effroyables créatures. Elles ont revêtu l'apparence d'énormes insectes noirs aux membres fuselés, pourvus de hideuses têtes de goule dont les yeux à facettes, proéminents, vous fixent avec une lueur féroce.",
      "Faisant crisser leurs mandibules avec avidité, les six monstres s'avancent sur leurs longues pattes luisantes.",
      "Si vous tentez d'échapper à ces abominations, rendez-vous au 98.",
      "Si vous avez un arc et si vous désirez l'utiliser, rendez-vous au 244.",
      "Si vous ne voulez ni vous enfuir ni faire usage de votre arc, rendez-vous au 115."
    ],
    "choices": [
      {
        "text": "Si vous tentez d'échapper à ces abominations, rendez-vous au 98.",
        "targetId": "98"
      },
      {
        "text": "Si vous avez un arc et si vous désirez l'utiliser, rendez-vous au 244.",
        "targetId": "244"
      },
      {
        "text": "Si vous ne voulez ni vous enfuir ni faire usage de votre arc, rendez-vous au 115.",
        "targetId": "115"
      }
    ]
  },
  "284": {
    "id": "284",
    "text": [
      "Vous pilotez le navire avec prudence le long d'un entrelacs d'étroits chenaux qui offrent un passage incertain à travers le chaos du champ d'icebergs. Mêlant signaux manuels et télépathie, vous indiquez la manœuvre à l'homme de barre posté à l'arrière du bateau.",
      "Régulièrement, votre vision est gênée par des bourrasques de neige poudreuse qui s'abattent des crêtes des falaises de glace et balaient le pont du navire. Ces bourrasques sont si violentes qu'il vous arrive souvent de ne plus rien distinguer sur l'avant et vous devez alors vous en remettre à vos seuls instincts Kaï.",
      "Le hurlement incessant du vent sur les arêtes des icebergs et les affreux gémissements de la coque ripant contre d'énormes bancs de glace immergés vous font tressaillir d'effroi en dépit de votre courage indomptable. Quant à vos matelots, visiblement terrifiés, ils se blottissent contre la lice et adressent de ferventes prières à la déesse Ishir en levant des yeux horrifiés vers les immenses falaises immaculées qui menacent de vous broyer.",
      "La peur règne à bord lorsque, presque sans transition, le vent chargé de neige mollit et le navire émerge du champ d'icebergs pour fendre les eaux libres de la mer de Tozaz. Lorsqu'ils parviennent enfin à se persuader qu'ils ont vraiment échappé à un destin funeste, les hommes d'équipage poussent un vibrant hourra, et l'un d'eux fait sauter le bouchon d'une bouteille de vieux rhum qu'il avait amoureusement conservée pour quelque grande occasion.",
      "Il s'en accorde une solide lampée et vous passe la bouteille d'un geste fraternel. Mais, au moment où vos lèvres gercées s'entrouvrent pour accueillir la chaude coulée du revigorant breuvage, la voix du timonier retentit du haut de la dunette : « Navire droit devant ! »",
      "Sentant vos entrailles se nouer une fois de plus sous l'étau de la peur, vous vous tournez vers la proue et concentrez votre regard d'aigle sur la lointaine silhouette du vaisseau inconnu.",
      "Rendez-vous au 195."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 195.",
        "targetId": "195"
      }
    ]
  },
  "285": {
    "id": "285",
    "text": [
      "Par deux fois, vous tentez sans succès de lancer votre corde autour de la saillie. Vous vous apprêtez à faire un troisième essai lorsqu'une douleur fulgurante tétanise votre jambe droite ! La bête tapie au fond du bourbier vient de refermer ses puissantes mâchoires sur votre mollet et tente maintenant de vous entraîner sous la surface.",
      "Lâchant votre corde (rayez-la de votre Feuille d'Aventure), vous dégainez votre arme et frappez à l'aveuglette pour tenter d'atteindre la créature et l'obliger à lâcher prise.",
      "GLOUTON DES VASES HABILETÉ : 44 ENDURANCE : 44 Si vous sortez vainqueur de ce combat, rendez-vous au 67."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 67.",
        "targetId": "67"
      }
    ],
    "combat": {
      "name": "GLOUTON DES VASES",
      "combatSkill": 44,
      "endurance": 44,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "286": {
    "id": "286",
    "text": [
      "Grâce à votre Grande Maîtrise Kaï, vous décelez une porte secrète dissimulée dans le mur du fond de la chambre. Remarquablement bien conçue et réalisée, elle est virtuellement invisible mais, en l'examinant de plus près, vous découvrez un minuscule bouton de pierre au centre du panneau.",
      "Lorsque vous posez la paume sur ce bouton, sa chaleur active un mécanisme caché et la porte dérobée coulisse sans bruit dans le mur, révélant un sombre corridor.",
      "Si vous voulez pénétrer dans ce passage secret, rendez-vous au 94.",
      "Si vous préférez ne pas vous y risquer et quitter la pièce par où vous êtes venu, rendez-vous au 334."
    ],
    "choices": [
      {
        "text": "Si vous voulez pénétrer dans ce passage secret, rendez-vous au 94.",
        "targetId": "94"
      },
      {
        "text": "Si vous préférez ne pas vous y risquer et quitter la pièce par où vous êtes venu, rendez-vous au 334.",
        "targetId": "334"
      }
    ]
  },
  "287": {
    "id": "287",
    "text": [
      "Vous empoignez votre arc et décochez une flèche sur la créature de tête. Le trait file droit sur sa cible, mais il traverse la poitrine de votre ennemi sans le blesser, pour terminer sa course derrière lui, contre le mur. Consterné, vous laissez tomber votre arc.",
      "Vous n'avez que le temps de dégainer une arme de poing pour affronter l'attaque furieuse des trois créatures. 3 KAJARDAS HABILETÉ : 48 ENDURANCE : 42 Ces êtres morts vivants sont insensibles aux effets de toutes les formes d'attaque psychique, à l'exception de la Puissance Psychique et de la Grande Discipline du Foudroiement Psychique.",
      "Si vous sortez vainqueur de ce combat au terme de six Assauts, ou moins, rendez-vous au 32.",
      "S'il vous faut sept Assauts ou plus pour terrasser ces trois horreurs, rendez-vous au 213."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat au terme de six Assauts, ou moins, rendez-vous au 32.",
        "targetId": "32"
      },
      {
        "text": "rendez-vous au 213.",
        "targetId": "213"
      }
    ],
    "combat": {
      "name": "KAJARDAS",
      "combatSkill": 48,
      "endurance": 42,
      "mindblastImmune": true,
      "undead": false
    }
  },
  "288": {
    "id": "288",
    "text": [
      "Alerté par votre sixième sens Kaï, vous faites brusquement volte- face. Transpercé, le monstre s'arrache du mât et s'avance sur vous en titubant, tendant vers votre gorge ses griffes venimeuses. ZIOG (blessé) HABILETÉ : 39 ENDURANCE : 32 Cette créature est insensible à toutes les formes d'attaque psychique, hormis à la Grande Discipline du Foudroiement Psychique et à la Déflagration Psychique.",
      "Si vous êtes victorieux, rendez-vous au 159."
    ],
    "choices": [
      {
        "text": "Si vous êtes victorieux, rendez-vous au 159.",
        "targetId": "159"
      }
    ],
    "combat": {
      "name": "ENNEMI",
      "combatSkill": 39,
      "endurance": 32,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "289": {
    "id": "289",
    "text": [
      "Plusieurs heures s'écoulent avant que la tempête se calme suffisamment pour vous permettre de quitter votre abri et de reprendre votre marche solitaire vers Xaagon. Parvenu à l'extrémité du défilé, vous vous arrêtez en découvrant, loin en contrebas, les murs de la ténébreuse cité du Seigneur de la Mort.",
      "Jadis, il y a plusieurs millénaires, cette vaste métropole était le siège d'une brillante civilisation. Mais, aujourd'hui, les majestueux palais et temples de cristal de Xaagon n'abritent plus que le Seigneur de la Mort et ses hordes de démons. De la neige jusqu'aux genoux, vous poursuivez votre route, descendant vers la plaine côtière où s'élèvent les hautes murailles de la ville.",
      "Au centre de la cité se dresse une tour dont la hauteur dépasse l'entendement. Faite de cristal, elle a la forme d'une spirale et semble fouailler les cieux tumultueux tel un immense doigt accusateur. Son sommet en pointe, qui attire la foudre des nuées d'orage, luit d'un éclat pourpre qui jette une lueur sinistre sur le morne paysage, tel un fanal infernal balayant de ses rayons sanglants l'étendue morte d'une mer de glace.",
      "En approchant des remparts de Xaagon, vous repérez deux passages par lesquels vous pourriez entrer dans la cité : une brèche ouverte dans le mur sud, du côté de la mer et, dans le mur ouest, un vaste portail fracassé. Ni l'un ni l'autre de ces deux passages ne semblent gardés.",
      "Si vous voulez entrer dans Xaagon par la brèche dans le mur sud, rendez-vous au 165.",
      "Si vous préférez passer par la porte ouest, rendez-vous au 266."
    ],
    "choices": [
      {
        "text": "Si vous voulez entrer dans Xaagon par la brèche dans le mur sud, rendez-vous au 165.",
        "targetId": "165"
      },
      {
        "text": "Si vous préférez passer par la porte ouest, rendez-vous au 266.",
        "targetId": "266"
      }
    ]
  },
  "290": {
    "id": "290",
    "text": [
      "Votre ultime coup arrache au Seigneur de la Mort un cri si terrible qu'il ébranle les murs de la pièce et fait trembler le socle sous vos pieds. Le Bâton de Mort se brise dans sa main squelettique et ses fragments s'éparpillent sur le sol. Ixiataaga recule en titubant vers le bord du fossé ardent, mais il n'a pas le temps de l'atteindre : son corps s'effrite et se décompose à chacun de ses mouvements, pour finir par se dissoudre en une fine poussière verdâtre qui, aspirée par la Porte d'Ombre, disparaît dans son noir tourbillon avec les débris du Bâton de Mort.",
      "En abattant cet être satanique et son allié surnaturel, vous venez de libérer Ixia du maléfice qui maintenait ses morts en esclavage depuis des millénaires. Grâce à vous, leurs âmes tourmentées vont enfin trouver la paix du repos éternel. Mais en détruisant Ixiataaga, vous avez aussi sans le vouloir levé le sortilège qui, depuis des milliers d'années, préservait Xaagon des ravages du temps.",
      "Et maintenant, le temps reprend son dû... A peine avez-vous franchi d'un bond le fossé ardent pour vous élancer vers la sortie de la salle qu'une formidable explosion ébranle les fondations de la Tour de Cristal. Terrifié, vous comprenez que la cité tout entière s'effondre !",
      "Rendez-vous au 196."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 196.",
        "targetId": "196"
      }
    ]
  },
  "291": {
    "id": "291",
    "text": [
      "Essayant d'ignorer l'aura maléfique que vous avez détectée, vous vous allongez sur le sol de la timonerie pour prendre quelques heures de repos. Mais, l'esprit tourmenté, vous ne cessez de vous tourner et de vous retourner sur votre couche improvisée sans parvenir à fermer l'œil.",
      "Vous vous relevez pour aller jusqu'à la proue où, accoudé au bastingage, vous regardez les eaux écumeuses de la mer de Tozaz rouler sans fin sous la puissante étrave du navire. (Vous perdez 2 points d'EN-DURANCE.) Progressivement, la nuit s'efface devant une aube blafarde dont la lumière glauque vous révèle un nouveau danger.",
      "Dans la grisaille du demi-jour, vous voyez se dessiner les contours de milliers d'icebergs. Une sourde angoisse s'empare de vous à la vue de cette immensité glacée qui pourrait se révéler infranchissable.",
      "Si vous décidez de reprendre la barre du navire à l'approche du champ d'icebergs, rendez-vous au 51.",
      "Si vous préférez rester posté à la proue pour piloter le timonier dans le dédale des glaces, rendez-vous au 189."
    ],
    "choices": [
      {
        "text": "Si vous décidez de reprendre la barre du navire à l'approche du champ d'icebergs, rendez-vous au 51.",
        "targetId": "51"
      },
      {
        "text": "Si vous préférez rester posté à la proue pour piloter le timonier dans le dédale des glaces, rendez-vous au 189.",
        "targetId": "189"
      }
    ]
  },
  "292": {
    "id": "292",
    "text": [
      "La ténébreuse coursive descend en pente douce jusqu'à une plate-forme qui surplombe une salle profonde. De ce poste d'observation providentiel, vous voyez des dizaines de morts vivants revêtus d'armures ternies et de robes noires en guenilles. Ils s'activent autour d'énormes foyers où ronflent de furieuses flammes vertes qui dégagent des torrents de fumées délétères.",
      "Des rangées de cadrans et de leviers couvrent les parois de la salle qui est sans nul doute la chambre de contrôle de l'étrange vaisseau.",
      "Rendez-vous au 127."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 127.",
        "targetId": "127"
      }
    ]
  },
  "293": {
    "id": "293",
    "text": [
      "Victimes l'une après l'autre de vos coups implacables, les créatures tombent dans la neige où leurs corps hideux se recroquevillent et se tordent dans d'affreuses convulsions avant de se dissoudre lentement sur le sol, pour ne laisser que trois petites mares nauséabondes et noirâtres entourées de lambeaux de tissu moisi.",
      "Empli de dégoût, vous vous hâtez de rengainer votre arme et de vous enfoncer dans les ruines de la cité, loin de ces infects résidus.",
      "Rendez-vous au 270."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 270.",
        "targetId": "270"
      }
    ]
  },
  "294": {
    "id": "294",
    "text": [
      "Vous fixez sans ciller les yeux brûlants de haine du Seigneur Démon en bandant tous vos muscles pour affronter son attaque imminente.",
      "Si vous possédez le Glaive de Sommer, rendez-vous au 341.",
      "Sinon, rendez-vous au 75."
    ],
    "choices": [
      {
        "text": "Si vous possédez le Glaive de Sommer, rendez-vous au 341.",
        "targetId": "341"
      },
      {
        "text": "Sinon, rendez-vous au 75.",
        "targetId": "75"
      }
    ]
  },
  "295": {
    "id": "295",
    "text": [
      "Vous détalez devant la horde grinçante et cliquetante des squelettes et vous vous dissimulez dans une dépendance jouxtant la tour de guet en attendant que la voie soit libre. Lorsque vous sortez de votre cachette, vous entendez le cri de guerre du capitaine Lanza : - Pour la Lencia et la Maison de Sarnac !",
      "En dépit de leur infériorité numérique, lui et ses hommes sont parvenus à repousser l'ennemi et sont désormais à moins d'un jet de pierre du quai. Descendant la rue en courant, vous les rejoignez sur une petite place pavée bordant le débarcadère. — Capitaine, nous devons sauver le brise-glace ! hurlez-vous en pointant votre arme vers le navire que la meute des squelettes est en train de prendre d'assaut. - Par tous les dieux !",
      "Il le faut à tout prix, acquiesce-t-il d'une voix ferme en donnant l'ordre à une poignée de ses hommes de former un mur de protection autour de vous. Aussitôt, les soldats vous entourent en joignant leurs boucliers et vous vous avancez avec eux vers le brise-glace.",
      "A vingt mètres du bord du quai, vous quittez leur formation et foncez vers la planche d'embarquement du navire. Vous êtes au milieu de la passerelle quand vous vous retrouvez confronté à un peloton de squelettes armés d'épées et de haches grossières. Bondissant tel un tigre au milieu de leur macabre groupe, vous les taillez en pièces avec une rapidité fulgurante et une implacable précision.",
      "Mais, alors que le dernier mort vivant tombe dans les eaux sombres du port, presque coupé en deux, vous entendez soudain derrière vous un bruit qui vous fait vous retourner, le cœur battant.",
      "Rendez-vous au 78."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 78.",
        "targetId": "78"
      }
    ]
  },
  "296": {
    "id": "296",
    "text": [
      "Le rire ignoble cesse brusquement, comme si quelque chose avait soudain ébranlé l'arrogante certitude du Seigneur de la Mort en sa propre invicibilité.",
      "« Le Pic de Pouvoir », pensez-vous en estimant que vous possédez sûrement une des rares armes capables de le détruire. Sachant cela, vous profitez du trouble de votre ennemi pour avancer sur lui, mais Ixiataaga réagit vivement. Il émet une sorte de cri guttural et, dans la seconde qui suit, un boulet d'énergie pure jaillit de l'extrémité du Bâton de Mort et vole droit vers votre cœur !",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 1 au chiffre obtenu.",
      "Si vous maîtrisez la Grande Discipline du Nexus, ajoutez 1 à ce chiffre.",
      "Si le résultat est inférieur ou égal à 2, rendez-vous au 55.",
      "Si le résultat est compris entre 3 et 6, rendez-vous au 331.",
      "S'il est supérieur ou égal à 7, rendez-vous au 93."
    ],
    "choices": [
      {
        "text": "rendez-vous au 55.",
        "targetId": "55"
      },
      {
        "text": "entre 3 et 6, rendez-vous au 331.",
        "targetId": "331"
      },
      {
        "text": "rendez-vous au 93.",
        "targetId": "93"
      }
    ]
  },
  "297": {
    "id": "297",
    "text": [
      "Grâce à votre agilité naturelle, vous atteignez le sommet du pilier avant de vous glisser dans l'étroit espace qui le sépare de la voûte. Cette ascension a été pénible et douloureuse car les dangereuses radiations du champ électrique vous ont cruellement blessé le dos des mains et le côté gauche du visage.",
      "Vous perdez 5 points d'ENDURANCE.",
      "Si vous avez atteint le rang de Grand Maître Transcendant, rendez-vous au 273.",
      "Sinon, rendez-vous au 49."
    ],
    "choices": [
      {
        "text": "Si vous avez atteint le rang de Grand Maître Transcendant, rendez-vous au 273.",
        "targetId": "273"
      },
      {
        "text": "Sinon, rendez-vous au 49.",
        "targetId": "49"
      }
    ],
    "damage": 5
  },
  "298": {
    "id": "298",
    "text": [
      "Caché, attentif au moindre bruit, vous ruminez de sombres pensées. Le trépas des membres de votre équipage et la transformation de leurs dépouilles en morts vivants vous ont profondément bouleversé. Aussi éprouvez-vous quelques difficultés à l'idée de vous alimenter.",
      "A moins de maîtriser la Grande Discipline de l'Art de la Chasse, vous devez pourtant prendre un Repas ou perdre 3 points d'ENDURANCE. Cinq heures plus tard, l'allure du navire ralentit progressivement, comme s'il se préparait à accoster. Animé par l'esprit de vengeance, vous dégainez votre arme pour vous lancer à l'assaut des Drakkarims morts vivants qui s'entassent sur le pont de votre navire.",
      "Mais, avant d'avoir pu passer à l'action, vous entendez un sourd grondement. De larges panneaux s'ouvrent dans les cloisons qui entourent votre navire, illuminant le pont d'une aveuglante lumière blanche. Émergeant de ces passages, des dizaines de Drakkarims morts vivants envahissent votre bateau, véritable horde de goules affamées.",
      "Devant un tel nombre d'ennemis, vous êtes contraint de renoncer à votre projet de vengeance immédiate. Mais tout n'est pas perdu : dans la confusion provoquée par l'irruption de cette multitude, vous parvenez à vous faufiler hors du navire pour vous éclipser par l'un des panneaux.",
      "Rendez-vous au 320."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 320.",
        "targetId": "320"
      }
    ]
  },
  "299": {
    "id": "299",
    "text": [
      "A regret, vous tournez le dos à la porte pour redescendre l'escalier conduisant à l'antichambre. Vous êtes toujours aussi résolu à trouver le Seigneur de la Mort pour l'abattre mais, pour ce faire, vous devez atteindre les étages supérieurs de la spirale de cristal.",
      "N'ayant pas d'autre choix, vous traversez l'antichambre et franchissez le rideau de lumière...",
      "Rendez-vous au 8."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 8.",
        "targetId": "8"
      }
    ]
  },
  "300": {
    "id": "300",
    "text": [
      "Une sensation de malaise vous fait ralentir le pas à mesure que vous approchez de l'entrée d'une vaste et sinistre salle. Le sourd bourdonnement qui n'a cessé de vous accompagner depuis que vous avez pénétré dans la spirale de cristal atteint maintenant une intensité presque insoutenable.",
      "Si vous n'étiez protégé par vos défenses de Grand Maître Kaï, votre ouïe aurait subi des dommages irrémédiables quand vous avez franchi les deux piliers. Quelques secondes plus tard, du seuil de la pièce, vous scrutez l'obscurité. Cette salle a été visiblement construite avec un art et une adresse qui remontent à des temps immémoriaux.",
      "Pourtant, ce ne sont pas les riches ornements et les somptueuses incrustations dont elle s'embellit qui attirent votre attention, mais un large cercle de ténèbres, un sombre vortex tournoyant au milieu du mur du fond de la salle telle une effrayante sculpture animée.",
      "Votre pouls s'accélère lorsque, en plongeant votre regard au cœur de cet obscur tourbillon, vous reconnaissez... une Porte d'Ombre ! Un de ces points de passage, redoutable, qui permet d'accéder aux univers parallèles à votre monde. Soudain, à l'instant où vous apercevez les sarcophages vides qui, de part et d'autre de la Porte d'Ombre, gisent en morceaux sur le sol, vos sens Kaï captent les réminiscences du passé de ce lieu.",
      "Une succession d'images s'impose à votre esprit. Vous voyez, comme dans un mauvais rêve, le terrible Bâton de Mort jaillir en tournoyant de la Porte d'Ombre pour retomber sur un sarcophage dont le pesant couvercle se brise en deux sous le choc. Ranimé par le pouvoir de l'objet maléfique, le squelette desséché d'un Ixian se lève de son cercueil de pierre, saisit le Bâton de Mort dans ses mains décharnées et le porte jusqu'à la plus haute salle de la Tour de Cristal.",
      "Le squelette animé plonge alors le bâton diabolique dans la paroi d'une cage de lumière née des enchantements des Anciens Mages de Dessi. Alors, dans un éclair aveuglant, Ixiataaga, libéré du cachot magique qui le retenait prisonnier depuis des milliers d'années, s'empare du Bâton de Mort en poussant un affreux mugissement de triomphe...",
      "« C'est donc ainsi que tout a commencé... » pensez- vous quand votre sixième sens Kaï vous prévient d'un danger imminent. De noires fumerolles s'échappent maintenant du cercle de pierre qui entoure la Porte d'Ombre, et il ne fait aucun doute que ces sombres vapeurs sont en réalité des entités animées d'intentions maléfiques.",
      "Si vous maîtrisez la Grande Discipline de l'Ecran Psychique et si vous avez atteint le rang de Grand Maître Eminent, rendez-vous au 223.",
      "Si vous maîtrisez cette Grande Discipline, sans avoir encore atteint le rang exigé, rendez-vous au 131.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 24."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Ecran Psychique et si vous avez atteint le rang de Grand Maître Eminent, rendez-vous au 223.",
        "targetId": "223"
      },
      {
        "text": "Si vous maîtrisez cette Grande Discipline, sans avoir encore atteint le rang exigé, rendez-vous au 131.",
        "targetId": "131"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 24.",
        "targetId": "24"
      }
    ]
  },
  "301": {
    "id": "301",
    "text": [
      "Les Monstres des Laves plongent droit sur vous en mugissant. Les battements de leurs ailes sont si puissants que vous êtes projeté au sol, loin du Seigneur Démon. Levant la tête, vous voyez le chef de cette patrouille ailée se poser près de Tagazin. Dans ses serres crochues, il tient l'étrange bol à pointe.",
      "Quand il retourne cet objet, vous comprenez ce dont il s'agit. C'est un Heaume de Pouvoir, garni au sommet d'une pointe de cristal. Le monstre en coiffe la tête du Seigneur Démon, et la pointe se met à luire d'un éclat menaçant. Aussitôt, tous les Monstres des Laves remontent dans le ciel pour voler lentement en cercle, impatients d'assister au terrible duel qui s'annonce.",
      "Revigoré par le pouvoir du heaume magique, Tagazin se rue sur vous tête baissée, soufflant comme un taureau furieux.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse ou la Grande Discipline de l'Exploration, ajoutez 3 au chiffre obtenu.",
      "Si le résultat est inférieur ou égal à 4, rendez-vous au 257.",
      "S'il est supérieur ou égal à 5, rendez-vous au 142."
    ],
    "choices": [
      {
        "text": "rendez-vous au 257.",
        "targetId": "257"
      },
      {
        "text": "rendez-vous au 142.",
        "targetId": "142"
      }
    ]
  },
  "302": {
    "id": "302",
    "text": [
      "Tremblant encore sous la violence du choc, vous vous relevez tant bien que mal et vous reprenez le contrôle de la barre. Visiblement, la collision a semé la terreur parmi l'équipage. La plupart des matelots sont blottis le long de la lice et adressent de ferventes prières à la déesse Ishir en levant des yeux horrifiés vers les immenses falaises blanches qui menacent de vous engloutir.",
      "La peur règne à bord quand, presque sans transition, le vent chargé de neige mollit et le navire émerge du champ d'icebergs pour fendre les eaux libres de la mer de Tozaz. Rassurés, les hommes d'équipage poussent un vibrant hourra, et l'un d'eux fait sauter le bouchon d'une vieille bouteille de rhum brun qu'il avait amoureusement conservée pour quelque grande occasion.",
      "Il s'en accorde une solide lampée, puis vous passe la bouteille d'un geste fraternel. Mais, au moment où vos lèvres gercées s'entrouvrent pour accueillir le revigorant breuvage, la voix forte du timonier retentit du haut de la dunette : « Navire droit devant ! »",
      "Sentant vos entrailles se nouer à nouveau sous l'étau de la peur, vous vous tournez vers l'avant et concentrez votre regard d'aigle sur la lointaine silhouette du vaisseau inconnu.",
      "Rendez-vous au 195."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 195.",
        "targetId": "195"
      }
    ]
  },
  "303": {
    "id": "303",
    "text": [
      "Le corps battu par des vents glacés, vous plongez dans les tréfonds obscurs d'un vide insondable. Vous poussez, sans les entendre, des hurlements de terreur, car aucun son ne peut pénétrer les limbes abyssaux d'une Porte d'Ombre. Vous voyagez dans un corridor de néant, fusant tel un bolide entre deux univers...",
      "Vous êtes sur le point de perdre conscience lorsque vous tombez lourdement, la tête la première, dans la tiédeur gluante d'un bourbier fétide. Crachant et soufflant, vous vous relevez en titubant et chassez la boue huileuse qui vous colle aux yeux. Lorsque vous parvenez à rouvrir les paupières, vous découvrez un paysage qui n'a rien de commun avec les glaces d'Ixia.",
      "Vous baignez jusqu'aux genoux dans un marais fumant entouré d'une jungle étouffante et moite. Une aura maléfique sature ces terres puantes, et vous comprenez que ce marécage appartient à l'Univers Parallèle des Ténèbres, qu'il est le domaine de Naar, le dieu Sombre.",
      "Scrutant ce paysage délétère, vous sentez que vous n'êtes pas seul. Tagazin est là, tout proche, mais hors de portée de votre regard. Un sentiment d'abandon et d'accablement vous envahit, nourri par la crainte grandissante d'avoir échoué dans votre mission.",
      "Votre unique espoir est désormais de trouver une autre Porte d'Ombre... Faute de quoi vous resterez à jamais prisonnier de cet univers de cauchemar. Vous secouez vos membres fourbus, vous vous extirpez tant bien que mal du marécage et vous prenez pied sur un talus de terre ferme recouvert de mousse verte.",
      "Percevant la présence de Tagazin, vous vous élancez sur ses traces, animé par le faible espoir qu'il vous conduise à une Porte d'Ombre.",
      "Rendez-vous au 95."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 95.",
        "targetId": "95"
      }
    ]
  },
  "304": {
    "id": "304",
    "text": [
      "Tapi derrière les rochers, vous épiez les va-et-vient des morts vivants grimaçants. La chaussée et la jetée grouillent de soldats cadavériques qui, sous la direction de maigres créatures vêtues de robes noires, s'activent entre les brise-glace et la gueule béante du sous-marin géant, chargeant et déchargeant toutes sortes de matériels.",
      "Vous n'êtes qu'à deux cents mètres de l'entrée du tunnel, mais il vous semble impossible de l'atteindre sans vous faire repérer par l'ennemi. A moins que... En y réfléchissant bien, vous échafaudez un plan qui devrait vous permettre de parvenir à vos fins.",
      "Le chemin qui bifurque de la chaussée côtière pour rejoindre l'entrée du tunnel passe tout près de votre cachette. De plus, régulièrement, un chariot bâché empli de matériel descend ce chemin jusqu'à la jetée tandis qu'un autre effectue à vide le trajet inverse.",
      "Quand un tombereau bâché arrive en cahotant, tiré par une sorte de gros bœuf pourvu d'une épaisse robe grise et hirsute, harnaché par de lourdes sangles de cuir, votre décision est prise. Au moment où le chariot passe en grinçant devant les rochers, vous jaillissez de votre cachette et bondissez sur sa plate-forme avant de vous dissimuler sous une puante bâche graisseuse.",
      "L'œil rivé à une fente entre deux planches, vous apercevez les gardes squelettiques qui, postés à l'entrée du tunnel, ne se soucient pas de contrôler le contenu de votre chariot. Peu après, au-delà d'une légère pente, le tombereau débouche dans une autre caverne de glace.",
      "A en juger par ce que vous pouvez voir, de nombreux autres passages accèdent à cette immense grotte, tels les rayons d'une roue géante convergeant vers son moyeu.",
      "Rendez-vous au 156."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 156.",
        "targetId": "156"
      }
    ]
  },
  "305": {
    "id": "305",
    "text": [
      "Vous reconnaissez sur le champ cet officier, qui n'est autre que votre vieil ami et ancien guide, le capitaine Prarg. - Heureux de vous revoir, capitaine, dites-vous en lui donnant une vigoureuse poignée de main. - Tout le plaisir est pour moi, Grand Maître, réplique -t-il avec un large sourire.",
      "C'est un grand honneur de pouvoir vous servir à nouveau.",
      "Rendez-vous au 83."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 83.",
        "targetId": "83"
      }
    ]
  },
  "306": {
    "id": "306",
    "text": [
      "Grognant de douleur, vous vous relevez en titubant et foncez tête baissée sur les guerriers squelettes qui vous barrent maintenant le passage de la porte. Balayés par votre charge fulgurante, les morts vivants s'effondrent les uns sur les autres et, le temps qu'ils aient réussi à désen-chevêtrer leurs membres décharnés, vous avez disparu dans le dédale des coursives obscures du vaisseau de vos ennemis.",
      "Lorsque vous êtes sûr de les avoir bien semés, vous vous arrêtez un moment et vous faites appel à votre Grande Maîtrise du Nexus pour tenter de localiser vos armes et votre équipement. Sentant qu'ils ne sont pas très loin, vous vous laissez guider par votre instinct Kaï et vous vous engagez dans un passage adjacent à celui dans lequel vous vous trouviez, un corridor sinueux et verglacé qui vous entraîne dans les entrailles de l'immense vaisseau.",
      "Vous traversez un labyrinthe de cales vides aux parois renforcées de poutrelles de cristal et de chambres aux plafonds surbaissés qui, en dépit de l'atmosphère glaciale, sont imprégnées d'une odeur de mort et de pourriture. Vos recherches aboutissent devant une imposante porte grise gardée par deux morts vivants Drakkarims armés de lances.",
      "Le bruit et les mouvements du navire ont cessé et tout vos sens vous indiquent que la traversée a pris fin. Tapi derrière une cloison de cristal courbe, vous surveillez les gardes en réfléchissant au meilleur moyen de vous en débarrasser.",
      "Si vous décidez de les attaquer à mains nues, rendez-vous au 243.",
      "Si vous préférez les éliminer en faisant appel à votre maîtrise des Grandes Disciplines Psychiques, rendez-vous au 336."
    ],
    "choices": [
      {
        "text": "Si vous décidez de les attaquer à mains nues, rendez-vous au 243.",
        "targetId": "243"
      },
      {
        "text": "Si vous préférez les éliminer en faisant appel à votre maîtrise des Grandes Disciplines Psychiques, rendez-vous au 336.",
        "targetId": "336"
      }
    ]
  },
  "307": {
    "id": "307",
    "text": [
      "Obéissant à une intuition subite, vous sortez la Clef d'Onyx de votre poche et, en les comparant, vous constatez qu'elle est identique à celle qui se trouve sous le dôme de verre. Poussé par la curiosité, vous ne résistez pas à l'envie de glisser votre clef dans la serrure de la porte close...",
      "Comme vous l'aviez espéré, elle s'y adapte parfaitement. Vous la faites tourner, déverrouillant la porte, puis vous la replacez dans votre poche avant de franchir le seuil.",
      "Rendez-vous au 120."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 120.",
        "targetId": "120"
      }
    ]
  },
  "308": {
    "id": "308",
    "text": [
      "Au dernier instant, vous plongez sur le côté dans un réflexe foudroyant et la pointe du heaume de Tagazin ne rencontre que le vide. Emporté par son élan, le Seigneur Démon vous dépasse dans un nuage de poussière mais, alors que vous bondissez sur vos pieds au terme d'un souple roulé-boulé, vous le voyez faire volte-face et revenir à la charge.",
      "SEIGNEUR DÉMON TAGAZIN HABILETÉ: 55 ENDURANCE: 48 Si vous sortez vainqueur de ce combat, rendez-vous au 40."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 40.",
        "targetId": "40"
      }
    ],
    "combat": {
      "name": "SEIGNEUR DÉMON TAGAZIN",
      "combatSkill": 55,
      "endurance": 48,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "309": {
    "id": "309",
    "text": [
      "Vous nagez sous l'eau pendant près de trois minutes, couvrant plus de la moitié de la distance qui sépare le sous-marin de l'entrée du tunnel, mais l'eau glaciale et le poids de vos vêtements et de votre équipement sapent peu à peu vos forces.",
      "Si vous ne remontez pas à la surface pour respirer dans les secondes qui suivent, vous allez succomber à l'asphyxie et couler à pic...",
      "Si vous possédez de l'Herbe de Sabito, rendez-vous au 13.",
      "Sinon, rendez-vous au 274."
    ],
    "choices": [
      {
        "text": "Si vous possédez de l'Herbe de Sabito, rendez-vous au 13.",
        "targetId": "13"
      },
      {
        "text": "Sinon, rendez-vous au 274.",
        "targetId": "274"
      }
    ]
  },
  "310": {
    "id": "310",
    "text": [
      "Vous dévalez l'escalier et, jaillissant hors de la tour, vous descendez en courant une étroite rue pavée conduisant directement au port. Vous apercevez bientôt devant vous le capitaine Lanza et quelques-uns de ses hommes engagés dans un farouche corps à corps avec une horde hurlante de guerriers squelettes.",
      "Le combat fait rage sur toute la largeur de la rue, barrant l'accès du port, aussi bifurquez-vous dans une ruelle latérale dans l'espoir de rejoindre le brise-glace par un autre chemin. Emergeant de la ruelle, vous tournez dans un autre passage descendant vers le port... pour vous retrouver nez à nez avec une autre meute de squelettes grimaçants !",
      "Vous n'avez que le temps de dégainer votre arme pour soutenir leur furieuse attaque. IXIANS MORTS VIVANTS HABILETÉ: 45 ENDURANCE: 52 Ces êtres sont insensibles à toutes les formes d'attaque psychique, hormis la Grande Discipline du Foudroiement Psychique et la Déflagration Psychique.",
      "Vous pouvez rompre le combat après trois Assauts en vous rendant au 295.",
      "Si vous êtes victorieux, rendez-vous au 48."
    ],
    "choices": [
      {
        "text": "Si vous êtes victorieux, rendez-vous au 48.",
        "targetId": "48"
      }
    ],
    "combat": {
      "name": "IXIANS MORTS VIVANTS",
      "combatSkill": 45,
      "endurance": 52,
      "mindblastImmune": false,
      "undead": true
    }
  },
  "311": {
    "id": "311",
    "text": [
      "Une partie du sol se soulève, formant un piédestal de pierre sur lequel se dresse un gigantesque chacal à dents de sabre que vous reconnaissez immédiatement. C'est le Seigneur Démon Tagazin, la bête surnaturelle que vous avez rencontrée il y a de longues années, au cours de la quête qui devait vous conduire dans les noirs souterrains de Torgar.",
      "La soudaine apparition de cette redoutable créature, que vous aviez à l'époque affrontée et vaincue, sans toutefois la détruire, vous fait frissonner d'effroi. Votre petit doigt Kaï vous dit que Tagazin est un serviteur d'Ixiataaga, certainement son meilleur lieutenant.",
      "Le Seigneur Démon vous a lui aussi reconnu. Il n'a pas oublié l'humiliante défaite que vous lui avez jadis infligée, et ce souvenir cuisant l'emplit d'une rage vengeresse. Comme s'il salivait, de sombres gouttes de venin s'écoulent de ses crocs dénudés et une lueur meurtrière étincelle au fond de ses yeux tandis qu'il s'avance lentement vers vous...",
      "Rendez-vous au 254."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 254.",
        "targetId": "254"
      }
    ]
  },
  "312": {
    "id": "312",
    "text": [
      "Bien qu'abasourdi par le choc et secoué de tremblements, vous êtes indemne. Grâce à votre maîtrise Kaï, la massive décharge électrique a traversé votre corps sans causer de blessures. Vous vous relevez en titubant et entreprenez d'ôter votre Sac à Dos encore fumant.",
      "Après avoir étouffé sous des poignées de neige les parties incandescentes du sac, vous ouvrez son rabat pour constater que deux des objets qu'il contenait ont été entièrement carbonisés. (Rayez de votre Feuille d'Aventure deux objets de votre choix.) Heureux de vous en tirer à si bon compte, vous remettez votre sac à l'épaule pour franchir les quelques mètres qui vous séparent de la grotte.",
      "Rendez-vous au 146."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 146.",
        "targetId": "146"
      }
    ]
  },
  "313": {
    "id": "313",
    "text": [
      "En utilisant votre Grande Maîtrise Kaï, vous percevez les différentes nuances du spectre ultraviolet. En fait, la lumière émise par cette machinerie diabolique est très semblable au rayonnement naturel du soleil, mais elle est d'une intensité anormale.",
      "Un frisson d'effroi vous parcourt l'échiné... ces rayons spectraux sont assez puissants pour tuer n'importe quelle créature vivante !",
      "Rendez-vous au 127."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 127.",
        "targetId": "127"
      }
    ]
  },
  "314": {
    "id": "314",
    "text": [
      "Durant cinq heures, vous restez terré dans votre cachette, essayant de donner un sens aux bruits étranges de l'immense vaisseau qui a englouti votre navire. Ce qui vous laisse le temps de reprendre des forces. (A moins de maîtriser la Grande Discipline de l'Art de la Chasse, vous devez prendre un Repas ou perdre 3 points d'ENDURANCE.) Au terme de cette attente, le navire ralentit progressivement son allure, comme s'il se préparait à accoster.",
      "Avide de vous échapper et plus inquiet que jamais du sort de votre équipage, vous vous glissez hors de votre cachette et grimpez sans bruit l'escalier qui mène au pont.",
      "Rendez-vous au 153."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 153.",
        "targetId": "153"
      }
    ]
  },
  "315": {
    "id": "315",
    "text": [
      "Pendant d'interminables minutes, vous restez étendu sur des dalles noires, gémissant de douleur. Mais, peu à peu, vos facultés naturelles de Guérison Kaï calment le feu qui dévore votre corps et vous finissez par retrouver assez de forces pour vous lever et vous éloigner aussi vite que possible du dévastateur champ d'énergie.",
      "Rendez-vous au 300."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 300.",
        "targetId": "300"
      }
    ]
  },
  "316": {
    "id": "316",
    "text": [
      "Bondissant entre les décombres, vous vous engouffrez sous la grande arche qui oscille, vibre et se fissure dans un sourd grondement. Mais, dans votre course désespérée, vous dérapez soudain sur un débris de cristal et tombez en avant, heurtant violemment un pilastre de la tête.",
      "A demi assommé, vous ne parvenez pas à vous relever assez vite pour échapper à la chute, fatale, de l'énorme clef de voûte de l'arche. Faisant preuve d'un courage indomptable, vous avez défait le Seigneur de la Mort Ixiataaga, sauvant des millions d'âmes anonymes des affres d'un esclavage éternel.",
      "Tant que les forces du Bien régneront sur le Magnamund, le souvenir glorieux de votre victoire sera honoré dans toutes les mémoires."
    ],
    "choices": []
  },
  "317": {
    "id": "317",
    "text": [
      "Emporté par votre élan, vous lâchez le cordage et fendez les flammes et la fumée tel un projectile, décrivant une vaste parabole avant de retomber sur le quai avec une brutalité qui vous coupe le souffle. Fort heureusement, votre souplesse naturelle et vos dons Kaï vous conservent indemne et vous ne tardez pas à vous remettre du choc.",
      "Peu après, vous êtes rejoint par le capitaine Lanza et ses hommes, visiblement ébahis de vous revoir en vie. - L'ennemi est en déroute ! s'exclame Lanza. Nous avons expédié plus de la moitié de ces damnés squelettes, et ceux qui restent ont le dos à la mer.",
      "Voulez-vous nous aider à finir la besogne, Grand Maître ? - Avec joie, répondez-vous. Par Kaï et Ishir, renvoyons-les tous à leur maudit créateur !",
      "Rendez-vous au 340."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 340.",
        "targetId": "340"
      }
    ]
  },
  "318": {
    "id": "318",
    "text": [
      "La frénésie sanguinaire des créatures du Chaos est telle qu'un grand nombre d'entre elles sont tombées dans le puits en cherchant à vous atteindre, offrant un festin de choix au monstre vorace tapi dans la fange. Les autres sont tombées sous les coups puissants de votre arme.",
      "Sans un regard en arrière, vous regagnez le toit du bâtiment, puis vous courez le long du talus moussu vers un bosquet d'arbres enveloppés d'un brouillard opaque. En traversant ce bois sinistre, vous découvrez des traces fraîches du passage de Tagazin.",
      "Les empreintes laissées par ses pattes griffues dans le sol limoneux forment une piste qui vous conduit aussi sûrement qu'une route balisée sur les talons du Seigneur Démon. Redoublant d'ardeur, vous traversez un épais hallier de ronces aux épines pointues avant d'escalader une colline en pente douce.",
      "Parvenu sur la crête de cette colline, vous découvrez un spectacle qui vous glace le sang !",
      "Rendez-vous au 150."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 150.",
        "targetId": "150"
      }
    ]
  },
  "319": {
    "id": "319",
    "text": [
      "Votre réaction n'est malheureusement pas assez vive pour vous permettre d'esquiver le tir croisé des créatures. Quand vous tombez à plat ventre dans la neige, chaque atome de votre corps est déchiré par une douleur insoutenable. Puis tous vos sens sombrent dans l'explosion de lumière blanche qui souffle votre ultime étincelle de vie.",
      "Votre tragique aventure s'achève ici, dans les ruines glacées de Xaagon la Maudite... Le panneau débouche sur une chambre en forme de dôme où, fixés sur des socles articulés, de nombreux globes en cristal emplis de feu liquide génèrent l'intense lumière qui inonde le pont du navire captif.",
      "Traversant la salle, vous entrez dans un tunnel pour poursuivre votre exploration. Vous avancez avec prudence, comme une ombre, dans le labyrinthe de coursives encroûtées de glace, de cales vides dont les parois sont renforcées de scintillantes poutrelles de cristal et de chambres basses balayées de courants d'air glacial.",
      "Partout règne une puanteur de mort et de pourriture. Au terme d'une longue marche, vous finissez par atteindre une étroite coursive qui se divise en deux.",
      "Si vous voulez emprunter la branche de gauche, rendez-vous au 106.",
      "Si vous préférez prendre le passage de droite, rendez-vous au 292."
    ],
    "choices": [
      {
        "text": "Si vous voulez emprunter la branche de gauche, rendez-vous au 106.",
        "targetId": "106"
      },
      {
        "text": "Si vous préférez prendre le passage de droite, rendez-vous au 292.",
        "targetId": "292"
      }
    ]
  },
  "321": {
    "id": "321",
    "text": [
      "Alors que la Brise de Mai fend les vagues glacées, l'étrave pointée vers le fort, un fanal s'illumine, signalant de sa dansante flamme jaune l'entrée du port du poste avancé. Un drapeau Lencien monte au sommet de la tour de guet sous les hourras de l'équipage, soulagé d'arriver à bon port après deux semaines d'une difficile et périlleuse traversée.",
      "Courant sur son erre, le navire va se poster à quai, non loin du brise-glace à l'étrave cuirassée qui doit vous conduire à Ixia. Trépignant d'excitation, les soldats de la garnison se sont rassemblés sur le quai pour saluer les marins de la Brise de Mai, réjouis de voir enfin arriver les vivres frais et les nouvelles de leur terre natale qu'ils attendent depuis de longues semaines.",
      "Débarquant avec Prarg, vous êtes accueilli au pied de la passerelle par un sergent barbu emmitouflé dans une tunique de cuir fourrée. Il vous escorte jusqu'à la tour de guet où vous êtes reçu par le chef de la garnison en personne, le capitaine Lanza.",
      "Rendez-vous au 117."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 117.",
        "targetId": "117"
      }
    ]
  },
  "322": {
    "id": "322",
    "text": [
      "Après avoir examiné avec soin le boîtier qui le contient, vous concluez que le mécanisme de la serrure obéit à l'énergie psychique. Les symboles étranges, finement ciselés, qui ornent le boîtier sont autant d'indices qui vont vous permettre de découvrir un nombre à trois chiffres.",
      "Après avoir trouvé ce nombre, il vous suffira de projeter son image sur la serrure à l'aide de vos pouvoirs Kaï pour débloquer son mécanisme et voir la porte s'ouvrir. Le premier des trois chiffres est égal au nombre d'îles que l'on peut trouver entre la mer de Tozaz et le golfe de Konkor.",
      "Le deuxième chiffre est égal au nombre d'îles que l'on peut trouver dans le lac Ghargon. Le troisième chiffre est égal au nombre de cités qui se dressent sur les rives du fleuve Zegar. Consultez votre carte pour déterminer le nombre à trois chiffres qui vous permettra de déverrouiller la serrure.",
      "Lorsque vous penserez l'avoir trouvé, rendez-vous au paragraphe qui porte ce numéro.",
      "Si la réponse se révèle à l'évidence inexacte, ou si vous ne parvenez pas à résoudre cette énigme, rendez-vous au 84."
    ],
    "choices": [
      {
        "text": "si vous ne parvenez pas à résoudre cette énigme, rendez-vous au 84.",
        "targetId": "84"
      }
    ]
  },
  "323": {
    "id": "323",
    "text": [
      "Vous parvenez, non sans mal, à extirper la corde de votre Sac à Dos afin de confectionner à la hâte un nœud coulant. Puis, adressant une brève prière à Kaï et à Ishir, vous la lancez dans l'espoir d'attraper un éperon dans sa boucle.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 1 au chiffre obtenu.",
      "Si le résultat est inférieur ou égal à 3, rendez-vous au 285.",
      "S'il est supérieur ou égal à 4, rendez-vous au 137."
    ],
    "choices": [
      {
        "text": "rendez-vous au 285.",
        "targetId": "285"
      },
      {
        "text": "rendez-vous au 137.",
        "targetId": "137"
      }
    ]
  },
  "324": {
    "id": "324",
    "text": [
      "Vous vous dirigez vers l'échelle d'accès au pont quand votre sixième sens Kaï vous avertit que d'autres morts vivants sont sur le point de descendre à leur tour dans la cale. Etouffant un juron, vous faites demi-tour et courez vers l'arrière du navire pour vous cacher derrière l'axe de son gouvernail.",
      "Comme vous l'aviez craint, un nouveau groupe de Drakkarims morts vivants fait irruption dans la cale quelques secondes plus tard. Mais ils remontent rapidement sur le pont, au terme d'une fouille superficielle, sans se soucier des corps démembrés de ceux que vous avez abattus.",
      "Peu après, un silence de mort s'installe sur le bateau, et votre esprit s'assombrit à la pensée des matelots Lenciens... d'autant que vos sens Kaï ne perçoivent la présence d'aucun être vivant dans les parages.",
      "Si vous voulez aller voir ce qui se passe sur le pont, rendez-vous au 186.",
      "Si vous préférez rester caché dans la cale, rendez-vous au 314."
    ],
    "choices": [
      {
        "text": "Si vous voulez aller voir ce qui se passe sur le pont, rendez-vous au 186.",
        "targetId": "186"
      },
      {
        "text": "Si vous préférez rester caché dans la cale, rendez-vous au 314.",
        "targetId": "314"
      }
    ]
  },
  "325": {
    "id": "325",
    "text": [
      "Vous dressez vos défenses psychiques pour vous protéger des radiations maléfiques de la Tour de Cristal. Mais ces ondes sont d'une intensité telle que vous perdez 2 points d'ENDURANCE.",
      "Rendez-vous au 330."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 330.",
        "targetId": "330"
      }
    ],
    "damage": 2
  },
  "326": {
    "id": "326",
    "text": [
      "Vous utilisez votre haut niveau de Maîtrise Kaï pour réduire au minimum le poids de votre corps avant de sauter dans le vide. Peu après, vous tombez dans l'air chargé de poussière, avant de toucher le sol jonché de décombres du grand hall, vingt mètres plus bas.",
      "A cet instant, vous ne pesez pas beaucoup plus lourd qu'un chat domestique, mais la vitesse de votre chute rend le choc assez brutal pour vous tordre douloureusement les chevilles, chasser l'air de vos poumons et vous faire perdre 2 points d'ENDURANCE.",
      "Rendez-vous au 62."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 62.",
        "targetId": "62"
      }
    ]
  },
  "327": {
    "id": "327",
    "text": [
      "Finalement, vos efforts viennent à bout de la serrure et la lourde porte s'entrebâille en grinçant sur ses gonds. Une bourrasque d'air glacé vous cingle le visage lorsque vous poussez le battant en prenant pied sur une plateforme d'observation fixée sur la structure métallique extérieure du gigantesque sous-marin ennemi.",
      "Sur la droite, vous pouvez voir au loin un alignement de brise-glace mouillés le long de la rive du lac. Sur la gauche, vous apercevez une colonne de guerriers squelettes. Suivant d'un pas mécanique un Kherbala vêtu d'une robe noire, ces sinistres créatures avancent le long d'une jetée en direction de la bouche d'un tunnel.",
      "Vos infaillibles sens Kaï vous indiquent que vous êtes arrivé à Ixia et que ce lointain tunnel conduit à la surface. Vous mémorisez la position des brise-glace car, si vous parvenez au bout de votre mission, il faudra bien trouver un moyen de vous échapper de l'enfer glacé d'Ixia.",
      "Vous examinez ensuite avec soin les parages immédiats du sous-marin.",
      "Pour atteindre le lointain tunnel, deux solutions s'offrent à vous : emprunter la jetée contre laquelle est amarré le bâtiment (rendez-vous au 30) ou plonger dans les eaux glaciales du lac et nager jusqu'à la rive (rendez-vous au 161)."
    ],
    "choices": [
      {
        "text": "rendez-vous au 30) ou plonger dans les eaux glaciales du lac et nager jusqu'à la rive (rendez-vous au 161).",
        "targetId": "30"
      }
    ]
  },
  "328": {
    "id": "328",
    "text": [
      "En tentant de forcer cette serrure par la seule force de votre esprit, vous avez déclenché une alarme qui, à son tour, met en œuvre un terrible sortilège de protection. D'abord ébloui par un éclair aveuglant, vous êtes ensuite frappé, en plein visage, par un rai d'énergie pure sorti du trou de la serrure.",
      "En un instant, une insoutenable explosion de douleur détruit votre esprit, puis chaque atome de votre corps. Ici s'achèvent votre existence et votre quête."
    ],
    "choices": []
  },
  "329": {
    "id": "329",
    "text": [
      "Délaissant les restes du Ziog, vous voyez que Lanza et ses hommes, taillant à coups d'épée leur chemin à travers les rangs ennemis, atteignent maintenant le bord du quai. Le capitaine, le visage trempé de sueur, vous crie quelque chose en vous faisant de grands signes avec son épée.",
      "Le cours de la bataille s'est visiblement renversé, et vous croyez d'abord qu'il veut vous faire partager l'exaltation de la victoire. Puis vous vous apercevez qu'il ne vous adresse pas des cris de joie, mais tente de vous avertir d'un danger imminent !",
      "Dans la seconde qui suit, une pluie de flèches incendiaires jaillit de la proue du vaisseau noir et s'abat en sifflant sur le brise-glace. Vous plongez à couvert, juste à temps pour éviter d'être touché, mais les projectiles enflammés criblent les ponts et le gréement du navire Lencien dont les voiles s'embrasent aussitôt.",
      "Le feu se répand à une vitesse surnaturelle d'un bord à l'autre et vous vous retrouvez bientôt cerné par les flammes.",
      "Si vous voulez échapper à l'incendie en sautant dans l'eau du port, rendez-vous au 42.",
      "Si vous préférez tenter d'atteindre le quai en vous balançant le long d'un cordage, rendez-vous au 201."
    ],
    "choices": [
      {
        "text": "Si vous voulez échapper à l'incendie en sautant dans l'eau du port, rendez-vous au 42.",
        "targetId": "42"
      },
      {
        "text": "Si vous préférez tenter d'atteindre le quai en vous balançant le long d'un cordage, rendez-vous au 201.",
        "targetId": "201"
      }
    ]
  },
  "330": {
    "id": "330",
    "text": [
      "Fort occupé à lutter contre le pouvoir maléfique de la Tour de Cristal, vous n'avez pas détecté un danger beaucoup plus proche. Débouchant d'une ruelle étroite, sur votre gauche, trois créatures drapées dans des robes noires en loques surgissent soudain dans votre champ de vision.",
      "En vous apercevant, elles poussent un affreux concert de cris stridents. Vous leur faites aussitôt face, bien décidé à les réduire au silence avant que leurs glapissements aient ameuté tous les abominables hôtes de Xaagon.",
      "Si vous possédez un arc et si vous voulez l'utiliser, rendez-vous au 281.",
      "Si vous souhaitez faire appel à la Grande Discipline du Foudroiement Psychique, ayant atteint le rang de Grand Maître Tutélaire, ou un rang supérieur, rendez-vous au 234.",
      "Dans tous les autres cas, rendez-vous au 60."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et si vous voulez l'utiliser, rendez-vous au 281.",
        "targetId": "281"
      },
      {
        "text": "Si vous souhaitez faire appel à la Grande Discipline du Foudroiement Psychique, ayant atteint le rang de Grand Maître Tutélaire, ou un rang supérieur, rendez-vous au 234.",
        "targetId": "234"
      },
      {
        "text": "rendez-vous au 60.",
        "targetId": "60"
      }
    ]
  },
  "331": {
    "id": "331",
    "text": [
      "Vous vous plaquez au sol pour éviter le boulet d'énergie qui fond sur vous. Le mortel projectile passe en vrombissant au-dessus de votre dos pour aller s'écraser sur le mur le plus éloigné de la salle, dans une formidable déflagration. L'explosion ouvre un trou de plus de trois mètres de diamètre dans la paroi de cristal dur comme l'acier, projetant à travers la pièce une pluie cinglante d'éclats acérés qui vous blessent cruellement. (Vous perdez 3 points d'ENDURANCE.) Alors que vous vous relevez péniblement, une occasion en or s'offre à vous de reprendre l'initiative et de porter le fer et la douleur dans le camp du Seigneur de la Mort.",
      "Rendez-vous au 108."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 108.",
        "targetId": "108"
      }
    ],
    "damage": 3
  },
  "332": {
    "id": "332",
    "text": [
      "Après de brefs adieux, vous appareillez. A la sortie du port, vous mettez le cap au nord. Moins d'une heure après midi, la longue nuit hivernale de ces latitudes nordiques est déjà tombée. Vous scrutez l'obscurité glaciale en compagnie des six soldats Lenciens qui se sont portés volontaires pour cette mission périlleuse.",
      "Lanza leur a donné l'ordre de vous débarquer sur la côte d'Ixia et de vous attendre au mouillage pendant sept jours, mais pas un de plus... Seule la lueur verdâtre qui rayonne de la sphère installée dans la timonerie perce les ténèbres. Posté auprès d'elle, vous vous sentez peu à peu hypnotisé par son éclat palpitant, puis envahi par une sensation de malaise.",
      "Interrogeant vos sens Kaï, vous vous rendez compte qu'une aura maléfique plane sur le navire.",
      "Si vous maîtrisez la Grande Discipline de la Science Médicale et si vous avez atteint le rang de Grand Maître Éminent, ou un rang supérieur, rendez-vous au 155.",
      "Si vous ne remplissez pas ces conditions, rendez-vous au 291."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de la Science Médicale et si vous avez atteint le rang de Grand Maître Éminent, ou un rang supérieur, rendez-vous au 155.",
        "targetId": "155"
      },
      {
        "text": "Si vous ne remplissez pas ces conditions, rendez-vous au 291.",
        "targetId": "291"
      }
    ]
  },
  "333": {
    "id": "333",
    "text": [
      "Votre intuition, transcendée par votre maîtrise Kaï, vous avertit que le rideau de lumière qui vous barre le passage peut causer de graves dommages physiques à tout être vivant qui se risquerait à le traverser. Cependant, elle vous dit aussi que le seul chemin pouvant à coup sûr vous mener aux étages supérieurs de la citadelle passe par ce porche voûté.",
      "Si vous décidez de franchir l'arche scintillante au risque d'être blessé, voire de trouver la mort, rendez-vous au 265.",
      "Si vous préférez chercher un autre moyen d'atteindre les plus hauts niveaux de la Tour de Cristal, rendez-vous au 4."
    ],
    "choices": [
      {
        "text": "Si vous décidez de franchir l'arche scintillante au risque d'être blessé, voire de trouver la mort, rendez-vous au 265.",
        "targetId": "265"
      },
      {
        "text": "Si vous préférez chercher un autre moyen d'atteindre les plus hauts niveaux de la Tour de Cristal, rendez-vous au 4.",
        "targetId": "4"
      }
    ]
  },
  "334": {
    "id": "334",
    "text": [
      "Vous faites volte-face et vous revenez dans la salle d'armes. Là, vous ne résistez pas à l'envie d'examiner une des épées de cristal. C'est une lame fine, mais elle n'a visiblement pas été créée par des mains humaines, aussi la remettez-vous en place avant de quitter la pièce et de remonter l'escalier jusqu'à la caverne de glace.",
      "Tapi dans l'ombre au sommet des marches, vous attendez la première occasion de vous faufiler par le passage voûté creusé dans la paroi est.",
      "Rendez-vous au 7."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 7.",
        "targetId": "7"
      }
    ]
  },
  "335": {
    "id": "335",
    "text": [
      "Au bout d'une heure d'attente, la voie est enfin libre. Rassemblant tout votre courage, vous vous faufilez hors des ruines de la tour de guet et, après avoir remonté la rampe au pas de course, vous passez sous la grande arche.",
      "Rendez-vous au 249."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 249.",
        "targetId": "249"
      }
    ]
  },
  "336": {
    "id": "336",
    "text": [
      "Faisant appel à la Grande Discipline du Foudroiement Psychique, vous projetez une violente décharge d'énergie mentale sur les deux gardes, espérant ainsi rompre le sortilège qui les anime et les contrôle. Malheureusement, votre attaque se brise sur un bouclier invisible, une protection surnaturelle placée sur les deux morts vivants par quelque puissant nécromancien.",
      "Alertés mentalement de votre présence, les deux Drakkarims se précipitent vers vous.",
      "DRAKKARIMS MORTS VIVANTS HABILETÉ: 40 ENDURANCE: 42 Privé de vos armes et de votre équipement, vous n'avez d'autre choix que de les affronter à mains nues. (N'oubliez pas d'ajuster en conséquence votre total d'HABILETÉ.) Si vous sortez vainqueur de ce combat, rendez-vous au 63."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 63.",
        "targetId": "63"
      }
    ],
    "combat": {
      "name": "DRAKKARIMS MORTS VIVANTS",
      "combatSkill": 40,
      "endurance": 42,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "337": {
    "id": "337",
    "text": [
      "Vous faites appel à votre pouvoir Kaï pour repousser la créature invisible qui rôde autour de vos jambes. Malheureusement, elle ne réagit pas exactement comme vous l'aviez espéré. Une douleur atroce déchire soudain votre mollet droit que la bête vient de happer dans ses puissantes mâchoires.",
      "Frappant à l'aveuglette, vous tentez désespérément d'abattre ce monstre avant qu'il parvienne à vous entraîner sous la surface de son bourbier.",
      "GLOUTON DES VASES HABILETÉ : 44 ENDURANCE : 44 Si vous sortez vainqueur de ce combat, rendez-vous au 67."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 67.",
        "targetId": "67"
      }
    ],
    "combat": {
      "name": "GLOUTON DES VASES",
      "combatSkill": 44,
      "endurance": 44,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "338": {
    "id": "338",
    "text": [
      "De longues heures s'écoulent avant que la tempête se calme suffisamment pour vous permettre de quitter votre abri improvisé et de reprendre votre expédition solitaire vers Xaagon. Parvenu à l'extrémité du défilé, vous faites halte en découvrant, loin en contrebas, les murs de la ténébreuse cité du Seigneur de la Mort.",
      "Jadis, il y a plusieurs millénaires, cette vaste métropole était le siège d'une brillante civilisation. Mais, aujourd'hui, les majestueux palais et temples de cristal de Xaagon n'abritent plus que le Seigneur de la Mort et ses hordes de démons. De la neige jusqu'aux genoux, vous poursuivez votre route, descendant vers la plaine côtière où s'élèvent les hautes murailles de la ville.",
      "Au centre de la cité se dresse une Tour de Cristal d'une taille sidérante. Elle a la forme d'une spirale et semble fouailler les cieux tumultueux tel un immense doigt accusateur. Sa pointe sommitale, qui attire la foudre des nuées d'orage, luit d'un éclat pourpre qui jette une lueur sinistre sur le morne paysage, tel un fanal infernal balayant de ses rayons sanglants l'étendue morte d'une mer de glace.",
      "En approchant des remparts de Xaagon. vous repérez deux passages par lesquels vous pourriez entrer dans la cité : une brèche ouverte dans le mur sud du côté de la mer et, dans le mur ouest, un vaste portail fracassé. Ni l'un ni l'autre de ces deux passages ne semblent gardés.",
      "Si vous voulez entrer dans Xaagon par la brèche dans le mur sud, rendez-vous au 165.",
      "Si vous préférez passer par la porte ouest, rendez-vous au 266."
    ],
    "choices": [
      {
        "text": "Si vous voulez entrer dans Xaagon par la brèche dans le mur sud, rendez-vous au 165.",
        "targetId": "165"
      },
      {
        "text": "Si vous préférez passer par la porte ouest, rendez-vous au 266.",
        "targetId": "266"
      }
    ]
  },
  "339": {
    "id": "339",
    "text": [
      "- Sois sans crainte, Banedon, répliquez-vous en dégainant l'Épée du Soleil. Tu sais bien que je possède une arme formidable entre toutes : le Glaive de Sommer ! Le magicien contemple la scintillante lame d'or et hoche lentement la tête. - Certes, Grand Maître, nulle autre que ton épée divine ne saurait mieux te servir dans la tâche qui t'incombe, mais tu ne devras en user qu'avec la plus extrême prudence.",
      "Dans les ténèbres d'Ixia, la flamme de son pouvoir risque de révéler ta présence au Seigneur de la Mort.",
      "Si vous possédez un Fourreau de Korlinium, rendez-vous au 101.",
      "Sinon, rendez-vous au 194."
    ],
    "choices": [
      {
        "text": "Si vous possédez un Fourreau de Korlinium, rendez-vous au 101.",
        "targetId": "101"
      },
      {
        "text": "Sinon, rendez-vous au 194.",
        "targetId": "194"
      }
    ]
  },
  "340": {
    "id": "340",
    "text": [
      "Lanza envoie quelques hommes chercher des marteaux de guerre rangés dans une cabane toute proche et les fait distribuer à ses soldats. - D'ordinaire, mes gars les utilisent pour dégager le port des glaces au plus fort de l'hiver, explique-t-il en vous tendant un de ces lourds engins au long manche avant de s'armer à son tour.",
      "Mais aujourd'hui, ce sont les os de nos ennemis qu'ils vont servir à briser ! Ainsi équipé, vous prenez place à côté du capitaine, à la tête de ses hommes, et vous chargez furieusement les rescapés, désemparés, de la meute des assaillants. Galvanisée par l'approche de la victoire, votre troupe écrase littéralement tout ce qui ose se dresser sur son passage, nettoyant le quai de tous les morts vivants à mesure qu'ils refluent vers leur noir vaisseau.",
      "En l'espace d'une petite heure, il ne reste de l'ennemi que des ossements éparpillés le long du poste reconquis. Cependant, les suites de la bataille ont pour vous un goût teinté d'amertume. Car, si vous pouvez tirer une légitime fierté de la part que vous avez prise dans la victoire aux côtés du valeureux Lanza, le brise- glace qui devait vous conduire en Ixia n'est plus désormais qu'une carcasse carbonisée gisant au fond du port.",
      "Seule la flèche de son grand mât émerge encore de la surface du bassin. Alors que vous contemplez ce dérisoire espar noirci dressé de guingois au-dessus des eaux sombres, le capitaine Prarg vient vous rejoindre. - Au nom d'Ishir, que pouvons-nous faire, Grand Maître ? soupire-t-il en promenant un regard abattu sur les lieux du désastre.",
      "Ce brise-glace était le seul navine capable de vous amener à Ixia. - N'ayez crainte, mon vieux Prarg, répliquez vous d'un air dégagé. Je viens d'avoir une petite idée qui pourrait bien nous donner la solution du problème...",
      "Rendez-vous au 177."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 177.",
        "targetId": "177"
      }
    ]
  },
  "341": {
    "id": "341",
    "text": [
      "Jaillissant de son fourreau opaque, votre lame divine inonde de sa lumière d'or la maléfique silhouette du Seigneur Démon. Le pouvoir soudain dévoilé de la glorieuse épée lui arrache un grognement d'effroi, mais cela ne suffit pas à le faire reculer. Poussant un hurlement bestial, Tagazin vous saute à la gorge, toutes griffes dehors !",
      "SEIGNEUR DÉMON TAGAZIN HABILETÉ: 55 ENDURANCE:"
    ],
    "choices": []
  },
  "342": {
    "id": "342",
    "text": [
      "En dépit de tous vos efforts, la serrure refuse obstinément de se débloquer, et votre vain acharnement vous laisse épuisé et dépité. Cet effort vous coûte 2 points d'ENDURANCE. Vous passez l'heure qui suit dans le calme et l'inconfort, attentif aux bruits lointains qui résonnent jusqu'à vous à travers la carcasse de l'étrange vaisseau.",
      "Soudain l'espoir renaît.",
      "Vous entendez un bruit de pas se rapprocher de votre cellule, rendez-vous au 191."
    ],
    "choices": [
      {
        "text": "rendez-vous au 191.",
        "targetId": "191"
      }
    ]
  },
  "343": {
    "id": "343",
    "text": [
      "Vous vous ruez hors du corps de garde et dévalez l'étroit escalier. Une fois dehors, la voie étant désormais libre de toute patrouille Drakkarim, vous courez vers le portail et pénétrez dans Xaagon. Vous vous faufilez avec prudence entre les majestueux vestiges de cette antique cité sur laquelle régnait une fière et puissante race d'hommes au temps des Anciens Royaumes.",
      "Alors que vous longez les ruines d'un mausolée, vous êtes contraint de vous dissimuler en hâte. Accroupi dans les décombres, vous voyez un détachement de guerriers Ixians longer d'un pas mécanique une avenue verglacée en direction d'une place ornée d'une gigantesque fontaine gelée.",
      "Au-delà des panaches d'eau solidifiés, vous apercevez une large rampe qui monte jusqu'à une grande arche dressée au pied de la Tour de Cristal.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse et si vous avez atteint le rang de Grand Maître Mentor, ou un rang supérieur, rendez-vous au 9.",
      "Si vous ne maîtrisez pas cette Grande Discipline ou si vous n'avez pas encore atteint ce rang, rendez-vous au 122."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse et si vous avez atteint le rang de Grand Maître Mentor, ou un rang supérieur, rendez-vous au 9.",
        "targetId": "9",
        "requiredDiscipline": "Chasse"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline ou si vous n'avez pas encore atteint ce rang, rendez-vous au 122.",
        "targetId": "122"
      }
    ]
  },
  "344": {
    "id": "344",
    "text": [
      "Risquant à chaque instant de périr écrasé sous les blocs de pierre et de cristal qui s'abattent autour de vous, vous n'avez d'autre choix que de sauter dans le vide.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 2 au chiffre obtenu. Si le résultat est inférieur ou égal à 1, rendez- vous au 269.",
      "S'il est compris entre 2 et 6, rendez-vous au 232.",
      "S'il est supérieur ou égal à 7, rendez-vous au 87."
    ],
    "choices": [
      {
        "text": "entre 2 et 6, rendez-vous au 232.",
        "targetId": "232"
      },
      {
        "text": "rendez-vous au 87.",
        "targetId": "87"
      }
    ]
  },
  "345": {
    "id": "345",
    "text": [
      "Confiant la barre à l'un des hommes d'équipage, vous vous allongez sur le sol de la timonerie pour dormir un peu. Quelques heures plus tard, la voix inquiète d'un matelot vous tire du sommeil. - Désolé d'vous réveiller comme ça, monseigneur, s'excuse-t-il en faisant tourner nerveusement son bonnet de laine entre ses mains calleuses, mais j'ai bien peur qu'on ait un sacré problème...",
      "Au-dehors, la lumière glauque d'une aube blafarde vous révèle un nouveau danger. Dans la grisaille du demi-jour, vous voyez se dessiner les contours de milliers d'icebergs. Une sourde angoisse s'empare de vous à la vue de cette immensité glacée, car elle pourrait fort bien se révéler infranchissable.",
      "Si vous décidez de reprendre la barre du navire à l'approche du champ d'icebergs, rendez-vous au 51.",
      "Si vous préférez rester posté à l'étrave pour piloter le timonier dans le dédale des glaces flottantes, rendez- vous au 189."
    ],
    "choices": [
      {
        "text": "Si vous décidez de reprendre la barre du navire à l'approche du champ d'icebergs, rendez-vous au 51.",
        "targetId": "51"
      }
    ]
  },
  "346": {
    "id": "346",
    "text": [
      "Empoignant à deux mains la garde de l'Épée du Soleil, vous la brandissez devant vous, le plat de sa lame d'or tourné face au projectile mortel. Dans un claquement assourdissant, la boule d'énergie rebondit sur le Glaive de Sommer avec une violence qui vous ébranle de la tête aux pieds.",
      "Puis elle finit sa course dans l'eau du port, en soulevant une gerbe d'écume qui gèle instantanément. L'abominable créature pousse un mugissement de rage et s'avance sur la passerelle en brandissant son bâton de glace comme une épée. Avec un calme impavide, tout en reculant de quelques pas pour monter à bord du vaisseau, vous levez lentement votre arme magique, prêt à frapper.",
      "Si vous voulez attaquer la créature dès qu'elle posera le pied sur le pont du brise-glace, rendez-vous au 277.",
      "Si vous préférez tenter de briser la passerelle avant qu'elle ait pu monter à bord, rendez-vous au 151."
    ],
    "choices": [
      {
        "text": "Si vous voulez attaquer la créature dès qu'elle posera le pied sur le pont du brise-glace, rendez-vous au 277.",
        "targetId": "277"
      },
      {
        "text": "Si vous préférez tenter de briser la passerelle avant qu'elle ait pu monter à bord, rendez-vous au 151.",
        "targetId": "151"
      }
    ]
  },
  "347": {
    "id": "347",
    "text": [
      "Sans ralentir votre course, vous déployez vos prodigieux pouvoirs de Camouflage pour que le Seigneur Démon et son escorte ailée ne puissent vous voir approcher. Mais, alors que vous n'êtes plus qu'à quelques dizaines de mètres de vos ennemis, l'aura de pouvoir bénéfique qui rayonne de votre corps dans cet univers trahit votre présence.",
      "Une grande agitation s'empare soudain des Monstres des Laves, et nombre d'entre eux s'élèvent dans le ciel. Guidés par un Tagazin assoiffé de vengeance, ils tournoient un moment avant d'attaquer en piqué, avides d'enfoncer leurs becs et leurs griffes dans vos chairs.",
      "MONSTRES DES LAVES HABILETÉ: 52 ENDURANCE: 52 Si vous sortez vainqueur de ce combat, rendez-vous au 105."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 105.",
        "targetId": "105"
      }
    ],
    "combat": {
      "name": "MONSTRES DES LAVES",
      "combatSkill": 52,
      "endurance": 52,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "348": {
    "id": "348",
    "text": [
      "Votre brusque changement de direction vous permet de gagner quelques précieuses secondes... et d'échapper aux terribles mâchoires d'un Orghle Ixian, un féroce prédateur sous-marin. A peine avez-vous eu le temps de vous hisser hors de l'eau en vous agrippant aux moellons du mur de la jetée que l'énorme tête de la bête émerge à quelques dizaines de centimètres sous vos pieds !",
      "Electrisé par la vue du monstre, vous oubliez les crampes qui tétanisent vos membres fourbus et vous escaladez la paroi à la vitesse d'un ouistiti épileptique. Parvenu au sommet, vous vous dissimulez derrière un tas de caisses et de barils en bois avant de vous retourner pour voir l'Orghle décrire des cercles au pied de la jetée en faisant bouillonner l'eau noire.",
      "Au bout d'une minute, lassé de ce vain exercice, il vous tourne le dos pour regagner sa tanière sous-marine. La jetée grouille de soldats morts vivants qui, sous la direction de quelques créatures décharnées drapées de noir, s'activent à transborder du matériel à l'intérieur et hors de la gueule béante du sous-marin.",
      "A première vue, il semble impossible de vous frayer impunément un chemin jusqu'à la terre au milieu d'une telle multitude. Vous désespérez quand, soudain, vous entrevoyez une possibilité d'atteindre votre but.",
      "Rendez-vous au 207."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 207.",
        "targetId": "207"
      }
    ]
  },
  "349": {
    "id": "349",
    "text": [
      "Guidé par l'intuition, vous saisissez la Gemme Verte pour la brandir à la face de vos assaillants. Aussitôt, la pierre brille d'un éclat surnaturel qui fait reculer les insectes, soudain saisis de panique, et vous comprenez qu'elle émet un pouvoir qui vide ces monstres de leur substance.",
      "Progressivement, leurs corps se dissolvent pour reprendre leur aspect fuligineux. Les fumerolles font une fois le tour de la chambre avant d'être absorbées par la roche poreuse qui entoure la Porte d'Ombre. Vous poussez un profond soupir de soulagement...",
      "Mais votre répit est de courte durée ! A peine ces abominations ont-elles disparu qu'une nouvelle monstruosité surgit dans la salle, émergeant du sol de pierre !",
      "Si, au cours d'une précédente aventure du Loup Solitaire, vous êtes déjà allé sur l'île des Spectres, rendez-vous au 311.",
      "Sinon, rendez-vous au 80."
    ],
    "choices": [
      {
        "text": "rendez-vous au 311.",
        "targetId": "311"
      },
      {
        "text": "Sinon, rendez-vous au 80.",
        "targetId": "80"
      }
    ]
  },
  "350": {
    "id": "350",
    "text": [
      "Deux jours après avoir franchi la barrière des glaces, vous arrivez en vue de Fort Azgad. Après les terribles épreuves que vous venez de traverser, l'austère petit poste avancé vous semble être l'un des lieux les plus accueillants que vous ayez jamais contemplé.",
      "Toute la garnison rassemblée sur le quai vous salue d'une clameur triomphale au moment où vous accostez, avec, au premier rang, le Seigneur Ardan et les capitaines Lanza et Prarg. Dès que vous posez le pied à terre, vos amis vous remercient et vous congratulent avec chaleur et émotion, mais vous n'en décelez pas moins un certain trouble dans leur voix et leur attitude. - Que se passe-t-il ? demandez-vous au Seigneur Ardan.",
      "Et pourquoi Banedon n'est-il pas avec vous ? A ces mots, le visage du vieillard s'assombrit. - Le Roi Ulnar a dépêché à la cour de Samac un message demandant au Maître de Guilde de revenir de toute urgence au Sommerlund. Un message, hélas, porteur de sombres nouvelles, Grand Maître.",
      "En votre absence, votre royaume a été attaqué. Naar — maudit soit son nom ! - a envoyé une horde de dragons anéantir le Second Ordre du Kaï et ravager votre terre natale. Et ces nouvelles créatures du dieu des Ténèbres se croient assurées d'une victoire écrasante, tant elles sont persuadées que vous n'avez pu vaincre le Seigneur des Ténèbres. -Je dois regagner le Sommerlund sur-le-champ, décla-rez-vous dans un souffle.",
      "Mes frères et mon pays ont besoin de moi. Tous hochent la tête en silence, et le Seigneur Ardan ajoute : - Nous allons faire tout ce qui est en notre pouvoir pour que vous y parveniez au plus vite. Cette terrible nouvelle vous a frappé de plein fouet.",
      "En Ixia, vous avez remporté une formidable victoire sur les forces du Mal, mais votre patrie ne va-t-elle pas la payer d'un prix trop lourd ? Vous êtes également inquiet du sort des disciples du Kaï. Les membres du Second Ordre sont passés experts dans toutes les formes de combat Kaï, mais ils sont jeunes et n'ont pas encore connu la fureur de la bataille.",
      "Et c'est avec ferveur que vous tournez vos prières vers votre dieu tutélaire pour qu'il leur donne la force de résister à l'assaut des nouveaux champions du sombre Naar, du moins jusqu'à votre retour... Arriverez-vous à regagner à temps votre lointaine patrie ?",
      "Et, si c'est le cas, par-viendrez-vous à empêcher les dragons de l'implacable Naar d'anéantir le Second Ordre du Kaï ? Tels sont les deux défis qu'il vous faudra relever dans le prochain volume des aventures du Grand Maître Loup Solitaire."
    ],
    "choices": []
  }
};
