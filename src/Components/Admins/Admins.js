import React, { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';

const Admins = () => {
    const [admins, setAdmin] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/admin`)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])
    return (
        <div>
            <h1>Volunteer Register List</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Ragistration Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
            </table>
            {
                admins.map(admin =>
                    <Admin
                        key={admin._id}
                        admin={admin}>
                    </Admin>)
            }
        </div>
    );
};

export default Admins;