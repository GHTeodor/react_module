import React, {FC} from 'react';

import {images} from "./index";


const Badges: FC<{ id: number, name: string; }> = ({id, name}) => {
    return (<>
        {(id === 28) && <img src={images.Action} style={{width: "45px"}} alt={name}/>}
        {(id === 12) && <img src={images.Adventure} style={{width: "45px"}} alt={name}/>}
        {(id === 16) && <img src={images.Animation} style={{width: "45px"}} alt={name}/>}
        {(id === 35) && <img src={images.Comedy} style={{width: "45px"}} alt={name}/>}
        {(id === 80) && <img src={images.Crime} style={{width: "45px"}} alt={name}/>}
        {(id === 99) && <img src={images.Documentary} style={{width: "45px"}} alt={name}/>}
        {(id === 18) && <img src={images.Drama} style={{width: "45px"}} alt={name}/>}
        {(id === 10751) && <img src={images.Family} style={{width: "45px"}} alt={name}/>}
        {(id === 14) && <img src={images.Fantasy} style={{width: "45px"}} alt={name}/>}
        {(id === 36) && <img src={images.History} style={{width: "45px"}} alt={name}/>}
        {(id === 27) && <img src={images.Horror} style={{width: "45px"}} alt={name}/>}
        {(id === 10402) && <img src={images.Musical} style={{width: "45px"}} alt={name}/>}
        {(id === 9648) && <img src={images.Mystery} style={{width: "45px"}} alt={name}/>}
        {(id === 10749) && <img src={images.Romance} style={{width: "45px"}} alt={name}/>}
        {(id === 878) && <img src={images.Sci} style={{width: "45px"}} alt={name}/>}
        {(id === 10770) && <img src={images.TVMovie} style={{width: "45px"}} alt={name}/>}
        {(id === 53) && <img src={images.Thriller} style={{width: "45px"}} alt={name}/>}
        {(id === 10752) && <img src={images.War} style={{width: "45px"}} alt={name}/>}
        {(id === 37) && <img src={images.Western} style={{width: "45px"}} alt={name}/>}
        {name}
    </>);
};

export default Badges;