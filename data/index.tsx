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
import { HiOutlineCash, HiOutlineCog, HiOutlineCreditCard, HiOutlineGlobe, HiOutlineHeart, HiOutlinePaperAirplane, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineTruck } from "react-icons/hi";
import { FiCheckCircle, FiTarget, FiTool } from "react-icons/fi";
import { HiOutlineHandThumbUp } from "react-icons/hi2";

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
    content: "Plus efficace et plus doux qu'un simple papier, il vous garantit une sensation de fraîcheur et un nettoyage en profondeur, chaque jour."
  },
  {
    icon: PiMoneyWavy, 
    title: "Économique", 
    content: "Économisez jusqu'à 150 € par an en réduisant votre consommation de papier toilette de 80%. Moins de dépenses, plus de confort, tout en prenant soin de votre portefeuille."
  },
  {
    icon: BiWorld, 
    title: "Écologique", 
    content: "Faites un geste pour la planète en économisant 1500L d'eau chaque année et en réduisant votre consommation de papier. Moins de déforestation, plus de durabilité."
  }
]

export const benefitsFeelingData = [
  {
    icon: HiOutlineShieldCheck, 
    title: "Confiance", 
    content: "Fini les doutes après chaque passage aux toilettes. Avec notre bidet, vous vous sentez toujours propre et sûr de vous, prêt à affronter la journée sans vous poser de questions."
  },
  {
    icon: HiOutlineSparkles, 
    title: "Confort", 
    content: "Dites adieu au papier irritant ! Un jet doux et ajustable vous apporte le confort ultime, pour une expérience qui chouchoute votre peau à chaque utilisation."
  },
  {
    icon: HiOutlineHeart, 
    title: "Plaisir", 
    content: "Qui aurait cru qu’aller aux toilettes pouvait être aussi agréable ? Notre bidet transforme une routine quotidienne en un moment de détente, tout en vous laissant une sensation de propreté impeccable."
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
      content: " Offrez-vous un soin personnalisé, alliant la précision d'un rasoir de barbier à un nettoyage doux."
    };
  case 1:
    return {
      content: "Une hygiène délicate et adaptée à vos besoins, pour une sensation de propreté apaisante."
    };
  default:
    return {
      content: " Offrez-vous un soin personnalisé, alliant la précision d'un rasoir de barbier à un nettoyage doux."
    };
  }
};

export const whySelected = (selected: number) => {
  switch (selected) {
  case 0:
    return {
      content: "Pour une propreté et une hygiène 2x fois plus efficace"
    };
  case 1:
    return {
      content: "Fonctionne sans électricité (pour toujours plus d’économies)"
    };
  case 2:
    return {
      content: "Installation facile en 10 minutes, sans travaux nécessaires."
    };
  case 0:
  default:
    return {
      content: "Notre kit est compatible avec toutes les toilettes standards."
    };
  }
};

export const reviewsData = [
  {
    name: "Marie L.",
    score: 5,
    content: "Je ne savais pas que j'avais besoin de ce bidet jusqu'à ce que je l'installe. Fini les rouleaux de papier toilette, et bonjour la sensation de fraîcheur à chaque utilisation.",
  },
  {
    name: "Sophie D.",
    score: 5,
    content: "J'économise tellement de papier toilette et je me sens infiniment plus propre. C'est une petite révolution dans ma salle de bain. Installation rapide, confort garanti, que demander de plus ?",
  },
  {
    name: "Philippe G.",
    score: 5,
    content: "Un achat que je ne regrette absolument pas. Plus besoin de galérer avec le papier toilette. Le jet est doux, précis, et surtout très efficace. Mes fesses sont ravies et moi aussi !",
  },
  {
    name: "Laura M.",
    score: 5,
    content: "Facile à installer, zéro électricité, et des économies considérables en papier toilette. Franchement, c'est le petit luxe que tout le monde devrait s'offrir !",
  },
  {
    name: "Marc L.",
    score: 5,
    content: "Je ne reviendrai jamais au papier toilette. Ce bidet a changé ma façon de voir l'hygiène. C’est plus propre, plus confortable et tellement plus agréable.",
  },
  {
    name: "Cedric N.",
    score: 5,
    content: "Je ne m'attendais pas à une telle qualité pour ce prix. Le jet d'eau est parfait, la sensation de propreté est incomparable. Mes toilettes n’ont jamais été aussi chics !",
  },
];

