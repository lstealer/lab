import React from 'react'

export default (props) => {

    return(
        <div>
             <textarea
                  id="myTextArea"
                  style={{
                    width: "100%",
                    rows: "2",
                    padding: "10px 15px",
                    borderRadius: "15px",
                    border: "1px solid lightgray",
                    fontFamily: "Suwannaphum",
                    fontSize: "18px",
                    resize: 'none',
                  }}

                  //onDragStart={this.onPrevent.bind(this)}
                  //onMouseDown={this.onPrevent.bind(this)}
                  //onSelect={this.onPrevent.bind(this)}
                  //unselectable="on"
                  onContextMenu={props.onPrevent}
                  onPaste={props.onPrevent}
                  onCopy={props.onPrevent}
                  onCut={props.onPrevent}
                  autoComplete="off"
                  //onDrag={this.onPrevent.bind(this)}
                  //onDrop={this.onPrevent.bind(this)}
                  placeholder="អត្ថបទ..."
                  ref={props.onFocus}
                  value={
                    props.isCorrect
                      ? props.userInput
                      : props.oldInput
                  }
                  readOnly={props.finished}
                  onChange={props.onChange}
                  onKeyDown={props.onKeyDown}
                  onKeyUp={props.onKeyUp}
                 
                ></textarea>
        </div>
    )
}