import React from 'react';

class TestComponent extends React.Component {
    constructor(props) {
        super(props);

        this.text = React.createRef();
        this.showtext = React.createRef();
        this.getConatiners = this.getConatiners.bind(this);

        this.state = {
            arr : [{id:"1", code: "#2B8EAD"},{id:"2", code: "#72C3DC"},{id:"3", code: "#2F454E"},
            {id:"4", code: "#2F454E"},{id:"5", code: "#2B8EAD"},{id:"6", code: "#BFBFBF"},
            {id:"7", code: "#2B8EAD"},{id:"8", code: "#2F454E"},{id:"9", code: "#72C3DC"}]
        };
    }

    getConatiners = (arr) => {
        let containers = arr.map((item, i) => {
            return(            
                <div key={i} className="numContainers" style={{backgroundColor: item.code}}>
                    <span>{item.id}</span>
                </div>
            )
        });
        
        return containers;
    }

    shuffle = () => {
        let { arr }  = this.state;
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        this.setState({arr});
    }

    sort = () => {
        let { arr }  = this.state;
        arr.sort((a, b) => {
            if ( a.id < b.id ){
                return -1;
              }
              if ( a.id > b.id ){
                return 1;
              }
              return 0;
        });
        this.setState({arr});
    }

    render() {

        let { arr }  = this.state;
        return (
            <div className="test">
                <div className="buttons">
                    <button onClick={() => this.shuffle()}>Shuffle</button>
                    <button onClick={() => this.sort()}>Sort</button>
                </div>
                <div className="numBox">
                    {this.getConatiners(arr)}
                </div>
            </div>
        );
    }
}

export default TestComponent;