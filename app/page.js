import Hero from "./home/hero";
import Download from "./home/download";
import Waitlist from "./home/waitlist";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="lg:h-20 md:h-10 w-full"></div>
      <Download />
      <div className="lg:h-20 md:h-10 w-full"></div>
      <Waitlist />
    </main>
  );
}
