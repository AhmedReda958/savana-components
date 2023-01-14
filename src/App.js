import Button from "./components/Button";
import PricingCard from "./components/PricingCard";
import "./style/App.scss";

function App() {
  const data = {
    title: "Landing Page",
    price: "350",
    per: "Per Design",
    text: "When you’re ready to go beyond prototyping in Figma, ",
    featutesList: [
      { text: "Design", avilable: true },
      { text: "IT Support", avilable: true },
      { text: "All limited links", avilable: true },
      { text: "Optimize hashtags", avilable: false },
      { text: "Unlimited users", avilable: false },
    ],
    action: "Get started",
  };
  return (
    <div className="container">
      <div className="pricing">
        <PricingCard data={data} />
        <PricingCard data={data} mainCard />
        <PricingCard data={data} className="shadow" />
      </div>
    </div>
  );
}

export default App;
