export interface RuleSection {
  id: string;
  title: string;
  content: string;
}

export const rulesData: RuleSection[] = [
  {
    id: 'generale',
    title: 'Générale',
    content: `Au cours de l'initiation qui vous a permis de devenir un Seigneur Kaï, vous avez acquis une force exceptionnelle. Les deux éléments essentiels de cette force sont représentés par votre HABILETÉ AU COMBAT et votre ENDURANCE.

Pour générer vos statistiques, l'application utilise une "Table de Hasard" numérique qui remplace la table de la fin du livre. 
- Votre **Habileté** de départ est calculée en générant un nombre aléatoire de 0 à 9, auquel on ajoute 10 (soit de 10 à 19).
- Votre **Endurance** de départ est calculée en générant un nombre aléatoire de 0 à 9, auquel on ajoute 20 (soit de 20 à 29).

Vos points d'Endurance diminueront chaque fois que vous serez blessé au combat, ou si vous manquez de nourriture lorsque vous devez prendre un repas. Si vos points d'Endurance tombent à zéro, vous êtes mort et l'aventure est terminée.`
  },
  {
    id: 'disciplines',
    title: 'Les disciplines Kaï',
    content: `Les Moines Kaï sont passés maîtres dans l'art d'utiliser certaines disciplines martiales. Vous devez en choisir 5 parmi la liste suivante :

**1. Le Camouflage**
Permet de se fondre dans le décor et de passer inaperçu, très utile pour échapper à des ennemis ou pour se cacher.

**2. La Chasse**
Permet de trouver de la nourriture en milieu sauvage (forêts, plaines). Inutile dans les déserts ou les terres arides. Si vous avez cette discipline, vous n'avez pas besoin de consommer de Repas quand on vous le demande en milieu naturel.

**3. Le Sixième Sens**
Permet de pressentir un danger imminent, de deviner la véritable nature d'un inconnu ou de détecter des ennemis cachés.

**4. L'Orientation**
Assure au Seigneur Kaï de toujours retrouver son chemin, de s'orienter dans les ténèbres ou de suivre des pistes invisibles.

**5. La Guérison**
Permet de récupérer 1 point d'Endurance pour chaque paragraphe de l'aventure franchi sans combattre, jusqu'à retrouver son score maximum.

**6. La Maîtrise des Armes**
Permet de devenir expert dans le maniement d'une arme spécifique (tirée au sort ou choisie). L'utilisation de cette arme au combat octroie un bonus de +2 en Habileté.

**7. Le Bouclier Psychique**
Protège l'esprit contre les attaques mentales. Sans cette discipline, une attaque mentale vous fera perdre des points d'Endurance.

**8. La Puissance Psychique**
Permet d'attaquer l'esprit de votre ennemi pendant un combat, ajoutant +2 à votre Quotient d'Attaque (sauf si l'ennemi est immunisé).

**9. La Communication Animale**
Permet de comprendre et de parler avec la plupart des animaux, ou de deviner leurs intentions.

**10. La Maîtrise Psychique de la Matière**
Permet de déplacer de petits objets par la simple force de la pensée (télékinésie).`
  },
  {
    id: 'equipement',
    title: 'Équipement',
    content: `Au départ de votre aventure, vous possédez un équipement de base minimal :
- Une Hache (Arme)
- Un Sac à Dos
- Un Repas

Vous possédez également une Bourse contenant quelques Couronnes d'Or (tirées aléatoirement entre 0 et 9). 
De plus, vous avez découvert une Carte Géographique des Terres du Nord et l'un des objets suivants (attribué aléatoirement au départ) :
- Une Épée (Arme)
- Un Casque (Objet Spécial, +2 Endurance)
- Deux Repas
- Une Cotte de Mailles (Objet Spécial, +4 Endurance)
- Une Masse d'Armes (Arme)
- Une Potion de Guérison (Rend 4 points d'Endurance)
- Un Bâton (Arme)
- Une Lance (Arme)
- 12 Couronnes d'Or
- Un Glaive (Arme)`
  },
  {
    id: 'repartition',
    title: 'Répartition de l\'équipement',
    content: `Votre équipement est réparti de la manière suivante afin que vous puissiez le transporter aisément :
- **Armes** : Portées à la main ou à la ceinture.
- **Armure / Casque** : Vous en êtes vêtu/coiffé.
- **Nourriture / Potions** : Rangées dans votre Sac à Dos.
- **Couronnes d'Or** : Rangées dans votre Bourse.
- **Objets Spéciaux** : Transportés sur vous (ou comme précisé).`
  },
  {
    id: 'limites',
    title: 'Combien d\'objets pouvez-vous transporter ?',
    content: `Vous ne pouvez pas tout emporter ! Votre capacité de transport est strictement limitée :

- **Armes** : Vous ne pouvez posséder que DEUX armes au maximum à la fois.
- **Sac à Dos** : Il ne peut contenir que HUIT objets au maximum (y compris les repas et potions).
- **Objets Spéciaux** : Ils ne sont pas comptés dans la limite du sac à dos, sauf mention contraire.
- **Bourse** : Elle ne peut contenir que CINQUANTE (50) Couronnes d'Or au maximum.`
  },
  {
    id: 'utilisation',
    title: 'Comment utiliser votre équipement ?',
    content: `**Armes** : Si vous vous battez avec une arme que vous maîtrisez (Discipline Maîtrise des Armes), vous gagnez +2 en Habileté. Si vous devez vous battre à mains nues sans arme, vous perdez 4 points d'Habileté (-4).

**Nourriture** : S'il ne vous reste plus de vivres lorsqu'on vous oblige à prendre un repas, vous perdez 3 points d'Endurance. (Sauf si vous possédez la discipline de la Chasse).

**Potion de Guérison** : Elle vous rend 4 points d'Endurance lorsque vous la buvez (généralement après un combat ou à tout moment hors combat, sans dépasser votre maximum).`
  },
  {
    id: 'combat',
    title: 'Règles de combat',
    content: `Lors d'un combat, votre but est de réduire l'Endurance de votre adversaire à zéro.

1. Calculez votre **Quotient d'Attaque** : 
   *(Votre Habileté + Bonus d'armes/disciplines) - (L'Habileté de l'ennemi)*
   Ce quotient peut être positif ou négatif.

2. A chaque "Assaut", un nombre aléatoire (de 0 à 9) est généré.
3. Ce nombre, croisé avec votre Quotient d'Attaque dans la Table des Coups Portés, détermine les dégâts subis par l'ennemi (E) et par vous-même (LS).
4. Les dégâts sont soustraits de l'Endurance.
5. S'il s'agit d'un combat à mort, les assauts s'enchaînent jusqu'à ce que l'Endurance de l'un des deux combattants atteigne 0.

Il est parfois possible de fuir un combat si le texte vous y autorise, mais vous subirez souvent les dégâts d'un premier assaut avant de vous échapper.`
  }
];
