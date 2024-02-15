import { useCallback, useState } from 'react';
import { ThxLayout } from './common/ThxLayout';
import { BoxesGrid } from './variant-5/BoxesGrid';

export const App = () => {
  const [thxShow, setThx] = useState(false);

  const showThx = useCallback(() => {
    setThx(true);
  }, []);

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <div className="relative">
      <h1 className="text-lg font-medium pt-5 px-5 pb-3 text-black">
        Выберите предложения, которыми планируете воспользоваться
      </h1>

      <BoxesGrid showThx={showThx} />
    </div>
  );
};
