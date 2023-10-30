import { FeatureNav } from "./feature-nav";

export const FeatureBody = ({current, children}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col my-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sm:flex-row">
      <div className="w-full sm:w-1/4 p-4 py-20">
        <FeatureNav current={current} />
      </div>
      <div className="w-full sm:w-3/4 p-4 py-10">
       {children}
      </div>
    </div>
  );
};
