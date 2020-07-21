import React from 'react';
import ChildComponent from './ChildCompoent';

class TestComponent extends React.Component {
    constructor(props) {
        super(props);

        this.text = React.createRef();
        this.showtext = React.createRef();

        this.state = {
            textVal: "",
            listItems: []
        };
    }

    getText = () => {
        // console.log(this.text.current.value);
        let listItems = this.state.listItems.length > 0 ? this.state.listItems : [];
        let textVal = this.text.current.value;
        listItems.push(textVal);
        this.setState({listItems});
    }

    render() {

        let {listItems} = this.state;
        return (
            <div className="test">

                <input type="text" ref={this.text} />
                <button onClick={() => this.getText()}>Submit</button>
                
                <ChildComponent list={listItems}/>

            </div>
        );
    }
}

export default TestComponent;