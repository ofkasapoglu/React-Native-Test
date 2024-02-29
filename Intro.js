import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Intro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Semihi Gotten</Text>
    </View>
  )
}
const styles =StyleSheet.create({
  container:{
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  text:{
    backgroundColor:'white',
    fontSize:30
  }
})



export default Intro
// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View style={styles.container}>
//         <Box backgroundColor='red' text={'Omer Faruk'}></Box>
//         <View style={styles.rowContainer}>
//             <Box backgroundColor='pink' text={'Nazar'}></Box>
//             <Box backgroundColor='purple' text={'Sila'}></Box>
//             <Box backgroundColor='yellow' text={'Kasapoglu'}></Box>
//         </View>
//         <Box backgroundColor='blue' text={'hello'}></Box>
//     </View>
//   )
// }

// const Box = ({ backgroundColor, text }) => (
//     <View style={[styles.box, { backgroundColor }]}>
//         <Text style={[styles.text, { color: 'black' }]}>{text}</Text>
//     </View>
// )

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column'
//     },
//     rowContainer: {
//         flexDirection: 'row',
//         flex: 1
//     },
//     box: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 1
//     },
//     text: {
//         fontSize: 20,
//     }
// })

// export default App
