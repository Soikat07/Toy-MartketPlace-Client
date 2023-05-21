import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabData from './TabData';

const ShopCategory = () => {
  const [toys, setToys] = useState([]);
  const [tab, setTab] = useState('Regular Car');

  useEffect(() => {
    fetch(`https://toy-market-place-server-three.vercel.app/${tab}`)
      .then(res => res.json())
      .then(data => setToys(data));
  }, [tab]);

  const handleTab = category => {
    setTab(category);
  };

  return (
    <div className="mb-10 text-center">
      <div className="mb-8" data-aos="fade-right"
      data-aos-duration="2000">
        <h3 className="text-4xl font-bold text-orange-500">Our Shop</h3>
        <p className="text-gray-600 font-semibold text-xl">
          You can select toys with category wise
        </p>
      </div>
      <Tabs className="w-3/4 mx-auto font-semibold lg:text-xl">
        <TabList>
          <Tab onClick={() => handleTab('Regular Car')}>Regular Car</Tab>
          <Tab onClick={() => handleTab('Sports Car')}>Sports Car</Tab>
          <Tab onClick={() => handleTab('Truck Car')}>Truck Car</Tab>
          <Tab onClick={() => handleTab('Police Car')}>Police Car</Tab>
        </TabList>

        {/*Sub Category-1 */}
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 space-y-4">
            {toys.slice(0, 2).map(toy => (
              <TabData toy={toy} key={toy._id} />
            ))}
          </div>
        </TabPanel>
        {/*Sub Category-2 */}
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 space-y-4">
            {toys.slice(0, 2).map(toy => (
              <TabData toy={toy} key={toy._id} />
            ))}
          </div>
        </TabPanel>

        {/*Sub Category-3 */}
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 space-y-4">
            {toys.slice(0, 2).map(toy => (
              <TabData toy={toy} key={toy._id} />
            ))}
          </div>
        </TabPanel>
        {/*Sub Category-4 */}
        <TabPanel>
          <div className="grid grid-cols-2 mt-8">
            {toys.slice(0, 2).map(toy => (
              <TabData toy={toy} key={toy._id} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
