import { Component } from 'react'
import { Box, CircularProgress } from '@mui/material';


export class Loading extends Component {
    render() {
        return (
            <>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{height:600}}>
                <CircularProgress size={36}/>
            </Box>
            </>
        )
    }
}

export default Loading