import React from 'react';

const Admin = (props) => {
    const { fullName, date, email } = props.admin
    return (
        <div>
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="row">#</th>
                        <td>{fullName}</td>
                        <td>{email}</td>
                        <td>{date}</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Admin;