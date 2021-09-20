import './App.css';


function App() {
  const now = new Date()
  return (
    <div className="App">
      <p>Hello world, it is {now.toString()}</p>
    </div>
  );
}

export default App;
