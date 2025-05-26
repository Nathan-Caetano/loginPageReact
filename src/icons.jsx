import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const getIcon = (iconName, color) => {
    try {
        if (!color) {
            color = '#41456C';
        }

        return <FontAwesomeIcon icon={iconName} style={{ color: `${color}`}} />;
    } catch (error) {
        console.error(`Icon ${iconName} not found`, error);
        return null;
    }
}

export default getIcon;