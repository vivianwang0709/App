import React from 'react';

import {
    View,
    Text,
} from 'react-native'


const Area = (props) => {

    let name = props.data.name
    return (
        <View>
            <Text
                onPress={() => (
                    props.nav.navigate('Route', { area: "1" })
                )}
            >
                {name}
            </Text>
        </View>
    )
};

const AreaList = (props) => (
    <View>
        {props.data.map(item => (
            <Area data={item} key={item.id} nav={props.nav} />
        ))}
    </View>
)


export default AreaList;