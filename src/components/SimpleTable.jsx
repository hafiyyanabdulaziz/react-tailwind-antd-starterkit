import { Collapse, Table } from "antd";
import React, { useRef } from "react";
const { Panel } = Collapse;

const dataSource = [
  {
    key: "3",
    name: "John",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
    type: "group",
    // children: [
    //   {
    //     key: "100",
    //     name: "Mike",
    //     age: 32,
    //     address: "10 Downing Street",
    //   },
    // ],
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const BodyRow = (props) => {
  console.log("props", props);
  //   const ref = useRef(null);
  if (props.record.type === "group") {
    return (
      <td colspan='3'>
        <Collapse
          className='bg-yellow-50'
          expandIconPosition='end'
          defaultActiveKey={["1"]}>
          <Panel
            // style={{ backgroundColor: "blue" }}
            className='p-0'
            header='Group'
            key='1'>
            <div className='bg-yellow-50'>
              <Table
                // className='bg-slate-500'
                style={{ background: "red" }}
                showHeader={false}
                pagination={false}
                dataSource={dataSource}
                columns={columns}
              />
            </div>

            {/* <tr {...props}></tr> */}
          </Panel>
        </Collapse>
      </td>
    );
  }

  return (
    <tr
      //   ref={ref}
      // className={`${className}${isOver ? dropClassName : ""}`}
      //   style={{
      //     cursor: "move",
      //     ...style,
      //   }}
      {...props}
    />
  );
};

const SimpleTable = () => {
  const components = {
    body: {
      row: BodyRow,
    },
  };

  return (
    <div>
      <Table
        bordered
        components={components}
        dataSource={dataSource}
        columns={columns}
        onRow={(record, index) => {
          const attr = {
            index,
            record,
          };
          return attr;
        }}
      />
    </div>
  );
};

export default SimpleTable;
