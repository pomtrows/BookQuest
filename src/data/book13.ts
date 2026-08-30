import type { Section } from '../types/game';

export const storyDataBook13: Record<string, Section> = {
  "1": {
    "id": "1",
    "text": [
      "« Il vous faut partir au plus vite, Loup Solitaire, car vous le savez, le temps joue contre nous », vous dit Rimoah en arpentant nerveusement la grande salle du monastère. Vous acquiescez de vive voix et demandez à votre fidèle et sage ami de vous conseiller du mieux qu'il le peut au sujet de la dangereuse mission que vous allez entreprendre.",
      "En vérité — et cela ne vous surprend qu'à moitié -, Rimoah a déjà réglé certains détails concernant l'expédition, car il savait d'avance que vous accepteriez de vous en charger. Selon ses plans, vous devrez tout d'abord vous rendre au Royaume Libre de Palmyrion.",
      "Là, un guide vous escortera jusqu'au Ruel. Il vous fera passer la frontière en toute sécurité mais il ne s'aventurera pas plus loin. Rimoah vous informe que l'on sait très peu de chose à propos du Ruel, sinon que la forêt inextricable qui entoure et protège Mogaruith, la capitale des Céné-riens, est peuplée de créatures sorties tout droit des pires cauchemars.",
      "Certaines dépassent l'imagination, et les malheureux soldats qui ont survécu à la dernière invasion manquée du Ruel ont rapporté l'existence de vers gigantesques, crachant des jets d'acide et surgissant brusquement du sol pour engloutir d'un seul coup des régiments entiers.",
      "Ils ont également évoqué les terribles combats qu'ils eurent à livrer contre des hordes de créatures à face de rat surnommées Vazhags. Il paraît que les Cénériens font l'élevage de cette immonde vermine dans des terriers aménagés sous Mogaruith. Lorsque les Hommes-Rats sont suffisamment dressés, ils les lâchent pour qu'ils aillent patrouiller dans la forêt ou pour qu'ils rapportent de la nourriture destinée à d'abominables créatures qui, elles, s'aventurent rarement hors des murs de la forteresse.",
      "« Sincèrement, je voudrais pouvoir vous en apprendre plus au sujet du Ruel, Loup Solitaire, mais hélas je ne puis. Tout ce dont je suis sûr, c'est qu'il s'agit d'un endroit sinistre et particulièrement dangereux. Cependant, laissez-moi vous donner quelque chose qui vous sera utile lors de votre mission», poursuit Rimoah en vous tendant un flacon empli d'un liquide verdâtre.",
      "C'est le fameux vaccin qui vous protégera contre la peste. Vous prenez le flacon, vous ôtez le bouchon et vous en avalez le contenu. Votre estomac se rebelle instantanément au contact de cette substance âcre, et vous sentez la nausée vous gagner rapidement.",
      "Vous portez votre main à votre bouche en attendant que le malaise se dissipe. Après quelques instants, vous vous sentez mieux et vous êtes enfin capable de parler.",
      "« Combien de temps ce vaccin me protégera-t- il ? », demandez-vous du bout des lèvres à Rimoah.",
      "« Oh... Je suis persuadé qu'il agira fort longtemps, Loup Solitaire, répond-il en souriant. J'ai oublié de vous prévenir qu'il s'agissait d'une formule concentrée. Dans cette fiole, il y avait de quoi immuniser une bonne centaine de personnes !... » En l'espace de quelques heures, vous êtes fin prêt à partir pour le Palmyrion.",
      "Après avoir confié la direction du monastère aux Maîtres Kaï que vous avez formés, le seigneur Rimoah et vous quittez les lieux par l'un des tunnels que vous avez fait creuser afin d'aller et venir sans éveiller les soupçons. Vous débouchez dans une clairière située au cœur de la forêt de Fryelund.",
      "Là vous attendent votre ami Banedon et la Nef du Ciel, son vaisseau volant. Rimoah prend congé en vous assurant qu'il guettera impatiemment votre retour puis vous montez à bord de la Nef du Ciel en compagnie de Banedon.",
      "Rendez-vous au 260."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 260.",
        "targetId": "260"
      }
    ]
  },
  "2": {
    "id": "2",
    "text": [
      "Vous parvenez à vous dégager de la douloureuse étreinte de la créature et traversez la pièce en titubant, mais Cadak n'a pas l'intention de vous laisser échapper si facilement. De la pointe de son bâton jaillit soudain un faisceau de filaments épineux qui viennent s'enrouler autour de vous en enfonçant profondément leurs barbelures dans votre chair. (Vous perdez 1 point d'ENDURANCE.) Tandis que vous vous débattez désespérément pour vous libérer de ces liens cruels, Exterminus se rapproche pour vous porter le coup de grâce.",
      "Si vous maîtrisez la Grande Discipline Kaï de l'Exploration, rendez-vous au 97.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 245."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline Kaï de l'Exploration, rendez-vous au 97.",
        "targetId": "97",
        "requiredDiscipline": "Exploration"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 245.",
        "targetId": "245"
      }
    ],
    "damage": 1
  },
  "3": {
    "id": "3",
    "text": [
      "Avant de heurter le mur dans un bruit métallique, la pointe du poignard trace une longue estafilade sur votre épaule gauche ; vous perdez 2 points d'ENDURANCE. Enhardi par la blessure qu'il vient de vous infliger, le Vazhag empoigne un autre coutelas et vient sur vous en poussant des cris hystériques.",
      "Vous brandissez votre arme et faites face à votre ennemi au moment où il passe à l'attaque.",
      "VAZHAG OBÈSE HABILETÉ: 18 ENDURANCE: 28 Si vous sortez vainqueur du combat, rendez-vous au 121."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur du combat, rendez-vous au 121.",
        "targetId": "121"
      }
    ],
    "combat": {
      "name": "VAZHAG OBÈSE",
      "combatSkill": 18,
      "endurance": 28,
      "mindblastImmune": false,
      "undead": false
    },
    "damage": 2
  },
  "4": {
    "id": "4",
    "text": [
      "Avec un cri plaintif, le Cénérien porte les mains à la plaie mortelle qu'il vient de recevoir, puis il se laisse lentement glisser le long de la paroi de la caverne. Mais, alors qu'il s'écroule sur le sol, il tend brusquement le bras et fait une ultime tentative pour vous agripper la jambe.",
      "Vous reculez vivement pour échapper aux griffes acérées qui viennent de jaillir de sa main gantée, et le poison qu'elles renfermaient s'écoule en pure perte dans la poussière. Après vous être assuré que le druide est bel et bien mort, la curiosité vous pousse à retirer le masque vert qui cache son visage.",
      "Vous découvrez alors un faciès hideux, grené par la maladie et n'ayant presque plus rien d'humain. Avant de quitter la caverne, vous fouillez le druide et les Vazhags qui l'escortaient ; vous trouvez sur eux les objets suivants : Un poignard Une robe de Druide de Cener (Si vous décidez de la garder, sachez qu'elle prendra la place de 2 objets dans votre Sac à Dos.) Un masque Cénérien Seize Lunes (soit l'équivalent de 4 Pièces d'Or) Une épée Si vous voulez conserver certains de ces objets, n'oubliez pas d'apporter les modifications nécessaires sur votre Feuille d'Aventure.",
      "Ensuite, rendez-vous au 178."
    ],
    "choices": [
      {
        "text": "rendez-vous au 178.",
        "targetId": "178"
      }
    ],
    "loot": {
      "gold": 4
    }
  },
  "5": {
    "id": "5",
    "text": [
      "Le guerrier étreint sa blessure d'une main crispée, puis il s'effondre en poussant un dernier soupir. Vous vous approchez de lui et, de la pointe de votre arme, vous soulevez la visière de son casque de fer. Vous reconnaissez alors les traits rudes d'un Drakkarim, l'un des rares survivants qui ont trouvé refuge à Mogaruith après la défaite des Seigneurs des Ténèbres.",
      "Malheureusement pour lui, il n'avait sûrement pas prévu de vous retrouver un jour sur son chemin... Après avoir soigneusement caché les corps du Drakkarim et de son chien, vous refermez le portail et continuez à explorer Mogaruith.",
      "Rendez-vous au 205."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 205.",
        "targetId": "205"
      }
    ]
  },
  "6": {
    "id": "6",
    "text": [
      "Une onde de douleur accompagnée d'une violente nausée vous traverse de la tête aux pieds. (Vous perdez 3 points d'ENDURANCE.) Vous tombez à genoux, le corps parcouru de frissons. De toute évidence, vos défenses psychiques n'étaient pas assez fortes pour vous protéger contre les effets du puissant détecteur qui vient de sonder votre esprit, mais elles vous ont quand même permis de dissimuler votre véritable identité.",
      "Lorsque vous vous relevez enfin, la lumière, réfléchie par le masque Cénérien que vous portez, déclenche une cellule photosensible et vous voyez la lourde porte de métal s'ouvrir lentement.",
      "Rendez-vous au 150."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 150.",
        "targetId": "150"
      }
    ],
    "damage": 3
  },
  "7": {
    "id": "7",
    "text": [
      "Vous concentrez votre pouvoir sur la masse grouillante afin de la soumettre à votre contrôle mais, malheureusement, les créatures n'obéissent pas à vos ordres. Vous en déduisez qu'elles sont sous l'emprise d'un sort qui leur ôte tout libre arbitre et vous faites alors appel à vos capacités intérieures les plus puissantes pour tenter de conjurer ce sort.",
      "Les créatures cessent de s'agiter frénétiquement, mais avec une soudaineté presque inquiétante : on les croirait pétrifiées. Maintenant que vous pouvez les regarder tout à loisir, elles vous font penser à des cafards, si ce n'est qu'elles sont nettement plus grosses et munies d'une longue queue de rat.",
      "Vous les observez encore pendant un moment, puis vous faites un pas en avant. Instantanément, les créatures s'animent de nouveau mais cette fois, elles ne restent pas confinées au sol. Dans un grincement de porte rouillée multiplié à l'infini, elles déploient leurs ailes et s'élèvent dans les airs, tel un énorme nuage noir.",
      "Tandis que la queue de ce sinistre escadron disparaît au-dessus de la cime des arbres, vous priez de tout cœur pour qu'il ne s'agisse pas d'une horde de guetteurs au service des Cénériens. De l'autre côté de la clairière, la piste continue en s'enfonçant plus avant dans la forêt.",
      "Vous la suivez pendant une heure environ, jusqu'à ce que vos sens vous mettent en garde contre un danger imminent. Aussitôt, vous faites halte. Quelque chose bouge au-dessus de vous. Vous levez vivement la tête et dégainez votre arme pour parer une éventuelle attaque.",
      "Hélas, malgré la rapidité de vos réflexes, il vous est impossible d'échapper à la menace qui se tient tapie au creux des plus hautes branches. Soudain, un enchevêtrement de lianes barbelées tombe de la cime obscure des arbres. Elles s'agitent convulsivement vers vous, comme si elles étaient douées de leurs propres mouvements.",
      "Si vous maîtrisez la Grande Discipline de l'Exploration, rendez-vous au 257.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 140."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Exploration, rendez-vous au 257.",
        "targetId": "257",
        "requiredDiscipline": "Exploration"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 140.",
        "targetId": "140"
      }
    ]
  },
  "8": {
    "id": "8",
    "text": [
      "Vous vous accroupissez dans un recoin, dissimulé dans l'ombre de l'escalier et rendu presque invisible grâce à vos talents de camouflage. Quelques secondes plus tard, les Vazhags font leur apparition mais ils ne sont pas seuls. Ils sont précédés d'un Tzarg tenu en laisse au bout d'une grosse chaîne.",
      "L'espèce de batracien laisse ener sa gueule au ras des marches en reniflant comme un chien de chasse, comme s'il essayait de localiser votre présence.",
      "Si vous maîtrisez la Grande Discipline du Contrôle Animal et si vous souhaitez l'utiliser, rendez-vous au 207.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 154.",
      "Si vous ne maîtrisez aucune de ces Grandes Disciplines, rendez-vous au 36."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Contrôle Animal et si vous souhaitez l'utiliser, rendez-vous au 207.",
        "targetId": "207"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 154.",
        "targetId": "154"
      },
      {
        "text": "Si vous ne maîtrisez aucune de ces Grandes Disciplines, rendez-vous au 36.",
        "targetId": "36"
      }
    ]
  },
  "9": {
    "id": "9",
    "text": [
      "Vous en remettant à votre Discipline Magnakaï de l'Invisibilité, vous quittez votre cachette et tentez de passer près du chariot et de son escorte.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité, ajoutez 3 au nombre obtenu.",
      "Si le résultat est inférieur ou égal à 5, rendez-vous au 181.",
      "S'il est supérieur, rendez-vous au 59."
    ],
    "choices": [
      {
        "text": "rendez-vous au 181.",
        "targetId": "181"
      },
      {
        "text": "rendez-vous au 59.",
        "targetId": "59"
      }
    ]
  },
  "10": {
    "id": "10",
    "text": [
      "Vous longez prudemment le sentier qui s'enfonce dans l'obscurité, parfaitement conscient du mal qui semble suinter de chaque racine et de chaque branche dans cette forêt hostile. Alors que les ténèbres s'épaississent, une brume verdâtre commence à s'élever de l'humus qui recouvre le sol.",
      "L'odeur putride qui s'en dégage vous soulève le cœur et vous ne pouvez réprimer un frisson de dégoût au contact de ces miasmes. Peu à peu, vos yeux s'habituent à l'obscurité. Le sentier monte en pente douce et vous distinguez, tout en haut d'une éminence rocheuse, la silhouette d'une tour de guet en ruine.",
      "Vous pressentez intuitivement qu'elle est déserte et, impatient d'échapper au brouillard qui vous enveloppe, vous vous dirigez vers elle. A sa base s'ouvre une grande brèche à travers laquelle vous vous faufilez mais, ce faisant, vous dérangez un nid de bestioles ressemblant à des crabes.",
      "Elles s'enfuient en cliquetant et disparaissent en un clin d'œil sous les éboulis alentour. A demi mort de fatigue et découragé par les nombreux périls qui vous attendent, vous vous laissez tomber dans un coin de la tour et essayez de dormir quelques heures.",
      "Votre sommeil est perturbé par d'étranges rêves dans lesquels resurgissent toutes les peurs refoulées lors de votre état de veille. Des fantômes viennent vous hanter, qui prennent la forme de vos amis et de vos compatriotes. Les novices Kaï de votre monastère et les petites gens du Sommerlund vous apparaissent courbant le dos, le visage ravagé par la peste, et défilent tous devant vous en une interminable et pitoyable procession.",
      "Vous vous réveillez en sursaut, le cœur battant, le front ruisselant de sueur. Encore sous l'emprise de cet horrible cauchemar, vous êtes submergé par une vague de désespoir. Heureusement, votre confiance et votre assurance vous reviennent peu à peu. Vous interprétez ce rêve comme un avertissement de ce qui arrivera si vous échouez dans votre mission, et cela décuple votre volonté d'atteindre au plus vite Mogaruith afin de déjouer l'ignoble plan fomenté par les Druides de Cener.",
      "Vous avez dormi plusieurs heures et, physiquement du moins, ce repos vous a fait du bien. (Vous regagnez 3 points d'ENDURANCE.) A la lueur du petit matin, vous rassemblez votre équipement, puis vous vous remettez en route pour Mogaruith.",
      "Rendez-vous au 160."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 160.",
        "targetId": "160"
      }
    ]
  },
  "11": {
    "id": "11",
    "text": [
      "Tandis que vous parviennent des bruits de chaîne et de grattements métalliques, vous assenez un coup mortel à la créature qui tombe de son tabouret. Vous faites immédiatement volte-face, l'arme toujours au poing, et vous voyez dévaler, par une ouverture en demi-cercle, une meute de chiens de guerre aux crocs et aux griffes acérés comme des poignards.",
      "Alors qu'ils se précipitent sur vous, la gueule béante et écumante de bave, vous brandissez votre arme et vous vous campez fermement sur vos jambes pour vous préparer à recevoir leur attaque. index CHIENS DE GUERRE DU RUEL HABILETÉ : 36 ENDURANCE : 22 Si vous êtes vainqueur, rendez-vous au 323."
    ],
    "choices": [
      {
        "text": "Si vous êtes vainqueur, rendez-vous au 323.",
        "targetId": "323"
      }
    ],
    "combat": {
      "name": "INDEX CHIENS DE GUERRE DU RUEL",
      "combatSkill": 36,
      "endurance": 22,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "12": {
    "id": "12",
    "text": [
      "Tandis que vous vous rapprochez de la terrible forteresse, les troupes d'Hommes-Rats ne font pas - ou peu - attention à vous, mais le Zombie que vous ramenez provoque chez certains d'entre eux des grognements de dégoût. Traverser le pont-levis noirci par les siècles est une expérience éprouvante.",
      "Il est terminé par une lourde herse donnant accès à la tour de Mogaruith, et vous avez l'impression de marcher sur la langue d'un énorme dragon prêt à vous engloutir d'un instant à l'autre dans sa gueule béante. De part et d'autre du pont, des vapeurs nauséabondes s'élèvent des douves, emplissant l'atmosphère d'une puanteur douceâtre qui gêne votre respiration et trouble votre vision.",
      "Vous faites appel-à votre science Magnakaï pour remédier à ces désagréments, mais la vue qui s'offre à vous n'en est pas plus réjouissante pour autant. A l'entrée de la tour, vous êtes confronté à un groupe de gardes Vazhags qui toisent votre compagnon sans cacher leur répulsion.",
      "Vous mettez à profit votre maîtrise du Contrôle Animal et de l'Exploration pour augmenter l'effet de votre supercherie, puis vous informez les gardes que vous venez du sud pour affaires urgentes. Lorsqu'ils vous demandent ce que vous faites en compagnie d'un humain mort-vivant, vous essayez de les abuser, mais vous remarquez que la présence du Zombie attire de plus en plus l'attention autour de vous.",
      "L'un des Hommes-Rats pointe son museau à quelques centimètres de votre masque et vous annonce que vous pouvez pénétrer dans Mogaruith à condition de signaler votre arrivée au bureau d'admission.",
      "« Les inscriptions se font ici », vous dit-il en désignant une porte latérale. Aussitôt, votre Intuition Magnakai' vous prévient que le Vazhag a menti : c'est tout bonnement une cellule de prison qui vous attend derrière cette porte.",
      "Si vous décidez malgré tout de passer la porte indiquée, rendez-vous au 30.",
      "Si vous ne souhaitez pas entrer par cette porte, rendez-vous au 162.",
      "Si vous préférez tenter de distraire l'attention des gardes Vazhags, rendez-vous au 256."
    ],
    "choices": [
      {
        "text": "Si vous décidez malgré tout de passer la porte indiquée, rendez-vous au 30.",
        "targetId": "30"
      },
      {
        "text": "Si vous ne souhaitez pas entrer par cette porte, rendez-vous au 162.",
        "targetId": "162"
      },
      {
        "text": "Si vous préférez tenter de distraire l'attention des gardes Vazhags, rendez-vous au 256.",
        "targetId": "256"
      }
    ]
  },
  "13": {
    "id": "13",
    "text": [
      "Tandis que l'un des monstres, touché à mort, s'effondre sur le sol, vous vous écartez vivement de sa dépouille ensanglantée et foncez tête baissée à travers les rangs des goules hurlantes. Ces dernières sont encore sous le coup de la surprise : la rapidité avec laquelle vous avez abattu le Giganite semble les avoir privées de réaction et vous en profitez pour fuir le plus vite possible le long du tunnel feuillu.",
      "En jetant un coup d'ceil par-dessus votre épaule, vous voyez les créatures s'ébranler maladroitement pour se mettre à votre poursuite, mais elles trébuchent les unes sur les autres dans leur précipitation. Ce spectacle vous remonte un peu le moral mais, malheureusement, c'est un réconfort de courte durée, car un autre Giganite se dresse de toute sa taille, la gueule pleine de flegme en ébullition.",
      "Il arque son cou puissant en arrière et, d'un rapide mouvement de tête, crache un jet de salive qui fuse droit sur vous. Vous vous jetez instinctivement à terre, et l'immonde projectile passe en sifflant au-dessus de vous avant d'aller s'écraser contre un tronc d'arbre.",
      "Il se produit immédiatement un grésillement aigu et, dans un craquement sinistre, l'arbre s'abat au sol, la base tranchée net par la salive corrosive du monstre. De grosses gouttes vous éclaboussent et votre tunique se met aussitôt à fumer.",
      "Si vous maîtrisez la Grande Discipline du Nexus, rendez-vous au 88. Sinon, rendez- vous au 343."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Nexus, rendez-vous au 88.",
        "targetId": "88"
      }
    ]
  },
  "14": {
    "id": "14",
    "text": [
      "Vous vous frayez aisément un chemin à travers la cohue des femelles affamées et réussissez à gagner le souterrain qui s'ouvre au-delà du portail. Quelques minutes plus tard, vous entendez l'énorme porte se refermer avec fracas. Le passage se poursuit vers l'est sur plusieurs kilomètres et, à l'exception de quelques rares sentinelles Vazhags, il est pratiquement désert.",
      "Finalement, vous parvenez à l'entrée d'une autre caverne, nettement plus petite que la précédente, mais tout aussi bondée de monde. La lumière du jour y pénètre par une grande ouverture en arc de cercle que gardent des Vazhags en armure et un couple de chiens de guerre à peau calleuse.",
      "Par cette ouverture, vous apercevez un chemin qui disparaît derrière une lointaine rangée de collines. Juste au-dessus du porche, vous remarquez qu'un mince rayon de soleil filtre à travers une petite fenêtre creusée dans le rocher. Sachant qu'il serait risqué d'emprunter l'entrée principale - même pour quelqu'un d'aussi habile que vous — puisqu'elle est trop bien défendue, vous décidez de passer par la petite ouverture.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 3 au chiffre que vous avez tiré.",
      "Si le résultat est inférieur ou égal à 5, rendez-vous au 192.",
      "S'il est supérieur, rendez-vous au 346."
    ],
    "choices": [
      {
        "text": "rendez-vous au 192.",
        "targetId": "192"
      },
      {
        "text": "rendez-vous au 346.",
        "targetId": "346"
      }
    ]
  },
  "15": {
    "id": "15",
    "text": [
      "« Szalista », répondez-vous, ce qui signifie « quinze » en ancien langage Cénérien. Aussitôt, vous entendez se déclencher le mécanisme de la porte. Un courant d'air s'échappe en sifflant et le lourd vantail commence à tourner lentement sur ses gonds. Sans l'ombre d'une hésitation, vous franchissez le seuil et pénétrez dans le tunnel qui se présente devant vous.",
      "Rendez- vous au 205."
    ],
    "choices": []
  },
  "16": {
    "id": "16",
    "text": [
      "Le passage descend en pente raide et l'air corrompu qui y règne est chargé d'une poussière âcre qui vous irrite les yeux et les narines. Vous avancez les bras tendus en avant et, bien que l'obscurité ne vous gêne pas en temps normal, cette poussière devient si dense qu'il vous est difficile d'y voir à plus d'un mètre.",
      "Heureusement, votre science Magnakai vous protège de l'asphyxie et vous continuez à longer ce tunnel en espérant atteindre bientôt une partie plus saine. Un peu plus loin, vous remarquez que la voûte du tunnel est parcourue de fissures d'où s'échappent des coulées de mousse jaune vif.",
      "Des champignons de nuances variées et d'apparence plus que malsaine tapissent le bord de ces fissures. Au moment où vous passez en dessous d'elles, ces excroissances fongiques éclatent en diffusant un nuage de spores poisseuses. Instinctivement, votre corps a senti que ces spores contiennent un violent poison, aussi votre Science Médicale Magnakai se met-elle en action pour modifier votre métabolisme en conséquence.",
      "Une terrible douleur vous oppresse la poitrine, mais vous n'êtes pas grièvement atteint et vous ne perdez que 2 points d'ENDURANCE. Le nuage de spores est si épais que vous avez grand-peine à avancer. Vous avez l'impression de vous mouvoir dans un océan de boue.",
      "Certes, votre maîtrise Kaï vous a permis de neutraliser les substances toxiques libérées par les spores, mais l'oxygène est si rare à présent que l'air est irrespirable. Vous sentez avec horreur que vos forces vous abandonnent rapidement.",
      "Si vous possédez des Champignons de Baylon, rendez-vous au 277.",
      "Si vous n'en possédez pas, rendez-vous au 136."
    ],
    "choices": [
      {
        "text": "Si vous possédez des Champignons de Baylon, rendez-vous au 277.",
        "targetId": "277"
      },
      {
        "text": "Si vous n'en possédez pas, rendez-vous au 136.",
        "targetId": "136"
      }
    ]
  },
  "17": {
    "id": "17",
    "text": [
      "« Il n'existe qu'un seul être au monde capable de supporter le feu de cette baguette, siffle-t-il en maintenant son bâton pointé sur vous. Je suis heureux que le destin vous ait conduit jusqu'à moi, Loup Solitaire. A présent, votre sort est entre mes mains.",
      "Retournez-vous et préparez-vous à affronter la mort ! » Rendez- vous au 125."
    ],
    "choices": []
  },
  "18": {
    "id": "18",
    "text": [
      "Au moment où vous portez le coup fatal à votre adversaire, son corps explose violemment, éparpillant des débris momifiés dans toute la pièce. La force de la déflagration vous rejette en arrière et, en tombant, vous apercevez une silhouette mince et fantomatique qui s'élève vers le plafond.",
      "Elle reste en suspens pendant un instant, puis s'échappe à travers la voûte de pierre, telle une volute de fumée à travers un voile. Avant de quitter les lieux, vous prenez le temps d'inspecter le sarcophage. Vous y trouvez quelques haillons qui tombent en poussière et une Clé en Cuivre. (Si vous souhaitez la garder, inscrivez-la sur votre Feuille d'Aventure, parmi les Objets contenus dans votre Sac à Dos.) Maudissant votre malchance, vous sortez de la pièce et vous vous dirigez vers la porte du laboratoire.",
      "De l'autre côté, vous découvrez plusieurs passages étroits qui mènent tous à une antichambre voûtée. Les murs sont ornés de tapisseries qui dépeignent les légendes Cénériennes et retracent les ignobles agissements perpétrés lors de l'Age des Anciens Royaumes, à une époque où, voilà plus de mille ans maintenant, les Cénériens régnaient en tyrans sur toute la partie septentrionale du Magnamund.",
      "A l'autre bout de l'antichambre, la seule issue est une grosse porte en chêne qui est restée entrouverte. Vous vous en approchez et entendez soudain s'élever une lugubre mélopée de l'autre côté. Ne pouvant résister à la curiosité, vous risquez un œil par l'entrebâillement.",
      "Le spectacle qui s'offre alors à vos yeux vous glace le sang.",
      "Rendez-vous au 200."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 200.",
        "targetId": "200"
      }
    ]
  },
  "19": {
    "id": "19",
    "text": [
      "En baissant les yeux, vous voyez qu'une liane s'est enroulée autour de votre jambe. Vous tentez de vous en débarrasser, mais tous vos efforts restent vains. Vous vous rendez compte alors avec dégoût qu'il ne s'agit pas d'une liane mais d'un tentacule animé de sa propre volonté.",
      "Vous le tranchez d'un coup net, mais il en vient immédiatement un autre, puis un autre encore. Ils s'agrippent à vous comme des serpents en furie et vous vous retrouvez bientôt les jambes ligotées, irrésistiblement attiré vers le fond du bourbier. Vous luttez de toutes vos forces pour ne pas vous enfoncer dans la fange et donnez de grands coups à l'aveuglette, dans l'espoir de blesser votre attaquant à mort.",
      "Soudain, vous sentez quelque chose heurter la pointe de votre arme, et la pression des tentacules se relâche brutalement. Hélas ! ce répit n'est que de courte durée et bientôt, les bras de l'invisible créature vous enserrent avec une force décuplée. Tout à coup, une douleur fulgurante vous traverse les chevilles.",
      "Une multitude de crochets acérés, saillant des tentacules, viennent s'enfoncer dans votre chair. Vous ne pouvez réprimer un hurlement plaintif et, sous la surface boueuse, un rire gargouillant fait écho à vos cris.",
      "Si vous maîtrisez la Grande Discipline du Contrôle Animal, rendez-vous au 339.",
      "Sinon, rendez-vous au 47."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Contrôle Animal, rendez-vous au 339.",
        "targetId": "339"
      },
      {
        "text": "Sinon, rendez-vous au 47.",
        "targetId": "47"
      }
    ]
  },
  "20": {
    "id": "20",
    "text": [
      "Au moment où vous lui portez le coup de grâce, la créature pousse un hurlement suraigu qui fait taire instantanément tous les prisonniers des grottes et les fait reculer dans l'ombre de leurs infectes cellules. En un clin d'ceil, le Pechdrazil s'évapore dans l'atmosphère, ne laissant aucune trace excepté une odeur d'ozone, âcre et métallique.",
      "De la main, vous essuyez votre front couvert de sueur et, par-dessus votre épaule, vous observez les misérables créatures recroquevillées au fond de leurs cellules. Après avoir tranquillement rengainé votre arme, vous vous approchez de l'escalier qui s'enfonce dans l'obscurité.",
      "Vous sondez les ténèbres mais, malgré l'acuité de votre regard, vous ne parvenez pas à voir où les marches se terminent.",
      "Si vous voulez descendre cet escalier, rendez-vous au 106.",
      "Si vous préférez vous abstenir, vous pouvez rebrousser chemin jusqu'au croisement précédent et prendre le tunnel nord. (Rendez-vous au 85.)"
    ],
    "choices": [
      {
        "text": "Si vous voulez descendre cet escalier, rendez-vous au 106.",
        "targetId": "106"
      },
      {
        "text": "Rendez-vous au 85.",
        "targetId": "85"
      }
    ]
  },
  "21": {
    "id": "21",
    "text": [
      "En haut de l'escalier, vous débouchez dans un réfectoire en grand désordre. Le carrelage est jonché de détritus et des pyramides d'os rongés se dressent sur les tables. Dans l'âtre, un maigre feu de bois achève de se consumer. A l'autre extrémité, la pièce ne comporte qu'une seule issue : un porche en ogive donnant accès à un couloir.",
      "En traversant rapidement la salle pour y parvenir, vous apercevez un tas d'armes abandonnées près d'un banc.",
      "Parmi elles, vous remarquez plus spécialement : Un poignard Une épée Un glaive Un arc Quatre flèches Un carquois Si vous désirez garder une ou plusieurs de ces armes, n'oubliez pas de modifier votre Feuille d'Aventure, puis rendez-vous au 255."
    ],
    "choices": [
      {
        "text": "Si vous désirez garder une ou plusieurs de ces armes, n'oubliez pas de modifier votre Feuille d'Aventure, puis rendez-vous au 255.",
        "targetId": "255"
      }
    ]
  },
  "22": {
    "id": "22",
    "text": [
      "Un torrent d'huile en flammes vous frappe en plein visage et, sous la souffrance, vous tombez à genoux. Instinctivement, vous faites usage de votre Science Magnakai du Nexus et, en l'espace de quelques secondes, le feu s'étouffe et s'éteint définitivement.",
      "Vous perdez 4 points d'ENDURANCE. Le druide de Cener, qui se réjouissait déjà d'avoir réglé votre sort, commence à déchanter. En vous voyant approcher, son rire cruel lui reste en travers de la gorge et il se met à chercher fébrilement une arme. Il sort une dague à lame recourbée d'un fourreau dissimulé sous sa robe et la brandit d'une main peu assurée, dans l'espoir de vous tenir à distance.",
      "Vous lui ordonnez de lâcher son arme mais il reste sourd à votre demande et tente une feinte en se ruant brusquement sur vous. Vous déjouez aisément cette maladroite attaque du revers du bras droit et, de la main gauche, vous lui envoyez un crochet du gauche qui fracasse son masque.",
      "Le druide titube en arrière et s'effondre sur le sol en se tenant la gorge à deux mains. Vous le voyez se contorsionner pendant quelques instants, puis il s'immobilise complètement. Avec prudence, vous vous approchez de lui, craignant une nouvelle ruse de sa part, mais vous constatez qu'un éclat de son masque de verre lui a tranché les veines jugulaires.",
      "Désormais, cet adversaire ne représente plus aucune menace pour vous.",
      "Si vous voulez le fouiller, rendez-vous au 253.",
      "Si vous ne voulez pas le faire, rendez-vous au 306."
    ],
    "choices": [
      {
        "text": "Si vous voulez le fouiller, rendez-vous au 253.",
        "targetId": "253"
      },
      {
        "text": "Si vous ne voulez pas le faire, rendez-vous au 306.",
        "targetId": "306"
      }
    ],
    "damage": 4
  },
  "23": {
    "id": "23",
    "text": [
      "Vous fouillez rapidement les tiroirs du bureau, parcourant des yeux parchemins et registres dans l'espoir de trouver un indice concernant l'endroit précis où l'on cultive le virus de la peste. Malheureusement, vos recherches ne vous apprennent rien d'intéressant.",
      "En revanche, vous découvrez sous le bureau deux petits leviers. Votre Intuition Kaï vous révèle qu'ils commandent les deux portes de métal qui donnent sur la pièce où vous vous trouvez. Vous actionnez le levier de droite : la porte par laquelle vous êtes entré se referme.",
      "A présent, vous faites une pause avant d'actionner le levier de gauche, car vous savez qu'il déclenchera l'ouverture de la porte menant à la salle du trône de Cadak.",
      "Rendez-vous au 240."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 240.",
        "targetId": "240"
      }
    ]
  },
  "24": {
    "id": "24",
    "text": [
      "L'Agarashi pousse une plainte assourdissante au moment où vous lui enfoncez votre arme en plein cœur. Son corps massif se raidit, ses yeux rouges deviennent vitreux, telles deux boules de verre opaque. Pendant quelques instants, il reste immobile, agrippé à la paroi rocheuse, puis il lâche enfin prise et s'écrase lourdement au fond du puits.",
      "A demi mort de fatigue, vous rengainez votre arme et vous vous efforcez d'atteindre la surface au plus vite, pour le cas où quelqu'un - ou quelque chose -aurait été alerté par le hurlement d'agonie de l'Agara-shi.",
      "Rendez-vous au 87."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 87.",
        "targetId": "87"
      }
    ]
  },
  "25": {
    "id": "25",
    "text": [
      "Les Vazhags font irruption dans la cabane abandonnée en poussant des couinements aigus. Vous prenez position dans un angle afin de ne pas être surpris par-derrière, puis vous brandissez votre arme. Assoiffés de sang, les premiers Hommes- Rats se jettent sur vous en fouettant l'air de leurs lames rouillées, mais vous contrez leur attaque avec une telle rapidité et une telle précision qu'on croirait presque, à vous regarder, que vous avez à peine esquissé un geste.",
      "Malheureusement, pour chaque Vazhag abattu, il en survient trois pour le remplacer. En l'espace de quelques minutes, vous courez le danger de succomber !",
      "HORDE DE VAZHAGS HABILETÉ: 34 ENDURANCE: 44 Si vous êtes vainqueur, rendez-vous au 72."
    ],
    "choices": [
      {
        "text": "Si vous êtes vainqueur, rendez-vous au 72.",
        "targetId": "72"
      }
    ],
    "combat": {
      "name": "HORDE DE VAZHAGS",
      "combatSkill": 34,
      "endurance": 44,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "26": {
    "id": "26",
    "text": [
      "Vous répétez le chiffre plusieurs fois mais rien ne se produit. Pourtant, vous êtes persuadé d'avoir donné la réponse exacte ! Par dépit, vous cognez la boîte contre la table pour tenter d'ouvrir le couvercle de force. A la troisième tentative, une lame jaillit d'un côté et vous transperce la main: vous perdez 2 points d'ENDURANCE.",
      "Vous jetez ce maudit coffret dans un coin en jurant dans votre barbe, puis vous soignez votre blessure. Soudain, un bruit étouffé parvient à vos oreilles : quelqu'un vient d'entrer dans la bibliothèque. Après avoir lancé un bref regard par-dessus votre épaule, vous jugez - fort sagement - qu'il est grand temps de quitter les lieux.",
      "Rendez-vous au 335."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 335.",
        "targetId": "335"
      }
    ],
    "damage": 2
  },
  "27": {
    "id": "27",
    "text": [
      "En haut de l'escalier, un couloir part droit vers l'ouest avant d'obliquer brusquement vers le nord. Arrivé presque à l'angle, vous vous arrêtez soudainement : vous sentez qu'un danger imminent vous guette. Vous empoignez votre arme mais à peine avez-vous dégainé qu'un guerrier Drakkar surgit en courant au coin du couloir et vous heurte de plein fouet.",
      "Le choc vous envoie tous deux rouler à terre. Vous vous relevez rapidement, mais le Drakkar passe à l'attaque avant que vous n'ayez pu ramasser votre arme. DRAKKAR HABILETÉ: 32 ENDURANCE: 30 Vous devrez lutter à mains nues pendant les trois premiers Assauts de ce combat.",
      "Au début du quatrième Assaut, vous pourrez reprendre votre arme et mener le combat comme à l'accoutumée.",
      "Si vous en sortez vainqueur, rendez-vous au 255."
    ],
    "choices": [
      {
        "text": "Si vous en sortez vainqueur, rendez-vous au 255.",
        "targetId": "255"
      }
    ],
    "combat": {
      "name": "DRAKKAR",
      "combatSkill": 32,
      "endurance": 30,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "28": {
    "id": "28",
    "text": [
      "Encore sous le coup de votre déplaisante rencontre avec les crabes venimeux, vous dégainez votre arme et descendez l'escalier avec une prudence accrue. Soixante marches plus bas, vous parvenez à une petite caverne où convergent trois tunnels, l'un venant du nord, l'autre du sud et le dernier de l'ouest.",
      "Vous repérez de nombreuses traces sur le sol poussiéreux et, grâce à votre science Magnakai de l'Art de la Chasse, vous les décryptez sans problème. Ces traces viennent toutes des tunnels ouest et sud et, à en juger par leur taille et leur profondeur, elles appartiennent à une espèce particulière de gros rats qui marchent debout, comme les humains.",
      "D'après ce que vous avez entendu dire à propos des indigènes divers et variés qui peuplent le Ruel, ces créatures sont certainement des Vazhags, une vermine élevée spécialement pour le combat par les Cénériens. Cependant, parmi toutes les empreintes laissées par les Vazhags, vous en remarquez d'autres, fort différentes.",
      "Alors que vous vous penchez pour les examiner de plus près, vous entendez soudain du bruit en provenance du tunnel euest ; un groupe de créatures est en train d'approcher. Vous vous désintéressez aussitôt des empreintes pour tâcher de trouver une cachette.",
      "Si vous voulez chercher refuge dans le tunnel nord, rendez-vous au 35.",
      "Si vous préférez vous engager dans le tunnel sud, rendez-vous au 201.",
      "Si vous décidez de vous cacher dans la caverne où vous êtes actuellement, rendez-vous au 153."
    ],
    "choices": [
      {
        "text": "Si vous voulez chercher refuge dans le tunnel nord, rendez-vous au 35.",
        "targetId": "35"
      },
      {
        "text": "Si vous préférez vous engager dans le tunnel sud, rendez-vous au 201.",
        "targetId": "201"
      },
      {
        "text": "Si vous décidez de vous cacher dans la caverne où vous êtes actuellement, rendez-vous au 153.",
        "targetId": "153"
      }
    ]
  },
  "29": {
    "id": "29",
    "text": [
      "Alors que le Disciple de Vashna s'effondre, inanimé, sur la plate- forme, vous rengainez votre arme et empoignez les barreaux de l'échelle qui monte jusqu'au treuil. Dans la grande salle en dessous, tous les yeux sont braqués sur vous. Soudain, les créatures comprennent enfin quelles sont vos intentions, et elles se déchaînent dans un charivari assourdissant.",
      "Leurs cris d'hystérie, de haine et d'effroi forment une cacophonie qui emplit la pièce tout entière et dont l'écho se répercute à l'infini. Vous baissez les yeux pour observer leurs visages tordus par la rage et, ce faisant, vous distinguez une nouvelle menace.",
      "Une poignée d'archers Vazhags vient de faire irruption par le passage qui relie la salle de Cadak à la galerie. Ils se déplient le long du parapet et commencent à tirer sur vous. De part et d'autre, les flèches vous frôlent en sifflant.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 4 au chiffre obtenu.",
      "Si le résultat est inférieur ou égal à 2, rendez-vous au 231.",
      "S'il est compris entre 3 et 6, rendez-vous au 293.",
      "Si ce résultat est supérieur à 6, rendez-vous au 278."
    ],
    "choices": [
      {
        "text": "rendez-vous au 231.",
        "targetId": "231"
      },
      {
        "text": "entre 3 et 6, rendez-vous au 293.",
        "targetId": "293"
      },
      {
        "text": "rendez-vous au 278.",
        "targetId": "278"
      }
    ]
  },
  "30": {
    "id": "30",
    "text": [
      "Cest avec une vive inquiétude que vous vous approchez de la porte, car vous savez pertinemment que vous vous jetez dans la gueule du loup. De chaque côté, des Vazhags munis de lances ternies se tiennent en alerte, prêts à frapper au moindre signe de résistance de votre part.",
      "De l'autre côté de la porte, une cellule vous attend, ainsi que vous l'aviez prévu. Dès que la porte se referme derrière vous, vous vous mettez à chercher un moyen de vous échapper avant que les gardes Vazhags reviennent. Malheureusement, en dépit de son apparence banale, cet endroit est bien plus qu'un cachot ordinaire.",
      "C'est une chambre d'extermination, l'une des nombreuses que recèlent les entrailles de Mogaruith. Ces pièces ont été aménagées de façon à anéantir vite et radicalement tous ceux qui ont un jour décidé de défier les Cénériens sur leur propre territoire.",
      "Tout à coup, un courant électrique parcourt le sol métallique de la cellule. Le voltage surpuissant vous paralyse des pieds à la tête. Vous luttez de toutes vos forces psychiques et physiques pour y résister, mais c'est plus que votre corps ne peut en supporter.",
      "Votre mission et votre vie prennent fin ici, dans la forteresse infernale de Mogaruith."
    ],
    "choices": []
  },
  "31": {
    "id": "31",
    "text": [
      "Votre flèche fuse en sifflant vers la gorge de la créature. L'issue semble fatale mais, au dernier moment, la bête esquive le trait et la pointe s'enfonce dans son épaule. L'Agarashi pousse un hurlement de douleur, mais sa blessure ne l'empêche pas de passer à l'attaque.",
      "Le Vaz-hag qui se tenait juste derrière l'imite en brandissant son poignard et vous devez les affronter de pair. AGARASHI ET VAZHAG HABILETÉ : 30 ENDURANCE : 40 L'Agarashi est insensible aux disciplines psychiques élémentaires ; vous ne pourrez l'affecter mentalement que si vous maîtrisez la Grande Discipline du Foudroiement Psychique.",
      "Si vous sortez vainqueur de ce combat, rendez-vous au 297."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 297.",
        "targetId": "297"
      }
    ],
    "combat": {
      "name": "AGARASHI ET VAZHAG",
      "combatSkill": 30,
      "endurance": 40,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "32": {
    "id": "32",
    "text": [
      "La piste traverse le plateau et passe à quelques mètres des puits de mines avant d'aboutir à l'entrée d'une sorte de tunnel sous les arbres. Vous avancez prudemment, mais tous vos sens se rebellent au fur et à mesure de votre progression. La malignité qui émane de cet endroit est si forte, si perceptible qu'elle vous agresse les narines et vous coupe presque le souffle.",
      "Vous décidez de courir vers l'entrée du tunnel pour en finir au plus vite, mais vous vous arrêtez net en entendant soudain du bruit derrière vous. Une horde de silhouettes monstrueuses vient d'apparaître à l'orée de la forêt. Ce sont des corps décharnés et cadavériques que l'on croirait à mi-chemin entre la vie et la mort.",
      "Leurs têtes sont dégarnies de cheveux, leurs yeux rouges, sans paupières, roulent dans des orbites qui semblent trop larges pour eux, et leurs bouches béantes sont ornées sur le pourtour d'une multitude de crocs pointus comme des aiguilles. Ces créatures d'épouvante grognent à l'unisson et vous sentez un frisson glacé vous parcourir l'échiné.",
      "Tout en vous efforçant de surmonter votre peur et votre dégoût, vous tournez les talons et vous vous ruez vers le tunnel. Vous n'êtes plus qu'à quelques mètres du but quand, soudain, une bonne douzaine d'autres créatures du même acabit surgit de l'ombre pour vous barrer le passage.",
      "Vous entendez de nouveau s'élever de funestes grognements... Vous examinez désespérément le plateau afin de trouver un moyen d'échapper à ces morts-vivants, mais en vain ; vous êtes bel et bien pris au piège ! La seule alternative qui vous reste est d'affronter les créatures ou bien de rebrousser chemin.",
      "Si vous voulez combattre l'ennemi, rendez-vous au 163.",
      "Si vous préférez retourner vers les puits, rendez-vous au 148."
    ],
    "choices": [
      {
        "text": "Si vous voulez combattre l'ennemi, rendez-vous au 163.",
        "targetId": "163"
      },
      {
        "text": "Si vous préférez retourner vers les puits, rendez-vous au 148.",
        "targetId": "148"
      }
    ]
  },
  "33": {
    "id": "33",
    "text": [
      "La tapisserie dépeint une scène effrayante : un banquet sanguinaire où des créatures démoniaques se repaissent de chair fraîche. La tablée est présidée par un être mi-homme, mi- taureau. Au coin de ses lèvres dégouttantes de sang luisent deux longs crocs acérés.",
      "Du haut de son siège, il semble contempler les autres convives avec un mépris moqueur. Vous êtes subitement dérangé dans vos pensées par un léger bruit : il y a quelqu'un - ou quelque chose - qui remue dans l'antichambre.",
      "Rendez-vous au 222."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 222.",
        "targetId": "222"
      }
    ]
  },
  "34": {
    "id": "34",
    "text": [
      "Vous vous aplatissez silencieusement sous le feuillage afin de pouvoir observer la route en toute tranquillité. Au bout de vingt minutes, vous voyez arriver un grand chariot. Alors qu'il passe tout près de votre cachette, vous concentrez votre pouvoir Nexus pour bloquer l'une de ses roues avant.",
      "Les Ghorkas poussent un grognement rétif en sentant la roue se coincer, et le véhicule quitte brutalement la route. Le conducteur Vazhag saute à terre en jurant à grands cris, puis il se met à taper sur l'essieu avec la pointe de sa lance pendant que ses trois compagnons tentent d'apaiser les Ghorkas.",
      "Vous profitez de la confusion générale pour vous glisser à l'arrière du chariot en faisant usage de votre pouvoir de camouflage pour réduire les risques d'être repéré. Vous parvenez à grimper au bord du chariot sans vous faire voir, mais vous manquez défaillir en découvrant la nature du chargement qu'il transporte.",
      "Rendez-vous au 218."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 218.",
        "targetId": "218"
      }
    ]
  },
  "35": {
    "id": "35",
    "text": [
      "Vous vous recroquevillez dans une anfractuosité de la paroi du tunnel nord, puis vous retenez votre souffle en écoutant les bruits de pas se rapprocher. Tout d'abord, la lumière vacillante des torches projette des taches blafardes sur le sol, puis les créatures pénètrent une à une dans la caverne et vous pouvez distinguer leurs traits répugnants.",
      "C'est une patrouille composée de six Vazhags. Ils sont de la taille des jeunes Som-merlundois et sont équipés d'armes rustiques et rouillées. Leurs corps de rat sont revêtus d'éléments disparates provenant sans doute d'uniformes de soldats humains. Ils ont beau être à plus de six mètres de vous, la puanteur qu'ils dégagent est tellement insupportable que vous devez faire appel à votre maîtrise du Nexus pour réprimer les haut-le-cœur qui vous assaillent.",
      "Les Vazhags font halte au pied de l'escalier de pierre et communiquent entre eux par des couinements dissonants qui vous font penser à des portes qui grincent. Tout en baragouinant, ils ne cessent de jeter des regards furtifs vers le souterrain ouest, comme s'ils attendaient l'arrivée d'une autre patrouille.",
      "Au bout de quelques minutes, effectivement, quelqu'un d'autre arrive. A en juger par sa taille — celle d'un homme adulte -, il ne peut pas s'agir d'un de leurs congénères. Néanmoins, il vous est impossible d'affirmer que c'est un être humain, car le capuchon de sa coule écarlate dissimule entièrement son visage.",
      "Les Vazhags s'interrompent dès que le mystérieux personnage leur fait signe d'avancer vers le tunnel sud. L'espace d'une fraction de seconde, vous apercevez l'éclat du masque vert qui protège son visage et vous identifiez aussitôt cet accessoire : c'est le masque de verre rituel que portent les Druides de Cener.",
      "Si vous voulez tendre une embuscade à la patrouille, rendez-vous au 289.",
      "Si vous préférez la laisser partir par le tunnel sud, rendez-vous au 198."
    ],
    "choices": [
      {
        "text": "Si vous voulez tendre une embuscade à la patrouille, rendez-vous au 289.",
        "targetId": "289"
      },
      {
        "text": "Si vous préférez la laisser partir par le tunnel sud, rendez-vous au 198.",
        "targetId": "198"
      }
    ]
  },
  "36": {
    "id": "36",
    "text": [
      "Les nerfs à vif, vous suivez des yeux le Tzarg qui renifle bruyamment en se rapprochant de votre cachette. Votre science Magnakai du Contrôle Animal et de l'Invisibilité suffira-t-elle à déjouer le flair de la bête ?",
      "Pour le savoir, utilisez la Table de Hasard.",
      "Si le chiffre que vous avez tiré est inférieur ou égal à 4, rendez-vous au 229.",
      "Si ce chiffre est supérieur, rendez-vous au 302."
    ],
    "choices": [
      {
        "text": "Si le chiffre que vous avez tiré est inférieur ou égal à 4, rendez-vous au 229.",
        "targetId": "229"
      },
      {
        "text": "rendez-vous au 302.",
        "targetId": "302"
      }
    ]
  },
  "37": {
    "id": "37",
    "text": [
      "Alors que vous abattez le dernier chien de guerre, une horde de Vazhags fait irruption dans la caverne en hurlant. Finalement, vos poursuivants ont tout de même réussi à vous rattraper. Et, après vous avoir donné la chasse sur plusieurs kilomètres, ils n'ont qu'une idée en tête : vous mettre en pièces.",
      "Pourtant, leur ardeur semble tiédir lorsqu'ils aperçoivent les dépouilles des chiens de guerre qui gisent autour de vous. Il convient en effet de traiter avec certains égards quelqu'un qui s'avère capable de vaincre une demi-douzaine de monstres de cet acabit !",
      "Vous les entendez marmonner, puis l'un d'eux sort des rangs. Il se distingue de ses frères par la longue houppelande marron qu'il porte. Il en sort une boule de verre à l'intérieur de laquelle tournoient des volutes de vapeur tachetée, puis il la lance à vos pieds en proférant une malédiction.",
      "Si vous maîtrisez la Grande Discipline de la Science Médicale, rendez-vous au 76.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 217."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de la Science Médicale, rendez-vous au 76.",
        "targetId": "76"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 217.",
        "targetId": "217"
      }
    ]
  },
  "38": {
    "id": "38",
    "text": [
      "Les trois créatures se dressent au-dessus de vous en poussant d'horribles hurlements plaintifs. Alors qu'elles se mettent en position d'attaque et ouvrent grand leurs puissantes mâchoires, vous vous préparez vous-même à relever le défi. GIGANITES DE RUEL HABILETÉ: 50 ENDURANCE: 30 Ces créatures sont sensibles à toute forme d'attaque psychique.",
      "Si vous parvenez à réduire leur ENDURANCE à 36 ou moins, vous pouvez fuir le combat ; rendez-vous dans ce cas au 13.",
      "Si vous sortez vainqueur de ce combat, rendez-vous au 286."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 286.",
        "targetId": "286"
      }
    ],
    "combat": {
      "name": "GIGANITES DE RUEL",
      "combatSkill": 50,
      "endurance": 30,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "39": {
    "id": "39",
    "text": [
      "Avec une incroyable rapidité, vous empoignez votre arc, vous l'armez, vous bandez la corde et la relâchez presque simultanément. La flèche transperce le corps de la créature, la tuant net. La force de l'impact la fait basculer de son tabouret creux, et vous la regardez osciller mollement d'avant en arrière, tel un gros œuf, avant de s'affaler enfin sur le côté.",
      "Rendez-vous au 23."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 23.",
        "targetId": "23"
      }
    ]
  },
  "40": {
    "id": "40",
    "text": [
      "Le Degradon s'abat au sol en poussant un rugissement d'agonie, et vous n'avez que le temps de faire un bond de côté pour éviter d'être écrasé par sa répugnante carcasse. A bout de souffle et tremblant de fatigue après cet éprouvant combat, vous vous adossez contre le mur et inspectez les alentours.",
      "Devant vous s'étend un grand hall éclairé par des sphères de feu suspendues au plafond par des chaînes. De part et d'autre, deux rangées de statues de pierre se font face, formant une haie terminée par un porche. Bien que ces statues soient d'apparence humaine, l'expression de douleur et de désespoir intenses qui se peint sur leur visage déforme leurs traits au point de les rendre grotesques.",
      "Vous avancez avec une extrême-prudence. Vous vous méfiez de ces étranges statues et vous vous tenez prêt à réagir à la vitesse de l'éclair, pour le cas où elles se mettraient subitement à s'animer. Fort heureusement, vos craintes ne sont pas fondées et vous atteignez le porche sans encombre.",
      "Au-delà, un petit passage vous conduit à un embranchement traversé de gauche à droite par un couloir plus large. Il émane de telles forces maléfiques dans cette partie souterraine de Mogaruith que vous en avez la chair de poule. Avant de poursuivre votre chemin, vous adressez une prière silencieuse au dieu Kaï, votre créateur, afin qu'il vous protège et vous guide.",
      "Votre intuition vous incite à tourner à gauche et, après quelques minutes de marche, vous débouchez dans une pièce où un grand escalier de marbre noir dessert plusieurs niveaux, perdus dans des hauteurs ténébreuses. A l'opposé de cet escalier monumental, vous apercevez une grande porte forgée dans un métal vert que vous n'arrivez pas à identifier.",
      "Cette étrange matière émet des radiations palpitantes qui illuminent les symboles gravés sur les parois et le sol de la pièce. Vous vous concentrez sur ces signes mystérieux et, quelques instants plus tard, vous frémissez en comprenant leur signification.",
      "Rendez-vous au 300."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 300.",
        "targetId": "300"
      }
    ]
  },
  "41": {
    "id": "41",
    "text": [
      "Les deux Hommes-Rats viennent juste d'achever leur repas, quand une troupe de Vazhags et un Druide de Cener vêtu d'une coule rouge pénètrent dans la grotte par une ouverture creusée à l'autre extrémité du lac. Le druide fait signe à son escorte d'armer une sorte de cabestan et, tandis que les Vazhags effectuent la manœuvre, le pont-levis commence à basculer lentement.",
      "Dès qu'il est complètement abaissé, le druide et sa suite s'y engagent en file indienne, mais à mi-chemin, une immense vague agite soudain la surface de l'eau, qui se met à frissonner comme si elle entrait en ébullition. Pris de panique, les Vazhags s'immobilisent et contemplent l'eau qui écume sous leurs pieds en poussant des cris de terreur.",
      "Le druide leur hurle de faire demi-tour et ils s'exécutent, suivis de près par les deux autres Vazhags que vous aviez vus précédemment. Les premiers à avoir regagné la terre ferme se précipitent vers le cabestan afin de relever au plus vite le pont-levis.",
      "Vous voyez les cordes se tendre à craquer et, dans un grincement plaintif, le tablier commence à se relever. Craignant d'être abandonné sur la mauvaise rive du lac, vous vous élancez et vous agrippez au pont en mouvement. Quand il arrive presque à la verticale, vous vous accrochez aux traverses de bois comme une patelle à son rocher.",
      "Fort heureusement, les Vazhags cessent d'actionner le treuil avant que le pont se referme totalement et ils s'enfuient précipitamment en compagnie du druide, sans remarquer que vous êtes suspendu au pont. Vous poussez un soupir de soulagement en les voyant disparaître par là où ils sont venus, car vous n'osez penser à ce qui serait arrivé s'ils vous avaient découvert en si mauvaise posture...",
      "Hélas ! ce répit n'est que de courte durée : quelques secondes après leur départ, vous vous trouvez face à face avec l'objet de leur terreur.",
      "Rendez-vous au 295."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 295.",
        "targetId": "295"
      }
    ]
  },
  "42": {
    "id": "42",
    "text": [
      "Soudain, une flèche vous transperce le poignet gauche. Vous laissez échapper un cri et la douleur vous fait lâcher prise. Vous voyez le sol se rapprocher à une vitesse vertigineuse et quelques secondes plus tard, vous vous écrasez comme une crêpe sur le carrelage du laboratoire.",
      "Fort heureusement, la mort est instantanée. Votre immense courage vous a permis de détruire le virus de la peste et les druides qui en détenaient le secret. Grâce à vous, des millions de vies humaines seront sauvées d'une mort atroce. La bravoure et l'abnégation que vous avez montrées pour mener à bien votre mission resteront gravées à tout jamais dans la mémoire des peuples libres du Magnamund.",
      "Quel dommage d'avoir dû payer de votre vie"
    ],
    "choices": []
  },
  "43": {
    "id": "43",
    "text": [
      "Bien que votre carquois et votre arc soient recouverts par les plis de votre coule de druide, vous les dégagez rapidement et vous êtes prêt à tirer sur les Vazhags en fuite avant même qu'ils aient parcouru cinq ou six mètres. Avec une incroyable précision dans les gestes, vous décochez deux flèches presque simultanément et faites mouche à chaque coup.",
      "Touchés à mort, les deux Hommes- Rats s'écroulent face contre terre. Grâce à votre célérité, l'exécution des Vazhags est passée totalement inaperçue et vous entendez bien qu'elle le reste. Sans perdre un instant, vous tirez les deux corps par les pieds et les cachez dans les broussailles.",
      "Cependant, il vous reste encore à trouver le moyen de pénétrer dans Mogaruith. En regagnant la route, ils vous vient subitement une idée. Vous vous approchez calmement du Zombie, lequel n'a pas bougé d'un centimètre depuis le début de l'incident, puis vous vous baissez pour ramasse la chaîne qui le retient.",
      "Ensuite, le cœur battant à tout rompre, vous vous engagez sur la piste qui conduit au pont-levis.",
      "Rendez-vous au 12."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 12.",
        "targetId": "12"
      }
    ]
  },
  "44": {
    "id": "44",
    "text": [
      "Vous faites appel à toute votre science pour vous prémunir contre l'influx psychique du Cénérien. Effectivement, vous réussissez à isoler votre esprit des ondes perverses mais, dans le même temps, le druide sent une résistance là où il ne devrait pas y en avoir.",
      "Cela suffit à éveiller ses soupçons : vous êtes découvert !",
      "Rendez-vous au 159."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 159.",
        "targetId": "159"
      }
    ]
  },
  "45": {
    "id": "45",
    "text": [
      "Avec un hurlement de rage, l'énorme créature s'élance sur vous toutes griffes dehors. Vous reculez de quelques pas, le temps de dégainer une arme qui vous permettra de lutter contre cette bête vorace. AGARASHI HABILETÉ: 34 ENDURANCE: 38 Cette créature est insensible aux disciplines psychiques élémentaires.",
      "Vous ne pourrez l'atteindre mentalement que si vous maîtrisez la Grande Discipline du Foudroiement Psychique.",
      "Si vous sortez vainqueur du combat, rendez-vous au 110."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur du combat, rendez-vous au 110.",
        "targetId": "110"
      }
    ],
    "combat": {
      "name": "AGARASHI",
      "combatSkill": 34,
      "endurance": 38,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "46": {
    "id": "46",
    "text": [
      "Votre chute semble s'accélérer de plus en plus, jusqu'à ce que vous soyez complètement aspiré par le vortex. Vous venez d'être attiré dans un lieu infernal, un domaine où le pouvoir du Bien n'a plus aucune prise. Vous êtes devenu la proie de Naar en personne, le dieu des Ténèbres, et vous resterez son prisonnier à jamais, condamné à errer pour l'éternité dans la noirceur sans fin de son royaume."
    ],
    "choices": []
  },
  "47": {
    "id": "47",
    "text": [
      "La douleur s'intensifie au fur et à mesure que la créature vous injecte son venin dans les jambes. Vous faites appel à votre science Magnakaï élémentaire pour neutraliser le poison, mais le temps que les antitoxines fassent leur effet, vous sentez que vous vous enfoncez de plus en plus profondément dans la mare boueuse.",
      "PLAGHATAR HABILETÉ: 35 ENDURANCE: 30 Cette créature est insensible à toute forme d'attaque psychique. Si l'arme que vous utilisez n'est pas tranchante (c'est-à-dire s'il s'agit d'une Masse d'Armes, d'un Bâton ou d'un Marteau de Guerre), réduisez votre ENDURANCE de 4 points pour toute la durée du combat.",
      "Si vous sortez vainqueur du combat, rendez- vous au 129."
    ],
    "choices": [],
    "combat": {
      "name": "PLAGHATAR",
      "combatSkill": 35,
      "endurance": 30,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "48": {
    "id": "48",
    "text": [
      "Tandis que vous parcourez des yeux les murs de la petite pièce, vous ressentez un besoin urgent de déchirer tous les livres et les parchemins qui s'étalent sur les rayons. Le mal qu'ils renferment, fruit d'une longue et patiente recherche dans le domaine de la pire sorcellerie, est si puissant que vous sentez votre force Kaï défaillir en leur présence. (Vous perdez 2 points d'ENDURANCE.) Conscient de l'effet insidieux de tous ces volumes, vous vous mettez à chercher ce que vous voulez le plus vite possible.",
      "Sur l'une des étagères du bas, vous remarquez alors une boîte en bois sculpté, bardée d'or et incrustée de pierres précieuses. Vous l'emportez vers la table centrale, où l'éclairage est meilleur, et, au moment où vous la posez, vous entendez s'énoncer une énigme par l'intermédiaire du dessin gravé sur le couvercle.",
      "C'est en langage Cénérien, mais vous comprenez aussitôt: Mon trésor est caché à la vue de tous Mais je l'ouvrirai moi- même pour vous, Si vous réfléchissez à ce mystère Et trouvez la correcte manière. Divisez quatre-vingts par une moitié, Puis observez le résultat.",
      "De ce nombre ôtez quatorze, Ce qui reste m’ouvrira Votre instinct Kaï vous dicte de résoudre cette énigme et de donner votre réponse à haute voix afin que le couvercle de la boîte s'ouvre.",
      "Lorsque vous penserez avoir trouvé la réponse exacte, rendez-vous au paragraphe correspondant à ce nombre.",
      "Si vous n'arrivez pas à trouver la solution, ou si votre réponse ne correspond pas au nombre magique qui ouvre la boîte, rendez- vous au 311."
    ],
    "choices": [],
    "damage": 2
  },
  "49": {
    "id": "49",
    "text": [
      "Votre infaillible odorat vous permet de détecter l'existence d'une source d'eau fraîche à environ un kilomètre vers l'est.",
      "Si vous souhaitez vous engager dans le tunnel est, rendez-vous au 118.",
      "Si vous préférez le tunnel ouest, rendez-vous au 189."
    ],
    "choices": [
      {
        "text": "Si vous souhaitez vous engager dans le tunnel est, rendez-vous au 118.",
        "targetId": "118"
      },
      {
        "text": "Si vous préférez le tunnel ouest, rendez-vous au 189.",
        "targetId": "189"
      }
    ]
  },
  "50": {
    "id": "50",
    "text": [
      "Une large ouverture aménagée dans le mur vous donne accès à une coursive qui surplombe une vaste salle dénuée de fenêtre. En vous penchant légèrement pardessus le parapet de métal, vous découvrez un spectacle impressionnant: des dizaines de druides s'affairent à de grandes tables carrelées, disposées sur plusieurs rangées; sur certaines d'entre elles sont posées des auges de porcelaine blanche dans lesquelles une substance huileuse bouillonne sous l'action d'un faisceau continu d'étincelles.",
      "Sur les autres tables sont posées des cages de verre de différentes tailles ; les plus petites contiennent des rats, les plus grandes des chevaux. Des centaines de tubes, de tuyaux et de conduits courent le long des murs, afin d'alimenter les tables d'expérience en liquides et en gaz.",
      "Les vapeurs qui s'élèvent de ce laboratoire diabolique vous piquent les narines, mais vous êtes bien trop occupé à observer dans les moindres détails l'œuvre maléfique qui s'accomplit sous vos yeux pour y attacher de l'importance. Car, de toute évidence, c'est bien en ce lieu que l'on produit en quantité le virus de la peste et son vaccin.",
      "Vous savez qu'il faut agir sans perdre un instant, car l'Archidruide Cadak est encore en vie et, quel que soit l'endroit où il se trouve à l'heure actuelle, vous êtes certain qu'il a déjà pris toutes les dispositions pour vous capturer ou vous abattre - et assurément, l'un n'irait pas sans l'autre.",
      "Quant à vous, vous avez maintenant à portée de main l'objet même de votre quête. Mais comment allez-vous faire pour détruire ce laboratoire et ceux qui y travaillent ? Les secondes s'écoulent inexorablement tandis que vous tentez d'élaborer un plan. Soudain, vous remarquez quelque chose qui vous donne une idée.",
      "Tous les tuyaux qui conduisent aux broyeurs du laboratoire sont reliés à un gigantesque chaudron suspendu au plafond par de grosses chaînes et un treuil. Vous concentrez votre regard sur la plaque de cuivre fixée sur l'énorme récipient et vous magnifiez votre vision pour pouvoir lire ce qui est écrit dessus.",
      "C'est avec une sombre satisfaction que vous distinguez les mots suivants : « Danger - Acide concentré. » Stimulé par l'audace de votre projet, vous cherchez le moyen d'atteindre le treuil qui détermine l'angle d'inclinaison du chaudron. Ce dispositif est situé sur une plateforme perchée au sommet d'un portique, lequel n'est accessible que par une échelle.",
      "Par chance, cette échelle commence au bout de la coursive où vous vous trouvez. Tout à la joie d'atteindre bientôt au but, vous vous élancez vers l'échelle mais, alors que vous n'êtes plus qu'à quelques mètres d'elle, vous entendez soudain tinter une cloche d'alarme.",
      "Vous avez été repéré !",
      "Rendez-vous au 177."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 177.",
        "targetId": "177"
      }
    ]
  },
  "51": {
    "id": "51",
    "text": [
      "Vous vous concentrez sur votre avant-bras gauche et, grâce à l'enseignement des Anciens Mages, vous prononcez une formule magique capable de produire un bouclier invisible. Un bouquet d'étincelles aveuglantes jaillit au moment où la décharge d'énergie entre en contact avec votre défense, mais vous vous êtes préparé un peu trop à la hâte, hélas, pour encaisser sans aucun dommage cette attaque fulgurante.",
      "Votre bouclier magique tremble sous l'impact et laisse passer une partie de l'influx destructeur. Vous perdez 6 points d'ENDURANCE.",
      "Si vous survivez à cette blessure, rendez-vous au 135."
    ],
    "choices": [
      {
        "text": "Si vous survivez à cette blessure, rendez-vous au 135.",
        "targetId": "135"
      }
    ],
    "damage": 6
  },
  "52": {
    "id": "52",
    "text": [
      "Nageant à grandes brasses, vous vous éloignez du pont pour atteindre au plus vite la paroi est de la grotte. Apparemment, il n'y a aucune issue de ce côté, mais, en plongeant à environ sept mètres de profondeur, vous remarquez que la crevasse coupe transversalement la paroi rocheuse.",
      "Soudain, une lance passe à quelques centimètres de votre tête. Comme d'autres ne tarderont certainement pas à suivre, vous plongez encore plus profondément afin d'y échapper. Au cœur de la froideur obscure des eaux du lac, vous sentez un courant chaud en provenance de la crevasse.",
      "De plus, votre vision exacerbée vous permet de détecter une vague lueur à la base de la paroi. Une autre caverne doit se trouver par là, mais vous n'avez aucune idée de son emplacement exact. Rassemblant tout votre courage Kaï, vous nagez vers la crevasse et vous vous glissez dans l'étroit boyau qui la prolonge.",
      "Tout au bout, la lueur se précise ; vous vous hâtez dans cette direction, soulagé de constater que ce passage n'abrite aucune créature hostile, ce qui est déjà bien. Cependant, après ces longues minutes de nage épuisante, vous commencez à souffrir sérieusement du manque d'oxygène.",
      "Utilisez la Table de Hasard et ajoutez 1 au chiffre obtenu. Le total représente le nombre de points d'ENDURANCE que vous avez perdus durant toute cette plongée.",
      "N'oubliez pas de modifier votre Feuille d'Aventure en conséquence, puis rendez-vous au 246."
    ],
    "choices": [
      {
        "text": "rendez-vous au 246.",
        "targetId": "246"
      }
    ]
  },
  "53": {
    "id": "53",
    "text": [
      "Tendant ses mains crochues vers vous, le Cénérien vous maudit dans un dernier souffle, puis il s'affale lentement sur le sol. Pendant quelques instants, son corps est agité de soubresauts, puis ii se raidit et reste complètement inerte. La curiosité vous pousse à retirer le masque vert qui cache son visage.",
      "Vous découvrez alors un faciès hideux, grené par la maladie et n'ayant presque plus rien d'humain. Surmontant votre répulsion, vous fouillez le druide et vous trouvez sur lui les objets suivants : Un poignard,Une robe dé Druide de Cener (Si vous décidez de la garder, sachez qu'elle prendra la place de 2 objets dans votre Sac à Dos.) Un masque Cénérien Vingt Lunes (soit l'équivalent de 5 Pièces d'Or) Si vous voulez conserver certains de ces objets, n'oubliez pas d'apporter les modifications nécessaires sur votre Feuille d'Aventure.",
      "Votre science Magnakai vous informe que la baguette du druide ne possède plus aucun pouvoir ; ce dernier s'est trouvé annihilé en même temps que son malfaisant propriétaire. Vous vous penchez pour la lui retirer des mains, mais à peine l'avez-vous touchée qu'elle tombe en poussière, tout en dégageant une senteur nauséabonde.",
      "Comme le crépuscule approche, vous quittez la clairière en passant par la trouée, puis vous vous engagez à grands pas sur le sentier boueux qui la prolonge.",
      "Rendez-vous au 10."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 10.",
        "targetId": "10"
      }
    ],
    "loot": {
      "gold": 5
    }
  },
  "54": {
    "id": "54",
    "text": [
      "Le Cénérien jubile d'impatience à l'idée de vous porter le coup fatal, mais vous n'êtes pas décidé à lui faciliter la tâche ! Encore étourdi mais fermement résolu à rester en vie, vous vous remettez rapidement debout, juste à temps pour parer l'attaque suivante.",
      "Une gerbe d'étincelles jaillit au moment où la baguette du druide frappe votre arme, et une douloureuse décharge se propage le long de votre bras. La souffrance vous fait vaciller, mais vous vous ressaisissez aussitôt et vous vous ruez sur votre adversaire en poussant un cri de défi.",
      "FRÈRE CROUMAH HABILETÉ: 40 ENDURANCE: 30 Si vous êtes vainqueur, rendez-vous au 101."
    ],
    "choices": [
      {
        "text": "Si vous êtes vainqueur, rendez-vous au 101.",
        "targetId": "101"
      }
    ],
    "combat": {
      "name": "FRÈRE CROUMAH",
      "combatSkill": 40,
      "endurance": 30,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "55": {
    "id": "55",
    "text": [
      "Avec une aisance déconcertante, vous saisissez la lame au vol alors qu'elle n'est plus qu'à quelques centimètres de votre torse. Le Vazhag vous regarde avec des yeux ronds, momentanément paralysé par le spectacle dont il vient d'être témoin. Néanmoins, il retrouve vite ses esprits quand il réalise que vous lui renvoyez la lame à toute volée.",
      "Malheureusement pour vous, le poignard manque sa cible d'un doigt. Il va rebondir contre le mur du fond avec un tintement sec et tombe aux pieds du Vazhag qui le ramasse prestement. L'arme au poing, vous avancez vers lui sans perdre une seconde.",
      "VAZHAG OBÈSE HABILETÉ: 18 ENDURANCE: 28 Si vous sortez vainqueur du combat, rendez-vous au 121."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur du combat, rendez-vous au 121.",
        "targetId": "121"
      }
    ],
    "combat": {
      "name": "VAZHAG OBÈSE",
      "combatSkill": 18,
      "endurance": 28,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "56": {
    "id": "56",
    "text": [
      "Vous vous rendez soudain compte que vous n'êtes pas en présence d'une plante, mais d'une créature vivante ! Les vrilles font partie de son camouflage naturel et, tandis qu'elles s'entortillent autour de vos membres et de votre cou, vous sentez toute la force bestiale qui les habite.",
      "Maintenant que vous savez à qui vous avez affaire, vous brandissez votre arme et frappez furieusement la masse de tentacules frémissants qui vous enserrent. Un flot d'humeur visqueuse jaillit de chaque segment tranché, et vous entendez un rugissement de douleur en provenance de la cime des arbres.",
      "Puis, de nouveau, les vrilles indemnes vous cherchent à tâtons. Cette fois cependant, elles ne sont plus souples et élastiques mais dures et hérissées de pointes, comme du fil de fer barbelé. Elles se dressent vers votre gorge et vous les cisaillez à grands coups, mais l'une d'elles parvient à atteindre son but.",
      "Une douleur atroce vous étreint la poitrine et la tête tandis que ses aiguillons s'enfoncent dans votre chair en vous injectant un acide brûlant. STRAGNAH HABILETÉ: 36 ENDURANCE: 39 Cette créature est insensible à toute forme d'attaque psychique.",
      "Si vous sortez vainqueur de ce terrible combat, rendez-vous au 327."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce terrible combat, rendez-vous au 327.",
        "targetId": "327"
      }
    ],
    "combat": {
      "name": "STRAGNAH",
      "combatSkill": 36,
      "endurance": 39,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "57": {
    "id": "57",
    "text": [
      "Le couloir descend en pente douce vers une porte en bois bardée d'arceaux de fer. Vous manoeuvrez prudemment la poignée et, à votre grande surprise, le lourd battant s'ouvre sans un bruit. Après avoir passé le seuil, vous refermez la porte derrière vous avant de commencer à explorer les salles d'archives.",
      "Cette bibliothèque renferme des milliers de volumes et de parchemins jaunis par les ans, empilés les uns sur les autres sur des étagères qui tapissent tous les murs. L'atmosphère qui règne en ces lieux est chargée de l'odeur tenace des vieux livres, mais vous sentez également qu'il se dégage de tous ces ouvrages une forte aura de malignité.",
      "Passant silencieusement d'une pièce à l'autre, vous apercevez dans l'une d'elles deux druides assis à une table. Ils sont en train d'étudier un gros livre relié de cuir clair. Les deux druides ne semblent pas avoir plus d'une douzaine d'années. Ils chuchotent entre eux avec excitation et vous vous approchez à pas de loup pour épier leur conversation.",
      "Après quelques minutes, vous savez déjà qu'ils s'appellent Noraa et Monad. Ce sont des orphelins natifs du pays de Lourden, que des agents Cénériens ont amenés à Mogaruith afin d'en faire des novices. Les deux garçons semblent étudier avec beaucoup d'ardeur et parlent sans cesse du « Jour de la Grande Récompense » que les Cénériens fêteront avant la fin de l'année.",
      "Finalement, ils referment leur livre et, tandis que Monad va le ranger sur une étagère, Noraa lui dit : « Dépêche-toi, nous allons être en retard pour le sermon de Kadrian ! » Monad hoche la tête et s'empresse de rejoindre son frère qui sort de la bibliothèque par une autre porte.",
      "Dès que celle-ci se referme sur eux, vous sortez de votre cachette et vous pénétrez dans la pièce où Monad et Noraa se trouvaient quelques instants auparavant.",
      "Si vous voulez suivre les deux jeunes druides, rendez-vous au 138.",
      "Si vous préférez fouiller la pièce, rendez-vous au 48."
    ],
    "choices": [
      {
        "text": "Si vous voulez suivre les deux jeunes druides, rendez-vous au 138.",
        "targetId": "138"
      },
      {
        "text": "Si vous préférez fouiller la pièce, rendez-vous au 48.",
        "targetId": "48"
      }
    ]
  },
  "58": {
    "id": "58",
    "text": [
      "Vous identifiez immédiatement les baies noires contenues dans le pot de verre : ce sont des Volkonilles, fruits que l'on ne trouve que sur les hauts plateaux de Kakush. Elles sont fort prisées des magiciens, qui les utilisent comme catalyseurs dans leurs expériences.",
      "En effet, le jus de Volkonilles accélère et favorise les réactions chimiques entre les différentes substances, tout en restant parfaitement stable. Bien que vos connaissances en Alchimie Kaï soient encore rudi-mentaires, vous êtes certain que ces baies ont une grande valeur et qu'elles pourront vous être utiles au cours de votre mission.",
      "Si vous voulez gardez le pot de verre renfermant les Volkonilles, inscrivez-le dans la liste des Objets Contenus dans votre Sac à Dos, puis rendez-vous au 306."
    ],
    "choices": [
      {
        "text": "Si vous voulez gardez le pot de verre renfermant les Volkonilles, inscrivez-le dans la liste des Objets Contenus dans votre Sac à Dos, puis rendez-vous au 306.",
        "targetId": "306"
      }
    ]
  },
  "59": {
    "id": "59",
    "text": [
      "Vous vous approchez discrètement et fendez la foule qui s'agite confusément autour du chariot. Devant vous, la voie est libre. Vous franchissez allègrement le grand portail de fer et, quelques minutes plus tard, alors que vous longez le souterrain qui s'ouvre devant vous, vous l'entendez se refermer avec fracas.",
      "Le passage se poursuit vers l'est sur plusieurs kilomètres et, à l'exception de quelques rares sentinelles Vazhags, il est pratiquement désert. Finalement, vous parvenez à l'entrée d'une autre caverne, nettement plus petite que la précédente, mais tout aussi bondée.",
      "La lumière du jour y pénètre par une grande ouverture en arc de cercle que gardent des Vazhags en armure et un couple de chiens de guerre à peau calleuse. Par cette ouverture, vous apercevez un chemin qui disparaît derrière une lointaine rangée de collines.",
      "Juste au-dessus du porche, vous remarquez qu'un mince rayon de soleil filtre à travers une petite fenêtre creusée dans le rocher. Sachant qu'il serait risqué d'emprunter l'entrée principale -même pour quelqu'un d'aussi habile que vous - puisqu'elle est trop bien défendue, vous décidez de passer par la petite ouverture.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 3 au chiffre tiré.",
      "Si le résultat est inférieur ou égal à 5, rendez-vous au 192.",
      "S'il est supérieur à 5, rendez-vous au 346."
    ],
    "choices": [
      {
        "text": "rendez-vous au 192.",
        "targetId": "192"
      },
      {
        "text": "rendez-vous au 346.",
        "targetId": "346"
      }
    ]
  },
  "60": {
    "id": "60",
    "text": [
      "Le cri d'agonie du Cénérien a alerté la patrouille des Vazhags. Ces derniers font demi-tour mais dès qu'ils vous aperçoivent auprès du cadavre de leur chef, tel un chasseur avec sa proie, leur intrépidité fond comme neige au soleil. Ils abaissent leurs armes, commencent à reculer puis, dans un mouvement de panique générale, ils font volte-face et s'enfuient en courant, vous laissant seul dans la clairière, en compagnie de votre victime.",
      "La curiosité vous pousse à retirer le masque vert qui cache son visage. Vous découvrez alors un faciès hideux, grené par la maladie et n'ayant presque plus rien d'humain. Surmontant votre répulsion, vous fouillez le druide et trouvez sur lui les objets suivants : Un poignard Une robe de Druide de Cener (Si vous décidez de la garder, sachez qu'elle prendra la place de 2 objets dans votre Sac à Dos.) Un masque Cénérien Vingt Lunes (soit l'équivalent de 5 Pièces d'Or) Si vous voulez conserver certains de ces objets, n'oubliez pas d'apporter les modifications nécessaires sur votre Feuille d'Aventure.",
      "Votre science Magnakai vous informe que la baguette du druide ne possède plus aucun pouvoir; ce dernier s'est trouvé annihilé en même temps que son malfaisant propriétaire. Vous vous penchez pour la lui retirer des mains, mais à peine l'avez-vous touchée qu'elle tombe en poussière, tout en dégageant une senteur nauséabonde.",
      "Comme le crépuscule approche, vous quittez la clairière par la trouée, puis vous vous engagez à grands pas sur le sentier boueux qui la prolonge.",
      "Rendez-vous au 10."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 10.",
        "targetId": "10"
      }
    ],
    "loot": {
      "gold": 5
    }
  },
  "61": {
    "id": "61",
    "text": [
      "Vous brandissez le Glaive de Sommer et, du plat de la lame, vous interceptez la flamme magique. 11 se produit alors un craquement assourdissant et une décharge électrique fulgurante vous secoue le bras. Aussitôt après, la flamme repart en grésillant vers son envoyeur.",
      "Ce dernier la regarde arriver avec une froide indifférence, car il se sait protégé par une gaine de lumière bleutée qu'il vient de générer tout autour de lui. Au contact de l'écran protecteur, le jet de feu se divise en une multitude de flammèches inoffensives qui vont mourir sur le sol.",
      "« Il n'existe qu'un seul être au monde capable de manier cette arme ! », crache votre adversaire en pointant son bâton sur vous.",
      "« Et c'est par cette arme que tu périras, Cadak ! », lui rétorquez-vous farouchement.",
      "«Tsss ! siffle-t-il avec mépris. Je suis content que le destin t'ait mis sur ma route, Loup Solitaire, car c'est toi qui vas succomber. Retourne-toi et tiens-toi prêt à affronter la mort ! »",
      "Rendez-vous au 125."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 125.",
        "targetId": "125"
      }
    ]
  },
  "62": {
    "id": "62",
    "text": [
      "Vous vous postez à l'angle du passage et attendez le moment propice pour passer à l'action. Lorsque, grâce à l'acuité de vos sens, vous sentez que les Vazhags sont à portée de votre arme, vous surgissez de votre cachette et vous vous ruez sur leur chef.",
      "Sous le choc, la cage thora-cique de votre adversaire se brise dans un craquement sinistre et ses quatre compagnons, médusés, le regardent s'effondrer à leurs pieds. Sans perdre une seconde, vous profitez de leur stupeur pour fendre leurs rangs et filer à toutes jambes le long du tunnel.",
      "Le passage se poursuit vers l'est sur plusieurs kilomètres et, à l'exception d'une sentinelle Vazhag dont vous vous débarrassez prestement, il est absolument désert. Finalement, vous parvenez à l'entrée d'une autre caverne, nettement plus petite que la précédente, mais tout aussi bondée.",
      "La lumière du jour y pénètre par une grande ouverture en arc de cercle que gardent des Vazhags en armure et un couple de chiens de guerre à peau calleuse. Par cette ouverture, vous apercevez un chemin qui disparaît derrière une lointaine rangée de collines.",
      "Votre irruption met instantanément les gardes en état d'alerte. Ils lâchent leurs chiens en leur ordonnant d'attaquer et, tout en poussant des grognements sourds et rauques, les molosses se dirigent vers vous, prêts à vous sauter à la gorge.",
      "Si vous maîtrisez la Grande Discipline du Contrôle Animal, rendez-vous au 209.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 100."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Contrôle Animal, rendez-vous au 209.",
        "targetId": "209"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 100.",
        "targetId": "100"
      }
    ]
  },
  "63": {
    "id": "63",
    "text": [
      "Le monstre recule devant la violence de vos coups. A demi fou de douleur, il fait claquer ses mâchoires dans le vide en roulant des yeux effarés. Vous concentrez sur lui tout votre pouvoir mental afin de le tenir à distance suffisamment longtemps pour pouvoir atteindre le haut du pont et vous échapper de l'autre côté.",
      "La créature essaie de résister à vos ordres, mais sa volonté faiblit. Certes, son instinct la pousse à vous happer, mais ses nombreuses plaies ainsi que la puissance de votre psychisme l'empêchent de repasser à l'attaque. Fébrilement, vous vous hissez jusqu'au sommet du pont-levis et vous vous laissez tomber de l'autre côté.",
      "L'écho d'un furieux rugissement retentit alors dans la caverne et le monstre s'élance tête baissée contre le pont. En entendant les traverses de bois éclater sous le choc, vous vous hâtez de vous relever et vous vous engouffrez dans le souterrain avant qu'il soit trop tard.",
      "Durant le combat, et dans votre précipitation, deux objets se sont échappés de votre Sac à Dos. En conséquence, rayez de la liste des Objets contenus dans votre Sac à Dos ceux qui se trouvent en troisième et quatrième position.",
      "Rendez-vous au 306."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 306.",
        "targetId": "306"
      }
    ]
  },
  "64": {
    "id": "64",
    "text": [
      "Le Chien Enragé s'écroule à vos pieds et vous voyez le guerrier frémir en contemplant sa dépouille. Il cherche son arme d'une main hésitante, mais avant même qu'il la sorte du fourreau, vous vous élancez sur lui et lui transpercez le cœur malgré l'épaisseur de son armure.",
      "Vous vous approchez ensuite de lui et, du bout de votre arme, vous soulevez la visière de son heaume. Les traits grossiers et brutaux d'un Drakkar vous apparaissent. C'était l'un des rares à avoir survécu à la chute des Seigneurs des Ténèbres. Il avait eu la chance de trouver refuge ici, à Mogaruith, mais il ne pouvait pas prévoir, en revanche, que la malchance lui ferait croiser votre chemin...",
      "Avant de refermer le portail, vous cachez soigneusement le corps du Drakkar et celui de son chien, après quoi vous continuez à explorer les profondeurs de Mogaruith.",
      "Rendez-vous au 205."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 205.",
        "targetId": "205"
      }
    ]
  },
  "65": {
    "id": "65",
    "text": [
      "Votre simple défense Magnakaï est trop faible pour résister à l'énergie psychique dirigée contre vous. Vous ardent et, tandis que vous vous efforcez désespérément de rester conscient, tout votre corps se tord de douleur. Vous perdez 12 points d'ENDURANCE.",
      "Quelques instants plus tard, la douleur se calme peu à peu. Vous reprenez péniblement vos esprits, mais vous vous rendez confusément compte qu'une entité hostile, attirée par vos émissions psychiques de détresse, est en train de se rapprocher. C'est alors que s'élève du tréfonds des gouffres un grondement terrifiant.",
      "De chacun des puits obscurs monte une mystérieuse et énorme chose et, au moment précis où les glapissements des goules atteignent leur paroxysme, vous voyez surgir trois têtes de chats gigantesques, perchées au bout d'un corps reptilien aussi épais qu'un tronc d'arbre.",
      "Les monstres découvrent leurs crocs en sifflant et, d'une brève j secousse, se débarrassent des ossements et débris humains restés englués dans leur pelage hérissé. A la vue de ces créatures de cauchemar, vous ne pouvez réprimer un cri de désespoir. Votre plainte pathétique se perd parmi les hurlements des goules, mais les monstres félino-reptiliens semblent toutefois les avoir I perçus.",
      "Ils réagissent instantanément en rampant lentement vers l'endroit où vous vous trouvez.",
      "Si vous maîtrisez la Grande Discipline de la Puissance Psychique, rendez-vous au 80.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 38."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de la Puissance Psychique, rendez-vous au 80.",
        "targetId": "80",
        "requiredDiscipline": "Puissance Psychique"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 38.",
        "targetId": "38"
      }
    ],
    "damage": 12
  },
  "66": {
    "id": "66",
    "text": [
      "En fouillant la dépouille du Cénérien, vous trouvez les objets suivants : Une potion d'Alether (laquelle vous permettra de gagner 2 points d'HABILETÉ pour la durée d'un seul i combat) L'équivalent d'1 Repas Un poignard Si vous souhaitez conserver l'un ou l'autre des ces ! objets, n'oubliez pas de les inscrire sur votre Feuille d'Aventure.",
      "Ensuite, rendez-vous au 214."
    ],
    "choices": [
      {
        "text": "rendez-vous au 214.",
        "targetId": "214"
      }
    ]
  },
  "67": {
    "id": "67",
    "text": [
      "Votre instinct de Grand Maître Kaï vous avertit du danger. Au bout du tunnel, vous sentez la présence de plusieurs créatures, dont certaines sont des Vazhags. Elles forment une foule bruyante et tapageuse, mais les sons qu'elles émettent ne semblent pas particulièrement hostiles.",
      "D'après l'écho qui se répercute fortement, vous déduisez que ces créatures se trouvent dans un vaste endroit.",
      "Si vous souhaitez vous rendre par télépathie jusqu'en cet endroit, afin de récolter de plus amples informations, rendez-vous au 337.",
      "Si vous ne voulez pas prendre le risque de vous aventurer de cette manière dans ce sombre dédale souterrain, rendez-vous au 244."
    ],
    "choices": [
      {
        "text": "Si vous souhaitez vous rendre par télépathie jusqu'en cet endroit, afin de récolter de plus amples informations, rendez-vous au 337.",
        "targetId": "337",
        "requiredDiscipline": "Télépathie"
      },
      {
        "text": "Si vous ne voulez pas prendre le risque de vous aventurer de cette manière dans ce sombre dédale souterrain, rendez-vous au 244.",
        "targetId": "244"
      }
    ]
  },
  "68": {
    "id": "68",
    "text": [
      "Utilisant votre discipline Magnakai\", vous concentrez votre pouvoir sur l'un des gardes, puis vous lui envoyez une terrible décharge d'énergie psychique. Aussitôt, le Vazhag se prend la tête à deux mains et pousse un hurlement strident qui attire l'attention des autres créatures alentour.",
      "En le voyant tomber à la renverse, tout le monde se précipite pour voir ce qui se passe. Vous profitez alors de l'indescriptible cohue qui s'ensuit pour sortir de votre cachette et tenter de passer sous le portail sans éveiller les soupçons.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Écran Psychique, ajoutez 2 au chiffre obtenu.",
      "Si le total est inférieur ou égal à 4, rendez-vous au 223.",
      "Si ce total est supérieur, rendez-vous au 331."
    ],
    "choices": [
      {
        "text": "rendez-vous au 223.",
        "targetId": "223"
      },
      {
        "text": "rendez-vous au 331.",
        "targetId": "331"
      }
    ]
  },
  "69": {
    "id": "69",
    "text": [
      "Votre arme atteint la créature à la tête et la blesse à mort. Malheureusement, avant de rendre le dernier soupir, votre victime trouve encore la force d'appuyer sur le bouton d'alarme.",
      "Rendez-vous au 216."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 216.",
        "targetId": "216"
      }
    ]
  },
  "70": {
    "id": "70",
    "text": [
      "Le Vazhag pointe son museau à quelques centimètres de votre visage et vous annonce que vous pouvez pénétrer dans Mogaruith à condition de signaler votre arrivée au bureau d'admission.",
      "« Les inscriptions se font ici », vous dit-il en désignant une porte latérale. Aussitôt, votre Intuition Magnakai vous prévient que le Vazhag a menti : c'est une cellule de prison qui vous attend derrière cette porte.",
      "Si vous décidez malgré tout de passer la porte indiquée, rendez-vous au 30.",
      "Si vous ne souhaitez pas entrer par cette porte, rendez-vous au 162."
    ],
    "choices": [
      {
        "text": "Si vous décidez malgré tout de passer la porte indiquée, rendez-vous au 30.",
        "targetId": "30"
      },
      {
        "text": "Si vous ne souhaitez pas entrer par cette porte, rendez-vous au 162.",
        "targetId": "162"
      }
    ]
  },
  "71": {
    "id": "71",
    "text": [
      "Les yeux rivés sur la plate-forme d'observation, vous attendez que la chaîne ait terminé sa trajectoire avant de lâcher prise et de vous propulser dans les airs. Votre manœuvre se déroule à la perfection : vous vous agrippez à la rambarde, vous effectuez un rétablissement puis vous vous ruez vers la porte qui dessert la plateforme.",
      "Rendez-vous au 128."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 128.",
        "targetId": "128"
      }
    ]
  },
  "72": {
    "id": "72",
    "text": [
      "Vous vous dégagez à grand-peine de tous les corps inertes qui s'entassent autour de vous mais, une fois à l'air libre, vous apercevez le Druide de Cener qui s'enfuit vers la trouée par laquelle lui et son escorte étaient entrés dans la clairière. Vous savez pertinemment que, s'il parvient à vous échapper, il donnera l'alerte dans tout Mogaruith et que cela mettra votre mission en péril, sans parler de votre propre vie.",
      "Si vous possédez un arc et des flèches et que vous souhaitiez vous en servir, rendez-vous au 176.",
      "Si vous maîtrisez la Grande Discipline de la Magie des Anciens et que vous souhaitiez y avoir recours, rendez-vous au 334.",
      "Si vous maîtrisez et si vous voulez utiliser la Grande Discipline de l'Alchimie Kaï, rendez-vous au 264.",
      "Enfin, si vous ne maîtrisez aucune des Grandes Disciplines ci-dessus, ou si vous ne désirez pas vous en servir, rendez-vous au 237."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et des flèches et que vous souhaitiez vous en servir, rendez-vous au 176.",
        "targetId": "176"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline de la Magie des Anciens et que vous souhaitiez y avoir recours, rendez-vous au 334.",
        "targetId": "334"
      },
      {
        "text": "Si vous maîtrisez et si vous voulez utiliser la Grande Discipline de l'Alchimie Kaï, rendez-vous au 264.",
        "targetId": "264"
      },
      {
        "text": "Enfin, si vous ne maîtrisez aucune des Grandes Disciplines ci-dessus, ou si vous ne désirez pas vous en servir, rendez-vous au 237.",
        "targetId": "237"
      }
    ]
  },
  "73": {
    "id": "73",
    "text": [
      "Exterminus n'est plus qu'à une coudée de vous, quand vous parvenez enfin à vous libérer des liens épineux qui vous entravaient Avec la souplesse d'un chat, vous vous faufilez sous les membres de la créature et réussissez à lui planter votre arme en plein ventre.",
      "Le monstre pousse un hurlement déchirant, puis il tombe à la renverse sur la table qui se dresse à côté de Cadak. Son énorme masse fait voler le plateau de bois en éclats et entraîne dans sa chute la sphère de cristal qui était posée dessus. Il s'en dégage aussitôt une émanation pestilentielle qui vous étourdit mais, dans le même temps, un tourbillon de noirceur enveloppe le corps d'Exterminus.",
      "Un silence glacial s'abat soudain sur les lieux et, deux secondes plus tard, il ne reste plus aucune trace du monstre ni des débris de la sphère. Vous vous remettez alors vivement debout et vous vous tournez face à l'Archidruide. Le spectacle dont il vient d'être témoin l'a laissé livide et bouche bée.",
      "Il marmonne des paroles incohérentes et tremble de peur. Fermement résolu à débarrasser le Magnamund de ce malfaisant personnage, vous avancez sur lui l'arme au poing, mais, en vous voyant approcher, il reprend subitement le contrôle de lui-même et entre en action.",
      "Vous le voyez agiter les mains devant lui et, soudain, un écran de lumière crue se dresse entre lui et vous. Vous fendez cette protection à l'aide de votre arme, mais vous ne rencontrez aucune résistance de l'autre côté. L'instant suivant, la lumière s'évanouit et vous vous retrouvez seul dans la salle du trône.",
      "Rendez-vous au 259."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 259.",
        "targetId": "259"
      }
    ]
  },
  "74": {
    "id": "74",
    "text": [
      "Vous vous éloignez de la rive en voyant les Vazhags traverser le pont au pas de charge. Alors que l'écho dissonant des ordres aboyés par leur chef résonne à leurs oreilles, ils sautent sur la berge boueuse et foncent droit sur vous en brandissant des armes rouillées.",
      "VAZHAGS HABILETÉ: 26 ENDURANCE: 30 Si vous êtes vainqueur, rendez-vous au 142."
    ],
    "choices": [
      {
        "text": "Si vous êtes vainqueur, rendez-vous au 142.",
        "targetId": "142"
      }
    ],
    "combat": {
      "name": "VAZHAGS",
      "combatSkill": 26,
      "endurance": 30,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "75": {
    "id": "75",
    "text": [
      "L'escalier vous conduit à un autre hall, quelque quinze mètres plus haut. Là, vous avez le choix entre deux autres escaliers qui montent, l'un à gauche, l'autre à droite, et un souterrain obscur qui commence juste devant vous. Votre sensibilité de Grand Maître Kaï décèle une présence au bout de ce tunnel et, en focalisant votre vision télépathique dans cette direction, vous découvrez qu'un autre groupe de Vazhags marche droit sur vous.",
      "Cette patrouille-là est menée par deux Disciples de Vashna et un couple de chiens de guerre. Soucieux de leur échapper, vous contemplez pensivement les deux escaliers avant de prendre une décision.",
      "Si vous voulez monter l'escalier de gauche, rendez-vous au 21.",
      "Si vous préférez emprunter celui de droite, rendez-vous au 27."
    ],
    "choices": [
      {
        "text": "Si vous voulez monter l'escalier de gauche, rendez-vous au 21.",
        "targetId": "21"
      },
      {
        "text": "Si vous préférez emprunter celui de droite, rendez-vous au 27.",
        "targetId": "27"
      }
    ]
  },
  "76": {
    "id": "76",
    "text": [
      "La boule de verre explose à vos pieds et vous êtes aussitôt enveloppé par un nuage de gaz dense et malodorant. Votre gorge se serre instantanément et votre estomac se révulse au contact de cette émanation chargée de bactéries mortelles. Fort heureusement, votre système immunitaire commence à fonctionner et, en l'espace de quelques secondes, vous retrouvez assez de force pour gagner la sortie, dissimulé par le rideau de fumée.",
      "Vous parvenez à vous échapper sans encombre et, en débouchant à l'air libre, vous restez quelques instants ébloui par la lumière du petit matin qui inonde les collines environnantes. Au fur et à mesure que vous avancez sur la piste qui part des cavernes, votre vision s'améliore et vous découvrez une vaste forêt qui s'étend vers l'est.",
      "Il se dégage une telle aura de mal de cet océan de verdure que vous ne tardez pas à l'identifier comme étant la Forêt de Ruel. Constatant avec soulagement que personne ne vous a suivi, vous vous accordez un court moment de repos au milieu d'un groupe de rochers.",
      "Autour de vous, tout semble désert ; seul le tracé sinueux d'une route poussiéreuse qui serpente à travers les collines jusqu'à l'orée de la forêt rompt la monotonie du paysage. Après avoir consulté votre carte, vous en déduisez qu'il s'agit de la route de Skardos, la piste secrète que les Cénériens utilisent pour se rendre à Mogaruith.",
      "Vous décidez de l'emprunter mais auparavant (à moins que vous ne maîtrisiez la Grande Discipline de l'Art de la Chasse), vous devez prendre un Repas ou bien perdre 3 points d'ENDURANCE.",
      "Rendez-vous au 230."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 230.",
        "targetId": "230"
      }
    ]
  },
  "77": {
    "id": "77",
    "text": [
      "Une robe de druide et un masque Cénérien seraient un déguisement utile pour explorer, incognito, les dédales de Mogaruith. Sachant que cela augmentera grandement vos chances de succès, vous décrochez de leur patère les accessoires qui vous conviennent.",
      "N'oubliez pas d'inscrire votre choix sur votre Feuille d'Aventure. Une robe de Druide de Cener prend la place de deux Objets de Sac à Dos ; un masque Cénérien prend la place d'un seul objet.",
      "Si vous transportez déjà le nombre maximal d'objets, vous devez vous débarrasser d'un ou de plusieurs objets en faveur du masque Cénérien ou de la Robe de Druide.",
      "Rendez-vous au 158."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 158.",
        "targetId": "158"
      }
    ]
  },
  "78": {
    "id": "78",
    "text": [
      "Devant vous s'étend un grand hall éclairé par des sphères de feu suspendues au plafond par des chaînes. De part et d'autre, deux rangées de statues de pierre se font face, formant une haie terminée par un porche. Bien que ces statues soient d'apparence humaine, l'expression de douleur et de désespoir intenses qui se peint sur leur visage déforme leurs traits au point de les rendre grotesques.",
      "Vous avancez avec une extrême prudence. Vous vous méfiez de ces étranges statues et vous vous tenez prêt à réagir à la vitesse de l'éclair, pour le cas où elles se mettraient subitement à s'animer. C'est alors que vous détectez une menace qui vous immobilise net.",
      "Votre sensibilité Kaï vous avertit que quelque chose est tapi plus loin, dans l'ombre d'une anfractuo-sité. Soucieux de ne pas déranger cette mystérieuse créature, quelle qu'elle soit, vous utilisez votre science du Camouflage pour masquer votre présence avant de continuer à progresser.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité, ajoutez 3 au chiffre que vous avez tiré.",
      "Si le résultat est inférieur ou égal à 5, rendez-vous au 186.",
      "Si ce résultat est supérieur, rendez-vous au 196."
    ],
    "choices": [
      {
        "text": "rendez-vous au 186.",
        "targetId": "186"
      },
      {
        "text": "rendez-vous au 196.",
        "targetId": "196"
      }
    ]
  },
  "79": {
    "id": "79",
    "text": [
      "Vous longez le tunnel sur plusieurs kilomètres, vous enfonçant de plus en plus profondément sous les monts Skardos. Finalement, vous débouchez dans un souterrain plus large. Les parois en sont lisses et des empreintes de pas sont imprimées dans la poussière du sol.",
      "Grâce à votre sens infaillible de l'Exploration, vous savez que ce passage file droit vers l'est, c'est- à-dire directement vers Mogaruith. Les nombreuses empreintes attestent que le souterrain est fréquemment utilisé. De plus, à en juger par leur taille et leur profondeur, elles appartiennent à une espèce particulière de gros rats qui marchent debout, comme les humains.",
      "D'après ce que vous avez entendu dire à propos des indigènes divers et variés qui peuplent le Ruel, ces créatures sont certainement des Vazhags, une vermine élevée spécialement pour le combat par les Cénériens. Cependant, parmi toutes les empreintes laissées par les Vazhags, vous en remarquez d'autres, fort différentes.",
      "Vous avancez prudemment mais, malgré vos craintes, vous ne faites pas de mauvaise rencontre, si ce n'est quelques chauves-souris et un ou deux serpents inoffensifs qui s'enfuient à votre approche. L'air se rafraîchit et devient de plus en plus humide.",
      "Vous pressentez qu'il y a une nappe d'eau dans les parages et vous n'êtes pas surpris d'apercevoir, quelque temps après, des reflets miroitants qui jouent sur la voûte polie du souterrain.- Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 67.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 244."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 67.",
        "targetId": "67",
        "requiredDiscipline": "Intuition"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 244.",
        "targetId": "244"
      }
    ]
  },
  "80": {
    "id": "80",
    "text": [
      "En désespoir de cause, vous puisez dans vos dernières réserves psychiques pour générer des ondes d'énergie que vous dirigez contre le monstre le plus proche. Votre attaque atteint le subconscient de la bête avec une telle violence qu'elle ferme les yeux en se tordant de douleur.",
      "Tandis que votre influx pénètre de plus en plus profondément dans son cortex vulnérable, l'épouvantable créature recule progressivement jusqu'à l'entrée de son gouffre. Cependant, malgré la défaite de leur congénère, les deux autres monstres n'en continuent pas moins d'avancer sur vous.",
      "GIGANITES DU RUEL HABILETÉ: 38 ENDURANCE: 60 Ces créatures sont sensibles à toutes les formes d'attaque psychique.",
      "Si vous parvenez à réduire leur ENDURANCE à 36 ou moins, vous pouvez fuir le combat en vous rendant au 13.",
      "Si vous sortez vainqueur du combat, rendez-vous au 286."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur du combat, rendez-vous au 286.",
        "targetId": "286"
      }
    ],
    "combat": {
      "name": "GIGANITES DU RUEL",
      "combatSkill": 38,
      "endurance": 60,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "81": {
    "id": "81",
    "text": [
      "Vous saisissez votre arme et la glissez entre la goupille et l'anse du chaudron. Évidemment, vous n'espérez pas briser le robuste anneau de métal, mais peut-être pourrez-vous le soulever afin de le dégager de la chaîne qui le retient.",
      "Utilisez la Table de Hasard, puis modifiez le chiffre obtenu en fonction des éléments suivants : Si vous avez le Glaive de Sommer, ajoutez 4.",
      "Si vous utilisez une Lance ou un Glaive, ajoutez 2.",
      "Si vous vous servez d'un Bâton ou d'un Poignard, déduisez 2.",
      "A présent, si le résultat final est inférieur ou égal à 4, rendez-vous au 275.",
      "Si ce résultat est supérieur, rendez-vous au 248."
    ],
    "choices": [
      {
        "text": "rendez-vous au 275.",
        "targetId": "275"
      },
      {
        "text": "rendez-vous au 248.",
        "targetId": "248"
      }
    ]
  },
  "82": {
    "id": "82",
    "text": [
      "Vous rabattez votre capuchon et relevez votre manteau Kaï jusqu'aux oreilles, puis vous vous plaquez contre la paroi poussiéreuse du tunnel. Grâce à la pénombre et à votre talent de camouflage, vous passez totalement inaperçu et, lorsque les deux patrouilles se rejoignent, tout près de l'endroit où vous êtes, vous les entendez se reprocher mutuellement de vous avoir laissé fuir.",
      "Le ton monte rapidement et une rixe semble imminente, mais un Vazhag plus âgé arrive à point nommé pour désamorcer le conflit naissant. Il ordonne à ses congénères de rebrousser chemin jusqu'à la caverne volcanique, et vous attendez tranquillement qu'ils soient tous partis avant de poursuivre votre chemin vers l'est.",
      "Pendant près de cinq kilomètres, vous longez le souterrain sans rencontrer âme qui vive, à l'exception de quelques rares sentinelles. Finalement, vous parvenez à l'entrée d'une autre caverne, nettement plus petite que la précédente, mais tout aussi bondée.",
      "La lumière du jour y pénètre par une grande ouverture en arc de cercle que gardent des Vazhags en armure et un couple de chiens de guerre à peau calleuse. Par cette ouverture, vous apercevez un chemin qui disparaît derrière une lointaine rangée de collines.",
      "Juste au-dessus du porche, vous remarquez qu'un mince rayon de soleil filtre à travers une petite fenêtre creusée dans le rocher. Sachant qu'il serait risqué d'emprunter l'entrée principale puisqu'elle est trop bien défendue, vous décidez de passer par la petite ouverture.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 3 au chiffre que vous avez tiré.",
      "Si le résultat est inférieur ou égal à 5, rendez-vous au 192.",
      "S'il est supérieur à 5, rendez-vous au 346."
    ],
    "choices": [
      {
        "text": "rendez-vous au 192.",
        "targetId": "192"
      },
      {
        "text": "rendez-vous au 346.",
        "targetId": "346"
      }
    ]
  },
  "83": {
    "id": "83",
    "text": [
      "A bout de souffle et tout éclaboussé du sang de vos ennemis, vous rengainez votre arme. La cloche d'alarme continue de résonner sans trêve et vous savez qu'à l'heure actuelle toutes les créatures de Mogaruith sont à vos trousses. Soucieux d'atteindre la surface le plus vite possible, vous enjambez les cadavres et vous vous élancez à l'assaut des marches.",
      "Tout en montant, vous devez prendre un Repas, sans quoi vous perdriez 3 points d'ENDURANCE car vous êtes littéralement affamé.",
      "Ensuite, rendez-vous au 75."
    ],
    "choices": [
      {
        "text": "rendez-vous au 75.",
        "targetId": "75"
      }
    ]
  },
  "84": {
    "id": "84",
    "text": [
      "Utilisant votre Discipline Magnakai de l'Invisibilité, vous prenez soin de masquer l'odeur et la chaleur dégagées par votre corps, afin de ne pas éveiller la curiosité des habitants du Ruel. Ensuite, vous avancez à pas prudents à travers les hautes herbes qui vous séparent de l'arbre abattu.",
      "Au fur et à mesure que vous vous en approchez, vous faites usage de votre Intuition Magnakai, au cas où des ennemis seraient cachés dans les alentours. Ne détectant aucune menace imminente, vous continuez à avancer vers l'orée de la forêt. Il s'en dégage une moiteur malsaine et pestilentielle.",
      "Des nuées d'insectes se repaissent du tronc de l'arbre couché, envahi par une multitude de champignons parasites. Vous adressez une prière à Ishir avant de vous enfoncer plus avant sur ce territoire inhospitalier. Au-delà de l'arbre mort, vous apercevez un sentier bordé de part et d'autre par des troncs énormes et des buissons épineux.",
      "La végétation est tellement dense qu'il est absolument impossible de quitter le sentier. Vous avez l'impression d'être engagé sur un chemin sans fin, dont le tracé semble le fruit de la sorcellerie. Au bout de quelque temps, le sentier s'élargit et les arbres se font moins rapprochés.",
      "Devant vous, vous apercevez une clairière, mais vos sens vous avertissent que vous n'êtes plus seul dans les parages. Vous portez machinalement la main à votre arme et, ce faisant, vous vous rendez compte que le sol s'anime sous vos pieds ; vous êtes en train de marcher sur un tapis d'insectes !",
      "Vous faites aussitôt appel à votre science élémentaire du Contrôle Animal pour savoir si ces créatures sont hostiles ou non, mais vos efforts restent vains.",
      "Si vous maîtrisez la Grande Discipline du Contrôle Animal, rendez-vous au 7.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 171."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Contrôle Animal, rendez-vous au 7.",
        "targetId": "7"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 171.",
        "targetId": "171"
      }
    ]
  },
  "85": {
    "id": "85",
    "text": [
      "Le tunnel se met à monter en pente douce et, tandis que vous progressez, vous sentez un courant d'air chaud vous caresser le visage. Mais cette sensation devient vite désagréable, car l'atmosphère se fait de plus en plus lourde et moite. On dirait qu'un dragon exhale son haleine chaude et fétide tout le long de ce passage.",
      "Peu après, vous entendez dans le lointain le grondement profond d'un grand feu, ainsi que l'écho de couinements dissonants. A en juger par ces derniers, il y a sûrement des Vazhags dans les parages. Vous utilisez votre pouvoir de camouflage, puis vous avancez jusqu'à l'entrée d'une gigantesque caverne puissamment éclairée.",
      "Au centre se trouve un volcan souterrain en activité. Une colonne de feu jaillit de son cratère à une hauteur vertigineuse, et d'épais nuages de vapeur s'élèvent jusqu'à la voûte rocheuse, ruisselante de condensation. Tout autour du cratère sont regroupées des huttes rondes, entièrement construites avec des débris de lave pétrifiée.",
      "Ces habitations rudimen-taires abritent une colonie de Vazhags ; vous dénombrez une cinquantaine de femelles et de jeunes qui vont et viennent dans le campement, et vous estimez qu'il y en a certainement autant à l'intérieur des cabanes. Grâce à votre science du Camouflage et aux ombres dansantes qui jouent sur les parois de la caverne, vous réussissez à explorer les lieux sans éveiller l'attention.",
      "De l'autre côté du cratère, vous distinguez une vaste ouverture en ogive. Elle est gardée par six Vazhags mâles, solidement armés et caparaçonnés. Vous vous en approchez, persuadé que vos pouvoirs Kaï vous permettront de passer au nez et à la barbe de ces sentinelles, mais vous vous arrêtez net à la vue d'un spectacle décourageant ; tout au fond, l'ouverture est obstruée par un énorme portail de fer noir.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, rendez- vous au 342.",
      "Sinon, rendez-vous au 127."
    ],
    "choices": [
      {
        "text": "Sinon, rendez-vous au 127.",
        "targetId": "127"
      }
    ]
  },
  "86": {
    "id": "86",
    "text": [
      "Dans l'espoir d'atteindre la plate-forme, d'une main vous vous accrochez à l'échelle et, de l'autre, vous menacez vos adversaires de votre arme. DISCIPLES DEVASHNA HABILETÉ: 36 ENDURANCE: 50 En raison de votre position précaire et de la longueur des lances de vos ennemis, réduisez votre HABILETÉ de 4 pour toute la durée du combat.",
      "Si vous en sortez vainqueur, rendez-vous au 305."
    ],
    "choices": [
      {
        "text": "Si vous en sortez vainqueur, rendez-vous au 305.",
        "targetId": "305"
      }
    ],
    "combat": {
      "name": "DISCIPLES DEVASHNA",
      "combatSkill": 36,
      "endurance": 50,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "87": {
    "id": "87",
    "text": [
      "Vous émergez sur le flanc d'une montagne, près d'un affleurement dissimulé par des buissons touffus et une rangée de rochers. Vous restez quelques instants ébloui par la lumière du petit matin qui inonde les collines environnantes. Au fur et à mesure que votre vision s'améliore, vous découvrez un véritable océan de verdure qui semble peuplé de tous les dangers.",
      "D'après la position du soleil et grâce à votre sens de l'orientation, vous en déduisez qu'il s'agit de la forêt de Ruel et que vous vous trouvez donc sur le versant oriental des monts Skardos. Autour de vous, tout semble désert ; seul le tracé sinueux d'une route poussiéreuse qui serpente à travers les collines nues jusqu'à l'orée de la forêt rompt la monotonie du paysage.",
      "Après avoir consulté votre carte, vous comprenez qu'il s'agit de la route de Skardos, la piste secrète que les Cénériens utilisent pour se rendre directement à Mogaruith. Vous décidez de l'emprunter mais auparavant (à moins que vous ne maîtrisiez la Grande Discipline de l'Art de la Chasse), vous devez prendre un Repas ou bien perdre 3 points d'ENDURANCE.",
      "Rendez-vous ensuite au 230."
    ],
    "choices": []
  },
  "88": {
    "id": "88",
    "text": [
      "L'acidité de la salive troue la manche droite et le dos de votre tunique. Fort heureusement, le pouvoir de votre Grande Discipline du Nexus évite à votre peau de subir le même sort !",
      "Rendez-vous au 117."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 117.",
        "targetId": "117"
      }
    ]
  },
  "89": {
    "id": "89",
    "text": [
      "Vous regardez les Vazhags s'enfuir à toutes jambes et vous songez à vous lancer à leurs trousses, car ils ne tarderont sûrement pas à donner l'alarme dans tout Mogaruith. Mais les Vazhags sont des hôtes de la forêt et vous savez pertinemment qu'il serait impossible de les rattraper tous les deux à temps, même pour un chasseur aussi émérite que vous.",
      "Vous décidez donc de les laisser aller et d'utiliser le Zombie comme prétexte pour vous introduire dans Mogaruith. Vous vous baissez pour ramasser la chaîne qui le retient, pris, le cœur battant à tout rompre, vous vous engagez sur la piste qui conduit au pont-levis.",
      "Rendez-vous au 12."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 12.",
        "targetId": "12"
      }
    ]
  },
  "90": {
    "id": "90",
    "text": [
      "Rassemblant tout votre courage, vous sortez de votre cachette et vous vous précipitez sur le Cénérien. Ce dernier fait volte-face et ordonne à ses Vazhags de venir à son secours. Les Hommes-Rats obéissent immédiatement et se jettent sur vous avant que vous n'ayez pu atteindre leur maître.",
      "ESCORTE DE VAZHAGS HABILETÉ : 34 ENDURANCE : 44 Si vous êtes vainqueur, rendez-vous au 149."
    ],
    "choices": [
      {
        "text": "Si vous êtes vainqueur, rendez-vous au 149.",
        "targetId": "149"
      }
    ],
    "combat": {
      "name": "ESCORTE DE VAZHAGS",
      "combatSkill": 34,
      "endurance": 44,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "91": {
    "id": "91",
    "text": [
      "Vous vous concentrez de toutes vos forces sur l'œil unique de la créature et tentez de l'endormir. Sa paupière commence à se fermer lentement, mais pas complètement car elle résiste farouchement à votre influx psychique.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de la Puissance Psychique, ajoutez 3 au chiffre que vous avez tiré. D'autre part, si votre ENDURANCE actuelle est supérieure ou égale à 20, ajoutez 2 à ce même chiffre.",
      "Si le résultat obtenu est inférieur ou égal à 7, rendez-vous au 281.",
      "S'il est supérieur, rendez-vous au 184."
    ],
    "choices": [
      {
        "text": "rendez-vous au 281.",
        "targetId": "281"
      },
      {
        "text": "rendez-vous au 184.",
        "targetId": "184"
      }
    ]
  },
  "92": {
    "id": "92",
    "text": [
      "Bien résolu à ne pas vous laisser arrêter par une simple porte, vous vous agenouillez pour examiner la serrure de plus près. Il ne vous faut que quelques secondes pour la forcer, mais, au moment précis où elle cède, le sortilège qui bloquait le mécanisme vous envoie une violente décharge qui remonte le long de votre bras jusqu'à votre cerveau.",
      "Vous restez quelques instants aveuglé par la douleur et vous perdez 5 points d'ENDURANCE. Par chance, vos défenses psychiques sont suffisamment fortes pour minimiser les effets de ce fulgurant influx qui aurait été fatal au commun des mortels. Néanmoins, l'attaque fut si brutale que vous n'avez pas pu refréner un cri déchirant.",
      "Maintenant que la voie est libre, vous vous hâtez de franchir le seuil de la porte, car il faut rattraper le temps perdu. Cependant, votre cri de douleur n'est pas passé inaperçu et, tandis que vous pénétrez dans la vaste salle sur laquelle s'ouvre la porte, vous vous retrouvez nez à nez avec la créature que vous venez inopinément de déranger.",
      "Rendez-vous au 120."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 120.",
        "targetId": "120"
      }
    ],
    "damage": 5
  },
  "93": {
    "id": "93",
    "text": [
      "Peu à peu, vous retrouvez vos esprits et vous vous remettez péniblement debout. Devant vous, la piste traverse le plateau et passe à quelques mètres des puits de mine avant d'aboutir à l'entrée d'une sorte de tunnel sous les arbres. Vous avancez prudemment, mais tous vos sens se rebellent au fur et à mesure de votre progression.",
      "Les visions que vous avez eues ainsi que la malignité qui émane de cet endroit sont si fortes, si perceptibles qu'elles vous agressent les narines et vous coupent presque le souffle. Vous décidez de courir vers l'entrée du tunnel pour en finir au plus vite, mais vous vous arrêtez net en entendant du bruit derrière vous.",
      "Une horde de silhouettes monstrueuses vient d'apparaître à l'orée de la forêt. Ce sont des corps décharnés que l'on croirait à mi-chemin entre la vie et la mort. Leurs têtes sont dégarnies de cheveux, leurs yeux rouges, sans paupières, roulent dans des orbites qui semblent trop larges pour eux, et leurs bouches béantes sont ornées sur le pourtour d'une multitude de crocs pointus.",
      "Ces créatures d'épouvante grognent à l'unisson et vous sentez un frisson glacé vous parcourir l'échiné. Tout en vous efforçant de surmonter votre peur et votre dégoût, vous tournez les talons et vous vous ruez vers le tunnel. Vous n'êtes plus qu'à quelques mètres du but quand, soudain, une bonne douzaine d'autres créatures du même acabit surgissent de l'ombre pour vous barrer le passage.",
      "Vous entendez de nouveau s'élever de funestes grognements... Vous examinez désespérément le plateau afin de trouver un moyen d'échapper à ces morts-vivants, mais en vain ; vous êtes bel et bien pris au piège ! La seule alternative qui vous reste est d'affronter les créatures ou bien de rebrousser chemin.",
      "Si vous voulez combattre l'ennemi, rendez-vous au 163.",
      "Si vous préférez retourner vers les puits, rendez-vous au 148."
    ],
    "choices": [
      {
        "text": "Si vous voulez combattre l'ennemi, rendez-vous au 163.",
        "targetId": "163"
      },
      {
        "text": "Si vous préférez retourner vers les puits, rendez-vous au 148.",
        "targetId": "148"
      }
    ]
  },
  "94": {
    "id": "94",
    "text": [
      "Après avoir observé le souterrain pendant plusieurs minutes, vous concluez qu'il n'y a pas de Vazhags dans les alentours et que vous -ne courez aucun risque à poursuivre votre route. Vous vous glissez donc dans ce nouveau passage et continuez à avancer vers le nord, profitant des zones d'ombre et utilisant votre Camouflage Kaï pour masquer votre présence.",
      "Rendez-vous au 85."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 85.",
        "targetId": "85"
      }
    ]
  },
  "95": {
    "id": "95",
    "text": [
      "Vous suivez ce tunnel obscur pendant plusieurs minutes avant d'arriver à un cul-de-sac. Vous êtes sur le point de rebrousser chemin, lorsque vous distinguez soudain, au milieu de la maçonnerie qui obstrue le passage, une brique curieusement façonnée. En l'examinant de plus près, vous découvrez un trou de serrure encadré par un motif sculpté qui porte le sceau de l'Archidruide Cadak.",
      "Si vous possédez un Plan de Mogaruith, rendez-vous au 341.",
      "Si vous possédez une Clé d'or, rendez-vous au 234.",
      "Si vous n'avez ni l'un ni l'autre de ces Objets Spéciaux, rendez-vous au 179."
    ],
    "choices": [
      {
        "text": "Si vous possédez un Plan de Mogaruith, rendez-vous au 341.",
        "targetId": "341"
      },
      {
        "text": "Si vous possédez une Clé d'or, rendez-vous au 234.",
        "targetId": "234"
      },
      {
        "text": "Si vous n'avez ni l'un ni l'autre de ces Objets Spéciaux, rendez-vous au 179.",
        "targetId": "179"
      }
    ]
  },
  "96": {
    "id": "96",
    "text": [
      "Vous atterrissez sur la berge dans une gerbe de boue et, quelques secondes plus tard, vous entendez retentir une voix criarde à l'autre extrémité du lac. C'est un Druide de Cener qui ordonne à son escorte de Vazhags de se lancer à votre poursuite. Aussitôt, quatre Hommes-Rats se précipitent sur le pont, raclant les traverses de bois avec leurs pattes griffues et brandissant des épées et des lances au bout de leurs poings couverts de poils drus.",
      "Si vous possédez un arc et une flèche, rendez-vous au 225.",
      "Sinon, rendez-vous au 74."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et une flèche, rendez-vous au 225.",
        "targetId": "225"
      },
      {
        "text": "Sinon, rendez-vous au 74.",
        "targetId": "74"
      }
    ]
  },
  "97": {
    "id": "97",
    "text": [
      "La puissance de votre art vous permet de repousser les filaments et de les renvoyer en direction d'Exterminus. Ce dernier ne tarde pas à se retrouver entièrement ligoté, sans pouvoir faire quoi que ce soit pour se libérer. Fou d'impuissance, le monstre s'affale la tête la première sur la table qui se dresse à côté du siège noir de Cadak.",
      "Son énorme masse fait voler le plateau de bois en éclats et entraîne dans sa chute la sphère de cristal qui était posée dessus. Il s'en dégage aussitôt une émanation pestilentielle qui vous étourdit mais, dans le même temps, un tourbillon de noirceur enveloppe le corps d'Exterminus.",
      "Un silence glacial s'abat soudain sur les lieux et, deux secondes plus tard, il ne reste plus aucune trace du monstre ni des débris de la sphère. Vous vous remettez alors vivement debout et vous vous tournez face à l'Archidruide. Le spectacle dont il vient d'être témoin l'a laissé livide et bouche bée.",
      "Il marmonne des paroles incohérentes et tremble de peur. Fermement résolu à débarrasser le Magnamund de ce malfaisant personnage, vous avancez sur lui l'arme au poing, mais en vous voyant approcher, il reprend subitement le contrôle de lui-même et entre en action.",
      "Vous le voyez agiter les mains devant lui et, soudain, un écran de lumière crue se dresse entre lui et vous. Vous fendez cette protection à l'aide de votre arme, mais vous ne rencontrez aucune résistance de l'autre côté. L'instant d'après, la lumière s'évanouit et vous vous retrouvez seul dans la salle du trône.",
      "Rendez-vous au 259."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 259.",
        "targetId": "259"
      }
    ]
  },
  "98": {
    "id": "98",
    "text": [
      "Dissimulé dans l'encadrement de la porte, vous observez attentivement ce qui se passe dans le donjon, dans l'espoir de découvrir un indice qui vous permettrait de localiser l'endroit exact où les Cénériens se livrent à l'abjecte culture du virus de la peste.",
      "Soudain, un petit groupe de druides en robe rouge se détache de la foule des Vazhags. Tout en bavardant, ils se rapprochent rapidement de là où vous êtes. Vous reculez prestement dans l'ombre de l'embrasure, puis vous vous retirez prudemment à l'intérieur du bâtiment.",
      "Un étroit passage vous conduit à une volée de marches qui débouche sur un couloir transversal. Un panneau en bois indique deux directions opposées. Bien que les informations soient rédigées en langage Cénérien, vous parvenez à les décrypter grâce à votre science Kaï.",
      "A gauche est marqué « Bibliothèque », à droite « Laboratoire ».",
      "Si vous voulez vous rendre à la bibliothèque, rendez-vous au 57.",
      "Si vous préférez vous diriger à droite, vers le laboratoire, rendez- vous au 285."
    ],
    "choices": [
      {
        "text": "Si vous voulez vous rendre à la bibliothèque, rendez-vous au 57.",
        "targetId": "57"
      }
    ]
  },
  "99": {
    "id": "99",
    "text": [
      "Votre flèche transperce le bras du druide, mais cela ne l'empêche pas de prendre la fuite. Maudissant votre maladresse, vous vous élancez à sa poursuite. Au bout d'un kilomètre environ, vous pressentez qu'un danger vous menace: le druide a réussi à contacter une autre patrouille de Vazhags, nettement plus importante que la précédente.",
      "Il les a informés de votre présence et, sous l'effet conjugué de leurs pouvoirs de sorcellerie, la végétation s'est brusquement resserrée autour de vous pour vous retenir prisonnier. Vous utilisez toutes vos capacités pour vous libérer de vos liens mais, entre-temps, des renforts sont arrivés de Mogaruith.",
      "Les Druides de Cener passent à l'attaque en se servant sans scrupule de tous les artifices de leur maléfique magie. Vous leur tenez tête avec bravoure, mais la combinaison de tous leurs pouvoirs réunis est trop forte, même pour un Grand Maître Kaï de votre trempe.",
      "C'est avec le nom de votre pays et de vos dieux sur les lèvres que vous rendez finalement le dernier soupir, au cœur de la forêt de Ruel."
    ],
    "choices": []
  },
  "100": {
    "id": "100",
    "text": [
      "Avec une rare férocité, les chiens de guerre se ruent sur vous, la gueule écumante de salive, les crocs découverts, prêts à se planter dans votre chair.",
      "Sans perdre votre calme, vous tirez votre arme et vous vous campez fermement sur vos jambes, car il est trop tard pour esquiver l'attaque. index CHIENS DE GUERRE DU RUEL HABILETÉ : 36 ENDURANCE : 22 Si vous gagnez ce combat en moins de 5 Assauts, rendez-vous au 254.",
      "Si le combat dure plus de 6 Assauts, rendez-vous au 37."
    ],
    "choices": [
      {
        "text": "Si vous gagnez ce combat en moins de 5 Assauts, rendez-vous au 254.",
        "targetId": "254"
      },
      {
        "text": "rendez-vous au 37.",
        "targetId": "37"
      }
    ],
    "combat": {
      "name": "INDEX CHIENS DE GUERRE DU RUEL",
      "combatSkill": 36,
      "endurance": 22,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "101": {
    "id": "101",
    "text": [
      "Épuisé par l'épreuve que vous venez de subir, vous contemplez le cadavre du Cénérien tout en reprenant peu à peu votre souffle.",
      "Si vous voulez fouiller votre victime, rendez-vous au 66.",
      "Si vous préférez quitter au plus vite ce lieu peu recommandable, rendez- vous au 214."
    ],
    "choices": [
      {
        "text": "Si vous voulez fouiller votre victime, rendez-vous au 66.",
        "targetId": "66"
      }
    ]
  },
  "102": {
    "id": "102",
    "text": [
      "Vous insérez la clé et la faites tourner dans la serrure. Il se produit un déclic satisfaisant et la porte s'ouvre, révélant une vaste et mystérieuse salle.",
      "Rendez-vous au 78."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 78.",
        "targetId": "78"
      }
    ]
  },
  "103": {
    "id": "103",
    "text": [
      "Vous atteignez le haut de l'échelle et parvenez enfin à vous hisser sur la plate-forme du treuil. Désormais, les flèches ne peuvent plus vous toucher: elles ricochent sur le plancher de métal qui vous isole et vous cache à la vue des archers. Sans perdre un instant, vous courez examiner le treuil et les chaînes qui retiennent le chaudron, puis vous cherchez à le faire basculer de façon que son contenu corrosif se déverse sur la salle du bas.",
      "Mais, malheureusement, un dispositif de sécurité a été prévu pour empêcher une telle éventualité. Le seul moyen d'y arriver serait d'ouvrir la goupille qui relie la chaîne à l'anse. Vous jetez un regard inquiet par-dessus la rambarde de la plate-forme pour voir ce qui se passe en dessous.",
      "Tout en bas, le laboratoire est plongé dans la plus grande confusion. Cependant, trois druides semblent avoir deviné vos intentions, car ils essaient désespérément de prélever des échantillons du virus à partir du bouillon de culture conservé dans des cuves étanches.",
      "Ces cuves sont solidement fixées aux paillasses et coiffées d'une triple épaisseur de verre afin d'éviter toute fuite. Or, c'est précisément à cause de cet excès de précaution que les druides ont maintenant du mal à sauver leurs précieuses cultures. Soudain, du coin de l'œil, vous apercevez un archer Vazhag en train de grimper à l'échelle.",
      "Il vous faut agir rapidement si vous voulez mener votre mission à bien.",
      "Si vous maîtrisez la Grande Discipline du Nexus et si vous voulez l'utiliser, rendez-vous au 226.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et que vous souhaitiez vous en servir, rendez-vous au 307.",
      "Si vous ne maîtrisez aucune de ces deux Grandes Disciplines, ou si vous ne désirez pas y avoir recours, rendez-vous au 81."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Nexus et si vous voulez l'utiliser, rendez-vous au 226.",
        "targetId": "226"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï et que vous souhaitiez vous en servir, rendez-vous au 307.",
        "targetId": "307"
      },
      {
        "text": "Si vous ne maîtrisez aucune de ces deux Grandes Disciplines, ou si vous ne désirez pas y avoir recours, rendez-vous au 81.",
        "targetId": "81"
      }
    ]
  },
  "104": {
    "id": "104",
    "text": [
      "Vous empoignez votre arc, vous sortez une flèche de votre carquois puis vous visez la silhouette fuyante du druide. Une fraction de seconde plus tard, votre trait part dans un sifflement menaçant.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de la Science des Armes (avec un arc), ajoutez 3 au chiffre tiré. Si le résultat est inférieur ou égal à 5, rendez- vous au 167.",
      "S'il est supérieur à 5, rendez-vous au 235."
    ],
    "choices": [
      {
        "text": "rendez-vous au 235.",
        "targetId": "235"
      }
    ]
  },
  "105": {
    "id": "105",
    "text": [
      "La lourde chaîne part en fouettant l'air avec violence, mais heureusement vous vous écartez juste à temps pour l'éviter. Puis vous vous penchez par-dessus la rambarde de la plate-forme et, avec une impitoyable fascination, vous regardez le gigantesque chaudron tomber de toute sa hauteur vers le laboratoire.",
      "Rendez- vous au 220."
    ],
    "choices": []
  },
  "106": {
    "id": "106",
    "text": [
      "Vous mettez une demi-heure à descendre les marches abruptes. Tout en bas, vous découvrez une sinistre caverne dont le sol est jonché d'ossements. Ce sont là, probablement, les restes des malheureuses créatures qui sont tombées de l'escalier ou qui se sont fait dévorer par le monstre qui hantait jadis ces lieux.",
      "Surmontant le dégoût que vous inspirent ces puantes ténèbres, vous vous enfoncez dans un tunnel ovale qui débouche sur une autre caverne. Celle-ci est occupée par une nappe d'eau claire comme du cristal. Vous pensez tout d'abord que vous êtes dans un cul-de-sac, mais vous remarquez une tache de lumière qui se reflète sur la surface de l'eau.",
      "En levant les yeux vers la voûte, vous apercevez un puits de cheminée naturelle au bout duquel brille une lueur jaune, comme celle d'une lanterne. Les parois de la cheminée sont brutes, pleines d'anfractuosités et il sera aussi facile d'y grimper qu'à une échelle.",
      "Dix minutes plus tard, vous atteignez le haut du conduit et, passant prudemment la tête hors du trou, vous regardez autour de vous. La lumière que vous distinguiez provient en réalité de plusieurs lampes à huile accrochées à intervalles réguliers au plafond d'un étroit passage souterrain.",
      "Vous sentez la présence de Vazhags dans les environs, aussi décidez-vous de rester caché dans le conduit de la cheminée, au cas où une patrouille passerait. A moins que vous ne maîtrisiez la Grande Discipline de l'Art de la Chasse, vous devez prendre un Repas durant votre attente, ou bien déduire 3 points de votre total d'ENDURANCE.",
      "Ensuite, rendez-vous au 94."
    ],
    "choices": [
      {
        "text": "rendez-vous au 94.",
        "targetId": "94"
      }
    ]
  },
  "107": {
    "id": "107",
    "text": [
      "Vos défenses psychiques sont assez fortes pour résister à la décharge d'énergie que le druide vient de vous lancer. Légèrement décontenancé par son échec, il tire un poignard des plis de sa robe et s'apprête à vous livrer une lutte sans merci.",
      "DRUIDE DE CENER HABILETÉ: 20 ENDURANCE: 26 Si vous sortez vainqueur de ce combat, rendez-vous au 4."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 4.",
        "targetId": "4"
      }
    ],
    "combat": {
      "name": "DRUIDE DE CENER",
      "combatSkill": 20,
      "endurance": 26,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "108": {
    "id": "108",
    "text": [
      "Vous commencez à débiter votre rapport fictif et la créature note scrupuleusement ce que vous lui dites. Mais bientôt, vos paroles semblent éveiller ses soupçons et vous remarquez qu'elle glisse discrètement la main vers un bouton situé sur le côté du bureau.",
      "C'est une sonnette d'alarme ! La créature appuie dessus avant que vous puissiez l'en empêcher.",
      "Rendez-vous au 11."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 11.",
        "targetId": "11"
      }
    ]
  },
  "109": {
    "id": "109",
    "text": [
      "Au moment où les deux personnages se retournent, vous reconnaissez l'habit qu'ils portent. Vous pensiez qu'il s'agissait de Druides de Cener, mais en voyant leur capuchon noir et les têtes de mort brodées sur l'étoffe, vous comprenez subitement que ce sont des membres d'une secte diabolique, plus connus sous le nom de Disciples de Vashna.",
      "La présence en ces lieux de deux adorateurs de Vashna, qui fut jadis le plus grand des Seigneurs des Ténèbres, vous rappelle de biens pénibles souvenirs. Vous espériez que ces maudits nécromanciens avaient disparu de la surface du Magnamund après la défaite des Seigneurs des Ténèbres, mais vous avez sous les yeux la preuve qu'il n'en est rien, hélas !",
      "Vous vous approchez en catimini afin de surprendre leur conversation.",
      "Rendez-vous au 247."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 247.",
        "targetId": "247"
      }
    ]
  },
  "110": {
    "id": "110",
    "text": [
      "L'Agarashi succombe à votre dernière attaque, mais à peine son corps a-t-il touché le sol qu'un autre danger vous menace. Du coin de l'œil, vous voyez le Vazhag lancer quelque chose à travers la pièce. Un bref éclat métallique vous révèle qu'une lame arrive à grande vitesse sur vous.",
      "Si vous maîtrisez la Grande Discipline de l'Exploration et du Nexus, rendez-vous au 55.",
      "Si vous ne maîtrisez pas ces deux Grandes Disciplines, rendez-vous au 174."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Exploration et du Nexus, rendez-vous au 55.",
        "targetId": "55",
        "requiredDiscipline": "Exploration"
      },
      {
        "text": "Si vous ne maîtrisez pas ces deux Grandes Disciplines, rendez-vous au 174.",
        "targetId": "174"
      }
    ]
  },
  "111": {
    "id": "111",
    "text": [
      "Vous concentrez votre attention sur les trois puits et vous entrez en état de transe, de façon à pouvoir faire usage de votre Discipline. Vous ressentez bientôt un fourmillement dans tous vos membres et une image commence à prendre forme dans votre esprit.",
      "A travers un voile de brume, une scène difficilement soutenable se précise peu à peu. Sous la houlette d'une horde de Vazhags, une longue et pathétique procession de guerriers en guenilles s'achemine vers les puits. Les prisonniers sont attachés avec des cordes.",
      "Beaucoup d'entre eux sont grièvement blessés. Ils demandent grâce avec des gestes implorants, mais les Hommes-Rats, sourds à leurs prières, les transpercent à grands coups de lance avant de les précipiter, les uns après les autres, dans les gouffres béants qui les engloutissent à tout jamais.",
      "Cette image d'épouvante se dissipe graduellement et, alors que vous reprenez lentement conscience, vous vous rendez compte que vous êtes allongé face contre terre ; votre corps est agité d'un tremblement incoercible et votre front ruisselle de sueur. En puisant au plus profond de vos réserves psychiques, vous avez pénétré dans un domaine où les forces du mal sont à leur paroxysme.",
      "Cette rude expérience vous a laissé en état de choc: vous perdez 6 points d'ENDURANCE.",
      "A présent, rendez-vous au 93."
    ],
    "choices": [
      {
        "text": "rendez-vous au 93.",
        "targetId": "93"
      }
    ],
    "damage": 6
  },
  "112": {
    "id": "112",
    "text": [
      "Vous vous agrippez du bout des doigts aux traverses de bois, tandis que le pont s'abaisse lentement au-dessus de la surface du lac. Il s'immobilise enfin dans une brusque secousse, vous immergeant jusqu'à la taille dans l'eau glaciale. Peu après, vous entendez au-dessus de vous un cliquetis de pattes griffues et, couvrant ce vacarme, une voix autoritaire — assurément celle d'un Cénérien — qui s'élève au fond de la caverne.",
      "Malgré la douleur qui engourdit vos doigts et vos avant-bras, vous restez immobile durant tout le temps où les Vazhags traversent le pont Néanmoins, quelques-uns d'entre eux ne sautent pas sur la berge comme leurs compagnons. Ils se postent juste au-dessus de vous et, à travers les interstices des planches, vous les voyez désigner les flaques vertes et huileuses qui se détachent à la surface du lac.",
      "Poussé par la curiosité, deux Vazhags descendent au bord de l'eau.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 195.",
      "Sinon, rendez-vous au 130."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 195.",
        "targetId": "195"
      },
      {
        "text": "Sinon, rendez-vous au 130.",
        "targetId": "130"
      }
    ]
  },
  "113": {
    "id": "113",
    "text": [
      "Le lancier Vazhag tombe de cheval et la bête, affolée, s'enfuit au triple galop dans la forêt. Vous utilisez immédiatement votre Contrôle Animal pour freiner sa course et vous forcez le destrier à revenir vers vous. Après quoi, vous sautez en selle et vous vous élancez sur la piste qui conduit à la Storn.",
      "Vous n'êtes qu'à cinq kilomètres du pont qui vous permettra de gagner le Royaume Libre de Slovie et, en longeant la forêt, vous éviterez de tomber sur les troupes de Vazhags qui vont et viennent dans la région. La perspective de pouvoir enfin vous échapper vous met le cœur en joie.",
      "Hélas ! dès que vous approchez des rives de la Storn, la vision du pont réduit vos espoirs à néant.",
      "Rendez-vous au 182."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 182.",
        "targetId": "182"
      }
    ]
  },
  "114": {
    "id": "114",
    "text": [
      "Blessé à mort, le chien s'écroule sur le sol. Mais avant même que vous puissiez reprendre votre souffle, son maître se jette sur vous en brandissant son épée, prêt à vous la passer au travers du corps. Vous esquivez le premier coup, ce qui vous laisse le temps de vous préparer pour affronter la suite.",
      "GUERRIER HABILETÉ: 30 ENDURANCE: 30 Si vous sortez vainqueur de ce combat, rendez-vous au 5."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 5.",
        "targetId": "5"
      }
    ],
    "combat": {
      "name": "GUERRIER",
      "combatSkill": 30,
      "endurance": 30,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "115": {
    "id": "115",
    "text": [
      "Vous tirez le levier mais rien ne se passe au premier abord. Puis vous entendez un léger déclic, et un filet d'air s'échappe en même temps que la porte s'ouvre lentement. Vous vous hâtez d'entrer et de refermer la porte sur vous pour ne pas être aperçu par les gardes.",
      "Un long couloir s'ouvre devant vous. Il est baigné d'une lumière rougeâtre qui filtre à travers un rideau défraîchi accroché au plafond. Vous parcourez machinalement l'endroit du regard, vérifiant que le sol et les murs ne cachent aucun piège, ensuite vous vous approchez du rideau.",
      "A travers l'étoffe mangée aux mites, vous apercevez une petite chambre à coucher. Un Vazhag obèse, enroulé dans une couverture de fourrure, est allongé sur un divan au milieu de la pièce. Il ronfle bruyamment. Tout autour de lui sont éparpillés des objets de toutes sortes : armes rouillées, morceaux d'armures ternies et dépareillées, cierges, livres, coffrets, bijoux de pacotille et babioles diverses.",
      "Dans les magasins d'Holmgard, cela serait considéré comme un ramassis d'objets bons à jeter à la poubelle. Mais ici, dans les trous à rats des monts Skardos, ce fatras passe sans doute pour un véritable trésor. A l'autre bout de la pièce, vous distinguez une autre issue, garnie elle aussi d'un rideau.",
      "Si vous souhaitez pénétrer dans la chambre pour inspecter les objets entassés sur le sol, rendez- vous au 319.",
      "Si vous voulez uniquement traverser la chambre afin d'examiner le passage masqué par le rideau, rendez-vous au 238.",
      "Si vous préférez faire demi-tour et ressortir par la porte secrète, rendez-vous au 308."
    ],
    "choices": [
      {
        "text": "Si vous voulez uniquement traverser la chambre afin d'examiner le passage masqué par le rideau, rendez-vous au 238.",
        "targetId": "238"
      },
      {
        "text": "Si vous préférez faire demi-tour et ressortir par la porte secrète, rendez-vous au 308.",
        "targetId": "308"
      }
    ]
  },
  "116": {
    "id": "116",
    "text": [
      "Dès que vous vous approchez de la sphère, la limpidité de son cristal se trouble. La brume qui s'est ainsi formée ne tarde pas à sortir des limites de la boule et à prendre de l'expansion. Puis elle s'épaissit encore et prend la forme d'un gros entonnoir qui tourbillonne vers vous à vive allure.",
      "A l'instant précis où ce brouillard obscur et enveloppant entre en contact avec vous, il se produit un changement radical, comme si vous aviez brutalement franchi la frontière qui sépare le rêve de la réalité. Vous avez l'impression de basculer dans un gouffre sans fin et, le cœur battant à tout rompre, vous tentez désespérément d'échapper à l'emprise de cette gaine de ténèbres.",
      "Utilisez la Table de Hasard, puis consultez la liste ci-dessous et modifiez en conséquence le chiffre que vous avez tiré.",
      "Si vous maîtrisez la Grande Discipline de l'Écran Psychique, ajoutez 3.",
      "Si vous maîtrisez la Grande Discipline du Nexus, ajoutez 1. Si votre total d'ENDURANCE actuel est supérieur ou égal à 20, ajoutez 1. Si votre total d'ENDURANCE actuel est inférieur ou égal à 19, retranchez 1. A présent, si le résultat obtenu est inférieur ou égal à 4, rendez- vous au 46.",
      "S'il est compris entre 5 et 7, rendez-vous au 269.",
      "S'il est supérieur à 7, rendez-vous au 143."
    ],
    "choices": [
      {
        "text": "entre 5 et 7, rendez-vous au 269.",
        "targetId": "269"
      },
      {
        "text": "rendez-vous au 143.",
        "targetId": "143"
      }
    ]
  },
  "117": {
    "id": "117",
    "text": [
      "Alors que l'écho du hurlement des goules et du rugissement des Giganites résonne à vos oreilles, vous bondissez sur vos pieds et vous vous élancez à toutes jambes sous la voûte végétale. Grâce à votre excellente condition physique et à votre rapidité, vous distancez aisément vos poursuivants et, deux kilomètres plus loin, vous êtes certain que le danger est écarté.",
      "Vous pouvez enfin vous accorder quelques minutes de repos bien mérité. Après que votre pouls s'est calmé, vous vous remettez en route sans plus tarder. Seuls quelques rais de lumière filtrent de temps à autre à travers le feuillage. Finalement, vous parvenez à une clairière où se dressent les ruines d'une cabane en pierre.",
      "Vous vous en approchez prudemment, redoutant quelque présence maléfique, mais vous ne trouvez à l'intérieur que des plaques de moisissure sur les murs et des touffes d'herbe sombre par terre. Cependant, au bout de quelques secondes, votre Intuition Magnakai vous avertit que le péril ne réside pas à l'intérieur, mais à l'extérieur de la cabane.",
      "En épiant les environs par une fissure, vous apercevez effectivement un groupe de Vazhags qui surgit à l'entrée de la clairière, reniflant bruyamment l'atmosphère lourde et humide des lieux. L'un d'entre eux n'est pas de leur race. Vous ne pourriez jurer qu'il s'agit d'un être humain, bien qu'il en ait la taille et la stature, car sa houppelande rouge dissimule ses traits.",
      "A un moment, pourtant, il se détourne et vous apercevez l'éclat rutilant d'un masque vert qui couvre son visage. Vous en déduisez aussitôt que c'est un Druide de Cener. Il tient à la main une baguette en or qui émet des ondes magiques, ce qui explique la sensation étrange que vous avez éprouvée tout à l'heure.",
      "Le Cénérien ordonne à son escorte de faire halte. Les Vazhags obéissent sur-le-champ et regardent attentivement leur maître qui se met à balayer lentement la clairière du bout de sa baguette. En toute hâte, vous utilisez votre science Magnakai de l'Invisibilité et de l'Exploration pour échapper à toute détection, mais le druide suspend soudain son geste et pointe sa baguette sur la cabane.",
      "Une onde d'énergie psychique vous frappe en plein crâne. Vous la sentez qui croît régulièrement afin de tester votre résistance.",
      "Si vous maîtrisez la Grande Discipline de l'Écran Psychique, rendez-vous au 44.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 298."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Écran Psychique, rendez-vous au 44.",
        "targetId": "44"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 298.",
        "targetId": "298"
      }
    ]
  },
  "118": {
    "id": "118",
    "text": [
      "Le souterrain se poursuit sur plus d'un kilomètre avant d'aboutir à une volée de marches escarpées qui vous conduisent à un autre passage, quelque trente mètres plus bas. L'air est chargé d'une fine poussière et vous entendez de légers grattements à l'intérieur de la roche.",
      "Dans la pénombre, vous distinguez un peu plus loin une nuée de crabes groupés en cercle sur le sol. Leur coquille est d'une blancheur morbide et vous souriez intérieurement en pensant que ces curieux crustacés n'ont sans doute jamais eu l'occasion de se faire bronzer sur une plage...",
      "Ils se dispersent à votre approche et grimpent avec une rapidité surprenante le long des parois, avant de disparaître entièrement dans les anfractuosités de la voûte. Persuadé que les crabes ont pris peur, vous continuez à avancer vers un autre escalier qui se détache à peine dans l'obscurité.",
      "Au moment où vous passez sous les nids de crabes, vous entendez un faible chuintement et sentez soudain des gouttes poisseuses vous tomber sur la tête et les épaules. Des volutes de fumée grise s'élèvent de votre manteau et vous avez l'impression que des aiguilles chauffées à blanc vous transpercent le cuir chevelu.",
      "Un puissant acide organique est en train de vous trouer la peau !",
      "Si vous maîtrisez la Grande Discipline du Nexus, rendez-vous au 249.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez- vous au 329."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Nexus, rendez-vous au 249.",
        "targetId": "249"
      }
    ]
  },
  "119": {
    "id": "119",
    "text": [
      "Vous avancez furtivement vers l'escalier et commencez à descendre les marches. Quinze mètres plus bas, vous arrivez dans une pièce située exactement sous le hall. L'endroit est désert, mais plusieurs robes de druide ainsi que des masques sont accrochés à des parères le long du mur.",
      "Si vous possédez déjà une robe et un masque de Druide de Cener, rendez-vous au 158.",
      "Si vous ne possédez qu'un seul ou aucun de ces accessoires, rendez-vous au 77."
    ],
    "choices": [
      {
        "text": "Si vous possédez déjà une robe et un masque de Druide de Cener, rendez-vous au 158.",
        "targetId": "158"
      },
      {
        "text": "Si vous ne possédez qu'un seul ou aucun de ces accessoires, rendez-vous au 77.",
        "targetId": "77"
      }
    ]
  },
  "120": {
    "id": "120",
    "text": [
      "La créature semble tout droit sortie d'un cauchemar. Elle se tient debout sur deux pattes trapues, couvertes d'écaillés épineuses, et quatre tentacules munis de griffes acérées partent de son torse poilu comme celui d'un ours. Sa grosse tête ronde se balance mollement au bout d'un cou arqué.",
      "Au milieu des replis de peau rongée par la maladie saillent deux énormes yeux globuleux, et une balafre humide, gonflée de sang, lui tient lieu de bouche. Une longue queue hérissée de pointes achève de parfaire ce charmant portrait. Soudain, avec une vivacité insoupçonnable, la bête se jette sur vous en fouettant l'air de ses tentacules.",
      "DEGRADON HABILETÉ: 49 ENDURANCE: 36 Cette créature est insensible aux disciplines psychiques élémentaires. Vous ne pourrez l'atteindre mentalement que si vous maîtrisez la Grande Discipline du Foudroiement Psychique.",
      "Si vous sortez vainqueur de ce combat, rendez-vous au 296."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 296.",
        "targetId": "296"
      }
    ],
    "combat": {
      "name": "DEGRADON",
      "combatSkill": 49,
      "endurance": 36,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "121": {
    "id": "121",
    "text": [
      "Alors que vous vous éloignez du corps de votre adversaire, vous remarquez que l'Agarashi porte autour du cou une sorte de petite boîte retenue par une chaîne. Votre sixième sens vous révèle qu'il s'agit d'une amulette magique destinée à soumettre le monstre aux ordres des Vazhags.",
      "Si vous souhaitez vous emparer de cette Amulette de Domination, inscrivez-la sur la liste des Objets Spéciaux. Impatient de quitter ces lieux, vous soulevez la couverture de fourrure qui recouvre le divan et vous découvrez alors, sur le côté, un petit levier semblable à celui qui vous avait servi à ouvrir la porte secrète.",
      "Vous le tirez et la porte s'ouvre, vous permettant ainsi de sortir par le même chemin. Rendez- vous au 308."
    ],
    "choices": []
  },
  "122": {
    "id": "122",
    "text": [
      "Les Vazhags vous informent qu'ils reviennent du Temple de Dzenya. Selon eux, frère Hoylez, le druide chargé de ce temple, a récemment rendu la vie à cet être humain qu'ils ont ordre de livrer à frère Croumah, dans la Grande Salle de Sacrifice de Mogaruith.",
      "« Parfait ! leur répondez-vous d'une voix convaincante. Je suis moi-même en route pour Mogaruith, où je dois rencontrer frère Croumah en personne. Vous allez pouvoir m'escorter jusqu'à lui. En route ! » Les Vazhags semblent soulagés de vous entendre parler de la sorte ; ils devaient probablement s'attendre à des remontrances.",
      "Ravis d'obéir à vos ordres, ils s'engagent sur le pont-levis et vous leur emboîtez le pas.",
      "Rendez-vous au 233."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 233.",
        "targetId": "233"
      }
    ]
  },
  "123": {
    "id": "123",
    "text": [
      "Vous voyez le druide tendre à nouveau le bras en avant, et une seconde décharge d'énergie fuse de sa baguette. L'influx magique s'engouffre dans la brèche et arrive en grésillant vers vous.",
      "Si vous maîtrisez et si vous voulez utiliser la Grande Discipline de l'Alchimie Kaï, rendez-vous au 215.",
      "Si vous maîtrisez et si vous voulez utiliser la Grande Discipline de la Magie des Anciens, rendez-vous au 51.",
      "Si vous ne maîtrisez ni l'une ni l'autre de ces Grandes Disciplines, ou que vous ne souhaitiez pas y avoir recours, rendez-vous au 344."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez et si vous voulez utiliser la Grande Discipline de l'Alchimie Kaï, rendez-vous au 215.",
        "targetId": "215"
      },
      {
        "text": "Si vous maîtrisez et si vous voulez utiliser la Grande Discipline de la Magie des Anciens, rendez-vous au 51.",
        "targetId": "51"
      },
      {
        "text": "Si vous ne maîtrisez ni l'une ni l'autre de ces Grandes Disciplines, ou que vous ne souhaitiez pas y avoir recours, rendez-vous au 344.",
        "targetId": "344"
      }
    ]
  },
  "124": {
    "id": "124",
    "text": [
      "Une très forte aura de puissance émane de ce druide. Comme il ne se trouve qu'à quelques pas de là où vous êtes, vous mettez à profit toute votre science du Camouflage pour éviter qu'il ne détecte votre présence.",
      "Utilisez la Table de Hasard et ajoutez 3 au chiffre obtenu. Si le résultat est inférieur ou égal à 4, rendez- vous au 213.",
      "S'il est supérieur, rendez-vous au 164."
    ],
    "choices": [
      {
        "text": "rendez-vous au 164.",
        "targetId": "164"
      }
    ]
  },
  "125": {
    "id": "125",
    "text": [
      "Vous savez que l'injonction de Cadak n'est pas une simple ruse, car vous sentez derrière vous la présence d'une autre créature. Vous faites volte-face en effectuant un bond sur la gauche de façon à garder l'Archidruide dans votre champ de vision, puis vous parcourez du regard le reste de la pièce.",
      "Vous vous attendiez plus ou moins à voir l'un des serviteurs de Cadak se jeter sur vous, un poignard à la main, aussi le spectacle qui s'offre à vos yeux vous cause-t-il un double choc. Une robuste créature, mi- homme, mi-taureau, est en train de sortir de la tapisserie accrochée au mur !",
      "Deux défenses aiguisées comme des rasoirs ornent les coins de sa lèvre supérieure et ses yeux porcins luisent d'un éclat meurtrier qui vous fait froid dans le dos. Ce qui n'était qu'un simple motif tissé dans la toile quelques minutes auparavant est subitement devenu un monstre de chair et d'os qui s'avance à pas pesants sur vous.",
      "EXTERMINUS HABILETÉ: 50 ENDURANCE: 50 Vous pouvez fuir ce combat après 4 Assauts.",
      "Rendez-vous, dans ce cas, au 2.",
      "Si vous parvenez à l'emporter sur votre adversaire, rendez-vous au 320."
    ],
    "choices": [
      {
        "text": "Si vous parvenez à l'emporter sur votre adversaire, rendez-vous au 320.",
        "targetId": "320"
      }
    ],
    "combat": {
      "name": "EXTERMINUS",
      "combatSkill": 50,
      "endurance": 50,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "126": {
    "id": "126",
    "text": [
      "Un bruit soudain vous met en alerte et vous vous retournez vivement pour voir de quoi il s'agit. La portion de mur où les vêtements étaient accrochés est en train de s'enfoncer et un personnage portant un long manteau de pourpre apparaît dans l'ouverture.",
      "Il tient à la main un gros livre relié de cuir. Tandis qu'il s'avance à votre rencontre, le panneau se referme lentement derrière lui.",
      "« Que faites-vous donc ici, frère ? » vous demande-t- il d'une voix empreinte de soupçon. Vous pressentez que c'est un druide de haut rang et qu'il vaut mieux lui donner une réponse satisfaisante sous peine de déclencher sa colère.",
      "Si vous voulez lui dire que vous êtes justement venu l'aider, rendez-vous au 170.",
      "Si vous voulez prétendre avoir perdu quelque chose dans cette pièce, rendez-vous au 156.",
      "Si vous jugez que l'action est préférable à de vaines paroles, rendez-vous au 212."
    ],
    "choices": [
      {
        "text": "Si vous voulez lui dire que vous êtes justement venu l'aider, rendez-vous au 170.",
        "targetId": "170"
      },
      {
        "text": "Si vous voulez prétendre avoir perdu quelque chose dans cette pièce, rendez-vous au 156.",
        "targetId": "156"
      },
      {
        "text": "Si vous jugez que l'action est préférable à de vaines paroles, rendez-vous au 212.",
        "targetId": "212"
      }
    ]
  },
  "127": {
    "id": "127",
    "text": [
      "Vous patientez dans l'ombre et observez attentivement les gardes. Quelques minutes plus tard, l'écho sourd et profond d'un gong retentit dans le lointain. Il est suivi peu après d'un autre bruit, nettement plus présent. Un rayon de lumière filtre soudain à la base du porche et, dans un grincement assourdissant, le portail de fer se soulève lentement.",
      "Une patrouille de Vazhags s'engage dans l'ouverture. Ils escortent un chariot où s'entassent des sacs, des tonneaux et des caisses en bois. Soudain, un groupe de femelles Vazhags se précipite sur eux en réclamant des vivres à grands cris. Le chariot se trouve alors bloqué juste sous le porche.",
      "L'escorte tente vainement de repousser les femelles affamées mais, pendant ce temps, l'énorme panneau métallique commence à redescendre. Dans un mouvement de panique, les femelles s'écartent du chariot et battent en retraite, de peur de se faire écraser par le portail.",
      "Mais le portail s'immobilise momentanément dans un crissement aigu, à moins d'un mètre au-dessus du chariot. Aussitôt, les sentinelles qui gardaient l'entrée viennent en aide à l'escorte pour pousser le chargement à l'intérieur de la caverne. De votre poste d'observation, vous remarquez que les femelles en profitent pour s'approcher de nouveau.",
      "Vous devez agir sans tarder si vous voulez vous échapper, car dès que le chariot sera dégagé, le portail se refermera.",
      "Si vous souhaitez utiliser votre Discipline Magnakai du Nexus, rendez-vous au 270.",
      "Si vous préférez avoir recours à la Puissance Psychique, rendez-vous au 68.",
      "Si vous optez pour la Discipline de l'Invisibilité, rendez-vous au 9."
    ],
    "choices": [
      {
        "text": "Si vous souhaitez utiliser votre Discipline Magnakai du Nexus, rendez-vous au 270.",
        "targetId": "270"
      },
      {
        "text": "Si vous préférez avoir recours à la Puissance Psychique, rendez-vous au 68.",
        "targetId": "68",
        "requiredDiscipline": "Puissance Psychique"
      },
      {
        "text": "Si vous optez pour la Discipline de l'Invisibilité, rendez-vous au 9.",
        "targetId": "9"
      }
    ]
  },
  "128": {
    "id": "128",
    "text": [
      "La porte donne sur un escalier qui monte dans le noir. Le cœur battant au rythme de vos pas, vous grimpez les marches quatre à quatre et débouchez dans une pièce éclairée par des torches fixées au mur. 11 y a deux issues : l'une vers l'ouest, l'autre vers l'est.",
      "Vous faites une pause, le temps de faire usage de votre science de la Divination et de l'Exploration, mais cela ne vous apprend rien de spécial.",
      "Si vous voulez vous engager dans le passage ouest, rendez-vous au 271.",
      "Si vous préférez emprunter le passage est, rendez-vous au 95."
    ],
    "choices": [
      {
        "text": "Si vous voulez vous engager dans le passage ouest, rendez-vous au 271.",
        "targetId": "271"
      },
      {
        "text": "Si vous préférez emprunter le passage est, rendez-vous au 95.",
        "targetId": "95"
      }
    ]
  },
  "129": {
    "id": "129",
    "text": [
      "A moitié asphyxié, vous vous hissez tant bien que mal hors du cloaque et vous vous affalez sur le sol moussu de la forêt. Vous restez quelques instants sans pouvoir bouger, incapable d'y voir à cause du masque de boue qui recouvre votre visage. Enfin, d'un geste las, vous ôtez cette fange infecte du revers de la main et tournez vos regards vers le théâtre de vos exploits : à travers l'écume verdâtre qui nappe la surface de la mare, des filaments inertes tissent un réseau sanguinolent qui atteste de votre victoire sur le monstre du marais.",
      "Impatient de quitter cet endroit de sinistre mémoire, vous vous relevez péniblement et reprenez votre route vers l'est.",
      "Rendez-vous au 242."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 242.",
        "targetId": "242"
      }
    ]
  },
  "130": {
    "id": "130",
    "text": [
      "Soucieux d'échapper aux regards inquisiteurs des Vazhags, vous lâchez prise et vous vous enfoncez dans le lac. L'eau glacée se referme sur vous comme un étau, mais vous plongez sous la surface et nagez à grandes brasses vers la rive opposée. Malgré l'obscurité qui règne dans ces fonds glauques, votre excellente vue vous permet d'apprécier très précisément les limites du lac.",
      "La profondeur moyenne de l'eau ne dépasse pas une quinzaine de mètres, ce qui paraît bien insuffisant pour abriter un monstre sous-marin tel que le Dhol-daarg. Cependant, alors que vous atteignez le centre du lac, vous apercevez soudain son repaire : une large crevasse qui déchire le fond de la cuvette d'est en ouest.",
      "Un fort courant s'en échappe et, d'après la nuit d'encre qui entoure ces abysses, vous estimez que la faille s'enfonce probablement à plusieurs centaines de mètres. Redoutant de faire connaissance avec l'hôte de ce sinistre domaine, vous vous dépêchez de passer au-dessus de la crevasse, et c'est avec un immense soulagement que vous voyez se découper la paroi rocheuse de la berge.",
      "Utilisez la Table de Hasard.",
      "Si le chiffre que vous avez tiré est inférieur ou égal à 4, rendez-vous au 183.",
      "S'il est supérieur, rendez-vous au 312."
    ],
    "choices": [
      {
        "text": "Si le chiffre que vous avez tiré est inférieur ou égal à 4, rendez-vous au 183.",
        "targetId": "183"
      },
      {
        "text": "rendez-vous au 312.",
        "targetId": "312"
      }
    ]
  },
  "131": {
    "id": "131",
    "text": [
      "Grâce à votre pouvoir Magnakai du Nexus, mais grâce également à la force de vos mains, vous réussissez à ouvrir la porte. La pièce dans laquelle vous pénétrez est plongée dans l'obscurité et le sol est couvert d'une épaisse couche de poussière que rien n'est venu troubler depuis des années.",
      "Sur une estrade en marbre qui occupe une grande partie de la pièce, repose un grand sarcophage en pierre. Comme il n'a pas de couvercle, vous pouvez voir qu'il contient les restes momifiés d'une créature difficilement identifiable. Vous ne décelez aucune aura de maléfice autour de ce cadavre et votre intuition vous porte à croire qu'il n'y a personne de vivant, excepté vous, dans cet endroit.",
      "Rassuré, vous vous penchez donc au-dessus de la curieuse dépouille pour l'examiner de plus près. Contre toute attente, une décharge d'énergie psychique fulgurante vous frappe de plein fouet. Vous en restez tout étourdi et vous perdez 6 points d'ENDURANCE.",
      "Reprenant péniblement vos esprits, vous vous efforcez de dresser un écran psychique protecteur, tandis que la momie reprend lentement vie sous vos yeux horrifiés. Tout à coup, une patte griffue jaillit hors du cercueil et vous saisit à la gorge. Vous tentez de lui faire lâcher prise, tout en essayant de dégainer votre arme, quand soudain le corps tout entier du Mort- Vivant, animé par la Sorcellerie, se dresse devant vous.",
      "AGARASHI HABILETÉ: 46 ENDURANCE: 36 En raison de la rapidité de l'attaque de votre adversaire, déduisez 3 points d'HABILETÉ pour toute la durée du combat.",
      "Si vous en sortez vainqueur, rendez-vous au 18."
    ],
    "choices": [
      {
        "text": "Si vous en sortez vainqueur, rendez-vous au 18.",
        "targetId": "18"
      }
    ],
    "combat": {
      "name": "AGARASHI",
      "combatSkill": 46,
      "endurance": 36,
      "mindblastImmune": false,
      "undead": false
    },
    "damage": 6
  },
  "132": {
    "id": "132",
    "text": [
      "Soudain, juste au-dessus de vous, vous entendez un grincement sonore, suivi d'un crissement de métal rouillé. Vous vous retournez vivement vers l'escalier et, horrifié, vous voyez s'abaisser une herse. Désormais, toute issue est condamnée de ce côté-là.",
      "Vous percevez ensuite un bruit d'une autre nature : de l'air s'échappe en sifflant le long de la porte. La voyant s'ouvrir avec lenteur, vous portez la main à votre arme afin de défendre votre vie.",
      "Si vous possédez un arc et que vous souhaitiez vous en servir, rendez-vous au 221.",
      "Si vous n'avez pas d'arc, ou si vous préférez utiliser une autre arme, rendez-vous au 325."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et que vous souhaitiez vous en servir, rendez-vous au 221.",
        "targetId": "221"
      },
      {
        "text": "Si vous n'avez pas d'arc, ou si vous préférez utiliser une autre arme, rendez-vous au 325.",
        "targetId": "325"
      }
    ]
  },
  "133": {
    "id": "133",
    "text": [
      "Les fréquents éboulements et le manque de prise dans la roche ne parviennent pas à entraver votre gracieuse agilité. Vous escaladez sans difficulté le puits de cheminée jusqu'en haut, et vous débouchez enfin à l'air libre, sur le flanc d'une montagne, près d'un affleurement dissimulé par des broussailles et une rangée de gros rochers.",
      "Vous restez quelques instants ébloui par la lumière du petit matin qui inonde les collines environnantes. Au fur et à mesure que votre vision s'améliore, vous découvrez un véritable océan de verdure qui semble peuplé de tous les dangers. D'après la position du soleil et grâce à votre sens infaillible de l'orientation, vous en déduisez qu'il s'agit de la forêt de Ruel et que vous vous trouvez sur le versant oriental des monts Skardos.",
      "Autour de vous, tout semble désert ; seul le tracé sinueux d'une route poussiéreuse qui serpente à travers les collines nues jusqu'à l'orée de la forêt rompt la monotonie du paysage. Après avoir consulté votre carte, vous comprenez qu'il s'agit de la route de Skardos, la piste secrète que les Cénériens utilisent pour se rendre directement à Mogaruith.",
      "Vous décidez de l'emprunter mais auparavant (à moins que vous ne maîtrisiez la Grande Discipline de l'Art de la Chasse), vous devez prendre un Repas ou bien perdre 3 points d'ENDURANCE.",
      "Rendez-vous au 230."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 230.",
        "targetId": "230"
      }
    ]
  },
  "134": {
    "id": "134",
    "text": [
      "Vous tentez désespérément de nager à contre-courant pour éviter les pierres et les projectiles enflammés qui s'abattent autour de vous, mais malgré vos vaillants efforts, ce déluge a raison de vous. Votre immense courage vous a permis de détruire le virus de la peste et les druides qui en détenaient le secret.",
      "Grâce à vous, des millions de vies humaines seront sauvées d'une mort atroce. La bravoure et l'abnégation que vous avez montrées pour mener à bien votre mission resteront gravées à tout jamais dans la mémoire des peuples libres du Magnamund. Quel dommage d'avoir dû payer de votre vie cette victoire..."
    ],
    "choices": []
  },
  "135": {
    "id": "135",
    "text": [
      "Le choc vous fait tomber à la renverse et vous sentez une onde électrique foudroyante vous parcourir de la tête aux pieds. Vous vous remettez péniblement debout et, tandis que les effets de la décharge décroissent, vous apercevez le Cénérien en train de faire signe à ses serviteurs.",
      "De toute évidence, il leur ordonne de se lancer à l'assaut de la cabane et de vous mettre en pièces. Avec une lueur assassine au fond de leurs petits yeux injectés de sang, les Vazhags marchent au pas de charge sur les ruines, en brandissant des armes rouillées.",
      "Si vous voulez affronter ces créatures plus que malsaines, rendez-vous au 25.",
      "Si vous préférez essayer de leur échapper, rendez-vous au 279."
    ],
    "choices": [
      {
        "text": "Si vous voulez affronter ces créatures plus que malsaines, rendez-vous au 25.",
        "targetId": "25"
      },
      {
        "text": "Si vous préférez essayer de leur échapper, rendez-vous au 279.",
        "targetId": "279"
      }
    ]
  },
  "136": {
    "id": "136",
    "text": [
      "A moitié asphyxié, vous êtes forcé de battre en retraite devant ce nuage impénétrable. Pendant plusieurs minutes, vous cherchez votre chemin à tâtons car vous êtes complètement aveuglé par les spores. Finalement, vous atteignez une partie du souterrain où l'air devient plus respirable.",
      "Vous avez survécu à cette épreuve, mais les Khloros ont quand même sérieusement affaibli votre organisme : vous perdez 8 points d'ENDURANCE. Étant donné qu'il vous est impossible de continuer dans la direction que vous aviez choisie, vous rebroussez chemin vers la fissure.",
      "Rendez- vous au 332."
    ],
    "choices": [],
    "damage": 8
  },
  "137": {
    "id": "137",
    "text": [
      "Vous descendez quelques barreaux, de manière à être hors de portée des fers de lance, puis vous prononcez la formule de lévitation que Banedon vous a enseignée. Cinq secondes plus tard, vous vous sentez comme en état d'apesanteur et vous commencez à vous élever dans les airs jusqu'au niveau de la plate-forme.",
      "Les Disciples de Vashna n'en croient pas leurs yeux ! Le plus proche d'entre eux abaisse momentanément sa garde, et vous en profitez pour lui assener un coup en pleine poitrine, ce qui lui fait perdre l'équilibre. Il tombe de la plate-forme en hurlant, puis va s'écraser sur les paillasses carrelées du laboratoire, au beau milieu des éprouvettes et des cornues.",
      "D'un bond félin, vous sautez alors sur la plate-forme et vous vous tenez prêt à affronter le second Disciple. Ce dernier vous toise d'un air qui en dit long sur la haine qu'il vous porte, ainsi qu'à tous ceux de votre race. Puis, encouragé par les cris de ses confrères qui montent jusqu'à lui, il se jette sur vous en vous visant à la gorge.",
      "DISCIPLE DE VASHNA HABILETÉ : 25 ENDURANCE : 40 Si vous êtes vainqueur de ce combat, rendez-vous au 29."
    ],
    "choices": [
      {
        "text": "Si vous êtes vainqueur de ce combat, rendez-vous au 29.",
        "targetId": "29"
      }
    ],
    "combat": {
      "name": "DISCIPLE DE VASHNA",
      "combatSkill": 25,
      "endurance": 40,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "138": {
    "id": "138",
    "text": [
      "Vous suivez discrètement les deux novices à travers un dédale de couloirs qui mène à une vaste antichambre voûtée. Les murs sont ornés de tapisseries qui dépeignent les légendes Cénériennes et retracent les exactions et les ignobles agissements perpétrés lors de l'Age des Anciens Royaumes, à une époque où, voilà plus de mille ans maintenant, les Cénériens régnaient en tyrans sur toute la partie septentrionale du Magnamund.",
      "A l'autre bout de l'antichambre, la seule issue est une grosse porte en chêne. Les novices s'y engouffrent précipitamment et vous entendez s'élever, de l'autre côté, de lugubres incantations. Poussé par la curiosité, vous vous approchez de la porte restée entrouverte et regardez par l'entrebâillement.",
      "Le spectacle qui s'offre alors à vos yeux vous glace les sangs.",
      "Rendez-vous au 200."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 200.",
        "targetId": "200"
      }
    ]
  },
  "139": {
    "id": "139",
    "text": [
      "Le corpulent Vazhag continue de ronfler sans se rendre compte de votre présence.",
      "Si vous voulez aller inspecter le passage dissimulé par le rideau, rendez-vous au 238.",
      "Si vous décidez de quitter la pièce par la porte dérobée, rendez-vous au 308."
    ],
    "choices": [
      {
        "text": "Si vous voulez aller inspecter le passage dissimulé par le rideau, rendez-vous au 238.",
        "targetId": "238"
      },
      {
        "text": "Si vous décidez de quitter la pièce par la porte dérobée, rendez-vous au 308.",
        "targetId": "308"
      }
    ]
  },
  "140": {
    "id": "140",
    "text": [
      "Vous plongez à terre et vous roulez sur le sol spongieux afin d'échapper aux lianes. La vivacité de vos réflexes vous permet d'esquiver la première attaque, mais une deuxième masse végétale s'abat soudain sur vous. Vous voilà ligoté avant même de pouvoir vous remettre sur pieds.",
      "Si vous maîtrisez la Grande Discipline du Contrôle Animal, rendez-vous au 56.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 291."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Contrôle Animal, rendez-vous au 56.",
        "targetId": "56"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 291.",
        "targetId": "291"
      }
    ]
  },
  "141": {
    "id": "141",
    "text": [
      "Tout à coup, il se produit un craquement sec : la goupille vient de sauter. Libéré de l'énorme poids du chaudron, la chaîne part en cinglant l'air comme un serpent en colère. Vous vous écartez vivement pour l'éviter et, avec une sombre satisfaction, vous voyez le chaudron tomber à toute allure vers le laboratoire.",
      "Rendez-vous au 220."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 220.",
        "targetId": "220"
      }
    ]
  },
  "142": {
    "id": "142",
    "text": [
      "Le Druide de Cener semble très impressionné par la rapidité et l'apparente facilité avec lesquelles vous vous êtes débarrassé de ses serviteurs. Tremblant de peur, il tourne les talons et court vers le souterrain par où il était arrivé en compagnie de son escorte.",
      "Voulant à tout prix l'empêcher de donner l'alarme, vous vous engagez sur le pont-levis et vous vous lancez à sa poursuite. La silhouette rouge s'engouffre dans un tunnel étroit, mais fort bien éclairé, aussi n'avez-vous aucun mal à garder sa trace. Tel un lion pourchassant une gazelle, vous gagnez rapidement du terrain sur votre adversaire.",
      "Régulièrement, le druide lance des regards inquiets par-dessus son épaule. Se sentant rattrapé, il s'arrête brusquement sous l'une des lampes et lève les mains en signe de reddition. Mais au moment où vous approchez, il décroche le globe de la lampe et le lance à toute force sur vous.",
      "Un jet d'huile bouillante menace de vous atteindre en pleine face !",
      "Si vous maîtrisez la Grande Discipline du Nexus, rendez-vous au 324.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez- vous au 22."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Nexus, rendez-vous au 324.",
        "targetId": "324"
      }
    ]
  },
  "143": {
    "id": "143",
    "text": [
      "Vous résistez de toute votre âme au terrible pouvoir qui s'impose à vous. En désespoir de cause, vous implorez les dieux Kaï et Ishir de vous venir en aide et, comme en réponse à votre prière, vous sentez confusément que le tourbillon commence à perdre de sa force.",
      "Soudain, les ténèbres tournoyantes se dissipent entièrement et vous vous retrouvez à genoux sur le sol, face au trône de Cadak, hors d'haleine et tremblant encore sous le choc de l'abominable épreuve que vous venez de subir. Vous vous remettez lentement debout, quand un léger bruit dans votre dos vous alerte que quelqu'un — ou quelque chose - est en train de se mouvoir dans la pièce.",
      "Rendez-vous au 222."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 222.",
        "targetId": "222"
      }
    ]
  },
  "144": {
    "id": "144",
    "text": [
      "Vous arrondissez la bouche de façon à former un «O» parfait, puis vous prononcez les paroles du sortilège que le seigneur Rimoah vous a enseignées. Le dernier mot que vous lâchez dans un souffle puissant - « Gloar ! » - frappe le druide comme s'il avait reçu un coup de marteau entre les deux omoplates.",
      "Il culbute en avant et tombe dans un buisson d'épineux. Grognant de rage et de douleur, il tente aussitôt de se relever tout en cherchant à mettre la main sur sa baguette en or. Guidés par quelque instinct surnaturel, ses doigts se referment instantanément sur elle, mais avant qu'il puisse s'en servir, vous vous ruez sur lui, l'arme au poing, pendant qu'il est encore à terre.",
      "DRUIDE DE CENER HABILETÉ: 20 ENDURANCE: 28 Si vous sortez vainqueur du combat, rendez-vous au 60."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur du combat, rendez-vous au 60.",
        "targetId": "60"
      }
    ],
    "combat": {
      "name": "DRUIDE DE CENER",
      "combatSkill": 20,
      "endurance": 28,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "145": {
    "id": "145",
    "text": [
      "Vous n'êtes plus qu'à un ou deux mètres de l'ouverture quand les premières flèches arrivent sur vous en sifflant. Vous faites un vif écart pour en éviter une qui vous rase de très près, mais une autre vous transperce le mollet gauche. Vous perdez 3 points d'ENDURANCE.",
      "Serrant les dents, vous réussissez à vous hisser à travers l'étroite ouverture et vous émergez sur le flanc d'une montagne, près d'un affleurement dissimulé par des buissons touffus et une rangée de rochers. Vous restez quelques instants ébloui par la lumière du petit matin qui inonde les collines environnantes.",
      "Au fur et à mesure que votre vision s'améliore, vous découvrez un véritable océan de verdure qui semble peuplé de tous les dangers. D'après la position du soleil et grâce à votre sens de l'orientation, vous en déduisez qu'il s'agit de la forêt de Ruel et que vous vous trouvez donc sur le versant oriental des monts Skardos.",
      "Autour de vous, tout semble désert ; seul le tracé sinueux d'une route poussiéreuse qui serpente à travers les collines nues jusqu'à l'orée de la forêt rompt la monotonie du paysage. Après avoir consulté votre carte, vous comprenez qu'il s'agit de la route de Skardos, la piste secrète que les Cénériens utilisent pour se rendre directement à Mogaruith.",
      "Vous décidez de l'emprunter mais, auparavant, vous vous hâtez de vous éloigner de la corniche où vous vous trouvez, de peur que les Vazhags ne lancent leurs chiens à vos trousses.",
      "Rendez-vous au 230."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 230.",
        "targetId": "230"
      }
    ],
    "damage": 3
  },
  "146": {
    "id": "146",
    "text": [
      "Vous donnez votre réponse et le couvercle de la boîte s'ouvre automatiquement. Félicitations, Loup Solitaire ! Votre calcul est exact. En effet, diviser un nombre par un demi revient à le multiplier par 2. Ainsi, 80 x 2 = 160 et 160 -14 = 146, C.Q.F.D.",
      "A l'intérieur du coffret, vous trouvez un Plan de Magaruith. Vous pouvez le glisser sous votre tunique et, par conséquent, vous n'avez pas besoin de vous séparer d'un autre Objet Spécial si vous en transportez déjà le nombre maximum. Tout à coup, vous percevez un bruit étouffé provenant d'une autre partie de la bibliothèque.",
      "Quelqu'un vient d'entrer et il serait sage de quitter les lieux.",
      "Rendez-vous au 335."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 335.",
        "targetId": "335"
      }
    ]
  },
  "147": {
    "id": "147",
    "text": [
      "Vous réussissez à vous glisser de justesse sous la herse, mais votre Sac à Dos reste accroché au passage. Les pointes de la herse vous l'arrachent des épaules : rayez tous les Objets contenus dans votre Sac à Dos; ainsi que tous les Repas de votre Feuille d'Aventure.",
      "Sans perdre un instant, vous bondissez sur vos pieds et traversez le pont en courant. Une pluie de flèches s'abat autour de vous, mais grâce à votre célérité, vous parvenez à toucher la terre ferme sans la moindre égrati-gnure. Malheureusement, à peine êtes-vous hors d'atteinte des archers qu'un autre danger vous attend : vous voilà confronté à trois Vazhags qui s'en reviennent de guerre.",
      "Deux d'entre eux sont à pied, mais le troisième est monté sur un cheval Slovien. De plus, il est muni d'une longue lance de cavalerie, probablement prise à l'ennemi et, d'après la façon dont il la tient, il est clair qu'il est expert dans le maniement de cette arme.",
      "Dans un couinement agressif, les deux premiers Vazhags se jettent sur vous toutes griffes dehors, mais il en faut plus pour vous dérouter : en deux temps, trois mouvements, vous les étendez raides morts. Immédiatement, le troisième entre en action à son tour.",
      "Il vous charge en dirigeant le fer de sa lance droit sur votre cœur. Après avoir esquivé la première attaque, vous vous campez fermement sur vos jambes pour affronter la suite.",
      "LANCIER VAZHAG HABILETÉ: 32 ENDURANCE: 20 Si vous sortez vainqueur de ce combat, rendez-vous au 113."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 113.",
        "targetId": "113"
      }
    ],
    "combat": {
      "name": "LANCIER VAZHAG",
      "combatSkill": 32,
      "endurance": 20,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "148": {
    "id": "148",
    "text": [
      "La horde macabre se rapproche en rangs serrés mais, curieusement, ce ne semble pas être dans le but de passer à l'attaque. Soudain, les goules ouvrent grand la bouche et émettent à l'unisson une sorte de ricanement moqueur. Vous n'avez jamais rien entendu d'aussi odieux !",
      "Comme en réponse à cette horrible cacophonie, un rugissement terrifiant s'élève alors du tréfonds des gouffres. De chacun des puits obscurs monte une mystérieuse et énorme chose et, au moment précis où les glapissements des goules atteignent leur paroxysme, vous voyez surgir trois têtes de chats gigantesques, perchées au bout d'un corps reptilien aussi épais qu'un tronc d'arbre.",
      "Les monstres découvrent leurs crocs en sifflant et, d'une brève secousse, se débarrassent des ossements et débris humains restés englués dans leur pelage hérissé. A la vue de ces créatures de cauchemar, vous ne pouvez réprimer un cri de désespoir. Votre plainte pathétique se perd parmi les hurlements des goules, mais les monstres félino-reptiliens semblent toutefois les avoir perçus.",
      "Ils réagissent instantanément en rampant lentement vers l'endroit où vous vous trouvez.",
      "Si vous maîtrisez la Grande Discipline de la Puissance Psychique, rendez-vous au 80.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 38."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de la Puissance Psychique, rendez-vous au 80.",
        "targetId": "80",
        "requiredDiscipline": "Puissance Psychique"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 38.",
        "targetId": "38"
      }
    ]
  },
  "149": {
    "id": "149",
    "text": [
      "Après vous avoir vu à l'œuvre face à une escorte entière de Vazhags, le druide file sans demander son reste par le sentier qui s'enfonce dans la forêt. Vous vous lancez à sa poursuite et vous le rattrapez au bout de cinquante mètres. En désespoir de cause, le Cénérien tente de vous atteindre avec une autre décharge d'énergie, mais la rapidité de vos réflexes fait échouer sa vile manœuvre : d'un coup de pied bien assené, vous envoyez valser sa baguette dans les airs et le flux d'énergie se perd parmi les arbres.",
      "Vous maudissant de toute sa hargne, votre adversaire dégaine alors un poignard et se jette sur vous.",
      "DRUIDE DE CENER HABILETÉ : 28 ENDURANCE : 28 Si vous sortez vainqueur de ce combat, rendez-vous au 53."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 53.",
        "targetId": "53"
      }
    ],
    "combat": {
      "name": "DRUIDE DE CENER",
      "combatSkill": 28,
      "endurance": 28,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "150": {
    "id": "150",
    "text": [
      "Au-delà de la porte s'étend un vaste hall où règne une infecte puanteur. Les murs sont décorés de fresques qui dépeignent d'horribles scènes de massacres. L'une d'elles attire particulièrement votre attention et, malgré la répulsion qu'elle vous inspire, vous n'arrivez pas à en détacher vos yeux.",
      "Il s'agit d'un groupe d'hommes en proie aux pires souffrances, livrés à la férocité d'énormes chiens qui les mettent en pièces. Cette scène vous est d'autant plus insupportable que vous reconnaissez, en ces malheureux, les traits caractéristiques de vos concitoyens Sommerlundois.",
      "Vous détournez tristement la tête et examinez le reste du hall. Le plafond est soutenu par de hautes colonnes autour desquelles s'enroulent des lianes couvertes de moisissures phosphorescentes. En face de vous, il y a une autre porte, identique à celle que vous avez franchie.",
      "Elle est précédée d'une estrade en pierre verte sur laquelle se dresse un bureau. Un personnage complètement chauve y est assis. Il est penché sur un grand registre sur lequel il écrit à l'aide d'une plume d'oie. Alors que vous vous approchez, il pose sa plume dans un crâne qui lui sert d'encrier, puis il lève la tête et braque sur vous un œil unique, énorme et scrutateur.",
      "«Qui demande une audience auprès de Sa Grandeur ? croasse l'étrange secrétaire. Déclinez votre nom, frère, et inscrivez ici la raison de votre démarche. » Vous vous trouvez dans l'antichambre de la salle .du trône de l'Archidruide Cadak. Pour pouvoir pénétrer dans cette salle et découvrir, si possible, l'endroit où les druides de Mogaruith cultivent le mortel virus de la peste, vous savez que vous devez tout d'abord persuader le cyclope de vous laisser passer.",
      "Si vous voulez lui dire que vous arrivez du front et que vous apportez des nouvelles fraîches au sujet de la guerre avec la Slovie, rendez- vous au 314.",
      "Si vous préférez prétendre que vous êtes un agent secret et que vous revenez de mission dans les Terres des Fins Fonds, avec des informations de la plus haute importance destinées à Cadak en personne, rendez-vous au 208.",
      "Si vous maîtrisez la Grande Discipline du Contrôle Animal et que vous souhaitiez la tester sur cette créature afin de la soumettre à votre volonté, rendez-vous au 91."
    ],
    "choices": [
      {
        "text": "Si vous préférez prétendre que vous êtes un agent secret et que vous revenez de mission dans les Terres des Fins Fonds, avec des informations de la plus haute importance destinées à Cadak en personne, rendez-vous au 208.",
        "targetId": "208"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline du Contrôle Animal et que vous souhaitiez la tester sur cette créature afin de la soumettre à votre volonté, rendez-vous au 91.",
        "targetId": "91"
      }
    ]
  },
  "151": {
    "id": "151",
    "text": [
      "Vous concentrez toute l'intensité de votre regard sur l'Homme- Rat, puis vous lui ordonnez d'une voix ferme de vous laisser entrer dans Mogaruith sans plus attendre. Malheureusement, la créature ne se laisse nullement impressionner et vous sentez qu'un sortilège quelconque lui permet de résister à votre volonté.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez les Grandes Disciplines de l'Alchimie Kaï et de la Puissance Psychique, ajoutez 3 au chiffre que vous avez tiré.",
      "Si le résultat est inférieur ou égal à 4, rendez-vous au 70.",
      "S'il est supérieur, rendez-vous au 175."
    ],
    "choices": [
      {
        "text": "rendez-vous au 70.",
        "targetId": "70"
      },
      {
        "text": "rendez-vous au 175.",
        "targetId": "175"
      }
    ]
  },
  "152": {
    "id": "152",
    "text": [
      "La créature de feu s'élève dans les airs et s'immobilise à un mètre au-dessus de votre tête. Voyant ses tentacules se détendre brusquement, vous faites un bond pour leur échapper, mais le monstre se rapproche inexorablement, encouragé, semble-t-il, par les hurlements frénétiques des bêtes des cavernes.",
      "Pendant un bref instant, son corps se contracte et se dilate comme s'il respirait profondément puis, tout à coup, il exhale un souffle d'énergie psychique qui vous transperce le crâne comme un fer rougi à blanc. Vos facultés Kaï sont incapables de vous protéger contre la force et la soudaineté de cette attaque.",
      "Vous vacillez sous la violence du choc et vous perdez 8 points d'ENDURANCE.",
      "Si vous survivez à cette pénible épreuve, rendez-vous au 301."
    ],
    "choices": [
      {
        "text": "Si vous survivez à cette pénible épreuve, rendez-vous au 301.",
        "targetId": "301"
      }
    ],
    "damage": 8
  },
  "153": {
    "id": "153",
    "text": [
      "Vous vous dissimulez du mieux possible au creux d'un amas de rochers éboulés au pied de l'escalier, puis vous retenez votre souffle en écoutant les bruits de pas se rapprocher. Tout d'abord, la lumière vacillante des torches projette des taches blafardes sur le sol, puis les créatures pénètrent une à une dans la caverne et vous pouvez distinguer leurs traits répugnants.",
      "C'est une patrouille composée de six Vazhags. Ils sont de la taille des jeunes Sommerlundois et sont équipés d'armes rustiques et rouillées. Leurs corps de rat sont revêtus d'éléments disparates provenant sans doute d'uniformes de soldats humains. Ils ont beau être à plus de six mètres de vous, la puanteur qu'ils dégagent est tellement insupportable que vous devez faire appel à votre maîtrise du Nexus pour réprimer les haut-le-cceur qui vous assaillent.",
      "Les Vazhags font halte au pied de l'escalier de pierre, à une coudée de là où vous êtes caché ! Ils communiquent entre eux par des couinements dissonants qui vous font penser à des grincements de porte. Tout en baragouinant, ils ne cessent de jeter des regards furtifs vers le souterrain ouest, comme s'ils attendaient l'arrivée d'une autre patrouille.",
      "Au bout de quelques minutes, effectivement, quelqu'un d'autre arrive. A en juger par sa taille - celle d'un homme adulte - il ne peut pas s'agir d'un de leurs congénères. Néanmoins, il vous est impossible d'affirmer que c'est un être humain, car le capuchon de sa coule écarlate dissimule entièrement son visage.",
      "Les Vazhags s'interrompent dès que le mystérieux personnage leur fait signe d'avancer vers le tunnel sud. L'espace d'une fraction de seconde, vous apercevez l'éclat du masque vert qui protège son visage et vous identifiez aussitôt cet accessoire : c'est le masque de verre rituel que portent les Druides de Cener.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 124.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 213."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 124.",
        "targetId": "124"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 213.",
        "targetId": "213"
      }
    ]
  },
  "154": {
    "id": "154",
    "text": [
      "Grâce à votre remarquable maîtrise de cette Grande Discipline, le Tzarg passe à quelques centimètres de vous sans déceler votre présence. Il s'éloigne rapidement en se dandinant et en reniflant de plus belle. Persuadés que leur limier est sur une piste, les Vazhags s'empressent de le suivre de très près.",
      "Vous attendez patiemment que le bruit de leurs pas s'évanouisse, puis vous sortez de votre cachette et quittez les lieux en empruntant l'escalier.",
      "Rendez-vous au 75."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 75.",
        "targetId": "75"
      }
    ]
  },
  "155": {
    "id": "155",
    "text": [
      "Vous avancez vers les eaux dormantes en redoublant de prudence. Utilisant votre Discipline Magnakai de l'Invisibilité, vous prenez soin de masquer l'odeur et la chaleur dégagées par votre corps, afin de ne pas éveiller la curiosité des habitants du Ruel.",
      "Vous vous arrêtez un instant près de la mare et vous faites usage de votre pouvoir de Divination, au cas où des ennemis seraient cachés dans les alentours. Ne détectant aucune menace imminente, vous contournez l'étendue d'eau fétide, puis vous suivez le ruisseau qui s'enfonce dans la forêt.",
      "Il s'en dégage une moiteur malsaine et pestilentielle. Silencieusement, vous adressez une prière à Ishir avant de vous enfoncer plus avant sur ce territoire inhospitalier. Pendant plusieurs kilomètres, vous longez le ruisseau, pataugeant dans la boue lourde et collante qui forme un mauvais chemin, bordé de part et d'autre par des troncs énormes et des buissons épineux.",
      "Partout la végétation est tellement dense qu'il est absolument impossible de quitter le sentier. Vous avez l'impression d'être engagé sur un chemin sans fin, dont le tracé semble le fruit de la sorcellerie. Au bout de quelque temps, le sentier s'élargit un peu et les arbres se font moins rapprochés.",
      "Vous quittez enfin les abords boueux du cours d'eau pour pénétrer dans la forêt proprement dite. Vous découvrez bientôt la trace d'une piste qui descend vers un marais coiffé de brume. Vous vous en approchez tout en restant sur le qui-vive, car l'épais manteau de brouillard pourrait bien receler une menace.",
      "Soudain, tous vos sens se mettent en alerte: une présence maléfique hante assurément ces lieux. Au moment précis où vous portez la main à votre arme, vous sentez quelque chose s'enrouler sournoisement autour de votre pied gauche.",
      "Si vous maîtrisez la Grande Discipline de l'Exploration, rendez- vous au 19.",
      "Sinon, rendez-vous au 273."
    ],
    "choices": [
      {
        "text": "Sinon, rendez-vous au 273.",
        "targetId": "273"
      }
    ]
  },
  "156": {
    "id": "156",
    "text": [
      "« Comment osez-vous blasphémer de la sorte ! s'écrie le druide d'un air horrifié. Ne savez-vous pas qu'il vous est interdit de posséder quoi que ce soit ? Vous allez rendre compte de cet outrage sur-le-champ ! » Joignant le geste à la parole, le druide dégaine un long poignard qu'il lève au-dessus de-sa tête.",
      "Un influx psychique vous traverse l'esprit et, l'espace d'un bref instant, vous voyez les yeux du druide s'arrondir de stupéfaction en découvrant votre identité. Il éructe un sortilège et la lame de son poignard se transforme aussitôt en un fuseau de luminescence aveuglante.",
      "Vous vous hâtez de tirer votre arme tandis que votre adversaire avance sur vous en cinglant l'air de sa dague ensorcelée. GRAND DRUIDE HABILETÉ: 47 ENDURANCE: 30 Votre ennemi est insensible aux disciplines psychiques sous leur forme élémentaire. Vous ne pourrez l'atteindre que si vous maîtrisez la Grande Discipline du Foudroiement Psychique.",
      "Si vous sortez vainqueur de ce combat, rendez-vous au 340."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 340.",
        "targetId": "340"
      }
    ],
    "combat": {
      "name": "GRAND DRUIDE",
      "combatSkill": 47,
      "endurance": 30,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "157": {
    "id": "157",
    "text": [
      "Vous relâchez la corde de votre arc et la flèche atteint le Vazhag en pleine poitrine. L'Homme-Rat pousse un couinement rauque et un profond désarroi se lit au fond de ses yeux avant qu'il s'effondre, la tête la première, au milieu de son amas d'objets hétéroclites.",
      "Mais aussitôt, la créature canine s'élance vers vous en grondant de toutes ses dents. Vous l'esquivez de justesse, le temps de jeter votre arc au profit d'une arme de poing mieux adaptée à ce genre de combat. AGARASHI HABILETÉ: 34 ENDURANCE: 38 Cette créature est insensible aux disciplines psychiques sous leur forme élémentaire.",
      "Seule la Grande Discipline du Foudroiement Psychique pourra l'atteindre.",
      "Si vous sortez vainqueur de ce combat, rendez-vous au 297."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 297.",
        "targetId": "297"
      }
    ],
    "combat": {
      "name": "AGARASHI",
      "combatSkill": 34,
      "endurance": 38,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "158": {
    "id": "158",
    "text": [
      "Un petit couloir relie cette pièce à une autre, qui ne comporte qu'une issue : une imposante porte garnie de plaques de cuivre sur lesquelles court un filigrane d'or et d'argent. En l'examinant de plus près, vous constatez qu'elle est scellée par un joint parfaitement étanche.",
      "D'autre part, elle n'a ni serrure ni poignée. Cependant, votre œil de lynx ne tarde pas à repérer, en plein centre du panneau, un curieux motif en relief, qui n'est autre qu'une combinaison secrète. Trois séries de chiffres sont disposées en carré selon le schéma suivant : Sous cette combinaison, vous décrytez un message rédigé en ancien langage cénérien : Afin de passer votre chemin Annoncez le nombre malin Étudiez attentivement la grille ci-dessus.",
      "Quand vous penserez avoir trouvé la solution, rendez-vous au paragraphe portant le même nombre.",
      "Si vous n'arrivez pas à trouver la réponse exacte, rendez-vous au 132."
    ],
    "choices": [
      {
        "text": "Si vous n'arrivez pas à trouver la réponse exacte, rendez-vous au 132.",
        "targetId": "132"
      }
    ]
  },
  "159": {
    "id": "159",
    "text": [
      "L'écho d'un fracas infernal fait vibrer toute la clairière. Un éclair bleu, aveuglant et assourdissant vient de jaillir du bout de la baguette du Cénérien. Il fuse dans votre direction et perce le mur en faisant voler les pierres en éclats, comme s'il s'agissait de vulgaires fétus de paille sèche.",
      "De nombreuses esquilles vous entaillent les jambes et le souffle de l'explosion vous laisse pantelant: vous perdez 2 points d'ENDURANCE. A travers la brèche qui déchire à présent le mur, vous pouvez voir que les Vazhags se sont soudain arrêtés. Sachant que le druide se prépare à récidiver, ils se tiennent la tête à deux mains et se bouchent les oreilles en grimaçant.",
      "Si vous possédez le Glaive de Sommer, rendez-vous au 322.",
      "Si vous ne possédez pas cet Objet Spécial, rendez-vous au 123."
    ],
    "choices": [
      {
        "text": "Si vous possédez le Glaive de Sommer, rendez-vous au 322.",
        "targetId": "322"
      },
      {
        "text": "Si vous ne possédez pas cet Objet Spécial, rendez-vous au 123.",
        "targetId": "123"
      }
    ],
    "damage": 2
  },
  "160": {
    "id": "160",
    "text": [
      "Continuer à suivre la route vous semble un peu trop risqué. Comme vous n'avez aucune envie de tomber sur une patrouille de Vazhags, vous pénétrez dans la forêt et longez la route tout en profitant du couvert des arbres. Vous avez eu raison de prendre ces précautions car, quelques minutes plus tard, un chariot cahotant, escorté par une douzaine de Vazhags, apparaît sur la route.",
      "Vous vous cachez précipitamment derrière le tronc d'un grand chêne, et le détachement passe à quelques mètres de vous sans remarquer votre présence. Au bout de plusieurs heures de marche, les arbres commencent à se raréfier, et vous apercevez enfin Mogaruith pour la première fois en début d'après-midi.",
      "La gigantesque forteresse se tient là, tapie à la sortie de la forêt comme un démon surgi des entrailles de la terre. Vous êtes immédiatement frappé par la verdeur moussue de ses remparts et par l'extraordinaire déploiement de défenses qui hérissent ses tours, ses donjons et ses créneaux.",
      "De profondes douves emplies d'une eau glauque bouillonnante entourent ce bastion dont le seul et unique accès est un pont-levis qui enjambe les flots inquiétants avant d'aboutir à une entrée monumentale, gardée par une herse qui découvre ses crocs d'acier, telle une gueule vorace.",
      "Deux routes boueuses mènent au pont-levis : la piste de Skardos, que vous avez suivie pour arriver jusqu'ici, et une autre qui part droit vers l'est. En consultant votre carte, vous voyez qu'elle conduit à la Storn, une rivière tumultueuse qui constitue une frontière naturelle entre le Ruel et le Royaume Libre de Slovie.",
      "Un grand pont relie les deux Etats, à cinq kilomètres environ de là où vous vous trouvez. Soudain, vous voyez sortir de la forteresse une armée de Vazhags accompagnés d'une horde de créatures d'origine douteuse. A en juger par leur nombre et les chariots chargés de matériel qui suivent leurs rangs, il est clair que ces troupes partent en guerre contre l'armée slovienne.",
      "Pour être à même de détruire le virus de la peste et réussir, votre mission, vous savez qu'il vous faut absolument pénétrer au cœur de la forteresse. Dévoré par l'anxiété, vous regardez défiler les colonnes de Vazhags depuis votre cachette, puis vous vous perdez dans la contemplation de l'édifice hostile qui se dresse devant vous, dans l'espoir de trouver le moyen d'y entrer sans éveiller les soupçons.",
      "Si vous possédez un masque et une robe de Druide de Cener, rendez-vous au 193.",
      "Sinon, rendez-vous au 292."
    ],
    "choices": [
      {
        "text": "Si vous possédez un masque et une robe de Druide de Cener, rendez-vous au 193.",
        "targetId": "193"
      },
      {
        "text": "Sinon, rendez-vous au 292.",
        "targetId": "292"
      }
    ]
  },
  "161": {
    "id": "161",
    "text": [
      "Vous saisissez la lance et montez à l'échelle aussi vite que possible. Les autres archers sont presque sur vos talons, lorsque vous parvenez enfin à atteindre la plate-forme. En toute hâte, vous vous ruez sur le chaudron, vous glissez le fer de lance entre la chaîne et l'anneau qui le retient, puis vous exercez une forte pression pour faire levier.",
      "Le bois de la hampe commence à craquer et, pendant quelques secondes de suspense atroce, vous redoutez que tous vos efforts soient voués à l'échec. Mais tout à coup, il se produit un claquement sonore : la goupille qui maintenait le chaudron vient de sauter !",
      "Simultanément, l'énorme récipient tombe de toute sa hauteur, et la lourde chaîne qui supportait son poids part en cinglant l'air comme un serpent en colère.",
      "Utilisez la Table de Hasard.",
      "Si le chiffre que vous avez tiré est inférieur ou égal à 3, rendez-vous au 191.",
      "S'il est supérieur, rendez-vous au 105."
    ],
    "choices": [
      {
        "text": "Si le chiffre que vous avez tiré est inférieur ou égal à 3, rendez-vous au 191.",
        "targetId": "191"
      },
      {
        "text": "rendez-vous au 105.",
        "targetId": "105"
      }
    ]
  },
  "162": {
    "id": "162",
    "text": [
      "« Comment ose-t-on m'importuner avec des formalités aussi triviales ! », vous exclamez-vous en écartant le Vazhag de votre chemin d'un geste méprisant. La créature pousse un grognement sourd et commence à lever sa lance en guise de protestation, mais vous déclarez aussitôt d'un air farouche : « Si vous me retardez une seconde de plus, je veillerai à ce qu'on vous fasse bouillir dans votre propre graisse.",
      "Et maintenant, laissez-moi passer ! » Votre menace fait son effet. L'Homme-Rat semble perdre toute confiance en lui et recule en abaissant sa garde, tandis que vous avancez vers lui. A ce moment, une colonne de Vazhags et un chariot d'armes de toutes sortes convergent en même temps vers le porche.",
      "Il s'ensuit une cohue tapageuse qui joue en votre faveur : vous vous frayez rapidement un chemin parmi la foule et vous vous faufilez à l'intérieur du donjon. Plusieurs entrées s'offrent à vous, mais l'une d'elles vous inspire plus que les autres. C'est un escalier qui descend jusqu'à un portail encastré au pied de la citadelle.",
      "Vous marchez dans cette direction, quand soudain vous voyez arriver, droit devant vous, trois Druides de Cener. Il ne vous reste qu'une chose à faire pour les éviter: vous écarter rapidement et vous cacher dans l'embrasure d'une porte.",
      "Rendez-vous au 98."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 98.",
        "targetId": "98"
      }
    ]
  },
  "163": {
    "id": "163",
    "text": [
      "Marchant littéralement côte à côte, les goules avancent sur vous, avides de se repaître de chair fraîche, non viciée par la maladie. Vous dégainez votre arme à la volée et vous implorez le dieu Kaï de vous venir en aide en cet instant crucial. Soudain, une première vague d'attaquants se jette sur vous avec furie.",
      "Vous frappez de taille et d'estoc, leur portant des coups qui réduiraient à néant n'importe quel mortel, mais les plaies profondes qui déchirent ces corps décharnés ne laissent échapper aucune goutte de sang. Vous persistez à vous démener avec toute votre bravoure, tranchant les mains et les membres qui s'agrippent à vous pour vous jeter à terre.",
      "Les goules hurlent sans trêve, mais ce ne sont point des cris de douleur ; ce sont des clameurs triomphantes, car elles savent qu'en dépit de votre courage et de votre acharnement à vous défendre, vous finirez par crouler sous le poids de leur nombre.",
      "Centimètre par centimètre, elles vous acculent vers les gouffres béants. Dès que vous avez compris leur stratégie, vous décidez de changer de tactique et dirigez vos coups vers leurs jambes - si toutefois l'on peut appeler cela des jambes - afin de les empêcher d'avancer.",
      "Hélas ! toutes les goules que vous amputez n'en continuent pas moins de ramper inexorablement sur les coudes tandis qu'un second flot de leurs congénères les piétine impitoyablement afin d'arriver en première ligne. Pourtant, le front cesse soudain d'avancer.",
      "Les goules se taisent et resserrent leurs rangs, probablement pour se préparer à l'assaut final. C'est alors qu'elles ouvrent la bouche toute grande et produisent à l'unisson un exécrable ricanement qui vous vrille les tempes. Vous faites immédiatement appel à vos défenses psychiques pour repousser cette émission maléfique.",
      "Si vous maîtrisez la Grande Discipline de l'Écran psychique, rendez-vous au 194.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 65."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Écran psychique, rendez-vous au 194.",
        "targetId": "194"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 65.",
        "targetId": "65"
      }
    ]
  },
  "164": {
    "id": "164",
    "text": [
      "Malgré sa proximité et son fort pouvoir de détection, le druide ne parvient pas à vous repérer. Vous l'entendez marmonner quelques paroles de dépit et, d'un geste autoritaire, il fait signe à son escorte de se remettre en marche. Vous attendez patiemment que la lueur de leurs torches ait complètement disparu au bout du tunnel sud, puis vous sortez de votre cachette et vous vous engagez dans le tunnel ouest.",
      "Pendant plus de cinq kilomètres, vous longez ce passage tortueux et, malgré votre appréhension grandissante, vous ne faites aucune mauvaise rencontre, à l'exception de quelques chauves-souris inoffensives qui s'enfuient en battant des ailes à votre approche.",
      "Peu à peu, le tunnel s'enfonce sous les monts Skardos. L'air se rafraîchit et devient de plus en plus humide. Vous pressentez qu'il y a une nappe d'eau dans les parages et vous n'êtes pas surpris d'apercevoir, quelque temps après, des reflets miroitants qui jouent sur la voûte polie du souterrain.",
      "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 67.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 244."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 67.",
        "targetId": "67",
        "requiredDiscipline": "Intuition"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 244.",
        "targetId": "244"
      }
    ]
  },
  "165": {
    "id": "165",
    "text": [
      "Au moment où vous revenez vers la chambre, vous constatez que le Vazhag est en train de se réveiller.",
      "Si vous souhaitez l'attaquer, rendez-vous au 282.",
      "Si vous préférez vous faufiler rapidement jusqu'à la porte secrète, rendez-vous au 308."
    ],
    "choices": [
      {
        "text": "Si vous souhaitez l'attaquer, rendez-vous au 282.",
        "targetId": "282"
      },
      {
        "text": "Si vous préférez vous faufiler rapidement jusqu'à la porte secrète, rendez-vous au 308.",
        "targetId": "308"
      }
    ]
  },
  "166": {
    "id": "166",
    "text": [
      "Exterminus vous saisit à bras-le-corps et vous étreint de toutes ses forces, chassant l'air de vos poumons jusqu'au dernier centimètre cube. Puis, avec un glapissement sardonique, il vous plante ses griffes dans le cou. Un éclair foudroyant vous traverse la tête et, avant de perdre connaissance, vous vous sentez happé par un tourbillon de noirceur.",
      "Non content de vous prendre la vie, Exterminus vous a voué à un sort terrible : vous venez d'être attiré dans un lieu infernal, un domaine où le pouvoir du Bien n'a plus aucune prise. Vous êtes devenu la proie de Naar en personne, le Dieu des Ténèbres, et vous resterez son prisonnier à jamais, condamné à errer pour l'éternité dans la noirceur sans fin de son royaume."
    ],
    "choices": []
  },
  "167": {
    "id": "167",
    "text": [
      "Vous avez mal visé et votre flèche frôle l'épaule de votre adversaire, avant de se perdre parmi les arbres. Aussitôt, le druide fait volte-face et hurle à son escorte d'en finir une fois pour toutes avec vous. Les Vazhags répondent aux ordres de leur maître par un hurlement strident, puis ils se jettent sur vous en brandissant leurs armes rouillées.",
      "HORDE DE VAZHAGS HABILETÉ : 34 ENDURANCE : 44 Si vous sortez vainqueur de ce combat, rendez-vous au 303."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 303.",
        "targetId": "303"
      }
    ],
    "combat": {
      "name": "HORDE DE VAZHAGS",
      "combatSkill": 34,
      "endurance": 44,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "168": {
    "id": "168",
    "text": [
      "Alors que la lourde herse heurte le sol dans un fracas de tonnerre, vous réfléchissez calmement au moyen de vous échapper de Mogaruith. Quelques instants plus tard, l'arrivée d'une troupe importante de Vazhags vient troubler vos pensées et vous force à fuir par la porte principale, en quête d'une autre cachette.",
      "Tapi dans l'embrasure d'un magasin désaffecté, vous observez les remparts et les chemins de ronde dans l'espoir de découvrir une issue possible, mais vous devez bientôt vous rendre à l'évidence qu'il n'y a qu'une seule et unique façon de sortir aisément de Mogaruith : par la grande tour de garde qui est précisément condamnée par la herse !",
      "Tout à coup, vous entendez un cri perçant. En levant la tête, vous apercevez le museau d'un Homme-Rat penché à la fenêtre d'une tourelle, juste sur votre gauche. Il vous a repéré et avertit ses congénères de votre présence. De nouveau obligé d'abandonner votre repaire, vous vous engagez en courant dans une allée transversale pour échapper à une meute de Vazhags qui arrive au pas de charge dans votre direction.",
      "L'allée est un cul-de-sac, mais vous apercevez un escalier de pierre qui grimpe vers les remparts. Sans hésiter, vous vous élancez à l'assaut des marches. Malheureusement, une mauvaise surprise vous attend au sommet : vous voilà coincé entre deux patrouilles de Vazhags qui accourent de chaque côté !",
      "Rester sur place serait pure folie. Certes, vous extermineriez beaucoup d'adversaires, mais vous- même finiriez par succomber sous leur nombre. En conclusion, vous n'avez plus qu'une chose à faire, mais cette solution vous fait frémir d'avance. Prenant votre courage à deux mains, vous dégainez votre arme, vous retenez votre souffle, puis vous sautez du haut des remparts et plongez dans les eaux écumantes qui remplissent les douves.",
      "Rendez-vous au 283."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 283.",
        "targetId": "283"
      }
    ]
  },
  "169": {
    "id": "169",
    "text": [
      "Vous vous faufilez habilement parmi la foule des femelles Vazhags qui s'empressent frénétiquement autour du chariot. Dans sa précipitation, l'une d'elles vous coupe le chemin et vous vous arrêtez de justesse afin de ne pas la heurter de plein fouet. Mais au Vazhag se fait violemment bousculer et vous tombe pratiquement dans les bras.",
      "Sans hésiter, vous l'empoignez fermement par le col et vous le traînez dans l'ombre de la paroi avant qu'il puisse alerter ses congénères. C'est alors que vous sentez quelques chose remonter le long de votre bras. Dans un sursaut de répulsion, vous découvrez qu'il s'agit d'un boisseau de puces noires qui émigrent de la tignasse du Vazhag pour venir se réfugier sur vous !",
      "Dégoûté par cette vision, vous relâchez sensiblement votre étreinte, et le Vazhag en profite pour appeler au secours. Ses compagnons réagissent immédiatement et avancent comme un seul homme dans votre direction, une lueur malveillante au fond des yeux.",
      "Si vous voulez les affronter, rendez-vous au 313.",
      "Si vous jugez préférable d'éviter le combat, vous pouvez vous enfuir par le portail ; rendez-vous au 204."
    ],
    "choices": [
      {
        "text": "Si vous voulez les affronter, rendez-vous au 313.",
        "targetId": "313"
      },
      {
        "text": "Si vous jugez préférable d'éviter le combat, vous pouvez vous enfuir par le portail ; rendez-vous au 204.",
        "targetId": "204"
      }
    ]
  },
  "170": {
    "id": "170",
    "text": [
      "« Mmm... Je n'ai besoin de personne pour m'aider à faire mes dévotions, dit-il en plissant les yeux. Qui vous a demandé de venir ici ? Serait-ce frère Jhordax, par hasard ? » Vous marquez un temps d'hésitation, mais votre interlocuteur n'attend pas votre réponse et poursuit : « Cet imbécile de Jhordax !",
      "Ce n'est pas la première fois qu'il manque au protocole. Vous pourrez lui dire de ma part que son incompétence commence à me lasser. Si cela se reproduit, il devra en rendre compte à Sa Grandeur. » Sur ces paroles de mauvais augure, la longue silhouette passe devant vous, l'air hautain, puis pénètre dans la salle de prière en claquant la porte derrière elle pour manifester son mécontente- ment.",
      "Rendez-vous au 227."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 227.",
        "targetId": "227"
      }
    ]
  },
  "171": {
    "id": "171",
    "text": [
      "Les créatures cessent de s'agiter frénétiquement, mais avec une soudaineté presque inquiétante : on les croirait pétrifiées. Maintenant que vous pouvez les regarder tout à loisir, elles vous font penser à des cafards, si ce n'est qu'elles sont nettement plus grosses et munies d'une longue queue de rat.",
      "Vous les observez encore pendant un moment, puis vous faites un pas en avant. Instantanément, les créatures s'animent de nouveau, mais cette fois elles ne restent pas confinées au sol. Dans un grincement de porte rouillée multiplié à l'infini, elles déploient leurs ailes et s'élèvent dans les airs, tel un énorme nuage noir.",
      "Tandis que la queue de ce sinistre escadron disparaît au-dessus de la cime des arbres, vous priez de tout cœur pour qu'il ne s'agisse pas d'une horde de guetteurs au service des Cénériens. De l'autre côté de la clairière, la piste continue en s'enfonçant plus avant dans la forêt.",
      "Vous la suivez pendant une heure environ, jusqu'à ce que vos sens vous mettent en garde contre un danger imminent. Aussitôt, vous faites halte. Quelque chose bouge au-dessus de vous. Vous levez vivement la tête et dégainez votre arme pour parer une éventuelle attaque.",
      "Hélas, malgré la rapidité de vos réflexes, il vous est impossible d'échapper à la menace qui se tient tapie au creux des plus hautes branches. Soudain, un enchevêtrement de lianes barbelées tombe de la cime obscure des arbres. Elles s'agitent convulsivement vers vous, comme si elles étaient douées de leurs propres mouvements.",
      "Si vous maîtrisez la Grande Discipline de l'Exploration, rendez-vous au 257.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 140."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Exploration, rendez-vous au 257.",
        "targetId": "257",
        "requiredDiscipline": "Exploration"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 140.",
        "targetId": "140"
      }
    ]
  },
  "172": {
    "id": "172",
    "text": [
      "Vous vous dégagez à grand-peine de tous les corps inertes qui s'entassent autour de vous mais, une fois à l'air libre, vous apercevez le Druide de Cener qui s'enfuit vers la trouée par laquelle lui et son escorte étaient entrés dans la clairière. Vous savez pertinemment que, s'il parvient à vous échapper, il donnera l'alerte dans tout Mogaruith et que cela mettra votre mission en péril, sans parler de votre propre vie.",
      "Saisi d'angoisse à cette idée, vous enjambez les cadavres des Vazhags, puis vous vous lancez à la poursuite du druide, fermement résolu à l'arrêter avant qu'il soit trop tard.",
      "Si vous possédez un arc et des flèches et que vous souhaitiez vous en servir, rendez-vous au 176.",
      "Si vous maîtrisez la Grande Discipline de la Magie des Anciens et que vous souhaitiez y avoir recours, rendez-vous au 334.",
      "Si vous maîtrisez et si vous voulez utiliser la Grande Discipline de l'Alchimie Kaï, rendez-vous au 264.",
      "Enfin, si vous ne maîtrisez aucune des Grandes Disciplines ci-dessus, ou si vous ne désirez pas vous en servir, rendez-vous au 237."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et des flèches et que vous souhaitiez vous en servir, rendez-vous au 176.",
        "targetId": "176"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline de la Magie des Anciens et que vous souhaitiez y avoir recours, rendez-vous au 334.",
        "targetId": "334"
      },
      {
        "text": "Si vous maîtrisez et si vous voulez utiliser la Grande Discipline de l'Alchimie Kaï, rendez-vous au 264.",
        "targetId": "264"
      },
      {
        "text": "Enfin, si vous ne maîtrisez aucune des Grandes Disciplines ci-dessus, ou si vous ne désirez pas vous en servir, rendez-vous au 237.",
        "targetId": "237"
      }
    ]
  },
  "173": {
    "id": "173",
    "text": [
      "Vous vous rendez compte que l'influence maléfique qui règne dans cette pièce provient de la boule de cristal. Plus vous vous en approchez, plus la nausée et la répulsion qu'elle vous inspire deviennent fortes.",
      "Rendez-vous au 338."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 338.",
        "targetId": "338"
      }
    ]
  },
  "174": {
    "id": "174",
    "text": [
      "Instinctivement, vous vous plaquez contre le mur afin d'esquiver la lame qui arrive en tournoyant à toute vitesse.",
      "Utilisez la Table de Hasard. Si votre total d'ENDURANCE actuel est supérieur à 20, ajoutez 2 au chiffre que vous avez tiré.",
      "Si le résultat obtenu est inférieur ou égal à 3, rendez-vous au 3.",
      "Si ce résultat est supérieur ou égal à 4, rendez-vous au. 263."
    ],
    "choices": [
      {
        "text": "rendez-vous au 3.",
        "targetId": "3"
      }
    ]
  },
  "175": {
    "id": "175",
    "text": [
      "Alors que le pouvoir de votre Grande Discipline anéantit peu à peu l'écran psychique qui protégeait son esprit de toute influence extérieure, le garde s'efface à contrecœur pour vous laisser entrer dans Mogaruith. Le pas cadencé des troupes de Vazhags retentit sur les pavés de la grande cour intérieure, et l'écho des ordres aboyés par les sergents se répercute d'un rempart à l'autre.",
      "Vous contournez la place en empruntant un chemin de ronde couvert et vous vous dirigez vers un escalier qui descend jusqu'à un grand portail encastré au pied de la citadelle. Arrivé dans la partie nord du donjon, vous apercevez soudain trois Druides de Cener qui marchent de front dans votre direct tion.",
      "Vous vous aplatissez dans l'embrasure d'une porte avant qu'ils ne vous aperçoivent.",
      "Rendez-vous au 98."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 98.",
        "targetId": "98"
      }
    ]
  },
  "176": {
    "id": "176",
    "text": [
      "Vous empoignez votre arc, vous sortez une flèche de votre carquois puis, avec une admirable précision, vous visez la silhouette fuyante du druide. Une fraction de seconde plus tard, votre trait part dans un sifflement menaçant.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de la Science des Armes (avec un arc), ajoutez 3 au chiffre tiré.",
      "Si le résultat est inférieur ou égal à 5, rendez-vous au 232.",
      "S'il est supérieur à 5, rendez-vous au 317."
    ],
    "choices": [
      {
        "text": "rendez-vous au 232.",
        "targetId": "232"
      },
      {
        "text": "rendez-vous au 317.",
        "targetId": "317"
      }
    ]
  },
  "177": {
    "id": "177",
    "text": [
      "« Alerte, alerte ! Un espion ! » Alors que retentissent ces cris d'alarme, vous vous précipitez tête baissée vers l'échelle et commencez à grimper vers une petite plateforme, située juste en dessous de celle qui supporte le treuil. Vous n'êtes plus qu'à six barreaux de votre but, lorsque vous vous trouvez subitement confronté à deux Disciples de Vashna qui vous guettent par- dessus la rambarde de la plate-forme.",
      "Tout en vous abreuvant d'insultes, ils tentent de vous faire perdre l'équilibre avec la pointe de leurs lances.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï, et si vous souhaitez y avoir recours, rendez-vous au 137.",
      "Si vous maîtrisez et si vous désirez utiliser la Grande Discipline de la Magie des Anciens, rendez-vous au 345.",
      "Si vous ne maîtrisez ni l'une ni l'autre de ces Grandes Disciplines, ou que vous ne souhaitiez pas vous en servir, rendez-vous au 86."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï, et si vous souhaitez y avoir recours, rendez-vous au 137.",
        "targetId": "137"
      },
      {
        "text": "Si vous maîtrisez et si vous désirez utiliser la Grande Discipline de la Magie des Anciens, rendez-vous au 345.",
        "targetId": "345"
      },
      {
        "text": "Si vous ne maîtrisez ni l'une ni l'autre de ces Grandes Disciplines, ou que vous ne souhaitiez pas vous en servir, rendez-vous au 86.",
        "targetId": "86"
      }
    ]
  },
  "178": {
    "id": "178",
    "text": [
      "Vous prenez soin de cacher le corps de vos ennemis du mieux possible avant de quitter la caverne. Pendant plus de cinq kilomètres, vous longez le tunnel ouest et, malgré votre appréhension croissante, vous ne faites aucune mauvaise rencontre, à l'exception de quelques chauves-souris affolées et d'un malheureux serpent.",
      "Peu à peu, le tunnel s'enfonce sous les monts Skardos. L'air se rafraîchit et devient de plus en plus humide. Vous pressentez qu'il y a une nappe d'eau dans les parages et vous n'êtes pas surpris d'apercevoir, quelque temps après, des reflets miroitants qui jouent sur la voûte du souterrain.",
      "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 67.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 244."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 67.",
        "targetId": "67",
        "requiredDiscipline": "Intuition"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 244.",
        "targetId": "244"
      }
    ]
  },
  "179": {
    "id": "179",
    "text": [
      "Utilisant votre science Magnakai élémentaire, vous examinez attentivement la serrure et vous découvrez que ce mur est en réalité une porte dérobée. Vous essayez alors d'en forcer l'ouverture, mais elle est protégée par un sortilège puissant contre lequel vous ne pouvez rien.",
      "A contrecœur, vous revenez donc sur vos pas et, de nouveau arrivé en haut de l'escalier, vous poursuivez votre chemin en empruntant le passage qui se dirige vers l'ouest.",
      "Rendez-vous au 271."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 271.",
        "targetId": "271"
      }
    ]
  },
  "180": {
    "id": "180",
    "text": [
      "Vous vous écartez vivement pour échapper aux lianes rampantes, puis vous vous élancez vers la clairière. Hélas ! à peine avez-vous fait quelques pas qu'un tentacule vous lacère les jambes. (Vous perdez 4 points d'ENDURANCE.) Vous tombez à genoux en poussant un cri de douleur, mais vous trouvez la force de vous relever prestement et de fuir avant de recevoir de nouvelles blessures.",
      "Vous traversez la clairière sans vous retourner, puis vous vous hâtez de poursuivre votre route vers l'est.",
      "Rendez-vous au 242."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 242.",
        "targetId": "242"
      }
    ],
    "damage": 4
  },
  "181": {
    "id": "181",
    "text": [
      "Vous vous faufilez habilement parmi la foule des femelles Vazhags qui s'empressent frénétiquement autour du chariot. Dans sa précipitation, l'une d'elles vous coupe le chemin et vous vous arrêtez de justesse afin de ne pas la heurter de plein fouet. Mais au moment où vous vous remettez en marche, un garde Vazhag se fait violemment bousculer et vous tombe pratiquement dans les bras.",
      "Sans hésiter, vous l'empoignez fermement par le col et vous le traînez dans l'ombre de la paroi avant qu'il puisse alerter ses congénères. C'est alors que vous sentez quelque chose remonter le long de votre bras. Dans un sursaut de répulsion, vous découvrez qu'il s'agit d'un boisseau de puces noires qui émi-grent de la tignasse du Vazhag pour venir se réfugier sur vous !",
      "Dégoûté par cette vision, vous relâchez sensiblement votre étreinte, et le Vazhag en profite pour appeler au secours. Ses compagnons réagissent immédiatement et avancent comme un seul homme dans votre direction, une lueur malveillante au fond des yeux.",
      "Si vous voulez les affronter, rendez-vous au 313.",
      "Si vous jugez préférable d'éviter le combat, vous pouvez vous enfuir par le portail; rendez-vous au 204."
    ],
    "choices": [
      {
        "text": "Si vous voulez les affronter, rendez-vous au 313.",
        "targetId": "313"
      },
      {
        "text": "Si vous jugez préférable d'éviter le combat, vous pouvez vous enfuir par le portail; rendez-vous au 204.",
        "targetId": "204"
      }
    ]
  },
  "182": {
    "id": "182",
    "text": [
      "Une bataille sanglante se déroule sur le Ghardoz, le grand pont qui relie l'État du Ruel au Royaume Libre de Slovie. La travée centrale est la proie des flammes et les abords sont jonchés de cadavres des deux armées. A l'extrémité du pont, soit à environ trois cents mètres, vous apercevez les étendards rouges de la Slovie qui flottent dans le vent chargé de suie.",
      "Plusieurs régiments d'infanterie sont postés sur la rive, attendant nerveusement de recevoir l'ordre de donner l'assaut. Après avoir observé ce triste spectacle, vos regards se tournent vers les eaux tumultueuses de la Stom et vous décidez de braver le courant pour tenter de gagner la berge opposée.",
      "Vous renvoyez votre cheval vers la forêt, puis vous pénétrez lentement dans les eaux glaciales de la rivière. L'eau vous arrive à peine à la taille, mais déjà vous voilà pris dans le courant ! Il vous entraîne en aval à vive allure, directement vers le pont et la bataille qui y fait rage.",
      "Pour comble de malchance, une grande partie du parapet s'écroule au moment même où vous passez sous l'arche centrale.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse et celle de l'Invisibilité, ajoutez 3 au chiffre tiré. Si le résultat final est inférieur ou égal à 3, rendez- vous au 134.",
      "Si ce résultat est supérieur, rendez-vous au 350."
    ],
    "choices": [
      {
        "text": "rendez-vous au 350.",
        "targetId": "350"
      }
    ]
  },
  "183": {
    "id": "183",
    "text": [
      "Cherchant un endroit sûr pour gagner la terre ferme, vous nagez lentement vers un groupe de rochers à moitié enfoncés dans le sol meuble de la berge. Lorsque l'eau vous arrive à la taille, vous émergez péniblement et vous vous laissez tomber derrière le rocher le plus proche afin de reprendre votre souffle.",
      "Trente secondes plus tard, l'écho d'un couinement agressif retentit sous la voûte de la caverne et un frisson glacé vous parcourt le corps : vous êtes repéré ! D'un geste vif, vous essuyez l'eau qui ruisselle sur vos paupières et vous apercevez un Vazhag qui vocifère au milieu du pont.",
      "Penché au-dessus de la rambarde, il agite sa lance en direction des rochers pour indiquer votre cachette à ses congénères. Sur ordre du druide qui commande leur troupe, les Vazhags traversent aussitôt le pont au pas de charge en brandissant leurs armes.",
      "Vous jetez un regard anxieux autour de vous dans l'espoir de trouver une échappatoire, mais en vain. De la berge nord où vous avez échoué, la seule issue possible est le tunnel. Or, on ne peut accéder à ce tunnel que par le pont-levis... Déjà les premiers Vazhags sautent sur la berge.",
      "La bataille est imminente. Vous devez prendre une décision sur-le-champ si vous souhaitez rester en vie.",
      "Si vous voulez plonger de nouveau dans le lac et vous éloigner à la nage, rendez-vous au 52.",
      "Si vous préférez attendre les Vazhags de pied ferme, rendez-vous au 258."
    ],
    "choices": [
      {
        "text": "Si vous voulez plonger de nouveau dans le lac et vous éloigner à la nage, rendez-vous au 52.",
        "targetId": "52"
      },
      {
        "text": "Si vous préférez attendre les Vazhags de pied ferme, rendez-vous au 258.",
        "targetId": "258"
      }
    ]
  },
  "184": {
    "id": "184",
    "text": [
      "La créature résiste à votre volonté, mais l'effort psychique qu'elle a dû fournir pour y parvenir l'a épuisée. Toutefois, vous remarquez que sa main osseuse glisse insensiblement vers un bouton situé sur le côté de son bureau. De toute évidence, il s'agit d'une alarme.",
      "Si vous possédez un arc et que vous vouliez l'utiliser, rendez-vous au 39.",
      "Si vous n'avez pas d'arc, ou si vous ne souhaitez pas vous en servir, rendez-vous au 251."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et que vous vouliez l'utiliser, rendez-vous au 39.",
        "targetId": "39"
      },
      {
        "text": "Si vous n'avez pas d'arc, ou si vous ne souhaitez pas vous en servir, rendez-vous au 251.",
        "targetId": "251"
      }
    ]
  },
  "185": {
    "id": "185",
    "text": [
      "Vous levez la main droite et prononcez les paroles magiques que Banedon vous a enseignées, puis vous concentrez tout le pouvoir du sortilège sur vos trois premiers doigts. Instantanément, vous ressentez une atroce sensation de brûlure : vous perdez 2 points d'EN-DURANCE.",
      "En dépit de vos souffrances, vous résistez à la tentation d'abandonner la manœuvre et vous pointez vos doigts vers la silhouette fuyante du druide. Il se produit aussitôt un craquement sonore, suivi de près par un éclair bleuté qui jaillit du bout de vos doigts et frappe le druide comme s'il avait reçu un coup de marteau entre les deux omoplates.",
      "Il culbute en avant et tombe dans un buisson d'épineux. Grognant de rage et de douleur, il tente aussitôt de se relever tout en cherchant à mettre la main sur sa baguette en or. Guidés par quelque instinct surnaturel, ses doigts se referment instantanément sur elle, mais avant qu'il puisse s'en servir, vous vous ruez sur lui, l'arme au poing, pendant qu'il se trouve encore à terre.",
      "DRUIDE DE CENER HABILETÉ : 20 ENDURANCE : 28 Si vous sortez vainqueur de cette rencontre, rendez-vous au 349."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de cette rencontre, rendez-vous au 349.",
        "targetId": "349"
      }
    ],
    "combat": {
      "name": "DRUIDE DE CENER",
      "combatSkill": 20,
      "endurance": 28,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "186": {
    "id": "186",
    "text": [
      "Vous n'êtes plus qu'à dix mètres du porche, quand soudain un rugissement tonitruant fait trembler les murs. Vous vous mettez à courir, espérant pouvoir gagner l'issue à temps mais, presque simultanément, une vision terrifiante brise net votre élan. Du renfoncement vient de surgir une créature qui semble tout droit sortie d'un cauchemar.",
      "Elle se tient debout sur deux pattes trapues, couvertes d'écaillés épineuses, et quatre tentacules munis de griffes acérées partent de son torse poilu comme celui d'un ours. Sa grosse tête ronde se balance mollement au bout d'un cou arqué. Au milieu des replis de peau rongée par la maladie saillent deux énormes yeux globuleux, et une balafre humide, gonflée de sang, lui tient lieu de bouche.",
      "Une longue queue hérissée de pointes achève de parfaire ce charmant portrait. Soudain, avec une vivacité insoupçonnable, la bête se jette sur vous en fouettant l'air de ses tentacules. DEGRADON HABILETÉ: 49 ENDURANCE: 36 Cette créature est insensible aux disciplines psychiques élémentaires.",
      "Vous ne pourrez l'atteindre mentalement que si vous maîtrisez la Grande Discipline du Foudroiement Psychique.",
      "Si vous sortez vainqueur de ce terrible combat, rendez-vous au 40."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce terrible combat, rendez-vous au 40.",
        "targetId": "40"
      }
    ],
    "combat": {
      "name": "DEGRADON",
      "combatSkill": 49,
      "endurance": 36,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "187": {
    "id": "187",
    "text": [
      "Votre arc apparaît comme par enchantement au creux de votre main et, dans un même mouvement, vous sortez une flèche, vous tendez la corde au maximum et vous vous tenez prêt à tirer. Maintenant qu'il se sait protégé par son affreux monstre canin, le Vazhag sort calmement de son coin en lui commandant d'attaquer.",
      "En réponse à ses ordres, la créature bande ses muscles puissants et se prépare à vous sauter à la gorge.",
      "Si vous voulez lui décocher une flèche, rendez-vous au 31.",
      "Si vous préférez viser le Vazhag, rendez-vous au 157."
    ],
    "choices": [
      {
        "text": "Si vous voulez lui décocher une flèche, rendez-vous au 31.",
        "targetId": "31"
      },
      {
        "text": "Si vous préférez viser le Vazhag, rendez-vous au 157.",
        "targetId": "157"
      }
    ]
  },
  "188": {
    "id": "188",
    "text": [
      "Par son extrême fulgurance, la boule de feu qui fuse sur vous menace de neutraliser tous vos sens.",
      "Si vous maîtrisez la Grande Discipline du Nexus, rendez-vous au 203.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 299."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Nexus, rendez-vous au 203.",
        "targetId": "203"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 299.",
        "targetId": "299"
      }
    ]
  },
  "189": {
    "id": "189",
    "text": [
      "Vous longez ce passage souterrain depuis près d'une demi-heure, quand soudain votre infaillible instinct vous prévient d'un éventuel danger. Pour l'instant, vous ne sentez qu'une désagréable odeur de moisi, vaguement celle de légumes pourris, mais qui va grandissant au fur et à mesure que vous avancez dans l'obscurité.",
      "Si vous renoncez à continuer dans cette direction, vous pouvez rebrousser chemin jusqu'à la fissure.",
      "Dans ce cas, rendez-vous au 332.",
      "Si vous persistez dans votre choix, rendez-vous au 16."
    ],
    "choices": [
      {
        "text": "rendez-vous au 332.",
        "targetId": "332"
      },
      {
        "text": "Si vous persistez dans votre choix, rendez-vous au 16.",
        "targetId": "16"
      }
    ]
  },
  "190": {
    "id": "190",
    "text": [
      "Tandis que vous avancez à grand-peine sur l'étroit sentier encombré de broussailles épineuses, vous sentez que les Vazhags vous suivent à la trace et qu'ils gagnent régulièrement du terrain sur vous. En désespoir de cause, vous quittez brusquement le sentier, vous vous frayez un chemin au milieu de la végétation inextricable, puis vous utilisez votre talent de camouflage pour effacer toute trace de votre présence.",
      "Dans leur précipitation, les Hommes-Rats dépassent l'endroit où vous êtes tapi. Vous les entendez s'éloigner en reniflant, mais cependant vous ne bougez pas de votre cachette. Bien vous en a pris car, quelques instants plus tard, ils font demi-tour et repassent près de vous en se désolant d'avoir perdu votre piste.",
      "Le Druide de Cener les accueille en vitupérant contre leur incapacité et, d'un coup de baguette, il réduit en cendres un pauvre rongeur qui passait à sa portée. Cela ne suffit pas à calmer sa mauvaise humeur. 11 continue à crier sa rage et son mécontentement et, au milieu des injures et des menaces qu'il profère, vous l'entendez grogner qu'il doit faire son rapport à l'Archidruide Cadak afin de le prévenir qu'un espion rôde en toute liberté dans la forêt.",
      "Vous savez qu'il faut à tout prix l'empêcher de donner l'alerte à Mogaruith, car cela mettrait votre mission en péril, sans parler de votre propre vie.",
      "Si vous possédez un arc et des flèches et que vous souhaitiez vous en servir, rendez-vous au 104.",
      "Si vous maîtrisez la Grande Discipline de la Magie des Anciens et que vous souhaitiez y avoir recours, rendez-vous au 144.",
      "Si vous maîtrisez et si vous voulez utiliser la Grande Discipline de l'Alchimie Kaï, rendez-vous au 185.",
      "Enfin, si vous ne maîtrisez aucune des Grandes Disciplines ci-dessus, ou si vous ne désirez pas vous en servir, rendez-vous au 90."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et des flèches et que vous souhaitiez vous en servir, rendez-vous au 104.",
        "targetId": "104"
      },
      {
        "text": "Si vous maîtrisez la Grande Discipline de la Magie des Anciens et que vous souhaitiez y avoir recours, rendez-vous au 144.",
        "targetId": "144"
      },
      {
        "text": "Si vous maîtrisez et si vous voulez utiliser la Grande Discipline de l'Alchimie Kaï, rendez-vous au 185.",
        "targetId": "185"
      },
      {
        "text": "Enfin, si vous ne maîtrisez aucune des Grandes Disciplines ci-dessus, ou si vous ne désirez pas vous en servir, rendez-vous au 90.",
        "targetId": "90"
      }
    ]
  },
  "191": {
    "id": "191",
    "text": [
      "La lourde chaîne cingle l'air avec une violence inouïe et vous plongez la tête la première pour éviter d'être décapité. Malheureusement, vous n'avez pas réagi assez vite et elle vous frappe à l'épaule : vous perdez 3 points d'ENDURANCE. Sans perdre une seconde, vous vous remettez debout, vous vous penchez par-dessus la rambarde de la plate-forme et, avec fascination, vous regardez le gigantesque chaudron tomber de toute sa hauteur vers le laboratoire.",
      "Rendez-vous au 220."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 220.",
        "targetId": "220"
      }
    ],
    "damage": 3
  },
  "192": {
    "id": "192",
    "text": [
      "Faisant preuve de toute votre force et de toute votre agilité, vous escaladez, mètre par mètre, la paroi rocheuse. Votre ascension passe inaperçue, jusqu'au moment où vous délogez par mégarde un fragment de roche en cherchant une prise du bout du pied.",
      "Apparemment, la chance n'est pas avec vous, car le caillou atterrit avec un petit bruit sec sur le museau d'un des chiens de guerre. Ce dernier réagit instantanément ; il se jette sauvagement sur la paroi et aboie furieusement en levant la tête dans votre direction.",
      "Alertés par les cris du molosse, les gardes Vazhags se déploient au pied du mur et vous voyez avec horreur qu'ils sont déjà en train d'armer leurs arcs. Au mépris de toute prudence, et bien que vos mains soient en sang, vous vous hâtez de grimper vers l'étroite ouverture, dans l'espoir de l'atteindre avant que les Hommes-Rats ouvrent le tir.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï, rendez-vous au 326.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 145."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï, rendez-vous au 326.",
        "targetId": "326"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 145.",
        "targetId": "145"
      }
    ]
  },
  "193": {
    "id": "193",
    "text": [
      "Après avoir observé la route qui mène au pont-levis pendant plus d'une heure, vous en arrivez à la conclusion que le trafic s'effectue essentiellement dans une direction : hors de Mogaruith, et ensuite vers l'est. De temps à autre, cependant, un chariot bâché passe le pont pour entrer dans la forteresse.",
      "Ils sont généralement tirés par des Ghorkas et escortés par des Vazhags couverts de bandages. Les sentinelles les laissent pénétrer directement dans le donjon, sans aucune vérification. Selon vous, ces chariots transportent les soldats qui ont été blessés au cours d'une bataille.",
      "Une idée commence dès lors à germer dans votre tête: pourquoi ne pas profiter d'un de ces chariots pour entrer, incognito, dans Mogaruith ?",
      "Si vous voulez tenter de monter à bord du prochain chariot qui passera sur la route, rendez-vous au 34.",
      "Si vous jugez préférable de vous en remettre à vous seul et à votre expérience Kaï pour entrer dans Mogaruith, rendez-vous au 318."
    ],
    "choices": [
      {
        "text": "Si vous voulez tenter de monter à bord du prochain chariot qui passera sur la route, rendez-vous au 34.",
        "targetId": "34"
      },
      {
        "text": "Si vous jugez préférable de vous en remettre à vous seul et à votre expérience Kaï pour entrer dans Mogaruith, rendez-vous au 318.",
        "targetId": "318"
      }
    ]
  },
  "194": {
    "id": "194",
    "text": [
      "Du plus profond de votre être, vous ordonnez à vos forces mentales de dresser une barrière indestructible pour préserver intact votre psychisme. Les ondes de choc maléfiques viennent s'écraser sur cet écran protecteur et se dispersent en une multitude de vaguelettes inoffensives qui vont mourir sur les rivages de votre inflexible volonté.",
      "Mais alors que les effets de l'attaque psychique s'évanouissent, vous sentez qu'une autre entité hostile s'apprête à entrer en action. C'est alors que s'élève du tréfonds des gouffres un grondement terrifiant. De chacun des puits obscurs monte une mystérieuse et énorme chose et, au moment précis où les glapissements des goules atteignent leur paroxysme, vous voyez surgir trois têtes de chats gigantesques, perchées au bout d'un corps reptilien aussi épais qu'un tronc d'arbre.",
      "Les monstres découvrent leurs crocs en sifflant et, d'une brève secousse, se débarrassent des ossements et débris humains restés englués dans leur pelage hérissé. A la vue de ces créatures de cauchemar, vous ne pouvez réprimer un cri de désespoir. Votre plainte pathétique se perd parmi les hurlements des goules, mais les monstres félino-reptiliens semblent toutefois les avoir perçus.",
      "Ils réagissent instantanément en rampant lentement vers l'endroit où vous vous trouvez.",
      "Si vous maîtrisez la Grande Discipline de la Puissance Psychique, rendez-vous au 80.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez- vous au 38."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de la Puissance Psychique, rendez-vous au 80.",
        "targetId": "80",
        "requiredDiscipline": "Puissance Psychique"
      }
    ]
  },
  "195": {
    "id": "195",
    "text": [
      "Faisant appel à toutes vos capacités mentales et physiques, vous vous hissez hors de l'eau et repliez vos genoux sous votre menton. Vous réussissez à coincer le bout de vos bottes entre deux traverses de bois et, grâce à votre Grande Discipline de l'Invisibilité, vous vous fondez littéralement dans l'ombre du pont.",
      "Vous restez suspendu dans cette confortable position, parfaitement immobile, pendant tout le temps où les Vazhags scrutent méticuleusement la surface et les abords du lac. Malgré l'acuité de leurs sens, ils passent à quelques centimètres de vous sans noter votre présence et retournent faire part de leur échec au Cénérien qui les commande.",
      "Vous les entendez traverser le pont au petit trot, puis s'arrêter près de la cage où sont enfermés les Tzargs. Ils en font sortir un, referment la porte de la cage à clé et s'éloignent enfin par le passage sud. Vous attendez que plusieurs minutes s'écoulent avant de vous extirper de votre cachette, après quoi vous vous élancez vers le passage nord, sans même prendre le temps de vous retourner.",
      "Rendez-vous au 306."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 306.",
        "targetId": "306"
      }
    ]
  },
  "196": {
    "id": "196",
    "text": [
      "Le cœur battant, vous passez devant le renfoncement sur la pointe des pieds, l'arme au poing, prêt à frapper au cas où la créature endormie viendrait subitement à s'éveiller. Fort heureusement, votre science Kaï vous sert à merveille et vous atteignez le porche sans encombre.",
      "Au-delà, un petit passage vous conduit à un embranchement traversé de gauche à droite par un couloir plus large. Il émane de telles forces maléfiques dans cette partie souterraine de Mogaruith que vous en avez la chair de poule. Avant de poursuivre votre chemin, vous adressez une prière silencieuse au dieu Kaï, votre créateur, afin qu'il vous protège et vous guide.",
      "Votre intuition vous incite à tourner à gauche et, après quelques minutes de marche, vous débouchez dans une pièce où un grand escalier de marbre noir dessert plusieurs niveaux, perdus dans des hauteurs ténébreuses. A l'opposé de cet escalier monumental, vous apercevez une grande porte forgée dans un métal vert que vous n'arrivez pas à identifier.",
      "Cette étrange matière émet des radiations palpitantes qui illuminent les symboles gravés sur les parois et le sol de la pièce. Vous vous concentrez sur ces signes mystérieux et, quelques instants plus tard, vous frémissez en comprenant leur signification.",
      "Rendez-vous au 300."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 300.",
        "targetId": "300"
      }
    ]
  },
  "197": {
    "id": "197",
    "text": [
      "Votre arme s'abat sur le crâne de la créature avec une telle force qu'elle l'envoie rouler à terre, où elle reste quelques secondes à osciller comme un gros œuf mou avant de s'immobiliser définitivement.",
      "Rendez-vous au 23."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 23.",
        "targetId": "23"
      }
    ]
  },
  "198": {
    "id": "198",
    "text": [
      "Vous attendez patiemment que la lueur vacillante des torches se soit totalement évanouie dans les ténèbres avant de sortir de votre cachette et de vous aventurer de nouveau dans la caverne. A moins que vous ne maîtrisiez la Grande Discipline de l'Art de la Chasse, profitez de cet instant de répit pour prendre un Repas, sans quoi vous perdriez 3 points d'ENDURANCE.",
      "Vous longez ensuite le tunnel ouest sur plus de cinq kilomètres mais, malgré votre appréhension croissante, vous ne croisez sur votre chemin que quelques petits serpents inoffensifs et des nuées de chauves- souris qui s'enfuient à tire-d'aile à votre approche.",
      "Peu à peu, le tunnel s'enfonce sous les monts Skardos. L'air se rafraîchit et devient de plus en plus humide. Vous pressentez qu'il y a une nappe d'eau dans les parages et vous n'êtes pas surpris d'apercevoir, quelque temps après, des reflets miroitants qui jouent sur la voûte du souterrain.",
      "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 67.",
      "Sinon, rendez-vous au 244."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 67.",
        "targetId": "67",
        "requiredDiscipline": "Intuition"
      },
      {
        "text": "Sinon, rendez-vous au 244.",
        "targetId": "244"
      }
    ]
  },
  "199": {
    "id": "199",
    "text": [
      "Le flux d'énergie heurte le Glaive de Sommer dans une gerbe d'étincelles mais, malgré la violence du choc, vous parvenez à rester debout et à garder fermement votre arme en main. Par ailleurs, la lame magique vous a directement transmis une partie de l'énergie qui était pourtant dirigée contre vous au départ ; cette transmutation vous permet de gagner 3 points d'ENDURANCE.",
      "« Pour le Sommerlund ! », vous écriez-vous en retournant la décharge à son envoyeur. Dans un éclair aveuglant, suivi d'un craquement de tonnerre, la baguette du druide se transforme en une boule de feu. L'impact de la déflagration projette votre adversaire contre le mur du fond.",
      "Vous le voyez s'affaler et rester inerte sur le sol. Convaincu qu'il ne représente plus aucun danger pour vous désormais, vous rengainez votre arme en contemplant la dépouille de votre adversaire. Rendez- vous au 101."
    ],
    "choices": []
  },
  "200": {
    "id": "200",
    "text": [
      "La porte donne sur un oratoire, une sinistre chapelle où les Druides de Cener vénèrent le mal et pratiquent d'affreux sacrifices en hommage à leurs dieux assoiffés de sang. Plusieurs dizaines de personnes sont agenouillées face à un autel de marbre rouge.",
      "Elles psalmodient des incantations en suivant les paroles sur des livres reliés de tissu noir. Sur tous les murs s'étalent de morbides ornements ; crânes, peaux parcheminées, bannières en loques et autres sombres tributs qui attestent la nature de la divinité adorée en ces lieux : la puissance du mal, de la mort et de la déchéance.",
      "Vous observez l'assemblée avec dégoût. Ce sont pour la plupart des Cénériens, mais vous dénombrez aussi, parmi eux, quelques vieilles connaissances; des Disciples de Vashna, des Drakkarims, des parias Vassagoniens et même des Gloks. De toute évidence, ce sont des rescapés de l'armée des Seigneurs des Ténèbres qui sont venus trouver refuge à Mogaruith après la défaite de leurs maîtres.",
      "Soudain, un bruit vous avertit que quelqu'un se dirige vers l'antichambre. Pour éviter d'être surpris, vous pénétrez dans l'oratoire et vous vous cachez derrière un pilier. Quelques instants plus tard, trois druides font leur apparition ; vous les voyez fermer la porte derrière eux et prendre place parmi les fidèles.",
      "Rendez-vous au 265."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 265.",
        "targetId": "265"
      }
    ]
  },
  "201": {
    "id": "201",
    "text": [
      "Vous vous accroupissez le long de la paroi et attendez là, le cœur battant, tandis que se rapproche le martèlement des pas. Vous apercevez tout d'abord la lumière vacillante des torches qui projettent des taches blafardes sur le sol. Puis les créatures pénètrent une à une dans la caverne et vous pouvez distinguer leurs traits répugnants.",
      "C'est une patrouille composée de six Vazhags. Ils sont de la taille des jeunes Sommerlundois et sont équipés d'armes rustiques et rouillées. Leurs corps de rat sont revêtus d'éléments disparates provenant sans doute d'uniformes de soldats humains. Ils ont beau être à plus de six mètres de vous, la puanteur qu'ils dégagent est tellement insupportable que vous devez faire appel à votre maîtrise du Nexus pour réprimer les haut-le-cœur qui vous assaillent.",
      "Les Vazhags font halte au pied de l'escalier de pierre et communiquent entre eux par des couinements dissonants qui vous font penser à des portes qui grincent. Tout en baragouinant, ils ne cessent de jeter des regards furtifs vers le souterrain ouest, comme s'ils attendaient l'arrivée d'une autre patrouille.",
      "Au bout de quelques minutes, effectivement, quelqu'un d'autre arrive. A en juger par sa taille - celle d'un homme adulte -, il ne peut pas s'agir d'un de leurs congénères. Néanmoins, il vous est impossible d'affirmer que c'est un être humain, car le capuchon de sa coule écarlate dissimule entièrement son visage.",
      "Les Vazhags s'interrompent dès que le mystérieux personnage leur fait signe d'avancer vers le tunnel sud. L'espace d'une fraction de seconde, vous apercevez l'éclat du masque vert qui protège son visage et vous identifiez aussitôt cet accessoire ; c'est le masque de verre rituel que portent les Druides de Cener.",
      "Rendez-vous au 348."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 348.",
        "targetId": "348"
      }
    ]
  },
  "202": {
    "id": "202",
    "text": [
      "Vous vous tenez prêt à affronter ce qui sera, vous le savez, un combat sans merci. Déjà les membres tenta-culaires de votre adversaire se contorsionnent nerveusement pour vous prendre à la gorge. STRAGNAH HABILETÉ: 36 ENDURANCE: 39 Cette créature est insensible à toute forme d'attaque psychique.",
      "Si vous l'emportez sur votre ennemi, rendez-vous au 327."
    ],
    "choices": [
      {
        "text": "Si vous l'emportez sur votre ennemi, rendez-vous au 327.",
        "targetId": "327"
      }
    ],
    "combat": {
      "name": "STRAGNAH",
      "combatSkill": 36,
      "endurance": 39,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "203": {
    "id": "203",
    "text": [
      "Les flammes vous enveloppent mais vous ne ressentez aucune brûlure. Grâce à votre Grande Discipline, ce feu ardent est pour vous aussi doux qu'une brise d'été. Vous savourez doublement votre victoire en voyant la mine déconfite de votre ennemi.",
      "Rendez-vous au 17."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 17.",
        "targetId": "17"
      }
    ]
  },
  "204": {
    "id": "204",
    "text": [
      "Poursuivi par les couinements rageurs des Vazhags, vous vous élancez sous le portail, puis vous vous engouffrez dans le souterrain sinueux qui le prolonge. Vous courez ainsi pendant près d'un kilomètre, mais un spectacle peu rassurant vous attend à un détour: une autre patrouille d'Hommes-Rats marche droit dans votre direction.",
      "Bien que vous ayez largement devancé vos précédents poursuivants, l'écho grandissant de leurs cris vous informe qu'ils sont toujours à vos trousses. Vous voilà pris entre deux feux ! Parcourant les alentours d'un regard anxieux, vous cherchez le moyen d'échapper à tout prix aux Vazhags qui se rapprochent inexorablement de part et d'autre.",
      "Si vous voulez faire usage de votre science Kaï pour vous dissimuler à leurs regards, rendez-vous au 82.",
      "Si vous préférez tendre un piège à la patrouille la plus proche, afin de fendre ses rangs et fuir avant d'être rattrapé par vos premiers poursuivants, rendez-vous au 62."
    ],
    "choices": [
      {
        "text": "Si vous voulez faire usage de votre science Kaï pour vous dissimuler à leurs regards, rendez-vous au 82.",
        "targetId": "82"
      },
      {
        "text": "Si vous préférez tendre un piège à la patrouille la plus proche, afin de fendre ses rangs et fuir avant d'être rattrapé par vos premiers poursuivants, rendez-vous au 62.",
        "targetId": "62"
      }
    ]
  },
  "205": {
    "id": "205",
    "text": [
      "Vous longez un souterrain circulaire pendant quelques minutes avant d'aboutir à un escalier qui descend. Juste avant les marches, vous remarquez une porte en bois encastrée dans le mur. Lorsque vous la poussez du bout du pied, elle s'entrouvre légèrement.",
      "Si vous souhaitez aller voir ce qu'il y a derrière cette porte, rendez-vous au 239.",
      "Si vous préférez descendre l'escalier directement, sans vous soucier de la porte, rendez-vous au 347."
    ],
    "choices": [
      {
        "text": "Si vous souhaitez aller voir ce qu'il y a derrière cette porte, rendez-vous au 239.",
        "targetId": "239"
      },
      {
        "text": "Si vous préférez descendre l'escalier directement, sans vous soucier de la porte, rendez-vous au 347.",
        "targetId": "347"
      }
    ]
  },
  "206": {
    "id": "206",
    "text": [
      "Au lever du jour, le soleil perce enfin la couche nuageuse et vous offrez avec délice votre visage aux rayons bienfaisants. Malheureusement, l'éclaircie n'est que de courte durée ; les nuages se referment au-dessus de votre tête et vous vous retrouvez de nouveau dans la triste pénombre de la forêt.",
      "Durant la nuit, la piste vous a conduit hors de la vallée jusqu'à un plateau surmonté d'un éperon de roche grise, hérissé de quelques arbres rabougris et noircis par la foudre. Vous apercevez, cachés dans l'ombre du surplomb, trois puits de mines creusés côte, à côte.",
      "Vous ne savez pas ce qu'il peut y avoir au fond, mais vous sentez toutefois qu'il s'en dégage une forte aura de mal.",
      "Si vous voulez utiliser votre Discipline Magnakaï de l'Intuition, de façon à pouvoir détecter d'éventuelles influences psychiques, rendez- vous au 111.",
      "Si vous ne souhaitez pas utiliser vos talents à cette fin, rendez-vous au 32."
    ],
    "choices": [
      {
        "text": "Si vous ne souhaitez pas utiliser vos talents à cette fin, rendez-vous au 32.",
        "targetId": "32"
      }
    ]
  },
  "207": {
    "id": "207",
    "text": [
      "Vous concentrez tout votre pouvoir sur le Tzarg afin de le pousser à prendre le passage que vous avez vous-même emprunté pour arriver jusqu'ici. Après une brève résistance, la créature se soumet à votre volonté. Elle s'éloigne rapidement en se dandinant et en reniflant de plus belle.",
      "Persuadés que leur limier est sur une piste, les Vazhags s'empressent de le suivre de très près. Vous attendez patiemment que le bruit de leurs pas s'évanouisse, puis vous sortez de votre cachette et quittez les lieux en empruntant l'escalier.",
      "Rendez-vous au 75."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 75.",
        "targetId": "75"
      }
    ]
  },
  "208": {
    "id": "208",
    "text": [
      "Le scribe vous fixe d'un regard empreint de doute.",
      "« L'archidruide est absent pour le moment, vous dit-il en reprenant sa plume. Dictez-moi votre rapport et je veillerai à ce qu'il lui parvienne aujourd'hui même. » En vous approchant du bureau, vous constatez que cet étrange personnage n'a pas de jambes.",
      "Son tronc bulbeux repose sur un tabouret creux, tel un œuf dans un coquetier. Il plonge sa plume d'oie dans l'encrier et s'apprête à écrire sous votre dictée.",
      "«Je vous écoute, frère », reprend-il avec une pointe d'impatience.",
      "Si vous voulez attaquer cette créature, rendez-vous au 310.",
      "Si vous préférez tenter de le leurrer en inventant de fausses informations, rendez-vous au 108."
    ],
    "choices": [
      {
        "text": "Si vous voulez attaquer cette créature, rendez-vous au 310.",
        "targetId": "310"
      },
      {
        "text": "Si vous préférez tenter de le leurrer en inventant de fausses informations, rendez-vous au 108.",
        "targetId": "108"
      }
    ]
  },
  "209": {
    "id": "209",
    "text": [
      "Vous ordonnez aux chiens de guerre d'arrêter leur attaque. Grâce à votre Grande Discipline, ils vous obéissent immédiatement et deviennent doux comme des agneaux, baissant les yeux avec soumission et cessant leurs aboiements rauques pour de timides gémissements.",
      "Après avoir maté ces brutes féroces, vous entreprenez de retourner leur agressivité naturelle contre leurs maîtres. Horrifiés, les Vazhags regardent les molosses avancer vers eux avec une lueur cruelle au fond des prunelles, prêts à se livrer à une lutte mortelle.",
      "Les laissant s'entre-tuer, vous contournez la caverne et parvenez à vous échapper sans encombre. Une fois à l'air libre, vous restez quelques instants ébloui par la lumière du petit matin qui inonde les collines environnantes. Au fur et à mesure que vous avancez sur la piste qui part des cavernes, votre vision s'améliore et vous découvrez une vaste forêt qui s'étend vers l'est.",
      "Il se dégage une telle aura de mal de cet océan de verdure que vous ne tardez pas à l'identifier comme étant la forêt de Ruel. Constatant avec soulagement que personne ne vous a suivi, vous vous accordez un court moment de repos au milieu d'un groupe de rochers.",
      "Autour de vous, tout semble désert ; seul le tracé sinueux d'une route poussiéreuse qui serpente à travers les collines nues jusqu'à l'orée de la forêt rompt la monotonie du paysage. Après avoir consulté votre carte, vous en déduisez qu'il s'agit de la route de Skardos, la piste secrète que les Cénériens utilisent pour se rendre directement à Mogaruith.",
      "Vous décidez de l'emprunter mais auparavant (à moins que vous ne maîtrisiez la Grande discipline de l'Art de la Chasse), vous devez prendre un Repas ou bien perdre 3 points d'ENDURANCE.",
      "Rendez-vous au 230."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 230.",
        "targetId": "230"
      }
    ]
  },
  "210": {
    "id": "210",
    "text": [
      "Les Vazhags tremblent littéralement de peur. Ils se plient servilement à vos ordres et se mettent en route pour Mogaruith, mais à peine ont-ils fait quelques mètres qu'ils prennent leurs jambes à leur cou, vous abandonnant en compagnie du Zombie.",
      "Si vous possédez un arc et au moins 2 flèches, rendez-vous au 43.",
      "Sinon, rendez-vous au 89."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et au moins 2 flèches, rendez-vous au 43.",
        "targetId": "43"
      },
      {
        "text": "Sinon, rendez-vous au 89.",
        "targetId": "89"
      }
    ]
  },
  "211": {
    "id": "211",
    "text": [
      "La créature de feu semble se contracter et se dilater comme si elle respirait profondément puis, tout à coup, elle exhale un souffle d'énergie psychique qui vous transperce le crâne comme un fer rougi à blanc. La force et la soudaineté de cette attaque vous font vaciller, mais vos défenses Kaï se déclenchent instantanément pour vous protéger. (Vous perdez tout de même 3 points d'ENDURANCE.) Un hurlement de dépit mêlé de peur retentit alors : votre adversaire vient de réaliser que vous êtes capable de lui résister, et cela n'est apparemment pas pour lui plaire.",
      "Il reste à planer quelques minutes au-dessus de votre tête puis, dans un dernier hululement plaintif, il plonge dans les profondeurs obscures de la cage d'escalier et disparaît en un clin d'œil. Visiblement déçues par son départ, les créatures emprisonnées se traînent lamentablement au fond de leurs cellules, où elles finissent par se calmer.",
      "Quant à vous, relativement ébranlé par le conflit psychique que vous venez de mener de main de maître, vous contemplez pensivement l'escalier sombre qui s'ouvre à vos pieds. La tentation est forte d'aller y jeter un coup d'œil, mais vous savez pertinemment que ce serait pure folie.",
      "Vous tournez donc les talons et rebroussez chemin jusqu'à la bifurcation précédente, afin de vous engager cette fois-ci dans le tunnel nord.",
      "Rendez-vous au 85."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 85.",
        "targetId": "85"
      }
    ]
  },
  "212": {
    "id": "212",
    "text": [
      "Vous dégainez votre arme et passez à l'attaque à la vitesse de l'éclair, mais ce Cénérien est plus retors qu'il n'en a l'air. En un clin d'œil, il crée autour de lui un écran magique qui fait dévier votre coup et manque de vous faire perdre l'équilibre par la même occasion.",
      "Dans le même temps, vous sentez une onde psychique vous traverser le crâne et vous voyez les yeux froids du druide s'agrandir de stupéfaction, l'espace d'une seconde, quand il découvre votre véritable identité. Sitôt après, il profère une malédiction et un poignard à lame luminescente apparaît comme par enchantement dans sa main.",
      "Il se jette sur vous en cinglant l'air de son arme magique. GRAND PRÊTRE HABILETÉ: 47 ENDURANCE: 30 Votre ennemi est insensible aux disciplines psychiques élémentaires, mais vous pourrez cependant l'atteindre si vous maîtrisez la Grande Discipline du Foudroiement Psychique.",
      "Si vous sortez vainqueur de ce combat, rendez-vous au 340."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 340.",
        "targetId": "340"
      }
    ],
    "combat": {
      "name": "GRAND PRÊTRE",
      "combatSkill": 47,
      "endurance": 30,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "213": {
    "id": "213",
    "text": [
      "Tout d'abord, les Vazhags et le Cénérien semblent ignorer votre présence en ces lieux, et vous ressentez un grand soulagement en pensant qu'une fois encore votre science Kaï vous permet de passer inaperçu. Mais vous vous êtes peut-être réjoui un peu trop vite...",
      "Au moment où il s'apprête à quitter la caverne par le tunnel sud, le druide fait volte-face et montre du doigt l'endroit précis où vous vous trouvez en criant : « Scarzh-nah ! », et cela avec une véhémence qui ne laisse aucune équivoque : vous avez été repéré.",
      "Aussitôt, les Vazhags tirent leurs armes et s'élancent vers les marches. Galvanisé par l'imminence du danger, vous vous ruez comme un fauve sur vos ennemis, en abattant deux d'un seul coup. Avant même qu'ils touchent terre, vous pourfendez le torse d'un troisième et vous en neutralisez un quatrième grâce à un crochet latéral qui lui sépare presque la tête du corps.",
      "Tandis que le reste de la troupe se replie à la hâte dans la plus grande confusion, vous en profitez pour reprendre votre souffle. Voyant reculer ses hommes, le Cénérien les exhorte à grands cris de revenir à l'assaut pour venger la mort de leurs camarades.",
      "Le plus téméraire d'entre eux relève le défi, mais vous déjouez sa première offensive avec une aisance décourageante et, avant qu'il en tente une seconde, vous lui transpercez le cœur d'un coup net. Vous avez mené ce combat avec une telle adresse et une telle rapidité que le druide en demeure pantois.",
      "C'en est trop pour le dernier Vazhag survivant : dans un cri de terreur abjecte, il laisse tomber sa torche et son arme, puis il s'enfuit sans demander son reste par le tunnel sud. Désormais seul face à vous, le Cénérien recule jusqu'au fond de la caverne en marmottant des paroles diaboliques.",
      "Bien que son masque dissimule entièrement ses traits, vous sentez toute la haine qui jaillit de ses yeux, tel un flot de lave en fusion. Pressé d'en finir avec lui, vous levez votre arme et avancez à grands pas, mais vous êtes subitement freiné dans votre élan par une vague d'énergie psychique à laquelle vous vous heurtez comme à un mur de pierre.",
      "Si vous maîtrisez la Grande Discipline de l'Ecran Psychique, rendez-vous au 107.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 272."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Ecran Psychique, rendez-vous au 107.",
        "targetId": "107"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 272.",
        "targetId": "272"
      }
    ]
  },
  "214": {
    "id": "214",
    "text": [
      "Vous longez l'étroit passage qui monte en pente douce vers le nord. Le tintement d'une cloche d'alarme vous informe qu'à l'heure actuelle tout Mogaruith doit être sur le pied de guerre pour vous retrouver. Et après les dégâts que vous avez causés, vous savez qu'il n'y a aucune pitié à espérer de la part des Cénériens, si par malheur ils vous rattrapent.",
      "Au bout de quelques minutes, le passage débouche sur une galerie qui domine un grand puits circulaire. Alors que vous vous y engagez pour atteindre un escalier qui vous conduira au niveau supérieur, vous faites halte pour observer le fond du puits. C'est alors qu'un spectacle fascinant s'offre à vos yeux ; environ cent cinquante mètres plus bas, il y a d'énormes cuves emplies d'un liquide brunâtre en constante ébullition.",
      "Des dizaines de druides se tiennent sur une passerelle transversale qui surplombe ces cuves. Ils sont tous équipés de grands filets à papillons, à l'aide desquels ils pèchent des formes noires qui remontent à la surface. Vous faites appel à votre science Magnakaï pour aiguiser votre vision et, lorsque le plan est suffisamment proche, la scène vous apparaît dans toute son horreur : vous avez devant vous les bassins où les Cénériens font l'élevage des Vazhags.",
      "Soudain, un bruit de pas résonne dans l'escalier et votre odorat vous permet d'identifier la menace : une patrouille de Vazhags ne va pas tarder à faire irruption.",
      "Si vous voulez essayer de vous cacher quelque part, rendez-vous au 8.",
      "Si vous préférez rester sur place pour affronter l'ennemi, rendez-vous au 262."
    ],
    "choices": [
      {
        "text": "Si vous voulez essayer de vous cacher quelque part, rendez-vous au 8.",
        "targetId": "8"
      },
      {
        "text": "Si vous préférez rester sur place pour affronter l'ennemi, rendez-vous au 262.",
        "targetId": "262"
      }
    ]
  },
  "215": {
    "id": "215",
    "text": [
      "Vous prononcez les paroles magiques de la Confrérie et, instantanément, vous vous élevez dans les airs comme si vous étiez soulevé de terre par la main d'un géant invisible. Le rayon passe en grésillant sous vos pieds, puis va percuter les pierres de la vieille bâtisse.",
      "Une fois le péril écarté, vous commencez à redescendre, prêt à vous mettre à courir dès que vos bottes toucheront le sol. Apparemment, le druide est fort impressionné par vos talents de magicien, mais cela ne l'empêche pas d'ordonner à ses Hommes- Rats de vous mettre en pièces.",
      "Avec une lueur assassine au fond de leurs petits yeux injectés de sang, les Vazhags marchent au pas de charge sur les ruines en brandissant des armes rouillées.",
      "Si vous voulez affronter ces créatures plus que malsaines, rendez-vous au 25.",
      "Si vous préférez essayer de leur échapper, rendez-vous au 279."
    ],
    "choices": [
      {
        "text": "Si vous voulez affronter ces créatures plus que malsaines, rendez-vous au 25.",
        "targetId": "25"
      },
      {
        "text": "Si vous préférez essayer de leur échapper, rendez-vous au 279.",
        "targetId": "279"
      }
    ]
  },
  "216": {
    "id": "216",
    "text": [
      "Tandis que vous parviennent des bruits de chaîne et de grattements métalliques, vous vous penchez rapidement pour ramasser votre arme. En vous redressant, vous voyez alors dévaler, par une ouverture en demi-cercle, une meute de chiens de guerre aux crocs et aux griffes acérés comme des poignards.",
      "Alors qu'ils se précipitent sur vous, la gueule béante et écumante de bave, vous brandissez votre arme et vous vous campez fermement sur vos jambes pour vous préparer à recevoir leur attaque. index CHIENS DE GUERRE DURUEL HABILETÉ: 36 ENDURANCE: 22 Si vous sortez vainqueur du combat, rendez-vous au 323."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur du combat, rendez-vous au 323.",
        "targetId": "323"
      }
    ],
    "combat": {
      "name": "INDEX CHIENS DE GUERRE DURUEL",
      "combatSkill": 36,
      "endurance": 22,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "217": {
    "id": "217",
    "text": [
      "La boule de verre explose à vos pieds et vous êtes aussitôt enveloppé par un nuage de gaz dense et malodorant. Votre gorge se serre instantanément et votre estomac se révulse au contact de cette émanation chargée de bactéries mortelles. (Vous perdez 5 points d'ENDURANCE.) Vous venez d'inhaler un mélange de gaz très toxiques contre lequel les Vazhags sont immunisés, mais qui aurait tué net le commun des mortels.",
      "Seule votre science Magnakaï vous a permis d'échapper à une atroce agonie. Secoué par de violentes nausées et de pénibles quintes de toux, vous titubez vers la sortie et vous parvenez à vous échapper grâce au rideau de fumée qui vous dissimule aux regards de vos ennemis.",
      "Une fois à l'air libre, vous restez quelques instants ébloui par la lumière du petit matin qui inonde les collines environnantes. Au fur et à mesure que vous avancez sur la piste qui part des cavernes, votre vision s'améliore et vous découvrez une vaste forêt qui s'étend vers l'est.",
      "Il se dégage une telle aura de mal de cet océan de verdure que vous ne tardez pas à l'identifier comme étant la forêt de Ruel. Constatant avec soulagement que personne ne vous a suivi, vous vous accordez un court moment de repos au milieu d'un groupe de rochers.",
      "Autour de vous, tout semble désert ; seul le tracé sinueux d'une route poussiéreuse qui serpente à travers les collines nues jusqu'à l'orée de la forêt rompt la monotonie du paysage. Après avoir consulté votre carte, vous en déduisez qu'il s'agit de la route de Skardos, la piste secrète que les Cénériens utilisent pour se rendre directement à Mogaruith.",
      "Vous décidez de l'emprunter mais auparavant (à moins que vous ne maîtrisiez la Grande Discipline de l'Art de la Chasse), vous devez prendre un Repas ou bien perdre 3 points d'ENDURANCE.",
      "Rendez-vous au 230."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 230.",
        "targetId": "230"
      }
    ],
    "damage": 5
  },
  "218": {
    "id": "218",
    "text": [
      "Le chariot est empli de cadavres de soldats humains qui ont tous péri d'une maladie virulente. On les a dépouillés de leurs armes et de leurs cuirasses, mais leurs tuniques arborent l'écusson noir et rouge de la Slovie. Plusieurs d'entre eux ont le visage criblé de coupures superficielles, preuve qu'ils ont été tués par des bombes au Narbul, redoutable mélange de gaz explosif et de virus mortels.",
      "Depuis leur mise au point, ces bombes sont devenues l'arme de prédilection des Cénériens dans tous les conflits qui les opposent aux États libres. Tandis que le chariot traverse le pont- levis en cahotant, vous cherchez à comprendre pourquoi les Vazhags s'évertuent à transporter un chargement de cadavres sloviens jusqu'à Mogaruith.",
      "Pendant que vous réfléchissez à cette énigme, le chariot passe sous la grande tour d'entrée et s'arrête au nord du donjon, tout près de l'embrasure d'une porte. Avant que les Vazhags mettent pied à terre, vous sautez du chariot et vous vous faufilez jusqu'à cette porte.",
      "Rendez-vous au 98."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 98.",
        "targetId": "98"
      }
    ]
  },
  "219": {
    "id": "219",
    "text": [
      "Vous décapitez le monstre d'un ultime et redoutable coup. Claquant encore des mâchoires, l'énorme tête part en voltigeant dans les airs, avant de tomber à l'eau dans une gerbe d'écume. Pendant un moment, le long cou reptilien oscille de droite et de gauche tout en vomissant un flot d'humeur puante, puis il s'abat à son tour dans un grand remous, avant d'être englouti par les eaux noires du lac souterrain.",
      "Épuisé et hors d'haleine, vous rengainez votre arme, puis vous essuyez d'une main tremblante votre visage maculé du sang du Dholdaarg. Les Tzargs, qui étaient demeurés silencieux pendant toute la durée du combat, se remettent soudain à coasser à tue-tête et à secouer violemment les barreaux de leur cage.",
      "Vous en déduisez aussitôt que leurs maîtres ne sont pas loin. Mais avant même que vous puissiez réagir, un tremblement sourd ébranle le pont et vous êtes forcé de vous y agripper des deux mains, car il recommence à s'abaisser par brusques à-coups. Vous vous rapprochez inexorablement de la surface du lac.",
      "Si vous voulez sauter sur la berge avant que le pont soit complètement abaissé, rendez-vous au 96.",
      "Si vous préférez rester accroché sous le tablier du pont, rendez-vous au 112."
    ],
    "choices": [
      {
        "text": "Si vous voulez sauter sur la berge avant que le pont soit complètement abaissé, rendez-vous au 96.",
        "targetId": "96"
      },
      {
        "text": "Si vous préférez rester accroché sous le tablier du pont, rendez-vous au 112.",
        "targetId": "112"
      }
    ]
  },
  "220": {
    "id": "220",
    "text": [
      "Le chaudron explose au sol en répandant son contenu dans toutes les directions. Un véritable raz de marée d'acide déferle sur les paillasses, brûlant instantanément tout ce qui n'est pas pierre, porcelaine ou verre. Par-dessus le fracas de tonnerre produit par le chaudron s'élèvent les cris déchirants des druides aux abois.",
      "Mais soudain, une flèche vous frôle l'oreille droite. Des archers Vazhags ont atteint le haut de l'échelle et sont sur le point d'envahir la plate-forme. Vous cherchez désespérément un moyen de vous échapper, mais votre position est, hélas, bien précaire.",
      "Vous vous croyez perdu, lorsque vous avisez un balcon d'observation aménagé dans le mur d'en face, à quelque trente mètres de distance et environ trois, mètres plus bas que la plateforme où vous vous trouvez. Sans perdre une seconde, vous élaborez un plan d'évasion.",
      "Il est audacieux, certes, mais vous n'avez guère le choix. Vous vous débarrassez rapidement de votre déguisement de Céné-rien qui ne vous sert plus à rien désormais. (N'oubliez pas de rayer le Masque et la Robe de Druide de votre Feuille d'Aventure.) Puis vous empoignez la chaîne qui retenait le chaudron et vous vous élancez de toutes vos forces dans le vide, afin que l'élan vous amène jusqu'au balcon d'observation.",
      "Durant le trajet, vous serrez les dents à la vue du carnage qui se déroule, tout en bas, dans le laboratoire. Les archers Vazhags, quant à eux, ont compris votre manœuvre. Ils tentent de s'y opposer en vous décochant une multitude de flèches. Tâchant d'ignorer les traits qui sifflent autour de vous, vous guettez attentivement le moment propice pour lâcher la chaîne.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 2 au chiffre que vous avez tiré. Par ailleurs, si votre total d'ENDURANCE actuel est supérieur ou égal à 28, ajoutez 1 à ce même chiffre.",
      "Si le résultat obtenu est inférieur ou égal à 2, rendez-vous au 42.",
      "S'il est compris entre 3 et 6, rendez-vous au 267.",
      "S'il est supérieur, rendez-vous au 71."
    ],
    "choices": [
      {
        "text": "rendez-vous au 42.",
        "targetId": "42"
      },
      {
        "text": "entre 3 et 6, rendez-vous au 267.",
        "targetId": "267"
      },
      {
        "text": "rendez-vous au 71.",
        "targetId": "71"
      }
    ]
  },
  "221": {
    "id": "221",
    "text": [
      "La peur vous étreint lorsque vous apercevez le faciès hideux de la créature qui surgit de la porte. C'est un énorme chien au pelage noir et hirsute. Il darde sur vous ses yeux fous, pleins de cruauté, et ses babines écumantes se retroussent en frémissant pour découvrir de longs crocs jaunis, tout prêts à ne faire qu'une bouchée de vous.",
      "Avant que le molosse vous saute à la gorge, vous lui décochez une flèche qui l'atteint à la tête. Hélas ! il en faut plus pour l'arrêter. Sidéré par l'incroyable résistance de cette bête, vous laissez tomber votre arc et dégainez une arme de poing. Juste avant le début du combat, vous voyez se découper la silhouette d'un guerrier en armure dans l'encadrement de la porte.",
      "« Attaque et tue ! », lance-t-il d'une voix de stentor à son animal. CHIEN ENRAGÉ HABILETÉ: 32 ENDURANCE: 36 Cette créature sortie de l'enfer vous attaque également sur le plan psychique. En conséquence, vous devrez réduire votre HABILETÉ de 3 points pour toute la durée du combat, sauf si vous maîtrisez la Grande Discipline de l'Écran Psychique.",
      "Si vous gagnez la bataille en moins de 4 Assauts, rendez-vous au 64.",
      "S'il vous faut plus de 5 Assauts pour l'emporter sur votre adversaire, rendez-vous au 114."
    ],
    "choices": [
      {
        "text": "Si vous gagnez la bataille en moins de 4 Assauts, rendez-vous au 64.",
        "targetId": "64"
      },
      {
        "text": "rendez-vous au 114.",
        "targetId": "114"
      }
    ],
    "combat": {
      "name": "CHIEN ENRAGÉ",
      "combatSkill": 32,
      "endurance": 36,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "222": {
    "id": "222",
    "text": [
      "En vous retournant, vous voyez se dresser devant vous un homme de haute stature, dont le visage impassible est auréolé de cheveux gris argent. Dans sa main gauche, il tient un bâton de magicien et, dans la droite, la plume d'oie dont le scribe se servait.",
      "« Est-ce vous qui avez tué Cordask ? », demande-t-il d'une voix ferme et dénuée de toute émotion. Comme vous ne répondez pas, il s'opère un changement radical sur ses traits : sa bouche se tord et ses yeux se mettent à jeter des éclats qui vous hérissent la peau.",
      "De t'oute évidence, l'homme est en train de sonder votre âme.",
      "« Vous n'êtes pas des nôtres, vous n'êtes qu'un imposteur! », grogne-t-il en jetant la plume d'oie dans un geste de colère.",
      "« Otez votre masque et montrez-moi votre véritable visage, assassin ! » Sur ce, il s'avance en vous menaçant de son bâton. Vous vous mettez immédiatement sur la défensive en brandissant votre arme, mais le bâton de votre ennemi se met soudain à cracher un jet de feu qui fuse droit vers votre poitrine.",
      "Si vous possédez le Glaive de Sommer, rendez-vous au 61.",
      "Si vous ne possédez pas cet Objet Spécial, rendez-vous au 188."
    ],
    "choices": [
      {
        "text": "Si vous possédez le Glaive de Sommer, rendez-vous au 61.",
        "targetId": "61"
      },
      {
        "text": "Si vous ne possédez pas cet Objet Spécial, rendez-vous au 188.",
        "targetId": "188"
      }
    ]
  },
  "223": {
    "id": "223",
    "text": [
      "Vous vous dirigez furtivement vers le portail pendant que les Hommes-Rats s'empressent autour du blessé. Malheureusement, l'un d'entre eux a l'odorat plus fin que les autres ; il détecte votre présence, saute du chariot et pointe un doigt accusateur dans votre direction, tout en ameutant ses congénères à grands cris.",
      "Ces derniers répondent aussitôt à son appel et se lancent à votre poursuite en dégainant leurs lames rouillées.",
      "Si vous voulez les affronter l'arme au poing, rendez- vous au 313.",
      "Si vous préférez tenter de leur échapper, il est peut- être encore temps de fuir par le portail ; dans ce cas, rendez-vous au 204."
    ],
    "choices": [
      {
        "text": "Si vous préférez tenter de leur échapper, il est peut- être encore temps de fuir par le portail ; dans ce cas, rendez-vous au 204.",
        "targetId": "204"
      }
    ]
  },
  "224": {
    "id": "224",
    "text": [
      "Le pas cadencé des troupes de Vazhags retentit sur les pavés de la grande cour intérieure, et l'écho des ordres aboyés par les sergents se répercutent d'un rempart à l'autre. Votre première préoccupation est de vous débarrasser au plus vite de votre compagnon, car sa présence commence à éveiller la curiosité des Vazhags que vous croisez sur votre passage.",
      "Avisant un hangar désert, vous y faites entrer le Zombie et, après avoir verrouillé la porte, vous vous dirigez vers un escalier qui descend vers un grand portail aménagé au pied de la citadelle. Arrivé dans la partie nord du donjon, vous apercevez soudain trois Druides de Cener qui marchent de front dans votre direction.",
      "Vous vous aplatissez dans l'embrasure d'une porte avant qu'ils vous aperçoivent.",
      "Rendez-vous au 98."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 98.",
        "targetId": "98"
      }
    ]
  },
  "225": {
    "id": "225",
    "text": [
      "Vous vous campez solidement sur la berge boueuse et vous ajustez votre tir sur le Vazhag qui marche en tête. L'espace d'un instant, ses yeux rouges s'écarquillent d'horreur en voyant le trait filer vers lui. La pointe de la flèche se plante en travers de sa gorge avec un bruit mou, puis il bascule par-dessus la rambarde du pont et tombe la tête la première dans le lac.",
      "Apparemment peu émus par le triste sort de leur compagnon, les autres Vazhags continuent à traverser le pont au pas de charge. Alors que l'écho dissonant des ordres aboyés par leur chef résonne à leurs oreilles, ils sautent sur la berge et foncent droit sur vous en brandissant des armes rouillées.",
      "VAZHAGS HABILETÉ: 23 ENDURANCE: 23 Si vous sortez vainqueur de ce combat, rendez-vous au 142."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 142.",
        "targetId": "142"
      }
    ],
    "combat": {
      "name": "VAZHAGS",
      "combatSkill": 23,
      "endurance": 23,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "226": {
    "id": "226",
    "text": [
      "Vous concentrez tout votre pouvoir sur la goupille afin de la faire céder. Au fur et à mesure que les ondes atteignent leur but, des fissures apparaissent à la surface du métal.",
      "Utilisez la Table de Hasard. Si votre total d'ENDURANCE actuel est supérieur ou égal à 25, ajoutez 2 au chiffre que vous avez tiré. Si votre total d'ENDURANCE est inférieur ou égal à 15, déduisez 2 de ce même chiffre.",
      "Si le résultat obtenu est inférieur ou égal à 3, rendez-vous au 328.",
      "S'il est supérieur, rendez-vous au 141."
    ],
    "choices": [
      {
        "text": "rendez-vous au 328.",
        "targetId": "328"
      },
      {
        "text": "rendez-vous au 141.",
        "targetId": "141"
      }
    ]
  },
  "227": {
    "id": "227",
    "text": [
      "Parfaitement conscient de l'avoir échappé belle, vous vous dirigez rapidement vers le pan de mur par lequel le druide était apparu, puis vous l'inspectez minutieusement. Au bout de quelques secondes, vous découvrez un petit levier que vous actionnez sans hésiter.",
      "Le panneau se met à coulisser lentement, donnant accès à un passage dérobé. Après quelques marches, le boyau descend en pente douce jusqu'à une salle éclairée par deux grands cierges noirs posés sur une dalle de marbre. Sur une table dressée juste à côté, il y a les objets suivants : Deux flèches L'équivalent de 2 Repas Deux poignards Une épée Un miroir Une corde Si vous souhaitez vous approprier un ou plusieurs de ces objets, n'oubliez pas de les inscrire sur votre Feuille d'Aventure.",
      "De l'autre côté de la dalle de marbre, vous apercevez une porte ouverte sur un étroit couloir. Vous vous y engagez et vous parvenez à une autre pièce qui ne comporte qu'une issue : une porte massive, entièrement bardée de plaques de cuivre incrustées de fils d'or et d'argent.",
      "En l'examinant de plus près, vous constatez qu'elle est scellée par un joint parfaitement étanche. D'autre part, elle n'a ni serrure ni poignée. Cependant, votre œil de lynx ne tarde pas à repérer, en plein centre du panneau, un curieux motif en relief, qui n'est autre qu'une combinaison secrète.",
      "Trois séries de chiffres sont disposées en carré selon le schéma suivant : Sous cette combinaison, vous décryptez un message rédigé en ancien langage Cénérien : Afin de passer votre chemin Annoncez le nombre malin Etudiez attentivement la grille ci-dessus.",
      "Quand vous penserez avoir trouvé la solution, rendez-vous au paragraphe portant le même nombre.",
      "Si vous n'arrivez pas à trouver la réponse exacte, rendez-vous au 132."
    ],
    "choices": [
      {
        "text": "Si vous n'arrivez pas à trouver la réponse exacte, rendez-vous au 132.",
        "targetId": "132"
      }
    ]
  },
  "228": {
    "id": "228",
    "text": [
      "Peu avant minuit, le Capitaine et vous quittez Valfort sur deux destriers de Slovié. C'est une nuit sans lune et la plaine est noyée dans les ténèbres mais, grâce à votre science Magnakaï de l'Art de la Chasse, vous distinguez aisément les contours du paysage.",
      "Le Capitaine, quant à lui, ne possède pas vos dons de nyctalopie, mais il porte des verres spéciaux qui lui permettent de compenser cette lacune. Ces lunettes lui ont été offertes par le Grand Gouverneur du Chaman, en remerciement de ses bons et loyaux services lors du conflit avec les Seigneurs des Ténèbres.",
      "Elles lui sont fort utiles, vous dit-il, pour surveiller les abords de la frontière du Ruel, même par les nuits les plus noires. Après une heure de route, vous parvenez au sommet d'une colline herbue qui vous offre une vue plongeante sur la sombre forêt de Ruel.",
      "Alors que vous mettez pied à terre, vous tressaillez sous l'effet d'un infect effluve porté par l'air de la nuit : la puanteur âcre et lourde de la putréfaction.",
      "« Tout respire le mal dans cette région, explique le Capitaine en voyant votre réaction. Il est encore temps, si vous le voulez, de rentrer avec moi à Valfort. Et personne ne vous accusera de lâcheté, croyez-moi !»",
      "« Je reviendrai à Valfort, Capitaine, lui répondez-vous sur un ton ferme et résolu. Mais pas avant d'avoir accompli ma mission avec succès. » A ces mots, le Capitaine vous adresse un large sourire et lève sa main de fer en signe d'hommage à votre courage.",
      "« En ce cas, fort bien, mon Seigneur, reprend-il. Sachez que mes pensées vous accompagneront jusqu'au jour béni de votre retour. Je prierai les dieux pour qu'ils vous protègent et vous accordent la victoire, afin que nous soyons enfin débarrassés de la menace de Mogaruith. »",
      "Saisissant votre cheval par la bride, le Capitaine vous fait alors ses adieux et s'en retourne vers sa cité. Vous le suivez des yeux jusqu'à ce qu'il disparaisse au détour du sentier, puis vous dirigez vos regards sur l'immensité verte qui vous attend.",
      "La végétation est si dense, les broussailles du sous-bois sont tellement inextricables et les arbres tellement enchevêtrés, que la forêt vous semble tout d'abord une muraille inabordable. Pourtant, en observant l'orée plus attentivement, vous remarquez deux endroits par où il devrait être possible de pénétrer.",
      "Le premier est un ruisseau trouble et insalubre qui émerge de la forêt pour alimenter une étendue d'eau stagnante. Le second est une percée causée par la chute d'un très grand arbre en travers des broussailles.",
      "Si vous voulez entrer dans la forêt de Ruel par le cours d'eau, rendez-vous au 155.",
      "Si vous préférez entrer par la trouée faite par l'arbre abattu, rendez-vous au 84."
    ],
    "choices": [
      {
        "text": "Si vous voulez entrer dans la forêt de Ruel par le cours d'eau, rendez-vous au 155.",
        "targetId": "155"
      },
      {
        "text": "Si vous préférez entrer par la trouée faite par l'arbre abattu, rendez-vous au 84.",
        "targetId": "84"
      }
    ]
  },
  "229": {
    "id": "229",
    "text": [
      "Le Tzarg passe à quelques centimètres de vous, mais votre science Magnakaï déjoue son flair. Finalement, il s'éloigne en se dandinant et en reniflant de plus belle. Persuadés que leur limier est sur une piste, les Vazhags s'empressent de le suivre de très près.",
      "Vous attendez patiemment que le bruit de leurs pas s'évanouisse, puis vous sortez de votre cachette et quittez les lieux en empruntant l'escalier.",
      "Rendez-vous au 75."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 75.",
        "targetId": "75"
      }
    ]
  },
  "230": {
    "id": "230",
    "text": [
      "Faisant usage de vos dons de camouflage, vous entrez dans la forêt et suivez le sentier qui s'enfonce dans la pénombre, parfaitement conscient du mal qui semble suinter de chaque racine et de chaque branche dans cette forêt hostile. Alors que les ténèbres s'épaississent, une brume verdâtre commence à s'élever de l'humus qui recouvre le sol.",
      "L'odeur putride qui s'en dégage vous soulève le cœur et vous ne pouvez réprimer un frisson de dégoût au contact de ces miasmes. Peu à peu, vos yeux s'habituent à l'obscurité. Le sentier monte en pente douce et vous distinguez, tout en haut d'une éminence rocheuse, la silhouette d'une tour de guet en ruines.",
      "Vous pressentez intuitivement qu'elle est déserte et, impatient d'échapper au brouillard qui vous enveloppe, vous vous dirigez vers elle. A sa base s'ouvre une grande brèche à travers laquelle vous vous faufilez mais, ce faisant, vous dérangez un nid de bestioles ressemblant à des crabes.",
      "Elles s'enfuient en cliquetant et disparaissent en un clin d'œil sous les éboulis alentour. A demi mort de fatigue et découragé par les nombreux périls qui vous attendent, vous vous laissez tomber dans un coin de la tour et vous essayez de dormir quelques heures.",
      "Votre sommeil est perturbé par d'étranges rêves dans lesquels resurgissent toutes les peurs refoulées lors de votre état de veille. Des fantômes viennent vous hanter, qui prennent la forme de vos amis et de vos compatriotes. Les novices Kaï de votre monastère et les petites gens du Sommerlund vous apparaissent courbant le dos, le visage ravagé par la peste, et défilent tous devant vous en une interminable et pitoyable procession.",
      "Vous vous réveillez en sursaut, le cœur battant, le front ruisselant de sueur. Encore sous l'emprise de cet horrible cauchemar, vous êtes submergé par une vague de désespoir. Heureusement, votre confiance et votre assurance vous reviennent peu à peu. Vous interprétez ce rêve comme un avertissement de ce qui arrivera si vous échouez dans votre mission, et cela décuple votre volonté d'atteindre au plus vite Mogaruith afin de déjouer l'ignoble plan fomenté par les Druides de Cener.",
      "Vous avez dormi plusieurs heures et, physiquement du moins, ce repos vous a fait du bien. (Vous regagnez 3 points d'ENDU-RANCE.) A la lueur du petit matin, vous rassemblez vos armes et votre équipement, puis vous vous remettez en route pour Mogaruith.",
      "Rendez-vous au 160."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 160.",
        "targetId": "160"
      }
    ]
  },
  "231": {
    "id": "231",
    "text": [
      "Une douleur fulgurante vous traverse la jambe gauche et vous ne pouvez réprimer un cri. En baissant les yeux, vous constatez avec horreur qu'une flèche est plantée dans votre mollet: vous perdez 5 points d'EN-DURANCE. Vous parvenez à vous maîtriser, le temps d'empoigner la pointe de métal et de l'arracher d'un coup sec.",
      "Cette opération, ô combien éprouvante, vous a laissé pantelant mais, grâce à votre science médicale, vous surmontez votre malaise et votre souffrance afin de continuer bravement à monter vers le treuil.",
      "Rendez-vous au 103."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 103.",
        "targetId": "103"
      }
    ]
  },
  "232": {
    "id": "232",
    "text": [
      "Vous manquez votre cible et la flèche va se planter en pure perte dans un tronc d'arbre. Maudissant votre maladresse, vous vous élancez à la poursuite du druide qui a déjà disparu au détour du sentier. Au bout d'un kilomètre environ, vous pressentez qu'un danger vous menace: le druide a réussi à contacter une autre patrouille de Vazhags, nettement plus importante que la précédente. 11 les a informés de votre présence et, sous l'effet conjugué de leurs pouvoirs magiques, la végétation s'est brusquement resserrée autour de vous pour vous retenir prisonnier.",
      "Vous utilisez toutes vos capacités pour vous libérer de vos liens mais, entretemps, des renforts sont arrivés de Mogaruith. Les Druides de Cener passent à l'attaque en se servant sans scrupule de tous les artifices de leur sorcellerie. Vous leur tenez tête avec bravoure, mais la combinaison de tous leurs pouvoirs réunis est trop forte, même pour un Grand Maître Kaï de votre trempe.",
      "C'est avec le nom de votre pays et de vos dieux sur les lèvres que vous rendez finalement le dernier soupir, au cœur de la forêt de Ruel."
    ],
    "choices": []
  },
  "233": {
    "id": "233",
    "text": [
      "Traverser le pont-levis noirci par les siècles est une expérience éprouvante. Il est terminé par une lourde herse donnant accès à la tour de Mogaruith, et vous avez l'impression de marcher sur la langue d'un énorme dragon prêt à vous engloutir d'un instant à l'autre dans sa gueule béante.",
      "De part et d'autre du pont, des vapeurs nauséabondes s'élèvent des douves, emplissant l'atmosphère d'une puanteur douceâtre qui gêne votre respiration et trouble votre vision. Vous faites appel à votre science Magnakaï pour remédier à ces désagréments, mais la vue qui s'offre à vous n'en est pas plus réjouissante pour autant.",
      "A l'entrée de la tour, vous êtes confronté à un groupe de gardes Vazhags qui toisent votre compagnon sans cacher leur répulsion. Vous mettez à profit votre maîtrise du Contrôle Animal et de l'Exploration pour augmenter l'effet de votre supercherie, puis vous informez les gardes que vous devez remettre le Zombie à Frère Croumah, qui vous attend dans la Salle des Sacrifices.",
      "A ces mots, les gardes s'inclinent respectueusement devant vous et s'effacent pour vous laisser pénétrer dans Mogaruith. Rendez- vous au 224."
    ],
    "choices": []
  },
  "234": {
    "id": "234",
    "text": [
      "Vous enfoncez la clé et la faites lentement tourner dans la serrure. Il se produit un léger déclic et, sous votre poussée, le panneau commence à glisser de droite à gauche, révélant une salle où des centaines de bocaux de verre, soigneusement étiquetés, sont alignés sur des étagères.",
      "Il y a là toutes les substances possibles et imaginables, de la poussière la plus ordinaire à la précieuse poudre d'or, sans compter les herbes et les ingrédients les plus divers. Après avoir passé tous ces produits en revue, vous en sélectionnez quelques-uns dont vous connaissez les propriétés : Potion de Laumspur (5 doses); chaque dose vous permet de regagner 4 points d'ENDURANCE à l'issue d'un combat.",
      "Potion d'Alether (4 doses) ; une dose vous permet d'augmenter votre HABILETÉ de 2 points pour la durée d'un seul combat. Herbe des potences (2 doses) ; une dose fait dormir pendant dix heures et diminue l'ENDURANCE de 2 points. Racines de Sabito (2 doses) ; chaque dose permet de respirer parfaitement sous l'eau.",
      "Elixir de Laumwort (3 doses) ; chaque dose vous permet de gagner 2 points d'ENDURANCE au début ou à la fin d'un combat. Herbe d'Oede (1 dose) ; cette plante extrêmement rare possède de nombreuses vertus curatives et peut notamment guérir les graves maladies.",
      "Si vous souhaitez prendre un ou plusieurs bocaux, n'oubliez pas de les inscrire sur votre Feuille d'Aventure. Tous ces ingrédients sont considérés comme des Objets de Sac à Dos. A l'exception de la porte dérobée par laquelle vous êtes entré, vous remarquez qu'un petit passage mène hors de la pièce.",
      "Si vous désirez l'emprunter, rendez-vous au 214.",
      "Si vous préférez quitter la pièce par la porte dérobée et revenir sur vos pas jusqu'au tunnel ouest, rendez-vous au 271."
    ],
    "choices": [
      {
        "text": "Si vous désirez l'emprunter, rendez-vous au 214.",
        "targetId": "214"
      },
      {
        "text": "Si vous préférez quitter la pièce par la porte dérobée et revenir sur vos pas jusqu'au tunnel ouest, rendez-vous au 271.",
        "targetId": "271"
      }
    ]
  },
  "235": {
    "id": "235",
    "text": [
      "Votre flèche atteint le druide en plein dos. II titube pendant quelques mètres, lève les bras au ciel en poussant un long cri d'agonie, puis s'effondre face contre terre. Vous vous précipitez vers l'endroit où il vient de tomber mais, au moment où vous vous penchez sur sa dépouille, les Vazhags, alertés par son hurlement, font irruption.",
      "Dès qu'ils vous aperçoivent auprès du cadavre de leur chef, tel un chasseur avec sa proie, leur intrépidité fond comme neige au soleil. Ils abaissent leurs armes, commencent à reculer puis, dans un mouvement de panique générale, ils font volte-face et s'enfuient en courant, vous laissant seul dans la clairière en compagnie de votre victime.",
      "La curiosité vous pousse à retirer le masque vert qui cache son visage. Vous découvrez alors un faciès hideux, grené par la maladie et n'ayant presque plus rien d'humain. Surmontant votre répulsion, vous fouillez le druide et trouvez sur lui les objets suivants : Un poignard Une robe de Druide de Cener (Si vous décidez de la garder, sachez qu'elle prendra la place de 2 objets dans votre Sac à Dos.) Un masque Cénérien Vingt Lunes (soit l'équivalent de 5 Pièces d'Or) Si vous voulez conserver certains de ces objets, n'oubliez pas d'apporter les modifications nécessaires sur votre Feuille d'Aventure.",
      "Votre science Magnakaï vous informe que la baguette du druide ne possède plus aucun pouvoir magique ; ce dernier s'est trouvé annihilé en même temps que son malfaisant propriétaire. Vous vous penchez pour la lui retirer des mains, mais à peine l'avez-vous touchée qu'elle tombe en poussière, tout en dégageant une senteur nauséabonde.",
      "Étant donné que le crépuscule approche, vous quittez la clairière en passant par la trouée, puis vous vous engagez à grands pas sur le sentier boueux qui la prolonge.",
      "Rendez-vous au 10."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 10.",
        "targetId": "10"
      }
    ],
    "loot": {
      "gold": 5
    }
  },
  "236": {
    "id": "236",
    "text": [
      "Votre résistance psychique exceptionnelle vous protège du rayon inquisiteur, et la lumière, réfléchie par le masque de Cener que vous portez, actionne un dispositif photosensible dissimulé dans la porte. Celle-ci commence à s'ouvrir lentement.",
      "Rendez-vous au 150."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 150.",
        "targetId": "150"
      }
    ]
  },
  "237": {
    "id": "237",
    "text": [
      "Vous partez comme une flèche à la poursuite du druide et vous le rattrapez au bout de cinquante mètres à peine. En désespoir de cause, le Cénérien tente de vous atteindre avec une autre décharge d'énergie, mais la rapidité de vos réflexes fait échouer sa vile manœuvre : d'un coup de pied bien assené, vous envoyez valser sa baguette dans les airs et le flux d'énergie se perd parmi les arbres.",
      "Vous maudissant de toute sa hargne, votre adversaire dégaine alors un poignard et se jette sur DRUIDE DE CENER HABILETÉ : 28 ENDURANCE : 28 Si vous sortez vainqueur de ce combat, rendez-vous au 53."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 53.",
        "targetId": "53"
      }
    ],
    "combat": {
      "name": "DRUIDE DE CENER",
      "combatSkill": 28,
      "endurance": 28,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "238": {
    "id": "238",
    "text": [
      "Dès que vous écartez le rideau de velours, une horrible odeur de putréfaction vous prend à la gorge. Devant vous, un pan incliné en bois descend jusqu'au bord d'un puits circulaire. Vous vous en approchez prudemment, sans faire le moindre bruit. Tout au fond, vous apercevez une créature endormie sur un lit de paille souillée.",
      "C'est une espèce d'énorme chien à mâchoire de crocodile. On devine de puissants muscles sous son pelage noir bleuté grouillant de vermine, mais ses pattes portent les traces d'une maladie infectieuse. Quelques rais de lumière tombent à la verticale de ce nid malsain.",
      "En levant les yeux, vous apercevez effectivement un toit de feuillage humide qui laisse faiblement passer le jour. Vous en concluez que le puits doit conduire directement à l'air libre, quelque part à l'est des monts Skardos.",
      "Si vous voulez essayer de grimper en haut du puits pour vous échapper, rendez-vous au 336.",
      "Si vous préférez vous éloigner de cet endroit pestilentiel, rendez-vous au 165."
    ],
    "choices": [
      {
        "text": "Si vous voulez essayer de grimper en haut du puits pour vous échapper, rendez-vous au 336.",
        "targetId": "336"
      },
      {
        "text": "Si vous préférez vous éloigner de cet endroit pestilentiel, rendez-vous au 165.",
        "targetId": "165"
      }
    ]
  },
  "239": {
    "id": "239",
    "text": [
      "Vous pénétrez dans une pièce confinée, éclairée par une unique bougie posée sur un trépied. A côté d'une paillasse étalée à même le sol, il y a une commode rustique et, sur une étagère accrochée au mur, trois assiettes ébréchées, un bout de fromage, un morceau de viande séchée, un quignon de pain et une bouteille d'eau trouble (le tout constituant l'équivalent d'un Repas).",
      "En ouvrant les tiroirs de la commode, vous trouvez quelques vêtements mangés aux mites et une Clé de Cuivre.",
      "Si vous souhaitez conserver cette Clé, inscrivez-la sur votre Feuille d'Aventure. Après avoir vérifié qu'il n'y a plus rien d'intéressant, vous sortez de cette pauvre chambre, puis vous descendez l'escalier au bout du tunnel.",
      "Rendez-vous au 347."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 347.",
        "targetId": "347"
      }
    ]
  },
  "240": {
    "id": "240",
    "text": [
      "A peine avez-vous effleuré le levier qu'un léger tremblement se fait entendre. Puis la porte de métal se met à coulisser, révélant le domaine privé de l'Archi-druide Cadak. La pièce est à peine plus grande que l'antichambre, mais elle est décorée avec un raffinement extrême.",
      "Les meubles sont marquetés de pierres précieuses, les murs tendus de tapisseries de valeur inestimable. Au centre se dresse un grand trône noir, entièrement sculpté de motifs démoniaques appartenant à la mythologie Cénérienne. Des boules de verre suspendues au plafond procurent une lumière irisée qui change constamment de couleur et d'intensité.",
      "Bien que vos yeux et votre instinct Kaï vous informent que la pièce est déserte, vous éprouvez une certaine réticence à en franchir le seuil. Ce lieu est tellement diabolique que le mal qui l'imprègne semble arriver jusqu'à vous par vagues, corrompant tout sur leur passage.",
      "Luttant contre le malaise qui vous oppresse, vous vous efforcez d'avancer dans la chambre et de l'inspecter avant que son propriétaire revienne. Parmi tous les objets de valeur qui sont ici rassemblés, trois retiennent votre attention. Le premier est une boule de cristal posée sur une table, juste à côté du trône ; le second est une grande tapisserie qui occupe tout le pan de mur opposé à la porte ; le troisième est une statuette en or posée sur une étagère qui se trouve à votre droite.",
      "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 173.",
      "Sinon, rendez-vous au 338."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Intuition, rendez-vous au 173.",
        "targetId": "173",
        "requiredDiscipline": "Intuition"
      },
      {
        "text": "Sinon, rendez-vous au 338.",
        "targetId": "338"
      }
    ]
  },
  "241": {
    "id": "241",
    "text": [
      "Les yeux rivés sur la herse en mouvement, vous prenez une profonde inspiration, puis vous vous élancez à travers la cour. Lorsque vous atteignez le porche, la herse n'est plus qu'à un mètre du sol ! Vous plongez néanmoins sous l'espace restant et vous roulez sur vous-même en espérant que les pointes de métal ne vous agripperont pas au passage...",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 2 au chiffre tiré. Par ailleurs, si votre total d'ENDURANCE actuel est supérieur ou égal à 25, ajoutez encore 1 à ce même chiffre.",
      "Si le résultat obtenu est inférieur ou égal à 3, rendez-vous au 321.",
      "S'il est supérieur, rendez-vous au 147."
    ],
    "choices": [
      {
        "text": "rendez-vous au 321.",
        "targetId": "321"
      },
      {
        "text": "rendez-vous au 147.",
        "targetId": "147"
      }
    ]
  },
  "242": {
    "id": "242",
    "text": [
      "Durant plus d'une heure, vous longez la piste boueuse qui serpente à travers les arbres de ce maudit royaume. Vous vous sentez épié de toutes parts par des yeux hostiles et méfiants, mais vous savez que ces observateurs ne représentent pas de réelle menace pour vous.",
      "Ce ne sont que de malheureux animaux qui ne possèdent ni l'intelligence ni le courage nécessaires pour s'attaquer à vous. (Cependant, vous remerciez le ciel de n'être ni faible ni blessé, car vous vous sentiriez plutôt vulnérable face à eux, si tel était le cas...).",
      "Le sentier grimpe ensuite à l'assaut d'une crête avant de redescendre à pic vers une vallée nimbée de brouillard. Là, une sinistre vision vous arrête net: un crâne couvert de mousse repose en travers du chemin ; ses mâchoires béantes semblent proférer un cri de muette horreur.",
      "Juste à côté, vous distinguez deux squelettes à moitié enfouis dans la bruyère ; un peu plus loin encore, les restes d'un cheval de bataille portant encore sur son dos décharné la dépouille de son cavalier. Tandis que vous vous dirigez vers lui, des couinements dissonants vous parviennent soudain, étouffés par la densité du sous-bois.",
      "Sans hésiter, vous quittez la piste et vous vous enfoncez dans l'enchevêtrement des broussailles. Mobilisant toute votre attention, vous sentez soudain se mouvoir des ombres dans les alentours et vous tirez votre arme pour parer toute éventualité. Au bout de quelques minutes, une colonne de créatures mi- hommes, mi-rats surgit au détour du sentier.",
      "Ils sont de taille moyenne et portent des uniformes dépareillés ayant jadis appartenu à des soldats humains, ainsi que des armes grossières, rongées par la rouille. Dans leur sillage flotte une horrible odeur de maladie infectieuse, et vous en concluez qu'il s'agit des Vazhags dont Rimoah vous a parlé.",
      "Protégé par votre camouflage Kaï, vous les regardez défiler, puis disparaître lentement sous le couvert de la végétation. Une fois sûr d'être en sécurité, vous rengainez votre arme et poursuivez votre route vers Mogaruith.",
      "Rendez-vous au 206."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 206.",
        "targetId": "206"
      }
    ]
  },
  "243": {
    "id": "243",
    "text": [
      "Vous êtes arrivé à mi-hauteur, quand un grognement rauque s'élève du fond du puits. La terre et la poussière que vous avez fait tomber lors de votre ascension ont réveillé le monstre, et celui-ci se tient maintenant debout, la tête renversée en arrière pour mieux vous darder de ses yeux brûlants de voracité.",
      "Tout à coup, il pousse un rugissement assourdissant et, avec une surprenante agilité, il se met à escalader le puits en s'aidant de ses longues griffes. Vous redoublez de rapidité pour atteindre le sommet avant que l'horrible bête vous rattrape mais, à quelques mètres de la surface, vous sentez ses mâchoires se refermer sur l'un de vos mollets.",
      "La blessure vous arrache un cri de douleur et un lambeau de peau par la même occasion (vous perdez 4 points d'ENDURANCE) et vous vous hâtez de relever les jambes aussi haut que possible avant que la bête repasse à l'attaque. Hélas ! en voyant la gueule écumante de bave infecte s'agiter à quelques centimètres de vos talons, vous comprenez qu'il est impossible de continuer à grimper avant d'avoir affronté cette créature, l'arme au poing.",
      "AGARASHI DU PUITS HABILETÉ : 34 ENDURANCE : 38 En raison de votre position précaire, vous devez réduire votre HABILETÉ de 6 points pour toute la durée du combat. Par ailleurs, si l'arme que vous avez choisie est un Glaive, une Lance ou bien un Bâton, réduisez votre HABILETÉ de 3 points supplémentaires.",
      "Cette créature est insensible aux attaques psychiques élémentaires ; vous ne pourrez l'atteindre mentalement que si vous maîtrisez la Grande Discipline du Foudroiement Psychique.",
      "Si vous sortez vainqueur de ce terrible combat, rendez-vous au 24."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce terrible combat, rendez-vous au 24.",
        "targetId": "24"
      }
    ],
    "combat": {
      "name": "AGARASHI DU PUITS",
      "combatSkill": 34,
      "endurance": 38,
      "mindblastImmune": false,
      "undead": false
    },
    "damage": 4
  },
  "244": {
    "id": "244",
    "text": [
      "Lentement, vous avancez vers la lumière vacillante qui luit au bout du tunnel et, quelque temps après, vous débouchez sur une vaste caverne. Elle est illuminée par une rangée de fanaux accrochés à la voûte par une longue chaîne ; leur flamme ambrée se réfléchit dans les eaux sombres d'un lac souterrain, ce qui explique les reflets changeants qui vous intriguaient.",
      "De prime abord, il semble que rien ne permette de traverser le lac, mais en vous rapprochant, vous apercevez un pont-levis dressé contre la paroi rocheuse, à l'autre extrémité. De votre côté, tout près de la berge où le pont prend probablement appui lorsqu'il est abaissé, il y a une grande cage en fer occupée par des sortes de crapauds géants.",
      "Ce sont certainement les Tzargs dont Rimoah vous a parlé, ces féroces batraciens élevés tout spécialement par les Cénériens pour qu'ils les guident à travers les méandres marécageux de Caron. Deux Vazhags se tiennent près de la cage. Ils s'amusent à agacer les Tzargs en les piquant à travers les barreaux, à l'aide d'un bâton pointu.",
      "Une fois lassés de ce jeu idiot, ils jettent négligemment leurs piques dans le lac et s'éloignent sur la berge boueuse. L'un d'eux sort de son havresac un morceau de viande avariée qu'il partage avec son compagnon, puis tous deux commencent à dévorer cette infecte nourriture à belles dents, sans se soucier des cris des Tzargs affamés.",
      "Rendez- vous au 41."
    ],
    "choices": []
  },
  "245": {
    "id": "245",
    "text": [
      "Les vrilles épineuses vous enserrent étroitement. Tandis que le rire froid de Cadak heurte vos tympans, vous tentez désespérément de vous dégager avant qu'Exter-minus, son démoniaque serviteur, mette la main sur vous.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï ou de la Magie des Anciens, ajoutez 3 au chiffre tiré, ou bien 7 si vous maîtrisez ces deux Grandes Disciplines. D'autre part, si votre total d'ENDURANCE actuel est supérieur ou égal à 16, ajoutez 1 à ce même chiffre.",
      "Si le résultat obtenu est inférieur ou égal à 6, rendez-vous au 166.",
      "S'il est supérieur à 6, rendez-vous au 73."
    ],
    "choices": [
      {
        "text": "rendez-vous au 166.",
        "targetId": "166"
      },
      {
        "text": "rendez-vous au 73.",
        "targetId": "73"
      }
    ]
  },
  "246": {
    "id": "246",
    "text": [
      "Vous vous propulsez vers la lueur bleutée et émergez brusquement à la surface, les poumons en feu, suffocant comme un poisson dans la nasse. Tout en reprenant péniblement votre souffle, vous inspectez les alentours. Vous voici maintenant dans une caverne plus petite que celle dont vous venez, mais cependant de proportions importantes.",
      "Les parois se dressent à pic le long de l'eau; il n'y a pas de berge, seulement un petit promontoire rocheux où vous pourrez vous reposer. Après vous être hissé dessus, vous comprenez d'où vient la lumière qui vous avait attiré. Elle s'infiltre par un puits de cheminée naturel ; les parois en sont brutes, pleines d'anfractuosités et, pour quelqu'un de votre agilité, il sera aussi facile d'y grimper qu'à une échelle.",
      "Dix minutes plus tard, vous atteignez le haut du conduit et, passant prudemment la tête hors du trou, vous regardez autour de vous. La lumière que vous distinguiez provient en réalité de plusieurs lampes à huile accrochées à intervalles réguliers au plafond d'un étroit passage souterrain.",
      "Vous sentez la présence de Vazhags dans les environs, aussi décidez-vous de rester caché dans le conduit de la cheminée, au cas où une patrouille passerait. A moins que vous ne maîtrisiez la Grande Discipline de l'Art de la Chasse, vous devez prendre un Repas durant votre attente, ou bien déduire 3 points de votre total d'ENDURANCE.",
      "Ensuite, rendez-vous au 94."
    ],
    "choices": [
      {
        "text": "rendez-vous au 94.",
        "targetId": "94"
      }
    ]
  },
  "247": {
    "id": "247",
    "text": [
      "Les deux personnages contemplent le résultat de leur sinistre ouvrage en hochant la tête avec dépit. Vous voyez le Slot tressaillir malgré ses liens, puis s'immobiliser brusquement. L'un des Disciples de Vashna se penche alors pour examiner le cœur mis à nu, puis il s'adresse en grommelant à son complice, se plaignant que l'expérience ait échoué une fois de plus.",
      "Ensuite, ils s'essuient tous deux les mains sur leur robe et quittent les lieux en refermant soigneusement la porte derrière eux. Maintenant que vous êtes seul, vous en profitez pour fouiller le laboratoire ainsi que les réduits adjacents, mais vous ne trouvez rien qui ressemble, de près ou de loin, à la culture du virus de la peste.",
      "Il vous reste à visiter le huitième cabinet, dont la porte blindée est condamnée. D'autre part, bien que la porte principale soit désormais fermée à clé, vous découvrez une autre issue.",
      "Si vous désirez quitter le laboratoire en empruntant cette issue, rendez-vous au 333.",
      "Si vous préférez aller inspecter le huitième cabinet, rendez-vous au 131."
    ],
    "choices": [
      {
        "text": "Si vous désirez quitter le laboratoire en empruntant cette issue, rendez-vous au 333.",
        "targetId": "333"
      },
      {
        "text": "Si vous préférez aller inspecter le huitième cabinet, rendez-vous au 131.",
        "targetId": "131"
      }
    ]
  },
  "248": {
    "id": "248",
    "text": [
      "Vous appuyez de toutes vos forces en faisant levier avec votre arme, dans l'espoir de faire sauter la chaîne de son point d'attache. Soudain, un craquement sec retentit et la goupille s'ouvre. Libérée du poids de l'énorme chaudron, la chaîne part alors en cinglant l'air comme un serpent en colère.",
      "Utilisez la Table de Hasard.",
      "Si le chiffre que vous avez tiré est inférieur ou égal à 1, rendez-vous au 294.",
      "S'il est compris entre 2 et 5, rendez-vous au 191.",
      "Enfin, s'il est supérieur à 5, rendez-vous au 105."
    ],
    "choices": [
      {
        "text": "Si le chiffre que vous avez tiré est inférieur ou égal à 1, rendez-vous au 294.",
        "targetId": "294"
      },
      {
        "text": "entre 2 et 5, rendez-vous au 191.",
        "targetId": "191"
      },
      {
        "text": "Enfin, s'il est supérieur à 5, rendez-vous au 105.",
        "targetId": "105"
      }
    ]
  },
  "249": {
    "id": "249",
    "text": [
      "Grâce à votre maîtrise du Nexus, vous réussissez sans trop de mal à neutraliser les effets corrosifs de l'acide. La douleur s'estompe rapidement et vous êtes bientôt à même de fuir au plus vite cette partie du tunnel. Une fois arrivé à l'escalier, vous faites une halte pour découper les parties de votre tunique et de votre manteau qui ont été rongées par l'acide.",
      "Ce faisant, vous constatez avec dépit que votre Sac à Dos a également souffert et, après en avoir vérifié le contenu, vous découvrez que 2 Objets ont littéralement fondu sous l'effet des gouttes d'acide. (Rayez le 2e et le 4e objet figurant sur votre liste.) Ensuite, rendez-vous au 28."
    ],
    "choices": [
      {
        "text": "rendez-vous au 28.",
        "targetId": "28"
      }
    ]
  },
  "250": {
    "id": "250",
    "text": [
      "Votre flèche atteint le druide en plein dos. Il titube pendant quelques mètres, lève les bras au ciel en poussant un long cri d'agonie, puis il s'effondre face contre terre. Vous vous précipitez vers l'endroit où il vient de tomber et la curiosité vous pousse à retirer le masque vert qui cache son visage.",
      "Vous découvrez alors un faciès hideux, grené par la maladie et n'ayant presque plus rien d'humain. Surmontant votre répulsion, vous fouillez le druide et trouvez sur lui les objets suivants: Un poignard Une robe de Druide de Cener (Si vous décidez de la garder, sachez qu'elle prendra la place de 2 Objets dans votre Sac à Dos.) Un masque Cénérien Vingt Lunes (soit l'équivalent de 5 Pièces d'Or) Si vous voulez conserver certains de ces objets, n'oubliez pas d'apporter les modifications nécessaires sur votre Feuille d'Aventure.",
      "Votre science Magnakaï vous informe que la baguette du druide ne possède plus aucun pouvoir magique ; ce dernier s'est trouvé annihilé en même temps que son malfaisant propriétaire. Vous vous penchez pour la lui retirer des mains, mais à peine l'avez-vous touchée qu'elle tombe en poussière, tout en dégageant une senteur nauséabonde.",
      "Comme le crépuscule approche, vous quittez la clairière en passant par la trouée, puis vous vous engagez à grands pas sur le sentier boueux qui la prolonge.",
      "Rendez-vous au 10."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 10.",
        "targetId": "10"
      }
    ],
    "loot": {
      "gold": 5
    }
  },
  "251": {
    "id": "251",
    "text": [
      "Sachant qu'il vous faut à tout prix empêcher la créature de donner l'alarme, vous dégainez une arme de poing que vous lui lancez à la tête.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 4 au chiffre tiré.",
      "Si le résultat est inférieur ou égal à 6, rendez-vous au 69.",
      "S'il est supérieur, rendez-vous au 197."
    ],
    "choices": [
      {
        "text": "rendez-vous au 69.",
        "targetId": "69"
      },
      {
        "text": "rendez-vous au 197.",
        "targetId": "197"
      }
    ]
  },
  "252": {
    "id": "252",
    "text": [
      "Après que la fumée s'est dissipée, vous voyez un trou aux bords calcinés à la place du verrou qu'il y avait encore quelques minutes auparavant. D'un coup de pied, vous ouvrez la porte. Malheureusement, la déflagration n'est pas passée inaperçue et, au moment où vous franchissez le seuil, vous vous trouvez face à face avec une créature que le bruit semble avoir réveillée.",
      "Rendez-vous au 120."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 120.",
        "targetId": "120"
      }
    ]
  },
  "253": {
    "id": "253",
    "text": [
      "Après avoir fouillé le druide, vous trouvez sur lui les objets suivants : Un poignard Une coule de druide (Ce vêtement occupe la place de 2 Objets de Sac à Dos.) Vingt Lunes (soit l'équivalant de 5 Pièces d'Or) Un pot de Baies Noires Si vous souhaitez garder un ou plusieurs de ces objets, n'oubliez pas de les inscrire sur votre Feuille d'Aven-Cure.",
      "A présent, si vous maîtrisez la Grande Discipline de l'Alchimie Kaï, rendez- vous au 58 ; sinon, rendez-vous au 306."
    ],
    "choices": [
      {
        "text": "si vous maîtrisez la Grande Discipline de l'Alchimie Kaï, rendez- vous au 58 ; sinon, rendez-vous au 306.",
        "targetId": "306"
      }
    ],
    "loot": {
      "gold": 5
    }
  },
  "254": {
    "id": "254",
    "text": [
      "Un sourire triomphant sur les lèvres, vous enjambez les dépouilles des chiens de guerre et vous marchez d'un pas menaçant sur leurs maîtres. Il n'en faut pas plus pour ébranler leur assurance. A la vue de leurs molosses étendus inertes et ensanglantés sur le sol, les Hommes-Rats s'enfuient sans demander leur reste et vous pouvez quitter les lieux sans encombre.",
      "Une fois parvenu à l'air libre, vous restez quelques instants ébloui par la lumière du petit matin qui inonde les collines environnantes. Au fur et à mesure que vous avancez sur la piste qui part des cavernes, votre vision s'améliore et vous découvrez une vaste forêt qui s'étend vers l'est.",
      "Il se dégage une telle aura de mal de cet océan de verdure que vous ne tardez pas à l'identifier comme étant la forêt de Ruel. Constatant avec soulagement que personne ne vous a suivi, vous vous accordez un court moment de repos au milieu d'un groupe de rochers.",
      "Autour de vous, tout semble désert ; seul le tracé sinueux d'une route poussiéreuse qui serpente à travers les collines nues jusqu'à l'orée de la forêt rompt la monotonie du paysage. Après avoir consulté votre carte, vous en déduisez qu'il s'agit de la route de Skardos, la piste secrète que les Cénériens utilisent pour se rendre directement à Mogaruith.",
      "Vous décidez de l'emprunter mais auparavant (à moins que vous ne maîtrisiez la Grande Discipline de l'Art de la Chasse), vous devez prendre un Repas ou bien perdre 3 points d'ENDURANCE.",
      "Rendez-vous au 230."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 230.",
        "targetId": "230"
      }
    ]
  },
  "255": {
    "id": "255",
    "text": [
      "Vous parcourez un dédale de couloirs sombres et étroits, passant de salle en salle, d'un escalier à un autre. A plusieurs reprises, le passage d'une patrouille de Vazhags vous force à vous dissimuler en toute hâte. Fort heureusement, vous êtes passé maître dans l'art du camouflage, ce qui vous permet d'échapper aux regards scrutateurs des uns et des autres.",
      "Finalement, vous atteignez un vaste hall au niveau de la surface. Vous restez caché dans l'ombre d'un pilier jusqu'à ce que la voie soit libre. La lumière du jour arrive à flots par un grand portail et vous distinguez, à l'extérieur, la tour de guet et le donjon.",
      "Tous vos espoirs renaissent subitement, car la grande cour semble déserte et le pont-levis est baissé. Voici pour vous une chance inespérée de sortir directement de Mogaruith ! Mais soudain, l'écho d'une cloche retentit, couvrant de son glas triste et profond le tintement des autres cloches d'alarme.",
      "Le bruit provient de la tour ; il signifie que la herse est en train de se refermer.",
      "Si vous voulez vous ruer vers la tour d'entrée afin de vous échapper par le pont-levis avant que la herse soit complètement close, rendez- vous au 241.",
      "Si vous jugez plus prudent de rester sur place et d'attendre une meilleure occasion pour vous échapper, rendez- vous au 168."
    ],
    "choices": []
  },
  "256": {
    "id": "256",
    "text": [
      "«Comment ose-t-on m'importuner avec des formalités aussi triviales ! » vous exclamez-vous en écartant le Vazhag d'un geste méprisant. La créature pousse un grognement sourd et commence à lever sa lance en guise de protestation, mais vous déclarez aussitôt d'un air farouche : « Si vous me retardez une seconde de plus, je veillerai à ce qu'on vous fasse bouillir dans votre propre graisse.",
      "Et maintenant, laissez-moi passer ! » Votre menace fait son effet. L'Homme-Rat semble perdre toute confiance en lui et il recule en abaissant sa garde, tandis q'ue vous avancez vers lui. A ce moment, une colonne de Vazhags et un chariot empli d'armes de toutes sortes convergent en même temps vers le porche.",
      "Il s'ensuit une cohue tapageuse qui joue en votre faveur: vous abandonnez le Zombie sur place, vous vous frayez rapidement un chemin parmi la foule, puis vous vous faufilez à l'intérieur du donjon. Plusieurs entrées s'offrent à vous, mais l'une d'elles vous inspire plus que les autres.",
      "C'est un escalier qui descend jusqu'à un portail encastré au pied de la citadelle. Vous marchez dans cette direction, quand soudain vous voyez arriver, droit devant vous, trois Druides de Cener. Il ne vous reste qu'une chose à faire pour les éviter: vous écarter rapidement et vous cacher dans l'embrasure d'une porte.",
      "Rendez-vous au 98."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 98.",
        "targetId": "98"
      }
    ]
  },
  "257": {
    "id": "257",
    "text": [
      "Grâce à l'acuité de vos sens, vous réussissez à éviter les vrilles en effectuant un roulé-boulé sur le sol spongieux de la forêt. Alors que vous vous relevez, vous vous rendez compte que vous n'êtes pas en présence d'une plante, mais d'une créature vivante tapie en haut d'un arbre !",
      "Soudain, une autre masse s'abat près de vous et les vrilles s'agitent en tous sens pour vous localiser. L'une d'elles s'entortille autour de votre pied, et les autres se mettent immédiatement à ramper dans la même direction. Maintenant que vous savez à qui vous avez affaire, vous brandissez votre arme et vous frappez furieusement la masse de tentacules frémissants qui vous enserrent.",
      "Un flot d'humeur visqueuse jaillit de chaque segment tranché, et vous entendez un rugissement de douleur en provenance de la cime des arbres. Puis, de nouveau, les vrilles indemnes vous cherchent à tâtons. Cette fois cependant, elles ne sont plus souples et élastiques mais dures et hérissées de pointes, comme du fil de fer barbelé.",
      "Elles se dressent vers votre gorge et vous les cisaillez à grands coups, mais il en arrive de plus en plus.",
      "Si vous voulez tenter d'échapper à cette créature diabolique, rendez-vous au 180.",
      "Si vous préférez continuer de la combattre, rendez-vous au 202."
    ],
    "choices": [
      {
        "text": "Si vous voulez tenter d'échapper à cette créature diabolique, rendez-vous au 180.",
        "targetId": "180"
      },
      {
        "text": "Si vous préférez continuer de la combattre, rendez-vous au 202.",
        "targetId": "202"
      }
    ]
  },
  "258": {
    "id": "258",
    "text": [
      "Les Vazhags se regroupent sur la berge, reniflant et couinant impatiemment en vue du combat qui se prépare. Puis, sur un signal de leur chef, ils se déploient en demi-cercle et commencent à approcher. L'un d'eux jette sa lance de toutes ses forces en direction de votre poitrine, mais vous l'esquivez agilement et la saisissez au vol pour la retourner en plein cœur à son envoyeur.",
      "La victime pique du nez dans la boue en poussant un cri étranglé, et sa mort provoque un mouvement de panique parmi ses congénères. Mais, du bout du pont, le druide est là qui les rappelle à l'ordre. D'une voix autoritaire, il leur commande de passer à l'attaque.",
      "Les Vazhags lui obéissent aussitôt et marchent sur vous en rangs serrés.",
      "HORDES DE VAZHAGS HABILETÉ : 32 ENDURANCE : 40 Si vous sortez vainqueur du combat, rendez-vous au 288."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur du combat, rendez-vous au 288.",
        "targetId": "288"
      }
    ],
    "combat": {
      "name": "HORDES DE VAZHAGS",
      "combatSkill": 32,
      "endurance": 40,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "259": {
    "id": "259",
    "text": [
      "L'influence maléfique qui imprégnait la pièce a maintenant disparu. Vous fermez les yeux et, pendant quelques secondes, vous laissez votre Intuition Magna-kaï analyser les résidus psychiques à l'endroit où Exterminus s'est volatilisé. Peu à peu, des images se forment dans votre esprit et le secret de la boule de cristal vous apparaît dans sa terrifiante vérité.",
      "Cette sphère n'appartenait pas au monde que vous connaissez. Elle avait été façonnée par Naar, le tout-puissant Maître du Mal. C'est grâce à elle que ce dernier entrait en contact avec l'Archidruide Cadak pour lui dicter ses projets de vengeance. Le Magnamund est désormais débarrassé d'un grave péril, puisque la destruction de la sphère a, par la même occasion, aboli le canal de communication qui reliait le Maître incontesté du Mal à l'un de ses plus dévoués serviteurs.",
      "En rouvrant les yeux, une délicieuse sensation de bien-être vous envahit. Vous avez l'impression de sortir d'un long et profond sommeil. (Vous gagnez 8 points d'ENDURANCE.) Un léger bruit attire votre attention du côté de la tapisserie d'où Exterminus avait surgi : l'étoffe est en train de tomber en poussière, révélant ainsi une ouverture par laquelle vous surprenez une scène qui fait renaître tous vos espoirs.",
      "Rendez-vous au 50."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 50.",
        "targetId": "50"
      }
    ],
    "heal": 8
  },
  "260": {
    "id": "260",
    "text": [
      "Banedon donne l'ordre à son équipage de nains d'appareiller et de faire route vers le Palmyrion. Dès que s'élève le vrombissement rassurant du puissant moteur, il vous conduit à sa cabine, où l'on a préparé un excellent repas à votre intention. La Nef du Ciel se déplace gracieusement dans la nuit sans lune et vous emporte par-delà les verdoyantes forêts de votre cher Sommerlund.",
      "Chassant de vos pensées la terrible mission qui vous attend, vous profitez pleinement de la compagnie de votre ami. Ensemble, vous évoquez les voyages que vous avez effectués à bord de son vaisseau et les trépidantes aventures que vous avez partagées dans les lointaines contrées d'Anarie et de Vassago-nie.",
      "Quelques heures plus tard, alors que le trajet touche presque à sa fin, vous abordez le sujet de votre nouvelle expédition. Banedon vous informe que vous débarquerez à Holona, capitale du Palmyrion, où votre guide doit déjà vous attendre. Ce guide n'est autre que le Capitaine Sirmaine, dont le nom vous est bien connu.",
      "Il vous a été maintes fois vanté en raison de sa bravoure et de ses brillants faits d'armes lors de la guerre contre les Seigneurs des Ténèbres. Ce valeureux guerrier s'est en outre illustré dans le cadre de nombreuses batailles, et une bonne douzaine de Pays Libres lui doivent une fière chandelle.",
      "Le seigneur Rimoah a donc parfaitement organisé votre mission, car dans tout le Magnamund Central, vous n'auriez pu souhaiter de meilleur guide que le Capitaine Sir-maine. Il est une heure du matin quand la Nef du Ciel survole les eaux du Reloni, le fleuve qui arrose Holona.",
      "Le vaisseau se pose en douceur sur le toit du Canatarium, le plus grand des huit édifices municipaux. Le Capitaine Sirmaine vient immédiatement à votre rencontre pour vous accueillir.. C'est un homme robuste, dont le visage fier et intelligent porte les traces des nombreux combats qu'il a livrés.",
      "Il vous tend la main, mais vous ne pouvez réprimer un léger sursaut en sentant vos doigts se refermer sur la froideur de l'acier.",
      "« Un petit souvenir de la bataille de Vellino car, malheureusement, l'originale m'a été volée par la hache d'un Drakkarim », vous explique-t-il en exposant sa main de métal à la lumière des lanternes de la Nef du Ciel. Le Capitaine tient absolument à quitter Holona avant le lever du jour.",
      "Un chariot bâché vous attend au pied du bâtiment ; il vous conduira à Valfort, une citadelle qui se trouve aux abords de la forêt de Ruel. Avant votre départ, Banedon vous souhaite bonne chance et vous informe que son vaisseau et son équipage se tiendront prêts à appareiller pour vous ramener au plus vite au Sommerlund, lorsque vous aurez achevé votre quête.",
      "Car il va sans dire que, pour lui, le succès de votre mission ne fait aucun doute. Après avoir pris congé de votre fidèle ami, vous vous installez confortablement dans le chariot conduit par le Capitaine et, au bout de quelques kilomètres, vous sombrez dans un profond sommeil.",
      "A votre réveil, une aube grise se lève déjà sur les plaines du Palmyrion et le son du clairon salue votre arrivée à Valfort. Un détachement de cavaliers arborant l'uniforme du Capitaine Sirmaine - une cotte de mailles couverte d'une tunique à damier rouge et bleu - sort de l'avant-poste pour vous faire escorte.",
      "Le Capitaine les salue et regarde avec fierté la formation se déplacer dans un ordre impeccable jusqu'à l'entrée des fortifications. A l'intérieur, malgré l'heure matinale, la cour de la garnison résonne déjà des ordres lancés par les officiers et du pas cadencé des soldats.",
      "Le chariot vous dépose devant la tour de guet et le Capitaine vous conduit jusqu'à ses quartiers, au dernier étage. Vous passez la journée à discuter de votre itinéraire, car vous ne vous remettrez en route qu'à la tombée de la nuit. Après avoir minutieusement étudié les cartes étalées sur son bureau, le Capitaine vous soumet deux façons d'aborder Mogaruith, la forteresse des Cénériens.",
      "Le trajet le plus direct - mais aussi le plus risqué - serait de passer à l'est, par la forêt de Ruel. A ce propos, vous vous rappelez ce que Rimoah vous a raconté sur les nombreux dangers que recèle la forêt et, rien que d'y penser, un frisson vous parcourt l'échiné.",
      "L'autre solution serait de passer au sud, par les monts Skardos, en empruntant l'un des nombreux tunnels qui traversent la chaîne de part en part.",
      "Si vous parvenez à découvrir la piste de Skardos, la route secrète que les Cénériens utilisent pour aller et venir hors de leur royaume, vous parviendrez directement à Mogaruith. Consultez la carte qui figure au début du livre avant de prendre une décision.",
      "Ensuite, si vous voulez atteindre Mogaruith par la forêt de Ruel, rendez- vous au 228.",
      "Si vous jugez préférable de passer par les monts Skardos, rendez-vous au 309."
    ],
    "choices": [
      {
        "text": "Si vous jugez préférable de passer par les monts Skardos, rendez-vous au 309.",
        "targetId": "309"
      }
    ]
  },
  "261": {
    "id": "261",
    "text": [
      "Sûr de vous et de votre pouvoir Magnakaï, vous concentrez toute votre attention sur le verrou afin de le faire céder. Quelle n'est pas votre surprise en constatant qu'il est protégé par un sortilège...",
      "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï, rendez-vous au 330.",
      "Sinon, rendez-vous au 92."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Alchimie Kaï, rendez-vous au 330.",
        "targetId": "330"
      },
      {
        "text": "Sinon, rendez-vous au 92.",
        "targetId": "92"
      }
    ]
  },
  "262": {
    "id": "262",
    "text": [
      "Vous vous campez au centre du hall, puis vous dégainez votre arme, prêt à affronter la patrouille. Tout d'abord, vous voyez poindre un Tzarg tenu en laisse au bout d'une grosse chaîne. L'espèce de gros batracien laisse errer sa gueule au ras des marches en reniflant comme un chien de chasse.",
      "Derrière lui viennent huit guerriers Vazhags armés d'épées et de masses. Dès qu'ils vous aperçoivent, ils se mettent à couiner d'excitation et se déploient dans le but de vous encercler. Libéré de ses maîtres, le Tzarg s'empresse de se réfugier au fond du tunnel, afin de se mettre hors d'atteinte d'un combat qui s'annonce sanglant.",
      "PATROUILLE DE VAZHAGS HABILETÉ : 40 ENDURANCE : 40 Vous ne pouvez pas, quant à vous, fuir ce combat. Les Vazhags vous attaquent simultanément et vous devrez les affronter comme s'il s'agissait d'un seul et même adversaire.",
      "Si vous l'emportez, rendez-vous au 83."
    ],
    "choices": [
      {
        "text": "Si vous l'emportez, rendez-vous au 83.",
        "targetId": "83"
      }
    ],
    "combat": {
      "name": "PATROUILLE DE VAZHAGS",
      "combatSkill": 40,
      "endurance": 40,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "263": {
    "id": "263",
    "text": [
      "Avec une aisance déconcertante, vous saisissez la lame au vol alors qu'elle n'est plus qu'à quelques centimètres de votre torse. Le Vazhag vous regarde avec des yeux ronds, momentanément paralysé par le spectacle dont il vient d'être témoin. Néanmoins, il retrouve vite ses esprits quand il réalise que vous lui renvoyez la lame à toute volée.",
      "Malheureusement pour vous, le poignard manque sa cible d'un doigt. Il va rebondir contre le mur du fond avec un tintement sec et tombe aux pieds du Vazhag qui le ramasse prestement.",
      "L'arme au poing, vous avancez vers lui sans perdre une seconde : VAZHAG OBÈSE HABILETÉ : 18 ENDURANCE : 28 Si vous sortez vainqueur du combat, rendez-vous au 121."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur du combat, rendez-vous au 121.",
        "targetId": "121"
      }
    ],
    "combat": {
      "name": "VAZHAG OBÈSE",
      "combatSkill": 18,
      "endurance": 28,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "264": {
    "id": "264",
    "text": [
      "Vous levez la main droite et prononcez les paroles magiques que Banedon vous a enseignées, puis vous concentrez tout le pouvoir du sortilège sur vos trois premiers doigts. Aussitôt, vous ressentez une atroce sensation de brûlure : vous perdez 2 points d'ENDU-RANCE.",
      "En dépit de vos souffrances, vous résistez à la tentation d'abandonner la manœuvre et vous pointez vos doigts vers la silhouette fuyante du druide. 11 se produit aussitôt un craquement sonore, suivi de près par un éclair bleuté qui jaillit du bout de vos doigts et frappe le druide comme s'il avait reçu un coup de marteau entre les deux omoplates.",
      "Il culbute en avant et tombe dans un buisson d'épineux. Grognant de rage et de douleur, il tente de se relever tout en cherchant à mettre la main sur sa baguette en or. Guidés par quelque instinct surnaturel, ses doigts se referment instantanément sur elle, mais, avant qu'il ne puisse s'en servir, vous vous ruez sur lui, l'arme au poing, et vous le tuez net d'un violent coup sur le crâne.",
      "La curiosité vous pousse à retirer le masque vert qui cache son visage. Vous découvrez alors un faciès hideux, grené par la maladie et n'ayant presque plus rien d'humain. Surmontant votre répulsion, vous fouillez le druide et trouvez sur lui les objets suivants : Un poignard Une robe de Druide de Cener (Si vous décidez de la garder, sachez qu'elle prendra la place de 2 Objets dans votre Sac à Dos.) Un masque Cénérien Vingt Lunes (soit l'équivalent de 5 Pièces d'Or) Si vous voulez conserver certains de ces objets, n'oubliez pas d'apporter les modifications nécessaires sur votre Feuille d'Aventure.",
      "Votre science Magnakaï vous informe que la baguette du druide ne possède plus aucun pouvoir magique ; ce dernier s'est trouvé annihilé en même temps que son malfaisant propriétaire. Vous vous penchez pour la lui retirer des mains, mais à peine l'avez-vous touchée qu'elle tombe en poussière, tout en dégageant une senteur nauséabonde.",
      "Comme le crépuscule approche, vous quittez la clairière en passant par la trouée, puis vous vous engagez à grands pas sur le sentier boueux qui la prolonge.",
      "Rendez-vous au 10."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 10.",
        "targetId": "10"
      }
    ],
    "loot": {
      "gold": 5
    }
  },
  "265": {
    "id": "265",
    "text": [
      "Par prudence, vous faites usage de votre don de camouflage et de protection psychique, au cas où un membre de l'assemblée serait à même de détecter votre présence. Au bout de quelques minutes, un autre druide surgit par un escalier situé sur votre gauche.",
      "Il est d'une stature imposante et sa longue robe bleue bordée de velours noir ajoute à sa prestance. L'assistance entière se lève tandis qu'il se dirige vers l'autel.",
      "« Asseyez-vous, frères » ordonne-t-il d'une voix forte et grave en se tournant face à la salle. Vous pensez tout d'abord qu'il s'agit de l'Archidruide Cadak en personne, mais le discours qu'il tient vous en dissuade aussitôt.",
      "« Frères, la bataille que nous avons livrée contre les Sloviens s'est terminée en notre faveur. Nous avons repoussé leur attaque et nos postes de défense le long de la Storn demeurent intacts. Les Sloviens sont vaincus ! Ils sont désormais trop faibles pour constituer une menace, et j'atteste devant vous que moi, Kadrian, j'ai vu les eaux du grand fleuve rougir du sang de nos ennemis. »",
      "A ces mots, l'assemblée laisse exploser sa joie, mais Kadrian leur impose rapidement le silence. Puis, les yeux fixés sur les pages d'un gros livre posé sur l'autel, il commence à lire une oraison dédiée à Xuzargha, dieu de la Pestilence. Après avoir relevé le capuchon de leur coule, les fidèles s'agenouillent et ferment les yeux afin d'écouter les paroles de Frère Kadrian avec tout le respect qui convient.",
      "Soucieux de ne pas vous attarder en ces lieux, vous parcourez la salle du regard en quête d'une issue. Il y a deux possibilités de fuite : soit par l'escalier tournant que Kadrian a emprunté, soit à droite, par une porte sur laquelle est inscrit le mot « Vestibule ».",
      "Si vous voulez descendre l'escalier tournant, rendez-vous au 119.",
      "Si vous préférez sortir par la porte indiquant « Vestibule », rendez-vous au 280."
    ],
    "choices": [
      {
        "text": "Si vous voulez descendre l'escalier tournant, rendez-vous au 119.",
        "targetId": "119"
      },
      {
        "text": "Si vous préférez sortir par la porte indiquant « Vestibule », rendez-vous au 280.",
        "targetId": "280"
      }
    ]
  },
  "266": {
    "id": "266",
    "text": [
      "Le sol du souterrain est essentiellement constitué de pierre, mais il est recouvert de débris rocheux qui crissent sous vos pas. Vous avancez donc avec d'infinies précautions, afin de ne pas trahir votre présence par le moindre bruit. Plus vous vous enfoncez dans le tunnel, plus la puanteur et la chaleur ambiantes deviennent fortes, à tel point que vous avez l'impression d'avoir avalé des braises.",
      "Vous déclenchez votre système de défense Magnakaï pour vous isoler de la chaleur et vous immuniser contre l'atmosphère de cet endroit, que vous sentez chargée de micro-organismes virulents. Finalement, le tunnel aboutit à un vaste palier d'où part un escalier abrupt qui descend dans l'obscurité.",
      "A gauche et à droite, vous distinguez deux entrées de grottes condamnées par des barreaux de fer rouillés. Le silence des lieux n'est troublé que par le ruissellement d'une eau trouble qui tombe goutte à goutte sur le sol, mais vous sentez instinctivement que ces grottes sont habitées.",
      "En effet, des formes sombres, entremêlées, s'entassent en masse compacte dans les recoins. Vous voyez çà et là s'entrouvrir un œil, puis un autre, et un autre encore. Peu à peu, un torse et des membres se dégagent de cet amoncellement confus et une silhouette émerge de l'ombre.",
      "L'espace d'un instant, vous apercevez la créature dans son ensemble et vous frémissez d'horreur à sa vue. Elle possède une tête de chèvre montée sur un long cou sinueux qui hoquette convulsivement à chaque mouvement, et son corps boursouflé porte les stigmates d'une maladie virulente.",
      "Alors qu'elle avance en titubant vers les barreaux de sa cellule, vous voyez luire au fond de ses yeux un affreux éclat verdâtre. Vous êtes partagé entre la pitié et le dégoût pour cette lamentable créature, mais ce sentiment fait rapidement place à la peur lorsque vous vous rendez compte que l'éclat vert n'émane pas de ses propres yeux, mais se reflète en eux !",
      "Vous faites aussitôt volte-face en portant machinalement la main à votre arme. En haut de l'escalier, vous apercevez alors une monstrueuse silhouette, entièrement faite de flammes verdoyantes. Un trou béant de noirceur semble faire office de gueule et deux tentacules ardents fouettent rageusement l'air autour d'elle.",
      "Voyant la créature de feu s'approcher vers vous en planant, les prisonniers des grottes sortent de leur torpeur et se mettent à secouer les barreaux de leurs cellules avec frénésie.",
      "Si vous maîtrisez la Grande Discipline de l'Écran Psychique, rendez-vous au 211.",
      "Sinon, rendez-vous au 152."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Écran Psychique, rendez-vous au 211.",
        "targetId": "211"
      },
      {
        "text": "Sinon, rendez-vous au 152.",
        "targetId": "152"
      }
    ]
  },
  "267": {
    "id": "267",
    "text": [
      "Les yeux rivés sur la plate-forme d'observation, vous attendez que la chaîne ait terminé sa trajectoire avant de lâcher prise et de vous propulser dans les airs. Vous avez parfaitement calculé votre saut, mais votre réception laisse à désirer; vous heurtez violemment la rambarde et vous vous éraflez le nez, les tibias et les coudes. (Vous perdez 2 points d'ENDURANCE.) Fort heureusement, vous parvenez à reprendre votre équilibre et à vous hisser sur la galerie.",
      "De là, vous vous hâtez vers la porte qui la dessert.",
      "Rendez-vous au 128."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 128.",
        "targetId": "128"
      }
    ],
    "damage": 2
  },
  "268": {
    "id": "268",
    "text": [
      "L'un des Hommes-Rats pointe son museau à quelques centimètres de votre visage et vous annonce, à votre grande surprise, que vous pouvez demander une audience à l'Archidruide, à condition de signaler votre arrivée au bureau d'admission.",
      "« Les inscriptions se font ici », vous dit-il en désignant une porte latérale. Aussitôt, votre Intuition Magnakaï vous prévient que le Vazhag a menti; c'est tout bonnement une cellule de prison qui vous attend derrière cette porte.",
      "Si vous décidez malgré tout de passer la porte indiquée, rendez-vous au 30.",
      "Si vous ne souhaitez pas entrer par cette porte, rendez-vous au 162."
    ],
    "choices": [
      {
        "text": "Si vous décidez malgré tout de passer la porte indiquée, rendez-vous au 30.",
        "targetId": "30"
      },
      {
        "text": "Si vous ne souhaitez pas entrer par cette porte, rendez-vous au 162.",
        "targetId": "162"
      }
    ]
  },
  "269": {
    "id": "269",
    "text": [
      "Vous résistez de toute votre âme au terrible pouvoir qui s'impose à vous. En désespoir de cause, vous implorez les dieux Kaï et Ishir de vous venir en aide et, comme en réponse à votre prière, vous sentez confusément que le tourbillon commence à perdre de sa force.",
      "Une douleur atroce vous vrille le corps et l'esprit (vous perdez 5 points d'ENDURANCE) mais cela ne suffit pas à briser votre remarquable volonté de sortir vivant de cette pénible épreuve. Soudain, les ténèbres tournoyantes se dissipent entièrement et vous vous retrouvez à genoux sur le sol, face au trône de Cadak, hors d'haleine et tremblant encore sous le choc de l'abominable épreuve que vous venez de subir.",
      "Vous vous remettez lentement debout quand un léger bruit dans votre dos vous avertit que quelqu'un - ou quelque chose - est en train de se mouvoir dans la pièce.",
      "Rendez-vous au 222."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 222.",
        "targetId": "222"
      }
    ],
    "damage": 5
  },
  "270": {
    "id": "270",
    "text": [
      "Utilisant à bon escient votre pouvoir du Nexus, vous faites tomber du chariot quelques sacs et quelques caisses, dont le contenu se déverse sur le sol. Bien qu'il s'agisse de denrées avariées, les femelles Vazhags se précipitent dessus avec voracité. Vous profitez de la confusion qui s'ensuit pour sortir de votre cachette et vous faufiler discrètement par le portail.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité, ajoutez 2 au chiffre tiré.",
      "Si le résultat obtenu est inférieur ou égal à 4, rendez-vous au 169.",
      "Si ce résultat est supérieur à 4, rendez-vous au 14."
    ],
    "choices": [
      {
        "text": "rendez-vous au 169.",
        "targetId": "169"
      },
      {
        "text": "rendez-vous au 14.",
        "targetId": "14"
      }
    ]
  },
  "271": {
    "id": "271",
    "text": [
      "Vous longez le tunnel ouest sur plusieurs centaines de mètres avant d'être arrêté par une vieille porte en chêne. Dès que vous vous en approchez, vous sentez que se cache derrière elle un repaire de corruption. La puanteur malsaine qui en émane décuple votre détermination et, d'un violent coup de pied, vous pulvérisez le panneau de bois.",
      "Maintenant, la voie est libre, mais le spectacle qui s'offre à vos yeux vous cloue sur place. Rendez- vous au 290."
    ],
    "choices": []
  },
  "272": {
    "id": "272",
    "text": [
      "Vos défenses mentales vacillent sous la soudaineté de cette agression, et une onde de douleur vous vrille le cerveau. (Vous perdez 5 points d'ENDURANCE.) Vous réussissez à calmer vos souffrances grâce à votre pouvoir psychique Magnakaï, mais l'attaque vous a laissé en état de choc.",
      "Constatant votre trouble, le druide profite aussitôt de son avantage pour exhiber un poignard et se jeter sauvagement sur vous, dans la ferme intention de vous le planter dans le cœur. DRUIDE DE CENER HABILETÉ : 23 ENDURANCE : 27 En raison de la rapidité de votre adversaire et de votre malaise passager, réduisez votre HABILETÉ de 20 points pendant le premier Assaut.",
      "Si vous parvenez à vaincre votre ennemi, rendez- vous au 4."
    ],
    "choices": [],
    "combat": {
      "name": "DRUIDE DE CENER",
      "combatSkill": 23,
      "endurance": 27,
      "mindblastImmune": false,
      "undead": false
    },
    "damage": 5
  },
  "273": {
    "id": "273",
    "text": [
      "Vous tranchez le tentacule d'un coup net, mais il en vient immédiatement un autre, puis un autre encore. Ils s'agrippent à vous comme des serpents constricteurs et vous vous retrouvez bientôt les jambes ligotées, irrésistiblement attiré vers le fond du bourbier.",
      "Vous luttez de toutes vos forces pour ne pas vous enfoncer dans la fange et vous donnez de grands coups à l'aveuglette, dans l'espoir de blesser votre attaquant à mort. Soudain, vous sentez la pointe de votre arme heurter quelque chose, et la pression des tentacules se relâche brutalement.",
      "Hélas ! Ce répit n'est que de courte durée car bientôt les bras de l'invisible créature vous enserrent avec une force et une ténacité décuplées. Tout à coup, une douleur fulgurante vous traverse les chevilles. Une multitude de crochets acérés, saillant des tentacules, viennent s'enfoncer dans votre chair.",
      "Vous ne pouvez réprimer un hurlement et, sous la surface boueuse, un rire gargouillant fait écho à vos cris.",
      "Si vous maîtrisez la Grande Discipline du Contrôle Animal, rendez-vous au 339.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 47."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Contrôle Animal, rendez-vous au 339.",
        "targetId": "339"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 47.",
        "targetId": "47"
      }
    ]
  },
  "274": {
    "id": "274",
    "text": [
      "Une fois la fumée dissipée, vous voyez un trou aux bords calcinés à la place du verrou qui était encore là, quelques minutes auparavant. D'un coup de pied, vous ouvrez la porte. Rendez- vous au 78."
    ],
    "choices": []
  },
  "275": {
    "id": "275",
    "text": [
      "En dépit de tous vos efforts, vous n'arrivez pas à libérer la chaîne de son point d'attache. Pour ce faire, il vous faudrait une arme plus longue afin de pouvoir faire levier sur la goupille. Autour de vous, il n'y a rien qui puisse remplir cet office, mais l'image de l'outil idéal vous vient subitement à l'esprit.",
      "En dessous de vous, sur la première plate-forme, vous apercevez alors la lance d'un des Disciples de Vashna que vous avez tués. Vous empoignez aussitôt .l'échelle et descendez à la hâte, mais, alors que vous sautez sur la plate-forme en question, vous vous trouvez nez à nez avec un archer Vazhag.",
      "D'un vif coup de pied, vous le faites basculer dans le vide, mais à peine a-t-il disparu qu'un autre surgit pour le remplacer. Celui-ci étant armé d'un long coutelas, vous dégainez votre arme pour le combattre.",
      "ARCHER VAZHAG HABILETÉ: 22 ENDURANCE: 21 Si vous l'emportez sur votre adversaire, rendez-vous au 161."
    ],
    "choices": [
      {
        "text": "Si vous l'emportez sur votre adversaire, rendez-vous au 161.",
        "targetId": "161"
      }
    ],
    "combat": {
      "name": "ARCHER VAZHAG",
      "combatSkill": 22,
      "endurance": 21,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "276": {
    "id": "276",
    "text": [
      "Tout à coup, le Vazhag cesse de ronfler. Dans le silence pesant qui s'abat sur les lieux, vous vous immobilisez immédiatement. La créature soulève lentement une paupière, puis l'autre, et se met à renifler d'un air soupçonneux. Soudain, comme stimulé par une décharge électrique, l'Homme-Rat bondit hors de son lit et se met à chercher quelque chose sous la couverture de fourrure.",
      "Sans perdre un instant, vous vous ruez vers la porte dérobée, mais elle vous résiste : le Vazhag vient de la bloquer à l'aide d'un stratagème quelconque. Vous faites alors volte-face pour l'affronter, l'arme au poing, puis vous avancez sur lui d'un air menaçant.",
      "Le pleutre recule en roulant des yeux effarés et se blottit dans un coin de la chambre. Cependant, avant que vous l'ayez rejoint, vous entendez une course précipitée et, tout à coup, une forme jaillit de derrière le rideau. C'est une gigantesque créature canine aux yeux injectés de sang.",
      "Elle est pourvue d'une puissante mâchoire de crocodile, et vous voyez ses muscles rouler sous son pelage noir bleuté. En l'observant plus attentivement, vous remarquez que ses flancs sont grêlés par une maladie infectieuse.",
      "Si vous possédez un Arc et que vous souhaitiez l'utiliser, rendez-vous au 187.",
      "Sinon, rendez-vous au 45."
    ],
    "choices": [
      {
        "text": "Si vous possédez un Arc et que vous souhaitiez l'utiliser, rendez-vous au 187.",
        "targetId": "187"
      },
      {
        "text": "Sinon, rendez-vous au 45.",
        "targetId": "45"
      }
    ]
  },
  "277": {
    "id": "277",
    "text": [
      "Mû par un réflexe purement instinctif, vous plongez la main dans votre Sac à Dos et vous en retirez un morceau de champignon que vous engloutissez sur-le-champ. Quelques secondes plus tard, les effets bénéfiques du Champignon de Baylon se font sentir: le feu s'éteint dans vos poumons et vous recommencez à respirer plus librement.",
      "Désormais immunisé contre les spores vénéneuses, vous poursuivez tant bien que mal votre chemin, jusqu'à ce que vous atteigniez une partie plus saine du souterrain. Ainsi, grâce à une substance venue d'un autre monde, vous avez survécu au poison mortel des Khloros.",
      "Rares sont ceux qui pourraient en dire autant !",
      "Rendez-vous au 79."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 79.",
        "targetId": "79"
      }
    ]
  },
  "278": {
    "id": "278",
    "text": [
      "Les flèches ricochent sur les barreaux de fer et vous frôlent de toutes parts, mais votre remarquable agilité ainsi que votre extrême rapidité vous permettent de continuer votre ascension indemne.",
      "Rendez-vous au 103."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 103.",
        "targetId": "103"
      }
    ]
  },
  "279": {
    "id": "279",
    "text": [
      "Vous sortez de la cabane en ruine et courez vers une étroite trouée au milieu des arbres. Un couloir végétal, sombre et menaçant, s'ouvre devant vous. En entendant se rapprocher les cris fanatiques des Vazhags, vous vous engagez à vos risques et périls dans ce passage obscur.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 190. Sinon, rendez- vous au 315."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Invisibilité, rendez-vous au 190.",
        "targetId": "190"
      }
    ]
  },
  "280": {
    "id": "280",
    "text": [
      "Une fois à l'intérieur, vous refermez doucement la porte sur vous en poussant un soupir de soulagement. Vous vous trouvez dans une petite salle où flotte une odeur âcre d'encens et de soufre. Le long du mur, des robes rouges sont accrochées à des patères de bois et, au milieu de la pièce, plusieurs masques sont empilés sur une table.",
      "Ils sont de couleur verte et façonnés dans un minéral qui ressemble à du verre.",
      "Si vous possédez déjà une robe et un masque de Cener, rendez-vous au 126.",
      "Si vous n'avez ni l'un ni l'autre de ces objets, ou bien un seul sur les deux, rendez-vous au 304."
    ],
    "choices": [
      {
        "text": "Si vous possédez déjà une robe et un masque de Cener, rendez-vous au 126.",
        "targetId": "126"
      },
      {
        "text": "Si vous n'avez ni l'un ni l'autre de ces objets, ou bien un seul sur les deux, rendez-vous au 304.",
        "targetId": "304"
      }
    ]
  },
  "281": {
    "id": "281",
    "text": [
      "La créature résiste farouchement à votre volonté, et son œil s'écarquille de stupeur au moment où elle découvre votre identité. Vous remarquez alors que sa main osseuse glisse insensiblement vers un bouton situé sur le côté de son bureau. De toute évidence, il s'agit d'une alarme.",
      "Vous vous ruez sur le scribe mais il est trop tard : il vient d'appuyer sur le bouton.",
      "Rendez-vous au 11."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 11.",
        "targetId": "11"
      }
    ]
  },
  "282": {
    "id": "282",
    "text": [
      "Les yeux du Vazhag s'écarquillent d'effroi en vous voyant approcher. Il ouvre toute grande la bouche pour hurler, mais vous lui faites rentrer son cri dans la gorge en l'assommant. Vous vous apprêtez à fouiller ses poches quand un léger grattement vous interrompt ; la créature du puits est certainement en train de rôder dans les parages.",
      "Plutôt que de courir le risque d'affronter cette innommable chose, vous traversez la pièce en courant, puis vous sortez par la porte dérobée.",
      "Rendez-vous au 308."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 308.",
        "targetId": "308"
      }
    ]
  },
  "283": {
    "id": "283",
    "text": [
      "Vous heurtez la surface dans une gerbe d'éclaboussures, puis vous coulez à pic. Les douves de Mogaruith font office d'égout, et vous sentez les eaux infectes s'infiltrer dans vos narines et votre bouche. Sans la protection que vous assure votre pouvoir Magnakaï de la Guérison et du Nexus, vous succomberiez aux toxines de ce bouillon de culture en l'espace de quelques secondes !",
      "En haut des remparts, les Vazhags poussent des cris de victoire, car ils sont persuadés que vous n'avez pas pu survivre à votre plongeon. De mémoire de Cénérien, personne n'est jamais ressorti vivant de ces douves. Ils s'en retournent donc à leurs activités et, lorsque vous remontez à la surface, il n'y a plus personne pour vous épier.",
      "Hélas, la chance ne reste pas longtemps de votre côté : tandis que vous vous hissez péniblement sur la rive, vous voilà confronté à trois Vazhags qui s'en reviennent de guerre. Deux d'entre eux sont à pied, mais le troisième est monté sur un cheval Slovien.",
      "De plus, il est muni d'une longue lance de cavalerie, probablement prise à l'ennemi et, d'après la façon dont il la tient, il est clair qu'il est expert dans le maniement de cette arme. Dans un couinement agressif, les deux premiers Vazhags se jettent sur vous toutes griffes dehors, mais il en faut plus pour vous dérouter ; en deux temps, trois mouvements, vous les étendez raides morts.",
      "Immédiatement, le troisième entre en action à son tour. Il vous charge en dirigeant le fer de sa lance droit sur votre cœur. Après avoir esquivé la première attaque, vous vous campez fermement sur vos jambes pour affronter la suite.",
      "LANCIER VAZHAG HABILETÉ! 32 ENDURANCE: 20 Si vous sortez vainqueur de ce combat, rendez-vous au 113."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 113.",
        "targetId": "113"
      }
    ]
  },
  "284": {
    "id": "284",
    "text": [
      "Au-delà de l'étroite ouverture, vous distinguez un passage naturel pris entre deux parois de roche brute. Une multitude d'empreintes sont restées gravées dans la poussière du sol, mais votre sens de l'Exploration vous rassure aussitôt : aucune créature dépassant la taille d'un chat domestique n'a emprunté cette voie durant les trois derniers mois.",
      "Vous vous engagez donc en toute confiance dans ce tunnel et, malgré l'obscurité impénétrable qui y règne, vous suivez aisément le parcours sinueux qui vous fait pénétrer de plus en plus profondément sous les monts Skardos. Au bout de trois kilomètres, vous parvenez à un croisement avec un souterrain transversal allant d'est en ouest.",
      "Contrairement au passage d'où vous venez, il s'agit d'un tunnel artificiel, car on voit sur le roc les traces des pics et des pioches qui l'ont creusé. Votre Intuition Magnakaï ne décèle aucun danger imminent et votre sens de l'Exploration aucune empreinte inquiétante.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ren-dez-vous au 49.",
      "Si vous ne maîtrisez pas cette Grande Discipline, vous pouvez prendre le nouveau souterrain vers l'est (rendez-vous au 118) ou bien vers l'ouest (rendez-vous au 189)."
    ],
    "choices": [
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, vous pouvez prendre le nouveau souterrain vers l'est (rendez-vous au 118) ou bien vers l'ouest (rendez-vous au 189).",
        "targetId": "118"
      }
    ]
  },
  "285": {
    "id": "285",
    "text": [
      "Silencieux comme une ombre, vous longez le couloir en direction de la lumière, le cœur battant d'espoir à l'idée de découvrir enfin le laboratoire où les Cénériens pratiquent leurs odieuses expériences. L'entrée du laboratoire n'est pas gardée, aussi vous faufilez-vous sans encombre à l'intérieur, avant de vous réfugier dans l'ombre d'un des gros piliers qui soutiennent la voûte.",
      "Au centre de la pièce, vous apercevez deux personnages portant de longues coules de druide. Ils sont penchés sur une table en pierre et ont à portée de main tout un matériel complexe et étrange. Sur la table est allongé une espèce de gros batracien dont les membres sont ligotés à l'aide de courroies.",
      "En vous approchant discrètement, vous constatez qu'il s'agit d'un Slot, une bête de trait fréquemment utilisée le long de la Storn pour remorquer les bateaux à contre-courant. Vous êtes pris d'un haut-le-cœur en vous rendant compte que les druides sont en train de disséquer cette pauvre bête alors qu'elle est encore vivante et consciente.",
      "Si vous avez déjà eu l'occasion de visiter la ville de Quar-len lors d'une précédente aventure, rendez-vous au 109. Sinon, rendez- vous au 247."
    ],
    "choices": [
      {
        "text": "Si vous avez déjà eu l'occasion de visiter la ville de Quar-len lors d'une précédente aventure, rendez-vous au 109.",
        "targetId": "109"
      }
    ]
  },
  "286": {
    "id": "286",
    "text": [
      "Un silence surnaturel s'abat sur les lieux après que vous avez porté le coup de grâce à la dernière créature. La horde hurlante s'est arrêtée de ramper, et les faciès hideux se tordent de désolation à la vue des monstres qui se convulsent dans les affres de l'agonie.",
      "Vous vous tournez face aux goules, les défiant d'un regard inflexible, mais aucune d'elles ne semble désireuse de continuer le combat. Une à'une, elles se retirent lentement et se fondent parmi la végétation. Sur le sol entaché de sang, au bord d'un des gouffres, vous remarquez alors une chaîne de cuivre à laquelle est attachée une petite clé.",
      "Il ne s'en dégage aucune aura maléfique, sa forme et les inscriptions qu'elle porte ne vous révèlent rien quant à son origine ni sa fonction.",
      "Si vous souhaitez conserver cette Clé de Cuivre, inscrivez-la sur votre Feuille d'Aventure. Ensuite, vous vous hâtez de quitter les lieux et de poursuivre votre chemin sous le tunnel végétal. Durant plusieurs kilomètres, vous progressez dans une quasi-obscurité.",
      "Seuls quelques rais de lumière filtrent de temps à autre à travers le feuillage. Finalement, vous parvenez à une clairière où se dressent les ruines d'une cabane en pierre. Vous vous en approchez prudemment, redoutant quelque présence maléfique, mais vous ne trouvez à l'intérieur que des plaques de moisissure sur les murs et des touffes d'herbe sombre par terre.",
      "Cependant, au bout de quelques secondes, votre Intuition Magnakaï vous avertit que le péril ne réside pas à l'intérieur, mais à l'extérieur de la cabane. En épiant les environs par une fissure, vous apercevez effectivement un groupe de Vazhags qui surgit à l'entrée de la clairière, reniflant bruyamment l'atmosphère lourde et humide des lieux.",
      "L'un d'eux n'est pas de leur race. Vous ne pourriez jurer qu'il s'agit d'un être humain, bien qu'il en ait la taille et la stature, car sa houppelande rouge dissimule ses traits. A un moment, pourtant, il se détourne et vous apercevez l'éclat rutilant d'un masque vert qui couvre son visage.",
      "Vous en déduisez aussitôt que c'est un Druide de Cener. Il tient à la main une baguette en or qui émet des ondes magiques, ce qui explique la sensation étrange que vous avez éprouvée tout à l'heure. Le Cénérien ordonne à son escorte de faire halte. Les Vazhags obéissent sur-le-champ et regardent attentivement leur maître qui se met à balayer lentement la clairière du bout de sa baguette.",
      "En toute hâte, vous utilisez votre science Magnakaï de l'Invisibilité et de l'Exploration pour échapper à toute détection, mais le druide suspend soudain son geste et pointe sa baguette sur la cabane. Une onde d'énergie psychique vous frappe en plein crâne.",
      "Vous la sentez qui croît régulièrement afin de tester votre résistance.",
      "Si vous maîtrisez la Grande Discipline de l'Écran Psychique, rendez-vous au 44.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 298."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Écran Psychique, rendez-vous au 44.",
        "targetId": "44"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 298.",
        "targetId": "298"
      }
    ]
  },
  "287": {
    "id": "287",
    "text": [
      "La statuette est en or massif. Elle représente une femme aux cheveux longs et aux membres déliés et, si ce n'était les cornes de chèvre ornant son front et sa queue fourchue, vous la croiriez inspirée du modèle d'une ravissante jeune fille. Une Clé d'or est appuyée contre la statuette.",
      "Si vous voulez vous en emparer, inscrivez-la sur votre Feuille d'Aventure, dans la liste des Objets Spéciaux. Vous contemplez pensivement la petite statue depuis un moment, quand un léger bruit vous tire subitement de votre rêverie ; il y a quelqu'un - ou quelque chose — dans l'antichambre.",
      "Rendez-vous au 222."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 222.",
        "targetId": "222"
      }
    ]
  },
  "288": {
    "id": "288",
    "text": [
      "Alors que vous portez le coup de grâce à votre dernier adversaire, vous tournez la tête vers le pont et vous voyez le Druide de Cener trembler d'effroi. L'aisance avec laquelle vous vous êtes débarrassé de son escorte semble l'avoir rudement ébranlé !",
      "Soudain, il retrousse les plis de sa robe et s'enfuit vers le souterrain par où il était arrivé en compagnie de son escorte. Voulant à tout prix l'empêcher de donner l'alarme, vous vous hissez prestement sur le pont-levis et vous vous lancez à sa poursuite.",
      "La silhouette rouge s'engouffre dans un tunnel étroit, mais fort bien éclairé, aussi n'avez-vous aucun mal à garder sa trace. Tel un lion pourchassant une gazelle, vous gagnez rapidement du terrain sur votre adversaire. Régulièrement, le druide lance des regards inquiets par-dessus son épaule.",
      "Se sentant rattrapé, il s'arrête brusquement sous l'une des lampes et lève les mains en signe de reddition. Mais au moment où vous approchez, il décroche le globe de la lampe et le lance de toutes ses forces sur vous. Un jet d'huile bouillante menace de vous atteindre en pleine face !",
      "Si vous maîtrisez la Grande Discipline du Nexus, rendez-vous au 324.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 22."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Nexus, rendez-vous au 324.",
        "targetId": "324"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 22.",
        "targetId": "22"
      }
    ]
  },
  "289": {
    "id": "289",
    "text": [
      "Sans faire le moindre bruit, vous tirez votre arme et vous vous préparez à frapper. Les Vazhags et le Céné-rien ne se sont pas rendu compte de votre présence et vous tournent le dos au moment d'entrer dans le tunnel sud. Quelle erreur fatale ! C'est précisément ce que vous attendiez pour passer à l'attaque.",
      "Vous vous ruez comme un fauve sur vos ennemis, en abattant deux d'un seul coup. Avant même qu'ils touchent terre, vous pourfendez le torse d'un troisième et vous en neutralisez un quatrième grâce à un crochet latéral qui lui sépare presque la tête du corps.",
      "Tandis que le reste de la troupe se replie à la hâte dans la plus grande confusion, vous en profitez pour reprendre votre souffle. Voyant reculer ses hommes, le Cénérien les exhorte à grands cris de revenir à l'assaut pour venger la mort de leurs camarades.",
      "Le plus téméraire d'entre eux relève le défi, mais vous déjouez sa première offensive avec une aisance décourageante et, avant qu'il en tente une seconde, vous lui transpercez le cœur d'un coup net. Vous avez mené ce combat avec une telle adresse et une telle rapidité que le druide en demeure pantois.",
      "C'en est trop pour le dernier Vazhag survivant : dans un cri de terreur abjecte, il laisse tomber sa torche et son arme, puis il s'enfuit sans demander son reste par le tunnel sud. Désormais seul face à vous, le Cénérien recule jusqu'au fond de la caverne en marmottant des paroles diaboliques.",
      "Bien que son masque dissimule entièrement ses traits, vous sentez toute la haine qui jaillit de ses yeux, tel un flot de lave en fusion. Pressé d'en finir avec lui, vous levez votre arme et avancez à grands pas, mais vous êtes subitement freiné dans votre élan par une vague d'énergie psychique à laquelle vous vous heurtez comme à un mur de pierre.",
      "Si vous maîtrisez la Grande Discipline de l'Écran Psychique, rendez-vous au 107.",
      "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 272."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Écran Psychique, rendez-vous au 107.",
        "targetId": "107"
      },
      {
        "text": "Si vous ne maîtrisez pas cette Grande Discipline, rendez-vous au 272.",
        "targetId": "272"
      }
    ]
  },
  "290": {
    "id": "290",
    "text": [
      "Vous pénétrez dans une pièce entièrement faite de marbre noir. Elle est éclairée par une douzaine de sphères lumineuses, chacune étant accrochée au-dessus d'une table d'opération où repose le corps d'un soldat Slovien. Vous tressaillez en constatant qu'ils ont tous le crâne ouvert et... vide.",
      "Leurs cerveaux, quant à eux, flottent dans des bocaux de verre posés à la tête des tables, chacun étant relié à son corps respectif par des fils de cuivre. Deux novices Cénériens s'occupent des corps. Ils portent des gants transparents et des combinaisons étroitement ajustées.",
      "Votre apparition les interrompt en plein travail. Ils se réfugient craintivement auprès de leur mentor, un druide arborant le manteau pourpre des Grands Prêtres de Cener. Ce dernier vous toise du regard et porte instinctivement la main à sa ceinture, où pend une baguette en or.",
      "« Débarrassez-moi de cet intrus ! » ordonne-t-il aux jeunes initiés en les poussant vers vous d'une rude bourrade. Redoutant apparemment plus leur maître que vous, les deux novices dégainent leur poignard d'une main tremblante, puis ils avancent vers vous.",
      "Bien évidemment, vous n'en faites qu'une bouchée et, après les avoir éliminés, vous marchez d'un pas résolu vers le Grand Prêtre, l'arme prête à porter un troisième coup fatal. C'est alors que le Cénérien brandit sa baguette en or en proférant un sortilège.",
      "Aussitôt, un faisceau d'énergie grésillante se forme à la pointe de la baguette. Un autre sortilège, et le faisceau devient une lance enflammée qui fuse droit vers votre visage.",
      "Si vous possédez le Glaive de Sommer, rendez-vous au 199.",
      "Si vous ne possédez pas cet Objet Spécial, rendez-vous au 316."
    ],
    "choices": [
      {
        "text": "Si vous possédez le Glaive de Sommer, rendez-vous au 199.",
        "targetId": "199"
      },
      {
        "text": "Si vous ne possédez pas cet Objet Spécial, rendez-vous au 316.",
        "targetId": "316"
      }
    ]
  },
  "291": {
    "id": "291",
    "text": [
      "Les vrilles s'entortillent autour de vos membres et de votre cou, resserrant davantage leur étreinte à chaque seconde. Vous parvenez heureusement à atteindre votre arme et à contre- attaquer. Le premier coup vous libère d'une grande partie de vos liens, et une humeur chaude et visqueuse s'écoule de chaque segment tranché.",
      "C'est alors que la réalité vous apparaît dans toute son horreur; cette chose n'est pas une plante, mais un être vivant ! Vous entendez un rugissement de douleur en provenance de la cime des arbres. Puis, de nouveau, les vrilles indemnes vous cherchent à tâtons.",
      "Cette fois cependant, elles ne sont plus souples et élastiques mais dures et hérissées de pointes, comme du fil de fer barbelé. Elles se dressent vers votre gorge et vous les cisaillez à grands coups, mais l'une d'elles parvient à atteindre son but. Une douleur atroce vous étreint la poitrine et la tête tandis que ses aiguillons s'enfoncent dans votre chair en vous injectant un acide brûlant.",
      "STRAGNAH HABILETÉ: 36 ENDURANCE: 39 En raison du caractère impromptu de cette attaque, vous devrez réduire votre HABILETÉ de 3 points durant les deux premiers Assauts. Notez par ailleurs que votre adversaire est insensible à toute forme d'agression psychique.",
      "Si vous sortez vainqueur de cet éprouvant combat, rendez-vous au 327."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de cet éprouvant combat, rendez-vous au 327.",
        "targetId": "327"
      }
    ],
    "combat": {
      "name": "STRAGNAH",
      "combatSkill": 36,
      "endurance": 39,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "292": {
    "id": "292",
    "text": [
      "Vous posez rapidement votre Sac à Dos à terre, puis vous dépouillez le Cénérien de sa robe et de son masque. Les vêtements portent encore l'odeur fétide de leur propriétaire. Dégoûté, vous marquez un temps d'hésitation avant de les endosser, mais vous savez que ce déguisement sera un précieux atout pour pénétrer dans Mogaruith.",
      "Une fois revêtu de la coule et du masque de Cener, vous vous dissimulez derrière un bosquet de buissons en bordure de la piste, puis vous attendez qu'une occasion d'agir se présente. Votre patience est bientôt récompensée : deux Vazhags arrivent, qui escortent un prisonnier tenu au bout d'une chaîne.",
      "Vous pensez tout d'abord qu'il s'agit d'un homme de votre race, mais vous révisez cette impression en le voyant de plus près. En réalité, cette créature n'est plus que l'ombre d'un être humain. C'est un Zombie qui a été dépouillé de son âme et de son libre arbitre, et qui appartient désormais au monde ténébreux des morts-vivants.",
      "Vous êtes partagé entre le dégoût et la pitié en voyant ce malheureux se traîner péniblement sur ses jambes décharnées, puis vous vous révoltez contre ceux qui sont à l'origine de cette lamentable métamorphose. Maîtrisant votre colère, vous émergez des broussailles et vous vous plantez d'autorité devant les deux Vazhags.",
      "Trompés par votre déguisement et votre pratique courante du langage Cénérien, ces derniers font halte et s'inclinent avec respect devant vous, attendant craintivement vos ordres.",
      "Si vous voulez leur demander ce qu'ils font là, rendez- vous au 122.",
      "Si vous préférez leur ordonner de vous escorter jusqu'à Mogaruith, rendez-vous au 210."
    ],
    "choices": [
      {
        "text": "Si vous préférez leur ordonner de vous escorter jusqu'à Mogaruith, rendez-vous au 210.",
        "targetId": "210"
      }
    ]
  },
  "293": {
    "id": "293",
    "text": [
      "Une douleur aiguë vous traverse la jambe gauche. En baissant les yeux, vous constatez qu'une flèche s'est plantée dans votre cuisse. (Vous perdez 2 points d'EN-DURANCE.) Vous l'arrachez d'un geste vif, puis vous stoppez l'hémorragie grâce à votre science de la Guéri-son.",
      "Une fois vos souffrances apaisées, vous poursuivez votre ascension avec d'autant plus de détermination que vous touchez presque au but.",
      "Rendez-vous au 103."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 103.",
        "targetId": "103"
      }
    ]
  },
  "294": {
    "id": "294",
    "text": [
      "Une douleur atroce explose dans votre tête et, après avoir été aveuglé par une gerbe d'éclairs, vous sombrez dans d'impénétrables ténèbres. En vous cinglant avec force, la chaîne vous a fracturé le crâne. Vous ne tardez pas à perdre connaissance et vous basculez dans le vide.",
      "Grâce à votre bravoure sans bornes, vous avez réussi à anéantir le virus de la peste et tous ceux qui détenaient le secret de sa culture. Grâce à vous, des millions de vies humaines seront sauvées d'une mort atroce. Le courage et l'abnégation que vous avez montrés pour mener à bien votre mission resteront gravés à tout jamais dans la mémoire des peuples libres du Magna-mund.",
      "Quel dommage d'avoir dû payer de votre vie"
    ],
    "choices": []
  },
  "295": {
    "id": "295",
    "text": [
      "Une ombre gigantesque se meut sous la surface de l'eau. Elle disparaît pendant un moment, puis resurgit soudain dans une immense gerbe d'écume. C'est tout d'abord la tête qui émerge : elle est démesurée, couverte d'écaillés et munie de deux yeux ardents qui semblent lancer des flammes.",
      "Elle se dresse au sommet d'un corps de reptile aussi épais qu'un arbre de Toa et d'une longueur inestimable. Tandis que la gueule béante du monstre se rapproche de vous en oscillant, vous cherchez votre arme à tâtons, d'une seule main. DHOLDAARG HABILETÉ: 43 ENDURANCE: 56 En raison de votre position plus que précaire, vous devrez réduire votre HABILETÉ de 5 points pour toute la durée du combat.",
      "Par ailleurs, si l'arme que vous utilisez est un Glaive, une Lance ou un Bâton, réduisez votre HABILETÉ de 3 points supplémentaires. Cette créature est insensible à la Puissance Psychique mais vous pourrez l'atteindre mentalement si vous maîtrisez la discipline élémentaire du Foudroiement Psychique et, a fortiori, si vous maîtrisez la Grande Discipline du Foudroiement Psychique.",
      "Vous pourrez fuir le combat à l'issue de 6 Assauts.",
      "Dans ce cas, rendez-vous au 63.",
      "Si vous l'emportez sur votre ennemi, rendez-vous au 219."
    ],
    "choices": [
      {
        "text": "rendez-vous au 63.",
        "targetId": "63"
      },
      {
        "text": "Si vous l'emportez sur votre ennemi, rendez-vous au 219.",
        "targetId": "219"
      }
    ],
    "combat": {
      "name": "DHOLDAARG",
      "combatSkill": 43,
      "endurance": 56,
      "mindblastImmune": true,
      "undead": false
    }
  },
  "296": {
    "id": "296",
    "text": [
      "Le Degradon s'abat au sol en poussant un rugissement d'agonie, et vous n'avez que le temps de faire un bond de côté pour éviter d'être écrasé par sa répugnante carcasse. A bout de souffle et tremblant de fatigue après cet éprouvant combat, vous vous adossez contre le mur et inspectez les alentours.",
      "Devant vous s'étend un grand hall éclairé par des sphères de feu suspendues au plafond par des chaînes. De part et d'autre, deux rangées de statues de pierre se font face, formant une haie terminée par un porche. Bien que ces statues soient d'apparence humaine, l'expression de douleur et de désespoir intenses qui se peint sur leur visage déforme leurs traits au point de les rendre grotesques.",
      "Vous avancez avec une extrême prudence. Vous vous méfiez de ces étranges statues et vous vous tenez prêt à réagir à la vitesse de l'éclair, pour le cas où elles se mettraient subitement à s'animer. Fort heureusement, vos craintes ne sont pas fondées et vous atteignez le porche sans encombre.",
      "Au-delà, un petit passage vous conduit à un embranchement traversé de gauche à droite par un couloir plus large. 11 émane de telles forces maléfiques dans cette partie souterraine de Mogaruith que vous en avez la chair de poule. Avant de poursuivre votre chemin, vous adressez une prière silencieuse au dieu Kaï, votre créateur, afin qu'il vous protège et vous guide.",
      "Votre intuition vous incite à tourner à gauche et, après quelques minutes de marche, vous débouchez dans une pièce où un grand escalier de marbre noir dessert plusieurs niveaux, perdus dans des hauteurs ténébreuses. A l'opposé de cet escalier monumental, vous apercevez une grande porte forgée dans un métal vert que vous n'arrivez pas à identifier.",
      "Cette étrange matière émet des radiations palpitantes qui illuminent les symboles gravés sur les parois et le sol de la pièce. Vous vous concentrez sur ces signes mystérieux et, quelques instants plus tard, vous frémissez en comprenant leur signification.",
      "Rendez-vous au 300."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 300.",
        "targetId": "300"
      }
    ]
  },
  "297": {
    "id": "297",
    "text": [
      "Vous enjambez le corps de vos victimes pour ramasser votre Arc et, ce faisant, vous remarquez que l'Agarashi porte autour du cou une sorte de petite boîte retenue par une chaîne. Votre sixième sens vous révèle qu'il s'agit d'une amulette magique destinée à soumettre le monstre aux ordres des Vazhags.",
      "Si vous souhaitez vous emparer de cette Amulette de Domination, inscrivez-la sur la liste des Objets Spéciaux. Impatient de quitter ces lieux, vous soulevez la couverture de fourrure qui recouvre le divan et vous découvrez alors, sur le côté, un petit levier semblable à celui qui vous avait servi à ouvrir la porte secrète.",
      "Vous le tirez et la porte s'ouvre, vous permettant ainsi de sortir par le même chemin.",
      "Rendez-vous au 308."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 308.",
        "targetId": "308"
      }
    ]
  },
  "298": {
    "id": "298",
    "text": [
      "La protection psychique que vous assurait votre pouvoir Magnakaï commence à céder sous l'influence démoniaque du Cénérien. Votre cerveau se trouve soumis à une pression intolérable et vous tombez à la renverse, en proie à d'horribles souffrances. (Vous perdez 4 points d'ENDURANCE.) Alors que la douleur s'estompe graduellement, vous entendez le druide aboyer un ordre à son escorte.",
      "De toute évidence, vous avez été découvert.",
      "Rendez-vous au 159."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 159.",
        "targetId": "159"
      }
    ],
    "damage": 4
  },
  "299": {
    "id": "299",
    "text": [
      "Vous avez l'impression que votre poitrine est sur le point d'exploser et qu'un feu ardent irradie tout votre corps. Vous faites immédiatement- appel à votre Discipline Magnakaï du Nexus pour vous protéger, mais l'intensité de ce feu magique est telle que vous perdez tout de même 4 points d'ENDURANCE.",
      "Enfin, la température décroît au bout de quelques secondes, vous laissant épuisé et pantelant. Mais à la grande consternation de votre ennemi, vous êtes toujours en vie !",
      "Rendez-vous au 17."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 17.",
        "targetId": "17"
      }
    ]
  },
  "300": {
    "id": "300",
    "text": [
      "Au milieu des cercles concentriques formés par les symboles, le message suivant vous apparaît : « Vous qui n'êtes rien que poussière, prosternez-vous devant Celui qui règne sur ce domaine. Rendez hommage au Représentant des Seigneurs de la Décadence, puisqu'il est l'instrument de leur volonté en ce bas monde, et soumettez-vous à ses ordres.",
      "Nous te saluons humblement, ô Cadak, tout-puissant Maître de Mogaruith ! » Après la lecture de ce sinistre message, vous ressentez un malaise et une crainte bien compréhensibles devant la porte qui vous sépare de la salle du trône de l'Archi-druide Cadak.",
      "La prudence vous crie de tourner les talons et de fuir au plus vite cet endroit imprégné de mal, mais vous résistez à la tentation car vous n'avez pas encore découvert le lieu où les Cénériens cultivent le virus de la peste. Or, c'est vraisemblablement derrière cette porte que se trouve la clé du mystère.",
      "L'estomac noué, vous avancez donc vers la porte. Arrivé à quelques pas d'elle, un flot de lumière vous enveloppe de la tête aux pieds.",
      "Si vous maîtrisez la Grande Discipline de l'Ecran Psychique, rendez-vous au 236.",
      "Sinon, rendez-vous au 6."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Ecran Psychique, rendez-vous au 236.",
        "targetId": "236"
      },
      {
        "text": "Sinon, rendez-vous au 6.",
        "targetId": "6"
      }
    ]
  },
  "301": {
    "id": "301",
    "text": [
      "Dans un hululement fantomatique, la créature s'approche pour concrétiser son avantage, mais vous réussissez à la prendre de vitesse : à l'instant précis où elle arrive au-dessus de vous, vous plongez à terre, puis vous roulez sur vous-même tout en levant votre arme.",
      "Vous sentez un choc glacial vous parcourir le bras quand celle-ci fend le corps spectral de votre adversaire. Cette fois-ci, c'est un hurlement de douleur qui retentit. Encouragé par votre succès, vous vous remettez prestement debout et vous vous tenez prêt à poursuivre la lutte : PECHDRAZIL HABILETÉ: 40 ENDURANCE: 26 Cette créature est particulièrement sensible aux attaques psychiques de haut niveau.",
      "Par conséquent, si vous maîtrisez la Grande Discipline du Foudroiement Psychique, vous pouvez augmenter votre HABILETÉ de 10 points (au lieu de 8) pour toute la durée du combat.",
      "Si vous en sortez vainqueur, rendez- vous au 20."
    ],
    "choices": [],
    "combat": {
      "name": "PECHDRAZIL",
      "combatSkill": 40,
      "endurance": 26,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "302": {
    "id": "302",
    "text": [
      "Le Tzarg se met à coasser frénétiquement dès qu'il vous aperçoit. Maudissant cette damnée créature, vous sortez de votre cachette vous avancez en pleine lumière en brandissant votre arme. Aussitôt, les Vazhags se mettent à couiner d'excitation et se déploient dans le but de vous encercler.",
      "Libéré de ses maîtres, le Tzarg s'empresse de se réfugier au fond du tunnel, afin de se mettre hors d'atteinte d'un combat qui s'annonce sanglant. PATROUILLE DE VAZHAGS HABILETÉ : 40 ENDURANCE : 40 Vous ne pouvez pas, quant à vous, fuir ce combat. Les Vazhags vous attaquent simultanément et vous devrez les affronter comme s'il s'agissait d'un seul et même adversaire.",
      "Si vous l'emportez, rendez-vous au 83."
    ],
    "choices": [
      {
        "text": "Si vous l'emportez, rendez-vous au 83.",
        "targetId": "83"
      }
    ],
    "combat": {
      "name": "PATROUILLE DE VAZHAGS",
      "combatSkill": 40,
      "endurance": 40,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "303": {
    "id": "303",
    "text": [
      "Vous vous dégagez à grand-peine de tous les corps inertes qui s'entassent autour de vous mais, une fois à l'air libre, vous apercevez le Druide de Cener qui s'enfuit vers la trouée par laquelle lui et son escorte étaient entrés dans la clairière. Vous savez pertinemment que, s'il parvient à vous échapper, il donnera l'alerte dans tout Mogaruith et que cela mettra votre mission en péril, sans parler de votre propre vie.",
      "Vous empoignez votre Arc et vous ajustez votre tir, bien résolu à briser l'élan de votre ennemi.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de la Science des Armes (avec un Arc), ajoutez 3 au chiffre que vous venez de tirer.",
      "Si le résultat est inférieur ou égal à 4, rendez-vous au 99.",
      "S'il est supérieur, rendez-vous au 250."
    ],
    "choices": [
      {
        "text": "rendez-vous au 99.",
        "targetId": "99"
      },
      {
        "text": "rendez-vous au 250.",
        "targetId": "250"
      }
    ]
  },
  "304": {
    "id": "304",
    "text": [
      "Une robe de druide et un masque Cénérien seraient assurément un déguisement utile pour explorer, incognito, les dédales de Mogaruith. Sachant que cela augmentera grandement vos chances de succès, vous décrochez de leur patère les accessoires qui vous conviennent.",
      "N'oubliez pas d'inscrire votre choix sur votre Feuille d'Aventure. Une robe de Druide de Cener prend la place de deux Objets de Sac à Dos ; un masque Cénérien prend la place d'un seul objet.",
      "Si vous transportez déjà le nombre maximal d'objets, vous devez vous débarrasser d'un ou plusieurs objets en faveur du masque Cénérien et/ou de la robe de druide.",
      "Ensuite, rendez-vous au 126."
    ],
    "choices": [
      {
        "text": "rendez-vous au 126.",
        "targetId": "126"
      }
    ]
  },
  "305": {
    "id": "305",
    "text": [
      "Alors que le dernier Disciple de Vashna s'effondre, inanimé, sur la plate-forme, vous rengainez votre arme et empoignez les barreaux de l'échelle qui monte jusqu'au treuil. Dans la grande salle en dessous, tous les yeux sont braqués sur vous. Soudain, les créatures comprennent enfin quelles sont vos intentions, et elles se déchaînent dans un charivari assourdissant.",
      "Leurs cris d'hystérie, de haine et d'effroi forment une cacophonie qui emplit la pièce tout entière et dont l'écho se répercute à l'infini. Vous baissez les yeux pour observer leurs visages tordus par la rage et, ce faisant, vous distinguez une nouvelle menace.",
      "Une poignée d'archers Vazhags vient de faire irruption par le passage qui relie la salle de Cadak à la galerie. Ils se déplient le long du parapet et commencent à tirer sur vous. De part et d'autre, les flèches vous frôlent en sifflant.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 4 au chiffre obtenu.",
      "Si le résultat est inférieur ou égal à 2, rendez-vous au 231.",
      "S'il est compris entre 3 et 6, rendez-vous au 293.",
      "Si ce résultat est supérieur à 6 rendez-vous au 278."
    ],
    "choices": [
      {
        "text": "rendez-vous au 231.",
        "targetId": "231"
      },
      {
        "text": "entre 3 et 6, rendez-vous au 293.",
        "targetId": "293"
      },
      {
        "text": "rendez-vous au 278.",
        "targetId": "278"
      }
    ]
  },
  "306": {
    "id": "306",
    "text": [
      "Vous voici maintenant dans un tunnel brillamment illuminé. Les nerfs à vif, vous vous tenez prêt à réagir à la moindre menace. Au bout d'un kilomètre, le tunnel se sépare en deux et bifurque d'un côté vers le nord, de l'autre côté vers le sud. Par la branche nord vous parvient l'odeur caractéristique des Vazhags, mêlée à un autre qui vous fait penser à des tripes bouillies.",
      "Par la branche sud, c'est un effluve tout à fait différent, une puanteur âcre et fétide de gangrène, mais dont vous ne sauriez déterminer l'origine exacte.",
      "Si vous voulez explorer le tunnel nord, rendez- vous au 85.",
      "Si vous préférez aller inspecter le tunnel sud, rendez- vous au 266."
    ],
    "choices": []
  },
  "307": {
    "id": "307",
    "text": [
      "Vous prononcez les paroles magiques de la « Main de Feu » tout en tendant le bras vers la goupille. Une vague de chaleur se diffuse alors depuis votre cœur jusqu'à la pointe de votre index, d'où jaillit soudain un faisceau de flammes aveuglantes. Elles fusent vers l'anneau de fer et le percutent dans une gerbe d'étincelles crépitantes.",
      "A l'issue de cette opération, vous voyez apparaître de petites fissures à la surface du métal.",
      "Utilisez la Table de Hasard. Si votre total d'ENDURANCE actuel est supérieur ou égal à 25, ajoutez 2 au chiffre que vous avez tiré. Si votre total d'ENDURANCE est inférieur ou égal à 15, déduisez 2 de ce même chiffre.",
      "Si le résultat obtenu est inférieur ou égal à 3, rendez-vous au 328.",
      "S'il est supérieur, rendez-vous au 141."
    ],
    "choices": [
      {
        "text": "rendez-vous au 328.",
        "targetId": "328"
      },
      {
        "text": "rendez-vous au 141.",
        "targetId": "141"
      }
    ]
  },
  "308": {
    "id": "308",
    "text": [
      "La porte secrète se referme doucement sur vous, et vous vous retrouvez de nouveau dans la grande caverne volcanique. Vous avancez alors furtivement vers le portail de fer et, protégé par votre science du Camouflage, vous attendez patiemment dans un recoin, tout en observant les sentinelles.",
      "Quelques minutes plus tard, l'écho sourd et profond d'un gong retentit dans le lointain. Il est suivi peu après d'un autre bruit, nettement plus présent. Un rayon de lumière filtre soudain à la base du porche et, dans un grincement assourdissant, le portail de fer se soulève lentement.",
      "Une patrouille de Vazhags s'engage dans l'ouverture. Ils escortent un chariot où s'entassent des sacs, des tonneaux et des caisses en bois. Soudain, un groupe de femelles Vazhags se précipite sur eux en réclamant des vivres à grands cris. Le chariot se trouve alors bloqué juste sous le porche.",
      "L'escorte tente vainement de repousser les femelles affamées mais, pendant ce temps, l'énorme panneau métallique commence à redescendre. Dans un mouvement de panique, les femelles s'écartent du chariot et battent en retraite, de peur de se faire écraser par le portail.",
      "Mais celui-ci s'immobilise dans un crissement aigu, à moins d'un mètre au-dessus du chariot. Aussitôt, les sentinelles qui gardaient l'entrée viennent en aide à l'escorte pour pousser le chargement à l'intérieur de la caverne. De votre poste d'observation, vous remarquez que les femelles en profitent pour s'approcher de nouveau.",
      "Vous devez agir sans tarder si vous voulez vous échapper, car dès que le chariot sera dégagé, le portail se refermera.",
      "Si vous souhaitez utiliser votre Discipline Magnakaï du Nexus, rendez-vous au 270.",
      "Si vous préférez avoir recours à la Puissance Psychique, rendez-vous au 68.",
      "Si vous optez pour la Discipline de l'Invisibilité, rendez-vous au 9."
    ],
    "choices": [
      {
        "text": "Si vous souhaitez utiliser votre Discipline Magnakaï du Nexus, rendez-vous au 270.",
        "targetId": "270"
      },
      {
        "text": "Si vous préférez avoir recours à la Puissance Psychique, rendez-vous au 68.",
        "targetId": "68",
        "requiredDiscipline": "Puissance Psychique"
      },
      {
        "text": "Si vous optez pour la Discipline de l'Invisibilité, rendez-vous au 9.",
        "targetId": "9"
      }
    ]
  },
  "309": {
    "id": "309",
    "text": [
      "Peu avant minuit, le Capitaine et vous quittez Valfort sur deux destriers de Slovie. C'est une nuit sans lune et la plaine est noyée dans les ténèbres mais, grâce à votre science Magnakaï de l'Art de la Chasse, vous distinguez aisément les contours du paysage.",
      "Le Capitaine, quant à lui, ne possède pas vos dons de nyctalo-pie, mais il porte des verres spéciaux qui lui permettent de compenser cette lacune. Ces lunettes lui ont été offertes par le Grand Gouverneur du Chaman, en remerciement de ses bons et loyaux services lors du conflit avec les Seigneurs des Ténèbres.",
      "Elles lui sont fort utiles, vous dit-il, pour surveiller les abords de la frontière du Ruel, même par les nuits les plus noires. Il vous faut une bonne heure pour atteindre les contreforts des monts Skardos. Les plaines fertiles du Palmy-rion ont cédé la place à des gorges profondes et abruptes.",
      "Malgré l'obscurité, vous distinguez un sentier escarpé qui descend au fond d'un canyon. Le Capitaine mène la marche ; vous le suivez de près jusqu'à l'entrée de la ravine, puis vous continuez à longer le sentier qui parcourt le fond du canyon sur toute la longueur.",
      "Des bruits inquiétants résonnent dans votre sillage ; vous frissonnez en imaginant la faune qu'abritent les rochers déchiquetés qui vous entourent. Au bout de quelques kilomètres, le chemin s'élargit enfin pour se diviser en deux. Le Capitaine tourne bride vers la gauche et, cinq minutes plus tard, vous apercevez devant vous une faille dans la paroi rocheuse.",
      "Vous mettez pied à terre et vous vous en approchez prudemment.",
      "« Voici l'entrée du tunnel qui mène à la route de Skardos, chuchote le Capitaine Sirmaine. C'est le chemin le plus direct pour gagner Mogaruith, mais c'est aussi le plus dangereux. Dix de mes plus braves éclaireurs s'y sont aventurés... ils n'en sont jamais revenus...",
      "Il est encore temps, si vous le voulez, de rentrer avec moi à Valfort. Et personne ne vous accusera de lâcheté, croyez-moi !»",
      "«Je reviendrai à Valfort, Capitaine, lui répondez-vous sur un ton ferme et résolu, mais pas avant d'avoir accompli ma mission avec succès. » A ces mots, le Capitaine vous adresse un large sourire et lève sa main de fer en signe d'hommage à votre courage.",
      "« En ce cas, fort bien, mon Seigneur, reprend-il. Sachez que mes pensées vous accompagneront jusqu'au jour béni de votre retour. Je prierai les dieux pour qu'ils vous protègent et vous accordent la victoire afin que nous soyons enfin débarrassés de la menace de Mogaruith. »",
      "Saisissant votre cheval par la bride, le Capitaine vous fait alors ses adieux et s'en retourne vers sa cité. Vous le suivez des yeux jusqu'à ce qu'il disparaisse au détour du sentier, puis vous prenez votre courage à deux mains avant de vous faufiler à l'intérieur de la sombre faille.",
      "Rendez-vous au 284."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 284.",
        "targetId": "284"
      }
    ]
  },
  "310": {
    "id": "310",
    "text": [
      "La créature se trouve totalement prise au dépourvu par votre attaque. Le coup que vous lui portez à la nuque la tue sur-le- champ, et la force de l'impact la fait basculer de son tabouret creux. Vous la regardez osciller mollement d'avant en arrière, tel un gros œuf, avant de s'affaler enfin sur le côté.",
      "Rendez-vous au 23."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 23.",
        "targetId": "23"
      }
    ]
  },
  "311": {
    "id": "311",
    "text": [
      "En dépit de vos efforts, le coffret refuse de s'ouvrir. En désespoir de cause, vous faites appel à tous vos pouvoirs Magnakaï pour anéantir le sortilège qui le scelle, mais l'aura de maléfice qui se dégage alors sape insidieusement vos forces psychiques, et vous êtes contraint d'abandonner au bout de quelques secondes.",
      "Alors que vous repoussez le maudit coffret avec découragement, vous entendez soudain un bruit étouffé : quelqu'un vient d'entrer dans la bibliothèque. Après avoir lancé un bref regard par-dessus votre épaule, vous jugez - fort sagement - qu'il est grand temps de quitter les lieux.",
      "Rendez-vous au 335."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 335.",
        "targetId": "335"
      }
    ]
  },
  "312": {
    "id": "312",
    "text": [
      "Vous nagez lentement vers un groupe de rochers à moitié enfoncés dans le sol meuble de la berge nord. Lorsque l'eau ne vous arrive plus qu'à la taille, vous émergez péniblement et vous vous laissez tomber derrière le rocher le plus proche afin de reprendre votre souffle.",
      "D'un geste las, vous essuyez l'eau qui ruisselle sur vos paupières et, ce faisant, vous voyez les Vazhags fureter le long de la berge sud, puis se glisser sous le pont, passant à quelques mètres de l'endroit où vous étiez dissimulé il y a encore quelques minutes.",
      "Ils s'en retournent ensuite, bredouilles, auprès de leur chef pour faire leur rapport. Le Cénérien et les Vazhags restés en retrait traversent alors le pont, s'arrêtent près de la cage des Tzargs et en font sortir un. Après avoir soigneusement refermé la porte de la cage, ils s'ébranlent en file indienne et disparaissent par le tunnel sud.",
      "Vous patientez une bonne minute afin d'être sûr qu'il n'y a plus personne dans les parages, puis vous vous hissez de nouveau sur le pont et, sans même vous retourner, vous vous engagez rapidement dans le tunnel nord.",
      "Rendez-vous au 306."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 306.",
        "targetId": "306"
      }
    ]
  },
  "313": {
    "id": "313",
    "text": [
      "Les cinq premiers Vazhags vous tombent littéralement dessus en faisant tournoyer leurs armes à toute volée. Mais il en faut plus pour impressionner un combattant hors pair tel que vous ! Vous feintez et esquivez leurs attaques, puis vous ripostez avec une telle rapidité et une telle précision que vous éliminez d'un coup vos cinq adversaires.",
      "Cette action d'éclat ne manque pas de refroidir l'ardeur des autres Vazhags. Voyant ces derniers reculer craintivement, vous profitez de l'occasion pour vous échapper par le portail. Après avoir parcouru le passage sur plusieurs centaines de mètres, vous apercevez un levier protégé par une grille encastrée dans le sol.",
      "Vous l'actionnez machinalement et, aussitôt, le grand portail de fer s'abaisse en grinçant, écrasant le chariot sous son poids et bloquant l'entrée de la caverne volcanique. Vous voilà maintenant à l'abri de la fureur des Hommes-Rats. Vous explorez tranquillement le nouveau tunnel, espérant y trouver une issue qui vous mènera jusqu'à la surface.",
      "Le passage se poursuit vers l'est sur plusieurs kilomètres et, à l'exception de quelques sentinelles Vazhags, il est pratiquement désert. Finalement, vous parvenez à l'entrée d'une autre caverne, nettement plus petite que la précédente, mais tout aussi bondée.",
      "La lumière du jour y pénètre par une grande ouverture en arc de cercle que gardent des Vazhags en armure et un couple de chiens de guerre à peau calleuse. Par cette ouverture, vous apercevez un chemin qui disparaît derrière une rangée de collines. Juste au- dessus du porche, vous remarquez qu'un mince rayon de soleil filtre à travers une petite fenêtre creusée dans le rocher.",
      "Sachant qu'il serait risqué d'emprunter l'entrée principale - même pour quelqu'un d'aussi habile que vous — puisqu'elle est trop bien défendue, vous décidez de passer par la petite ouverture.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 3 au chiffre que vous avez tiré.",
      "Si le résultat est inférieur ou égal à 5, rendez-vous au 192.",
      "S'il est supérieur, rendez-vous au 346."
    ],
    "choices": [
      {
        "text": "rendez-vous au 192.",
        "targetId": "192"
      },
      {
        "text": "rendez-vous au 346.",
        "targetId": "346"
      }
    ]
  },
  "314": {
    "id": "314",
    "text": [
      "La créature vous toise de la tête aux pieds, puis vous demande d'une voix méfiante : « Quel est le Prêtre de votre chapitre ? » Vous marquez un temps d'hésitation et, dans le même délai, vous voyez l'œil de votre interlocuteur s'agrandir de peur. Toutefois, vous remarquez que sa main osseuse glisse insensiblement vers un bouton situé sur le côté de son bureau.",
      "De toute évidence, il s'agit d'une alarme.",
      "Si vous possédez un arc et que vous vouliez l'utiliser, rendez-vous au 39.",
      "Si vous n'avez pas d'arc, ou si vous ne souhaitez pas vous en servir, rendez-vous au 251."
    ],
    "choices": [
      {
        "text": "Si vous possédez un arc et que vous vouliez l'utiliser, rendez-vous au 39.",
        "targetId": "39"
      },
      {
        "text": "Si vous n'avez pas d'arc, ou si vous ne souhaitez pas vous en servir, rendez-vous au 251.",
        "targetId": "251"
      }
    ]
  },
  "315": {
    "id": "315",
    "text": [
      "Vous vous frayez péniblement un chemin à travers le feuillage dense du passage mais, malheureusement, vous parvenez finalement à un cul-de-sac. Les Vazhags vous suivent de très près et, d'ici quelques secondes, ils seront sur vous. Tout à coup, vous en voyez surgir trois et vous vous préparez à les affronter de pied ferme.",
      "Assoiffés de sang, les premiers Hommes-Rats se jettent frénétiquement sur vous en fouettant l'air de leurs lames rouillées, mais vous contrez leur attaque avec une telle rapidité et une telle précision qu'on croirait presque, à vous regarder, que vous avez à peine esquissé un geste.",
      "Malheureusement, pour chaque Vazhag abattu, il en survient trois pour le remplacer. En l'espace de quelques minutes, vous courez le danger de suffoquer sous leur nombre !",
      "HORDE DE VAZHAGS HABILETÉ : 34 ENDURANCE : 44 Si vous sortez vainqueur de ce combat, rendez-vous au 172."
    ],
    "choices": [
      {
        "text": "Si vous sortez vainqueur de ce combat, rendez-vous au 172.",
        "targetId": "172"
      }
    ],
    "combat": {
      "name": "HORDE DE VAZHAGS",
      "combatSkill": 34,
      "endurance": 44,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "316": {
    "id": "316",
    "text": [
      "D'un bond, vous vous écartez de la trajectoire du rai d'énergie, mais il dévie à mi-chemin et vous atteint à l'épaule droite. La force de l'impact vous rejette en arrière et vous perdez 6 points d'ENDURANCE.",
      "Si vous êtes toujours en vie, rendez-vous au 54."
    ],
    "choices": [
      {
        "text": "Si vous êtes toujours en vie, rendez-vous au 54.",
        "targetId": "54"
      }
    ],
    "damage": 6
  },
  "317": {
    "id": "317",
    "text": [
      "Le druide reçoit votre flèche en plein cœur. 11 trouve la force de faire encore quelques pas, puis il s'effondre dans la bruyère en poussant un long cri d'agonie. Vous vous précipitez vers l'endroit où il vient de tomber, et la curiosité vous pousse à retirer le masque vert qui cache son visage.",
      "Vous découvrez alors un faciès hideux, grené par la maladie et n'ayant presque plus rien d'humain. Surmontant votre répulsion, vous fouillez le druide et vous trouvez les objets suivants : Un poignard Une robe de Druide de Cener (Si vous décidez de la garder, sachez qu'elle prendra la place de 2 Objets dans votre Sac à Dos.) Un masque Cénérien Vingt Lunes (soit l'équivalent de 5 Pièces d'Or) Si vous voulez conserver certains de ces objets, n'oubliez pas d'apporter les modifications nécessaires sur votre Feuille d'Aventure.",
      "Votre science Magnakaï vous informe que la baguette du druide ne possède plus aucun pouvoir magique ; ce dernier s'est trouvé annihilé en même temps que son malfaisant propriétaire. Vous vous penchez pour la lui retirer des mains, mais à peine l'avez-vous touchée qu'elle tombe en poussière en dégageant une senteur nauséabonde.",
      "Comme le crépuscule approche, vous quittez la clairière en passant par la trouée, puis vous vous engagez à grands pas sur le sentier boueux qui la prolonge.",
      "Rendez-vous au 10."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 10.",
        "targetId": "10"
      }
    ],
    "loot": {
      "gold": 5
    }
  },
  "318": {
    "id": "318",
    "text": [
      "Faisant appel à la protection de vos pouvoirs Magnakaï, vous relevez votre capuchon et émergez de votre cachette. Les troupes d'Hommes-Rats ne vous prêtent aucune attention tandis que vous vous acheminez sur la route qui mène à la forteresse. Vos talents de camouflage s'avèrent donc fort efficaces.",
      "Pourvu qu'ils le soient autant lorsque vous parviendrez au seuil même de la citadelle ! Traverser le pont-levis noirci par les siècles est une expérience éprouvante. Il est terminé par une lourde herse donnant accès à la tour de Mogaruith, et vous avez l'impression de marcher sur la langue d'un énorme dragon prêt à vous engloutir d'un instant à l'autre dans sa gueule béante.",
      "De part et d'autre du pont, des vapeurs nauséabondes s'élèvent des douves, emplissant l'atmosphère d'une puanteur douceâtre qui gêne votre respiration et trouble votre vision. Vous faites appel à votre science Magnakaï pour remédier à ces désagréments, mais la vue qui s'offre à vous n'en est pas plus réjouissante pour autant.",
      "A l'entrée de la tour, vous êtes confronté à un groupe de gardes Vazhags qui vous dévisagent avec méfiance. Ils vous demandent ce que vous venez faire à Mogaruith et, de toute évidence, ils ne vous laisseront pas passer tant que vous ne leur fournirez pas une réponse satisfaisante.",
      "Si vous désirez leur dire que vous êtes un agent au service de l'Archidruide Cadak et que vous devez lui révéler des informations de la plus haute importance, rendez- vous au 268.",
      "Si vous maîtrisez la Grande Discipline du Contrôle Animal et que vous souhaitiez l'utiliser, rendez-vous au 151."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline du Contrôle Animal et que vous souhaitiez l'utiliser, rendez-vous au 151.",
        "targetId": "151"
      }
    ]
  },
  "319": {
    "id": "319",
    "text": [
      "Vous contournez le divan sur la pointe des pieds, afin de ne pas éveiller son bedonnant occupant, puis vous inspectez rapidement les divers objets qui l'entourent. Comme vous le supposiez, il n'y a là qu'un ramassis de débris et de camelote mais, parmi tout ce bric-à-brac, quelques objets pourraient cependant s'avérer utiles: Une épée Un poignard Seize Lunes (soit l'équivalent de 4 Pièces d'Or) Une blague à tabac Une corde Un bol en cuivre Si vous souhaitez conserver l'un ou l'autre des objets ci-dessus, n'oubliez pas de modifier votre Feuille d'Aventure en conséquence.",
      "A présent, utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Invisibilité et de l'Exploration, ajoutez 3 au chiffre que vous venez de tirer.",
      "Si le résultat obtenu est inférieur ou égal à 5, rendez-vous au 276. S'il est supérieur, ren-dez-vous au 139."
    ],
    "choices": [
      {
        "text": "rendez-vous au 276.",
        "targetId": "276"
      }
    ]
  },
  "320": {
    "id": "320",
    "text": [
      "Exterminus pousse un hurlement d'agonie en recevant le coup fatal. Défiant les lois de la gravité, il oscille et titube pendant un moment, puis il tombe enfin à la renverse et s'écroule sur la table qui se trouve à côté du siège de Cadak. Son énorme masse fait voler le plateau de bois en éclats et entraîne dans sa chute la sphère de cristal qui était posée dessus.",
      "Il s'en dégage aussitôt une émanation pestilentielle qui vous étourdit mais, dans le même temps, un tourbillon de noirceur enveloppe le corps d'Exterminus. Un silence glacial s'abat soudain sur les dieux et, deux secondes plus tard, il ne reste plus aucune trace du monstre ni des débris de la sphère.",
      "Vous vous remettez alors vivement debout et vous vous tournez face à l'Archidruide. Le spectacle dont il vient d'être témoin l'a laissé livide et bouche bée. Il marmonne des paroles incohérentes et tremble de peur. Fermement résolu à débarrasser le Magna-mund de ce malfaisant personnage, vous avancez sur lui l'arme au poing, mais en vous voyant approcher, il reprend subitement le contrôle de lui-même et entre en action.",
      "Vous le voyez agiter les mains devant lui et, soudain, un écran de lumière crue se dresse entre lui et vous. Vous fendez cette protection à l'aide de votre arme, mais vous ne rencontrez aucune résistance de l'autre côté. L'instant suivant, la lumière s'évanouit et vous vous retrouvez seul dans la salle du trône.",
      "Rendez-vous au 259."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 259.",
        "targetId": "259"
      }
    ]
  },
  "321": {
    "id": "321",
    "text": [
      "Au moment où vous passez sous la herse, votre Sac à Dos reste coincé. Vous succombez dans les quelques secondes qui suivent, écrasé sous les vingt-cinq tonnes de fer et de chêne qui s'abattent sur vous. Votre immense courage vous a permis de détruire le virus de la peste et les druides qui en détenaient le secret.",
      "Grâce à vous, des millions de vies humaines seront sauvées d'une mort atroce. La bravoure et l'abnégation que vous avez montrées pour mener à bien votre mission resteront gravées à tout jamais dans la mémoire des peuples libres du Magnamund. Quel dommage d'avoir dû payer de votre vie cette victoire..."
    ],
    "choices": []
  },
  "322": {
    "id": "322",
    "text": [
      "Vous dégainez le Glaive de Sommer et vous en dirigez la pointe vers le druide. Ce dernier fait jaillir une seconde décharge du bout de sa baguette. L'influx magique s'engouffre dans la brèche, puis s'oriente immédiatement vers votre lame, comme s'il était aimanté par elle.",
      "Un bouquet d'étincelles aveuglantes fuse au moment où la décharge d'énergie entre en contact avec votre défense, mais vous ne ressentez toutefois aucune douleur: les pouvoirs de la baguette du druide ne sont pas de taille à rivaliser avec ceux du Glaive de Sommer !",
      "D'un mouvement ample et bien calculé, vous renvoyez l'énergie absorbée par votre lame vers la forêt. Les ondes magiques s'en vont heurter un arbre et le foudroient instantanément. Dans un craquement sinistre, l'énorme tronc s'abat au sol, manquant de peu d'écraser le Cénérien.",
      "Ivre de colère et de dépit, ce dernier ordonne alors à ses Vazhags de se lancer à l'assaut de la cabane et de vous mettre en pièces. Avec une lueur assassine au fond de leurs petits yeux injectés de sang, les Hommes-Rats marchent au pas de charge sur les ruines, en brandissant des armes rouillées.",
      "Si vous voulez affronter ces créatures plus que malsaines, rendez-vous au 25.",
      "Si vous préférez essayer de leur échapper, rendez-vous au 279."
    ],
    "choices": [
      {
        "text": "Si vous voulez affronter ces créatures plus que malsaines, rendez-vous au 25.",
        "targetId": "25"
      },
      {
        "text": "Si vous préférez essayer de leur échapper, rendez-vous au 279.",
        "targetId": "279"
      }
    ]
  },
  "323": {
    "id": "323",
    "text": [
      "Baigné de sueur et de sang, vous vous écartez de la dépouille de vos victimes, puis vous vous accordez un instant de répit afin de vous remettre de vos émotions. Cela fait, vous vous mettez à fouiller systématiquement tous les tiroirs du bureau. Vous y trouvez quantité de parchemins et de registres que vous parcourez rapidement, dans l'espoir de trouver un indice concernant l'endroit précis où l'on cultive le virus de la peste.",
      "Malheureusement, vos recherches ne vous apprennent rien d'intéressant. En revanche, vous découvrez sous le bureau deux petits leviers. Votre Intuition Kaï vous révèle qu'ils commandent les deux portes de métal qui donnent sur la pièce où vous vous trouvez.",
      "Vous actionnez le levier de droite : la porte par laquelle vous êtes entré se referme. A présent, vous faites une pause avant d'actionner le levier de gauche, car vous savez qu'il déclenchera l'ouverture de la porte menant à la salle du trône de Cadak.",
      "Rendez-vous au 240."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 240.",
        "targetId": "240"
      }
    ]
  },
  "324": {
    "id": "324",
    "text": [
      "L'huile bouillante vous frappe en plein visage mais, grâce à la protection que vous assure votre pouvoir du Nexus, vous n'éprouvez pas la moindre douleur et votre peau ne subit aucune brûlure. D'un geste calme et méprisant, vous vous essuyez la figure et brossez les flammèches qui s'alanguissent sur votre tunique.",
      "Le druide n'en croit pas ses yeux ! Il se met à chercher fébrilement une arme et sort une dague à lame recourbée d'un fourreau dissimulé sous sa robe, puis il la brandit d'une main peu assurée, dans l'espoir de vous tenir à distance. Vous lui ordonnez de lâcher son arme mais il reste sourd à votre demande et tente une feinte en se ruant brusquement sur vous.",
      "Vous déjouez aisément cette maladroite attaque du revers du bras droit et, de la main gauche, vous lui envoyez un crochet qui fracasse son masque. Le druide titube en arrière et s'effondre sur le sol en se tenant la gorge à deux mains. Vous le voyez se contorsionner pendant quelques instants, puis il s'immobilise complètement.",
      "Avec prudence, vous vous approchez de lui, craignant une nouvelle ruse de sa part, mais vous constatez qu'un éclat de son masque de verre lui a tranché les veines jugulaires. Désormais, cet adversaire ne représente plus aucune menace pour vous.",
      "Si vous voulez le fouiller, rendez-vous au 253.",
      "Si vous ne voulez pas le faire, rendez-vous au 306."
    ],
    "choices": [
      {
        "text": "Si vous voulez le fouiller, rendez-vous au 253.",
        "targetId": "253"
      },
      {
        "text": "Si vous ne voulez pas le faire, rendez-vous au 306.",
        "targetId": "306"
      }
    ]
  },
  "325": {
    "id": "325",
    "text": [
      "La peur vous étreint lorsque vous apercevez le faciès hideux de la créature qui surgit de la porte. C'est un énorme chien au pelage noir et hirsute. Il darde sur vous ses yeux fous, pleins de cruauté, et ses babines écumantes se retroussent en frémissant pour découvrir de longs crocs jaunis, tout prêts à ne faire qu'une seule bouchée de vous.",
      "Vous dégainez votre arme afin de l'accueillir comme il se doit. Juste avant le début du combat, vous voyez se découper la silhouette d'un guerrier en armure dans l'encadrement de la porte.",
      "« Attaque et tue ! » lance-t-il d'une voix de stentor à son animal. CHIEN ENRAGÉ HABILETÉ: 36 ENDURANCE: 34 Cette créature sortie de l'enfer vous attaque également sur le plan psychique. En conséquence, vous devrez réduire votre HABILETÉ de 3 points pour toute la durée du combat, sauf si vous maîtrisez la Grande Discipline de l'Écran Psychique.",
      "Si vous gagnez la bataille en moins de 4 Assauts, rendez-vous au 64.",
      "S'il vous faut plus de 5 Assauts pour l'emporter sur votre adversaire, rendez-vous au 114."
    ],
    "choices": [
      {
        "text": "Si vous gagnez la bataille en moins de 4 Assauts, rendez-vous au 64.",
        "targetId": "64"
      },
      {
        "text": "rendez-vous au 114.",
        "targetId": "114"
      }
    ],
    "combat": {
      "name": "CHIEN ENRAGÉ",
      "combatSkill": 36,
      "endurance": 34,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "326": {
    "id": "326",
    "text": [
      "La formule du sortilège de la Confrérie vous revient en mémoire. Vous la prononcez à voix basse, tout en passant la paume de votre main sur vos membres inférieurs, lesquels deviennent aussitôt invisibles. Il était temps: quelques secondes plus tard, deux flèches viennent percuter l'écran magique ainsi formé.",
      "Elles ricochent dessus dans une gerbe d'étincelles avant de retomber, inoffensives, au sol. Toujours grâce à la magie de la Confrérie, vous réussissez à atteindre l'ouverture et à vous échapper sans encombre. Vous émergez sur le flanc d'une montagne, près d'un affleurement dissimulé par des buissons touffus et une rangée de rochers.",
      "Vous restez quelques instants ébloui par la lumière du petit matin qui inonde les collines environnantes. Au fur et à mesure que votre vision s'améliore, vous découvrez un véritable océan de verdure qui semble peuplé de tous les dangers. D'après la position du soleil et grâce à votre sens de l'orientation, vous en déduisez qu'il s'agit de la forêt de Ruel et que vous vous trouvez donc sur le versant oriental des monts Skardos.",
      "Autour de vous, tout semble désert ; seul le tracé sinueux d'une route poussiéreuse qui serpente à travers les collines nues jusqu'à l'orée de la forêt rompt la monotonie du paysage. Après avoir consulté votre carte, vous comprenez qu'il s'agit de la route de Skardos, la piste secrète que les Cénériens utilisent pour se rendre directement à Mogaruith.",
      "Vous décidez de l'emprunter mais, auparavant, vous vous hâtez de vous éloigner de la corniche où vous vous trouvez, de peur que les Vazhags ne lancent leurs chiens à vos trousses.",
      "Rendez-vous au 230."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 230.",
        "targetId": "230"
      }
    ]
  },
  "327": {
    "id": "327",
    "text": [
      "Un silence de mort s'installe après que vous avez tranché les derniers tentacules. Vous restez quelques secondes sur place, le temps de reprendre haleine. Vos vêtements sont imprégnés du sang immonde de votre adversaire, et la puanteur qui s'en dégage vous soulève le cœur.",
      "Soudain, les branches s'agitent au-dessus de vous et vous faites un bond pour éviter le corps de la créature qui s'abat au sol. L'arme au poing, vous vous en approchez avec circonspection. Cela ressemble à un gros ours, mais la peau évoque plutôt un feuillage qu'un pelage à proprement parler.",
      "Une multitude de tentacules tronqués partent de son corps boursouflé. Quatre yeux orange et saillants émergent de la tête, et une rangée d'épines de porc-épic orne la base de son cou ; un venin noirâtre s'en écoule goutte à goutte. Maintenant que vous avez vu à quoi ressemble votre mystérieux ennemi, vous jugez inutile de vous attarder plus longtemps sur les lieux.",
      "Après avoir rengainé votre arme, vous reprenez donc votre route vers l'est.",
      "Rendez-vous au 242."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 242.",
        "targetId": "242"
      }
    ]
  },
  "328": {
    "id": "328",
    "text": [
      "La goupille s'est légèrement fendillée sous vos efforts, mais cela ne suffit pas à la faire céder. Pour y parvenir, il vous faut absolument utiliser une arme de poing.",
      "Rendez-vous au 81."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 81.",
        "targetId": "81"
      }
    ]
  },
  "329": {
    "id": "329",
    "text": [
      "En désespoir de cause, vous faites appel à tous vos pouvoirs Magnakaï pour tenter de neutraliser les effets de l'acide. Vos souffrances s'apaisent progressivement, mais les lésions que vous avez subies vous coûtent néanmoins 8 points d'ENDURANCE. Maudissant votre malchance, vous vous hâtez le long du couloir, impatient de fuir au plus vite cette pluie mortelle.",
      "Une fois arrivé à l'escalier, vous faites une halte pour découper les parties de votre tunique et de votre manteau qui ont été rongées par l'acide. Ce faisant, vous constatez avec dépit que votre Sac à Dos a également souffert et, après en avoir vérifié le contenu, vous découvrez que 2 objets ont littéralement fondu sous l'effet des gouttes d'acide.",
      "En conséquence, rayez le 1e* et le 2e Objet figurant sur votre liste de Sac à Dos, puis rendez-vous au 28."
    ],
    "choices": [
      {
        "text": "rendez-vous au 28.",
        "targetId": "28"
      }
    ]
  },
  "330": {
    "id": "330",
    "text": [
      "Parmi les rudiments d'Alchimie Kaï que Banedon vous a enseignés, vous avez appris à mélanger plusieurs éléments inoffensifs de façon à produire une énergie explosive. Après avoir fouillé vos poches et votre Sac à Dos, vous trouvez finalement de quoi fabriquer un mélange détonant à base de petites quantités de souffre, de charbon, de sel et de glaise.",
      "Vous enveloppez ensuite la mixture dans un morceau de tissu, puis vous enfoncez le tout dans le trou de la serrure et vous y mettez le feu. Vous reculez précipitamment et, deux secondes plus tard, il se produit une forte déflagration, suivie d'un jet de flammes orangées.",
      "Utilisez la Table de Hasard.",
      "Si le chiffre que vous avez tiré est inférieur ou égal à 3, rendez-vous au 274.",
      "S'il est supérieur, rendez-vous au 252."
    ],
    "choices": [
      {
        "text": "Si le chiffre que vous avez tiré est inférieur ou égal à 3, rendez-vous au 274.",
        "targetId": "274"
      },
      {
        "text": "rendez-vous au 252.",
        "targetId": "252"
      }
    ]
  },
  "331": {
    "id": "331",
    "text": [
      "Les Vazhags ne se doutent absolument pas de votre présence. Vous parvenez à gagner la sortie, puis à vous faufiler sans encombre dans le tunnel suivant. Quelques minutes plus tard, les criailleries des Hommes-Rats cessent, et vous entendez le portail de fer se refermer dans un fracas de tonnerre.",
      "Le passage se poursuit vers l'est sur plusieurs kilomètres et, à l'exception de quelques rares sentinelles Vazhags, il est pratiquement désert. Finalement, vous parvenez à l'entrée d'une autre caverne, nettement plus petite que la précédente, mais tout aussi bondée.",
      "La lumière du jour y pénètre par une grande ouverture en arc de cercle que gardent des Vazhags en armure et un couple de chiens de guerre à peau calleuse. Par cette ouverture, vous percevez un chemin qui disparaît derrière une lointaine rangée de collines.",
      "Juste au-dessus du porche, vous remarquez qu'un mince rayon de soleil filtre à travers une petite fenêtre creusée dans le rocher. Sachant qu'il serait risqué d'emprunter l'entrée principale -même pour quelqu'un d'aussi habile que vous — puisqu'elle est trop bien défendue, vous décidez de passer par la petite ouverture.",
      "Utilisez la Table de Hasard.",
      "Si vous maîtrisez la Grande Discipline de l'Art de la Chasse, ajoutez 3 au chiffre que vous avez tiré.",
      "Si le résultat est inférieur ou égal à 5, rendez-vous au 192.",
      "S'il est supérieur, rendez-vous au 346."
    ],
    "choices": [
      {
        "text": "rendez-vous au 192.",
        "targetId": "192"
      },
      {
        "text": "rendez-vous au 346.",
        "targetId": "346"
      }
    ]
  },
  "332": {
    "id": "332",
    "text": [
      "Votre bonne connaissance des lieux vous permet de parcourir le trajet inverse en moins de vingt minutes. Cependant, cette marche a aiguisé votre appétit et, à moins que vous ne maîtrisiez la Grande Discipline de l'Art de la Chasse, vous devez prendre un Repas, ou bien déduire 3 points de votre total d'ENDURANCE.",
      "Ensuite, reprenez votre route vers l'est et rendez-vous au 118."
    ],
    "choices": [
      {
        "text": "rendez-vous au 118.",
        "targetId": "118"
      }
    ]
  },
  "333": {
    "id": "333",
    "text": [
      "Après avoir parcouru un dédale de couloirs, vous parvenez à une vaste antichambre. Les murs sont ornés de tapisseries qui dépeignent les légendes Cénériennes et retracent les exactions et les ignobles agissements perpétrés lors de l'Age des Anciens Royaumes, à une époque où, voilà plus de mille ans maintenant, les Cénériens régnaient en tyrans sur toute la partie septentrionale du Magnamund.",
      "A l'autre bout de l'antichambre, la seule issue est une grosse porte en chêne qui est restée entrouverte. Vous vous approchez et vous entendez soudain s'élever une lugubre mélopée de l'autre côté. Ne pouvant résister à la curiosité, vous risquez un œil par l'entrebâillement.",
      "Le spectacle qui s'offre alors à vos yeux vous glace littéralement le sang.",
      "Rendez-vous au 200."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 200.",
        "targetId": "200"
      }
    ]
  },
  "334": {
    "id": "334",
    "text": [
      "Vous arrondissez la bouche de façon à former un « O » parfait, puis vous prononcez les paroles du sortilège que le seigneur Rimoah vous a enseignées. Le dernier mot que vous lâchez dans un souffle puissant - « Gloar ! » - frappe le druide comme s'il avait reçu un coup de marteau entre les deux omoplates.",
      "Il culbute en avant et tombe dans un buisson d'épineux. Grognant de rage et de douleur, il tente aussitôt de se relever tout en cherchant à mettre la main sur sa baguette en or. Guidés par quelque instinct surnaturel, ses doigts se referment instantanément sur elle, mais avant qu'il puisse s'en servir, vous vous ruez sur lui et le tuez net d'un coup à la tête.",
      "La curiosité vous pousse à retirer le masque vert qui cache son visage. Vous découvrez alors un faciès hideux, grené par la maladie et n'ayant presque plus rien d'humain. Surmontant votre répulsion, vous fouillez le druide et trouvez sur lui les objets Un poignard Une robe de Druide de Cener (Si vous décidez de la garder, sachez qu'elle prendra la place de 2 Objets dans votre Sac à Dos.) Un masque Cénérien Vingt Lunes (soit l'équivalent de 5 Pièces d'Or) Si vous voulez conserver certains de ces objets, n'oubliez pas d'apporter les modifications nécessaires sur votre Feuille d'Aventure.",
      "Votre science Magnakaï vous informe que la baguette du druide ne possède plus aucun pouvoir magique ; ce dernier s'est trouvé annihilé en même temps que son malfaisant propriétaire. Vous vous penchez pour la lui retirer des mains, mais à peine l'avez-vous touchée qu'elle tombe en poussière, tout en dégageant une senteur nauséabonde.",
      "Comme le crépuscule approche, vous quittez la clairière en passant par la trouée, puis vous vous engagez à grands pas sur le sentier boueux qui la prolonge.",
      "Rendez-vous au 10."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 10.",
        "targetId": "10"
      }
    ],
    "loot": {
      "gold": 5
    }
  },
  "335": {
    "id": "335",
    "text": [
      "Vous sortez précipitamment de la bibliothèque et parcourez une enfilade de couloirs qui mènent à une vaste antichambre. Les murs sont ornés de tapisseries qui dépeignent les légendes Cénériennes et retracent les exactions et les ignobles agissements perpétrés lors de l'Âge des Anciens Royaumes, à une époque où, voilà plus de mille ans maintenant, les Cénériens régnaient en tyrans sur toute la partie septentrionale du Magnamund.",
      "A l'autre bout de l'antichambre, la seule issue est une grosse porte en chêne qui est restée entrouverte. Vous vous en approchez et vous entendez soudain s'élever une lugubre mélopée de l'autre côté. Ne pouvant résister à la curiosité, vous risquez un œil par l'entrebâillement.",
      "Le spectacle qui s'offre alors à vos yeux vous glace littéralement le sang.",
      "Rendez-vous au 200."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 200.",
        "targetId": "200"
      }
    ]
  },
  "336": {
    "id": "336",
    "text": [
      "Vous tendez le bras pour vous assurer une prise, puis vous commencez votre longue ascension. La paroi s'effrite sous vos doigts et vous devez tester chaque point d'appui avec précaution.",
      "Utilisez la Table de Hasard.",
      "Si le chiffre que vous venez de tirer est inférieur ou égal à 4, rendez-vous au 133.",
      "S'il est supérieur à 4, rendez-vous au 243."
    ],
    "choices": [
      {
        "text": "Si le chiffre que vous venez de tirer est inférieur ou égal à 4, rendez-vous au 133.",
        "targetId": "133"
      },
      {
        "text": "rendez-vous au 243.",
        "targetId": "243"
      }
    ]
  },
  "337": {
    "id": "337",
    "text": [
      "Grâce à votre Intuition, vous vous mettez en état de transe et, au bout de quelques secondes, vous sentez votre esprit quitter votre enveloppe charnelle. Le tunnel que vous souhaitez explorer débouche sur une énorme grotte. Elle est illuminée par une rangée de fanaux accrochés à la voûte par une longue chaîne ; leur flamme ambrée se réfléchit dans les eaux sombres d'un lac souterrain, ce qui explique les reflets changeants qui vous intriguaient.",
      "De prime abord, il semble que rien ne permette de traverser le lac, mais bientôt, vous apercevez un pont-levis dressé contre la paroi rocheuse, à l'autre extrémité. Tout près de la berge où le pont prend probablement appui lorsqu'il est abaissé, il y a une grande cage en fer occupée par des espèces de crapauds géants.",
      "Ce sont certainement les Tzargs dont Rimoah vous a parlé, ces batraciens féroces élevés tout spécialement par les Cénériens pour qu'ils les guident à travers les méandres marécageux de Caron. Deux Vazhags se tiennent près de la cage. Ils s'amusent à agacer les Tzargs en les piquant à travers les barreaux, à l'aide d'un bâton pointu.",
      "Une fois lassés de ce jeu idiot, ils jettent négligemment leurs piques dans le lac et s'éloignent sur la berge boueuse. L'un d'eux sort de son havresac un morceau de viande avariée qu'il partage avec son compagnon, puis tous deux commencent à dévorer cette infecte nourriture à belles dents, sans se soucier des cris des Tzargs affamés.",
      "Vous sentez qu'il est temps, à présent, de réintégrer votre corps. Vous vous éveillez de cette expérience transcendantale comme après une heure de sommeil, mais vous vous souvenez parfaitement de tout ce que vous avez vu en songe. Maintenant que vous savez ce qui vous attend, vous longez le tunnel d'un pas résolu, puis vous vous postez à l'entrée de la grotte pour observer les deux Vazhags qui continuent de manger leurs provisions.",
      "Rendez-vous au 41."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 41.",
        "targetId": "41"
      }
    ]
  },
  "338": {
    "id": "338",
    "text": [
      "Vous savez pertinemment que le temps presse. Avant peu, Cadak risque de revenir dans ses appartements et, d'autre part, les Cénériens ne tarderont pas à s'apercevoir qu'il y a un intrus parmi eux. Vous décidez donc d'inspecter la salle du trône dans ses moindres recoins, dans l'espoir de trouver un indice qui vous mettrait sur la piste du virus de la peste.",
      "Si vous voulez examiner la boule de verre, rendez-vous au 116.",
      "Si vous désirez aller regarder la tapisserie de plus près, rendez-vous au 33.",
      "Enfin, si vous préférez reporter votre attention sur la statuette en or, rendez-vous au 287."
    ],
    "choices": [
      {
        "text": "Si vous voulez examiner la boule de verre, rendez-vous au 116.",
        "targetId": "116"
      },
      {
        "text": "Si vous désirez aller regarder la tapisserie de plus près, rendez-vous au 33.",
        "targetId": "33"
      },
      {
        "text": "Enfin, si vous préférez reporter votre attention sur la statuette en or, rendez-vous au 287.",
        "targetId": "287"
      }
    ]
  },
  "339": {
    "id": "339",
    "text": [
      "Vous faites appel à toute la puissance de votre Discipline Kaï pour repousser votre adversaire et lui imposer votre volonté. La réaction est instantanée : la créature s'éloigne brusquement, comme si vous l'aviez transpercée avec une lame chauffée à blanc.",
      "Malheureusement, les aiguillons de ses tentacules restent accrochés à votre tunique et, en se retirant vers les profondeurs du marais, la créature vous entraîne avec elle. Pour éviter la noyade, il vous faut donc absolument vous libérer des liens qui vous agrippent.",
      "PLAGHATAR HABILETÉ: 24 ENDURANCE: 30 Cette créature est insensible à toute forme d'attaque psychique. Si l'arme que vous utilisez n'est pas tranchante (c'est-à-dire s'il s'agit d'une Masse d'Armes, d'un Bâton ou d'un Marteau de Guerre), réduisez votre ENDURANCE de 4 points pour toute la durée du combat.",
      "Si vous sortez vainqueur du combat, rendez- vous au 129."
    ],
    "choices": [],
    "combat": {
      "name": "PLAGHATAR",
      "combatSkill": 24,
      "endurance": 30,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "340": {
    "id": "340",
    "text": [
      "Le druide s'effondre sur le sol en recevant le coup fatal. Il reste quelques instants secoué par les spasmes de l'agonie, puis s'immobilise définitivement. Mais alors que vous vous écartez du cadavre, vous sentez instinctivement qu'un nouveau danger vous menace.",
      "Attirés par le bruit de la bataille, quelques membres de la congrégation sont en train de se diriger vers l'endroit où vous vous trouvez. Vous courez vers le pan de mur par lequel le druide était apparu, puis vous l'inspectez minutieusement. Au bout de quelques secondes, vous découvrez un petit levier que vous actionnez sans hésiter.",
      "Le panneau se met à coulisser lentement, donnant accès à un passage dérobé. Vous y cachez rapidement le corps du Grand Prêtre en le tirant par les pieds, puis vous vous empressez de refermer le panneau derrière vous. Il était temps, car déjà les membres de la congrégation pénètrent dans le vestibule !",
      "Après quelques marches, le boyau descend en pente douce jusqu'à une salle éclairée par deux cierges noirs posés sur une dalle de marbre. Sur une table qui se dresse juste à côté, il y a les objets Deux flèches L'équivalent de 2 Repas Deux poignards Une épée Un miroir Une corde Si vous souhaitez vous approprier un ou plusieurs de ces objets, n'oubliez pas de les inscrire sur votre Feuille d'Aventure.",
      "De l'autre côté de la dalle de marbre, vous apercevez une porte ouverte sur un étroit couloir. Vous vous y engagez et parvenez à une autre pièce.",
      "Rendez-vous au 158."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 158.",
        "targetId": "158"
      }
    ]
  },
  "341": {
    "id": "341",
    "text": [
      "Vous déroulez le Plan et, après l'avoir examiné pendant quelques secondes, vous réussissez à repérer l'endroit où vous êtes. Un petit symbole indique l'emplacement d'un levier secret qui doit actionner le panneau. Effectivement, en inspectant minutieusement le mur, vous découvrez bientôt la brique creuse qui renferme ce levier.",
      "Vous tirez dessus et, aussitôt, lo panneau se met à coulisser sur la droite, donnant accès à une étrange salle où des centaines de bocaux de verre, soigneusement étiquetés, sont alignés sur de» étagères. Il y a là toutes les substances possibles et iinu-ginables, de la poussière la plus ordinaire à la précieuse poudre d'or, sans compter les herbes et les ingrédients les plus divers.",
      "Après avoir passé tous ces produits en revue, vous en sélectionnez quelques-uns dont vous connaissez les propriétés : Potion de Laumspur (5 doses) : chaque dose vous permet de regagner 4 points d'ENDURANCE à l'issue d'un combat. Potion d'Alether (4 doses) : une dose vous permet d'augmenter votre HABILETÉ de 2 points pour la durée d'un seul combat.",
      "Herbe des potences (2 doses) : une dose fait dormir pendant dix heures et diminue l'ENDURANCE de 2 points. Racines de Sabito (2 doses) : chaque dose permet de respirer parfaitement sous l'eau. Élixir de Laumwort (3 doses) : chaque dose vous permet de gagner 2 points d'ENDURANCE au début ou à la fin d'un combat.",
      "Herbe d'Oede (1 dose) : cette plante extrêmement rare possède de nombreuses vertus curatives et peut notamment guérir les graves maladies.",
      "Si vous souhaitez prendre un ou plusieurs bocaux, n'oubliez pas de les inscrire sur votre Feuille d'Aven- ture. Tous ces ingrédients sont considérés comme des Objets de Sac à Dos. A l'exception de la porte dérobée par laquelle vous êtes entré, vous remarquez qu'un petit passage mène hors de la pièce.",
      "Si vous désirez l'emprunter, rendez-vous au 214.",
      "Si vous préférez quitter la pièce par la porte dérobée et revenir sur vos pas jusqu'au tunnel ouest, rendez-vous au 271."
    ],
    "choices": [
      {
        "text": "Si vous désirez l'emprunter, rendez-vous au 214.",
        "targetId": "214"
      },
      {
        "text": "Si vous préférez quitter la pièce par la porte dérobée et revenir sur vos pas jusqu'au tunnel ouest, rendez-vous au 271.",
        "targetId": "271"
      }
    ]
  },
  "342": {
    "id": "342",
    "text": [
      "Alors que vous vous dirigez vers le portail de fer, vos sens exacerbés attirent votre attention sur une mince fissure qui court verticalement le long de la paroi. En la longeant du bout de l'index, vous décelez un léger changement dans la pression de l'air : vous venez de tomber sur une porte secrète.",
      "Après avoir inspecté le sol et le mur alentour, vous découvrez un petit levier caché sous une fine dalle de pierre, à hauteur du genou.",
      "Si vous voulez actionner ce levier, rendez-vous au 115.",
      "Si vous préférez vous en abstenir, rendez-vous au 127."
    ],
    "choices": [
      {
        "text": "Si vous voulez actionner ce levier, rendez-vous au 115.",
        "targetId": "115"
      },
      {
        "text": "Si vous préférez vous en abstenir, rendez-vous au 127.",
        "targetId": "127"
      }
    ]
  },
  "343": {
    "id": "343",
    "text": [
      "La salive corrosive de la créature transperce la manche droite et le dos de votre tunique, vous infligeant de profondes et douloureuses brûlures. Vous perdez 6 points d'ENDURANCE.",
      "Si vous survivez à vos blessures, rendez-vous au 117."
    ],
    "choices": [
      {
        "text": "Si vous survivez à vos blessures, rendez-vous au 117.",
        "targetId": "117"
      }
    ],
    "damage": 6
  },
  "344": {
    "id": "344",
    "text": [
      "La décharge d'énergie vous percute en pleine poitrine et une myriade d'étoiles se met à danser devant vos yeux : vous perdez 10 points d'ENDURANCE.",
      "Si vous survivez à cette fulgurante attaque, rendez-vous au 135."
    ],
    "choices": [
      {
        "text": "Si vous survivez à cette fulgurante attaque, rendez-vous au 135.",
        "targetId": "135"
      }
    ],
    "damage": 10
  },
  "345": {
    "id": "345",
    "text": [
      "Vous descendez quelques barreaux, de manière à être hors de portée des fers de lance, puis vous accomplissez les gestes magiques du « Poing Invincible » que Rimoah vous a enseignés. Le poing fermé, vous tendez le bras, puis vous rouvrez la main en dirigeant votre paume face à l'ennemi.",
      "Vous sentez alors un influx d'énergie vous parcourir le bras et, l'instant d'après, vous voyez les deux Disciples de Vashna reculer en titubant, incapables de résister à la puissance de votre sortilège. Vous saisissez immédiatement l'occasion pour grimper sur la plate- forme et, d'un coup de poing bien ajusté, vous envoyez l'un de vos adversaires pardessus bord.",
      "Il tombe de la plate-forme en hurlant, puis va s'écraser sur les paillasses carrelées du laboratoire, au beau milieu des éprouvettes et des cornues. Entretemps, le second Disciple s'est ressaisi. Il vous toise d'un air qui en dit long sur la haine qu'il vous porte, ainsi qu'à tous ceux de votre race.",
      "DISCIPLE DE VASHNA HABILETÉ : 25 ENDURANCE : 40 Si vous remportez ce combat, rendez-vous au 29."
    ],
    "choices": [
      {
        "text": "Si vous remportez ce combat, rendez-vous au 29.",
        "targetId": "29"
      }
    ],
    "combat": {
      "name": "DISCIPLE DE VASHNA",
      "combatSkill": 25,
      "endurance": 40,
      "mindblastImmune": false,
      "undead": false
    }
  },
  "346": {
    "id": "346",
    "text": [
      "Vous parvenez à atteindre l'ouverture sans éveiller l'attention des gardes et vous émergez sur le flanc d'une montagne, près d'un affleurement dissimulé par des buissons touffus et une rangée de rochers. Vous restez quelques instants ébloui par la lumière du petit matin qui inonde les collines environnantes.",
      "Au fur et à mesure que votre vision s'améliore, vous découvrez un véritable océan de verdure qui semble peuplé de tous les dangers. D'après la position du soleil et grâce à votre sens de l'orientation, vous en déduisez qu'il s'agit de la forêt de Ruel et que vous vous trouvez donc sur le versant oriental des monts Skardos.",
      "Autour de vous, tout semble désert ; seul le tracé sinueux d'une route poussiéreuse qui serpente à travers les collines nues jusqu'à l'orée de la forêt rompt la monotonie du paysage. Après avoir consulté votre carte, vous comprenez qu'il s'agit de la route de Skardos, la piste secrète que les Cénériens utilisent pour se rendre directement à Mogaruith.",
      "Vous décidez de l'emprunter mais auparavant (à moins que vous ne maîtrisiez la Grande Discipline de l'Art de la Chasse) vous devez prendre un Repas ou bien perdre 3 points d'ENDURANCE.",
      "Rendez-vous au 230."
    ],
    "choices": [
      {
        "text": "Rendez-vous au 230.",
        "targetId": "230"
      }
    ]
  },
  "347": {
    "id": "347",
    "text": [
      "En bas des marches, le tunnel continue en ligne droite, puis aboutit à une robuste porte en bois, cloutée et bardée de fer. Elle est fermée, mais vous remarquez un trou de serrure sous la poignée rouillée.",
      "Si vous possédez une Clé de Cuivre, rendez- vous au 102.",
      "Sinon, rendez-vous au 261."
    ],
    "choices": [
      {
        "text": "Sinon, rendez-vous au 261.",
        "targetId": "261"
      }
    ]
  },
  "348": {
    "id": "348",
    "text": [
      "Sans un bruit, vous levez votre arme et vous vous tenez prêt à frapper. Jusque-là, ni le Cénérien ni les Vazhags ne semblent s'être aperçus de votre présence. Mais dès qu'ils s'engagent dans le tunnel sud, les Hommes-Rats s'immobilisent et se mettent à pousser des cris hystériques.",
      "Vous entrez alors en action et vous vous ruez comme un fauve sur vos ennemis, en abattant deux d'un seul coup. Avant même qu'ils touchent terre, vous pourfendez le torse d'un troisième et vous en neutralisez un quatrième grâce à un crochet latéral qui lui sépare presque la tête du corps.",
      "Tandis que le reste de la troupe se replie à la hâte dans la plus grande confusion, vous en profitez pour reprendre votre souffle. Voyant reculer ses hommes, le Cénérien les exhorte à grands cris à revenir à l'assaut pour venger la mort de leurs camarades.",
      "Le plus téméraire d'entre eux relève le défi, mais vous déjouez sa première offensive avec une aisance décourageante et, avant qu'il en tente une seconde, vous lui transpercez le cœur d'un coup net. Vous avez mené ce combat avec une telle adresse et une telle rapidité que le druide en demeure pantois.",
      "C'en est trop pour le dernier Vazhag survivant : dans un cri de terreur abjecte, il laisse tomber sa torche et son arme, puis il s'enfuit sans demander son reste par le tunnel nord. Désormais seul face à vous, le Cénérien recule jusqu'au fond de la caverne en marmottant des paroles diaboliques.",
      "Pressé d'en finir avec lui, vous levez votre arme et avancez à grands pas, mais vous êtes subitement freiné dans votre élan par une vague d'énergie psychique à laquelle vous vous heurtez comme à un mur de pierre.",
      "Si vous maîtrisez la Grande Discipline de l'Écran Psychique, rendez-vous au 107.",
      "Sinon, rendez-vous au 272."
    ],
    "choices": [
      {
        "text": "Si vous maîtrisez la Grande Discipline de l'Écran Psychique, rendez-vous au 107.",
        "targetId": "107"
      },
      {
        "text": "Sinon, rendez-vous au 272.",
        "targetId": "272"
      }
    ]
  },
  "349": {
    "id": "349",
    "text": [
      "Le cri d'agonie du Cénérien a alerté la patrouille des Vazhags. Ces derniers font demi-tour mais, dès qu'ils vous aperçoivent auprès du cadavre de leur chef, tel un chasseur avec sa proie, leur intrépidité fond comme neige au soleil. Ils abaissent leurs armes, commencent à reculer puis, dans un mouvement de panique générale, ils font volte-face et s'enfuient en courant.",
      "La curiosité vous pousse à retirer le masque vert qui cache son visage. Vous découvrez alors un faciès hideux, grené par la maladie et n'ayant presque plus rien d'humain. Vous fouillez le druide et trouvez sur lui les objets Un poignard Une robe de Druide de Cener (Si vous décidez de la garder, sachez qu'elle prendra la place de 2 Objets dans votre Sac à Dos.) Un masque Cénérien Vingt Lunes (soit l'équivalent de 5 Pièces d'Or) Votre science Magnakaï vous informe que la baguette du druide ne possède plus aucun pouvoir magique ; ce dernier s'est trouvé annihilé en même temps que son malfaisant propriétaire.",
      "Vous vous penchez pour la lui retirer des mains, mais à peine l'avez- vous touchée qu'elle tombe en poussière. Comme le crépuscule approche, vous quittez la clairière en passant par la trouée, puis vous vous engagez sur le sentier boueux qui la prolonge.",
      "Rendez- vous au 10."
    ],
    "choices": [],
    "loot": {
      "gold": 5
    }
  },
  "350": {
    "id": "350",
    "text": [
      "Puisant dans vos ultimes ressources d'énergie, vous résistez vaillamment au courant et parvenez à éviter le déluge de pierre et de feu. Quelques minutes plus tard, vous échouez sur la rive occidentale de la Storn. Un détachement d'archers Sloviens vous aperçoit et, vous prenant pour un espion à la solde des Cénériens, ils vous conduisent pieds et poings liés devant leur capitaine.",
      "Fort heureusement, ce dernier reconnaît votre tunique Kaï. Le capitaine des archers dépêche immédiatement un messager à Holona, afin d'informer ceux qui vous y attendent pour vous féliciter. Après avoir écouté le compte rendu de votre mission, ils décident d'organiser une grande manifestation officielle en votre honneur.",
      "Vous recevez les remerciements de la nation tout entière et, sous les ovations de la foule, le Président vous décore de l'« Etoile d'Or du Palmyrion », la plus haute distinction que l'on puisse accorder à un guerrier. Félicitations, Loup Solitaire ! Vous avez triomphé de vos ennemis.",
      "Grâce à votre bravoure sans égale, la redoutable menace qui planait sur le Magna-mund est désormais écartée. Cependant, les forces du mal continuent sournoisement .leur œuvre. Quelques mois après votre retour au Sommerlund, on vous informe que de graves événements se préparent, lesquels compromettent l'existence de l'être qui vous est le plus cher au monde : Banedon !",
      "Si vous voulez tirer votre ami des griffes de ses ennemis, il vous faudra, une fois encore, donner les preuves de votre courage et de votre perspicacité dans le quatorzième volume de la série Loup Solitaire."
    ],
    "choices": []
  }
};
