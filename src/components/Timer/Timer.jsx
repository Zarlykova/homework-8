import { useEffect, useState } from "react"
import styled from "styled-components";
import { Card } from "../UI/Card/Card";


export const Timer =()=>{
const [seconds , setSeconds]=useState(0)
let timer;
 useEffect(()=>{
   timer=setInterval(()=>{
    setSeconds(seconds + 1)
    
   },1000)
   return ()=>{
    
        clearInterval(timer)
    }
   
 })
    

    return(
        <Card>
             <TimerContainer>
            <h1>Timer : </h1>
            <h1>{seconds < 10 ? "0"+ seconds : seconds}</h1>
        </TimerContainer>
        </Card>
       
    )
}


const TimerContainer = styled.div`
    display: flex;
`