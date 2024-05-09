import { bloodBank } from "./apiDataRetrieve";

export function mergeBloodBankData(arr1: bloodBank[], arr2: bloodBank[]) {
  // Create a map to store merged data
  const mergedMap = new Map();

  // Merge data from arr1
  arr1.forEach(item => {
      const { name, address, contactDetails, ...rest } = item;
      const existing = mergedMap.get(address);
      if (!existing) {
          mergedMap.set(address, { name, address, contactDetails, ...rest });
      } else {
          // Ensure name, address, and contactDetails are the same
          if (
              existing.name === name &&
              existing.contactDetails === contactDetails
          ) {
              mergedMap.set(address, { ...existing, ...rest });
          } else {
              console.warn(`Conflict for ${name}, ${address}.`);
          }
      }
  });

  // Merge data from arr2
  arr2.forEach(item => {
      const { name, address, contactDetails, ...rest } = item;
      const existing = mergedMap.get(address);
      if (!existing) {
          mergedMap.set(address, { name, address, contactDetails, ...rest });
      } else {
          // Ensure name, address, and contactDetails are the same
          if (
              existing.name === name &&
              existing.contactDetails === contactDetails
          ) {
              mergedMap.set(address, { ...existing, ...rest });
          } else {
              console.warn(`Conflict for ${name}, ${address}.`);
          }
      }
  });

  const mergedArray = Array.from(mergedMap.values());

  return mergedArray;
}