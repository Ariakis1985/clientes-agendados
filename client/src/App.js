import { Link } from "react-router-dom";
import './App.css';

function App(){
    return (
        <div className="body">
        <h1 className="title">Control de clientes y servicios de Aires Acondicionados</h1>
        <Link to = '/home'>
            <div>
                <button className="button">Enter</button>
            </div>
        </Link>
        </div>
    )
}

export default App;