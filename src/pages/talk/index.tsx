'use client';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

import { siteConfigs } from '@/configs/siteConfigs';

function Profile() {
  useEffect(() => {
    (async function () {
      const Cal = await getCalApi();
      Cal('ui', {
        hideEventTypeDetails: false,
        layout: 'column_view',
        theme: 'light',
      });
    })();
  }, []);

  return (
    <div className="container pt-12">
      <Cal
        style={{ height: '600px', overflow: 'scroll' }}
        className="w-full "
        calLink={siteConfigs.calendarLink.split('.com/')[1]}
      ></Cal>
    </div>
  );
}
export default Profile;
