"use client";

import { useEffect, useState } from "react"

import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { BloodAvailability, BloodComponent, BloodType, Category, Type } from "@prisma/client"
import { data } from "@/actions/getBloodBankData";

import allDistrictData from "@/data/districtList.json";

interface bloodbanklist {
  id: number;
  name: string;
  address: string;
  contact: string;
  districtCode: string;
  category: Category;
  type: Type;
  blood: BloodAvailability[]
}

export default function BloodBanksComponent() {
  const [districtFilter, setDistrictFilter] = useState("-1");
  const [bloodTypeFilter, setBloodTypeFilter] = useState<BloodType | undefined>();
  const [bloodComponentFilter, setBloodComponentFilter] = useState<BloodComponent>("WHOLE_BLOOD");
  const [loading, setLoading] = useState<boolean>(false);
  const [hasData, setHasData] = useState<boolean>(true);


  const [allBloodBanks, setAllBloodBanks] = useState<bloodbanklist[]>([]);

  async function fetchData() {
    setLoading(true);
    const bb = await data(districtFilter, bloodTypeFilter, bloodComponentFilter);
    setAllBloodBanks(bb);
    setLoading(false);
    let count = 0;
    bb.map((bloodbank) => {
      if (bloodbank.blood.length > 0 && bloodbank.blood.reduce((acc, obj) => acc + obj.quantity, 0) > 0)
        count += 1
    });
    if (count > 0) {
      setHasData(true);
    } else {
      setHasData(false);
    }
  }

  useEffect(() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const mapBloodTypes = {
    A_POSITIVE: "A+ve",
    A_NEGATIVE: "A-ve",
    B_POSITIVE: "B+ve",
    B_NEGATIVE: "B-ve",
    AB_POSITIVE: "AB+ve",
    AB_NEGATIVE: "AB-ve",
    O_POSITIVE: "O+ve",
    O_NEGATIVE: "O-ve",
    OH_POSITIVE: "Oh+ve",
    OH_NEGATIVE: "Oh-ve",
  }

  const mapBloodComponents = {
    WHOLE_BLOOD: "Whole Blood",
    SINGLE_DONOR_PLATELET: "Single Donor Platelet",
    SINGLE_DONOR_PLASMA: "Single Donor Plasma",
    SAGM_PACKED_RED_BLOOD_CELLS: "SAGM Packed Red Blood Cells",
    RANDOM_DONOR_PLATELETS: "Random Donor Platelets",
    PLATELETS_ADDITIVE_SOLUTIONS: "Platelets Additive Solutions",
    PLATELET_RICH_PLASMA: "Platelet Rich Plasma",
    PLATELET_CONCENTRATE: "Platelet Concentrate",
    PLASMA: "Plasma",
    PACKED_RED_BLOOD_CELLS: "Packed Red Blood Cells",
    LEUKOREDUCED_RBC: "Leukoreduced RBC",
    IRRADIATED_RBC: "Irradiated RBC",
    FRESH_FROZEN_PLASMA: "Fresh Frozen PLASMA",
    CRYOPRECIPITATE: "Cryoprecipitate",
    CRYO_POOR_PLASMA: "Cryo Poor Plasma",
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-5">Blood Availability Checker</h1>
      <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Label htmlFor="area">District</Label>
          {/* <Select className="w-full" id="area"> */}
          <Select onValueChange={(v) => {setDistrictFilter(v); console.log(v)}} defaultValue="-1">
            <SelectTrigger>
              <SelectValue placeholder="All Districts" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="-1">
                  All Districts
                </SelectItem>
                {allDistrictData.map(district => (
                  <SelectItem key={district.district_code} value={district.district_code}>
                    {district.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="blood-component">Blood Type</Label>
          {/* <Select className="w-full" id="blood-component"> */}
          <Select onValueChange={(v) => {v === "undefined" ? setBloodTypeFilter(undefined) : setBloodTypeFilter(v as BloodType)}}>
            <SelectTrigger>
              <SelectValue placeholder="All Blood Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="undefined">
                  All Blood Types
                </SelectItem>
                {Object.values(BloodType).map(bt => (
                  <SelectItem key={bt} value={bt}>
                    {mapBloodTypes[bt]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="blood-component">Blood Component</Label>
          {/* <Select className="w-full" id="blood-component"> */}
          <Select onValueChange={(v) => setBloodComponentFilter(v as BloodComponent)} defaultValue="WHOLE_BLOOD">
            <SelectTrigger>
              <SelectValue placeholder="Whole Blood" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.values(BloodComponent).map(c => (
                  <SelectItem key={c} value={c}>
                    {mapBloodComponents[c]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end">
          <Button onClick={() => fetchData()} className="w-full shadow bg-red-600 transition-colors hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 disabled:pointer-events-none disabled:opacity-50">Apply Filters</Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        {loading ? "Loading please wait" : hasData ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[35%]">Blood Bank</TableHead>
                  <TableHead className="w-[35%]">Address</TableHead>
                  <TableHead className="w-[30%]">Available Blood Types</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allBloodBanks.map((bloodbank) => (bloodbank.blood.length > 0 && bloodbank.blood.reduce((acc, obj) => acc + obj.quantity, 0) > 0 && (
                  <TableRow key={bloodbank.id}>
                    <TableCell><strong>{bloodbank.name}</strong><br/>{bloodbank.contact}</TableCell>
                    <TableCell>{bloodbank.address}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-2">
                        {bloodbank.blood.map(bt => (bt.quantity > 0 && (
                          <Badge key={bt.id}>{mapBloodTypes[bt.bloodType]}: {bt.quantity}</Badge>
                        )))}
                      </div>
                    </TableCell>
                  </TableRow>
                )))}
              </TableBody>
            </Table>
          ): "No data in the mentioned filters"
        }
        
      </div>
    </div>
  )
}