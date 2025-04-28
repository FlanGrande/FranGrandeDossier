import React, { useState, useEffect } from 'react';

function ThePerlness() {
    const [html, setHtml] = useState('');

    useEffect(() => {
        fetch('/game.html')
            .then(response => console.log(response.text()))
            .then(html => setHtml(html), console.log(html));
    }, []);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            HOLA
        </div>
    );
}

export default ThePerlness;