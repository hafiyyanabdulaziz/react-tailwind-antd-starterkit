import { Collapse, Table } from "antd";
import React, { useRef, useState } from "react";
import { ReactSortable } from "react-sortablejs";
const { Panel } = Collapse;

const dataSource = [
  {
    key: "3",
    name: "dfgfdgdf",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "1",
    name: "fdgfdgdf",
    age: 32,
    address: "10 Downing Street",
    type: "group",
  },
  {
    key: "sdsds",
    name: "cvsddsd",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "cdsds",
    name: "scsdfd",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "sfsfdf",
    name: "sdcdsd",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "sdcdsdsd",
    name: "dfdvfdf",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "dfvfdf",
    name: "ddvdvdfs",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "sdcdsd",
    name: "fdgfdgdf",
    age: 32,
    address: "10 Downing Street",
    type: "group",
  },
  {
    key: "vffd",
    name: "dfvfvfdd",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "fdvf",
    name: "dedfgdff",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "fcddscsc",
    name: "ffccddff",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "kjkhjkjjjddfre",
    name: "dfdhhgj",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "1sd",
    name: "fdgfdgdf",
    age: 32,
    address: "10 Downing Street",
    type: "group",
  },
  {
    key: "dfvfvd",
    name: "sdfvdff",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "sdvdfvdf",
    name: "dvfdvfd",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "sdcdfdf",
    name: "kdfgfd",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "dfdf",
    name: "sfdsvcds",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "frefdgfd",
    name: "sdfdcsd",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "dfgfdgf",
    name: "xdfcxd",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "1sdsdc",
    name: "fdgfdgdf",
    age: 32,
    address: "10 Downing Street",
    type: "group",
  },
  {
    key: "dfgfdfd",
    name: "sdsfds",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "xdfxdv",
    name: "xdfxdvxd",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "dfgfd",
    name: "Jodfvfdvfsdfdsdvn",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "dfd2",
    name: "dffdgfd",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "1sdfds",
    name: "fdgfdgdf",
    age: 32,
    address: "10 Downing Street",
    type: "group",
  },
];

const dataSourceChildren = [
  {
    key: "dfdf",
    name: "sdc",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "sdsd",
    name: "ttddf",
    age: 42,
    address: "10 Downing Street",
    type: "item",
  },
  {
    key: "sdcs",
    name: "eesss",
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
          // defaultActiveKey={["1"]}
        >
          <Panel
            // style={{ backgroundColor: "blue" }}
            className='p-0'
            header='Group'
            key='1'>
            <div className=''>
              <Table
                // className='bg-slate-500'
                // style={{ background: "red" }}
                // showHeader={false}
                // pagination={false}
                dataSource={dataSourceChildren}
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
  const [state, setState] = useState(dataSource);

  const Wrapper = (props) => {
    console.log("props wrapper", props);
    const { children, className } = props;
    return <tbody className={`${className} `}>{children}</tbody>;
    // <ReactSortable list={state} setList={setState}>

    // {/* {state.map((item) => (
    //   <div key={item.id}>{item.name}</div>
    // ))} */}
    // </ReactSortable>
  };

  const components = {
    body: {
      row: BodyRow,
      wrapper: Wrapper,
    },
  };

  return (
    <div>
      {/* <ReactSortable list={state} setList={setState}>
        <p>start</p>
        {state.map((item) => (
          <div key={item.key}>{item.name}</div>
        ))}
        <p>end</p>
      </ReactSortable> */}

      <Table
        bordered
        components={components}
        dataSource={state}
        columns={columns}
        onRow={(record, index) => {
          const attr = {
            index,
            record,
          };
          return attr;
        }}></Table>
      {/* </ReactSortable> */}
    </div>
  );
};

export default SimpleTable;
