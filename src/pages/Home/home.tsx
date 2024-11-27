import { HandPalm, Play} from "phosphor-react";
import { useForm } from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod' // to inportando zod para validaçao de form, usando o useForm7


import * as zod from 'zod'



import {
     FormContainer, 
     HomeContainer,
      MinutesAmoutn,
      PauseCountDownButton,
      StartCountDownButon,
       TaskInput} 
       from "./style";
import { useContext, useEffect } from "react";
import { CycleContext } from "../../provider/NewCycleProvider";
import { CountDownContainerR } from "./CountDownContainer";


 const newCycleFormValidationSchema = zod.object({ // criei um objeto de validaçao que usa o zod, como to usando objeto preciso do zod.object
            Task: zod.string().min(1, 'Informe a tarefa'),
            minutesAmount: zod.number().min(1, 'Informe o tempo em minutos').max(60)
            
            
        })


        
const VerifyInput = (e: React.ChangeEvent<HTMLInputElement>) => {

    const input = e.target

    if(input.value.length > 2) {
        input.value = input.value.slice(0, 2);
}

}

 
 type NewCycleFormation  = zod.infer<typeof newCycleFormValidationSchema>       


interface Cycle {
    id: string
    task: string
    minutesAmount: number
    interruptDate?: Date
    finishedDate?: Date
    startDate: Date
    
}


    export function Home(){
     
   

   const {
    cycle,
    SetCycle,
    cycleActive,
    setCycleActive,
    setAmountSecondsPassed,
    totalSeconds,
    newCycleIdActive

}  = useContext(CycleContext)

   

    

  
   
useEffect(()=> {

   let intervalo: number
   
    if(newCycleIdActive){
        intervalo = setInterval(()=> {
            setAmountSecondsPassed(state => {
                if(state + 1 >= totalSeconds){
                    SetCycle( state => state.map((cycle) => {
                            if(cycle.id === cycleActive){
                                setCycleActive(null)
                                document.title = "Ignite Timer finished"
                                setTimeout(() => {
                                   document.title = "Igniter Timer"
                                    
                                }, 3000);

                                return {...cycle, finishedDate: new Date()
                                    
                                }
                            } else {
                                return cycle
                            }
                        })
                      )
                    return totalSeconds
                }
                return state + 1
            })
        }, 1000)
    }
     


         


   return () => {
     clearInterval(intervalo)
   }
   }, [newCycleIdActive, totalSeconds, cycleActive, setCycleActive, SetCycle, setAmountSecondsPassed])
   
     
  const {handleSubmit, register, watch, reset} = useForm<NewCycleFormation>({ // watch ela observa o input se teve alguma altearçao
            resolver: zodResolver(newCycleFormValidationSchema),
            defaultValues: {
                minutesAmount: 0,
                Task: ''
            }
        }) // handleSubmit e a funçao de envio do form, register tem todas propriedas para passa nos input como (...register)
 

      
   function handleCreateNewCycle(data: NewCycleFormation){
     

  
     const id = String(new Date().getTime())
    const newCycle: Cycle = {
            
        id,
        task: data.Task,
        minutesAmount: data.minutesAmount,
        startDate: new Date()  // Aqui você atribui o startDate corretament


    }
            SetCycle((state) => [...state,  newCycle])
            setCycleActive(id)
            setAmountSecondsPassed(0)
            
        
            reset() 
         } 
         
         console.log(cycle)
   function HandleInterremporCycle () {

      SetCycle(
       state => state.map((cycle) => {
            if(cycle.id === cycleActive){
                return {...cycle, interruptDate: new Date()}
            } else {
                return cycle
            }
        })
      )
      document.title = 'Ignite Timer'
      setCycleActive(null)
      console.log(cycle)


   }

   
         const task = watch('Task') // esportando do router-hook-form a funçao para obersa um inpiut em tempo real
         const IsSubmitDisabled = !task
     
        return (
        <HomeContainer> 

            <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}> 
            <FormContainer > 
            <label htmlFor="Task">Vou Trabalhar em</label>
                <TaskInput 
                 list="suggestion"
                  type="text" 
                  id="Task" 
                  placeholder="de um nome ao seu projeto"
                  {...register('Task')}
                  disabled={!!newCycleIdActive}
                  />



                <datalist id="suggestion">
                    <option value="Projeto1"/>
                    <option value=""/>
                    <option value=""/>
                    <option value=""/>
                    
                </datalist>


                <label htmlFor="minutesAmount">durante</label>
                <MinutesAmoutn type="number"
                 id="minutesAmount"
                  placeholder="00"
                  step={1} // Pular de 5 em cinco
                  min={0}  // minimo de 0
                  maxLength={60} // maximo de 60
                  {...register('minutesAmount', {valueAsNumber: true})}
                  onChange  ={VerifyInput}
                  disabled={!!newCycleIdActive}

                  /// colocando todas as prorpiedas com (..register), passando um argumento 'valueAsNumber' para dizer se  e um neumber ou nao
                  
                  />

                   
                <span>minutos.</span>   
            </FormContainer > 

          <CountDownContainerR/>

             {newCycleIdActive ? (
                <PauseCountDownButton type="button" 
                onClick={HandleInterremporCycle} >
                <HandPalm size={24}/>
                Imterroper 
               </PauseCountDownButton> 
             ): (
                <StartCountDownButon type="submit" disabled={IsSubmitDisabled} >Começar 
                 <Play size={24}/> 
                </StartCountDownButon> 
             )}

                </form>

        </HomeContainer>
        )
    }