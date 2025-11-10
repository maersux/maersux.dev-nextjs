export type Platforms = 'discord' | 'github' | 'steam' | 'twitch';

export type IconLinkItem = {
  username: string;
  size: number;
  platform: Platforms;
};
