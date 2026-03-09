import { useEffect, useState } from "react";
import {useAuth} from "../store/auth";
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";
import useDebounce from "../hooks/useDebounce";

const AdminUsers = () => {
    const [users,setUsers] = useState([]);
    const [search,setSearch] = useState("");
const debouncedSearch = useDebounce(search,500);

    const {authorizationToken,API} = useAuth();

    const getAllUsersData = async() => {
        try {
            const response = await fetch(`${API}/api/admin/users?search=${debouncedSearch || ""}`,{
            method : "GET",
            headers : {
                 Authorization: authorizationToken,
            }});
            // console.log("TOKEN:", authorizationToken);
            const data = await response.json();
            // console.log(`users ${data}`);
            
            setUsers(data);
            
        } catch (error) {
            console.log(error);   
        }
    }

// delete one particular user 
const deleteUser = async (id) => {
    const response = await fetch(`${API}/api/admin/users/delete/${id}`,{
        method : "DELETE",
        headers : {
             Authorization: authorizationToken,
        }});
    const data = await response.json();
    console.log(`Users AFTER DELETE ${data}`);

    if (response.ok) {
        getAllUsersData();
        toast.success("User Deleted Succefully");
    }else{
        toast.error("Error in Delete User")
    }
    
}


    useEffect(() => {
        getAllUsersData();
    },[debouncedSearch]);
    return<>
        <section className="admin-contacts-section">
            <div><input
                     type="text"
                     placeholder="Search users..."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
             /></div>
            <div className="container">
            </div>
            <div className="container admin-users">
                <table>
                    <thead>
                        
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {users.map ((curUser,index) => {
                        return <tr key={index}>
                            <td>{curUser.username}</td>
                            <td>{curUser.email}</td>
                            <td>{curUser.phone}</td>
                            <td><Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link></td>
                            <td><button onClick={() => deleteUser(curUser._id)}>Delete</button></td>
                            
                        </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </section>

    </>
}

export default AdminUsers;