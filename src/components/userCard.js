import React from 'react';

const Card = ({fullname, username}) => (
    <a href={"https://github.com/"+username} className="profile">
        <img src={"https://avatars1.githubusercontent.com/"+username}/>
        <span>{fullname}</span>
    </a>
);

export default Card;