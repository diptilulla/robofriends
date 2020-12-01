import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll',border:'1px solid white', height:'800px'}}>
          {props.children}
        </div>
    );
}

//like html inline styles 1st curly brackets since js expression which return js object which can have tyles as properties of the object

export default Scroll;