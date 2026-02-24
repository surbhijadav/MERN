import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";

export const AdminContacts = () => {
    const {authorizationToken} = useAuth();
    const [contactData,setContactData] = useState([]);

    const getContactsData = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts",
                {
                    method : "GET",
                    headers:{
                        Authorization:authorizationToken,
                    }
                }
            );
            const data = await response.json();
            if (response.ok) {
                setContactData(data);
                console.log(response);
                
            }
        } catch (error) {
            console.log(error);
            
        }
    };

    useEffect(() => {
        getContactsData();
    },[]);
    return(
      <>
      <section className="admin-contacts-section">
        <h1>Admin Contact Data</h1>

        <div className="container admin-users">
        {
        contactData.map((curContactData,index) => {
            const {username,email,message} = curContactData;
            return (
                <div key={index}>
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{message}</p>
                    <button className="btn" onClick={() => deleteContactsById(_id)}>Delete</button>
                </div>
            )
        })
       }
        </div>
      </section>
      </>
    )
}
