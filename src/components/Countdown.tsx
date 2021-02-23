import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown(){
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    //um array que recebe o numero da esquerda e da direita, o padStart serve para verificar se é um número de dois dígitos, se não, ele adiciona um zero a esquerda, e o split é pra separar
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
        setActive(true);
    }
    
    //funcao para disparar efeitos colaterais - quando algo mudar quero executar alguma funcao
    /*
        quero executar uma funcao - () => {}
        sempre que [] mudar
        useEffect(() => {}[])
    */
   
    useEffect(() => {
        if(active && time>0){
            setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        }
    }, [active, time])

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

            <button 
                type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}
            >
                Iniciar um ciclo
            </button>
        </div>
    );
}