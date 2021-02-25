import { count } from 'console';
import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeConxtext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown(){
    
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown 
    } = useContext(CountdownContext);

    //um array que recebe o numero da esquerda e da direita, o padStart serve para verificar se é um número de dois dígitos, se não, ele adiciona um zero a esquerda, e o split é pra separar
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    

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