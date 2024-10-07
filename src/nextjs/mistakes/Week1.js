// Mistake: Calling getServerSideProps outside of a page component
// File: lib/data.js
export async function getServerSideProps() {
  const res = await fetch(
    'https://api.example.com/data'
)
  const data = await res.json()
  return { props: { data } }
}


// NextJS Mistake: forgetting to use "use client" in a client side component
// File: app/components/SimpleButton.js

export default function SimpleButton() {
    const handleClick = () => {
      alert('Button clicked!')
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    )
}
