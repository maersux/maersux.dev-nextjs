import { IconLink } from '@/components/iconLink';
import { MainHeading } from '@/components/header';
import { Platforms } from '@/types';

type SocialLink = {
  username: string;
  platform: Platforms;
};

export default function Home() {
  const socials: SocialLink[] = [
    {
      platform: 'discord',
      username: '689580996856774667'
    },
    {
      platform: 'github',
      username: 'maersux'
    },
    {
      platform: 'steam',
      username: 'maersux'
    },
    {
      platform: 'twitch',
      username: 'maersux'
    }
  ];

  return (
    <main className='min-h-dvh flex flex-col items-center p-12 md:p-24'>
      <div className='w-96 max-w-[90%] flex flex-col gap-8'>
        <MainHeading />
        <div className='flex flex-row items-center justify-center gap-4'>
          {socials.map(({ platform, username }) => (
            <IconLink
              key={`${platform}-${username}`}
              username={username}
              platform={platform}
              size={32}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
