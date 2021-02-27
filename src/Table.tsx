import React, { useRef } from "react";
import { observer } from "mobx-react";
import { EditSoilAndLandVM } from "./TableVM";
import mockLand from './landmock.json';
import mockSoil from './soilmock.json'

const EditSoilAndLandComponent = (props: any) => {
  // create a view-model that will persist for the lifetime of the component
  const vm = useRef(new EditSoilAndLandVM(props)).current;
  // React.useEffect(() => {
  //   set table state with props
  //   vm.initTables(props.soilArray, props.landArray);
  //   props.callback(vm.soilTable, vm.landUseTable);
  // }, [props]);

  React.useEffect(() => {
    vm.initTables(mockSoil.value.features, mockLand.value.features)
    console.log(vm.soilTable)
  }, [vm])

  return (
    <div className="table-container">
      <div>
        <div className="rcn-top-nav bg-white">
        </div>
      </div>
      {/* {vm.showSoilTable ? ( */}
          <div className="table-holster">
          <table className="table-sm">
            <thead className="table-head">
              <tr>
                <th className="p-3">
                  <input
                    className="usa-checkbox__input"
                    data-behavior="select-table-row"
                    id="selectAll"
                    type="checkbox"
                    name="selectAll"
                    value="selectAll"
                    // checked={vm.selectAllItems}
                    onChange={() => {
                      vm.toggleSelectAll(!vm.selectAllSoilItems)
                    }}
                  />
                  <label
                    className="usa-checkbox__label"
                    htmlFor="selectAll"
                  ></label>
                </th>
                <th className="table-headers">Object ID</th>
                {/* <p>{vm.checkedSoilValues[4].selected ? 'item 4 is true' : 'item 4 is false'}</p> */}
                <th className="table-headers">Hydro Group</th>
                <th className="table-headers">Shape Area</th>
                {/* <th className="p-3 table-headers">{">"}</th> */}
                <button onClick={() => {
                  vm.checkedSoilValues[2].selected = !vm.checkedSoilValues[2].selected
                  console.log(vm.checkedSoilValues[2].selected)
                }}>Click me</button>
              </tr>
            </thead>
            <tbody className="land-and-soil-table">
              {vm.soilTable
                .map((item: any, i: number) => {
                  return (
                    <tr id={"row" + i} key={"key" + i}>
                      <td>
                        <div className="input-container">
                          <input
                            className="usa-checkbox__input"
                            id={"soilSelect" + i}
                            type="checkbox"
                            name="select"
                            checked={vm.selectAllSoilItems}
                            value="select"
                            onChange={() => {
                              vm.handleInputChange(i)
                            }}
                          />
                          {/* <button onClick={() => console.log(vm.soilTable)}>click me</button> */}
                          <label
                            className="usa-checkbox__label"
                            htmlFor={"select" + i}
                          ></label>
                          
                        </div>
                      </td>
                      <td className="p-3">{item.attributes.OBJECTID}</td>
                      {/* <td>{item.attributes.HYDGROUP}</td> */}
                      <td>

                      </td>
                      <td className="p-3">
                        {item.attributes.SHAPE_Area.toFixed(2)}
                      </td>
                      <td className="p-3">{">"}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
      {/* ) : ( */}
          <table className="table-sm">
            <thead className="table-head">
              <tr>
                <th className="p-3">
                  <input
                    className="usa-checkbox__input"
                    data-behavior="select-table-row"
                    id="selectAll"
                    type="checkbox"
                    name="selectAll"
                    value="selectAll"
                  />
                  <label
                    className="usa-checkbox__label"
                    htmlFor="selectAll"
                  ></label>
                </th>
                <th className="table-headers">Object ID</th>
                <th className="table-headers">Land Use</th>
                <th className="table-headers">Condition</th>
                <th className="table-headers">Shape Area</th>
                <th className="p-3 table-headers">{">"}</th>
              </tr>
            </thead>
            <tbody className="land-and-soil-table">
              {vm.landUseTable
                .map((item: any, i: number) => {
                  return (
                    <tr id={"row" + i} key={"key" + i}>
                      <td>
                        <div className="input-container">
                          <input
                            className="usa-checkbox__input"
                            data-behavior="select-table-row"
                            id={"select" + i}
                            type="checkbox"
                            name="select"
                            value="select"
                            onChange={(e) => {
                              const value = e.target.checked
                              console.log(item)
                              // vm.boxCheck(i, value, vm.landUseTable)
                            }}
                          />
                          <label
                            className="usa-checkbox__label"
                            htmlFor={"select" + i}
                          ></label>
                        </div>
                      </td>
                      <td className="p-3">{item.attributes.OBJECTID}</td>
                      
                      <td className="p-3">
                        {item.attributes.SHAPE_Area.toFixed(2)}
                      </td>
                      <td className="p-3">{">"}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          </div>
      {/* )} */}
    </div>
  );
};

// export a ButtonComponent wrapped in observer - whenever the clickCount is changed, ButtonComponent will be re-rendered
export const EditSoilAndLand = observer(EditSoilAndLandComponent);
