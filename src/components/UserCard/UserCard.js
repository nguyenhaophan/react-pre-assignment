import { Container } from '@mui/material';
import { GitHub, InfoOutlined, LinkedIn } from '@mui/icons-material';
import './UserCard.css';
import { useNavigate } from 'react-router';

export default function UserGrid({users}) {

    return (
        <Container 
            maxWidth='xl'
            className='card'
        >
            <div className="card-wrapper">
                {users.map(user => (
                    <div className="card-content" key={user.id}>
                        <div className="card-header"></div>
                        <div className="avatar">
                            <h1>{user.name.slice(0, 1)}</h1>
                        </div>
                        <div className="card-body">
                            <h2 className='name'>{user.name}</h2>
                            <div className="username">@{user.username}</div>
                            <div className="website">{user.website}</div>
                            <div className="button-box">
                                <InfoOutlined className="info"/>
                                More Detail
                            </div>
                        </div>
                            <div className="card-footer">
                                <a 
                                    className="icon"
                                    href="https://www.linkedin.com/in/hao-phan-06b628110/"
                                    target='_blank'
                                >
                                    <LinkedIn />
                                </a>
                                <a
                                    className="icon"
                                    href="https://github.com/nguyenhaophan/react-pre-assignment"
                                    target='_blank'
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
