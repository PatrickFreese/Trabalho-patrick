import api from "./api";

const carregaUser= async (id) =>{
    console.log(id)
    const user = await api.get(`/users/${id}`);
    //console.log(users.data)
    return user.data;
    
}
export default carregaUser;