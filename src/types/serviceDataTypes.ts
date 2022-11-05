export interface PhotosData {
  total: number;
  total_pages: number;
  results: PhotoData[];
}

export interface PhotoData {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string | null;
  user: {
    id: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    instagram_username: string;
    twitter_username: string;
    portfolio_url: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
    };
  };
  current_user_collections: [];
  tags: PhotoTags;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
  };
}

export type PhotoTags = { title: string }[];

export interface PhotosErrors {
  errors: string[];
}

export interface QueryStringParameters {
  query: string;
  order_by?: string;
  per_page?: string;
  page?: string;
}

export interface PhotoCardData
  extends Pick<
    PhotoData,
    'id' | 'created_at' | 'width' | 'height' | 'likes' | 'description' | 'tags'
  > {
  imgUrl: string;
  userName: string;
}
