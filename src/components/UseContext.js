import { useState } from 'react';
import Page from './Page';
import { ThemeContext } from '../context/ThemaContext';

function UseContext() {
    const [isDark, setIsDark] = useState(false);

    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            <Page/>
        </ThemeContext.Provider>
    )
}

export default UseContext;