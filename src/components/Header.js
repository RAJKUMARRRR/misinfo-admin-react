import React from 'react';

const Header = (props)=>{
    const styles = {
        header:{
            width:'100%',
            height:'60px',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            backgroundColor:'#6a1b9a'
        },
        title:{
            color:'white',
            textAlign:'right',
            width:'auto'
        },
        button:{
            backgroundColor:"white",
            color:"#6a1b9a",
            border:'1px solid white',
            borderRadius:'5px',
            padding:'10px 15px',
            marginRight:'20px',
            cursor:'pointer'
        }
    }
    return (
        <div style={styles.header}>
            <div></div>
            <h1 style={styles.title}>MIS Info</h1>
            <button style={styles.button} onClick={props.newClicked}>NEW</button>
        </div>
    );
}


export default Header;