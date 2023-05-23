export interface Response<TData = any> {
  success: boolean;
  data: TData;
}

export interface Data {
  now_playing: NowPlaying;
  list: Music[];
  control: Control;
}

export interface Control {
  voted_play: boolean;
  attendee_voted_play: boolean;
  attendee_count: number;
}

export interface Music {
  id: number;
  artwork_url: string;
  title: string;
  artist: string;
  queue_by: string;
  queue_at: Date;
  is_playing: boolean;
  is_owned: boolean;
}

export interface NowPlaying {
  artwork_url: string;
  title: string;
  artist: string;
}

export type MusicStateResponse = Response<Data>;
