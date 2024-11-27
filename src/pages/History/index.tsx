import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status} from './style'
import { CycleContext } from '../../provider/NewCycleProvider'
export function History(){
    const {cycle} = useContext(CycleContext)



  
    const formatStartDate = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, '0'); // Adiciona zero à esquerda, se necessário
        const minutes = date.getMinutes().toString().padStart(2, '0'); // Adiciona zero à esquerda, se necessário
        return `${hours}:${minutes}`;
      };
    
    return(
     

    
    <HistoryContainer>
        <h1>Meu Historico</h1>

         <HistoryList>

            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duraçao</th>
                        <th>Inicio</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                   {cycle.map(cycle => {
                    return (
                        <tr key={cycle.id}>
                        <td>{cycle.task}</td>
                        <td>{cycle.minutesAmount}: minuots</td>
                        <td>{formatStartDate(cycle.startDate)}</td>

                       {cycle.finishedDate && 
                        <td><Status StatusColor={'green'}>Finalizado</Status></td>
                      } 
                       {cycle.interruptDate && 
                         <td><Status StatusColor={'red'} >Interrupido</Status></td>

                    
                      }
                       {!cycle.interruptDate && !cycle.finishedDate ? (
                         <td><Status StatusColor={'yellow'} > Em andamento</Status></td>

                       ) : null
                      }
                    
                    </tr>
                  
                    )
                   })}
                </tbody>
            </table>


         </HistoryList>
    </HistoryContainer> 

        
    )
    
}