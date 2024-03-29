import LandingHero from "@/app/(pages)/(feature-pages)/components/landing-hero";
import LandingFeature from "@/app/(pages)/(feature-pages)/components/landing-feature";
import LandingSmartCarrier from "@/app/(pages)/(feature-pages)/components/landing-smartcarrier";
import LandingTestimony from "@/app/(pages)/(feature-pages)/components/landing-testimony/landing-testimony";
import LandingContact from "@/app/(pages)/(feature-pages)/components/landing-contact/landing-contact";
import PopUpAfterLogin from "./components/landing-pop-up-after-login";



export default async function Home() {
  return (
    <>
        <LandingHero/>
        <LandingFeature/>
        <LandingSmartCarrier/>
        <LandingTestimony/>
        <LandingContact/>
        <PopUpAfterLogin/>
    </>
  )
}
