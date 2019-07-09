
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
            path:"kindgoods",
            component:()=>import("components/kindgoods"),
            name:"kindgoods"
        },
        {
            path:"mom",
            component:()=>import("components/mom"),
            name:"mom"
        },
        {
            path:"dutyFreeStore",
            component:()=>import("components/dutyFreeStore"),
            name:"dutyFreeStore"
        },
      
    ]
}