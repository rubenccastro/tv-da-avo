import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';

const Kuriakostv = () => {
    function setOrientation() {
        if (Dimensions.get('window').height > Dimensions.get('window').width) {
            // Device is in portrait mode, rotate to landscape mode.
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        } else {
            // Device is in landscape mode, rotate to portrait mode.
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }
    }
    return (
        <View style={styles.container}>
            <View>
                <Video
                    source={{
                        uri: "https://w1.manasat.com:443/ktv/smil:ktv.smil/playlist.m3u8"
                    }}
                    useNativeControls={true}
                    resizeMode='cover'
                    shouldPlay
                    onFullscreenUpdate={setOrientation}
                    style={{ width: Dimensions.get('window').width, height: 220 }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default Kuriakostv;
