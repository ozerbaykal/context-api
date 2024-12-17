import {ActivityIndicator, StyleSheet} from 'react-native';

const Loading = () => {
  return (
    <ActivityIndicator style={styles.loading} size="large" color="#000000" />
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
