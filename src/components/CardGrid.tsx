import React, {useEffect, useState} from "react";
import Card from "./Card.tsx";

function CardGrid() {
    const [data, setData] = useState(null);
    return(
        <div className="grid grid-cols-3 gap-4">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )
}

export default CardGrid;