import React, { Component } from "react";
import MyCarousel from "./MyCarousel";
import MyCard from "./MyCard";
import MyTable from "./table/MyTable";

const header = [
  "លរ",
  "ឈ្មោះ",
  "ល្បឿន​ (ពាក្យ / នាទី)",
  "សុក្រឹតភាព",
  "កាលបរិច្ឆេទ",
];

export default class Home extends Component {
  render() {
    return (
      <div>
        <MyCarousel />
        <div className="title-background">
          <h3>ការណែនាំ</h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MyCard />
        </div>
        <div className="title-background">
          <h3>កំពូលតារាងទាំង ១០</h3>
        </div>
        <div style={{margin: "-50px 100px 0"}}>
          <MyTable header={header} />
        </div>
      </div>
    );
  }
}
