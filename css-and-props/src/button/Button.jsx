import styles from './Button.module.css';

function Button() {
    return(
        <button className={styles['second-btn-class']}>Click Me</button>

        /*

        Dot Notation (styles.second-btn-class):

            This is used for property names that are valid JavaScript identifiers.
            Valid identifiers are typically alphanumeric strings without spaces, hyphens, or special characters.
            In your case, second-btn-class contains hyphens, which are not allowed in JavaScript identifiers, and so you can't use Dot notation.

        */
    )
}

export default Button;