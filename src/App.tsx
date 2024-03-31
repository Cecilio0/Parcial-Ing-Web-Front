import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>We welcome you to pure evil</h1>
      <div className="card">
        <button onClick={console.log}>Press to access fights</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Powered by lots and lots of money</p>
    </div>
  );
}

export default App;
