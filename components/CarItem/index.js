import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {

   const {name, tagline, taglineCTA, image} = props.car;
   return(
     <View style={styles.carcontainer}>
      
      <ImageBackground 
         source={image}
         style={styles.image}
      />
     
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
           {tagline}
           {' '}
           <Text style={styles.taglinecta}>{taglineCTA}</Text>
         </Text>
      </View>

      <View style={styles.buttonContainer}>
      <StyledButton 
        type="primary" 
        content="Custom Order"
        onPress={() => {
           console.warn("Custom order was pressed");
        }}
      /> 

      <StyledButton 
        type="Secondary" 
        content="Existing Inventory"
        onPress={() => {
           console.warn("Existing Inventory was pressed");
        }}
      /> 
      </View>
      

     </View> 
   );
}
export default CarItem;