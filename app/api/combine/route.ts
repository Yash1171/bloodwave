import { bloodBank, retrieveBloodComponentDataFromID } from "@/lib/apiDataRetrieve";
import { mergeBloodBankData } from "@/lib/mergeBloodBankData";
import { NextResponse } from "next/server";
import DistrictData from "@/data/districtList.json";
import fs from 'fs';
import { BloodComponent } from "@prisma/client";

const BloodComponents = [
  { name: BloodComponent.WHOLE_BLOOD, id: "11" },
  { name: BloodComponent.SINGLE_DONOR_PLATELET, id: "14" },
  { name: BloodComponent.SINGLE_DONOR_PLASMA, id: "18" },
  { name: BloodComponent.SAGM_PACKED_RED_BLOOD_CELLS, id: "28" },
  { name: BloodComponent.RANDOM_DONOR_PLATELETS, id: "23" },
  { name: BloodComponent.PLATELETS_ADDITIVE_SOLUTIONS, id: "24" },
  { name: BloodComponent.PLATELET_RICH_PLASMA, id: "16" },
  { name: BloodComponent.PLATELET_CONCENTRATE, id: "20" },
  { name: BloodComponent.PLASMA, id: "19" },
  { name: BloodComponent.PACKED_RED_BLOOD_CELLS, id: "12" },
  { name: BloodComponent.LEUKOREDUCED_RBC, id: "30" },
  { name: BloodComponent.IRRADIATED_RBC, id: "29" },
  { name: BloodComponent.FRESH_FROZEN_PLASMA, id: "13" },
  { name: BloodComponent.CRYOPRECIPITATE, id: "17" },
  { name: BloodComponent.CRYO_POOR_PLASMA, id: "21" },
];

export async function GET() {
  let finalArray: bloodBank[] = [];

  for (const district of DistrictData) {
    for (const bloodComponent of BloodComponents) {
      try {
        const data = await retrieveBloodComponentDataFromID(district.district_code, bloodComponent.id, bloodComponent.name);
  
        if (data && data.length > 0) {
          finalArray = mergeBloodBankData(finalArray, data);
        } else {
          console.log(`No Data in ${district.name} for ${bloodComponent.name}`)
        }
      } catch (err) {
        console.log("Here: ", err)
      }
  
    }
  }

  fs.writeFileSync('finalBloodBankData.json', JSON.stringify(finalArray, null, 2))

  console.log("Wrote the file!!!!");

  return NextResponse.json(finalArray);
}
