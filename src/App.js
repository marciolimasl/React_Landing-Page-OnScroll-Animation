import Hero from "./Components/Hero";
import travel01 from "./assets/travel01.jpg";
import travel02 from "./assets/travel02.jpg";
import travel03 from "./assets/travel03.jpg";
import travel04 from "./assets/travel04.jpg";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";

const navLinks = [
  { url: "/", title: "Home" },
  { url: "/", title: "Trips" },
  { url: "/", title: "Rewards" },
];

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navLinks} />
      <Hero imageSrc={travel01} title="Travel made simple." />
      <Slider
        imageSrc={travel02}
        title="Be an explorer!"
        subtitle="Our platform offers a wide variety of unique travel locations!"
        inverted={true}
      />
      <Slider
        imageSrc={travel03}
        title="Memories for a lifetime!"
        subtitle="Your dream vacation is only a few clicks away."
      />
      <Slider
        imageSrc={travel04}
        title="Be an explorer!"
        subtitle="Our platform offers a wide variety of unique travel locations!"
        inverted={true}
      />
    </div>
  );
}

export default App;
