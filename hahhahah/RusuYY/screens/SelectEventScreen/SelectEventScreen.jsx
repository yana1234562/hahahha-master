import {gql, useLazyQuery } from "@apollo/client"
import { View } from "react-native";
import { DatePicker } from "../../components/DatePicker";

const GET_EVENT_DATE = gql`
    query getEventDate($year: Int, $month: Int, $day: int) {
        eventDate(year: $year, month: $month, day: $day) {
            name
            description
        }
    }
`

export const SelectEventScreen = () => {
    const [loadEvent, { loading, error, data}] = useLazyQuery(GET_EVENT_DATE);
    console.log(data)
    
    const handleConfirmDatePicker = (value) => {

        console.log(value);

        loadEvent({
            variables: {
                year: Number(value[0]),
                month: Number(value[1]),
                day: Number(value[2]),
            },
        });
        
    };
    
    return (
        <View>
            <DatePicker onConfirm={handleConfirmDatePicker} />
        </View>
    )
}
