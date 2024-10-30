import { BiWorld } from "react-icons/bi";
import { PiMoneyWavy } from "react-icons/pi";
import { IoCloseOutline, IoWaterOutline } from "react-icons/io5";
import { MdOutlineFlashOff } from "react-icons/md";
import { IoManOutline, IoWomanOutline } from "react-icons/io5";
import { FaCheck, FaTruck } from "react-icons/fa6";
import { BsWater } from "react-icons/bs";
import { MdElectricBolt } from "react-icons/md";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbPlaneTilt, TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { GiFrance } from "react-icons/gi";
import { IoIosPeople, IoMdCheckmark } from "react-icons/io";
import { HiOutlineCash, HiOutlineCog, HiOutlineGlobe, HiOutlineHeart, HiOutlinePaperAirplane, HiOutlineShieldCheck, HiOutlineSparkles } from "react-icons/hi";
import { FiCheckCircle, FiTarget, FiTool } from "react-icons/fi";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import SophieD from "@/public/images/avis/sophieD.webp";
import ClaudiaR from "@/public/images/avis/claudiaR.webp";
import JMT from "@/public/images/avis/jmt.webp";
import LauraM from "@/public/images/avis/lauraM.webp";
import MarcL from "@/public/images/avis/marcL.webp";
import MarieL from "@/public/images/avis/marieL.webp";
import PhillipeG from "@/public/images/avis/phillippeG.webp";
import { FaBurn } from "react-icons/fa";

export const statsData = [
  {
      title: "80%", content: "80% de papier en moins"
  },
  {
      title: "150€", content: "+150€ d’économies par an"
  },
  {
      title: "319", content: "+319 d’utilisateurs actifs"
  },
]

export const benefitsData = [
  {
    icon: IoWaterOutline, 
    title: "Hygiénique", 
    content: "Plus doux qu'un papier, il vous offre une fraîcheur quotidienne, comme une brise matinale pour votre derrière."
  },
  {
    icon: PiMoneyWavy, 
    title: "Économique", 
    content: "Économisez jusqu'à 150 € par an en utilisant 80 % de papier toilette en moins. Moins de dépenses, plus de confort, et un portefeuille qui sourit."
  },
  {
    icon: BiWorld, 
    title: "Écologique", 
    content: "Sauvez la planète en économisant 1500L d'eau chaque année ! Moins de papier, moins de déforestation, et un monde plus doux."
  }
]

export const benefitsFeelingData = [
  {
    icon: HiOutlineShieldCheck, 
    title: "Confiance", 
    content: "Dites adieu aux doutes après chaque passage aux toilettes ! Avec notre bidet, vous êtes frais comme un gardon et prêt à affronter la journée, sans un regard en arrière."
  },
  {
    icon: HiOutlineSparkles, 
    title: "Confort", 
    content: "Oubliez le papier irritant ! Avec un jet doux et ajustable, profitez du confort ultime, pour un traitement royal de votre peau à chaque passage."
  },
  {
    icon: HiOutlineHeart, 
    title: "Plaisir", 
    content: "Qui aurait imaginé que le trône pouvait être un endroit agréable ? Notre bidet transforme chaque visite aux toilettes en un moment de détente, tout en vous laissant impeccable."
  }
]

export const trustsData = [
  {
    icon: RiSecurePaymentLine, 
    title: "Paiement Sécurisé", 
    content: "Paiement 100% sécurisé CB, PayPal."
  },
  {
    icon: FaCheck, 
    title: "Satisfait ou remboursé", 
    content: "Toute commande passé avant 14h est expédié le jour même."
  },
  {
    icon: TbPlaneTilt, 
    title: "Expédié en 24h", 
    content: "Toute commande passé avant 14h est expédié le jour même."
  },
  {
    icon: BiSupport, 
    title: "Support client", 
    content: "Un support client est là pour vous à chaque étape."
  }
]

