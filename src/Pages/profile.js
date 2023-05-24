import React from 'react';

const ProfilePage = () => {
  return (
    <div>
      <h3>Profile Infomation</h3>
      <div>
        <label>Enter First Name :</label>
        <input type='text' placeholder='First Name' />

        <label>Enter Last Name :</label>
        <input type='text' placeholder='Last Name' />

        <button>Sumbit</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Milk Moch</td>
            <td>
              <button>Update</button>
              <button>Deletess</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfilePage;