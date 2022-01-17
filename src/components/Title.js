//Title.js

//外部のライブラリやファイルを参照するインポートの部分
import react from "react";
import './Title.css';

//JSXやメソッドを定義する実質上の中身
const Title = (props) => {
  return(
    <div>
      <h2 style={{color: '#56D6FB'}}>{props.title}</h2>
    </div>
    );
  }


//外部のファイルがこのcomponentを利用できるようにするエクスポートの部分
export default Title;
