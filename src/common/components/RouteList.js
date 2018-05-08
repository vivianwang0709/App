import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native'

const RouteList = (props) => (
    <View>
        <Button
            onPress={props.click}
            title="change"
            color="#841584"
            accessibilityLabel="change route"
        />
        {props.data.map(item => (
            <Text>{item.name}</Text>
        ))}
    </View>
)

export default RouteList;