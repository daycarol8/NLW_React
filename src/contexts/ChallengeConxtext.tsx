import { createContext, useState, ReactNode, useContext } from 'react';

interface ChallengesContextData {
    level: number; 
    currentExperience: number;
    challengesCompleted: number; 
    levelUp: () => void;
    startNewChallenge: () => void;
}

interface ChallengesProviderProps{
    //ReactNode vai aceitar qualquer tipo
    children: ReactNode;
}

export const ChallengesContext = createContext( {} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrent] = useState(0);
    const [challengesCompleted, setChallengesCompleted ] = useState(0);

    function levelUp(){
      setLevel(level +1);
    }
  
    function startNewChallenge(){
        console.log('New challenge');
    }

   return(
    <ChallengesContext.Provider 
        value={{ 
            level:1, 
            currentExperience, 
            challengesCompleted, 
            levelUp,
            startNewChallenge
        }}>
        {children}
    </ChallengesContext.Provider>
   ); 
}
