import {Component} from 'react';


class UseReducer extends Component {
    constructor() {
        super();
        this.state = {
            a: 0,
            b: 0,
            c: 0
        }
    };

    incA() {
        this.setState(prev => ({a: prev.a + 1}));
    }

    decA() {
        this.setState(prev => ({a: prev.a - 1}));
    }

    incB() {
        this.setState(prev => ({b: prev.b + 1}));
    }

    decB() {
        this.setState(prev => ({b: prev.b - 1}));
    }

    incC() {
        this.setState(prev => ({c: prev.c + 1}));
    }

    decC() {
        this.setState(prev => ({c: prev.c - 1}));
    }


    render() {
        return (
            <div className={'dFlex'}>
                <div className={'border'}>
                    <div className={'center'}>A:{this.state.a}</div>
                    <button onClick={this.incA.bind(this)}>+1</button>
                    <button onClick={this.decA.bind(this)}>-1</button>
                </div>
                <div className={'border'}>
                    <div className={'center'}>B:{this.state.b}</div>
                    <button onClick={this.incB.bind(this)}>+1</button>
                    <button onClick={this.decB.bind(this)}>-1</button>
                </div>
                <div className={'border'}>
                    <div className={'center'}>C:{this.state.c}</div>
                    <button onClick={this.incC.bind(this)}>+1</button>
                    <button onClick={this.decC.bind(this)}>-1</button>
                </div>
            </div>
        );
    }
}


export {UseReducer};