import { useContext, useEffect } from "react";
import { CountDownContainer, Separator } from "../style";
import { CycleContext } from "../../../provider/NewCycleProvider";

export function CountDownContainerR () {
    const {newCycleIdActive, totalSeconds, amountSecondsPassed} = useContext(CycleContext)

   const currentTotal = newCycleIdActive ? totalSeconds - amountSecondsPassed : 0

   const minutesAmount = Math.floor(currentTotal / 60)
   const secondsAmount = currentTotal % 60


   const minutes = String(minutesAmount).padStart(2, '0')
   const seconds = String(secondsAmount).padStart(2, '0')   
 

   useEffect(()=> { 

    if(!newCycleIdActive) return

    document.title = `${minutes}:${seconds}`
   }, [minutes, seconds, newCycleIdActive])


    return(
        
        <CountDownContainer>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
        <Separator>:</Separator>
        <span>{seconds[0]}</span>
        <span>{seconds[1    ]}</span>
        </CountDownContainer>

        


         
    )
}