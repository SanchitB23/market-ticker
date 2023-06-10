import {
  Inter,
  Montserrat_Subrayada,
  Raleway,
  Space_Grotesk,
} from "next/font/google";
import localFont from "next/font/local";

export const Montserrat700 = Montserrat_Subrayada({
  weight: ["700"],
  subsets: ["latin"],
});

export const interDefault = Inter({ subsets: ["latin"] });
export const spaceGrotesk700 = Space_Grotesk({
  weight: ["700"],
  subsets: ["latin"],
});

export const raleway700 = Raleway({ weight: "700", subsets: ["latin"] });

export const buljirya = localFont({
  src: "./Buljirya.ttf",
});
export const painter = localFont({
  src: "./Painter.ttf",
});
export const exThing = localFont({
  src: "./Exthing.ttf",
});
