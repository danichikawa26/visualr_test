import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as GraphIcon } from "../assets/icons/graph.svg";
import { ReactComponent as SettingIcon } from "../assets/icons/settings.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/logout.svg";
import SeafoodNoodles from "../assets/images/image1.png";
import MushroomPasta from "../assets/images/image2.png";
import DumplingSoup from "../assets/images/image3.png";
import HealthyNoodle from "../assets/images/image4.png";
import SpiceRice from "../assets/images/image5.png";
import InstantNoodle from "../assets/images/image6.png";
import { ReactComponent as CreditCardIcon } from "../assets/icons/card.svg";
import { ReactComponent as PayPalIcon } from "../assets/icons/paypal.svg";
import { ReactComponent as WalletIcon } from "../assets/icons/wallet.svg";

export const menuItems = [
  {
    id: 1,
    label: <HomeIcon />
  },
  {
    id: 2,
    label: <GraphIcon />
  },
  {
    id: 3,
    label: <SettingIcon />
  },
  {
    id: 4,
    label: <LogoutIcon />
  }
];

export const categories = [
  {
    id: 1,
    label: "Hot Dishes"
  },
  {
    id: 2,
    label: "Cold Dishes"
  },
  {
    id: 3,
    label: "Soup"
  },
  {
    id: 4,
    label: "Grill"
  },
  {
    id: 5,
    label: "Appetizer"
  },
  {
    id: 6,
    label: "Dessert"
  }
];

export const allDishes = [
  {
    id: 1,
    name: "Spicy seasoned seafood noodles",
    price: 2.29,
    categories: [1, 2],
    image: SeafoodNoodles
  },
  {
    id: 2,
    name: "Salted Pasta with mushroom sauce",
    price: 2.69,
    categories: [1, 3],
    image: MushroomPasta
  },
  {
    id: 3,
    name: "Beef dumpling in hot and sour soup",
    price: 2.99,
    categories: [1, 4],
    image: DumplingSoup
  },
  {
    id: 4,
    name: "Healthy noodle with spinach leaf",
    price: 3.29,
    categories: [1, 5],
    image: HealthyNoodle
  },
  {
    id: 5,
    name: "Hot spicy fried rice with omelet",
    price: 3.49,
    categories: [1, 6],
    image: SpiceRice
  },
  {
    id: 6,
    name: "Spicy instant noodle with special omelette",
    price: 3.59,
    categories: [1, 2],
    image: InstantNoodle
  }
];

export const paymentMethods = [
  {
    id: 1,
    label: "Credit Card",
    available: true,
    icon: <CreditCardIcon />
  },
  {
    id: 2,
    label: "Paypal",
    available: true,
    icon: <PayPalIcon />
  },
  {
    id: 3,
    label: "Cash",
    available: true,
    icon: <WalletIcon />
  }
];
