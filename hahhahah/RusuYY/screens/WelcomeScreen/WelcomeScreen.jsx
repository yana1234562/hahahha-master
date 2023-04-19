import{ gql, useQuery} from '@apollo/client'
import { View, Text } from 'react-native';


const GET_EVENT = gql`
    query getEvent {
        event(id:10) {
            name,
            source,
            description
        }
    }
`;

export const WelcomeScreen = () => {
    const data = useQuery(GET_EVENT);

    console.log(data);
    if (data.loading) {
        return <View>
            <Text>Загрузка..</Text>
        </View>
    }
    else {
    return (data.data.event.description)
    }
}
