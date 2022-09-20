import './App.css';

const exp1 = <div className="some">2 + 3 = {2 + 3}</div>;
const date = new Date();
const odd = <div>нечётный</div>
const even = <div>чётный</div>
const result = date.getHours() % 2 ? odd : even

const imageURL = `https://placekitten.com/100/100`;
const image = <img  src={imageURL} />;

function App() {
  return (
    <div>
      <h1 className={'fpp' + '-test'} style={{color: 'blue', textTransform: 'uppercase'}}>Привет, мир!</h1>
      { new Date().toLocaleDateString() }
      <br/>
      { 1 + 2 }
      {exp1}
      {date.toLocaleTimeString()}
      {result}

      {image}
    </div>
  );
}

export default App;
