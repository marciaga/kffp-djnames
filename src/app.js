import React, { Component } from 'react';
import nameGenerator from './name-generator';

const textWrapper = {
    flex: '1 0 100%',
    textAlign: 'center'
};

const buttonStyles = {
    borderRadius: '3px',
    padding: '1em',
    margin: '0 1em',
    background: 'transparent',
    color: 'palevioletred',
    border: '2px solid palevioletred',
    width: '150px',
    height: '60px',
    fontFamily: 'Helvetica, Arial, Sans-Serif',
    textAlign: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
};

const textStyles = {
    fontFamily: 'Helvetica, Arial, Sans-Serif',
};

const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '15%'
};

const Button = ({ handleClick }) => (
    <div>
        <div
            onClick={handleClick}
            style={buttonStyles}
        >
            <span>Make me a DJ Name</span>
        </div>
    </div>
);

const Text = ({ name }) => (
    <div style={textWrapper}>
        <h1 style={textStyles}>{`DJ ${name}`}</h1>
    </div>
);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonClicked: false,
            name: ''
        }

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState({
            buttonClicked: true,
            name: nameGenerator()
        });
    }

    render() {
        const { buttonClicked, name } = this.state;

        return (
            <div style={containerStyles}>
                <Button handleClick={this.onButtonClick} />
                {buttonClicked &&
                    <Text name={name}/>
                }
            </div>
        );
    }
}

export default App;
