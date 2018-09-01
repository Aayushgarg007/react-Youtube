//import React
import React, {Component} from 'react'

/*
//define the component class
const SearchBar = () => {   //functional component
    return <input />;
}
*/

//ES6 class based component
class SearchBar extends Component{
    //declare event handeler
    // onInputChange(event) {
    //     //the SyntheticEvent object will be reused and all properties will be nullified after the event callback has been invoked.
    //     //event.persist() will remove the synthetic event from the pool and allow references to the event to be retained by user code.
    //     event.persist();
    //     console.log(event);
    // }
    
    // //declare event handeler
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }
    
    //constructor for state, state stores event, whenever
    //state is changes, component immediately re renders including children
    constructor(props) {
        //calling component constructor
        super(props);

        //creating a new obj (with property 'term' which stores search term) and storing it in this.state
        this.state = { term: ''}
    }
    
    //every class component has a function to render
    render() {

        return(
            //onChange is emitted when input changes, it is not UD
            //<div>
            //    <input onChange = {(event) => {
            //        //console.log(event.target.value)
            //        //saving the search term in state of component instance
            //        this.setState({ term: event.target.value })
            //    }} />
            //    //Value of search term: {this.state.term}
            //</div>

            //controller component
            //value is changed using state, and state is changed using event handler
            <div className="search-bar">
                <input
                    value = {this.state.term}
                    onChange = {(event) => {
                        this.onInputChange(event.target.value)
                    }}
                />
            </div>
        );
    };

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

//export
export default SearchBar;