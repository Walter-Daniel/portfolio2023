import { createTheme } from "@mui/material";

export const newTheme = createTheme({
    palette: {
        primary: {
            main: '#db3069',
        },
        secondary: {
            main: '#3c3c3b',
        },
        otherColor: {
            main: '#1446a00'
        },
        warning: {
            main: '#f8c200'
        }
        // background: {
        //     default: "#f8f8f8"
        // }
    },
    typography: {
        h1:{
            fontFamily: 'Glegoo',
            color:'#000000'
        },
        h2:{
            fontFamily: 'Glegoo',
            color:'#000000'
        },
        h3:{
            fontFamily: 'Glegoo',
            color:'#000000'
        },
        h4: {
            color:'#000000'
        },
        h5: {
            color:'#000000'
        },
        h6: {
            color:'#000000'
        },
        fontFamily: 'Hind Madurai',
        allVariants: {
            color: '#606060'
        }
    },
    components: {
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: 'capitalize'
                }
            }
        },
        MuiAppBar:{
            defaultProps:{
                style:{
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight:'bold',
                    boxShadow: 'none',
                    borderBottom:'1px solid #dedede'
                },
            }
        },
        MuiChip:{
            defaultProps:{
                style:{
                    overflow: 'unset',
                    whiteSpace: 'initial'
                }
            },
        }
    }
});
