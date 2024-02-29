import { ImageBackground, StyleSheet, Text, View } from "react-native";

function TimeWidget() {
    const CurrentTime = new Date();
    return( 
    <ImageBackground style={styles.container}
        source={{uri: 'https://wallpapers.com/images/hd/night-sky-stars-wallpaper-p5z3udhw7tqhp3bl.jpg'}}
        resizeMode="cover"
        imageStyle={{
            opacity:.7
        }}
    >
    <View>
        <Text style={styles.time}>
            {CurrentTime.getHours()}:{CurrentTime.getMinutes().toString().padStart(2,'0')}
        </Text>
    </View>
    </ImageBackground>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'darkorange',
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
    },
    time:{
        colur:'white',
        fontSize:100,
        fontWeight:'bold'
    }
})

export default TimeWidget;