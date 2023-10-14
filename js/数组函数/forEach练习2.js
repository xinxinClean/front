const tagList = [
    {
        text: '性别',
        children: [
            { text: '男', id: '男' },
            { text: '女', id:'女' },
        ],
    },
    {
        text: '年纪',
        children: [
            { text: '大一', id:'大一' },
            { text: '大二', id:'大二' },
            { text: '大三', id:'大三' },
            { text: '大四', id:'大四'},
        ],
    },
];
const x= tagList.forEach((tagParent)=>  {
     return tagParent.children.filter(item=>{
         var includes = item.text.includes('大');
        console.log(includes)
        return includes
     })
})
let  y='男'
console.log(y.includes('男'))
console.log(x)