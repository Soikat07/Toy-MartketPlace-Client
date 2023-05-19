import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
  return (
    <div className="mb-10 text-center">
      <div className="mb-8">
        <h3 className="text-5xl font-bold text-orange-500">Our Shop</h3>
        <p className="text-gray-600 font-semibold text-xl mt-2">
          You can select toys with category wise
        </p>
      </div>
      <Tabs className='w-3/4 mx-auto font-semibold text-xl'>
      {/* <TabList>
        <Tab>Car Toy Category</Tab>
      </TabList> */}
        <TabList>
          <Tab>Sports Car</Tab>
          <Tab>Truck Car</Tab>
          <Tab>Regular Car</Tab>
          <Tab>Police Car</Tab>
        </TabList>

        {/*Sub Category-1 */}
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>

        {/*Sub Category-2 */}
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>

        {/*Sub Category-3 */}
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>

        {/*Sub Category-4 */}
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;