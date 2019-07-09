<<<<<<< HEAD
import axios from "axios";
const http = axios.create({
=======
import axios from "axios"

const http=axios.create({
>>>>>>> hehuilin
    timeout:5000,
    withCredentials:true
})

http.interceptors.request.use((config)=>{
<<<<<<< HEAD
    if(config.method == "get"){
        
    }else if(config.method == "post"){
        config.headers["content-type"] = "application/x-www-form-urlencoded";
=======
    if(config.method=="get"){
        // config.params={...config.data}
    }else if(config.method=="post"){
        config.headers["content-type"]="application/x-www-form-urlencoded"
>>>>>>> hehuilin
    }
    return config
},(err)=>{
    return Promise.reject(err);
})
<<<<<<< HEAD
http.interceptors.response.use((res)=>{
    if(res.status == 200){
        return res.data
    }
})

export default(method,url,data={})=>{
    if(method == "get"){
        return http.get(url,{
            params:data
        })
    }else if(method == "post"){
        return http.post(url,data);
    }
}
=======

http.interceptors.response.use((res)=>{
    if(res.status==200){
        return res.data;
    }
},(err)=>{
    return Promise.reject(err);
})


export default (method,url,data={})=>{
    if(method == "get"){
        // console.log(data)
        // console.log(data)
        return http.get(url,{
            params:data
        })
    }else if(method=="post"){
        return http.post(url,data);
    } 

}
>>>>>>> hehuilin
