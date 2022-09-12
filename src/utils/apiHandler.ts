import type { NextApiResponse } from 'next';

function errorHandler(
  response: NextApiResponse,
  statusCode: number,
  responseJson: any
) {
  return response.status(statusCode).json(responseJson);
}

export default errorHandler;
