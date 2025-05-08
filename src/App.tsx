import ContactCard from "./types/ContactCard";

function App() {
  return (
    <div className="p-4">
      <ContactCard
        name="Aline UWERA"
        email="aline@gmail.com"
        phone="0791995800"
      />
      <ContactCard name="UWERA Aline" email="uwera@gmail.com" />
    </div>
  );
}

export default App;
