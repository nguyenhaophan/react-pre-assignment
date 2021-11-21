import useFetch from '../../tool/useFetch';
import { GitHub, InfoOutlined, LinkedIn } from '@mui/icons-material';
import { Container } from '@mui/material';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const [users, loading] = useFetch('https://jsonplaceholder.typicode.com/users');
    
    return (
        <Container 
            maxWidth='xl'
            className='home'
        >
            <div className="card-wrapper">
                {loading && <h1>Loading...</h1>}
                {users && users.map(user => (
                    <div className="card-content" key={user.id}>
                        <div className="card-header"></div>
                        <div className="avatar">
                            <h1>{user.name.slice(0, 1)}</h1>
                        </div>
                        <div className="card-body">
                            <h2 className='name'>{user.name}</h2>
                            <div className="username">@{user.username}</div>
                            <div className="website">{user.website}</div>
                            <Link to={`/user/${user.id}`} >
                                <div className="button-box">
                                    <InfoOutlined className="info"/>
                                    More Detail
                                </div>
                            </Link>
                        </div>
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
                    </div>
                ))}
            </div>
        </Container>
    )
}