import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Team from "./components/team/Team";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Team />
    </div>
  );
}
