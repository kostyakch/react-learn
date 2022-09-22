import '../App.css';

const Hello = props => (
  <div>
    <h1 style={{color: 'blue', textTransform: 'uppercase'}}>Привет, {props.name}</h1>
    <p>Количество: {props.cnt}</p>
  </div>
)

export default Hello;
