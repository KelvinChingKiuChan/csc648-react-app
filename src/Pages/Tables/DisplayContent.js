import React from "react";
import Display from "./Display";

// var testLine= '{"name":"John", "age":30, "car":null}'
// var testArr= []

// //testing, repeat the same line multiple times
// for (let i= 0; i< 10; i+=1){
//     testArr[i]= testLine
// }

// var keys= []
// var keyIndex= 0
// var content= []

// //testing loop
// for (let i= 0; i< testArr.length; i+=1){
//     var line= testArr[i]
//     var parsedLine= JSON.parse(line)
//     var rowContent= []
//     var rowIndex= 0
//     for (const key in parsedLine){
//         if(i==0){
//             keys[keyIndex++]= <th scope= "col">{key}</th>
//         }
//         rowContent[rowIndex++]= <td>{parsedLine[key]}</td>
//     }
//     var row= <tr>
//                 <th scope= "row">
//                     {i+1}
//                 </th>
//                 {rowContent}
//             </tr>
//     content[i]= row
// }

// var test= <Display id= ""
// headers= {keys}
// contents= {content}
// />

export default function DisplayContents(props) {
    var keys = []
    var keyIndex = 0
    var content = []
    var arr = (props.arr)

    //testing loop
    for (let i = 0; i < arr.length; i += 1) {
        var line = arr[i]
        var parsedLine = JSON.parse(line)
        var rowContent = []
        var rowIndex = 0
        for (const key in parsedLine) {
            if (i == 0) {
                keys[keyIndex++] = <th scope="col">{key}</th>
            }
            rowContent[rowIndex++] = <td>{parsedLine[key]}</td>
        }
        var row = <tr>
            <th scope="row">
                {i + 1}
            </th>
            {rowContent}
        </tr>
        content[i] = row
    }

    return (
        <div>
            <Display
                    headers={keys}
                    contents={content}
            />
        </div>
    );
}
