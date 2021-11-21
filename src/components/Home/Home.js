import useFetch from '../../tool/useFetch';
import { InfoOutlined } from '@mui/icons-material';
import { Container } from '@mui/material';
import './Home.css';
import Button from '../Button/Button';
import CardFooter from '../CardFooter/CardFooter';

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
                            <div>@{user.username}</div>
                            <div>{user.website}</div>
                            <Button icon={<InfoOutlined/> } text={'More Detail'} link={`/user/${user.id}`} />
                        </div>
                        <CardFooter />
                    </div>
                ))}
            </div>
        </Container>
    )
}