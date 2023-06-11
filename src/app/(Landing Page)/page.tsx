import Services from "@/app/(Landing Page)/services";
import Jumbotron from "@/app/(Landing Page)/jumbotron";
import Testimonials from "@/app/(Landing Page)/testimonials";
import Faq from "@/app/(Landing Page)/faq";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <Services />
      <Testimonials />
      <Faq />
    </>
  );
}
