import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Modal, ToastAndroid, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const InternshipTask4 = () => {
  const [image, setImage] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  console.log(image);
  // console.log(fatherName);

  const camera = async () => {
    const result = await launchCamera({ mediaType: 'photo' });
    const image = result.assets.map(img => {
      return img.uri;
    })
    console.log('image: ', image);
    console.log('image: ', image[0]);
    setImage(image[0]);
  }

  const gallery = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    const image = result.assets.map(img => {
      return img.uri;
    })
    console.log('imageGallery: ', image);
    console.log('result: ', result);
    console.log('imageGalleryimage[0]: ', image[0]);

    setImage(image[0]);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View>
        {image != '' ? <Image source={{ uri: image }}/*source={cameraImage == '' ? require('../assests/profile.png') : cameraImage}*/ style={{ width: 95, height: 95, marginTop: 50, borderRadius: 95 / 2, borderWidth: 3, overflow: 'hidden' }} />

          :

          <Image source={require('./assests/profile.png')}/*source={cameraImage == '' ? require('../assests/profile.png') : cameraImage}*/ style={{ width: 95, height: 95, marginTop: 50, borderRadius: 95 / 2, borderWidth: 3, overflow: 'hidden' }} />
        }


        <TouchableOpacity style={{ position: 'absolute', width: 34, height: 34, top: 98, right: 0 }} onPress={() => { setModalVisible(true) }}>
          <Image source={require('./assests/camera.png')} style={{ width: 34, height: 34, }} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 40 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: '600', fontSize: 17, marginTop: 20 }}>Father Name</Text>
          <View style={{ flexDirection: 'row', borderBottomWidth: 2, alignItems: 'center', width: '60%', }}>
            <TextInput style={{ height: 50, marginLeft: 10 }} value={fatherName} onChangeText={(txt) => { setFatherName(txt) }} />
          </View>

        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
          <Text style={{ fontWeight: '600', fontSize: 17, marginTop: 20 }}>Name</Text>
          <View style={{ flexDirection: 'row', borderBottomWidth: 2, alignItems: 'center', width: '60%' }}>
            <TextInput style={{ height: 50, marginLeft: 10 }} value={name} onChangeText={(txt) => { setName(txt) }} />
          </View>

        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <View style={{ width: '80%', height: '50%', backgroundColor: '#fff', borderRadius: 20 }}>

            <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 10, marginRight: 10 }} onPress={() => setModalVisible(false)}>
              <Image source={require('./assests/close.png')} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>

            <View style={{ flex: 1, justifyContent: 'center', }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                <TouchableOpacity onPress={() => { camera() }}>
                  <Image source={require('./assests/camera.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { gallery() }}>
                  <Image source={require('./assests/gallery.png')} />
                </TouchableOpacity>


              </View>
            </View>

          </View>

        </View>
      </Modal>
      {/* <GalleryCameraModal /> */}
      <TouchableOpacity style={{ width: '70%', height: 60, backgroundColor: '#000', marginTop: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }} onPress={() => {

        Alert.alert('Next Screen', 'Click to go to next screen.', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK', onPress: () => {

              {
                fatherName && name && image != '' ? ToastAndroid.showWithGravity(
                  'Go To Another Screen',
                  ToastAndroid.SHORT,
                  ToastAndroid.CENTER,
                )
                  :
                  ToastAndroid.showWithGravity(
                    'Please Fill Boxes...',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                  )
              }

            }
          },
        ]);


      }}>
        <Text style={{ color: '#fff', fontSize: 17, fontWeight: '600' }}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default InternshipTask4

const styles = StyleSheet.create({})