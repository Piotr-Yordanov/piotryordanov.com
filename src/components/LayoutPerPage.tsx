import { ArticleJsonLd } from 'next-seo';

import { siteConfigs } from '@/configs/siteConfigs';

type Props = {
  children: React.ReactNode;
};

const LayoutPerPage = ({ children }: Props) => {
  return (
    <div className="">
      <ArticleJsonLd
        type="Blog"
        url={siteConfigs.fqdn}
        title={siteConfigs.title}
        images={[siteConfigs.bannerUrl]}
        datePublished={siteConfigs.datePublished}
        authorName={siteConfigs.author}
        description={siteConfigs.description}
      />
      {children}
    </div>
  );
};

export default LayoutPerPage;
