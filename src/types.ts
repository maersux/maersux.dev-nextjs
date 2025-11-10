export type Platforms = 'discord' | 'github' | 'twitch';

export type IconLinkItem = {
  username: string;
  size: number;
  platform: Platforms;
};
