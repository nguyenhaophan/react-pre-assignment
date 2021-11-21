import { GitHub, LinkedIn } from '@mui/icons-material';
import './CardFooter.css';

export default function CardFooter() {
    return (
        <div className="card-footer">
            <a 
                className="icon"
                href="https://www.linkedin.com/in/hao-phan-06b628110/"
                target='_blank'
                rel="noreferrer"
            >
                <LinkedIn />
            </a>
            <a
                className="icon"
                href="https://github.com/nguyenhaophan/react-pre-assignment"
                target='_blank'
                rel="noreferrer"
            >
                <GitHub />
            </a>                                
        </div>
    )
}