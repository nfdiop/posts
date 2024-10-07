// Mistake: Using useFormStatus hook inside a form
function LoginForm({ action }) {
  const { pending } = useFormStatus();

  return (
    <form action={action}>
      {/* Rest of component */}
    </form>
  );
}
