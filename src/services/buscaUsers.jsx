import api from "./api";

const carregaUser= async () =>{
    const users = await api.get("/users");
    //console.log(users.data)
    return users.data;
    
}
export default carregaUser;