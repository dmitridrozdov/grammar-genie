import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '10px',
        // border: '1px solid #326c99',
      },
      textArea: {
        width: '100%',
        height: '20px',
        // fontSize: '16px',
        // lineHeight: '24px',
        // fontFamily: 'Kanit',
        borderRadius: '9px',
        // color: '#326c99',
        
        padding: '16px',
        '&:focus': {
          outline: 'none',
          borderColor: '#326c99',
        },
      },
      // button: {
      //   width: '80px',
      //   height: '40px',
      // },

      inputTextStyle: {
        disableUnderline: true,
        fontFamily: 'Kanit',
        fontSize: '14px',
      },

}));