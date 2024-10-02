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

export const statsData = [
    {
        title: "80%", content: "80% de papier en moins"
    },
    {
        title: "+150€", content: "+150€ d’économies par an"
    },
    {
        title: "+319", content: "+319 d’utilisateurs actifs"
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

export const selectionModesData = [
  {
      title: "Auto", icon: MdAutorenew
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
        content: "Besoin d’un petit coup de frais express ? Ce mode fait tout le boulot pour vous. En un clin d’œil, vos fesses sont impeccables. Simple, rapide et terriblement efficace !"
      };
    case 1:
      return {
        image: Auto,
        content: "Messieurs, offrez-vous un soin personnalisé. Ce mode conçu spécialement pour vous, avec la précision d'un rasoir de barbier, mais pour un nettoyage tout en douceur."
      };
    case 2:
      return {
        image: Auto,
        content: "Pour vous, mesdames, on a pensé à tout. Une hygiène douce, délicate et adaptée à vos besoins. Ce mode prend soin de vous avec tendresse et précision, pour une sensation de propreté complète et apaisante."
      };
    case 0:
    default:
      return {
        image: Auto,
        content: "Besoin d’un petit coup de frais express ? Ce mode fait tout le boulot pour vous. En un clin d’œil, vos fesses sont impeccables. Simple, rapide et terriblement efficace !"
      };
    }
  };