import { KeyboardReturn } from '@mui/icons-material';
import { useParams } from 'react-router';
import useFetch from '../../tool/useFetch';
import Button from '../Button/Button';
import CardFooter from '../CardFooter/CardFooter';
import './User.css';

export default function User() {
    const {id} = useParams()
    const [user, loading] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        
    return (
        <div className='user-info'>
            {loading && <h1>Loading...</h1>}
            {user && (
                <div className="info-content">
                    <div className="info-header">
                        <h2 style={{margin: 0}}>{user.name}</h2>    
                    </div>    
                    <div className="info-body">
                        <ul>
                            <li>Name: {user.name}</li>
                            <li>Username: {user.username}</li>
                            <li>Email: {user.email}</li>
                            <li>Phone: {user.phone}</li>
                            <li>Company: {user.company.name}</li>
                            <li>Website: {user.website}</li>
                            <li>Address:</li>
                            <ul>
                                <li>Street: {user.address.street}</li>
                                <li>Suite: {user.address.suite}</li>
                                <li>City: {user.address.city}</li>
                                <li>Zipcode: {user.address.zipcode}</li>
                            </ul>
                        </ul>
                    </div>
                    <Button icon={<KeyboardReturn/> } text={'Return'} link={'/'} />
                    <CardFooter />
                </div>            
            )}
        </div>
    )
}
