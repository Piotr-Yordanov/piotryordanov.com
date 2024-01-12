import CustomLink from '@/components/CustomLink';

export default function PostCTA({ children }: Props) {
  return (
    <div className="mt-20 rounded-lg border-2 bg-white p-8 font-lato">
      <div className="text-xl font-bold">
        Whenever you're ready, there are 3 ways I can help you:
      </div>
      <ul className="mt-4 list-decimal pl-8 text-lg">
        <li>
          Subscribe to my
          <CustomLink
            href="/newsletter"
            className="ml-1 text-primary hover:underline"
          >
            Newsletter
          </CustomLink>
        </li>
        <li>
          <CustomLink
            href="/talk"
            className="mr-1 text-primary hover:underline"
          >
            Hire me
          </CustomLink>
          to help you solve your quantitative trading challenges.
        </li>
        <li>
          Check out my trading
          <CustomLink
            href="/trading"
            className="ml-1 text-primary hover:underline"
          >
            products
          </CustomLink>
        </li>
      </ul>
    </div>
  );
}
