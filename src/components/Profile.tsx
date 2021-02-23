import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1354480817687437316/O3v5f-b9_400x400.jpg" alt="Dayanne"></img>
            <div>
                <strong>Dayanne Carolina</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}