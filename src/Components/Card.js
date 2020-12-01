import React from 'react';

const Card = (props) =>   //or we can destructure props inside the bracket like const Card = ({id,name,email})
{
    const {id,name,email} = props;  //es6 destructuring
    return(
      <div className=' tc bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robot' src={`https://robohash.org/${id}?200*200`}/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
      </div>
    );
}
export default Card;