export const selectionModesData = [
  {
      title: "Masculin", icon: IoManOutline
  },
  {
      title: "Féminin", icon: IoWomanOutline
  }
]

export const selectionWhyData = [
  {
      title: "Jets d'eau précis", icon: FiTarget
  },
  {
      title: "Zéro éléctricité", icon: MdOutlineFlashOff
  },
  {
      title: "Installation facile", icon: FiTool
  },
  {
      title: "100% compatible", icon: FiCheckCircle
  }
]

export const essentialsData = [
  {
    icon: BsWater,
    title: "Jets d’eau Précis",
  },
  {
    icon: MdElectricBolt,
    title: "Zéro éléctricité",
  },
  {
    icon: FaCheck,
    title: "Installation facile",
  },
  {
    icon: PiPlugsConnectedFill,
    title: "Comptabilité totale",
  },
]


export const modeSelected = (selected: number) => {
  switch (selected) {
  case 0:
    return {
      content: "Offrez-vous un soin personnalisé, comme un rasoir de barbier qui a un faible pour la douceur."
    };
  case 1:
    return {
      content: "Une hygiène douce et adaptée pendant vos règles, pour une propreté apaisante qui vous fait sourire."
    };
  default:
    return {
      content: "Offrez-vous un soin personnalisé, comme un rasoir de barbier qui a un faible pour la douceur."
    };
  }
};

export const whySelected = (selected: number) => {
  switch (selected) {
  case 0:
    return {
      content: "Pour une propreté si efficace, que même votre derrière en redemandera !"
    };
  case 1:
    return {
      content: "Fonctionne sans électricité, parce que les économies, c'est mieux quand ça coule à flots."
    };
  case 2:
    return {
      content: "Installation rapide en 10 minutes, sans travaux, même votre voisin bricoleur sera jaloux."
    };
  case 3:
    return {
      content: "Compatible avec toutes les toilettes standards, pour que tout le monde en profite."
    };
  default:
    return {
      content: "Pour une propreté si efficace, que même votre derrière en redemandera !"
    };
  }
};

export const reviewsData = [
  {
    image: SophieD,
    name: "Sophie D.",
    score: 5,
    content: "J’ai été agréablement surprise par la simplicité de l’installation. C’est un produit fantastique !",
  },
  {
    image: ClaudiaR,
    name: "Claudia R.",
    score: 5,
    content: "Ce bidet convient parfaitement à toute la famille. Les différents modes sont adaptés à chaque besoin, et son installation a été rapide.",
  },
  {
    image: PhillipeG,
    name: "Philippe G.",
    score: 5,
    content: "Ce bidet offre un excellent rapport qualité-prix. Il est efficace, facile à utiliser, et l’installation ne nécessite aucune compétence particulière. Je suis très satisfait de mon achat.",
  },
  {
    image: MarieL,
    name: "Marie L.",
    score: 5,
    content: "Je suis ravie de mon achat ! L’installation était un jeu d’enfant et les différents modes de lavage sont super pratiques. Je recommande vivement !",
  },
  {
    image: JMT,
    name: "Jean-Marc T.",
    score: 5,
    content: "Ce bidet est parfait pour réduire notre consommation de papier toilette. C’est à la fois économique et écologique.",
  },
  {
    image: LauraM,
    name: "Laura M.",
    score: 5,
    content: "Ce bidet a complètement changé notre manière de voir l’hygiène. Les deux modes de lavage sont très appréciables et rendent chaque utilisation confortable. Je le recommande à tout le monde !",
  },
  {
    image: MarcL,
    name: "Marc L.",
    score: 5,
    content: "Je suis impressionné par la qualité de ce bidet. Facile à installer et à utiliser, il est à la fois moderne et pratique.",
  },
];

