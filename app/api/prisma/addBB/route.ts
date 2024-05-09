// @ts-nocheck

import { db } from "@/lib/db";
import finalBloodBankData from "@/finalBloodBankData.json";
import { NextResponse } from "next/server";
import { BloodComponent } from "@prisma/client";

export async function GET() {
  // await db.bloodBank.createMany({
  //   data: finalBloodBankData.map((bloodbank) => ({
  //     name: bloodbank.name,
  //     address: bloodbank.address,
  //     contact: bloodbank.contactDetails,
  //     districtCode: bloodbank.districtCode,
  //     category: bloodbank.category === "Govt." ? "GOVT" : bloodbank.category === "Private" ? "PVT" : "RED_CROSS",
  //     type: bloodbank.type === "BSU" ? "BSU" : "BloodBank",
  //   }))
  // })

  for (const bloodbank of finalBloodBankData) {
    const db_bloodbank = await db.bloodBank.upsert({
      where: {
        address: bloodbank.address,
        name: bloodbank.name,
        contact: bloodbank.contactDetails
      },
      update: {},
      create: {
        address: bloodbank.address,
        name: bloodbank.name,
        contact: bloodbank.contactDetails,
        districtCode: bloodbank.districtCode,
        category: bloodbank.category === "Govt." ? "GOVT" : bloodbank.category === "Private" ? "PVT" : "RED_CROSS",
        type: bloodbank.type === "BSU" ? "BSU" : "BloodBank",
      }
    });
    const avl = Object.keys(bloodbank).filter(key => key in BloodComponent);
    avl.map(async key => {
      const bc = bloodbank[key];
      await db.bloodAvailability.createMany({
        data: Object.keys(bc).map(bloodtype => ({
          bloodBankId: db_bloodbank?.id,
          bloodType: bloodtype,
          bloodComponent: key,
          quantity: bc[bloodtype]
        }))
      })
    })
  }

  return NextResponse.json({"Test": "Success"})
}