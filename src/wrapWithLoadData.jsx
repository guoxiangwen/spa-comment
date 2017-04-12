import React, { Component } from 'react';
export default (WrappedComponent, name) => {
    class LocalStorageActions extends Component {
        constructor(props) {
            super(props);
            this.state = { data: null }
        }
        componentWillMount() {
            let data = localStorage.getItem(name);
            try {
                this.setState({ data: JSON.parse(data) })
            } catch (error) {
                this.setState({ data: data })
            }
        }
        saveData = (data) => {
            try {
                localStorage.setItem(name, JSON.stringify(data));
            } catch (error) {
                localStorage.setItem(name, `${data}`);
            }
        }
        render() {
            return (
                <WrappedComponent data={this.state.data} saveData={this.saveData} {...this.props} />
            );
        }
    }
    return LocalStorageActions
}