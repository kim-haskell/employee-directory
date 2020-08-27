import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import "./styles.css";

class Main extends Component {
    render() {
        return (
            <div>
                <h1> Employee Directory</h1>
                <EmployeeCard />
            </div>
        );
    }
}

export default Main;