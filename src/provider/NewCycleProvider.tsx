import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Definindo a estrutura de um ciclo
export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  interruptDate?: Date;
  finishedDate?: Date;
  startDate: Date
}

// Definindo o tipo do contexto
export interface CycleContextType {
  cycle: Cycle[];
  SetCycle: Dispatch<SetStateAction<Cycle[]>>;
  cycleActive: string | null;
  setCycleActive: Dispatch<SetStateAction<string | null>>;
  amountSecondsPassed: number;
  setAmountSecondsPassed: Dispatch<SetStateAction<number>>;
  totalSeconds: number;
  newCycleIdActive: Cycle | undefined
}

// Criando o contexto com valor padrão inicial
export const CycleContext = createContext<CycleContextType>({}as CycleContextType);

// Criando o provedor de contexto
export function CycleProvider({ children }: { children: ReactNode }) {
  const [cycle, SetCycle] = useState<Cycle[]>([]);
  const [cycleActive, setCycleActive] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0);
  const newCycleIdActive = cycle.find(cycle => cycle.id === cycleActive)

  const totalSeconds = newCycleIdActive ? newCycleIdActive.minutesAmount * 60 : 0 


  return (
    <CycleContext.Provider
      value={{
        cycle,
        SetCycle,
        cycleActive,
        setCycleActive,
        amountSecondsPassed,
        setAmountSecondsPassed,
        totalSeconds,
        newCycleIdActive
      }}
    >
      {children}
    </CycleContext.Provider>
  );
}
