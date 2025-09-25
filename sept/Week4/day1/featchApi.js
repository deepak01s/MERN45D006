// callback hell

function getData(a,next) {
    setTimeout(()=>{
        console.log("data ",a)
        next()
    },2000)
}

getData(1,()=>getData(2,()=>getData(3)))

// promise chain

const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("lksjadk")
    },2000)
})

console.log(promise)

function getData() {
    const data = fetch("https://jsonplaceholder.typicode.com/posts");
    return data
}

getData().then((res) => {
    const data=res.json()
    data.then((result)=>{
        console.log(result)
    })
    console.log(res)
})


