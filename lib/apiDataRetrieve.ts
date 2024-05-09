import { BloodComponent } from "@prisma/client";
import { extractBloodComponentStocks } from "./bloodComponentStockExtractor";

export interface bloodBank {
  name: string;
  address: string;
  contactDetails: string;
  districtCode: string;
  category: string;
  type: string;
  [key: string]: BloodComponentTypes | string | undefined;
}

export interface BloodComponentTypes {
  A_POSITIVE: number;
  A_NEGATIVE: number;
  B_POSITIVE: number;
  B_NEGATIVE: number;
  AB_POSITIVE: number;
  AB_NEGATIVE: number;
  O_POSITIVE: number;
  O_NEGATIVE: number;
  OH_POSITIVE: number;
  OH_NEGATIVE: number;
}

export async function retrieveBloodComponentDataFromID(districtID: string, bloodComponentID: string, varname: BloodComponent) {
  const response = await fetch(
    `https://www.eraktkosh.in/BLDAHIMS/bloodbank/nearbyBB.cnt?hmode=GETNEARBYSTOCKDETAILS&stateCode=23&districtCode=${districtID}&bloodGroup=all&bloodComponent=${bloodComponentID}&lang=0&_=1715204421138`, 
    {
    "method": "GET"
    }
  ).then(res => res.json())

  const bloodBanks: bloodBank[] = []

  response.data.forEach((bloodbank: string[]) => {
    const bloodBankInfo = bloodbank[1];
    // const count = (bloodBankInfo.match(/\<br\/\>/g) || []).length;
    const splitString = bloodBankInfo.split("<br/>");
    const name = splitString[0];
    const address = splitString[1];
    const contactDetails = splitString[2];
    const BloodComponentStocks = extractBloodComponentStocks(bloodbank[3])
    bloodBanks.push(
      {
        name,
        address,
        contactDetails,
        districtCode: districtID,
        category: bloodbank[2],
        type: bloodbank[5],
        [varname] : BloodComponentStocks
      }
    )
  });

  return bloodBanks;
}