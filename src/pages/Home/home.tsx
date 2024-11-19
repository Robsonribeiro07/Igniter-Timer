import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmoutn, Separator, StartCountDownButton, TaskInput} from "./style";

    export function Home(){
        return (
        <HomeContainer> 

            <form action="">
            <FormContainer>
            <label htmlFor="Task">Vou Trabalhar em</label>
                <TaskInput  list="suggestion" type="text" id="Taks" placeholder="de um nome ao seu projeto"/>

                <datalist id="suggestion">
                    <option value="Projeto1"/>
                    <option value=""/>
                    <option value=""/>
                    <option value=""/>
                    
                </datalist>


                <label htmlFor="minutesAmount">durante</label>
                <MinutesAmoutn type="number" id="minutesAmount" placeholder="00"  step={5} min={0} maxLength={60}/>

                   
                <span>minutos.</span>   
            </FormContainer >

        

            <CountDownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
            </CountDownContainer>


                <StartCountDownButton type="submit">Começar
                 <Play size={24}/>
                </StartCountDownButton>

                </form>

        </HomeContainer>
        )
    }