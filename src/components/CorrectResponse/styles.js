import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    box: {
        border: '1px solid #dbf0ff',
        paddingBottom: '20px',
        paddingTop: '5px',
        paddingLeft: '5px',
        paddingRight: '5px',
    },

    text: {
        fontSize: '16px',
        fontFamily: 'Kanit',
        marginLeft: '20px',
    },

    copyButton: {
        fontFamily: 'Kanit',
    },
    
    copyButtonDiv: {
        display: 'flex', 
        justifyContent: 'flex-end',
    },

}));