import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Page 	   from './Page';

export default class Pdf extends Component {
  state = {
      filePath: ''
    };
  constructor(props) {
    super(props);
  }
 
  askPermission() {
    var that = this;
    async function requestExternalWritePermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'CameraExample App External Storage Write Permission',
            message:
              'CameraExample App needs access to Storage data in your SD Card ',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //If WRITE_EXTERNAL_STORAGE Permission is granted
          //changing the state to show Create PDF option
          that.createPDF();
        } else {
          alert('WRITE_EXTERNAL_STORAGE permission denied');
        }
      } catch (err) {
        alert('Write permission err', err);
        console.warn(err);
      }
    }
    //Calling the External Write permission function
    if (Platform.OS === 'android') {
      requestExternalWritePermission();
    } else {
      this.createPDF();
    }
  }
  async createPDF() {
	  //	const docsDir = await PDFLib.getDocumentsDirectory();
	  //const pdfPath = 'Documents/sample.pdf';

    let options = {
      //Content to print
		html: Page,
      //File Name
      fileName: 'test',
      //File directory
      directory: 'docs',
    };
	 let file = await RNHTMLtoPDF.convert(options);
	 console.log(file.filePath);
	 this.setState({filePath:file.filePath});
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity onPress={this.askPermission.bind(this)}>
        <View>
          <Image
            //We are showing the Image from online
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
            }}
            //You can also show the image from you project directory like below
            //source={require('./Images/facebook.png')}
            style={styles.ImageStyle}
          />
          <Text style={styles.text}>Create PDF</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>{this.state.filePath}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F4F4F',
    borderWidth: 1,
    borderColor: '#000',
  },
  text: {
    color: 'white',
    textAlign:'center',
    fontSize: 25,
    marginTop:16,
  },
  ImageStyle: {
    height: 150,
    width: 150,
    resizeMode: 'stretch',
  },
});
