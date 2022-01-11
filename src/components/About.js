import React,{ useContext, useEffect } from 'react';
import NoteContext from '../context/notes/NoteContext';

const About = () => {
    const usingContext = useContext(NoteContext);
    // useEffect(() => {
    //     usingContext.updateState();
    //     // eslint-disable-next-line
    // }, [])
    return (
     <div>
         {/* This is about {usingContext.state.name} and she is in class {usingContext.state.class} */}
         <h1>You're inside about page</h1>
     </div>
    )
}

export default About;
