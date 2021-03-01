import React from 'react'
import { Component } from "react";
import { connect } from 'react-redux'
import { ADD_USER, FETCH_USER } from '../actions/actionTypes'
import { batch } from 'react-redux'

class User extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: ''
        }
    }
    onHandleSubmit = (self) => {
        // alert(JSON.stringify(self.state))
        this.props.dispatch({ type: ADD_USER, data: self.state })
        this.props.dispatch({ type: FETCH_USER, data: self.state })
    }

    render() {


        //  alert(JSON.stringify(this.props.users))
        return (
            <div>
                <text>First Name</text>
                <input type="text" value={this.state.first_name} onChange={(e) => this.setState({ first_name: e.target.value })} />
                <text>Last Name</text>
                <input type="text" value={this.state.last_name} onChange={(e) => this.setState({ last_name: e.target.value })} />
                <button style={{ backgroundColor: "green" }} onClick={() => this.onHandleSubmit(this)}>submit</button>
                <text style={{ marginRight: 20 }}>{this.props.users.first_name}</text>
                <text>{this.props.emps.last_name}</text>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.UserReducer.users,
        emps: state.UserReducer.emp,
    }
}

export default connect(mapStateToProps)(User);
