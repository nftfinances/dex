import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import DashboardLayout from '@/layouts/_dashboard';
import AnchorLink from '@/components/ui/links/anchor-link';
import Button from '@/components/ui/button';
import NotificationCard, {
  NotificationCardProps,
} from '@/components/ui/notification-card';

//images
import User1 from '@/assets/images/avatar/df_logo.png';
import Image from '@/components/ui/image';
import { url } from 'inspector';

const notifications = [
  {
    id: 1,
    type: 'Started',
    actor: {
      name: 'DREAM FINANCE ADMIN',
      avatar: User1,
    },
    time: 'Just Now',
    url: '#',
    notifier: 'with you',
  },
];

const NotificationPage: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="Notifications"
        description="Criptic - React Next Web3 NFT Crypto Dashboard Template"
      />
      <DashboardLayout>
        <div className="mx-auto w-[660px] max-w-full">
          <div className="mb-7 flex items-center justify-between gap-6">
            <h2 className="text-center text-lg font-medium text-gray-900 dark:text-white sm:text-xl lg:text-2xl">
              Notifications
            </h2>
            <Button
              color="white"
              variant="transparent"
              size="mini"
              shape="rounded"
            >
              <span className="text-xs tracking-tighter">Mark all as read</span>
            </Button>
          </div>

          {notifications.map((notification) => {
            const notificationItem = notification as NotificationCardProps;
            return (
              <NotificationCard key={notification.id} {...notificationItem} />
            );
          })}
        </div>
      </DashboardLayout>
    </>
  );
};

export default NotificationPage;
