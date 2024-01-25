import AboutTech from './ui/AboutTech'
import Hiro from './ui/Hiro'
import Hero from './ui/Hero'
import Itemlist from './ui/Itemlist'
import Techs from './ui/Techs'

export default function Home() {

  return (
    <main className="flex min-h-screen items-center flex-col justify-between bg-gray-100">
      <Hero />
      <AboutTech />
      <Itemlist />
      <Techs />
    </main>
  )
}
