import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
const App = () => {
  const [count, setCount] = useState(2);
  const onPress = () => setCount(prevCount => prevCount + 4);
  const onPress2 = () => setCount(prevCount => prevCount - 4);
  const onPress3 = () => setCount(prevCount => prevCount * 4);
  // const onPress4 =()=> setCount(prevCount =>prevCount / 4);

  const onPress4 = (val) => console.log(val);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          Learning TouchableOpacity
        </Text>

        <TouchableOpacity style={styles.opacity}>
          <Text style={styles.text1}>
            HELLO
          </Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.opacity}>
          <Text style={styles.text2}>
            HELLO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opacity}>
          <Text style={styles.text3}>
            HELLO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opacity}>
          <Text style={styles.text4}>
            HELLO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opacity}>
          <Text style={styles.text5}>
            HELLO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opacity}>
          <Text style={styles.text6}>
            HELLO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opacity}>
          <Text style={styles.text7}>
            HELLO
          </Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.opacity8}>
            <Text style={styles.text8}>
              HELLO
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.opacity}>
          <ActivityIndicator style={styles.text9} size="large" color="#9370db" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.opacity}>
          <Text style={styles.text10}>
            Disabled
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opacity}>
          <Text style={styles.text11}>
            Custom inner view
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={{ alignItems: 'center', fontSize: 24, color: "black", marginLeft: 100, marginTop: 100 }}>
          PLUS OPERATIONS
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 12, color: "black", marginLeft: 100, }}>
          _______________________________________
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 32, color: "orange", marginLeft: 70, marginTop: 20 }}>
          Your count is : {count}
        </Text>
        <TouchableOpacity style={{ alignItems: 'center', width: 250, marginBottom: 10, fontSize: 32 }}
          onPress={onPress} activeOpacity={0.5}>
          <Text style={{
            textAlignVertical: 'center', textAlign: 'center', fontSize: 32,
            marginLeft: 150, marginTop: 5, borderWidth: 3, width: 300,
            height: 50, borderColor: 'black'
          }}>
            Press Count
          </Text>
        </TouchableOpacity>

        <Text style={{ alignItems: 'center', fontSize: 24, color: "black", marginLeft: 100, marginTop: 100 }}>
          MINUS OPERATIONS
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 12, color: "black", marginLeft: 100, }}>
          __________________________________________
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 32, color: "orange", marginLeft: 70, marginTop: 20 }}>
          Your count is : {count}
        </Text>
        <TouchableOpacity style={{ alignItems: 'center', width: 250, marginBottom: 10, fontSize: 32 }}
          onPress={onPress2} activeOpacity={0.5}>
          <Text style={{
            textAlignVertical: 'center', textAlign: 'center', fontSize: 32,
            marginLeft: 150, borderWidth: 3, width: 300,
            height: 50, borderColor: 'black'
          }}>
            Press Count
          </Text>
        </TouchableOpacity>


        <Text style={{ alignItems: 'center', fontSize: 24, color: "black", marginLeft: 100, marginTop: 100 }}>
          MULTIPLICATION OPERATIONS
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 12, color: "black", marginLeft: 100, }}>
          ___________________________________________
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 32, color: "orange", marginLeft: 70, marginTop: 20 }}>
          Your count is : {count}
        </Text>
        <TouchableOpacity style={{ alignItems: 'center', width: 250, marginBottom: 10, fontSize: 32 }}
          onPress={onPress3} activeOpacity={0.5}>
          <Text style={{
            textAlignVertical: 'center', textAlign: 'center', fontSize: 32,
            marginLeft: 150, borderWidth: 3, width: 300,
            height: 50, borderColor: 'black'
          }}>
            Press Count
          </Text>
        </TouchableOpacity>



        <Text style={{ alignItems: 'center', fontSize: 24, color: "black", marginLeft: 80, marginTop: 100 }}>
          DIVISION OPERATIONS
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 12, color: "black", marginLeft: 80, }}>
          _______________________________________________
        </Text>
        <Text style={{ alignItems: 'center', fontSize: 32, color: "orange", marginLeft: 70, marginTop: 20 }}>
          Your count is : {count}
        </Text>
        <TouchableOpacity style={{ alignItems: 'center', width: 250, marginBottom: 10, fontSize: 32 }}
          onPress={() => { onPress4("div") }} activeOpacity={0.5}>
          <Text style={{
            textAlignVertical: 'center', textAlign: 'center', fontSize: 32,
            marginLeft: 150, borderWidth: 3, width: 300,
            height: 50, borderColor: 'black'
          }}>
            Press Count
          </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'red',
    fontSize: 24
  },
  opacity: {
    alignItems: "center",
    marginTop: 10,

  },
  text1: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 400,
    height: 50,
    backgroundColor: '#ffd700',
    borderRadius: 10,
    fontSize: 24,
    color: 'white',


  },
  text2: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 400,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 10,
    fontSize: 24,
    color: 'white',


  },
  text3: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 400,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    fontSize: 24,
    color: 'white',


  },
  text4: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 400,
    height: 50,
    backgroundColor: '#00ced1',
    borderRadius: 10,
    fontSize: 24,
    color: 'white',


  },
  text5: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 400,
    height: 50,
    backgroundColor: '#00fa9a',
    borderRadius: 10,
    fontSize: 24,
    color: 'white',


  },
  text6: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 400,
    height: 50,
    backgroundColor: '#4169e1',
    borderRadius: 10,
    fontSize: 24,
    color: 'white',


  },
  text7: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 400,
    height: 50,
    backgroundColor: '#8a2be2',
    borderRadius: 10,
    fontSize: 24,
    color: 'white',


  },
  opacity8: {
    alignItems: "center",
    marginTop: 10,

  },
  text8: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 400,
    height: 50,
    fontSize: 24,
    color: '#8a2be2',
    borderColor: '#8a2be2',
    borderWidth: 3



  },
  text9: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 400,
    height: 50,
    backgroundColor: 'white',
    fontSize: 24,
    borderColor: '#9370db',
    borderWidth: 3



  },
  text10: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 400,
    height: 50,
    borderRadius: 30,
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    borderColor: "black",
    borderWidth: 3



  },
  text11: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 400,
    height: 50,
    borderRadius: 30,
    fontSize: 20,
    color: 'black',
    borderColor: "black",
    borderWidth: 3



  },

})

export default App;