// Lowercase component name
import { useState } from "react";
import card from "./card";

function App() {
  return (
    <div>
      <card />
    </div>
  );
}

// Resource => https://www.youtube.com/watch?v=-yIsQPp31L0
// Mistake Not updating object state properly
export function LoginForm() {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });

    const handleEmailChange = (e) => {
        setFormState({ email: e.target.value });
    }

    const handlePasswordChange = (e) => {
        setFormState({ password: e.target.value });
    }

    return (
        <form>
            <input
                type="email"
                value={formState.email}
                onChange={handleEmailChange}
            />
            <input
                type="password"
                value={formState.password}
                onChange={handlePasswordChange}
            />
        </form>
    );
}