export const checkProduct = [
  {
      title: "Réduction massive de papier",
      icon: HiOutlinePaperAirplane,
  },
  {
      title: "Zéro électricité, 100 % écolo",
      icon: HiOutlineGlobe,
  },
  {
      title: "Confort et propreté personnalisé",
      icon: HiOutlineHandThumbUp,
  },
  {
      title: "Installation facile en un clin d'œil",
      icon: HiOutlineCog,
  },
  {
      title: "Économies garanties toute l’année",
      icon: HiOutlineCash,
  },
  {
      title: "Entreprise Française",
      icon: GiFrance,
  },
  {
      title: "Expédition en 24h",
      icon: HiOutlineTruck,
  },
  {
      title: "Garantie 3 ans",
      icon: HiOutlineShieldCheck,
  },
  {
      title: "Paiement 3x sans frais",
      icon: HiOutlineCreditCard,
  },
]

export const detailsProduct = [
  {
      title: "Description",
      content: "Avec le bidet Hello Curly, vos fesses vont découvrir une nouvelle ère de douceur et d’hygiène, tout en contribuant à un monde plus vert. Oubliez les tonnes de papier toilette et adoptez un nettoyage qui vous rendra accro !"
  },
  {
      title: "Utilisation",
      content: "Fixez le bidet sur le siège des toilettes et raccordez-le au robinet. Installation rapide et facile en moins de 15 minutes. Ajustez le jet d'eau selon vos préférences. Choisissez parmi les modes auto-lavage, lavage masculin ou lavage féminin."
  },
  {
      title: "Caractéristiques",
      content: "Type : Bidet pression d'eau\n Installation : Sans besoin de compétences\n Compatibilité : Toilettes standards\n Entretien : Aucun frais\n Modes : 3 modes disponibles"
  },
]

export const faqData = [
  {
      title: "Comment ça fonctionne ?",
      content: "Notre bidet utilise des jets d'eau ajustables pour nettoyer efficacement après chaque utilisation. Parfait pour vous assurer une propreté maximale et une sensation de fraîcheur à chacun de vos passages aux toilettes."
  },
  {
      title: "Est-ce facile à installer ?",
      content: "Oui, l'installation du bidet est rapide et facile. Elle peut être réalisée en moins de 10 minutes sans nécessiter de compétences ni de travaux complexes. Un vrai jeu d’enfant vous allez voir ! "
  },
  {
      title: "Nécessite-t-il une alimentation électrique ?",
      content: "Non, il fonctionne sans électricité, ce qui permet des économies d'énergie et une installation plus simple et rapide. Votre porte monnaie va vous remercier ! "
  },
  {
      title: "Est-ce compatible avec tous les toilettes ?",
      content: "Oui, le bidet est conçu pour s'adapter à toutes les toilettes standards."
  },
  {
      title: "Vais-je faire des économies ?",
      content: "En utilisant des jets d'eau pour le nettoyage, notre bidet permet de réduire jusqu'à 80% votre consommation de papier toilette, ce qui représente des centaines d’économies chaque année. "
  },
]

export const stacksData = [
  {
    icon: FaTruck,
    title: "Livraison OFFERTE",
  },
  {
    icon: IoIosPeople,
    title: "+360 clients satisfaits",
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
          content: "Des rouleaux par milliers",
          icon: IoCloseOutline,
        },
        {
          content: "Du papier rêche",
          icon: IoCloseOutline,
        },
        {
          content: "Des arbres sacrifiés",
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
          content: "80% de papier en moins",
          icon: IoMdCheckmark, 
        },
        {
          content: "Un jet doux et ajustable",
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
          content: "Des rouleaux par milliers",
          icon: IoCloseOutline,
        },
        {
          content: "Du papier rêche",
          icon: IoCloseOutline,
        },
        {
          content: "Des arbres sacrifiés",
          icon: IoCloseOutline,
        }
      ]
    }
  }
};