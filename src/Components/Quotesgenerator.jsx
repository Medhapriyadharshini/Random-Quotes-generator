import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Quotesgenerator() {

    const base_url='https://dummyjson.com/quotes'

    const [quotes,setQuotes]=useState([])

    const fetchData=async()=>{
        const result=await fetch(base_url)
        .then(result=>result.json())
        .then(quotes=>setQuotes(quotes.quotes)
        )
    }
    console.log(quotes);

    useEffect(()=>{
        fetchData()
    },[])

    
    function previous(){

    }
    function next(){
       
    }

  return (
    <div>{
        quotes.map(item=>(
          <MDBCard className='m-5'>
          <MDBCardBody  className='text-center'>
            <MDBCardTitle>Pick Your Quotes</MDBCardTitle>
            <MDBCardText>
            {item.quote}
            </MDBCardText>
            <MDBCardText>~ {item.author} </MDBCardText>
            <MDBBtn onClick={previous}>Previous</MDBBtn>
            <MDBBtn onClick={next}>next</MDBBtn>
          </MDBCardBody>
        </MDBCard>
          
        ))
      }</div>
  )
}

export default Quotesgenerator