import React from "react";

export default (props) => {
  // console.log("ViewKey: ",props.viewKey)
  let viewKey = "";
  switch (props.viewKey) {
    case 32:
      //ដកឃ្លា
      viewKey = "Shift និង Space (ដកឃ្លា)";
      break;
    case 8203:
      //ចន្លោះមើលមិនឃើញ
      viewKey = "Space (ចន្លោះមើលមិនឃើញ)";
      break;
    case 6098:
      //ដាក់ជើង
      viewKey = "j (ដាក់ជើង)";
      break;
    case 44:
      //ក្បៀស
      viewKey = "Alt gr និង ,";
      break;
    case 6091:
      viewKey = "​'  (បន្តក់)";
      break;
    case 6016:
      //ក
      viewKey = "k";
      break;
    case 6017:
      //ខ
      viewKey = "x";
      break;
    case 6018:
      //គ
      viewKey = "Shift និង k";
      break;
    case 6019:
      //ឃ
      viewKey = "Shift និង x";
      break;
    case 6020:
      //ង
      viewKey = "g";
      break;
    case 6021:
      //ច
      viewKey = "c";
      break;
    case 6022:
      //ឆ
      viewKey = "q ";
      break;
    case 6023:
      //ជ
      viewKey = "Shift និង c ";
      break;
    case 6024:
      //ឈ
      viewKey = "Shift និង q ";
      break;
    case 6025:
      //ញ
      viewKey = "Shift និង j ";
      break;
    case 6026:
      //ដ
      viewKey = "d ";
      break;
    case 6027:
      //ឋ
      viewKey = "z ";
      break;
    case 6028:
      //ឌ
      viewKey = "Shift និង d";
      break;
    case 6029:
      //ឍ
      viewKey = "Shift និង z";
      break;
    case 6030:
      //ណ
      viewKey = "Shift និង n";
      break;
    case 6031:
      //ត
      viewKey = "t";
      break;
    case 6032:
      //ថ
      viewKey = "f";
      break;
    case 6033:
      //ទ
      viewKey = "Shift និង t";
      break;
    case 6034:
      //ធ
      viewKey = "Shift និង f";
      break;
    case 6035:
      //ន
      viewKey = "n";
      break;
    case 6036:
      //ប
      viewKey = "b";
      break;
    case 6037:
      //ផ
      viewKey = "p";
      break;
    case 6038:
      //ព
      viewKey = "Shift និង b";
      break;
    case 6039:
      //ភ
      viewKey = "Shift និង p";
      break;
    case 6040:
      //ម
      viewKey = "m";
      break;
    case 6041:
      //យ
      viewKey = "y";
      break;
    case 6042:
      //រ
      viewKey = "r";
      break;
    case 6043:
      //ល
      viewKey = "l";
      break;
    case 6044:
      //វ
      viewKey = "v";
      break;
    case 6047:
      //ស
      viewKey = "s";
      break;
    case 6048:
      //ហ
      viewKey = "h";
      break;
    case 6049:
      //ឡ
      viewKey = "Shift និង L";
      break;
    case 6050:
      //អ
      viewKey = "Shift និង g";
      break;

    //***************************************************//
    case 6070:
      //កា
      viewKey = "a";
      break;
    case 6071:
      //កិ
      viewKey = " i";
      break;
    case 6072:
      //កី
      viewKey = "Shift និង i ";
      break;
    case 6073:
      //កឹ
      viewKey = "w ";
      break;
    case 6074:
      //កឺ
      viewKey = "Shift និង w ";
      break;
    case 6075:
      //កុ
      viewKey = "u";
      break;
    case 6076:
      //កូ
      viewKey = "Shift និង u";
      break;
    case 6077:
      //កួ
      viewKey = "Shift និង y";
      break;
    case 6078:
      //កើ
      viewKey = ";";
      break;
    case 6079:
      //កឿ
      viewKey = "Shift និង [";
      break;
    case 6080:
      //កៀ
      viewKey = "[";
      break;
    case 6081:
      //កេ
      viewKey = "e";
      break;
    case 6082:
      //កែ
      viewKey = "Shift និង e";
      break;
    case 6083:
      //កៃ
      viewKey = "Shift និង s";
      break;
    case 6084:
      //កោ
      viewKey = "o";
      break;
    case 6085:
      //កៅ
      viewKey = "Shift និង o";
      break;
    case 6086:
      //កំ
      viewKey = "Shift និង m";
      break;
    case 6087:
      //កះ
      viewKey = "Shift និង h";
      break;

    //************************************************* */
    case 6053:
      //ឥ
      viewKey = "-";
      break;
    case 6054:
      //ឦ
      viewKey = "Alt gr និង i";
      break;
    case 6055:
      //ឧ
      viewKey = "Shift និង ]";
      break;
    case 6057:
      //ឩ
      viewKey = "Alt gr និង [";
      break;
    case 6058:
      //ឳ
      viewKey = " ]​ ";
      break;
    case 6060:
      //ឬ
      viewKey = " Shift និង r​ ";
      break;
    case 6059:
      //ឫ
      viewKey = "Alt gr និង r ​";
      break;
    case 6062:
      //ឮ
      viewKey = " | ​";
      break;
    case 6061:
      //ឭ
      viewKey = "Shift និង | ​";
      break;
    case 6063:
      //ឯ
      viewKey = "​Alt gr និង e";
      break;
    case 6065:
      //ឱ
      viewKey = "Alt gr និង o";
      break;
    case 6067:
      //ឳ
      viewKey = "Alt gr និង ]";
      break;
    case 6066:
      //ឲ
      viewKey = "​+";
      break;

    //********************************************** */
    case 6093:
      //ក៍
      viewKey = "Shift និង 6";
      break;
    case 6096:
      //ក័
      viewKey = "Shift និង 7";
      break;
    case 6095:
      //ក៏
      viewKey = "Shift និង 8";
      break;
    case 6092:
      //ក៌
      viewKey = "Shift និង -";
      break;
    case 6089:
      //ក៉
      viewKey = "Shift និង '";
      break;
    case 6090:
      //ក៊
      viewKey = "/";
      break;

    //********************************************** */
    case 6100:
      //។
      viewKey = ".";
      break;
    case 6101:
      //៕
      viewKey = "Shift និង .";
      break;
    case 37:
      //%
      viewKey = "Shift និង ​%";
      break;

    case 33:
      //!
      viewKey = "Shift និង 1";
      break;

    case 6103:
      //ៗ
      viewKey = "Shift និង 2 ";
      break;
    case 6107:
      //៛
      viewKey = "Shift និង 4 ";
      break;
    case 171:
      //«
      viewKey = "~";
      break;
    case 187:
      //»
      viewKey = "Shift និង ~";
      break;
    case 8364:
      //€
      viewKey = "Alt gr និង 5";
      break;
    case 6105:
      //៙
      viewKey = "Alt gr និង 6";
      break;
    case 6106:
      //៚
      viewKey = "Alt gr និង 7";
      break;
    case 215:
      //×
      viewKey = "Alt gr និង +";
      break;

    case 45:
      //-
      viewKey = "-";
      break;
    case 43:
      //+
      viewKey = "Shift និង + e";
      break;

    case 6097:
      //៑
      viewKey = "Alt gr និង 3​ ";
      break;
    case 40:
      //(
      viewKey = "Shift និង 9​ ";
      break;
    case 41:
      //)
      viewKey = "Shift និង 0​ ";
      break;
    case 6094:
      //៎
      viewKey = "Alt gr និង = ";
      break;
    case 61:
      //=
      viewKey = "Shift និង = ";
      break;

    //*************************************************** */

    case 6088:
      //ៈ
      viewKey = "Alt gr និង ' ";
      break;
    case 6102:
      //៖
      viewKey = "Alt gr និង ;";
      break;
    case 64:
      //@
      viewKey = "Alt gr និង 2 ";
      break;
    case 36:
      //$
      viewKey = "Alt gr និង 4";
      break;
    case 42:
      //*
      viewKey = "Alt gr និង 8 ";
      break;
    case 123:
      //{
      viewKey = "Alt gr និង 9 ";
      break;
    case 125:
      //}
      viewKey = "Alt gr និង 0 ";
      break;

    //***************************************************** */
    case 6112:
      //០
      viewKey = "0";
      break;
    case 6113:
      //១
      viewKey = "1";
      break;
    case 6114:
      //២
      viewKey = "2";
      break;
    case 6115:
      //៣
      viewKey = "3";
      break;
    case 6116:
      //៤
      viewKey = "4";
      break;
    case 6117:
      //៥
      viewKey = "5";
      break;
    case 6118:
      //៦
      viewKey = "6";
      break;
    case 6119:
      //៧
      viewKey = "7";
      break;
    case 6120:
      //៨
      viewKey = "8";
      break;
    case 6121:
      //៩
      viewKey = "9";
      break;
    //*************************************************** */

    default:
      break;
  }
  //បើជា ស្រះ ា ឬ ស្រះ  ុ ឬ ស្រះ  េ ឬ ស្រះ  ោ
  if (
    props.viewKey == "6070" ||
    props.viewKey == "6075" ||
    props.viewKey == "6081" ||
    props.viewKey == "6084"
  ) {
    //បើជា ស្រះ  ំ នឹង ស្រះ  ះ
    if (props.nextKey == "6086" || props.nextKey == "6087") {
      if (props.viewKey == "6070" && props.nextKey == "6086") {
        //ស្រះ ាំ
        viewKey = "Shift និង a";
      } else if (props.viewKey == "6075" && props.nextKey == "6086") {
        //ស្រះ  ុំ
        viewKey = ",";
      } else if (props.viewKey == "6075" && props.nextKey == "6087") {
        //ស្រះ ​ ុះ
        viewKey = "Shift និង ,";
      } else if (props.viewKey == "6081" && props.nextKey == "6087") {
        //ស្រះ  េះ
        viewKey = "Shift និង v";
      } else if (props.viewKey == "6084" && props.nextKey == "6087") {
        //ស្រះ  ោះ
        viewKey = "Shift និង ;";
      }
    }
  }

  return (
    <div
      style={{
        border: "2px solid rgb(2,254,82)",
        backgroundColor: "rgba(2,254,82,0.1)",
        borderRadius: "15px",
        width: "75%",
        height: "80px",
        padding: "14px 0",
        margin: "10px auto",
        fontFamily:
          '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
        fontSize: "40px",
      }}
    >
      {viewKey}
    </div>
  );
};
