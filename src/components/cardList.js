import React from "react";
import Card from "../components/card";

const cardList = ({ robots }) => {
    return (
        <div>
            {
                /* call the copenent / in js use { } */
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    )
                })}
        </div>
    );
}
export default cardList;