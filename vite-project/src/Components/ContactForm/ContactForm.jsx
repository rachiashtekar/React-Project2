
import styles from "./ContactForm.module.css"
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import Button from '../Button/Button';

const ContactForm = () => {
  const onSubmit = (event) =>{
      event.preventDefault();
    console.log("name",event.target[0].value)
    console.log("email",event.target[1].value)
    console.log("text",event.target[2].value)

  }


  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
          <Button  text=" VIA SUPPORT CHAT" icons={<MdMessage fontSize="24px"  />} />
          <Button  text=" VIA CALLS" icons={< FaPhoneAlt fontSize="24px"  />} />

          </div>
       
          <Button
             isoutline = {true}
           text=" VIA EMAIL FORM" icons={< HiMailOpen  fontSize="24px"  />} />
           <form onSubmit={onSubmit} >
           <div className={styles.form_control}>
           <label htmlFor="name">Name</label>
            <input type="text" name="name" />
           </div>
           <div className={styles.form_control}>
           <label htmlFor="email">Email</label>
            <input type="email" name="email" />
           </div>
           <div className={styles.form_control}>
           <label htmlFor="text">text</label>
            <textarea name="text" rows="8" />
           </div>
           <div style={{display:"flex",justifyContent:"end"}}>
           <Button
            
           text=" SUBMIT BUTTON "  />
           </div>
           </form>
        </div>
        <div className={styles.contactImage}>
          <img src="/Images/Service 24_7-pana 1.svg" alt="contactimage" />

        </div>

    </section>
  )
}

export default ContactForm