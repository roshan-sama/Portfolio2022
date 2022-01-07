import { Card, Text } from "@mantine/core";
import Career from './career-item-type';

const CareerList:React.FC<{careers: Career[]}> = ({careers}) => {
    return(
        <Card>
            {careers.map((career) => <Text key={career.id}></Text> )}
        </Card>
    )
}

export default CareerList