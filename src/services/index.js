
import axios from "axios";

const base = "https://api.github.com/";

const api = axios.create({
    baseURL: base,
});

export async function getSearchResults(search)  {
    try{
        if(search.includes("@")){
            const response = await api.get(`search/users?q=${search}+in:email`);
            return response
    
        }else if(search.split(' ').length>1){
            const fullName= search.split(' ').join('+');
            const response = await api.get(`search/users?q=${fullName}+in:full_name`);
            return response
    
        }else {
            const response = await api.get(`search/users?q=${search}`);
            return response
    
        }
    }catch(error){
        throw error
    }
    

}
export async function getDetailsResults(link)  {
    try{
        const response = await axios.get(link);

        return response.data
    }catch(error){
        
        throw error
    }

}

