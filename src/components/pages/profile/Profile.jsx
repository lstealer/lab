import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Form, Table } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import './Profile.css'
import MyTable from '../home/table/MyTable';

const header = [
  "លរ",
  "ល្បឿន(ពាក្យ/នាទី)",
  "សុក្រឹត្យភាព",
  "ចំណាត់ថ្នាក់",
  "កាលបរិច្ឆេទ",
];

export default class Profile extends Component {

    constructor(){
        super();
        this.state = {
            IS_UPDATE : true,
            name : "Jonh Cena", 
            sex : "ស្រី",
            dob : null
        }
    }

    dateOnChange = (evt) => {
      this.setState({ dob : evt})
    }

    componentWillMount() {

    }
    
  render() {
    return (
      <div className="page">
        <div className="row m-0">
          <div className="col-12 profile-position">
            <img src="/image/girl.png" alt="Profile" className="profile-img" />
            <div className="profile-position">
              <h5 className="profile-position">លេខសម្គាល់​ : 1</h5>
              {this.state.IS_UPDATE ?  
                    <div className="profile-edit">
                        <Link>រក្សាទុក</Link>&nbsp;<Link>បោះបង់</Link>
                    </div> : 
                    <Link>កែប្រែ</Link>
              }
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-md-6 profile-margin">
            <Form.Group>
              <Form.Label  className='left-label-style'>ឈ្មោះ</Form.Label>
              <Form.Control 
                type="text" 
                value="Jonh Cena" 
                className="rounded-pill left-textbox-style"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className='left-label-style'>ភេទ</Form.Label>
              <Form.Control as="select" defaultValue="ប្រុស" className="rounded-pill left-textbox-style">
                <option>ស្រី</option>
                <option>ប្រុស</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="col-md-6 profile-margin">
            <Form.Group>
              <Form.Label className='right-label-style'>អ៊ីមែល</Form.Label>
              <Form.Control 
                type="text" 
                placeholder='Jonhcena@gmail.com'
                className="rounded-pill right-textbox-style"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className='right-label-style'>ថ្ងៃ ខែ​ ឆ្នាំកំណើត</Form.Label>
              <br/>
                <DatePicker
                        className="rounded-pill profile-dob-style"
                        name="dob"
                        selected={this.state.dob}
                        onChange={this.dateOnChange}
                        placeholderText="ថ្ងៃ ខែ​ ឆ្នាំកំណើត"
                        dateFormat="dd/MMM/yyyy"
                        showYearDropdown
                      />
            </Form.Group>
          </div>
        </div>
        <MyTable header={header}/>
      </div>
    );
  }
}
