import { Link } from 'react-router-dom';
import style from "./landingpage.module.css"

export default function LandingPage() {
  return (
    <div className={style.container}>
      <div>
        <h1>Pokemon App</h1>
        <br />
        <h2> Bienvenidos a la Aplicacion de Pokemon</h2>
      </div>
      <div>
        <Link to="/home">
          <input type="submit" value="Ver Pokemones" className={style.myButton} />
        </Link>
        <h3 className={style.love}>Hecho con &hearts; para henry</h3>
        <div>
          <img src="pictures/fondo.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}