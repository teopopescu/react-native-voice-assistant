import {View, Text, Image} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Features() {
  return (
    <View style={{height: hp(60)}} className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">Features</Text>
      <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
            <Image source={require('../../assets/images/chatgptIcon.png')} style={{width: hp(4), height: hp(4)}}/>
          <Text
            style={{fontSize: wp(4)}}
            className=" font-semibold text-gray-700">
            ChatGPT
            </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}}>
            ChatGPT is a chatbot that can be trained on any topic. It uses GPT-2, a large neural network, to generate responses.
        </Text>
      </View>


      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
            <Image source={require('../../assets/images/dalleIcon.png')} style={{width: hp(4), height: hp(4)}}/>
          <Text
            style={{fontSize: wp(4)}}
            className=" font-semibold text-gray-700">
            DALL-E
            </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}}>
        DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.
        </Text>
      </View>


      <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
            <Image source={require('../../assets/images/smartaiIcon.png')} style={{width: hp(4), height: hp(4)}}/>
          <Text
            style={{fontSize: wp(4)}}
            className=" font-semibold text-gray-700">
            Smart AI
            </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}}>
        A powerful voice assistant with the abilities of ChatGPT and Dall-E, providing you the best of both worlds.
        </Text>
      </View>
    </View>
  );
}
