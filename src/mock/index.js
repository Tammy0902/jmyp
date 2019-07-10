import Mock from "mock";
console.log(Mock)
const data = Mock.mock({
    "data|20": [{
        "goodsId|+1": 1,
        "goodsName": "@ctitle(10)",
        "goodsTel": /^1(5|3|7|8)[0-9]{9}$/,
        "goodsAddress": "@county(true)",
        "goodsLogo": "@Image('200x100', 'EasyMock')",
    }]
});

Mock.mock(/\/detail/,"get",function(options){
    console.log(options);
    return data;
})