import React from 'react';
import newImg from './new.png';

const getNewTag = () => {
    return <div
        style={
            {
                position: "absolute",
                top: -5,
                left: -10,
            }
        }
    >
        <img resizeMode="contain" style={{ width: 50, height: 50 }} src={newImg} alt="New"/>
    </div>;
}


const Card = (props)=>{
    const styles={
        card:{
            width:'150px',
            border:'1px solid #eee',
            borderRadius:'5px',
            boxShadow:'3px 3px 5px rgba(0,0,0,0.3)',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            padding: '8px',
            position:'relative'
        },
        image:{
            display:'block',
            width:'100px',
            height:'100px',
        },
        title:{
            width: '100%',
            textAlign:'center'
        },
        button:{
            backgroundColor:"#6a1b9a",
            color:"white",
            border:'1px solid white',
            borderRadius:'5px',
            padding:'5px 5px',
            cursor:'pointer',
            fontSize:'10px',
            marginRight:'8px'
        },
        footer:{
            width:'100%',
            display:'flex',
            justifyContent:'flex-end',
            marginTop:'20px'
        }
    }
    return (
        <div style={styles.card}>
            {
                props.data.isnew?getNewTag():null
            }
            <div style={{width:'100%',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                <img src={props.data.source} alt={props.data.title} style={styles.image}/>
                <h4 style={styles.title}>{props.data.title}</h4>
            </div>
            <div style={styles.footer}>
                <button style={styles.button} onClick={()=>props.editClicked(props.data)}>EDIT</button>
                <button style={styles.button} onClick={()=>props.deleteClicked(props.data)}>DELETE</button>
            </div>
        </div>
    );
}


export default Card;