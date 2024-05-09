"use server";

import { db } from "@/lib/db";
import { BloodComponent, BloodType } from "@prisma/client";

export const data = async (districtFilter: string, bloodTypeFilter: BloodType | undefined, bloodComponentFilter: BloodComponent) => {
  if (districtFilter === "-1" && bloodTypeFilter === undefined) {
    const bloodBanks = await db.bloodBank.findMany({ include: {blood: { where: { bloodComponent: bloodComponentFilter } }} });
    return bloodBanks;
  } else if (districtFilter === "-1" && bloodTypeFilter !== undefined)  {
    const bloodBanks = await db.bloodBank.findMany({
      // where: { districtCode: districtFilter },
      include: {blood: { where: { bloodComponent: bloodComponentFilter, bloodType: bloodTypeFilter } }}
    });

    return bloodBanks;
  } else if (bloodTypeFilter !== undefined) {
    const bloodBanks = await db.bloodBank.findMany({
      where: { districtCode: districtFilter },
      include: {blood: { where: { bloodComponent: bloodComponentFilter, bloodType: bloodTypeFilter } }}
    });
    return bloodBanks;
  } else {
    const bloodBanks = await db.bloodBank.findMany({
      where: { districtCode: districtFilter },
      include: {blood: { where: { bloodComponent: bloodComponentFilter } }}
    });
    return bloodBanks;
  }
}