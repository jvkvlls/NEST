import axios from "axios";


export class  pokeApiAdapter {

    private readonly axios = axios;

    async get (url:string){
    //peticion get
        const { data } = await this.axios.get(url);
        return data;
    }

    async post(url : string,data:any){

    }
    
    async patch(url : string,data:any){
        
    }
    
    async delete(url : string ){
        
    }
}

