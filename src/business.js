import  { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

function Business(){
    const [dataResult,setResult]=useState([]);
    const [loading,setLoading]=useState(false);
    const [search,setSearch]=useState([]);
    const apiData = async() => {
    const news= await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=09b7072f97714d4a9ca8773d8634817f')
    const newsData = await  news.data;
    // setResult(newsData.articles);
    setResult(newsData.articles)
    setLoading(true);
    // console.log(dataResult)
    
     }
    console.log(apiData); 
    useEffect(()=>{
    apiData();
    }
    ,[])
    
      
    
    console.log(dataResult)
    return(
      <>
      <input type="text" placeholder="Search"  onChange={e=>setSearch(e.target.value)}></input><br/>
      {loading  ?
      dataResult.filter((data)=>data.title.toLowerCase().includes(search)).map((items,index)=>{
        return(
        <>
        <div className="flex">
             <div className="data"  key={index} >
             <h2>{items.title}</h2>
             <img src={items.urlToImage}  alt="newsImage"></img>
             <p>Author:{items.author}</p>
             <p>description:{items.description}</p>
             </div>
             </div>
             <br></br>
             </>
        )
      }): <h1  >LOADING....</h1>}
      </>
    )
}
export default Business;