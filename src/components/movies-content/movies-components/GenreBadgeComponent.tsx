import React, {FC} from 'react';
import styles from './GenreBadgeComponent.module.css'
type BadgePropType = {
    name: string
}

const GenreBadgeComponent:FC<BadgePropType> = ({name}) => {
    return (
        <span className={styles.badge}>
            {name}
        </span>
    );
};

export default GenreBadgeComponent;