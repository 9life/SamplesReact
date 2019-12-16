import React, { useState , useEffect} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';


export default function Home(props) {
    const [labelP, setLabelP] = useState('baobab');
    const [msg, setMsg] = useState('');
    
    function sayHello () {
         alert("Wow! Snow!");        
        setLabelP("snow");
    }
    return (
        <>
            <Button variant="contained" color="primary" >
                Primary
            </Button>
            <IconButton color="secondary" aria-label="add an alarm" onClick={sayHello}>
                <AcUnitRoundedIcon />
            </IconButton>
            <p
                id="labelExample"
            >
             {labelP}
            </p>
        </>
    )
}