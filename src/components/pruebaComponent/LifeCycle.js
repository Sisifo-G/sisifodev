import React from 'react';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    // metodo de cliclo de vida
    /* 
        dicho metodo monta 2 funciones de las cuales una se encargara de tomar lo que se tiene
        y la otra se encargara de actualizar lo prox que tomara dicho estado del componente
    */

    componentDidMount() {
        this.timeId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillMount() {
        clearInterval(this.timeId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return <h4>it is {this.state.date.toLocaleTimeString()}</h4>;
    }
}

export default LifeCycle;