export const checkProduct = [
  {
    title: "Irritations ? C’est du passé !",
    icon: FaBurn,
  },
  {
      title: "Propre comme jamais",
      icon: HiOutlineHandThumbUp,
  },
  {
      title: "Adieu le papier, bonjour l'économie",
      icon: HiOutlinePaperAirplane,
  },
  {
      title: "100 % écolo, 0 % électricité",
      icon: HiOutlineGlobe,
  },
  {
      title: "Des économies en boucle toute l’année",
      icon: HiOutlineCash,
  },
  {
      title: "Installation ultra simple, promis !",
      icon: HiOutlineCog,
  },
]

export const detailsProduct = [
  {
    title: "Entreprise Française",
    content: "Supportez l’artisanat national ! Et en plus, on est sympas et on parle votre langue (sauf quand on a un peu trop bu de café)."
  },
  {
      title: "Livraison OFFERTE",
      content: "Oui, vous avez bien lu ! Livraison gratuite et expédiée en 24h, pour que votre produit arrive presque avant même que vous n'ayez eu le temps de vous réjouir de votre achat !"
  },
  {
    title: "Garantie de 2 ans",
    content: "Vous avez deux ans pour tester, adorer, et même revenir vers nous si besoin. Un achat en toute confiance !."
  },
  {
    title: "Paiement en 3x sans frais",
    content: "Besoin de temps pour réfléchir... et payer ? Aucun souci ! Klarna vous offre le luxe de régler en 3 fois, sans frais, histoire de garder un peu d’argent pour vos petites folies."
  },
  {
      title: "Utilisation & Installation",
      content: "Vous êtes à deux pas du grand confort ! Fixez simplement le bidet sur le siège des toilettes, raccordez-le au robinet, et voilà ! Installation rapide et facile en moins de 10 minutes, promis ! Pour les plus intrépides, ajustez le jet d'eau selon vos préférences. Choisissez parmi les modes lavage masculin ou lavage féminin. Rien de plus simple, même pas besoin d'un diplôme de plombier !"
  },
  {
      title: "Caractéristiques",
      content: "Type : Bidet à pression d'eau – Aucun branchement électrique requis, juste de l’eau et un peu de style !\nInstallation : Sans prise de tête, même pas besoin de compétences – si vous savez changer une ampoule, vous savez installer ce bidet.\nCompatibilité : Conçu pour les toilettes standards – pas de discrimination ici !\nEntretien : Zéro frais – on aime quand c'est simple.\nModes : Deux modes au choix pour des moments tout en finesse et en confort."
  },
]

