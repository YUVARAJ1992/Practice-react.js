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
    
    updateProfiles({ ...profilelist, firstname: "", lastname: "", isEditable : false });
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

  const updateValue = (event, index) => {
    // console.log(event.target.value, index)

    userProfiles[index][event.target.name] = event.target.value;

    updateUserProfiles([...userProfiles]);
  }

  const ClicktoSave = (index) => {
    userProfiles[index].isEditable = false;

    updateUserProfiles([...userProfiles]);
  }

  return (
    <div>
      <h3>Profile Infomation</h3>
      <div>
        <label>Enter First Name :</label>
        <input type='text' placeholder='First Name' value={profilelist.firstname} onChange={getProfiles} name='firstname' />

        <label>Enter Last Name :</label>
        <input type='text' placeholder='Last Name' value={profilelist.lastname} onChange={getProfiles} name='lastname' />

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
                        <input type='text' value={value.firstname} onChange={(event) => updateValue(event, index)} name='firstname' />  
                        :
                        value.firstname
                    }
                    
                  </td>
                  <td>
                    { value.isEditable ? 
                        <input type='text' value={value.lastname} onChange={(event) => updateValue(event, index)} name='lastname' />  
                        :
                        value.lastname
                    }
                  </td>
                  <td>
                  { value.isEditable ? 
                    <div>
                      <button onClick={() => ClicktoSave(index)}>Save</button>
                      <button onClick={() => ClicktoDiscard(index)}>Discard</button>
                    </div>
                    :
                    <div>
                      <button onClick={() => ClicktoUpdate(index)}>Update</button>
                      <button onClick={() => ClicktoDelete(index)}>Delete</button>
                    </div>
                  }
                    
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