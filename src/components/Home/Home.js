import { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';
import Nav from '../Nav/Nav';
import './Home.css';

export default function Home() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data)
            console.log(data)
        }

        getData();
    }, [])

    return (
        <div className='home'>
            <Nav />
            <UserCard users={users} />
        </div>
    )
}