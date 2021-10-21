import React from "react";


export default function Display(props) {
    return(
    <div className="table-responsive">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    {props.headers}
                </tr>
            </thead>
            <tbody>
                {props.contents}
            </tbody>
        </table>
    </div>
    );
}