import { count } from 'console';
import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeConxtext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    //um array que recebe o numero da esquerda e da direita, o padStart serve para verificar se é um número de dois dígitos, se não, ele adiciona um zero a esquerda, e o split é pra separar
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.05 * 60);
    }
    
    //funcao para disparar efeitos colaterais - quando algo mudar quero executar alguma funcao
    /*
        quero executar uma funcao - () => {}
        sempre que [] mudar
        useEffect(() => {}[])
    */
   
    useEffect(() => {
        if(isActive && time>0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        }else if(isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            
            { hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton}
            >
                Ciclo Encerrado    
            </button>
            ): (
                <>
                  { isActive ? (
                    <button 
                    type="button" 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}
                    >
                     Abandonar ciclo
                
                    </button>
                    ) : (
                      <button 
                        type="button" 
                        className={styles.countdownButton}
                        onClick={startCountdown}
                      >
                        Iniciar um ciclo
                      </button>
                    ) }  
                </>
            )}

            
        </div>
    );
}