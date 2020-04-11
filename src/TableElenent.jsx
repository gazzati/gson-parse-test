import React from 'react';
import lock from './img/lock.png'

function TableElement({name, sites, type, status}) {
    return (
        <tr TableElement>
            <td>{name}</td>
            <td className="center">{sites}</td>
            <td className="center">{type}</td>
            <td className="center">{(status === "blocked") ? <img src={lock} alt=""/> :
                (status === "disable") ? <div className="but"><div className="off">off</div></div>
                    :<div className="but"><div className="on">on</div></div>}</td>
        </tr>
    );
}

export default TableElement;
