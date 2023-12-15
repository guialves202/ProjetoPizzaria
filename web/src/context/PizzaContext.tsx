import { createContext, useState, ReactNode } from 'react';
import { PizzaModel } from '../types/Models';

interface PizzaContextType {
  pizza: PizzaModel;
  setPizza: React.Dispatch<React.SetStateAction<PizzaModel>>
}

const defaultPizzaObj = {
  pizza: {
    id: 0,
    flavors: [
      ""
    ],
    extras: [
      ""
    ],
    notes: "",
    price: 0,
    orderId: 0
  },
  setPizza: () => {}
}

export const PizzaContext = createContext<PizzaContextType>(defaultPizzaObj)

interface PizzaProviderProps {
  children: ReactNode;
}

export function PizzaProvider({ children }: PizzaProviderProps) {
  const [pizza, setPizza] = useState<PizzaModel>(defaultPizzaObj.pizza)

  return (
    <PizzaContext.Provider value={{pizza, setPizza}}>
      {children}
    </PizzaContext.Provider>
  )
}
