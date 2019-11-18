import React from "react";
import {

  useParams,

} from "react-router-dom";

const FairDetail = props => {
    
    let { id } = useParams(); // params jsou všechny informace, které přišly na exact path
    let fair = (props.fairs.filter(f => f.id == id))[0] // mapujeme skrze fairs -–> filtrujeme - filter bere jako parametr funkci a jako argument v našem případě ID. Dvě rovnítka jsou proto, že dostáváme číslo na druhé straně je string.
    console.log(props.fairs)
    console.log(id)
    console.log(fair)
    const { name, place, event_date, short_description } = fair;
    return (
        <div className="row">
            
            <p>{name}</p>
            <p>{short_description}</p>
            <p>{place}</p>
            <p>{event_date}</p>
           
        </div>
    );
};

export default FairDetail;
