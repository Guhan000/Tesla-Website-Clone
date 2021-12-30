import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: Platform.OS === 'android' ? 32 : 0,
    } 
});

export default styles;