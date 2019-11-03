import React from 'react';

class Prompt extends React.Component {
    render(){
    const styles = {
        overlay: {
            backgroundColor: 'rgba(0,0,0,.5)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000
        },
        main: {
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: '5px',
        },
        title: {
            color: '#6a1b9a',
            width: '100%',
            textAlign: 'center',
            padding: '20px'
        },
        button: {
            backgroundColor: "#6a1b9a",
            color: "white",
            border: '1px solid white',
            borderRadius: '5px',
            padding: '10px 15px',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: 800
        },
        footer:{
            width:'88%',
            margin:'10px 0 10px 0',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        }
    }
    return (
        <div style={styles.overlay}>
            <div style={styles.main}>
                <h2 style={styles.title}>{this.props.title}</h2>
                    <div style={styles.footer}>
                        <button onClick={this.props.noHandler} style={Object.assign({},styles.button,{backgroundColor:'#f44336',marginRight:'8px'})}>NO</button>
                        <button onClick={this.props.yesHandler} style={styles.button}>YES</button>
                    </div>
            </div>
        </div>
    );
    }
}


export default Prompt;