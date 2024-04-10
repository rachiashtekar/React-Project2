
// import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css"

function Button(props) {
    const {isoutline,icons,text, ...rest} = props;
  return (
    <button {...rest} className={ isoutline ? styles.outline_btn : styles.primary_btn}>
      
     
         {icons}

         {text}
       
    </button>
  )
}

export default Button