import React from 'react'
import {Popup as ReactPopup} from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

export default function Popup(props) {
    return (
        <ReactPopup
            trigger={<button className="bg-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{props.link}</button>}
            modal
            nested
        >
            {close => (
                <div className="modal pt-8 pb-4 mx-4 text-center w-64">
                    <i class={props.icon +" rounded-full bg-white text-green-500 text-5xl mb-0"}></i>
                    <div className="text-xl w-full text-center text-green-500 font-medium">
                    {props.title}</div>
                    <div className="text-sm py-2">
                        {props.content}
                    </div>
                    <div className="text-center mt-12 bg-gray-200" style={{marginBottom: "-21px",marginLeft: "-8%",marginRight: "-8%",borderBottomLeftRadius: "8px",borderBottomRightRadius:"8px",height: "80px",paddingTop: "16px"}}>
                        <button
                            className="border m-2 button focus:outline-none w-24 py-1 text-white rounded-md bg-blue-600"
                            onClick={() => {
                                close();
                            }}
                        >
                            {props.button}
                        </button>
                    </div>
                </div>
            )}
        </ReactPopup>
    )
}
