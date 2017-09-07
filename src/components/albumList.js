//Import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

//Make a component
class AlbumList extends Component {
    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response));
    }

    render() {
        return (
            <View>
                <Text>AlbumList</Text>
            </View>
        );
    }
}

//Make the component available to other parts of the app
export default AlbumList;
