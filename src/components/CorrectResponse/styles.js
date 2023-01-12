import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    box: {
        border: '1px solid #dbf0ff',
        paddingBottom: '20px',
        paddingTop: '5px',
        paddingLeft: '5px',
        paddingRight: '5px',
        boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 1px 3px 0px rgba(0, 0, 0, 0.03)',
    },

    text: {
        fontSize: '16px',
        fontFamily: 'Kanit',
        marginLeft: '20px',
        color: '#326c99',
    },

    copyButton: {
        fontSize: '12px',
        color: '#326c99'
    },
    
    copyButtonDiv: {
        display: 'flex', 
        justifyContent: 'flex-end',
    },

}));