import { Link } from 'react-router-dom';

import './Button.css';

export default function Button({icon, text, link}) {
    return (
        <Link to={link} >
            <div className="button-box">
                <div className="btn-icon">{icon}</div>
                <div className="text">{text}</div>
            </div>
        </Link>
    )
}