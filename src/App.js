import React, {useState} from 'react';
import './App.css';
import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableElement from "./TableElenent";
import startIcon from './img/startIcon.png'
import up from './img/up.png'
import down from './img/down.png'

function App() {
    let [data, setData] = useState([
        {
            "id": 1,
            "name": "ExpsaertSender",
            "sites": 0,
            "type": "email",
            "status": "blocked"
        },
        {
            "id": 2,
            "name": "Tag Commander",
            "sites": 0,
            "type": "tag_manager",
            "status": "blocked"
        },
        {
            "id": 3,
            "name": "Ysance",
            "sites": 0,
            "type": "dmp_crm",
            "status": "blocked"
        },
        {
            "id": 4,
            "name": "AT Internet",
            "sites": 1,
            "type": "analytics",
            "status": "enable"
        },
        {
            "id": 5,
            "name": "Content Square",
            "sites": 3,
            "type": "analytics",
            "status": "enable"
        },
        {
            "id": 6,
            "name": "Google Tag Manager",
            "sites": 2,
            "type": "tag_manager",
            "status": "enable"
        },
        {
            "id": 7,
            "name": "Heatmap",
            "sites": 1,
            "type": "heatmap",
            "status": "enable"
        },
        {
            "id": 8,
            "name": "Tealium",
            "sites": 0,
            "type": "dmp_crm",
            "status": "disable"
        },
        {
            "id": 9,
            "name": "Emarsys",
            "sites": 0,
            "type": "email",
            "status": "disable"
        }
    ]);

    let [sortState, setSortState] = useState({str: true, column: null});
    let [searchData, setSearchData] = useState(null);
    let [findMode, setFindMode] = useState(false);



    const sort = (column) => {
        if (sortState.str || sortState.column !== column) {
            setData(data.slice(0).sort((a, b) => a[column] > b[column] ? 1 : -1));
            setSortState({...sortState, str: false, column:column})
        }
        else {
            setData(data.slice(0).sort((a, b) => a[column] > b[column] ? -1 : 1));
            setSortState({...sortState, str: true, column:column})
        }

    }
    
    const onSearch = (event) => {
        event.preventDefault();
        setFindMode(true)
    }

    const onChange = (event) => {
        setSearchData(event.target.value);
    }

    return (
        <div className="App">
            <div className="Wrap">
                <div className="d3">
                    <form onSubmit={onSearch}>
                        <input type="text"
                               placeholder="Искать здесь..."
                               onChange={onChange}/>
                            <button type="submit"></button>
                    </form >
                </div>
                <Table className="MainTable" striped bordered hover>
                    <thead>
                    <tr className="green">
                        <th onClick={() => sort('name')}>
                            Tool name {sortState.column === 'name'? (sortState.str
                            ? <img src={down} alt=""/>
                            : <img src={up} alt=""/>) : <img src={startIcon} alt=""/>} </th>
                        <th onClick={() => sort('sites')} className="center">
                            Used on {sortState.column === 'sites'? (sortState.str
                            ? <img src={down} alt=""/>
                            : <img src={up} alt=""/>) : <img src={startIcon} alt=""/>}</th>
                        <th onClick={() => sort('type')} className="center">
                            Type {sortState.column === 'type'? (sortState.str
                            ? <img src={down} alt=""/>
                            : <img src={up} alt=""/>) : <img src={startIcon} alt=""/>}</th>
                        <th onClick={() => sort('status')} className="center">
                            Status {sortState.column === 'status'? (sortState.str
                            ? <img src={down} alt=""/>
                            : <img src={up} alt=""/>) : <img src={startIcon} alt=""/>}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(item => (findMode? item.name.toLowerCase().includes(searchData.toLowerCase())&&
                        <TableElement
                            key={item.id}
                            name={item.name}
                            sites={item.sites}
                            type={item.type}
                            status={item.status}/>
                            : <TableElement
                                key={item.id}
                                name={item.name}
                                sites={item.sites}
                                type={item.type}
                                status={item.status}/>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
);
}

export default App;
