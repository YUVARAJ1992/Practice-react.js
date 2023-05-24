import React, { useState } from 'react';

const ProfilePage = () => {

  const [profilelist, updateProfiles] = useState({ firstname: "", lastname: "", isEditable : false });
  const [userProfiles, updateUserProfiles] = useState([]);

  const getProfiles = (event) => {
    console.log(event.target.value)
    updateProfiles({ ...profilelist, [event.target.name]: event.target.value })
  }

  const clickButton = () => {
    console.log(profilelist)
    updateUserProfiles([...userProfiles, profilelist])
    console.log(userProfiles);
  }

  const ClicktoDelete = (number) => {
    let copy = [...userProfiles];
    copy = copy.filter(
      (item, index) => number != index
    )
    updateUserProfiles(copy)
  }


  const ClicktoUpdate = (index) => {
    userProfiles[index].isEditable = true;

    updateUserProfiles([...userProfiles]);
  }

  const ClicktoDiscard = (index) => {
    userProfiles[index].isEditable = false;

    updateUserProfiles([...userProfiles]);
  }

  return (
    <div>
      <h3>Profile Infomation</h3>
      <div>
        <label>Enter First Name :</label>
        <input type='text' placeholder='First Name' onChange={getProfiles} name='firstname' />

        <label>Enter Last Name :</label>
        <input type='text' placeholder='Last Name' onChange={getProfiles} name='lastname' />

        <button onClick={() => clickButton()}>Sumbit</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            userProfiles.map((value, index) => {
              return (
                <tr key={index}>
                  <td>

                    { value.isEditable ? 
                        <input type='text' value={value.firstname} />  
                        :
                        value.firstname
                    }
                    
                  </td>
                  <td>
                    { value.isEditable ? 
                        <input type='text' value={value.lastname} />  
                        :
                        value.lastname
                    }
                  </td>
                  <td>
                    <button onClick={() => ClicktoUpdate(index)}>Update</button>
                    <button onClick={() => ClicktoDelete(index)}>Delete</button>

                    <button>Save</button>
                    <button onClick={() => ClicktoDiscard(index)}>Discard</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ProfilePage;