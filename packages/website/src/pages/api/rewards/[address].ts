import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.query;
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "public");
  // //Read the json data file data.json
  const fileContents = await fs
    .readFile(jsonDirectory + "/rewards.json", "utf8")
    
  //Return the content of the data file in json format
  res
    .status(200)
    .json(
      JSON.parse(fileContents).filter(
        (v) => v.address.toLowerCase() === (address as string).toLowerCase()
      )
    );
}