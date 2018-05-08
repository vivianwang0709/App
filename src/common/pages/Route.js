import React, { Component } from 'react';

//import area from '../data/area.json'

import LoadingView from '../components/LoadingView';
import RouteList from '../components/RouteList';

export default class Route extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loaded: false,
            num: 1,
        };
        this.fetchData = this.fetchData.bind(this)
        this.click = this.click.bind(this)
    }

    componentDidMount() {
        let num = this.props.navigation.state.params.area
        this.fetchData(num)
    }

    click() {
        this.setState({
            loaded: false,
            data:[]
        });
        this.fetchData(2)
    }

    fetchData(num) {
        let url = 'http://192.168.1.145:3000/api/route/'+num.toString() 
        
        fetch(url)
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
            });
    }

    render() {
        let route = this.state.data[0]

        if (!this.state.loaded) {
            return <LoadingView/>;
        }

        return (
            <RouteList 
                data={route.data}
                click={this.click}
            />
        )
    }

}