import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  logoTitle: {
    color: '#1BB6CE',
    fontWeight: 'bold',
    fontSize: 31,
  },
  pageTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 20,
    color: '#141414',
  },
  btnPhoneContainer: {
    marginTop: 40,
    alignSelf: 'flex-end',
  },
  pageContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  formGroup: {
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  formLabel: {
    fontWeight: '600',
    fontStyle: 'italic',
    color: '#757575',
    fontSize: 13,
  },
  formControl: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: '#757575',
    borderBottomWidth: 1,
  },

  statusbar: {
    backgroundColor: '#3BCCBB',
  },
});
export default styles;
