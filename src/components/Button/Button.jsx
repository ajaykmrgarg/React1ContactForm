
import styles from "./Button.module.css"

// isOutline ? outline_btn : primary_btn USED HERE WORKS LIKE IF-THEN-ELSE

const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button 
        {...rest} 
        className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button