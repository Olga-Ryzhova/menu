import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from '../menu/Menu';
import HomePage from '../homePage/HomePage';
import DriftPage from '../driftPage/DriftPage';
import TimeAttackPage from '../timeAttackPage/TimeAttackPage';
import ForzaPage from '../forzaPage/ForzaPage';

import './index.css';

const App = () => {
	return (
		<Router>
      <div>
        <Menu />
        <div className="page">
					<Routes>
						<Route path="/" exact element={<HomePage />} />
						<Route path="/drift" element={<DriftPage />} />
						<Route path="/timeattack" element={<TimeAttackPage />} />
						<Route path="/forza" element={<ForzaPage />} />
					</Routes>
        </div>
      </div>
    </Router>
	);
}

export default App;
