import React from 'react';
import {Badge} from "reactstrap";

type GenreProp = {
    name: string;
}
const GenreBadgeComponent = ({name}: GenreProp) => {
    return (
        <Badge color="info" pill style={{ marginRight: '6px' }}>
            {name}
        </Badge>
    );
};

export default GenreBadgeComponent;