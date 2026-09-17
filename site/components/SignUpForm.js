import { useState } from "react";
import styles from "../css/SignUpForm.module.css"

function SignUpForm() {
    async function handle(e){
        e.preventDefault();

        const response =  await fetch("http://localhost:5000/app/add_user/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username, 
                email: email, 
                password: password
            })
        });
        
        const data = await response.json();

        console.log(data)
    }
    const [Username, Setname] = useState("");
    const [Email, Setemail] = useState("");
    const [Password, Setpassword] = useState("");


    return(
        <form onSubmit={handle} className={styles.form}>
            <input type="text" name="Username" value={Username} onChange={e => Setname(e.target.value)}/>

            <input type="email" name="Email" value={Email} onChange={e => Setemail(e.target.value)}/>

            <input type="text" name="Password" value={Password} onChange={e => Setpassword(e.target.value)}/>
        </form>
    );
}

export default SignUpForm