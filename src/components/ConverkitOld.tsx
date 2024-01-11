import { FormEventHandler, useCallback, useState } from 'react';

const ConvertkitSignupForm: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const name = 'email';
  const [success, setSuccess] = useState<boolean | undefined>();

  const onSubmit: FormEventHandler = useCallback(async (event) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const data = new FormData(target);
    const email = data.get(name);
    console.log(email);
    const res = await fetch('/api/ConvertkitSubscribe', {
      body: JSON.stringify({ email: email }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
    });

    const json_res = await res.json();
  }, []);

  if (success === false) {
    return <p>Apologies, an error occurred</p>;
  }

  if (success) {
    return <p>You&apos;re in! Thank you for subscribing.</p>;
  }

  return (
    <>
      <form
        target="_blank"
        className={`space-around flex w-full grow justify-center`}
        onSubmit={onSubmit}
      >
        <input
          type="email"
          className="TextInput w-full !rounded-r-none border-r-transparent py-1 text-sm hover:border-r-transparent md:w-80 md:text-base"
          name={name}
          aria-label="Your email address"
          placeholder="your@email.com"
          required
        />

        <button className="Button min-w-[6rem] rounded-l-none text-sm md:text-base">
          {children ?? 'Sign up'}
        </button>
      </form>

      <p className={'mt-2 text-center text-sm md:text-xs'}>
        Subscribe to our newsletter to receive updates
      </p>
    </>
  );
};

export default ConvertkitSignupForm;
