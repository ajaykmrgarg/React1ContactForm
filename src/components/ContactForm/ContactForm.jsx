import Button from "../button/Button"
import styles from "./ContactForm.module.css"
import {MdMessage} from 'react-icons/Md' //chat icon on button
import {MdCall} from 'react-icons/Md' //call icon on call button

import { useState } from "react"

//The Button component being called in this contact form has been defined in Button.jsx

const ContactForm = () => {

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [text,setText] = useState();

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText( event.target[2].value);

  }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}> 
            <Button text="VIA CHAT" icon={<MdMessage fontSize="24px" />}/>
            <Button text="VIA CALL" icon={<MdCall fontSize="24px"/>}/>
          </div>

          <Button isOutline={true} text="VIA EMAIL" icon={<MdMessage fontSize="24px"/>}/>

          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="Name" />
            </div>
            
            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="text" name="Email" />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea name="Text" rows="8"/>
            </div>

            <div 
              style={{
                display: "flex", 
                justifyContent: "end"
              }}>
                <Button text="Submit" />
            </div>

            <div>
              {name + email + text }
            </div>

          </form>

        </div>
 
        <div className="styles.contact_image">
            <img src="./React1ContactForm/tree/master/public/images/Service 24_7-pana 1.svg" alt="Image" ></img>
        </div>
        
    </section>
  )
}



export default ContactForm