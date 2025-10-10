//async await 400,401,402,403,404,500
let alldata = []
const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");

    const result = await data.json()
    return result
     
}
getData();
