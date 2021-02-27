import { action, observable } from "mobx";

export class EditSoilAndLandVM {
  @observable props;
  constructor(props: any) {
    this.props = props;
  }
  @observable landUseTable: any = [];
  @observable soilTable: any = [];
  @observable checkedSoilValues: any = [];
  @observable showSoilTable: boolean = true;
  @observable selectedItem: boolean = false;
  @observable selectAllSoilItems: boolean = false;

  @observable hydroGroupOptions: any = ["A", "B", "C", "D"];
  @observable landConditionOptions: any = ["Good", "Fair", "Poor", "N/A"];


//   @observable landUseOptions: any = [
//     "Fallow Bare Soil",
//     "Fallow Crop Residue Cover (CR)",
//     "Row Crops Contoured with Crop Residue( C + CR)",
//     "Row Crops Contoured and Terraced  with Crop Residue(C & T + CR)",
//     "Row Crops Contoured and Terraced C & T",
//     "Row Crops Contoured (C)",
//     "Row Crops Straight Row with Crop Residue (SR + CR)",
//     "Row Crops Straight Row (SR)",
//     "Small Grain Contoured with Crop Residue( C + CR)",
//     "Small Grain Contoured and Terraced  with Crop Residue(C & T + CR)",
//     "Small Grain Contoured and Terraced (C & T)",
//     "Small Grain Contoured (C)",
//     "Small Grain Straight Row with Crop Residue (SR + CR)",
//     "Small Grain Straight Row (SR)",
//     "Close Seeded Broadcast Legumes or Rotational Meadow Contoured and Terraced (C & T)",
//     "Close Seeded Broadcast Legumes or Rotational Meadow Contoured ( C )",
//     "Close Seeded Broadcast Legumes or Rotational Meadow Straight Row (SR)",
//     "Pasture or Grassland",
//     "Meadow or Continuous Grass Not Grazed Generally Hayed",
//     "Brush Forbs Grass Mix (With Brush Major Element)",
//     "Woods Grass Combination (Orchard or Tree Farm)",
//     "Woods Grazed Not Burned Some forest Litter",
//     "Woods Not Grazed Adequate litter and brush",
//     "Woods Heavily Grazed or Burned",
//     "Farmstead",
//     "Roads Dirt (Including Right of Way)",
//     "Roads Gravel (Including Right of Way)",
//     "Open Space Grass Cover 50 to 75 percent",
//     "Open Space Grass Cover greater than 75 percent",
//     "Open Space, Grass Cover less than 50 percent",
//     "Roads Paved with Curbs and Storm Sewers (Excluding Right of Way)",
//     "Roads Paved with Open Ditches (Including Right of Way)",
//     "Paved Parking Lots Roofs Driveways",
//     "Urban Districts Commercial and Business",
//     "Urban Districts Industrial",
//     "Residential Districts - 1 acre",
//     "Residential Districts - 1/2 acre",
//     "Residential Districts - 1/4 acre",
//     "Residential Districts - 1/8 acre",
//     "Residential Districts - 2 acre",
//     "Newly Graded area (Pervious only No Vegetation)",
//     "Surface Water - Lakes and Ponds",
//     "Wetland - Vegetated",
//     "Wetland - Open Water",
//   ];

  @action.bound toggleTables() {
    this.showSoilTable = !this.showSoilTable;
  }
  @action.bound initTables(soilTable: any, landTable: any) {
    this.soilTable = soilTable;
    this.landUseTable = landTable;

    for (let i = 0; i < this.soilTable.length; i++) {
      let selected = { selected: false }
      this.checkedSoilValues.push(selected)
    }
    console.log(this.checkedSoilValues[2])
  }

  @action.bound handleInputChange(i: number) {
    // this.checkedSoilValues[i].selected = !this.checkedSoilValues[i].selectedItem
    this.checkedSoilValues[i].selected = !this.checkedSoilValues[i].selected
    console.log(this.checkedSoilValues[i].selected)
    }
    // const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    // const name = target.name;
    // const index = +target.id.replace(name, "");
    // this.rainfallDischargeTable[index][name] = value;

//   @action.bound handleInputChange(event: any, index: number, table: any) {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;
//     table[index].attributes[name] = value;
//     console.log(table);
//     this.props.callback(this.soilTable, this.landUseTable);
//   }

@action.bound toggleSelectAll(value: any) {
  this.selectAllSoilItems = value;
  if (this.selectAllSoilItems) {
    this.checkedSoilValues.forEach((el: any) => el.selected = true)
  } else {
    this.checkedSoilValues.forEach((el: any) => el.selected = false)
  }
  console.log(this.selectAllSoilItems)
}
  // @action.bound handleCheckboxChange(item: any) {
  //   console.log(item)
  // }

//   @action.bound boxCheck(i: any, value: any, table: any) {
//     console.log(table)
//     const item = table[i]
//     item.selected = !value
//     // const box = (<HTMLInputElement>document.getElementById('select' + i))
//     // box!.checked = true;
//     // console.log(box!.checked)
//   }

//   @action.bound errorClass(key, value) {
//     let validValue = false;
//     if (key === "HYDGROUP") {
//       if (this.hydroGroupOptions.includes(value)) validValue = true;
//     } else if (key === "LANDUSE") {
//       if (this.landUseOptions.includes(value)) validValue = true;
//     } else if (key === "CONDITION") {
//       if (this.landConditionOptions.includes(value)) validValue = true;
//     }
//     return validValue ? "" : " usa-input--error";
//   }
}
