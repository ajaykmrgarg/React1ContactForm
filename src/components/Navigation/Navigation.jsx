import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div> 
            <img src="/public/images/Frame 2 1.png" alt="logo" ></img>
        </div> 
        <div> 
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation