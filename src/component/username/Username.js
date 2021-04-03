import { useState } from 'react';

function Username() {
    const [username, setValue] = useState("");

    // const textChangeHandler = (event) => {
    //     setValue(event.target.value);
    // }

    return (
        <>
            <p>UserName:</p>
            <input type="text"
                value={username}
                onChange={(e) => setValue(e.target.value)} />
        </>);
}

export default Username;