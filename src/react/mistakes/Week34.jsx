// Mistake: Registering an event and not deregistering

// Incorrect style object
import * as React from "react"

export function MyComponent() {
    return (
        <div style={{ width: 100 }}>
            Hello, again
        </div>
    )
}
