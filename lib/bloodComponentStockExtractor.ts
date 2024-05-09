export function extractBloodComponentStocks(str: string) {
  const count = (str.match(/text-danger/g) || []).length;
  if (count > 0) {
    return {
      "A_POSITIVE": 0,
      "A_NEGATIVE": 0,
      "B_POSITIVE": 0,
      "B_NEGATIVE": 0,
      "AB_POSITIVE": 0,
      "AB_NEGATIVE": 0,
      "O_POSITIVE": 0,
      "O_NEGATIVE": 0,
      "OH_POSITIVE": 0,
      "OH_NEGATIVE": 0,
    }
  } else {
    let A_POSITIVE = 0, A_NEGATIVE = 0, B_POSITIVE = 0, B_NEGATIVE = 0, AB_POSITIVE = 0, AB_NEGATIVE = 0, O_POSITIVE = 0, O_NEGATIVE = 0, OH_POSITIVE = 0, OH_NEGATIVE = 0;
    const bloodTypeStocks = str.split("Available, ")[1].split("</p>")[0].split(", ");
    bloodTypeStocks.forEach(bloodTypeStock => {
      switch(bloodTypeStock.split(":")[0]) {
        case "AB-Ve":
          AB_NEGATIVE = parseInt(bloodTypeStock.split(":")[1])
          break;
        case "AB+Ve":
          AB_POSITIVE = parseInt(bloodTypeStock.split(":")[1])
          break;
        case "A-Ve":
          A_NEGATIVE = parseInt(bloodTypeStock.split(":")[1])
          break;
        case "A+Ve":
          A_POSITIVE = parseInt(bloodTypeStock.split(":")[1])
          break;
        case "B-Ve":
          B_NEGATIVE = parseInt(bloodTypeStock.split(":")[1])
          break;
        case "B+Ve":
          B_POSITIVE = parseInt(bloodTypeStock.split(":")[1])
          break;
        case "O-Ve":
          O_NEGATIVE = parseInt(bloodTypeStock.split(":")[1])
          break;
        case "O+Ve":
          O_POSITIVE = parseInt(bloodTypeStock.split(":")[1])
          break;
        case "Oh-VE":
          OH_NEGATIVE = parseInt(bloodTypeStock.split(":")[1])
          break;
        case "Oh+VE":
          OH_POSITIVE = parseInt(bloodTypeStock.split(":")[1])
          break;
      }
    })
    return {
      "A_POSITIVE": A_POSITIVE, 
      "A_NEGATIVE": A_NEGATIVE, 
      "B_POSITIVE": B_POSITIVE, 
      "B_NEGATIVE": B_NEGATIVE, 
      "AB_POSITIVE": AB_POSITIVE, 
      "AB_NEGATIVE": AB_NEGATIVE, 
      "O_POSITIVE": O_POSITIVE, 
      "O_NEGATIVE": O_NEGATIVE, 
      "OH_POSITIVE": OH_POSITIVE, 
      "OH_NEGATIVE": OH_NEGATIVE, 
    }
  }
}