import React, { useEffect, useState } from 'react';
import axios from 'axios';

function example() {
   const [data,setData] =  useState('')
    
   useEffect(() => {
    const getInfo = async () => {
        try {
            const res = await axios.get('/api/info')
            console.log(res.data)
            setData(res.data)
            

        }catch(err) {
            alert("Hubo un error",err)
        }
    }
    getInfo()
   },[])
   
   return (
        <div>
            test<br/>
{data}         
        </div>
    )
}

export default example


/* await axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
    console.log(res.data)

}).catch((e)=>{
   console.log("error") 
}) */