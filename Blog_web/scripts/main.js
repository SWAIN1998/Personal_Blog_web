async function apiCall(url) {
    //add api call logic here
    let res=await fetch(url)
    let data= await res.json()
    return data
    
}


function appendArticles(articles, main) {
    //add append logic here
    articles.forEach(elem =>{
        let div=document.createElement("div")
        let div1=document.createElement("div")
        let div2=document.createElement("div")
        let div3=document.createElement("div")

        let p1=document.createElement("p")
        p1.innerText=elem.content

        let p2=document.createElement("p")
        p2.innerText=elem.description

        let img=document.createElement("img")
        img.src=elem.urlToImage
        div1.append(p1)
        div2.append(p2)
        div3.append(img)
        div.append(div1,div2,div3)
        main.append(div)
        div.setAttribute("id","div")
        div.onclick=()=>{
            localStorage.setItem("article",JSON.stringify(elem))
            window.location.href='blog.html'
        }

        

    })

}

export { apiCall, appendArticles }