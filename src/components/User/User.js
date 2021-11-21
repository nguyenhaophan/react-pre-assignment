import { useParams } from 'react-router';
import useFetch from '../../tool/useFetch';
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
                            <li>name: {user.name}</li>
                            <li>username: {user.username}</li>
                            <li>email: {user.email}</li>
                            <li>phone: {user.phone}</li>
                            <li>company: {user.company.name}</li>
                            <li>website: {user.website}</li>
                            <li>address:</li>
                            <ul>
                                <li>street: {user.address.street}</li>
                                <li>suite: {user.address.suite}</li>
                                <li>city: {user.address.city}</li>
                                <li>zipcode: {user.address.zipcode}</li>
                            </ul>
                        </ul>
                    </div>
                </div>            
            )}
        </div>
    )
}