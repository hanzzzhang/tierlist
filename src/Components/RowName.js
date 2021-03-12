import Box from '@material-ui/core/Box';
import { Component } from 'react';
import './RowName.css';


class RowName extends Component {
    render() {
        return (
            <Box className="RowNameBox" color="text.primary" clone>
                <div>
                    <input type="text" className="RowNameInput" placeholder="None"></input>
                </div>
            </Box>
            

        );
    }
}


export default RowName;
