import { BiWorld } from "react-icons/bi";
import { PiMoneyWavy } from "react-icons/pi";
import { IoWaterOutline } from "react-icons/io5";
import Auto from "@/public/images/auto.png";
import { MdAutorenew } from "react-icons/md";
import { IoManOutline, IoWomanOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { BsWater } from "react-icons/bs";
import { MdElectricBolt } from "react-icons/md";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbPlaneTilt } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

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
      title: "Automatique", icon: MdAutorenew
  },
  {
      title: "Masculin", icon: IoManOutline
  },
  {
      title: "Féminin", icon: IoWomanOutline
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


export const imageSelected = (selected: number) => {
  switch (selected) {
  case 0:
    return {
      image: Auto,
      title: "Automatique",
      content: "Besoin d’un petit coup de frais express ? Ce mode fait tout le boulot pour vous. En un clin d’œil, vos fesses sont impeccables. Simple, rapide et terriblement efficace !"
    };
  case 1:
    return {
      image: Auto,
      title: "Masculin",
      content: "Messieurs, offrez-vous un soin personnalisé. Ce mode conçu spécialement pour vous, avec la précision d'un rasoir de barbier, mais pour un nettoyage tout en douceur."
    };
  case 2:
    return {
      image: Auto,
      title: "Féminin",
      content: "Pour vous, mesdames, on a pensé à tout. Une hygiène douce, délicate et adaptée à vos besoins. Ce mode prend soin de vous avec tendresse et précision, pour une sensation de propreté complète et apaisante."
    };
  case 0:
  default:
    return {
      image: Auto,
      title: "Automatique",
      content: "Besoin d’un petit coup de frais express ? Ce mode fait tout le boulot pour vous. En un clin d’œil, vos fesses sont impeccables. Simple, rapide et terriblement efficace !"
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