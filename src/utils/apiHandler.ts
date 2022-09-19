import type { NextApiResponse } from 'next';

function apiHandler(
  response: NextApiResponse,
  statusCode: number,
  responseJson: any
) {
  return response.status(statusCode).json(responseJson);
}

export default apiHandler;
