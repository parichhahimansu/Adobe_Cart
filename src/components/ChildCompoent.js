import React from "react";


class ChildComponent extends React.Component {


    render() {
        const {list} = this.props;

        let listRendered = list.map((item, index) => {
            return (
                <ul className="listsItems">
                    <li key={index}>
                    <span>{item}</span>
                    <span><input type="checkbox" label="Done"/> Done</span>
                    <span><input type="checkbox" label="Delete"/> Delete</span>
                    </li>
                </ul>
            )
        })


        return(
            <div>
                {
                    listRendered ? listRendered : "Create a to do"
                }

            </div>
        )
    }

}

export default ChildComponent;