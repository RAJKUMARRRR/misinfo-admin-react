import React from 'react';


const TextInput = ({label,id,...props})=>{
    const styles = {
        box:{
            width:'80%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            margin:'8px'
        },
        input:{
            height:'40px',
            width:'100%',
            backgroundColor:'white',
            border:'2px solid #e0e0e0',
            borderRadius:'5px',
            fontSize:'18px',
            fontWeight:700,
            color:'#424242',
            padding:'0 8px',
            marginTop:'4px'
        },
        label:{
            fontWeight: 800            
        }
    }
    return (
        <div style={styles.box}>
            <label style={styles.label} htmlFor={id}>{props.lable}</label>
            <input id={id} {...props} style={styles.input}/>
        </div>
    );
}


export default TextInput;