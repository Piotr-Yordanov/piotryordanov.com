const ConvertKit = () => {
  return (
    <form
      action="https://app.convertkit.com/forms/6059740/subscriptions"
      className="seva-form formkit-form"
      method="post"
      data-sv-form="6059740"
      data-uid="60e76be1c3"
      data-format="inline"
      data-version="5"
      data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
    >
      <div className="formkit-background"></div>
      <div data-style="minimal">
        <ul
          className="formkit-alert formkit-alert-error"
          data-element="errors"
          data-group="alert"
        ></ul>

        <div className="">
          <input
            className="small mr-2 w-[200px] rounded-full border-2 border-slate-300 p-2 px-4 lg:w-[250px]"
            name="email_address"
            aria-label="Email "
            placeholder="Email Address"
            required=""
            type="email"
          />
          <button
            data-element="submit"
            className="small rounded-full border-2 border-black bg-black px-4 py-2 text-white no-underline hover:bg-gray-800"
          >
            <span className="">Subscribe</span>
          </button>
        </div>
        <div
          data-element="fields"
          data-stacked="false"
          className="seva-fields formkit-fields"
        ></div>
      </div>
    </form>
  );
};
export default ConvertKit;
