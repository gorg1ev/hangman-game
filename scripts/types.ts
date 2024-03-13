type Stats = {
  win: number;
  lose: number;
};

type StatsUpdate = 'WIN' | 'LOSE';

type WordType = {
  value: string;
  wordLen: number;
  attemps: number;
};

type LanguageType = {
  MKD: string;
  ENG: string;
};

const LanguageFlags: LanguageType = {
  MKD: '🇲🇰',
  ENG: '🇬🇧',
};

const Language: LanguageType = {
  MKD: 'MKD',
  ENG: 'ENG',
};

export { Stats, StatsUpdate, WordType, LanguageFlags, Language };
