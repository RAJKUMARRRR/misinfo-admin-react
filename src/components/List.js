import React from 'react';
import Card from './Card';

const List = (props)=>{
    const styles = {
        grid:{
            display:'flex',
            flexWrap:'wrap',
            padding: '8px',
            alignItems: 'center'
        }
    };
    return (
        <div style={styles.grid}>
           {
               props.data.map((rec)=>(
                   <div key={rec._id} style={{margin:'8px'}}>
                   <Card data={rec} deleteClicked={props.deleteClicked} editClicked={props.editClicked}/>
                   </div>
               ))
           }
        </div>
    );
}


export default List;