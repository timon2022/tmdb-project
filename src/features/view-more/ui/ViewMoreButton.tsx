
import { useNavigate } from "react-router";
import { Button } from "shared/ui/button";


type Props = {
    targetUrl?: string
}


export const ViewMoreButton = ({ targetUrl }: Props) => {

    const handleClick = () => {
        targetUrl && navigate(targetUrl) // category имеет тип EndPointsName
    };
    
    const navigate = useNavigate();
    return targetUrl && <Button size="small" variant='primary' onClick={handleClick}>View More</Button>;
};
