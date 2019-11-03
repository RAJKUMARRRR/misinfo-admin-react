import React from 'react';
import TextInput from './TextInput';
import Switch from './Switch';

class NewCard extends React.Component {
    state={
        props:null,
        form:{
            values:{
                title:'',
                source:'',
                url:'',
                isnew: true
            }
        }
    }

    onChange = (e)=>{
        let newState = {
            form:{
                values:{
                    ...this.state.form.values,
                    [e.target.name]: e.target.value
                }
            }
        }
        this.setState(newState);
        console.log(e.target.name);
    }
    onSwitchChange = (e)=>{
        let newState = {
            form:{
                values:{
                    ...this.state.form.values,
                    [e.target.name]: !this.state.form.values.isnew
                }
            }
        }
        this.setState(newState);
        console.log(e.target.name);
    }

    onSubmit = (e)=>{
        e.preventDefault();
        if(this.props.flow==="update"){
          this.props.updateClicked({
              id: this.state.record._id,
              ...this.state.form.values
          });
        }else{
          this.props.createClicked(this.state.form.values);
        }
    }

    static getDerivedStateFromProps(props,state){
        if(props.flow==="update"&&props.record&&state.record!==props.record){
            let newState = {
                record:props.record,
                form:{
                    values:{
                        ...props.record
                    }
                }
            }
            return newState;
        }
    }

    render(){
    const {title,source,url,isnew} = this.state.form.values;
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
            width: '40%',
            height: '500px',
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
        form:{
            width:'100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        footer:{
            width:'88%',
            marginTop:'40px',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        }
    }
    return (
        <div style={styles.overlay}>
            <div style={styles.main}>
                <h2 style={styles.title}>{this.props.flow==="update"?"Update":"New"} Record</h2>
                <form style={styles.form}>
                    <TextInput
                        lable="Title"
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={this.onChange}
                    />
                    <TextInput
                        lable="Image URL"
                        type="text"
                        id="source"
                        name="source"
                        value={source}
                        onChange={this.onChange}
                    />
                    <TextInput
                        lable="Website URL"
                        type="text"
                        id="url"
                        name="url"
                        value={url}
                        onChange={this.onChange}
                    />
                    <Switch  id="isnew" lable="New" name="isnew" checked={isnew} onChange = {this.onSwitchChange} />
                    <div style={styles.footer}>
                        <button onClick={this.props.cancelClicked} style={Object.assign({},styles.button,{backgroundColor:'#f44336',marginRight:'8px'})}>CANCEL</button>
                        <button onClick={this.onSubmit} style={styles.button}>{this.props.flow==="update"?"UPDATE":"CREATE"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
    }
}


export default NewCard;