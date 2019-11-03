import React from 'react';
import classes from './Switch.module.css';

const Switch = (props)=>{
    const styles = {
        box:{
            width:'80%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            margin:'8px'
        },
        label:{
            fontWeight: 800,       
            marginBottom:'4px'
        }
    }
    return (
        <div style={styles.box}>
        <label style={styles.label}>New</label>
        <label class={classes.switch}>
            <input type="checkbox" value={props.checked} onChange={props.onChange} {...props}></input>
            <span class={classes.slider+" "+classes.round}></span>
        </label>
        </div>
    );
}

export default Switch;