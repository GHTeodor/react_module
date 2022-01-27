import {Component} from 'react';

class CatDog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cat: 'Cat',
            dog: 'Dog'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert(': ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Add Cat" name="cat" value={this.state.value} onChange={this.handleChange}/>
                <button>Cat</button>
                <input placeholder="Add Dog" name="dog" value={this.state.value} onChange={this.handleChange}/>
                <button>Dog</button>
            </form>
        );
    }
}

export {CatDog};