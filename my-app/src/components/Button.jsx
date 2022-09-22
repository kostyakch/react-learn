import './Button.css';
import { Component } from 'react'

class Button extends Component {
  render(){
    const {onClickHandler, cap} = this.props;
    return <button className='btn' onClick={onClickHandler}>{cap}</button>
  };
};

export default Button;
