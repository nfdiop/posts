import React, { useState } from 'react'

export const Form = () => {
    const [name, setName] = useState();

    return <>
        <label htmlFor='name-input'>Name {" "}</label>
        <input id="name-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <MyComponent />
    </>

}

const MyComponent = () => {
    return <div>Something here</div>
}
