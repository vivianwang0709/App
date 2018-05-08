import React, { Component } from 'react';

//import area from '../data/area.json'

import LoadingView from '../components/LoadingView';
import AreaList from '../components/AreaList';

export default class ChooseArea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loaded: false,
        };
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        fetch('http://localhost:3000/api/area')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    data: this.state.data.concat(responseData),
                    loaded: true,
                });
            })
            .catch((err) => {
                this.setState({
                    data: [],
                    loaded: false,
                });
                console.log(err)
            });
    }

    render() {
        let area = this.state.data[0]
        let nav  = this.props.navigation 
        if (!this.state.loaded) {
            return <LoadingView/>;
        }

        return (
            <AreaList 
                data={area.taiwan}
                nav={nav}
            />
        )
    }

}