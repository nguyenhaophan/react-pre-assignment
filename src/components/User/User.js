import { KeyboardReturn } from '@mui/icons-material';
import { useParams } from 'react-router';
import useFetch from '../../tool/useFetch';
import Button from '../Button/Button';
import CardFooter from '../CardFooter/CardFooter';
import './User.css';

function Body({data}) {
    return (
        <ul>
            {data.map((e, index) => {
            return (
                <li key={index}>
                    {e.title + e.value}
                    {e.children && <Body data={e.children} />}
                </li>);
            })}
        </ul>
    );
}

export default function User() {
    const {id} = useParams();
    const [user, loading] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    let name, username, email, phone, companyName, website, street, suite, city, zipcode;
    if (user) {
        ({name, username, email, phone, company: {name: companyName}, website, address: {street, suite, city, zipcode}} = user);
    }

    const data = [{
        'title': 'Name: ',
        'value': name, 
        'children': []
    }, {
        'title': 'Username: ',
        'value': username, 
        'children': []
    }, {
        'title': 'Email: ', 
        'value': email, 
        'children': []
    }, {
        'title': 'Phone: ', 
        'value': phone, 
        'children': []
    }, {
        'title': 'Company: ', 
        'value': companyName, 
        'children': []
    }, {
        'title': 'Website: ', 
        'value': website, 
        'children': []
    }, {
        'title': 'Address: ', 
        'value': '', 
        'children': [{
            'title': 'Street: ',
            'value': street,
            'children': []
        }, {
            'title': 'Suite: ',
            'value': suite,
            'children': []
        }, {
            'title': 'City: ',
            'value': city,
            'children': []
        }, {
            'title': 'Zipcode: ',
            'value': zipcode,
            'children': []
        }]
    }]

    return (
        <div className='user-info'>
            {loading && <h1>Loading...</h1>}
            {user && (
                <div className="info-content">
                    <div className="info-header">
                        <h2 style={{margin: 0}}>{user.name}</h2>    
                    </div>    
                    <div className="info-body">
                        <Body data={data} />
                        <Button icon={<KeyboardReturn/> } text={'Return'} link={'/'} />
                    </div>
                    {/* <Button icon={<KeyboardReturn/> } text={'Return'} link={'/'} /> */}
                    <CardFooter />
                </div>            
            )}
        </div>
    )
}