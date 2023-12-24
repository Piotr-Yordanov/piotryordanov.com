import CustomLink from '@/components/CustomLink';

export default function PostCTA({ children }: Props) {
  return (
    <div className="mt-20 rounded-lg border-2 bg-white p-8 font-lato">
      <div className="text-xl font-bold">
        Whenever you're ready, there are 4 ways I can help you:
      </div>
      <ul className="list-decimal text-lg">
        <li>
          <CustomLink
            href="https://google.com"
            className="text-blue-500 hover:underline"
          >
            Now this is a story all about how, my life got flipped-turned upside
          </CustomLink>
        </li>
        <li>
          Now this is a story all about how, my life got flipped-turned upside
        </li>
      </ul>
    </div>
  );
}
