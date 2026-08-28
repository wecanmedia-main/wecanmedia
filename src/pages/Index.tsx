import { NCHeader } from "@/components/nc/NCHeader"
import { NCHero } from "@/components/nc/NCHero"
import { NCClients } from "@/components/nc/NCClients"
import { NCStats } from "@/components/nc/NCStats"
import { NCServices } from "@/components/nc/NCServices"
import { NCPricing } from "@/components/nc/NCPricing"
import { NCWhyChoose } from "@/components/nc/NCWhyChoose"
import { NCKOLCalculator } from "@/components/nc/NCKOLCalculator"
import { NCFAQ } from "@/components/nc/NCFAQ"
import { NCCTA } from "@/components/nc/NCCTA"
import { NCFooter } from "@/components/nc/NCFooter"
import { NCFloatingCTA } from "@/components/nc/NCFloatingCTA"

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NCHeader />
      <NCHero />
      <NCClients />
      <NCStats />
      <NCServices />
      <NCPricing />
      <NCKOLCalculator />
      <NCWhyChoose />
      <NCFAQ />
      <NCCTA />
      <NCFooter />
      <NCFloatingCTA />
    </div>
  )
}

export default Index