export const faqData = [
  {
      title: "Comment fonctionne le bidet ?",
      content: "Notre bidet utilise des jets d'eau ajustables pour un nettoyage efficace. Vous allez vous sentir aussi frais qu'après une douche, mais sans le déplacement."
  },
  {
      title: "Installation est-elle facile ?",
      content: "Oh que oui ! L'installation du bidet se fait en moins de 10 minutes, un vrai jeu d’enfant, même pour les plus bricoleurs du dimanche ! "
  },
  {
      title: "Est-ce que ça fonctionne sans électricité ?",
      content: "Absolument ! Pas besoin de vous transformer en électricien. Votre porte-monnaie et notre planète vous diront merci ! "
  },
  {
    title: "Compatible avec toutes les toilettes ?",
    content: "Bien sûr ! Notre bidet s’adapte à toutes les toilettes standards, comme un caméléon sur un pot de fleurs !"
  },
  {
      title: "Vais-je faire des économies ?",
      content: "Économisez jusqu'à 80% de papier toilette. Ça veut dire plus d’argent pour le café, les gâteaux, ou même cette plante que vous oubliez toujours d’arroser !"
  },
  {
      title: "Quels sont les délais de livraison ?",
      content: "Nos délais de livraison sont de 7 à 13 jours ouvrés. Mais si vous êtes chanceux, vous pourriez recevoir votre bidet en moins d'une semaine ! Pas de frais cachés, juste de la bonne humeur !"
  },
  {
      title: "Où livrons-nous ?",
      content: "Partout dans le monde ! Que vous soyez à Paris ou au pôle Nord, nous vous livrons gratuitement ! (Mais n'attendez pas trop de pingouins pour vos commandes.)"
  },
  {
      title: "D'où expédions-nous les colis ?",
      content: "Nous expédions directement depuis notre base en France. On vous a dit que c'était une entreprise 100% française !"
  },
  {
      title: "Qui livre mes articles ?",
      content: "Vos articles sont livrés par votre service postal local. C'est un peu comme un rendez-vous surprise avec le facteur !"
  },
  {
      title: "Que faire si je ne suis pas là ?",
      content: "Pas de panique ! Si votre colis est trop gros pour la boîte aux lettres, il sera déposé à votre bureau de poste. Comme ça, pas besoin de jouer à cache-cache avec le facteur !"
  },
  {
      title: "Comment corriger une adresse erronée ?",
      content: "Si votre commande n'est pas encore partie, contactez-nous tout de suite ! Sinon, une fois expédiée, c'est comme essayer de changer le cours d'une rivière… pas facile !"
  },
  {
      title: "Articles manquants dans ma commande ?",
      content: "Chaque fournisseur s'occupe d'un produit. Donc si vous commandez 5 articles, vous aurez peut-être 5 colis différents. Une petite surprise par la poste, mais chacun est spécial à sa manière !"
  },
  {
      title: "Comment utiliser un code promo ?",
      content: "Pour utiliser un code promo, entrez-le lors du paiement. C'est comme une magie, et hop ! Réduction instantanée. Pensez à votre code comme à un super-héros du shopping !"
  },
  {
      title: "Votre site est-il sécurisé ?",
      content: "Oui, 100% sécurisé (voire même 300% !). Chaque page est protégée comme un château fort. Vous pouvez acheter sans stress, comme si vous étiez en vacances !"
  },
  {
      title: "Quels modes de paiement sont acceptés ?",
      content: "Vous pouvez régler par Carte bancaire. Pas de chèques ni de virements, parce que nous n'avons pas encore découvert la machine à remonter le temps !"
  }
];


export const stacksData = [
  {
    icon: FaTruck,
    title: "Livraison OFFERTE",
  },
  {
    icon: IoIosPeople,
    title: "+319 clients satisfaits",
  },
  {
    icon: TbTruckReturn,
    title: "Satisfait ou Remboursé",
  },
  {
    icon: GiFrance,
    title: "Support Français",
  },
];

export const comparaisonVariantSelected = (variant: string) => {
  switch (variant) {
  case "whitout":
    return {
      title: "Avec le papier toilette", 
      lists: [
        {
          content: "Frottez, il en reste toujours",
          icon: IoCloseOutline,
        },
        {
          content: "Des rouleaux à la pelle",
          icon: IoCloseOutline,
        },
        {
          content: "Du papier rêche comme du sable",
          icon: IoCloseOutline,
        },
        {
          content: "Des arbres en larmes",
          icon: IoCloseOutline,
        }
      ]
    }
  case "with":
    return {
      title: "Avec HelloPurly",
      lists: [
        {
          content: "Hygiène impeccable",
          icon: IoMdCheckmark, 
        },
        {
          content: "80 % de papier en moins",
          icon: IoMdCheckmark, 
        },
        {
          content: "Un jet doux, comme un câlin",
          icon: IoMdCheckmark, 
        },
        {
          content: "Moins de papier, plus de forêts",
          icon: IoMdCheckmark, 
        }
      ]
    }
  default:
    return {
      title: "Avec le papier toilette", 
      lists: [
        {
          content: "Frottez, il en reste toujours",
          icon: IoCloseOutline,
        },
        {
          content: "Des rouleaux à la pelle",
          icon: IoCloseOutline,
        },
        {
          content: "Du papier rêche comme du sable",
          icon: IoCloseOutline,
        },
        {
          content: "Des arbres en deuil",
          icon: IoCloseOutline,
        }
      ]
    }
  }
};