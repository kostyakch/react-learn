import './App.css';
import Hello from './components/Hello';
import Button from './components/Button';

const exp1 = <div className="some">2 + 3 = {2 + 3}</div>;
const date = new Date();
const odd = <div>нечётный</div>
const even = <div>чётный</div>
const result = date.getHours() % 2 ? odd : even

const imageURL = `https://placekitten.com/100/100`;
const image = <img  src={imageURL} alt="Cat" />;

function App() {
  const buttons = [
    {value: 'Кнопка1', fn: ()=> console.log(1)},
    {value: 'Кнопка2', fn: ()=> console.log(2)},
    {value: 'Кнопка3', fn: ()=> console.log(3)},
    {value: 'Кнопка4', fn: ()=> console.log(4)},
  ]
  return (
    <div>
      <Hello name="Костя" cnt="123"/>

      { new Date().toLocaleDateString() }
      <br/>
      { 1 + 2 }
      {exp1}
      {date.toLocaleTimeString()}
      {result}

      {image}

      <div>
        {
          buttons.map((button, index) => {
            return <Button cap={button.value} onClickHandler={button.fn} key={button.index} />
          })
        }
        <Button cap="Моя Кнопка" onClickHandler={()=>alert('Ура!')} />
        <Button cap="Моя Кнопка 2 " onClickHandler={()=>alert('Ура 2!')} />
        <Button cap="Моя Кнопка 3" onClickHandler={()=>alert('Ура 3!')} />
      </div>
    </div>
  );
}

export default App;
