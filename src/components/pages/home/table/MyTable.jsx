import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import './MyTable.css'

export default class MyTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
           header : this.props.header,
           content : [
               {
                   n : 1,
                   name: "Dara Ream",
                   speed : "128 wmp",
                   accuracy : 98,
                   date : new Date().toLocaleString()
               },
               {
                n : 2,
                name: "Dara Ream",
                speed : "128 wmp",
                accuracy : 98,
                date : new Date().toLocaleString()
            },
            {
                n : 3,
                name: "Dara Ream",
                speed : "128 wmp",
                accuracy : 98,
                date : new Date().toLocaleString()
            }
           ], 
        }
    }
    render() {
        const tableHeader = this.state.header.map((value,index)=>
                <th key={index} className='table-header-color'>{value}</th>
            )
        const tableRow = this.state.content.map((obj,j) => {
            const items = Object.values(obj); // convert object to array
            return (
                <tr key={j} >
                    {items.map((item) =>
                        <td className="row-bg-color">
                            <span>
                            {item}
                            </span>
                        </td>
                    )}
                </tr>
            )})
        return (
            <div className='row m-0'>
                <div className='col-md-12 my-table'>
                    <Table striped bordered hover size="sm" className='table-style'>
                    <thead>
                        <tr className='table-header-bg'>
                            {tableHeader}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRow}
                    </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
