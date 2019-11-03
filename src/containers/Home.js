import React from 'react';
import axios from '../axios-api';
import List from '../components/List';
import NewCard from '../components/NewCard';
import Header from '../components/Header';
import Prompt from '../components/Prompt';

class Home extends React.Component {
    state = {
        data: null,
        error: null,
        newCard: false,
        flow: 'create',
        selectedRecord: null,
        showDeletePrompt: false
    }

    toggleDeletePrompt = () => {
        this.setState({
            showDeletePrompt: !this.state.showDeletePrompt
        });
    }

    openCreateNewCard = () => {
        this.setState({
            newCard: true,
            flow: 'create'
        });
    }
    closeCreateNewCard = () => {
        this.setState({
            newCard: false
        });
    }

    onCreateHandler = (record) => {
        axios.post('/channels', record)
            .then(() => {
                this.setState({
                    newCard: false
                });
                this.loadData();
            })
            .catch((error) => {
                alert(JSON.stringify(error));
            });
    }
    onUpdateHandler = ({ id, ...record }) => {
        axios.put('/channels/' + id, record)
            .then(() => {
                this.setState({
                    newCard: false
                });
                this.loadData();
            })
            .catch((error) => {
                alert(JSON.stringify(error));
            });
    }
    onCancelHandler = () => {
        this.setState({
            newCard: false
        });
    }

    openEditClickHandler = (record) => {
        this.setState({
            newCard: true,
            flow: 'update',
            selectedRecord: record
        });
    }

    deleteClickHandler = (record) => {
        this.setState({
            showDeletePrompt: true,
            selectedRecord: record
        });
    }

    deleteRecord = () => {
        this.toggleDeletePrompt();
        if (this.state.selectedRecord) {
            axios.delete('/channels/' + this.state.selectedRecord._id)
                .then(() => {
                    alert("Deleted Successfullt!");
                    this.loadData();
                })
                .catch((error) => {
                    alert(JSON.stringify(error));
                });
        }
    }

    loadData = () => {
        axios.get('/channels')
            .then((response) => {
                this.setState({
                    data: response.data.data
                });
            })
            .catch((error) => {
                this.setState({
                    error: error
                });
            });
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        let home = this.state.data ? <List data={this.state.data} deleteClicked={this.deleteClickHandler} editClicked={this.openEditClickHandler} /> : null;
        return (
            <div>
                <Header newClicked={this.openCreateNewCard} />
                {
                    this.state.showDeletePrompt?<Prompt yesHandler={this.deleteRecord} noHandler={this.toggleDeletePrompt} title="Are you sure, do you want to delete?" />:null
                }
                {
                    this.state.newCard ? <NewCard flow={this.state.flow} record={this.state.selectedRecord} updateClicked={this.onUpdateHandler} createClicked={this.onCreateHandler} cancelClicked={this.onCancelHandler} /> : null
                }
                {
                    home
                }
            </div>
        );
    }
}

export default Home;