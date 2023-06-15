import React, { Component } from "react";
import CardList from "../components/cardList";
import SearchBox from '../components/SearchBox'
import { robots } from '../robot';
import './App';
import Scroll from '../components/Scroll';

// const App = () => {
// }

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => this.setState({ robots: users }))
        // console.log('check');
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        // console.log(filteredRobots);
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {

            return (
                <div className="tc" >
                    <h1>RoboFriends</h1>
                    {/* add/export searchbox here */}
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        < CardList robots={filteredRobots} />
                    </Scroll>

                </div >
            )
        }

    }
}
export default App;