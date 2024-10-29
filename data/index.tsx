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
      content: "Pour une propreté et une hygiène 2x fois plus efficace."
    };
  case 1:
    return {
      content: "Fonctionne sans électricité (pour toujours plus d’économies)."
    };
  case 2:
    return {
      content: "Installation facile en 10 minutes, sans travaux nécessaires."
    };
  case 3:
    return {
      content: "Notre kit est compatible avec toutes les toilettes standards."
    };
  default:
    return {
      content: "Pour une propreté et une hygiène 2x fois plus efficace."
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
      title: "Adieu le papier, bonjour l'économie",
      icon: HiOutlinePaperAirplane,
  },
  {
      title: "100 % écolo, 0 % électricité",
      icon: HiOutlineGlobe,
  },
  {
      title: "Confort sur mesure, propre comme jamais",
      icon: HiOutlineHandThumbUp,
  },
  {
      title: "Installation ultra simple, promis !",
      icon: HiOutlineCog,
  },
  {
      title: "Des économies en boucle toute l’année",
      icon: HiOutlineCash,
  },
]

export const detailsProduct = [
  {
    title: "Entreprise Française",
    content: "Supportez l’artisanat national ! Et en plus, on est sympas et on parle votre langue (sauf quand on a un peu trop bu de café)."
  },
  {
      title: "Livraison OFFERTE",
      content: "Oui, vous avez bien lu ! Livraison gratuite et expédiée en 24h, pour que votre produit arrive presque avant même que vous n'ayez eu le temps de regretter l'achat."
  },
  {
    title: "Garantie de 2 ans",
    content: "Vous avez deux ans pour tester, adorer, et si besoin, revenir vers nous. Bref, un achat sans pression (enfin, presque)."
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
      content: "Notre bidet utilise des jets d'eau ajustables pour nettoyer efficacement après chaque utilisation. Parfait pour vous assurer une propreté maximale et une sensation de fraîcheur à chacun de vos passages aux toilettes."
  },
  {
      title: "Installation est-elle facile ?",
      content: "Oui, l'installation du bidet est rapide et facile. Elle peut être réalisée en moins de 10 minutes sans nécessiter de compétences ni de travaux complexes. Un vrai jeu d’enfant vous allez voir ! "
  },
  {
      title: "Besoin d'électricité pour fonctionner ?",
      content: "Non, il fonctionne sans électricité, ce qui permet des économies d'énergie et une installation plus simple et rapide. Votre porte monnaie va vous remercier ! "
  },
  {
      title: "Compatible avec toutes les toilettes ?",
      content: "Oui, le bidet est conçu pour s'adapter à toutes les toilettes standards."
  },
  {
      title: "Vais-je faire des économies ?",
      content: "En utilisant des jets d'eau pour le nettoyage, notre bidet permet de réduire jusqu'à 80% votre consommation de papier toilette, ce qui représente des centaines d’économies chaque année. "
  },
  {
    title: "Quels sont les délais de livraison ?",
    content: "Nos délais moyens de livraison sont de 7 à 13 jours ouvrés.\nPour certains produits, nous livrons en moins d'une semaine.\nPour éviter les frais de stockage et de main d'oeuvre élevés, nous travaillons directement auprès de nos producteurs et n'avons donc aucun intermédiaire cela nous permet de vous proposer des tarifs vraiment avantageux par rapport à ce que vous pourriez avoir dans une boutique physique."
  },
  {
    title: "Où livrons-nous ?",
    content: "Nous livrons partout dans le monde, et nos frais de livraison sont OFFERTS."
  },
  {
    title: "D'où expédions-nous les colis ?",
    content: "Notre entreprise est française. Nous expédions nos colis directement depuis nos producteurs situés en France, Espagne, Italie, Suisse et Asie."
  },
  {
    title: "Qui livre mes articles ?",
    content: "Vos articles sont livrés par l'intermédiaire de votre service de poste local.\nLes articles sont livrés en fonction des modalités de votre bureau de poste local."
  },
  {
    title: "Que faire si je ne suis pas là ?",
    content: "Ne vous inquiétez pas, vos articles seront laissés dans votre boîte postale s'ils sont assez petits. Dans le cas contraire, votre colis sera laissé à votre bureau de poste où vous pourrez le retirer."
  },
  {
    title: "Comment corriger une adresse erronée ?",
    content: "Pas de panique, si votre commande n'a pas encore été envoyée, contactez-nous immédiatement et nous serons ravis de mettre vos informations à jour. Dans le cas contraire et conformément à nos conditions générales de vente, une fois qu'une commande a été envoyée depuis notre entrepôt, plus aucune modification ne peut être effectuée."
  },
  {
    title: "Articles manquants dans ma commande ?",
    content: "Nous travaillons avec plusieurs fournisseurs, lorsque vous passez commande, chaque fournisseur se charge d'un produit en particulier. Si vous commandez 5 articles différents, vous recevrez donc 5 colis différents et ceux-ci arriveront à des moments différents (certains seront plus rapides, d'autres plus lents). Par contre, si vous commandez 3 fois le même produit, alors ils seront tous envoyés dans 1 seul colis."
  },
  {
    title: "Comment utiliser un code promo ?",
    content: "Une fois cette action effectuée, validez votre sélection en cliquant sur « Paiement ». La page de paiement s’ouvrira et vous pourrez profiter pleinement de cette offre en renseignant son code, ce qui appliquera automatiquement la réduction.\nExemple : Une promotion est disponible sur le site « Produit A acheté, un Produit B offert » avec le code « PROMO ». Je sélectionne le Produit A souhaité ainsi que le Produit B qui correspond à une sélection d’articles prédéfinie. Les deux articles sont présents dans mon panier et je peux cliquer sur le bouton « Paiement » et rentrer mon code « PROMO » à la prochaine étape."
  },
  {
    title: "Votre site est-il sécurisé ?",
    content: "Ce site est 100% sécurisé. Et à dire vrai, on pourrait même affirmer qu'il l'est à 300%.\nVoici pourquoi :\nPremièrement, le site que vous visitez est sur un serveur en HTTPS (le petit cadenas vert qui se trouve du côté gauche de l'URL de cette page est là pour vous le rappeler).\nLa plupart des sites ne sécurisent que leur \"panier\" et tout ce qui touche au règlement des commandes. Sur ce site, TOUTES LES PAGES sont sécurisées et ne peuvent pas être piratées ou ne peuvent pas être la cible de logiciels malveillants.\nPour finir, concernant le règlement, nous utilisons Stripe qui est la référence en matière de sécurité des transactions sur Internet.\nEn résumé, vous commandez en toute sécurité."
  },
  {
    title: "Quels modes de paiements sont acceptés ?",
    content: "Actuellement, vous pouvez régler par Carte bancaire et Paypal sur notre site. Nous n'acceptons ni les chèques bancaires, ni les virements ou encore les paiements à la réception."
  },
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