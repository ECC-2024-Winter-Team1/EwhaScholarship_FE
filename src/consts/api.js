export const COMMON_API_URL =
  "http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api";

export const API_URL = {
  LOGIN: `${COMMON_API_URL}/auth/login`,
  JOIN: `${COMMON_API_URL}/auth/register`,
  SCHOLARSHIP: `${COMMON_API_URL}/scholarships`,
  BOOKMARK: `${COMMON_API_URL}/bookmarks`,
  CUSTOM_SCHOLARSHIP: `${COMMON_API_URL}/user`,
};
