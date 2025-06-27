import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <div className="space-y-6">
      <div className="space-x-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>

      <Card>
        <h2 className="text-xl font-bold mb-2">Card Title</h2>
        <p>This is the content inside the card.</p>
      </Card>
    </div>
  );
}

export default App;




