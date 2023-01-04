
import styles from './input.module.css'; 

export default function Input(props) {
    return (
      <input 
        className={styles.inputPokemon}
        id={props.id} 
        name={props.name} 
        type={props.type} 
        value={props.value} 
        onChange={props.onChange}/>
    )
  };