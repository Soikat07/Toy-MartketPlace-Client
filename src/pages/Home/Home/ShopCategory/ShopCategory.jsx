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
      <Tabs>
        <TabList>
          <Tab>Sports Toy Car</Tab>
          <Tab>Regular Toy Car</Tab>
          <Tab>Police Toy Car</Tab>
        </TabList>

        {/* Category-1 */}
        <TabPanel>
          <div className="w-3/4 mx-auto">
            <div className="card card-side bg-base-100 shadow-xl mb-10">
              <figure>
                <img
                  src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* Category-2 */}
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>

        {/* Category-3 */}
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;