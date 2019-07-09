
export default{
    path:"/home",
    component:()=>import("views/home"),
    name:"home",
    redirect:"/home/hometobTrailer",
    children:[
        {
            path:"hometobTrailer",
            component:()=>import('components/hometobTrailer'),
            name:"hometobTrailer",
        },
        {
            path:"hometobnew",
            component:()=>import('components/hometobnew'),
            name:"hometobnew",
        }
    ]
}