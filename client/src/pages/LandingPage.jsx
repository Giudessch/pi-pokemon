import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landing">
      <div>
        <span className='landing_title'>Pokemon App</span>
      </div>
      <div>
        <Link to="/pokemons">
          <button className="waitAnimate">Enter</button>
        </Link>
      </div>
    </div>

  )
};